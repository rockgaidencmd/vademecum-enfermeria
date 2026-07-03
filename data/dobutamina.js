/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/dobutamina.js
   Fuentes: CIMA AEMPS (Dobutamina Hospira, Hikma),
   FDA DailyMed, Surviving Sepsis 2021, ESC HF Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'dobutamina',
  nombre:         'Dobutamina',
  nombreGenerico: 'Dobutamine Hydrochloride',
  categoria:      'vasopresores',
  tags:           ['inotrópico', 'shock cardiogénico', 'insuficiencia cardíaca', 'bajo gasto', 'ecocardiografía estrés', 'UCI'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Inotrópico simpaticomimético. Riesgo de taquiarritmias, isquemia miocárdica por aumento de demanda de O2. Corregir hipovolemia ANTES de iniciar. Contraindicado en estenosis subaórtica hipertrófica idiopática y obstrucción severa del tracto de salida.',

  nivel1: {

    puntosClave: [
      'Catecolamina sintética — <b>agonista beta-1 predominante</b> (inotrópico +++, cronotrópico +) con efecto beta-2/alfa-1 mínimo — <b>AUMENTA CONTRACTILIDAD sin vasoconstricción significativa</b>.',
      'Fármaco de elección para <b>SOPORTE INOTRÓPICO en bajo gasto cardíaco</b> (IC descompensada, shock cardiogénico, post-cirugía cardíaca) — a diferencia de noradrenalina/dopamina que priorizan vasoconstricción.',
      '<b>CORREGIR HIPOVOLEMIA ANTES de iniciar</b> — dobutamina en paciente hipovolémico puede empeorar la hipotensión.',
      'Extravasación: <b>NO requiere medidas especiales</b> (a diferencia de noradrenalina) — no causa vasoconstricción/isquemia local significativa.',
      'Uso adicional: <b>ecocardiografía de estrés farmacológico</b> (detección de isquemia/viabilidad miocárdica) en pacientes que no pueden hacer ejercicio.',
    ],

    resumenRapido: 'Catecolamina sintética con efecto predominantemente beta-1 adrenérgico (inotrópico positivo potente, cronotrópico moderado), con mínimo efecto vascular directo (leve beta-2 vasodilatador que compensa el discreto alfa-1). El resultado neto es AUMENTO DEL GASTO CARDÍACO sin cambios significativos en la PA (a veces incluso ligero descenso de poscarga). Inicio: 1-2 min · Vida media: 2 min · Duración: minutos tras suspender. Indicado en: shock cardiogénico, insuficiencia cardíaca descompensada con bajo gasto (especialmente con presión capilar pulmonar elevada), soporte post-cirugía cardíaca, shock séptico con disfunción miocárdica asociada (combinado con vasopresor), ecocardiografía de estrés farmacológico.',

    objetivoTerapeutico: 'Aumentar gasto cardíaco y contractilidad miocárdica · Mejorar perfusión tisular en bajo gasto · Soporte hemodinámico en shock cardiogénico · Detección de isquemia miocárdica (uso diagnóstico)',

    preparacion: {
      'Presentación':             '<b>Dobutamina 12.5 mg/mL - vial 20 mL (250 mg)</b> - concentrado para perfusión',
      'Diluyente':                'SG 5% · SF 0.9% · SG5%+SF0.45% · Ringer Lactato (todos compatibles)',
      'Dilución estándar':        '<b>250 mg (20 mL) en 250 mL SG5%/SF → 1 mg/mL (1000 mcg/mL)</b>',
      'Dilución concentrada (restricción líquidos)':'250 mg en 100 mL → 2.5 mg/mL',
      '⚠️ CONCENTRACIÓN MÁXIMA':  '<b>NO superar 5 mg/mL (5000 mcg/mL)</b>',
      'Vía':                      'IV exclusiva - vena central preferida (periférica aceptable a corto plazo)',
      '⏱️ DOSIS INICIAL':         '<b>2.5-10 mcg/kg/min IV continua</b>',
      '⏱️ DOSIS MÍNIMA EFECTIVA': 'Ocasionalmente 0.5 mcg/kg/min es suficiente',
      '⏱️ DOSIS MÁXIMA habitual': '<b>10-20 mcg/kg/min</b> (raramente necesarias dosis mayores, hasta 40 mcg/kg/min descrito)',
      '⏱️ Ajuste':                 'Según FC, PA, gasto cardíaco, diuresis - titular cada 10-15 min',
      '⏱️ ECOCARDIOGRAFÍA ESTRÉS':'Protocolo escalonado: 5-10-20-30-40 mcg/kg/min cada 3-5 min',
      'Bomba':                    'OBLIGATORIA - infusión continua precisa en mcg/kg/min',
      '🧊 ESTABILIDAD':           '<b>24 horas a 25°C (temperatura ambiente)</b> tras dilución',
      'Aspecto':                  'Solución transparente, incolora a ligeramente rosada — puede oscurecer ligeramente sin pérdida significativa de potencia (verificar antes de usar si muy oscura)',
    },

    vigilancia: {
      antes: [
        '<b>CORREGIR HIPOVOLEMIA</b> antes de iniciar - dobutamina en paciente hipovolémico empeora hipotensión.',
        'PA, FC, ECG basales.',
        'Evaluar función cardíaca (ecocardiograma si disponible).',
        'Revisar antecedentes: estenosis subaórtica hipertrófica idiopática, arritmias previas.',
        'Acceso IV de buen calibre - preferir central si dosis altas o uso prolongado.',
        'Doble verificación: dosis, dilución, velocidad.',
      ],
      durante: [
        'Monitor continuo: ECG, PA, FC.',
        'Vigilar TAQUIARRITMIAS - efecto dosis-dependiente.',
        'Vigilar signos de ISQUEMIA MIOCÁRDICA (dobutamina aumenta demanda de O2).',
        'Titular según respuesta clínica: FC, PA, gasto cardíaco, diuresis, perfusión periférica.',
        'Si extravasación: NO requiere medidas especiales (a diferencia de noradrenalina) - sin vasoconstricción local significativa.',
        'En infusión prolongada (48-72h): vigilar TAQUIFILAXIA (disminución del efecto, puede requerir ↑ dosis).',
        'Vigilar hipotensión paradójica en algunos pacientes (efecto beta-2 vasodilatador predomina).',
      ],
      despues: [
        'Continuar monitor tras finalizar la perfusión hasta estabilización completa.',
        'Vigilar reaparición de bajo gasto al suspender - considerar destete gradual.',
        'Evaluar respuesta clínica global: mejoría de perfusión, diuresis, estado mental.',
        'Documentar: dosis, duración, respuesta hemodinámica, arritmias, eventos.',
      ],
      suspender: [
        'Taquiarritmia severa (TV, FA con RVR significativa).',
        'Isquemia miocárdica aguda atribuible.',
        'Hipotensión severa paradójica.',
        'Mejoría hemodinámica sostenida que permite destete.',
        'Reacción alérgica (rara - rash, prurito, disnea).',
      ],
    },

    incompatibilidades: [
      'Soluciones alcalinas (bicarbonato sódico) - INACTIVACIÓN.',
      'NO usar con otros agentes/diluyentes que contengan bisulfito, o soluciones alcalinas fuertes.',
      'Furosemida - precipitación en Y-site.',
      'Heparina - verificar compatibilidad.',
      'Insulina - verificar antes de mezclar.',
      'Aminofilina - incompatibilidad.',
      'Preferir línea IV independiente.',
      'Lavar línea con SF antes y después de fármacos incompatibles.',
    ],

    alertasSeguridad: [
      '🔴 <b>CORREGIR HIPOVOLEMIA ANTES</b> de iniciar - empeora hipotensión si no corregida.',
      '🔴 <b>CONTRAINDICADO en estenosis subaórtica hipertrófica idiopática</b> y obstrucción severa del tracto de salida del VI.',
      '🟠 Taquiarritmias dosis-dependientes - vigilar ECG continuo.',
      '🟠 Aumenta demanda de O2 miocárdico - riesgo de isquemia en cardiopatía coronaria.',
      '🟠 <b>Precaución en shock cardiogénico con PAM < 70 mmHg</b> - considerar asociar vasopresor.',
      '🟠 TAQUIFILAXIA en infusiones prolongadas (48-72h) - puede requerir aumento de dosis.',
      '🟡 Extravasación: NO requiere medidas especiales (sin vasoconstricción local significativa) - a diferencia de aminas vasoconstrictoras.',
      '🟡 En shock séptico: dopamina/noradrenalina son de elección para hipotensión - dobutamina se AÑADE si hay disfunción miocárdica asociada.',
      '🟡 Riesgo de rotura cardíaca en ecocardiografía de estrés en pacientes de alto riesgo - evaluar cuidadosamente antes del test.',
      '🟡 Contiene bajo contenido de sodio - prácticamente "libre de sodio" (relevante en restricción estricta).',
    ],
  },

  modulos: {

    shockCardiogenico: `
      <b>Dobutamina en Shock Cardiogénico:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Shock cardiogénico con disfunción sistólica predominante.<br/>
      • Gasto cardíaco bajo con presión capilar pulmonar (PCP) elevada.<br/>
      • Post-IAM con fallo de bomba.<br/>
      • Post-cirugía cardíaca con bajo gasto.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. <b>PRIMERO: corregir hipovolemia</b> si presente (fluidos cautelosos, guiados por PCP/ecocardiograma).<br/>
      2. <b>Iniciar dobutamina 2.5-5 mcg/kg/min</b>.<br/>
      3. Titular según gasto cardíaco, PA, diuresis (objetivo: PAM > 65, diuresis > 0.5 mL/kg/h).<br/>
      4. <b>Si PAM < 70 mmHg con shock cardiogénico</b>: asociar NORADRENALINA (dobutamina sola puede no ser suficiente para mantener PA).<br/>
      5. Dosis típica de mantenimiento: 5-10 mcg/kg/min.<br/><br/>
      <b>COMBINACIÓN CLÁSICA EN SHOCK CARDIOGÉNICO:</b><br/>
      • <b>Dobutamina + Noradrenalina</b>: dobutamina aporta inotropismo, noradrenalina mantiene PA.<br/>
      • Alternativa: dobutamina + balón de contrapulsación intraaórtico (BCIA) en casos refractarios.<br/>
      • Considerar asistencia ventricular mecánica (ECMO, Impella) si refractario.<br/><br/>
      <b>MONITORIZACIÓN AVANZADA:</b><br/>
      • Catéter de arteria pulmonar (Swan-Ganz) si disponible - guía objetiva de PCP y gasto cardíaco.<br/>
      • Ecocardiografía seriada.<br/>
      • Lactato sérico como marcador de perfusión tisular.
    `,

    shockSeptico: `
      <b>Dobutamina en Shock Séptico con Disfunción Miocárdica:</b><br/>
      <b>CONTEXTO (Surviving Sepsis 2021):</b><br/>
      • Noradrenalina es el VASOPRESOR DE PRIMERA LÍNEA en shock séptico.<br/>
      • Dobutamina se AÑADE cuando hay evidencia de disfunción miocárdica (cardiomiopatía séptica) con hipoperfusión persistente a pesar de fluidos y vasopresor adecuados.<br/><br/>
      <b>INDICACIÓN DE AÑADIR DOBUTAMINA:</b><br/>
      • Signos de hipoperfusión persistente (lactato elevado, relleno capilar prolongado) A PESAR de:<br/>
      &nbsp;&nbsp;- Resucitación con fluidos adecuada.<br/>
      &nbsp;&nbsp;- Noradrenalina a dosis adecuada para PAM objetivo.<br/>
      • Evidencia ecocardiográfica de disfunción sistólica (FEVI reducida, gasto cardíaco bajo).<br/><br/>
      <b>PROTOCOLO:</b><br/>
      • <b>Añadir dobutamina 2.5-10 mcg/kg/min</b> a la noradrenalina ya en curso.<br/>
      • NO usar dobutamina como monoterapia en shock séptico (sin efecto vasopresor significativo, puede empeorar hipotensión).<br/>
      • Titular según lactato, gasto cardíaco, perfusión clínica.<br/><br/>
      <b>PRECAUCIÓN:</b><br/>
      • Vigilar taquiarritmias (frecuentes en sepsis con ya cierto grado de inestabilidad eléctrica).<br/>
      • No sustituye el control del foco infeccioso ni antibioticoterapia adecuada.
    `,

    ecoEstres: `
      <b>Dobutamina en Ecocardiografía de Estrés:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Detección de isquemia miocárdica en pacientes que NO PUEDEN realizar ejercicio físico (limitación ortopédica, vascular periférica, deconditioning).<br/>
      • Evaluación de viabilidad miocárdica (miocardio hibernado) antes de revascularización.<br/><br/>
      <b>PROTOCOLO ESCALONADO:</b><br/>
      • Dosis incrementales cada 3-5 minutos: <b>5 → 10 → 20 → 30 → 40 mcg/kg/min</b>.<br/>
      • Monitorización continua: ECG de 12 derivaciones, PA, ecocardiograma en cada escalón.<br/>
      • Se puede añadir atropina (0.25-1 mg IV) si no se alcanza el 85% de la FC máxima predicha con dobutamina sola.<br/><br/>
      <b>CRITERIOS DE DETENCIÓN:</b><br/>
      • Alcanzar FC objetivo (85% de la máxima predicha por edad).<br/>
      • Nueva anomalía de la motilidad segmentaria (signo de isquemia).<br/>
      • Síntomas limitantes (dolor torácico significativo).<br/>
      • Arritmia significativa.<br/>
      • Caída de PA > 20 mmHg o HTA severa (> 220/120).<br/><br/>
      <b>PRECAUCIÓN ESPECIAL:</b><br/>
      • <b>Evaluar cuidadosamente el riesgo de rotura cardíaca</b> en pacientes de alto riesgo antes de la prueba (IAM reciente, aneurisma ventricular).<br/>
      • Tener disponible: betabloqueante de acción corta (esmolol) para revertir efectos si necesario, equipo de reanimación.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar presentación 12.5 mg/mL y calcular dilución.',
      '<b>NO superar concentración de 5 mg/mL</b> al diluir.',
      'Etiquetar bolsa: Dobutamina [mg], concentración, velocidad (mcg/kg/min), hora.',
      'Bomba de infusión OBLIGATORIA.',
      '<b>Corregir hipovolemia ANTES de iniciar</b> (coordinar con médico).',
      'Preferir vía central si dosis altas o uso prolongado; periférica aceptable a corto plazo.',
      'Monitor continuo: ECG, PA, FC.',
      'Vigilar taquiarritmias - efecto dosis-dependiente.',
      'Titular según objetivo: FC, PA, gasto cardíaco, diuresis, perfusión periférica.',
      'En extravasación: NO requiere medidas especiales (sin necrosis por vasoconstricción).',
      'En infusión > 48-72h: vigilar taquifilaxia (puede requerir aumento de dosis).',
      'Si se combina con noradrenalina: usar líneas separadas o en Y verificando compatibilidad.',
      'Al suspender: destete gradual si es posible, vigilar reaparición de bajo gasto.',
      'Documentar: dosis, velocidad, hora, respuesta hemodinámica, eventos.',
    ],

    efectosAdversos: [
      '🔴 Taquiarritmias (TV, FA, extrasístoles)',
      '🔴 Isquemia miocárdica (↑ demanda de O2)',
      '🔴 Hipotensión paradójica',
      '🟠 Hipertensión (dosis altas)',
      '🟠 Angina/dolor torácico',
      '🟠 Palpitaciones',
      '🟡 Náuseas',
      '🟡 Cefalea',
      '🟡 Temblor',
      '🟡 Ansiedad',
      '🟡 Disnea',
      '🟡 Eosinofilia (uso prolongado, raro)',
      '🟡 Reacción alérgica local (rash, prurito) - rara',
      '🟡 Taquifilaxia en infusión prolongada (48-72h)',
    ],

    contraindicaciones: [
      'Estenosis subaórtica hipertrófica idiopática.',
      'Obstrucción mecánica severa del tracto de salida del ventrículo izquierdo.',
      'Hipersensibilidad a dobutamina (incluyendo sulfitos en algunas formulaciones).',
      'Taquiarritmias no controladas (relativa - usar con extrema precaución).',
      'Hipovolemia NO corregida (relativa - corregir antes o simultáneamente).',
    ],

    fotosensibilidad: 'No relevante. La solución puede oscurecerse ligeramente con el tiempo sin pérdida significativa de potencia, pero debe desecharse si hay cambio de color marcado o precipitación.',

    estabilidad: {
      'Vial sin abrir':            'Temperatura ambiente hasta vencimiento',
      'Diluida en SF/SG5%/RL':     '<b>24 horas a 25°C (temperatura ambiente)</b>',
      'Aspecto':                    'Transparente, incolora a ligeramente rosada — puede oscurecer ligeramente (aceptable), desechar si turbidez marcada',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Dobutamina Hospira 12.5 mg/mL - vial 20 mL (250 mg)',
      'Dobutamina Hikma 12.5 mg/mL - vial 20 mL (250 mg)',
      'Dobutamina genéricos varios 12.5 mg/mL',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis inicial estándar',                dosis: '<b>2.5-10 mcg/kg/min IV</b>',               via: 'IV' },
      { indicacion: 'Dosis mínima ocasional',                 dosis: '0.5 mcg/kg/min',                             via: 'IV' },
      { indicacion: 'Dosis máxima habitual',                  dosis: '10-20 mcg/kg/min (raramente hasta 40)',     via: 'IV' },
      { indicacion: 'Shock cardiogénico',                     dosis: '2.5-10 mcg/kg/min (titular)',                via: 'IV' },
      { indicacion: 'Shock séptico (adyuvante)',               dosis: '2.5-10 mcg/kg/min + noradrenalina',         via: 'IV' },
      { indicacion: 'Ecocardiografía de estrés',              dosis: 'Escalonado 5-10-20-30-40 mcg/kg/min',       via: 'IV' },
      { indicacion: 'Pediátrico (todas las edades)',           dosis: '2.5-10 mcg/kg/min (ajustar según respuesta)',via: 'IV' },
    ],

    embarazo: 'Sin categoría específica establecida claramente. Estudios en animales (ratas, conejos) no revelaron daño fetal ni efecto teratogénico. Uso en emergencias maternas si claramente indicado (shock). Datos limitados en humanos - usar si beneficio > riesgo.',

    pediatria: 'Indicada en TODOS los grupos de edad pediátrica (desde neonatos hasta 18 años). Dosis similar a adultos: 2.5-10 mcg/kg/min. <b>Diferencias importantes</b>: aumentos de FC y PA más frecuentes e intensos en niños; presión de enclavamiento pulmonar puede AUMENTAR en lactantes < 1 año (en vez de disminuir como en adultos); sistema cardiovascular neonatal menos sensible.',

    adultoMayor: 'Sin ajuste específico de dosis. Mayor riesgo de taquiarritmias e isquemia miocárdica (mayor prevalencia de cardiopatía coronaria). Vigilancia ECG intensiva.',

    insufRenal: 'Sin ajuste específico de dosis - metabolismo hepático principalmente. Vigilancia clínica estándar.',

    insufHepatica: 'Sin ajuste específico establecido, aunque el metabolismo es hepático - vigilar respuesta clínica en hepatopatía severa.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Dobutamina Hospira 12.5 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Dobutamina Hikma 12.5 mg/mL. AEMPS.',
      'FDA DailyMed. Dobutamine Hydrochloride Injection. U.S. National Library of Medicine.',
      'Surviving Sepsis Campaign Guidelines 2021. Crit Care Med.',
      'ESC Guidelines. Acute and Chronic Heart Failure. Eur Heart J. 2021.',
      'ACC/AHA Guidelines. Cardiogenic Shock Management. Circulation. 2022.',
      'ASE Guidelines. Stress Echocardiography. J Am Soc Echocardiogr. 2020.',
      'Pediamécum AEP. Dobutamina. Asociación Española de Pediatría.',
    ],
  },

});
