/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/linezolid.js
   Fuentes: CIMA AEMPS (Linezolid Kabi, Farmaprojects),
   FDA DailyMed, IDSA MRSA Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'linezolid',
  nombre:         'Linezolid',
  nombreGenerico: 'Linezolid',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'oxazolidinona', 'MRSA', 'VRE', 'neumonía nosocomial', 'grampositivos resistentes'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antibiótico oxazolidinona. RIESGO DE SÍNDROME SEROTONINÉRGICO con ISRS/IMAO/opioides - CONTRAINDICADO combinar salvo necesidad absoluta. Mielosupresión (trombocitopenia) con uso >2 semanas. Neuropatía periférica/óptica con uso prolongado.',

  nivel1: {

    puntosClave: [
      'Antibiótico OXAZOLIDINONA (primera de su clase) — inhibe síntesis proteica bacteriana en un punto ÚNICO (complejo de iniciación ribosomal 70S) — <b>sin resistencia cruzada</b> con otras clases de antibióticos.',
      'Espectro: <b>excelente cobertura de grampositivos MULTIRRESISTENTES</b> — MRSA, VRE (Enterococcus resistente a vancomicina), neumococo resistente a penicilina.',
      '<b>BIODISPONIBILIDAD ORAL ~100%</b> — permite cambio IV→VO sin ajuste de dosis cuando el paciente tolera vía oral.',
      '<b>RIESGO DE SÍNDROME SEROTONINÉRGICO</b> con ISRS, IMAO, opioides (tramadol, fentanilo), triptanes — CONTRAINDICADO salvo necesidad absoluta con vigilancia extrema.',
      'Bolsa premezclada 2 mg/mL LISTA PARA USAR — <b>INCOMPATIBLE con ceftriaxona</b> (química) y con anfotericina B, diazepam, fenitoína, TMP-SMX (física).',
    ],

    resumenRapido: 'Antibiótico oxazolidinona, bacteriostático frente a estafilococos y enterococos, bactericida frente a la mayoría de estreptococos. Inhibe la síntesis proteica bacteriana uniéndose al ARNr 23S de la subunidad ribosomal 50S, impidiendo la formación del complejo de iniciación 70S - mecanismo único sin resistencia cruzada con betalactámicos, glucopéptidos, aminoglucósidos, macrólidos, quinolonas. Espectro: grampositivos resistentes (MRSA, VRE, S. pneumoniae resistente a penicilina), NO cubre gramnegativos. Vida media: 5-7h → dosificación c/12h. Indicado en: neumonía nosocomial y comunitaria por grampositivos resistentes, infecciones de piel/partes blandas complicadas (incluyendo MRSA), bacteriemia/endocarditis por VRE, infecciones osteoarticulares por grampositivos resistentes (uso prolongado con vigilancia).',

    objetivoTerapeutico: 'Erradicar infecciones por grampositivos multirresistentes (MRSA, VRE) · Alternativa cuando vancomicina falla o está contraindicada · Tratamiento de neumonía nosocomial por SARM',

    preparacion: {
      'Presentación IV':          '<b>Linezolid 2 mg/mL - bolsa premezclada 300 mL (600 mg) - LISTA PARA USAR</b>',
      'Presentación VO comprimidos':'Linezolid 600 mg comprimidos',
      'Presentación suspensión':   'Linezolid 100 mg/5 mL suspensión oral',
      'Diluyente':                '<b>NO requiere dilución - LISTO PARA USAR</b>',
      'Vía':                      'IV (perfusión) o VO - biodisponibilidad oral ~100% permite cambio sin ajuste de dosis',
      '⏱️ INFUSIÓN IV':           '<b>600 mg en 30-120 minutos</b> (300 mL a velocidad estándar)',
      '⏱️ NO bolo IV':             'Nunca administrar en bolo rápido',
      '⏱️ DOSIS ESTÁNDAR adulto': '<b>600 mg IV/VO c/12h</b>',
      '⏱️ DURACIÓN TÍPICA':       '10-14 días (neumonía, piel/partes blandas) · hasta 28 días en infecciones complicadas (con vigilancia hematológica estrecha)',
      '⏱️ Cambio IV→VO':           'Sin ajuste de dosis (misma dosis 600 mg c/12h) cuando el paciente tolera VO',
      'Bomba':                    'Recomendada para infusión controlada',
      '🌑 Protección luz':        '<b>Conservar bolsa en embalaje exterior de aluminio hasta su uso</b> - proteger de la luz',
      '🧊 ESTABILIDAD tras dilución/apertura':'<b>2 horas a 25°C</b> si se manipula la bolsa (uso inmediato preferible)',
      'Aspecto':                  'Solución transparente, incolora a amarillenta - <b>PUEDE AMARILLEAR con el tiempo SIN pérdida de efectividad</b>',
    },

    vigilancia: {
      antes: [
        '<b>REVISAR TODA LA MEDICACIÓN por interacciones serotoninérgicas</b>: ISRS, IMAO, tramadol, fentanilo, triptanes, buspirona, mirtazapina.',
        'Hemograma completo basal (plaquetas especialmente) - riesgo de mielosupresión.',
        'Función hepática y renal basales.',
        'Revisar antecedentes de HTA no controlada (linezolid es inhibidor débil de MAO - riesgo de crisis hipertensiva con tiramina).',
        'Confirmar indicación: grampositivos resistentes documentados o alta sospecha (MRSA, VRE).',
        'Doble verificación: dosis, vía, duración prevista del tratamiento.',
      ],
      durante: [
        'Infusión IV en 30-120 minutos - NO acelerar.',
        'Vigilar SIGNOS DE SÍNDROME SEROTONINÉRGICO si hay fármacos serotoninérgicos concomitantes: agitación, hipertermia, hiperreflexia, mioclonías, diaforesis, taquicardia.',
        'Vigilar reacciones alérgicas inmediatas (rash, prurito).',
        'Vigilar sitio IV.',
        'Advertir sobre evitar alimentos ricos en tiramina en tratamientos prolongados (quesos curados, vino, embutidos fermentados) - riesgo de crisis hipertensiva.',
      ],
      despues: [
        '<b>HEMOGRAMA SEMANAL si tratamiento > 10-14 días</b> - vigilar trombocitopenia, anemia, leucopenia.',
        'Vigilar signos de neuropatía periférica (parestesias) o neuropatía óptica (alteración visual) en tratamientos > 28 días.',
        'Vigilar acidosis láctica en uso prolongado (raro pero descrito - relacionado con disfunción mitocondrial).',
        'Evaluar respuesta clínica a las 48-72h.',
        'Considerar cambio a VO cuando el paciente tolere (sin pérdida de eficacia).',
        'Documentar: dosis, duración, hemograma seriado, efectos adversos.',
      ],
      suspender: [
        'Trombocitopenia significativa (< 100,000-50,000 según severidad y contexto clínico).',
        'Signos de síndrome serotoninérgico - suspender INMEDIATAMENTE junto con el agente serotoninérgico concomitante.',
        'Neuropatía periférica u óptica progresiva.',
        'Acidosis láctica sintomática.',
        'Reacción alérgica.',
        'Completado el curso de tratamiento.',
      ],
    },

    incompatibilidades: [
      '<b>CEFTRIAXONA</b> - INCOMPATIBLE QUÍMICAMENTE (documentado CIMA AEMPS).',
      '<b>ANFOTERICINA B</b> - incompatible físicamente.',
      '<b>CLORPROMAZINA</b> - incompatible físicamente.',
      '<b>DIAZEPAM</b> - incompatible físicamente.',
      '<b>PENTAMIDINA (isotionato)</b> - incompatible físicamente.',
      '<b>ERITROMICINA (lactobionato)</b> - incompatible físicamente.',
      '<b>FENITOÍNA SÓDICA</b> - incompatible físicamente.',
      '<b>SULFAMETOXAZOL/TRIMETOPRIM</b> - incompatible físicamente.',
      'Lavar línea con SF antes y después de estos fármacos si comparten vía.',
      'Preferir línea IV independiente para linezolid.',
    ],

    alertasSeguridad: [
      '🔴 <b>SÍNDROME SEROTONINÉRGICO</b> con ISRS, IMAO, tramadol, fentanilo, triptanes - CONTRAINDICADO combinar salvo necesidad absoluta con vigilancia extrema.',
      '🔴 <b>MIELOSUPRESIÓN</b> (trombocitopenia principalmente) con uso > 10-14 días - hemograma semanal obligatorio.',
      '🔴 <b>INCOMPATIBLE con ceftriaxona</b> - no administrar por la misma línea.',
      '🟠 Neuropatía periférica y/o óptica con uso prolongado (> 28 días) - generalmente pero no siempre reversible.',
      '🟠 Acidosis láctica (rara, relacionada con toxicidad mitocondrial) en uso prolongado.',
      '🟠 Inhibidor débil de MAO - riesgo de crisis hipertensiva con alimentos ricos en tiramina en tratamientos prolongados.',
      '🟠 Mayor riesgo de discrasias sanguíneas en ancianos, insuficiencia renal grave (con o sin diálisis), insuficiencia hepática moderada-grave.',
      '🟡 La solución puede amarillear con el tiempo - <b>NO afecta su efectividad</b> (informado en ficha técnica).',
      '🟡 Bacteriostático (no bactericida) frente a estafilococos y enterococos - considerar en bacteriemia/endocarditis donde se prefiere bactericida.',
      '🟡 Solo debe iniciarse en ámbito hospitalario tras valoración de especialista (microbiólogo/infectólogo) según indicación CIMA.',
    ],
  },

  modulos: {

    serotoninergico: `
      <b>Síndrome Serotoninérgico por Linezolid - Interacción Crítica:</b><br/>
      <b>MECANISMO:</b><br/>
      • Linezolid es un INHIBIDOR REVERSIBLE Y NO SELECTIVO de la monoaminooxidasa (IMAO débil).<br/>
      • Combinado con fármacos serotoninérgicos: acumulación excesiva de serotonina en el SNC.<br/><br/>
      <b>FÁRMACOS DE RIESGO (CONTRAINDICADOS salvo necesidad absoluta):</b><br/>
      • <b>ISRS</b>: fluoxetina, sertralina, paroxetina, citalopram, escitalopram.<br/>
      • <b>IRSN</b>: venlafaxina, duloxetina.<br/>
      • <b>IMAO</b>: (contraindicación absoluta).<br/>
      • <b>Opioides</b>: TRAMADOL (riesgo especialmente alto), fentanilo, meperidina.<br/>
      • <b>Triptanes</b>: sumatriptán y relacionados (migraña).<br/>
      • Otros: buspirona, mirtazapina, litio, dextrometorfano.<br/><br/>
      <b>PRESENTACIÓN CLÍNICA:</b><br/>
      • Agitación, confusión.<br/>
      • Hipertermia.<br/>
      • Hiperreflexia, mioclonías, temblor.<br/>
      • Diaforesis.<br/>
      • Taquicardia, HTA.<br/>
      • Diarrea.<br/>
      • En casos severos: rigidez, convulsiones, arritmias, coma.<br/><br/>
      <b>MANEJO SI OCURRE:</b><br/>
      1. SUSPENDER linezolid Y el agente serotoninérgico inmediatamente.<br/>
      2. Soporte: enfriamiento activo si hipertermia, fluidos IV.<br/>
      3. Benzodiacepinas para agitación/rigidez.<br/>
      4. Ciproheptadina (antagonista serotoninérgico) en casos moderados-severos.<br/>
      5. Soporte en UCI si severo (rigidez extrema, hipertermia > 41°C, inestabilidad autonómica).<br/><br/>
      <b>PREVENCIÓN:</b><br/>
      • Revisar SIEMPRE la medicación completa antes de iniciar linezolid.<br/>
      • Si el fármaco serotoninérgico es imprescindible: suspender 2 semanas antes si es posible (según vida media del fármaco), o usar linezolid solo si el beneficio supera claramente el riesgo, con vigilancia clínica estrecha.<br/>
      • Considerar antibiótico alternativo (vancomicina, daptomicina) si hay múltiples fármacos serotoninérgicos no modificables.
    `,

    mielosupresion: `
      <b>Mielosupresión por Linezolid (Trombocitopenia):</b><br/>
      <b>INCIDENCIA Y FACTORES DE RIESGO:</b><br/>
      • Más frecuente con tratamientos > 10-14 días.<br/>
      • Mayor riesgo en: insuficiencia renal grave (con o sin diálisis), insuficiencia hepática moderada-grave, pacientes de edad avanzada.<br/>
      • El riesgo se correlaciona con la DURACIÓN del tratamiento.<br/><br/>
      <b>PRESENTACIÓN:</b><br/>
      • <b>Trombocitopenia</b> - la más frecuente y clínicamente relevante.<br/>
      • Anemia.<br/>
      • Leucopenia (menos frecuente).<br/>
      • Pancitopenia (rara, casos severos).<br/><br/>
      <b>MONITORIZACIÓN RECOMENDADA:</b><br/>
      • <b>Hemograma completo BASAL</b> antes de iniciar.<br/>
      • <b>Hemograma SEMANAL</b> durante el tratamiento, especialmente si:<br/>
      &nbsp;&nbsp;- Duración prevista > 10-14 días.<br/>
      &nbsp;&nbsp;- Insuficiencia renal o hepática de base.<br/>
      &nbsp;&nbsp;- Tratamiento previo con mielosupresores.<br/>
      &nbsp;&nbsp;- Trombocitopenia preexistente.<br/><br/>
      <b>MANEJO:</b><br/>
      • Si trombocitopenia significativa: considerar suspensión o reducción de duración del tratamiento.<br/>
      • Generalmente REVERSIBLE al suspender el fármaco.<br/>
      • Transfusión de plaquetas si sangrado activo o trombocitopenia severa (<20,000-10,000).<br/><br/>
      <b>DURACIÓN MÁXIMA RECOMENDADA:</b><br/>
      • Tratamientos estándar: 10-14 días.<br/>
      • Infecciones complicadas (osteomielitis, endocarditis): hasta 28 días CON vigilancia hematológica muy estrecha.<br/>
      • Más allá de 28 días: riesgo elevado de neuropatía (a menudo irreversible) y mielosupresión - evitar si es posible.
    `,

    mrsaVre: `
      <b>Linezolid en Infecciones por MRSA/VRE:</b><br/>
      <b>INDICACIONES PRINCIPALES:</b><br/>
      • Neumonía nosocomial/comunitaria por MRSA confirmado o alta sospecha.<br/>
      • Infecciones de piel y partes blandas complicadas por MRSA.<br/>
      • Bacteriemia/endocarditis por Enterococcus resistente a vancomicina (VRE).<br/>
      • Infecciones osteoarticulares por grampositivos resistentes (uso prolongado con vigilancia).<br/><br/>
      <b>VENTAJAS vs VANCOMICINA en neumonía por MRSA:</b><br/>
      • Mejor penetración en tejido pulmonar (líquido de revestimiento epitelial).<br/>
      • Algunos estudios sugieren superioridad en neumonía nosocomial por MRSA (ZEPHyR trial) - aunque controvertido.<br/>
      • Sin necesidad de monitorización de niveles séricos (a diferencia de vancomicina).<br/>
      • Sin nefrotoxicidad (ventaja en insuficiencia renal).<br/><br/>
      <b>DESVENTAJAS vs VANCOMICINA:</b><br/>
      • Bacteriostático (no bactericida) - considerar en endocarditis/bacteriemia donde se prefiere bactericida.<br/>
      • Más interacciones medicamentosas (síndrome serotoninérgico).<br/>
      • Mayor riesgo de mielosupresión en tratamientos prolongados.<br/>
      • Mayor costo en muchos contextos.<br/><br/>
      <b>ÚNICO ANTIBIÓTICO ÚTIL EN VRE (junto con daptomicina):</b><br/>
      • VRE es intrínsecamente resistente a la mayoría de otros antibióticos.<br/>
      • Linezolid y daptomicina son las principales opciones terapéuticas.<br/>
      • Elección entre ambos según sitio de infección (daptomicina inactivada en pulmón - NO usar en neumonía).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>REVISAR interacciones serotoninérgicas ANTES de cada dosis</b> - ISRS, tramadol, fentanilo.',
      'Bolsa premezclada 2 mg/mL - lista para usar, sin reconstitución.',
      '<b>Conservar en embalaje de aluminio hasta el uso</b> - proteger de la luz.',
      'Etiquetar: Linezolid 600 mg, hora de inicio, velocidad.',
      'Infusión IV en 30-120 minutos - NO bolo rápido.',
      '<b>NUNCA administrar por la misma línea que ceftriaxona</b>.',
      'Verificar otras incompatibilidades: anfotericina B, diazepam, fenitoína, TMP-SMX.',
      '<b>Hemograma basal y semanal</b> si tratamiento > 10-14 días.',
      'Vigilar signos de síndrome serotoninérgico: agitación, hipertermia, hiperreflexia.',
      'Vigilar signos de sangrado/trombocitopenia en tratamientos prolongados.',
      'Vigilar parestesias o alteración visual en tratamientos > 28 días (neuropatía).',
      'Informar al paciente: NO es preocupante si la solución se ve amarillenta.',
      'Facilitar transición a VO cuando el paciente tolere (misma dosis, sin ajuste).',
      'Educar sobre evitar alimentos ricos en tiramina en tratamientos prolongados.',
      'Documentar: dosis, duración, hemograma seriado, interacciones revisadas, efectos adversos.',
    ],

    efectosAdversos: [
      '🔴 Síndrome serotoninérgico (con fármacos serotoninérgicos)',
      '🔴 Trombocitopenia (uso > 10-14 días)',
      '🔴 Neuropatía periférica/óptica (uso > 28 días, puede ser irreversible)',
      '🔴 Acidosis láctica (rara, uso prolongado)',
      '🟠 Anemia, leucopenia',
      '🟠 Crisis hipertensiva (con alimentos ricos en tiramina, uso prolongado)',
      '🟠 Colitis pseudomembranosa por C. difficile',
      '🟡 Diarrea, náuseas, vómitos (muy frecuentes)',
      '🟡 Cefalea',
      '🟡 Alteración del gusto',
      '🟡 Candidiasis oral/vaginal',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Rash cutáneo',
      '🟡 Insomnio',
    ],

    contraindicaciones: [
      'Hipersensibilidad a linezolid.',
      '<b>Uso concomitante con IMAO</b> (contraindicación absoluta).',
      '<b>Uso concomitante con agentes serotoninérgicos</b> salvo necesidad absoluta y vigilancia extrema.',
      'Feocromocitoma no tratado (por efecto IMAO débil).',
      'Síndrome carcinoide (relativa).',
      'Precaución en: HTA no controlada, hipertiroidismo no controlado, insuficiencia renal/hepática grave (mayor riesgo mielosupresión).',
    ],

    fotosensibilidad: '<b>Requiere protección de luz</b> - conservar la bolsa en su embalaje de aluminio exterior hasta el momento de uso, según indicación expresa de ficha técnica.',

    estabilidad: {
      'Bolsa sin abrir (en embalaje aluminio)':'Temperatura ambiente hasta vencimiento (protegida de luz)',
      'Post-apertura/manipulación':  '<b>2 horas a 25°C</b> (uso inmediato preferible)',
      'Aspecto':                      'Transparente, incolora a amarillenta — <b>PUEDE AMARILLEAR con el tiempo SIN pérdida de efectividad</b>',
      'Temperatura':                  'NO congelar · No requiere refrigeración especial · Proteger de la luz',
    },

    presentaciones: [
      'Linezolid Kabi 2 mg/mL - bolsa Freeflex 300 mL (600 mg)',
      'Linezolid Farmaprojects 2 mg/mL - bolsa 300 mL (600 mg)',
      'Linezolid genéricos varios 2 mg/mL',
      'Linezolid 600 mg comprimidos recubiertos (VO)',
      'Linezolid 100 mg/5 mL suspensión oral (pediatría)',
      'Zyvoxid® (marca histórica)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Adulto - dosis estándar',               dosis: '<b>600 mg IV/VO c/12h</b>',                 via: 'IV/VO' },
      { indicacion: 'Neumonía nosocomial/comunitaria',       dosis: '600 mg IV c/12h × 10-14 días',              via: 'IV' },
      { indicacion: 'Piel/partes blandas complicada',        dosis: '600 mg IV/VO c/12h × 10-14 días',           via: 'IV/VO' },
      { indicacion: 'Bacteriemia/endocarditis por VRE',      dosis: '600 mg IV/VO c/12h × 14-28 días',           via: 'IV/VO' },
      { indicacion: 'Infección osteoarticular',               dosis: '600 mg c/12h × hasta 28 días (vigilancia)',via: 'IV/VO' },
      { indicacion: 'Cambio IV → VO',                          dosis: 'Misma dosis, sin ajuste (biodisp. ~100%)', via: 'VO' },
      { indicacion: 'Pediátrico (< 12 años)',                  dosis: '10 mg/kg c/8h IV/VO (máx 600 mg/dosis)',   via: 'IV/VO' },
      { indicacion: 'Pediátrico (≥ 12 años)',                  dosis: '600 mg c/12h (igual que adulto)',           via: 'IV/VO' },
    ],

    embarazo: 'Categoría C (FDA). Datos limitados en embarazo humano. Usar solo si el beneficio potencial justifica el riesgo (infección grave sin alternativa adecuada). Se desconoce si se excreta en leche materna en cantidad clínicamente relevante - valorar riesgo/beneficio en lactancia.',

    pediatria: 'Aprobado en niños desde el nacimiento. < 12 años: 10 mg/kg IV/VO c/8h (máximo 600 mg/dosis). ≥ 12 años: 600 mg c/12h (dosis de adulto). Mismo perfil de riesgo de mielosupresión - vigilancia hematológica en tratamientos prolongados.',

    adultoMayor: 'Sin ajuste específico de dosis. <b>MAYOR RIESGO de discrasias sanguíneas</b> que en pacientes más jóvenes (indicación expresa de ficha técnica) - vigilancia hematológica más estrecha.',

    insufRenal: 'Sin ajuste de dosis en insuficiencia renal leve-moderada. En insuficiencia renal GRAVE (con o sin diálisis): mayor riesgo de trombocitopenia - vigilancia hematológica más frecuente. Los metabolitos pueden acumularse pero sin necesidad de ajuste de dosis establecido formalmente.',

    insufHepatica: 'Sin ajuste de dosis en insuficiencia hepática leve-moderada. En insuficiencia hepática moderada-grave: mayor riesgo de trombocitopenia - vigilancia hematológica más frecuente.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Linezolid Kabi 2 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Linezolid Farmaprojects 2 mg/mL. AEMPS.',
      'FDA DailyMed. Linezolid Injection. U.S. National Library of Medicine.',
      'IDSA Guidelines. Methicillin-Resistant Staphylococcus aureus Infections. CID. 2011 (vigente con actualizaciones).',
      'IDSA/ATS Guidelines. Hospital-Acquired and Ventilator-Associated Pneumonia. CID. 2016.',
      'Wunderink RG, et al. ZEPHyR Trial - Linezolid vs Vancomycin for MRSA Pneumonia. CID. 2012.',
      'Pediamécum AEP. Linezolid. Asociación Española de Pediatría.',
      'Boyer EW, Shannon M. The Serotonin Syndrome. N Engl J Med. 2005 (referencia clásica, vigente).',
    ],
  },

});
