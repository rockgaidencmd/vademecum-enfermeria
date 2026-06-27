/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/dexametasona.js
   Fuentes: CIMA AEMPS (Fortecortín, Dexametasona Kern,
   Medochemie, Kalceks), FDA DailyMed, COVID RECOVERY,
   Guías oncológicas
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'dexametasona',
  nombre:         'Dexametasona',
  nombreGenerico: 'Dexamethasone Phosphate (sodio)',
  categoria:      'otros',
  tags:           ['corticoide', 'edema cerebral', 'antiemético', 'COVID-19', 'oncología', 'anafilaxia', 'asma'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Glucocorticoide sintético MUY POTENTE — <b>30× más potente que hidrocortisona</b>, <b>7.5× más que prednisolona</b>.',
      '<b>FOTOSENSIBLE</b> — proteger ampolla del exterior (caja original) y solución preparada de la luz directa.',
      'Acción muy prolongada (vida media biológica > 36h) — riesgo de acumulación con uso diario continuado.',
      '<b>SIN actividad mineralocorticoide</b> — no causa retención sodio/agua significativa (a diferencia de hidrocortisona).',
      'Contiene SULFITOS — riesgo de reacción alérgica (broncoespasmo) en pacientes asmáticos sensibles.',
    ],

    resumenRapido: 'Glucocorticoide sintético fluorado de acción muy prolongada (vida media 36-72h). Antiinflamatorio, antialérgico, inmunosupresor potente. NO tiene actividad mineralocorticoide (no retiene sodio). Indicado en edema cerebral (TUMORES, TCE, ACV hemorrágico), náuseas/vómitos por quimioterapia, anafilaxia, asma severa, exacerbación EPOC, profilaxis de náuseas post-operatorias, <b>COVID-19 con requerimiento de O₂</b> (RECOVERY Trial), prevención de SDRA neonatal, compresión medular oncológica.',

    objetivoTerapeutico: 'Reducir edema cerebral · Prevenir/tratar náuseas y vómitos · Antiinflamación potente · Inmunosupresión · Mejorar supervivencia en COVID-19 grave · Reducir compresión tumoral',

    preparacion: {
      'Presentación':             '<b>Fortecortín 4 mg/mL — ampolla 1 mL (4 mg) o 2 mL (8 mg)</b>',
      'Presentación alt.':        'Fortecortín 40 mg/5 mL (8 mg/mL) — alta concentración',
      'Diluyente':                'SF 0.9% · SG 5% · Ringer Lactato (todos compatibles - CIMA AEMPS)',
      'Dilución IV directa':      'Habitualmente sin diluir o + 5-10 mL SF',
      'Dilución infusión corta':  '4-20 mg en 50-100 mL SF/SG 5% → infundir en 15-30 min',
      'Vía':                      'IV (preferida), IM, intraarticular, infiltración',
      '⏱️ BOLO IV directo':       '<b>Inyectar LENTAMENTE en 1-2 minutos</b> (irritante venoso)',
      '⏱️ INFUSIÓN IV':           '<b>15-30 minutos en 50-100 mL SF</b> (preferido si dosis altas)',
      '⏱️ DOSIS antiemética':     '4-8 mg IV pre-quimioterapia',
      '⏱️ DOSIS edema cerebral':  '<b>8 mg IV inicial, luego 4 mg c/6h IM/IV</b>',
      '⏱️ DOSIS COVID-19':        '<b>6 mg IV c/24h × 10 días</b> (RECOVERY)',
      '⏱️ DOSIS anafilaxia':       '8-20 mg IV (adyuvante a adrenalina)',
      'Bomba':                    'Recomendada para infusión',
      '🌑 FOTOPROTECCIÓN':        '<b>OBLIGATORIA — conservar ampolla en embalaje exterior. Proteger bolsa de infusión con material opaco si es prolongada.</b>',
      '🧊 ESTABILIDAD':           '<b>48 HORAS a 25°C protegida de luz</b> (CIMA AEMPS)',
      '🧊 Refrigerada (2-8°C)':   '24 horas',
      'Aspecto':                  'Solución transparente, incolora a ligeramente amarillenta — desechar si turbidez o cristales',
    },

    vigilancia: {
      antes: [
        'Verificar glucemia basal — corticoides ↑ glucosa significativamente.',
        'PA basal — vigilar HTA por corticoide (menos que hidrocortisona pero posible).',
        'Revisar antecedentes: diabetes, HTA, infección activa, úlcera péptica, osteoporosis.',
        '<b>VERIFICAR ALERGIA A SULFITOS</b> — formulación los contiene.',
        'Comprobar uso de otros corticoides previos.',
        'En diabéticos: prever ajuste de insulina (probable hiperglucemia).',
        'En infecciones: corticoides enmascaran fiebre/leucocitosis — descartar TB latente, hongos.',
      ],
      durante: [
        'Administrar LENTAMENTE en 1-2 min (bolo) o 15-30 min (infusión) — bolo rápido causa rubor, ardor genital, parestesias.',
        'Vigilar reacción alérgica primeros 15 min (sulfitos).',
        'Observar sitio IV — irritación venosa leve posible.',
        'Si dolor en sitio: diluir más o cambiar a infusión.',
      ],
      despues: [
        '<b>Monitorizar glucemia c/4-6h × 24-48h</b> — hiperglucemia muy frecuente.',
        'Iniciar/ajustar insulina si glucemia > 180 mg/dL (objetivo 140-180 mg/dL UCI).',
        'Vigilar PA — corticoides pueden ↑ PA.',
        'Vigilar signos de infección — corticoides enmascaran fiebre.',
        'En uso prolongado: control de K+, calcio, glucemia, densitometría.',
        'En dosis altas/prolongadas: profilaxis úlcera péptica (omeprazol, famotidina).',
        'En diabéticos: ajuste de insulina basal y bolo.',
        'NO suspender abruptamente si uso > 7-10 días — descenso progresivo.',
      ],
      suspender: [
        'Reacción alérgica severa (broncoespasmo, anafilaxia por sulfitos).',
        'Hiperglucemia severa no controlable con insulina.',
        'Infección oculta empeorando.',
        'Hemorragia digestiva activa.',
        'Psicosis esteroidea severa.',
        'Prescripción médica de cambio o descenso gradual.',
      ],
    },

    incompatibilidades: [
      'Midazolam — INCOMPATIBLE (precipita).',
      'Haloperidol — INCOMPATIBLE.',
      'Otros corticoides en misma mezcla — verificar siempre.',
      '<b>Irritante venoso — puede cristalizar al mezclar con otros fármacos</b>.',
      'Si requiere mezcla: usar volumen grande de diluyente.',
      'Tramadol y morfina: COMPATIBLES en mezcla SC (uso paliativos).',
      'Lavar línea con SF antes y después de otros medicamentos.',
    ],

    alertasSeguridad: [
      '🟠 <b>FOTOSENSIBLE</b> — proteger ampolla y solución preparada.',
      '🟠 Hiperglucemia muy frecuente — monitorizar c/4-6h, ajuste insulina.',
      '🟠 Alergia a SULFITOS (excipiente) — broncoespasmo en asmáticos.',
      '🟠 Inmunosupresión potente — enmascara signos de infección.',
      '🟠 Vida media MUY prolongada (36-72h) — acumulación con uso diario.',
      '🟡 Úlcera péptica — considerar protección gástrica si dosis altas.',
      '🟡 Psicosis esteroidea — más frecuente con dosis altas (alteraciones humor, insomnio, manía).',
      '🟡 NO suspender bruscamente uso > 7-10 días — riesgo crisis suprarrenal.',
      '🟡 Reactivación TB latente — descartar antes de uso prolongado.',
      '🟡 Cataratas, glaucoma con uso prolongado > 3 meses.',
    ],
  },

  modulos: {

    covid: `
      <b>Dexametasona en COVID-19 (RECOVERY Trial 2020):</b><br/>
      <b>INDICACIÓN:</b> Pacientes adultos y adolescentes (≥12 años, ≥40 kg) con COVID-19 que <b>requieren oxigenoterapia suplementaria</b>.<br/>
      <b>NO indicada</b> en COVID-19 leve sin O₂ (puede empeorar).<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>6 mg IV c/24h × hasta 10 días</b>.<br/>
      • Equivalente VO: 6 mg de dexametasona.<br/>
      • Pediátrico (12-17 años): 6 mg/día.<br/><br/>
      <b>BENEFICIO:</b><br/>
      • Reducción mortalidad 35% en ventilación mecánica.<br/>
      • Reducción mortalidad 20% en O₂ suplementario sin VM.<br/>
      • SIN beneficio (posible daño) en COVID-19 leve.<br/><br/>
      <b>VIGILANCIA específica:</b><br/>
      • Glucemia (hiperglucemia frecuente).<br/>
      • Hiperinfección por Strongyloides (en endémicas).<br/>
      • Sobreinfección bacteriana, fúngica.<br/>
      • Mucormicosis (especialmente en diabéticos).
    `,

    edemaCerebral: `
      <b>Dexametasona en Edema Cerebral:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Edema vasogénico por TUMOR cerebral (primario o metástasis).<br/>
      • Edema post-TCE (controvertido — uso restringido a casos seleccionados).<br/>
      • Compresión medular oncológica.<br/>
      <b>NO indicada en:</b> ACV isquémico, ACV hemorrágico (sin beneficio probado).<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>Inicial: 10-16 mg IV bolo</b>.<br/>
      • <b>Mantenimiento: 4-8 mg IV/VO c/4-6h</b>.<br/>
      • En compresión medular: 8-16 mg IV bolo + 4 mg c/6h.<br/>
      • Reducir gradualmente cuando mejore clínicamente.<br/><br/>
      <b>VIGILANCIA:</b><br/>
      • Estado neurológico (Glasgow, déficit focal).<br/>
      • PIC si monitor disponible.<br/>
      • Glucemia (hiperglucemia frecuente).<br/>
      • Hemorragia digestiva (profilaxis gástrica).
    `,

    antiemetico: `
      <b>Dexametasona como Antiemético:</b><br/>
      <b>INDICACIONES:</b><br/>
      • Prevención náuseas/vómitos por quimioterapia (NVIQ).<br/>
      • Prevención náuseas/vómitos post-operatorios (NVPO).<br/>
      • Vómitos refractarios a otros antieméticos.<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>NVIQ alta emetogenicidad:</b> 12-20 mg IV pre-quimio + 8 mg/día × 3-4 días.<br/>
      • <b>NVIQ moderada:</b> 8 mg IV pre-quimio + 4 mg/día × 2-3 días.<br/>
      • <b>NVPO profilaxis:</b> 4-8 mg IV al inicio de anestesia.<br/>
      • <b>NVPO tratamiento:</b> 4-8 mg IV PRN.<br/><br/>
      <b>COMBINACIONES:</b><br/>
      • Con ondansetrón (5HT3) → efecto sinérgico.<br/>
      • Con aprepitant (NK1) en alta emetogenicidad.<br/>
      • Con metoclopramida en cuadros refractarios.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar alergia a sulfitos antes de cada administración.',
      'Etiquetar bolsa de infusión con: Dexametasona [dosis], concentración, hora preparación, fecha límite (48h protegida de luz).',
      '<b>Conservar ampollas en embalaje exterior para proteger de luz</b>.',
      'En infusión continua: envolver bolsa en material opaco si > 24h.',
      'Inyectar lentamente (1-2 min bolo, 15-30 min infusión) — evita rubor, ardor genital.',
      'Acceso IV permeable — vigilar irritación venosa.',
      '<b>Monitorizar glucemia c/4-6h × 24-48h</b> — iniciar insulina si > 180 mg/dL.',
      'En diabéticos: ajuste de insulina antes de iniciar tratamiento.',
      'Vigilar PA — corticoides pueden ↑ PA.',
      'Iniciar profilaxis gástrica (omeprazol) si dosis altas o factores de riesgo.',
      'En oncológicos: documentar relación con quimioterapia, esquema.',
      'En COVID-19: educar sobre signos de hiperglucemia, infección secundaria.',
      'En uso prolongado: NO suspender abruptamente — coordinar descenso con médico.',
      'Documentar: dosis, hora, vía, indicación, glucemia pre/post, efectos adversos.',
    ],

    efectosAdversos: [
      '🟠 Hiperglucemia muy frecuente (especialmente en diabéticos)',
      '🟠 Hipertensión arterial',
      '🟠 Inmunosupresión / infecciones secundarias',
      '🟠 Úlcera péptica / sangrado digestivo',
      '🟠 Psicosis esteroidea (agitación, insomnio, euforia, depresión)',
      '🟠 Reacción alérgica a sulfitos (broncoespasmo en asmáticos)',
      '🟡 Cara de luna llena (rasgos cushingoides)',
      '🟡 Aumento de peso, retención líquidos (leve - sin actividad mineralocorticoide)',
      '🟡 Hipopotasemia (con dosis altas)',
      '🟡 Osteoporosis con uso prolongado (> 3 meses)',
      '🟡 Cataratas, glaucoma (uso prolongado)',
      '🟡 Acné, hirsutismo, estrías',
      '🟡 Atrofia cutánea, lentitud cicatrización',
      '🟡 Cushing iatrogénico (uso prolongado)',
      '🟡 Miopatía esteroidea',
      '🟡 Supresión eje hipotálamo-hipófisis-suprarrenal',
    ],

    contraindicaciones: [
      'Infección sistémica activa NO TRATADA (especialmente fúngica).',
      'Hipersensibilidad a dexametasona o sulfitos (excipiente).',
      'Tuberculosis activa no tratada.',
      'Úlcera péptica activa sin profilaxis.',
      'Vacunación con virus vivos atenuados.',
      'Glaucoma severo no controlado.',
      'Diabetes mellitus mal controlada (relativa - controlar con insulina).',
      'Embarazo en 1er trimestre (relativa - usar si beneficio).',
      'Síndrome de Cushing previo.',
    ],

    fotosensibilidad: '<b>SÍ — FOTOSENSIBLE</b>. La AEMPS recomienda <b>conservar las ampollas en el embalaje exterior</b> para protegerlas de la luz. La estabilidad post-dilución es de <b>48 horas a 25°C SI ESTÁ PROTEGIDA DE LA LUZ</b>. En infusiones prolongadas, envolver bolsa con material opaco. Si la solución se torna amarillenta intensa, desechar.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente (< 25°C), en embalaje exterior (luz)',
      'Diluida en SF/SG 5%/RL':   '<b>48 horas a 25°C PROTEGIDA DE LUZ</b> (CIMA AEMPS)',
      'Refrigerada (2-8°C)':       '24 horas',
      'Microbiológicamente':       'Usar inmediatamente si posible',
      'Aspecto':                   'Transparente, incolora a ligeramente amarillenta — desechar si turbidez o cristales',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Fortecortín® 4 mg/mL — ampolla 1 mL (4 mg) o 2 mL (8 mg) - Merck',
      'Fortecortín® 40 mg/5 mL (8 mg/mL) — ampolla 5 mL (alta concentración)',
      'Dexametasona Kern Pharma 4 mg/mL — ampolla 1 mL',
      'Dexametasona Medochemie 4 mg/mL — ampolla 1 mL',
      'Dexametasona Kalceks 4 mg/mL — ampolla (uso COVID-19 EMA)',
      'Dexametasona VO: comprimidos 0.5, 1, 4, 8, 20, 40 mg',
      'Dexametasona colirio (uso oftálmico)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'COVID-19 con O₂',                    dosis: '<b>6 mg IV c/24h × 10 días</b>',          via: 'IV/VO' },
      { indicacion: 'Edema cerebral (inicial)',           dosis: '8-16 mg IV bolo',                          via: 'IV' },
      { indicacion: 'Edema cerebral (mantenimiento)',     dosis: '4-8 mg IV/IM c/6h',                        via: 'IV/IM' },
      { indicacion: 'NVIQ alta emetogenicidad',           dosis: '12-20 mg IV pre-quimio',                   via: 'IV' },
      { indicacion: 'NVIQ moderada',                       dosis: '8 mg IV pre-quimio',                       via: 'IV' },
      { indicacion: 'NVPO profilaxis',                     dosis: '4-8 mg IV al inicio anestesia',           via: 'IV' },
      { indicacion: 'Anafilaxia (adyuvante)',              dosis: '8-20 mg IV',                              via: 'IV' },
      { indicacion: 'Compresión medular oncológica',      dosis: '16 mg IV bolo + 4 mg c/6h',                via: 'IV' },
      { indicacion: 'Asma severa',                          dosis: '4-8 mg IV c/6-8h',                         via: 'IV' },
      { indicacion: 'Prevención SDRA neonatal',           dosis: '6 mg IM c/12h × 4 dosis (materno)',       via: 'IM' },
    ],

    embarazo: 'Categoría C (FDA). Atraviesa placenta — usada deliberadamente para acelerar maduración pulmonar fetal (prevención SDRA neonatal en parto prematuro inminente). <b>Indicación obstétrica:</b> 6 mg IM c/12h × 4 dosis (24-34 semanas gestación). En otras indicaciones: usar si beneficio > riesgo. Compatible con lactancia en dosis terapéuticas.',

    pediatria: 'Adolescentes ≥12 años (≥40 kg): dosis adulto. Pediátrico: 0.5-1 mg/kg/día IV (máximo dosis adulto). Edema cerebral pediátrico: 0.5-1.5 mg/kg/día dividido c/6h. Vigilancia de crecimiento en uso prolongado.',

    adultoMayor: 'No requiere ajuste de dosis (CIMA AEMPS). Mayor riesgo de hiperglucemia, osteoporosis, fracturas, infecciones, psicosis. Vigilancia intensiva. Considerar profilaxis cálcio + vitamina D si uso > 3 meses.',

    insufRenal: 'No requiere ajuste de dosis (CIMA AEMPS). Metabolismo principalmente hepático. En diálisis: sin reposición necesaria.',

    insufHepatica: 'No requiere ajuste de dosis (CIMA AEMPS). En cirrosis severa: vigilancia clínica de efectos prolongados. Riesgo de retención hidrosalina menor que otros corticoides.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Fortecortín® 4 mg/mL y 40 mg/5 mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Dexametasona Kern Pharma 4 mg/mL. AEMPS.',
      'CIMA AEMPS. Ficha Técnica Dexametasona Medochemie 4 mg/mL. AEMPS.',
      'RECOVERY Collaborative Group. Dexamethasone in Hospitalized Patients with COVID-19. NEJM. 2021.',
      'ASCO Guidelines. Antiemetics: ASCO Guideline Update. J Clin Oncol. 2020.',
      'Roila F, et al. 2016 MASCC and ESMO Antiemetic Guidelines. Ann Oncol. 2016.',
      'WHO Living Guideline. Therapeutics and COVID-19. World Health Organization.',
      'AAN Guidelines. Brain Metastasis Management. Neurology.',
      'Cochrane Review. Dexamethasone for Preventing Postoperative Nausea and Vomiting. 2018.',
    ],
  },

});
