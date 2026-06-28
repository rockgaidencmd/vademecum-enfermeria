/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/clindamicina.js
   Fuentes: CIMA AEMPS (Dalacin, Clindamicina Normon),
   FDA DailyMed, IDSA Skin/Soft Tissue Infections,
   IDSA Toxic Shock Syndrome
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'clindamicina',
  nombre:         'Clindamicina',
  nombreGenerico: 'Clindamycin Phosphate',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'lincosamida', 'anaerobios', 'piel partes blandas', 'celulitis', 'shock tóxico', 'MRSA'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Antibiótico lincosamida — bacteriostático/bactericida por inhibición de síntesis proteica (subunidad 50S ribosomal).',
      '<b>EXCELENTE COBERTURA DE ANAEROBIOS</b> y grampositivos (incluyendo MRSA comunidad y algunos resistentes a meticilina).',
      '<b>RIESGO ALTO de COLITIS PSEUDOMEMBRANOSA POR C. DIFFICILE</b> — uno de los antibióticos con mayor asociación.',
      'NUNCA administrar bolo IV directo - DEBE infundirse diluido en mínimo 10-30 minutos (riesgo paro cardíaco con bolo).',
      'Útil en SHOCK TÓXICO ESTREPTOCÓCICO/ESTAFILOCÓCICO — inhibe síntesis de toxinas (efecto único).',
    ],

    resumenRapido: 'Antibiótico lincosamida bacteriostático/bactericida. Inhibe síntesis proteica en subunidad 50S ribosomal. Espectro: excelente cobertura de ANAEROBIOS (Bacteroides, Clostridium, Peptostreptococcus, Fusobacterium), grampositivos (S. aureus incluyendo MRSA comunidad, estreptococos, neumococo). NO efectivo contra: gramnegativos aerobios, enterococo. Indicado en: infecciones de piel y partes blandas (celulitis, fascitis necrotizante), infecciones óseas/articulares, infecciones intraabdominales/pélvicas (combinada con aminoglucósido), neumonía aspirativa, shock tóxico (efecto antitoxina), profilaxis endocarditis en alérgicos a penicilina.',

    objetivoTerapeutico: 'Tratamiento de anaerobios y grampositivos resistentes · Inhibición de síntesis de toxinas en shock tóxico · Alternativa en alergia a betalactámicos · Cobertura de MRSA comunidad',

    preparacion: {
      'Presentación':             '<b>Clindamicina 150 mg/mL solución inyectable</b>',
      'Vial 2 mL':                'Clindamicina 300 mg (150 mg/mL × 2 mL)',
      'Vial 4 mL':                '<b>Clindamicina 600 mg (150 mg/mL × 4 mL)</b> - más usada',
      'Vial 6 mL':                'Clindamicina 900 mg (150 mg/mL × 6 mL)',
      'Diluyente':                'SF 0.9% · SG 5% · Ringer Lactato (compatibles)',
      'Dilución IV':              '<b>600 mg + 100 mL SF → 6 mg/mL</b> (no superar 18 mg/mL)',
      'Concentración máxima':     '18 mg/mL - mayor concentración no recomendada',
      'Vía':                      'IV (perfusión - NUNCA bolo directo), IM profunda (máx 600 mg/dosis), VO',
      '⏱️ INFUSIÓN IV':           '<b>NUNCA bolo</b> · Infundir en <b>10-60 min según dosis</b>',
      '⏱️ Velocidad máxima':       '<b>30 mg/min</b> (1.8 g/h máximo) — bolo rápido = paro cardíaco',
      '⏱️ DOSIS 600 mg':           '<b>Infundir en 20 minutos en 50-100 mL SF</b>',
      '⏱️ DOSIS 900 mg':           '<b>Infundir en 30 minutos en 100 mL SF</b>',
      '⏱️ DOSIS 1200 mg':          'Infundir en 45-60 minutos en 100 mL SF',
      '⏱️ DOSIS adulto':           '<b>600-900 mg IV c/8h (infecciones graves)</b>',
      '⏱️ DOSIS shock tóxico':    '<b>900 mg IV c/8h × 5-7 días</b> (asociado a betalactámico)',
      'Bomba':                    'OBLIGATORIA para perfusión controlada',
      '🧊 ESTABILIDAD':           '<b>24 horas a temperatura ambiente</b> en SF/SG 5% (CIMA AEMPS)',
      'Aspecto':                  'Solución transparente, incolora a ligeramente amarillenta - desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Verificar alergia a clindamicina o lincosamidas (lincomicina).',
        'Revisar antecedentes: colitis previa, enfermedad inflamatoria intestinal — RIESGO ALTO C. difficile.',
        'Función renal y hepática basal.',
        'Confirmar diagnóstico - clindamicina cobre anaerobios + grampositivos, NO gramnegativos.',
        'En shock tóxico: combinar con betalactámico (penicilina) o vancomicina.',
        'Doble verificación: dosis, dilución, velocidad.',
      ],
      durante: [
        '<b>NUNCA bolo IV directo</b> - debe ser perfusión diluida en mínimo 10-30 min.',
        'Mantener velocidad correcta - no superar 30 mg/min.',
        'Observar reacción alérgica primeros 15-30 min.',
        'Vigilar sitio IV - flebitis frecuente con clindamicina (cambiar c/48-72h).',
        'Vigilar bloqueo neuromuscular en pacientes con miastenia o anestesia (raro pero descrito).',
        'Si hipotensión durante infusión: REDUCIR velocidad.',
      ],
      despues: [
        'Evaluar respuesta clínica a 48-72h.',
        '<b>VIGILANCIA EXTREMA de DIARREA</b> - clindamicina es uno de los antibióticos con mayor riesgo de C. difficile.',
        'Si > 3 deposiciones líquidas/día: DESCARTAR C. difficile (toxina A/B).',
        'En uso > 7 días: hemograma (neutropenia rara), función hepática (transaminasitis frecuente).',
        'Educar al paciente sobre signos de C. difficile: diarrea acuosa profusa, dolor abdominal, fiebre.',
        '<b>La diarrea por C. difficile puede aparecer hasta 4-6 SEMANAS POST-tratamiento</b>.',
        'En infecciones de piel: vigilar evolución del eritema, secreción, dolor.',
        'Documentar: dosis, hora, vía, respuesta, eventos.',
      ],
      suspender: [
        '<b>Diarrea grave con sospecha de C. difficile</b> - prioridad.',
        'Reacción alérgica / anafilaxia.',
        'Síndrome Stevens-Johnson o NET.',
        'Hepatotoxicidad severa (transaminasas > 5× normal).',
        'Hipotensión severa durante infusión (raro pero descrito).',
        'Completado curso de tratamiento.',
      ],
    },

    incompatibilidades: [
      'Ampicilina, fenitoína, barbitúricos - precipitación en mezcla.',
      'Aminoglucósidos - administrar por vías separadas (incompatibilidad física en algunas condiciones).',
      'Ceftriaxona - precipitación posible.',
      'Calcio gluconato, magnesio sulfato - verificar antes de mezclar.',
      'Difenilhidantoína - incompatibilidad documentada.',
      'Lavar línea con SF antes y después de otros medicamentos.',
      'Generalmente NO mezclar con otros antibióticos en misma jeringa.',
    ],

    alertasSeguridad: [
      '🔴 <b>COLITIS PSEUDOMEMBRANOSA POR C. DIFFICILE</b> - uno de los antibióticos con MAYOR riesgo (0.1-10%).',
      '🔴 NUNCA bolo IV directo - <b>PARO CARDÍACO descrito con administración rápida</b>.',
      '🟠 Diarrea por C. difficile puede aparecer hasta 4-6 SEMANAS post-tratamiento.',
      '🟠 BLOQUEO NEUROMUSCULAR - precaución en miastenia gravis, anestesia general.',
      '🟠 Flebitis frecuente en sitio IV.',
      '🟠 Hipotensión, arritmias con bolo rápido.',
      '🟡 Hepatotoxicidad (elevación transaminasas) - frecuente con uso prolongado.',
      '🟡 Sabor metálico, glositis.',
      '🟡 Diarrea común (no necesariamente C. difficile - 10-30%).',
      '🟡 Rash cutáneo, prurito.',
      '🟡 Esofagitis si VO sin agua suficiente.',
    ],
  },

  modulos: {

    cdiff: `
      <b>Colitis Pseudomembranosa por C. difficile con Clindamicina:</b><br/>
      <b>RIESGO:</b> Clindamicina tiene uno de los <b>RIESGOS MÁS ALTOS</b> de causar C. difficile.<br/>
      <b>Incidencia:</b> 0.1-10% según paciente y duración.<br/>
      <b>Inicio:</b> Durante tratamiento O hasta 4-6 SEMANAS POST-tratamiento.<br/><br/>
      <b>FACTORES DE RIESGO ADICIONALES:</b><br/>
      • Hospitalización prolongada.<br/>
      • Uso de IBPs (omeprazol).<br/>
      • Edad > 65 años.<br/>
      • Inmunosupresión.<br/>
      • Antecedente previo de C. difficile.<br/><br/>
      <b>SIGNOS DE ALARMA:</b><br/>
      • <b>Diarrea acuosa profusa</b> (3+ deposiciones líquidas/día).<br/>
      • Dolor abdominal cólico.<br/>
      • Fiebre.<br/>
      • Leucocitosis significativa.<br/>
      • Hipoalbuminemia.<br/>
      • Megacolon tóxico (raro pero grave).<br/><br/>
      <b>MANEJO:</b><br/>
      1. <b>SUSPENDER clindamicina</b> inmediatamente si sospecha.<br/>
      2. Toxina A/B de C. difficile en heces (PCR o EIA).<br/>
      3. Aislamiento de contacto - alcohol NO mata esporas (lavado con agua y jabón).<br/>
      4. Tratamiento según severidad:<br/>
      • <b>Leve-moderada:</b> Metronidazol VO 500 mg c/8h × 10-14 días.<br/>
      • <b>Severa:</b> Vancomicina VO 125 mg c/6h × 10-14 días.<br/>
      • <b>Severa complicada/recurrente:</b> Fidaxomicina VO 200 mg c/12h × 10 días.<br/>
      • <b>Refractaria:</b> Trasplante de microbiota fecal (FMT).<br/>
      5. Hidratación IV, soporte.<br/>
      6. Probióticos (Saccharomyces boulardii) - controvertido.<br/>
      7. Si megacolon tóxico: cirugía urgente.
    `,

    shockToxico: `
      <b>Clindamicina en Shock Tóxico Estreptocócico/Estafilocócico:</b><br/>
      <b>VENTAJA ÚNICA:</b><br/>
      • Inhibe SÍNTESIS DE TOXINAS (superantígenos) en la bacteria.<br/>
      • Mejor que penicilina sola (efecto antitoxina).<br/>
      • <b>SIEMPRE asociar a betalactámico</b> (penicilina, cefalosporina) - tratamiento de elección.<br/><br/>
      <b>INDICACIONES:</b><br/>
      • Shock tóxico estreptocócico (TSS).<br/>
      • Shock tóxico estafilocócico (TSST-1).<br/>
      • Fascitis necrotizante.<br/>
      • Síndrome de piel escaldada estafilocócico.<br/>
      • Mionecrosis clostridial (gangrena gaseosa).<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>900 mg IV c/8h</b>.<br/>
      • Duración: 5-7 días tras control del foco.<br/>
      • Asociar a:<br/>
      • Penicilina G 4 millones UI c/4h IV (Streptococcus).<br/>
      • Vancomicina si sospecha MRSA.<br/>
      • Soporte hemodinámico, IVIG, control quirúrgico del foco.<br/><br/>
      <b>EVIDENCIA:</b><br/>
      • Estudios observacionales muestran reducción de mortalidad.<br/>
      • Mecanismo: inhibición de exotoxina A, M proteína, SpeA, TSST-1.
    `,

    pielPartesBlandas: `
      <b>Clindamicina en Infecciones de Piel y Partes Blandas (IDSA):</b><br/>
      <b>INDICACIONES:</b><br/>
      • Celulitis severa con sospecha MRSA comunidad.<br/>
      • Fascitis necrotizante (asociada a otros).<br/>
      • Mionecrosis (gangrena gaseosa).<br/>
      • Absceso cutáneo profundo.<br/>
      • Mordedura humana o animal con anaerobios.<br/>
      • Pie diabético (combinado con otro antibiótico).<br/><br/>
      <b>DOSIS:</b><br/>
      • Celulitis severa: 600-900 mg IV c/8h × 7-14 días.<br/>
      • Fascitis necrotizante: 900 mg IV c/8h + penicilina G + vancomicina.<br/>
      • Mordedura: 600 mg IV c/8h (asociado a amoxi-clavulánico).<br/><br/>
      <b>VENTAJAS:</b><br/>
      • Excelente penetración tisular.<br/>
      • Cobertura MRSA comunidad (90-95% sensible).<br/>
      • Anaerobios.<br/>
      • Inhibición de toxinas.<br/><br/>
      <b>VIGILANCIA:</b><br/>
      • Evolución clínica del eritema, dolor, induración.<br/>
      • Diarrea (C. difficile).<br/>
      • Drenaje quirúrgico si absceso.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar alergia a clindamicina/lincosamidas.',
      'Diluir SIEMPRE en SF 0.9% o SG 5% (no usar concentración > 18 mg/mL).',
      'Etiquetar bolsa: Clindamicina [dosis], dilución, velocidad, hora.',
      '<b>NUNCA bolo IV directo</b> - perfusión en bomba, 20-60 min según dosis.',
      '<b>No superar 30 mg/min</b> de velocidad.',
      'Bomba de infusión OBLIGATORIA.',
      'Acceso IV de buen calibre - vigilar flebitis (frecuente).',
      'Cambiar sitio IV c/48-72h.',
      'Vigilar primeros 15-30 min por reacción alérgica.',
      '<b>EDUCAR al paciente sobre C. difficile</b>: diarrea profusa, dolor, fiebre - reportar inmediato.',
      'La diarrea por C. diff puede aparecer hasta 4-6 SEMANAS post-tratamiento.',
      'Vigilar evolución de la infección (eritema, secreción, dolor).',
      'En IM: dosis máxima 600 mg por sitio, profunda en músculo glúteo.',
      'En VO: tomar con vaso completo de agua (riesgo esofagitis).',
      'Aislamiento de contacto si C. difficile - lavado con agua y jabón (no alcohol).',
      'Documentar: dosis, hora, vía, respuesta, eventos.',
    ],

    efectosAdversos: [
      '🔴 Colitis pseudomembranosa por C. difficile (riesgo alto)',
      '🔴 Paro cardíaco con bolo IV rápido (raro pero descrito)',
      '🔴 Síndrome Stevens-Johnson / NET (raro)',
      '🔴 Anafilaxia',
      '🟠 Diarrea (10-30%)',
      '🟠 Hepatotoxicidad (elevación transaminasas)',
      '🟠 Bloqueo neuromuscular (con anestesia, miastenia)',
      '🟠 Flebitis severa en sitio IV',
      '🟡 Rash cutáneo, urticaria',
      '🟡 Náuseas, vómitos',
      '🟡 Sabor metálico',
      '🟡 Esofagitis (si VO sin agua suficiente)',
      '🟡 Vaginitis (candidiasis)',
      '🟡 Leucopenia, neutropenia (uso prolongado)',
      '🟡 Eosinofilia transitoria',
      '🟡 Dolor en sitio IM',
    ],

    contraindicaciones: [
      'Hipersensibilidad a clindamicina o lincomicina.',
      'Antecedente de colitis pseudomembranosa por antibiótico previo.',
      'Antecedente de enfermedad inflamatoria intestinal severa.',
      'Hipersensibilidad a alcohol bencílico (preservante en algunas formulaciones - especial cuidado en neonatos).',
      'Precaución en: miastenia gravis, disfunción hepática severa, embarazo (categoría B).',
    ],

    fotosensibilidad: 'No relevante. Conservar viales a temperatura ambiente protegidos de luz directa intensa pero sin requerimientos especiales.',

    estabilidad: {
      'Vial sin abrir':            'Temperatura ambiente (15-25°C) hasta vencimiento',
      'Diluida en SF/SG 5%':       '<b>24 horas a temperatura ambiente</b>',
      'Concentración máxima':       '18 mg/mL - mayor no recomendada',
      'Aspecto':                   'Transparente, incolora a ligeramente amarillenta - desechar si turbidez',
      'Temperatura':               'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Dalacin C® 150 mg/mL solución inyectable - vial 2 mL (300 mg)',
      'Dalacin C® 150 mg/mL solución inyectable - vial 4 mL (600 mg)',
      'Dalacin C® 150 mg/mL solución inyectable - vial 6 mL (900 mg)',
      'Clindamicina Normon® 150 mg/mL (genérico)',
      'Dalacin C® cápsulas 150 mg, 300 mg (VO)',
      'Dalacin® crema vaginal 2% (vulvovaginitis)',
      'Dalacin T® gel/loción 1% (acné tópico)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Adulto - infección grave',             dosis: '<b>600-900 mg IV c/8h</b>',                via: 'IV' },
      { indicacion: 'Adulto - infección moderada',          dosis: '300-450 mg IV c/8h',                       via: 'IV/VO' },
      { indicacion: 'Shock tóxico estreptocócico',          dosis: '<b>900 mg IV c/8h × 5-7 días</b>',         via: 'IV' },
      { indicacion: 'Fascitis necrotizante',                dosis: '900 mg IV c/8h (combinado)',                via: 'IV' },
      { indicacion: 'Mordedura humana/animal',              dosis: '600 mg IV c/8h',                            via: 'IV' },
      { indicacion: 'Profilaxis endocarditis (alérgicos)',  dosis: '600 mg VO/IV 30-60 min pre-procedimiento', via: 'IV/VO' },
      { indicacion: 'Pediátrico',                            dosis: '20-40 mg/kg/día IV c/6-8h (máx 1.8 g/día)',via: 'IV' },
      { indicacion: 'Dosis máxima diaria adulto',            dosis: '2.7 g/día IV (900 mg c/8h)',               via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Atraviesa placenta - sin teratogenicidad documentada. Uso seguro en infecciones que requieran cobertura anaerobia. Compatible con lactancia con vigilancia de diarrea/candidiasis en lactante.',

    pediatria: 'Neonatos > 7 días: 15-20 mg/kg/día c/8h. Niños: 20-40 mg/kg/día c/6-8h IV (máximo 1.8 g/día). Cuidado con alcohol bencílico en formulaciones pediátricas (toxicidad neonatal).',

    adultoMayor: 'Sin ajuste específico. Mayor riesgo de C. difficile y deshidratación. Vigilancia intensiva.',

    insufRenal: 'Sin ajuste significativo - metabolismo principalmente hepático. En diálisis: no se dializa, dosis estándar.',

    insufHepatica: 'En cirrosis severa: REDUCIR DOSIS 30-50%. Vigilar transaminasas durante tratamiento.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Dalacin C® 150 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Clindamicina Normon. AEMPS.',
      'FDA DailyMed. Clindamycin Phosphate Injection. U.S. National Library of Medicine.',
      'IDSA Guidelines. Skin and Soft Tissue Infections. CID 2014.',
      'IDSA Guidelines. Necrotizing Fasciitis. 2014.',
      'AHA Guidelines. Prevention of Infective Endocarditis. Circulation 2007 update.',
      'CDC Guidelines. Clostridioides difficile Infection. 2021.',
      'Pediamécum AEP. Clindamicina. Asociación Española de Pediatría.',
    ],
  },

});
