/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/leucovorina.js
   Fuentes: CIMA AEMPS (Folinato Cálcico), FDA DailyMed,
   ASCO Colorectal Cancer Guidelines, Methotrexate Toxicity Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'leucovorina',
  nombre:         'Leucovorina (Ácido Folínico)',
  nombreComercial: 'Folinato Cálcico®',
  nombreGenerico: 'Calcium Folinate (Leucovorin Calcium)',
  categoria:      'otros',
  tags:           ['antídoto', 'metotrexato', 'rescate', 'quimioterapia', 'ácido folínico', 'oncología', '5-fluorouracilo'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antídoto específico del metotrexato — el "rescate con leucovorina" es tiempo-dependiente y su retraso puede ser fatal (toxicidad medular, mucositis grave, insuficiencia renal). La dosis y el momento de inicio dependen de los niveles plasmáticos de metotrexato. NO confundir con folato (ácido fólico) — la leucovorina es la forma activa reducida, eficaz incluso con la dihidrofolato reductasa bloqueada por el metotrexato.',

  nivel1: {

    puntosClave: [
      '<b>Antídoto específico del metotrexato a dosis altas</b> — el "rescate con leucovorina" previene la toxicidad medular y mucosa letal.',
      'Inicio <b>24 h después del metotrexato</b> (nunca antes — reduciría la eficacia antitumoral), guiado por niveles plasmáticos de metotrexato.',
      '<b>NO es lo mismo que ácido fólico</b> — la leucovorina es folato reducido activo, funcional incluso con la dihidrofolato reductasa inhibida.',
      'También <b>potencia el efecto del 5-fluorouracilo</b> en protocolos de quimioterapia colorrectal (biomodulación, no antídoto en este contexto).',
      'En sobredosis accidental de metotrexato o toxicidad grave: <b>dosis altas urgentes</b> — no retrasar por confirmación de niveles.',
    ],

    resumenRapido: 'Forma reducida y activa del ácido fólico (5-formil-tetrahidrofolato) que actúa como "rescate" tras la administración de metotrexato a dosis altas, aportando directamente el cofactor folato reducido que el metotrexato bloquea al inhibir la dihidrofolato reductasa. Esto permite que las células normales (especialmente médula ósea y mucosas) continúen la síntesis de purinas/pirimidinas y ADN, mientras las células tumorales (con captación preferencial de metotrexato) siguen siendo afectadas por el efecto citotóxico. Es distinto del ácido fólico convencional, que requiere la dihidrofolato reductasa (bloqueada) para activarse y por tanto es ineficaz como rescate. También se usa como potenciador (biomodulador) del 5-fluorouracilo en protocolos de quimioterapia para cáncer colorrectal.',

    objetivoTerapeutico: 'Rescate tras metotrexato a dosis altas (prevención de toxicidad medular/mucosa) · Tratamiento de la sobredosis o toxicidad grave por metotrexato · Potenciación del efecto del 5-fluorouracilo en quimioterapia colorrectal · Prevención de deficiencia de folato inducida por antifolatos',

    preparacion: {
      'Presentación':              '<b>Folinato Cálcico 10 mg/mL — vial/ampolla (varios tamaños: 25 mg, 50 mg, 100 mg, 350 mg)</b>',
      'Diluyente':                 'SF 0.9% o SG 5% para infusión',
      'Rescate tras metotrexato':  '<b>Iniciar 24 h después del metotrexato — dosis según protocolo y niveles plasmáticos (habitualmente 15 mg/m² IV/VO c/6 h)</b>',
      'Ajuste según niveles MTX':  'Aumentar la dosis de leucovorina si los niveles de metotrexato están elevados sobre lo esperado en el nomograma',
      'Toxicidad grave por MTX':   'Dosis altas urgentes: 100-1000 mg/m² IV según gravedad y niveles',
      'Potenciación de 5-FU':      '200 mg/m² o 20 mg/m² IV antes del 5-fluorouracilo según protocolo oncológico',
      'Velocidad de infusión':     'No superar 160 mg/min (por el contenido en calcio, riesgo de hipercalcemia si se infunde muy rápido)',
      'Vía':                       'IV · IM · Oral (dosis bajas de rescate estándar)',
      '⏱️ Inicio del rescate':      '<b>Exactamente 24 h tras el inicio del metotrexato — nunca antes</b>',
      '🧊 Estabilidad':             '<b>24 h a temperatura ambiente tras diluir</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar la hora exacta de administración del metotrexato — el rescate se inicia a las 24 h, ni antes ni con retraso significativo.',
        'Niveles plasmáticos de metotrexato disponibles o solicitados (guían la dosis y duración del rescate).',
        'Función renal — el metotrexato se elimina por vía renal; la insuficiencia renal prolonga su toxicidad y requiere rescate más intensivo.',
        'Hidratación y alcalinización urinaria (pH >7) si protocolo de metotrexato a dosis altas.',
      ],
      durante: [
        'Infundir a la velocidad indicada — no superar 160 mg/min por el contenido en calcio.',
        'Vigilar signos de hipercalcemia si la infusión es rápida o la dosis muy alta.',
        'Cumplir estrictamente los horarios de cada dosis de rescate (c/6 h según protocolo) — no omitir ni retrasar dosis.',
      ],
      despues: [
        'Niveles de metotrexato seriados (24, 48, 72 h) para ajustar la duración e intensidad del rescate.',
        'Función renal diaria durante el protocolo de metotrexato a dosis altas.',
        'Vigilar mucositis, mielosupresión (hemograma seriado) — signos de rescate insuficiente.',
        'Continuar el rescate hasta que los niveles de metotrexato estén por debajo del umbral de seguridad (habitualmente <0.05-0.1 μmol/L).',
        'Documentar cada dosis, hora exacta y niveles de metotrexato correspondientes.',
      ],
      suspender: [
        'Niveles de metotrexato por debajo del umbral de seguridad definido por el protocolo.',
        'Nunca suspender por decisión de enfermería sin confirmación médica — el rescate insuficiente puede ser letal.',
        'Reacción alérgica (rara).',
      ],
    },

    incompatibilidades: [
      'No mezclar en la misma solución con fármacos incompatibles con calcio.',
      'No administrar simultáneamente con trimetoprim en dosis altas sin supervisión (interacción antagonista/aditiva según contexto).',
      'Compatible con SF 0.9% y SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🔴 RESCATE TIEMPO-DEPENDIENTE — cada dosis omitida o retrasada tras metotrexato a dosis altas aumenta el riesgo de toxicidad letal (mielosupresión, mucositis grave, fallo renal).',
      '🔴 NO ES SUSTITUTO del ácido fólico convencional ni viceversa — verificar que se prescribe/administra el fármaco correcto.',
      '🔴 NO iniciar el rescate antes de las 24 h del metotrexato — reduciría la eficacia antitumoral del tratamiento.',
      '🟠 Contiene calcio — infusión rápida puede causar hipercalcemia; no superar 160 mg/min.',
      '🟡 Ajuste de dosis basado en niveles plasmáticos de metotrexato — comunicación estrecha con oncología/farmacia.',
    ],
  },

  modulos: {
    renal: `
      <b>Protocolo Metotrexato a Dosis Altas + Rescate con Leucovorina:</b><br/>
      <b>Antes de iniciar metotrexato:</b><br/>
      • Hidratación IV abundante + alcalinización urinaria (pH orina >7) — reduce la nefrotoxicidad.<br/>
      • Función renal basal normal confirmada.<br/><br/>
      <b>Rescate con leucovorina:</b><br/>
      • <b>Iniciar exactamente 24 h después</b> del inicio de la infusión de metotrexato.<br/>
      • Dosis habitual: 15 mg/m² IV/VO cada 6 horas.<br/>
      • Ajustar (aumentar) la dosis si los niveles de metotrexato a las 24, 48 o 72 h están por encima del nomograma esperado.<br/>
      • Continuar hasta que el nivel de metotrexato sea <0.05-0.1 μmol/L (según protocolo).<br/><br/>
      <b>Toxicidad grave / sobredosis de metotrexato:</b><br/>
      • Dosis de leucovorina mucho más altas y urgentes (100-1000 mg/m²) sin esperar confirmación de niveles.<br/>
      • Considerar glucarpidasa si está disponible en toxicidad renal grave (fármaco específico, no leucovorina).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar la hora exacta del inicio del metotrexato antes de programar la primera dosis de rescate (a las 24 h).',
      'Cumplir estrictamente el horario de cada dosis de rescate (c/6 h) — no omitir ni retrasar.',
      'Infundir a velocidad controlada, sin superar 160 mg/min.',
      'Verificar que se administra leucovorina (folinato cálcico) y NO ácido fólico — son fármacos distintos con roles distintos.',
      'Coordinar con el laboratorio la extracción de niveles de metotrexato en los horarios indicados (24, 48, 72 h).',
      'Vigilar mucositis oral, diarrea y signos de mielosupresión durante todo el protocolo.',
      'Mantener la hidratación y alcalinización urinaria según protocolo de metotrexato a dosis altas.',
      'Documentar cada dosis de rescate con su hora exacta — la trazabilidad es crítica en este protocolo.',
    ],

    efectosAdversos: [
      '🟡 Reacción alérgica (rara)',
      '🟡 Náuseas, vómitos',
      '🟡 Hipercalcemia (infusión rápida, dosis muy altas)',
      '🟡 Fiebre',
      '🟡 Diarrea',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida al ácido folínico.',
      'Anemia perniciosa u otras anemias megaloblásticas por déficit de vitamina B12 (puede enmascarar la deficiencia y permitir progresión de daño neurológico) — no es contraindicación en el contexto de rescate por metotrexato, pero relevante si se usa como suplemento de folato genérico.',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar el vial protegido de la luz, según ficha técnica (temperatura ambiente o refrigerado según presentación).',

    estabilidad: {
      'Vial sin abrir':        'Según ficha técnica del fabricante hasta vencimiento; proteger de la luz',
      'Diluido en SF/SG 5%':  '<b>24 h a temperatura ambiente</b>',
      'Aspecto':                'Solución amarillenta clara — normal (color propio del folato)',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura/dilución.',
      dosisRestante:     'Desechar sobrante de vial abierto no utilizado.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente.',
      notas:             'No confundir con ácido fólico (folato oxidado, inactivo como rescate de metotrexato). Infundir sin superar 160 mg/min por el contenido en calcio.',
    },

    presentaciones: [
      'Folinato Cálcico 25 mg/2.5 mL — vial',
      'Folinato Cálcico 50 mg/5 mL — vial',
      'Folinato Cálcico 100 mg/10 mL — vial',
      'Folinato Cálcico 350 mg/35 mL — vial (dosis altas oncológicas)',
      'Presentación oral (comprimidos) para rescate ambulatorio de baja dosis',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Rescate estándar tras MTX dosis altas', dosis: '<b>15 mg/m² IV/VO c/6 h, iniciando a las 24 h del MTX</b>', via: 'IV/VO' },
      { indicacion: 'Toxicidad grave/sobredosis de MTX',      dosis: '100-1000 mg/m² IV urgente según niveles',                  via: 'IV' },
      { indicacion: 'Potenciación de 5-fluorouracilo',        dosis: '200 mg/m² o 20 mg/m² IV antes del 5-FU (según protocolo)', via: 'IV' },
      { indicacion: 'Duración del rescate',                    dosis: 'Hasta nivel de MTX <0.05-0.1 μmol/L (individualizado)',    via: '—' },
    ],

    embarazo: 'Categoría C (FDA), aunque el ácido folínico en sí es generalmente considerado seguro; el contexto clínico relevante es la exposición a metotrexato (contraindicado en el embarazo por teratogenicidad grave). El rescate se usa en el contexto de tratamiento oncológico donde la decisión de continuar el embarazo requiere valoración multidisciplinar.',

    pediatria: 'Rescate en protocolos oncológicos pediátricos (leucemia, osteosarcoma) con las mismas dosis por m² de superficie corporal que en adultos, siguiendo estrictamente el protocolo institucional específico y los niveles plasmáticos de metotrexato.',

    adultoMayor: 'Mayor riesgo de toxicidad por metotrexato debido a la reducción fisiológica de la función renal — el rescate puede requerir mayor intensidad y duración. Vigilancia estrecha de función renal y niveles de metotrexato.',

    insufRenal: 'La insuficiencia renal es el principal factor que prolonga la toxicidad del metotrexato (eliminación renal). El rescate con leucovorina debe intensificarse y prolongarse en estos pacientes, guiado estrictamente por niveles plasmáticos seriados de metotrexato. Puede requerirse hemodiálisis o glucarpidasa en toxicidad renal grave.',

    insufHepatica: 'Sin ajuste de dosis específico de la leucovorina. La hepatopatía no es el factor limitante principal en este protocolo (a diferencia de la función renal).',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Folinato Cálcico (leucovorina).',
      'Widemann BC, Adamson PC. Understanding and managing methotrexate nephrotoxicity. Oncologist. 2006.',
      'Howard SC et al. Preventing and Managing Toxicities of High-Dose Methotrexate. Oncologist. 2016.',
      'André T et al. Oxaliplatin, fluorouracil, and leucovorin as adjuvant treatment for colon cancer. NEJM. 2004.',
      'NCCN Clinical Practice Guidelines in Oncology — Colon Cancer / ALL (protocolos de metotrexato a dosis altas).',
    ],
  },

});
