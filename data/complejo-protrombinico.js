/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/complejo-protrombinico.js
   HEMOTERAPIA · Hemoderivados
   Fuentes: CIMA AEMPS (Octaplex, Prothromplex, Beriplex),
   ACForum/ISTH Reversal Guidance, ESC/AHA Anticoagulation,
   Sarode R et al. Circulation 2013
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'complejo-protrombinico',
  nombre:         'Complejo Protrombínico (CCP)',
  nombreComercial: 'Octaplex® / Beriplex® / Prothromplex®',
  nombreGenerico: 'Prothrombin Complex Concentrate (PCC)',
  categoria:      'hemoderivados',
  tags:           ['hemoterapia', 'hemoderivado', 'complejo protrombínico', 'CCP', 'reversión anticoagulación', 'warfarina', 'acenocumarol', 'factores II VII IX X', 'hemorragia'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Hemoderivado de ALTO RIESGO. Contiene factores de la coagulación (II, VII, IX, X) y produce reversión rápida de los antivitamina K, con riesgo trombótico asociado (trombosis, IAM, ictus, CID). La dosis se calcula según INR y peso. Debe administrarse SIEMPRE con vitamina K IV en la reversión de dicumarínicos. Reconstitución aséptica e infusión IV lenta.',

  nivel1: {

    puntosClave: [
      '<b>Reversión rápida de anticoagulantes antivitamina K</b> (warfarina, acenocumarol) en hemorragia grave o cirugía urgente.',
      'Contiene <b>factores II, VII, IX y X</b> (los 4 factores en el CCP de 4 factores) más proteínas C y S.',
      '<b>Dosis según INR y peso</b> (p. ej. 25-50 UI/kg de FIX); administrar <b>SIEMPRE junto con vitamina K IV</b>.',
      '<b>Ventajas sobre el PFC</b>: reversión más rápida, menor volumen, sin necesidad de descongelar ni de compatibilidad ABO.',
      'Riesgo <b>trombótico</b> (IAM, ictus, TVP/TEP, CID) — vigilar, sobre todo con dosis altas y repetidas.',
    ],

    resumenRapido: 'Concentrado de factores de coagulación dependientes de la vitamina K (II, VII, IX y X) obtenido por fraccionamiento de plasma e inactivación viral, con proteínas anticoagulantes C y S. Es el tratamiento de elección para la reversión urgente de los anticoagulantes antivitamina K en la hemorragia grave o antes de cirugía urgente, por su rapidez, su bajo volumen y no requerir descongelación ni compatibilidad de grupo. También se emplea en hemorragia grave por antagonistas del factor Xa cuando no se dispone de antídoto específico. Debe acompañarse de vitamina K para mantener la corrección.',

    objetivoTerapeutico: 'Reversión urgente de anticoagulantes antivitamina K en hemorragia grave o cirugía urgente · Corrección rápida de INR elevado con sangrado activo · Soporte hemostático en déficit adquirido de factores dependientes de vitamina K · Hemorragia grave por anti-Xa cuando no hay antídoto disponible',

    preparacion: {
      'Presentación':          '<b>Vial de polvo liofilizado + disolvente (potencia expresada en UI de Factor IX)</b>',
      'Compatibilidad':        'No requiere grupo ABO ni pruebas cruzadas',
      'Reconstitución':        '<b>Con el disolvente incluido, técnica aséptica; disolver sin agitar en exceso</b>',
      'Dosis según INR':       '<b>INR 2-4: ~25 UI/kg · INR 4-6: ~35 UI/kg · INR > 6: ~50 UI/kg</b> (según ficha/protocolo)',
      'Vitamina K asociada':   '<b>Administrar SIEMPRE vitamina K 5-10 mg IV con el CCP</b> (mantiene la corrección)',
      'Administración':        '<b>IV lenta según la velocidad del fabricante (p. ej. ≤ 2-3 mL/min)</b>',
      'Uso tras reconstituir': 'Administrar de inmediato tras la reconstitución',
      'Conservación':          '<b>2-8 °C (según producto puede estar a Tª ambiente); no congelar; proteger de la luz</b>',
      'Control':               'Repetir INR ~30 min tras la infusión para confirmar la reversión',
    },

    vigilancia: {
      antes: [
        'Verificar indicación (hemorragia grave / cirugía urgente con anticoagulación) y calcular la dosis según INR y peso.',
        'INR basal y, si es posible, hemograma y función renal.',
        'Valorar factores de riesgo trombótico (trombosis reciente, CID, prótesis) — balance riesgo/beneficio.',
        'Preparar la vitamina K IV para administrarla junto con el CCP.',
        'Constantes basales; acceso venoso permeable; reconstitución aséptica.',
      ],
      durante: [
        'Administrar IV lento según la velocidad del fabricante.',
        'Vigilar reacción de infusión/alérgica: rubor, urticaria, cambios de TA/FC.',
        'Vigilar signos precoces de trombosis (dolor torácico, focalidad neurológica, disnea).',
        'No administrar la vitamina K en la misma línea sin verificar; darla según pauta.',
      ],
      despues: [
        '<b>Repetir el INR ~30 min tras la infusión</b> para confirmar la reversión y guiar dosis adicionales.',
        'Vigilar durante horas-días la aparición de eventos trombóticos.',
        'Documentar producto, número de lote, UI administradas, INR pre/post y respuesta al sangrado.',
        'Coordinar el reinicio o no de la anticoagulación con el equipo médico.',
      ],
      suspender: [
        '🚨 DETENER ante reacción alérgica grave/anafilaxia o reacción de infusión importante.',
        'Signos de trombosis (IAM, ictus, TEP) o de CID: detener y tratar como urgencia.',
        'Conservar el registro del lote; notificar la reacción.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros medicamentos en la misma jeringa o línea (incluida la vitamina K).',
      'Usar solo el disolvente y el equipo proporcionados por el fabricante.',
      'Administrar por vía independiente; lavar la línea según ficha técnica.',
      'No sustituir por PFC de forma sistemática cuando esté indicada la reversión rápida (el CCP es de elección).',
    ],

    alertasSeguridad: [
      '🔴 RIESGO TROMBÓTICO (IAM, ictus, TVP/TEP, CID) — vigilar, especialmente con dosis altas o repetidas.',
      '🔴 Administrar SIEMPRE con vitamina K IV en la reversión de antivitamina K (el efecto del CCP es transitorio).',
      '🔴 Dosis calculada según INR y peso — verificar el cálculo en UI de Factor IX.',
      '🟠 Reacciones de infusión/alérgicas — vigilar durante la administración.',
      '🟠 Registrar el número de lote (trazabilidad del hemoderivado).',
      '🟡 No indicado para corregir INR elevado sin hemorragia ni procedimiento urgente.',
    ],
  },

  modulos: {
    cardio: `
      <b>Reversión urgente de antivitamina K (warfarina/acenocumarol) con hemorragia grave:</b><br/>
      1. <b>Complejo protrombínico</b> según INR y peso (25-50 UI/kg) IV lento.<br/>
      2. <b>Vitamina K 5-10 mg IV lenta</b> de forma simultánea (mantiene la corrección tras agotarse el CCP).<br/>
      3. <b>Repetir INR ~30 min</b> post-infusión; objetivo INR ≤ 1.5.<br/>
      4. Tratar la causa del sangrado y vigilar trombosis en las horas siguientes.<br/>
      <b>En hemorragia por anti-Xa (rivaroxabán/apixabán) sin antídoto disponible:</b> el CCP a dosis altas es una opción de soporte según protocolo.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Calcular la dosis en UI según INR y peso y confirmarla con la prescripción.',
      'Reconstituir con técnica aséptica; administrar IV lento según la velocidad del fabricante.',
      'Preparar y administrar la vitamina K IV según pauta — imprescindible en la reversión de dicumarínicos.',
      'Vigilar durante y tras la infusión signos de trombosis (dolor torácico, focalidad, disnea).',
      'Solicitar/registrar el INR de control ~30 min tras la infusión.',
      'Registrar el número de lote para la trazabilidad del hemoderivado.',
      'Documentar producto, UI, INR pre/post, vitamina K administrada y tolerancia.',
    ],

    efectosAdversos: [
      '🔴 Eventos trombóticos (IAM, ictus, TVP/TEP)',
      '🔴 Coagulación intravascular diseminada (CID)',
      '🔴 Reacción alérgica grave / anafilaxia (poco frecuente)',
      '🟠 Reacciones de infusión: rubor, cefalea, náuseas, cambios de TA',
      '🟡 Fiebre',
      '🟡 Riesgo infeccioso muy bajo (inactivación viral)',
    ],

    contraindicaciones: [
      'Coagulación intravascular diseminada activa (salvo control de la causa desencadenante).',
      'Antecedente de trombocitopenia inducida por heparina (algunos productos contienen heparina).',
      'Hipersensibilidad conocida al producto o a la heparina (si la contiene).',
      'Corrección de INR sin hemorragia ni procedimiento urgente (no indicado).',
      'Angina inestable / trombosis reciente: valorar cuidadosamente el riesgo/beneficio.',
    ],

    fotosensibilidad: 'Proteger de la luz. Conservar según ficha (habitualmente 2-8 °C; algunos a ≤ 25 °C). No congelar.',

    estabilidad: {
      'Conservación':      '2-8 °C (según producto, puede conservarse a ≤ 25 °C un periodo)',
      'No congelar':       'Sí',
      'Proteger de la luz': 'Sí',
      'Tras reconstituir': 'Administrar de inmediato',
      'Aspecto':           'Solución transparente/ligeramente opalescente tras reconstituir; desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras la reconstitución.',
      dosisRestante:     'Desechar el sobrante del vial reconstituido.',
      infusionPreparada: 'Administrar sin demora; no conservar para dosis posteriores.',
      notas:             'Siempre con vitamina K IV en la reversión de antivitamina K. Registrar el lote. Vigilar trombosis. Repetir INR de control.',
    },

    presentaciones: [
      'CCP de 4 factores (II, VII, IX, X): Octaplex®, Beriplex®/Kcentra®',
      'CCP de 3 factores (II, IX, X con poco FVII): Prothromplex® (según país)',
      'Potencia expresada en UI de Factor IX por vial',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Reversión AVK — INR 2 a < 4',   dosis: '~25 UI/kg (de Factor IX) IV + vitamina K IV',       via: 'IV' },
      { indicacion: 'Reversión AVK — INR 4 a 6',      dosis: '~35 UI/kg IV + vitamina K IV',                       via: 'IV' },
      { indicacion: 'Reversión AVK — INR > 6',        dosis: '~50 UI/kg IV + vitamina K IV',                       via: 'IV' },
      { indicacion: 'Control post-infusión',           dosis: 'Repetir INR ~30 min; objetivo INR ≤ 1.5',           via: '—' },
      { indicacion: 'Hemorragia por anti-Xa (sin antídoto)', dosis: '25-50 UI/kg según protocolo',                via: 'IV' },
    ],

    embarazo: 'Puede utilizarse en hemorragia grave con anticoagulación cuando el beneficio supera el riesgo. Manejo multidisciplinar; vigilar el riesgo trombótico, aumentado en la gestación.',

    pediatria: 'Uso en reversión urgente y en déficit de factores dependientes de vitamina K. Dosis en UI/kg según INR y peso, con vitamina K. Vigilancia estrecha del riesgo trombótico.',

    adultoMayor: 'Mayor riesgo trombótico basal. Usar la dosis mínima eficaz guiada por INR, administrar vitamina K y vigilar estrechamente eventos trombóticos.',

    insufRenal: 'Sin ajuste específico. Vigilar el riesgo trombótico y la tolerancia a la infusión.',

    insufHepatica: 'Frecuente coagulopatía por hepatopatía; el CCP corrige transitoriamente. Vigilar el riesgo de trombosis/CID por el desequilibrio hemostático propio de la cirrosis; usar de forma dirigida.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Fichas Técnicas de complejo protrombínico (Octaplex®, Beriplex®, Prothromplex®).',
      'Sarode R et al. Efficacy and Safety of a 4-Factor Prothrombin Complex Concentrate in Patients on Vitamin K Antagonists Presenting With Major Bleeding. Circulation. 2013.',
      'Frontera JA et al. Guideline for Reversal of Antithrombotics in Intracranial Hemorrhage. Neurocrit Care. 2016.',
      'Tomaselli GF et al. ACC Expert Consensus Decision Pathway on Management of Bleeding in Patients on Oral Anticoagulants. J Am Coll Cardiol. 2020.',
      'AABB. Technical Manual. 20th Edition. 2020.',
    ],
  },

});
