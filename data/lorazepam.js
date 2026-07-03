/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/lorazepam.js
   Fuentes: CIMA AEMPS (Orfidal, Idalprem), FDA DailyMed,
   Epilepsia Foundation Guidelines 2016,
   SEMICYUC Sedoanalgesia UCI 2022, NCS Status Epilepticus 2023
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'lorazepam',
  nombre:         'Lorazepam',
  nombreGenerico: 'Lorazepam',
  categoria:      'otros',
  tags:           ['benzodiacepina', 'estatus epiléptico', 'ansiedad', 'sedación', 'anticonvulsivante', 'ansiolítico', 'abstinencia alcohol'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Depresor del SNC potente. Riesgo de depresión respiratoria, especialmente con opioides, alcohol u otros depresores del SNC. En estatus epiléptico IV: tener equipo de resucitación preparado. El excipiente propilenglicol en formulaciones IV puede acumularse con infusiones prolongadas (toxicidad metabólica). Sustancia controlada.',

  nivel1: {

    puntosClave: [
      '<b>Estatus epiléptico (1ª línea)</b>: 4 mg IV lento (en 2 min) — repetir en 5-10 min si no cede; si no hay IV: 4 mg IM.',
      '<b>Sedación procedimental / ansiolisis pre-procedimiento</b>: 0.5-2 mg IV lento.',
      '<b>Depresión respiratoria</b> posible — tener ventilación y flumazenil disponibles en uso IV.',
      'Vida media larga (10-20 h) — acumulación con dosis repetidas o infusiones prolongadas.',
      '<b>Abstinencia de alcohol</b>: 1-4 mg IV c/1-6 h según escala CIWA-Ar.',
    ],

    resumenRapido: 'Benzodiacepina de acción intermedia-larga (vida media 10-20 h). Potencia la acción inhibidora del GABA en el receptor GABA-A. Indicado en estatus epiléptico (primera línea IV con mejor evidencia que diazepam), ansiedad aguda, sedación procedimental, agitación y abstinencia alcohólica. Ventaja sobre diazepam: sin metabolito activo de acción prolongada. Desventaja frente a midazolam en UCI: vida media más larga y excipiente propilenglicol en formulación IV.',

    objetivoTerapeutico: 'Terminar el estatus epiléptico en fase inicial · Sedación/ansiolisis en procedimientos · Tratamiento de ansiedad aguda grave · Manejo de abstinencia alcohólica · Sedación de corta duración en UCI',

    preparacion: {
      'Presentación IV/IM':       '<b>Idalprem® 4 mg/mL — ampolla 1 mL (4 mg)</b>',
      'Presentación oral':        'Orfidal® 1 mg comprimido sublingual/oral',
      'Diluyente IV':             'SF 0.9% o SG 5% — <b>diluir 1:1 con SF antes de administrar</b>',
      'Estatus epiléptico (IV)':  '<b>4 mg IV lento en 2 min — repetir 4 mg si no cede en 5-10 min</b>',
      'Estatus epiléptico (IM)':  '<b>4 mg IM (si no hay vía IV)</b> — onset 5-10 min',
      'Sedación procedimental':   '0.5-2 mg IV lento — titular según respuesta',
      'Ansiolisis pre-procedimiento': '0.5-1 mg IV 15-30 min antes',
      'Abstinencia alcohol':      '1-4 mg IV c/1-6 h según CIWA-Ar',
      'Velocidad IV':             '<b>No superar 2 mg/min — mayor lentitud reduce riesgo respiratorio</b>',
      'Vía':                      'IV lento · IM · Sublingual · Oral',
      '⏱️ Inicio efecto (IV)':     '2-5 min (más lento que diazepam, más duradero)',
      '⏱️ Duración':               '6-12 h (vida media 10-20 h)',
      '🧊 Estabilidad':            '<b>Refrigerar ampollas 2-8°C. Diluido: usar en 4 h a temperatura ambiente</b>',
    },

    vigilancia: {
      antes: [
        'FC, FR y SpO2 basal — depresión respiratoria si FR <12 o SpO2 <95% de base.',
        'Nivel de consciencia y tipo de crisis si se usa para epilepsia.',
        'Revisar si usa otros depresores del SNC, opioides o alcohol (potenciación del efecto).',
        'Verificar disponibilidad de <b>flumazenil</b> y equipo de ventilación.',
        'Peso del paciente para dosis ajustadas (sedación procedimental).',
        'Historial de benzodiacepinas — tolerancia previa puede reducir el efecto.',
      ],
      durante: [
        'SpO2 continua y FR — vigilar depresión respiratoria (FR <10 o saturación <90%: preparar ventilación).',
        'Nivel de consciencia con escala de Ramsay o RASS.',
        'FC y TA c/5 min durante estatus epiléptico.',
        'Si no cede el estatus con 2 dosis (8 mg total): escalar a fenobarbitaly/o propofol — avisar médico.',
        'Vigilar euforia o desinhibición paradójica (rara — más frecuente en ancianos y niños).',
      ],
      despues: [
        'SpO2 y nivel de consciencia cada 15-30 min hasta recuperación completa.',
        'No dar de alta sin acompañante si se usó como sedación ambulatoria.',
        'Documentar respuesta (cese de crisis, nivel de sedación), dosis y vía.',
        'Escala CIWA-Ar en abstinencia alcohólica — ajustar dosis según puntuación.',
        'Vigilar sedación residual (vida media larga) — especialmente en ancianos.',
      ],
      suspender: [
        'SpO2 <90% o FR <8 rpm — ventilación y flumazenil.',
        'Hipotensión significativa (PAM <60 mmHg).',
        'Profundidad de sedación excesiva (RASS -5 no deseado).',
        'Reacción paradójica grave (agitación extrema, hostilidad).',
        'Estatus epiléptico resuelto — no continuar si no es necesario.',
      ],
    },

    incompatibilidades: [
      '<b>Incompatible con la mayoría de fármacos en Y sin verificar</b> — administrar por separado cuando sea posible.',
      'Incompatible con aztreonam, foscarnet, imipenem.',
      'Precipita con ondansetrón en la misma vía.',
      '<b>Diluir 1:1 con SF antes de administrar IV</b> — solución concentrada puede irritar la vena.',
      'No mezclar con soluciones alcalinas.',
      'Compatible con morfina, midazolam (verificar concentraciones y tipo de solución).',
    ],

    alertasSeguridad: [
      '🔴 DEPRESIÓN RESPIRATORIA — tener flumazenil y ventilación disponibles en uso IV.',
      '🔴 POTENCIACIÓN con opioides, alcohol y otros depresores del SNC — combinación de riesgo vital.',
      '🟠 Acumulación de propilenglicol (excipiente IV) con infusiones prolongadas — acidosis metabólica, nefrotoxicidad.',
      '🟠 Vida media larga — sedación residual prolongada, especialmente en ancianos e IH.',
      '🟠 Abstinencia grave si suspensión brusca en pacientes con uso crónico — retirar gradualmente.',
      '🟡 Reacción paradójica (agitación, desinhibición) — más frecuente en ancianos y niños.',
    ],
  },

  modulos: {

    estatusEpileptico: `
      <b>Protocolo Estatus Epiléptico — Lorazepam (Fase 1ª línea):</b><br/>
      <b>Objetivo:</b> abortar la crisis en los primeros 5 minutos de crisis continua.<br/><br/>
      <b>Tiempo 0-5 min: Benzodiacepinas (1ª línea):</b><br/>
      • <b>Con vía IV:</b> Lorazepam 4 mg IV lento en 2 min. Repetir 4 mg si no cede en 5-10 min.<br/>
      • <b>Sin vía IV:</b> Midazolam 10 mg IM (mejor absorción IM que lorazepam). O lorazepam 4 mg IM.<br/><br/>
      <b>Si no cede a los 20-30 min (estatus refractario) — 2ª línea:</b><br/>
      • Levetiracetam 60 mg/kg IV (máx 4.500 mg) en 10 min. O Valproato 40 mg/kg IV en 10 min.<br/>
      • O Fenitoína/fosfenitoína 20 mg/kg IV.<br/><br/>
      <b>Recordar:</b> SpO2 continua, vía aérea, tiamina si hay sospecha de Wernicke o alcohólicos.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Diluir la ampolla de 4 mg/mL con igual volumen de SF (dilución 1:1) antes de administrar IV.',
      'Administrar IV muy lentamente (máximo 2 mg/min) — parar si SpO2 cae o FR <10.',
      'SpO2 y FC continuas durante la administración IV.',
      'Tener flumazenil preparado antes de administrar IV en contexto de sedación procedimental.',
      'En estatus epiléptico: cronometrar la duración de la crisis, registrar dosis y hora de administración.',
      'Si no cede con 2 dosis (8 mg): avisar médico y escalar a 2ª línea — no administrar más benzodiacepinas.',
      'Escala CIWA-Ar c/1-2 h en abstinencia alcohólica para ajustar dosis.',
      'Vigilar nivel de consciencia hasta recuperación completa — vida media larga (hasta 20 h).',
      'No dejar al paciente solo durante el efecto sedante.',
      'En uso oral/sublingual: no conducir ni operar maquinaria durante 12-24 h.',
    ],

    efectosAdversos: [
      '🔴 Depresión respiratoria (especialmente IV rápido o con opioides)',
      '🔴 Apnea con dosis altas o combinación depresores SNC',
      '🟠 Sedación excesiva / somnolencia prolongada',
      '🟠 Hipotensión (especialmente en pacientes con hipovolemia)',
      '🟠 Amnesia anterógrada (efecto deseado en procedimientos)',
      '🟡 Reacción paradójica: agitación, desinhibición (ancianos, niños)',
      '🟡 Dependencia y síndrome de abstinencia con uso crónico',
    ],

    contraindicaciones: [
      'Insuficiencia respiratoria grave no ventilada.',
      'Miastenia gravis (puede empeorar la debilidad muscular).',
      'Apnea del sueño grave no tratada.',
      'Hipersensibilidad a benzodiacepinas.',
      'Intoxicación grave por alcohol u otros depresores SNC (relativa — riesgo de depresión respiratoria aditiva).',
      'Glaucoma de ángulo agudo (precaución).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar ampollas en nevera (2-8°C) protegidas de la luz. No congelar.',

    estabilidad: {
      'Ampolla sin abrir':     '<b>Refrigerada 2-8°C. Proteger de luz. NO congelar.</b>',
      'Diluida en SF 0.9%':   '<b>Usar en 4 h a temperatura ambiente</b>',
      'A temperatura ambiente (ampolla)': 'Estable hasta 2 semanas (no almacenar así rutinariamente)',
      'Aspecto':               'Solución incolora — desechar si hay partículas o cambio de color',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras apertura — desechar sobrante.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: 'Usar dentro de 4 h a temperatura ambiente en SF 0.9%.',
      notas:             'Diluir 1:1 con SF antes de administrar IV. Refrigerar las ampollas — sacar de nevera 15-30 min antes del uso. Compatible con morfina y midazolam diluidos (verificar). Sustancia controlada — registrar en libro de estupefacientes.',
    },

    presentaciones: [
      'Idalprem® 4 mg/mL — ampolla 1 mL (4 mg) [IV/IM]',
      'Orfidal® 1 mg comprimidos [sublingual/oral]',
      'Lorazepam Normon® / Kern® — genéricos',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Estatus epiléptico (1ª línea IV)',  dosis: '<b>4 mg IV lento en 2 min — repetir 4 mg si no cede</b>', via: 'IV' },
      { indicacion: 'Estatus epiléptico (sin vía IV)',   dosis: '4 mg IM (alternativa si no hay IV)',                       via: 'IM' },
      { indicacion: 'Sedación procedimental',             dosis: '0.5-2 mg IV lento — titular',                             via: 'IV' },
      { indicacion: 'Ansiolisis / ansiedad aguda',        dosis: '0.5-1 mg IV/IM/sublingual',                               via: 'IV/IM/SL' },
      { indicacion: 'Abstinencia alcohólica',             dosis: '1-4 mg IV c/1-6 h según CIWA-Ar',                        via: 'IV/IM' },
    ],

    embarazo: 'Categoría D (FDA). Riesgo de malformaciones (paladar hendido) en el 1er trimestre con uso crónico. En emergencias (estatus epiléptico): beneficio > riesgo — usar. Neonatos: síndrome de abstinencia y depresión respiratoria neonatal si uso materno prolongado. En parto: puede producir hipotonía neonatal.',

    pediatria: 'Estatus epiléptico >1 mes: 0.05-0.1 mg/kg IV lento (máx 4 mg/dosis). Repetir a los 5-10 min si no cede. Inicio efecto IV: 2-5 min. Alternativa en >12 años: misma dosis adulto. Mayor riesgo de depresión respiratoria en lactantes — monitorización estricta.',

    adultoMayor: 'Dosis reducidas: 0.5-1 mg IV (mitad de la dosis adulto). Mayor sensibilidad a efectos sedantes y mayor riesgo de caídas, confusión y depresión respiratoria. Vida media puede prolongarse hasta 30-40 h. Incluido en lista Beers como fármaco de uso cauteloso en ancianos.',

    insufRenal: 'Sin ajuste de dosis para uso agudo (glucuronización independiente de función renal). En IR grave: monitorizar acumulación de excipiente propilenglicol con infusiones IV prolongadas — riesgo de acidosis metabólica y toxicidad renal.',

    insufHepatica: 'Glucuronización hepática sin metabolito activo. En IH leve-moderada: sin ajuste. En IH grave (Child-Pugh C): reducir dosis a la mitad — eliminación enlentecida y mayor sensibilidad a efectos sedantes. Monitorizar nivel de consciencia.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Idalprem® / Orfidal® (lorazepam).',
      'Brophy GM et al. Guidelines for the Evaluation and Management of Status Epilepticus. Neurocrit Care. 2012.',
      'Kapur J et al. Intramuscular Midazolam versus Intravenous Lorazepam for Status Epilepticus. NEJM. 2012 (RAMPART).',
      'Glauser T et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus. Epilepsy Currents. 2016.',
      'Neurocritical Care Society. Guideline for Status Epilepticus. Neurocrit Care. 2023.',
      'SEMICYUC. Recomendaciones de Sedoanalgesia en el Paciente Crítico. Med Intensiva. 2022.',
    ],
  },

});
