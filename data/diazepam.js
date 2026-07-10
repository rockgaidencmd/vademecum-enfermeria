/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/diazepam.js
   Fuentes: CIMA AEMPS (Valium), FDA DailyMed,
   Neurocritical Care Society Status Epilepticus 2023,
   SEMICYUC Sedoanalgesia UCI 2022
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'diazepam',
  nombre:         'Diazepam',
  nombreComercial: 'Valium®',
  nombreGenerico: 'Diazepam',
  categoria:      'otros',
  tags:           ['benzodiacepina', 'estatus epiléptico', 'ansiedad', 'relajante muscular', 'abstinencia alcohol', 'sedación', 'convulsiones'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Depresor del SNC de acción prolongada con metabolito activo (desmetildiazepam, vida media hasta 100 h). Riesgo de depresión respiratoria, especialmente combinado con opioides o alcohol. La formulación IV contiene propilenglicol — irritante venoso, riesgo de flebitis y tromboflebitis. Sustancia controlada.',

  nivel1: {

    puntosClave: [
      '<b>Estatus epiléptico</b>: 10 mg IV lento (2-5 mg/min) — repetir a los 5-10 min si no cede (máx 30 mg).',
      '<b>Vida media muy larga</b> (20-100 h con metabolito activo) — efecto acumulativo y sedación residual prolongada.',
      '<b>Irritante venoso</b>: usar vena de buen calibre, infundir lento — riesgo de flebitis y dolor en la inyección.',
      '<b>Relajante muscular</b>: espasmo muscular, tétanos, síndrome de abstinencia alcohólica.',
      'Vía rectal disponible para crisis convulsivas en domicilio (pediatría, paliativos) cuando no hay acceso IV.',
    ],

    resumenRapido: 'Benzodiacepina clásica de acción prolongada. Potencia la inhibición GABAérgica en el SNC. Su metabolito activo (desmetildiazepam) prolonga el efecto hasta varios días, lo que lo diferencia de midazolam (acción corta) y lorazepam (sin metabolito activo). Indicado en estatus epiléptico como alternativa a lorazepam, relajación muscular en espasmos y tétanos, ansiolisis, sedación previa a procedimientos y manejo de la abstinencia alcohólica grave (protocolo CIWA-Ar). La formulación IV es irritante venosa por su contenido en propilenglicol.',

    objetivoTerapeutico: 'Terminar el estatus epiléptico · Relajación muscular en espasmos, tétanos y contracturas · Ansiolisis y sedación previa a procedimientos · Manejo de la abstinencia alcohólica grave · Premedicación anestésica',

    preparacion: {
      'Presentación IV':          '<b>Valium® 10 mg/2 mL — ampolla 2 mL (5 mg/mL)</b>',
      'Diluyente':                'Administrar preferentemente sin diluir; si se diluye, usar SF 0.9% e infundir de inmediato (precipita)',
      'Estatus epiléptico (IV)':  '<b>10 mg IV lento (2-5 mg/min) — repetir en 5-10 min si no cede (máx 30 mg)</b>',
      'Relajante muscular':       '5-10 mg IV/IM c/6-8 h según necesidad',
      'Ansiolisis/sedación':      '2-10 mg IV lento según respuesta',
      'Abstinencia alcohólica':   '10-20 mg IV/VO según escala CIWA-Ar (dosis más altas que otras benzos por tolerancia cruzada)',
      'Vía rectal (sin acceso IV)': '0.5 mg/kg rectal (crisis convulsiva en domicilio)',
      'Velocidad IV':             '<b>No superar 5 mg/min — infusión rápida causa apnea y flebitis</b>',
      'Vía':                      'IV lenta (vena de buen calibre) · IM (absorción errática, evitar si es posible) · Rectal · Oral',
      '⏱️ Inicio efecto (IV)':     '1-5 min · Duración clínica: 15-60 min (aunque el fármaco persiste días en el organismo)',
      '🧊 Estabilidad':            '<b>No diluir si es posible — administrar directo. Si se diluye, usar de inmediato (precipita en minutos)</b>',
    },

    vigilancia: {
      antes: [
        'FC, FR y SpO2 basal — depresión respiratoria si FR <12 o SpO2 <95%.',
        'Vena de buen calibre (evitar venas pequeñas de mano) — riesgo de flebitis por el propilenglicol.',
        'Revisar uso de opioides, alcohol u otros depresores del SNC (potenciación).',
        'Verificar disponibilidad de flumazenil y equipo de ventilación.',
        'Tipo de crisis si se usa en epilepsia — descartar causa reversible (hipoglucemia, hiponatremia).',
      ],
      durante: [
        'SpO2 y FR continuas — vigilar depresión respiratoria, sobre todo con bolo rápido.',
        'Observar la vena durante la inyección — dolor intenso o eritema indica extravasación/flebitis.',
        'FC y TA cada 5 min durante el estatus epiléptico.',
        'Si no cede el estatus con 2 dosis (20 mg): escalar a 2ª línea (levetiracetam, valproato, fenitoína) — avisar médico.',
      ],
      despues: [
        'SpO2 y nivel de consciencia cada 15-30 min — sedación residual puede durar horas-días por el metabolito activo.',
        'No dar de alta sin acompañante tras sedación ambulatoria.',
        'Vigilar la vena puncionada las horas siguientes — riesgo de tromboflebitis diferida.',
        'Documentar respuesta (cese de crisis/espasmo), dosis y vía.',
      ],
      suspender: [
        'SpO2 <90% o FR <8 rpm — ventilación y considerar flumazenil.',
        'Signos de flebitis grave en la vena de infusión — retirar vía y aplicar frío local.',
        'Sedación excesiva no deseada.',
        'Resolución del cuadro que motivó su uso.',
      ],
    },

    incompatibilidades: [
      '<b>Precipita al diluirse con la mayoría de sueros</b> — preferible administrar sin diluir, directo en la vía.',
      'Incompatible con la mayoría de fármacos en la misma jeringa/vía — administrar por separado.',
      'No mezclar con soluciones ácidas.',
      'No usar filtros de línea que puedan absorber el fármaco (el diazepam se adhiere al plástico de algunos equipos de PVC).',
    ],

    alertasSeguridad: [
      '🔴 DEPRESIÓN RESPIRATORIA — más riesgo con bolo rápido o combinación con opioides/alcohol.',
      '🔴 IRRITANTE VENOSO (propilenglicol) — flebitis y tromboflebitis frecuentes; usar vena gruesa, infundir lento.',
      '🟠 Metabolito activo de vida media muy larga (hasta 100 h) — sedación acumulativa con dosis repetidas, sobre todo en ancianos e IH.',
      '🟠 Precipita al diluir — administrar preferentemente sin diluir y de inmediato tras preparar.',
      '🟡 Abstinencia grave si se suspende bruscamente tras uso crónico — retirar de forma gradual.',
      '🟡 Sustancia controlada — registrar en libro de estupefacientes/psicotrópicos.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Administrar preferentemente SIN diluir, directo en una vena de buen calibre.',
      'Infundir lento (no superar 5 mg/min) — la velocidad rápida causa apnea y aumenta el dolor/flebitis.',
      'SpO2 y FR continuas durante la administración IV.',
      'Vigilar la zona de punción durante y después — el propilenglicol es muy irritante.',
      'Si se diluye por necesidad, usar SF 0.9% y administrar de inmediato (precipita en minutos).',
      'En estatus epiléptico: cronometrar la duración de la crisis y registrar cada dosis con su hora.',
      'Vigilar sedación residual durante horas-días tras dosis repetidas (metabolito activo).',
      'No mezclar con otros fármacos en la misma jeringa o vía.',
      'Registrar en el libro de estupefacientes (sustancia controlada).',
    ],

    efectosAdversos: [
      '🔴 Depresión respiratoria / apnea (bolo rápido, combinación con depresores SNC)',
      '🔴 Flebitis y tromboflebitis en el punto de infusión',
      '🟠 Sedación excesiva y prolongada (metabolito activo)',
      '🟠 Hipotensión (dosis altas o IV rápido)',
      '🟡 Amnesia anterógrada',
      '🟡 Reacción paradójica: agitación, desinhibición (ancianos, niños)',
      '🟡 Dependencia con uso crónico',
    ],

    contraindicaciones: [
      'Insuficiencia respiratoria grave no ventilada.',
      'Miastenia gravis.',
      'Apnea del sueño grave no tratada.',
      'Hipersensibilidad a benzodiacepinas.',
      'Glaucoma de ángulo agudo.',
      'Insuficiencia hepática grave (acumulación del metabolito activo).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar las ampollas protegidas de la luz a temperatura ambiente.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento. Proteger de luz.',
      'Sin diluir (preferido)': 'Administrar directamente — no requiere dilución',
      'Si se diluye':          '<b>Usar de inmediato — precipita en solución en pocos minutos</b>',
      'Aspecto':               'Solución incolora a ligeramente amarillenta — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras abrir — desechar sobrante.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: 'Si se diluye, administrar en los minutos siguientes — riesgo de precipitación.',
      notas:             'Preferir administración directa sin diluir. Contiene propilenglicol — muy irritante venoso. Sustancia controlada.',
    },

    presentaciones: [
      'Valium® 10 mg/2 mL — ampolla 2 mL (IV/IM)',
      'Diazepam Prodes® / Normon® — ampolla 10 mg/2 mL',
      'Valium® 5 mg y 10 mg — comprimidos (oral)',
      'Stesolid® — solución rectal (uso pediátrico/domiciliario en crisis)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Estatus epiléptico (1ª/2ª línea IV)', dosis: '<b>10 mg IV lento — repetir en 5-10 min si no cede (máx 30 mg)</b>', via: 'IV' },
      { indicacion: 'Relajante muscular / espasmo',          dosis: '5-10 mg IV/IM c/6-8 h según necesidad',                          via: 'IV/IM' },
      { indicacion: 'Ansiolisis / sedación procedimental',    dosis: '2-10 mg IV lento',                                              via: 'IV' },
      { indicacion: 'Abstinencia alcohólica grave',           dosis: '10-20 mg IV/VO según CIWA-Ar',                                  via: 'IV/VO' },
      { indicacion: 'Crisis convulsiva sin acceso IV',        dosis: '0.5 mg/kg rectal (niños); 10-20 mg rectal (adultos)',          via: 'Rectal' },
    ],

    embarazo: 'Categoría D (FDA). Riesgo de malformaciones (paladar hendido) con uso crónico en 1er trimestre. En estatus epiléptico: beneficio > riesgo, usar. Síndrome de abstinencia e hipotonía neonatal ("floppy baby syndrome") si uso materno cerca del parto.',

    pediatria: 'Estatus epiléptico: 0.2-0.5 mg/kg IV lento (máx 10 mg/dosis), o 0.5 mg/kg rectal si no hay acceso IV. Repetir a los 5-10 min si no cede. Mayor riesgo de depresión respiratoria en lactantes — monitorización estrecha. Vía rectal muy usada en domicilio para crisis febriles.',

    adultoMayor: 'Evitar si es posible — vida media muy prolongada (hasta 100 h) por acumulación del metabolito activo. Preferir lorazepam o midazolam. Si se usa: dosis reducidas (2.5-5 mg) y vigilancia estrecha de sedación, caídas y confusión. Incluido en lista Beers como fármaco de uso cauteloso en ancianos.',

    insufRenal: 'Sin ajuste formal — metabolismo hepático, eliminación renal de metabolitos. En IR grave: vigilar acumulación de metabolitos activos.',

    insufHepatica: '<b>Evitar o reducir dosis significativamente</b> — el metabolismo hepático está muy alterado en cirrosis, con acumulación marcada del metabolito activo y sedación prolongada. Preferir lorazepam (sin metabolito activo) en hepatopatía.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Valium® (diazepam).',
      'Brophy GM et al. Guidelines for the Evaluation and Management of Status Epilepticus. Neurocrit Care. 2012.',
      'Glauser T et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus. Epilepsy Currents. 2016.',
      'Neurocritical Care Society. Guideline for Status Epilepticus. Neurocrit Care. 2023.',
      'American Geriatrics Society. 2023 Updated AGS Beers Criteria. J Am Geriatr Soc. 2023.',
      'SEMICYUC. Recomendaciones de Sedoanalgesia en el Paciente Crítico. Med Intensiva. 2022.',
    ],
  },

});
