/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/haloperidol.js
   Fuentes: CIMA AEMPS (Haloperidol Esteve), FDA DailyMed,
   SEMICYUC Delirium UCI 2022, NICE Delirium Guidelines 2019,
   PADIS Guidelines Crit Care Med 2018
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'haloperidol',
  nombre:         'Haloperidol',
  nombreGenerico: 'Haloperidol',
  categoria:      'otros',
  tags:           ['antipsicótico', 'delirium', 'agitación', 'UCI', 'butirofenona', 'antiemético', 'sedación'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Prolonga el intervalo QTc — monitorizar ECG antes y durante el tratamiento. Riesgo de torsades de pointes especialmente con hipopotasemia, hipomagnesemia o combinación con otros fármacos que prolongan QT. Síndrome neuroléptico maligno: fiebre, rigidez, inestabilidad autonómica — emergencia. Evitar en parkinsonismo y síndrome de Lewy.',

  nivel1: {

    puntosClave: [
      '<b>Delirium en UCI</b>: 0.5-2 mg IV/IM c/4-8 h, ajustando al efecto. Dosis bajas en ancianos (0.25-0.5 mg).',
      '<b>ECG antes de iniciar</b> — contraindicado si QTc >500 ms. Monitorizar QTc durante tratamiento.',
      'Uso IV es <b>off-label</b> en muchos países (autorizado IM y oral) — pero ampliamente utilizado en UCI.',
      '<b>Síndrome neuroléptico maligno</b>: fiebre + rigidez + CK elevada + alteración consciencia = emergencia — suspender inmediatamente.',
      'No sedante ni ansiolítico — actúa en delirium sin causar depresión respiratoria significativa (ventaja en UCI).',
    ],

    resumenRapido: 'Antipsicótico clásico butirofenónico. Bloquea receptores dopaminérgicos D2 en sistema límbico y corteza. Indicado en delirium hiperactivo en UCI, agitación aguda, náuseas/vómitos refractarios en oncología y cuidados paliativos. Ampliamente utilizado por vía IV en UCI (uso off-label) por su eficacia, ausencia de depresión respiratoria y bajo coste. Riesgo de prolongación QTc y síndrome neuroléptico maligno.',

    objetivoTerapeutico: 'Control del delirium hiperactivo en UCI · Sedación de agitación aguda · Antiemético en oncología y cuidados paliativos · Tratamiento de psicosis aguda',

    preparacion: {
      'Presentación IV/IM':        '<b>Haloperidol 5 mg/mL — ampolla 1 mL (5 mg)</b>',
      'Diluyente':                 'SF 0.9% o SG 5%',
      'Dosis delirium UCI':        '<b>0.5-2 mg IV lento</b> (repetir c/20-30 min si precisa, máx 10 mg en 24 h)',
      'Dosis anciano':             '<b>0.25-0.5 mg IV</b> — comenzar siempre con dosis mínima',
      'Agitación grave':           '5-10 mg IM/IV, repetir c/30 min según respuesta',
      'Antiemético':               '0.5-2 mg IV o SC c/6-8 h',
      'Dilución para infusión':    '10-20 mg en 100 mL SF → 0.1-0.2 mg/mL',
      'Velocidad IV':              'Administrar IV lento en 1-2 min (no bolo rápido — riesgo QT)',
      'Vía':                       'IV lenta · IM · SC · Oral',
      '⏱️ Inicio efecto':           'IV: 5-20 min · IM: 20-40 min · Oral: 30-60 min',
      '⏱️ Duración':                '4-8 horas',
      '🧊 Estabilidad':             '<b>24-48 h a temperatura ambiente en SF 0.9%</b>',
    },

    vigilancia: {
      antes: [
        'ECG basal — medir QTc (contraindicado si QTc >500 ms o >60 ms sobre el basal).',
        'Ionograma: potasio y magnesio — corregir hipopotasemia/hipomagnesemia antes de iniciar.',
        'Revisar medicación concomitante — otros fármacos que prolongan QT (ondansetrón, amiodarona, fluoroquinolonas).',
        'Evaluar tipo de delirium: hipoactivo (haloperidol no indicado) vs hiperactivo.',
        'Descartar parkinsonismo o demencia con cuerpos de Lewy — contraindicación relativa grave.',
        'Función hepática basal — metabolismo hepático, acumulación en IH grave.',
      ],
      durante: [
        'ECG c/6-12 h durante el tratamiento o si se aumenta la dosis.',
        'Vigilar signos de síndrome neuroléptico maligno: fiebre, rigidez muscular, sudoración, taquicardia, alteración de consciencia.',
        'Observar signos extrapiramidales: distonía, acatisia, rigidez — reducir dosis si aparecen.',
        'Nivel de sedación: escala RASS o CAM-ICU para delirium.',
        'FC y TA cada 2-4 h al inicio.',
        'Vigilar elongación QT si se combinan fármacos QT-prolongadores.',
      ],
      despues: [
        'Reevaluar diariamente la necesidad de continuar — retirar en cuanto sea posible.',
        'Ionograma diario si uso prolongado (K+ y Mg2+).',
        'Evaluar causa subyacente del delirium — tratar la causa, no solo el síntoma.',
        'Transición a oral cuando sea posible (misma dosis VO ≈ dosis IV).',
        'Documentar respuesta clínica, dosis administrada y escala de delirium.',
      ],
      suspender: [
        'QTc >500 ms o elongación >60 ms respecto al basal.',
        'Síndrome neuroléptico maligno (emergencia — suspender inmediatamente).',
        'Distonía grave o síntomas extrapiramidales severos.',
        'Resolución del delirium — reducción gradual.',
        'Parkinsonismo o signos de demencia con cuerpos de Lewy detectados.',
      ],
    },

    incompatibilidades: [
      '<b>No mezclar con heparina</b> — precipitación.',
      'No mezclar con fenobarbital o fenitoína.',
      'Incompatible con bicarbonato sódico.',
      'Precaución en Y con morfina, midazolam — verificar compatibilidad.',
      'Compatible con SF 0.9% y SG 5%.',
      'Lavar la vía con SF antes y después.',
    ],

    alertasSeguridad: [
      '🔴 PROLONGACIÓN QTc — ECG antes y durante. No iniciar si QTc >500 ms.',
      '🔴 SÍNDROME NEUROLÉPTICO MALIGNO — fiebre + rigidez + CK alta = suspender y tratar urgente.',
      '🔴 CONTRAINDICADO en demencia con cuerpos de Lewy y Parkinson — riesgo de crisis extrapiramidal grave.',
      '🟠 Síntomas extrapiramidales: distonía, acatisia, parkinsonismo — especialmente en jóvenes.',
      '🟠 Hipopotasemia e hipomagnesemia potencian el riesgo de torsades — corregir siempre.',
      '🟡 No es sedante — para sedación profunda combinar con benzodiacepina o propofol.',
    ],
  },

  modulos: {

    deliriumUCI: `
      <b>Protocolo Delirium UCI — Haloperidol:</b><br/>
      <b>Evaluar primero:</b> CAM-ICU positivo + RASS ≥ 0 (hiperactivo).<br/><br/>
      <b>Medidas no farmacológicas SIEMPRE:</b><br/>
      • Reorientar: hablar con el paciente, luz natural, relojes visibles.<br/>
      • Movilización precoz, eliminar sujeciones si es posible.<br/>
      • Gafas, audífonos, dentadura postiza si los usa habitualmente.<br/>
      • Ciclos sueño-vigilia: reducir ruido nocturno, evitar intervenciones innecesarias de noche.<br/><br/>
      <b>Haloperidol IV (hiperactivo):</b><br/>
      • Adulto: 0.5-2 mg IV lento → repetir c/20-30 min si no respuesta (máx 10 mg/24 h).<br/>
      • Anciano/fragilidad: 0.25-0.5 mg IV.<br/>
      • ECG basal y c/6-12 h durante tratamiento.<br/><br/>
      <b>Si delirium hipoactivo</b>: haloperidol NO está indicado — medidas no farmacológicas.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Realizar ECG antes de la primera dosis — medir y registrar QTc.',
      'Verificar potasio y magnesio — reponer si están bajos antes de iniciar.',
      'Administrar IV lento (en 1-2 min) — nunca en bolo rápido.',
      'Escala CAM-ICU o RASS antes y después de cada dosis para documentar respuesta.',
      'Vigilar signos de SNM: fiebre + rigidez + sudoración + taquicardia — avisar médico urgente.',
      'Observar síntomas extrapiramidales: rigidez, distonía, inquietud (acatisia) — comunicar.',
      'ECG cada 6-12 h si uso continuado o combinación con otros fármacos que prolongan QT.',
      'En ancianos: empezar por dosis mínima (0.25-0.5 mg) — mayor sensibilidad.',
      'No mezclar con heparina — incompatibles (precipitan).',
      'Reevaluar diariamente la indicación — haloperidol es temporal hasta resolver la causa.',
    ],

    efectosAdversos: [
      '🔴 Prolongación QTc / torsades de pointes (especialmente con hipoK+/hipoMg2+)',
      '🔴 Síndrome neuroléptico maligno (fiebre, rigidez, CK elevada, inestabilidad autonómica)',
      '🟠 Síntomas extrapiramidales: distonía, acatisia, parkinsonismo',
      '🟠 Sedación excesiva (rara a dosis bajas IV)',
      '🟠 Hipotensión (más frecuente con dosis altas o IV rápido)',
      '🟡 Discinesia tardía (con uso crónico)',
      '🟡 Ictericia colestásica con uso prolongado',
    ],

    contraindicaciones: [
      'QTc >500 ms o prolongación significativa previa.',
      'Demencia con cuerpos de Lewy (contraindicación grave — reacciones extrapiramidales severas).',
      'Parkinsonismo activo.',
      'Estado comatoso.',
      'Depresión del SNC grave por sedantes/alcohol.',
      'Hipersensibilidad a haloperidol o butirofenones.',
    ],

    fotosensibilidad: 'Sí — con uso prolongado oral. Proteger la piel de la luz solar. En uso IV en UCI generalmente de corta duración — menos relevante.',

    estabilidad: {
      'Ampolla sin abrir':       'Temperatura ambiente hasta vencimiento. Proteger de luz.',
      'Diluida en SF 0.9%':     '<b>24-48 h a temperatura ambiente protegido de luz</b>',
      'Diluida en SG 5%':       '24-48 h a temperatura ambiente',
      'Aspecto':                 'Solución incolora a ligeramente amarillenta — normal',
      'Temperatura':             '15-25°C · NO congelar · Proteger de la luz',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente o dentro de 24 h protegido de luz.',
      dosisRestante:     'Desechar sobrante de ampolla abierta tras 24 h.',
      infusionPreparada: '24-48 h en SF 0.9% a temperatura ambiente, protegido de luz directa.',
      notas:             'Uso IV es off-label (autorizado IM y oral) — habitual en UCI. Incompatible con heparina en la misma vía.',
    },

    presentaciones: [
      'Haloperidol Esteve® 5 mg/mL — ampolla 1 mL (5 mg)',
      'Haloperidol Esteve® 5 mg/mL — ampolla 3 mL (15 mg)',
      'Haloperidol 1 mg/mL — ampolla 5 mL (uso IM/IV)',
      'Haloperidol 2 mg/mL — comprimidos 10 mg (oral)',
      'Haloperidol 2 mg/mL — solución oral gotas',
      'Haldol Decanoas® — depot IM mensual (no en UCI)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Delirium UCI adulto',          dosis: '<b>0.5-2 mg IV lento c/4-8 h</b> (máx 10 mg/día)', via: 'IV' },
      { indicacion: 'Delirium UCI anciano/fragilidad', dosis: '<b>0.25-0.5 mg IV</b> → titular',              via: 'IV' },
      { indicacion: 'Agitación aguda grave',         dosis: '5-10 mg IM/IV — repetir c/30 min si precisa',    via: 'IV/IM' },
      { indicacion: 'Antiemético (oncología/paliativos)', dosis: '0.5-2 mg IV/SC c/6-8 h',                   via: 'IV/SC' },
      { indicacion: 'Oral (mantenimiento)',           dosis: '0.5-5 mg/8-12 h oral — equivalente a IV',       via: 'VO' },
    ],

    embarazo: 'Categoría C (FDA). Datos limitados. Puede producir síntomas extrapiramidales neonatales. Usar solo si beneficio > riesgo. En psicosis grave: continuar bajo supervisión. Evitar en el primer trimestre si es posible.',

    pediatria: 'Psicosis aguda >3 años: 0.025-0.05 mg/kg/día oral en 2-3 dosis. En UCI pediátrica: 0.025-0.05 mg/kg IV c/6-8 h (dosis máxima 0.15 mg/kg/día). Mayor sensibilidad a efectos extrapiramidales. Monitorización QTc obligatoria.',

    adultoMayor: '<b>Inicio con dosis muy bajas: 0.25-0.5 mg IV</b>. Mayor riesgo de caídas, sedación, síntomas extrapiramidales y prolongación QT. Evaluar función renal y hepática. La FDA advierte sobre mayor mortalidad en ancianos con demencia tratados con antipsicóticos.',

    insufRenal: 'Sin ajuste formal necesario. En IR grave: metabolitos pueden acumularse. Reducir dosis a la mitad y monitorizar respuesta. Inicio con dosis mínima.',

    insufHepatica: 'Metabolismo hepático extenso. En IH moderada-grave: reducir dosis al 50%, intervalar más las dosis. Vigilar acumulación y efecto prolongado.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Haloperidol Esteve®.',
      'Devlin JW et al. Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption (PADIS) in Adult Patients in the ICU. Crit Care Med. 2018.',
      'SEMICYUC. Manejo del delirium en el paciente crítico. Med Intensiva. 2022.',
      'NICE. Delirium: prevention, diagnosis and management in hospital and long-term care. NICE Guideline CG103. 2019.',
      'Hatta K et al. Antipsychotics for delirium in the general hospital setting in consecutive 2453 inpatients. Gen Hosp Psychiatry. 2014.',
      'Agar MR et al. Efficacy of oral risperidone, haloperidol, or placebo for symptoms of delirium. JAMA Intern Med. 2017.',
    ],
  },

});
