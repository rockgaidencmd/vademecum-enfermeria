/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/magnesio.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'magnesio',
  nombre:         'Sulfato de Magnesio',
  nombreGenerico: 'Magnesium Sulfate',
  categoria:      'electrolitos',
  tags:           ['UCI', 'electrolito', 'eclampsia', 'asma severa', 'arritmias', 'hipomagnesemia'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Electrolito esencial — cofactor de 300+ enzimas, función neuromuscular, cardíaca, ácido-base.',
      'Administración lenta OBLIGATORIA (máximo 1-2 mEq/min IV) — velocidad rápida causa rubor, cefalea, hipotensión.',
      'Monitorizar reflejos osteotendinosos — desaparición indica toxicidad (Mg+ > 10 mEq/L).',
      'Antídoto disponible: Gluconato de Calcio 10-20 mL de solución 10% IV lento — antagoniza bloqueo neuromuscular.',
      'En eclampsia: dosis de carga seguida de infusión — protocolo estricto para prevenir convulsiones.',
    ],

    resumenRapido: 'Electrolito crucial para función muscular, cardíaca y neurológica. Indicado en eclampsia/preeclampsia severa, hipomagnesemia, asma severa refractaria, arritmias (especialmente torsades de pointes), fibrilación auricular. Inicio rápido (minutos), duración 4-24h según dosis.',

    objetivoTerapeutico: 'Prevenir convulsiones en eclampsia · Corregir hipomagnesemia · Broncodilatación en asma severa · Estabilizar arritmias · Mantener Mg²⁺ sérico 2-4 mEq/L',

    preparacion: {
      'Presentación':             '500 mg/mL solución inyectable (4 mEq/mL)',
      'Presentación alt.':        '1 g (2 mL) ampolla (2 mEq/mL)',
      'Diluyente':                'SF 0.9% (preferido) · SG 5%',
      'Dilución estándar':        '10-20 g en 100-250 mL SF → 40-80 mEq en 100-250 mL',
      'Concentración máx. periférica': '20% (2 mEq/mL) — diluciones > 20% causan dolor venoso',
      'Vía':                      'IV infusión lenta OBLIGATORIA · NUNCA bolo IV',
      '⏱️ VELOCIDAD MÁXIMA':      '<b>1-2 mEq/min (máximo)</b> — idealmente 0.5-1 mEq/min',
      'Ejemplo eclampsia':        '4-6 g bolo en 15-20 min, luego 1-2 g/h infusión',
      'Bomba':                    'Bomba de infusión volumétrica recomendada',
      '🧊 Estabilidad':           '<b>24 horas a temp. ambiente</b> en SF 0.9%',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Verificar función renal basal — Mg+ se elimina por riñones.',
        'Comprobar Mg²⁺ sérico basal (normal 1.7-2.2 mEq/L).',
        'Registrar reflejos osteotendinosos basales (patelar, aquíleo).',
        'Revisar prescripción: dosis total, velocidad infusión, objetivo.',
        'En eclampsia: verificar PA, proteinuria 24h, comprobar diagnóstico.',
        'Acceso IV periférico de buen calibre o central.',
      ],
      durante: [
        'Vigilar velocidad infusión — NO exceder 1-2 mEq/min.',
        'Monitorizar PA c/5-10 min — hipotensión posible.',
        'Comprobar reflejos osteotendinosos cada 15-30 min durante infusión — alerta si ↓.',
        'FC — vigilar bradicardia (< 50 lpm es señal alerta).',
        'Respiración — FR > 12 rpm mínimo (hipomagnesemia causa hiperreflexia, exceso causa depresión).',
        'En eclampsia: vigilar signos de convulsión, aura, cefalea severa.',
        'Si hipotensión severa (PAS < 100): reducir velocidad infusión.',
      ],
      despues: [
        'Continuar monitorización 30-60 min post-infusión.',
        'Verificar Mg²⁺ sérico 2-4h post-administración.',
        'Evaluar respuesta clínica: convulsión prevenida, disnea mejorada, arritmia convertida.',
        'Documentar: Mg²⁺ sérico, PA, FC, reflejos, síntomas.',
      ],
      suspender: [
        'Reflejos osteotendinosos ausentes (signo de toxicidad).',
        'FR < 12 rpm (depresión respiratoria).',
        'Anuria o oliguria severa.',
        'Hipotensión severa refractaria (PAS < 90 mmHg).',
        'Prescripción médica de suspensión.',
      ],
    },

    incompatibilidades: [
      'Bicarbonato de sodio — precipitación.',
      'Fosfosfato — incompatibilidad física.',
      'Calcio — precipitación potencial (vigilancia en mezclas).',
      'Algunos antibióticos (aminoglucósidos) — consultar compatibilidad.',
      'Lavar bien línea IV con SF entre medicamentos incompatibles.',
    ],

    alertasSeguridad: [
      '🔴 NUNCA administrar en bolo directo IV rápido — causa hipotensión severa, taquicardia, sensación de quemazón.',
      '🟠 Velocidad lenta es OBLIGATORIA (≤ 1-2 mEq/min) — documentar en bomba.',
      '🟠 Monitorizar reflejos osteotendinosos — desaparición = toxicidad.',
      '🟡 En insuficiencia renal: riesgo de acumulación tóxica — dosis reducida.',
      '🟡 Antídoto (Gluconato de Calcio) debe estar disponible al lado de la cama.',
    ],
  },

  modulos: {

    eclampsia: `
      <b>Protocolo Magnesio en Eclampsia/Preeclampsia:</b><br/>
      <b>Dosis de carga:</b> 4-6 g IV en 15-20 min (0.3-0.4 g/min).<br/>
      <b>Seguida de infusión:</b> 1-2 g/h IV hasta 12-24h post-parto o resolución crisis.<br/>
      <b>IM alternativa:</b> 10 g total IM c/4h (5 g en cada glúteo) si no acceso IV.<br/>
      <b>Objetivos:</b> Prevenir convulsiones recurrentes, monitorizar PA, reflexos, FR.<br/>
      <b>Vigencia:</b> Continuar mínimo 12-24h post-parto (riesgo eclampsia posparto).
    `,

    renal: `
      <b>Monitorización renal en hipomagnesemia:</b><br/>
      • Creatinina basal — si CrCl < 30 mL/min, reducir dosis 50%.<br/>
      • Diuresis horaria — oliguria reduce excreción Mg+ (toxicidad ↑).<br/>
      • En IRA: dosis máxima única 4 g, esperar control Mg+ antes de repetir.
    `,

    neuro: `
      <b>Vigilancia neurológica (eclampsia/toxicidad):</b><br/>
      • Reflejos osteotendinosos: patelar, aquíleo c/15-30 min durante infusión.<br/>
      • Presencia normal = seguro. Ausencia = toxicidad (Mg+ > 10 mEq/L).<br/>
      • Signos pre-convulsión: hiperreflexia inicial → areflexia tardía.<br/>
      • Glasgow c/15-30 min en eclampsia — alerta si ↓.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Etiquetar bolsa con: Magnesio [g], concentración, velocidad máxima (mEq/min), duración esperada, hora inicio.',
      'Bomba de infusión volumétrica — programar en mEq/min o mL/h según protocolo.',
      'NO usar gravedad — riesgo de infusión rápida accidental.',
      'Vigilar PA c/5-10 min durante infusión.',
      'Comprobar reflejos osteotendinosos c/15-30 min — documentar presencia/ausencia.',
      'En eclampsia: monitor cardíaco continuo, saturometría, FR.',
      'Tener Gluconato de Calcio 10% (antídoto) disponible al lado de la cama.',
      'En eclampsia: evitar estimulación (luz fuerte, ruido) — riesgo de convulsión.',
      'Documentar: Mg²⁺ sérico, PA, reflejos, síntomas, respuesta clínica.',
    ],

    efectosAdversos: [
      '🔴 Depresión respiratoria severa — FR < 12 rpm (hipoventilación)',
      '🔴 Toxicidad neuromuscular — areflexia, parálisis progresiva si Mg+ > 12 mEq/L',
      '🟠 Hipotensión severa — especialmente si infusión rápida',
      '🟠 Bradicardia severa — FC < 50 lpm',
      '🟡 Rubor, sensación quemazón si infusión rápida',
      '🟡 Cefalea',
      '🟡 Náuseas, vómitos',
      '🟡 Reacción alérgica (rara)',
    ],

    contraindicaciones: [
      'Anuria — CONTRAINDICACIÓN ABSOLUTA.',
      'Miastenia gravis — Mg+ empeora bloqueo neuromuscular.',
      'Hipersensibilidad a sales de magnesio.',
      'Hipercalcemia severa — relativa.',
    ],

    fotosensibilidad: 'No relevante.',

    estabilidad: {
      'Ampolla sin abrir':      'Temperatura ambiente hasta vencimiento',
      'Preparado en SF':        '<b>24 horas a 15-25°C</b>',
      'Temperatura':            'NO congelar · Mantener 15-25°C',
      'Aspecto':                'Transparente, incolora — desechar si turbidez',
    },

    presentaciones: [
      'Sulfato de Magnesio 500 mg/mL solución inyectable — ampolla 10 mL',
      'Sulfato de Magnesio 1 g/2 mL solución inyectable — ampolla 2 mL',
      'Sulfato de Magnesio 10 g/10 mL solución inyectable — ampolla 10 mL',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Eclampsia (carga)',                 dosis: '4-6 g IV en 15-20 min',    via: 'IV' },
      { indicacion: 'Eclampsia (infusión)',              dosis: '1-2 g/h durante 12-24h',   via: 'IV' },
      { indicacion: 'Hipomagnesemia leve',               dosis: '1-2 g IV en 15-20 min',    via: 'IV' },
      { indicacion: 'Asma severa refractaria',           dosis: '2 g IV en 20 min',         via: 'IV' },
      { indicacion: 'Torsades de pointes',               dosis: '1-2 g IV en 5-20 min',     via: 'IV' },
      { indicacion: 'Objetivo Mg²⁺ sérico',             dosis: '2-4 mEq/L',                via: 'monitoreo' },
    ],

    embarazo: 'Categoría A (FDA) — No cruza placenta significativamente. Seguro en eclampsia/preeclampsia — es estándar de cuidado. Compatible con lactancia.',

    pediatria: 'Eclampsia pediátrica rara. Hipomagnesemia: 25-50 mg/kg IV en 15-30 min. Calcular según peso. Monitorización reflejos y respiración estricta.',

    adultoMayor: 'Mayor riesgo de hipotensión, depresión respiratoria. Monitorización intensiva. Velocidad infusión más lenta si posible.',

    insufRenal: 'En CrCl < 30 mL/min: REDUCIR DOSIS 50% — riesgo de toxicidad por acumulación. Monitorizar Mg²⁺ cada 4-6h. En diálisis: administrar tras sesión.',

    insufHepatica: 'Sin ajuste específico por metabolismo hepático. Vigilancia de reflejos intensiva por riesgo encefalopatía hepática.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Magnesium Sulfate Injection. U.S. National Library of Medicine.',
      'ACOG Guidelines. Gestational Hypertension and Preeclampsia. Obstetrics & Gynecology. 2020.',
      'CIMA AEMPS. Ficha Técnica Sulfato de Magnesio. Agencia Española de Medicamentos.',
      'Micromedex Solutions. Magnesium Sulfate (Injectable). Accessed 2024.',
      'AHA/ACC Guidelines. Magnesium in Arrhythmia Management. Circulation. 2015.',
    ],
  },

});
