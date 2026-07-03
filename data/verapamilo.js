/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/verapamilo.js
   Fuentes: CIMA AEMPS (Manidon 2.5mg/mL inyectable),
   Cardioteca, AHA ACLS Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'verapamilo',
  nombre:         'Verapamilo (IV)',
  nombreGenerico: 'Verapamil Hydrochloride',
  categoria:      'antiarritmicos',
  tags:           ['calcioantagonista', 'taquicardia supraventricular', 'TSV', 'fibrilación auricular', 'control frecuencia', 'no dihidropiridínico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Calcioantagonista no dihidropiridínico. CONTRAINDICADO en taquicardia ventricular de complejo ancho (QRS > 0.12 seg) - puede causar deterioro hemodinámico grave y fibrilación ventricular. CONTRAINDICADO en FA/flutter con vía accesoria (WPW, LGL) - riesgo de TV/FV. Requiere diagnóstico diferencial preciso antes de administrar.',

  nivel1: {

    puntosClave: [
      'Calcioantagonista NO DIHIDROPIRIDÍNICO (fenilalquilamina) — actúa sobre <b>nódulo sinusal y AV</b>, con efecto inotrópico negativo más marcado que diltiazem.',
      '<b>FÁRMACO DE ELECCIÓN en TSV aguda</b> por reentrada nodal — consigue cardioversión a ritmo sinusal en <b>80-90% de los casos en los primeros minutos</b>.',
      '<b>CONTRAINDICACIÓN CRÍTICA: taquicardia ventricular de complejo ANCHO (QRS > 0.12 seg)</b> — administrarlo por error en TV puede causar deterioro hemodinámico grave y fibrilación ventricular. <b>DIAGNÓSTICO DIFERENCIAL PRECISO es imprescindible antes de usar</b>.',
      '<b>CONTRAINDICADO en FA/flutter CON vía accesoria</b> (WPW, Lown-Ganong-Levine) — riesgo de TV/FV por favorecer conducción por la vía accesoria. Curiosamente, SÍ está indicado en <b>TSV paroxística que utiliza el nódulo AV como parte del circuito, incluso en pacientes con WPW conocido</b> (mecanismo distinto).',
      'Administración: <b>bolo IV LENTO en mínimo 2 minutos</b> bajo control continuo de ECG y PA.',
    ],

    resumenRapido: 'Calcioantagonista no dihidropiridínico (fenilalquilamina) con efecto dual sobre el sistema de conducción cardíaco (nódulos SA y AV, prolongando el tiempo de conducción AV) y sobre el músculo liso vascular (vasodilatación, reducción de poscarga). A diferencia de diltiazem, tiene un efecto inotrópico negativo más pronunciado, aunque en la mayoría de pacientes esto se compensa por la reducción de poscarga. Carece de efecto sobre la conducción por vías accesorias (bypass tracts). Inicio IV: 1-2 minutos · Duración: 30-60 minutos (bolo único). Indicado en: taquicardia supraventricular paroxística aguda (incluyendo la asociada a WPW cuando el circuito de reentrada usa el nódulo AV), control de frecuencia ventricular en FA/flutter auricular crónico (sin vía accesoria).',

    objetivoTerapeutico: 'Conversión a ritmo sinusal en TSV paroxística · Control agudo de frecuencia ventricular en FA/flutter · Alternativa a adenosina en TSV recurrente',

    preparacion: {
      'Presentación':             '<b>Manidon® 2.5 mg/mL solución inyectable</b> - ampolla 2 mL (5 mg)',
      'Diluyente':                'Puede administrarse sin diluir en bolo, o diluido en SF/SG5% para mayor control de velocidad',
      'Vía':                      'IV exclusiva - inyección lenta',
      '⏱️ DOSIS INICIAL':         '<b>5-10 mg (0.075-0.15 mg/kg) IV en bolo durante MÍNIMO 2 minutos</b>',
      '⏱️ Segunda dosis (si no respuesta)':'<b>10 mg (0.15 mg/kg) IV a los 30 minutos</b> de la primera dosis',
      '⏱️ Maniobra previa recomendada':'Cuando esté clínicamente justificado, realizar PRIMERO maniobras vagales (Valsalva, masaje carotídeo) antes del fármaco',
      '⏱️ VELOCIDAD':              '<b>NO administrar más rápido de lo indicado</b> - mínimo 2 minutos para el bolo',
      'Bomba':                    'No siempre necesaria para bolo único; puede usarse para control preciso de velocidad',
      '🧊 ESTABILIDAD':           'Ampolla sin abrir: hasta vencimiento a temperatura ambiente',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>CONFIRMAR el diagnóstico: TSV de complejo ESTRECHO</b> - diferenciar de TV de complejo ancho es IMPRESCINDIBLE.',
        'Si hay CUALQUIER duda sobre el origen de una taquicardia de complejo ancho: <b>tratar como TV, NO administrar verapamilo</b>.',
        'ECG de 12 derivaciones ANTES de administrar.',
        'PA y FC basales.',
        'Considerar maniobras vagales PRIMERO si clínicamente apropiado (Valsalva, masaje carotídeo).',
        'Revisar contraindicaciones: FA/flutter con vía accesoria conocida, ICC con FEVI < 35%, bloqueo AV avanzado, tratamiento con beta-bloqueante IV reciente.',
        'Acceso IV permeable.',
        'Doble verificación: dosis por peso, velocidad de administración.',
      ],
      durante: [
        '<b>Bolo IV LENTO en mínimo 2 minutos</b> - bajo control CONTINUO de ECG y PA.',
        'Monitor continuo obligatorio durante la administración.',
        'Vigilar hipotensión, bradicardia, bloqueo AV.',
        'Observar conversión a ritmo sinusal (respuesta esperada en TSV en los primeros minutos).',
        'Si TV de complejo ancho fue tratada por error con verapamilo: preparar soporte hemodinámico inmediato (puede requerir cardioversión eléctrica, calcio IV, vasopresores).',
      ],
      despues: [
        'Continuar monitor ECG/PA 30-60 minutos post-administración.',
        'Si recurre la TSV: puede repetirse dosis a los 30 min, o considerar otro fármaco/estrategia.',
        'Vigilar bradicardia tardía.',
        'Documentar: dosis, hora, ritmo pre/post, respuesta, eventos.',
        'En pacientes con FA/flutter para control crónico de FC: coordinar transición a verapamilo oral si está indicado (tras descartar vía accesoria).',
      ],
      suspender: [
        'Bloqueo AV avanzado de nuevo inicio.',
        'Hipotensión severa sintomática.',
        'Bradicardia severa sintomática.',
        'Deterioro hemodinámico (especialmente si sospecha retrospectiva de TV mal diagnosticada como TSV).',
        'Conversión exitosa a ritmo sinusal (objetivo alcanzado).',
      ],
    },

    incompatibilidades: [
      'Combinación con ivabradina - contraindicada (efecto aditivo de bradicardia).',
      'Precaución con beta-bloqueantes IV administrados recientemente - riesgo aditivo de bradicardia/bloqueo AV/hipotensión severa.',
      'Verificar compatibilidad antes de mezclar con otros fármacos en la misma línea.',
    ],

    alertasSeguridad: [
      '🔴 <b>CONTRAINDICADO en taquicardia ventricular de complejo ANCHO (QRS > 0.12 seg)</b> - puede causar deterioro hemodinámico grave y fibrilación ventricular. Diagnóstico diferencial preciso ES IMPRESCINDIBLE.',
      '🔴 <b>CONTRAINDICADO en FA/flutter CON vía accesoria (WPW, Lown-Ganong-Levine)</b> - riesgo de TV/FV.',
      '🔴 CONTRAINDICADO en ICC con FEVI < 35% o presión de enclavamiento pulmonar > 20 mmHg (salvo cuando sea secundaria a TSV que responde a verapamilo).',
      '🟠 Combinación con BETA-BLOQUEANTES IV: riesgo aditivo grave de bradicardia, bloqueo AV, hipotensión - evitar administración conjunta en un corto periodo de tiempo.',
      '🟠 Bloqueo AV, bradicardia, asistolia - vigilar durante y después de la administración.',
      '🟠 Contraindicado combinar con ivabradina.',
      '🟡 En infarto agudo complicado con bradicardia, hipotensión marcada o disfunción del VI: usar con precaución.',
      '🟡 En insuficiencia hepática: metabolismo retrasado, efectos potenciados y prolongados - ajustar dosis con precaución especial, iniciar con dosis bajas.',
      '🟡 No debe interrumpirse abruptamente tras uso prolongado (vía oral) - reducir dosis gradualmente.',
    ],
  },

  modulos: {

    diagnosticoDiferencial: `
      <b>Diagnóstico Diferencial CRÍTICO antes de Verapamilo:</b><br/>
      <b>POR QUÉ ES FUNDAMENTAL:</b><br/>
      • Verapamilo es SEGURO y EFECTIVO en TSV de complejo estrecho.<br/>
      • Verapamilo es <b>PELIGROSO, POTENCIALMENTE MORTAL</b> si se administra por error en TAQUICARDIA VENTRICULAR (complejo ancho).<br/>
      • El bloqueo de canales de calcio en un corazón con TV puede precipitar colapso hemodinámico severo y fibrilación ventricular.<br/><br/>
      <b>CRITERIOS PARA DIFERENCIAR:</b><br/>
      • <b>QRS ESTRECHO (< 0.12 seg)</b>: compatible con TSV - verapamilo es una opción segura.<br/>
      • <b>QRS ANCHO (> 0.12 seg)</b>: puede ser TV O TSV con aberrancia/bloqueo de rama preexistente - <b>NO administrar verapamilo salvo certeza diagnóstica absoluta de origen supraventricular</b>.<br/><br/>
      <b>EN CASO DE DUDA:</b><br/>
      • <b>TRATAR COMO TAQUICARDIA VENTRICULAR</b> (la opción más segura ante la incertidumbre).<br/>
      • Considerar: cardioversión eléctrica sincronizada si inestable, procainamida o amiodarona si estable, consulta con cardiología/electrofisiología.<br/>
      • Historia clínica: antecedente de cardiopatía estructural, IAM previo favorecen TV; antecedente de TSV previas favorecen origen supraventricular - pero esto NUNCA sustituye el análisis ECG cuidadoso.<br/><br/>
      <b>CONTEXTO DE URGENCIAS:</b><br/>
      • "Un diagnóstico pre-tratamiento apropiado y la diferenciación de la TSV de complejo ancho es imprescindible" (indicación expresa de ficha técnica).<br/>
      • Adenosina puede usarse con relativa seguridad como herramienta diagnóstica/terapéutica en casos de incertidumbre en TSV de complejo estrecho, pero el mismo cuidado aplica.
    `,

    tsv: `
      <b>Verapamilo en Taquicardia Supraventricular Paroxística:</b><br/>
      <b>EFICACIA:</b><br/>
      • Consigue la cardioversión a ritmo sinusal en <b>80-90% de los casos en los primeros minutos</b> tras la administración IV.<br/>
      • Mecanismo: interrumpe la reentrada en el nódulo AV.<br/><br/>
      <b>INDICACIÓN ESPECÍFICA (incluye WPW en este contexto):</b><br/>
      • TSV paroxística, <b>incluso la asociada con vías accesorias de conducción (WPW, Lown-Ganong-Levine)</b> - siempre que el circuito de reentrada utilice el nódulo AV (forma ortodrómica, la más común).<br/>
      • Esto es DIFERENTE de la contraindicación en FA/flutter con vía accesoria, donde el riesgo es que TODOS los impulsos auriculares pasen sin control por la vía accesoria.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. Si clínicamente apropiado: <b>maniobras vagales PRIMERO</b> (Valsalva, masaje del seno carotídeo).<br/>
      2. <b>Dosis inicial: 5-10 mg (0.075-0.15 mg/kg) IV en bolo durante mínimo 2 minutos</b>.<br/>
      3. Si no hay respuesta suficiente: <b>10 mg (0.15 mg/kg) IV a los 30 minutos</b> de la primera dosis.<br/>
      4. Monitor ECG y PA continuos durante todo el proceso.<br/><br/>
      <b>ALTERNATIVA/COMPARACIÓN CON ADENOSINA:</b><br/>
      • Adenosina: efecto ultrarrápido (segundos), vida media muy corta, efectos transitorios intensos.<br/>
      • Verapamilo: efecto algo más sostenido, menos efectos transitorios desagradables, pero mayor riesgo de hipotensión sostenida.<br/>
      • Elección según preferencia clínica, disponibilidad, y perfil del paciente (ej. evitar verapamilo si hipotensión de base).
    `,

    controlFA: `
      <b>Verapamilo en Control de Frecuencia - FA/Flutter Auricular Crónico:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Control de la frecuencia ventricular en FA/flutter auricular CRÓNICO.<br/>
      • <b>EXCEPTO cuando exista vía accesoria de conducción</b> (WPW, LGL) - aquí SÍ es una contraindicación absoluta (a diferencia del contexto de TSV paroxística descrito arriba).<br/><br/>
      <b>ROL EN GUÍAS ACTUALES:</b><br/>
      • Junto con diltiazem, es de <b>primera línea para control de frecuencia en FA con función sistólica CONSERVADA</b>.<br/>
      • Preferir sobre beta-bloqueantes en pacientes con broncoespasmo/asma donde estos están contraindicados.<br/><br/>
      <b>PRECAUCIÓN EN DISFUNCIÓN VENTRICULAR:</b><br/>
      • En la mayoría de pacientes (incluso con cardiopatía orgánica), el efecto inotrópico negativo es contrarrestado por la reducción de poscarga, sin caída significativa del índice cardíaco.<br/>
      • PERO en <b>disfunción cardíaca moderada-grave (PCP > 20 mmHg, FEVI < 30%)</b>: puede observarse EMPEORAMIENTO AGUDO de la insuficiencia cardíaca - evitar en este contexto (usar diltiazem con igual precaución, o considerar digoxina/amiodarona).<br/><br/>
      <b>ENSAYOS DE REFERENCIA:</b><br/>
      • DAVIT-II, INVEST, CONVINCE han delimitado los beneficios y las poblaciones donde NO debe usarse verapamilo en cardiología.<br/><br/>
      <b>TRANSICIÓN A VO:</b><br/>
      • Tras control agudo IV, transición a verapamilo oral para profilaxis/control crónico si está indicado, con ajuste según digitalización previa del paciente (dosis distintas si digitalizado vs no digitalizado).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>ECG de 12 derivaciones ANTES de administrar</b> - confirmar QRS estrecho.',
      '<b>Ante cualquier duda diagnóstica con complejo ancho: NO administrar</b> - avisar al médico.',
      'Considerar maniobras vagales primero si clínicamente apropiado.',
      'Calcular dosis por peso: 5-10 mg (0.075-0.15 mg/kg).',
      'Etiquetar jeringa: Verapamilo [mg], dosis, hora.',
      '<b>Bolo IV LENTO en mínimo 2 minutos</b> - no administrar más rápido.',
      'Monitor CONTINUO de ECG y PA durante la administración.',
      'Vigilar hipotensión, bradicardia, bloqueo AV.',
      'Preparar para posible segunda dosis a los 30 min si no hay respuesta.',
      'Si el paciente recibió beta-bloqueante IV recientemente: EXTREMAR precaución (riesgo aditivo).',
      'Continuar monitor 30-60 min post-administración.',
      'Documentar: dosis, hora, ritmo pre/post, respuesta, eventos.',
      'En transición a VO: verificar si paciente está digitalizado (dosis diferente).',
    ],

    efectosAdversos: [
      '🔴 Fibrilación ventricular (si administrado por error en TV)',
      '🔴 Bloqueo AV avanzado / asistolia',
      '🔴 Hipotensión severa',
      '🔴 Empeoramiento agudo de insuficiencia cardíaca (en disfunción VI grave)',
      '🟠 Bradicardia significativa',
      '🟠 Bloqueo cardíaco de diverso grado',
      '🟡 Cefalea',
      '🟡 Mareos',
      '🟡 Rubor facial',
      '🟡 Náuseas',
      '🟡 Estreñimiento (más relevante en uso oral crónico)',
      '🟡 Edema periférico (uso prolongado)',
    ],

    contraindicaciones: [
      '<b>Taquicardia ventricular de complejo ancho (QRS > 0.12 seg)</b>.',
      '<b>Fibrilación/flutter auricular con vía accesoria (WPW, Lown-Ganong-Levine)</b>.',
      'Insuficiencia cardíaca con FEVI < 35% o PCP > 20 mmHg (salvo secundaria a TSV que responde a verapamilo).',
      'Bloqueo AV de 2º-3º grado sin marcapasos.',
      'Síndrome del seno enfermo sin marcapasos.',
      'Hipotensión severa o shock cardiogénico.',
      'Combinación con ivabradina.',
      'Hipersensibilidad a verapamilo.',
      'Precaución en IAM complicado con bradicardia, hipotensión marcada, o disfunción del VI.',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente sin requerimientos especiales de fotoprotección.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente hasta vencimiento',
      'Diluida (si aplica)':        'Usar preferentemente de forma inmediata',
      'Aspecto':                    'Transparente, incolora — desechar si turbidez',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Manidon® 2.5 mg/mL solución inyectable - ampolla 2 mL (5 mg)',
      'Manidon® 80 mg comprimidos (VO)',
      'Manidon Retard® 120 mg y 180 mg comprimidos de liberación prolongada (VO)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'TSV aguda (dosis inicial)',              dosis: '<b>5-10 mg (0.075-0.15 mg/kg) IV en ≥ 2 min</b>',via: 'IV' },
      { indicacion: 'Segunda dosis (si no respuesta)',        dosis: '<b>10 mg (0.15 mg/kg) IV a los 30 min</b>',  via: 'IV' },
      { indicacion: 'Profilaxis TSV tras control IV (VO)',    dosis: '240-480 mg/día (no digitalizados)',          via: 'VO' },
      { indicacion: 'Profilaxis TSV en digitalizados (VO)',  dosis: '120-360 mg/día',                             via: 'VO' },
      { indicacion: 'Pediátrico (≥ 6 años, VO crónico)',      dosis: 'Máximo 10 mg/kg/día en varias tomas',       via: 'VO' },
      { indicacion: 'DOSIS MÁXIMA diaria (VO largo plazo)',   dosis: '480 mg/día',                                  via: 'VO' },
    ],

    embarazo: 'Datos limitados en embarazo humano. Uso en emergencias (TSV materna) si claramente indicado. Verapamilo se excreta en leche materna - considerar en lactancia, aunque generalmente compatible según reportes limitados.',

    pediatria: 'Formulación IV: indicada en adultos y niños para TSV (consultar dosis pediátrica específica por peso, similar principio 0.075-0.15 mg/kg). Formulación oral: aprobada desde 6 años, dosis ajustada individualmente, máximo 10 mg/kg/día.',

    adultoMayor: 'Sin ajuste específico de dosis solo por edad, aunque mayor vigilancia de bradicardia/hipotensión recomendada.',

    insufRenal: 'Sin ajuste específico mayor establecido - metabolismo principalmente hepático. Vigilancia clínica estándar.',

    insufHepatica: '<b>El metabolismo se retrasa según la gravedad de la disfunción hepática</b>, potenciando y prolongando los efectos del verapamilo. <b>Ajustar dosis con especial precaución, iniciando con dosis bajas</b> en pacientes con función hepática alterada.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Manidon® 2.5 mg/mL Solución Inyectable. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Manidon®, Manidon Retard® comprimidos. AEMPS.',
      'Cardioteca. Verapamilo: Evidencia y Práctica Clínica. 2025-2026.',
      'AHA ACLS Guidelines 2020. Tachycardia Algorithm. Circulation.',
      'DAVIT-II Trial. Verapamil in Acute Myocardial Infarction. Am J Cardiol. 1990.',
      'INVEST Trial. Verapamil-Trandolapril vs Atenolol-Hydrochlorothiazide in Hypertension with CAD. JAMA. 2003.',
      'Page RL, et al. ACC/AHA/HRS Guideline for Management of SVT. Circulation. 2016.',
      'ESC Guidelines. Atrial Fibrillation Management. Eur Heart J. 2024.',
    ],
  },

});
