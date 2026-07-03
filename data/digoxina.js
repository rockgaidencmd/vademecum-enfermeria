/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/digoxina.js
   Fuentes: CIMA AEMPS (Digoxina Kern Pharma, Teofarma),
   Pediamécum AEP, ESC Heart Failure/AF Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'digoxina',
  nombre:         'Digoxina (IV)',
  nombreGenerico: 'Digoxin',
  categoria:      'antiarritmicos',
  tags:           ['glucósido digitálico', 'insuficiencia cardíaca', 'fibrilación auricular', 'control frecuencia', 'estrecho margen terapéutico', 'toxicidad digitálica'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Glucósido digitálico de MARGEN TERAPÉUTICO MUY ESTRECHO. Riesgo de toxicidad digitálica grave (arritmias potencialmente letales) con niveles apenas superiores al rango terapéutico. CONTRAINDICADO en FA con WPW (riesgo de FV). Hipopotasemia e hipercalcemia predisponen a toxicidad. Requiere ajuste cuidadoso por función renal, peso y edad.',

  nivel1: {

    puntosClave: [
      'Glucósido digitálico — inhibe la <b>bomba Na+/K+-ATPasa</b> de la célula miocárdica, aumentando el calcio intracelular disponible → <b>efecto INOTRÓPICO POSITIVO</b>; además aumenta el tono vagal → <b>efecto CRONOTRÓPICO NEGATIVO</b> (enlentece conducción AV).',
      '<b>MARGEN TERAPÉUTICO MUY ESTRECHO</b> — nivel sérico terapéutico ~1 ng/mL, toxicidad frecuente con niveles > 2 ng/mL — requiere dosificación individualizada y monitorización de niveles.',
      'Indicaciones: <b>insuficiencia cardíaca con disfunción sistólica</b> (especialmente si coexiste FA), <b>control de frecuencia ventricular en FA/flutter auricular</b> (beneficio principal: reducción del ritmo ventricular, más que cardioversión).',
      '<b>CONTRAINDICADO en FA/flutter asociado a vía accesoria (WPW)</b> — puede favorecer la conducción por la vía accesoria y precipitar fibrilación ventricular.',
      'Al cambiar de VO a IV: <b>REDUCIR LA DOSIS AL MENOS UN 33%</b> (mayor biodisponibilidad IV). <b>Hipopotasemia e hipercalcemia predisponen a toxicidad</b> — corregir electrolitos antes/durante el tratamiento.',
    ],

    resumenRapido: 'Glucósido cardiotónico derivado de Digitalis lanata. Inhibe la bomba Na+/K+-ATPasa de la membrana miocitaria, lo que aumenta el sodio intracelular y secundariamente (vía intercambiador Na+/Ca2+) el calcio intracelular disponible para la contracción - efecto inotrópico positivo directo. Adicionalmente, aumenta el tono vagal (parasimpático) y reduce el tono simpático, enlenteciendo la conducción a través del nódulo AV - efecto útil en el control de la frecuencia ventricular en FA/flutter. Margen terapéutico MUY ESTRECHO (índice terapéutico bajo). Inicio IV: 5-30 min · Efecto máximo: 1-4h. Indicado en: insuficiencia cardíaca crónica con disfunción sistólica (especialmente si FA concomitante), control de frecuencia ventricular en FA/flutter auricular (beneficio principal: reducción de ritmo ventricular).',

    objetivoTerapeutico: 'Mejorar la contractilidad miocárdica en IC sistólica · Controlar la frecuencia ventricular en FA/flutter · Alternativa/adyuvante cuando beta-bloqueantes o calcioantagonistas están contraindicados o son insuficientes',

    preparacion: {
      'Presentación':             '<b>Digoxina 0.25 mg/mL solución inyectable</b> - ampolla 2 mL (0.5 mg)',
      'Diluyente':                'Puede administrarse sin diluir o diluido en SF 0.9%/SG 5% (4 o más volúmenes) para infusión lenta',
      'Vía':                      'IV (preferida en emergencia) o VO (según urgencia clínica)',
      '⏱️ ADMINISTRACIÓN IV':     '<b>Inyección lenta en al menos 5 minutos</b> (bolo rápido causa vasoconstricción/HTA transitoria)',
      '⏱️ DOSIS DE CARGA/DIGITALIZACIÓN (IV)':'<b>Dosis total 0.5-1 mg</b> fraccionada:',
      '⏱️ Primera dosis':          '0.25-0.5 mg IV',
      '⏱️ Dosis adicionales':      '0.125-0.25 mg IV c/6-8h hasta completar la dosis de carga total (según respuesta y niveles)',
      '⏱️ DOSIS DE MANTENIMIENTO':'<b>0.125-0.25 mg IV/VO cada 24h</b> (ajustar según función renal, edad, peso)',
      '⚠️ CAMBIO VO → IV':        '<b>Reducir la dosis en AL MENOS un 33%</b> (mayor biodisponibilidad por vía IV)',
      'Bomba':                    'No siempre necesaria para bolo lento; recomendada si infusión diluida',
      '🧊 ESTABILIDAD':           'Ampolla sin abrir: hasta vencimiento a temperatura ambiente',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'ECG basal - descartar bloqueo AV preexistente, WPW.',
        'Electrolitos (K+, Mg2+, Ca2+) - <b>CORREGIR hipopotasemia antes de iniciar</b> (predispone a toxicidad).',
        'Función renal (creatinina, CrCl) - ajuste de dosis obligatorio.',
        'Peso del paciente - relevante para cálculo de dosis.',
        'Revisar si el paciente ya toma digoxina VO - calcular dosis de carga restante si aplica.',
        'Descartar contraindicaciones: FA/flutter con WPW, TV/FV, bloqueo AV avanzado sin marcapasos, cardiomiopatía hipertrófica obstructiva (sin FA/IC concomitante).',
        'Doble verificación: dosis exacta (mg, no confundir con mcg), vía, velocidad.',
      ],
      durante: [
        'Inyección IV LENTA en mínimo 5 minutos.',
        'Monitor ECG continuo durante la digitalización.',
        'Vigilar bradicardia excesiva o bloqueo AV de nuevo inicio.',
        'Vigilar náuseas/vómitos (frecuentes, pueden ser signo precoz de toxicidad).',
      ],
      despues: [
        'ECG de control tras cada dosis de digitalización.',
        '<b>Niveles séricos de digoxina</b> - obtener idealmente ≥ 6-8 horas post-dosis (antes de este tiempo los niveles no reflejan el equilibrio tisular real).',
        'Control de electrolitos (K+, Mg2+, Ca2+) periódico durante el tratamiento.',
        'Vigilar signos de TOXICIDAD DIGITÁLICA: náuseas, vómitos, anorexia, alteraciones visuales (visión amarilla/verde, halos), confusión, arritmias.',
        'Ajustar dosis de mantenimiento según función renal, niveles y respuesta clínica.',
        'Documentar: dosis total administrada, niveles séricos, ECG, electrolitos, respuesta clínica.',
      ],
      suspender: [
        'Signos de toxicidad digitálica.',
        'Bradicardia severa sintomática o bloqueo AV avanzado de nuevo inicio.',
        'Arritmias ventriculares (extrasístoles frecuentes, bigeminismo, TV).',
        'Niveles séricos > 2 ng/mL con síntomas de toxicidad.',
        'Hipopotasemia o hipercalcemia significativa no corregida.',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones ácidas o alcalinas extremas.',
      'Verificar compatibilidad antes de mezclar con otros fármacos en la misma línea.',
      'Preferir línea IV independiente o administración directa lenta.',
    ],

    alertasSeguridad: [
      '🔴 <b>MARGEN TERAPÉUTICO MUY ESTRECHO</b> - toxicidad frecuente con niveles apenas superiores al rango terapéutico (> 2 ng/mL).',
      '🔴 <b>CONTRAINDICADO en FA/flutter con vía accesoria (WPW)</b> - riesgo de precipitar fibrilación ventricular.',
      '🔴 <b>CONTRAINDICADO en taquicardia/fibrilación ventricular</b>.',
      '🟠 <b>HIPOPOTASEMIA e HIPERCALCEMIA predisponen a toxicidad</b> - corregir electrolitos antes y durante el tratamiento.',
      '🟠 Al cambiar VO→IV: <b>reducir dosis al menos 33%</b> (mayor biodisponibilidad IV).',
      '🟠 AJUSTE OBLIGATORIO por función renal, edad avanzada, y peso corporal neto (no usar peso total en obesidad significativa).',
      '🟠 Ancianos y neonatos (especialmente prematuros): mayor sensibilidad y riesgo de toxicidad - usar dosis más bajas.',
      '🟡 Algunas arritmias por TOXICIDAD digitálica pueden simular clínicamente las arritmias para cuyo tratamiento se usa (ej. taquicardia auricular con bloqueo AV variable puede confundirse con FA).',
      '🟡 Antídoto específico disponible: fragmentos Fab anti-digoxina (para intoxicación grave con arritmias potencialmente letales).',
      '🟡 Múltiples interacciones: amiodarona, verapamilo, diltiazem, quinidina aumentan niveles de digoxina - ajustar dosis si se combinan.',
    ],
  },

  modulos: {

    toxicidadDigitalica: `
      <b>Toxicidad Digitálica - Reconocimiento y Manejo:</b><br/>
      <b>RANGO TERAPÉUTICO:</b><br/>
      • Concentración sérica terapéutica: <b>~1 ng/mL</b> (rango habitual 0.5-2 ng/mL según laboratorio).<br/>
      • <b>Niveles > 2 ng/mL frecuentemente asociados a toxicidad</b>, aunque la toxicidad puede ocurrir incluso dentro del "rango terapéutico" si hay factores predisponentes (hipopotasemia, hipoxia, hipotiroidismo).<br/><br/>
      <b>FACTORES QUE PREDISPONEN A TOXICIDAD:</b><br/>
      • <b>Hipopotasemia</b> (el más importante y frecuente - diuréticos concomitantes).<br/>
      • Hipercalcemia.<br/>
      • Hipomagnesemia.<br/>
      • Insuficiencia renal (acumulación).<br/>
      • Hipoxia, hipotiroidismo.<br/>
      • Edad avanzada.<br/>
      • Interacciones (amiodarona, verapamilo, quinidina aumentan niveles).<br/><br/>
      <b>SÍNTOMAS DE TOXICIDAD:</b><br/>
      <b>Gastrointestinales (frecuentemente los primeros):</b> náuseas, vómitos, anorexia, dolor abdominal.<br/>
      <b>Neurológicos/visuales:</b> confusión, letargia, alteraciones visuales características (visión amarilla-verdosa, halos alrededor de las luces - "xantopsia").<br/>
      <b>Cardíacos (los más graves):</b><br/>
      • Extrasístoles ventriculares (frecuentemente bigeminismo).<br/>
      • Taquicardia auricular con bloqueo AV variable (puede simular FA clínicamente).<br/>
      • Bloqueo AV de cualquier grado.<br/>
      • Bradicardia sinusal severa.<br/>
      • Taquicardia ventricular, fibrilación ventricular (potencialmente letal).<br/><br/>
      <b>MANEJO DE LA INTOXICACIÓN:</b><br/>
      1. <b>SUSPENDER digoxina</b> inmediatamente.<br/>
      2. Monitor ECG continuo.<br/>
      3. Corregir electrolitos: <b>potasio</b> (con precaución, la hiperpotasemia aguda en intoxicación digitálica severa también es peligrosa), magnesio.<br/>
      4. Si ingesta reciente (< 4h) con bradicardia: <b>atropina 0.5-1 mg IV/SC</b>.<br/>
      5. Carbón activado si ingesta oral reciente.<br/>
      6. <b>En intoxicación GRAVE con arritmias potencialmente letales: FRAGMENTOS FAB ANTI-DIGOXINA</b> (anticuerpo específico) - revierte la toxicidad de forma rápida y eficaz.<br/>
      7. Evitar cardioversión eléctrica si es posible (mayor riesgo de arritmias refractarias en presencia de toxicidad digitálica) - reservar para arritmias muy inestables sin otra opción.<br/>
      8. Evitar calcio IV (puede empeorar la toxicidad al aumentar aún más el calcio intracelular).
    `,

    fibrilacionAuricular: `
      <b>Digoxina en Control de Frecuencia - FA/Flutter Auricular:</b><br/>
      <b>ROL ACTUAL (guías ESC/AHA):</b><br/>
      • Beta-bloqueantes y calcioantagonistas no dihidropiridínicos (diltiazem, verapamilo) son de PRIMERA LÍNEA para control de frecuencia en FA.<br/>
      • Digoxina se considera especialmente útil en:<br/>
      &nbsp;&nbsp;- Pacientes con <b>insuficiencia cardíaca con FEVI reducida</b> concomitante (beneficio dual: inotrópico + control FC).<br/>
      &nbsp;&nbsp;- Pacientes <b>sedentarios/poco activos</b> (el efecto de digoxina es predominantemente vagal, menos efectivo con el ejercicio/actividad simpática).<br/>
      &nbsp;&nbsp;- Como <b>segundo agente</b> combinado con beta-bloqueante cuando el control con un solo fármaco es insuficiente.<br/>
      &nbsp;&nbsp;- Cuando beta-bloqueantes y calcioantagonistas están contraindicados (hipotensión severa, broncoespasmo grave con calcioantagonistas también limitados).<br/><br/>
      <b>LIMITACIÓN IMPORTANTE:</b><br/>
      • Inicio de acción MÁS LENTO que diltiazem IV o beta-bloqueantes IV para control agudo de FC.<br/>
      • Menos efectivo en estados de alto tono simpático (sepsis, postoperatorio, hipertiroidismo) - el mecanismo vagal es menos dominante en estas situaciones.<br/><br/>
      <b>CONTRAINDICACIÓN CRÍTICA:</b><br/>
      • <b>NUNCA usar en FA/flutter con preexcitación (WPW)</b> - la digoxina puede acortar el período refractario de la vía accesoria, facilitando conducción rápida por esta vía y precipitando fibrilación ventricular.<br/><br/>
      <b>DOSIFICACIÓN PARA CONTROL DE FC:</b><br/>
      • Dosis de carga: 0.5 mg IV inicial, seguido de 0.25 mg IV c/6h hasta completar 0.75-1 mg total (según respuesta y tolerancia).<br/>
      • Mantenimiento: 0.125-0.25 mg/día, ajustado según función renal y niveles.
    `,

    insuficienciaCardiaca: `
      <b>Digoxina en Insuficiencia Cardíaca:</b><br/>
      <b>INDICACIÓN (ficha técnica):</b><br/>
      • Insuficiencia cardíaca crónica con predominio de <b>disfunción SISTÓLICA</b>.<br/>
      • Mayor beneficio en pacientes con <b>dilatación ventricular</b>.<br/>
      • <b>Específicamente indicada cuando la IC se acompaña de fibrilación auricular</b> (doble beneficio: inotrópico + control de FC).<br/><br/>
      <b>ROL ACTUAL EN GUÍAS:</b><br/>
      • NO es tratamiento de primera línea en IC con FEVI reducida (esa posición la ocupan IECA/ARA-II/ARNI, beta-bloqueantes, antagonistas mineralocorticoides, iSGLT2).<br/>
      • Se considera como <b>tratamiento adicional</b> en pacientes que permanecen sintomáticos a pesar de terapia óptima, especialmente si coexiste FA.<br/>
      • <b>NO ha demostrado reducir mortalidad</b> en IC (a diferencia de los fármacos de primera línea), pero SÍ reduce hospitalizaciones y mejora síntomas en el subgrupo apropiado (estudio DIG).<br/><br/>
      <b>DOSIFICACIÓN EN IC (generalmente sin digitalización rápida, salvo urgencia con FA/RVR):</b><br/>
      • Inicio directo con dosis de mantenimiento: 0.125-0.25 mg/día VO (ajustado por función renal, edad, peso).<br/>
      • Preferir dosis MÁS BAJAS del rango en IC crónica (objetivo de niveles séricos más bajos, ~0.5-0.9 ng/mL, se asocia a mejor perfil de seguridad según análisis post-hoc del estudio DIG).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>Verificar electrolitos (K+, Mg2+, Ca2+) antes de administrar</b> - corregir hipopotasemia si presente.',
      'Calcular dosis exacta - <b>verificar mg vs mcg</b> (fuente frecuente de errores graves con digoxina).',
      'Si el paciente viene de VO a IV: <b>reducir dosis en al menos 33%</b>.',
      'Etiquetar: Digoxina [mg], dosis, hora.',
      '<b>Inyección IV LENTA en mínimo 5 minutos</b> - no bolo rápido.',
      'Monitor ECG continuo durante la digitalización.',
      'Vigilar bradicardia, bloqueo AV de nuevo inicio.',
      'Vigilar náuseas/vómitos - pueden ser signo precoz de toxicidad.',
      'Coordinar niveles séricos de digoxina (idealmente ≥ 6-8h post-dosis).',
      'Vigilar signos de toxicidad: alteraciones visuales, confusión, arritmias.',
      'En pacientes ancianos o con IRC: extremar precaución con la dosis.',
      '<b>CONFIRMAR ausencia de WPW conocido</b> si la indicación es FA/flutter.',
      'Revisar interacciones: amiodarona, verapamilo, diltiazem, quinidina (aumentan niveles).',
      'Documentar: dosis, hora, ECG, electrolitos, niveles séricos si disponibles, respuesta clínica.',
    ],

    efectosAdversos: [
      '🔴 Arritmias ventriculares (extrasístoles, TV, FV) por toxicidad',
      '🔴 Bloqueo AV avanzado',
      '🔴 Bradicardia severa',
      '🟠 Náuseas, vómitos, anorexia (frecuentes, pueden indicar toxicidad)',
      '🟠 Alteraciones visuales (xantopsia - visión amarilla/verde, halos)',
      '🟠 Confusión, letargia (especialmente en ancianos)',
      '🟡 Cefalea',
      '🟡 Mareos',
      '🟡 Diarrea',
      '🟡 Ginecomastia (uso muy prolongado, raro)',
      '🟡 Reacciones alérgicas (raras)',
    ],

    contraindicaciones: [
      'Taquicardia y fibrilación ventricular.',
      '<b>Fibrilación auricular/flutter asociado a vía accesoria (síndrome de WPW)</b>.',
      'Síndrome del seno enfermo sintomático y alteraciones mayores de la función del nódulo sinusal.',
      'Bloqueo AV de 2º-3º grado sin marcapasos.',
      'Cardiomiopatía hipertrófica obstructiva (salvo FA e IC concomitantes, con precaución).',
      'Hipersensibilidad a digoxina u otros glucósidos digitálicos.',
      'Precaución en: hipopotasemia, hipercalcemia, insuficiencia renal, edad avanzada, hipotiroidismo.',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente sin requerimientos especiales de fotoprotección.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente hasta vencimiento',
      'Diluida (si aplica)':        'Usar preferentemente de forma inmediata',
      'Aspecto':                    'Transparente, incolora — desechar si turbidez',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Digoxina Kern Pharma 0.25 mg/mL solución inyectable - ampolla 2 mL (0.5 mg)',
      'Digoxina Teofarma 0.25 mg comprimidos (VO)',
      'Digoxina Kern Pharma 0.25 mg comprimidos (VO)',
      'Digoxina elixir/solución pediátrica (formulaciones específicas para niños)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Digitalización IV (dosis de carga total)',dosis:'<b>0.5-1 mg fraccionado</b>',                via: 'IV' },
      { indicacion: 'Primera dosis de carga',                  dosis: '0.25-0.5 mg IV',                             via: 'IV' },
      { indicacion: 'Dosis adicionales de carga',              dosis: '0.125-0.25 mg IV c/6-8h',                    via: 'IV' },
      { indicacion: 'Mantenimiento estándar',                  dosis: '<b>0.125-0.25 mg IV/VO c/24h</b>',           via: 'IV/VO' },
      { indicacion: 'Mantenimiento en ancianos/IRC',           dosis: '0.0625-0.125 mg/día (dosis reducida)',       via: 'IV/VO' },
      { indicacion: 'Cambio VO a IV',                           dosis: 'Reducir dosis oral en ≥ 33%',                via: 'IV' },
      { indicacion: 'Pediátrico (según edad, digitalización)', dosis: 'Individualizada por edad/peso - consultar tabla específica',via: 'IV' },
    ],

    embarazo: 'Atraviesa la placenta. Se han comunicado efectos adversos fetales (aborto, muerte fetal) en casos de TOXICIDAD materna por digital con ingesta de grandes cantidades - a dosis terapéuticas normales no se considera de alto riesgo. Usar si claramente indicado (IC materna, arritmia fetal en casos específicos off-label). Se excreta en leche materna en cantidades mínimas - compatible con lactancia.',

    pediatria: 'Dosis individualizada según edad, peso y función renal - consultar tablas específicas pediátricas (Pediamécum/protocolos locales). Neonatos, especialmente PREMATUROS, son especialmente sensibles por aclaramiento renal reducido - requieren dosis más bajas y vigilancia estrecha.',

    adultoMayor: '<b>MAYOR RIESGO de toxicidad</b> por función renal reducida y menor masa corporal magra - usar dosis MÁS BAJAS que en pacientes jóvenes. Control regular de niveles séricos. Evitar hipopotasemia.',

    insufRenal: '<b>AJUSTE OBLIGATORIO según función renal</b> - la digoxina se elimina principalmente por vía renal. Reducir dosis proporcionalmente al grado de insuficiencia renal; en IRC severa considerar intervalos más prolongados. Monitorización de niveles séricos especialmente importante en este grupo.',

    insufHepatica: 'Sin ajuste específico mayor - eliminación principalmente renal, no hepática. Vigilancia clínica estándar.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Digoxina Kern Pharma 0.25 mg/mL Solución Inyectable. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Digoxina Teofarma 0.25 mg Comprimidos. AEMPS.',
      'FDA DailyMed. Digoxin Injection. U.S. National Library of Medicine.',
      'Pediamécum AEP. Digoxina. Asociación Española de Pediatría.',
      'ESC Guidelines. Atrial Fibrillation Management. Eur Heart J. 2024.',
      'ESC Guidelines. Acute and Chronic Heart Failure. Eur Heart J. 2021.',
      'The Digitalis Investigation Group (DIG). Effect of Digoxin on Mortality and Morbidity in Heart Failure. NEJM. 1997.',
      'AHA/ACC/HRS Guidelines. Management of Atrial Fibrillation. Circulation. 2023.',
    ],
  },

});
