/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/ampicilina.js
   Fuentes: CIMA AEMPS, FDA DailyMed, IDSA Guidelines
   (Listeria, endocarditis por enterococo), Cuadro Básico
   IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'ampicilina',
  nombre:         'Ampicilina',
  nombreGenerico: 'Ampicillin Sodium',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'penicilina', 'Listeria', 'enterococo', 'meningitis neonatal', 'cuadro básico', 'clásico'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Aminopenicilina clásica del cuadro básico</b> — pilar en meningitis neonatal, listeriosis y endocarditis por enterococo sensible.',
      'Dosis moderada: <b>1-2 g IV c/6 h</b>; dosis altas (meningitis/endocarditis): <b>2 g IV c/4 h</b>.',
      '<b>Cobertura de Listeria monocytogenes</b> — ningún otro antibiótico de uso común la sustituye; esencial en meningitis neonatal y del anciano/inmunodeprimido.',
      'Frecuente asociación con <b>gentamicina</b> para sinergismo en endocarditis por enterococo.',
      '<b>Erupción cutánea no alérgica</b> muy frecuente si hay mononucleosis infecciosa concomitante — no confundir con alergia verdadera.',
    ],

    resumenRapido: 'Aminopenicilina de amplio espectro, ampliada respecto a la penicilina G para cubrir algunos gram negativos entéricos y con actividad característica frente a Listeria monocytogenes y Enterococcus faecalis sensible, gérmenes no cubiertos por las cefalosporinas. Es un antibiótico esencial en la meningitis neonatal (cobertura empírica obligada de Listeria en menores de 1 mes) y en la endocarditis por enterococo, donde se combina habitualmente con un aminoglucósido para lograr sinergismo bactericida. Su vulnerabilidad a las betalactamasas limita su uso frente a muchos gram negativos, por lo que en infecciones mixtas suele combinarse con sulbactam.',

    objetivoTerapeutico: 'Cobertura empírica de meningitis neonatal y del paciente inmunodeprimido/anciano (Listeria) · Tratamiento de la endocarditis por Enterococcus faecalis sensible (combinado con aminoglucósido) · Infecciones por Listeria monocytogenes en cualquier localización · Profilaxis del estreptococo del grupo B intraparto',

    preparacion: {
      'Presentación':          '<b>Ampicilina Sódica 500 mg, 1 g, 2 g — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con agua para inyección según ficha técnica',
      'Diluyente':             'SF 0.9% preferente (menor estabilidad en SG 5%)',
      'Dosis moderada':        '<b>1-2 g IV c/6 h</b>',
      'Dosis altas (meningitis/endocarditis)': '<b>2 g IV c/4 h</b> (hasta 12 g/día en adultos)',
      'Profilaxis estreptococo grupo B': '2 g IV carga → 1 g IV c/4 h hasta el parto',
      '⏱️ Tiempo de infusión':  'Bolo lento en 3-5 min o infusión en 15-30 min según dosis',
      'Vía':                   'IV intermitente · IM (dosis moderadas)',
      '🧊 Estabilidad':         '<b>Usar dentro de 1-4 h tras reconstituir/diluir — pierde potencia rápidamente en solución</b>',
    },

    vigilancia: {
      antes: [
        'Preguntar por alergia a penicilinas — reacción cruzada de clase.',
        'Función renal basal — ajuste de dosis en insuficiencia renal.',
        'Confirmar la indicación (sospecha de Listeria, endocarditis por enterococo) — no es de primera línea empírica amplia por su vulnerabilidad a betalactamasas.',
        'Descartar mononucleosis infecciosa si hay clínica compatible — mayor riesgo de exantema no alérgico.',
      ],
      durante: [
        'Administrar en el tiempo indicado según la dosis (bolo lento o infusión).',
        'Vigilar reacción alérgica: rash, urticaria, disnea.',
        'Si se combina con aminoglucósido (endocarditis): administrar por vías separadas — inactivación mutua si se mezclan.',
      ],
      despues: [
        'Vigilar diarrea — descartar C. difficile en tratamientos prolongados.',
        'Función renal periódica si el tratamiento se prolonga.',
        'En meningitis neonatal: reevaluar respuesta clínica y de laboratorio (LCR de control según protocolo).',
        'Documentar dosis, hora y respuesta clínica.',
      ],
      suspender: [
        'Reacción alérgica grave/anafilaxia.',
        'Diarrea grave con sospecha de C. difficile.',
        'Al completar la pauta indicada o al disponer de antibiograma para desescalar.',
      ],
    },

    incompatibilidades: [
      '<b>Incompatible con aminoglucósidos en la misma jeringa/vía</b> — inactivación mutua; administrar por separado.',
      '<b>Pierde potencia rápidamente en solución</b> — preparar cerca del momento de administración.',
      'Preferir SF 0.9% sobre SG 5% para la dilución (mayor estabilidad).',
      'No mezclar con productos sanguíneos.',
    ],

    alertasSeguridad: [
      '🟠 Reacción alérgica cruzada con penicilinas — anamnesis obligatoria.',
      '🟠 Exantema no alérgico frecuente en mononucleosis infecciosa — no confundir con alergia verdadera.',
      '🟡 Pierde potencia rápidamente en solución — usar la mezcla poco después de prepararla.',
      '🟡 Incompatible con aminoglucósidos en la misma vía — administrar siempre por separado si se combinan.',
      '🟡 Ajuste de dosis en insuficiencia renal.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Preguntar por alergia a penicilinas antes de la primera dosis.',
      'Reconstituir y diluir preferentemente en SF 0.9%; usar la solución poco después de prepararla (pierde potencia rápido).',
      'Si se combina con gentamicina u otro aminoglucósido: administrar SIEMPRE por vías separadas.',
      'Vigilar exantema — si aparece en contexto de mononucleosis, informar al médico (no es necesariamente alergia).',
      'Vigilar diarrea persistente en tratamientos prolongados.',
      'En meningitis neonatal: coordinar con el equipo la reevaluación de LCR según protocolo.',
      'Función renal periódica si el tratamiento se prolonga.',
      'Documentar dosis, hora y tolerancia en cada administración.',
    ],

    efectosAdversos: [
      '🟠 Reacción alérgica (rash, urticaria; anafilaxia rara)',
      '🟠 Exantema no alérgico (asociado a mononucleosis infecciosa)',
      '🟡 Diarrea / colitis por C. difficile',
      '🟡 Náuseas, vómitos',
      '🟡 Flebitis en el punto de infusión',
      '🟡 Nefritis intersticial (rara)',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a penicilinas.',
      'Precaución en mononucleosis infecciosa (mayor riesgo de exantema, no contraindicación absoluta).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar el vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Reconstituido/diluido':  '<b>Usar dentro de 1-4 h — pierde potencia rápidamente en solución</b>',
      'Preferir':                'SF 0.9% sobre SG 5% para mayor estabilidad',
      'Aspecto':                 'Solución incolora — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 1 h idealmente tras reconstituir (máximo 4 h según ficha técnica).',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: 'Administrar poco después de la dilución — no preparar con mucha antelación.',
      notas:             'Incompatible con aminoglucósidos en la misma vía. Preferir SF 0.9% para diluir.',
    },

    presentaciones: [
      'Ampicilina Sódica 500 mg — vial polvo liofilizado',
      'Ampicilina Sódica 1 g — vial polvo liofilizado',
      'Ampicilina Sódica 2 g — vial polvo liofilizado',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Meningitis neonatal (cobertura Listeria)', dosis: '<b>2 g IV c/4 h</b> (adulto); dosis pediátrica según peso/edad', via: 'IV' },
      { indicacion: 'Endocarditis por enterococo (+ gentamicina)', dosis: '2 g IV c/4 h × 4-6 semanas',                  via: 'IV' },
      { indicacion: 'Infección moderada',                          dosis: '1-2 g IV c/6 h',                                via: 'IV' },
      { indicacion: 'Profilaxis estreptococo grupo B (parto)',    dosis: '2 g IV carga → 1 g IV c/4 h hasta el parto',   via: 'IV' },
      { indicacion: 'IR (ClCr <30)',                                dosis: 'Ampliar el intervalo según ClCr',              via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Ampliamente usado en el embarazo, incluida la profilaxis intraparto del estreptococo del grupo B y el tratamiento de la listeriosis (relevante por el mayor riesgo de listeriosis grave en la gestante). Considerado seguro.',

    pediatria: 'Meningitis neonatal: 200-400 mg/kg/día IV en 4-6 dosis, ajustado por edad gestacional/postnatal. Sepsis neonatal: 100-200 mg/kg/día IV. Es el antibiótico de elección junto con un aminoglucósido en la sepsis/meningitis neonatal empírica por su cobertura de Listeria.',

    adultoMayor: 'Mayor riesgo de infección por Listeria (junto con neonatos e inmunodeprimidos) — indicación relevante de cobertura empírica en meningitis del anciano. Ajustar la dosis según función renal.',

    insufRenal: '<b>Ajuste según ClCr</b>: ClCr 10-50 mL/min: ampliar el intervalo a c/6-12 h. ClCr <10 mL/min: c/12-24 h. Hemodiálisis: dosis adicional tras la sesión.',

    insufHepatica: 'Sin ajuste específico necesario — eliminación fundamentalmente renal, no hepática.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Ampicilina Sódica.',
      'Tunkel AR et al. Practice Guidelines for the Management of Bacterial Meningitis. IDSA. Clin Infect Dis. 2004.',
      'Baddour LM et al. Infective Endocarditis in Adults: Diagnosis, Antimicrobial Therapy. AHA Scientific Statement. Circulation. 2015.',
      'CDC. Prevention of Perinatal Group B Streptococcal Disease. MMWR. 2010 (actualizado).',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
