/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — app.js
   MediShort360 Suite · Lógica principal
═══════════════════════════════════════════════════════ */

'use strict';

/* ─── REGISTRO GLOBAL DE MEDICAMENTOS ───────────────── */
// Cada data/xxx.js debe hacer: window.MEDS_DB.push({ ...datos })
window.MEDS_DB = window.MEDS_DB || [];

/* ─── ESTADO DE LA APP ───────────────────────────────── */
const State = {
  currentView: 'home',
  currentMed: null,
  favorites: [],
  searchOpen: false,
};

/* ─── DOM REFS ───────────────────────────────────────── */
const $ = id => document.getElementById(id);

const Dom = {
  splash:        $('splash-screen'),
  app:           $('app'),
  menuToggle:    $('menuToggle'),
  searchToggle:  $('searchToggle'),
  searchBarWrap: $('searchBarWrap'),
  searchInput:   $('searchInput'),
  searchClear:   $('searchClear'),
  searchResults: $('searchResults'),
  sideNav:       $('sideNav'),
  navOverlay:    $('navOverlay'),
  navClose:      $('navClose'),
  mainContent:   $('mainContent'),
  medContent:    $('medContent'),
  medListHome:   $('medListHome'),
  riskListHome:  $('riskListHome'),
  riskListFull:  $('riskListFull'),
  catFullGrid:   $('catFullGrid'),
  favList:       $('favList'),
  statMeds:      $('statMeds'),
  backToTop:     $('backToTop'),
};

/* ═══════════════════════════════════════════════════════
   SPLASH
═══════════════════════════════════════════════════════ */
function initSplash() {
  // Iniciar app inmediatamente — splash es solo visual encima
  Dom.app.classList.remove('hidden');
  initApp();

  // Cerrar splash tras animación
  setTimeout(() => {
    Dom.splash.classList.add('fade-out');
    setTimeout(() => {
      Dom.splash.style.display = 'none';
    }, 650);
  }, 2500);
}

/* ═══════════════════════════════════════════════════════
   INIT APP
═══════════════════════════════════════════════════════ */
function initApp() {
  loadFavorites();
  renderHome();
  bindNavigation();
  bindSearch();
  bindBackToTop();
  bindSideNav();
}

/* ═══════════════════════════════════════════════════════
   FAVORITOS
═══════════════════════════════════════════════════════ */
function loadFavorites() {
  try {
    State.favorites = JSON.parse(localStorage.getItem('vade_favs') || '[]');
  } catch { State.favorites = []; }
}

function saveFavorites() {
  try {
    localStorage.setItem('vade_favs', JSON.stringify(State.favorites));
  } catch {}
}

function toggleFavorite(id) {
  const idx = State.favorites.indexOf(id);
  if (idx === -1) {
    State.favorites.push(id);
  } else {
    State.favorites.splice(idx, 1);
  }
  saveFavorites();
  // Actualizar botón si estamos en la ficha
  const btn = document.querySelector('.med-fav-btn');
  if (btn) {
    btn.classList.toggle('active', State.favorites.includes(id));
    btn.title = State.favorites.includes(id) ? 'Quitar de favoritos' : 'Agregar a favoritos';
  }
}

function isFavorite(id) {
  return State.favorites.includes(id);
}

/* ═══════════════════════════════════════════════════════
   NAVEGACIÓN
═══════════════════════════════════════════════════════ */
function bindNavigation() {
  // Bottom nav
  document.querySelectorAll('.bn-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      navigateTo(view);
    });
  });

  // Side nav links
  document.querySelectorAll('.sidenav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const view = link.dataset.view;
      closeSideNav();
      navigateTo(view);
    });
  });

  // Category cards en home
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      navigateTo('categorias');
    });
  });
}

function navigateTo(view) {
  // Cerrar búsqueda si está abierta
  if (State.searchOpen) closeSearch();

  State.currentView = view;

  // Ocultar todas las vistas
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active');
    v.classList.add('hidden');
  });

  // Mostrar vista target
  const target = document.querySelector(`[data-view="${view}"]`);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('active');
  }

  // Actualizar bottom nav
  document.querySelectorAll('.bn-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });

  // Actualizar side nav
  document.querySelectorAll('.sidenav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.view === view);
  });

  // Scroll al top
  Dom.mainContent.scrollTo({ top: 0, behavior: 'smooth' });

  // Render específico por vista
  if (view === 'favoritos') renderFavoritos();
  if (view === 'alto-riesgo') renderAltoRiesgo();
  if (view === 'categorias') renderCategorias();
}

