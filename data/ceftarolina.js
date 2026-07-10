/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/ceftarolina.js
   Fuentes: CIMA AEMPS (Zinforo), FDA DailyMed,
   SEIMC Guía Antibióticos 2023, IDSA MRSA Guidelines 2011
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'ceftarolina',
  nombre:         'Ceftarolina',
  nombreComercial: 'Zinforo®',
  nombreGenerico: 'Ceftaroline Fosamil',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'cefalosporina', '5ª generación', 'MRSA', 'piel y partes blandas', 'neumonía', 'gram positivo resistente'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Cefalosporina de 5ª generación</b> — la única cefalosporina con actividad frente a <b>MRSA</b> (Staphylococcus aureus resistente a meticilina).',
      'Espectro dual: <b>MRSA + gram negativos comunes</b> (E. coli, Klebsiella no BLEE) — NO cubre Pseudomonas ni BLEE.',
      'Indicaciones aprobadas: <b>infecciones de piel/partes blandas complicadas y neumonía adquirida en la comunidad</b>.',
      '<b>Infundir en 5-60 min según dosis</b> (bolo lento de 5-15 min o infusión de 60 min).',
      'Reacción cruzada con alergia a penicilinas/cefalosporinas <b>posible</b> — preguntar siempre antes de administrar.',
    ],

    resumenRapido: 'Cefalosporina de quinta generación con actividad ampliada frente a cocos gram positivos resistentes, siendo la única cefalosporina con actividad clínicamente útil frente a Staphylococcus aureus resistente a meticilina (MRSA) por su mayor afinidad por la proteína PBP2a. Mantiene además actividad frente a gram negativos comunes no productores de BLEE, aunque carece de cobertura frente a Pseudomonas aeruginosa. Está aprobada para el tratamiento de infecciones de piel y partes blandas complicadas y neumonía adquirida en la comunidad, siendo una alternativa relevante cuando se sospecha o confirma MRSA en estos contextos.',

    objetivoTerapeutico: 'Tratamiento de infecciones de piel y partes blandas complicadas, incluidas las causadas por MRSA · Neumonía adquirida en la comunidad · Alternativa a vancomicina/linezolid cuando se requiere cobertura de MRSA con actividad adicional frente a gram negativos',

    preparacion: {
      'Presentación':          '<b>Zinforo® 600 mg — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con agua para inyección según ficha técnica',
      'Diluyente':             'SF 0.9% o SG 5%',
      'Dilución final':        'Diluir en 250 mL SF/SG 5% para infusión de 60 min, o menor volumen para bolo lento',
      'Dosis estándar':        '<b>600 mg IV c/12 h</b>',
      '⏱️ Tiempo de infusión':  '<b>5-15 min (bolo lento) o 60 min (infusión estándar) según protocolo</b>',
      'Vía':                   'IV intermitente',
      '🧊 Estabilidad':         '<b>6 h a temperatura ambiente / 24 h refrigerado tras reconstituir/diluir</b>',
    },

    vigilancia: {
      antes: [
        'Preguntar activamente por alergia a penicilinas/cefalosporinas — reacción cruzada posible.',
        'Función renal basal — ajuste de dosis en insuficiencia renal.',
        'Confirmar la sospecha o confirmación de MRSA que justifica el uso (no de primera línea si no hay sospecha de resistencia).',
        'Descartar que se trate de una infección por Pseudomonas (sin cobertura eficaz).',
      ],
      durante: [
        'Infundir según el tiempo indicado (bolo lento 5-15 min o infusión 60 min).',
        'Vigilar reacción alérgica: rash, urticaria, disnea.',
        'Observar la zona de punción por flebitis.',
      ],
      despues: [
        'Vigilar diarrea — descartar C. difficile en tratamientos prolongados.',
        'Reevaluar respuesta clínica a las 48-72 h.',
        'Función renal periódica si tratamiento prolongado.',
        'Documentar dosis, tolerancia y respuesta clínica.',
      ],
      suspender: [
        'Reacción alérgica grave/anafilaxia.',
        'Diarrea grave con sospecha de colitis por C. difficile.',
        'Ausencia de respuesta clínica — reevaluar diagnóstico y cobertura (recordar que no cubre Pseudomonas).',
        'Al completar la pauta indicada.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros antibióticos en la misma solución.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
      'Lavar la vía antes y después si se comparte el acceso.',
    ],

    alertasSeguridad: [
      '🟠 REACCIÓN ALÉRGICA cruzada con penicilinas/cefalosporinas — preguntar siempre antes de administrar.',
      '🟠 NO CUBRE Pseudomonas aeruginosa ni gram negativos productores de BLEE.',
      '🟡 Reservar para sospecha/confirmación de MRSA — no es antibiótico de primera línea de amplio espectro rutinario.',
      '🟡 Diarrea/colitis por C. difficile con tratamientos prolongados.',
      '🟡 Ajuste de dosis en insuficiencia renal.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Preguntar siempre por alergia a penicilinas/cefalosporinas antes de la primera dosis.',
      'Diluir según ficha técnica y administrar en bolo lento (5-15 min) o infusión de 60 min según protocolo.',
      'Confirmar con el equipo médico que existe sospecha o confirmación de MRSA que justifique su uso.',
      'Vigilar reacción alérgica durante y después de la administración.',
      'Vigilar diarrea persistente en tratamientos de varios días.',
      'Reevaluar la función renal si el tratamiento se prolonga.',
      'Documentar dosis, hora y tolerancia en cada turno.',
    ],

    efectosAdversos: [
      '🟠 Reacción alérgica (rash, urticaria; anafilaxia rara)',
      '🟠 Diarrea / colitis por C. difficile',
      '🟡 Náuseas, vómitos',
      '🟡 Flebitis en el punto de infusión',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Test de Coombs positivo (raramente con hemólisis)',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a cefalosporinas.',
      'Antecedente de reacción anafiláctica grave a betalactámicos (valorar riesgo/beneficio).',
      'Infección por Pseudomonas confirmada sin cobertura adicional (no eficaz).',
    ],

    fotosensibilidad: 'No relevante. Conservar el vial refrigerado (2-8°C) protegido de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  '<b>Refrigerado 2-8°C hasta vencimiento</b>',
      'Diluido en SF/SG 5%':   '<b>6 h a temperatura ambiente / 24 h refrigerado (2-8°C)</b>',
      'Aspecto':                 'Solución de color amarillo pálido a ámbar — normal (color propio del fármaco)',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro del tiempo indicado tras reconstituir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: '6 h a temperatura ambiente o 24 h refrigerado tras la dilución final.',
      notas:             'El color amarillo-ámbar es característico del fármaco. Reservar para sospecha/confirmación de MRSA.',
    },

    presentaciones: [
      'Zinforo® 600 mg — vial polvo liofilizado IV',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Piel y partes blandas complicadas', dosis: '<b>600 mg IV c/12 h</b>',                       via: 'IV' },
      { indicacion: 'Neumonía adquirida en la comunidad', dosis: '600 mg IV c/12 h',                              via: 'IV' },
      { indicacion: 'IR (ClCr 31-50)',                     dosis: '400 mg IV c/12 h',                              via: 'IV' },
      { indicacion: 'IR grave (ClCr 15-30)',                dosis: '300 mg IV c/12 h',                              via: 'IV' },
      { indicacion: 'IR terminal / hemodiálisis',           dosis: '200 mg IV c/12 h (tras la sesión de diálisis)', via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Datos limitados en humanos, sin evidencia de teratogenicidad en estudios animales. Usar solo si el beneficio supera el riesgo, cuando se necesita cobertura de MRSA.',

    pediatria: '2 meses-18 años: dosis según edad y peso (rango 8-12 mg/kg IV c/8h en menores, hasta 600 mg c/12h en adolescentes de peso adulto). Uso creciente en infecciones de piel/partes blandas pediátricas por MRSA.',

    adultoMayor: 'Ajustar la dosis según función renal (ClCr real). Sin toxicidad específica añadida por la edad más allá del ajuste renal.',

    insufRenal: '<b>Ajuste según ClCr</b>: ClCr 31-50: 400 mg c/12h. ClCr 15-30: 300 mg c/12h. Hemodiálisis: 200 mg c/12h tras la sesión.',

    insufHepatica: 'Sin ajuste específico necesario — eliminación fundamentalmente renal, no hepática.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Zinforo® (ceftarolina fosamilo).',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Liu C et al. Clinical Practice Guidelines by the IDSA for the Treatment of MRSA Infections in Adults and Children. Clin Infect Dis. 2011.',
      'File TM et al. FOCUS 1 and FOCUS 2: ceftaroline fosamil for community-acquired pneumonia. Clin Infect Dis. 2010.',
      'Gilbert DN et al. The Sanford Guide to Antimicrobial Therapy. 2023.',
    ],
  },

});
