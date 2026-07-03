/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/warfarina.js
   Fuentes: CIMA AEMPS (Sintrom, Aldocumar), FDA DailyMed,
   ACCP Antithrombotic Guidelines 2012, ESC 2021,
   AHA/ACC 2019, Guía ISMP España
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'warfarina',
  nombre:         'Warfarina (Acenocumarol)',
  nombreGenerico: 'Warfarin Sodium / Acenocoumarol',
  categoria:      'anticoagulantes',
  tags:           ['anticoagulante', 'FA', 'TEP', 'TVP', 'válvula mecánica', 'INR', 'controlado', 'alto riesgo'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Anticoagulante oral con índice terapéutico estrecho. Riesgo de sangrado grave (intracraneal, GI). Requiere monitorización estricta del INR. Múltiples interacciones farmacológicas y alimentarias. Antídoto: vitamina K + plasma fresco congelado.',

  nivel1: {

    puntosClave: [
      '<b>Monitorización del INR obligatoria</b> — sin INR no se ajusta la dosis, nunca.',
      'Inicio de acción lento (2-5 días) — siempre solapar con heparina en anticoagulación aguda.',
      '<b>Múltiples interacciones críticas</b>: antibióticos, AINEs, omeprazol, amiodarona, paracetamol altas dosis, vitamina K en dieta.',
      'Antídoto en sangrado grave: <b>Vitamina K 5-10 mg IV + Plasma Fresco Congelado o Concentrado de Complejo Protrombínico (CCP)</b>.',
      '<b>Administrar siempre a la misma hora del día</b> — preferiblemente tarde para poder ajustar dosis según INR del día.',
    ],

    resumenRapido: 'Anticoagulante oral antagonista de la vitamina K (AVK). Inhibe la carboxilación hepática de los factores de coagulación dependientes de vitamina K (II, VII, IX, X) y proteínas C y S. Efecto anticoagulante indirecto — necesita que los factores existentes se degraden (2-5 días). Indicado en: fibrilación auricular (FA) con riesgo embólico, tromboembolismo venoso (TVP/TEP), válvulas cardíacas mecánicas, síndrome antifosfolípido. En España se usa más el acenocumarol (Sintrom®) que la warfarina.',

    objetivoTerapeutico: 'INR en rango terapéutico · FA/TEV: INR 2-3 · Válvulas mecánicas: INR 2.5-3.5 · Síndrome antifosfolípido: INR 2-3',

    preparacion: {
      'Presentación':           '<b>Acenocumarol (Sintrom®) 1 mg, 4 mg comprimidos</b> (más usado en España)',
      'Presentación alt.':      'Warfarina 5 mg comprimidos (más usada en LATAM/EE.UU.)',
      'Vía':                    '<b>EXCLUSIVAMENTE ORAL</b> — no existe formulación IV de warfarina/acenocumarol',
      '⏱️ ADMINISTRACIÓN':      '<b>Una vez al día — SIEMPRE a la misma hora</b> (preferiblemente tarde: 18-20h)',
      '⏱️ DOSIS INICIO':        '<b>2-5 mg/día VO (acenocumarol: 1-4 mg/día)</b> — individualizar según INR',
      '⏱️ INICIO CON HEPARINA': '<b>Solapar con heparina/HBPM hasta INR ≥ 2 por 2 días consecutivos</b>',
      '⏱️ CONTROL INR':         'Diario al inicio → semanal cuando estable → mensual cuando muy estable',
      'Objetivo INR FA/TEV':    '<b>2.0-3.0</b>',
      'Objetivo INR válvula mecánica':'<b>2.5-3.5</b>',
      'Almacenamiento':         'Temperatura ambiente (15-25°C) en blíster original — proteger de humedad',
      '⚠️ DIETA':               '<b>Evitar cambios bruscos en consumo de vitamina K (verduras de hoja verde)</b>',
    },

    vigilancia: {
      antes: [
        'Verificar INR basal antes de iniciar.',
        'Revisar medicación concomitante — múltiples interacciones críticas.',
        'Antecedentes de sangrado: GI, intracraneal, urológico.',
        'Función hepática y renal basales (afectan metabolismo).',
        'Confirmar indicación y objetivo de INR según diagnóstico.',
        'Investigar consumo habitual de alimentos con vitamina K (verduras, suplementos).',
        'En mujeres en edad fértil: descartar embarazo (teratógeno).',
      ],
      durante: [
        'Administrar VO con o sin alimentos — pero siempre en las mismas condiciones.',
        'Asegurar que el paciente no ha omitido dosis (INR puede variar).',
        'Recordar tomar la dosis a la misma hora cada día.',
        'En hospitalizados: documentar cada dosis administrada o no administrada.',
      ],
      despues: [
        '<b>Monitorizar INR según frecuencia indicada</b>: diario al inicio, semanal cuando estable.',
        'Ajustar dosis según INR — pequeños cambios (10-25% de la dosis semanal).',
        'Vigilar signos de sangrado: hematomas, encías, orina roja, heces negras, cefalea intensa.',
        'Vigilar signos de trombosis (si INR subterapéutico): dolor, edema, disnea.',
        'Educar al paciente sobre dieta consistente en vitamina K.',
        'Educar sobre interacciones: evitar AINEs, comunicar cualquier nuevo medicamento.',
        'Tarjeta de anticoagulado — llevar siempre consigo.',
        'En cirugía programada: comunicar a cirujano, planificar suspensión y puente.',
      ],
      suspender: [
        'Sangrado mayor activo (GI, intracraneal, urológico significativo).',
        'INR > 5 sin sangrado: suspender temporalmente + vitamina K oral según protocolo.',
        'INR > 9 sin sangrado: vitamina K 2.5-5 mg oral + control INR 24h.',
        'INR > 9 con sangrado: vitamina K 5-10 mg IV + CCP o PFC urgente.',
        'Cirugía mayor programada: suspender 5 días antes (objetivo INR < 1.5).',
        'Embarazo confirmado (especialmente 1er trimestre).',
        'Prescripción médica de cambio a NOAC o suspensión.',
      ],
    },

    incompatibilidades: [
      '<b>Antibióticos (especialmente amoxicilina, ciprofloxacino, metronidazol, fluconazol)</b> — ↑↑↑ INR por alteración flora intestinal y metabolismo.',
      '<b>Amiodarona</b> — ↑↑↑ INR (inhibición CYP2C9). Control muy frecuente al iniciar.',
      '<b>AINEs (ibuprofeno, diclofenaco, naproxeno)</b> — ↑ riesgo sangrado GI + ↑ INR.',
      '<b>Paracetamol > 2 g/día</b> — ↑ INR (efecto sinérgico). Usar mínima dosis posible.',
      'Clopidogrel + warfarina — triple terapia, riesgo sangrado muy alto.',
      '<b>Vitamina K (dieta: espinacas, brócoli, coles, aguacate)</b> — ↓ INR.',
      'Omeprazol/esomeprazol — ↑ INR moderado (inhibición CYP2C19).',
      'Alcohol — efecto variable: agudo ↑ INR, crónico ↓ INR.',
    ],

    alertasSeguridad: [
      '🔴 SANGRADO INTRACRANEAL — evento más grave. Cefalea súbita intensa = urgencia.',
      '🔴 TERATÓGENO — embriopatía warfarínica (1er trimestre), hemorragia fetal, síndrome fetal.',
      '🔴 INR supraterapéutico > 5 — riesgo alto de sangrado mayor.',
      '🟠 Múltiples interacciones farmacológicas y alimentarias.',
      '🟠 Inicio de acción lento — sin puente con heparina hay riesgo de trombosis.',
      '🟠 Necrosis cutánea (warfarina) — primeras semanas, por descenso rápido de proteína C.',
      '🟡 Adherencia crítica — una dosis olvidada o doble dosis puede descompensar el INR.',
      '🟡 Antídoto disponible: vitamina K IV + CCP/PFC en urgencia.',
    ],
  },

  modulos: {

    inr: `
      <b>Manejo del INR fuera de rango:</b><br/>
      <b>INR 3-5 (sin sangrado):</b><br/>
      • Reducir dosis 10-20% de la dosis semanal total.<br/>
      • Controlar INR en 3-5 días.<br/><br/>
      <b>INR 5-9 (sin sangrado):</b><br/>
      • Omitir 1-2 dosis.<br/>
      • Vitamina K 1-2.5 mg VO (acelera el descenso).<br/>
      • Controlar INR en 24-48h.<br/><br/>
      <b>INR > 9 (sin sangrado):</b><br/>
      • Omitir dosis.<br/>
      • <b>Vitamina K 2.5-5 mg VO</b>.<br/>
      • Controlar INR en 24h.<br/><br/>
      <b>INR > 5 CON SANGRADO MAYOR / URGENTE:</b><br/>
      1. Suspender warfarina.<br/>
      2. <b>Vitamina K 5-10 mg IV lento (20-30 min)</b>.<br/>
      3. <b>CCP (Concentrado Complejo Protrombínico) o PFC</b> según disponibilidad.<br/>
      4. Soporte hemodinámico.<br/>
      5. TC craneal urgente si sospecha sangrado intracraneal.<br/><br/>
      <b>Nota:</b> Vitamina K IV actúa en 6-12h. CCP actúa en 15-30 min (más rápido).
    `,

    cirugia: `
      <b>Manejo perioperatorio de la Warfarina/Acenocumarol:</b><br/>
      <b>CIRUGÍA MAYOR (objetivo INR < 1.5 pre-op):</b><br/>
      • Suspender warfarina 5 días antes · Acenocumarol 3-4 días antes.<br/>
      • Controlar INR el día previo a la cirugía.<br/><br/>
      <b>PUENTE CON HEPARINA (bridging therapy):</b><br/>
      • Solo en pacientes de ALTO RIESGO tromboembólico:<br/>
      – Válvula mecánica mitral.<br/>
      – FA con ACV/AIT previo < 3 meses.<br/>
      – TEV reciente < 3 meses.<br/>
      • <b>NO indicado de rutina</b> (estudio BRIDGE): ↑ sangrado sin beneficio en FA de bajo-moderado riesgo.<br/>
      • Heparina o HBPM a dosis anticoagulante: iniciar cuando INR < 2, suspender 12-24h pre-op.<br/><br/>
      <b>REINICIO POST-CIRUGÍA:</b><br/>
      • 12-24h post-hemostasia adecuada (cirugía menor).<br/>
      • 48-72h post-hemostasia (cirugía mayor).<br/>
      • Solapar con HBPM hasta INR ≥ 2.
    `,

    interacciones: `
      <b>Interacciones críticas de la Warfarina/Acenocumarol:</b><br/>
      <b>AUMENTAN el INR (↑ riesgo sangrado):</b><br/>
      • <b>Amiodarona</b>: ↑↑↑ INR (CYP2C9). Control INR 2 veces/semana al iniciar/cambiar dosis.<br/>
      • <b>Metronidazol, fluconazol, voriconazol</b>: ↑↑ INR.<br/>
      • <b>Claritromicina, ciprofloxacino</b>: ↑ INR.<br/>
      • <b>Paracetamol > 2 g/día</b>: ↑ INR significativo. Usar mínima dosis.<br/>
      • <b>AINEs</b>: ↑ riesgo sangrado GI (antiagregante plaquetario + INR).<br/>
      • <b>Omeprazol</b>: ↑ INR moderado.<br/>
      • <b>Alcohol agudo</b>: ↑ INR.<br/><br/>
      <b>DISMINUYEN el INR (↑ riesgo trombosis):</b><br/>
      • <b>Rifampicina</b>: ↓↓↓ INR (potente inductor CYP).<br/>
      • <b>Vitamina K (dieta)</b>: verduras de hoja verde. Dieta CONSISTENTE, no eliminar.<br/>
      • <b>Carbamazepina, fenitoína</b>: ↓ INR.<br/>
      • <b>Alcohol crónico</b>: ↓ INR.<br/><br/>
      <b>CONSEJO AL PACIENTE:</b><br/>
      • Cualquier nuevo medicamento (incluido herbolario): comunicar al médico.<br/>
      • Dieta consistente en verduras — no eliminar, no aumentar bruscamente.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar INR reciente antes de administrar la dosis — documentar valor.',
      'Administrar a la misma hora cada día (tarde preferiblemente).',
      'Con o sin alimentos, pero siempre en las mismas condiciones.',
      'Registrar cada dosis en la gráfica — anotar si se omitió y motivo.',
      'Educar al paciente sobre signos de sangrado: hematomas inexplicables, sangrado encías, orina rojiza, heces negras, cefalea intensa súbita.',
      'Educar sobre dieta consistente en vitamina K — no eliminar, no aumentar bruscamente.',
      'Educar sobre comunicar cualquier nuevo medicamento al médico o enfermería.',
      'Tarjeta de anticoagulación — el paciente debe llevarla siempre.',
      'En cirugía programada: planificar suspensión y puente con el médico.',
      'En hospitalizados: vigilar hematomas, diuresis, hemograma.',
      'En sangrado activo: administrar vitamina K según protocolo y avisar médico urgente.',
      'Documentar: dosis, INR del día, hora, incidencias.',
    ],

    efectosAdversos: [
      '🔴 Hemorragia intracraneal',
      '🔴 Hemorragia GI mayor (melena, hematemesis)',
      '🔴 Hemorragia urológica mayor (hematuria macroscópica)',
      '🔴 Embriopatía warfarínica (1er trimestre)',
      '🟠 Sangrado menor: hematomas, epistaxis, encías',
      '🟠 Necrosis cutánea por warfarina (primeras semanas)',
      '🟠 Síndrome del dedo púrpura (microémbolos de colesterol)',
      '🟡 Alopecia (uso prolongado)',
      '🟡 Osteoporosis (uso prolongado, inhibe carboxilación osteocalcina)',
      '🟡 Hepatotoxicidad (rara)',
    ],

    contraindicaciones: [
      '<b>Embarazo (especialmente 1er trimestre y periparto)</b> — embriopatía, hemorragia fetal.',
      'Sangrado activo mayor no controlado.',
      'Cirugía reciente del SNC, ocular o traumatología mayor.',
      'Hipersensibilidad a warfarina o acenocumarol.',
      'Hipertensión severa no controlada (PAS > 200 mmHg).',
      'Pericarditis aguda, endocarditis bacteriana activa.',
      'Diátesis hemorrágica severa.',
      'Incapacidad de monitorización del INR.',
    ],

    fotosensibilidad: 'No relevante. Los comprimidos son fotosensibles levemente — conservar en blíster original a temperatura ambiente.',

    estabilidad: {
      'Blíster sin abrir':    'Temperatura ambiente (15-25°C) hasta vencimiento (3-5 años)',
      'Comprimido':           'Sacar del blíster justo antes de administrar — proteger de humedad',
      'Conservación':         'Lugar seco, temperatura ambiente, fuera del alcance de niños',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Comprimido: retirar del blíster justo antes de administrar.',
      dosisRestante:    'Conservar en blíster original. No dejar comprimidos sueltos.',
      infusionPreparada:'No aplica — administración oral exclusivamente.',
      notas:            'Conservar a temperatura ambiente en lugar seco. Proteger de la humedad y la luz directa.',
    },

    presentaciones: [
      'Sintrom® 1 mg comprimidos (acenocumarol) — Novartis',
      'Sintrom® 4 mg comprimidos (acenocumarol) — Novartis',
      'Aldocumar® 1 mg, 3 mg, 5 mg, 10 mg comprimidos (warfarina) — Almirall',
      'Warfarina 1 mg, 2 mg, 2.5 mg, 5 mg, 7.5 mg, 10 mg comprimidos (genérico, LATAM)',
      'Coumadin® 1-10 mg comprimidos (warfarina - BMS, EE.UU.)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Inicio FA / TEV (adulto)',          dosis: '<b>Acenocumarol: 1-3 mg/día VO · Warfarina: 2-5 mg/día</b> (titular por INR)', via: 'VO' },
      { indicacion: 'Mantenimiento FA/TEV',              dosis: 'Individualizar según INR 2-3 (varía: 1-10 mg/día)',                             via: 'VO' },
      { indicacion: 'Válvula mecánica mitral',           dosis: 'Titular para INR <b>2.5-3.5</b>',                                               via: 'VO' },
      { indicacion: 'Válvula mecánica aórtica (baja)',   dosis: 'Titular para INR <b>2.0-3.0</b>',                                               via: 'VO' },
      { indicacion: 'Síndrome antifosfolípido',          dosis: 'Titular para INR 2-3 (o 3-4 en recurrencia)',                                   via: 'VO' },
      { indicacion: 'Antídoto INR > 5 con sangrado',    dosis: '<b>Vitamina K 5-10 mg IV + CCP o PFC</b>',                                       via: 'IV' },
    ],

    embarazo: '<b>CONTRAINDICADO — especialmente 1er trimestre (semanas 6-12)</b>. Causa embriopatía warfarínica (hipoplasia nasal, condrodisplasia punctata, retraso mental). 3er trimestre: hemorragia fetal e intracraneal. Si anticoagulación necesaria en embarazo: usar heparina o HBPM (no cruzan placenta). Contraindicado en lactancia.',

    pediatria: 'Uso posible en pediatría bajo supervisión. Dosis inicial: 0.1-0.2 mg/kg/día VO (máximo 10 mg). Titular según INR. Muy variable entre pacientes pediátricos. Monitorización INR frecuente.',

    adultoMayor: 'Mayor sensibilidad a warfarina. Iniciar con dosis bajas (warfarina 2 mg, acenocumarol 1 mg). Mayor riesgo de sangrado. Monitorización más frecuente. Caídas = riesgo de hemorragia intracraneal. Evaluar beneficio/riesgo individualmente (CHA₂DS₂-VASc vs HAS-BLED).',

    insufRenal: 'Con CrCl < 30: precaución, puede acumular metabolitos. En diálisis: mayor riesgo de sangrado y trombosis. Monitorización INR más frecuente. Considerar NOAC en IRC moderada-severa (excepto válvulas mecánicas).',

    insufHepatica: 'En cirrosis: metabolismo reducido, INR basal elevado (falsa sensación de anticoagulación). Difícil monitorización. En insuficiencia hepática severa: contraindicado. Considerar alternativas.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Sintrom® 1 mg y 4 mg. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Aldocumar® (warfarina). AEMPS.',
      'FDA DailyMed. Warfarin Sodium Tablets. U.S. National Library of Medicine.',
      'Kearon C, et al. Antithrombotic Therapy for VTE Disease. ACCP Chest Guidelines. 2016.',
      'ESC Guidelines. Atrial Fibrillation. European Heart Journal. 2021.',
      'AHA/ACC Guidelines. Valvular Heart Disease. Circulation. 2021.',
      'Douketis JD, et al. Perioperative Management of Antithrombotic Therapy (BRIDGE Trial). NEJM. 2015.',
      'Agencia Española de Medicamentos. Guía de uso de anticoagulantes orales (AVK). AEMPS. 2020.',
    ],
  },

});
