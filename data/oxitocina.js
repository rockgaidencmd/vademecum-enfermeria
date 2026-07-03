/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/oxitocina.js
   Fuentes: CIMA AEMPS (Syntocinon), FDA DailyMed,
   ACOG Practice Bulletins, SEGO, OMS Intrapartum Care 2018
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'oxitocina',
  nombre:         'Oxitocina',
  nombreGenerico: 'Oxytocin',
  categoria:      'otros',
  tags:           ['obstetricia', 'parto', 'hemorragia postparto', 'inductores', 'uterotónico', 'UCI', 'alto riesgo'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Uterotónico potente. La hiperestimulación uterina puede causar sufrimiento fetal agudo, rotura uterina y muerte fetal. Requiere monitorización continua con CTG (cardiotocografía). Nunca administrar sin bomba de infusión.',

  nivel1: {

    puntosClave: [
      '<b>NUNCA bolo IV directo</b> — causa hipotensión severa y colapso cardiovascular.',
      'Monitorización continua con CTG (cardiotocografía) obligatoria durante toda la infusión.',
      'Si hiperestimulación uterina (contracción > 5 en 10 min o duración > 90 seg): <b>REDUCIR O DETENER</b> infusión inmediatamente.',
      'Efecto antidiurético significativo: con infusiones prolongadas y grandes volúmenes, riesgo de intoxicación hídrica (hiponatremia). Restricción hídrica en inducción prolongada.',
      'Usar <b>exclusivamente en bomba de infusión volumétrica</b> — nunca en goteo libre.',
    ],

    resumenRapido: 'Hormona uterotónica nonapeptídica sintética idéntica a la hormona natural producida por la neurohipófisis. Actúa sobre receptores de oxitocina en miometrio — aumenta frecuencia, duración e intensidad de contracciones uterinas. También tiene acción en glándula mamaria (eyección de leche) y efecto antidiurético (receptor V1). Indicada en inducción del parto, estimulación de contracciones en trabajo de parto hipóxico, hemorragia postparto (HPP), manejo activo del alumbramiento. Inicio IV: 1-5 min. Vida media: 1-6 min (metabolismo hepático y placentario rápido).',

    objetivoTerapeutico: 'Inducir o estimular contracciones uterinas regulares · Prevenir y tratar hemorragia postparto · Manejo activo del alumbramiento · Contracciones cada 2-3 min de 40-60 seg de duración',

    preparacion: {
      'Presentación':            '<b>Oxitocina 5 UI/mL — ampolla 1 mL (5 UI)</b>',
      'Presentación alt.':       'Oxitocina 10 UI/mL — ampolla 1 mL (10 UI)',
      'Diluyente':               '<b>SF 0.9% (preferido) · SG 5%</b>',
      'Concentración estándar':  '<b>10 UI en 500 mL SF → 20 mUI/mL</b> (inducción del parto)',
      'Concentración HPP':       '<b>20-40 UI en 500 mL SF → 40-80 mUI/mL</b> (hemorragia postparto)',
      'Vía':                     'IV exclusiva (infusión) · IM (postparto únicamente)',
      '⏱️ INICIO inducción':     '<b>0.5-2 mUI/min → duplicar c/30-60 min hasta dinámica adecuada</b>',
      '⏱️ DOSIS mantenimiento':  '6-12 mUI/min (rango: 1-32 mUI/min)',
      '⏱️ DOSIS máxima':          '<b>32-40 mUI/min — NUNCA superar sin indicación explícita</b>',
      '⏱️ HPP profilaxis':        '<b>10 UI IM al nacimiento del hombro anterior</b> (manejo activo)',
      '⏱️ HPP tratamiento':       '20-40 UI IV en 500 mL SF a velocidad según respuesta',
      'Bomba':                   '<b>Bomba de infusión volumétrica — OBLIGATORIA</b>',
      '🧊 ESTABILIDAD':          '<b>24 horas a TA · Refrigerada (2-8°C) hasta vencimiento sin abrir</b>',
      '⚠️ CONSERVAR':            '<b>Refrigerada 2-8°C — NO congelar · NO a temperatura ambiente prolongada</b>',
      'Aspecto':                 'Solución incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Confirmar indicación y orden médica con dosis, velocidad de inicio y protocolo de titulación.',
        'Verificar presentación fetal, edad gestacional, estado del cuello uterino.',
        'Bienestar fetal basal mediante CTG — NO iniciar si FCF patológica.',
        'PA y FC materna basales.',
        'Historia de cesárea previa o cirugía uterina — riesgo de rotura uterina.',
        'Doble verificación del medicamento, concentración y velocidad con segundo profesional.',
        'Confirmar disponibilidad de equipo de emergencia obstétrica.',
      ],
      durante: [
        '<b>CTG continuo — no hay pausa durante la infusión de oxitocina.</b>',
        'Evaluar dinámica uterina cada 15-30 min: frecuencia, duración e intensidad de contracciones.',
        'PA y FC materna c/15-30 min.',
        '<b>Si hiperestimulación (> 5 contracciones/10 min o duración > 90 seg): REDUCIR O DETENER.</b>',
        '<b>Si FCF patológica (bradicardia, desaceleraciones tardías): DETENER infusión, O₂, posición lateral izquierda, avisar médico urgente.</b>',
        'Vigilar balance hídrico — riesgo de intoxicación hídrica con infusión prolongada.',
        'Vigilar dolor y malestar materno — ofrecer analgesia si necesario.',
      ],
      despues: [
        'En postparto inmediato: vigilar tono uterino y sangrado vaginal c/15 min × 1h.',
        'Fundus uterino firme y contraído — si blando: masaje uterino + aumentar oxitocina.',
        'Monitorizar PA, FC, SpO₂ c/15 min × 1h.',
        'Balance hídrico estricto — diuresis mínima 25-30 mL/h.',
        'Vigilar signos de intoxicación hídrica: cefalea, confusión, convulsiones, hiponatremia.',
        'En HPP: cuantificar sangrado con balón colector, vigilar estado hemodinámico.',
        'Documentar: UI administradas, dinámica uterina, FCF, respuesta, sangrado postparto.',
      ],
      suspender: [
        '<b>Hiperestimulación uterina</b> (> 5 contracciones/10 min o duración > 90 seg).',
        '<b>FCF patológica</b> (bradicardia sostenida, desaceleraciones tardías repetidas).',
        'Sospecha de rotura uterina: dolor abdominal agudo súbito, pérdida del contorno uterino.',
        'Intoxicación hídrica / hiponatremia severa.',
        'Reacción anafiláctica (rara).',
        'Parto consumado y hemorragia controlada.',
        'Prescripción médica de suspensión.',
      ],
    },

    incompatibilidades: [
      'Noradrenalina — compatibilidad variable, usar vías separadas.',
      'Soluciones alcalinas — verificar compatibilidad.',
      'No mezclar con otros uterotónicos en misma línea (ergotamínicos, misoprostol IV).',
      'Lavar línea con SF antes y después de otros medicamentos.',
      'Compatible con SF 0.9% y SG 5% como diluyentes.',
    ],

    alertasSeguridad: [
      '🔴 HIPERESTIMULACIÓN UTERINA — sufrimiento fetal agudo, rotura uterina, muerte fetal.',
      '🔴 NUNCA bolo IV — hipotensión severa, colapso cardiovascular, muerte materna.',
      '🔴 ROTURA UTERINA — riesgo aumentado en: cesárea previa, cirugía uterina, multiparidad extrema.',
      '🟠 Intoxicación hídrica (hiponatremia) con infusiones prolongadas y grandes volúmenes.',
      '🟠 FCF patológica — detener infusión inmediatamente, O₂, lateralización.',
      '🟠 CTG CONTINUO obligatorio — sin monitorización no se puede usar.',
      '🟡 Efecto antidiurético — restringir líquidos en inducción prolongada.',
      '🟡 Hipotensión materna con bolus rápidos (no usar).',
    ],
  },

  modulos: {

    induccion: `
      <b>Protocolo de Inducción del Parto con Oxitocina (OMS/ACOG):</b><br/>
      <b>CONCENTRACIÓN ESTÁNDAR:</b> 10 UI en 500 mL SF = 20 mUI/mL.<br/><br/>
      <b>PAUTA DE TITULACIÓN (protocolo de baja dosis — más segura):</b><br/>
      1. <b>Inicio: 0.5-2 mUI/min</b> (1.5-6 mL/h en concentración 20 mUI/mL).<br/>
      2. <b>Incremento: doblar dosis c/30-60 min</b> hasta dinámica adecuada.<br/>
      3. <b>Dinámica adecuada:</b> 3-5 contracciones en 10 min de 40-60 seg de duración.<br/>
      4. <b>Dosis efectiva usual: 6-12 mUI/min</b>.<br/>
      5. <b>Dosis máxima: 32-40 mUI/min</b> (raramente necesario).<br/><br/>
      <b>CRITERIOS PARA NO AUMENTAR:</b><br/>
      • > 5 contracciones en 10 min.<br/>
      • Contracción de duración > 90 seg.<br/>
      • FCF no reactiva o desaceleraciones.<br/><br/>
      <b>CRITERIOS PARA SUSPENDER:</b><br/>
      • Hiperestimulación con FCF patológica.<br/>
      • Sospecha de sufrimiento fetal agudo.<br/>
      • Rotura de membranas sin progresión en cesárea previa.
    `,

    hpp: `
      <b>Oxitocina en Hemorragia Postparto (HPP):</b><br/>
      <b>DEFINICIÓN HPP:</b> Pérdida > 500 mL (parto vaginal) o > 1000 mL (cesárea).<br/><br/>
      <b>PROFILAXIS — Manejo Activo del Alumbramiento (OMS):</b><br/>
      • <b>10 UI IM al nacimiento del hombro anterior</b> (antes de expulsión placenta).<br/>
      • Alternativa: 10 UI IV lento (en bolo muy lento, 1-2 min) post-parto.<br/>
      • Asociar: tracción controlada del cordón + masaje uterino.<br/><br/>
      <b>TRATAMIENTO HPP activa:</b><br/>
      • <b>20-40 UI en 500 mL SF → infusión IV rápida</b> (velocidad según respuesta).<br/>
      • Si no responde: añadir ergometrina, misoprostol, ácido tranexámico, carbetocina.<br/>
      • Si refractaria: oxitocina en infusión continua 10-40 UI/h.<br/><br/>
      <b>VIGILANCIA:</b><br/>
      • Tono uterino c/15 min.<br/>
      • Sangrado cuantificado (balón colector).<br/>
      • PA, FC, SpO₂ continuas.<br/>
      • Hemograma, coagulación, fibrinógeno.<br/>
      • Temperatura — descartar coagulopatía dilucional.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar la concentración preparada — error de concentración puede ser fatal.',
      'Bomba de infusión volumétrica OBLIGATORIA — nunca goteo libre.',
      'Doble verificación de dosis inicial y velocidad con otro profesional antes de iniciar.',
      'Asegurar CTG continuo funcionando antes de conectar la infusión.',
      'Evaluar dinámica uterina cada 15-30 min — anotar en partograma.',
      '<b>Si contracción > 90 seg o > 5 en 10 min: PARAR infusión y avisar médico.</b>',
      'Vigilar FCF en CTG de forma continua — actuar ante desaceleraciones tardías.',
      'Balance hídrico cada hora en inducción prolongada — restricción de líquidos si > 8h.',
      'Registrar cada cambio de dosis con hora y motivo.',
      'En postparto: palpar fondo uterino, cuantificar sangrado, vigilar bienestar materno.',
      'Conservar ampollas en nevera hasta su uso.',
      'Documentar: UI/h administradas, dinámica, FCF, PA, sangrado.',
    ],

    efectosAdversos: [
      '🔴 Hiperestimulación uterina → sufrimiento fetal → muerte fetal',
      '🔴 Rotura uterina (cesárea previa, multiparidad)',
      '🔴 Hipotensión severa con bolo IV rápido',
      '🟠 Taquicardia materna, arritmias',
      '🟠 Intoxicación hídrica (hiponatremia, convulsiones, coma)',
      '🟠 Náuseas, vómitos',
      '🟠 Hipertensión materna',
      '🟡 Espasmo coronario (raro)',
      '🟡 Rash, reacción alérgica (rara)',
      '🟡 Hiperbilirrubinemia neonatal (inducción prolongada)',
      '🟡 Bradicardia neonatal',
    ],

    contraindicaciones: [
      'Desproporción cefalopélvica absoluta.',
      'Presentación fetal anómala (transversa).',
      'Placenta previa oclusiva.',
      'Hipersensibilidad a oxitocina.',
      'FCF patológica antes de iniciar (sufrimiento fetal previo).',
      'Precaución con: cesárea previa clásica, cirugía uterina mayor, sobredistensión uterina (polihidramnios, gemelar).',
    ],

    fotosensibilidad: 'Las ampollas deben conservarse protegidas de la luz. La oxitocina es sensible a la luz solar directa. Almacenar refrigerada (2-8°C) en su caja original.',

    estabilidad: {
      'Ampolla sin abrir':     '<b>Refrigerada (2-8°C) hasta vencimiento — NO a temperatura ambiente prolongada</b>',
      'Diluida en SF/SG 5%':   '<b>24 horas a temperatura ambiente (15-25°C)</b>',
      'NO congelar':           'Pérdida de actividad biológica',
      'Aspecto':               'Incolora — desechar si turbidez o partículas',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato. Desechar sobrante de la ampolla.',
      dosisRestante:    'No conservar sobrante. Desechar inmediatamente.',
      infusionPreparada:'24 h a temperatura ambiente (15–25 °C) en SF 0.9% o SG 5%.',
      notas:            'Conservar ampollas sin abrir en refrigeración (2–8 °C). No congelar. Proteger de la luz directa.',
    },

    presentaciones: [
      'Syntocinon® 5 UI/mL — ampolla 1 mL (5 UI) — Novartis/Alliance',
      'Syntocinon® 10 UI/mL — ampolla 1 mL (10 UI)',
      'Oxitocina genérico 5 UI/mL, 10 UI/mL (varios laboratorios)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Inducción parto (inicio)',       dosis: '<b>0.5-2 mUI/min IV</b> (titular c/30-60 min)',        via: 'IV' },
      { indicacion: 'Inducción parto (mantenimiento)', dosis: '6-12 mUI/min IV (máximo 32-40 mUI/min)',               via: 'IV' },
      { indicacion: 'HPP profilaxis (manejo activo)', dosis: '<b>10 UI IM al nacimiento hombro anterior</b>',         via: 'IM' },
      { indicacion: 'HPP tratamiento',                dosis: '20-40 UI en 500 mL SF IV rápido',                       via: 'IV' },
      { indicacion: 'HPP infusión continua',           dosis: '10-40 UI/h IV según respuesta',                         via: 'IV' },
      { indicacion: 'Post-cesárea (profilaxis)',       dosis: '3-5 UI IV lento (1-2 min) post-extracción fetal',       via: 'IV' },
    ],

    embarazo: 'Indicada en el parto y postparto. Contraindicada antes del inicio del trabajo de parto sin indicación obstétrica clara. El uso inadecuado puede provocar sufrimiento fetal agudo o rotura uterina. Uso bajo estricta supervisión obstétrica.',

    pediatria: 'No aplicable — uso exclusivo en obstetricia.',

    adultoMayor: 'No aplica en sentido estricto (obstetricia). En mujeres de edad avanzada con gestación (> 40 años): mayor riesgo de rotura uterina. Vigilancia estrecha.',

    insufRenal: 'Sin ajuste específico. En IRA oligúrica: vigilar balance hídrico estrictamente — riesgo de intoxicación hídrica aumentado por efecto antidiurético.',

    insufHepatica: 'Sin ajuste de dosis. Metabolismo hepático y placentario. En hepatopatía severa: mayor precaución con el efecto antidiurético.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Syntocinon® 5 UI/mL y 10 UI/mL. Agencia Española de Medicamentos.',
      'FDA DailyMed. Oxytocin Injection. U.S. National Library of Medicine.',
      'ACOG Practice Bulletin 107. Induction of Labor. Obstet Gynecol. 2009 (reafirmado 2019).',
      'OMS. Recomendaciones de la OMS para la conducción del trabajo de parto. 2015.',
      'OMS. Recomendaciones de la OMS para la prevención y el tratamiento de la hemorragia posparto. 2014.',
      'SEGO. Inducción del parto. Protocolos SEGO. 2020.',
      'Butwick AJ, et al. Oxytocin Dosing in the Peripartum Period. Anesth Analg. 2018.',
      'Mousa HA, et al. Treatment for Primary Postpartum Haemorrhage. Cochrane Database. 2014.',
    ],
  },

});
