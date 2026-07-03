/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/desmopresina.js
   Fuentes: CIMA AEMPS (Minurin, DDAVP), FDA DailyMed,
   Haemophilia Guidelines WFH 2020,
   Endocrine Society DI Guidelines 2022
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'desmopresina',
  nombre:         'Desmopresina (DDAVP)',
  nombreGenerico: 'Desmopressin Acetate',
  categoria:      'otros',
  tags:           ['diabetes insípida', 'hemofilia A', 'von Willebrand', 'antidiurético', 'hemorragia', 'endocrinología', 'hematología'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Riesgo de hiponatremia dilucional grave, especialmente en pacientes con restricción de líquidos insuficiente. Producción de orina reducida: debe restringirse la ingesta de agua durante el efecto. Contraindicada en hiponatremia y polidipsia psicógena. Monitorizar sodio y osmolalidad.',

  nivel1: {

    puntosClave: [
      '<b>Diabetes insípida central</b>: 1-4 mcg IV/SC c/12-24 h — ajustar según diuresis y osmolalidad urinaria.',
      '<b>Hemofilia A leve / von Willebrand tipo 1</b>: 0.3 mcg/kg IV en 30 min — pico 30-90 min (libera FVIII y FvW endógenos).',
      '<b>RESTRICCIÓN HÍDRICA</b> durante el efecto — hiponatremia dilucional grave si bebe en exceso.',
      'Monitorizar <b>sodio plasmático</b> antes y durante el tratamiento, especialmente en niños y ancianos.',
      'La respuesta a la desmopresina en hemofilia y vWD <b>varía individualmente</b> — test de respuesta previo al uso quirúrgico.',
    ],

    resumenRapido: 'Análogo sintético de la vasopresina (ADH) con actividad preferentemente V2 (renal) sin efecto vasoconstrictor V1 significativo. Indicaciones principales: diabetes insípida central (reposición de ADH), hemofilia A leve y enfermedad de von Willebrand tipo 1 (estimula liberación de FVIII y FvW desde células endoteliales), enuresis nocturna. Riesgo principal: hiponatremia dilucional por retención excesiva de agua libre — fundamental restringir la ingesta hídrica durante el efecto.',

    objetivoTerapeutico: 'Controlar la poliuria en diabetes insípida central · Hemostasia en hemofilia A leve y vWD tipo 1 · Profilaxis y tratamiento de sangrado quirúrgico en pacientes con defecto plaquetario o disfunción plaquetaria · Enuresis nocturna (oral)',

    preparacion: {
      'Presentación IV':          '<b>Minurin® / DDAVP® 4 mcg/mL — ampolla 1 mL (4 mcg)</b>',
      'Diluyente':                'SF 0.9% (50-100 mL)',
      'Dosis DI central (IV/SC)': '<b>1-4 mcg IV o SC c/12-24 h</b>',
      'Dosis hemofilia/vWD':      '<b>0.3 mcg/kg en 50-100 mL SF → infundir en 20-30 min</b>',
      'Dosis máxima hemofilia':   'No superar 24 mcg/dosis (raramente necesario)',
      'Dosis pediátrica hemofilia': '0.3 mcg/kg IV (igual dosis/kg que adulto)',
      'Vía':                      'IV (preferible para hemostasia) · SC · Intranasal (DI crónica) · Oral (enuresis)',
      '⏱️ Inicio efecto (IV)':     '15-30 min',
      '⏱️ Pico efecto (hemostasia)': '30-90 min post-infusión',
      '⏱️ Duración':               '8-24 h según indicación y dosis',
      '🧊 Estabilidad':            '<b>Refrigerar 2-8°C — no congelar. Diluida: usar en 4-6 h</b>',
    },

    vigilancia: {
      antes: [
        'Sodio plasmático basal — contraindicado si hiponatremia (<135 mEq/L).',
        'Osmolalidad plasmática y urinaria en diabetes insípida.',
        'En hemofilia/vWD: FVIII:C, FvW:Ag, FvW:Act basales para evaluar respuesta posterior.',
        'Test de respuesta previo (test DDAVP) antes de cirugía programada — respuesta variable.',
        'Peso corporal y balance hídrico — vigilar retención hídrica.',
        'Revisar medicación: AINEs, carbamazepina, clorpropamida potencian el efecto antidiurético.',
      ],
      durante: [
        'Balance hídrico estricto — RESTRICCIÓN DE INGESTA HÍDRICA durante el efecto (mínimo 8 h).',
        'Sodio plasmático c/6-12 h en las primeras dosis o si hay riesgo de hiponatremia.',
        'Signos de hiponatremia: cefalea, náuseas, confusión, convulsiones.',
        'Peso diario — aumento >2 kg indica retención hídrica excesiva.',
        'TA y FC durante la infusión IV (hipotensión leve posible).',
        'En hemofilia: vigilar hemostasia y signos de sangrado.',
      ],
      despues: [
        'Ionograma (sodio) tras cada dosis en fases iniciales.',
        'Osmolalidad urinaria y diuresis en DI central para ajuste de dosis.',
        'En hemofilia: FVIII y FvW post-infusión a los 30-60 min para verificar respuesta.',
        'Documentar diuresis, balance hídrico y valores de sodio en cada turno.',
        'Taquifilaxia (pérdida de respuesta) puede ocurrir con dosis repetidas en hemofilia — descanso de 48-72 h.',
      ],
      suspender: [
        'Hiponatremia (<130 mEq/L) o síntomas neurológicos de hiponatremia.',
        'Sobrerrelleno hídrico con hiponatremia dilucional.',
        'Taquifilaxia en hemofilia — espaciar o cambiar a concentrados de FVIII.',
        'En DI central: ajustar dosis según diuresis — no suspender bruscamente.',
      ],
    },

    incompatibilidades: [
      'Compatible con SF 0.9% para dilución.',
      'No se recomienda mezclar con otros fármacos en la misma bolsa.',
      'Conservar las ampollas en refrigeración — sensible a temperatura.',
    ],

    alertasSeguridad: [
      '🔴 HIPONATREMIA DILUCIONAL — restricción hídrica OBLIGATORIA durante el efecto. Monitorizar sodio.',
      '🔴 CONTRAINDICADO en hiponatremia (<135 mEq/L) y polidipsia psicógena.',
      '🟠 Taquifilaxia en hemofilia con dosis repetidas — intervalo mínimo 48-72 h entre dosis.',
      '🟠 La respuesta en hemofilia/vWD es variable — realizar test DDAVP antes de cirugía programada.',
      '🟠 Ancianos y niños: mayor riesgo de hiponatremia — vigilancia más estricta de sodio.',
      '🟡 Hipotensión leve y rubor facial posibles durante la infusión IV rápida.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Instruir al paciente sobre la restricción hídrica durante el efecto (mínimo 8 h tras la dosis).',
      'Balance hídrico estricto — registrar ingresos y diuresis cada hora en DI central.',
      'Sodio plasmático antes de la primera dosis y periódicamente — avisar si <135 mEq/L.',
      'Diluir la dosis de hemostasia en 50-100 mL SF e infundir en 20-30 min.',
      'Anotar el peso diario — aumento >2 kg en 24 h sugiere retención hídrica excesiva.',
      'En hemofilia: informar al médico si el sangrado no se controla a los 30-60 min — puede precisar concentrado de FVIII.',
      'Vigilar signos de hiponatremia: cefalea progresiva, confusión, convulsiones — emergencia.',
      'Conservar las ampollas en nevera (2-8°C) — no dejar a temperatura ambiente por más de unas horas.',
      'No confundir con vasopresina (otra forma de ADH) — distintas dosis e indicaciones.',
      'Documentar dosis, vía, sodio y diuresis en cada administración.',
    ],

    efectosAdversos: [
      '🔴 Hiponatremia dilucional grave (convulsiones, coma) — especialmente niños y ancianos',
      '🟠 Retención hídrica / edema',
      '🟠 Hipotensión transitoria con infusión IV rápida',
      '🟠 Rubor facial, cefalea (vasodilatación leve)',
      '🟡 Náuseas, dolor abdominal',
      '🟡 Taquifilaxia con dosis repetidas (hemofilia)',
    ],

    contraindicaciones: [
      'Hiponatremia (<135 mEq/L) — contraindicación absoluta.',
      'Polidipsia psicógena.',
      'Insuficiencia cardíaca no controlada (retención hídrica).',
      'Hipertensión arterial grave.',
      'vWD tipo 2B (puede empeorar trombocitopenia).',
      'Hemofilia B y hemofilia A grave (sin efecto — usar concentrados de factor).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar en nevera (2-8°C) protegido de la luz. No congelar.',

    estabilidad: {
      'Ampolla sin abrir':    '<b>Refrigerada 2-8°C hasta vencimiento. NO congelar.</b>',
      'Diluida en SF 0.9%':  '<b>Usar en 4-6 h a temperatura ambiente</b>',
      'Fuera de nevera':      'Estable pocas horas a temperatura ambiente — no almacenar así',
      'Aspecto':              'Solución incolora — desechar si hay partículas',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras apertura — no guardar sobrante.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: 'Usar dentro de 4-6 h a temperatura ambiente tras dilución en SF.',
      notas:             'Las ampollas DEBEN conservarse en nevera. La solución diluida es estable pocas horas fuera de nevera. NO congelar. Diferente a vasopresina: desmopresina es más específica V2 (sin vasoconstricción V1).',
    },

    presentaciones: [
      'Minurin® 4 mcg/mL — ampolla 1 mL IV/SC',
      'DDAVP® 4 mcg/mL — ampolla 1 mL IV/SC',
      'Minurin® 0.1 mg y 0.2 mg — comprimidos (enuresis/DI oral)',
      'Minurin® 10 mcg/dosis — spray nasal (DI, hemofilia)',
      'Noctiva® spray nasal — enuresis nocturna',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'DI central (adulto)',             dosis: '<b>1-4 mcg IV/SC c/12-24 h</b> — ajustar según diuresis',       via: 'IV/SC' },
      { indicacion: 'Hemofilia A leve / vWD tipo 1',  dosis: '<b>0.3 mcg/kg IV en 50-100 mL SF → 20-30 min</b>',             via: 'IV' },
      { indicacion: 'Intranasal (DI crónica)',         dosis: '10-40 mcg intranasal c/12-24 h',                                via: 'Nasal' },
      { indicacion: 'Oral (enuresis)',                 dosis: '0.1-0.4 mg oral al acostarse',                                  via: 'VO' },
      { indicacion: 'Disfunción plaquetaria (cirugía)', dosis: '0.3 mcg/kg IV 30 min antes de procedimiento',                 via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Datos limitados en humanos. Se ha usado para DI central gestacional y hemostasia quirúrgica sin evidencia de daño fetal. Usar solo si claramente indicado. Vigilar estrechamente la hiponatremia materna y sus efectos fetales.',

    pediatria: 'DI central: 0.1-1 mcg/dosis IV c/12-24 h (peso dependiente). Hemofilia A/vWD: 0.3 mcg/kg IV (igual mcg/kg que adultos). Mayor riesgo de hiponatremia en niños pequeños — monitorización de sodio obligatoria cada 4-6 h. Enuresis ≥5 años: 0.1-0.2 mg oral nocturno.',

    adultoMayor: 'Mayor riesgo de hiponatremia dilucional — dosis más bajas (0.5-1 mcg IV en DI). Sodio plasmático más frecuente. Vigilar función renal (disminuida en ancianos). Restricción hídrica especialmente importante.',

    insufRenal: 'Precaución en IR moderada-grave (acumulación y mayor riesgo de hiponatremia). Hemofilia: valorar concentrados de factor como alternativa en IR significativa. En DI central con IR: dosis muy bajas y monitorización intensiva de sodio.',

    insufHepatica: 'Sin ajuste formal necesario. En cirrosis grave con ascitis: mayor retención hídrica — precaución con hiponatremia dilucional. Monitorizar sodio estrictamente.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Minurin® (desmopresina).',
      'Srivastava A et al. WFH Guidelines for the Management of Hemophilia. 3rd edition. Haemophilia. 2020.',
      'Garrahy A et al. Management of Hyponatraemia in Patients with Central Diabetes Insipidus. Clin Endocrinol. 2020.',
      'Di Nisio M et al. Desmopressin for preventing and treating acute bleeding and reducing the need for blood products in people with haemophilia A or B or von Willebrand disease. Cochrane. 2017.',
      'Endocrine Society. Clinical Practice Guideline for Diabetes Insipidus. J Clin Endocrinol Metab. 2022.',
      'AEMPS. Información para prescriptores: desmopresina y riesgo de hiponatremia. Nota informativa 2017.',
    ],
  },

});
