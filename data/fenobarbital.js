/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/fenobarbital.js
   Fuentes: CIMA AEMPS (Luminal), FDA DailyMed,
   VA Cooperative Study NEJM 1998, ESETT 2019,
   AAN/AES Status Epilepticus Guidelines 2023
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'fenobarbital',
  nombre:         'Fenobarbital',
  nombreGenerico: 'Phenobarbital',
  categoria:      'otros',
  tags:           ['antiepiléptico', 'barbitúrico', 'estatus epiléptico', 'neonato', 'controlado', 'depresión respiratoria', 'neurología'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Barbitúrico de alto riesgo. Velocidad máxima IV: 100 mg/min en adultos, 30 mg/min en niños — excederla causa parada cardiorrespiratoria. pH alcalino 9-10: la extravasación produce necrosis tisular. Sustancia controlada — registro en libro de estupefacientes obligatorio.',

  nivel1: {

    puntosClave: [
      '<b>Estatus epiléptico refractario</b> (3ª línea): 20 mg/kg IV (máx 1000 mg) a ≤<b>100 mg/min</b> en adultos.',
      'pH muy alcalino (9-10) — <b>necrosis grave por extravasación</b>: verificar vía SIEMPRE antes de administrar.',
      '<b>DEPRESIÓN RESPIRATORIA</b> grave — monitorización cardiorrespiratoria continua obligatoria. Equipo de ventilación preparado.',
      '<b>Sustancia psicotrópica controlada</b> — registro en libro de estupefacientes con doble firma.',
      '<b>Inductor potente CYP450</b> — reduce eficacia de warfarina, anticonceptivos, antirretrovirales y muchos otros.',
    ],

    resumenRapido: 'Barbitúrico antiepiléptico de acción prolongada. Potencia el GABA-A (aumenta duración de apertura del canal de cloro) y bloquea receptores AMPA del glutamato a dosis altas. De elección en estatus epiléptico neonatal. En adultos: 3ª línea en estatus refractario tras benzodiacepinas + antiepiléptico de 2ª generación. Inductor potente de CYP450 con múltiples interacciones.',

    objetivoTerapeutico: 'Control de estatus epiléptico refractario · Mantenimiento antiepiléptico en neonatos y lactantes · Cese de crisis neonatales · Profilaxis de abstinencia a alcohol/BZD (2ª línea)',

    preparacion: {
      'Presentación':          '<b>Luminal® 200 mg/mL — ampolla 1 mL (200 mg)</b>',
      'Diluyente estatus':     '<b>SF 0.9% — concentración final ≤ 15 mg/mL</b>',
      'Dosis carga estatus':   '<b>20 mg/kg IV (máx 1000 mg)</b> diluido en SF',
      'Velocidad máxima adulto': '<b>≤ 100 mg/min — NUNCA más rápido</b>',
      'Velocidad máxima niños':  '≤ 30 mg/min',
      'Mantenimiento':         '1-3 mg/kg/día en 1-2 dosis IV u oral',
      'Vía':                   'IV (periférica de buen flujo o central) · IM (solo si sin acceso IV)',
      '⏱️ TIEMPO INFUSIÓN':    '<b>Controlado por velocidad máxima — NO reducir tiempo</b>',
      'Bomba':                  '<b>Bomba de infusión OBLIGATORIA</b> (control exacto de velocidad)',
      '🧊 Estabilidad':         '<b>24 horas a temperatura ambiente en SF 0.9% · Proteger de luz</b>',
    },

    vigilancia: {
      antes: [
        'Verificar permeabilidad de la vía IV — pH alcalino 9-10 causa necrosis grave si extravasación.',
        'Preparar equipo de ventilación (ambú, laringoscopio, tubo) ANTES de iniciar la infusión.',
        'ECG basal y monitorización cardiorrespiratoria continua activada.',
        'Confirmar que es la 3ª línea del estatus epiléptico (tras BZD + antiepiléptico 2ª gen).',
        'Registro en libro de estupefacientes: doble firma antes de retirar el fármaco.',
        'Revisar medicación habitual: warfarina, anticonceptivos, antirretrovirales (interacciones).',
      ],
      durante: [
        'Controlar velocidad de infusión con bomba — límite estricto ≤100 mg/min en adultos.',
        'FC, TA y SpO2 cada 5 minutos durante la infusión.',
        'Vigilar nivel de consciencia y frecuencia respiratoria.',
        'Observar punto de punción: si extravasación — DETENER inmediatamente.',
        'Vigilar actividad convulsiva — registrar si ceden las crisis.',
        'Si FR <10 rpm o SpO2 <90%: reducir velocidad e informar al médico urgentemente.',
      ],
      despues: [
        'Monitorización continua durante al menos 2 h tras la dosis de carga.',
        'Vigilar depresión respiratoria tardía — vida media muy larga (75-120 h).',
        'Niveles plasmáticos a las 12-24 h si carga IV: rango terapéutico 15-40 mg/L.',
        'Función hepática periódica en tratamiento crónico (inductor enzimático).',
        'Revisar eficacia antiepiléptica: frecuencia y tipo de crisis.',
        'Documentar dosis, hora, velocidad de administración, respuesta y efectos adversos.',
      ],
      suspender: [
        'NUNCA suspender bruscamente en epilepsia crónica — retirada gradual obligatoria (semanas-meses).',
        'Apnea o paro respiratorio — ventilación mecánica inmediata (no hay antídoto farmacológico).',
        'Hipotensión grave refractaria.',
        'Crisis de porfiria aguda (contraindicación absoluta).',
        'Completado el tratamiento del estatus epiléptico — pasar a mantenimiento oral.',
      ],
    },

    incompatibilidades: [
      '<b>Fenitoína — precipita en misma solución</b>.',
      'Morfina, codeína, meperidina — incompatibilidad física.',
      'Midazolam — incompatibilidad (aunque pueden administrarse secuencialmente en Y).',
      'La mayoría de fármacos IV — <b>pH extremadamente alcalino (9-10) incompatible</b>.',
      'Usar vía exclusiva — lavar con SF 0.9% antes y después.',
    ],

    alertasSeguridad: [
      '🔴 VELOCIDAD MÁXIMA 100 mg/min adultos — superarla puede causar parada cardiorrespiratoria.',
      '🔴 NECROSIS TISULAR por extravasación (pH 9-10) — verificar vía antes de cada dosis.',
      '🔴 DEPRESIÓN RESPIRATORIA — tener ventilación manual preparada siempre.',
      '🔴 PORFIRIA AGUDA: contraindicación absoluta — induce síntesis del hemo.',
      '🟠 Inductor potente CYP450 — revisar interacciones con todos los fármacos crónicos.',
      '🟠 Sustancia controlada — registro obligatorio en libro de estupefacientes.',
      '🟡 Sedación prolongada por T½ de 75-120 h.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar permeabilidad de la vía con SF ANTES de administrar — no asumir que fluye bien.',
      'Preparar equipo completo de ventilación y resucitación antes de iniciar.',
      'Programar bomba a la velocidad exacta — respetar límite de 100 mg/min en adultos.',
      'Si extravasación: detener infusión, NO retirar catéter, inyectar SF para diluir, elevar extremidad.',
      'Registro doble en libro de estupefacientes (administración + firma de otro profesional).',
      'Control de SpO2, FR y nivel de consciencia cada 5 min durante infusión.',
      'No mezclar con otros fármacos — pH alcalino incompatible con casi todo.',
      'Advertir al médico de los fármacos crónicos que el paciente toma (interacciones CYP450).',
      'En epilepsia crónica: planificar siempre la retirada gradual — nunca suspender bruscamente.',
      'Documentar exhaustivamente: hora, dosis, velocidad, respuesta clínica y efectos adversos.',
    ],

    efectosAdversos: [
      '🔴 Depresión respiratoria / apnea (especialmente combinado con opioides o BZD)',
      '🔴 Parada cardiorrespiratoria por infusión rápida',
      '🔴 Necrosis tisular por extravasación',
      '🔴 Porfiria aguda (si hay predisposición genética)',
      '🟠 Hipotensión con infusión rápida',
      '🟠 Síndrome de Stevens-Johnson (raro pero grave)',
      '🟠 Tolerancia y dependencia física con uso crónico',
      '🟡 Sedación excesiva, ataxia, nistagmo',
      '🟡 Elevación de transaminasas (inductor hepático)',
    ],

    contraindicaciones: [
      'Porfiria aguda intermitente y variegata.',
      'Hipersensibilidad a barbitúricos.',
      'Depresión respiratoria grave preexistente sin soporte ventilatorio.',
      'Insuficiencia hepática grave.',
      'Precaución severa: combinación con depresores del SNC (opioides, benzodiacepinas, alcohol).',
    ],

    fotosensibilidad: 'Sí — fotosensible. Proteger de la luz. Conservar en envase opaco. La solución preparada debe protegerse de exposición directa a luz intensa.',

    estabilidad: {
      'Ampolla sin abrir':    'Temperatura ambiente (<25°C), protegida de luz',
      'Diluida en SF 0.9%':  '<b>24 horas a temperatura ambiente · Proteger de luz</b>',
      'Aspecto':              'Incolora — desechar si precipitación o turbidez',
      'Temperatura':          'NO congelar · NO refrigerar la solución preparada',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente — desechar sobrante de ampolla abierta.',
      dosisRestante:     'No reutilizar sobrante. Registrar destrucción en libro de estupefacientes.',
      infusionPreparada: '24 h en SF 0.9% a temperatura ambiente, protegida de luz.',
      notas:             'Fotosensible. Conservar ampollas a temperatura ambiente. Si precipitación visible → desechar. No mezclar con prácticamente ningún fármaco por su pH de 9-10.',
    },

    presentaciones: [
      'Luminal® 200 mg/mL — ampolla 1 mL (200 mg)',
      'Gardenal® 200 mg/mL — ampolla 1 mL',
      'Fenobarbital Bama-Geve® — ampolla 200 mg/mL',
      'Uso oral: Fenobarbital 50 mg / 100 mg comprimidos (genéricos)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Estatus epiléptico adulto (carga)', dosis: '<b>20 mg/kg IV a ≤100 mg/min (máx 1000 mg)</b>', via: 'IV' },
      { indicacion: 'Estatus refractario (2ª dosis)',     dosis: '5-10 mg/kg IV si persiste (máx 30 mg/kg total)', via: 'IV' },
      { indicacion: 'Estatus neonatal (carga)',            dosis: '20 mg/kg IV (máx 40 mg/kg con dosis adicionales)', via: 'IV' },
      { indicacion: 'Mantenimiento adulto (epilepsia)',    dosis: '60-200 mg/día en 1-2 dosis (1-3 mg/kg/día)',    via: 'IV/VO' },
      { indicacion: 'Mantenimiento neonato',               dosis: '3-5 mg/kg/día IV u oral',                        via: 'IV/VO' },
      { indicacion: 'Mantenimiento niño',                  dosis: '3-6 mg/kg/día en 1-2 dosis',                    via: 'VO' },
    ],

    embarazo: 'Categoría D (FDA). Teratógeno conocido (labio leporino, cardiopatías). Riesgo de hemorragia neonatal (vitamina K al recién nacido). Monitorizar niveles durante embarazo (aumento aclaramiento). Usar solo si beneficio supera riesgo (epilepsia grave sin alternativa).',

    pediatria: 'Estatus neonatal: 20 mg/kg IV a ≤30 mg/min. Repetir 5 mg/kg si persiste hasta máx 40 mg/kg. Mantenimiento neonatal: 3-5 mg/kg/día. Niños: 3-6 mg/kg/día dividido 1-2 dosis. Monitorizar niveles (mayor variabilidad en pediatría). Puede causar hiperactividad paradójica en niños.',

    adultoMayor: 'Mayor riesgo de sedación excesiva, caídas y confusión. Reducir dosis de mantenimiento 30-50%. Monitorizar niveles con más frecuencia. T½ puede prolongarse significativamente.',

    insufRenal: 'Elimina 25-50% sin cambios por vía renal. En IR grave: reducir dosis, vigilar acumulación. Monitorizar niveles plasmáticos más estrechamente.',

    insufHepatica: 'En IH grave: reducir significativamente. El fenobarbital mismo es inductor hepático — puede agravar el daño o enmascarar la evolución. Niveles plasmáticos obligatorios.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Luminal® inyectable (fenobarbital).',
      'Treiman DM et al. A comparison of four treatments for generalized convulsive status epilepticus. NEJM. 1998 (VA Cooperative Study).',
      'Kapur J et al. ESETT Trial. NEJM. 2019.',
      'Pressler RM et al. Phenobarbital vs levetiracetam for neonatal seizures. Lancet Neurol. 2021.',
      'AAN/AES Guidelines on Status Epilepticus in Adults. Neurology. 2023.',
      'Shorvon S et al. The drug treatment of status epilepticus in Europe. Epilepsia. 2018.',
    ],
  },

});
