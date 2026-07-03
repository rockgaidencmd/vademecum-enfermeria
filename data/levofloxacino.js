/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/levofloxacino.js
   Fuentes: CIMA AEMPS (Levofloxacino Kabi, Normon, Kern),
   IDSA CAP Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'levofloxacino',
  nombre:         'Levofloxacino',
  nombreGenerico: 'Levofloxacin',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'fluoroquinolona', 'neumonía', 'respiratoria', 'QT largo', 'tendinitis', 'ITU complicada'],
  prioridad:      'moderate',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Fluoroquinolona. Riesgo de tendinitis/rotura tendinosa (especialmente con corticoides concomitantes, ancianos, trasplantados, IRC). Prolongación del intervalo QT. CONTRAINDICADO en niños/adolescentes en desarrollo y en lactancia. Advertencia FDA/EMA de reacciones adversas graves y potencialmente irreversibles (tendón, músculo, articulación, SNC).',

  nivel1: {

    puntosClave: [
      'Fluoroquinolona de <b>ESPECTRO RESPIRATORIO</b> — excelente cobertura de <b>S. pneumoniae (incluyendo resistente a penicilina), atípicos</b> (Legionella, Mycoplasma, Chlamydophila) y gramnegativos.',
      '<b>SOLO perfusión IV LENTA</b> — mínimo <b>30 minutos para 250 mg</b> y <b>60 minutos para 500 mg</b> — nunca administrar más rápido.',
      '<b>RIESGO DE TENDINITIS/ROTURA TENDINOSA</b> (especialmente tendón de Aquiles) — puede aparecer incluso en las primeras 48h; riesgo aumentado con corticoides concomitantes, ancianos, IRC, trasplantados.',
      '<b>CONTRAINDICADO en niños y adolescentes en desarrollo</b> (afectación del cartílago de crecimiento en estudios animales) y en <b>lactancia</b>.',
      '<b>PROLONGACIÓN DEL INTERVALO QT</b> — precaución con otros fármacos QT-prolongadores, hipopotasemia/hipomagnesemia, cardiopatía de base.',
    ],

    resumenRapido: 'Fluoroquinolona de tercera generación con actividad ampliada frente a grampositivos respiratorios (especialmente S. pneumoniae, incluso resistente a penicilina) manteniendo buena cobertura de gramnegativos y actividad frente a patógenos atípicos (Legionella, Mycoplasma, Chlamydophila). Bactericida por inhibición de la ADN-girasa y topoisomerasa IV bacterianas. No se metaboliza significativamente en el hígado - eliminación fundamentalmente renal (no requiere ajuste hepático). Vida media: 6-8h → dosis única o doble diaria. Indicado en: neumonía adquirida en la comunidad, neumonía nosocomial, exacerbación de bronquitis crónica, sinusitis bacteriana aguda, infecciones complicadas del tracto urinario y pielonefritis, infecciones de piel y partes blandas, profilaxis/tratamiento de ántrax por inhalación.',

    objetivoTerapeutico: 'Tratamiento de infecciones respiratorias (comunitarias/nosocomiales) · Cobertura de patógenos atípicos · Infecciones urinarias complicadas · Alternativa en alergia a betalactámicos',

    preparacion: {
      'Presentación IV':          '<b>Levofloxacino 5 mg/mL solución para perfusión</b> - bolsa/frasco 50 mL (250 mg) o 100 mL (500 mg) - LISTA PARA USAR',
      'Presentación VO':          'Comprimidos 250, 500 mg',
      'Diluyente':                '<b>NO requiere dilución</b> - lista para perfusión directa; si se requiere diluir más, usar SF 0.9% o SG 5%',
      'Vía':                      'IV (SOLO perfusión intravenosa lenta - NUNCA bolo) o VO (biodisponibilidad ~100%, permite cambio sin ajuste)',
      '⏱️ VELOCIDAD PERFUSIÓN 250 mg':'<b>Mínimo 30 minutos</b>',
      '⏱️ VELOCIDAD PERFUSIÓN 500 mg':'<b>Mínimo 60 minutos</b>',
      '⏱️ DOSIS estándar (neumonía comunitaria)':'<b>500 mg IV/VO c/24h</b>',
      '⏱️ DOSIS neumonía nosocomial/grave':'<b>500 mg IV c/12h</b>',
      '⏱️ DOSIS ITU complicada/pielonefritis':'250-500 mg IV/VO c/24h',
      '⏱️ Sinusitis aguda':        '500 mg/día × 10-14 días',
      'Cambio IV → VO':           'Misma dosis, sin ajuste (biodisponibilidad equivalente ~100%)',
      'Bomba':                    'Recomendada para control de velocidad de perfusión',
      '🧊 ESTABILIDAD':           'Verificar ficha específica - generalmente usar tras apertura de forma inmediata o dentro de pocas horas',
      'Aspecto':                  'Solución transparente, amarillo pálido a amarillo verdoso (color normal del principio activo)',
    },

    vigilancia: {
      antes: [
        'Revisar antecedentes: tendinopatía previa, epilepsia/patología SNC, QT largo, miastenia gravis.',
        'Revisar medicación concomitante: corticoides (↑↑ riesgo tendinitis), fármacos QT-prolongadores, antiácidos/hierro/zinc/sucralfato (si hay componente oral, reducen absorción - espaciar 2h).',
        'ECG basal si factores de riesgo de QT largo.',
        'Electrolitos (K+, Mg2+) - corregir si alterados.',
        'Confirmar que NO es paciente pediátrico/adolescente en desarrollo ni mujer en lactancia.',
        'Doble verificación: dosis, velocidad de perfusión según dosis (250 vs 500 mg).',
      ],
      durante: [
        '<b>Perfusión LENTA - respetar tiempos mínimos (30 min/60 min)</b> - infusión rápida puede causar hipotensión.',
        'Vigilar sitio IV.',
        'Observar reacciones inmediatas: rash, prurito, hipotensión con infusión rápida.',
        'Vigilar síntomas neurológicos agudos (raros): confusión, alucinaciones, convulsiones.',
      ],
      despues: [
        'Evaluar respuesta clínica a 48-72h.',
        '<b>Vigilar signos de tendinitis</b>: dolor, tumefacción, inflamación (especialmente tendón de Aquiles) - puede aparecer desde las primeras 48h.',
        'Si aparece tendinitis: <b>SUSPENDER inmediatamente</b> y considerar tratamiento alternativo; inmovilizar la extremidad afectada; NO usar corticoides si hay tendinopatía.',
        'Vigilar efectos neuropsiquiátricos: ansiedad, confusión, alteraciones del sueño, muy raramente pensamientos suicidas.',
        'Vigilar neuropatía periférica (parestesias) - suspender si aparece.',
        'ECG de control si hay factores de riesgo de QT largo.',
        'Facilitar transición a VO cuando el paciente tolere.',
        'Documentar: dosis, hora, respuesta clínica, eventos musculoesqueléticos/neurológicos.',
      ],
      suspender: [
        'Primer signo de tendinitis (dolor, tumefacción, inflamación).',
        'Neuropatía periférica de nueva aparición.',
        'Efectos neuropsiquiátricos significativos.',
        'Prolongación significativa del QT con arritmia asociada.',
        'Reacción alérgica/anafilaxia.',
        'Diarrea grave con sospecha de C. difficile.',
        'Completada duración del tratamiento.',
      ],
    },

    incompatibilidades: [
      'No debe mezclarse con heparina ni con soluciones alcalinas (precipitación potencial) - verificar ficha específica del fabricante.',
      'Preferir línea IV independiente.',
      'Lavar línea con SF antes y después si se comparte vía.',
    ],

    alertasSeguridad: [
      '🔴 <b>TENDINITIS Y ROTURA TENDINOSA</b> - puede aparecer desde las primeras 48h, incluso meses tras suspender. Riesgo aumentado con: dosis de 1000 mg/día, ancianos, IRC, trasplante de órgano sólido, uso concomitante de corticoides (EVITAR esta combinación si es posible).',
      '🔴 <b>PROLONGACIÓN DEL INTERVALO QT</b> - precaución con antiarrítmicos IA/III, antidepresivos tricíclicos, macrólidos, antipsicóticos, hipopotasemia/hipomagnesemia no corregida, cardiopatía de base.',
      '🔴 <b>CONTRAINDICADO en niños y adolescentes en desarrollo</b> (afectación del cartílago articular en estudios animales).',
      '🔴 <b>CONTRAINDICADO durante la lactancia</b>.',
      '🟠 Efectos neuropsiquiátricos: confusión, alucinaciones, convulsiones (raras), muy raramente ideación suicida.',
      '🟠 Neuropatía periférica - puede ser de aparición rápida e irreversible en algunos casos.',
      '🟠 Advertencia EMA/FDA sobre reacciones adversas GRAVES, INCAPACITANTES Y POTENCIALMENTE IRREVERSIBLES (tendón, músculo, articulación, sistema nervioso) - restringir uso a cuando no hay alternativa adecuada en infecciones no graves.',
      '🟡 Reduce el umbral convulsivo - precaución en epilepsia o patología del SNC.',
      '🟡 Antiácidos/hierro/zinc/sucralfato reducen la absorción oral - espaciar al menos 2h si se usa vía oral.',
      '🟡 Ancianos y mujeres pueden ser más sensibles a la prolongación del QTc.',
    ],
  },

  modulos: {

    neumoniaComunitaria: `
      <b>Levofloxacino en Neumonía Adquirida en la Comunidad (NAC):</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Fluoroquinolona "respiratoria" - alternativa de monoterapia cuando se necesita cobertura de atípicos (Legionella, Mycoplasma, Chlamydophila) junto con neumococo.<br/>
      • Especialmente útil en: alergia a betalactámicos, sospecha de Legionella, fracaso de tratamiento betalactámico previo.<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>500 mg IV/VO c/24h</b> (NAC no grave-moderada).<br/>
      • En casos más graves: considerar 500 mg c/12h según protocolo institucional/gravedad.<br/><br/>
      <b>VENTAJA:</b><br/>
      • Monoterapia eficaz (cubre tanto típicos como atípicos) - evita necesidad de combinación betalactámico + macrólido en algunos protocolos.<br/>
      • Excelente biodisponibilidad oral - facilita cambio IV→VO precoz y alta hospitalaria temprana.<br/><br/>
      <b>PRECAUCIÓN:</b><br/>
      • Uso creciente de fluoroquinolonas asociado a mayor resistencia - reservar según guías locales y gravedad, priorizando betalactámicos en NAC no complicada cuando sea apropiado.<br/>
      • Advertencia regulatoria: reservar para cuando otras opciones no sean adecuadas, dado el perfil de efectos adversos graves (tendón, SNC).
    `,

    tendinitis: `
      <b>Tendinitis y Rotura Tendinosa por Fluoroquinolonas:</b><br/>
      <b>CARACTERÍSTICAS:</b><br/>
      • Puede afectar cualquier tendón, pero el <b>tendón de Aquiles</b> es el más frecuentemente implicado.<br/>
      • Puede ser <b>BILATERAL</b>.<br/>
      • Puede aparecer <b>desde las primeras 48 horas</b> de tratamiento.<br/>
      • Se han notificado casos <b>hasta varios MESES después de suspender</b> el fármaco.<br/><br/>
      <b>FACTORES DE RIESGO:</b><br/>
      • Dosis diarias de 1000 mg de levofloxacino.<br/>
      • Edad avanzada.<br/>
      • Insuficiencia renal.<br/>
      • Trasplante de órgano sólido.<br/>
      • <b>Uso CONCOMITANTE de corticosteroides</b> - factor de riesgo muy importante, EVITAR esta combinación cuando sea posible.<br/><br/>
      <b>SIGNOS DE ALARMA:</b><br/>
      • Dolor tendinoso (especialmente talón/Aquiles).<br/>
      • Tumefacción.<br/>
      • Inflamación local.<br/><br/>
      <b>MANEJO ANTE PRIMER SIGNO:</b><br/>
      1. <b>SUSPENDER levofloxacino INMEDIATAMENTE</b>.<br/>
      2. Considerar tratamiento antibiótico alternativo.<br/>
      3. <b>Inmovilizar la extremidad afectada</b> de forma apropiada.<br/>
      4. <b>NO usar corticosteroides</b> si aparecen signos de tendinopatía (pueden empeorar el cuadro).<br/>
      5. Derivación a traumatología/rehabilitación según severidad.<br/><br/>
      <b>EDUCACIÓN AL PACIENTE:</b><br/>
      • Informar sobre este riesgo, especialmente si tiene factores de riesgo.<br/>
      • Indicar que reporte inmediatamente cualquier dolor o tumefacción tendinosa, incluso tras finalizar el tratamiento.
    `,

    prolongacionQT: `
      <b>Prolongación del QT por Fluoroquinolonas:</b><br/>
      <b>FACTORES DE RIESGO A EVALUAR ANTES DE PRESCRIBIR:</b><br/>
      • Síndrome congénito de QT largo.<br/>
      • Uso concomitante de otros fármacos QT-prolongadores: antiarrítmicos clase IA (quinidina, procainamida) y III (amiodarona, sotalol), antidepresivos tricíclicos, macrólidos, antipsicóticos.<br/>
      • Desequilibrio electrolítico no corregido: <b>hipopotasemia, hipomagnesemia</b>.<br/>
      • Enfermedad cardíaca: insuficiencia cardíaca, IAM previo, bradicardia.<br/>
      • <b>Ancianos y mujeres</b> pueden ser más sensibles a este efecto.<br/><br/>
      <b>RECOMENDACIÓN PRÁCTICA:</b><br/>
      • Corregir electrolitos (K+, Mg2+) ANTES de iniciar si están alterados.<br/>
      • ECG basal si hay factores de riesgo identificados.<br/>
      • Evitar combinación con otros QT-prolongadores cuando sea posible.<br/>
      • Considerar alternativa antibiótica si múltiples factores de riesgo coexisten.<br/>
      • Vigilancia ECG durante el tratamiento en pacientes de alto riesgo.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Solución lista para usar (5 mg/mL) - verificar volumen según dosis (250 mg en 50 mL, 500 mg en 100 mL).',
      'Etiquetar: Levofloxacino [mg], hora de inicio, vía.',
      '<b>Perfusión LENTA: mínimo 30 min (250mg) o 60 min (500mg)</b> - respetar estrictamente.',
      'Revisar si el paciente toma corticoides - vigilancia extrema de tendinitis si es así.',
      '<b>Confirmar que NO es paciente pediátrico/adolescente ni en lactancia</b> (contraindicaciones absolutas).',
      'Vigilar aparición de dolor/tumefacción tendinosa desde el inicio del tratamiento.',
      'Si aparece tendinitis: SUSPENDER inmediatamente, avisar al médico, inmovilizar la zona.',
      'ECG basal si hay factores de riesgo de QT largo.',
      'Vigilar efectos neuropsiquiátricos: confusión, alteraciones del ánimo.',
      'Vigilar parestesias (posible neuropatía periférica).',
      'Facilitar transición a VO cuando el paciente tolere (misma dosis).',
      'Vigilar primeros 15-30 min por reacción alérgica/hipotensión con infusión rápida.',
      'Documentar: dosis, hora, velocidad de perfusión, respuesta clínica, eventos musculoesqueléticos/neurológicos.',
    ],

    efectosAdversos: [
      '🔴 Tendinitis / rotura tendinosa',
      '🔴 Prolongación del QT / arritmias',
      '🔴 Neuropatía periférica (puede ser irreversible)',
      '🔴 Convulsiones (raras)',
      '🔴 Reacciones psiquiátricas graves (raras: psicosis, ideación suicida)',
      '🔴 Anafilaxia',
      '🔴 Colitis pseudomembranosa por C. difficile',
      '🟠 Hipoglucemia/hiperglucemia (en diabéticos)',
      '🟠 Fotosensibilidad cutánea',
      '🟠 Hipotensión con infusión rápida',
      '🟡 Náuseas, diarrea',
      '🟡 Cefalea, mareos',
      '🟡 Insomnio',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Candidiasis (sobreinfección)',
    ],

    contraindicaciones: [
      '<b>Niños y adolescentes en desarrollo</b> (contraindicación absoluta).',
      '<b>Lactancia</b> (contraindicación absoluta).',
      'Epilepsia.',
      'Antecedente de tendinopatía relacionada con fluoroquinolonas.',
      'Hipersensibilidad a levofloxacino u otras quinolonas.',
      'Precaución en: QT largo, miastenia gravis (puede exacerbar debilidad muscular), insuficiencia renal (ajuste de intervalo), diabetes (riesgo de disglucemia), déficit G6PD.',
    ],

    fotosensibilidad: 'El PACIENTE puede desarrollar fotosensibilidad CUTÁNEA con el tratamiento (reacción de fotosensibilización de la piel a la exposición solar) - educar sobre protección solar. La solución en sí no tiene requerimientos especiales de fotoprotección durante su conservación estándar.',

    estabilidad: {
      'Bolsa/frasco sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Post-apertura':               'Usar preferentemente de forma inmediata (verificar ficha específica del fabricante)',
      'Aspecto':                     'Amarillo pálido a amarillo verdoso (color normal) — desechar si turbidez o cambio significativo',
      'Temperatura':                 'NO congelar',
    },

    presentaciones: [
      'Levofloxacino Kabi 5 mg/mL solución para perfusión - 50 mL (250 mg) o 100 mL (500 mg)',
      'Levofloxacino Normon 5 mg/mL solución para perfusión',
      'Levofloxacino Kern Pharma 5 mg/mL solución para perfusión',
      'Levofloxacino comprimidos 250 mg, 500 mg (múltiples genéricos: Cinfa, Teva, Normon, Mabo, Krka)',
      'Tavanic® (marca histórica)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Neumonía comunitaria',                    dosis: '<b>500 mg IV/VO c/24h</b>',                 via: 'IV/VO' },
      { indicacion: 'Neumonía nosocomial/grave',               dosis: '<b>500 mg IV c/12h</b>',                     via: 'IV' },
      { indicacion: 'ITU complicada / pielonefritis',          dosis: '250-500 mg IV/VO c/24h',                     via: 'IV/VO' },
      { indicacion: 'Sinusitis bacteriana aguda',              dosis: '500 mg/día × 10-14 días',                    via: 'IV/VO' },
      { indicacion: 'Exacerbación bronquitis crónica',         dosis: '250-500 mg/día × 7-10 días',                 via: 'IV/VO' },
      { indicacion: 'Piel/partes blandas no complicada',       dosis: '500 mg/día × 7-14 días',                     via: 'IV/VO' },
      { indicacion: 'Velocidad mínima perfusión 250 mg',       dosis: '30 minutos',                                  via: 'IV' },
      { indicacion: 'Velocidad mínima perfusión 500 mg',       dosis: '60 minutos',                                  via: 'IV' },
    ],

    embarazo: 'Contraindicado salvo necesidad absoluta - las fluoroquinolonas pueden causar artropatía en estudios animales inmaduros; datos limitados en humanos pero se prefiere evitar. Usar alternativas cuando sea posible.',

    pediatria: '<b>CONTRAINDICADO en niños y adolescentes en desarrollo</b> - riesgo de afectación del cartílago de crecimiento demostrado en estudios animales. Excepciones muy limitadas bajo indicación especializada estricta (ej. ciertas infecciones por Pseudomonas en fibrosis quística, profilaxis post-exposición a ántrax) cuando no hay alternativa adecuada.',

    adultoMayor: 'Sin ajuste específico solo por edad, salvo que la función renal esté alterada (frecuente en este grupo). <b>Mayor riesgo de tendinitis/rotura tendinosa</b> y de sensibilidad a la prolongación del QTc - vigilancia intensiva.',

    insufRenal: 'AJUSTE NECESARIO según aclaramiento de creatinina: CrCl 20-49: dosis inicial completa, luego reducir a la mitad del intervalo o de la dosis según pauta específica · CrCl 10-19: mayor reducción · Consultar tabla específica de ficha técnica para ajuste exacto por indicación.',

    insufHepatica: '<b>NO requiere ajuste de dosis</b> - levofloxacino no se metaboliza significativamente en el hígado, eliminación fundamentalmente renal.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Levofloxacino Kabi, Normon, Kern Pharma 5 mg/mL. Agencia Española de Medicamentos.',
      'FDA DailyMed. Levofloxacin Injection. U.S. National Library of Medicine.',
      'EMA. Fluoroquinolone and Quinolone Antibiotics - Referral on Disabling Side Effects. 2019.',
      'IDSA/ATS Guidelines. Community-Acquired Pneumonia in Adults. CID. 2019.',
      'FDA Safety Communication. Fluoroquinolones - Disabling Side Effects. 2016 (actualizaciones posteriores).',
      'Sanford Guide to Antimicrobial Therapy. 2024.',
      'Pediamécum AEP. Levofloxacino - Uso Restringido en Pediatría. Asociación Española de Pediatría.',
    ],
  },

});
