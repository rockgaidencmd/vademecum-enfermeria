/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — activation.js
   Puerta de activación por código (offline, sin backend).
   El código se valida contra hashes SHA-256 con salt.
   Una vez activado el dispositivo, no se vuelve a pedir.
═══════════════════════════════════════════════════════ */

'use strict';

(function () {
  const SALT = 'vademecum-enf::v1::activacion';
  const LS_KEY = 'vade_activated';

  const isActivated = () => {
    try { return localStorage.getItem(LS_KEY) === '1'; } catch { return false; }
  };

  // Normaliza cualquier entrada a formato PCT-XXXX-XXXX-XXXX
  function normalizeCode(input) {
    const up = (input || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (up.length === 15 && up.startsWith('PCT')) {
      return `${up.slice(0, 3)}-${up.slice(3, 7)}-${up.slice(7, 11)}-${up.slice(11, 15)}`;
    }
    return (input || '').trim().toUpperCase();
  }

  async function sha256Hex(str) {
    const data = new TextEncoder().encode(str);
    const buf = await crypto.subtle.digest('SHA-256', data);
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async function isValidCode(rawInput) {
    const code = normalizeCode(rawInput);
    if (!/^PCT-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) return false;
    const hashes = window.ACTIVATION_HASHES || [];
    const hash = await sha256Hex(SALT + code);
    return hashes.includes(hash);
  }

  // Continúa el flujo normal de arranque (aviso legal) tras activar
  function continueAfterActivation() {
    if (typeof window.showDisclaimerModal === 'function') {
      window.showDisclaimerModal();
    }
  }

  function buildGate() {
    const gate = document.createElement('div');
    gate.className = 'activation-gate';
    gate.innerHTML = `
      <div class="act-box" role="dialog" aria-modal="true" aria-labelledby="actTitle">
        <div class="act-brand">
          <img src="./icono-192.png" alt="MediShort360" class="act-logo"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
          <div class="act-cross" style="display:none;"><span></span><span></span></div>
        </div>
        <div class="act-badge">ACCESO PROTEGIDO</div>
        <h2 id="actTitle" class="act-title">Activa tu aplicación</h2>
        <p class="act-sub">Introduce tu <strong>código de activación</strong> para desbloquear el Vademécum. Solo se pide una vez en este dispositivo.</p>

        <form class="act-form" id="actForm" autocomplete="off">
          <input
            type="text"
            id="actInput"
            class="act-input"
            placeholder="PCT-XXXX-XXXX-XXXX"
            aria-label="Código de activación"
            autocomplete="off"
            autocapitalize="characters"
            autocorrect="off"
            spellcheck="false"
            inputmode="text"
            maxlength="30"
          />
          <div class="act-error" id="actError" role="alert" aria-live="assertive"></div>
          <button type="submit" class="act-btn" id="actBtn">Activar</button>
        </form>

        <p class="act-help">¿No tienes un código? Solicítalo a quien te compartió la aplicación.</p>
      </div>
    `;
    return gate;
  }

  function showGate() {
    const gate = buildGate();
    document.body.appendChild(gate);
    document.body.style.overflow = 'hidden';

    const form = gate.querySelector('#actForm');
    const input = gate.querySelector('#actInput');
    const btn = gate.querySelector('#actBtn');
    const errorEl = gate.querySelector('#actError');

    setTimeout(() => input.focus(), 350);

    // Formateo visual en vivo: agrupa en bloques de 4 con guiones
    input.addEventListener('input', () => {
      errorEl.textContent = '';
      gate.classList.remove('act-shake');
      let up = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (up.length > 15) up = up.slice(0, 15);
      let out = up;
      if (up.length > 3) {
        const rest = up.slice(3).match(/.{1,4}/g) || [];
        out = up.slice(0, 3) + (rest.length ? '-' + rest.join('-') : '');
      }
      input.value = out;
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (btn.disabled) return;
      errorEl.textContent = '';
      btn.disabled = true;
      btn.textContent = 'Verificando…';

      let ok = false;
      try {
        ok = await isValidCode(input.value);
      } catch (err) {
        ok = false;
      }

      if (ok) {
        try {
          localStorage.setItem(LS_KEY, '1');
          localStorage.setItem('vade_activated_at', new Date().toISOString());
        } catch {}
        btn.textContent = '¡Activado! ✓';
        gate.classList.add('act-success');
        setTimeout(() => {
          document.body.style.overflow = '';
          gate.remove();
          continueAfterActivation();
        }, 700);
      } else {
        btn.disabled = false;
        btn.textContent = 'Activar';
        errorEl.textContent = 'Código no válido. Verifica e inténtalo de nuevo.';
        gate.classList.add('act-shake');
        input.focus();
        input.select();
      }
    });

    // No se puede cerrar sin activar (bloqueo total)
  }

  // Arranque: tras el splash, decidir si mostrar la puerta
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (isActivated()) return; // ya activado → el flujo normal (aviso legal) sigue su curso
      showGate();
    }, 2750);
  });

  // Exponer por si se necesita en consola/pruebas
  window.__vadeActivation = { isActivated, isValidCode, normalizeCode };
})();
