/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/clopidogrel.js
   Fuentes: CIMA AEMPS (Plavix, Clopidogrel TAD, Tarbis),
   ESC Guidelines NSTEMI/STEMI 2023, AHA/ACC 2022,
   CURRENT-OASIS-7, CLARITY, COMMIT
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'clopidogrel',
  nombre:         'Clopidogrel',
  nombreGenerico: 'Clopidogrel Hydrogen Sulfate',
  categoria:      'anticoagulantes',
  tags:           ['antiplaquetario', 'SCA', 'IAM', 'stent', 'prevención secundaria', 'ictus isquémico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antiplaquetario potente. Riesgo de sangrado grave especialmente combinado con AAS. No tiene antídoto específico (transfusión plaquetaria si sangrado mayor). Inhibición plaquetaria dura 7-10 días tras suspensión.',

  nivel1: {

    puntosClave: [
      'Antiplaquetario - bloquea irreversiblemente receptor P2Y12 de ADP en plaquetas, inhibiendo agregación plaquetaria por 7-10 días (vida de la plaqueta).',
      '<b>SOLO VÍA ORAL</b> — no existe formulación IV de clopidogrel.',
      'En SCA: dosis de CARGA <b>300-600 mg</b> seguida de mantenimiento <b>75 mg/día</b>.',
      'Doble antiagregación (clopidogrel + AAS 75-100 mg/día) — estándar post-SCA o post-stent.',
      '<b>SUSPENDER 5-7 días antes de cirugía mayor</b> (excepto cirugía cardíaca urgente).',
    ],

    resumenRapido: 'Inhibidor irreversible del receptor P2Y12 de ADP en plaquetas. Profármaco activado por CYP2C19 hepático. Reduce agregación plaquetaria y formación de trombos arteriales. Indicado en: prevención eventos aterotrombóticos post-IAM, ictus isquémico, EAP, síndrome coronario agudo (SCA) con/sin elevación ST, post-implante de stent coronario, en combinación con AAS. Inicio efecto: 2-6h (con dosis de carga), efecto máximo: 3-7 días sin carga.',

    objetivoTerapeutico: 'Prevenir trombosis arterial · Reducir eventos cardiovasculares recurrentes · Prevenir trombosis del stent · Reducir mortalidad post-SCA',

    preparacion: {
      'Presentación':             '<b>Clopidogrel 75 mg comprimidos recubiertos</b> (más común)',
      'Presentación alt.':        'Clopidogrel 300 mg comprimidos (para dosis de carga)',
      'Vía':                      '<b>EXCLUSIVAMENTE ORAL</b> — no existe IV',
      '⏱️ DOSIS DE CARGA SCA':    '<b>300 mg VO dosis única</b> (4 comp de 75 mg o 1 comp de 300 mg)',
      '⏱️ DOSIS CARGA ALTERNATIVA':'<b>600 mg VO</b> en pacientes < 75 años con ICP planeada (CURRENT-OASIS-7)',
      '⏱️ MANTENIMIENTO':         '<b>75 mg VO 1 vez al día</b>',
      '⏱️ Duración mantenimiento':'12 meses post-SCA con stent · indefinido tras IAM en monoterapia',
      '⏱️ IAM con fibrinolisis':  '300 mg carga + 75 mg/día (CLARITY trial)',
      'Administración':           'Con o sin alimentos (alimentos no afectan absorción)',
      'Si SNG/PEG':                'Triturar comprimido y administrar por sonda con agua',
      'Almacenamiento':            'Temperatura ambiente (15-25°C), en blíster original',
      'Sin sensibilidad luz':      'No requiere protección especial',
    },

    vigilancia: {
      antes: [
        'Verificar antecedentes de sangrado: GI, intracraneal, urológico.',
        'Revisar Hb, plaquetas, INR basales.',
        'Comprobar uso concomitante de otros anticoagulantes (warfarina, NOAC, heparina).',
        'Comprobar uso de AAS, AINEs, ISRS — riesgo sangrado aumentado.',
        'Revisar interacciones con omeprazol/esomeprazol (controvertido - prefieren pantoprazol).',
        'Confirmar prescripción: dosis carga vs mantenimiento.',
        'En cirugía programada: suspender 5-7 días antes (excepto cardiaca urgente).',
        'En ICP urgente: dosis de carga DEBE administrarse antes o durante procedimiento.',
      ],
      durante: [
        'Administrar VO con o sin alimentos.',
        'Si dosis de carga (300-600 mg): explicar al paciente la cantidad de comprimidos.',
        'Vigilar tolerancia oral (raramente causa náuseas).',
      ],
      despues: [
        'Vigilar SANGRADO durante todo el tratamiento (universal con antiagregantes).',
        'Educar al paciente sobre signos: hematomas inexplicables, sangrado encías persistente, melena, hematuria, equimosis grandes.',
        'En SCA: vigilar dolor torácico recurrente (re-isquemia).',
        'En stent reciente: NO suspender antiagregación sin consultar cardiología.',
        'Control de Hb periódico (cada 3-6 meses) en uso prolongado.',
        'Vigilar signos de trombocitopenia (rara): PTT, púrpura, equimosis.',
        'En pre-cirugía: planificar suspensión 5-7 días antes con cirujano y cardiólogo.',
        'Documentar adherencia — la suspensión prematura post-stent ↑↑ riesgo trombosis stent.',
      ],
      suspender: [
        'Sangrado activo grave (gastrointestinal, intracraneal, retroperitoneal).',
        'Trombocitopenia severa (< 50,000) — descartar PTT por clopidogrel (raro).',
        'Reacción alérgica / Sd Stevens-Johnson.',
        'Hemorragia intracraneal.',
        'Cirugía mayor programada — 5-7 días antes.',
        '<b>NO SUSPENDER ARBITRARIAMENTE</b> en pacientes con stent reciente — riesgo trombosis stent.',
        'Prescripción médica de cambio o suspensión.',
      ],
    },

    incompatibilidades: [
      'Warfarina + clopidogrel + AAS (triple terapia) — riesgo sangrado MUY ALTO, vigilancia estricta.',
      'Heparinas — usar con vigilancia ↑.',
      'AINEs — ↑↑ riesgo sangrado GI (especialmente diclofenaco, naproxeno).',
      'ISRS (fluoxetina, paroxetina) — ↑ riesgo sangrado (afectan plaquetas).',
      '<b>Omeprazol/Esomeprazol</b>: inhiben CYP2C19, ↓ activación clopidogrel — preferir <b>PANTOPRAZOL o famotidina</b>.',
      'Repaglinida — ↑ niveles (riesgo hipoglucemia).',
      'Morfina (en SCA) — ↓ absorción/efecto clopidogrel (controvertido - estudios IMMEDIATE, CIRCUS).',
    ],

    alertasSeguridad: [
      '🔴 SANGRADO MAYOR — efecto adverso más grave, especialmente combinado con AAS.',
      '🔴 PTT (Púrpura Trombótica Trombocitopénica) muy rara pero grave — primeras 2 semanas.',
      '🔴 NO suspender bruscamente post-stent reciente (< 12 meses) — riesgo TROMBOSIS DEL STENT.',
      '🟠 Efecto irreversible — inhibición plaquetaria dura 7-10 días tras suspensión.',
      '🟠 SIN antídoto específico — transfusión de plaquetas en sangrado mayor.',
      '🟠 Resistencia genética CYP2C19 — 20-30% de pacientes son "non-responders" (especialmente asiáticos).',
      '🟠 Interacción con omeprazol/esomeprazol — preferir pantoprazol.',
      '🟡 Pre-cirugía: SUSPENDER 5-7 días antes (excepto cardiaca urgente).',
      '🟡 Náuseas, dispepsia ocasionales.',
      '🟡 NO requiere monitorización de coagulación (TP/TTPA normales).',
    ],
  },

  modulos: {

    sca: `
      <b>Clopidogrel en Síndrome Coronario Agudo (SCA):</b><br/>
      <b>INDICACIONES:</b><br/>
      • SCA sin elevación ST (angina inestable, IAM sin onda Q).<br/>
      • SCA con elevación ST (STEMI) con fibrinolisis o ICP.<br/>
      • Post-implante de stent coronario.<br/><br/>
      <b>DOSIS DE CARGA:</b><br/>
      <b>Pacientes < 75 años con ICP:</b><br/>
      • <b>600 mg VO</b> (dosis preferida) — efecto antiplaquetario más rápido y consistente.<br/>
      <b>Pacientes > 75 años:</b><br/>
      • <b>300 mg VO</b> (no dar 600 mg - riesgo sangrado).<br/>
      <b>STEMI con fibrinolisis:</b><br/>
      • 300 mg VO (CLARITY trial).<br/>
      <b>STEMI > 75 años sin fibrinolisis:</b><br/>
      • Iniciar con 75 mg/día SIN dosis de carga.<br/><br/>
      <b>MANTENIMIENTO:</b><br/>
      • 75 mg VO 1 vez al día × 12 meses (DAPT con AAS 75-100 mg).<br/>
      • Tras 12 meses: continuar AAS solo o re-evaluar según riesgo.<br/><br/>
      <b>BENEFICIO (CURE, CLARITY, COMMIT trials):</b><br/>
      • Reducción de mortalidad CV 20-25%.<br/>
      • Reducción de IAM recurrente 30%.<br/>
      • Reducción de ACV 25%.<br/>
      <b>RIESGO:</b><br/>
      • Sangrado mayor: NNH ~100 (1 sangrado mayor por cada 100 pacientes/año).
    `,

    cirugia: `
      <b>Manejo perioperatorio del Clopidogrel:</b><br/>
      <b>SUSPENSIÓN PRE-OPERATORIA:</b><br/>
      • <b>5-7 días antes</b> de cirugía mayor (especialmente neurocirugía, oftalmológica).<br/>
      • Función plaquetaria normal restaura en 5-7 días.<br/><br/>
      <b>SITUACIONES ESPECIALES:</b><br/>
      <b>1. Cirugía cardíaca urgente (CABG):</b><br/>
      • Suspender clopidogrel idealmente 5 días antes.<br/>
      • Si urgente: realizar igualmente, con mayor riesgo de sangrado.<br/>
      • Considerar transfusión plaquetas profiláctica.<br/><br/>
      <b>2. Stent coronario reciente (< 6 meses):</b><br/>
      • <b>NO SUSPENDER ARBITRARIAMENTE</b> — riesgo trombosis stent (mortalidad 30-40%).<br/>
      • Si cirugía URGENTE: continuar clopidogrel (riesgo sangrado vs trombosis stent).<br/>
      • Consultar cardiología obligatoriamente.<br/><br/>
      <b>3. Procedimientos menores (extracción dental, endoscopia diagnóstica):</b><br/>
      • Generalmente NO requieren suspensión.<br/>
      • Hemostasia local efectiva.<br/><br/>
      <b>4. Bridging con HBPM:</b><br/>
      • No recomendado de rutina (clopidogrel es antiplaquetario, no anticoagulante).<br/>
      • Considerar en casos específicos con cardiología.<br/><br/>
      <b>REINICIO POST-CIRUGÍA:</b><br/>
      • Tras 24-48h de hemostasia adecuada.<br/>
      • Considerar dosis de carga si suspensión prolongada y stent reciente.
    `,

    sangrado: `
      <b>Manejo del sangrado en pacientes con Clopidogrel:</b><br/>
      <b>SANGRADO MENOR (epistaxis, encías, equimosis pequeñas):</b><br/>
      1. Hemostasia local.<br/>
      2. Continuar clopidogrel (generalmente).<br/>
      3. Vigilar evolución.<br/><br/>
      <b>SANGRADO MAYOR (Hb ↓ > 2 g/dL, transfusión, hemodinámicamente significativo):</b><br/>
      1. <b>SUSPENDER clopidogrel</b>.<br/>
      2. Hemostasia local/endoscópica si posible (GI).<br/>
      3. Soporte hemodinámico (fluidos, vasopresores).<br/>
      4. <b>TRANSFUSIÓN DE PLAQUETAS</b> (1 pool por cada 10 kg) si sangrado activo grave.<br/>
      5. Si combinado con AAS: el efecto persiste 7-10 días, transfusiones plaquetas pueden ser necesarias.<br/>
      6. Considerar desmopresina (DDAVP) 0.3 mcg/kg IV en sangrado refractario.<br/>
      7. Evaluar y reiniciar antiagregación cuando seguro (en stent reciente: prioritario).<br/><br/>
      <b>SANGRADO INTRACRANEAL:</b><br/>
      1. SUSPENDER clopidogrel y AAS inmediatamente.<br/>
      2. Transfusión plaquetas urgente.<br/>
      3. TC craneal urgente.<br/>
      4. Consulta neurocirugía.<br/>
      5. Control PIC, soporte neurológico.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar prescripción: dosis carga vs mantenimiento.',
      'Para dosis de carga (300 o 600 mg): contar comprimidos correctos.',
      'Administrar VO con agua, con o sin alimentos.',
      'Si pacientes con SNG/PEG: triturar comprimido y administrar con agua.',
      'Educar al paciente sobre adherencia — NO suspender sin consultar (especialmente con stent).',
      'Educar signos de sangrado: hematomas grandes, sangrado prolongado, melena, hematuria.',
      'En post-stent: tarjeta de identificación con tipo de stent y duración de DAPT.',
      'Evitar AINEs durante tratamiento — preferir paracetamol.',
      'Si requiere IBP: preferir pantoprazol (no omeprazol/esomeprazol).',
      'En pre-cirugía programada: planificar suspensión 5-7 días antes con médico.',
      'En cirugía urgente: comunicar al cirujano que paciente toma clopidogrel.',
      'Vigilar Hb, plaquetas periódicamente.',
      'Documentar fecha inicio, dosis, indicación, plan de duración.',
    ],

    efectosAdversos: [
      '🔴 Sangrado mayor (GI, intracraneal, urológico)',
      '🔴 Púrpura Trombótica Trombocitopénica (PTT) - rara pero grave (primeras 2 semanas)',
      '🔴 Trombosis del stent si suspensión prematura',
      '🟠 Sangrado menor frecuente (equimosis, epistaxis)',
      '🟠 Trombocitopenia',
      '🟠 Neutropenia (rara, generalmente reversible)',
      '🟠 Reacción alérgica / rash',
      '🟡 Náuseas, vómitos (raros)',
      '🟡 Dispepsia',
      '🟡 Diarrea (raro)',
      '🟡 Cefalea',
      '🟡 Hepatotoxicidad (raro)',
      '🟡 Síndrome Stevens-Johnson (muy raro)',
      '🟡 Hemorragia conjuntival',
    ],

    contraindicaciones: [
      'Sangrado patológico activo (úlcera péptica activa, hemorragia intracraneal).',
      'Hipersensibilidad a clopidogrel o derivados.',
      'Insuficiencia hepática severa (Child-Pugh C).',
      'Lactancia (atraviesa leche materna).',
      'Precaución en: trauma craneal reciente, cirugía mayor reciente, alteraciones de coagulación.',
    ],

    fotosensibilidad: 'No relevante. Comprimidos no fotosensibles. Almacenar a temperatura ambiente en blíster original.',

    estabilidad: {
      'Blíster sin abrir':           'Temperatura ambiente (15-25°C) hasta vencimiento (3 años)',
      'Aspecto comprimido':           'Comprimido recubierto rosa (Plavix®) - integridad sin rotura',
      'Conservación':                'Lugar seco, fuera del alcance de niños',
      'Humedad':                      'Proteger de humedad excesiva',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Comprimido: retirar del blíster justo antes de administrar. No preparar con antelación.',
      dosisRestante:    'Conservar en el blíster original hasta la administración. No partir ni triturar.',
      infusionPreparada:'No aplica — administración oral exclusivamente.',
      notas:            'Proteger de la humedad y la luz. Conservar a temperatura ambiente (< 25 °C) en el blíster original.',
    },

    presentaciones: [
      'Plavix® 75 mg comprimidos (marca original Sanofi/BMS)',
      'Plavix® 300 mg comprimidos (dosis de carga)',
      'Clopidogrel 75 mg genérico (múltiples marcas: Normon, TAD, Stada, Cinfa, Mabo, etc.)',
      'Clopidogrel 300 mg genérico',
      'Combinaciones: Clopidogrel + AAS 75/100 mg (DuoCover®, DuoPlavin®)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'SCA sin elevación ST (carga)',        dosis: '<b>300 mg VO dosis única</b>',             via: 'VO' },
      { indicacion: 'SCA con ICP planeada (< 75 años)',   dosis: '<b>600 mg VO dosis de carga</b>',           via: 'VO' },
      { indicacion: 'STEMI + fibrinolisis (carga)',        dosis: '300 mg VO',                                 via: 'VO' },
      { indicacion: 'STEMI > 75 años (sin carga)',         dosis: '75 mg/día (sin dosis carga)',               via: 'VO' },
      { indicacion: 'Mantenimiento post-SCA',              dosis: '<b>75 mg/día × 12 meses</b>',               via: 'VO' },
      { indicacion: 'Prevención secundaria post-IAM',     dosis: '75 mg/día (alternativa a AAS)',             via: 'VO' },
      { indicacion: 'Post-ictus isquémico',                 dosis: '75 mg/día (largo plazo)',                  via: 'VO' },
      { indicacion: 'Enfermedad arterial periférica',       dosis: '75 mg/día',                                 via: 'VO' },
    ],

    embarazo: 'Categoría B (FDA) según algunos datos, C según otros. Datos limitados — usar solo si beneficio supera riesgo claramente. <b>CONTRAINDICADO en lactancia</b> (atraviesa leche).',

    pediatria: 'No aprobado para uso pediátrico — datos limitados. Uso compasivo en cardiopatías congénitas con riesgo trombótico bajo supervisión cardiológica pediátrica.',

    adultoMayor: '> 75 años: <b>NO dar dosis de carga de 600 mg</b> — usar 300 mg. Mayor riesgo de sangrado. Vigilancia ↑ de Hb y plaquetas. En STEMI > 75 años: considerar iniciar 75 mg/día sin dosis de carga.',

    insufRenal: 'Sin ajuste específico — metabolismo principalmente hepático. En diálisis: dosis estándar. Mayor riesgo de sangrado en IRC severa por disfunción plaquetaria urémica.',

    insufHepatica: 'Insuficiencia hepática leve-moderada (Child-Pugh A-B): usar con precaución. <b>Insuficiencia hepática severa (Child-Pugh C): CONTRAINDICADO</b> (CYP2C19 disfuncional, metabolismo alterado).',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Plavix® 75 mg y 300 mg. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Clopidogrel TAD, Tarbis (genéricos). AEMPS.',
      'ESC Guidelines. Acute Coronary Syndromes. European Heart Journal. 2023.',
      'AHA/ACC Guidelines. Coronary Artery Revascularization. Circulation. 2022.',
      'CURE Trial. Clopidogrel in Unstable Angina to Prevent Recurrent Events. NEJM. 2001.',
      'CLARITY-TIMI 28. Clopidogrel in STEMI with Fibrinolysis. NEJM. 2005.',
      'COMMIT/CCS-2. Clopidogrel in STEMI. Lancet. 2005.',
      'CURRENT-OASIS 7. Loading Dose 600 mg vs 300 mg. NEJM. 2010.',
      'ESC/EACTS Guidelines. Dual Antiplatelet Therapy. European Heart Journal. 2017.',
    ],
  },

});
