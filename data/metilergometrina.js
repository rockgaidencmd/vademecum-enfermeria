/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/metilergometrina.js
   Fuentes: CIMA AEMPS (Methergin), FDA DailyMed,
   OMS Guías Hemorragia Posparto, FIGO/ACOG PPH Guidelines,
   Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'metilergometrina',
  nombre:         'Metilergometrina',
  nombreComercial: 'Methergin®',
  nombreGenerico: 'Methylergometrine Maleate (Methylergonovine)',
  categoria:      'otros',
  tags:           ['uterotónico', 'hemorragia posparto', 'atonía uterina', 'obstetricia', 'ergotamínico', 'cuadro básico', 'urgencia obstétrica'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Uterotónico ergotamínico potente. CONTRAINDICADO en hipertensión arterial y preeclampsia/eclampsia — puede desencadenar crisis hipertensiva grave, ACV o convulsiones. Contraindicado antes del alumbramiento (expulsión de la placenta). La vía IV directa sin diluir puede causar hipertensión súbita grave — preferir IM o IV muy lenta y diluida.',

  nivel1: {

    puntosClave: [
      '<b>Uterotónico de 2ª línea en hemorragia posparto</b> por atonía uterina, tras oxitocina — contracción uterina potente y sostenida.',
      'Dosis: <b>0.2 mg IM</b> (de elección) — puede repetirse cada 2-4 h (máx 5 dosis/24 h). <b>IV solo si es imprescindible, muy diluida y lenta</b>.',
      '<b>CONTRAINDICADO en hipertensión, preeclampsia/eclampsia y cardiopatía</b> — riesgo de crisis hipertensiva grave, ACV hemorrágico.',
      '<b>Solo después del alumbramiento</b> (expulsión completa de la placenta) — nunca antes, ni durante el trabajo de parto.',
      'Vasoconstrictor potente — contraindicado también en <b>enfermedad vascular periférica</b> y con inhibidores potentes del CYP3A4 (algunos antirretrovirales, azoles).',
    ],

    resumenRapido: 'Alcaloide semisintético del cornezuelo de centeno (ergot) con potente acción oxitócica sobre el músculo liso uterino, produciendo contracciones tetánicas sostenidas (a diferencia de la oxitocina, que produce contracciones rítmicas). Es el uterotónico de segunda línea en el manejo de la hemorragia posparto por atonía uterina cuando la oxitocina es insuficiente. Su acción vasoconstrictora generalizada explica su principal limitación: está absolutamente contraindicado en pacientes con hipertensión arterial, preeclampsia/eclampsia o cardiopatía, por el riesgo de crisis hipertensiva grave, edema pulmonar o accidente cerebrovascular.',

    objetivoTerapeutico: 'Tratamiento de la hemorragia posparto por atonía uterina (tras oxitocina) · Prevención de la hemorragia posparto en pacientes de alto riesgo sin contraindicación · Facilitar la involución uterina posparto',

    preparacion: {
      'Presentación':          '<b>Methergin® 0.2 mg/mL — ampolla 1 mL</b>',
      'Vía de elección':       '<b>IM — de elección por su perfil de seguridad hemodinámico</b>',
      'Dosis IM':              '<b>0.2 mg IM</b>, repetible cada 2-4 h si es necesario (máx 5 dosis/24 h = 1 mg)',
      'Vía IV (excepcional)':  'SOLO si es imprescindible: diluir en 10-20 mL SF e infundir MUY lento (>60 seg), con monitorización continua de TA',
      'Nunca antes del alumbramiento': '<b>Administrar SOLO tras la expulsión completa de la placenta</b>',
      '⏱️ Inicio efecto (IM)':  '2-5 min · Duración: 3 h',
      '⏱️ Inicio efecto (IV)':  'Inmediato — mayor riesgo de crisis hipertensiva por esta vía',
      '🧊 Estabilidad':         'Conservar en nevera (2-8°C), proteger de la luz — el fármaco es fotosensible y termolábil',
    },

    vigilancia: {
      antes: [
        '<b>TA obligatoria antes de cada dosis</b> — contraindicado si hipertensión (TAS ≥140 o TAD ≥90 mmHg).',
        'Descartar preeclampsia/eclampsia — revisar antecedentes del embarazo actual.',
        'Confirmar que la placenta ya se ha expulsado completamente.',
        'Antecedente de cardiopatía, enfermedad vascular periférica o migraña con aura (relativa).',
        'Revisar medicación concomitante: inhibidores potentes del CYP3A4 (algunos antirretrovirales, azoles, macrólidos) — riesgo de vasoconstricción exagerada.',
      ],
      durante: [
        '<b>TA cada 5-15 min tras la administración</b> — vigilar hipertensión súbita.',
        'Si vía IV: infundir muy lento, con monitorización continua.',
        'Vigilar cefalea intensa, visión borrosa o dolor torácico — signos de alarma de crisis hipertensiva.',
        'Evaluar el tono uterino y el sangrado tras la administración.',
      ],
      despues: [
        'TA cada 15-30 min durante al menos 1-2 h tras la dosis.',
        'Vigilar el sangrado vaginal y el tono uterino (involución).',
        'Documentar TA pre y post-dosis, hora de administración y respuesta al sangrado.',
        'Si persiste el sangrado pese a oxitocina + metilergometrina: escalar a ácido tranexámico, misoprostol o medidas quirúrgicas según protocolo de hemorragia posparto.',
      ],
      suspender: [
        '🚨 Hipertensión súbita, cefalea intensa, visión borrosa o dolor torácico — suspender y tratar como crisis hipertensiva.',
        'Signos de vasoconstricción periférica grave (frialdad, cianosis distal).',
        'Al controlar el sangrado y estabilizar el tono uterino.',
        'Reacción alérgica.',
      ],
    },

    incompatibilidades: [
      'No mezclar en la misma jeringa con otros fármacos.',
      'Precaución con inhibidores potentes del CYP3A4 (ritonavir, azoles, macrólidos) — riesgo de vasoconstricción exagerada.',
      'No administrar junto con otros vasoconstrictores sin valorar riesgo/beneficio.',
      'Compatible con SF 0.9% si se diluye para la vía IV excepcional.',
    ],

    alertasSeguridad: [
      '🔴 CONTRAINDICADO en hipertensión, preeclampsia/eclampsia — riesgo de crisis hipertensiva grave, ACV o convulsiones.',
      '🔴 SOLO tras el alumbramiento (expulsión de la placenta) — nunca antes ni durante el parto.',
      '🔴 La vía IV directa sin diluir puede causar hipertensión súbita grave — preferir IM.',
      '🟠 Contraindicado en cardiopatía y enfermedad vascular periférica.',
      '🟠 Interacción con inhibidores del CYP3A4 — riesgo de vasoconstricción exagerada e isquemia.',
      '🟡 TA obligatoria antes de cada dosis — no administrar si hipertensa.',
    ],
  },

  modulos: {
    obstetricia: `
      <b>Protocolo Hemorragia Posparto — Escalada de Uterotónicos:</b><br/>
      <b>1ª línea:</b> Oxitocina 10 UI IM o 20-40 UI en 500-1000 mL SF en perfusión.<br/><br/>
      <b>2ª línea (si persiste atonía, SIN contraindicación):</b><br/>
      • <b>Metilergometrina 0.2 mg IM</b> — repetible cada 2-4 h (máx 5 dosis/24h).<br/>
      • <b>Verificar SIEMPRE la TA antes</b> — contraindicada si hipertensión o preeclampsia.<br/><br/>
      <b>Si hay contraindicación a metilergometrina o persiste el sangrado:</b><br/>
      • Misoprostol 800-1000 mcg rectal/sublingual.<br/>
      • Ácido tranexámico 1 g IV (dentro de las 3 h del parto).<br/>
      • Carbetocina (si disponible) como alternativa a la oxitocina en profilaxis.<br/><br/>
      <b>Sangrado persistente:</b> masaje uterino bimanual, taponamiento con balón, revisión quirúrgica según protocolo institucional.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar la TA ANTES de cada dosis — no administrar si hay hipertensión o sospecha de preeclampsia.',
      'Confirmar que la placenta ya se ha expulsado antes de administrar.',
      'Preferir la vía IM; reservar la IV solo para casos excepcionales, diluida y muy lenta.',
      'TA cada 5-15 min en la primera hora tras la administración.',
      'Vigilar signos de alarma: cefalea intensa, visión borrosa, dolor torácico.',
      'Evaluar el tono uterino y el sangrado vaginal tras cada dosis.',
      'Conservar el fármaco en nevera, protegido de la luz — es termolábil y fotosensible.',
      'Documentar TA pre/post, dosis, hora y respuesta al sangrado en cada administración.',
    ],

    efectosAdversos: [
      '🔴 Crisis hipertensiva (especialmente en preeclampsia o vía IV rápida)',
      '🔴 ACV hemorrágico (en contexto de hipertensión no controlada)',
      '🟠 Convulsiones (en el contexto de crisis hipertensiva/eclampsia)',
      '🟠 Vasoconstricción coronaria/periférica (isquemia)',
      '🟡 Náuseas, vómitos',
      '🟡 Cefalea',
      '🟡 Dolor abdominal (contracción uterina intensa)',
    ],

    contraindicaciones: [
      'Hipertensión arterial (cualquier grado) y preeclampsia/eclampsia.',
      'Cardiopatía, especialmente enfermedad coronaria.',
      'Enfermedad vascular periférica.',
      'Sepsis grave.',
      'Antes del alumbramiento (expulsión de la placenta).',
      'Hipersensibilidad a alcaloides del ergot.',
      'Uso concomitante con inhibidores potentes del CYP3A4.',
    ],

    fotosensibilidad: 'Sí — fármaco fotosensible. Conservar en nevera (2-8°C) protegido de la luz en su envase original.',

    estabilidad: {
      'Ampolla sin abrir':     '<b>Refrigerada 2-8°C, protegida de la luz. Verificar caducidad — se degrada con el tiempo incluso refrigerada.</b>',
      'Diluida (uso IV excepcional)': 'Usar de inmediato tras diluir',
      'Aspecto':                'Solución incolora a ligeramente amarillenta — desechar si oscurecida (signo de degradación)',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras abrir — desechar sobrante.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: 'Si se diluye para uso IV excepcional, administrar de inmediato.',
      notas:             'Fármaco termolábil y fotosensible — conservar siempre en nevera protegido de la luz. Revisar el color antes de usar: el oscurecimiento indica degradación y pérdida de potencia.',
    },

    presentaciones: [
      'Methergin® 0.2 mg/mL — ampolla 1 mL (IM/IV)',
      'Metilergometrina genérica — ampolla 0.2 mg/mL',
      'Methergin® 0.125 mg — comprimidos (oral, uso puerperal posterior)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hemorragia posparto por atonía (2ª línea)', dosis: '<b>0.2 mg IM</b>, repetible c/2-4 h (máx 5 dosis/24h)', via: 'IM' },
      { indicacion: 'Vía IV (excepcional, solo si imprescindible)', dosis: '0.2 mg diluida en 10-20 mL SF, IV muy lenta',        via: 'IV' },
      { indicacion: 'Mantenimiento oral posparto (tras control)',  dosis: '0.125-0.2 mg VO c/6-8 h × 2-7 días según protocolo', via: 'VO' },
    ],

    embarazo: '<b>CONTRAINDICADO durante el embarazo y el trabajo de parto</b> — solo se administra DESPUÉS del alumbramiento (expulsión completa de la placenta), nunca antes. Uso exclusivamente puerperal.',

    pediatria: 'No aplica — fármaco de uso exclusivamente obstétrico en la mujer tras el parto.',

    adultoMayor: 'No aplica en el contexto habitual de uso (población obstétrica en edad reproductiva).',

    insufRenal: 'Sin ajuste de dosis formal establecido. Usar con la misma precaución hemodinámica (TA) que en cualquier paciente.',

    insufHepatica: 'Precaución en insuficiencia hepática grave — el metabolismo es hepático; considerar dosis reducida o mayor intervalo si hay disfunción hepática significativa.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Methergin® (metilergometrina).',
      'OMS. Recomendaciones de la OMS para la prevención y el tratamiento de la hemorragia posparto. 2012 (vigente con actualizaciones).',
      'ACOG Practice Bulletin. Postpartum Hemorrhage. Obstet Gynecol. 2017.',
      'FIGO. Prevention and treatment of postpartum haemorrhage. Int J Gynaecol Obstet. 2012.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
