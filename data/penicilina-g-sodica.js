/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/penicilina-g-sodica.js
   Fuentes: CIMA AEMPS, FDA DailyMed, IDSA Guidelines,
   OMS Lista de Medicamentos Esenciales, Cuadro Básico
   IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'penicilina-g-sodica',
  nombre:         'Penicilina G Sódica',
  nombreComercial: 'Bencilpenicilina Sódica',
  nombreGenerico: 'Penicillin G Sodium (Benzylpenicillin)',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'penicilina', 'sífilis', 'meningitis', 'estreptococo', 'clostridium', 'cuadro básico', 'clásico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Riesgo de reacción anafiláctica grave — es el antibiótico con más reacciones alérgicas documentadas históricamente. Contiene sodio/potasio en cantidad relevante en dosis altas — vigilar en insuficiencia cardíaca/renal. La infusión rápida a dosis muy altas puede causar convulsiones (encefalopatía por penicilina).',

  nivel1: {

    puntosClave: [
      '<b>Antibiótico clásico del cuadro básico</b> — sigue siendo de primera línea en sífilis, meningitis meningocócica/neumocócica sensible, endocarditis por estreptococo y gangrena gaseosa (Clostridium).',
      'Dosis altas en infección grave: <b>2-4 millones UI IV c/4-6 h</b> (hasta 24 millones UI/día en meningitis).',
      '<b>Reacción alérgica</b>: el antibiótico con más anafilaxia documentada — preguntar SIEMPRE por alergia a penicilinas antes de administrar.',
      '<b>Contiene sodio o potasio</b> según la sal — relevante en insuficiencia cardíaca, renal o hiperpotasemia (vigilar con dosis altas repetidas).',
      'Infundir en <b>15-30 min diluido</b> — la infusión rápida a dosis muy altas se ha asociado a convulsiones.',
    ],

    resumenRapido: 'Antibiótico betalactámico natural, el primero descubierto de su clase, con actividad frente a estreptococos, Treponema pallidum (sífilis), Neisseria meningitidis y Clostridium perfringens, entre otros. A pesar de la aparición de resistencias y de antibióticos más modernos, sigue siendo el fármaco de elección en indicaciones específicas donde ningún otro antibiótico lo supera: neurosífilis, endocarditis estreptocócica sensible, meningitis meningocócica confirmada y gangrena gaseosa. Es la causa histórica más frecuente de reacciones anafilácticas por antibióticos, por lo que la anamnesis de alergia es un paso obligatorio antes de cada administración.',

    objetivoTerapeutico: 'Tratamiento de la neurosífilis y sífilis en gestante · Meningitis meningocócica o neumocócica confirmada sensible · Endocarditis por estreptococo sensible · Gangrena gaseosa (Clostridium perfringens) · Faringoamigdalitis estreptocócica grave',

    preparacion: {
      'Presentación':          '<b>Penicilina G Sódica 1.000.000 UI, 5.000.000 UI — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con agua para inyección o SF 0.9% según ficha técnica',
      'Diluyente':             'SF 0.9% o SG 5% para la infusión',
      'Dosis meningitis/endocarditis grave': '<b>2-4 millones UI IV c/4-6 h</b> (hasta 18-24 millones UI/día repartidas)',
      'Dosis neurosífilis':    '3-4 millones UI IV c/4 h × 10-14 días',
      'Dosis moderada':        '1-2 millones UI IV c/4-6 h',
      '⏱️ Tiempo de infusión':  '<b>15-30 min por dosis — no administrar en bolo rápido a dosis altas</b>',
      'Vía':                   'IV intermitente (dosis altas) · IM (dosis moderadas, menos frecuente en hospitalización)',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5% tras reconstituir/diluir</b>',
    },

    vigilancia: {
      antes: [
        '<b>Preguntar SIEMPRE por alergia a penicilinas</b> — antecedente de urticaria, angioedema o anafilaxia contraindica su uso.',
        'Función renal — ajuste de dosis en insuficiencia renal (relevante por el contenido de sodio/potasio y por la eliminación renal del fármaco).',
        'Ionograma basal (sodio, potasio) si se prevén dosis muy altas y repetidas.',
        'Confirmar la indicación específica (sífilis, meningitis, endocarditis) — no es antibiótico de primera línea empírica amplia en la actualidad.',
      ],
      durante: [
        'Infundir en 15-30 min — la infusión rápida a dosis altas se ha asociado a convulsiones (encefalopatía por penicilina).',
        'Vigilar reacción alérgica: rash, urticaria, angioedema, disnea, hipotensión — tener adrenalina disponible.',
        'Vigilar signos neurológicos (confusión, mioclonías) en dosis muy altas, especialmente en insuficiencia renal.',
      ],
      despues: [
        'Vigilar diarrea — descartar C. difficile en tratamientos prolongados.',
        'Ionograma periódico (sodio/potasio) en tratamientos prolongados con dosis altas.',
        'Función renal si el tratamiento se extiende varios días.',
        'En sífilis: vigilar la reacción de Jarisch-Herxheimer (fiebre, escalofríos, mialgias en las primeras horas) — es esperada y autolimitada, no indica alergia.',
      ],
      suspender: [
        'Reacción alérgica grave/anafilaxia — suspender de inmediato y tratar como emergencia.',
        'Signos neurológicos (convulsiones) atribuibles a toxicidad — reevaluar dosis y función renal.',
        'Diarrea grave con sospecha de C. difficile.',
        'Al completar la pauta indicada según la infección tratada.',
      ],
    },

    incompatibilidades: [
      'No mezclar con aminoglucósidos en la misma jeringa o solución — inactivación mutua.',
      'Incompatible con soluciones ácidas.',
      'No mezclar con soluciones que contengan bicarbonato en la misma vía sin verificar.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🔴 REACCIÓN ANAFILÁCTICA — el antibiótico con más reacciones alérgicas graves documentadas históricamente; anamnesis obligatoria.',
      '🟠 Contenido de sodio/potasio relevante en dosis altas — vigilar en insuficiencia cardíaca, renal o hiperpotasemia.',
      '🟠 Convulsiones con infusión rápida a dosis muy altas, especialmente en insuficiencia renal — infundir siempre lento.',
      '🟡 Reacción de Jarisch-Herxheimer esperada en el tratamiento de la sífilis (no confundir con alergia).',
      '🟡 Ajuste de dosis obligatorio en insuficiencia renal.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Preguntar siempre por alergia a penicilinas antes de la primera dosis — antecedente de anafilaxia contraindica absolutamente su uso.',
      'Reconstituir y diluir según ficha técnica; infundir en 15-30 min, nunca en bolo rápido a dosis altas.',
      'Tener adrenalina y equipo de reanimación disponibles al administrar la primera dosis, especialmente en pacientes sin exposición previa documentada.',
      'Vigilar signos neurológicos (confusión, mioclonías) en dosis muy altas o en insuficiencia renal.',
      'En tratamiento de sífilis: informar al paciente sobre la posible reacción de Jarisch-Herxheimer (fiebre, escalofríos en las primeras horas) para que no la confunda con alergia.',
      'Vigilar diarrea persistente en tratamientos prolongados.',
      'Controlar ionograma en tratamientos con dosis muy altas y repetidas.',
      'Documentar dosis, hora y tolerancia en cada administración.',
    ],

    efectosAdversos: [
      '🔴 Reacción anafiláctica (la más documentada históricamente entre los antibióticos)',
      '🔴 Convulsiones (dosis muy altas, infusión rápida, insuficiencia renal)',
      '🟠 Reacción de Jarisch-Herxheimer (en el tratamiento de la sífilis, esperada y autolimitada)',
      '🟠 Nefritis intersticial (rara)',
      '🟡 Diarrea / colitis por C. difficile',
      '🟡 Flebitis en el punto de infusión',
      '🟡 Hiperpotasemia o hipernatremia con dosis altas repetidas (según la sal)',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a penicilinas (contraindicación absoluta).',
      'Precaución extrema en insuficiencia renal grave sin ajuste de dosis.',
      'Precaución en insuficiencia cardíaca por el contenido de sodio en dosis altas.',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar el vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Diluida en SF/SG 5%':   '<b>24 h a temperatura ambiente</b>',
      'Aspecto':                 'Solución incolora — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras reconstituir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente.',
      notas:             'Incompatible con aminoglucósidos en la misma vía. Vigilar contenido de sodio/potasio en dosis altas repetidas.',
    },

    presentaciones: [
      'Penicilina G Sódica 1.000.000 UI — vial polvo liofilizado',
      'Penicilina G Sódica 5.000.000 UI — vial polvo liofilizado',
      'Penicilina G Sódica/Potásica — según fabricante y país',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Meningitis meningocócica/neumocócica', dosis: '<b>3-4 millones UI IV c/4 h (hasta 24 millones UI/día)</b>', via: 'IV' },
      { indicacion: 'Endocarditis por estreptococo sensible', dosis: '2-4 millones UI IV c/4-6 h × 4 semanas',              via: 'IV' },
      { indicacion: 'Neurosífilis',                            dosis: '3-4 millones UI IV c/4 h × 10-14 días',                 via: 'IV' },
      { indicacion: 'Gangrena gaseosa (Clostridium)',         dosis: '2-4 millones UI IV c/4-6 h + clindamicina',           via: 'IV' },
      { indicacion: 'Infección moderada',                      dosis: '1-2 millones UI IV c/4-6 h',                           via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Es el fármaco de elección para tratar la sífilis en el embarazo — NO existe alternativa equivalente segura y eficaz para prevenir la sífilis congénita; en gestante alérgica se recomienda desensibilización antes que usar un fármaco alternativo.',

    pediatria: 'Meningitis: 250.000-400.000 UI/kg/día IV en 4-6 dosis (máx 24 millones UI/día). Sífilis congénita: 50.000 UI/kg IV c/8-12 h según edad. Faringoamigdalitis grave: 100.000-250.000 UI/kg/día. Ajustar estrictamente por peso y edad gestacional en neonatos.',

    adultoMayor: 'Mayor riesgo de acumulación por reducción fisiológica de la función renal — ajustar la dosis según ClCr. Vigilar más estrechamente el ionograma y signos neurológicos de toxicidad.',

    insufRenal: '<b>Ajuste obligatorio según ClCr</b>: ClCr 10-50 mL/min: intervalo cada 6-8 h. ClCr <10 mL/min: intervalo cada 8-12 h, con dosis reducida. La acumulación en IR grave aumenta el riesgo de convulsiones.',

    insufHepatica: 'Sin ajuste específico necesario — eliminación fundamentalmente renal, no hepática.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS / OMS. Ficha Técnica y Lista de Medicamentos Esenciales — Penicilina G Sódica (Bencilpenicilina).',
      'Workowski KA et al. CDC Sexually Transmitted Infections Treatment Guidelines. MMWR. 2021.',
      'Tunkel AR et al. Practice Guidelines for the Management of Bacterial Meningitis. IDSA. Clin Infect Dis. 2004.',
      'Baddour LM et al. Infective Endocarditis in Adults: Diagnosis, Antimicrobial Therapy. AHA Scientific Statement. Circulation. 2015.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
