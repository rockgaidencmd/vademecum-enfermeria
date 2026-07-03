/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/clonazepam.js
   Fuentes: CIMA AEMPS (Rivotril), FDA DailyMed,
   AAN Epilepsy Guidelines, ILAE 2022,
   Guías de status epilepticus
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'clonazepam',
  nombre:         'Clonazepam',
  nombreGenerico: 'Clonazepam',
  categoria:      'otros',
  tags:           ['antiepiléptico', 'benzodiacepina', 'epilepsia', 'crisis convulsivas', 'ansiolítico', 'controlado'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Benzodiacepina de alta potencia. Riesgo de depresión respiratoria, especialmente combinado con opioides, alcohol u otros depresores del SNC. Sustancia controlada (psicotrópico). Síndrome de abstinencia grave si se suspende bruscamente.',

  nivel1: {

    puntosClave: [
      '<b>Sustancia psicotrópica controlada</b> — registro y doble llave obligatorios según normativa.',
      'Vía IV: administrar LENTAMENTE en bolo de <b>mínimo 1-2 minutos</b> — bolo rápido causa apnea.',
      '<b>DEPRESIÓN RESPIRATORIA</b>: riesgo grave al combinarlo con opioides, alcohol, otros benzodiacepinas o barbitúricos.',
      'Antídoto: <b>Flumazenil 0.2 mg IV</b> (repetir hasta 1 mg total) — disponible en todo momento.',
      '<b>NUNCA suspender bruscamente</b> en uso crónico — síndrome de abstinencia grave (convulsiones, psicosis).',
    ],

    resumenRapido: 'Benzodiacepina antiepiléptica de alta potencia y acción prolongada (vida media 18-50h). Mecanismo: potencia la acción inhibitoria del GABA en receptores GABA-A, aumentando la frecuencia de apertura de canales de cloro. Indicado en epilepsia infantil (crisis de ausencia, mioclónicas, tónico-clónicas), status epilepticus (IV), síndrome de Lennox-Gastaut, crisis de pánico, espasmos musculares. Inicio de acción IV: 1-3 min. Duración: 6-12h (variable por tolerancia).',

    objetivoTerapeutico: 'Control de crisis epilépticas · Prevención de recurrencia · Tratamiento status epilepticus · Control de crisis de pánico · Reducción de mioclonías',

    preparacion: {
      'Presentación IV':       '<b>Rivotril® 1 mg/mL ampolla 1 mL</b> — para dilución obligatoria',
      'Presentación VO':       'Comprimidos 0.5 mg, 2 mg · Gotas pediátricas 2.5 mg/mL',
      'Presentación SL':       'Comprimidos sublinguales (según disponibilidad por país)',
      'Diluyente IV':          '<b>SF 0.9% — NUNCA SG 5%</b> (adsorción al PVC con dextrosado)',
      'Dilución IV':           '<b>1 mg (1 mL) + 9 mL SF → 0.1 mg/mL</b>',
      'Dilución infusión':     '5-10 mg en 100-250 mL SF',
      'Vía':                   'IV lenta · IM (absorción irregular) · VO · SL (emergencia)',
      '⏱️ BOLO IV':            '<b>MÍNIMO 1-2 minutos para 1 mg — bolo rápido = apnea</b>',
      '⏱️ INFUSIÓN IV':        '0.5-1 mg/min máximo',
      '⏱️ DOSIS crisis aguda': '<b>0.5-1 mg IV en adultos, repetir si necesario c/5-10 min</b>',
      '⏱️ DOSIS mantenimiento':'0.5-2 mg VO c/8-12h',
      'Bomba':                 'Recomendada para infusión',
      'Material':              '<b>Usar jeringa de vidrio o polipropileno — el PVC puede adsorber clonazepam</b>',
      '🧊 ESTABILIDAD':        '<b>Usar inmediatamente tras dilución</b> — estabilidad limitada',
      'Aspecto':               'Solución incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>Verificar que flumazenil está disponible</b> en la unidad antes de administrar IV.',
        'Frecuencia respiratoria basal, SpO₂, nivel de consciencia (Glasgow).',
        'Revisar medicación concomitante: opioides, alcohol, otros depresores SNC — RIESGO SINÉRGICO.',
        'Antecedente de apnea del sueño, EPOC severo — mayor riesgo de depresión respiratoria.',
        'En epilepsia: tipo de crisis, frecuencia basal, fármacos antiepilépticos actuales.',
        'Confirmar prescripción: dosis, vía, frecuencia.',
        'Doble verificación y registro como sustancia controlada.',
      ],
      durante: [
        'Administrar bolo IV LENTAMENTE — mínimo 1-2 min para 1 mg.',
        '<b>Monitor de SpO₂ continuo durante administración IV.</b>',
        'Tener flumazenil preparado y accesible.',
        'Vigilar FR, nivel de consciencia c/5 min durante IV.',
        'Si SpO₂ < 90% o FR < 10 rpm: oxígeno, flumazenil, avisar médico.',
        'Vigilar hipotensión — efecto vasodilatador moderado.',
      ],
      despues: [
        'Vigilar nivel de consciencia y FR c/15 min × 1h post-IV.',
        'SpO₂ continua durante 2h post-administración IV.',
        'Evaluar control de crisis: duración, tipo, recuperación del paciente.',
        'En uso crónico: vigilar sedación excesiva, ataxia, deterioro cognitivo.',
        'No conducir ni manejar maquinaria pesada durante tratamiento.',
        'Educar al paciente: NO suspender bruscamente — descenso progresivo coordinado con médico.',
        'En pediatría: vigilar hipersalivación y broncoespasmo (efecto secretagogo).',
        'Documentar: dosis, hora, vía, respuesta, SpO₂, FR, nivel consciencia.',
      ],
      suspender: [
        'SpO₂ < 90% que no responde a estimulación/O₂.',
        'FR < 8 rpm o apnea.',
        'Pérdida de consciencia o sedación profunda no deseada.',
        'Hipotensión severa.',
        '<b>Si síntomas de abstinencia en uso crónico: NO suspender — reducir gradualmente.</b>',
        'Prescripción médica de cambio o suspensión gradual.',
      ],
    },

    incompatibilidades: [
      '<b>Soluciones de SG 5% — adsorción del fármaco al PVC (pérdida de potencia).</b>',
      'Usar SF 0.9% como diluyente.',
      'Bicarbonato de sodio — precipitación.',
      'No mezclar con otros fármacos en la misma jeringa.',
      'Usar jeringas de vidrio o polipropileno — el PVC puede adsorber clonazepam.',
      'Lavar línea con SF antes y después.',
    ],

    alertasSeguridad: [
      '🔴 APNEA con bolo IV rápido — administrar LENTO (mínimo 1-2 min por mg).',
      '🔴 DEPRESIÓN RESPIRATORIA SINÉRGICA con opioides, alcohol, barbitúricos.',
      '🔴 SÍNDROME DE ABSTINENCIA GRAVE si suspensión brusca en uso crónico (convulsiones, psicosis).',
      '🟠 Antídoto FLUMAZENIL — tener disponible antes de cualquier administración IV.',
      '🟠 Sedación excesiva, ataxia, caídas en ancianos.',
      '🟠 Tolerancia y dependencia con uso prolongado.',
      '🟡 Hipersalivación y broncorrea en neonatos y lactantes.',
      '🟡 Deterioro cognitivo con uso crónico.',
      '🟡 Sustancia controlada — doble llave y registro obligatorio.',
    ],
  },

  modulos: {

    statusEpilepticus: `
      <b>Clonazepam en Status Epilepticus (SE):</b><br/>
      <b>POSICIÓN en algoritmo:</b> Benzodiacepina de primera línea (junto con diazepam y lorazepam).<br/><br/>
      <b>DOSIS IV en adultos:</b><br/>
      • <b>0.5-1 mg IV lento</b> (1-2 min por mg).<br/>
      • Repetir c/5 min si persiste crisis (máximo 3 dosis).<br/>
      • Dosis total máxima: 3-5 mg.<br/><br/>
      <b>DOSIS IV pediátrica:</b><br/>
      • 0.01-0.05 mg/kg IV lento.<br/>
      • Máximo 0.5-1 mg/dosis. Repetir c/10 min si necesario.<br/><br/>
      <b>MONITORIZACIÓN OBLIGATORIA:</b><br/>
      • SpO₂ continua.<br/>
      • FR y nivel de consciencia c/5 min.<br/>
      • Flumazenil disponible y preparado.<br/>
      • Si SE refractario tras 2 dosis BZD: añadir valproato, levetiracetam o fenitoína IV.<br/><br/>
      <b>VENTAJA:</b> Vida media larga (18-50h) — menor tasa de recurrencia a corto plazo vs diazepam.
    `,

    abstinencia: `
      <b>Síndrome de Abstinencia a Benzodiacepinas:</b><br/>
      <b>RIESGO:</b> Uso > 4 semanas a dosis terapéuticas puede causar dependencia.<br/><br/>
      <b>SÍNTOMAS DE ABSTINENCIA (aparecen 24-72h post-suspensión):</b><br/>
      • Ansiedad rebote, insomnio.<br/>
      • Temblores, sudoración.<br/>
      • Taquicardia, HTA.<br/>
      • <b>Crisis convulsivas</b> (grave).<br/>
      • Psicosis, delirium (grave).<br/><br/>
      <b>PREVENCIÓN:</b><br/>
      • <b>NUNCA suspender bruscamente</b> en uso > 4 semanas.<br/>
      • Reducción gradual: 10-25% de la dosis por semana.<br/>
      • En alta dependencia: reducción más lenta (meses).<br/>
      • Diazepam como sustituto de larga acción si necesario.<br/><br/>
      <b>TRATAMIENTO DE ABSTINENCIA:</b><br/>
      • Reinstaurar benzodiacepina a dosis efectiva.<br/>
      • Descenso gradual bajo supervisión médica.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Registrar como sustancia controlada — doble verificación y firma obligatoria.',
      'Preparar flumazenil antes de administración IV (disponible y accesible).',
      'Diluir 1 mg en 9 mL SF 0.9% (concentración final 0.1 mg/mL) — NUNCA en SG 5%.',
      'Usar jeringas de vidrio o polipropileno para evitar adsorción.',
      'Administrar bolo IV LENTAMENTE — mínimo 1-2 min por cada mg.',
      '<b>Monitor de SpO₂ obligatorio durante administración IV y 2h después.</b>',
      'Vigilar FR y nivel de consciencia c/15 min × 1h post-IV.',
      'Registrar tipo de crisis, duración, respuesta al fármaco.',
      'En uso crónico: advertir al paciente sobre NO conducir ni consumir alcohol.',
      'Educar sobre NO suspensión brusca — coordinar siempre con médico.',
      'En pediatría: vigilar hipersalivación (tener aspiración disponible).',
      'Documentar: dosis, hora, vía, velocidad, respuesta, SpO₂, FR.',
    ],

    efectosAdversos: [
      '🔴 Apnea / paro respiratorio (bolo IV rápido)',
      '🔴 Depresión respiratoria grave (con opioides o alcohol)',
      '🔴 Crisis convulsivas por abstinencia brusca',
      '🟠 Sedación excesiva, somnolencia',
      '🟠 Hipotensión',
      '🟠 Ataxia, caídas (especialmente en ancianos)',
      '🟠 Tolerancia y dependencia',
      '🟠 Broncoespasmo, hipersalivación (neonatos)',
      '🟡 Confusión, amnesia anterógrada',
      '🟡 Deterioro cognitivo (uso crónico)',
      '🟡 Depresión del ánimo',
      '🟡 Trastornos de la visión (diplopía)',
      '🟡 Náuseas, alteraciones GI',
      '🟡 Rash cutáneo (raro)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a clonazepam u otras benzodiacepinas.',
      'Insuficiencia hepática severa.',
      'Miastenia gravis (potenciación de debilidad muscular).',
      'Apnea del sueño grave (relativa — usar con extrema precaución).',
      'Glaucoma de ángulo cerrado (relativa).',
      'Embarazo 1er trimestre (riesgo paladar hendido — relativa).',
      'Lactancia (excreción en leche).',
      'EPOC severo con hipercapnia.',
    ],

    fotosensibilidad: 'No relevante. Conservar ampollas y comprimidos a temperatura ambiente protegidos de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':    'Temperatura ambiente hasta vencimiento',
      'Diluida en SF':        '<b>USAR INMEDIATAMENTE — estabilidad limitada en dilución</b>',
      'Comprimidos':          'Temperatura ambiente (15-25°C) en blíster original',
      'Aspecto':              'Solución incolora — desechar si turbidez',
      'Temperatura':          'NO congelar · 15-25°C',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato. Desechar sobrante de la ampolla.',
      dosisRestante:    'No conservar sobrante de ampolla abierta. Desechar.',
      infusionPreparada:'Usar dentro de las 6 h de preparación a temperatura ambiente.',
      notas:            'Diluir solo en SF 0.9%. SG 5% causa adsorción al PVC. Usar jeringas de vidrio o polipropileno.',
    },

    presentaciones: [
      'Rivotril® 1 mg/mL solución inyectable — ampolla 1 mL (1 mg)',
      'Rivotril® 0.5 mg comprimidos',
      'Rivotril® 2 mg comprimidos',
      'Rivotril® gotas pediátricas 2.5 mg/mL',
      'Clonazepam genérico (Normon, Ratiopharm, etc.)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Status epilepticus (adulto)',      dosis: '<b>0.5-1 mg IV lento, repetir c/5 min (máx 3-5 mg)</b>', via: 'IV' },
      { indicacion: 'Status epilepticus (niño)',        dosis: '0.01-0.05 mg/kg IV lento (máx 0.5-1 mg/dosis)',           via: 'IV' },
      { indicacion: 'Epilepsia (inicio adulto VO)',     dosis: '0.5 mg VO c/8h — aumentar 0.5 mg c/3 días',              via: 'VO' },
      { indicacion: 'Epilepsia (mantenimiento adulto)', dosis: '<b>1-4 mg/día VO en 2-3 tomas</b>',                       via: 'VO' },
      { indicacion: 'Crisis de pánico',                  dosis: '0.25-0.5 mg VO c/12h',                                   via: 'VO' },
      { indicacion: 'Dosis máxima adulto',               dosis: '20 mg/día (epilepsia refractaria)',                       via: 'VO' },
      { indicacion: 'Pediátrico mantenimiento',          dosis: '0.01-0.05 mg/kg/día VO en 2-3 tomas (máx 0.2 mg/kg/día)', via: 'VO' },
    ],

    embarazo: '<b>Categoría D (FDA)</b>. Atraviesa placenta. Posible asociación con paladar hendido en 1er trimestre (datos contradictorios). En 3er trimestre: síndrome de abstinencia y depresión respiratoria neonatal. Usar solo si beneficio supera riesgo claramente. Contraindicado en lactancia (sedación del lactante).',

    pediatria: 'Antiepiléptico ampliamente usado en pediatría. Inicio: 0.01-0.05 mg/kg/día VO dividido c/8-12h. Síndrome de Lennox-Gastaut: dosis progresiva hasta eficacia. Vigilar hipersalivación y broncoespasmo (más frecuente en lactantes). Status epilepticus: 0.01-0.05 mg/kg IV lento.',

    adultoMayor: 'Mayor sensibilidad a efectos sedantes y riesgo de caídas. Iniciar con dosis bajas (0.25 mg). Reducir dosis de mantenimiento. Evitar uso prolongado por riesgo de deterioro cognitivo (criterios de Beers — usar con precaución).',

    insufRenal: 'Sin ajuste de dosis específico. Metabolismo principalmente hepático. En diálisis: sin eliminación significativa.',

    insufHepatica: 'En insuficiencia hepática moderada: REDUCIR DOSIS 50%. En cirrosis severa: usar con extrema precaución — riesgo de encefalopatía hepática. Contraindicado en insuficiencia hepática severa.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Rivotril® 1 mg/mL solución inyectable. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Rivotril® 0.5 mg y 2 mg comprimidos. AEMPS.',
      'FDA DailyMed. Clonazepam Tablets. U.S. National Library of Medicine.',
      'Glauser T, et al. ILAE Treatment Guidelines: Evidence-based Analysis of Antiepileptic Drug Efficacy. Epilepsia. 2022.',
      'Brophy GM, et al. Guidelines for the Evaluation and Management of Status Epilepticus. Neurocrit Care. 2012.',
      'AAN Practice Guideline. Initial Treatment of Status Epilepticus. Neurology. 2016.',
      'Pediamécum AEP. Clonazepam. Asociación Española de Pediatría.',
      'American Geriatrics Society. Beers Criteria for Potentially Inappropriate Medication Use in Older Adults. 2023.',
    ],
  },

});