function navigateToMed(medId) {
  const med = MEDS_DB.find(m => m.id === medId);
  if (!med) return;

  State.previousView = State.currentView;
  State.currentMed = medId;

  // Ocultar todas las vistas
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active');
    v.classList.add('hidden');
  });

  const viewMed = $('view-med');
  viewMed.classList.remove('hidden');
  viewMed.classList.add('active');

  // Limpiar bottom nav activo
  document.querySelectorAll('.bn-btn').forEach(btn => btn.classList.remove('active'));

  // Render ficha
  Dom.medContent.innerHTML = renderMedCard(med);
  Dom.mainContent.scrollTo({ top: 0, behavior: 'instant' });

  // Bind colapsables y botón favorito
  bindCollapsibles();
  bindFavBtn(medId);
}

/* ═══════════════════════════════════════════════════════
   RENDER — HOME
═══════════════════════════════════════════════════════ */
function renderHome() {
  if (!Dom.statMeds) return;
  Dom.statMeds.textContent = MEDS_DB.length;

  // Lista completa
  if (Dom.medListHome) {
    Dom.medListHome.innerHTML = MEDS_DB.map(med => medCardHTML(med)).join('');
    bindMedCards(Dom.medListHome);
  }

  // Alto riesgo en home (solo críticos)
  if (Dom.riskListHome) {
    const criticos = MEDS_DB.filter(m => m.prioridad === 'critical' || m.altoRiesgo);
    Dom.riskListHome.innerHTML = criticos.map(med => medCardHTML(med)).join('');
    bindMedCards(Dom.riskListHome);
  }
}

