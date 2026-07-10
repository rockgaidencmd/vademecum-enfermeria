/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/nalbufina.js
   Fuentes: CIMA AEMPS (Nubain), FDA DailyMed,
   ACOG Labor Analgesia Guidelines, Cuadro Básico
   IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'nalbufina',
  nombre:         'Nalbufina',
  nombreComercial: 'Nubain®',
  nombreGenerico: 'Nalbuphine Hydrochloride',
  categoria:      'analgesia',
  tags:           ['opioide', 'analgésico', 'agonista-antagonista', 'trabajo de parto', 'dolor postoperatorio', 'techo respiratorio', 'cuadro básico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Opioide agonista-antagonista mixto. Tiene "efecto techo" en la depresión respiratoria (a diferencia de morfina/fentanilo), pero puede precipitar síndrome de abstinencia agudo en pacientes con dependencia a opioides puros. Puede antagonizar la analgesia de un opioide puro administrado previamente. Vigilar sedación y depresión respiratoria como con cualquier opioide.',

  nivel1: {

    puntosClave: [
      '<b>Opioide agonista-antagonista mixto</b> — agonista kappa (analgesia, sedación) y antagonista/agonista parcial mu (efecto techo respiratorio).',
      'Muy usado en <b>analgesia del trabajo de parto</b> — menor depresión respiratoria neonatal que los opioides puros a dosis equianalgésicas.',
      'Dosis: <b>10-20 mg IV/IM/SC c/3-6 h</b> (máx 160 mg/día), equivalente en potencia a la morfina.',
      '<b>"Efecto techo" en depresión respiratoria</b> — a partir de cierta dosis, aumentar la dosis no aumenta más la depresión respiratoria (ventaja de seguridad).',
      '<b>Puede precipitar abstinencia aguda</b> en pacientes con dependencia a opioides puros (antagonismo parcial mu) — evitar en estos casos.',
    ],

    resumenRapido: 'Analgésico opioide agonista-antagonista mixto: actúa como agonista de los receptores kappa (analgesia y sedación) y como antagonista o agonista parcial de los receptores mu, lo que le confiere un "efecto techo" en la depresión respiratoria — a diferencia de los opioides agonistas puros (morfina, fentanilo), en los que la depresión respiratoria aumenta de forma lineal con la dosis. Esta característica lo convierte en uno de los analgésicos más utilizados durante el trabajo de parto en América Latina, por su menor riesgo de depresión respiratoria neonatal. Su componente antagonista mu limita su uso en dolor muy intenso (menor techo analgésico que los opioides puros) y puede precipitar un síndrome de abstinencia agudo en pacientes con dependencia previa a opioides puros.',

    objetivoTerapeutico: 'Analgesia durante el trabajo de parto · Tratamiento del dolor moderado-intenso postoperatorio · Analgesia en procedimientos diagnósticos/terapéuticos dolorosos · Alternativa analgésica con menor riesgo de depresión respiratoria grave',

    preparacion: {
      'Presentación':          '<b>Nubain® 10 mg/mL o 20 mg/mL — ampolla 1 mL</b>',
      'Diluyente':             'Puede administrarse sin diluir (IV lenta) o diluido en SF 0.9%/SG 5%',
      'Dosis estándar adulto': '<b>10-20 mg IV/IM/SC</b>',
      'Repetición':            'Cada 3-6 h según necesidad (máx 160 mg/día)',
      'Dosis en trabajo de parto': '10-20 mg IV/IM, repetible según protocolo obstétrico',
      'Velocidad IV':          'Bolo lento en 2-3 min',
      'Vía':                   'IV lenta · IM · SC',
      '⏱️ Inicio efecto (IV)':  '2-3 min · (IM/SC): 15 min',
      '⏱️ Duración':            '3-6 h',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5% si se diluye</b>',
    },

    vigilancia: {
      antes: [
        'FC, FR y SpO2 basal.',
        'Antecedente de dependencia a opioides — riesgo de precipitar abstinencia aguda por el componente antagonista.',
        'Confirmar si el paciente ha recibido un opioide agonista puro recientemente (puede antagonizar su efecto analgésico).',
        'En trabajo de parto: valorar la fase del parto y el estado fetal (frecuencia cardíaca fetal).',
      ],
      durante: [
        'SpO2 y FR durante la administración — vigilar depresión respiratoria, aunque con efecto techo.',
        'FC y TA — sedación y posible somnolencia.',
        'En trabajo de parto: monitorización de la frecuencia cardíaca fetal según protocolo.',
        'Evaluar respuesta analgésica.',
      ],
      despues: [
        'SpO2 y nivel de consciencia cada 30-60 min hasta la recuperación completa.',
        'Vigilar sedación residual.',
        'Si se administró cerca del parto: vigilar al recién nacido por posible depresión respiratoria neonatal (menor riesgo que con opioides puros, pero presente).',
        'Documentar dosis, vía, hora y respuesta analgésica.',
      ],
      suspender: [
        'SpO2 <90% o FR <10 rpm — valorar naloxona si hay depresión respiratoria significativa.',
        'Signos de síndrome de abstinencia en paciente con dependencia a opioides puros.',
        'Sedación excesiva no deseada.',
        'Reacción alérgica.',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones alcalinas en la misma jeringa.',
      'Precaución con otros depresores del SNC (benzodiacepinas, alcohol) — efecto sedante aditivo.',
      'No combinar con opioides agonistas puros sin valorar el riesgo de antagonismo parcial (puede reducir la analgesia del opioide puro previo).',
      'Compatible con SF 0.9% y SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🟠 PUEDE PRECIPITAR ABSTINENCIA AGUDA en pacientes con dependencia a opioides agonistas puros — evitar en este contexto.',
      '🟠 Puede ANTAGONIZAR la analgesia de un opioide puro administrado previamente (fentanilo, morfina) por su componente antagonista mu.',
      '🟢 Efecto techo en la depresión respiratoria — ventaja de seguridad frente a opioides agonistas puros a dosis altas.',
      '🟡 Sedación y mareo frecuentes — precaución con la deambulación tras la administración.',
      '🟡 Menor techo analgésico que los opioides puros — puede ser insuficiente en dolor muy intenso.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Administrar IV lento (2-3 min) o IM/SC según indicación.',
      'SpO2 y FR durante y después de la administración, especialmente en la primera dosis.',
      'Preguntar por antecedente de dependencia a opioides antes de administrar — riesgo de abstinencia aguda.',
      'Si el paciente ha recibido un opioide puro recientemente, informar al médico antes de administrar nalbufina (posible antagonismo).',
      'En trabajo de parto: coordinar con el equipo obstétrico la monitorización fetal.',
      'Vigilar sedación y mareo — advertir sobre el riesgo de caídas al levantarse.',
      'Si se usa cerca del expulsivo: alertar al equipo neonatal sobre la posible sedación del recién nacido.',
      'Documentar dosis, vía, hora y respuesta analgésica en cada administración.',
    ],

    efectosAdversos: [
      '🟠 Depresión respiratoria (con efecto techo, menos grave que con opioides puros)',
      '🟠 Síndrome de abstinencia agudo (en dependientes a opioides puros)',
      '🟡 Sedación, somnolencia',
      '🟡 Mareo, náuseas, vómitos',
      '🟡 Sequedad de boca',
      '🟡 Cefalea',
      '🟡 Depresión respiratoria neonatal (si se administra cerca del expulsivo — menor riesgo que opioides puros)',
    ],

    contraindicaciones: [
      'Dependencia conocida a opioides agonistas puros (riesgo de abstinencia aguda).',
      'Hipersensibilidad a nalbufina.',
      'Depresión respiratoria grave no controlada sin soporte ventilatorio disponible.',
      'Precaución en traumatismo craneoencefálico (puede dificultar la valoración neurológica).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':   '<b>24 h a temperatura ambiente</b>',
      'Diluida en SG 5%':     '24 h a temperatura ambiente',
      'Aspecto':               'Solución incolora — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente si se diluye.',
      notas:             'Sustancia sujeta a control (opioide) — registrar según normativa local. Puede administrarse sin diluir en IV lenta.',
    },

    presentaciones: [
      'Nubain® 10 mg/mL — ampolla 1 mL',
      'Nubain® 20 mg/mL — ampolla 1 mL',
      'Nalbufina genérica — varios fabricantes',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dolor moderado-intenso',       dosis: '<b>10-20 mg IV/IM/SC c/3-6 h (máx 160 mg/día)</b>', via: 'IV/IM/SC' },
      { indicacion: 'Analgesia en trabajo de parto', dosis: '10-20 mg IV/IM, repetible según protocolo',        via: 'IV/IM' },
      { indicacion: 'Dolor postoperatorio',          dosis: '10-20 mg IV/IM c/3-6 h',                            via: 'IV/IM' },
      { indicacion: 'Dosis en <70 kg',                dosis: 'Reducir proporcionalmente (0.15-0.3 mg/kg)',        via: 'IV/IM/SC' },
    ],

    embarazo: 'Categoría B/C (FDA, según fuente). Ampliamente utilizado durante el trabajo de parto por su perfil de menor depresión respiratoria neonatal comparado con opioides puros equianalgésicos. Evitar cerca del expulsivo inminente por posible sedación neonatal transitoria; tener naloxona disponible para el recién nacido si es necesario.',

    pediatria: '>18 meses: 0.1-0.2 mg/kg IV/IM/SC c/3-6 h (máx 20 mg/dosis). Uso en dolor postoperatorio y procedimientos pediátricos. Vigilar sedación y depresión respiratoria como en cualquier opioide.',

    adultoMayor: 'Mayor sensibilidad a la sedación y depresión respiratoria — iniciar con dosis reducida (5-10 mg) y titular según respuesta. Vigilar caídas por sedación/mareo.',

    insufRenal: 'Ajustar la dosis o el intervalo en insuficiencia renal grave — posible acumulación de metabolitos. Vigilar sedación prolongada.',

    insufHepatica: 'Precaución en insuficiencia hepática grave — el metabolismo es hepático; considerar dosis reducida y mayor intervalo entre dosis.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Nubain® (nalbufina).',
      'ACOG Practice Bulletin. Approaches to Limit Intervention During Labor and Birth (analgesia obstétrica). Obstet Gynecol. 2019.',
      'Gilbert DN et al. Opioid Agonist-Antagonists in Clinical Practice. Anesth Analg. 2020.',
      'FDA DailyMed. Nalbuphine Hydrochloride — Prescribing Information.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
