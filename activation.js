/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — activation.js
   Puerta de activación por código con Firebase (Firestore).
   Sistema: 1 código = 1 dispositivo (colección compartida
   'codigos_pct'). El SDK de Firebase se carga bajo demanda.
═══════════════════════════════════════════════════════ */

'use strict';

(function () {
  // ── Configuración Firebase (misma base de datos de códigos) ──
  const firebaseConfig = {
    apiKey:            'AIzaSyApl919VrDKdV1AdHtZsrVYUC0zym-ZrZs',
    authDomain:        'medishort360-f6f20.firebaseapp.com',
    projectId:         'medishort360-f6f20',
    storageBucket:     'medishort360-f6f20.firebasestorage.app',
    messagingSenderId: '127659670697',
    appId:             '1:127659670697:web:b845e760917ba77e253db8',
  };

  const COLECCION   = 'codigos_pct';
  const LS_KEY      = 'vade_activado';   // clave propia del Vademécum
  const LS_CODE_KEY = 'vade_codigo';

  const isActivated = () => {
    try { return localStorage.getItem(LS_KEY) === '1'; } catch { return false; }
  };

  // ── Huella del dispositivo (IDÉNTICA a la app PRO2-MEDISHORT360PCT) ──
  function generarDispositivoId() {
    const datos = [
      navigator.language || '',
      navigator.platform || '',
      screen.width + 'x' + screen.height,
      screen.colorDepth,
      Intl.DateTimeFormat().resolvedOptions().timeZone || '',
      navigator.hardwareConcurrency || '',
      navigator.deviceMemory || '',
    ].join('|');
    let hash = 0;
    for (let i = 0; i < datos.length; i++) {
      const char = datos.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return 'dev_' + Math.abs(hash).toString(36);
  }

  // Normaliza cualquier entrada a formato PCT-XXXX-XXXX-XXXX (id del documento)
  function normalizeCode(input) {
    const up = (input || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (up.length === 15 && up.startsWith('PCT')) {
      return `${up.slice(0, 3)}-${up.slice(3, 7)}-${up.slice(7, 11)}-${up.slice(11, 15)}`;
    }
    return (input || '').trim().toUpperCase();
  }

  // Decisión pura sobre el estado del código (testeable sin red)
  function decidir(data, dispositivoId) {
    if (data.estado === 'DESACTIVADO' || data.activo === false) {
      return { valido: false, razon: 'inactivo' };
    }
    const guardado = data.dispositivo_id || '';
    if (data.estado === 'DISPONIBLE' && guardado === '') {
      return { valido: true, enlazar: true };
    }
    if (data.estado === 'USADO' && guardado === dispositivoId) {
      return { valido: true };
    }
    if (data.estado === 'USADO' && guardado !== dispositivoId) {
      return { valido: false, razon: 'otro_dispositivo' };
    }
    return { valido: false, razon: 'no_encontrado' };
  }

  // ── Carga diferida del SDK de Firebase ──
  let _fb = null;
  async function getFirebase() {
    if (_fb) return _fb;
    const [{ initializeApp }, fs] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'),
    ]);
    const app = initializeApp(firebaseConfig, 'vade-' + COLECCION);
    const db = fs.getFirestore(app);
    _fb = { db, doc: fs.doc, getDoc: fs.getDoc, updateDoc: fs.updateDoc };
    return _fb;
  }

  async function verificarCodigo(rawInput) {
    const codigo = normalizeCode(rawInput);
    if (!/^PCT-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(codigo)) {
      return { valido: false, razon: 'no_encontrado' };
    }
    const dispositivoId = generarDispositivoId();

    let fb;
    try { fb = await getFirebase(); }
    catch (e) { return { valido: false, razon: 'error_red' }; }

    let docSnap;
    try {
      docSnap = await fb.getDoc(fb.doc(fb.db, COLECCION, codigo));
    } catch (e) {
      return { valido: false, razon: 'error_red' };
    }
    if (!docSnap.exists()) return { valido: false, razon: 'no_encontrado' };

    const veredicto = decidir(docSnap.data(), dispositivoId);
    if (veredicto.valido && veredicto.enlazar) {
      try {
        await fb.updateDoc(fb.doc(fb.db, COLECCION, codigo), {
          estado: 'USADO',
          dispositivo_id: dispositivoId,
          fecha_activacion: new Date().toISOString(),
        });
      } catch (e) {
        return { valido: false, razon: 'error_escritura' };
      }
    }
    return veredicto;
  }

  const MENSAJES = {
    no_encontrado:    'Código inválido. Verifica e inténtalo de nuevo.',
    inactivo:         'Este código ha sido desactivado.',
    otro_dispositivo: 'Este código ya está en uso en otro dispositivo.',
    error_red:        'Sin conexión. Necesitas internet para activar por primera vez.',
    error_escritura:  'Error al activar. Inténtalo de nuevo.',
  };

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

      let resultado;
      try {
        resultado = await verificarCodigo(input.value);
      } catch (err) {
        resultado = { valido: false, razon: 'error_red' };
      }

      if (resultado.valido) {
        try {
          localStorage.setItem(LS_KEY, '1');
          localStorage.setItem(LS_CODE_KEY, normalizeCode(input.value));
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
        errorEl.textContent = MENSAJES[resultado.razon] || 'Código inválido.';
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
      if (isActivated()) return; // ya activado → sigue el flujo normal (aviso legal)
      showGate();
    }, 2750);
  });

  // Exponer para pruebas/consola
  window.__vadeActivation = { isActivated, verificarCodigo, normalizeCode, generarDispositivoId, decidir };
})();
