/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/esmolol.js
   Fuentes: CIMA AEMPS (Brevibloc 10 mg/mL, 100 mg/10mL),
   FDA DailyMed, ACC/AHA Guidelines Disección Aórtica
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'esmolol',
  nombre:         'Esmolol',
  nombreGenerico: 'Esmolol Hydrochloride',
  categoria:      'antiarritmicos',
  tags:           ['beta-bloqueante', 'ultracorto', 'taquicardia supraventricular', 'disección aórtica', 'control FC', 'intubación', 'FA'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Beta-bloqueante cardioselectivo de acción ULTRACORTA. Riesgo de bradicardia severa, bloqueo AV, hipotensión, broncoespasmo en asmáticos. Extravasación causa necrosis tisular severa. NO exceder 24h de perfusión continua.',

  nivel1: {

    puntosClave: [
      'Beta-bloqueante CARDIOSELECTIVO (beta-1) de <b>ACCIÓN ULTRACORTA</b> — vida media plasmática de solo <b>9 minutos</b> (metabolismo por esterasas eritrocitarias, NO hepático/renal).',
      '<b>ALTAMENTE TITULABLE Y REVERSIBLE</b> — efecto desaparece en 10-20 min tras suspender la perfusión, ideal para situaciones que requieren control momento a momento.',
      'Indicaciones principales: <b>control de FC en taquicardia supraventricular/FA perioperatoria</b>, disección aórtica aguda, atenuar respuesta hemodinámica a la intubación, HTA perioperatoria.',
      '<b>INCOMPATIBLE con BICARBONATO SÓDICO</b> — no administrar por la misma línea.',
      '<b>EXTRAVASACIÓN causa NECROSIS TISULAR severa</b> — vigilar sitio IV estrechamente, preferir vía central si perfusión prolongada o concentrada.',
    ],

    resumenRapido: 'Antagonista beta-1 adrenérgico selectivo, sin actividad simpaticomimética intrínseca ni efecto estabilizador de membrana. Su característica distintiva es la vida media ULTRACORTA (9 minutos) por hidrólisis rápida en eritrocitos, independiente de función hepática o renal. Esto le confiere titulabilidad y reversibilidad únicas: el efecto se instaura y desaparece en minutos, permitiendo ajuste momento a momento y suspensión rápida si aparecen efectos adversos. Inicio: 1-2 min · Pico: 6-10 min · Duración post-suspensión: 10-20 min. Indicado en: taquicardia supraventricular perioperatoria (incluyendo FA/flutter), disección aórtica aguda (control de FC), atenuar respuesta hemodinámica a laringoscopia/intubación, HTA/taquicardia perioperatoria, isquemia miocárdica con taquicardia.',

    objetivoTerapeutico: 'Control rápido y titulable de la frecuencia cardíaca · Reducir estrés de pared aórtica en disección · Atenuar respuesta simpática a la intubación · Control de TSV perioperatoria',

    preparacion: {
      'Presentación lista para usar':'<b>Brevibloc 10 mg/mL - vial 10 mL (100 mg) - LISTO PARA USAR, sin diluir</b>',
      'Presentación concentrada':  'Brevibloc 100 mg/mL - vial 10 mL (1000 mg) - REQUIERE DILUCIÓN antes de perfundir',
      'Diluyente (si se usa concentrado)':'SF 0.9% · SG 5% (compatibles)',
      'Dilución si se usa vial concentrado':'2.5 g (2.5 mL de 1000mg/mL... verificar presentación) en 250 mL → 10 mg/mL',
      'Vía':                      'IV exclusiva - vía periférica o central (preferir central en perfusión prolongada)',
      '⏱️ DOSIS DE CARGA (opcional)':'<b>500 mcg/kg IV en 1 minuto</b>',
      '⏱️ PERFUSIÓN DE MANTENIMIENTO':'<b>50-300 mcg/kg/min IV continua</b> (iniciar en 50 mcg/kg/min)',
      '⏱️ Sin dosis de carga':     'Equilibrio estacionario en 30 min con dosis de 50-300 mcg/kg/min',
      '⏱️ TSV perioperatoria (protocolo)':'Carga 500 mcg/kg en 1 min + perfusión 50 mcg/kg/min × 4 min, repetir/ajustar según respuesta',
      '⏱️ DOSIS MÁXIMA':          '<b>300 mcg/kg/min</b> (no estudiada seguridad por encima)',
      '⏱️ DURACIÓN MÁXIMA perfusión':'<b>NO exceder 24 horas</b> (ficha técnica española)',
      'Bomba':                    'OBLIGATORIA para perfusión continua - dosis en mcg/kg/min',
      '🧊 ESTABILIDAD':           'Vial listo para usar: hasta vencimiento · Diluida: verificar estabilidad específica',
      'Aspecto':                  'Solución transparente, incolora a ligeramente amarilla',
    },

    vigilancia: {
      antes: [
        'FC, PA, ECG basales.',
        'Revisar contraindicaciones: bradicardia severa (FC < 50), bloqueo AV, asma/EPOC severo, shock cardiogénico, ICC descompensada.',
        'Calcular dosis exacta por peso (mcg/kg/min).',
        'Preferir vía IV de buen calibre - considerar vía central si perfusión prolongada.',
        'Verificar ausencia de bicarbonato en la misma línea.',
        'Doble verificación: dosis, dilución si aplica, velocidad en bomba.',
      ],
      durante: [
        'Monitor continuo: ECG, PA, FC durante toda la perfusión.',
        'Titular dosis según objetivo de FC/PA cada 5-10 minutos.',
        '<b>VIGILAR SITIO IV ESTRECHAMENTE</b> - extravasación causa necrosis tisular severa.',
        'Si aparece dolor, hinchazón, palidez en sitio IV: SUSPENDER y cambiar de vía inmediatamente.',
        'Vigilar bradicardia - si FC < 50, reducir o pausar perfusión.',
        'Vigilar hipotensión - efecto dosis-dependiente.',
        'Vigilar broncoespasmo en pacientes con antecedente respiratorio (aunque cardioselectivo, a dosis altas pierde selectividad).',
      ],
      despues: [
        'El efecto desaparece en 10-20 minutos tras suspender - vigilar reaparición de taquicardia/HTA.',
        'Si estabilidad sostenida > 1 hora: <b>reducir dosis a la mitad</b> y planificar transición a fármaco de acción más larga (beta-bloqueante VO, digoxina, calcioantagonista no dihidropiridínico).',
        'Vigilar sitio IV 24-48h por signos tardíos de extravasación/flebitis.',
        'Documentar: dosis, velocidad, hora inicio/fin, respuesta FC/PA, eventos.',
        'Al finalizar: suspender GRADUALMENTE si es posible (reduce riesgo de taquicardia/HTA de rebote).',
      ],
      suspender: [
        'Bradicardia severa (FC < 50) sintomática.',
        'Bloqueo AV de nuevo inicio.',
        'Hipotensión severa sintomática.',
        'Broncoespasmo agudo.',
        'Extravasación en sitio IV.',
        'Insuficiencia cardíaca aguda.',
        'Completadas 24h de perfusión (máximo recomendado) - transicionar a otro fármaco.',
      ],
    },

    incompatibilidades: [
      '<b>BICARBONATO SÓDICO</b> - NO ES COMPATIBLE (indicación expresa ficha técnica).',
      'Furosemida - verificar antes de mezclar.',
      'Diazepam - incompatibilidad documentada en algunas fuentes.',
      'Tiopental sódico - verificar compatibilidad.',
      'Generalmente compatible con SF, SG5%, Ringer Lactato.',
      'Lavar línea con SF antes y después de fármacos incompatibles.',
    ],

    alertasSeguridad: [
      '🔴 <b>EXTRAVASACIÓN causa NECROSIS TISULAR</b> - vigilancia estricta del sitio IV.',
      '🔴 <b>CONTRAINDICADO en bradicardia sinusal severa (FC < 50), bloqueo AV 2º-3º grado</b>.',
      '🔴 CONTRAINDICADO en shock cardiogénico, ICC descompensada severa.',
      '🟠 A dosis altas (> 200 mcg/kg/min) PIERDE cardioselectividad - riesgo de broncoespasmo en asmáticos.',
      '🟠 <b>NO exceder 24h de perfusión continua</b> - experiencia limitada más allá de este tiempo.',
      '🟠 Hipotensión dosis-dependiente - titular cuidadosamente.',
      '🟠 <b>NO se recomienda en embarazo</b> - toxicidad reproductiva en estudios animales, datos limitados en humanos.',
      '🟡 Contiene sodio (28 mg/vial aprox) - considerar en pacientes con restricción estricta de sodio.',
      '🟡 Al suspender: posible taquicardia/HTA de rebote - transición gradual a otro fármaco preferible.',
      '🟡 Efecto reversible rápidamente (10-20 min) - ventaja en caso de inestabilidad hemodinámica inesperada.',
    ],
  },

  modulos: {

    disecccionAortica: `
      <b>Esmolol en Disección Aórtica Aguda:</b><br/>
      <b>POR QUÉ ES IDEAL:</b><br/>
      • Control ULTRARRÁPIDO de FC con posibilidad de ajuste momento a momento.<br/>
      • Reversibilidad en minutos si aparece inestabilidad.<br/>
      • Reduce el "dP/dt" (velocidad de eyección ventricular) que estresa la pared aórtica dañada.<br/><br/>
      <b>OBJETIVOS HEMODINÁMICOS (ACC/AHA):</b><br/>
      • <b>FC objetivo: 60-80 lpm</b> (PRIORIDAD sobre la PA).<br/>
      • <b>PAS objetivo: 100-120 mmHg</b> (tras control de FC).<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. <b>Carga: 500 mcg/kg IV en 1 minuto</b>.<br/>
      2. <b>Perfusión inicial: 50 mcg/kg/min</b>.<br/>
      3. Reevaluar cada 4-5 minutos - si FC no controlada, repetir carga y aumentar perfusión en incrementos de 50 mcg/kg/min.<br/>
      4. <b>Máximo: 300 mcg/kg/min</b>.<br/>
      5. Si PA sigue elevada tras controlar FC: añadir vasodilatador (nitroprusiato, nicardipino) - <b>NUNCA antes que el beta-bloqueante</b> (evita taquicardia refleja que empeora el estrés de pared).<br/><br/>
      <b>VENTAJA sobre labetalol en este contexto:</b><br/>
      • Mayor titulabilidad momento a momento.<br/>
      • Reversión más rápida si el paciente requiere pasar a quirófano de emergencia.<br/><br/>
      <b>COORDINACIÓN:</b> Cirugía cardiovascular urgente en paralelo - esmolol es puente, no tratamiento definitivo.
    `,

    tsvPerioperatoria: `
      <b>Esmolol en Taquicardia Supraventricular Perioperatoria:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • TSV (incluyendo FA/flutter auricular) en período perioperatorio o postoperatorio.<br/>
      • Control a corto plazo del ritmo ventricular donde se prefiere un agente de acción corta.<br/>
      • Taquicardia sinusal inapropiada perioperatoria.<br/><br/>
      <b>EXCLUSIÓN IMPORTANTE:</b><br/>
      • <b>NO indicado en síndromes de preexcitación</b> (WPW) - puede favorecer conducción por vía accesoria.<br/><br/>
      <b>PROTOCOLO ESTÁNDAR:</b><br/>
      1. <b>Carga opcional: 500 mcg/kg IV en 1 minuto</b>.<br/>
      2. <b>Perfusión: 50 mcg/kg/min durante 4 minutos</b>.<br/>
      3. Si respuesta insuficiente: repetir carga y aumentar perfusión en incrementos de 50 mcg/kg/min (hasta máximo 200 mcg/kg/min habitualmente, pudiendo llegar a 300).<br/>
      4. Una vez controlada la FC: mantener perfusión mínima efectiva.<br/><br/>
      <b>TRANSICIÓN:</b><br/>
      • Tras 1 hora de estabilidad: reducir dosis a la mitad.<br/>
      • Sustituir por beta-bloqueante oral, digoxina o calcioantagonista no dihidropiridínico (diltiazem/verapamilo) según contexto clínico.<br/><br/>
      <b>USO PEDIÁTRICO (estudios específicos):</b><br/>
      • Carga 500 mcg/kg + perfusión 300 mcg/kg/min: TSV resuelta en 65% a los 5 minutos (estudio en 2-16 años).
    `,

    intubacion: `
      <b>Esmolol para Atenuar Respuesta a Intubación:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Prevenir taquicardia/HTA reflejas durante laringoscopia e intubación.<br/>
      • Especialmente útil en: cardiopatía isquémica, aneurisma cerebral, HTA severa preexistente.<br/><br/>
      <b>MECANISMO:</b><br/>
      • Bloquea la respuesta simpática (taquicardia, HTA) al estímulo doloroso de la laringoscopia.<br/>
      • Acción ultracorta permite uso seguro sin comprometer la hemodinamia post-intubación si no se necesita más.<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>Carga: 1-2 mg/kg IV, 2-3 minutos antes de la laringoscopia</b>.<br/>
      • Alternativa: perfusión breve a 200-300 mcg/kg/min iniciada minutos antes.<br/><br/>
      <b>COMBINACIÓN EN RSI:</b><br/>
      • Esmolol + hipnótico (etomidato/propofol) + relajante muscular.<br/>
      • Especialmente considerado en pacientes con reserva cardiovascular limitada donde la respuesta simpática a la intubación podría ser peligrosa (aneurisma, disección, cardiopatía isquémica activa).<br/><br/>
      <b>VENTAJA:</b> Si tras la intubación el paciente desarrolla bradicardia o hipotensión inesperada, el efecto de esmolol desaparece en 10-20 minutos (a diferencia de beta-bloqueantes de acción más larga).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar presentación: 10 mg/mL (listo para usar) vs 100 mg/mL (requiere dilución).',
      'Calcular dosis exacta por peso en mcg/kg/min.',
      'Etiquetar bolsa/jeringa: Esmolol [mg], concentración, velocidad (mcg/kg/min), hora.',
      'Bomba de infusión OBLIGATORIA - programada en mcg/kg/min.',
      '<b>VIGILAR SITIO IV ESTRECHAMENTE</b> - extravasación causa necrosis.',
      'Preferir vía de buen calibre; considerar vía central en perfusión prolongada.',
      '<b>NUNCA mezclar con bicarbonato sódico</b>.',
      'Monitor continuo: ECG, PA, FC durante toda la perfusión.',
      'Titular dosis cada 5-10 minutos según objetivo de FC/PA.',
      'Vigilar bradicardia - pausar si FC < 50.',
      '<b>NO exceder 24 horas de perfusión continua</b>.',
      'Tras 1h de estabilidad: coordinar con médico la reducción a la mitad y transición a VO.',
      'Al suspender: hacerlo gradualmente si la situación clínica lo permite.',
      'Documentar: dosis, velocidad, hora inicio/fin, FC/PA seriadas, eventos.',
    ],

    efectosAdversos: [
      '🔴 Bradicardia severa / bloqueo AV',
      '🔴 Hipotensión severa',
      '🔴 Necrosis tisular por extravasación',
      '🔴 Broncoespasmo (dosis altas, pierde cardioselectividad)',
      '🔴 Insuficiencia cardíaca aguda',
      '🟠 Flebitis, irritación en sitio IV',
      '🟠 Taquicardia/HTA de rebote al suspender bruscamente',
      '🟡 Náuseas, vómitos',
      '🟡 Mareos, cefalea',
      '🟡 Sudoración',
      '🟡 Confusión (raro)',
      '🟡 Dolor en omóplato/costocondritis (descrito en ficha técnica)',
      '🟡 Puede causar o empeorar psoriasis (efecto de clase beta-bloqueantes)',
    ],

    contraindicaciones: [
      'Bradicardia sinusal severa (FC < 50).',
      'Bloqueo AV de 2º-3º grado sin marcapasos.',
      'Shock cardiogénico.',
      'Insuficiencia cardíaca descompensada severa.',
      'Hipotensión severa preexistente.',
      'Taquicardia supraventricular en síndrome de preexcitación (WPW).',
      'Hipersensibilidad a esmolol (posible sensibilidad cruzada entre beta-bloqueantes).',
      'Asma/EPOC severo (relativa - dosis altas pierden cardioselectividad).',
      'No recomendado en embarazo.',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente (< 25°C) sin requerimientos especiales de fotoprotección.',

    estabilidad: {
      'Vial 10 mg/mL (listo para usar)':'Temperatura ambiente < 25°C hasta vencimiento',
      'Vial 100 mg/mL (concentrado)':    'Requiere dilución antes de usar - verificar estabilidad post-dilución',
      'Post-apertura':                     'Usar según indicaciones específicas del fabricante',
      'Aspecto':                           'Transparente, incolora a ligeramente amarilla',
      'Temperatura':                       'NO congelar · < 25°C',
    },

    presentaciones: [
      'Brevibloc® 10 mg/mL - vial 10 mL (100 mg) - listo para usar (Baxter)',
      'Brevibloc® 100 mg/mL - vial 10 mL (1000 mg) - concentrado, requiere dilución',
      'Esmolol clorhidrato genéricos varios',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis de carga (opcional)',             dosis: '<b>500 mcg/kg IV en 1 minuto</b>',          via: 'IV' },
      { indicacion: 'Perfusión de mantenimiento',             dosis: '<b>50-300 mcg/kg/min IV</b>',                via: 'IV' },
      { indicacion: 'TSV perioperatoria (protocolo)',        dosis: 'Carga 500 mcg/kg + 50 mcg/kg/min × 4 min', via: 'IV' },
      { indicacion: 'Disección aórtica',                       dosis: 'Carga 500 mcg/kg + perfusión titulada',    via: 'IV' },
      { indicacion: 'Atenuar respuesta a intubación',         dosis: '1-2 mg/kg IV 2-3 min antes',                via: 'IV' },
      { indicacion: 'Pediátrico (TSV)',                        dosis: 'Carga 500-1000 mcg/kg + 50-300 mcg/kg/min',via: 'IV' },
      { indicacion: 'DOSIS MÁXIMA',                            dosis: '<b>300 mcg/kg/min</b>',                      via: 'IV' },
      { indicacion: 'DURACIÓN MÁXIMA perfusión',               dosis: '<b>24 horas</b>',                            via: 'IV' },
    ],

    embarazo: '<b>NO SE RECOMIENDA el uso durante el embarazo</b> (ficha técnica CIMA) - toxicidad reproductiva en estudios animales, datos humanos limitados. Si es necesario: monitorizar flujo uteroplacentario y crecimiento fetal. Vigilar hipoglucemia, hipotensión, bradicardia neonatal si se usa en último trimestre. <b>NO debe usarse durante la lactancia</b> - se desconoce excreción en leche materna.',

    pediatria: 'Estudiado en TSV pediátrica (2-16 años): carga 1000 mcg/kg + perfusión 300 mcg/kg/min (65% resolución a 5 min). En HTA post-coartación aórtica: perfusión inicial 125-500 mcg/kg. Uso bajo supervisión especializada.',

    adultoMayor: 'Mayor sensibilidad a efectos hipotensores y bradicardizantes. Iniciar con dosis en el rango inferior. Vigilancia hemodinámica intensiva.',

    insufRenal: 'Metabolismo por esterasas eritrocitarias, NO dependiente de función renal - sin ajuste necesario. Metabolito ácido SÍ se elimina por vía renal - en IRC severa puede prolongarse discretamente su semivida (sin relevancia clínica mayor).',

    insufHepatica: 'Sin ajuste específico - metabolismo NO hepático (esterasas eritrocitarias). Ventaja en pacientes con disfunción hepática.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Brevibloc® 10 mg/mL y 100 mg/mL. Agencia Española de Medicamentos.',
      'FDA DailyMed. Esmolol Hydrochloride Injection. U.S. National Library of Medicine.',
      'ACC/AHA/AATS Guidelines. Thoracic Aortic Disease. Circulation. 2022.',
      'Cardioteca. Esmolol: Evidencia y Práctica Clínica. 2025.',
      'Jing L, et al. Esmolol Improves Sepsis Outcomes through Cardiovascular and Immune Modulation. Front Pharmacol. 2025.',
      'Pediamécum AEP. Esmolol. Asociación Española de Pediatría.',
      'ACC/AHA Guidelines. Management of Patients with Atrial Fibrillation. Circulation. 2023.',
      'Sanford Guide / UpToDate. Esmolol - Drug Information. 2025.',
    ],
  },

});
