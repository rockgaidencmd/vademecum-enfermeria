/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/adenosina.js
   Fuentes: CIMA AEMPS (Adenocor, Adenosina Accord/Hikma),
   AHA ACLS 2020, Pediamécum AEP
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'adenosina',
  nombre:         'Adenosina',
  nombreGenerico: 'Adenosine',
  categoria:      'antiarritmicos',
  tags:           ['antiarrítmico', 'taquicardia supraventricular', 'TSV', 'WPW', 'nódulo AV', 'urgencias', 'ultracorto'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antiarrítmico de vida media ULTRACORTA (<10 segundos). Requiere técnica de administración específica (bolo rápido + lavado inmediato). Riesgo de asistolia transitoria (esperada, breve). Contraindicada en asma/broncoespasmo activo, bloqueo AV avanzado, QT largo.',

  nivel1: {

    puntosClave: [
      'Nucleósido purínico endógeno — <b>efecto dromotrópico negativo en el nódulo AV</b> (bloquea transitoriamente la conducción) — interrumpe circuitos de reentrada.',
      '<b>VIDA MEDIA ULTRACORTA < 10 SEGUNDOS</b> (captación celular inmediata) — requiere técnica de administración especial: <b>bolo IV RÁPIDO + lavado inmediato con SF</b>.',
      'Fármaco de <b>PRIMERA LÍNEA en TSV paroxística</b> (incluyendo WPW) — NO revierte FA, flutter auricular ni TV (no dependen del nódulo AV).',
      '<b>ASISTOLIA TRANSITORIA (2-15 segundos) es un efecto ESPERADO</b> tras la administración — advertir al paciente, tener equipo de reanimación disponible.',
      'CONTRAINDICADA en: <b>asma/broncoespasmo activo, bloqueo AV 2º-3º grado, síndrome QT largo, EPOC con broncoespasmo</b>.',
    ],

    resumenRapido: 'Nucleósido endógeno presente en todas las células. Administrado en bolo IV rápido, se une a receptores A1 en el nódulo AV, activando canales de potasio e inhibiendo canales de calcio tipo L, lo que produce un bloqueo transitorio de la conducción AV. Esto interrumpe los circuitos de reentrada que utilizan el nódulo AV como parte del circuito (TSV por reentrada nodal, TSV por vía accesoria tipo WPW), restaurando el ritmo sinusal. Metabolismo por captación celular y desaminación por adenosina-deaminasa - vida media plasmática efectiva menor a 10 segundos. Indicado en: conversión rápida a ritmo sinusal de TSV paroxística (incluyendo WPW), ayuda diagnóstica en taquicardias de complejo ancho o estrecho de origen incierto, sensibilización en estudios electrofisiológicos.',

    objetivoTerapeutico: 'Interrumpir circuitos de reentrada que involucran el nódulo AV · Restaurar ritmo sinusal en TSV · Ayudar al diagnóstico diferencial de taquiarritmias',

    preparacion: {
      'Presentación estándar':    '<b>Adenosina 6 mg/2 mL solución inyectable</b> (3 mg/mL) - vial o jeringa precargada',
      'Presentación jeringa precargada':'Adenosina 12 mg/4 mL jeringa precargada (3 mg/mL)',
      'Diluyente':                '<b>NO diluir</b> - administrar directamente (concentración lista para usar)',
      'Vía':                      'IV exclusiva - bolo rápido directo en vena o catéter IV de calibre grande',
      '⏱️ TÉCNICA DE ADMINISTRACIÓN':'<b>Bolo IV RÁPIDO (1-2 segundos) seguido INMEDIATAMENTE de lavado con 10-20 mL SF</b>',
      '⏱️ Técnica "doble jeringa"':'Conectar jeringa de adenosina y jeringa de SF en llave de 3 vías lo MÁS PROXIMAL posible a la vena',
      '⏱️ PRIMERA DOSIS (adulto)': '<b>6 mg IV bolo rápido + lavado inmediato</b>',
      '⏱️ SEGUNDA DOSIS (si no revierte en 1-2 min)':'<b>12 mg IV bolo rápido + lavado</b>',
      '⏱️ TERCERA DOSIS (si no revierte)':'<b>12 mg IV bolo rápido + lavado</b> (dosis máxima - no repetir más)',
      '⏱️ PEDIÁTRICO (primer bolo)':'0.1 mg/kg (máximo 6 mg) IV bolo rápido',
      '⏱️ PEDIÁTRICO (incrementos)':'0.1 mg/kg incrementos hasta terminar TSV (máximo 12 mg)',
      'Bomba':                    'NO aplica - administración manual en bolo directo',
      'Vía preferida':            'Vena de calibre grande, lo más proximal posible al corazón',
      '🧊 ESTABILIDAD':           'Vial/jeringa sin abrir: hasta vencimiento a temperatura ambiente',
      'Aspecto':                  'Solución transparente e incolora',
    },

    vigilancia: {
      antes: [
        '<b>Monitorización ECG continua OBLIGATORIA</b> antes, durante y después.',
        'Equipo de reanimación cardiopulmonar DISPONIBLE E INMEDIATO.',
        'Confirmar diagnóstico de TSV (complejo estrecho regular) - o uso diagnóstico si duda de origen.',
        'Revisar contraindicaciones: asma/broncoespasmo activo, bloqueo AV avanzado, QT largo, hipotensión grave, ICC descompensada.',
        'Acceso IV de CALIBRE GRANDE, lo más proximal posible (antecubital preferible a distal).',
        'Preparar jeringa de adenosina Y jeringa de lavado SF montadas en llave de 3 vías.',
        'Advertir al paciente: sensación transitoria de "vacío en el pecho", rubor, posible mareo breve (normal y esperado).',
        'Verificar NO uso reciente de dipiridamol (potencia 4× el efecto de adenosina).',
      ],
      durante: [
        '<b>Administrar en BOLO VERDADERAMENTE RÁPIDO (1-2 segundos)</b>.',
        '<b>Lavado INMEDIATO con 10-20 mL SF</b> tras el bolo (sin pausa) - técnica crítica para eficacia.',
        'Elevar el brazo tras la administración si es vía periférica distal (facilita llegada al corazón).',
        'ECG continuo - observar el bloqueo AV transitorio y la reversión.',
        '<b>ASISTOLIA/PAUSA de 2-15 segundos es ESPERADA</b> - no es una complicación, es el mecanismo de acción.',
        'Vigilar aparición de arritmias transitorias durante la reversión (extrasístoles, bloqueos, raramente FA/flutter/FV).',
        'Si primera dosis no revierte en 1-2 minutos: proceder a segunda dosis (12 mg) con misma técnica.',
      ],
      despues: [
        'Continuar monitor ECG varios minutos tras reversión exitosa.',
        'Los efectos adversos (rubor, disnea, opresión torácica) son TRANSITORIOS - duran segundos a 1-2 minutos.',
        'Si TSV recurre: puede repetirse tratamiento o considerar antiarrítmico de acción más prolongada (verapamilo, diltiazem, beta-bloqueante) según contexto.',
        'Si NO revierte tras 3 dosis: reconsiderar diagnóstico (¿flutter/FA en vez de TSV?) y otras estrategias (cardioversión eléctrica, otros antiarrítmicos).',
        'Documentar: dosis, hora, técnica utilizada, respuesta ECG, efectos adversos.',
      ],
      suspender: [
        'No aplica en el sentido tradicional - es dosis única de bolo.',
        'Si aparece arritmia grave post-adenosina (FV, TV sostenida): protocolo ACLS estándar inmediato.',
        'Si broncoespasmo severo: tratamiento broncodilatador de rescate.',
        'No repetir más de 3 dosis totales (6-12-12 mg) según protocolo estándar.',
      ],
    },

    incompatibilidades: [
      'No se recomienda mezclar con otros medicamentos en la misma jeringa.',
      'Administrar SOLA, seguida de lavado con SF puro.',
      'Verificar compatibilidad de vía si hay otros fármacos en infusión simultánea en el mismo catéter (usar lumen diferente si es posible).',
    ],

    alertasSeguridad: [
      '🔴 <b>CONTRAINDICADA en asma/EPOC con broncoespasmo activo</b> - puede precipitar/agravar broncoespasmo severo.',
      '🔴 <b>CONTRAINDICADA en bloqueo AV 2º-3º grado</b> sin marcapasos (salvo diagnóstico bajo supervisión experta).',
      '🔴 <b>CONTRAINDICADA en síndrome de QT largo</b>.',
      '🔴 CONTRAINDICADA en hipotensión grave e ICC descompensada.',
      '🟠 <b>NO REVIERTE fibrilación auricular, flutter auricular ni taquicardia ventricular</b> - solo TSV que involucra nódulo AV.',
      '🟠 Arritmias transitorias durante la reversión (incluso descritas: FA, flutter, FV en casos raros, especialmente en WPW pediátrico).',
      '🟠 <b>DIPIRIDAMOL potencia el efecto 4 veces</b> - reducir dosis si uso concomitante.',
      '🟠 Cafeína y teofilina (metilxantinas) ANTAGONIZAN el efecto - puede requerir dosis mayores.',
      '🟡 Efectos transitorios esperados (segundos): rubor facial, disnea, opresión torácica, sensación de muerte inminente - advertir al paciente.',
      '🟡 Insuficiencia hepática o renal NO modifican la eficacia (metabolismo no depende de estos órganos).',
      '🟡 Antídoto si efectos severos prolongados: aminofilina o teofilina IV (antagonistas de receptores de adenosina).',
    ],
  },

  modulos: {

    tecnicaAdministracion: `
      <b>Técnica de Administración Correcta de Adenosina:</b><br/>
      <b>POR QUÉ ES CRÍTICA LA TÉCNICA:</b><br/>
      • Vida media plasmática efectiva < 10 segundos (captación celular casi inmediata).<br/>
      • Una administración lenta o sin lavado adecuado puede resultar en INEFICACIA (el fármaco se metaboliza antes de llegar al corazón en concentración suficiente).<br/><br/>
      <b>MÉTODO "DOBLE JERINGA" (recomendado):</b><br/>
      1. Preparar DOS jeringas: una con adenosina (dosis calculada), otra con 10-20 mL de SF 0.9%.<br/>
      2. Conectar ambas jeringas a una <b>llave de 3 vías</b> conectada al catéter IV.<br/>
      3. Usar un acceso IV de <b>CALIBRE GRANDE</b> (idealmente 18G o mayor), en vena <b>PROXIMAL</b> (antecubital preferible sobre dorso de mano).<br/>
      4. <b>Inyectar la adenosina en BOLO VERDADERAMENTE RÁPIDO (1-2 segundos)</b>.<br/>
      5. <b>INMEDIATAMENTE, sin pausa, inyectar el lavado de SF</b> (también rápido).<br/>
      6. Si es posible, <b>elevar el brazo</b> tras la inyección para favorecer el retorno venoso rápido hacia el corazón.<br/><br/>
      <b>ERRORES COMUNES A EVITAR:</b><br/>
      • Administrar lentamente (como la mayoría de fármacos IV) - INEFECTIVO con adenosina.<br/>
      • Usar vía IV distal de pequeño calibre (dorso de mano con catéter 22-24G) - retrasa la llegada.<br/>
      • Olvidar o retrasar el lavado con SF - el fármaco se degrada en el trayecto sin llegar en concentración útil.<br/>
      • No tener el ECG corriendo continuamente durante la maniobra (se pierde el registro del bloqueo AV diagnóstico).<br/><br/>
      <b>REGISTRO ECG:</b><br/>
      • Mantener tira de ritmo corriendo DURANTE toda la administración - el patrón de bloqueo AV transitorio y la reversión son valiosos para el diagnóstico definitivo, incluso si la TSV no revierte completamente.
    `,

    wpw: `
      <b>Adenosina en Síndrome de Wolff-Parkinson-White (WPW):</b><br/>
      <b>INDICACIÓN:</b><br/>
      • TSV asociada a vías de conducción anómalas (WPW) con complejo QRS ESTRECHO (conducción ortodrómica, la más común).<br/>
      • Adenosina es efectiva porque el circuito de reentrada SÍ utiliza el nódulo AV como parte del circuito (conducción anterógrada por el nódulo AV, retrógrada por la vía accesoria).<br/><br/>
      <b>PRECAUCIÓN ESPECIAL - TSV DE COMPLEJO ANCHO EN WPW:</b><br/>
      • Si la TSV es de <b>complejo ANCHO por conducción ANTIDRÓMICA</b> (anterógrada por la vía accesoria) o si hay <b>FIBRILACIÓN AURICULAR preexcitada</b> (FA + WPW):<br/>
      • <b>ADENOSINA PUEDE SER PELIGROSA</b> - al bloquear el nódulo AV, puede favorecer que TODOS los impulsos auriculares pasen por la vía accesoria (sin el "filtro" del nódulo AV), precipitando <b>FIBRILACIÓN VENTRICULAR</b>.<br/>
      • Se han descrito casos de arritmias graves inducidas por adenosina en pacientes pediátricos con WPW (3 casos de FA, 2 de flutter, 1 de FV en la serie de seis casos reportados).<br/><br/>
      <b>RECOMENDACIÓN:</b><br/>
      • Ante TSV de complejo ANCHO de origen incierto, especialmente con antecedente de WPW conocido: <b>considerar tratamiento como si fuera TV</b> (cardioversión eléctrica si inestable, o procainamida/amiodarona si estable) en lugar de adenosina, SALVO que el diagnóstico de TSV supraventricular sea claro.<br/>
      • Uso de adenosina en estos casos complejos: <b>solo bajo supervisión de personal experto en arritmias</b>, con desfibrilador inmediatamente disponible.<br/>
      • Adenosina SIGUE siendo de elección en TSV de complejo ESTRECHO típica, incluso con WPW conocido.
    `,

    diagnostico: `
      <b>Adenosina como Herramienta Diagnóstica:</b><br/>
      <b>UTILIDAD:</b><br/>
      • En taquicardias de origen incierto (complejo ancho o estrecho), el bloqueo AV transitorio inducido por adenosina puede "desenmascarar" la actividad auricular subyacente.<br/><br/>
      <b>APLICACIÓN PRÁCTICA:</b><br/>
      • <b>Flutter auricular</b>: adenosina NO revierte el flutter (no depende del nódulo AV), pero el bloqueo AV transitorio permite VISUALIZAR las ondas F (flutter) que estaban ocultas por la alta frecuencia ventricular - confirma el diagnóstico.<br/>
      • <b>Fibrilación auricular</b>: similar, permite ver la actividad auricular irregular de base.<br/>
      • <b>Taquicardia sinusal rápida</b>: el bloqueo AV transitorio permite ver ondas P sinusales normales tras la pausa.<br/>
      • <b>Taquicardia ventricular</b>: adenosina generalmente NO tiene efecto sobre el ritmo (el origen es ventricular, no depende del nódulo AV) - la ausencia de respuesta apoya el diagnóstico de TV sobre TSV con aberrancia.<br/><br/>
      <b>IMPORTANTE:</b><br/>
      • Esta indicación diagnóstica <b>debe realizarse SOLO por personal médico con experiencia en diagnóstico y tratamiento de arritmias cardíacas</b> (indicación expresa de ficha técnica CIMA).<br/>
      • Mantener SIEMPRE registro de ECG continuo durante la maniobra para análisis posterior.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>Monitorización ECG continua OBLIGATORIA</b> - mantener tira de ritmo corriendo durante la administración.',
      'Equipo de reanimación cardiopulmonar disponible ANTES de administrar.',
      'Verificar contraindicaciones: asma/broncoespasmo, bloqueo AV avanzado, QT largo.',
      'Usar acceso IV de CALIBRE GRANDE, lo más proximal posible.',
      'Preparar técnica de "doble jeringa": adenosina + jeringa de lavado SF en llave de 3 vías.',
      '<b>Administrar en BOLO VERDADERAMENTE RÁPIDO (1-2 segundos)</b>.',
      '<b>Lavado INMEDIATO con SF sin pausa</b> tras el bolo.',
      'Advertir al paciente sobre sensaciones transitorias esperadas (rubor, opresión torácica, sensación extraña) - duran segundos.',
      'Vigilar la pausa/asistolia transitoria - es ESPERADA, no es una complicación per se.',
      'Si no revierte en 1-2 min: preparar siguiente dosis (12 mg) con misma técnica.',
      'Vigilar broncoespasmo si hay antecedente respiratorio (aunque contraindicado, verificar igualmente).',
      'Verificar si el paciente toma dipiridamol (potencia el efecto) o cafeína/teofilina (lo antagoniza).',
      'Documentar: dosis administrada(s), hora, técnica, respuesta ECG, efectos adversos.',
      'Uso diagnóstico: solo bajo indicación de médico experto en arritmias.',
    ],

    efectosAdversos: [
      '🔴 Asistolia/pausa prolongada (más allá de lo esperado)',
      '🔴 Broncoespasmo severo',
      '🔴 Fibrilación ventricular (rara, más descrita en WPW con conducción antidrómica)',
      '🔴 Fibrilación/flutter auricular de nueva aparición (raro, más en WPW pediátrico)',
      '🟠 Bloqueo AV sintomático prolongado',
      '🟠 Hipotensión transitoria',
      '🟡 Rubor facial (muy frecuente, esperado)',
      '🟡 Disnea transitoria (muy frecuente, esperado)',
      '🟡 Opresión/dolor torácico transitorio (muy frecuente, esperado)',
      '🟡 Sensación de "muerte inminente" transitoria (descrita, esperada, autolimitada)',
      '🟡 Cefalea',
      '🟡 Náuseas',
      '🟡 Mareo',
      '🟡 Parestesias',
      '🟡 Sabor metálico',
    ],

    contraindicaciones: [
      'Hipersensibilidad a adenosina.',
      'Síndrome de disfunción sinusal o bloqueo AV de 2º-3º grado (salvo con marcapasos).',
      'EPOC con signos de broncoespasmo (ej. asma bronquial).',
      'Síndrome de QT largo.',
      'Hipotensión grave.',
      'Estados descompensados de insuficiencia cardíaca.',
      'Precaución en: WPW con TSV de complejo ancho o FA preexcitada (riesgo de FV).',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente sin requerimientos especiales.',

    estabilidad: {
      'Vial/jeringa sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Uso':                          'Administración inmediata tras apertura - dosis única',
      'Aspecto':                     'Transparente e incolora — desechar si turbidez o cristalización (puede cristalizar en frío, verificar antes de usar)',
      'Temperatura':                 'NO refrigerar/congelar (puede cristalizar) · Conservar a temperatura ambiente',
    },

    presentaciones: [
      'Adenocor® 6 mg/2 mL solución inyectable (marca histórica)',
      'Adenosina Accord 6 mg/2 mL solución inyectable',
      'Adenosina Hikma 6 mg/2 mL solución inyectable',
      'Adenosina Kabi 12 mg/4 mL jeringa precargada',
      'Múltiples genéricos disponibles',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Primera dosis adulto',                   dosis: '<b>6 mg IV bolo rápido + lavado</b>',       via: 'IV' },
      { indicacion: 'Segunda dosis (si no revierte)',         dosis: '<b>12 mg IV bolo rápido + lavado</b>',      via: 'IV' },
      { indicacion: 'Tercera dosis (dosis máxima)',           dosis: '<b>12 mg IV bolo rápido + lavado</b>',      via: 'IV' },
      { indicacion: 'Pediátrico (primer bolo)',                dosis: '0.1 mg/kg (máx 6 mg)',                      via: 'IV' },
      { indicacion: 'Pediátrico (incrementos)',                dosis: '0.1 mg/kg hasta máx 12 mg',                 via: 'IV' },
      { indicacion: 'Uso con dipiridamol concomitante',       dosis: 'REDUCIR dosis (efecto potenciado 4x)',      via: 'IV' },
    ],

    embarazo: 'Datos limitados en embarazo humano. Uso en emergencias (TSV materna) si claramente indicado - beneficio > riesgo potencial desconocido. No hay alternativa igualmente efectiva y segura para TSV aguda en el contexto de emergencia.',

    pediatria: 'Aprobada para TSV en niños de 0-18 años. Primer bolo: 0.1 mg/kg (máximo 6 mg). Incrementos de 0.1 mg/kg según necesidad hasta terminar la TSV (máximo 12 mg). <b>Precaución especial en WPW pediátrico</b> - casos descritos de arritmias graves (FA, flutter, FV) tras adenosina en este contexto.',

    adultoMayor: 'Sin ajuste específico de dosis por edad. Mismo protocolo que adultos. Vigilancia ECG intensiva por mayor prevalencia de enfermedad del nódulo sinusal/AV subclínica.',

    insufRenal: 'NO requiere ajuste - la insuficiencia renal NO modifica la eficacia (el riñón no interviene en la degradación de la adenosina exógena, según ficha técnica CIMA).',

    insufHepatica: 'NO requiere ajuste - la insuficiencia hepática NO modifica la eficacia (el hígado no interviene en la degradación de la adenosina exógena, según ficha técnica CIMA).',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Adenocor® 6 mg/2 mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Adenosina Accord, Hikma 6 mg/2 mL. AEMPS.',
      'FDA DailyMed. Adenosine Injection. U.S. National Library of Medicine.',
      'AHA ACLS Guidelines 2020. Tachycardia Algorithm - Adenosine. Circulation.',
      'Pediamécum AEP. Adenosina. Asociación Española de Pediatría.',
      'Gandhi A, Uzun O. Adenosine Dosing in Supraventricular Tachycardia. Arch Dis Child. 2006.',
      'AHA PALS Guidelines 2020. Pediatric Tachycardia Management. Circulation.',
      'Page RL, et al. ACC/AHA/HRS Guideline for Management of SVT. Circulation. 2016.',
    ],
  },

});
