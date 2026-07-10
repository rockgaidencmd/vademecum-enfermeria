/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/fondaparinux.js
   Fuentes: CIMA AEMPS (Arixtra), FDA DailyMed,
   ESC Guidelines TEP/SCA 2023, CHEST Antithrombotic Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'fondaparinux',
  nombre:         'Fondaparinux',
  nombreComercial: 'Arixtra®',
  nombreGenerico: 'Fondaparinux Sodium',
  categoria:      'anticoagulantes',
  tags:           ['anticoagulante', 'inhibidor factor Xa', 'TVP', 'TEP', 'síndrome coronario agudo', 'profilaxis', 'trombocitopenia inducida por heparina'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Anticoagulante inhibidor selectivo del factor Xa. Riesgo de sangrado significativo, especialmente en insuficiencia renal (contraindicado si ClCr <20-30 mL/min por acumulación). NO tiene antídoto específico disponible en la práctica clínica habitual (a diferencia de heparina/protamina). Vigilancia estrecha de función renal y signos de sangrado.',

  nivel1: {

    puntosClave: [
      '<b>Inhibidor selectivo e indirecto del factor Xa</b> — vía subcutánea, dosis fija según peso, sin necesidad de monitorización de coagulación.',
      '<b>NO produce trombocitopenia inducida por heparina (TIH)</b> — alternativa segura en pacientes con TIH confirmada o sospechada.',
      'Profilaxis TVP/TEP: <b>2.5 mg SC/día</b>. Tratamiento TVP/TEP: <b>5-10 mg SC/día según peso</b>.',
      '<b>Contraindicado si ClCr <20 mL/min</b> (algunos protocolos: <30 mL/min para tratamiento) — eliminación exclusivamente renal, acumulación con riesgo hemorrágico.',
      '<b>Sin antídoto específico disponible</b> — el manejo del sangrado grave es de soporte (no existe reversor comercializado de uso habitual).',
    ],

    resumenRapido: 'Pentasacárido sintético que inhibe selectivamente el factor Xa de la coagulación mediante la potenciación de la antitrombina III, sin inhibir directamente la trombina (a diferencia de la heparina). Su administración subcutánea con dosis fija según peso y su farmacocinética predecible eliminan la necesidad de monitorización rutinaria de la coagulación. Al no interaccionar con el factor plaquetario 4, no produce trombocitopenia inducida por heparina, lo que lo convierte en la alternativa de elección en pacientes con TIH confirmada o alto riesgo. Su eliminación es exclusivamente renal, por lo que la insuficiencia renal es la principal limitación de uso.',

    objetivoTerapeutico: 'Profilaxis de la enfermedad tromboembólica venosa (cirugía ortopédica, abdominal, paciente médico inmovilizado) · Tratamiento de la trombosis venosa profunda y el tromboembolismo pulmonar · Tratamiento del síndrome coronario agudo (angina inestable/IAM sin elevación del ST) · Alternativa anticoagulante en trombocitopenia inducida por heparina',

    preparacion: {
      'Presentación':            '<b>Arixtra® 2.5 mg/0.5 mL, 5 mg/0.4 mL, 7.5 mg/0.6 mL, 10 mg/0.8 mL — jeringas precargadas</b>',
      'Vía':                     '<b>SC exclusivamente (excepto en SCA, donde puede iniciarse IV la primera dosis)</b>',
      'Dosis profilaxis TVP/TEP': '<b>2.5 mg SC/día</b>',
      'Dosis tratamiento TVP/TEP (<50 kg)': '5 mg SC/día',
      'Dosis tratamiento TVP/TEP (50-100 kg)': '<b>7.5 mg SC/día</b>',
      'Dosis tratamiento TVP/TEP (>100 kg)': '10 mg SC/día',
      'Dosis SCA':                '2.5 mg SC/día (primera dosis puede ser IV en angioplastia primaria)',
      'Técnica de inyección':    'SC en pared abdominal, alternando el lado; NO purgar la burbuja de aire de la jeringa precargada',
      '⏱️ Inicio efecto':         '2 h · Vida media: 17-21 h (permite dosis única diaria)',
      '🧊 Estabilidad':           'Jeringas precargadas listas para usar — no requieren reconstitución',
    },

    vigilancia: {
      antes: [
        '<b>Función renal (creatinina, ClCr) OBLIGATORIA</b> — contraindicado si ClCr <20 mL/min (o <30-50 según indicación y protocolo).',
        'Peso del paciente — la dosis de tratamiento se ajusta por peso (<50 kg, 50-100 kg, >100 kg).',
        'Recuento plaquetario basal.',
        'Antecedente de sangrado activo, coagulopatía o cirugía reciente con riesgo hemorrágico.',
        'Confirmar la indicación exacta (profilaxis vs tratamiento) — dosis muy diferentes.',
      ],
      durante: [
        'Técnica de inyección SC correcta: pared abdominal, alternar el lado, NO purgar la burbuja de aire de la jeringa.',
        'No aspirar antes de inyectar ni masajear la zona tras la inyección.',
        'Vigilar hematoma o dolor en el punto de inyección.',
      ],
      despues: [
        'Función renal periódica, especialmente en tratamientos prolongados o pacientes con función renal límite.',
        'Vigilar signos de sangrado: hematomas, sangrado gingival, melenas, hematuria.',
        'Recuento plaquetario si tratamiento prolongado (aunque el riesgo de TIH es prácticamente nulo).',
        'Documentar dosis, zona de inyección y tolerancia.',
      ],
      suspender: [
        'Sangrado activo significativo.',
        'Deterioro de la función renal por debajo del umbral de seguridad (individualizar según protocolo).',
        'Necesidad de procedimiento invasivo/quirúrgico urgente (suspender según vida media y función renal).',
        'Trombocitopenia grave de otra causa.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros fármacos en la misma jeringa.',
      'Precaución con otros anticoagulantes/antiagregantes concomitantes — riesgo aditivo de sangrado.',
      'No administrar por vía IM (riesgo de hematoma).',
    ],

    alertasSeguridad: [
      '🔴 SIN ANTÍDOTO ESPECÍFICO disponible en uso habitual — el sangrado grave se maneja con medidas de soporte (no existe reversor comercializado de práctica corriente).',
      '🔴 CONTRAINDICADO si ClCr <20 mL/min — acumulación con riesgo hemorrágico grave por eliminación exclusivamente renal.',
      '🟠 Riesgo de sangrado, especialmente en insuficiencia renal límite, ancianos o bajo peso.',
      '🟢 NO produce trombocitopenia inducida por heparina — alternativa segura en TIH confirmada.',
      '🟡 No requiere monitorización rutinaria de la coagulación (a diferencia de heparina no fraccionada).',
      '🟡 Técnica de inyección SC específica: no purgar la burbuja de aire de la jeringa precargada.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar la función renal antes de la primera dosis y periódicamente — es el factor limitante principal.',
      'Confirmar el peso del paciente para ajustar la dosis de tratamiento (<50 kg, 50-100 kg, >100 kg).',
      'Técnica de inyección SC: pared abdominal, alternar el lado cada vez, NO purgar la burbuja de aire de la jeringa precargada.',
      'No aspirar antes de inyectar ni masajear la zona después.',
      'Vigilar signos de sangrado en cada turno: hematomas, sangrado gingival, melenas.',
      'No administrar por vía IM — riesgo de hematoma muscular.',
      'Recordar que no hay antídoto de uso habitual — reforzar la prevención (verificación de dosis y función renal).',
      'Documentar dosis, zona de inyección alternada y tolerancia.',
    ],

    efectosAdversos: [
      '🔴 Sangrado (el riesgo principal, especialmente en IR o sobredosificación)',
      '🟠 Hematoma en el punto de inyección',
      '🟡 Trombocitopenia (mucho menos frecuente que con heparina, no inmunomediada)',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Reacción cutánea local (eritema, prurito)',
      '🟡 Anemia',
    ],

    contraindicaciones: [
      '<b>ClCr <20 mL/min</b> (o según protocolo institucional, umbrales más conservadores en algunos casos).',
      'Sangrado activo significativo.',
      'Endocarditis bacteriana aguda.',
      'Trombocitopenia grave con test positivo para anticuerpos anti-fondaparinux (rara).',
      'Peso <50 kg en profilaxis quirúrgica ortopédica (mayor riesgo de sangrado a dosis estándar).',
    ],

    fotosensibilidad: 'No relevante. Conservar las jeringas precargadas a temperatura ambiente (≤25°C), protegidas de la luz.',

    estabilidad: {
      'Jeringa precargada':    'Temperatura ambiente hasta la fecha de caducidad indicada',
      'No requiere refrigeración': 'Estable a temperatura ambiente',
      'Uso único':               'Cada jeringa es monodosis — no reutilizar ni conservar el sobrante',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Jeringa precargada de uso único — desechar tras la inyección.',
      dosisRestante:     'No aplica — dosis fija por jeringa, sin sobrante que conservar.',
      infusionPreparada: 'No aplica — administración SC directa desde la jeringa precargada.',
      notas:             'No purgar la burbuja de aire de la jeringa antes de inyectar — es intencional y forma parte de la técnica correcta.',
    },

    presentaciones: [
      'Arixtra® 2.5 mg/0.5 mL — jeringa precargada (profilaxis)',
      'Arixtra® 5 mg/0.4 mL — jeringa precargada (<50 kg, tratamiento)',
      'Arixtra® 7.5 mg/0.6 mL — jeringa precargada (50-100 kg, tratamiento)',
      'Arixtra® 10 mg/0.8 mL — jeringa precargada (>100 kg, tratamiento)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Profilaxis TVP/TEP',              dosis: '<b>2.5 mg SC/día</b>',                          via: 'SC' },
      { indicacion: 'Tratamiento TVP/TEP (<50 kg)',    dosis: '5 mg SC/día',                                    via: 'SC' },
      { indicacion: 'Tratamiento TVP/TEP (50-100 kg)', dosis: '<b>7.5 mg SC/día</b>',                           via: 'SC' },
      { indicacion: 'Tratamiento TVP/TEP (>100 kg)',   dosis: '10 mg SC/día',                                   via: 'SC' },
      { indicacion: 'Síndrome coronario agudo',         dosis: '2.5 mg SC/día (1ª dosis IV posible en ICP)',    via: 'SC/IV' },
    ],

    embarazo: 'Categoría B (FDA). Datos limitados pero no muestra paso placentario significativo. Se ha usado como alternativa en gestantes con alergia o TIH a heparina, bajo supervisión especializada. No es de primera línea rutinaria (las HBPM tienen más experiencia acumulada en el embarazo).',

    pediatria: 'No aprobado de forma rutinaria en pediatría. Uso excepcional y off-label bajo supervisión de hematología pediátrica en casos seleccionados (TIH pediátrica). Sin dosis estándar establecida.',

    adultoMayor: 'Mayor riesgo de sangrado por reducción fisiológica de la función renal. Ajustar o evitar según ClCr real (Cockcroft-Gault). Vigilancia más estrecha de función renal y signos de sangrado.',

    insufRenal: '<b>Contraindicado si ClCr <20 mL/min.</b> ClCr 20-50 mL/min: usar con precaución, considerar reducción de dosis en profilaxis (1.5 mg/día en algunos protocolos) y vigilancia estrecha. La eliminación es exclusivamente renal — es el factor limitante principal del fármaco.',

    insufHepatica: 'Sin ajuste específico necesario — eliminación renal, no hepática. Precaución en hepatopatía grave con coagulopatía asociada (mayor riesgo de sangrado por el trastorno de base, no por el fármaco en sí).',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Arixtra® (fondaparinux sódico).',
      'Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.',
      'Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.',
      'Kearon C et al. Antithrombotic Therapy for VTE Disease: CHEST Guideline. Chest. 2016.',
      'Warkentin TE et al. Treatment and prevention of heparin-induced thrombocytopenia: CHEST Guideline. Chest. 2012.',
    ],
  },

});
