/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/labetalol.js
   Fuentes: CIMA AEMPS (Trandate, Labetalol SALF),
   FDA DailyMed, ACOG Guidelines Preeclampsia,
   AHA/ASA Guidelines HTA Emergencia
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'labetalol',
  nombre:         'Labetalol',
  nombreGenerico: 'Labetalol Hydrochloride',
  categoria:      'antiarritmicos',
  tags:           ['HTA emergencia', 'preeclampsia', 'eclampsia', 'disección aórtica', 'beta-bloqueante', 'alfa-bloqueante', 'ACV'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Bloqueante alfa/beta adrenérgico. Riesgo de bradicardia severa, bloqueo AV, broncoespasmo en asmáticos, hipotensión severa. CONTRAINDICADO en asma severo, bloqueo AV 2º-3º grado, shock cardiogénico, ICC descompensada.',

  nivel1: {

    puntosClave: [
      'Bloqueante ADRENÉRGICO COMBINADO — antagoniza receptores <b>alfa-1 y beta-1/beta-2</b> (relación beta:alfa aproximada 7:1 IV) — reduce PA sin taquicardia refleja significativa.',
      '<b>FÁRMACO DE ELECCIÓN en HTA del EMBARAZO</b> (preeclampsia/eclampsia) — seguro, ampliamente estudiado, no reduce flujo placentario.',
      'Uso en: <b>HTA emergencia general, disección aórtica, ACV con HTA severa, feocromocitoma (tras alfa-bloqueo), HTA post-IAM</b>.',
      '<b>INCOMPATIBLE con BICARBONATO SÓDICO</b> — no administrar por la misma línea.',
      'Administración en BOLOS REPETIDOS o PERFUSIÓN CONTINUA — bolo inicial 50 mg en 1 min, puede repetirse c/5 min hasta respuesta o dosis máxima.',
    ],

    resumenRapido: 'Antagonista adrenérgico combinado alfa-1 y beta no selectivo (beta-1 y beta-2). El bloqueo beta reduce la frecuencia cardíaca y el gasto cardíaco; el bloqueo alfa-1 produce vasodilatación periférica. La combinación reduce la PA de forma efectiva SIN la taquicardia refleja típica de los alfa-bloqueantes puros, ni la vasoconstricción periférica de los beta-bloqueantes puros. Inicio IV: 2-5 min · Pico: 5-15 min · Duración: 2-4h (bolo) o continua en perfusión. Indicado en: HTA severa/emergencia hipertensiva, hipertensión del embarazo (preeclampsia, eclampsia), disección aórtica (adyuvante), HTA post-IAM, ACV con HTA severa, hipotensión controlada durante anestesia, feocromocitoma (tras alfa-bloqueo previo con fenoxibenzamina).',

    objetivoTerapeutico: 'Reducir PA de forma controlada y gradual · Control de HTA en preeclampsia/eclampsia sin comprometer flujo placentario · Reducir estrés de pared aórtica en disección · Evitar picos hipertensivos peligrosos',

    preparacion: {
      'Presentación':             '<b>Labetalol 5 mg/mL solución inyectable - ampolla 20 mL (100 mg)</b>',
      'Diluyente':                '<b>SF 0.9% · SG 5%</b> (compatibles) - Ringer Lactato también compatible',
      'Dilución perfusión estándar':'<b>200 mg (40 mL) en 200 mL SF/SG5% → 1 mg/mL</b>',
      'Vía':                      'IV exclusiva (bolo o perfusión) - uso hospitalario',
      '⏱️ BOLO INICIAL':          '<b>50 mg (10 mL) IV en 1 minuto</b>',
      '⏱️ Repetir bolo':           '<b>Repetir 50 mg c/5 min si necesario</b> (máximo 200-300 mg total según protocolo)',
      '⏱️ Bolo alternativo (más lento)':'20 mg IV en 2 min, luego 40-80 mg c/10 min hasta respuesta',
      '⏱️ PERFUSIÓN CONTINUA':    '<b>Iniciar a 2 mg/min IV, ajustar según respuesta</b> (rango 0.5-8 mg/min)',
      '⏱️ HTA en EMBARAZO (perfusión)':'<b>Iniciar 20 mg/h, duplicar c/30 min hasta respuesta (máx 160 mg/h)</b>',
      '⏱️ HTA post-IAM':           'Iniciar 15 mg/h, aumentar gradualmente (máx 120 mg/h)',
      '⏱️ DOSIS MÁXIMA total (bolos)':'200-300 mg (según protocolo institucional)',
      'Bomba':                    'OBLIGATORIA para perfusión continua',
      '🧊 ESTABILIDAD':           '<b>24 horas a 25°C, 30°C y 40°C</b> (CIMA AEMPS) - amplio rango de estabilidad térmica',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'PA basal en ambos brazos, FC, ECG.',
        'Revisar contraindicaciones: asma/EPOC severo, bloqueo AV, ICC descompensada, bradicardia severa, shock cardiogénico.',
        'En sospecha de feocromocitoma: NUNCA usar labetalol solo - requiere alfa-bloqueo previo con fenoxibenzamina.',
        'En preeclampsia: evaluar severidad, proteinuria, signos de HELLP.',
        'Considerar interacciones: verapamilo/diltiazem (bradicardia severa), antidepresivos tricíclicos (↑ temblor).',
        'Acceso IV permeable de buen calibre.',
        'Doble verificación: dosis, dilución, velocidad.',
      ],
      durante: [
        'Monitor continuo: PA, FC, ECG durante bolo y perfusión.',
        '<b>Medir PA en decúbito Y en bipedestación</b> - hipotensión ortostática es frecuente.',
        'Vigilar bradicardia - si FC < 50, reducir velocidad o pausar.',
        'Vigilar broncoespasmo en pacientes con antecedente respiratorio.',
        'Objetivo de reducción: <b>NO más del 25% de la PAM en la primera hora</b> (evitar hipoperfusión de órganos).',
        'En preeclampsia: vigilar bienestar fetal (monitorización si disponible).',
        'Si hipotensión severa: posición Trendelenburg, fluidos IV, suspender infusión.',
      ],
      despues: [
        'Continuar monitor PA/FC/ECG.',
        'Transición a labetalol VO cuando estabilizado (100-200 mg c/12h, titulando).',
        'Vigilar bradicardia tardía, especialmente en ancianos o con otros bradicardizantes.',
        'En preeclampsia: continuar vigilancia materno-fetal según protocolo obstétrico.',
        'Vigilar signos de insuficiencia cardíaca en pacientes con reserva cardíaca limitada.',
        'Documentar: dosis total, hora, PA pre/post, respuesta, efectos adversos.',
      ],
      suspender: [
        'Bradicardia severa (FC < 45-50) sintomática.',
        'Bloqueo AV de nuevo inicio.',
        'Hipotensión severa (PAS < 90) sintomática.',
        'Broncoespasmo agudo.',
        'Insuficiencia cardíaca aguda/edema pulmonar.',
        'Shock de cualquier etiología.',
        'PA en objetivo terapéutico (transición a VO).',
      ],
    },

    incompatibilidades: [
      '<b>BICARBONATO SÓDICO 4.2%</b> - INCOMPATIBLE (documentado CIMA AEMPS).',
      'Furosemida - verificar antes de mezclar (precipitación posible en altas concentraciones).',
      'Warfarina - verificar compatibilidad en Y-site.',
      'Generalmente compatible con SF, SG5%, Ringer Lactato.',
      'Lavar línea con SF antes y después de bicarbonato u otros fármacos incompatibles.',
    ],

    alertasSeguridad: [
      '🔴 <b>CONTRAINDICADO en ASMA/EPOC SEVERO</b> - riesgo de broncoespasmo grave (bloqueo beta-2).',
      '🔴 <b>CONTRAINDICADO en BLOQUEO AV 2º-3º grado</b> sin marcapasos.',
      '🔴 <b>CONTRAINDICADO en SHOCK CARDIOGÉNICO / ICC DESCOMPENSADA SEVERA</b>.',
      '🔴 En FEOCROMOCITOMA sin alfa-bloqueo previo: puede causar CRISIS HIPERTENSIVA PARADÓJICA.',
      '🟠 Bradicardia sintomática con dosis altas o combinación con otros bradicardizantes.',
      '🟠 Hipotensión ortostática - medir PA en diferentes posiciones.',
      '🟠 Interfiere con determinación de catecolaminas urinarias (falsos positivos) - usar métodos específicos si se sospecha feocromocitoma.',
      '🟡 Atraviesa placenta - vigilar bradicardia/hipoglucemia neonatal si uso periparto prolongado.',
      '🟡 Cimetidina aumenta biodisponibilidad de labetalol.',
      '🟡 Reducción de PA NO debe superar 25% de la PAM en primera hora (evitar hipoperfusión).',
    ],
  },

  modulos: {

    preeclampsia: `
      <b>Labetalol en Preeclampsia / Eclampsia:</b><br/>
      <b>POR QUÉ ES DE ELECCIÓN:</b><br/>
      • Ampliamente estudiado en embarazo - perfil de seguridad establecido.<br/>
      • NO reduce significativamente el flujo sanguíneo uteroplacentario (a diferencia de otros antihipertensivos).<br/>
      • Control efectivo sin taquicardia materna excesiva.<br/>
      • Recomendado por ACOG, SEGO, ISSHP como primera línea IV.<br/><br/>
      <b>INDICACIÓN:</b><br/>
      • PA ≥ 160/110 mmHg en preeclampsia severa (requiere tratamiento URGENTE, dentro de 30-60 min).<br/>
      • Crisis hipertensiva en eclampsia.<br/>
      • HTA severa gestacional de cualquier causa.<br/><br/>
      <b>PROTOCOLO (ACOG/SEGO):</b><br/>
      1. <b>Bolo inicial: 20 mg IV en 2 minutos</b>.<br/>
      2. Si PA persiste ≥ 160/110 a los 10 min: <b>40 mg IV</b>.<br/>
      3. Si persiste a los 10 min: <b>80 mg IV</b>.<br/>
      4. Si persiste: cambiar a otro fármaco (hidralazina, nifedipino) o continuar con dosis máxima.<br/>
      5. <b>Dosis máxima acumulada: 300 mg</b>.<br/>
      6. Alternativa en perfusión: <b>iniciar 20 mg/h, duplicar cada 30 min hasta respuesta (máximo 160 mg/h)</b>.<br/><br/>
      <b>OBJETIVO:</b> PA 140-150/90-100 mmHg (NO normalizar completamente - riesgo de hipoperfusión placentaria).<br/><br/>
      <b>COMBINAR CON (en eclampsia):</b><br/>
      • Sulfato de magnesio (prevención/tratamiento de convulsiones - NO para HTA).<br/>
      • Monitorización fetal continua si feto viable.<br/><br/>
      <b>VIGILANCIA NEONATAL</b> (si parto inminente):<br/>
      • Bradicardia, hipotensión, hipoglucemia neonatal (uso IV prolongado periparto).
    `,

    disecccionAortica: `
      <b>Labetalol en Disección Aórtica:</b><br/>
      <b>POR QUÉ ES ÚTIL:</b><br/>
      • Reduce PA Y frecuencia cardíaca simultáneamente (doble beneficio).<br/>
      • Reduce el "dP/dt" (fuerza de eyección ventricular) que estresa la pared aórtica.<br/>
      • Alternativa a esmolol cuando se prefiere una vida media más larga.<br/><br/>
      <b>OBJETIVOS HEMODINÁMICOS (guías ACC/AHA):</b><br/>
      • <b>FC objetivo: 60-80 lpm</b>.<br/>
      • <b>PAS objetivo: 100-120 mmHg</b> (o la mínima que mantenga perfusión orgánica adecuada).<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. <b>Bolo: 20 mg IV en 2 min</b>.<br/>
      2. Repetir 40-80 mg c/10-15 min según respuesta (control FC primero, luego PA).<br/>
      3. <b>Perfusión continua: 2 mg/min</b>, ajustar según respuesta.<br/>
      4. Control estricto y RÁPIDO - objetivo alcanzado en minutos, no horas.<br/><br/>
      <b>IMPORTANTE:</b><br/>
      • El CONTROL DE FRECUENCIA CARDÍACA es prioritario ANTES que reducir la PA aisladamente.<br/>
      • Si se necesita vasodilatador adicional (nitroprusiato) para PA, SIEMPRE asociar beta-bloqueante PRIMERO (evita taquicardia refleja que empeora el estrés de pared aórtica).<br/>
      • Consulta quirúrgica/cirugía cardiovascular urgente en paralelo.
    `,

    hipertensionGeneral: `
      <b>Labetalol en HTA Emergencia General:</b><br/>
      <b>INDICACIONES:</b><br/>
      • Emergencia hipertensiva (PA > 180/120 con daño de órgano diana).<br/>
      • ACV isquémico con HTA severa (previo a trombolisis, umbral > 185/110).<br/>
      • ACV hemorrágico con HTA severa.<br/>
      • HTA perioperatoria severa.<br/><br/>
      <b>PROTOCOLO ESTÁNDAR:</b><br/>
      1. <b>Bolo: 50 mg IV en 1 minuto</b>.<br/>
      2. Repetir 50 mg c/5 min si no hay respuesta adecuada.<br/>
      3. Alternativa: perfusión continua iniciando a <b>2 mg/min</b>, titulando según respuesta.<br/>
      4. <b>Dosis máxima acumulada: 200-300 mg</b> según protocolo.<br/><br/>
      <b>EN ACV ISQUÉMICO (pre-trombolisis):</b><br/>
      • Objetivo: PA < 185/110 antes de administrar rtPA.<br/>
      • Labetalol 10-20 mg IV en 1-2 min, puede repetirse una vez.<br/>
      • Si no se controla: NO administrar trombolisis.<br/><br/>
      <b>PRECAUCIÓN GENERAL:</b><br/>
      • Reducción de PA NO debe exceder 25% de la PAM en la primera hora (excepto disección aórtica o edema agudo de pulmón, donde se requiere control más agresivo e inmediato).<br/>
      • Descenso demasiado rápido puede causar hipoperfusión cerebral, coronaria o renal.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar contraindicaciones: asma severo, bloqueo AV, ICC descompensada.',
      'Etiquetar jeringa/bolsa: Labetalol [mg], dilución, velocidad, hora.',
      'Bolo IV en 1-2 minutos - NO administrar más rápido.',
      'Bomba de infusión OBLIGATORIA para perfusión continua.',
      '<b>NUNCA mezclar con bicarbonato sódico</b>.',
      'Monitor continuo: PA (ambos brazos si es posible), FC, ECG.',
      'Medir PA en decúbito y bipedestación (hipotensión ortostática frecuente).',
      'Vigilar bradicardia - pausar si FC < 50.',
      'Objetivo: reducción PA gradual, NO > 25% de PAM en primera hora (salvo excepciones).',
      'En preeclampsia: monitorización fetal si disponible, coordinar con obstetricia.',
      'En disección aórtica: priorizar control de FC (60-80 lpm) antes que PA aislada.',
      'Transición a VO cuando estabilizado (típicamente 100-200 mg c/12h).',
      'Vigilar signos de insuficiencia cardíaca en pacientes con reserva limitada.',
      'Documentar: dosis total, hora, PA pre/post cada dosis, respuesta, eventos.',
    ],

    efectosAdversos: [
      '🔴 Bradicardia severa / bloqueo AV',
      '🔴 Broncoespasmo severo (asmáticos)',
      '🔴 Hipotensión severa',
      '🔴 Insuficiencia cardíaca aguda (en reserva cardíaca limitada)',
      '🔴 Crisis hipertensiva paradójica (feocromocitoma sin alfa-bloqueo previo)',
      '🟠 Hipotensión ortostática',
      '🟠 Fatiga, mareos',
      '🟡 Náuseas, vómitos',
      '🟡 Parestesias en cuero cabelludo (transitorias, típicas de labetalol)',
      '🟡 Congestión nasal',
      '🟡 Temblor',
      '🟡 Prurito, rash cutáneo',
      '🟡 Retención urinaria (raro)',
      '🟡 Elevación transitoria de transaminasas',
    ],

    contraindicaciones: [
      'Asma bronquial o EPOC severo (broncoespasmo).',
      'Bloqueo AV de 2º-3º grado sin marcapasos.',
      'Shock cardiogénico.',
      'Insuficiencia cardíaca descompensada severa.',
      'Bradicardia severa (FC < 50 previa al tratamiento).',
      'Hipotensión severa preexistente.',
      'Feocromocitoma SIN alfa-bloqueo previo establecido.',
      'HTA post-IAM con vasoconstricción periférica severa/shock.',
      'Hipersensibilidad a labetalol.',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente sin requerimientos especiales de fotoprotección.',

    estabilidad: {
      'Ampolla sin abrir':          'Temperatura ambiente (no requiere condiciones especiales) hasta vencimiento',
      'Diluida en SF/SG5%/RL':      '<b>24 horas a 25°C, 30°C y 40°C</b> (amplio rango térmico según CIMA)',
      'Post-apertura':               'Usar en 24h si almacenado 2-8°C, o inmediatamente si no refrigerado',
      'Aspecto':                     'Transparente, incolora — desechar si turbidez',
      'Temperatura':                 'NO congelar',
    },

    presentaciones: [
      'Trandate® 5 mg/mL - ampolla 20 mL (100 mg) - marca histórica',
      'Labetalol S.A.L.F. 5 mg/mL solución inyectable',
      'Labetalol genéricos varios 5 mg/mL',
      'Trandate® comprimidos 100 mg, 200 mg (VO)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'HTA emergencia (bolo inicial)',         dosis: '<b>50 mg IV en 1 min</b>',                  via: 'IV' },
      { indicacion: 'Repetir si necesario',                   dosis: '50 mg IV c/5 min (máx 200-300 mg)',        via: 'IV' },
      { indicacion: 'Preeclampsia/eclampsia (bolo)',         dosis: '<b>20-40-80 mg IV escalando c/10 min</b>', via: 'IV' },
      { indicacion: 'Perfusión HTA embarazo',                 dosis: '20 mg/h, duplicar c/30 min (máx 160 mg/h)',via: 'IV' },
      { indicacion: 'Disección aórtica',                       dosis: '20 mg IV + perfusión 2 mg/min',            via: 'IV' },
      { indicacion: 'HTA post-IAM',                            dosis: '15 mg/h, aumentar (máx 120 mg/h)',         via: 'IV' },
      { indicacion: 'ACV pre-trombolisis',                    dosis: '10-20 mg IV en 1-2 min',                    via: 'IV' },
      { indicacion: 'Perfusión estándar',                      dosis: '2 mg/min (rango 0.5-8 mg/min)',            via: 'IV' },
      { indicacion: 'Transición a VO',                         dosis: '100-200 mg c/12h VO, titular',              via: 'VO' },
    ],

    embarazo: 'Fármaco de elección en HTA del embarazo (preeclampsia/eclampsia) - ampliamente estudiado y seguro. Atraviesa placenta - puede bloquear receptores alfa/beta fetales. Muy raramente: bradicardia, hipotensión, depresión respiratoria, hipoglucemia, hipotermia neonatal (más con uso IV prolongado periparto). Compatible con lactancia (cantidades mínimas en leche).',

    pediatria: 'Seguridad y eficacia NO establecidas formalmente en 0-18 años según ficha técnica CIMA, aunque se usa clínicamente con precaución en HTA severa pediátrica (Pediamécum). Dosis pediátrica (uso off-label): 0.2-1 mg/kg IV bolo (máx 40 mg), perfusión 0.4-3 mg/kg/h.',

    adultoMayor: 'Mayor sensibilidad a efectos hipotensores y bradicardizantes. Iniciar con dosis menores. Vigilancia hemodinámica intensiva.',

    insufRenal: 'Sin ajuste específico de dosis - eliminación principalmente hepática. Vigilancia clínica estándar.',

    insufHepatica: 'En cirrosis severa: REDUCIR DOSIS - metabolismo hepático extenso (primer paso). Vida media puede prolongarse. Vigilancia clínica intensiva.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Trandate® / Labetalol S.A.L.F. 5 mg/mL. Agencia Española de Medicamentos.',
      'FDA DailyMed. Labetalol Hydrochloride Injection. U.S. National Library of Medicine.',
      'ACOG Practice Bulletin. Gestational Hypertension and Preeclampsia. Obstet Gynecol. 2020.',
      'ISSHP Guidelines. Hypertensive Disorders of Pregnancy. Hypertension. 2018.',
      'ACC/AHA Guidelines. Thoracic Aortic Disease. Circulation. 2022.',
      'AHA/ASA Guidelines. Early Management of Acute Ischemic Stroke. Stroke. 2019.',
      'Pediamécum AEP. Labetalol. Asociación Española de Pediatría.',
      'SEGO. Protocolo de Preeclampsia-Eclampsia. Sociedad Española de Ginecología y Obstetricia.',
    ],
  },

});
