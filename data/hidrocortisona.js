/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/hidrocortisona.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'hidrocortisona',
  nombre:         'Hidrocortisona',
  nombreGenerico: 'Hydrocortisone Sodium Succinate',
  categoria:      'otros',
  tags:           ['UCI', 'corticoide', 'anafilaxia', 'shock séptico', 'insuficiencia suprarrenal', 'antiinflamatorio'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Glucocorticoide natural con actividad glucocorticoide y mineralocorticoide moderada.',
      'Reconstituir con el solvente del fabricante (2 mL agua para inyección) — luego diluir en SF/SG 5%.',
      'Administración IV: bolo lento (30 seg-1 min) o infusión (15-30 min).',
      'En shock séptico: dosis bajas (200 mg/día) reducen mortalidad — controvertido pero recomendado en sepsis refractaria.',
      'Monitorizar glucemia c/4-6h — hiperglucemia frecuente, puede requerir insulina.',
    ],

    resumenRapido: 'Glucocorticoide de acción intermedia. Actúa sobre receptores citoplasmáticos modulando transcripción génica de mediadores inflamatorios. Indicado en anafilaxia/reacción alérgica severa, insuficiencia suprarrenal aguda (crisis addisoniana), shock séptico refractario, asma severa, edema cerebral, púrpura trombocitopénica idiopática. Inicio: 1-2h IV (rápido en anafilaxia), duración 8-12h.',

    objetivoTerapeutico: 'Suprimir reacción inflamatoria/inmune · Reemplazo corticoide en insuficiencia suprarrenal · Mejorar hemodinamia en shock séptico · Reducir edema cerebral',

    preparacion: {
      'Presentación':             '100 mg vial liofilizado + ampolla solvente (2 mL)',
      'Presentación alt.':        '500 mg, 1000 mg vial liofilizado',
      'Reconstitución':           '100 mg + 2 mL agua inyección → 50 mg/mL',
      'Diluyente final':          'SF 0.9% o SG 5%',
      'Dilución IV bolo':         '100 mg reconstituido (sin diluir) o + 50-100 mL SF',
      'Infusión continua':        '200 mg en 200 mL SF a 8.3 mL/h = 8.3 mg/h',
      'Vía':                      'IV bolo lento o infusión IV',
      '⏱️ TIEMPO INFUSIÓN':       '<b>Bolo: 30 seg-1 min · Infusión corta: 15-30 min</b>',
      '⏱️ INFUSIÓN CONTINUA':     '<b>200 mg/día en infusión continua (8.3 mg/h)</b> en shock séptico',
      'Bomba':                    'Bomba de infusión recomendada para infusión continua',
      '🧊 ESTABILIDAD POST-RECONSTITUCIÓN': '<b>3 días a TA (15-25°C) · 7 días refrigerada (2-8°C)</b>',
      '🧊 Diluida en SF/SG 5%':  '<b>24 horas a TA · 48 horas refrigerada</b>',
      'Aspecto':                  'Solución incolora a ligeramente amarillenta — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Verificar glucemia basal — corticoides ↑ glucosa.',
        'Comprobar PA basal — hidrocortisona puede ↑ PA (efecto mineralocorticoide).',
        'Revisar antecedentes: diabetes, hipertensión, infecciones activas, úlcera péptica.',
        'En anafilaxia: confirmar diagnóstico y administrar adrenalina primero.',
        'Confirmar prescripción: dosis, vía, indicación.',
      ],
      durante: [
        'Bolo IV en mínimo 30 seg — bolo rápido causa rubor, ansiedad, ardor genital.',
        'Vigilar reacción local en sitio IV — extravasación rara pero irritante.',
        'En anafilaxia: monitorización CV/respiratoria intensiva (junto con adrenalina, antihistamínicos).',
        'En infusión continua: vigilancia c/4-6h.',
      ],
      despues: [
        'Monitorizar glucemia c/4-6h × 24h — hiperglucemia muy frecuente.',
        'Vigilar PA — puede ↑ por retención sodio.',
        'Controlar electrolitos (K+, Na+) c/24h — riesgo hipopotasemia.',
        'Vigilar signos de infección — corticoides enmascaran fiebre/leucocitosis.',
        'En uso prolongado: descenso progresivo (NO suspender abruptamente) — riesgo insuficiencia suprarrenal.',
      ],
      suspender: [
        'Reacción alérgica al fármaco (rara).',
        'Hiperglucemia severa no controlable.',
        'Hipertensión severa refractaria.',
        'Infección oculta empeorando (sepsis no controlada).',
        'Sangrado digestivo activo.',
        'Prescripción médica de descenso/suspensión gradual.',
      ],
    },

    incompatibilidades: [
      'Heparina — incompatibilidad documentada en algunas formulaciones.',
      'Fenitoína — precipitación.',
      'Difenhidramina — incompatibilidad en jeringa.',
      'Midazolam — verificar compatibilidad antes de mezclar.',
      'Insulina — adsorción al PVC reduce efecto (lavar línea con SF entre administraciones).',
      'Lavar línea con SF antes y después.',
    ],

    alertasSeguridad: [
      '🟠 Hiperglucemia muy frecuente — monitorizar glucemia c/4-6h, puede requerir insulina.',
      '🟠 Hipertensión por retención sodio — vigilar PA.',
      '🟠 Hipopotasemia — monitorizar K+, suplementar si necesario.',
      '🟠 Inmunosupresión — enmascara signos de infección, ↑ riesgo de sepsis.',
      '🟡 Úlcera péptica — riesgo ↑, considerar protección gástrica.',
      '🟡 Psicosis esteroidea — alteraciones de humor, agitación, insomnio.',
      '🟡 NO suspender abruptamente uso prolongado — riesgo de crisis suprarrenal.',
    ],
  },

  modulos: {

    anafilaxia: `
      <b>Hidrocortisona en Anafilaxia (terapia ADYUVANTE, no primaria):</b><br/>
      <b>Importante:</b> Adrenalina IM es el tratamiento primario, NO corticoides.<br/>
      <b>Dosis:</b> 100-200 mg IV bolo, repetir c/6h × 24-48h.<br/>
      <b>Objetivo:</b> Prevenir reacción bifásica (4-12h post-anafilaxia inicial).<br/>
      <b>Combinar con:</b><br/>
      • Adrenalina 0.3-0.5 mg IM (primera línea).<br/>
      • Difenhidramina 25-50 mg IV (antihistamínico H1).<br/>
      • Ranitidina/famotidina IV (antihistamínico H2).<br/>
      • Salbutamol nebulizado si broncoespasmo.
    `,

    sepsis: `
      <b>Hidrocortisona en Shock Séptico Refractario (Surviving Sepsis 2021):</b><br/>
      <b>Indicación:</b> Shock séptico con persistencia de necesidad vasopresora pese a fluidoterapia + noradrenalina.<br/>
      <b>Dosis:</b> 200 mg/día IV (50 mg c/6h o infusión continua 8.3 mg/h).<br/>
      <b>Duración:</b> Hasta retiro de vasopresores + 24h.<br/>
      <b>Beneficio:</b> Reducción mortalidad en sepsis refractaria (estudios CORTICUS, ADRENAL, APROCCHSS).<br/>
      <b>Vigilancia:</b> Glucemia c/4-6h, electrolitos, signos infección secundaria.
    `,

    glucemia: `
      <b>Monitorización glucémica obligatoria:</b><br/>
      • Glucemia capilar antes de iniciar corticoide.<br/>
      • Glucemia c/4-6h durante 24-48h post-administración.<br/>
      • Si glucemia > 180 mg/dL: iniciar insulina regular IV o SC.<br/>
      • Objetivo glucémico UCI: 140-180 mg/dL.<br/>
      • En diabéticos: ajuste de insulina basal/bolo según protocolo.<br/>
      • Documentar glucemia y dosis insulina administrada.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir SOLO con el solvente del fabricante.',
      'Etiquetar con: Hidrocortisona [dosis], concentración, hora preparación, fecha límite (3 días TA o 7 días refrigerada).',
      'Lavar línea con SF antes y después de administrar.',
      'Monitorizar glucemia c/4-6h × 24-48h — iniciar insulina si > 180 mg/dL.',
      'Vigilar PA c/4-6h — corticoides ↑ retención sodio.',
      'Controlar K+ sérico — riesgo hipopotasemia.',
      'En shock séptico: documentar dosis vasopresor, PA, lactato.',
      'En anafilaxia: NUNCA reemplazar adrenalina con corticoide — corticoide es adyuvante.',
      'En uso prolongado (> 7 días): plan de descenso progresivo coordinado con médico.',
      'Educar al paciente: NO suspender bruscamente si uso > 2-3 semanas.',
    ],

    efectosAdversos: [
      '🟠 Hiperglucemia — muy frecuente, puede requerir insulina',
      '🟠 Hipertensión — por retención sodio',
      '🟠 Hipopotasemia — efecto mineralocorticoide',
      '🟠 Inmunosupresión — riesgo de infecciones',
      '🟠 Úlcera péptica — sangrado digestivo',
      '🟡 Psicosis esteroidea — agitación, insomnio, euforia',
      '🟡 Aumento de peso, edema',
      '🟡 Acné, hirsutismo',
      '🟡 Osteoporosis (uso prolongado)',
      '🟡 Cataratas, glaucoma (uso prolongado)',
      '🟡 Cushing iatrogénico (uso prolongado)',
    ],

    contraindicaciones: [
      'Infección fúngica sistémica no tratada (contraindicación absoluta).',
      'Hipersensibilidad a hidrocortisona.',
      'Vacunación con virus vivos atenuados (contraindicación relativa).',
      'Tuberculosis activa no tratada.',
      'Precaución en: diabetes, hipertensión, úlcera péptica, osteoporosis, glaucoma.',
    ],

    fotosensibilidad: 'No relevante.',

    estabilidad: {
      'Vial sin reconstituir':       'Temperatura ambiente hasta vencimiento',
      'Reconstituido (50 mg/mL)':    '<b>3 días a TA (15-25°C) · 7 días refrigerado (2-8°C)</b>',
      'Diluido en SF/SG 5%':         '<b>24 horas a TA · 48 horas refrigerado</b>',
      'Temperatura':                 'NO congelar · Mantener 15-25°C',
      'Aspecto':                     'Incolora a ligeramente amarillenta — desechar si turbidez',
    },

    presentaciones: [
      'Hidrocortisona Succinato Sódico 100 mg vial liofilizado + solvente 2 mL',
      'Hidrocortisona Succinato Sódico 500 mg vial liofilizado',
      'Hidrocortisona Succinato Sódico 1000 mg vial liofilizado',
      'Hidrocortisona acetato 25 mg/mL suspensión inyectable (uso intraarticular)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Anafilaxia',                        dosis: '100-200 mg IV c/6h',                via: 'IV' },
      { indicacion: 'Crisis suprarrenal (carga)',        dosis: '100 mg IV bolo + 200 mg/día',       via: 'IV' },
      { indicacion: 'Shock séptico refractario',         dosis: '200 mg/día (50 mg c/6h o infusión)',via: 'IV' },
      { indicacion: 'Asma severa',                       dosis: '100-200 mg IV c/6h',                via: 'IV' },
      { indicacion: 'Edema cerebral',                    dosis: '100 mg IV c/6h',                     via: 'IV' },
      { indicacion: 'PTI severa',                        dosis: '500 mg-1 g IV/día × 3 días',        via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA) — atraviesa placenta. Usar solo si beneficio supera riesgo. En insuficiencia suprarrenal materna o anafilaxia: indicación clara. Vigilancia neonatal de insuficiencia suprarrenal si dosis altas peri-parto. Compatible con lactancia.',

    pediatria: 'Dosis: 2-4 mg/kg/dosis IV c/6h en anafilaxia. Crisis suprarrenal: 1-2 mg/kg IV bolo, luego 25-50 mg/m²/día. Monitorización de crecimiento en uso prolongado.',

    adultoMayor: 'Mayor riesgo de hiperglucemia, hipertensión, osteoporosis, fracturas, infecciones. Reducir dosis si posible. Vigilancia intensiva.',

    insufRenal: 'Sin ajuste de dosis significativo. En diálisis: pequeña cantidad eliminada — sin reposición necesaria.',

    insufHepatica: 'En cirrosis: reducir dosis si signos de insuficiencia hepática severa. Mayor riesgo de retención hidrosalina y descompensación.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Hydrocortisone Sodium Succinate for Injection. U.S. National Library of Medicine.',
      'Surviving Sepsis Campaign 2021. Hydrocortisone in Septic Shock. Intensive Care Med.',
      'Annane D, et al. Hydrocortisone plus Fludrocortisone for Septic Shock. NEJM. 2018.',
      'CIMA AEMPS. Ficha Técnica Hidrocortisona. Agencia Española de Medicamentos.',
      'Endocrine Society Guidelines. Adrenal Insufficiency. J Clin Endocrinol Metab. 2016.',
      'Micromedex Solutions. Hydrocortisone (Injectable). Accessed 2024.',
    ],
  },

});
