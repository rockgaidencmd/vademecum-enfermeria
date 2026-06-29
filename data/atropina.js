/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/atropina.js
   Fuentes: CIMA AEMPS, FDA DailyMed, AHA ACLS 2020-2025,
   Manual WHO Antídotos, Toxicología
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'atropina',
  nombre:         'Atropina',
  nombreGenerico: 'Atropine Sulfate',
  categoria:      'antiarritmicos',
  tags:           ['UCI', 'emergencia', 'bradicardia', 'asistolia', 'intoxicación organofosforados', 'pre-anestesia'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Anticolinérgico potente. Riesgo de taquicardia paradójica con dosis < 0.5 mg. Sobredosis causa síndrome anticolinérgico tóxico (delirium, hipertermia, taquicardia, retención urinaria). Vía aérea protegida si dosis altas.',

  nivel1: {

    puntosClave: [
      'Anticolinérgico (antagonista muscarínico) — bloquea receptores M en músculo liso, glándulas, corazón.',
      '<b>DOSIS MÍNIMA EFECTIVA: 0.5 mg IV en adultos</b>. Dosis < 0.5 mg pueden causar BRADICARDIA PARADÓJICA (efecto vagomimético central).',
      'Vía: IV (preferida emergencia), IM, SC, intratraqueal (paro cardíaco si no IV).',
      'En bradicardia sintomática (ACLS): 0.5 mg IV c/3-5 min, máximo 3 mg total.',
      'Intoxicación por organofosforados: dosis MUY ALTAS (2-5 mg IV c/5-10 min hasta atropinización: sequedad, midriasis, taquicardia leve).',
    ],

    resumenRapido: 'Alcaloide tropánico extraído de Atropa belladonna. Antagonista competitivo de receptores muscarínicos. Efectos: taquicardia (M2 cardíaco), broncodilatación (M3 pulmonar), midriasis y cicloplejía (M3 ocular), inhibición de secreciones (M3 glandular), relajación musculatura GI/GU. Indicada en: bradicardia sintomática, asistolia (controversial), pre-anestesia (reducir secreciones), intoxicación por organofosforados/carbamatos, antídoto en bradicardia por β-bloqueantes/calcio-antagonistas.',

    objetivoTerapeutico: 'FC > 60 lpm en bradicardia sintomática · Reversión de bradiarritmias por intoxicación · Atropinización en intoxicación colinérgica · Reducción de secreciones pre-anestesia',

    preparacion: {
      'Presentación':             '<b>1 mg/mL ampolla 1 mL (1 mg total)</b> - presentación estándar',
      'Presentación alt.':        '0.5 mg/mL ampolla 1 mL · 0.25 mg/mL ampolla pediátrica',
      'Diluyente':                'SF 0.9% (preferido) · SG 5% · Agua para inyección',
      'Dilución IV directa':      'Habitualmente <b>sin diluir o diluida 1:10 en SF</b> (0.1 mg/mL para titulación)',
      'Dilución para infusión':   '5-10 mg en 250 mL SF (uso restringido - intoxicación)',
      'Vía':                      'IV (preferida), IM, SC, intratraqueal (paro si no IV), oftálmica (gotas)',
      '⏱️ BOLO IV bradicardia':   '<b>0.5-1 mg IV rápido (bolo)</b>',
      '⏱️ BOLO IV pre-anestesia': '0.4-0.6 mg IV 30-60 min antes',
      '⏱️ INTOXICACIÓN ORGANO.':  '<b>2-5 mg IV bolo c/5-10 min</b> hasta atropinización (puede requerir dosis ENORMES)',
      '⏱️ Intratraqueal (paro)':   '2-3× dosis IV (2-3 mg) diluidos en 10 mL SF',
      '⏱️ DOSIS MÁXIMA ACLS':     '<b>3 mg total IV</b> en bradicardia',
      'Bomba':                    'Necesaria solo para infusión continua en intoxicación severa',
      '🧊 ESTABILIDAD':           '<b>24 horas a temperatura ambiente</b> protegida de luz extrema en SF/SG 5%',
      '🧊 Ampolla sin abrir':     'Temperatura ambiente (< 25°C), protegida de luz, hasta vencimiento',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez o color amarillento',
    },

    vigilancia: {
      antes: [
        'ECG basal — identificar tipo de bradicardia (sinusal, bloqueo AV grado).',
        'PA, FC, SpO₂ basales registrados.',
        'Evaluar SINTOMATOLOGÍA de bradicardia: hipotensión, alteración consciencia, dolor torácico, disnea, síncope.',
        'Atropina solo si bradicardia SINTOMÁTICA — bradicardia asintomática no requiere tratamiento.',
        'En intoxicación organofosforados: evaluar atropinización - sialorrea, broncorrea, miosis, bradicardia, sudoración.',
        'Doble verificación: ampolla 1 mg/mL, dosis, vía.',
        'Acceso IV permeable, equipo RCP disponible.',
      ],
      durante: [
        'Monitor cardíaco continuo — evaluar respuesta de FC y ritmo.',
        '<b>RESPUESTA ESPERADA: ↑ FC en 1-2 min post-administración</b>.',
        'Vigilar TAQUICARDIA SECUNDARIA — FC > 120 lpm puede ser excesiva.',
        'Observar respuesta clínica: mejoría hipotensión, consciencia, perfusión.',
        'Vigilar EFECTOS ANTICOLINÉRGICOS: midriasis, sequedad de mucosas, retención urinaria, ↑ temperatura.',
        'Si dosis sucesivas: vigilar TOXICIDAD (delirium, hipertermia, alucinaciones).',
      ],
      despues: [
        'Continuar monitor cardíaco hasta estabilización.',
        'Vigilar efectos anticolinérgicos residuales — pueden durar 4-6h.',
        'En ancianos: vigilancia neurológica intensiva (riesgo delirium).',
        'En intoxicación organofosforados: vigilancia prolongada, infusión continua si necesario.',
        'Si retención urinaria: considerar sondaje vesical.',
        'Vigilar PIO en glaucoma de ángulo cerrado (CONTRAINDICACIÓN).',
        'Documentar: dosis, hora, respuesta FC, efectos adversos, tiempo de recuperación.',
      ],
      suspender: [
        'Taquicardia excesiva (FC > 130-140 lpm) en bradicardia.',
        'Arritmia ventricular nueva (TV, FV).',
        'Síndrome anticolinérgico tóxico: delirium, hipertermia > 39°C, retención urinaria severa.',
        'Glaucoma agudo precipitado (dolor ocular, visión borrosa).',
        'Íleo paralítico.',
        'Respuesta adecuada en bradicardia — no repetir innecesariamente.',
        'En intoxicación: cuando se logra atropinización adecuada (sequedad, FC 80-100).',
      ],
    },

    incompatibilidades: [
      'Soluciones alcalinas — degradación.',
      'Heparina IV — incompatibilidad documentada.',
      'Tiopental — incompatibilidad.',
      'Adrenalina — generalmente compatible, pero verificar concentración.',
      'En jeringa pre-cargada de paro (Bristol): usar inmediatamente tras apertura.',
      'Lavar línea con SF entre fármacos.',
    ],

    alertasSeguridad: [
      '🔴 DOSIS < 0.5 mg = BRADICARDIA PARADÓJICA por efecto vagomimético central — siempre ≥ 0.5 mg adulto.',
      '🔴 SÍNDROME ANTICOLINÉRGICO TÓXICO con sobredosis: "rojo como tomate, seco como hueso, caliente como horno, ciego como murciélago, loco como cabra".',
      '🟠 Taquicardia secundaria — puede empeorar isquemia en IAM.',
      '🟠 Glaucoma de ángulo cerrado — puede precipitar crisis aguda (CONTRAINDICACIÓN).',
      '🟠 Hiperplasia prostática — puede causar retención urinaria aguda.',
      '🟡 Confusión, delirium en ancianos — efecto central anticolinérgico.',
      '🟡 Hipertermia por bloqueo de sudoración — peligroso en climas calientes, niños.',
      '🟡 Visión borrosa, midriasis — afecta capacidad de conducir.',
    ],
  },

  modulos: {

    bradicardia: `
      <b>Algoritmo Bradicardia ACLS (AHA 2020-2025):</b><br/>
      <b>EVALUAR SI BRADICARDIA ES SINTOMÁTICA:</b><br/>
      • Hipotensión.<br/>
      • Alteración aguda del nivel de consciencia.<br/>
      • Signos de shock.<br/>
      • Dolor torácico isquémico.<br/>
      • Insuficiencia cardíaca aguda.<br/><br/>
      <b>SI ASINTOMÁTICA:</b> Observar y monitorizar, NO atropina.<br/><br/>
      <b>SI SINTOMÁTICA:</b><br/>
      1. <b>ATROPINA 0.5-1 mg IV bolo rápido</b>.<br/>
      2. Repetir c/3-5 min hasta máximo <b>3 mg total</b>.<br/>
      3. Si NO responde:<br/>
      • Marcapasos transcutáneo.<br/>
      • Dopamina 5-20 mcg/kg/min IV.<br/>
      • Adrenalina 2-10 mcg/min IV.<br/>
      4. Tratar causa subyacente (IAM, hipoxia, hipotermia, hipo/hiperpotasemia, intoxicación).<br/><br/>
      <b>SITUACIONES ESPECIALES:</b><br/>
      • Bloqueo AV grado 2 Mobitz II o grado 3: atropina poco efectiva → marcapasos.<br/>
      • Trasplante cardíaco: atropina inefectiva (corazón denervado) → adrenalina/marcapasos.<br/>
      • IAM inferior: bradicardia común, atropina suele funcionar bien.
    `,

    intoxicacionOrgano: `
      <b>Intoxicación por Organofosforados / Carbamatos:</b><br/>
      <b>CAUSA:</b> Pesticidas, gases nerviosos. Inhiben acetilcolinesterasa → exceso de acetilcolina.<br/><br/>
      <b>SÍNDROME COLINÉRGICO (SLUDGE-M):</b><br/>
      • <b>S</b>alivación · <b>L</b>agrimeo · <b>U</b>rinación · <b>D</b>iarrea<br/>
      • <b>G</b>astrointestinal upset · <b>E</b>mesis<br/>
      • <b>M</b>iosis, fasciculaciones, debilidad muscular.<br/>
      • Broncoespasmo, broncorrea severa (causa muerte).<br/>
      • Bradicardia, hipotensión.<br/>
      • Convulsiones, coma.<br/><br/>
      <b>TRATAMIENTO ATROPINA (dosis MUY altas):</b><br/>
      1. <b>ATROPINA 2-5 mg IV bolo</b> cada 5-10 min.<br/>
      2. <b>DOBLAR la dosis cada vez</b> hasta lograr atropinización.<br/>
      3. <b>Dosis acumuladas pueden alcanzar 50-200 mg/día</b> en intoxicación severa.<br/>
      4. <b>ATROPINIZACIÓN ADECUADA:</b><br/>
      • Sequedad de mucosas y axilas.<br/>
      • Midriasis (pupila > 4 mm).<br/>
      • FC 80-120 lpm.<br/>
      • Resolución de broncorrea (objetivo principal).<br/>
      5. <b>Infusión de mantenimiento:</b> 10-20% de la dosis total de carga por hora.<br/>
      <b>ADYUVANTES:</b><br/>
      • Pralidoxima 1-2 g IV (reactivador de acetilcolinesterasa).<br/>
      • Benzodiazepinas si convulsiones.<br/>
      • Soporte ventilatorio.<br/>
      • Descontaminación (lavado piel, lavado gástrico).
    `,

    sindromeAnticolinergico: `
      <b>Síndrome Anticolinérgico Tóxico (Sobredosis Atropina):</b><br/>
      <b>"ROJO COMO TOMATE, SECO COMO HUESO, CALIENTE COMO HORNO, CIEGO COMO MURCIÉLAGO, LOCO COMO CABRA":</b><br/>
      • <b>Rojo:</b> rubor cutáneo, eritema.<br/>
      • <b>Seco:</b> mucosas y piel secas, anhidrosis.<br/>
      • <b>Caliente:</b> hipertermia (riesgo de fiebre maligna).<br/>
      • <b>Ciego:</b> midriasis, visión borrosa, cicloplejía.<br/>
      • <b>Loco:</b> delirium, alucinaciones, agitación, ataxia.<br/>
      <b>Otros:</b> taquicardia, retención urinaria, íleo, convulsiones, coma.<br/><br/>
      <b>MANEJO:</b><br/>
      1. SUSPENDER atropina.<br/>
      2. Soporte ABC.<br/>
      3. Enfriamiento físico si hipertermia (compresas, ventilador).<br/>
      4. Benzodiazepinas para agitación (lorazepam, midazolam) — NO antipsicóticos (empeoran).<br/>
      5. <b>FISOSTIGMINA 1-2 mg IV lento</b> en casos severos (antídoto - inhibidor de colinesterasa).<br/>
      • Solo bajo monitorización, riesgo bradicardia, convulsiones.<br/>
      6. Sondaje vesical si retención urinaria.<br/>
      7. Hidratación IV.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Tener atropina en carro de paro — accesible para emergencias.',
      'Verificar ampolla 1 mg/mL — confusión con otras presentaciones puede ser fatal.',
      'En bradicardia sintomática: dosis mínima 0.5 mg adulto (dosis menores son paradójicas).',
      'Bolo IV RÁPIDO — efecto en 1-2 min.',
      'Monitor cardíaco continuo durante administración y 30 min post.',
      'Documentar dosis acumulada — máximo 3 mg en ACLS (intoxicación: sin tope).',
      'Vigilar respuesta: ↑ FC esperada.',
      'En intoxicación organofosforados: preparar JERINGAS MÚLTIPLES de atropina (puede requerir decenas de mg).',
      'Educar al paciente: midriasis, boca seca, dificultad para orinar son efectos esperados.',
      'En ancianos: vigilancia neurológica estrecha post-administración (delirium frecuente).',
      'Si retención urinaria: considerar sondaje vesical.',
      'Vigilar temperatura corporal — bloqueo de sudoración puede causar hipertermia.',
    ],

    efectosAdversos: [
      '🔴 Taquicardia ventricular (raro pero posible)',
      '🔴 Síndrome anticolinérgico tóxico (sobredosis)',
      '🔴 Crisis de glaucoma de ángulo cerrado',
      '🔴 Retención urinaria aguda (especialmente HBP)',
      '🟠 Taquicardia secundaria',
      '🟠 Hipertensión',
      '🟠 Delirium / confusión en ancianos',
      '🟠 Hipertermia (especialmente niños, ambiente caliente)',
      '🟡 Midriasis, visión borrosa, fotofobia',
      '🟡 Sequedad de boca, ojos secos',
      '🟡 Anhidrosis (sin sudor)',
      '🟡 Estreñimiento, íleo',
      '🟡 Rubor cutáneo, eritema',
      '🟡 Sed intensa',
    ],

    contraindicaciones: [
      'Glaucoma de ángulo cerrado — contraindicación absoluta (puede precipitar crisis).',
      'Hiperplasia prostática severa con retención urinaria.',
      'Íleo paralítico, megacolon.',
      'Estenosis pilórica, úlcera péptica activa.',
      'Miastenia gravis (relativa - empeora).',
      'Hipersensibilidad a atropina o belladona.',
      'Taquicardia ventricular preexistente.',
      'Tirotoxicosis (riesgo crisis).',
    ],

    fotosensibilidad: 'Moderadamente fotosensible. Proteger ampollas de luz directa intensa. La solución puede tornarse amarillenta con exposición prolongada — sin pérdida significativa de actividad si el cambio es leve. Almacenar en envase original.',

    estabilidad: {
      'Ampolla sin abrir':        'Temperatura ambiente, protegida de luz, hasta vencimiento',
      'Jeringa pre-cargada paro': 'Hasta vencimiento — usar inmediatamente tras apertura',
      'Diluida en SF/SG 5%':      '<b>24 horas a 15-25°C</b> protegida de luz',
      'Aspecto':                  'Transparente, incolora — leve amarillento aceptable, desechar si turbidez',
      'Temperatura':              'NO congelar · 15-25°C',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato. Desechar sobrante.',
      dosisRestante:    'No conservar. Desechar inmediatamente (administración habitualmente en bolo).',
      infusionPreparada:'Estable 24 h a temperatura ambiente en SF 0.9% o SG 5%. Infusión continua poco habitual.',
      notas:            'Compatible con la mayoría de soluciones IV. Desechar si hay cambio de color o precipitado.',
    },

    presentaciones: [
      'Atropina Sulfato 1 mg/mL — ampolla 1 mL (presentación estándar)',
      'Atropina Sulfato 0.5 mg/mL — ampolla 1 mL',
      'Atropina Sulfato 0.25 mg/mL — ampolla pediátrica',
      'Atropina jeringa pre-cargada 1 mg en 10 mL (carro de paro)',
      'Atropina colirio 0.5%, 1% (uso oftálmico — midriasis diagnóstica)',
      'Atropina IM autoinyector (uso militar — gases nerviosos)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Bradicardia sintomática (ACLS)',     dosis: '0.5-1 mg IV c/3-5 min (máx 3 mg)',     via: 'IV' },
      { indicacion: 'Pre-anestesia',                       dosis: '0.4-0.6 mg IV/IM 30-60 min antes',     via: 'IV/IM' },
      { indicacion: 'Reducir secreciones (intubación)',    dosis: '0.5 mg IV 5 min antes',                via: 'IV' },
      { indicacion: 'Intoxicación organofosforados',      dosis: '<b>2-5 mg IV c/5-10 min doblando</b>',  via: 'IV' },
      { indicacion: 'Intratraqueal en paro (si no IV)',    dosis: '2-3 mg en 10 mL SF',                   via: 'ET' },
      { indicacion: 'Pediatría bradicardia',              dosis: '0.02 mg/kg (mín 0.1 mg, máx 0.5 mg)',  via: 'IV' },
      { indicacion: 'DOSIS MÍNIMA ADULTO (paradójica)',   dosis: '<b>0.5 mg</b> - menos causa bradicardia',via: 'IV' },
      { indicacion: 'DOSIS MÁXIMA ACLS adulto',           dosis: '<b>3 mg total</b>',                     via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Atraviesa placenta — puede causar taquicardia fetal. Uso justificado en emergencias maternas (bradicardia, intoxicación). En lactancia: cantidades mínimas en leche, generalmente compatible.',

    pediatria: '<b>Dosis 0.02 mg/kg IV (mínimo 0.1 mg, máximo 0.5 mg en niños)</b>. Dosis MÍNIMA 0.1 mg para evitar bradicardia paradójica. Neonatos: 0.01-0.02 mg/kg. En pre-anestesia pediátrica: 0.01-0.02 mg/kg IM 30 min antes. Riesgo de hipertermia mayor en niños.',

    adultoMayor: 'Mayor riesgo de delirium, confusión, retención urinaria, glaucoma. Iniciar con dosis menor si es posible (0.5 mg). Vigilancia neurológica intensiva post-administración. Evaluar HBP previo.',

    insufRenal: 'Sin ajuste de dosis significativo. Eliminación 30-50% renal — en IRC severa puede prolongar efecto. Vigilancia clínica estándar.',

    insufHepatica: 'Metabolismo hepático presente. En cirrosis severa: vigilancia clínica de efectos prolongados. Generalmente no requiere ajuste.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Atropina Sulfato 1 mg/mL. Agencia Española de Medicamentos.',
      'FDA DailyMed. Atropine Sulfate Injection. U.S. National Library of Medicine.',
      'AHA ACLS Guidelines 2020-2025. Bradycardia Algorithm. Circulation.',
      'WHO. Antidotes for Poisoning by Organophosphorus Pesticides. Geneva.',
      'Eddleston M, et al. Management of acute organophosphorus pesticide poisoning. Lancet. 2008.',
      'Pediamécum AEP. Atropina. Asociación Española de Pediatría.',
      'Tintinalli\'s Emergency Medicine. Anticholinergic Toxicity. 9th edition.',
      'Goldfrank\'s Toxicologic Emergencies. Atropine in Poisoning. 11th edition.',
    ],
  },

});
