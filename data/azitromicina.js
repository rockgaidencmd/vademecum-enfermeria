/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/azitromicina.js
   Fuentes: CIMA AEMPS (Zithromax), FDA DailyMed,
   ATS/IDSA CAP Guidelines 2019,
   SEIMC Guía Antibióticos 2023
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'azitromicina',
  nombre:         'Azitromicina',
  nombreGenerico: 'Azithromycin Dihydrate',
  categoria:      'antibioticos',
  tags:           ['macrólido', 'neumonía', 'NAC', 'respiratorio', 'atípicos', 'Legionella', 'Chlamydia', 'ITS', 'antibiótico'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>NAC hospitalizada</b>: 500 mg IV c/24 h × 3-5 días combinado con betalactámico (ceftriaxona/amoxicilina-clavulánico).',
      'Activa frente a <b>gérmenes atípicos</b>: Legionella, Mycoplasma, Chlamydophila — no cubiertos por betalactámicos.',
      '<b>Infundir en 60 min mínimo</b> (500 mg en 250 mL SF a 4 mL/min) — dolor e inflamación venosa con infusión rápida.',
      '<b>Prolonga el QTc</b> — ECG en pacientes de riesgo (cardiopatía, hipopotasemia, otros fármacos QT).',
      'Vida media tisular muy larga (68 h) — <b>dosis única diaria</b>, cortas pautas de tratamiento.',
    ],

    resumenRapido: 'Macrólido de segunda generación con amplio espectro incluyendo bacterias atípicas intracelulares. Inhibe la síntesis proteica bacteriana al unirse a la subunidad 50S ribosomal. Amplia distribución tisular con concentraciones intracelulares muy superiores a las plasmáticas (macrófagos, tejido pulmonar). Vida media tisular de 68 h permite dosis únicas diarias y pautas cortas. Indicado en neumonía adquirida en la comunidad (NAC), infecciones respiratorias de vías altas e infecciones de transmisión sexual.',

    objetivoTerapeutico: 'NAC en combinación con betalactámico (cobertura de atípicos) · Exacerbaciones de EPOC · Infecciones de vías respiratorias altas · Infecciones genitourinarias por Chlamydia · Prevención de MAC en VIH',

    preparacion: {
      'Presentación IV':          '<b>Zithromax® 500 mg vial polvo liofilizado</b>',
      'Reconstitución':           'Añadir 4.8 mL de agua para inyección → 100 mg/mL (solución concentrada)',
      'Dilución final':           '<b>500 mg en 250 mL SF 0.9% o SG 5% → 2 mg/mL</b>',
      'Concentración máx':        'No superar 2 mg/mL para infusión periférica (1 mg/mL preferible)',
      'Dosis NAC adulto':         '<b>500 mg IV c/24 h × 3-5 días</b>',
      'Velocidad infusión':       '<b>Mínimo 60 min (500 mg en 250 mL a 4 mL/min)</b>',
      'Conversión IV→oral':       '500 mg VO c/24 h — misma eficacia, iniciar cuando tolera oral',
      'Vía':                      'IV lenta · Oral (comprimidos/sobres/suspensión)',
      '⏱️ Inicio efecto':          'Antimicrobiano en 24-48 h · Tisular: concentración máxima a las 72 h',
      '⏱️ Duración pautas':        'NAC: 3-5 días IV + transición oral · ITS: dosis única oral',
      '🧊 Estabilidad':            '<b>Reconstituida: 24 h a temperatura ambiente. Diluida: 24 h a temperatura ambiente</b>',
    },

    vigilancia: {
      antes: [
        'ECG en pacientes con cardiopatía, hipopotasemia o uso de otros fármacos que prolongan QTc.',
        'Función hepática basal — metabolismo hepático, hepatotoxicidad posible.',
        'Alergias a macrólidos.',
        'Revisar medicación: estatinas (miopatía), warfarina, digoxina, ciclosporina — interacciones.',
        'Función renal: sin ajuste necesario, pero revisión en IR grave.',
      ],
      durante: [
        'Observar la zona de infusión IV — flebitis frecuente con concentraciones altas.',
        'Si dolor en la vía: reducir velocidad o aumentar dilución.',
        'FC y ECG si sospecha de arritmia (prolongación QT).',
        'Vigilar diarrea — puede indicar infección por C. difficile en pautas largas.',
        'Náuseas y molestias gastrointestinales frecuentes al inicio.',
      ],
      despues: [
        'Función hepática en tratamientos prolongados (>7 días) o si síntomas de hepatotoxicidad.',
        'Evaluación de respuesta clínica a los 3-5 días (NAC: mejoría de fiebre, SpO2, leucocitos).',
        'Transición a oral tan pronto como el paciente tolere (criterios de estabilidad).',
        'Recordar que los niveles tisulares se mantienen días después de finalizar — efecto post-antibiótico largo.',
      ],
      suspender: [
        'Hepatotoxicidad grave (colestasis, ictericia).',
        'QTc >500 ms o prolongación significativa.',
        'Diarrea grave con sospecha de C. difficile — cambiar de antibiótico.',
        'Reacción alérgica grave.',
        'Completar pauta prescrita (3-5 días IV en NAC).',
      ],
    },

    incompatibilidades: [
      'Incompatible con heparina — precipitación.',
      'No mezclar con cefalosporinas en la misma bolsa (verificar).',
      'Compatible con SF 0.9%, SG 5% y Ringer Lactato.',
      'Incompatible con furosemida, ketorolaco y ceftriaxona en la misma vía.',
      'Lavar la vía con SF antes y después si se comparte con otros fármacos.',
    ],

    alertasSeguridad: [
      '🟠 PROLONGACIÓN QTc — ECG en pacientes con cardiopatía o hipopotasemia. No combinar con amiodarona.',
      '🟠 FLEBITIS IV — concentraciones altas o infusión rápida causan dolor e inflamación venosa.',
      '🟠 Interacción con warfarina — puede elevar el INR. Monitorizar si uso simultáneo.',
      '🟠 Interacción con estatinas (simvastatina) — riesgo de miopatía. Vigilar CK.',
      '🟡 Hepatotoxicidad colestásica (rara, generalmente reversible).',
      '🟡 Diarrea y molestias GI frecuentes — C. difficile con pautas largas.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir el vial con 4.8 mL de agua para inyección → concentrado 100 mg/mL.',
      'Diluir en 250 mL SF 0.9% → concentración final 2 mg/mL.',
      'Infundir en mínimo 60 min — nunca más rápido (dolor venoso, flebitis, riesgo QT).',
      'Usar vena de buen calibre — preferible vía central o antebraquial gruesa para reducir flebitis.',
      'Vigilar zona de punción: enrojecimiento, dolor, induración — indicar cambio de acceso.',
      'ECG antes si el paciente tiene cardiopatía conocida o toma otros fármacos que prolongan QT.',
      'Evaluación de respuesta en NAC: temperatura c/8 h, SpO2, leucocitos en analítica.',
      'Transición a oral (500 mg c/24 h) cuando el paciente tolera — misma eficacia.',
      'Informar al paciente sobre posibles náuseas y molestias abdominales — frecuentes y transitorias.',
      'Documentar dosis, velocidad de infusión, estado de la vía y respuesta clínica en cada turno.',
    ],

    efectosAdversos: [
      '🟠 Prolongación QTc / arritmias (riesgo aumentado con hipopotasemia)',
      '🟠 Flebitis en zona de infusión IV (frecuente con concentraciones >2 mg/mL)',
      '🟠 Hepatotoxicidad colestásica (elevación FA, bilirrubina)',
      '🟡 Náuseas, vómitos, diarrea, dolor abdominal (efectos GI frecuentes)',
      '🟡 Exantema cutáneo, urticaria',
      '🟡 Pérdida de audición con dosis altas o tratamiento prolongado (reversible)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a azitromicina o macrólidos.',
      'Insuficiencia hepática grave.',
      'QTc prolongado o síndrome QT largo congénito.',
      'Combinación con otros fármacos que prolongan QT en paciente de alto riesgo (sin monitorización).',
    ],

    fotosensibilidad: 'Posible — rara con azitromicina (más frecuente con tetraciclinas). Precaución con exposición solar prolongada durante el tratamiento. Usar protector solar si se está al sol.',

    estabilidad: {
      'Vial sin reconstituir':    'Temperatura ambiente hasta vencimiento',
      'Reconstituida (100 mg/mL)': '24 h a temperatura ambiente',
      'Diluida en SF (2 mg/mL)':  '<b>24 h a temperatura ambiente</b>',
      'Diluida en SG 5%':         '24 h a temperatura ambiente',
      'Aspecto':                   'Solución incolora a amarillo muy pálido — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Reconstituida: usar dentro de 24 h a temperatura ambiente.',
      dosisRestante:     'Desechar sobrante de vial reconstituido tras 24 h.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente.',
      notas:             'Concentración máxima para perfusión periférica: 2 mg/mL. Incompatible con heparina. Transición a oral tan pronto como sea posible — biodisponibilidad oral ~37% (menor que IV pero clínicamente eficaz).',
    },

    presentaciones: [
      'Zithromax® IV 500 mg — vial liofilizado',
      'Zithromax® 250 mg / 500 mg — comprimidos',
      'Zithromax® 200 mg/5 mL — suspensión oral pediátrica',
      'Azitromicina Normon® / Kern® / Mylan® — genéricos',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'NAC hospitalizada (IV)',         dosis: '<b>500 mg IV c/24 h × 3-5 días</b> + betalactámico',        via: 'IV' },
      { indicacion: 'NAC leve-moderada (oral)',        dosis: '500 mg VO c/24 h × 3-5 días',                               via: 'VO' },
      { indicacion: 'Exacerbación EPOC',               dosis: '500 mg VO c/24 h × 3 días',                                 via: 'VO' },
      { indicacion: 'Chlamydia trachomatis (ITS)',     dosis: '<b>1 g VO dosis única</b>',                                  via: 'VO' },
      { indicacion: 'Profilaxis MAC en VIH',           dosis: '1.200 mg VO c/semana',                                       via: 'VO' },
    ],

    embarazo: 'Categoría B (FDA). Considerada relativamente segura. No se han demostrado teratogenicidad en estudios disponibles. Se puede usar en embarazo cuando la indicación es clara (neumonía, ITS). Alternativa a eritromicina (mejor tolerancia GI).',

    pediatria: 'Suspensión 200 mg/5 mL. NAC pediátrica: 10 mg/kg/día × 3-5 días (máx 500 mg/día). Otitis media y sinusitis: 10 mg/kg día 1, luego 5 mg/kg días 2-5. ITS en adolescentes: 1 g dosis única. Contraindicado en menores de 6 meses (escasa evidencia).',

    adultoMayor: 'Sin ajuste de dosis. Mayor riesgo de prolongación QT y flebitis en IV. ECG basal recomendado. Vigilar interacciones con polifarmacia (warfarina, digoxina, estatinas). Función hepática más frecuente.',

    insufRenal: 'Sin ajuste de dosis en IR (eliminación principalmente biliar/fecal, no renal). En IR grave (ClCr <10): usar con precaución — datos limitados. No requiere ajuste en HD.',

    insufHepatica: 'Metabolismo y excreción hepática predominante. En IH leve-moderada: usar con precaución. En IH grave (Child-Pugh C): contraindicado. Monitorizar transaminasas.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Zithromax® (azitromicina).',
      'Mandell LA et al. IDSA/ATS Consensus Guidelines on the Management of Community-Acquired Pneumonia. CID. 2007.',
      'Metlay JP et al. Diagnosis and Treatment of Adults with Community-acquired Pneumonia. ATS/IDSA. Am J Respir Crit Care Med. 2019.',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Chou HW et al. Risk of severe dysglycemia among diabetic patients receiving levofloxacin, ciprofloxacin or azithromycin. Clin Infect Dis. 2013.',
      'FDA. Drug Safety Communication: Azithromycin — risk of potentially fatal heart rhythms. 2013.',
    ],
  },

});
