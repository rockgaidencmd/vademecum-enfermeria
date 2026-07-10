/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/ertapenem.js
   Fuentes: CIMA AEMPS (Invanz), FDA DailyMed,
   SEIMC Guía Antibióticos 2023, IDSA Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'ertapenem',
  nombre:         'Ertapenem',
  nombreComercial: 'Invanz®',
  nombreGenerico: 'Ertapenem Sodium',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'carbapenem', 'dosis única diaria', 'BLEE', 'intraabdominal', 'sin Pseudomonas', 'ambulatorio'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Carbapenem de dosis única diaria</b> (1 g IV c/24 h) — vida media larga que permite pautas ambulatorias y facilita el alta con tratamiento IV domiciliario.',
      '<b>NO cubre Pseudomonas aeruginosa ni Acinetobacter</b> — a diferencia de meropenem/imipenem, tiene espectro más limitado a gram negativos entéricos.',
      'Excelente cobertura de <b>BLEE y anaerobios</b> — muy usado en infecciones intraabdominales y pélvicas.',
      '<b>Menor riesgo convulsivo</b> que imipenem — perfil de seguridad neurológico más favorable.',
      '<b>Infundir en 30 min</b> diluido en SF 0.9% (incompatible con soluciones que contengan glucosa/dextrosa).',
    ],

    resumenRapido: 'Carbapenem de espectro dirigido, activo frente a gram positivos, gram negativos entéricos (incluidos productores de BLEE) y anaerobios, pero SIN actividad clínicamente útil frente a Pseudomonas aeruginosa, Acinetobacter ni Enterococcus. Su vida media prolongada permite la administración en dosis única diaria, lo que lo convierte en el carbapenem de elección para completar tratamientos en régimen ambulatorio (hospitalización domiciliaria) tras el ingreso inicial. Especialmente útil en infecciones intraabdominales, pélvicas, de piel/partes blandas y urinarias complicadas por multirresistentes que no requieren cobertura antipseudomónica.',

    objetivoTerapeutico: 'Tratamiento de infecciones intraabdominales y pélvicas complicadas · Infecciones urinarias complicadas por BLEE · Infecciones de piel y partes blandas graves · Profilaxis quirúrgica en cirugía colorrectal · Continuación de tratamiento IV en programas de hospitalización domiciliaria',

    preparacion: {
      'Presentación':          '<b>Invanz® 1 g — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con 10 mL de agua para inyección o SF 0.9% según ficha técnica',
      'Diluyente':             '<b>SOLO SF 0.9% — incompatible con soluciones glucosadas</b>',
      'Dilución final':        'Diluir en 50 mL SF 0.9%',
      'Dosis estándar adulto': '<b>1 g IV c/24 h</b>',
      '⏱️ Tiempo de infusión':  '<b>30 min</b>',
      'Vía':                   'IV intermitente · IM (uso ambulatorio, con lidocaína como diluyente según ficha técnica)',
      'Uso ambulatorio':       'La dosis única diaria facilita el tratamiento en hospitalización domiciliaria',
      '🧊 Estabilidad':         '<b>6 h a temperatura ambiente / 24 h refrigerado (2-8°C) tras diluir en SF</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar que no se sospecha Pseudomonas ni Acinetobacter (sin cobertura eficaz) ni Enterococcus.',
        'Función renal basal — ajuste de dosis en insuficiencia renal grave.',
        'Alergia a betalactámicos/carbapenems.',
        'Si se prevé uso IM: descartar alergia a anestésicos locales (contiene lidocaína en esa formulación).',
      ],
      durante: [
        'Infundir en 30 min diluido en SF 0.9% — nunca en soluciones glucosadas.',
        'Vigilar reacción alérgica: rash, prurito, disnea.',
        'Constantes según protocolo de infección grave si aplica.',
      ],
      despues: [
        'Vigilar diarrea — descartar C. difficile en tratamientos prolongados.',
        'Función renal periódica si el tratamiento se prolonga.',
        'Reevaluar respuesta clínica a las 48-72 h.',
        'Si continúa en domicilio: educar al paciente/familia sobre signos de alarma y manejo de la vía IV.',
      ],
      suspender: [
        'Reacción alérgica grave/anafilaxia.',
        'Diarrea grave con sospecha de C. difficile.',
        'Ausencia de respuesta clínica — reevaluar cobertura (recordar que no cubre Pseudomonas/Acinetobacter).',
        'Al completar la pauta indicada.',
      ],
    },

    incompatibilidades: [
      '<b>Incompatible con soluciones que contienen glucosa/dextrosa</b> — usar SOLO SF 0.9% para diluir.',
      'No mezclar con otros antibióticos en la misma solución.',
      'No mezclar con aminoglucósidos en la misma vía.',
      'Lavar la vía con SF antes y después si se comparte el acceso.',
    ],

    alertasSeguridad: [
      '🟠 NO CUBRE Pseudomonas, Acinetobacter ni Enterococcus — verificar el espectro antes de usar como monoterapia empírica en paciente crítico.',
      '🟠 SOLO diluir en SF 0.9% — incompatible con SG 5% y otras soluciones glucosadas.',
      '🟡 Menor riesgo convulsivo que imipenem, pero mantener precaución en patología del SNC.',
      '🟡 Diarrea/colitis por C. difficile con tratamientos prolongados.',
      '🟡 Ajuste de dosis en insuficiencia renal grave.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar con el equipo médico que el espectro es adecuado (sin sospecha de Pseudomonas/Acinetobacter/Enterococcus).',
      'Diluir SIEMPRE en SF 0.9% — nunca en soluciones con glucosa.',
      'Infundir en 30 min; vigilar reacción alérgica durante la administración.',
      'Si es tratamiento ambulatorio (hospitalización domiciliaria): educar al paciente sobre el cuidado de la vía y signos de alarma.',
      'Vigilar diarrea persistente en tratamientos de varios días.',
      'Función renal periódica si el tratamiento se prolonga.',
      'Documentar dosis, hora y tolerancia en cada administración.',
    ],

    efectosAdversos: [
      '🟠 Reacción alérgica (rash, urticaria; anafilaxia rara)',
      '🟠 Diarrea / colitis por C. difficile',
      '🟡 Náuseas, vómitos',
      '🟡 Flebitis en el punto de infusión',
      '🟡 Cefalea',
      '🟡 Convulsiones (menos frecuente que con imipenem, pero posible)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a carbapenems.',
      'Antecedente de reacción anafiláctica grave a betalactámicos (valorar riesgo/beneficio).',
      'Sospecha o confirmación de infección por Pseudomonas, Acinetobacter o Enterococcus sin cobertura adicional.',
      'Alergia a anestésicos locales tipo amida si se usa la vía IM (contiene lidocaína).',
    ],

    fotosensibilidad: 'No relevante. Conservar el vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Diluido en SF 0.9%':    '<b>6 h a temperatura ambiente / 24 h refrigerado (2-8°C)</b>',
      'NO usar SG 5%':          'Incompatibilidad química — solo SF 0.9%',
      'Aspecto':                 'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro del tiempo indicado tras reconstituir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: '6 h a temperatura ambiente o 24 h refrigerado en SF 0.9%.',
      notas:             'SOLO SF 0.9% — nunca soluciones glucosadas. Dosis única diaria facilita el tratamiento ambulatorio/domiciliario.',
    },

    presentaciones: [
      'Invanz® 1 g — vial polvo liofilizado IV/IM',
      'Ertapenem genérico — varios fabricantes',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Infección intraabdominal/pélvica/piel',  dosis: '<b>1 g IV c/24 h</b>',                     via: 'IV' },
      { indicacion: 'ITU complicada por BLEE',                  dosis: '1 g IV c/24 h',                            via: 'IV' },
      { indicacion: 'Profilaxis quirúrgica colorrectal',        dosis: '1 g IV dosis única, 1 h antes de incisión', via: 'IV' },
      { indicacion: 'IR (ClCr ≤30)',                             dosis: '500 mg IV c/24 h',                         via: 'IV' },
      { indicacion: 'Hemodiálisis',                              dosis: '500 mg IV c/24 h + dosis suplementaria tras la sesión si se administra <6h antes', via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Datos disponibles sin evidencia de teratogenicidad significativa. Usar cuando esté claramente indicado, con la misma cautela que otros betalactámicos en el embarazo.',

    pediatria: '3 meses-12 años: 15 mg/kg IV c/12 h (máx 1 g/día). ≥13 años: dosis de adulto (1 g IV c/24 h). Uso en infecciones intraabdominales y de piel/partes blandas pediátricas cuando está indicado.',

    adultoMayor: 'Ajustar la dosis según función renal (ClCr real). Sin toxicidad específica añadida por la edad más allá del ajuste renal habitual. Ventaja de la dosis única diaria para facilitar la administración en residencias/domicilio.',

    insufRenal: '<b>Ajuste según ClCr</b>: ClCr >30 mL/min: sin ajuste (1 g/día). ClCr ≤30 mL/min (incluida hemodiálisis): 500 mg IV c/24 h. En hemodiálisis, si la dosis se administra dentro de las 6 h previas a la sesión, dar 150 mg adicionales tras la diálisis.',

    insufHepatica: 'Sin ajuste específico necesario — eliminación fundamentalmente renal, no hepática.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Invanz® (ertapenem).',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Solomkin JS et al. Diagnosis and Management of Complicated Intra-abdominal Infection. IDSA/SIS Guidelines. Clin Infect Dis. 2010.',
      'Gilbert DN et al. The Sanford Guide to Antimicrobial Therapy. 2023.',
      'Zhanel GG et al. Ertapenem: review of a new carbapenem. Expert Rev Anti Infect Ther. 2005.',
    ],
  },

});
