/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/nitroglicerina.js
   Fuentes: CIMA AEMPS (Solinitrina, Trinispray), FDA DailyMed,
   ESC Guidelines SCA 2023, AHA/ACC IAM Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'nitroglicerina',
  nombre:         'Nitroglicerina',
  nombreGenerico: 'Glyceryl Trinitrate (Nitroglycerin)',
  categoria:      'vasopresores',
  tags:           ['UCI', 'vasodilatador', 'angina', 'IAM', 'edema pulmonar', 'HTA emergencia', 'nitratos'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Vasodilatador potente. Riesgo de hipotensión severa, bradicardia paradójica, metahemoglobinemia. CONTRAINDICADO con sildenafilo/tadalafilo/vardenafilo (hipotensión letal). Tolerancia con uso continuo > 24h. Requiere envase de vidrio (absorbida por PVC).',

  nivel1: {

    puntosClave: [
      'Vasodilatador del óxido nítrico (ON) — predomina venodilatación (↓ precarga) sobre arteriodilatación (↓ postcarga).',
      '<b>ABSORBIDA POR PVC</b> — la nitroglicerina se adsorbe al plástico convencional, perdiendo hasta 80% de actividad. USAR ENVASES DE VIDRIO y equipos de infusión especiales (no-PVC).',
      '<b>CONTRAINDICACIÓN ABSOLUTA con inhibidores PDE5</b> (sildenafilo, tadalafilo, vardenafilo) — hipotensión letal.',
      'Iniciar 5-10 mcg/min IV, titular según PA y respuesta clínica (objetivo: alivio del dolor, PAS > 90 mmHg).',
      'TOLERANCIA RÁPIDA (24-48h) — considerar intervalos libres de nitratos en uso crónico.',
    ],

    resumenRapido: 'Vasodilatador del grupo de los nitratos orgánicos. Liberación de óxido nítrico (ON) endotelial → ↑ GMPc → relajación de músculo liso vascular. Predomina la venodilatación (↓ precarga ventricular y trabajo cardíaco). En dosis altas: vasodilatación arterial (↓ postcarga). Inicio IV: 1-2 min, pico: 3-5 min, duración: 3-5 min (vida media MUY corta - requiere infusión continua). Indicada en: angina inestable, IAM con dolor persistente, insuficiencia ventricular aguda/edema pulmonar, HTA emergencia perioperatoria, inducción de hipotensión controlada en cirugía.',

    objetivoTerapeutico: 'Aliviar dolor isquémico anginoso · Reducir precarga en edema pulmonar · Controlar HTA emergencia · Disminuir consumo O₂ miocárdico · Mejorar perfusión coronaria',

    preparacion: {
      'Presentación IV':          '<b>Solinitrina 1 mg/mL ampolla 5 mL (5 mg total)</b> - ámbar (proteger luz)',
      'Presentación alt.':        'Solinitrina Fuerte 5 mg/mL ampolla 10 mL (50 mg) - dosis altas',
      'Presentación SL':           'Trinispray 0.4 mg/pulsación spray sublingual',
      'Diluyente':                '<b>SF 0.9% o SG 5%</b> (compatibles, en envase de VIDRIO)',
      '⚠️ ENVASE OBLIGATORIO':    '<b>VIDRIO - NUNCA PVC</b> (la nitroglicerina se adsorbe al plástico)',
      'Equipo infusión':           '<b>Sistemas de infusión especiales NO-PVC</b> (polietileno o teflón)',
      'Dilución estándar':         '<b>5 mg (1 amp 5 mL) en 250 mL SF/SG5% en VIDRIO → 20 mcg/mL</b>',
      'Dilución alternativa':      '50 mg (1 amp Fuerte) en 250 mL → 200 mcg/mL (concentración alta UCI)',
      'Vía':                      'IV continua (preferida) · Bolo IV emergencia (raro) · Sublingual (Trinispray)',
      '⏱️ DOSIS INICIAL IV':      '<b>5-10 mcg/min</b> (titular cada 3-5 min)',
      '⏱️ DOSIS HABITUAL':        '<b>2-3 mg/h (33-50 mcg/min)</b>',
      '⏱️ DOSIS MÁXIMA':          '<b>4 mg/h (66 mcg/min)</b> en 70 kg',
      '⏱️ TITULACIÓN':             'Aumentar 5-10 mcg/min cada 3-5 min según PA y dolor',
      '⏱️ SUBLINGUAL angina':     '<b>1-2 pulsaciones (0.4-0.8 mg) c/5 min × 3 dosis max</b>',
      'Bomba':                    '<b>OBLIGATORIA bomba de infusión + sistema NO-PVC</b>',
      'Acceso':                   'IV periférico — preferiblemente acceso central si infusión prolongada',
      '🌑 FOTOPROTECCIÓN':        '<b>Ampolla en envase ámbar (topacio)</b> - proteger de luz directa',
      '🧊 ESTABILIDAD':           '<b>24 horas en envase de vidrio</b> diluida en SF/SG5%',
      'Aspecto':                  'Solución transparente, incolora - desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>VERIFICAR USO DE SILDENAFILO/TADALAFILO/VARDENAFILO últimas 24-48h</b> (CONTRAINDICACIÓN ABSOLUTA).',
        'PA, FC, FR, SpO₂, ECG basal — registrar antes de iniciar.',
        'Volemia adecuada — hipotensión previa empeora con nitroglicerina.',
        'Revisar antecedentes: TCE reciente, hemorragia intracraneal, glaucoma (precauciones).',
        '<b>Confirmar envase de vidrio y sistema NO-PVC</b> — clave para eficacia.',
        'Doble verificación: ampolla, concentración (1 mg/mL vs 5 mg/mL Fuerte), dilución.',
        'Tener atropina disponible (puede causar bradicardia paradójica).',
      ],
      durante: [
        '<b>PA cada 5 min al inicio, c/15 min cuando estable</b> — objetivo PAS > 90-100 mmHg.',
        'ECG continuo — vigilar bradicardia, mejoría isquémica (resolución ST).',
        'Evaluar DOLOR torácico c/5-10 min - objetivo: alivio del dolor.',
        'Vigilar cefalea (muy frecuente - 50%) - paracetamol PRN.',
        'Vigilar hipotensión ortostática — paciente en decúbito.',
        'SpO₂ continua — vigilar metahemoglobinemia (cianosis pese a SpO₂ normal en pulsioxímetro convencional).',
        'Si hipotensión severa: REDUCIR velocidad, posición Trendelemburg, fluidos IV.',
        'Si bradicardia paradójica: ATROPINA 0.5-1 mg IV.',
      ],
      despues: [
        'Descenso GRADUAL — NO suspender abruptamente (rebote isquémico).',
        'Considerar transición a nitratos orales o transdérmicos.',
        'Vigilar 30-60 min post-descenso por hipotensión rebote.',
        'Documentar: dosis máxima alcanzada, duración, respuesta clínica, efectos adversos.',
        'En uso > 24h: prever TOLERANCIA — considerar intervalo libre de 8-12h.',
      ],
      suspender: [
        'PAS < 90 mmHg refractaria a fluidos.',
        'Bradicardia severa (FC < 50 lpm).',
        'Cefalea severa intratable.',
        'Metahemoglobinemia (cianosis con SpO₂ alta).',
        'Tolerancia: pérdida de efecto pese a ↑ dosis.',
        'Resolución del dolor isquémico (transición a nitratos VO).',
        'Prescripción médica.',
      ],
    },

    incompatibilidades: [
      '<b>SILDENAFILO/TADALAFILO/VARDENAFILO</b> (inhibidores PDE5) - CONTRAINDICACIÓN ABSOLUTA, hipotensión letal.',
      '<b>Riociguat</b> (agonista guanilato ciclasa) - CONTRAINDICACIÓN ABSOLUTA.',
      'Heparina IV — interacción documentada (nitroglicerina ↓ efecto heparina).',
      'Alteplasa — incompatibilidad en mezcla.',
      'NO mezclar con otros medicamentos en misma línea sin verificar.',
      'Antihipertensivos (IECA, betabloqueantes) — hipotensión aditiva.',
      'Alcohol — potencia hipotensión.',
    ],

    alertasSeguridad: [
      '🔴 <b>CONTRAINDICACIÓN ABSOLUTA con inhibidores PDE5</b> (sildenafilo - 24h, tadalafilo - 48h) - hipotensión letal.',
      '🔴 ABSORBIDA POR PVC - usar SOLO envase de vidrio + sistemas no-PVC (pérdida 80% actividad).',
      '🔴 Hipotensión severa con bolo IV o titulación rápida.',
      '🟠 TOLERANCIA RÁPIDA (24-48h) - considerar intervalo libre de nitratos.',
      '🟠 BRADICARDIA PARADÓJICA (Bezold-Jarisch reflex) - atropina disponible.',
      '🟠 METAHEMOGLOBINEMIA con dosis altas/prolongadas - cianosis con SpO₂ pulsioxímetro normal.',
      '🟠 Aumento PIC en TCE - CONTRAINDICACIÓN en hemorragia intracraneal.',
      '🟡 Cefalea muy frecuente (50%) - paracetamol PRN, no interrumpir tratamiento.',
      '🟡 Rebote isquémico si suspensión brusca - descenso gradual.',
      '🟡 Sensibilidad cruzada con nitratos orales/transdérmicos.',
    ],
  },

  modulos: {

    cardio: `
      <b>Nitroglicerina IV en Síndrome Coronario Agudo:</b><br/>
      <b>INDICACIONES:</b><br/>
      • Angina inestable con dolor persistente pese a nitratos SL.<br/>
      • IAM con dolor torácico persistente.<br/>
      • Insuficiencia ventricular izquierda aguda con HTA.<br/>
      • Edema pulmonar cardiogénico.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. Iniciar 5-10 mcg/min IV.<br/>
      2. Titular cada 3-5 min (incrementos 5-10 mcg/min).<br/>
      3. Objetivo: alivio del dolor + PAS > 90 mmHg.<br/>
      4. Dosis habitual: 20-100 mcg/min (2-3 mg/h).<br/>
      5. Dosis máxima: 200 mcg/min (4 mg/h) - raro alcanzarla.<br/><br/>
      <b>MECANISMOS BENEFICIOSOS EN SCA:</b><br/>
      • ↓ Precarga (venodilatación) → ↓ tensión parietal ventricular.<br/>
      • ↓ Demanda O₂ miocárdica.<br/>
      • Vasodilatación coronaria (especialmente colaterales).<br/>
      • ↓ Espasmo coronario.<br/>
      • Posible efecto antiagregante leve.<br/><br/>
      <b>LIMITACIONES (estudios GISSI-3, ISIS-4):</b><br/>
      • Sin reducción significativa de mortalidad como monoterapia.<br/>
      • Beneficio principalmente sintomático (alivio dolor).<br/>
      • Combinar con: AAS, clopidogrel, heparina, betabloqueantes, IECA, estatinas.
    `,

    edemaPulmonar: `
      <b>Nitroglicerina IV en Edema Pulmonar Agudo Cardiogénico:</b><br/>
      <b>INDICACIÓN:</b> Edema pulmonar con HTA o normotensión (PAS > 110 mmHg).<br/>
      <b>NO usar si:</b> PAS < 90 mmHg, shock cardiogénico, IAM ventrículo derecho.<br/><br/>
      <b>MECANISMO:</b><br/>
      • Venodilatación masiva → ↓ retorno venoso → ↓ presión capilar pulmonar.<br/>
      • Beneficio rápido (minutos).<br/>
      • Mayor efecto que furosemida en fase aguda inicial.<br/><br/>
      <b>PROTOCOLO EAP HIPERTENSIVO:</b><br/>
      1. <b>Bolo IV 1-3 mg en 30 segundos</b> (emergencia extrema).<br/>
      2. <b>Iniciar infusión 50-100 mcg/min</b> (rápido).<br/>
      3. Titular según PA (objetivo PAS 110-140 mmHg).<br/>
      4. Combinar con:<br/>
      • Furosemida 40-80 mg IV.<br/>
      • O₂ alto flujo / VNI (CPAP/BiPAP).<br/>
      • Morfina 2-4 mg IV (si dolor/ansiedad - controvertido).<br/>
      • Diurético + nitratos = combinación estándar.
    `,

    htaEmergencia: `
      <b>Nitroglicerina en HTA Emergencia/Urgencia:</b><br/>
      <b>INDICACIÓN PREFERIDA:</b><br/>
      • HTA emergencia con SCA o edema pulmonar.<br/>
      • HTA perioperatoria (cirugía cardiaca, vascular).<br/>
      • Encefalopatía hipertensiva con isquemia miocárdica.<br/><br/>
      <b>NO indicada en:</b><br/>
      • HTA emergencia sin isquemia/edema pulmonar (preferir nicardipino, urapidilo).<br/>
      • Disección aórtica (preferir esmolol + nitroprusiato).<br/>
      • ACV hemorrágico (vasodilatación cerebral empeora PIC).<br/><br/>
      <b>OBJETIVO:</b><br/>
      • Reducir PAS 20-25% en primera hora (no más).<br/>
      • PAS 160 mmHg en horas siguientes.<br/>
      • Descenso GRADUAL evita hipoperfusión cerebral/coronaria/renal.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>VERIFICAR uso de sildenafilo/tadalafilo/vardenafilo</b> antes de cada inicio.',
      'Etiquetar bolsa de infusión: Nitroglicerina [dosis], concentración (mcg/mL), velocidad inicial, hora.',
      '<b>USAR ENVASE DE VIDRIO + sistema NO-PVC</b> (polietileno/teflón).',
      'Bomba de infusión OBLIGATORIA - programar en mcg/min o mg/h.',
      'Iniciar con dosis bajas (5-10 mcg/min), titular cada 3-5 min.',
      'PA c/5 min al inicio - usar PA arterial invasiva en infusión prolongada o paciente inestable.',
      'ECG continuo - vigilar resolución de ST, arritmias.',
      'Evaluar dolor anginoso c/5-10 min - documentar EVA.',
      'Vigilar cefalea - paracetamol 1 g IV/VO PRN (no interrumpir tratamiento por cefalea).',
      'Mantener al paciente en decúbito - hipotensión ortostática frecuente.',
      'Tener atropina disponible al lado de la cama.',
      'En descenso: gradual 5-10 mcg/min c/15 min — nunca abrupto.',
      'Documentar: dosis inicial, titulación, dosis máxima, duración, respuesta, efectos.',
      'Educar sobre tolerancia: si pierde efecto pese a ↑ dosis, considerar pausa.',
    ],

    efectosAdversos: [
      '🔴 Hipotensión severa (especialmente con bolo o titulación rápida)',
      '🔴 Bradicardia paradójica (reflejo Bezold-Jarisch)',
      '🔴 Metahemoglobinemia (dosis altas/prolongadas)',
      '🔴 Síncope',
      '🟠 Cefalea pulsátil intensa (50% pacientes)',
      '🟠 Taquicardia refleja',
      '🟠 Tolerancia (24-48h)',
      '🟠 Rebote isquémico si suspensión brusca',
      '🟠 Hipertensión rebote tras suspensión',
      '🟡 Rubor, sofocos',
      '🟡 Náuseas, vómitos',
      '🟡 Mareos, vértigo',
      '🟡 Visión borrosa',
      '🟡 Eritema facial',
      '🟡 Dolor abdominal',
      '🟡 Rash cutáneo (con parches transdérmicos)',
    ],

    contraindicaciones: [
      '<b>Inhibidores PDE5 últimas 24-48h</b> (sildenafilo, tadalafilo, vardenafilo) - hipotensión letal.',
      'Riociguat (agonista guanilato ciclasa) - CONTRAINDICACIÓN ABSOLUTA.',
      'Hipotensión severa (PAS < 90 mmHg).',
      'Shock (cardiogénico, hipovolémico, séptico) sin estabilización previa.',
      'IAM de ventrículo derecho (depende de precarga).',
      'Hipovolemia no corregida.',
      'Hemorragia intracraneal, TCE reciente (↑ PIC por vasodilatación cerebral).',
      'Anemia severa.',
      'Pericarditis constrictiva, taponamiento cardíaco.',
      'Estenosis aórtica severa, miocardiopatía hipertrófica obstructiva.',
      'Glaucoma de ángulo cerrado (relativa).',
      'Hipersensibilidad a nitratos.',
    ],

    fotosensibilidad: '<b>Las ampollas de Solinitrina vienen en VIDRIO ÁMBAR/TOPACIO</b> - mostrando que requiere protección de luz. Conservar en embalaje original. Una vez diluida en envase de vidrio: estable 24h. NO usar envases plásticos transparentes — doble problema: fotosensibilidad + adsorción al PVC.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente, en envase ámbar, hasta vencimiento (5 años)',
      'Diluida en vidrio':         '<b>24 horas a 15-25°C</b>',
      '⚠️ NO usar PVC':            '<b>Pérdida 40-80% actividad por adsorción al plástico</b>',
      'Aspecto':                   'Transparente, incolora — desechar si turbidez',
      'Temperatura':               'NO congelar · 15-25°C · Proteger luz directa',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato. Desechar sobrante.',
      dosisRestante:    'No conservar. Desechar inmediatamente.',
      infusionPreparada:'24 h a temperatura ambiente en envase de vidrio / 48 h en PVC específico sin DEHP.',
      notas:            'Se adsorbe fuertemente al PVC estándar (pérdida > 40%). Usar OBLIGATORIAMENTE envases y tubuladuras de vidrio, polietileno o PVC especial. Cubrir con funda opaca.',
    },

    presentaciones: [
      'Solinitrina 1 mg/mL ampolla 5 mL (5 mg) - ámbar',
      'Solinitrina Fuerte 5 mg/mL ampolla 10 mL (50 mg) - alta concentración',
      'Trinispray 0.4 mg/pulsación spray sublingual',
      'Cafinitrina® 0.5 mg comprimidos sublinguales',
      'Nitroderm TTS® parches transdérmicos 5, 10, 15 mg/24h',
      'Vernies® 0.4 mg comprimidos sublinguales',
      'Solinitrina/Trinitrina genéricos disponibles',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'SCA - dosis inicial IV',              dosis: '<b>5-10 mcg/min</b> (titular c/3-5 min)',  via: 'IV' },
      { indicacion: 'SCA - mantenimiento IV',              dosis: '<b>20-100 mcg/min (1.2-6 mg/h)</b>',       via: 'IV' },
      { indicacion: 'Edema pulmonar (bolo emergencia)',   dosis: '1-3 mg IV en 30 seg + infusión',           via: 'IV' },
      { indicacion: 'Edema pulmonar (infusión)',           dosis: '50-200 mcg/min',                            via: 'IV' },
      { indicacion: 'HTA perioperatoria',                  dosis: '0.5-10 mcg/kg/min',                         via: 'IV' },
      { indicacion: 'Angina aguda (sublingual)',           dosis: '0.4-0.8 mg SL c/5 min × 3 max',            via: 'SL' },
      { indicacion: 'Profilaxis angina (transdérmico)',    dosis: '5-15 mg/24h (con intervalo libre)',         via: 'TD' },
      { indicacion: 'DOSIS MÁXIMA IV (70 kg)',             dosis: '4 mg/h (66 mcg/min)',                       via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Datos limitados — atraviesa placenta. Usar solo si beneficio supera riesgo. En lactancia: no se conoce excreción en leche, evitar si posible.',

    pediatria: 'No recomendado de rutina por falta de datos. Uso compasivo en cardiopatías congénitas con disfunción ventricular: 0.25-0.5 mcg/kg/min IV.',

    adultoMayor: 'Mayor sensibilidad a hipotensión, cefalea, mareos, caídas. Iniciar con dosis menor (5 mcg/min). Vigilancia hemodinámica intensiva. Mayor riesgo de hipotensión ortostática.',

    insufRenal: 'Sin ajuste de dosis específico - metabolismo principalmente hepático. En IRC severa con hipotensión: vigilancia clínica estándar.',

    insufHepatica: 'Metabolismo hepático extenso (glutatión-S-transferasa). En cirrosis severa: vida media ↑, considerar reducción de dosis e iniciar con titulación más lenta.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Solinitrina 1 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Trinispray 0.4 mg/0.05 mL. AEMPS.',
      'FDA DailyMed. Nitroglycerin Injection. U.S. National Library of Medicine.',
      'ESC Guidelines. Acute Coronary Syndromes. European Heart Journal. 2023.',
      'AHA/ACC Guidelines. STEMI Management. Circulation. 2022.',
      'GISSI-3 Trial. Effect of Nitrates in AMI. Lancet. 1994.',
      'ISIS-4 Trial. Nitrates in Suspected AMI. Lancet. 1995.',
      'ESC Guidelines. Acute Heart Failure. European Heart Journal. 2021.',
      'Pediamécum AEP. Nitroglicerina. Asociación Española de Pediatría.',
    ],
  },

});
