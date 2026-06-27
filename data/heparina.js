/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/heparina.js
   Fuentes: FDA DailyMed, CIMA AEMPS, ACCP Guidelines,
   Micromedex, Prospecto Heparina, Guías de trombosis
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'heparina',
  nombre:         'Heparina',
  nombreGenerico: 'Heparin Sodium (Porcine Lung)',
  categoria:      'anticoagulantes',
  tags:           ['UCI', 'anticoagulante', 'tromboembolia', 'fibrilación auricular', 'post-quirúrgico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Anticoagulante potente. Riesgo de sangrado grave si sobredosis. Requiere monitorización continua de TTPA (Tiempo de Tromboplastina Parcial Activado). Incompatible con muchos fármacos.',

  nivel1: {

    puntosClave: [
      'Anticoagulante que potencia la acción del antitrombina III — bloquea factores de coagulación (II, IX, X, XI, XII).',
      'Monitorización obligatoria de TTPA cada 6-8h al inicio, luego según protocolo (objetivo TTPA 1.5-2.5× control).',
      'Administración: bolo IV inicial, seguido de infusión continua — NUNCA en bolo sin dilución previa.',
      'Antídoto disponible: Sulfato de Protamina 1 mg neutraliza ~100 UI de heparina.',
      'Comprobar plaquetas basal y c/3-4 días — riesgo de Trombocitopenia Inducida por Heparina (TIH).',
    ],

    resumenRapido: 'Anticoagulante parenteral de acción rápida. Potencia antitrombina III inhibiendo cascada coagulativa. Indicado en tromboembolismo venoso, síndrome coronario agudo, fibrilación auricular, prevención trombótica post-quirúrgica. Inicio: minutos, pico: 15-30 min, duración: 60-90 min (requiere infusión continua).',

    objetivoTerapeutico: 'Prevenir trombosis venosa profunda · Prevenir embolia pulmonar · Anticoagulación en FA con RVD · Mantener TTPA 1.5-2.5× control',

    preparacion: {
      'Presentación':             '25,000 UI/5 mL ampolla (5000 UI/mL)',
      'Presentación alt.':        '25,000 UI/5 mL vial (5000 UI/mL)',
      'Diluyente':                'SF 0.9% (OBLIGATORIO) · NO dextosa',
      'Dilución estándar':        '25,000 UI en 500 mL SF → 50 UI/mL',
      'Dilución alternativa':     '25,000 UI en 250 mL SF → 100 UI/mL (para infusiones cortas)',
      'Vía':                      'IV bolo inicial + infusión continua',
      '⏱️ BOLO INICIAL':          '50-100 UI/kg IV lento (2-3 min) → típicamente 5000-10,000 UI',
      '⏱️ INFUSIÓN CONTINUA':     '<b>18 UI/kg/h (típicamente 1000-2000 UI/h)</b>',
      'Bomba':                    'Bomba de infusión volumétrica OBLIGATORIA',
      'Acceso':                   'Preferir acceso venoso central para precisión',
      '🧊 Estabilidad':           '<b>24-48 horas a temp. ambiente o refrigeración</b> en SF 0.9%',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Verificar contraindicaciones absolutas: sangrado activo, trombocitopenia severa (< 50,000).',
        'Registrar hemoglobina, hematocrito, plaquetas basales.',
        'Comprobar TTPA basal (para establecer línea base).',
        'Revisar medicamentos concomitantes que aumenten riesgo: AINE, corticoides, otros anticoagulantes.',
        'Registrar fecha/hora de inicio para monitorización posterior.',
        'Comprobar prescripción: dosis bolo, velocidad infusión continua, objetivo TTPA.',
        'Doble verificación: concentración heparina, dosis, dilución, acceso IV.',
      ],
      durante: [
        'Monitorizar TTPA c/6-8h al inicio hasta estabilización, luego según protocolo (típicamente c/24h).',
        'Vigilar signos de sangrado: equimosis, petequias, hematuria, melena, hemoptisis, sangrado encías.',
        'Observar sitio IV — no aplicar calor local (puede alterar TTPA).',
        'Monitorizar plaquetas c/3-4 días — ALERTA si ↓ > 50% o < 150,000 (sospecha TIH).',
        'Registrar dosis administrada en cada control de TTPA.',
        'En caso de TTPA supraterapeútico: reducir velocidad infusión, repetir TTPA en 4-6h.',
        'Comunicar valores de TTPA al médico para ajustes de dosis.',
      ],
      despues: [
        'Continuar monitorización de TTPA según protocolo (al menos diario).',
        'Vigilar sangrado durante mínimo 5-7 días de tratamiento.',
        'Si cambio a warfarina: solapar mínimo 4-5 días hasta INR terapéutico (2-3).',
        'Comprobar plaquetas antes de suspender (descartar TIH).',
        'Documentar: TTPA resultados, dosis ajustes, signos sangrado, tolerancia.',
      ],
      suspender: [
        'TTPA > 3× control sin sangrado activo (supraterapeútico).',
        'Sangrado grave: gastrointestinal, intracraneal, hematuria macroscópica.',
        'Trombocitopenia severa (< 50,000) o ↓ > 50% (sospecha TIH).',
        'Reacción alérgica / anafilaxia.',
        'Prescripción médica de suspensión o cambio de anticoagulante.',
        'En emergencia con sangrado: preparar Sulfato de Protamina 10-50 mg IV.',
      ],
    },

    incompatibilidades: [
      'Dextosa — NUNCA en SG 5%, solo SF 0.9%.',
      'Acidez/alcalinidad extremas — diluyentes con pH anormal.',
      'Antibióticos aminoglucósidos (gentamicina) — incompatibilidad documentada.',
      'Hidrocortisona — incompatibilidad en mezcla directa.',
      'Penicilinas, cefalosporinas — consultar compatibilidad específica.',
      'Nitroprusiato de sodio — descomposición posible.',
      'Dobutamina — incompatibilidad en mezcla.',
      'AINE IV (diclofenaco, ibuprofeno) — riesgo sangrado ↑.',
      'Otros anticoagulantes — NO combinar sin prescripción médica explícita.',
      'Lavar bien la vía IV con SF entre medicamentos incompatibles.',
    ],

    alertasSeguridad: [
      '🔴 NUNCA administrar en bolo concentrado — causa hemorragia severa.',
      '🔴 Requiere TTPA para monitorizar — obligatorio cada 6-8h inicialmente.',
      '🔴 Compatibilidad limitada — NOT EN SG 5%, SOLO SF 0.9%.',
      '🟠 Riesgo de sangrado grave — vigilancia estricta de signos hemorrágicos.',
      '🟠 Trombocitopenia Inducida por Heparina (TIH) — monitorizar plaquetas c/3-4 días.',
      '🟡 Antídoto disponible (Protamina) pero con riesgos propios — solo en sangrado grave.',
      '🟡 En ancianos: mayor riesgo de sangrado — TTPA más labil.',
    ],
  },

  modulos: {

    cardio: `
      <b>Monitorización cardiovascular en FA/SCA:</b><br/>
      • ECG continuo si SCA o FA rápida.<br/>
      • FC — objetivo 60-100 lpm en FA controlada.<br/>
      • PA c/4-6h — vigilar hipotensión por sangrado oculto.<br/>
      • Troponina, BNP si SCA concomitante.<br/>
      • Ecocardiografía basal si FA para evaluar trombo intracardíaco.
    `,

    sangrado: `
      <b>Vigilancia de sangrado — CRÍTICA:</b><br/>
      <b>Signos de sangrado mayor:</b><br/>
      • Hemoglobina ↓ > 2 g/dL sin otra causa.<br/>
      • Sangrado GI: melena, hematemesis.<br/>
      • Hematuria macroscópica.<br/>
      • Hemoptisis.<br/>
      • Hemorragia intracraneal: cefalea severa, déficit neurológico.<br/>
      • Equimosis o hematomas grandes sin trauma.<br/><br/>
      <b>Si sangrado mayor:</b><br/>
      1. Suspender heparina inmediatamente.<br/>
      2. Preparar Sulfato de Protamina: 10-50 mg IV lento (máx 50 mg/10 min).<br/>
      3. Transfundir si Hb < 7 g/dL o sangrado activo.<br/>
      4. Notificar médico urgentemente.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Etiquetar bolsa de infusión con: Heparina 25,000 UI, concentración (50-100 UI/mL), velocidad infusión (UI/h), fecha/hora inicio, iniciales.',
      'Usar bomba de infusión volumétrica — programar en UI/h según prescripción.',
      'Acceso venoso central preferido — mayor precisión de dosis.',
      'Cambiar sistemas de infusión cada 48-72h según protocolo.',
      'NO aplicar calor en sitio IV — puede alterar TTPA (vasodilatación).',
      'Verificar TTPA antes de cada cambio de dosis — comunicar resultados al médico.',
      'Vigilar equimosis, petequias, hematomas — documentar sitios.',
      'En caso de extravasación: elevar miembro, aplicar frío (NO calor).',
      'Monitorizar plaquetas c/3-4 días — comprobar datos de laboratorio previos si hay ↓ severa.',
      'Mantener registro meticuloso de TTPA, dosis, cambios, signos sangrado.',
    ],

    efectosAdversos: [
      '🔴 Sangrado grave — gastrointestinal, intracraneal, otros órganos',
      '🔴 Trombocitopenia Inducida por Heparina (TIH) — paradójicamente trombosis + trombocitopenia',
      '🟠 Hemorragia menor — equimosis, petequias, hematuria microscópica',
      '🟠 Osteoporosis — con uso prolongado (> 1 mes)',
      '🟠 Alopecia — rara, con uso prolongado',
      '🟡 Reacción alérgica / hipersensibilidad (rara)',
      '🟡 Hipercaliemia (elevación K+ sérico)',
      '🟡 Priapismo (muy raro)',
    ],

    contraindicaciones: [
      'Sangrado activo grave (GI, intracraneal) — contraindicación absoluta.',
      'Trombocitopenia severa (< 50,000) o TIH previa — contraindicación absoluta.',
      'Aneurisma cerebral o lesiones cerebrales vasculares.',
      'Endocarditis bacteriana — riesgo de sangrado.',
      'Hipersensibilidad a heparina o productos porcinos (derivación).',
      'Úlcera péptica activa o sangrado GI reciente — relativa.',
    ],

    fotosensibilidad: 'No relevante. Proteger de luz extrema durante almacenamiento pero no requiere envase opaco especial.',

    estabilidad: {
      'Ampolla sin abrir':          'Temperatura ambiente hasta vencimiento',
      'Preparado en SF 0.9%':       '<b>24-48 horas a 15-25°C</b>',
      'Preparado refrigerado':      '<b>48 horas a 2-8°C</b>',
      'Temperatura':                'NO congelar · Mantener 15-25°C',
      'Aspecto':                    'Transparente, incolora — desechar si turbidez o precipitado',
    },

    presentaciones: [
      'Heparina Sódica 25,000 UI/5 mL solución inyectable — ampolla 5 mL',
      'Heparina Sódica 5,000 UI/mL solución inyectable — ampolla 1 mL',
      'Heparina Sódica 1,000 UI/mL solución inyectable — ampolla 10 mL',
      'Jeringas precargadas: 5,000 UI, 10,000 UI (uso SC principalmente)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Bolo inicial IV',                  dosis: '50-100 UI/kg (típico 5000-10,000 UI)', via: 'IV' },
      { indicacion: 'Infusión continua estándar',       dosis: '18 UI/kg/h (típico 1000-2000 UI/h)',  via: 'IV' },
      { indicacion: 'TVP/EP',                           dosis: '15-25 UI/kg/h según TTPA',           via: 'IV' },
      { indicacion: 'SCA/Trombosis arterial',           dosis: '12-15 UI/kg/h según TTPA',           via: 'IV' },
      { indicacion: 'Profilaxis (post-quirúrgico)',     dosis: '5,000 UI c/8-12h SC',                 via: 'SC' },
      { indicacion: 'Objetivo TTPA terapéutico',        dosis: '1.5-2.5× control',                    via: 'monitoreo' },
    ],

    embarazo: 'Categoría A (FDA) — no cruza placenta. Anticoagulante de elección en embarazo para TVP/EP/APS. Requiere monitorización de TTPA. NO usar warfarina (teratogénico 1er trimestre). Compatible con lactancia.',

    pediatria: 'Neonatos: 50 UI/kg bolo, luego 15-25 UI/kg/h IV. Niños: 50-100 UI/kg bolo, 15-20 UI/kg/h IV. Calcular según peso. Monitorización TTPA más frecuente. Usar bombas precisas.',

    adultoMayor: 'Mayor sensibilidad a heparina — TTPA más labil. Iniciar con dosis más bajas (75-80 UI/kg). Monitorización TTPA cada 6h inicialmente. Mayor riesgo de sangrado y TIH. Ajustes frecuentes.',

    insufRenal: 'En IRA: aclaramiento renal ↓, vida media ↑. Iniciar con dosis estándar pero monitorizar TTPA más frecuentemente (c/6h). En IRC severa (CrCl < 30): considerar reducción 20-30% de dosis mantenimiento.',

    insufHepatica: 'En cirrosis: síntesis de factores coagulación ↓, vida media heparina ↑. Mayor riesgo sangrado. Usar dosis menores, TTPA c/4-6h. Vigilancia sangrado estricta.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Heparin Sodium Injection, USP. U.S. National Library of Medicine.',
      'CIMA AEMPS. Ficha Técnica Heparina Sódica. Agencia Española de Medicamentos.',
      'ACCP Guidelines. Antithrombotic Therapy for VTE Disease. Chest. 2016 Feb.',
      'Micromedex Solutions. Heparin (Systemic). Accessed 2024.',
      'AHA/ACC Guidelines. Management of Acute Coronary Syndromes. Circulation. 2023.',
      'International Society on Thrombosis and Haemostasis. HIT Guidelines. 2015.',
    ],
  },

});