/* ═══════════════════════════════════════════════════════
   RENDER — FAVORITOS
═══════════════════════════════════════════════════════ */
function renderFavoritos() {
  if (!Dom.favList) return;
  const favMeds = MEDS_DB.filter(m => State.favorites.includes(m.id));

  if (favMeds.length === 0) {
    Dom.favList.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">⭐</span>
        <p>Aún no tienes favoritos.<br/>Toca la estrella en cualquier ficha.</p>
      </div>`;
    return;
  }

  Dom.favList.innerHTML = favMeds.map(med => medCardHTML(med)).join('');
  bindMedCards(Dom.favList);
}

/* ═══════════════════════════════════════════════════════
   RENDER — ALTO RIESGO
═══════════════════════════════════════════════════════ */
function renderAltoRiesgo() {
  if (!Dom.riskListFull) return;
  const riskMeds = MEDS_DB.filter(m => m.prioridad === 'critical' || m.prioridad === 'high' || m.altoRiesgo);

  if (riskMeds.length === 0) {
    Dom.riskListFull.innerHTML = `<div class="empty-state"><span class="empty-icon">✅</span><p>Sin medicamentos críticos registrados.</p></div>`;
    return;
  }

  Dom.riskListFull.innerHTML = riskMeds.map(med => medCardHTML(med)).join('');
  bindMedCards(Dom.riskListFull);
}

/* ═══════════════════════════════════════════════════════
   RENDER — CATEGORÍAS
═══════════════════════════════════════════════════════ */
const CATEGORIAS = [
  { id: 'vasopresores',    icon: '❤️',  nombre: 'Vasopresores' },
  { id: 'antibioticos',   icon: '🦠',  nombre: 'Antibióticos' },
  { id: 'electrolitos',   icon: '⚡',  nombre: 'Electrolitos' },
  { id: 'insulinas',      icon: '💉',  nombre: 'Insulinas' },
  { id: 'diureticos',     icon: '💧',  nombre: 'Diuréticos' },
  { id: 'anticoagulantes',icon: '🩸',  nombre: 'Anticoagulantes' },
  { id: 'antiarritmicos', icon: '📈',  nombre: 'Antiarrítmicos' },
  { id: 'analgesia',      icon: '🫁',  nombre: 'Analgesia/Sedación' },
  { id: 'otros',          icon: '💊',  nombre: 'Otros' },
];

function renderCategorias() {
  if (!Dom.catFullGrid) return;

  Dom.catFullGrid.innerHTML = CATEGORIAS.map(cat => {
    const count = MEDS_DB.filter(m => m.categoria === cat.id).length;
    return `
      <div class="cat-full-card" data-category="${cat.id}">
        <div class="cfc-icon">${cat.icon}</div>
        <div class="cfc-name">${cat.nombre}</div>
        <div class="cfc-count">${count} medicamento${count !== 1 ? 's' : ''}</div>
      </div>`;
  }).join('');

  // Bind click en cada categoría → filtrar medicamentos
  Dom.catFullGrid.querySelectorAll('.cat-full-card').forEach(card => {
    card.addEventListener('click', () => {
      const catId = card.dataset.category;
      showCategoryMeds(catId);
    });
  });
}

function showCategoryMeds(catId) {
  const cat = CATEGORIAS.find(c => c.id === catId);
  const meds = MEDS_DB.filter(m => m.categoria === catId);

  // Ocultar todas las vistas
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active');
    v.classList.add('hidden');
  });

  // Usar la vista alto-riesgo como contenedor genérico de lista
  const viewAR = $('view-alto-riesgo');
  viewAR.classList.remove('hidden');
  viewAR.classList.add('active');

  viewAR.innerHTML = `
    <div class="view-header">
      <h2 class="view-title">${cat ? cat.icon + ' ' + cat.nombre : catId}</h2>
      <p class="view-subtitle">${meds.length} medicamento${meds.length !== 1 ? 's' : ''} disponible${meds.length !== 1 ? 's' : ''}</p>
    </div>
    <div class="med-list" id="catMedList">
      ${meds.length > 0
        ? meds.map(med => medCardHTML(med)).join('')
        : `<div class="empty-state"><span class="empty-icon">🔍</span><p>Sin medicamentos en esta categoría aún.</p></div>`
      }
    </div>`;

  const list = $('catMedList');
  if (list) bindMedCards(list);
  Dom.mainContent.scrollTo({ top: 0, behavior: 'instant' });
}

/* ═══════════════════════════════════════════════════════
   RENDER — MED CARD (lista)
═══════════════════════════════════════════════════════ */
function medCardHTML(med) {
  const riskClass = {
    critical: 'risk-red',
    high:     'risk-orange',
    moderate: 'risk-yellow',
    low:      'risk-green',
  }[med.prioridad] || '';

  const riskEmoji = {
    critical: '🔴',
    high:     '🟠',
    moderate: '🟡',
    low:      '🟢',
  }[med.prioridad] || '⚪';

  return `
    <div class="med-card ${riskClass}" data-med-id="${med.id}" role="button" tabindex="0" aria-label="Ver ficha de ${med.nombre}">
      <span class="mc-risk">${riskEmoji}</span>
      <div class="mc-info">
        <div class="mc-name">${med.nombre}</div>
        <div class="mc-meta">${med.nombreGenerico || ''} · ${med.categoria || ''}</div>
      </div>
      ${med.altoRiesgo ? '<span class="risk-badge">⚠ ALTO RIESGO</span>' : ''}
      <span class="mc-arrow">›</span>
    </div>`;
}

function bindMedCards(container) {
  container.querySelectorAll('.med-card').forEach(card => {
    const handler = () => navigateToMed(card.dataset.medId);
    card.addEventListener('click', handler);
    card.addEventListener('keydown', e => { if (e.key === 'Enter') handler(); });
  });
}

/* ═══════════════════════════════════════════════════════
   RENDER — FICHA COMPLETA DE MEDICAMENTO
═══════════════════════════════════════════════════════ */
function renderMedCard(med) {
  const isFav = isFavorite(med.id);

  const prioridadLabel = {
    critical: '🔴 CRÍTICO — Doble verificación obligatoria',
    high:     '🟠 ALTA VIGILANCIA',
    moderate: '🟡 VIGILANCIA MODERADA',
    low:      '🟢 RIESGO BAJO',
  }[med.prioridad] || '';

  const prioridadClass = med.prioridad || 'low';

  return `
    <!-- HEADER -->
    <div class="med-header">
      <button class="med-header-back" id="medBackBtn" aria-label="Volver">‹</button>
      <div class="med-header-info">
        <div class="med-header-name">${med.nombre}</div>
        ${med.nombreGenerico ? `<div class="med-header-generic">${med.nombreGenerico}</div>` : ''}
        <div class="med-header-tags">
          ${med.categoria ? `<span class="med-tag cyan">${med.categoria}</span>` : ''}
          ${(med.tags || []).map(t => `<span class="med-tag">${t}</span>`).join('')}
        </div>
      </div>
      <button class="med-fav-btn ${isFav ? 'active' : ''}" id="medFavBtn"
        aria-label="${isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}"
        title="${isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}">
        ★
      </button>
    </div>

    <!-- BRANDING WATERMARK -->
    <div class="med-branding">
      <img src="icono-192.png" alt="MediShort360" class="med-branding-logo" />
      <div class="med-branding-text">
        <span class="med-branding-name">MEDISHORT360</span>
        <span class="med-branding-sub">Vademécum Enfermería</span>
      </div>
    </div>

    <!-- SEMÁFORO -->
    <div class="priority-bar ${prioridadClass}">
      <span class="priority-dot">${prioridadLabel.split(' ')[0]}</span>
      <span class="priority-label">${prioridadLabel.replace(/^[🔴🟠🟡🟢]\s/, '')}</span>
      <span class="priority-level">PRIORIDAD</span>
    </div>

    <!-- ALERTA ALTO RIESGO -->
    ${med.altoRiesgo ? `
    <div class="alto-riesgo-banner">
      <span class="arb-icon">⚠️</span>
      <div class="arb-text">
        <div class="arb-title">Medicamento de alto riesgo</div>
        ${med.altoRiesgoTexto || 'Requiere doble verificación antes de la administración.'}
      </div>
    </div>` : ''}

    <!-- NIVEL 1 — VISTA RÁPIDA -->
    ${renderNivel1(med)}

    <!-- NIVEL 2 — VER MÁS -->
    <button class="level-toggle" data-level="nivel2" aria-expanded="false">
      <span>Ver más ▾ Cuidados · Efectos adversos · Presentaciones</span>
      <span class="lt-chevron">▼</span>
    </button>
    <div class="level-body" id="nivel2">
      ${renderNivel2(med)}
    </div>

    <!-- NIVEL 3 — INFORMACIÓN AVANZADA -->
    <button class="level-toggle" data-level="nivel3" aria-expanded="false">
      <span>Información avanzada ▾ Dosis · Poblaciones especiales</span>
      <span class="lt-chevron">▼</span>
    </button>
    <div class="level-body" id="nivel3">
      ${renderNivel3(med)}
    </div>

    <!-- NIVEL 4 — EVIDENCIA CIENTÍFICA -->
    <button class="level-toggle" data-level="nivel4" aria-expanded="false">
      <span>Evidencia científica ▾ Referencias</span>
      <span class="lt-chevron">▼</span>
    </button>
    <div class="level-body" id="nivel4">
      ${renderNivel4(med)}
    </div>

    <div style="height:24px;"></div>
  `;
}

/* ── NIVEL 1 ── */
function renderNivel1(med) {
  const n1 = med.nivel1 || {};
  return `
    <!-- Puntos clave -->
    ${n1.puntosClave ? `
    <div class="med-section open">
      <div class="med-section-header">
        <span class="msh-icon">📌</span>
        <span class="msh-title">Puntos clave</span>
        <span class="msh-chevron">▼</span>
      </div>
      <div class="med-section-body">
        <div class="key-points">
          ${n1.puntosClave.map(p => `<div class="key-point"><span class="kp-dot"></span><span>${p}</span></div>`).join('')}
        </div>
      </div>
    </div>` : ''}

    <!-- Resumen rápido -->
    ${n1.resumenRapido ? `
    <div class="med-section open">
      <div class="med-section-header">
        <span class="msh-icon">⚡</span>
        <span class="msh-title">Resumen rápido</span>
        <span class="msh-chevron">▼</span>
      </div>
      <div class="med-section-body">
        <div class="quick-summary">
          <div class="qs-label">En pocas palabras</div>
          ${n1.resumenRapido}
        </div>
        ${n1.objetivoTerapeutico ? `
        <div class="info-row">
          <div class="info-label">🎯 Objetivo terapéutico</div>
          <div class="info-value">${n1.objetivoTerapeutico}</div>
        </div>` : ''}
      </div>
    </div>` : ''}

    <!-- Preparación y administración -->
    ${n1.preparacion ? `
    <div class="med-section open">
      <div class="med-section-header">
        <span class="msh-icon">💉</span>
        <span class="msh-title">Preparación y administración</span>
        <span class="msh-chevron">▼</span>
      </div>
      <div class="med-section-body">
        <table class="prep-table">
          ${Object.entries(n1.preparacion).map(([k,v]) => `
          <tr><td>${k}</td><td>${v}</td></tr>`).join('')}
        </table>
      </div>
    </div>` : ''}

    <!-- Vigilancia -->
    ${n1.vigilancia ? `
    <div class="med-section open">
      <div class="med-section-header">
        <span class="msh-icon">👁️</span>
        <span class="msh-title">¿Qué debo vigilar?</span>
        <span class="msh-chevron">▼</span>
      </div>
      <div class="med-section-body">
        <div class="vigilancia-grid">
          ${n1.vigilancia.antes ? `
          <div class="vig-block antes">
            <div class="vig-block-title">ANTES</div>
            <div class="vig-items">
              ${n1.vigilancia.antes.map(i => `<div class="vig-item">${i}</div>`).join('')}
            </div>
          </div>` : ''}
          ${n1.vigilancia.durante ? `
          <div class="vig-block durante">
            <div class="vig-block-title">DURANTE</div>
            <div class="vig-items">
              ${n1.vigilancia.durante.map(i => `<div class="vig-item">${i}</div>`).join('')}
            </div>
          </div>` : ''}
          ${n1.vigilancia.despues ? `
          <div class="vig-block despues">
            <div class="vig-block-title">DESPUÉS</div>
            <div class="vig-items">
              ${n1.vigilancia.despues.map(i => `<div class="vig-item">${i}</div>`).join('')}
            </div>
          </div>` : ''}
        </div>
        ${n1.vigilancia.suspender ? `
        <div class="suspender-banner">
          <div class="sb-title">🚨 Suspender y notificar si...</div>
          <div class="sb-items">
            ${n1.vigilancia.suspender.map(i => `<div class="sb-item">${i}</div>`).join('')}
          </div>
        </div>` : ''}
      </div>
    </div>` : ''}

    <!-- Incompatibilidades -->
    ${n1.incompatibilidades ? `
    <div class="med-section open">
      <div class="med-section-header">
        <span class="msh-icon">🔍</span>
        <span class="msh-title">Incompatibilidades críticas</span>
        <span class="msh-chevron">▼</span>
      </div>
      <div class="med-section-body">
        <div class="incompat-list">
          ${n1.incompatibilidades.map(i => `<div class="incompat-item">${i}</div>`).join('')}
        </div>
      </div>
    </div>` : ''}

    <!-- Alertas seguridad -->
    ${n1.alertasSeguridad ? `
    <div class="med-section open">
      <div class="med-section-header">
        <span class="msh-icon">🔴</span>
        <span class="msh-title">Alertas de seguridad</span>
        <span class="msh-chevron">▼</span>
      </div>
      <div class="med-section-body">
        <div class="alert-box">
          ${n1.alertasSeguridad.map(a => `<div class="alert-item">⚠ ${a}</div>`).join('')}
        </div>
      </div>
    </div>` : ''}

    <!-- Módulos dinámicos -->
    ${renderModulos(med)}
  `;
}

/* ── MÓDULOS DINÁMICOS ── */
function renderModulos(med) {
  const mods = med.modulos || {};
  let html = '';

  if (mods.extravasacion) {
    html += `
    <div class="module-block extravasacion">
      <div class="module-header">🚨 Manejo de extravasación</div>
      <div class="module-body">${mods.extravasacion}</div>
    </div>`;
  }
  if (mods.renal) {
    html += `
    <div class="module-block renal" style="margin: 10px 16px 0;">
      <div class="module-header">🩸 Monitorización renal</div>
      <div class="module-body">${mods.renal}</div>
    </div>`;
  }
  if (mods.hipoglucemia) {
    html += `
    <div class="module-block hipoglucemia" style="margin: 10px 16px 0;">
      <div class="module-header">📉 Riesgo de hipoglucemia</div>
      <div class="module-body">${mods.hipoglucemia}</div>
    </div>`;
  }
  if (mods.cardio) {
    html += `
    <div class="module-block cardio" style="margin: 10px 16px 0;">
      <div class="module-header">❤️ Monitorización cardiovascular</div>
      <div class="module-body">${mods.cardio}</div>
    </div>`;
  }
  if (mods.respiratorio) {
    html += `
    <div class="module-block respiratorio" style="margin: 10px 16px 0;">
      <div class="module-header">🫁 Monitorización respiratoria</div>
      <div class="module-body">${mods.respiratorio}</div>
    </div>`;
  }
  if (mods.neonatal) {
    html += `
    <div class="module-block neonatal" style="margin: 10px 16px 0;">
      <div class="module-header">👶 Módulo neonatal</div>
      <div class="module-body">${mods.neonatal}</div>
    </div>`;
  }
  if (mods.sindrome_hombre_rojo) {
    html += `
    <div class="module-block extravasacion" style="margin: 10px 16px 0;">
      <div class="module-header">⚡ Síndrome del hombre rojo</div>
      <div class="module-body">${mods.sindrome_hombre_rojo}</div>
    </div>`;
  }
  if (mods.obstetricia) {
    html += `
    <div class="module-block neonatal" style="margin: 10px 16px 0;">
      <div class="module-header">🤰 Consideraciones obstétricas</div>
      <div class="module-body">${mods.obstetricia}</div>
    </div>`;
  }

  return html;
}

/* ── NIVEL 2 ── */
function renderNivel2(med) {
  const n2 = med.nivel2 || {};
  let html = '<div style="padding-top:12px;">';

  if (n2.cuidadosEnfermeria) {
    html += `
    <div class="info-row">
      <div class="info-label">🩺 Cuidados de enfermería</div>
      ${n2.cuidadosEnfermeria.map(c => `<div class="vig-item" style="padding-left:12px;font-size:.8rem;color:var(--text-secondary);margin-top:4px;">${c}</div>`).join('')}
    </div>`;
  }

  if (n2.efectosAdversos) {
    html += `
    <div class="info-row" style="margin-top:14px;">
      <div class="info-label">⚠️ Efectos adversos</div>
      <div class="alert-box" style="margin-top:6px;">
        ${n2.efectosAdversos.map(e => `<div class="alert-item">${e}</div>`).join('')}
      </div>
    </div>`;
  }

  if (n2.contraindicaciones) {
    html += `
    <div class="info-row" style="margin-top:14px;">
      <div class="info-label">🚫 Contraindicaciones</div>
      <div class="incompat-list" style="margin-top:6px;">
        ${n2.contraindicaciones.map(c => `<div class="incompat-item">${c}</div>`).join('')}
      </div>
    </div>`;
  }

  if (n2.fotosensibilidad !== undefined) {
    html += `
    <div class="info-row" style="margin-top:14px;">
      <div class="info-label">☀️ Fotosensibilidad</div>
      <div class="info-value">${n2.fotosensibilidad}</div>
    </div>`;
  }

  if (n2.estabilidad) {
    html += `
    <div class="info-row" style="margin-top:14px;">
      <div class="info-label">🧊 Estabilidad y conservación</div>
      <table class="prep-table" style="margin-top:6px;">
        ${Object.entries(n2.estabilidad).map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
      </table>
    </div>`;
  }

  if (n2.presentaciones) {
    html += `
    <div class="info-row" style="margin-top:14px;">
      <div class="info-label">💊 Presentaciones disponibles</div>
      ${n2.presentaciones.map(p => `
        <div style="font-size:.78rem;color:var(--text-secondary);padding:4px 0 4px 10px;border-bottom:1px solid var(--border);">${p}</div>
      `).join('')}
    </div>`;
  }

  html += '</div>';
  return html;
}

/* ── NIVEL 3 ── */
function renderNivel3(med) {
  const n3 = med.nivel3 || {};
  let html = '<div style="padding-top:12px;">';

  if (n3.dosis) {
    html += `
    <div class="info-label">💊 Dosis de referencia</div>
    <table class="dosis-table" style="margin-top:6px;">
      <thead><tr><th>Indicación</th><th>Dosis</th><th>Vía</th></tr></thead>
      <tbody>
        ${n3.dosis.map(d => `<tr><td>${d.indicacion}</td><td><span class="mono">${d.dosis}</span></td><td>${d.via || 'IV'}</td></tr>`).join('')}
      </tbody>
    </table>`;
  }

  if (n3.embarazo) {
    html += `
    <div class="info-row" style="margin-top:14px;">
      <div class="info-label">🤰 Embarazo y lactancia</div>
      <div class="info-value">${n3.embarazo}</div>
    </div>`;
  }

  if (n3.pediatria) {
    html += `
    <div class="info-row" style="margin-top:14px;">
      <div class="info-label">👶 Pediatría</div>
      <div class="info-value">${n3.pediatria}</div>
    </div>`;
  }

  if (n3.adultoMayor) {
    html += `
    <div class="info-row" style="margin-top:14px;">
      <div class="info-label">👴 Adulto mayor</div>
      <div class="info-value">${n3.adultoMayor}</div>
    </div>`;
  }

  if (n3.insufRenal) {
    html += `
    <div class="info-row" style="margin-top:14px;">
      <div class="info-label">🫘 Insuficiencia renal</div>
      <div class="info-value">${n3.insufRenal}</div>
    </div>`;
  }

  if (n3.insufHepatica) {
    html += `
    <div class="info-row" style="margin-top:14px;">
      <div class="info-label">🫀 Insuficiencia hepática</div>
      <div class="info-value">${n3.insufHepatica}</div>
    </div>`;
  }

  html += '</div>';
  return html;
}

/* ── NIVEL 4 ── */
function renderNivel4(med) {
  const n4 = med.nivel4 || {};
  let html = '<div style="padding-top:12px;">';

  if (n4.referencias && n4.referencias.length > 0) {
    html += `
    <div class="info-label">📚 Referencias bibliográficas</div>
    <div class="ref-list" style="margin-top:8px;">
      ${n4.referencias.map(r => `<div class="ref-item">${r}</div>`).join('')}
    </div>`;
  } else {
    html += `<div class="empty-state" style="padding:20px 0;"><p>Referencias en validación clínica.</p></div>`;
  }

  html += '</div>';
  return html;
}

/* ═══════════════════════════════════════════════════════
   COLAPSABLES
═══════════════════════════════════════════════════════ */
function bindCollapsibles() {
  // Secciones dentro de nivel 1
  document.querySelectorAll('.med-section-header').forEach(header => {
    header.addEventListener('click', () => {
      const section = header.closest('.med-section');
      section.classList.toggle('open');
    });
  });

  // Niveles 2, 3, 4
  document.querySelectorAll('.level-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const levelId = btn.dataset.level;
      const body = $(`${levelId}`);
      if (!body) return;
      const isOpen = body.classList.contains('open');
      body.classList.toggle('open', !isOpen);
      btn.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // Botón volver
  const backBtn = $('medBackBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      navigateTo(State.previousView || 'home');
    });
  }
}

function bindFavBtn(medId) {
  const btn = $('medFavBtn');
  if (!btn) return;
  btn.addEventListener('click', () => toggleFavorite(medId));
}

/* ═══════════════════════════════════════════════════════
   BÚSQUEDA
═══════════════════════════════════════════════════════ */
function bindSearch() {
  Dom.searchToggle.addEventListener('click', () => {
    if (State.searchOpen) {
      closeSearch();
    } else {
      openSearch();
    }
  });

  Dom.searchClear.addEventListener('click', () => {
    Dom.searchInput.value = '';
    Dom.searchResults.innerHTML = '';
    Dom.searchClear.classList.add('hidden');
    Dom.searchInput.focus();
  });

  Dom.searchInput.addEventListener('input', () => {
    const q = Dom.searchInput.value.trim();
    Dom.searchClear.classList.toggle('hidden', q.length === 0);
    if (q.length >= 2) {
      renderSearchResults(q);
    } else {
      Dom.searchResults.innerHTML = '';
    }
  });

  // Cerrar con Escape
  Dom.searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
  });
}

function openSearch() {
  State.searchOpen = true;
  Dom.searchBarWrap.classList.add('open');
  Dom.searchBarWrap.setAttribute('aria-hidden', 'false');
  setTimeout(() => Dom.searchInput.focus(), 300);
}

function closeSearch() {
  State.searchOpen = false;
  Dom.searchBarWrap.classList.remove('open');
  Dom.searchBarWrap.setAttribute('aria-hidden', 'true');
  Dom.searchInput.value = '';
  Dom.searchResults.innerHTML = '';
  Dom.searchClear.classList.add('hidden');
}

function renderSearchResults(query) {
  const q = query.toLowerCase();
  const results = MEDS_DB.filter(m =>
    m.nombre.toLowerCase().includes(q) ||
    (m.nombreGenerico || '').toLowerCase().includes(q) ||
    (m.categoria || '').toLowerCase().includes(q) ||
    (m.tags || []).some(t => t.toLowerCase().includes(q))
  );

  if (results.length === 0) {
    Dom.searchResults.innerHTML = `<div class="search-empty">Sin resultados para "<strong>${query}</strong>"</div>`;
    return;
  }

  const riskEmoji = { critical:'🔴', high:'🟠', moderate:'🟡', low:'🟢' };

  Dom.searchResults.innerHTML = results.map(med => `
    <div class="search-result-item" data-med-id="${med.id}" role="option" tabindex="0">
      <span class="sri-risk">${riskEmoji[med.prioridad] || '⚪'}</span>
      <div class="sri-info">
        <div class="sri-name">${highlightMatch(med.nombre, query)}</div>
        <div class="sri-cat">${med.categoria || ''}</div>
      </div>
      <span class="sri-arrow">›</span>
    </div>`).join('');

  Dom.searchResults.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      closeSearch();
      navigateToMed(item.dataset.medId);
    });
  });
}

function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark style="background:rgba(0,212,255,0.2);color:var(--cyan);border-radius:2px;">$1</mark>');
}

/* ═══════════════════════════════════════════════════════
   SIDE NAV
═══════════════════════════════════════════════════════ */
function bindSideNav() {
  Dom.menuToggle.addEventListener('click', openSideNav);
  Dom.navClose.addEventListener('click', closeSideNav);
  Dom.navOverlay.addEventListener('click', closeSideNav);
}

function openSideNav() {
  Dom.sideNav.classList.add('open');
  Dom.navOverlay.classList.remove('hidden');
  Dom.navOverlay.classList.add('visible');
  Dom.menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeSideNav() {
  Dom.sideNav.classList.remove('open');
  Dom.navOverlay.classList.remove('visible');
  Dom.menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  setTimeout(() => Dom.navOverlay.classList.add('hidden'), 300);
}

/* ═══════════════════════════════════════════════════════
   BACK TO TOP
═══════════════════════════════════════════════════════ */
function bindBackToTop() {
  Dom.mainContent.addEventListener('scroll', () => {
    const show = Dom.mainContent.scrollTop > 300;
    Dom.backToTop.classList.toggle('hidden', !show);
    Dom.backToTop.classList.toggle('visible', show);
  });

  Dom.backToTop.addEventListener('click', () => {
    Dom.mainContent.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════════════════════════
   ARRANQUE
═══════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  // window.load garantiza que todos los scripts data/*.js
  // ya fueron ejecutados y MEDS_DB está completamente poblado
  console.log('[Vademécum] MEDS_DB cargados:', window.MEDS_DB.length);
  initSplash();
});
