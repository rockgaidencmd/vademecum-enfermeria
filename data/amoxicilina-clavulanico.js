/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/amoxicilina-clavulanico.js
   Fuentes: CIMA AEMPS (Augmentine IV), FDA DailyMed,
   SEIMC Guía Antibióticos 2023, IDSA Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'amoxicilina-clavulanico',
  nombre:         'Amoxicilina-Clavulánico',
  nombreComercial: 'Augmentine®',
  nombreGenerico: 'Amoxicillin/Clavulanic Acid',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'penicilina', 'inhibidor betalactamasa', 'respiratorio', 'ITU', 'piel y partes blandas', 'aspiración', 'empírico'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Amoxicilina + ácido clavulánico</b> (inhibidor de betalactamasas) — amplía el espectro frente a productores de betalactamasas.',
      'Uno de los antibióticos empíricos <b>más usados en infecciones respiratorias, urinarias y de piel/partes blandas</b> de gravedad leve-moderada.',
      'Cobertura de <b>aspiración/anaerobios orales</b> — útil en neumonía aspirativa y abscesos dentales/orofaríngeos.',
      '<b>Infundir en 30 min</b> (nunca en bolo rápido — riesgo de flebitis y convulsiones a dosis altas).',
      'Preguntar siempre por <b>alergia a penicilinas</b> antes de administrar — contraindicación absoluta si hay anafilaxia previa.',
    ],

    resumenRapido: 'Combinación de amoxicilina (aminopenicilina) con ácido clavulánico, un inhibidor irreversible de betalactamasas que protege a la amoxicilina de la inactivación enzimática, ampliando su espectro a cepas productoras de betalactamasas (H. influenzae, M. catarrhalis, algunas E. coli, S. aureus meticilín-sensible). Es uno de los antibióticos de amplio uso hospitalario para infecciones respiratorias, urinarias, de piel/partes blandas y aspirativas de gravedad leve-moderada, con buena cobertura de anaerobios orales.',

    objetivoTerapeutico: 'Tratamiento empírico de neumonía adquirida en la comunidad y exacerbación de EPOC · Infecciones urinarias complicadas · Infecciones de piel y partes blandas · Neumonía aspirativa y abscesos orofaríngeos/dentales · Profilaxis en algunos procedimientos',

    preparacion: {
      'Presentación':          '<b>Augmentine® IV 1000/200 mg (amoxicilina 1 g + clavulánico 200 mg) — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con agua para inyección según ficha técnica',
      'Diluyente':             '<b>SF 0.9%</b> (evitar soluciones con glucosa para la dilución final — menor estabilidad)',
      'Dilución final':        'Diluir en 50-100 mL SF 0.9%',
      'Dosis estándar':        '<b>1000/200 mg IV c/8 h</b> (infecciones moderadas-graves)',
      'Dosis alta':            '2000/200 mg IV c/8 h en infecciones graves (neumonía grave, sepsis)',
      '⏱️ Tiempo de infusión':  '<b>30 min — no administrar en bolo rápido</b>',
      'Vía':                   'IV intermitente',
      '🧊 Estabilidad':         '<b>Usar dentro de las 3-4 h tras reconstituir/diluir — degradación rápida en solución</b>',
    },

    vigilancia: {
      antes: [
        'Preguntar activamente por alergia a penicilinas — contraindicación absoluta si anafilaxia previa.',
        'Función renal basal si se prevé tratamiento prolongado.',
        'Función hepática basal — riesgo de hepatotoxicidad colestásica, más frecuente en ancianos y hombres.',
        'Confirmar la indicación y dosis según gravedad de la infección.',
      ],
      durante: [
        'Infundir en 30 min — la infusión rápida se asocia a flebitis y mayor riesgo de convulsiones a dosis altas.',
        'Vigilar reacción alérgica: rash, urticaria, disnea, angioedema.',
        'Observar la zona de punción — flebitis relativamente frecuente con esta combinación.',
      ],
      despues: [
        'Vigilar diarrea — el ácido clavulánico se asocia a mayor incidencia de diarrea que la amoxicilina sola.',
        'Función hepática si tratamiento prolongado (>10-14 días) o síntomas de colestasis (ictericia, prurito).',
        'Reevaluar respuesta clínica a las 48-72 h.',
        'Documentar dosis, tolerancia y respuesta clínica.',
      ],
      suspender: [
        'Reacción alérgica grave/anafilaxia.',
        'Ictericia colestásica o hepatotoxicidad significativa.',
        'Diarrea grave con sospecha de C. difficile.',
        'Al completar la pauta prescrita o al disponer de antibiograma para desescalar.',
      ],
    },

    incompatibilidades: [
      '<b>No diluir en soluciones glucosadas (SG 5%)</b> — inestabilidad química significativa, preferir SF 0.9%.',
      'No mezclar con aminoglucósidos en la misma jeringa o solución (inactivación mutua).',
      'Administrar poco después de reconstituir/diluir — degradación rápida en solución.',
      'No mezclar con sangre o productos hemáticos.',
    ],

    alertasSeguridad: [
      '🟠 REACCIÓN ALÉRGICA — anafilaxia posible; preguntar siempre por alergia a penicilinas antes de administrar.',
      '🟠 Hepatotoxicidad colestásica — más frecuente en ancianos, hombres y tratamientos prolongados.',
      '🟡 Diarrea más frecuente que con amoxicilina sola (por el ácido clavulánico).',
      '🟡 Preparar y administrar poco después de la dilución — estabilidad limitada en solución.',
      '🟡 Evitar diluir en SG 5% — usar SF 0.9%.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Preguntar siempre por alergia a penicilinas antes de la primera dosis.',
      'Diluir en SF 0.9% (no SG 5%) y administrar poco después de preparar (estabilidad limitada).',
      'Infundir en 30 min — no en bolo rápido.',
      'Vigilar signos de reacción alérgica durante y después de la administración.',
      'Vigilar la zona de punción por flebitis.',
      'Informar sobre diarrea frecuente y cuándo consultar (diarrea con sangre o muy intensa).',
      'Vigilar signos de colestasis (ictericia, coluria, prurito) en tratamientos prolongados.',
      'Documentar dosis, hora y tolerancia en cada turno.',
    ],

    efectosAdversos: [
      '🟠 Reacción alérgica (rash, urticaria; anafilaxia rara pero posible)',
      '🟠 Hepatotoxicidad colestásica (ictericia, elevación de enzimas hepáticas)',
      '🟡 Diarrea (más frecuente que con amoxicilina sola)',
      '🟡 Náuseas, vómitos',
      '🟡 Flebitis en el punto de infusión',
      '🟡 Erupción cutánea maculopapular',
    ],

    contraindicaciones: [
      'Hipersensibilidad a penicilinas (contraindicación absoluta si anafilaxia previa).',
      'Antecedente de ictericia colestásica o disfunción hepática asociada a amoxicilina-clavulánico.',
      'Mononucleosis infecciosa (mayor riesgo de exantema — evitar aminopenicilinas).',
    ],

    fotosensibilidad: 'No relevante. Conservar el vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Reconstituido/diluido en SF 0.9%': '<b>Usar dentro de 3-4 h — degradación rápida en solución</b>',
      'Evitar SG 5%':           'Menor estabilidad química — usar preferentemente SF 0.9%',
      'Aspecto':                 'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar poco después de reconstituir; no conservar el sobrante.',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: 'Administrar dentro de 3-4 h tras la dilución en SF 0.9%.',
      notas:             'Preferir SF 0.9% sobre SG 5% para la dilución. Preparar cerca del momento de administración.',
    },

    presentaciones: [
      'Augmentine® IV 1000/200 mg (amoxicilina/clavulánico) — vial polvo liofilizado',
      'Augmentine® IV 2000/200 mg — vial polvo liofilizado (dosis alta)',
      'Amoxicilina/Ácido Clavulánico Normon® — genérico IV',
      'Presentación oral (comprimidos/suspensión) para tratamiento ambulatorio',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Infección moderada (respiratoria/ITU/piel)', dosis: '<b>1000/200 mg IV c/8 h</b>',            via: 'IV' },
      { indicacion: 'Infección grave (neumonía grave, sepsis)',    dosis: '2000/200 mg IV c/8 h',                    via: 'IV' },
      { indicacion: 'Neumonía aspirativa / absceso orofaríngeo',   dosis: '1000-2000/200 mg IV c/8 h',              via: 'IV' },
      { indicacion: 'IR (ClCr 10-30)',                              dosis: '1000/200 mg IV c/12 h',                   via: 'IV' },
      { indicacion: 'IR grave (ClCr <10)',                          dosis: '1000/200 mg IV c/24 h',                   via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Se considera generalmente seguro en el embarazo cuando está indicado. Ampliamente usado sin evidencia de teratogenicidad significativa. Ajustar según indicación clínica.',

    pediatria: '>3 meses: 100 mg/kg/día (de amoxicilina) IV en 3-4 dosis (máx 4 g/día de amoxicilina). Muy usado en neumonía y otitis grave pediátrica. Vigilar diarrea y alergia como en el adulto.',

    adultoMayor: 'Mayor riesgo de hepatotoxicidad colestásica, especialmente en varones y tratamientos prolongados. Ajustar la dosis según función renal. Vigilar diarrea, potencialmente más grave (C. difficile) en este grupo.',

    insufRenal: '<b>Ajuste según ClCr</b>: ClCr 10-30 mL/min: 1000/200 mg c/12h. ClCr <10 mL/min: 1000/200 mg c/24h. Hemodiálisis: dosis adicional tras la sesión.',

    insufHepatica: 'Precaución — riesgo de hepatotoxicidad. Evitar en antecedente de ictericia colestásica por amoxicilina-clavulánico. Vigilar función hepática si se usa en hepatopatía preexistente.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Augmentine® IV (amoxicilina/ácido clavulánico).',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Metlay JP et al. Diagnosis and Treatment of Adults with Community-acquired Pneumonia. ATS/IDSA. 2019.',
      'Gilbert DN et al. The Sanford Guide to Antimicrobial Therapy. 2023.',
      'AEMPS. Amoxicilina-clavulánico y hepatotoxicidad: nota informativa de seguridad.',
    ],
  },

});
