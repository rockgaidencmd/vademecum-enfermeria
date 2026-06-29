/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/noradrenalina.js
   Fuentes: DailyMed/FDA, Surviving Sepsis Campaign 2021,
   Micromedex, Guías SEMICYUC, OPS/OMS
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:            'noradrenalina',
  nombre:        'Noradrenalina',
  nombreGenerico:'Norepinefrina',
  categoria:     'vasopresores',
  tags:          ['UCI', 'shock séptico', 'vasopresor', 'aminas', 'crítico'],
  prioridad:     'critical',
  altoRiesgo:    true,
  altoRiesgoTexto: 'Vasopresor potente. Puede causar isquemia tisular grave y necrosis por extravasación. Administración exclusiva por vía central. Requiere monitorización hemodinámica continua.',

  /* ═══════════════════════════════════════════
     NIVEL 1 — VISTA RÁPIDA
  ═══════════════════════════════════════════ */
  nivel1: {

    puntosClave: [
      'Administrar SIEMPRE por catéter venoso central (CVC). La vía periférica solo en emergencia extrema y por tiempo mínimo.',
      'Nunca administrar sin monitorización continua de presión arterial (preferiblemente línea arterial).',
      'Titular la dosis para mantener PAM ≥ 65 mmHg en shock séptico (Surviving Sepsis Campaign 2021).',
      'Diluir siempre antes de administrar. Nunca administrar sin diluir (concentrado).',
      'Vigilar el sitio de infusión cada hora por riesgo de extravasación y necrosis.',
    ],

    resumenRapido: 'Catecolamina vasopresora de primera línea en shock séptico y distributivo. Actúa principalmente sobre receptores α1 (vasoconstricción) con efecto β1 moderado (inotropismo). Aumenta la presión arterial media y la resistencia vascular sistémica.',

    objetivoTerapeutico: 'Mantener PAM ≥ 65 mmHg · Restaurar perfusión tisular · Soporte hemodinámico en shock refractario a fluidos',

    preparacion: {
      'Presentación':     '4 mg/4 mL ampolla (1 mg/mL) · 8 mg/4 mL ampolla (2 mg/mL)',
      'Diluyente':        'SG 5% (preferido) · SF 0.9% (aceptable)',
      'Concentración std':'4 mg en 250 mL SG 5% → <b>16 mcg/mL</b>',
      'Concentración alt':'8 mg en 250 mL SG 5% → <b>32 mcg/mL</b> (restricción hídrica)',
      'Vía':              'Catéter venoso central (CVC) — obligatorio',
      'Velocidad inicio': '0.01–0.1 mcg/kg/min · Titular según respuesta',
      'Dosis habitual':   '0.1–2 mcg/kg/min (dosis altas > 1 mcg/kg/min indican shock refractario)',
      'Bomba':            'Bomba de infusión volumétrica — obligatoria',
      'Filtro':           'No requiere filtro específico',
      'Proteger luz':     'Sí — proteger de la luz solar directa',
    },

    vigilancia: {
      antes: [
        'Verificar acceso venoso central permeable y funcionante.',
        'Confirmar que el paciente tiene monitorización continua de PA (invasiva preferida).',
        'Comprobar volemia adecuada antes de iniciar (no usar vasopresores para corregir hipovolemia no tratada).',
        'Registrar PA basal, FC, SpO₂, diuresis.',
        'Verificar prescripción médica con dosis, concentración y velocidad.',
        'Doble verificación con otro profesional de enfermería (medicamento de alto riesgo).',
      ],
      durante: [
        'Monitorizar PA continua — objetivo PAM ≥ 65 mmHg.',
        'Registrar FC cada 15–30 min al inicio, luego según estabilidad.',
        'Vigilar sitio de inserción del CVC cada hora — extravasación = emergencia.',
        'Controlar diuresis horaria — objetivo > 0.5 mL/kg/h.',
        'Observar coloración y temperatura de extremidades (vasoconstricción periférica).',
        'Monitorizar SpO₂ y estado de consciencia.',
        'Verificar permeabilidad de la línea y conexiones cada turno.',
        'Registrar toda modificación de dosis con hora y motivo.',
      ],
      despues: [
        'Nunca suspender bruscamente — disminuir dosis gradualmente (destete progresivo).',
        'Monitorizar PA durante al menos 30 min post-suspensión.',
        'Registrar tiempo total de administración y dosis acumulada.',
        'Evaluar signos de isquemia periférica (dedos, piel) tras infusión prolongada.',
        'Documentar respuesta hemodinámica en la historia clínica.',
      ],
      suspender: [
        'PAM > 90 mmHg mantenida sin ajuste de dosis (posible sobredosis).',
        'FC > 130 lpm sostenida o arritmias graves.',
        'Signos de isquemia distal: frialdad extrema, cianosis, dolor en extremidades.',
        'Extravasación confirmada — iniciar protocolo inmediatamente.',
        'Prescripción médica de suspensión o cambio de vasopresor.',
      ],
    },

    incompatibilidades: [
      'Bicarbonato de sodio — inactiva la noradrenalina (degradación alcalina).',
      'Soluciones alcalinas (pH > 7) — degradación del fármaco.',
      'Insulina regular — incompatibilidad física documentada en misma línea.',
      'Tiopental — precipitación inmediata.',
      'No mezclar con otros fármacos en la misma luz del CVC siempre que sea posible.',
      'Aminofilina — incompatibilidad química.',
    ],

    alertasSeguridad: [
      'NUNCA administrar por vía periférica de forma rutinaria — riesgo de necrosis tisular grave.',
      'La suspensión brusca puede causar hipotensión severa y paro cardíaco.',
      'Dosis > 1 mcg/kg/min se asocian a isquemia miocárdica y mesentérica.',
      'En pacientes con hipovolemia no corregida, la vasoconstricción puede empeorar la perfusión tisular.',
      'Verificar SIEMPRE la concentración antes de programar la bomba — errores de concentración son fatales.',
    ],
  },

  /* ═══════════════════════════════════════════
     MÓDULOS DINÁMICOS
  ═══════════════════════════════════════════ */
  modulos: {

    extravasacion: `
      <b>Protocolo inmediato de extravasación:</b><br/>
      1. Detener la infusión de inmediato — NO retirar el catéter todavía.<br/>
      2. Aspirar el máximo posible del fármaco extravasado a través del catéter.<br/>
      3. Notificar al médico de inmediato.<br/>
      4. Administrar <b>Fentolamina 5–10 mg</b> diluida en 10–15 mL SF subcutánea en la zona afectada (dentro de las primeras 12 horas).<br/>
      5. Elevar el miembro afectado.<br/>
      6. NO aplicar calor — puede aumentar el daño tisular.<br/>
      7. Documentar: hora, zona, volumen extravasado, tratamiento realizado.<br/>
      8. Vigilar la zona cada hora durante las primeras 24 horas.
    `,

    cardio: `
      <b>Monitorización cardiovascular continua obligatoria:</b><br/>
      • Línea arterial para PA invasiva (ideal) o NIBP cada 5–15 min.<br/>
      • ECG continuo — vigilar arritmias, cambios ST (isquemia).<br/>
      • Presión venosa central si disponible.<br/>
      • Gasto cardíaco/índice cardíaco si el paciente tiene Swan-Ganz o PiCCO.<br/>
      • Lactato sérico cada 2–4 horas para evaluar perfusión tisular.<br/>
      • ScvO₂ o SvO₂ para valorar balance DO₂/VO₂.
    `,
  },

  /* ═══════════════════════════════════════════
     NIVEL 2 — VER MÁS
  ═══════════════════════════════════════════ */
  nivel2: {

    cuidadosEnfermeria: [
      'Etiquetar siempre la jeringa/bolsa con: nombre del fármaco, concentración (mcg/mL), fecha y hora de preparación, iniciales del preparador.',
      'Usar línea dedicada exclusiva para la noradrenalina cuando sea posible.',
      'Cambiar el sistema de infusión cada 24–72 horas según protocolo institucional.',
      'Al cambiar la bolsa/jeringa, evitar interrupciones de la infusión > 30 segundos (riesgo hipotensión).',
      'En destete: reducir la dosis en pasos de 0.02–0.05 mcg/kg/min cada 15–30 min según tolerancia hemodinámica.',
      'Mantener registro horario de: dosis actual, PAM, FC, diuresis, estado del sitio de infusión.',
      'En pacientes con CVC de múltiples luces, reservar una luz exclusiva para vasopresores.',
    ],

    efectosAdversos: [
      '🔴 Isquemia distal / necrosis por vasoconstricción extrema (dedos, piel)',
      '🔴 Necrosis tisular grave por extravasación',
      '🟠 Hipertensión severa (sobredosis)',
      '🟠 Bradicardia refleja (por HTA)',
      '🟠 Arritmias cardíacas (taquicardia, extrasístoles)',
      '🟠 Isquemia miocárdica (dosis altas)',
      '🟡 Cefalea, ansiedad, temblor',
      '🟡 Náuseas y vómitos',
      '🟡 Isquemia mesentérica (infusión prolongada a dosis altas)',
      '🟡 Reducción del flujo renal (oliguria)',
    ],

    contraindicaciones: [
      'Hipovolemia no corregida (relativa — corregir antes de iniciar).',
      'Trombosis vascular mesentérica o periférica preexistente.',
      'Anestesia con halotano o ciclopropano (riesgo de arritmias graves).',
      'Hipersensibilidad conocida a la noradrenalina o sulfitos (excipiente en algunas presentaciones).',
    ],

    fotosensibilidad: 'Sí. Proteger la solución preparada de la luz solar directa. Las bolsas/jeringas deben cubrirse con funda opaca. La exposición a la luz puede causar degradación del fármaco y pérdida de potencia.',

    estabilidad: {
      'Preparada en SG 5%':  '24 horas a temperatura ambiente · 48 horas en refrigeración (2–8°C)',
      'Preparada en SF 0.9%':'24 horas a temperatura ambiente',
      'Temperatura':          'No congelar · Mantener a 15–25°C',
      'Aspecto':              'Solución incolora o ligeramente amarillenta — desechar si hay decoloración marrón o precipitado',
      'Envase':               'Vidrio o plástico libre de PVC (el PVC puede absorber el fármaco)',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato tras la apertura. Desechar cualquier sobrante de la ampolla.',
      dosisRestante:    'No conservar. Desechar inmediatamente. No reutilizar restos de dosis preparadas.',
      infusionPreparada:'24 h a temperatura ambiente (15–25 °C) / 48 h refrigerada (2–8 °C)',
      notas:            'Proteger de la luz durante toda la infusión. Desechar si hay cambio de color (marrón/rosado), turbidez o precipitado visible.',
    },

    presentaciones: [
      'Noradrenalina bitartrato 4 mg/4 mL (1 mg/mL) — ampolla 4 mL',
      'Noradrenalina bitartrato 8 mg/4 mL (2 mg/mL) — ampolla 4 mL',
      'Noradrenalina bitartrato 4 mg/8 mL (0.5 mg/mL) — ampolla 8 mL (según país)',
      'Equivalencia: 1 mg noradrenalina base = 2 mg noradrenalina bitartrato',
    ],
  },

  /* ═══════════════════════════════════════════
     NIVEL 3 — INFORMACIÓN AVANZADA
  ═══════════════════════════════════════════ */
  nivel3: {

    dosis: [
      { indicacion: 'Shock séptico (inicio)',         dosis: '0.01–0.1 mcg/kg/min', via: 'IV central' },
      { indicacion: 'Shock séptico (mantenimiento)',  dosis: '0.1–0.5 mcg/kg/min',  via: 'IV central' },
      { indicacion: 'Shock refractario',              dosis: '0.5–2 mcg/kg/min',    via: 'IV central' },
      { indicacion: 'Shock cardiogénico',             dosis: '0.05–0.4 mcg/kg/min', via: 'IV central' },
      { indicacion: 'PCR / paro cardíaco',            dosis: '0.1–0.5 mcg/kg/min',  via: 'IV central' },
      { indicacion: 'Dosis máxima habitual',          dosis: '1–2 mcg/kg/min',      via: 'IV central' },
    ],

    embarazo: 'Categoría C (FDA). Puede causar vasoconstricción uterina y reducción del flujo placentario. Usar solo si el beneficio materno supera claramente el riesgo fetal. En shock séptico obstétrico puede ser necesaria para mantener perfusión materna. Monitorizar bienestar fetal. Pasa a leche materna en cantidades mínimas — evaluar riesgo/beneficio.',

    pediatria: 'Dosis pediátrica: 0.01–2 mcg/kg/min IV. Titular según respuesta. En neonatos iniciar con 0.01–0.05 mcg/kg/min. Requiere monitorización intensiva. Calcular cuidadosamente según peso. Concentraciones menores para reducir errores de dosificación en neonatos y lactantes.',

    adultoMayor: 'Mayor sensibilidad a efectos vasoconstrictores. Riesgo aumentado de isquemia periférica, coronaria y renal. Iniciar con dosis bajas (0.01–0.05 mcg/kg/min) y titular lentamente. Mayor incidencia de arritmias. Monitorización estrecha de función renal y signos de isquemia.',

    insufRenal: 'No requiere ajuste de dosis específico en insuficiencia renal. Sin embargo, la vasoconstricción renal puede empeorar la función renal preexistente. Monitorizar creatinina, BUN y diuresis horaria. Ajustar dosis para mantener flujo renal adecuado.',

    insufHepatica: 'El metabolismo hepático es una vía menor de eliminación. No se requiere ajuste de dosis específico. En cirrosis avanzada con hipertensión portal, usar con precaución por riesgo de isquemia hepática.',
  },

  /* ═══════════════════════════════════════════
     NIVEL 4 — EVIDENCIA CIENTÍFICA
  ═══════════════════════════════════════════ */
  nivel4: {
    referencias: [
      'Evans L, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Intensive Care Med. 2021;47(11):1181-1247.',
      'DailyMed. Norepinephrine Bitartrate Injection. U.S. National Library of Medicine. Consultado 2024. https://dailymed.nlm.nih.gov',
      'Hollenberg SM. Vasoactive Drugs in Circulatory Shock. Am J Respir Crit Care Med. 2011;183(7):847-855.',
      'De Backer D, et al. Comparison of Dopamine and Norepinephrine in the Treatment of Shock. N Engl J Med. 2010;362(9):779-789.',
      'Avni T, et al. Vasopressors for the Treatment of Septic Shock: Systematic Review and Meta-Analysis. PLOS ONE. 2015;10(8):e0129305.',
      'Ministerio de Salud. Guía de Práctica Clínica: Shock Séptico en el Adulto. OPS/OMS. 2022.',
      'SEMICYUC. Recomendaciones para el soporte vasopresor e inotrópico en el shock circulatorio. Med Intensiva. 2020.',
    ],
  },

});
