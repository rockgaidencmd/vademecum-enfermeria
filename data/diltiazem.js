/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/diltiazem.js
   Fuentes: CIMA AEMPS, Nota AEMPS Medicación Extranjera,
   Pediamécum AEP, Cardioteca práctica clínica
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'diltiazem',
  nombre:         'Diltiazem (IV)',
  nombreGenerico: 'Diltiazem Hydrochloride',
  categoria:      'antiarritmicos',
  tags:           ['calcioantagonista', 'fibrilación auricular', 'control frecuencia', 'TSV', 'no dihidropiridínico', 'medicación extranjera'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Calcioantagonista no dihidropiridínico. Riesgo de bradicardia, bloqueo AV, hipotensión, empeoramiento de insuficiencia cardíaca sistólica. CONTRAINDICADO combinar con dantroleno (fibrilación ventricular mortal en animales) e ivabradina. En España la forma IV requiere importación como medicación extranjera.',

  nivel1: {

    puntosClave: [
      '⚠️ <b>EN ESPAÑA, EL DILTIAZEM INYECTABLE NO ESTÁ COMERCIALIZADO DE FORMA REGULAR</b> — la AEMPS gestiona su importación como <b>medicación extranjera</b> para indicaciones específicas (TPSV, FA/flutter). Verificar disponibilidad en tu centro antes de asumir su uso.',
      'Calcioantagonista NO DIHIDROPIRIDÍNICO — actúa sobre <b>nódulo AV y sinusal</b> (a diferencia de nicardipino/nifedipino que son vasodilatadores arteriales puros).',
      '<b>VENTAJA sobre betabloqueantes</b>: menor efecto inotrópico negativo en miocardio sano, útil en pacientes con broncoespasmo donde beta-bloqueantes están contraindicados.',
      '<b>VENTAJA sobre digoxina</b>: inicio de acción MUCHO más rápido (minutos vs horas) para control de FC en FA/flutter con respuesta ventricular rápida.',
      'Control de frecuencia en <b>FA/flutter auricular</b> — <b>bolo 0.25 mg/kg en 2 minutos</b>, puede repetirse a 0.35 mg/kg si no hay respuesta en 15 min.',
    ],

    resumenRapido: 'Calcioantagonista no dihidropiridínico (benzotiazepina) con efecto dual: relajación de músculo liso vascular Y depresión del nódulo sinusal/AV (a diferencia de las dihidropiridinas que son vasoselectivas puras). Enlentece la conducción AV, prolonga el periodo refractario del nodo AV, sin efecto significativo en el haz de His ni fibras infranodales. Sin efecto inotrópico negativo relevante en miocardio sano. Inicio IV: minutos (bolo) · Duración: 1-3h tras bolo único, requiere perfusión para efecto sostenido. Indicado en: control de frecuencia ventricular en FA/flutter auricular con respuesta rápida, taquicardia paroxística supraventricular (alternativa a adenosina/verapamilo), cardioversión farmacológica en casos seleccionados.',

    objetivoTerapeutico: 'Control rápido de la frecuencia ventricular en FA/flutter · Alternativa a beta-bloqueantes en pacientes con broncoespasmo · Tratamiento de TSV por reentrada nodal',

    preparacion: {
      '⚠️ Disponibilidad':        '<b>Verificar disponibilidad local - en España requiere gestión como medicación extranjera (AEMPS)</b>',
      'Presentación (si disponible)':'Diltiazem inyectable - ampolla (concentración variable según origen de importación)',
      'Diluyente':                'SF 0.9% o SG 5%',
      'Dilución':                 '<b>Diluir hasta concentración MÁXIMA de 1 mg/mL</b>',
      'Vía':                      'IV exclusiva - bolo (IVP) o perfusión continua',
      '⏱️ BOLO INICIAL (FA/flutter, TSV)':'<b>0.25 mg/kg IV en 2 minutos</b> (dosis media adulto ~20 mg)',
      '⏱️ Repetir si no respuesta en 15 min':'<b>0.35 mg/kg IV en 2 minutos</b> (dosis media adulto ~25 mg)',
      '⏱️ PERFUSIÓN CONTINUA tras bolo':'<b>5-15 mg/h IV</b> (iniciar 5-10 mg/h, ajustar según FC)',
      '⏱️ DOSIS MÁXIMA perfusión':'<b>15 mg/h</b>',
      '⏱️ DURACIÓN MÁXIMA perfusión':'<b>No superar 24 horas</b> continuas',
      '⏱️ Alternativa infusión lenta (TSV, evidencia limitada)':'2.5 mg/min hasta máximo 50 mg total',
      'Bomba':                    'OBLIGATORIA para perfusión continua',
      '🧊 ESTABILIDAD':           'Verificar información específica del producto importado/disponible',
      'Aspecto':                  'Solución transparente (verificar aspecto según fabricante específico)',
    },

    vigilancia: {
      antes: [
        'PA, FC, ECG basales - confirmar ritmo (FA/flutter con RVR, TSV).',
        '<b>Revisar contraindicaciones</b>: bloqueo AV 2º-3º grado, hipotensión (PAS<90), IAM complicado, ICC con edema pulmonar o FEVI < 40%, bradicardia grave (<40 lpm).',
        '<b>NUNCA combinar con perfusión de dantroleno</b> - riesgo de fibrilación ventricular mortal (descrito con verapamilo, extrapolado a diltiazem por su clase).',
        'Revisar si toma DIGOXINA - diltiazem puede aumentar niveles, medir digoxinemia si se inicia/modifica/suspende diltiazem.',
        'Revisar uso de betabloqueantes concomitante - riesgo aditivo de bradicardia/bloqueo AV.',
        'Confirmar disponibilidad real del producto en el centro (medicación extranjera en España).',
        'Doble verificación: dosis por peso, dilución (máx 1 mg/mL), vía.',
      ],
      durante: [
        'Monitor continuo: ECG, PA, FC durante el bolo y la perfusión.',
        'Bolo IV en 2 minutos exactos - no más rápido.',
        'Vigilar hipotensión y bradicardia durante y después del bolo.',
        'Efecto esperado en 3-7 minutos: FC < 110 lpm o reducción > 20% de la basal.',
        'Si aparece bloqueo AV avanzado: SUSPENDER, considerar marcapasos temporal.',
        'Vigilar signos de insuficiencia respiratoria (diltiazem puede inducir/agravar broncoespasmo, aunque menos que beta-bloqueantes).',
      ],
      despues: [
        'Continuar monitor ECG/PA/FC durante toda la perfusión y tras finalizar.',
        'Si requiere perfusión prolongada: transición a control de FC oral (diltiazem VO, beta-bloqueante) antes de 24h.',
        'Vigilar función renal en pacientes con insuficiencia cardíaca (riesgo de IRA por hipoperfusión con descenso excesivo de PA/FC).',
        'Si combinado con digoxina: medir digoxinemia.',
        'Documentar: dosis, hora, respuesta de FC, PA seriada, eventos.',
      ],
      suspender: [
        'Bloqueo AV de nuevo inicio (2º-3º grado).',
        'Hipotensión severa sintomática.',
        'Bradicardia severa sintomática.',
        'Insuficiencia cardíaca aguda/edema pulmonar de nueva aparición.',
        'Broncoespasmo agudo significativo.',
        'FC objetivo alcanzado de forma sostenida (transición a mantenimiento oral).',
        'Completadas 24h de perfusión (máximo recomendado).',
      ],
    },

    incompatibilidades: [
      '<b>DANTROLENO (perfusión)</b> - COMBINACIÓN CONTRAINDICADA por razones de seguridad - riesgo de fibrilación ventricular mortal.',
      '<b>IVABRADINA</b> - combinación contraindicada (efecto aditivo de bradicardia excesiva).',
      'Verificar compatibilidad de dilución antes de mezclar con otros fármacos en la misma línea.',
      'Preferir línea IV independiente.',
    ],

    alertasSeguridad: [
      '🔴 <b>DISPONIBILIDAD LIMITADA EN ESPAÑA</b> - verificar si el centro dispone de diltiazem IV importado antes de planificar su uso; alternativas: verapamilo IV, esmolol, o control con digoxina/amiodarona según contexto.',
      '🔴 <b>CONTRAINDICADO combinar con dantroleno</b> - riesgo de fibrilación ventricular mortal.',
      '🔴 CONTRAINDICADO en bloqueo AV 2º-3º grado sin marcapasos, IAM complicado, ICC con FEVI < 40% o edema pulmonar, bradicardia grave.',
      '🟠 Puede inducir o agravar BRONCOESPASMO, especialmente en hiperreactividad bronquial preexistente - vigilar función respiratoria.',
      '🟠 Aumenta niveles de DIGOXINA - medir digoxinemia si uso concomitante.',
      '🟠 Combinación con BETA-BLOQUEANTES: riesgo aditivo de bradicardia/bloqueo AV - solo bajo vigilancia estrecha.',
      '🟠 <b>VENTAJA en insuficiencia cardíaca vs verapamilo</b>: menor efecto inotrópico negativo y no eleva digoxina tanto como verapamilo (dato de nota AEMPS sobre medicación extranjera).',
      '🟡 Sobredosis: hipotensión pronunciada, bradicardia sinusal, paro sinusal, trastornos de conducción AV, paro cardíaco - tratamiento en entorno hospitalario.',
      '🟡 Concentraciones plasmáticas aumentadas en ancianos e insuficiencia renal/hepática.',
    ],
  },

  modulos: {

    disponibilidadEspana: `
      <b>Disponibilidad de Diltiazem Inyectable en España:</b><br/>
      <b>SITUACIÓN ACTUAL (Nota Informativa AEMPS):</b><br/>
      • El diltiazem inyectable <b>NO tiene comercialización regular en España</b>.<br/>
      • La AEMPS gestiona su importación como <b>"medicación extranjera"</b> para las indicaciones autorizadas: tratamiento de la taquicardia paroxística supraventricular (TPSV) y tratamiento de la fibrilación auricular o flutter auricular.<br/>
      • Su disponibilidad varía SEGÚN EL CENTRO HOSPITALARIO - algunos hospitales lo mantienen en stock mediante gestión de medicamento extranjero, otros no.<br/><br/>
      <b>POR QUÉ SE SIGUE GESTIONANDO SU IMPORTACIÓN:</b><br/>
      • Presenta ventajas en pacientes con <b>insuficiencia cardíaca</b> frente a verapamilo: menor efecto inotrópico negativo.<br/>
      • <b>NO eleva tanto los niveles de digoxina</b> como lo hace el verapamilo.<br/>
      • Alternativa útil cuando beta-bloqueantes están contraindicados (asma/broncoespasmo) y verapamilo no es ideal (mayor inotropismo negativo).<br/><br/>
      <b>ALTERNATIVAS SI NO ESTÁ DISPONIBLE:</b><br/>
      • <b>Verapamilo IV</b>: similar mecanismo, mayor efecto inotrópico negativo - evitar en IC sistólica.<br/>
      • <b>Esmolol o Labetalol IV</b>: beta-bloqueantes, evitar en broncoespasmo activo.<br/>
      • <b>Amiodarona IV</b>: alternativa en ICC donde calcioantagonistas/beta-bloqueantes son menos seguros.<br/>
      • <b>Digoxina IV</b>: inicio más lento, útil como adyuvante o en ICC con FA.<br/><br/>
      <b>ACCIÓN PRÁCTICA:</b><br/>
      • Verificar con farmacia hospitalaria la disponibilidad ANTES de necesitarlo en una emergencia.<br/>
      • Conocer el protocolo local de solicitud de medicación extranjera si no está en stock.
    `,

    controlFA: `
      <b>Diltiazem en Control de Frecuencia en FA/Flutter Auricular:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • FA o flutter auricular con respuesta ventricular rápida (FC > 110-120 lpm) causando síntomas o inestabilidad relativa.<br/>
      • Especialmente útil en: pacientes con FEVI conservada, contraindicación a beta-bloqueantes (asma/EPOC), angina coexistente.<br/><br/>
      <b>EVIDENCIA (guías ESC 2024, Clase I B):</b><br/>
      • Diltiazem IV es <b>MÁS EFICAZ que metoprolol IV</b> en el control agudo de FC en FA (meta-análisis recientes, OR 4.75 a favor de diltiazem).<br/>
      • Efecto prácticamente inmediato: la mayoría alcanza FC < 110 lpm o reducción > 20% en 3-7 minutos tras el bolo.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. <b>Bolo: 0.25 mg/kg IV en 2 minutos</b> (dosis media adulto ~20 mg).<br/>
      2. Si a los 15 minutos: FC sigue > 100 lpm Y PAS > 100 mmHg (o 90-100 sin mareo) → <b>segundo bolo: 0.35 mg/kg IV en 2 minutos</b> (~25 mg).<br/>
      3. Tras bolo(s) efectivo(s): <b>iniciar perfusión 5-15 mg/h</b>, titulando según FC objetivo.<br/>
      4. Si control inadecuado: considerar alternativas (metoprolol, digoxina, amiodarona IV) o cardioversión eléctrica según contexto.<br/><br/>
      <b>PACIENTE ARQUETÍPICO IDEAL:</b><br/>
      • FA permanente, FEVI conservada, sin insuficiencia cardíaca sistólica.<br/>
      • Angina de esfuerzo o vasoespástica coexistente.<br/>
      • Intolerancia a beta-bloqueantes (broncoespasmo, hipotensión, fatiga).<br/><br/>
      <b>EVITAR EN:</b><br/>
      • FA con preexcitación (WPW) - riesgo de conducción por vía accesoria.<br/>
      • Insuficiencia cardíaca sistólica descompensada (FEVI < 40%).<br/>
      • Hipotensión significativa de base.
    `,

    tsv: `
      <b>Diltiazem en Taquicardia Supraventricular Paroxística:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Alternativa a adenosina en TSV por reentrada nodal, especialmente si:<br/>
      &nbsp;&nbsp;- Recurrencia tras adenosina.<br/>
      &nbsp;&nbsp;- Se desea evitar los efectos transitorios desagradables de adenosina.<br/>
      &nbsp;&nbsp;- Uso concomitante de teofilina/cafeína (antagonizan adenosina).<br/><br/>
      <b>VENTAJA vs ADENOSINA:</b><br/>
      • Efecto más sostenido (no requiere repetir en segundos).<br/>
      • Sin los efectos transitorios intensos característicos de adenosina (sensación de muerte inminente, opresión torácica).<br/><br/>
      <b>DESVENTAJA vs ADENOSINA:</b><br/>
      • Inicio de acción más lento (minutos vs segundos).<br/>
      • Mayor riesgo de hipotensión sostenida.<br/><br/>
      <b>DOSIS:</b><br/>
      • Mismo protocolo que en FA/flutter: <b>0.25 mg/kg IV en 2 min</b>, repetir 0.35 mg/kg si necesario.<br/>
      • Alternativa (evidencia más limitada): infusión lenta 2.5 mg/min hasta máximo 50 mg total - descrita como eficaz en TSV específicamente.<br/><br/>
      <b>PRECAUCIÓN EN WPW:</b><br/>
      • Similar a otros bloqueantes del nodo AV, usar con precaución si se sospecha preexcitación con conducción antidrómica o FA preexcitada - riesgo de favorecer conducción por vía accesoria.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>Verificar disponibilidad real del producto</b> - en España puede requerir gestión de medicación extranjera.',
      'Calcular dosis exacta por peso: 0.25 mg/kg bolo inicial.',
      'Diluir a concentración MÁXIMA de 1 mg/mL.',
      'Etiquetar jeringa/bolsa: Diltiazem [mg], dosis (mg/kg), hora.',
      'Bolo IV en EXACTAMENTE 2 minutos.',
      'Bomba de infusión OBLIGATORIA para perfusión continua.',
      'Monitor continuo: ECG, PA, FC durante bolo y perfusión.',
      'Vigilar bradicardia, bloqueo AV, hipotensión.',
      '<b>NUNCA combinar con dantroleno</b>.',
      'Si toma digoxina: coordinar medición de digoxinemia.',
      'Vigilar función respiratoria (riesgo de broncoespasmo, aunque menor que beta-bloqueantes).',
      'No superar 15 mg/h en perfusión ni 24h de duración continua.',
      'Coordinar transición a tratamiento oral de mantenimiento.',
      'Documentar: dosis, hora, respuesta de FC/PA, eventos.',
    ],

    efectosAdversos: [
      '🔴 Bloqueo AV avanzado',
      '🔴 Bradicardia severa / paro sinusal',
      '🔴 Hipotensión severa',
      '🔴 Insuficiencia cardíaca aguda (en FEVI reducida)',
      '🔴 Fibrilación ventricular (SOLO si se combina con dantroleno - evitar)',
      '🟠 Broncoespasmo (agravamiento en hiperreactividad bronquial)',
      '🟠 Insuficiencia renal aguda (por hipoperfusión en cardiopatía de base)',
      '🟡 Cefalea, mareos',
      '🟡 Rubor facial',
      '🟡 Náuseas',
      '🟡 Edema periférico (uso prolongado)',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Elevación de glucemia en diabéticos (vigilar en diabetes latente/manifiesta)',
    ],

    contraindicaciones: [
      'Bloqueo AV de 2º-3º grado sin marcapasos ventricular funcionante.',
      'Hipotensión (PAS < 90 mmHg).',
      'IAM complicado (bradicardia, hipotensión severa, insuficiencia ventricular izquierda).',
      'Insuficiencia cardíaca congestiva con edema pulmonar o FEVI < 40%.',
      'Bradicardia grave (< 40 lpm habitualmente).',
      '<b>Uso concomitante con perfusión de dantroleno</b>.',
      'Combinación con ivabradina.',
      'Síndrome del nodo sinusal enfermo sin marcapasos.',
      'Fibrilación/flutter auricular con vía accesoria (WPW) - precaución extrema.',
    ],

    fotosensibilidad: 'Verificar información específica del producto disponible/importado.',

    estabilidad: {
      'Información general':        'Verificar ficha técnica específica del producto obtenido vía importación',
      'Dilución':                    'Diluir a máximo 1 mg/mL con SF 0.9% o SG 5%',
      'Recomendación general':      'Usar preferentemente de forma inmediata tras preparación',
    },

    presentaciones: [
      'Diltiazem inyectable - disponibilidad variable, gestionado como medicación extranjera en España (ej. Masdil® inyectable u otras marcas según país de origen de importación)',
      'Diltiazem oral: múltiples presentaciones y genéricos (comprimidos, cápsulas de liberación prolongada) - estas SÍ están ampliamente disponibles en España',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Bolo inicial (FA/flutter, TSV)',        dosis: '<b>0.25 mg/kg IV en 2 minutos</b>',         via: 'IV' },
      { indicacion: 'Segundo bolo (si no respuesta en 15 min)',dosis:'<b>0.35 mg/kg IV en 2 minutos</b>',        via: 'IV' },
      { indicacion: 'Perfusión de mantenimiento',              dosis: '<b>5-15 mg/h IV</b>',                        via: 'IV' },
      { indicacion: 'DOSIS MÁXIMA perfusión',                  dosis: '15 mg/h',                                    via: 'IV' },
      { indicacion: 'DURACIÓN MÁXIMA',                          dosis: 'No superar 24 horas continuas',             via: 'IV' },
      { indicacion: 'Infusión lenta alternativa (TSV)',        dosis: '2.5 mg/min hasta máx 50 mg total',          via: 'IV' },
      { indicacion: 'Pediátrico',                               dosis: '0.25 mg/kg bolo + perfusión 0.1-0.25 mg/kg/h (máx 15 mg/h)',via: 'IV' },
    ],

    embarazo: 'Datos limitados en embarazo humano. Uso solo si claramente indicado en emergencia materna (arritmia sintomática). Diltiazem oral se excreta en leche materna - considerar en lactancia.',

    pediatria: 'Bolo IV: 0.25 mg/kg en 2 minutos. Si no respuesta en 15 min: 0.35 mg/kg en 2 min. Perfusión: 0.1-0.25 mg/kg/h (máximo 15 mg/h). Diluir en SF o SG5% a concentración máxima de 1 mg/mL. Sin ajuste en insuficiencia renal. En insuficiencia hepática: reducir dosis (en cirrosis no superar 90 mg/día de forma oral equivalente).',

    adultoMayor: 'Concentraciones plasmáticas pueden aumentar en ancianos - mayor vigilancia de bradicardia/hipotensión. Considerar dosis en rango inferior inicialmente.',

    insufRenal: 'No requiere ajuste específico de dosis según Pediamécum/ficha técnica de referencia. Vigilancia clínica estándar.',

    insufHepatica: 'Reducir dosis - en cirrosis, no exceder 90 mg/día (equivalente oral). Concentraciones plasmáticas pueden aumentar significativamente. Vigilancia clínica intensiva.',
  },

  nivel4: {
    referencias: [
      'AEMPS. Nota Informativa - Suministro de Diltiazem Inyectable como Medicación Extranjera. 2012 (vigente).',
      'CIMA AEMPS. Fichas Técnicas Diltiazem oral (Sandoz, Stada, Alter, Dermogen) - referencia farmacológica.',
      'Pediamécum AEP. Diltiazem. Asociación Española de Pediatría.',
      'Cardioteca. Diltiazem: Evidencia y Práctica Clínica. 2025-2026.',
      'ESC Guidelines. Atrial Fibrillation Management. Eur Heart J. 2024.',
      'Bolton Meta-analysis. IV Diltiazem vs Metoprolol for AF Rate Control. 2024.',
      'RATAF II Trial / Enge 2024. Permanent AF Rate Control Comparison.',
      'FDA DailyMed. Diltiazem Hydrochloride Injection (referencia internacional).',
    ],
  },

});
