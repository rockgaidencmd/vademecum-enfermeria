/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/nitroprusiato.js
   Fuentes: CIMA AEMPS (Nitroprussiat Fides),
   FDA DailyMed, Red Antídotos AEMPS (cianuro)
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'nitroprusiato',
  nombre:         'Nitroprusiato de Sodio',
  nombreGenerico: 'Sodium Nitroprusside',
  categoria:      'vasopresores',
  tags:           ['HTA emergencia extrema', 'disección aórtica', 'vasodilatador', 'fotosensible', 'toxicidad cianuro', 'alto riesgo ISMP'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Vasodilatador potente de acción inmediata. Medicamento de ALTO RIESGO (ISMP). TOXICIDAD POR CIANURO Y TIOCIANATO con uso prolongado/dosis altas. FOTOSENSIBLE - proteger solución Y línea de infusión de la luz. Suspender si no hay control de PA en 10 min con dosis máxima.',

  nivel1: {

    puntosClave: [
      'Vasodilatador ARTERIAL Y VENOSO potente y de <b>ACCIÓN INMEDIATA</b> (segundos) — libera óxido nítrico directamente en el músculo liso vascular.',
      '<b>MEDICAMENTO DE ALTO RIESGO (ISMP)</b> — reservado para <b>emergencias hipertensivas EXTREMAS</b> cuando se requiere control instantáneo y muy preciso.',
      '<b>FOTOSENSIBLE</b> — proteger de la luz TANTO la solución COMO la línea de infusión completa (usar bolsa y sistema opacos/foto-protegidos).',
      '<b>TOXICIDAD POR CIANURO Y TIOCIANATO</b> — se metaboliza rápidamente a cianuro, luego a tiocianato; riesgo con dosis > 2 mcg/kg/min, uso > 3 días, o insuficiencia renal/hepática.',
      '<b>SIEMPRE diluir en suero GLUCOSADO (SG5%)</b> — nunca administrar sin diluir; si PA no se controla en 10 min con 8 mcg/kg/min, SUSPENDER (riesgo de toxicidad sin beneficio).',
    ],

    resumenRapido: 'Vasodilatador arterial y venoso directo. El grupo nitroso se metaboliza liberando óxido nítrico, que activa la guanilato ciclasa en el músculo liso vascular, produciendo relajación tanto arterial como venosa (reduce precarga Y poscarga). Inicio: segundos · Duración: 1-10 minutos tras suspender (el más rápido de los antihipertensivos IV, lo que permite titulación exquisita pero también requiere vigilancia constante). Se metaboliza a cianuro (por reacción con grupos sulfhidrilo de hemoglobina) y posteriormente a tiocianato (vía hepática, requiere tiosulfato como cofactor) - ambos metabolitos tóxicos si se acumulan. Indicado en: emergencias hipertensivas graves cuando se requiere control inmediato y muy titulable, disección aórtica aguda (siempre tras beta-bloqueo), insuficiencia cardíaca aguda con poscarga elevada, hipotensión controlada durante cirugía.',

    objetivoTerapeutico: 'Control INMEDIATO de emergencias hipertensivas extremas · Reducción rápida de precarga y poscarga · Titulación exquisita minuto a minuto de la PA',

    preparacion: {
      'Presentación':             '<b>Nitroprusiato sódico 50 mg polvo para solución inyectable</b> (Nitroprussiat Fides®)',
      'Reconstitución':           'Reconstituir con 2-5 mL de SG 5% (NO usar SF para reconstituir según ficha)',
      '⚠️ DILUCIÓN OBLIGATORIA':  '<b>NUNCA administrar directamente - SIEMPRE diluir en SUERO GLUCOSADO 5%</b>',
      'Dilución estándar':        '<b>50 mg reconstituidos + 250-1000 mL SG5% → 50-200 mcg/mL</b> según concentración deseada',
      'Vía':                      'IV exclusiva en PERFUSIÓN CONTINUA - vena de buen calibre',
      '🌑 PROTECCIÓN LUZ OBLIGATORIA':'<b>Proteger la BOLSA y la LÍNEA DE INFUSIÓN completa</b> con material opaco (bolsa/manguito foto-protector)',
      '⏱️ DOSIS INICIAL':         '<b>0.3-0.5 mcg/kg/min IV</b>',
      '⏱️ Titulación':             'Ajustar cada pocos minutos en incrementos pequeños según respuesta de PA',
      '⏱️ DOSIS HABITUAL':        '<b>0.5-3 mcg/kg/min</b> (mayoría de pacientes)',
      '⏱️ DOSIS MÁXIMA':          '<b>8-10 mcg/kg/min</b> - si no control en 10 minutos a esta dosis, SUSPENDER',
      '⏱️ Duración máxima a dosis alta':'No mantener dosis > 2 mcg/kg/min por más de 3 días sin monitorizar tiocianato',
      'Bomba':                    'OBLIGATORIA - bomba de infusión de precisión',
      '🧊 ESTABILIDAD reconstituido':'<b>24 horas a temperatura ambiente, PROTEGIDO DE LA LUZ</b>',
      '🧊 ESTABILIDAD diluido':   '<b>24 horas a temperatura ambiente, PROTEGIDO DE LA LUZ</b>',
      'Aspecto':                  'Solución debe ser de color marrón muy pálido a ligeramente parduzco - <b>DESECHAR si azul intenso, verde oscuro, o muy oscura</b> (degradación)',
    },

    vigilancia: {
      antes: [
        'PA basal (línea arterial fuertemente recomendada para monitorización continua).',
        'Gasometría/equilibrio ácido-base basal.',
        'Función renal y hepática basales.',
        'Confirmar disponibilidad de tiosulfato de sodio (antídoto de toxicidad por cianuro) en el servicio.',
        'Preparar material de protección de luz para bolsa Y línea completa.',
        'Acceso IV de buen calibre.',
        'Doble verificación: dosis, dilución, protección lumínica confirmada.',
      ],
      durante: [
        '<b>Monitor de PA CONTINUO</b> (línea arterial ideal) - PA cada 5 min al inicio, luego cada 15 min.',
        'ECG y FC continuos.',
        'Vigilar signos PRECOCES de toxicidad por cianuro: taquicardia, sudoración excesiva, acidosis metabólica progresiva, hiperventilación, confusión.',
        'Vigilar signos de toxicidad por tiocianato (uso prolongado): tinnitus, miosis, hiporreflexia, náuseas, alteración mental, convulsiones.',
        'Gasometría/lactato seriados si dosis alta o uso prolongado.',
        'Si no control de PA en 10 min con 8 mcg/kg/min: <b>SUSPENDER la infusión</b>.',
        'Verificar que la protección de luz se mantiene intacta durante toda la infusión.',
        'En disección aórtica: SIEMPRE junto con beta-bloqueante (esmolol/labetalol) para evitar taquicardia refleja.',
      ],
      despues: [
        '<b>NUNCA suspender bruscamente</b> - riesgo de HTA de rebote. Reducir gradualmente en 15-30 minutos.',
        'Continuar monitor PA hasta estabilización con tratamiento de transición.',
        'Niveles de tiocianato si tratamiento > 3 días o dosis > 4 mcg/kg/min (indicación expresa CIMA).',
        'Vigilar función renal/hepática tras uso prolongado.',
        'Transición a antihipertensivo oral/otro IV de mantenimiento.',
        'Documentar: dosis, duración, PA seriada, niveles de tiocianato si aplica, eventos.',
      ],
      suspender: [
        'No control de PA en 10 min con dosis máxima (8 mcg/kg/min).',
        'Signos de toxicidad por cianuro: acidosis metabólica progresiva, confusión, convulsiones.',
        'Signos de toxicidad por tiocianato en uso prolongado.',
        'Hipotensión severa/excesiva.',
        'PA en objetivo con transición a tratamiento de mantenimiento.',
        '<b>Al suspender: SIEMPRE de forma gradual (15-30 min)</b>, nunca de golpe.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros medicamentos en la misma solución/línea salvo indicación expresa.',
      'NUNCA reconstituir/diluir con soluciones distintas a las indicadas (SG5% preferentemente).',
      'Preferir línea IV independiente y dedicada.',
    ],

    alertasSeguridad: [
      '🔴 <b>TOXICIDAD POR CIANURO</b> - riesgo con dosis > 2 mcg/kg/min, especialmente en tratamientos breves a tasas altas.',
      '🔴 <b>TOXICIDAD POR TIOCIANATO</b> - riesgo en tratamientos > 3 días, dosis > 4 mcg/kg/min, o insuficiencia renal/hepática.',
      '🔴 <b>MEDICAMENTO DE ALTO RIESGO (ISMP)</b> - requiere doble verificación y vigilancia extrema.',
      '🔴 <b>FOTOSENSIBLE</b> - proteger solución Y línea de infusión completa de la luz.',
      '🔴 <b>NUNCA suspender bruscamente</b> - riesgo de HTA de rebote severa.',
      '🟠 <b>SIEMPRE diluir en SG5%</b> - nunca administrar sin diluir.',
      '🟠 Si no hay control de PA en 10 minutos a 8 mcg/kg/min: SUSPENDER (indicación expresa CIMA).',
      '🟠 En disección aórtica: SIEMPRE combinar con beta-bloqueante PRIMERO (evita taquicardia refleja que empeora estrés de pared).',
      '🟡 Aumenta el aclaramiento renal de digoxina - puede reducir niveles plasmáticos de digoxina.',
      '🟡 Sildenafilo y otros hipotensores potencian su efecto - riesgo de hipotensión aditiva.',
      '🟡 Desechar si la solución cambia a color azul intenso, verde oscuro, o muy oscura (degradación del producto).',
    ],
  },

  modulos: {

    toxicidadCianuro: `
      <b>Toxicidad por Cianuro y Tiocianato - Nitroprusiato:</b><br/>
      <b>METABOLISMO:</b><br/>
      • Nitroprusiato → reacciona con grupos sulfhidrilo de la hemoglobina → libera <b>CIANURO</b>.<br/>
      • Cianuro → convertido en el hígado a <b>TIOCIANATO</b> (requiere tiosulfato endógeno como cofactor).<br/>
      • Tiocianato se elimina por vía RENAL (más lentamente que la conversión de cianuro).<br/><br/>
      <b>FACTORES DE RIESGO PARA TOXICIDAD POR CIANURO:</b><br/>
      • Dosis > 2 mcg/kg/min (excepto tratamientos muy breves).<br/>
      • Depleción de tiosulfato endógeno (desnutrición, ciertas condiciones).<br/>
      • Dosis muy altas de forma aguda.<br/><br/>
      <b>SIGNOS DE TOXICIDAD POR CIANURO (aparecen ANTES que tiocianato):</b><br/>
      • Taquicardia.<br/>
      • Sudoración excesiva.<br/>
      • <b>Acidosis metabólica progresiva</b> (signo clave - lactato elevado).<br/>
      • Hiperventilación.<br/>
      • Arritmias.<br/>
      • Metahemoglobinemia.<br/>
      • En casos severos: confusión, convulsiones, coma, colapso cardiovascular.<br/><br/>
      <b>FACTORES DE RIESGO PARA TOXICIDAD POR TIOCIANATO:</b><br/>
      • Tratamiento > 3 días.<br/>
      • Dosis > 4 mcg/kg/min mantenida.<br/>
      • Insuficiencia renal (elimina más lentamente).<br/><br/>
      <b>SIGNOS DE TOXICIDAD POR TIOCIANATO:</b><br/>
      • Tinnitus.<br/>
      • Miosis.<br/>
      • Hiporreflexia.<br/>
      • Náuseas, vómitos.<br/>
      • Alteración del estado mental.<br/>
      • Puede inhibir la captación de yodo tiroideo (hipotiroidismo con uso muy prolongado).<br/><br/>
      <b>MONITORIZACIÓN RECOMENDADA (indicación CIMA):</b><br/>
      • <b>Niveles de tiocianato en sangre</b> si: insuficiencia renal/hepática, tratamiento > 3 días, o dosis > 4 mcg/kg/min.<br/>
      • Gasometría y lactato seriados como marcador indirecto de acumulación de cianuro.<br/><br/>
      <b>MANEJO SI TOXICIDAD SOSPECHADA:</b><br/>
      1. SUSPENDER nitroprusiato inmediatamente.<br/>
      2. Soporte respiratorio/circulatorio según necesidad.<br/>
      3. <b>Antídoto específico de cianuro</b>: tiosulfato de sodio IV (proporciona sustrato para conversión a tiocianato), nitrito de sodio en casos graves (bajo supervisión experta - inductor de metahemoglobinemia terapéutica).<br/>
      4. Considerar hidroxocobalamina si disponible (forma cianocobalamina, menos tóxica, se elimina por orina).<br/>
      5. Hemodiálisis si toxicidad severa por tiocianato con insuficiencia renal.
    `,

    disecccionAortica: `
      <b>Nitroprusiato en Disección Aórtica - Uso Correcto:</b><br/>
      <b>REGLA DE ORO:</b><br/>
      • <b>NUNCA usar nitroprusiato (u otro vasodilatador puro) ANTES de controlar la frecuencia cardíaca con beta-bloqueante</b>.<br/>
      • Un vasodilatador puro sin beta-bloqueo previo produce TAQUICARDIA REFLEJA, que aumenta el dP/dt (velocidad de eyección ventricular) y EMPEORA el estrés sobre la pared aórtica disecada - contraproducente y peligroso.<br/><br/>
      <b>SECUENCIA CORRECTA:</b><br/>
      1. <b>PRIMERO: Beta-bloqueante</b> (esmolol o labetalol) hasta lograr <b>FC objetivo 60-80 lpm</b>.<br/>
      2. <b>DESPUÉS: Nitroprusiato</b> si la PA sigue elevada (PAS objetivo 100-120 mmHg) tras controlar la FC.<br/>
      3. Titular nitroprusiato con precisión, dado su inicio y final de efecto casi inmediatos.<br/><br/>
      <b>POR QUÉ NITROPRUSIATO ES ÚTIL AQUÍ:</b><br/>
      • Control INMEDIATO y muy TITULABLE - crucial en una emergencia donde el margen de PA es estrecho.<br/>
      • Reduce tanto precarga como poscarga.<br/><br/>
      <b>ALTERNATIVA:</b><br/>
      • Nicardipino es una alternativa con perfil de seguridad más favorable (sin riesgo de toxicidad por cianuro) - considerar según disponibilidad y preferencia institucional, SIEMPRE también tras beta-bloqueo previo.<br/><br/>
      <b>COORDINACIÓN:</b><br/>
      • Cirugía cardiovascular urgente en paralelo - nitroprusiato es puente, no tratamiento definitivo de la disección.
    `,

    manejoPractico: `
      <b>Manejo Práctico de la Infusión de Nitroprusiato:</b><br/>
      <b>PREPARACIÓN:</b><br/>
      1. Reconstituir el vial con SG5% (NO con SF según ficha técnica).<br/>
      2. Diluir en bolsa de SG5% - <b>usar bolsa de protección de luz específica</b> (opaca o cubierta con material fotoprotector, ej. papel de aluminio o funda comercial).<br/>
      3. <b>Cubrir también la LÍNEA de infusión completa</b>, no solo la bolsa - la luz ambiental puede degradar el fármaco en el trayecto del tubo.<br/>
      4. Verificar el aspecto: color marrón muy pálido/ligeramente parduzco es normal; desechar si azul, verde oscuro o muy oscuro.<br/><br/>
      <b>ADMINISTRACIÓN:</b><br/>
      • Bomba de infusión de precisión OBLIGATORIA.<br/>
      • Idealmente vía CENTRAL, aunque periférica es aceptable con vigilancia estrecha de extravasación.<br/>
      • Titular en incrementos pequeños, reevaluando la PA frecuentemente (el efecto se estabiliza en minutos).<br/><br/>
      <b>AL FINALIZAR/SUSPENDER:</b><br/>
      • <b>NUNCA de golpe</b> - reducir la velocidad gradualmente durante 15-30 minutos.<br/>
      • Tener preparado el siguiente escalón terapéutico (otro antihipertensivo IV u oral) ANTES de suspender completamente, para evitar el rebote hipertensivo.<br/><br/>
      <b>RECAMBIO DE BOLSA:</b><br/>
      • Cambiar la solución cada 24 horas (límite de estabilidad), incluso si queda volumen, para evitar administrar producto degradado.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>Reconstituir SOLO con SG5%</b> según ficha técnica.',
      '<b>SIEMPRE diluir antes de administrar</b> - nunca sin diluir.',
      '<b>Proteger de la luz la bolsa Y la línea de infusión completa</b>.',
      'Verificar aspecto: marrón pálido normal - desechar si azul/verde oscuro/muy oscuro.',
      'Etiquetar: Nitroprusiato [mg], concentración, velocidad (mcg/kg/min), hora preparación.',
      'Bomba de infusión de PRECISIÓN obligatoria - medicamento de alto riesgo.',
      'Preferir línea arterial para monitorización de PA continua.',
      'PA cada 5 min al inicio, luego cada 15 min.',
      'Vigilar signos de toxicidad por cianuro: taquicardia, sudoración, acidosis progresiva.',
      'Vigilar signos de toxicidad por tiocianato en uso prolongado: tinnitus, confusión.',
      'Si no control de PA en 10 min a dosis máxima (8 mcg/kg/min): AVISAR para suspender.',
      'En disección aórtica: confirmar que YA se administró beta-bloqueante antes de iniciar.',
      '<b>NUNCA suspender bruscamente</b> - reducir gradualmente en 15-30 min.',
      'Cambiar la bolsa cada 24h aunque quede volumen.',
      'Documentar: dosis, duración, PA seriada, eventos, niveles de tiocianato si aplica.',
    ],

    efectosAdversos: [
      '🔴 Toxicidad por cianuro (acidosis metabólica, confusión, convulsiones)',
      '🔴 Toxicidad por tiocianato (uso prolongado)',
      '🔴 Hipotensión severa',
      '🔴 HTA de rebote (suspensión brusca)',
      '🟠 Taquicardia refleja',
      '🟠 Metahemoglobinemia',
      '🟠 Hipotiroidismo (uso muy prolongado, por tiocianato)',
      '🟡 Cefalea',
      '🟡 Náuseas, vómitos',
      '🟡 Desorientación, mareos, visión borrosa',
      '🟡 Sudoración',
      '🟡 Palpitaciones',
      '🟡 Dolor abdominal',
    ],

    contraindicaciones: [
      'Hipersensibilidad al nitroprusiato sódico.',
      'Hipertensión compensatoria (ej. coartación aórtica, cortocircuitos arteriovenosos) donde la HTA es mecanismo compensador.',
      'Atrofia óptica de Leber (rara, relacionada con metabolismo del cianuro).',
      'Deficiencia congénita conocida de tiosulfato-sulfurtransferasa (rodanasa).',
      'Precaución extrema en: insuficiencia renal/hepática severa, hipotiroidismo.',
      'Lactancia: desaconsejado (se desconoce excreción en leche materna).',
    ],

    fotosensibilidad: '<b>SÍ - MUY FOTOSENSIBLE</b>. Debe protegerse de la luz TANTO la solución/bolsa COMO la línea de infusión completa durante toda la administración. La exposición a la luz degrada el fármaco y genera productos potencialmente más tóxicos.',

    estabilidad: {
      'Vial sin reconstituir':      'Temperatura ambiente, protegido de luz, hasta vencimiento',
      'Reconstituido':               '<b>24 horas a temperatura ambiente, PROTEGIDO DE LA LUZ</b>',
      'Diluido en SG5%':             '<b>24 horas a temperatura ambiente, PROTEGIDO DE LA LUZ</b>',
      'Aspecto':                      'Marrón muy pálido a ligeramente parduzco (normal) — DESECHAR si azul intenso, verde oscuro o muy oscuro',
      'Temperatura':                  'NO congelar · Proteger de la luz SIEMPRE',
    },

    presentaciones: [
      'Nitroprussiat Fides® 50 mg polvo para solución inyectable',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis inicial',                          dosis: '<b>0.3-0.5 mcg/kg/min IV</b>',              via: 'IV' },
      { indicacion: 'Dosis habitual mayoría de pacientes',    dosis: '0.5-3 mcg/kg/min',                          via: 'IV' },
      { indicacion: 'DOSIS MÁXIMA',                            dosis: '<b>8-10 mcg/kg/min</b> (suspender si no control en 10 min)',via: 'IV' },
      { indicacion: 'Disección aórtica (tras beta-bloqueo)',  dosis: 'Titular según PAS objetivo 100-120',        via: 'IV' },
      { indicacion: 'Pediátrico',                              dosis: '0.5-8 mcg/kg/min (similar principios que adulto)',via: 'IV' },
      { indicacion: 'Umbral vigilancia tiocianato',           dosis: '> 4 mcg/kg/min o > 3 días de uso',          via: 'IV' },
    ],

    embarazo: 'Datos limitados. Uso solo en emergencia materna extrema si beneficio claramente supera riesgo (el cianuro atraviesa placenta). Preferir alternativas (labetalol, nicardipino) cuando sea posible en HTA del embarazo. <b>Desaconsejado durante la lactancia</b> (se desconoce excreción en leche materna).',

    pediatria: 'Uso descrito en lactantes y niños con principios similares a adultos, ajustado por peso (mcg/kg/min). Mismas precauciones de toxicidad por cianuro/tiocianato, con vigilancia igualmente estrecha.',

    adultoMayor: 'No se requiere ajuste de dosis específico por edad (> 65 años) según ficha técnica. Vigilancia hemodinámica intensiva por mayor fragilidad general.',

    insufRenal: 'Mayor riesgo de acumulación de TIOCIANATO (eliminación renal) - vigilancia más estrecha de niveles si tratamiento prolongado. Considerar dosis más conservadoras.',

    insufHepatica: 'Mayor riesgo de acumulación de CIANURO (la conversión a tiocianato es hepática) - vigilancia más estrecha, considerar dosis más conservadoras y duración más corta.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Nitroprussiat Fides® 50 mg. Agencia Española de Medicamentos.',
      'FDA DailyMed. Sodium Nitroprusside Injection. U.S. National Library of Medicine.',
      'ISMP List of High-Alert Medications in Acute Care Settings.',
      'Red de Antídotos AEMPS. Manejo de Intoxicación por Cianuro.',
      'ACC/AHA Guidelines. Thoracic Aortic Disease. Circulation. 2022.',
      'Pediamécum AEP. Nitroprusiato Sódico. Asociación Española de Pediatría.',
      'Studylib/Hospital Son Dureta. Nitroprusiato Sódico - Guía Clínica de Administración.',
      'AHA/ASA Guidelines. Hypertensive Emergencies Management. Circulation. 2018.',
    ],
  },

});
