/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/octreotido.js
   Fuentes: CIMA AEMPS (Sandostatin), FDA DailyMed,
   Baveno VII Consensus 2022, EASL Portal Hypertension 2022,
   ENETS Guidelines 2023
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'octreotido',
  nombre:         'Octreótido',
  nombreGenerico: 'Octreotide Acetate',
  categoria:      'otros',
  tags:           ['hemorragia variceal', 'carcinoide', 'tumor neuroendocrino', 'análogo somatostatina', 'hepatología', 'fístula digestiva', 'acromegalia'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Hemorragia variceal</b>: bolo 50 mcg IV → perfusión 25-50 mcg/h × 5 días (alternativa a terlipresina).',
      'Inicio <b>inmediato ante sospecha</b> de hemorragia variceal — antes de la endoscopia.',
      'Crisis carcinoide intraoperatoria: <b>bolo 100-500 mcg IV lento</b> en 2-3 min.',
      'SC puede usarse cuando no hay vía IV — absorción rápida y buena biodisponibilidad.',
      'Puede producir <b>bradicardia, bloqueo AV e hipoglucemia</b> — monitorización en uso IV.',
    ],

    resumenRapido: 'Análogo sintético de la somatostatina con mayor vida media (t½ 1.5-2 h vs 1-2 min de somatostatina). Inhibe la secreción de GH, glucagón, insulina, gastrina y péptidos vasoactivos intestinales. Reduce el flujo portal y esplácnico por vasoconstricción. Indicado en hemorragia variceal (alternativa a terlipresina con menos efectos vasculares), tumores neuroendocrinos (síndrome carcinoide), acromegalia y fístulas digestivas de alto gasto.',

    objetivoTerapeutico: 'Control de hemorragia variceal activa · Prevención de resangrado a corto plazo · Control del síndrome carcinoide y crisis carcinoide · Reducción de secreción de fístulas digestivas · Tratamiento de acromegalia',

    preparacion: {
      'Presentación':             '<b>Sandostatin® 0.1 mg/mL — ampolla 1 mL (100 mcg)</b>',
      'Presentación alta dosis':  'Sandostatin® 0.5 mg/mL — ampolla 1 mL (500 mcg)',
      'Diluyente':                'SF 0.9%',
      'Bolo hemorragia variceal': '<b>50 mcg IV en 2-3 min</b>',
      'Perfusión hemorragia':     '<b>25-50 mcg/h → 250-500 mcg en 250 mL SF (1-2 mcg/mL) × 5 días</b>',
      'Bolo crisis carcinoide':   '100-500 mcg IV lento en 2-3 min (repetir si precisa)',
      'SC (alternativa)':         '100-200 mcg SC c/8 h',
      'Fístula digestiva':        '100-200 mcg SC c/8 h o 25-50 mcg/h perfusión continua',
      'Vía':                      'IV lenta · SC · IM depot (LAR, uso crónico)',
      '⏱️ Inicio efecto':          'IV: inmediato · SC: 30 min',
      '⏱️ Duración':               'IV: 1-2 h · SC: 8-12 h',
      '🧊 Estabilidad':            '<b>Refrigerar 2-8°C. Diluida en SF: 24 h a temperatura ambiente</b>',
    },

    vigilancia: {
      antes: [
        'ECG basal en uso IV — riesgo de bradicardia y bloqueo AV.',
        'Glucemia basal — puede causar hipoglucemia (inhibe insulina) o hiperglucemia (inhibe glucagón).',
        'FC y TA basales.',
        'En hemorragia variceal: hemoglobina, coagulación, creatinina — contexto de cirrosis descompensada.',
        'Confirmar disponibilidad de endoscopia en hemorragia variceal.',
      ],
      durante: [
        'FC continua — bradicardia posible con bolo IV.',
        'Glucemia c/4-6 h en uso prolongado (hipoglucemia o hiperglucemia).',
        'TA c/30 min al inicio de la perfusión.',
        'Vigilar síntomas de hipoglucemia: sudoración, temblor, confusión.',
        'Control de hemorragia: débito SNG, TA, FC, hemoglobina.',
        'Náuseas, cólicos abdominales y diarrea — efectos frecuentes pero transitorios.',
      ],
      despues: [
        'Glucemia diaria en uso prolongado.',
        'Función hepática y biliar — riesgo de colelitiasis con uso crónico.',
        'En hemorragia variceal: documentar respuesta clínica, TA, FC y débito por SNG.',
        'Retirada gradual tras 5 días en hemorragia variceal — no suspender bruscamente en carcinoide.',
        'Transición a formulación LAR (depot IM mensual) en indicaciones crónicas.',
      ],
      suspender: [
        'Control de hemorragia conseguido + endoscopia realizada (hemorragia variceal).',
        'Al completar 5 días en hemorragia variceal.',
        'Hipoglucemia grave refractaria.',
        'Bradicardia sintomática o bloqueo AV con compromiso hemodinámico.',
      ],
    },

    incompatibilidades: [
      'No mezclar con nutrición parenteral total en la misma bolsa.',
      'Compatible con SF 0.9% para dilución.',
      'Administrar en vía separada si se usan otros fármacos IV simultáneamente.',
      'Puede alterar la absorción de ciclosporina oral — no administrar simultáneamente.',
    ],

    alertasSeguridad: [
      '🟠 BRADICARDIA Y BLOQUEO AV con bolo IV rápido — administrar lentamente en 2-3 min.',
      '🟠 HIPOGLUCEMIA — más frecuente en diabéticos insulinizados y ayuno prolongado. Glucemia c/4-6 h.',
      '🟠 HIPERGLUCEMIA — también posible (inhibición de insulina). Vigilar en diabéticos.',
      '🟡 Colelitiasis con uso crónico (>6 meses) — ecografía biliar de seguimiento.',
      '🟡 Náuseas, cólicos y diarrea — frecuentes al inicio, suelen mejorar.',
      '🟡 Hipotiroidismo con uso crónico — TSH en tratamientos prolongados.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'En hemorragia variceal: iniciar INMEDIATAMENTE al ingreso — no esperar a la endoscopia.',
      'Bolo IV: administrar lento en 2-3 min — bolo rápido causa bradicardia.',
      'Preparar perfusión: 250-500 mcg en 250 mL SF → 1-2 mcg/mL → calcular mL/h según dosis prescrita.',
      'FC continua durante bolo IV y primeras horas de perfusión.',
      'Glucemia antes y c/4-6 h durante uso prolongado — atención especial en diabéticos.',
      'Las ampollas deben sacarse de la nevera 15-30 min antes de la administración SC (menos molestia).',
      'Rotación de zonas SC: abdomen, muslos, brazos — no inyectar siempre en el mismo punto.',
      'Vigilar náuseas y cólicos en las primeras horas — son transitorios y no requieren suspender.',
      'Documentar FC, TA, glucemia y respuesta clínica (cese de hemorragia, débito SNG) en cada turno.',
      'En fístulas digestivas: medir y registrar el débito de la fístula para evaluar respuesta.',
    ],

    efectosAdversos: [
      '🟠 Bradicardia sinusal / bloqueo AV con IV rápido',
      '🟠 Hipoglucemia (especialmente diabéticos insulinizados)',
      '🟠 Hiperglucemia (inhibición de insulina endógena)',
      '🟡 Náuseas, vómitos, cólicos abdominales, diarrea (frecuentes al inicio)',
      '🟡 Dolor/eritema en zona de inyección SC',
      '🟡 Colelitiasis asintomática con uso crónico',
      '🟡 Hipotiroidismo con tratamiento prolongado',
    ],

    contraindicaciones: [
      'Hipersensibilidad a octreótido o análogos de somatostatina.',
      'Precaución en diabéticos insulinizados (hipoglucemia) y en cardiopatías (bradicardia).',
      'Embarazo: usar solo si beneficio > riesgo (datos limitados).',
    ],

    fotosensibilidad: 'No relevante. Conservar ampollas en nevera 2-8°C protegidas de la luz. Sacar de nevera 15-30 min antes del uso SC para reducir molestia en la inyección.',

    estabilidad: {
      'Ampolla sin abrir':     '<b>Refrigerada 2-8°C. Proteger de luz. NO congelar.</b>',
      'A temperatura ambiente': 'Estable hasta 14 días (para uso ambulatorio SC)',
      'Diluida en SF 0.9%':   '<b>24 h a temperatura ambiente</b>',
      'Aspecto':               'Solución incolora a amarillo muy pálido — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente — desechar sobrante.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% a temperatura ambiente.',
      notas:             'No mezclar con nutrición parenteral en la misma bolsa. Compatible con SF. Para uso SC crónico: puede conservarse a temperatura ambiente hasta 14 días.',
    },

    presentaciones: [
      'Sandostatin® 0.05 mg/mL — ampolla 1 mL (50 mcg)',
      'Sandostatin® 0.1 mg/mL — ampolla 1 mL (100 mcg)',
      'Sandostatin® 0.5 mg/mL — ampolla 1 mL (500 mcg)',
      'Sandostatin LAR® 10/20/30 mg — depot IM mensual (uso crónico)',
      'Octreótido Accord® / Hospira® — genéricos',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hemorragia variceal (bolo)',     dosis: '<b>50 mcg IV lento en 2-3 min</b>',                         via: 'IV' },
      { indicacion: 'Hemorragia variceal (perfusión)', dosis: '<b>25-50 mcg/h perfusión continua × 5 días</b>',            via: 'IV' },
      { indicacion: 'Crisis carcinoide',               dosis: '100-500 mcg IV lento en 2-3 min (repetir c/15 min si precisa)', via: 'IV' },
      { indicacion: 'Síndrome carcinoide (SC)',        dosis: '100-200 mcg SC c/8 h',                                     via: 'SC' },
      { indicacion: 'Fístula digestiva alto gasto',    dosis: '100-200 mcg SC c/8 h o 25-50 mcg/h perfusión',            via: 'SC/IV' },
    ],

    embarazo: 'Categoría B (FDA). Datos limitados. Cruza la barrera placentaria. Usar solo si el beneficio supera claramente el riesgo. En hemorragia variceal vital: puede utilizarse. Puede reducir el flujo umbilical — monitorización fetal.',

    pediatria: 'Tumores neuroendocrinos pediátricos: 1-10 mcg/kg/día SC en 2-4 dosis (ajustar según respuesta). Hipoglucemia neonatal persistente: 2-10 mcg/kg/día SC. Uso off-label en pediatría. Monitorizar glucemia estrechamente.',

    adultoMayor: 'Sin ajuste formal de dosis. Mayor riesgo de bradicardia y bloqueo AV. Función tiroidea y glucemia más frecuentes. Vigilar colelitiasis en uso crónico (ecografía anual).',

    insufRenal: 'Sin ajuste en dosis únicas o de corta duración. En uso crónico con IR grave: posible acumulación — reducir frecuencia de dosificación. Monitorización más estrecha.',

    insufHepatica: 'Metabolismo hepático. En cirrosis: vida media aumentada significativamente. Reducir dosis o aumentar intervalo en IH grave. Irónicamente la indicación principal (hemorragia variceal) ocurre en cirrosis — usar con monitorización estrecha.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Sandostatin® (octreótido).',
      'de Franchis R et al. Baveno VII Consensus — Expanding consensus in portal hypertension. J Hepatol. 2022.',
      'European Association for the Study of the Liver. EASL Clinical Practice Guidelines: Liver cirrhosis. J Hepatol. 2018.',
      'Ramage JK et al. Guidelines for the management of gastroenteropancreatic neuroendocrine (including carcinoid) tumours (NETs). Gut. 2012.',
      'ENETS Consensus Guidelines 2023. Neuroendocrine Tumours — Diagnosis and Treatment.',
      'Wells SA et al. Octreotide LAR for carcinoid tumor and the carcinoid syndrome. J Clin Oncol. 1994.',
    ],
  },

});
