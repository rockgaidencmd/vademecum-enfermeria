/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — disclaimer.js
   Descargo de responsabilidad legal
═══════════════════════════════════════════════════════ */

'use strict';

function showDisclaimerModal() {
  if (localStorage.getItem('vade_disclaimer_accepted')) return;
  // No mostrar el aviso legal mientras la app no esté activada.
  // Tras activar, activation.js vuelve a invocar esta función.
  if (localStorage.getItem('vade_activated') !== '1') return;
  // Evitar duplicados si ya hay un modal abierto
  if (document.querySelector('.disclaimer-modal')) return;

  const modal = document.createElement('div');
  modal.className = 'disclaimer-modal';
  modal.innerHTML = `
    <div class="disclaimer-overlay"></div>
    <div class="disclaimer-box" role="dialog" aria-modal="true" aria-labelledby="disclaimerTitle">
      <div class="disclaimer-header">
        <span class="disclaimer-icon">⚠️</span>
        <h2 id="disclaimerTitle">Aviso Legal Importante</h2>
      </div>
      <div class="disclaimer-body">
        <p class="disc-lead">Esta aplicación es una herramienta de <strong>referencia clínica educativa</strong> únicamente.</p>

        <p class="disc-sub">No reemplaza:</p>
        <ul>
          <li>El juicio clínico profesional independiente</li>
          <li>Los protocolos y normas de tu institución</li>
          <li>La responsabilidad legal del profesional</li>
          <li>La evaluación individualizada del paciente</li>
        </ul>

        <p class="disc-sub">La decisión final sobre cualquier intervención farmacológica es responsabilidad exclusiva del profesional de salud tratante, de acuerdo con las normas institucionales, las guías clínicas aplicables y la legislación sanitaria local.</p>

        <p class="disc-sub">MediShort360 y sus desarrolladores no asumen responsabilidad por:</p>
        <ul>
          <li>Errores en la interpretación de la información</li>
          <li>Uso inapropiado de los contenidos</li>
          <li>Daños derivados de decisiones clínicas basadas en esta app</li>
          <li>Cambios en protocolos o normativas no actualizados</li>
        </ul>

        <p class="disc-final">Uso bajo tu cuenta y riesgo. Consulta siempre con colegas y referencias oficiales.</p>
      </div>
      <div class="disclaimer-footer">
        <label class="disclaimer-check">
          <input type="checkbox" id="discAgree" />
          <span>He leído y entiendo este aviso</span>
        </label>
        <button class="disclaimer-btn-accept" id="discAccept" disabled>Entendido, continuar</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  const checkbox = modal.querySelector('#discAgree');
  const btn = modal.querySelector('#discAccept');

  checkbox.addEventListener('change', () => {
    btn.disabled = !checkbox.checked;
  });

  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    localStorage.setItem('vade_disclaimer_accepted', 'true');
    modal.classList.add('closing');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 300);
  });

  // No se cierra tocando fuera (debe aceptar)
  modal.querySelector('.disclaimer-overlay').addEventListener('click', () => {});
}

// Mostrar tras el splash (2500ms) + un pequeño margen
window.addEventListener('load', () => {
  setTimeout(showDisclaimerModal, 2800);
});
