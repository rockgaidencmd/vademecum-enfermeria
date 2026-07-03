/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/sugammadex.js
   Fuentes: CIMA AEMPS (Bridion, Sugammadex Fresenius/Teva/Tarbis),
   FDA DailyMed, ASA Guidelines NMB Reversal
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'sugammadex',
  nombre:         'Sugammadex',
  nombreGenerico: 'Sugammadex Sodium',
  categoria:      'analgesia',
  tags:           ['antídoto', 'rocuronio', 'vecuronio', 'reversión neuromuscular', 'anestesia', 'UCI', 'RSI'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antídoto específico de rocuronio/vecuronio. Solo debe administrarse por o bajo supervisión de anestesiólogo. NO revierte otros relajantes musculares (succinilcolina, atracurio, cisatracurio). Incompatible físicamente con verapamilo, ondansetrón y ranitidina en misma línea.',

  nivel1: {

    puntosClave: [
      'Gamma-ciclodextrina modificada — <b>ENCAPSULA selectivamente rocuronio y vecuronio</b> en plasma formando un complejo inactivo eliminado por vía renal.',
      '<b>REVERSIÓN ULTRARRÁPIDA</b> (1-3 minutos) incluso de bloqueo neuromuscular PROFUNDO — a diferencia de neostigmina que requiere cierto grado de recuperación espontánea previa.',
      '<b>SOLO REVIERTE ROCURONIO Y VECURONIO</b> — NO efectivo contra succinilcolina, atracurio, cisatracurio, mivacurio (relajantes bencilisoquinolínicos).',
      '<b>INCOMPATIBILIDAD FÍSICA documentada con VERAPAMILO, ONDANSETRÓN y RANITIDINA</b> — no administrar por la misma línea.',
      'Dosis de <b>16 mg/kg</b> permite reversión INMEDIATA incluso justo después de dosis de intubación (RSI) — clave en "cannot intubate, cannot ventilate".',
    ],

    resumenRapido: 'Antagonista selectivo de relajantes musculares aminoesteroideos (rocuronio, vecuronio). Mecanismo único: encapsula la molécula del relajante en el plasma mediante inclusión molecular, formando un complejo hidrosoluble inactivo que se elimina por filtración glomerular sin metabolizarse. A diferencia de los anticolinesterásicos (neostigmina), NO actúa a nivel de la placa motora sino directamente sobre el fármaco circulante. Inicio: 1-3 minutos independientemente de la profundidad del bloqueo. Indicado en: reversión de rutina del bloqueo neuromuscular por rocuronio/vecuronio al final de cirugía, reversión inmediata de emergencia (vía aérea fallida tras RSI con rocuronio), reversión en insuficiencia renal donde neostigmina no es apropiada.',

    objetivoTerapeutico: 'Revertir bloqueo neuromuscular por rocuronio/vecuronio de forma rápida y completa · Permitir extubación segura · Resolver emergencia de vía aérea tras RSI',

    preparacion: {
      'Presentación':             '<b>Sugammadex 100 mg/mL - vial 2 mL (200 mg) o 5 mL (500 mg)</b>',
      'Diluyente':                '<b>NO requiere dilución en adultos</b> - administrar directo IV',
      'Dilución pediátrica':      'Se puede diluir a 10 mg/mL con SF 0.9% para mayor exactitud de dosis',
      'Vía':                      'IV exclusiva - bolo único',
      '⏱️ ADMINISTRACIÓN':        '<b>Bolo IV único en 10 segundos</b> (en línea de infusión existente o directo)',
      '⏱️ REVERSIÓN RUTINARIA (reaparece T2)':'<b>2 mg/kg IV</b>',
      '⏱️ REVERSIÓN PROFUNDA (1-2 PTC)':'<b>4 mg/kg IV</b>',
      '⏱️ REVERSIÓN INMEDIATA (post-RSI, 3 min tras rocuronio 1.2 mg/kg)':'<b>16 mg/kg IV</b>',
      '⏱️ Re-bloqueo tras sugammadex':'Si necesita re-relajar: usar relajante NO aminoesteroideo (cisatracurio) o esperar tiempo suficiente',
      'Bomba':                    'No necesaria - bolo único directo',
      '🧊 ESTABILIDAD tras dilución':'<b>24-48 horas entre 2-25°C</b> (según fabricante) - usar inmediatamente desde punto microbiológico',
      '🧊 Vial sin abrir':         'Refrigerar 2-8°C · Estable a temperatura ambiente hasta 3 meses (verificar packaging)',
      'Aspecto':                  'Solución transparente, incolora a ligeramente amarillenta',
    },

    vigilancia: {
      antes: [
        '<b>Solo debe administrarse por o bajo supervisión de anestesiólogo</b> (indicación CIMA AEMPS).',
        'Confirmar que el relajante usado es ROCURONIO o VECURONIO (no efectivo en otros).',
        'Monitor de TOF (Train of Four) o PTC para evaluar profundidad del bloqueo antes de decidir dosis.',
        'Revisar función renal - eliminación es renal, considerar en IRC severa.',
        'Verificar NO uso concomitante de toremifeno o anticonceptivos hormonales recientes (interacciones).',
        'Acceso IV permeable, preferir línea limpia (evitar verapamilo/ondansetrón/ranitidina en la misma).',
        'Doble verificación: dosis según nivel de bloqueo, peso real del paciente.',
      ],
      durante: [
        'Bolo IV único en 10 segundos.',
        'Monitor: PA, FC, SpO₂, capnografía.',
        'Observar recuperación neuromuscular - habitualmente evidente en 1-3 minutos.',
        'Vigilar TOF - objetivo T4/T1 ≥ 0.9 para extubación segura.',
        'Vigilar reacción alérgica/anafilaxia (rara pero descrita) primeros minutos.',
        'Vigilar bradicardia (puede ocurrir, generalmente leve y transitoria).',
      ],
      despues: [
        'Confirmar recuperación neuromuscular completa (TOF ≥ 0.9) antes de extubar.',
        'Vigilar signos de debilidad residual: cabeza sostenida 5 seg, fuerza de prensión, FR y volumen tidal adecuados.',
        'Vigilar recurarización (rara con dosis adecuada, pero posible con subdosificación).',
        'Informar a la paciente sobre reducción de eficacia de anticonceptivos hormonales durante 7 días (dosis adicional o método barrera).',
        'En pacientes con IRC: vigilancia prolongada por eliminación más lenta del complejo.',
        'Documentar: dosis, hora, nivel de bloqueo pre-reversión, tiempo hasta recuperación TOF.',
      ],
      suspender: [
        'No aplica en el sentido de "suspender" - es dosis única.',
        'Si recurarización: nueva dosis de sugammadex puede ser necesaria (bajo supervisión anestesia).',
        'Reacción anafiláctica: tratamiento estándar (adrenalina, soporte).',
      ],
    },

    incompatibilidades: [
      '<b>VERAPAMILO</b> - INCOMPATIBILIDAD FÍSICA documentada (CIMA AEMPS).',
      '<b>ONDANSETRÓN</b> - INCOMPATIBILIDAD FÍSICA documentada.',
      '<b>RANITIDINA</b> - INCOMPATIBILIDAD FÍSICA documentada.',
      'No mezclar con otros medicamentos excepto los expresamente autorizados en ficha técnica.',
      'Lavar línea con SF antes y después si se comparte vía con estos fármacos.',
      'Preferir línea IV independiente para sugammadex.',
    ],

    alertasSeguridad: [
      '🔴 <b>NO REVIERTE otros relajantes</b> (succinilcolina, atracurio, cisatracurio, mivacurio) - solo rocuronio/vecuronio.',
      '🔴 <b>INCOMPATIBLE con verapamilo, ondansetrón, ranitidina</b> en misma línea.',
      '🟠 <b>REDUCE EFICACIA de anticonceptivos hormonales</b> durante 7 días - informar a la paciente (usar método adicional).',
      '🟠 Reacciones de hipersensibilidad/anafilaxia (poco frecuentes pero descritas, incluyendo en voluntarios sanos).',
      '🟠 Bradicardia, en ocasiones severa - vigilar durante administración.',
      '🟠 En insuficiencia renal severa (CrCl < 30): usar con PRECAUCIÓN - eliminación del complejo más lenta (considerar diálisis en casos extremos).',
      '🟡 Recurarización posible si dosis insuficiente para el nivel de bloqueo presente.',
      '🟡 Interfiere con pruebas de coagulación (TTPA, TP) transitoriamente tras la administración - considerar al interpretar resultados.',
      '🟡 Solo debe usarse bajo supervisión de anestesiólogo con monitorización neuromuscular adecuada.',
    ],
  },

  modulos: {

    reversionInmediata: `
      <b>Sugammadex en Reversión Inmediata (Emergencia de Vía Aérea):</b><br/>
      <b>INDICACIÓN CRÍTICA:</b><br/>
      • Situación "no puedo intubar, no puedo ventilar" (CICV) tras RSI con rocuronio.<br/>
      • Necesidad de despertar inmediato del paciente por cualquier emergencia.<br/>
      • Anafilaxia a rocuronio durante inducción.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      • Si RSI reciente con <b>rocuronio 1.2 mg/kg</b> (dosis alta estándar de RSI):<br/>
      • <b>Sugammadex 16 mg/kg IV en bolo de 10 segundos</b>.<br/>
      • Recuperación neuromuscular en <b>aproximadamente 1.5-3 minutos</b>.<br/>
      • Permite recuperación de ventilación espontánea si es la única opción viable.<br/><br/>
      <b>CONTEXTO CLÍNICO:</b><br/>
      • Esta es la razón por la que muchos protocolos de RSI prefieren ROCURONIO sobre succinilcolina cuando hay disponibilidad de sugammadex: permite "red de seguridad" en caso de vía aérea difícil imprevista.<br/>
      • <b>IMPORTANTE:</b> Aunque revierte la parálisis muscular, NO revierte los efectos de los hipnóticos/sedantes coadministrados - el paciente puede seguir inconsciente y requerir soporte ventilatorio.<br/><br/>
      <b>LIMITACIONES:</b><br/>
      • Requiere tener sugammadex INMEDIATAMENTE disponible en el área de RSI.<br/>
      • Dosis alta (16 mg/kg) es costosa - reservar para verdaderas emergencias.<br/>
      • No sustituye un plan de vía aérea difícil bien estructurado (video-laringoscopio, dispositivos supraglóticos, cricotirotomía).
    `,

    ucFalloRenal: `
      <b>Sugammadex en Insuficiencia Renal:</b><br/>
      <b>CONSIDERACIONES:</b><br/>
      • Eliminación de sugammadex y su complejo con rocuronio es PRINCIPALMENTE RENAL.<br/>
      • En IRC severa (CrCl < 30 mL/min): eliminación significativamente más lenta.<br/>
      • Ficha técnica CIMA: usar con PRECAUCIÓN en insuficiencia renal severa.<br/><br/>
      <b>VENTAJA vs NEOSTIGMINA en IRC:</b><br/>
      • Neostigmina también depende de cierto grado de eliminación renal y su reversión es menos predecible en bloqueo profundo.<br/>
      • Sugammadex sigue siendo EFECTIVO en revertir el bloqueo neuromuscular en IRC, aunque el complejo tarda más en eliminarse del organismo.<br/>
      • No hay evidencia de que la eficacia de reversión (recuperación de fuerza muscular) esté comprometida en IRC - solo la eliminación del complejo del cuerpo es más lenta.<br/><br/>
      <b>RECOMENDACIÓN PRÁCTICA:</b><br/>
      • Uso seguro y efectivo en la mayoría de pacientes con IRC para revertir bloqueo.<br/>
      • Vigilancia post-operatoria más prolongada.<br/>
      • En diálisis: el sugammadex-rocuronio complejo puede ser parcialmente eliminado con hemodiálisis de alto flujo (no siempre necesario clínicamente).<br/>
      • Insuficiencia hepática: <b>NO requiere ajuste</b> (eliminación es renal, no hepática).
    `,

    anticonceptivos: `
      <b>Interacción con Anticonceptivos Hormonales:</b><br/>
      <b>MECANISMO:</b><br/>
      • Sugammadex puede unirse a la progesterona (estructuralmente similar a los esteroides que encapsula).<br/>
      • Esto reduce la exposición sistémica a progestágenos y estrógenos de anticonceptivos hormonales.<br/>
      • Efecto equivalente a "olvidar una dosis" del anticonceptivo.<br/><br/>
      <b>RECOMENDACIÓN (CIMA AEMPS/Ficha Técnica Bridion):</b><br/>
      • <b>Informar a toda paciente en edad fértil</b> que use anticonceptivos hormonales (orales, parches, implantes, DIU hormonal, inyectables).<br/>
      • <b>Recomendar método anticonceptivo NO hormonal adicional durante los siguientes 7 días</b> tras la administración de sugammadex.<br/>
      • Aplica independientemente de la dosis de sugammadex utilizada.<br/><br/>
      <b>DOCUMENTACIÓN:</b><br/>
      • Incluir esta información en el informe de anestesia/alta.<br/>
      • Considerar informar activamente antes del alta hospitalaria, especialmente en cirugía ambulatoria.<br/>
      • Relevante en TODA paciente en edad reproductiva que recibió sugammadex, no solo en cirugía ginecológica.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>Solo debe administrarse bajo supervisión de anestesiólogo</b>.',
      'Confirmar que el relajante usado fue rocuronio o vecuronio (NO otros).',
      'Usar monitor de TOF/PTC para determinar dosis correcta según nivel de bloqueo.',
      'Etiquetar jeringa: Sugammadex [mg], dosis (mg/kg), hora.',
      'Bolo IV único en 10 segundos - sin necesidad de dilución en adultos.',
      '<b>Evitar línea compartida con verapamilo, ondansetrón, ranitidina</b>.',
      'Monitor continuo: PA, FC, SpO₂, capnografía durante administración.',
      'Confirmar recuperación TOF ≥ 0.9 antes de extubar.',
      'Vigilar signos clínicos de recuperación: fuerza de prensión, sostener cabeza 5 seg.',
      'Informar a mujeres en edad fértil sobre reducción de eficacia anticonceptiva 7 días.',
      'En IRC: vigilancia post-operatoria más prolongada.',
      'Documentar: dosis, nivel de bloqueo pre-reversión, tiempo hasta recuperación.',
      'Tener disponible en área de RSI si protocolo institucional lo contempla (reversión de emergencia).',
      'Vigilar reacción alérgica/anafilaxia en los primeros minutos.',
    ],

    efectosAdversos: [
      '🔴 Anafilaxia (poco frecuente, incluso en voluntarios sanos)',
      '🔴 Bradicardia severa (rara)',
      '🟠 Recurarización (con dosis insuficiente)',
      '🟠 Reducción de eficacia de anticonceptivos hormonales (7 días)',
      '🟡 Náuseas, vómitos post-operatorios',
      '🟡 Dolor en sitio de inyección',
      '🟡 Tos durante la administración',
      '🟡 Alteración transitoria de pruebas de coagulación (TTPA, TP)',
      '🟡 Disgeusia (alteración del gusto) - infrecuente',
      '🟡 Mareos',
    ],

    contraindicaciones: [
      'Hipersensibilidad a sugammadex o excipientes.',
      'No hay contraindicación absoluta específica más allá de la hipersensibilidad.',
      'Precaución en: insuficiencia renal severa, uso concomitante con toremifeno (puede requerir dosis mayor de sugammadex).',
      'No indicado para revertir bloqueo por relajantes NO aminoesteroideos.',
    ],

    fotosensibilidad: 'Algunos fabricantes recomiendan proteger de la luz tras la dilución (verificar packaging específico). El vial sin abrir no requiere protección especial de luz en la mayoría de presentaciones.',

    estabilidad: {
      'Vial sin abrir':             'Refrigerar 2-8°C (verificar packaging - algunos estables a TA hasta 3 meses)',
      'Tras dilución (si aplica)':  '<b>24-48 horas entre 2-25°C</b> según fabricante',
      'Post-apertura':               'Usar inmediatamente desde punto de vista microbiológico',
      'Aspecto':                     'Transparente, incolora a ligeramente amarillenta',
      'Temperatura':                 'NO congelar',
    },

    presentaciones: [
      'Bridion® 100 mg/mL - vial 2 mL (200 mg) - MSD (marca original)',
      'Bridion® 100 mg/mL - vial 5 mL (500 mg)',
      'Sugammadex Fresenius Kabi 100 mg/mL (genérico)',
      'Sugammadex Teva 100 mg/mL (genérico)',
      'Sugammadex Tarbis 100 mg/mL (genérico)',
      'Sugammadex Aspen 100 mg/mL (genérico)',
      'Sugammadex Amomed 100 mg/mL (genérico)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Reversión rutinaria (reaparece T2)',     dosis: '<b>2 mg/kg IV</b>',                          via: 'IV' },
      { indicacion: 'Reversión profunda (1-2 PTC)',           dosis: '<b>4 mg/kg IV</b>',                          via: 'IV' },
      { indicacion: 'Reversión inmediata (post-RSI)',         dosis: '<b>16 mg/kg IV</b>',                         via: 'IV' },
      { indicacion: 'Pediátrico (2-17 años, reaparece T2)',   dosis: '2 mg/kg IV',                                 via: 'IV' },
      { indicacion: 'Pediátrico (bloqueo profundo)',           dosis: '4 mg/kg IV',                                 via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA)/sin categorización CIMA específica. Datos limitados en embarazo humano. Uso solo si claramente necesario (beneficio > riesgo potencial desconocido). Compatible con lactancia según datos limitados disponibles - baja probabilidad de absorción oral significativa por el lactante.',

    pediatria: 'Aprobado desde el nacimiento hasta 17 años para reversión de rutina del bloqueo por rocuronio. Dosis: 2 mg/kg (reaparece T2) o 4 mg/kg (bloqueo profundo, 1-2 PTC). Se puede diluir a 10 mg/mL con SF para mayor exactitud de dosificación en niños pequeños. Reversión inmediata (16 mg/kg) NO está bien establecida en población pediátrica.',

    adultoMayor: 'Sin ajuste específico de dosis por edad. El tiempo de recuperación puede ser ligeramente más prolongado que en adultos jóvenes, pero la eficacia de reversión se mantiene.',

    insufRenal: 'Insuficiencia renal leve-moderada: sin ajuste de dosis. <b>Insuficiencia renal severa (CrCl < 30): usar con PRECAUCIÓN</b> - eliminación del complejo sugammadex-rocuronio más lenta, aunque la eficacia de reversión no está comprometida.',

    insufHepatica: '<b>NO requiere ajuste de dosis</b> - sugammadex se elimina principalmente por vía renal, no hepática (indicación expresa CIMA AEMPS para insuficiencia hepática leve-moderada).',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Bridion® 100 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Sugammadex Fresenius Kabi, Teva, Tarbis, Aspen, Amomed 100 mg/mL. AEMPS.',
      'FDA DailyMed. Sugammadex Injection. U.S. National Library of Medicine.',
      'Sparr HJ, et al. Sugammadex - A New Era in Neuromuscular Blockade Reversal. Anaesthesia. 2009.',
      'ASA Committee on Standards. Neuromuscular Blockade Monitoring Guidelines. Anesthesiology. 2023.',
      'Naguib M, et al. Consensus Statement on Perioperative Use of Neuromuscular Monitoring. Anesth Analg. 2018.',
      'Hristovska AM, et al. Efficacy and Safety of Sugammadex vs Neostigmine (Cochrane Review). 2017.',
      'Pediamécum AEP. Sugammadex. Asociación Española de Pediatría.',
    ],
  },

});
