/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/milrinona.js
   Fuentes: CIMA AEMPS (Corotrope), FDA DailyMed,
   ESC HF Guidelines 2021, OPTIME-CHF Trial JAMA 2002,
   ACCF/AHA Heart Failure Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'milrinona',
  nombre:         'Milrinona',
  nombreGenerico: 'Milrinone',
  categoria:      'vasopresores',
  tags:           ['inodilatador', 'insuficiencia cardíaca', 'shock cardiogénico', 'inhibidor PDE3', 'vasodilatador', 'UCI', 'cardíaco'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Inodilatador de uso exclusivo en UCI/UCC. Produce hipotensión significativa (vasodilatación sistémica y pulmonar). Arritmias frecuentes. Requiere monitorización hemodinámica invasiva. Ajuste de dosis obligatorio en insuficiencia renal. No combinarlo con furosemida en la misma vía (precipitación).',

  nivel1: {

    puntosClave: [
      '<b>Inodilatador</b>: aumenta contractilidad cardiaca Y produce vasodilatación periférica + pulmonar — único entre los inotrópicos.',
      'Perfusión continua: <b>0.375-0.75 mcg/kg/min</b>. Dosis de carga 50 mcg/kg en 10 min (opcional — omitir si TA baja).',
      '<b>HIPOTENSIÓN</b> frecuente — verificar TA antes de cada ajuste. Objetivo PAM >65 mmHg.',
      '<b>ARRITMIAS</b> — monitorización ECG continua obligatoria. Aumenta riesgo de FA/flutter y arritmias ventriculares.',
      '<b>Ajuste en IR</b>: elimina 85% por vía renal — acumulación grave en insuficiencia renal.',
    ],

    resumenRapido: 'Inhibidor selectivo de la fosfodiesterasa III (PDE3) cardíaca y vascular. Aumenta el AMPc intracelular en cardiomiocitos y músculo liso vascular, produciendo inotropismo positivo y vasodilatación simultánea (inodilatador). Reduce la precarga y postcarga. Especialmente útil en ICC con hipertensión pulmonar. Alternativa a dobutamina en pacientes tratados con betabloqueantes (no compite con receptores beta).',

    objetivoTerapeutico: 'Mejorar gasto cardíaco en ICC descompensada · Reducir presión de llenado ventricular · Disminuir resistencias vasculares sistémicas y pulmonares · Puente a trasplante o dispositivo de asistencia ventricular',

    preparacion: {
      'Presentación':           '<b>Corotrope® 10 mg/10 mL (1 mg/mL) — vial 10 mL</b>',
      'Diluyente':              '<b>SF 0.9% o SG 5%</b>',
      'Concentración estándar': '<b>20 mg en 100 mL SF → 200 mcg/mL</b>',
      'Concentración alta':     '20 mg en 40 mL SF → 500 mcg/mL (restricción hídrica)',
      'Carga (opcional)':       '50 mcg/kg IV en 10 min (omitir si TA sistólica <90 mmHg)',
      'Mantenimiento':          '<b>0.375-0.75 mcg/kg/min</b> — titular según respuesta clínica',
      'Inicio':                 'Comenzar en 0.375 mcg/kg/min — aumentar c/30 min si tolera',
      'Vía':                    '<b>Venosa central preferente</b> — periférica solo si emergencia',
      '⏱️ Inicio efecto':        '5-15 min · Pico: 1-2 h',
      'Bomba':                  '<b>Bomba de jeringa OBLIGATORIA</b>',
      '🧊 Estabilidad':          '<b>24-72 horas a temperatura ambiente según dilución</b>',
    },

    vigilancia: {
      antes: [
        'PA invasiva (línea arterial) o no invasiva cada 5 min al inicio.',
        'Función renal basal: creatinina y ClCr — ajuste de dosis obligatorio si IR.',
        'ECG basal — evaluar ritmo cardíaco de base.',
        'Potasio sérico: hipopotasemia potencia arritmias con milrinona.',
        'Ecocardiografía o PiCCO si disponible — para ajustar dosis según parámetros hemodinámicos.',
        'Peso actual para calcular velocidad de infusión en mcg/kg/min.',
      ],
      durante: [
        'TA cada 5-15 min al inicio, luego c/30 min cuando estable.',
        'Monitorización ECG continua — vigilar FA, flutter, ESV, TVNS.',
        'FC — taquicardia >120 lpm: reducir dosis y valorar causa.',
        'Diuresis horaria (objetivo >0.5 mL/kg/h).',
        'Si TA sistólica <85 mmHg: reducir velocidad, infundir fluidos si tolera, valorar vasopresor.',
        'Potasio cada 6-12 h — hipopotasemia favorece arritmias.',
      ],
      despues: [
        'Monitorización hemodinámica continua hasta estabilización.',
        'Creatinina diaria — acumulación en IR puede causar toxicidad.',
        'Evaluar mejoría: diuresis, reducción de edemas, mejora de TA y débito cardíaco.',
        'Retirada gradual: disminuir 0.1 mcg/kg/min c/2-4 h — no suspender bruscamente.',
        'Documentar velocidad de infusión, TA, FC y respuesta hemodinámica cada turno.',
      ],
      suspender: [
        'Hipotensión grave refractaria (PAM <55 mmHg a pesar de ajustes).',
        'Arritmias ventriculares graves (TV sostenida, FV).',
        'Mejoría hemodinámica consolidada — reducción progresiva.',
        'Trasplante cardíaco o implante de DAV completado.',
        'Decisión médica de cambio de inotrópico.',
      ],
    },

    incompatibilidades: [
      '<b>FUROSEMIDA — precipita inmediatamente en la misma vía</b> (cristalización visible).',
      'Imipenem-cilastatina — incompatibilidad física.',
      'Procainamida — incompatibilidad.',
      'Administrar furosemida siempre en vía separada.',
      'Compatible en Y con: dobutamina, dopamina, nitroglicerina (verificar).',
    ],

    alertasSeguridad: [
      '🔴 HIPOTENSIÓN — frecuente y puede ser grave. Tener fluidos y vasopresores preparados.',
      '🔴 FUROSEMIDA EN MISMA VÍA — precipitación inmediata visible. Vías separadas SIEMPRE.',
      '🔴 ARRITMIAS — monitorización ECG continua. FA y arritmias ventriculares frecuentes.',
      '🟠 Ajuste OBLIGATORIO en insuficiencia renal — acumulación con toxicidad.',
      '🟠 Hipopotasemia potencia arritmias — reponer potasio agresivamente.',
      '🟡 No usar con el único objetivo de tratar la hipotensión — es vasodilatador.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Calcular velocidad exacta en mcg/kg/min con el peso actual — programar bomba de jeringa.',
      'Monitorización ECG continua desde el inicio — advertir arritmias nuevas.',
      'PA cada 5-15 min durante la carga y al inicio de la perfusión, luego c/30 min.',
      'NUNCA administrar furosemida en la misma vía — usar vías separadas siempre.',
      'Si TA sistólica <85 mmHg: reducir velocidad e informar al médico.',
      'Control de potasio cada 6-12 h — reponer agresivamente si <3.5 mEq/L.',
      'Diuresis horaria — objetivo >0.5 mL/kg/h con mejoría de los edemas.',
      'Creatinina diaria — comunicar si empeora (ajuste de dosis necesario).',
      'Retirada gradual: reducir 0.1 mcg/kg/min c/2-4 h al suspender.',
      'Documentar velocidad de infusión, TA y FC en cada turno.',
    ],

    efectosAdversos: [
      '🔴 Hipotensión (20-30% de pacientes)',
      '🔴 Arritmias ventriculares (TV, ESV frecuentes)',
      '🟠 Fibrilación/flutter auricular',
      '🟠 Taquicardia sinusal',
      '🟠 Cefalea (vasodilatación cerebral)',
      '🟡 Trombocitopenia (reversible)',
      '🟡 Hipopotasemia',
    ],

    contraindicaciones: [
      'Hipotensión severa sin soporte vasopresor adecuado (PAM <55 mmHg).',
      'Estenosis aórtica o mitral severa (la vasodilatación puede ser perjudicial).',
      'Cardiomiopatía hipertrófica obstructiva (CMHO).',
      'Hipersensibilidad a milrinona.',
      'Precaución extrema en insuficiencia renal grave (acumulación).',
    ],

    fotosensibilidad: 'No relevante. Conservar viales a temperatura ambiente.',

    estabilidad: {
      'Vial sin abrir':           'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 200 mcg/mL': '<b>72 horas a temperatura ambiente</b>',
      'Diluida en SG 5%':         '72 horas a temperatura ambiente',
      'Aspecto':                  'Solución incolora a amarillo muy pálido — normal',
      'Temperatura':              'NO congelar',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura en condiciones asépticas.',
      dosisRestante:     'Desechar sobrante de vial abierto tras 24 h.',
      infusionPreparada: '72 h a temperatura ambiente en SF 0.9% o SG 5%.',
      notas:             'No mezclar con furosemida en la misma vía (precipitación inmediata). Compatible con la mayoría de diluyentes estándar.',
    },

    presentaciones: [
      'Corotrope® 10 mg/10 mL (1 mg/mL) — vial 10 mL',
      'Milrinona Braun® 200 mcg/mL — bolsa 100 mL lista para usar',
      'Milrinona Normon® — genérico',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Carga (opcional)',            dosis: '50 mcg/kg IV en 10 min (omitir si TA <90)',        via: 'IV' },
      { indicacion: 'Mantenimiento estándar',       dosis: '<b>0.375-0.75 mcg/kg/min perfusión continua</b>', via: 'IV' },
      { indicacion: 'Dosis inicial recomendada',    dosis: '0.375 mcg/kg/min → titular c/30 min',             via: 'IV' },
      { indicacion: 'Dosis máxima',                 dosis: '0.75 mcg/kg/min (habitualmente no superar)',      via: 'IV' },
      { indicacion: 'IR grave (ClCr <10 mL/min)',  dosis: '0.2 mcg/kg/min (reducción severa)',               via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Escasos datos en humanos. Usar solo si el beneficio supera el riesgo. Puede producir vasodilatación placentaria. No recomendado en el 1er trimestre. Monitorización fetal intensiva si se usa.',

    pediatria: 'ICC y cardiopatías congénitas postquirúrgicas: 0.25-0.75 mcg/kg/min IV. Carga: 50-75 mcg/kg en 30-60 min (más lenta que adultos). Uso habitual en UCI cardíaca pediátrica. Monitorizar TA estrechamente.',

    adultoMayor: 'Mayor sensibilidad a hipotensión. Reducir dosis inicial (0.25 mcg/kg/min). Vigilar función renal más frecuentemente. No omitir la carga si hay buena TA basal.',

    insufRenal: '<b>Ajuste OBLIGATORIO:</b> ClCr 50 mL/min: 0.43 mcg/kg/min · ClCr 30: 0.33 mcg/kg/min · ClCr 20: 0.28 mcg/kg/min · ClCr 10: 0.23 mcg/kg/min · ClCr <10: 0.2 mcg/kg/min. La acumulación causa toxicidad cardiovascular grave.',

    insufHepatica: 'Sin ajuste necesario (metabolismo fundamentalmente renal, no hepático). En cirrosis grave con IR asociada: ajuste según función renal.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Corotrope® (milrinona).',
      'McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure.',
      'Cuffe MS et al. Short-term intravenous milrinone for acute exacerbation of chronic heart failure. JAMA. 2002 (OPTIME-CHF).',
      'Mehra MR et al. Pharmacotherapy of advanced heart failure. Circulation. 2020.',
      'ACCF/AHA Heart Failure Guidelines 2022 Focused Update.',
      'Felker GM, O\'Connor CM. Inotropic therapy for heart failure: an evidence-based approach. Am Heart J. 2001.',
    ],
  },

});
