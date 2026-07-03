/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/dexmedetomidina.js
   Fuentes: CIMA AEMPS (Dexdor), FDA DailyMed,
   PADIS Guidelines SCCM 2018, PRODEX/MIDEX JAMA 2012,
   SEMICYUC Sedoanalgesia UCI 2022
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'dexmedetomidina',
  nombre:         'Dexmedetomidina',
  nombreGenerico: 'Dexmedetomidine',
  categoria:      'sedoanalgesia',
  tags:           ['sedante', 'alfa-2 agonista', 'UCI', 'sedación cooperativa', 'delirium', 'ventilación mecánica', 'extubación'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Agonista alfa-2 adrenérgico. Causa bradicardia e hipotensión significativas hasta en el 30% de pacientes. Tener atropina y fluidos preparados. Requiere monitorización cardíaca continua. Nunca en bolo directo.',

  nivel1: {

    puntosClave: [
      '<b>Sedación cooperativa</b> — el paciente puede despertarse para evaluación neurológica sin depresión respiratoria.',
      '<b>BRADICARDIA e HIPOTENSIÓN</b> frecuentes (hasta 30%) — tener atropina 0.5-1 mg IV preparada.',
      'Perfusión continua: <b>0.2-1.4 mcg/kg/h</b>. Dosis de carga (1 mcg/kg en 10-20 min) OPCIONAL — puede omitirse para evitar hipotensión.',
      'Concentración estándar: <b>200 mcg en 50 mL SF 0.9% = 4 mcg/mL</b>. Requiere bomba de jeringa.',
      'Suspender gradualmente si uso >48 h — retirada brusca puede causar hipertensión y taquicardia de rebote.',
    ],

    resumenRapido: 'Agonista selectivo de receptores alfa-2 adrenérgicos en el locus coeruleus. Produce sedación que imita el sueño fisiológico (actividad NREM) sin depresión respiratoria. Indicado en sedación UCI de pacientes ventilados y no ventilados, facilitación del destete ventilatorio y reducción del delirium en UCI. No actúa sobre GABA — diferente mecanismo a propofol y benzodiacepinas.',

    objetivoTerapeutico: 'RASS objetivo -1 a -2 (sedación leve cooperativa) · Reducción del delirium en UCI · Facilitar destete ventilatorio · Sedación para procedimientos sin depresión respiratoria',

    preparacion: {
      'Diluyente':                  '<b>SF 0.9% exclusivamente</b>',
      'Concentración estándar':     '<b>200 mcg en 50 mL SF → 4 mcg/mL</b>',
      'Concentración alta (restricción hídrica)': '400 mcg en 50 mL SF → 8 mcg/mL',
      'Dosis de carga (opcional)':  '1 mcg/kg IV en 10-20 min → luego pasar a perfusión',
      'Mantenimiento':              '<b>0.2-1.4 mcg/kg/h — ajustar según RASS</b>',
      'Inicio':                     'Comenzar en 0.3-0.4 mcg/kg/h, titular cada 30 min',
      'Vía':                        'Venosa central (preferible) — periférica tolerable a corto plazo',
      '⏱️ Inicio de efecto':         '5-10 min IV · Pico: 15 min',
      'Bomba':                      '<b>Bomba de jeringa OBLIGATORIA — nunca bolo</b>',
      '🧊 Estabilidad':              '<b>24 horas a temperatura ambiente en SF 0.9%</b>',
    },

    vigilancia: {
      antes: [
        'Comprobar FC basal: si <60 lpm, valorar alternativa o reducir dosis.',
        'TA basal: si hipotensión preexistente, considerar alternativa o reducir dosis.',
        'Verificar disponibilidad de atropina, fluidos y vasopresores.',
        'Escala RASS basal — documentar objetivo pautado por el médico.',
        'Evaluar bloqueo AV (contraindicado en 2º-3er grado sin marcapasos).',
        'Comprobar función hepática — el metabolismo es completamente hepático.',
      ],
      durante: [
        'Monitorización continua de FC, TA y SpO2.',
        'RASS cada hora — ajustar velocidad si no se alcanza el objetivo.',
        'Si FC <50 lpm: reducir velocidad inmediatamente, avisar al médico.',
        'Si TA sistólica <90 mmHg: reducir velocidad y administrar fluidos según protocolo.',
        'Valorar CAM-ICU para detección de delirium.',
        'Si hipertensión con dosis de carga: administrar más lentamente (>20 min).',
      ],
      despues: [
        'Si uso >48 h: reducción gradual del 25% cada 2 h al suspender.',
        'Vigilar signos de rebote: hipertensión, taquicardia, agitación.',
        'Documentar RASS de cada turno y ajustes realizados.',
        'Si no se alcanza el objetivo con dosis máxima (1.4 mcg/kg/h): añadir otro agente según protocolo.',
      ],
      suspender: [
        'Bradicardia <40 lpm que no responde a reducción de velocidad.',
        'Hipotensión refractaria a fluidos y a reducción de dosis.',
        'Bloqueo AV de 2º-3er grado de nuevo inicio.',
        'Indicación médica de cambio a otro sedante.',
        'Tras lograr destete ventilatorio exitoso.',
      ],
    },

    incompatibilidades: [
      'Anfotericina B — incompatibilidad documentada.',
      'Diazepam — incompatibilidad física.',
      'No mezclar en el mismo frasco con otros fármacos.',
      'Compatible en Y con: morfina, fentanilo, midazolam, propofol (verificar protocolo local).',
    ],

    alertasSeguridad: [
      '🔴 Bradicardia grave (hasta 30% de pacientes) — tener atropina preparada en todo momento.',
      '🔴 Hipotensión — especialmente con dosis de carga o en hipovolemia.',
      '🔴 Contraindicado en bloqueo AV 2º-3er grado sin marcapasos.',
      '🟠 Hipertensión transitoria con dosis de carga rápida (<10 min).',
      '🟠 Síndrome de retirada si suspensión brusca tras >48 h de uso.',
      '🟡 Boca seca, náuseas — efectos alfa-2 comunes.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Preparar dexmedetomidina ANTES de la infusión — necesita bomba de jeringa calibrada.',
      'Evaluar y documentar RASS antes de iniciar y cada hora.',
      'Tener atropina 0.5-1 mg IV lista en la cabecera antes de iniciar la perfusión.',
      'Monitorización cardíaca continua (FC y ritmo) durante toda la infusión.',
      'Si bradicardia <50 lpm: reducir velocidad al mínimo (0.2 mcg/kg/h) e informar al médico.',
      'Si TA sistólica <90 mmHg: reducir velocidad y cargar fluidos según protocolo.',
      'Usar vía central preferentemente — en caso de periférica, vigilar signos de irritación.',
      'No agitar el vial — invertir suavemente antes de preparar.',
      'Reducción gradual al suspender: disminuir 25% cada 2 h si uso >48 h.',
      'Valorar CAM-ICU cada turno para detección de delirium.',
    ],

    efectosAdversos: [
      '🔴 Bradicardia (hasta 30% de pacientes)',
      '🔴 Hipotensión',
      '🟠 Hipertensión transitoria con dosis de carga rápida',
      '🟠 Síndrome de retirada: HTA, taquicardia, agitación (si suspensión brusca)',
      '🟡 Boca seca',
      '🟡 Náuseas',
      '🟡 Hipotermia leve',
    ],

    contraindicaciones: [
      'Bloqueo AV de 2º o 3er grado sin marcapasos.',
      'Hipotensión no controlada.',
      'Insuficiencia hepática grave (reducir dosis drásticamente).',
      'Hipersensibilidad a dexmedetomidina.',
    ],

    fotosensibilidad: 'No relevante. La solución puede presentar color amarillo pálido — es normal y no indica deterioro.',

    estabilidad: {
      'Vial sin abrir':      'Temperatura ambiente (<30°C)',
      'Preparada en SF 0.9%':'<b>24 horas a temperatura ambiente</b>',
      'Preparada en SG 5%':  '24 horas a temperatura ambiente',
      'Aspecto':             'Incolora a ligeramente amarilla — normal',
      'Temperatura':         'NO congelar',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura en condiciones asépticas.',
      dosisRestante:     'Desechar sobrante de vial tras 24 h de apertura.',
      infusionPreparada: 'Estable 24 h a temperatura ambiente en SF 0.9% o SG 5% en PVC o vidrio.',
      notas:             'No refrigerar la solución preparada. Color amarillo pálido en la solución es normal y no indica deterioro.',
    },

    presentaciones: [
      'Precedex® 200 mcg/2 mL (100 mcg/mL) — vial 2 mL',
      'Dexdor® 200 mcg/2 mL (100 mcg/mL) — vial 2 mL',
      'Dexdor® 400 mcg/4 mL (100 mcg/mL) — vial 4 mL',
      'Dexmedetomidina Accord® / Hikma® — genéricos',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis de carga (opcional)',     dosis: '1 mcg/kg IV en 10-20 min (nunca más rápido)',  via: 'IV' },
      { indicacion: 'Mantenimiento sedación UCI',     dosis: '<b>0.2-1.4 mcg/kg/h</b> (titular por RASS)',  via: 'IV' },
      { indicacion: 'Inicio recomendado',             dosis: '0.3-0.4 mcg/kg/h → titular cada 30 min',      via: 'IV' },
      { indicacion: 'Procedimientos / sedación leve', dosis: '0.5-1 mcg/kg en 10 min → 0.2-1 mcg/kg/h',   via: 'IV' },
      { indicacion: 'Dosis máxima aprobada',          dosis: '1.4 mcg/kg/h',                                 via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Sin estudios adecuados en embarazadas. Usar solo si beneficio supera el riesgo. Cruza placenta. Puede causar bradicardia fetal. No recomendado en parto activo.',

    pediatria: 'No aprobado en ficha técnica en <18 años. Uso off-label en UCI pediátrica: 0.2-0.7 mcg/kg/h. Dosis de carga generalmente evitada en <1 año. Bajo supervisión de intensivismo pediátrico.',

    adultoMayor: 'Reducir dosis inicial un 30-50% (mayor sensibilidad a bradicardia e hipotensión). Evitar dosis de carga. Iniciar con 0.2 mcg/kg/h y titular lentamente.',

    insufRenal: 'Sin ajuste de dosis — los metabolitos glucuronidados son inactivos y se excretan renalmente. Vigilar acumulación en IR grave con uso prolongado.',

    insufHepatica: 'Reducir significativamente — metabolismo hepático extenso (CYP2A6 y glucuronidación). En IH grave: iniciar 0.1 mcg/kg/h y monitorización estrecha.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Dexdor® (dexmedetomidina).',
      'Devlin JW et al. PADIS Clinical Practice Guidelines. Crit Care Med. 2018 (SCCM).',
      'Jakob SM et al. PRODEX and MIDEX trials. JAMA. 2012.',
      'Hughes CG et al. MENDS2 trial. Crit Care Med. 2021.',
      'Riker RR et al. Dexmedetomidine vs. midazolam in ICU sedation. JAMA. 2009.',
      'SEMICYUC. Recomendaciones sedación-analgesia-antipsicóticos en UCI. 2022.',
    ],
  },

});
