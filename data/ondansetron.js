/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/ondansetron.js
   Fuentes: CIMA AEMPS (Zofran, Ondansetrón Normon),
   FDA DailyMed, ASCO/MASCC Antiemetic Guidelines,
   FDA Black Box QT prolongation
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'ondansetron',
  nombre:         'Ondansetrón',
  nombreGenerico: 'Ondansetron Hydrochloride',
  categoria:      'otros',
  tags:           ['antiemético', '5-HT3', 'quimioterapia', 'post-operatorio', 'hiperémesis', 'náuseas'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Antagonista selectivo de receptores serotoninérgicos 5-HT3 — bloquea estímulo emético central y periférico.',
      'Antiemético de elección en: quimioterapia, radioterapia, náuseas/vómitos post-operatorios (NVPO), hiperémesis gravídica.',
      '<b>RIESGO DE PROLONGACIÓN DEL QT - dosis-dependiente</b> (FDA Black Box) — NO superar 16 mg IV en dosis única.',
      'Administración IV lenta (mínimo 30 segundos para bolo de 4-8 mg) — bolo rápido causa visión borrosa, mareos.',
      'No causa sedación significativa (a diferencia de metoclopramida) — sin reacciones extrapiramidales.',
    ],

    resumenRapido: 'Antagonista altamente selectivo del receptor 5-HT3 (serotoninérgico). Actúa bloqueando los receptores en zona quimiorreceptora gatillo y aferencias vagales del intestino. Indicado en prevención/tratamiento de náuseas y vómitos inducidos por quimioterapia (NVIQ) altamente o moderadamente emetogénica, radioterapia, post-operatorios (NVPO), hiperémesis gravídica refractaria. Inicio: 5-15 min IV, duración: 8-12h.',

    objetivoTerapeutico: 'Prevenir/tratar náuseas y vómitos · Mejorar tolerancia a quimioterapia · Prevenir aspiración post-operatoria · Controlar emesis en hiperémesis gravídica',

    preparacion: {
      'Presentación':             '<b>Ondansetrón 4 mg/2 mL ampolla (2 mg/mL)</b>',
      'Presentación alt.':        'Ondansetrón 8 mg/4 mL ampolla',
      'Diluyente':                'SF 0.9% · SG 5% (compatibles ambos)',
      'Dilución IV directa':      'Sin diluir o diluido 1:10 en SF para titulación',
      'Dilución infusión corta':  '<b>4-8 mg en 50-100 mL SF/SG 5%</b> → infundir en 15 min',
      'Vía':                      'IV (preferida hospital), IM, VO, sublingual (Zofran Zydis)',
      '⏱️ BOLO IV directo':       '<b>Mínimo 30 segundos para 4-8 mg</b> (idealmente 2-5 min)',
      '⏱️ INFUSIÓN IV corta':     '<b>15 minutos en 50-100 mL</b> (PREFERIDA)',
      '⏱️ DOSIS NVPO profilaxis': '4 mg IV al inducir anestesia o al final',
      '⏱️ DOSIS NVIQ':            '<b>8 mg IV 30 min antes de quimioterapia</b>',
      '⏱️ DOSIS MÁXIMA IV única': '<b>16 mg IV</b> (FDA Black Box - no superar)',
      'Bomba':                    'Recomendada para infusión corta',
      '🧊 ESTABILIDAD':           '<b>24 horas a 25°C y 7 días refrigerada (2-8°C)</b> en SF/SG 5% (CIMA AEMPS)',
      '🧊 Ampolla sin abrir':     'Temperatura ambiente, protegida de luz directa intensa',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>ECG basal — medir QT</b> (no usar si QTc > 500 ms).',
        'Revisar electrolitos basales: K+, Mg²⁺, Ca²⁺ (corregir antes si bajos).',
        'Comprobar uso de OTROS MEDICAMENTOS QUE PROLONGAN QT (amiodarona, sotalol, antipsicóticos, fluoroquinolonas, macrólidos).',
        'Evaluar función hepática — reducir dosis en cirrosis severa.',
        'En oncológicos: revisar esquema de quimioterapia (emetogenicidad alta/moderada/baja).',
        'Doble verificación: dosis, vía, momento de administración (pre-quimio).',
      ],
      durante: [
        '<b>Bolo IV en mínimo 30 segundos</b> (preferible 2-5 min) — bolo rápido causa visión borrosa transitoria.',
        'Vigilar PA, FC durante administración.',
        'Observar reacciones inmediatas: cefalea, rubor, palpitaciones.',
        'Vigilar sitio IV — irritación venosa leve posible.',
        'En dosis altas: considerar ECG durante administración.',
      ],
      despues: [
        'Evaluar efecto antiemético a los 15-30 min.',
        'Vigilar prolongación QT con ECG en dosis altas o factores de riesgo.',
        'Vigilar ESTREÑIMIENTO (efecto adverso frecuente).',
        'Documentar respuesta clínica: ausencia/presencia de emesis.',
        'En quimioterapia: planificar dosis siguientes (puede requerirse c/8-12h × 3-5 días).',
      ],
      suspender: [
        'Prolongación significativa del QT (QTc > 500 ms o ↑ > 60 ms desde basal).',
        'Arritmias ventriculares (TV, torsades de pointes).',
        'Síndrome serotoninérgico (si combinado con ISRS, IMAO, fentanilo).',
        'Reacción alérgica / anafilaxia (rara).',
        'Estreñimiento severo / íleo.',
        'Prescripción médica.',
      ],
    },

    incompatibilidades: [
      'Soluciones alcalinas — incompatibilidad.',
      'Anfotericina B — incompatibilidad documentada.',
      'Aciclovir — verificar compatibilidad.',
      'Aminofilina — incompatibilidad en algunas formulaciones.',
      'Furosemida — incompatibilidad.',
      'Generalmente compatible con: ranitidina, metoclopramida, dexametasona (en mezcla pre-quimio).',
      'Lavar línea con SF antes y después.',
    ],

    alertasSeguridad: [
      '🔴 <b>FDA BLACK BOX: PROLONGACIÓN DEL QT</b> - dosis-dependiente, riesgo de torsades de pointes.',
      '🔴 NO administrar dosis IV única > 16 mg (puede causar arritmias fatales).',
      '🟠 Combinación con otros prolongadores QT — vigilancia ECG.',
      '🟠 Hipopotasemia, hipomagnesemia ↑ riesgo torsades — corregir antes.',
      '🟠 Síndrome serotoninérgico con ISRS, IMAO, fentanilo, tramadol — vigilar.',
      '🟡 Estreñimiento frecuente — combinable con laxantes en uso prolongado.',
      '🟡 Cefalea común (10-15%).',
      '🟡 En cirrosis severa: reducir dosis 50%.',
    ],
  },

  modulos: {

    nviq: `
      <b>Ondansetrón en Náuseas/Vómitos por Quimioterapia (NVIQ):</b><br/>
      <b>EVALUAR EMETOGENICIDAD del esquema:</b><br/>
      • <b>ALTA (>90% emesis sin profilaxis):</b> Cisplatino, ciclofosfamida alta dosis, AC (doxo+ciclo), carmustina.<br/>
      • <b>MODERADA (30-90%):</b> Carboplatino, doxorrubicina, irinotecán, oxaliplatino.<br/>
      • <b>BAJA (10-30%):</b> Paclitaxel, docetaxel, etopósido, 5-FU.<br/>
      • <b>MÍNIMA (<10%):</b> Bleomicina, busulfán, vincristina.<br/><br/>
      <b>PROTOCOLO ALTA EMETOGENICIDAD:</b><br/>
      1. <b>Ondansetrón 8 mg IV</b> 30 min pre-quimio + 8 mg c/8h × 1-2 días.<br/>
      2. <b>Dexametasona 12-20 mg IV</b> pre-quimio + 8 mg/día × 3-4 días.<br/>
      3. <b>Aprepitant 125 mg VO</b> día 1 + 80 mg días 2-3 (NK1).<br/>
      4. <b>Olanzapina 5-10 mg VO</b> días 1-4 (opcional, ASCO 2020).<br/><br/>
      <b>PROTOCOLO MODERADA:</b><br/>
      1. Ondansetrón 8 mg IV pre-quimio + 8 mg c/12h × 1-2 días.<br/>
      2. Dexametasona 8 mg IV pre-quimio.<br/><br/>
      <b>RESCATE en emesis refractaria:</b><br/>
      • Metoclopramida 10-20 mg IV.<br/>
      • Olanzapina 5-10 mg VO.<br/>
      • Lorazepam 0.5-1 mg IV/SL (ansiolisis + amnesia).
    `,

    nvpo: `
      <b>Ondansetrón en Náuseas/Vómitos Post-Operatorios (NVPO):</b><br/>
      <b>EVALUAR FACTORES DE RIESGO (Apfel score):</b><br/>
      • Sexo femenino · No fumador · Historia NVPO o cinetosis · Uso opioides post-op.<br/>
      • 0 factores: ~10% riesgo · 4 factores: ~80% riesgo.<br/><br/>
      <b>PROFILAXIS multimodal (2+ factores):</b><br/>
      1. <b>Ondansetrón 4 mg IV</b> al final de cirugía.<br/>
      2. <b>Dexametasona 4-8 mg IV</b> al inducir anestesia.<br/>
      3. Considerar haloperidol 1 mg IV (alto riesgo).<br/>
      4. Propofol como agente anestésico (efecto antiemético).<br/><br/>
      <b>TRATAMIENTO NVPO establecido:</b><br/>
      • Ondansetrón 4 mg IV (si no se usó profilaxis).<br/>
      • Si ya recibió ondansetrón: cambiar de clase (droperidol, metoclopramida).<br/>
      • Repetir ondansetrón a las 6-8h (no antes).
    `,

    qt: `
      <b>Vigilancia de Prolongación QT — FDA Black Box:</b><br/>
      <b>FACTORES DE RIESGO:</b><br/>
      • Hipopotasemia (K+ < 3.5 mEq/L).<br/>
      • Hipomagnesemia (Mg < 1.7 mg/dL).<br/>
      • Hipocalcemia.<br/>
      • Síndrome QT largo congénito.<br/>
      • Uso concomitante de otros prolongadores QT.<br/>
      • Bradicardia, ICC.<br/><br/>
      <b>MEDICAMENTOS PROLONGADORES QT:</b><br/>
      • <b>Antiarrítmicos:</b> amiodarona, sotalol, quinidina.<br/>
      • <b>Antibióticos:</b> macrólidos (eritromicina, claritromicina), fluoroquinolonas (levofloxacino, moxifloxacino).<br/>
      • <b>Antipsicóticos:</b> haloperidol, droperidol, ziprasidona.<br/>
      • <b>Antieméticos:</b> metoclopramida.<br/>
      • <b>Antifúngicos:</b> fluconazol, ketoconazol.<br/>
      • <b>Otros:</b> metadona, citalopram.<br/><br/>
      <b>VIGILANCIA:</b><br/>
      • ECG basal — medir QTc (NO usar si QTc > 500 ms).<br/>
      • Corregir K+, Mg²⁺ antes de administrar.<br/>
      • <b>NO superar 16 mg IV en dosis única</b> (Black Box).<br/>
      • Si QTc > 500 ms o ↑ > 60 ms basal: SUSPENDER.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar prescripción: indicación (NVIQ, NVPO, hiperémesis), dosis, momento.',
      'Comprobar ECG basal en oncológicos o pacientes con factores de riesgo de QT largo.',
      'Verificar K+, Mg²⁺ séricos — corregir si bajos antes de administrar.',
      'Etiquetar bolsa de infusión con: Ondansetrón [dosis], concentración, hora, fecha límite (24h o 7 días refrigerado).',
      'Bolo IV LENTO mínimo 30 segundos (idealmente 2-5 min) — evita visión borrosa transitoria.',
      'Infusión corta preferida: 15 min en 50-100 mL SF.',
      'En quimioterapia: administrar 30 min ANTES del primer citostático.',
      'En NVPO: profilaxis al final de cirugía o al inducir anestesia.',
      'NO superar 16 mg IV en dosis única (Black Box FDA).',
      'Vigilar cefalea (efecto adverso frecuente - dar paracetamol PRN).',
      'Educar al paciente sobre estreñimiento (consumir fibra, hidratación, laxantes si necesario).',
      'Vigilar interacción con otros prolongadores QT.',
      'Documentar: dosis, hora, vía, respuesta clínica, efectos adversos.',
    ],

    efectosAdversos: [
      '🔴 Prolongación QT / torsades de pointes (raro)',
      '🟠 Arritmias ventriculares (especialmente combinado)',
      '🟠 Síndrome serotoninérgico (con ISRS/IMAO/fentanilo)',
      '🟡 Cefalea (10-15%)',
      '🟡 Estreñimiento (frecuente)',
      '🟡 Visión borrosa transitoria (bolo rápido)',
      '🟡 Mareos',
      '🟡 Fatiga, somnolencia leve',
      '🟡 Rubor, sensación de calor',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Reacción alérgica / anafilaxia (rara)',
      '🟡 Dolor en sitio de inyección',
      '🟡 Hipotensión (rara)',
    ],

    contraindicaciones: [
      'Síndrome QT largo congénito o adquirido (QTc > 500 ms).',
      'Hipersensibilidad a ondansetrón u otros antagonistas 5-HT3.',
      'Uso concomitante con apomorfina (CONTRAINDICACIÓN ABSOLUTA - hipotensión severa).',
      'Hipopotasemia o hipomagnesemia no corregidas.',
      'Precaución con: macrólidos, fluoroquinolonas, antiarrítmicos clase I/III.',
    ],

    fotosensibilidad: 'No es significativamente fotosensible. Conservar a temperatura ambiente protegido de luz directa intensa pero sin requerimientos especiales de envase opaco. La solución preparada puede mantenerse en bolsa estándar.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente (< 30°C) hasta vencimiento',
      'Diluida en SF/SG 5%':       '<b>24 horas a 25°C · 7 DÍAS refrigerada (2-8°C)</b>',
      'Aspecto':                   'Transparente, incolora — desechar si turbidez',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato. Desechar sobrante.',
      dosisRestante:    'No conservar. Desechar inmediatamente.',
      infusionPreparada:'24 h a temperatura ambiente / 48 h refrigerada (2–8 °C) en SF 0.9% o SG 5%.',
      notas:            'Proteger de la luz. Incompatible con soluciones alcalinas (bicarbonato sódico). Puede mezclarse con tramadol en la misma perfusión.',
    },

    presentaciones: [
      'Ondansetrón 4 mg/2 mL ampolla (2 mg/mL) - Zofran®, Ondansetrón Normon®',
      'Ondansetrón 8 mg/4 mL ampolla',
      'Ondansetrón 4 mg, 8 mg comprimidos recubiertos',
      'Ondansetrón 4 mg, 8 mg comprimidos bucodispersables (Zofran Zydis®)',
      'Ondansetrón 4 mg/5 mL jarabe pediátrico',
      'Ondansetrón 16 mg supositorios',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'NVIQ alta emetogenicidad',           dosis: '<b>8 mg IV 30 min pre-quimio</b>',         via: 'IV' },
      { indicacion: 'NVIQ mantenimiento',                  dosis: '8 mg IV c/8h × 24h post-quimio',           via: 'IV/VO' },
      { indicacion: 'NVPO profilaxis adulto',              dosis: '<b>4 mg IV al final de cirugía</b>',       via: 'IV' },
      { indicacion: 'NVPO tratamiento',                    dosis: '4 mg IV',                                  via: 'IV' },
      { indicacion: 'Hiperémesis gravídica',               dosis: '4-8 mg IV/IM c/8h',                        via: 'IV/IM' },
      { indicacion: 'Náuseas radioterapia',                dosis: '8 mg VO 1-2h pre-radio · 8 mg c/8h',       via: 'VO' },
      { indicacion: 'DOSIS MÁXIMA IV única (Black Box)',  dosis: '<b>16 mg</b>',                              via: 'IV' },
      { indicacion: 'Pediátrico',                          dosis: '0.15 mg/kg IV (máx 8 mg)',                 via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Datos extensos de uso en hiperémesis gravídica. Estudios recientes sugieren riesgo leve de paladar hendido si exposición 1er trimestre (1/10,000). Beneficio supera riesgo en hiperémesis severa con deshidratación. Compatible con lactancia.',

    pediatria: 'Niños > 6 meses: 0.15 mg/kg IV (máximo 8 mg) c/8h. Adolescentes: dosis adulto. Bolo lento o infusión 15 min. Vigilancia QT en pediátricos cardíacos.',

    adultoMayor: 'Sin ajuste de dosis específico. Mayor riesgo de prolongación QT, estreñimiento. Vigilancia ECG en pacientes cardiópatas o con polifarmacia.',

    insufRenal: 'Sin ajuste de dosis significativo. En IRC severa: vigilancia clínica estándar.',

    insufHepatica: 'En cirrosis severa (Child-Pugh C): REDUCIR DOSIS — máximo 8 mg/día. Aclaramiento ↓↓, vida media ↑↑.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Zofran®. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Ondansetrón Normon. AEMPS.',
      'FDA Drug Safety Communication. Ondansetron and QT Prolongation. 2012.',
      'ASCO Guidelines. Antiemetics Update. J Clin Oncol. 2020.',
      'MASCC/ESMO Antiemetic Guidelines. 2023.',
      'Fourth Consensus Guidelines for the Management of PONV. Anesthesia & Analgesia. 2020.',
      'Pasternak B, et al. Ondansetron in Pregnancy and Risk of Adverse Fetal Outcomes. NEJM. 2013.',
      'Pediamécum AEP. Ondansetrón. Asociación Española de Pediatría.',
    ],
  },

});
