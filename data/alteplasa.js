/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/alteplasa.js
   Fuentes: CIMA AEMPS (Actilyse), FDA DailyMed,
   NINDS Trial NEJM 1995, ECASS III NEJM 2008,
   AHA/ASA Stroke Guidelines 2019, ESC TEP 2020
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'alteplasa',
  nombre:         'Alteplasa',
  nombreGenerico: 'Alteplase (rt-PA)',
  categoria:      'otros',
  tags:           ['trombolítico', 'ACV', 'ictus', 'TEP', 'IAM', 'rt-PA', 'fibrinolítico', 'urgencias', 'alto riesgo'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Trombolítico de alto riesgo hemorrágico. Verificar TODAS las contraindicaciones con checklist antes de administrar. No administrar heparina ni antiagregantes 24 h después en ACV. En caso de deterioro neurológico brusco: detener inmediatamente y hacer TC urgente.',

  nivel1: {

    puntosClave: [
      '<b>ACV isquémico</b>: 0.9 mg/kg IV (máx 90 mg) — 10% en bolus en 1 min → 90% en 60 min. Ventana: <b><4.5 h</b>.',
      '<b>TEP masivo</b>: 100 mg IV en 2 h — 10 mg en bolus 2 min → 90 mg en 2 h.',
      '<b>VERIFICAR CONTRAINDICACIONES</b> antes de preparar: ACV previo, cirugía reciente, anticoagulación, TA >185/110 mmHg.',
      'Si deterioro neurológico brusco o cefalea intensa: <b>DETENER infusión</b> y TC cerebral urgente.',
      'NO heparina, AAS ni anticoagulantes en las <b>24 h siguientes</b> tras tPA en ACV.',
    ],

    resumenRapido: 'Activador tisular del plasminógeno recombinante (rt-PA). Se une selectivamente al plasminógeno unido a fibrina del trombo, produciendo plasmina que disuelve el coágulo. Fibrinoespecífico — menor fibrinogenolisis sistémica que estreptoquinasa. Indicado en ACV isquémico <4.5h, TEP masivo con inestabilidad hemodinámica e IAMCEST sin acceso a cateterismo primario.',

    objetivoTerapeutico: 'Recanalización arterial en ACV isquémico <4.5h · Resolución de TEP masivo · Reperfusión miocárdica en IAM sin ICP disponible · Mínima pérdida neurológica en ACV',

    preparacion: {
      'Reconstitución':         '<b>Disolver con el agua para inyección incluida en el kit (1 mg/mL)</b>',
      'ACV — dosis total':      '<b>0.9 mg/kg IV (máx 90 mg)</b>',
      'ACV — bolus':            '<b>10% de la dosis en bolo IV en 1 minuto</b>',
      'ACV — perfusión':        '<b>90% restante en 100 mL SF → infundir en 60 min</b>',
      'TEP — bolus':            '10 mg IV en 1-2 min',
      'TEP — perfusión':        '90 mg en 250 mL SF → infundir en 2 horas',
      'IAM (acelerado)':        '15 mg bolus + 50 mg en 30 min + 35 mg en 60 min',
      'Vía':                    'IV periférica grueso calibre (18G mínimo) o central',
      '⏱️ TIEMPO ACV':           '<b>10% bolus en 1 min → 90% en 60 min (total 61 min)</b>',
      'Bomba':                   'Bomba de infusión obligatoria para la perfusión',
      '🧊 Estabilidad':          '<b>4 horas a temperatura ambiente · 8 horas refrigerada (2-8°C)</b>',
    },

    vigilancia: {
      antes: [
        '<b>CHECKLIST CONTRAINDICACIONES</b>: ACV/TCE en últimos 3 meses, cirugía mayor <14 días, anticoagulación activa, plaquetas <100.000, glucemia <50 o >400 mg/dL.',
        'TA en ambos brazos: debe ser <185/110 mmHg antes de iniciar. Si no: tratar con labetalol o urapidilo.',
        'NIHSS basal documentado (en ACV) — escala de gravedad neurológica.',
        'Hora exacta de inicio de síntomas — determina elegibilidad.',
        'Canalizar 2 vías IV ANTES de administrar. No realizar punciones arteriales si es posible.',
        'Colocar SNG y sonda vesical ANTES de la trombolisis si van a ser necesarias.',
      ],
      durante: [
        'TA y FC cada 15 min durante toda la infusión.',
        'NIHSS cada 15 min durante y 2 h post-infusión (en ACV).',
        'SpO2 y monitorización cardíaca continua.',
        'Si deterioro neurológico brusco: DETENER infusión — puede ser hemorragia intracraneal.',
        'Si angioedema orolingual: DETENER. Adrenalina 0.5 mg IM + antihistamínico IV + corticoide IV.',
        'No realizar nuevas punciones durante la infusión (riesgo de hematoma).',
      ],
      despues: [
        'TA cada 30 min durante 6 h, luego cada hora durante 18 h (en ACV).',
        'Vigilar signos de sangrado: neurológicos, digestivos, en puntos de punción.',
        'NO heparina ni AAS durante 24 h en ACV — TC cerebral a las 24 h antes de anticoagular.',
        'Reposo absoluto 1-2 h tras infusión — mínimas manipulaciones.',
        'Compresión manual prolongada (10-15 min) en cualquier punto de punción.',
        'Documentar hora de inicio, dosis administrada, TA durante infusión y respuesta clínica.',
      ],
      suspender: [
        'Deterioro neurológico brusco durante infusión (sospecha de hemorragia intracraneal).',
        'Angioedema orolingual grave.',
        'Hemorragia mayor activa (digestiva, retroperitoneal, hemoptisis masiva).',
        'TA >185/110 mmHg refractaria a tratamiento antihipertensivo.',
        'Finalización de la pauta completa.',
      ],
    },

    incompatibilidades: [
      '<b>No mezclar con ningún fármaco en la misma bolsa o jeringa</b>.',
      'Heparina en la misma vía — lavar con SF 0.9% antes y después.',
      'SG 5% — no recomendado para dilución.',
      'Usar vía exclusiva para alteplasa durante la infusión.',
      'No administrar simultáneamente anticoagulantes en la misma vía.',
    ],

    alertasSeguridad: [
      '🔴 HEMORRAGIA INTRACRANEAL (2-6% en ACV): riesgo mortal. Detener al primer signo de deterioro.',
      '🔴 ANGIOEDEMA OROLINGUAL (1-5%): mayor riesgo con IECAs. Tener adrenalina preparada.',
      '🔴 Verificar TODAS las contraindicaciones antes de administrar — la omisión puede ser fatal.',
      '🟠 NO administrar heparina ni AAS 24 h después en ACV — verificar antes de cualquier anticoagulación.',
      '🟠 TA >185/110 mmHg antes del tPA: tratar primero, luego administrar.',
      '🟡 Hematomas en puntos de punción — compresión prolongada obligatoria.',
    ],
  },

  modulos: {

    checklist: `
      <b>CHECKLIST antes de tPA en ACV isquémico:</b><br/>
      ✅ Hora de inicio de síntomas conocida y < 4.5 h<br/>
      ✅ TC cerebral: sin hemorragia ni isquemia extensa<br/>
      ✅ TA < 185/110 mmHg (o corregida antes de iniciar)<br/>
      ✅ Glucemia 50-400 mg/dL<br/>
      ✅ Plaquetas > 100.000/µL<br/>
      ✅ INR < 1.7 (si anticoagulado con AVK)<br/>
      ✅ Sin anticoagulación con HBPM terapéutica en <24 h<br/>
      ✅ Sin NACOs en <48 h (rivaroxabán, apixabán, dabigatrán)<br/>
      ✅ Sin ACV/TCE grave en últimos 3 meses<br/>
      ✅ Sin cirugía mayor en últimos 14 días (90 días neurocirugía)<br/>
      ✅ Sin hemorragia intracraneal previa en cualquier momento<br/>
      ✅ Sin hemorragia interna activa<br/>
      ✅ NIHSS 4-25 (grave pero recuperable)<br/><br/>
      <b>Si TODOS los ítems se cumplen: ADMINISTRAR tPA</b><br/>
      <b>Si alguno NO se cumple: contactar neurólogo/jefe de guardia</b>
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Aplicar checklist de contraindicaciones CON OTRO PROFESIONAL antes de preparar.',
      'Reconstituir con el agua para inyección del kit (no sustituir por SF).',
      'Canalizar 2 vías IV antes de empezar — no realizar nuevas punciones durante infusión.',
      'Si el paciente necesita SNG o sonda vesical, colocarlas ANTES de la trombolisis.',
      'Registrar TA en ambos brazos antes de iniciar — máx 185/110 mmHg.',
      'Documentar NIHSS basal antes de alteplasa y cada 15 min durante infusión.',
      'Si angioedema: DETENER, adrenalina 0.5 mg IM inmediatamente, avisar médico.',
      'Tras la infusión: compresión 15 min en todos los puntos de punción.',
      'No movilizar al paciente innecesariamente 1-2 h post-tPA.',
      'Informar al médico inmediatamente de cualquier cambio neurológico durante o tras la infusión.',
    ],

    efectosAdversos: [
      '🔴 Hemorragia intracraneal (2-6% en ACV)',
      '🔴 Angioedema orolingual (1-5% — mayor riesgo con IECAs en tratamiento)',
      '🔴 Hemorragia mayor sistémica (digestiva, retroperitoneal, hemoptisis)',
      '🟠 Hipotensión durante infusión',
      '🟠 Hematomas en puntos de punción',
      '🟡 Náuseas y vómitos',
      '🟡 Fiebre transitoria',
    ],

    contraindicaciones: [
      'ACV hemorrágico previo (en cualquier momento).',
      'ACV isquémico o TCE grave en los últimos 3 meses.',
      'Cirugía mayor o trauma grave en los últimos 14 días (90 días para neurocirugía).',
      'TA >185/110 mmHg que no responde a tratamiento antihipertensivo.',
      'Anticoagulación activa: INR >1.7, HBPM terapéutica en <24 h, NACOs en <48 h.',
      'Plaquetas <100.000/μL.',
      'Glucemia <50 o >400 mg/dL.',
      'Hemorragia interna activa (excepto menstruación).',
      'Neoplasia intracraneal, malformación AV o aneurisma conocido.',
    ],

    fotosensibilidad: 'Sí — conservar el polvo liofilizado a 2-8°C protegido de luz.',

    estabilidad: {
      'Polvo liofilizado':     'Conservar a 2-8°C hasta vencimiento',
      'Reconstituido (uso inmediato)': '8 h a 2-8°C · 4 h a temperatura ambiente',
      'Aspecto':               'Incolora a ligeramente opalescente — normal',
      'Temperatura reconstitución': 'No refrigerar la solución preparada para infusión inmediata',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente o dentro de 8 h si se mantiene a 2-8°C.',
      dosisRestante:     'Desechar el sobrante no utilizado.',
      infusionPreparada: '4 h a temperatura ambiente. 8 h a 2-8°C.',
      notas:             'No agitar tras reconstitución (puede desnaturalizarse). El polvo liofilizado debe conservarse en nevera. La solución reconstituida es transparente a ligeramente opalescente.',
    },

    presentaciones: [
      'Actilyse® 10 mg — vial polvo + 10 mL agua para inyección',
      'Actilyse® 20 mg — vial polvo + 20 mL agua para inyección',
      'Actilyse® 50 mg — vial polvo + 50 mL agua para inyección',
      'Actilyse® 100 mg — vial polvo + 100 mL agua para inyección',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'ACV isquémico <4.5h (bolus)', dosis: '<b>10% de 0.9 mg/kg IV en 1 min (máx 9 mg)</b>',    via: 'IV' },
      { indicacion: 'ACV isquémico (perfusión)',    dosis: '<b>90% restante en 100 mL SF en 60 min</b>',        via: 'IV' },
      { indicacion: 'TEP masivo (bolus)',            dosis: '10 mg IV en 1-2 min',                               via: 'IV' },
      { indicacion: 'TEP masivo (perfusión)',        dosis: '90 mg en 250 mL SF en 2 horas',                     via: 'IV' },
      { indicacion: 'IAM/IAMCEST (acelerado)',       dosis: '15 mg bolus + 50 mg/30 min + 35 mg/60 min',         via: 'IV' },
      { indicacion: 'Trombosis de catéter',          dosis: '1-2 mg intraluminal en 2 h, aspirar sin infundir',  via: 'Intraluminal' },
      { indicacion: 'Dosis máxima en ACV',           dosis: '90 mg (independientemente del peso)',               via: 'IV' },
    ],

    embarazo: 'No hay contraindicación absoluta en ACV isquémico grave — el riesgo de muerte materna/fetal por ACV no tratado supera el riesgo hemorrágico. Decisión caso a caso con neurólogo. Compatible con TEP masivo con riesgo vital.',

    pediatria: 'No hay indicación estándar en pediatría para ACV. TEP pediátrico (off-label): 0.1-0.6 mg/kg/h durante 6 h bajo supervisión de hematología pediátrica.',

    adultoMayor: '>80 años: misma dosis en ACV (evidencia nivel A del IST-3 y metaanálisis). Mayor riesgo hemorrágico — vigilancia neurológica estrecha. No contraindicado por edad sola.',

    insufRenal: 'Sin ajuste de dosis. En IR grave: mayor riesgo hemorrágico por comorbilidades asociadas — vigilancia estrecha.',

    insufHepatica: 'En IH grave: mayor riesgo hemorrágico por déficit de factores de coagulación. Sin ajuste específico de dosis de alteplasa.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Actilyse® (alteplasa).',
      'NINDS rt-PA Stroke Study Group. Tissue plasminogen activator for acute ischemic stroke. NEJM. 1995.',
      'Hacke W et al. Thrombolysis with alteplase 3 to 4.5 hours after acute ischemic stroke. NEJM. 2008 (ECASS III).',
      'Powers WJ et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke. AHA/ASA Stroke. 2019.',
      'Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.',
      'Emberson J et al. Effect of treatment delay, age, and stroke severity on outcomes. Lancet. 2014.',
    ],
  },

});
