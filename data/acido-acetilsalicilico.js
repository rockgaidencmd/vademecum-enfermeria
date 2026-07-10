/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/acido-acetilsalicilico.js
   Fuentes: CIMA AEMPS (Adiro, Inyesprin), FDA DailyMed,
   ESC ACS Guidelines 2023, AHA/ACC STEMI Guidelines,
   ISIS-2 Trial Lancet 1988
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'acido-acetilsalicilico',
  nombre:         'Ácido Acetilsalicílico (Aspirina)',
  nombreComercial: 'Adiro® / Inyesprin® / Aspirina®',
  nombreGenerico: 'Acetylsalicylic Acid (ASA)',
  categoria:      'anticoagulantes',
  tags:           ['antiagregante', 'AAS', 'aspirina', 'infarto', 'síndrome coronario agudo', 'IAM', 'ACV isquémico', 'antiinflamatorio'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Pilar fundamental del tratamiento del síndrome coronario agudo — la primera dosis (masticada) reduce significativamente la mortalidad. Riesgo de sangrado (especialmente gastrointestinal) con uso prolongado o dosis altas. Contraindicado en menores de 16 años (síndrome de Reye) y en alergia a AINEs/asma con poliposis nasal.',

  nivel1: {

    puntosClave: [
      '<b>Síndrome coronario agudo</b>: 150-300 mg <b>MASTICADA</b> (no tragar entera) lo antes posible — reduce la mortalidad de forma demostrada (ISIS-2).',
      '<b>Masticar acelera la absorción</b> — biodisponibilidad mucho más rápida que tragar el comprimido entero.',
      'Dosis antiagregante de mantenimiento: <b>75-100 mg/día VO</b> — mucho menor que la dosis analgésica/antiinflamatoria.',
      '<b>ACV isquémico agudo</b>: 160-300 mg VO/SNG en las primeras 48 h (tras descartar hemorragia por TC).',
      'Presentación IV (acetilsalicilato de lisina) disponible cuando no hay vía oral — <b>misma indicación, mismo efecto antiagregante</b>.',
    ],

    resumenRapido: 'Antiagregante plaquetario que inhibe de forma irreversible la ciclooxigenasa-1 (COX-1) plaquetaria, bloqueando la síntesis de tromboxano A2 durante toda la vida de la plaqueta (7-10 días). Es uno de los fármacos con mayor evidencia de reducción de mortalidad en el síndrome coronario agudo cuando se administra precozmente (estudio ISIS-2: reducción de mortalidad comparable a la fibrinólisis). También es piedra angular en la prevención secundaria cardiovascular y en el manejo del ACV isquémico agudo. A dosis más altas tiene efecto analgésico, antiinflamatorio y antipirético, aunque estas indicaciones han sido en gran parte sustituidas por otros fármacos con mejor perfil de seguridad gastrointestinal.',

    objetivoTerapeutico: 'Tratamiento inicial del síndrome coronario agudo (IAM/angina inestable) · Prevención secundaria de eventos cardiovasculares (post-IAM, post-ACV, enfermedad coronaria) · Tratamiento del ACV isquémico agudo · Antiagregación en procedimientos de revascularización',

    preparacion: {
      'Presentación oral (SCA)':  '<b>Adiro® 300 mg comprimidos — MASTICAR, no tragar entera</b>',
      'Presentación mantenimiento': 'Adiro® 100 mg — comprimidos recubiertos (tragar entero, protección gástrica)',
      'Presentación IV':           'Inyesprin® (acetilsalicilato de lisina) — vial 900 mg equivalente a 500 mg de AAS',
      'Dosis carga SCA':           '<b>150-300 mg VO masticada</b> (habitualmente 300 mg) lo antes posible',
      'Dosis mantenimiento':       '<b>75-100 mg/día VO</b> (indefinido en cardiopatía isquémica)',
      'Dosis IV (si no hay vía oral)': '250-500 mg IV lenta (equivalente a la dosis de carga oral)',
      'Reconstitución IV':         'Reconstituir el vial de Inyesprin® con el disolvente incluido según ficha técnica',
      'Vía':                       'Oral (masticada en la carga) · IV lenta (si no hay vía oral posible) · SNG (ACV con disfagia)',
      '⏱️ Inicio efecto (masticada)': '<b>15-20 min</b> (mucho más rápido que tragar entera: 30-60 min)',
      '🧊 Estabilidad IV':          'Usar poco después de reconstituir según ficha técnica del fabricante',
    },

    vigilancia: {
      antes: [
        'Confirmar sospecha de SCA (dolor torácico, ECG, troponinas) — administrar sin demora, no esperar confirmación diagnóstica completa.',
        'Preguntar por alergia a AAS/AINEs y antecedente de asma con poliposis nasal (riesgo de broncoespasmo).',
        'En ACV: confirmar mediante TC craneal que NO hay hemorragia antes de administrar (contraindicado en ACV hemorrágico).',
        'Antecedente de sangrado gastrointestinal activo o reciente, o coagulopatía conocida.',
        'Verificar edad — contraindicado en <16 años (síndrome de Reye, salvo indicación específica como Kawasaki).',
      ],
      durante: [
        'Asegurarse de que la dosis de carga se MASTICA, no se traga entera — esto es clínicamente relevante para la velocidad de acción.',
        'Vigilar reacción alérgica: broncoespasmo, urticaria (especialmente en asmáticos).',
        'Si administración IV: infundir lenta, vigilar la vena.',
      ],
      despues: [
        'Vigilar signos de sangrado: gastrointestinal (melenas, hematemesis), gingivorragia, epistaxis, hematomas.',
        'En tratamiento crónico: valorar protección gástrica (IBP) si hay factores de riesgo de sangrado GI.',
        'Reforzar la adherencia a la dosis de mantenimiento (75-100 mg/día) — clave en la prevención secundaria.',
        'Documentar la hora de administración de la dosis de carga (relevante en el protocolo de SCA).',
      ],
      suspender: [
        'Reacción alérgica grave (broncoespasmo, anafilaxia).',
        'Sangrado activo significativo.',
        'Antes de cirugía mayor programada (según protocolo, habitualmente 5-7 días si el riesgo hemorrágico supera al trombótico) — decisión médica individualizada.',
        'Diagnóstico de ACV hemorrágico (si se había administrado por error antes de confirmar con TC).',
      ],
    },

    incompatibilidades: [
      'Interacción con anticoagulantes orales/heparina — aumenta el riesgo de sangrado (uso combinado frecuente mostrando bajo control médico en SCA con doble/triple terapia).',
      'Precaución con otros AINEs — pueden interferir con el efecto antiagregante irreversible de la aspirina si se toman antes.',
      'No mezclar la formulación IV con otros fármacos en la misma jeringa sin verificar compatibilidad.',
      'Interacción con metotrexato a dosis altas (aumenta su toxicidad).',
    ],

    alertasSeguridad: [
      '🔴 EN SOSPECHA DE SCA: administrar 150-300 mg MASTICADA de inmediato — no retrasar por pruebas complementarias.',
      '🔴 CONTRAINDICADO en ACV HEMORRÁGICO — confirmar con TC antes de administrar en sospecha de ACV.',
      '🔴 CONTRAINDICADO en menores de 16 años por riesgo de síndrome de Reye (salvo indicaciones específicas como enfermedad de Kawasaki).',
      '🟠 Riesgo de sangrado gastrointestinal con uso prolongado — considerar protección gástrica en pacientes de riesgo.',
      '🟠 Reacción cruzada con alergia a AINEs — broncoespasmo en asmáticos con poliposis nasal.',
      '🟡 Efecto antiagregante irreversible durante toda la vida de la plaqueta (7-10 días) — relevante antes de procedimientos invasivos.',
    ],
  },

  modulos: {
    cardio: `
      <b>Protocolo Síndrome Coronario Agudo — Ácido Acetilsalicílico:</b><br/>
      <b>Ante sospecha de SCA (dolor torácico + ECG/clínica sugestiva):</b><br/>
      • <b>300 mg VO MASTICADA</b> de inmediato — no esperar confirmación diagnóstica completa.<br/>
      • Si no puede tragar/masticar: 250-500 mg IV lenta (acetilsalicilato de lisina).<br/><br/>
      <b>Junto con AAS, protocolo habitual de SCA incluye:</b><br/>
      • Segundo antiagregante (clopidogrel/ticagrelor/prasugrel) según protocolo local.<br/>
      • Nitroglicerina si dolor persiste y TA lo permite.<br/>
      • Morfina si dolor no controlado.<br/>
      • Oxígeno solo si SpO2 <90%.<br/>
      • Traslado urgente para reperfusión (ICP primaria o fibrinólisis según tiempos).<br/><br/>
      <b>Mantenimiento posterior:</b> 75-100 mg/día VO indefinido (salvo contraindicación).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Ante sospecha de SCA, administrar la dosis de carga MASTICADA sin demora — es una de las intervenciones que salva vidas más simples y rápidas.',
      'Si el paciente no puede masticar/tragar (bajo nivel de consciencia, disfagia): valorar vía IV.',
      'En ACV, confirmar con el equipo médico que la TC ha descartado hemorragia antes de administrar.',
      'Preguntar por alergia a AAS/AINEs y antecedente de asma antes de la primera dosis.',
      'Vigilar signos de sangrado durante el tratamiento crónico (encías, heces, hematomas).',
      'Reforzar la educación sobre la importancia de NO suspender la dosis de mantenimiento sin indicación médica.',
      'Documentar la hora exacta de la dosis de carga (dato relevante para el protocolo de tiempos puerta-aguja/puerta-balón).',
      'En pacientes con doble/triple terapia antitrombótica: vigilancia reforzada de sangrado.',
    ],

    efectosAdversos: [
      '🔴 Sangrado gastrointestinal (el más frecuente y clínicamente relevante)',
      '🟠 Sangrado en otras localizaciones (epistaxis, gingivorragia, hematomas)',
      '🟠 Broncoespasmo en asmáticos sensibles a AINEs',
      '🟡 Dispepsia, pirosis',
      '🟡 Tinnitus (dosis altas — signo de toxicidad salicílica)',
      '🟡 Síndrome de Reye en niños (encefalopatía + hígado graso) — motivo de la contraindicación pediátrica',
    ],

    contraindicaciones: [
      'Menores de 16 años (síndrome de Reye), salvo indicaciones específicas (enfermedad de Kawasaki).',
      'Hipersensibilidad a salicilatos o AINEs (incluido broncoespasmo).',
      'Úlcera péptica activa o sangrado gastrointestinal activo.',
      'Hemorragia intracraneal o ACV hemorrágico confirmado o sospechado sin descartar.',
      'Coagulopatía grave no controlada.',
      'Tercer trimestre del embarazo (a dosis altas, antiinflamatorias).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar los comprimidos en su envase original, protegidos de la humedad.',

    estabilidad: {
      'Comprimidos':         'Temperatura ambiente hasta vencimiento, proteger de la humedad',
      'Vial IV (Inyesprin®)': 'Temperatura ambiente hasta vencimiento sin reconstituir',
      'Reconstituido (IV)':  'Usar poco después de reconstituir según ficha técnica',
      'Aspecto':              'Comprimidos blancos; solución IV incolora tras reconstituir',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'La formulación IV: usar poco después de reconstituir el vial.',
      dosisRestante:     'Desechar sobrante de vial reconstituido no utilizado.',
      infusionPreparada: 'Administrar sin demora tras la preparación de la dosis IV.',
      notas:             'La dosis de carga oral debe MASTICARSE para acelerar la absorción — esto es clínicamente relevante, no solo una preferencia de administración.',
    },

    presentaciones: [
      'Adiro® 100 mg — comprimidos recubiertos (mantenimiento)',
      'Adiro® 300 mg — comprimidos (dosis de carga en SCA)',
      'Inyesprin® — vial 900 mg (acetilsalicilato de lisina, equivalente a 500 mg AAS) para uso IV',
      'Aspirina® 500 mg — comprimidos (uso analgésico/antipirético, dosis distinta)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Carga en síndrome coronario agudo', dosis: '<b>150-300 mg VO MASTICADA</b> (habitualmente 300 mg)', via: 'VO' },
      { indicacion: 'Mantenimiento cardiovascular',        dosis: '<b>75-100 mg/día VO</b> indefinido',                  via: 'VO' },
      { indicacion: 'ACV isquémico agudo (tras TC sin sangrado)', dosis: '160-300 mg VO/SNG en primeras 48 h',          via: 'VO/SNG' },
      { indicacion: 'IV si no hay vía oral disponible',    dosis: '250-500 mg IV lenta',                                via: 'IV' },
      { indicacion: 'Enfermedad de Kawasaki (pediatría)', dosis: 'Dosis específica pediátrica según protocolo (uso excepcional en <16 años)', via: 'VO' },
    ],

    embarazo: 'Contraindicado a dosis antiinflamatorias en el 3er trimestre (cierre prematuro del ductus, riesgo hemorrágico). A dosis bajas (75-150 mg/día) se usa en indicaciones obstétricas específicas (prevención de preeclampsia) bajo prescripción especializada — distinto contexto clínico del uso cardiovascular en adultos.',

    pediatria: '<b>Contraindicado en menores de 16 años</b> por riesgo de síndrome de Reye (encefalopatía + degeneración hepática), especialmente en contexto de infecciones virales (varicela, gripe). Excepción: enfermedad de Kawasaki, bajo supervisión especializada y dosis específica.',

    adultoMayor: 'Mayor riesgo de sangrado gastrointestinal — considerar protección gástrica (IBP) de forma más liberal. Sin ajuste de dosis específico por edad para la indicación antiagregante. Vigilar función renal y signos de sangrado con mayor frecuencia.',

    insufRenal: 'Precaución en insuficiencia renal avanzada — puede empeorar la función renal, especialmente combinado con otros nefrotóxicos. Sin ajuste de dosis formal a dosis antiagregantes bajas (75-100 mg/día); evitar dosis altas antiinflamatorias en IR grave.',

    insufHepatica: 'Precaución en hepatopatía grave — puede prolongar el tiempo de sangrado y empeorar la coagulopatía de base. Evitar dosis altas antiinflamatorias; la dosis antiagregante baja se mantiene generalmente si está clínicamente indicada.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Fichas Técnicas Adiro® e Inyesprin® (ácido acetilsalicílico).',
      'ISIS-2 Collaborative Group. Randomised trial of intravenous streptokinase, oral aspirin, both, or neither among 17,187 cases of suspected acute myocardial infarction. Lancet. 1988.',
      'Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.',
      'Powers WJ et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke. AHA/ASA. Stroke. 2019.',
      'Antithrombotic Trialists Collaboration. Aspirin in the primary and secondary prevention of vascular disease. Lancet. 2009.',
    ],
  },

});
