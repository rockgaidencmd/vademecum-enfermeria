/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/metoclopramida.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'metoclopramida',
  nombre:         'Metoclopramida',
  nombreGenerico: 'Metoclopramide Hydrochloride',
  categoria:      'otros',
  tags:           ['antiemético', 'procinético', 'náuseas', 'gastroparesia', 'reflujo'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Antiemético y procinético — antagonista D2 dopaminérgico central y periférico.',
      'Administración IV lenta OBLIGATORIA: 1-2 minutos mínimo — bolo rápido causa ansiedad, agitación, reacciones extrapiramidales.',
      'Riesgo de reacciones extrapiramidales agudas (distonía, crisis oculogiras) — más frecuente en jóvenes, mujeres, dosis altas.',
      'Antídoto distonía aguda: Difenhidramina 25-50 mg IV o Biperideno 5 mg IV.',
      'Uso máximo: 5 días continuos — riesgo de discinesia tardía con uso prolongado.',
    ],

    resumenRapido: 'Antagonista D2 dopaminérgico con propiedades antieméticas y procinéticas. Aumenta motilidad gastrointestinal alta, acelera vaciamiento gástrico, incrementa tono del esfínter esofágico inferior. Indicado en náuseas/vómitos (postoperatorio, quimioterapia, gastroenteritis), gastroparesia diabética, reflujo gastroesofágico. Inicio: 1-3 min IV, duración: 1-2h.',

    objetivoTerapeutico: 'Controlar náuseas y vómitos · Acelerar vaciamiento gástrico · Mejorar reflujo gastroesofágico · Facilitar intubación nasogástrica',

    preparacion: {
      'Presentación':             '10 mg/2 mL ampolla (5 mg/mL)',
      'Diluyente':                'SF 0.9% o SG 5% (compatibles ambos)',
      'Dilución IV directa':      'Sin diluir o diluido en 10-20 mL SF (mejor tolerancia)',
      'Dilución infusión corta':  '10-20 mg en 50 mL SF → infundir en 15 min',
      'Vía':                      'IV lento, IM, VO',
      '⏱️ TIEMPO INFUSIÓN':       '<b>IV directo: mínimo 1-2 minutos · Infusión: 15 minutos</b>',
      'Bomba':                    'Recomendada para infusión corta',
      '🧊 ESTABILIDAD POST-PREPARACIÓN': '<b>24 horas a 15-25°C (TA) · 48 horas refrigerado (2-8°C)</b>',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez o cambio de color',
    },

    vigilancia: {
      antes: [
        'Verificar antecedentes de reacciones extrapiramidales o discinesia.',
        'Comprobar uso de otros antagonistas dopaminérgicos (haloperidol, otros).',
        'Revisar edad — mayor riesgo en jóvenes (< 30 años) y mujeres.',
        'Comprobar función renal — ajuste de dosis en IRC.',
        'Confirmar prescripción: dosis, vía, frecuencia, duración máxima 5 días.',
      ],
      durante: [
        'Administrar IV lentamente (1-2 min mínimo) — evita ansiedad y reacciones extrapiramidales.',
        'Observar reacciones inmediatas: ansiedad, agitación, sudoración, crisis oculogiras.',
        'Vigilar PA — puede causar hipotensión leve.',
        'Si reacción extrapiramidal aguda: DETENER, administrar difenhidramina 25-50 mg IV o biperideno 5 mg IV.',
      ],
      despues: [
        'Evaluar respuesta antiemética en 15-30 min.',
        'Vigilar reacciones tardías (24-72h): rigidez, temblor, discinesia.',
        'Si tratamiento > 5 días: vigilancia estricta de discinesia tardía.',
        'Documentar: dosis, hora, respuesta clínica, efectos adversos.',
      ],
      suspender: [
        'Reacción extrapiramidal aguda severa.',
        'Discinesia tardía detectada.',
        'Síndrome neuroléptico maligno (raro pero grave): hipertermia, rigidez, alteración consciencia.',
        'Convulsiones.',
        'Tratamiento > 5 días sin clara indicación.',
        'Prescripción médica de suspensión.',
      ],
    },

    incompatibilidades: [
      'Cefepime — incompatibilidad documentada.',
      'Cisplatino — precipitación posible.',
      'Furosemida — incompatibilidad en algunas condiciones.',
      'Ampicilina, eritromicina — verificar antes de mezclar.',
      'No mezclar en misma jeringa con otros fármacos sin verificar compatibilidad.',
    ],

    alertasSeguridad: [
      '🟠 Reacciones extrapiramidales agudas — más frecuentes en jóvenes y mujeres.',
      '🟠 Discinesia tardía con uso prolongado (> 12 semanas) — puede ser IRREVERSIBLE.',
      '🟠 Síndrome neuroléptico maligno (raro pero grave) — hipertermia, rigidez, confusión.',
      '🟡 Sedación leve a moderada — precaución conducir o maquinaria.',
      '🟡 Hipotensión leve con bolo rápido.',
      '🟡 En ancianos: mayor riesgo de discinesia y confusión.',
    ],
  },

  modulos: {

    extrapiramidal: `
      <b>Manejo de reacción extrapiramidal aguda (distonía):</b><br/>
      <b>Síntomas:</b><br/>
      • Crisis oculogiras (mirada fija hacia arriba).<br/>
      • Tortícolis, rigidez cervical.<br/>
      • Protrusión lingual, trismus.<br/>
      • Opistótonos.<br/>
      • Ansiedad, agitación severa.<br/><br/>
      <b>Manejo inmediato:</b><br/>
      1. DETENER metoclopramida.<br/>
      2. Difenhidramina 25-50 mg IV lento (anticolinérgico).<br/>
      3. Alternativa: Biperideno 5 mg IV.<br/>
      4. Si crisis oculogiras: monitorización respiratoria.<br/>
      5. Tranquilizar al paciente — explicar naturaleza transitoria.<br/>
      6. Documentar reacción adversa — futura contraindicación.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Administrar IV lentamente — mínimo 1-2 minutos. NUNCA bolo rápido.',
      'Diluir en 10-20 mL SF para mejor tolerancia y reducir reacciones agudas.',
      'Vigilar al paciente durante y 30 min post-administración.',
      'Tener difenhidramina (antídoto distonía) disponible.',
      'Educar al paciente: posibles reacciones extrapiramidales — buscar ayuda si rigidez, mirada fija, dificultad tragar.',
      'NO usar > 5 días continuos sin reevaluación médica.',
      'En ancianos: dosis reducida, vigilancia intensiva.',
      'En IRC: ajustar dosis según CrCl.',
      'Documentar: hora administración, dosis, respuesta clínica.',
    ],

    efectosAdversos: [
      '🟠 Reacciones extrapiramidales agudas — distonía, crisis oculogiras',
      '🟠 Discinesia tardía — uso > 12 semanas (puede ser irreversible)',
      '🟠 Síndrome neuroléptico maligno (raro)',
      '🟠 Convulsiones (raras)',
      '🟡 Sedación, somnolencia',
      '🟡 Ansiedad, inquietud',
      '🟡 Hipotensión leve',
      '🟡 Diarrea',
      '🟡 Galactorrea, ginecomastia (uso prolongado)',
      '🟡 Trastornos menstruales',
    ],

    contraindicaciones: [
      'Hemorragia digestiva, perforación u obstrucción mecánica (contraindicación absoluta).',
      'Feocromocitoma.',
      'Epilepsia activa.',
      'Discinesia tardía previa.',
      'Hipersensibilidad a metoclopramida.',
      'Combinación con antipsicóticos potentes.',
    ],

    fotosensibilidad: 'No relevante. La solución puede protegerse de luz directa pero no requiere envase opaco.',

    estabilidad: {
      'Ampolla sin abrir':      'Temperatura ambiente hasta vencimiento',
      'Diluida en SF/SG 5%':    '<b>24 horas a TA · 48 horas refrigerada (2-8°C)</b>',
      'Temperatura':            'NO congelar · Mantener 15-25°C',
      'Aspecto':                'Transparente, incolora — desechar si turbidez',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato. Desechar sobrante.',
      dosisRestante:    'No conservar. Desechar inmediatamente.',
      infusionPreparada:'24 h a temperatura ambiente en SF 0.9% o SG 5%.',
      notas:            'Proteger de la luz. Desechar si hay cambio de color. Compatible con la mayoría de soluciones IV.',
    },

    presentaciones: [
      'Metoclopramida 10 mg/2 mL solución inyectable — ampolla 2 mL',
      'Metoclopramida 10 mg comprimidos (uso VO)',
      'Metoclopramida 1 mg/mL solución oral',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Náuseas/vómitos adulto',            dosis: '10 mg IV c/6-8h',                    via: 'IV/IM/VO' },
      { indicacion: 'Profilaxis NVPO',                   dosis: '10 mg IV pre-inducción',             via: 'IV' },
      { indicacion: 'Gastroparesia',                     dosis: '10 mg IV c/6h',                      via: 'IV/VO' },
      { indicacion: 'Dosis máxima diaria',               dosis: '30 mg/día (0.5 mg/kg/día)',          via: 'IV/VO' },
      { indicacion: 'Duración máxima',                   dosis: '5 días continuos',                    via: 'todas' },
    ],

    embarazo: 'Categoría B (FDA). Usada en hiperémesis gravídica con seguridad relativa. Datos limitados pero no evidencia clara de teratogenicidad. Compatible con lactancia en dosis terapéuticas (pasa a leche en cantidades pequeñas).',

    pediatria: 'Niños > 1 año: 0.1-0.15 mg/kg/dosis (máximo 10 mg) c/6-8h. Mayor riesgo de reacciones extrapiramidales en pediatría — usar con precaución. NO recomendado < 1 año.',

    adultoMayor: 'Mayor sensibilidad a sedación, confusión, discinesia tardía. REDUCIR DOSIS a 5 mg c/8h. Vigilancia estricta de reacciones extrapiramidales.',

    insufRenal: 'En CrCl < 40 mL/min: REDUCIR DOSIS 50% (5 mg c/8h). En diálisis: administrar tras sesión. Vida media prolongada — acumulación posible.',

    insufHepatica: 'En cirrosis: REDUCIR DOSIS 50%. Mayor riesgo de sedación y efectos centrales.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Metoclopramide Hydrochloride Injection. U.S. National Library of Medicine.',
      'FDA Black Box Warning. Metoclopramide and Tardive Dyskinesia. 2009.',
      'CIMA AEMPS. Ficha Técnica Metoclopramida. Agencia Española de Medicamentos.',
      'AGA Guidelines. Management of Gastroparesis. Gastroenterology. 2022.',
      'Micromedex Solutions. Metoclopramide (Injectable). Accessed 2024.',
    ],
  },

});
