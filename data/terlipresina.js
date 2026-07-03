/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/terlipresina.js
   Fuentes: CIMA AEMPS (Glypressin), FDA DailyMed,
   EASL Guidelines HRS 2023, AASLD Practice Guidance,
   Baveno VII Consensus 2022
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'terlipresina',
  nombre:         'Terlipresina',
  nombreComercial: 'Glypressin®',
  nombreGenerico: 'Terlipressin',
  categoria:      'vasopresores',
  tags:           ['hemorragia variceal', 'síndrome hepatorrenal', 'vasoconstrictor', 'hepatología', 'urgencias', 'cirrosis'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Vasoconstrictor esplácnico potente. Puede causar isquemia miocárdica, isquemia mesentérica, isquemia periférica e hiponatremia dilucional grave. Contraindicado en cardiopatía isquémica, vasculopatía periférica severa y embarazo. Monitorización cardiovascular continua obligatoria.',

  nivel1: {

    puntosClave: [
      '<b>Hemorragia variceal</b>: 2 mg IV en bolo c/4-6 h (o 1 mg c/4 h si <50 kg) hasta 5 días.',
      '<b>Síndrome hepatorrenal tipo 1</b>: 0.5-1 mg IV c/4-6 h + albúmina IV — hasta normalización de creatinina.',
      '<b>Monitorización cardíaca continua</b> durante toda la administración — riesgo de isquemia miocárdica.',
      'Vigilar isquemia periférica: cianosis, palidez, dolor en extremidades — reduce perfusión distal.',
      '<b>No diluir para bolo</b> — administrar directamente IV lento en 1-2 min. Para perfusión: diluir en SF.',
    ],

    resumenRapido: 'Análogo sintético de la vasopresina con acción vasoconstrictora preferentemente esplácnica. Reduce la presión portal y el flujo sanguíneo esplácnico al activar receptores V1 vasculares. Indicado en hemorragia por varices esofágicas/gástricas y síndrome hepatorrenal tipo 1 en contexto de cirrosis hepática descompensada. Se usa junto con tratamiento endoscópico en hemorragia variceal activa.',

    objetivoTerapeutico: 'Control de hemorragia variceal activa · Reducción de presión portal · Mejora de función renal en SHR tipo 1 · Prevención de resangrado a corto plazo',

    preparacion: {
      'Presentación':           '<b>Glypressin® 1 mg/8.5 mL o 2 mg/8.5 mL — vial liofilizado + disolvente</b>',
      'Reconstitución':         'Reconstituir con el disolvente incluido (8.5 mL) → 1 mg/8.5 mL o 2 mg/8.5 mL',
      'Bolo IV (hemorragia)':   '<b>2 mg IV directo lento en 1-2 min — sin dilución adicional</b>',
      'Frecuencia hemorragia':  '<b>c/4-6 h durante máximo 5 días</b> (reducir a 1 mg/4-6 h si <50 kg)',
      'SHR tipo 1':             '0.5-1 mg IV c/4-6 h — con albúmina 20-40 g/día IV',
      'Perfusión continua (alternativa)': '4-12 mg/24 h en 250 mL SF → calcular ml/h',
      'Vía':                    'IV periférica o central',
      '⏱️ Inicio efecto':        '15-20 min tras bolo IV',
      '⏱️ Duración bolo':        '4-6 horas (permite dosificación c/4-6 h)',
      '🧊 Estabilidad':          '<b>24 horas a 2-8°C una vez reconstituido · 4 h a temperatura ambiente</b>',
    },

    vigilancia: {
      antes: [
        'ECG basal — descartar cardiopatía isquémica activa (contraindicación relativa).',
        'TA y FC basales — hipotensión previa puede empeorar con vasoconstricción periférica.',
        'Estado de las extremidades: pulsos, temperatura, coloración (isquemia periférica preexistente).',
        'Natremia basal — riesgo de hiponatremia dilucional.',
        'Confirmar que no es embarazo (contraindicación absoluta).',
        'Verificar disponibilidad de albúmina IV si indicación es SHR.',
      ],
      durante: [
        'Monitorización cardíaca continua: FC, TA, ECG (vigila cambios isquémicos ST/T).',
        'Exploración de extremidades cada turno: pulsos, coloración, temperatura, dolor.',
        'SpO2 continua.',
        'Diuresis horaria si se usa para SHR (objetivo de mejoría de creatinina).',
        'Vigilar signos de isquemia mesentérica: dolor abdominal, diarrea sanguinolenta, náuseas.',
      ],
      despues: [
        'Ionograma (sodio) diario — riesgo de hiponatremia dilucional.',
        'Creatinina y urea diarias (en SHR: objetivo de reducción del 25-50% en 3-5 días).',
        'Control de hemorragia: débito por SNG/TIPS, TA, FC.',
        'Si SHR: valorar respuesta a los 3 días — si no mejoría, reevaluar con hepatólogo.',
        'Documentar dosis, hora, respuesta hemodinámica y función renal.',
      ],
      suspender: [
        'Isquemia miocárdica documentada (elevación ST, angina).',
        'Isquemia periférica (cianosis o dolor en extremidades).',
        'Isquemia mesentérica (dolor abdominal + acidosis).',
        'Control de hemorragia conseguido y endoscopia realizada.',
        'Al completar 5 días en hemorragia variceal.',
        'Normalización de creatinina en SHR (máximo 14 días).',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros fármacos en la misma jeringa o bolsa.',
      'Compatible con SF 0.9% y SG 5% para perfusión.',
      'No mezclar con soluciones que contengan calcio.',
      'Lavar vía con SF antes y después si se comparte.',
    ],

    alertasSeguridad: [
      '🔴 ISQUEMIA MIOCÁRDICA — ECG continuo durante tratamiento. Si dolor torácico o cambios ST: suspender.',
      '🔴 ISQUEMIA PERIFÉRICA — vigilar extremidades en cada turno (cianosis, frialdad, dolor).',
      '🔴 ISQUEMIA MESENTÉRICA — dolor abdominal + diarrea + acidosis = emergencia.',
      '🔴 CONTRAINDICADO en embarazo — contracción uterina y muerte fetal.',
      '🟠 Hiponatremia dilucional — sodio diario, especialmente en cirrosis con ascitis.',
      '🟡 Bradicardia refleja por hipertensión — leve, vigilar en cardiopatías.',
    ],
  },

  modulos: {

    hemorragiaVariceal: `
      <b>Protocolo Hemorragia Variceal — Terlipresina:</b><br/>
      <b>Objetivo:</b> Reducir presión portal para controlar sangrado activo.<br/><br/>
      <b>Iniciar inmediatamente</b> antes de la endoscopia (dentro de 12 h).<br/>
      <b>Dosis:</b> 2 mg IV en bolo c/4-6 h × 5 días.<br/>
      (Si peso <50 kg o cardiopatía: 1 mg c/4-6 h)<br/><br/>
      <b>Combinado con:</b><br/>
      • <b>Ligadura endoscópica</b> (varices esofágicas) o escleroterapia.<br/>
      • <b>Antibiótico profiláctico:</b> Ceftriaxona 1 g/24 h IV × 7 días (reduce infecciones y resangrado).<br/>
      • Albúmina IV en cirrosis con ascitis.<br/><br/>
      <b>Si fallo endoscópico + terlipresina:</b> Considerar TIPS urgente o balón de Sengstaken-Blakemore.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Realizar ECG antes de iniciar y tener monitorización cardíaca continua activada.',
      'Explorar extremidades antes y durante: temperatura, pulsos, coloración.',
      'Reconstituir el vial con su disolvente específico — no sustituir por SF.',
      'Bolo IV: administrar lentamente en 1-2 min — nunca en bolo rápido.',
      'Programar administración cada 4-6 h con alarma de reloj para no omitir dosis.',
      'Registrar diuresis horaria (en SHR: objetivo >0.5 mL/kg/h con mejoría progresiva).',
      'Ionograma diario — comunicar si sodio <130 mEq/L.',
      'Administrar albúmina IV según pauta en SHR (esencial para eficacia).',
      'Si dolor torácico, angina o cambios en ECG: DETENER y avisar médico urgentemente.',
      'Si cianosis o frialdad en extremidades: evaluar y reducir dosis o suspender.',
    ],

    efectosAdversos: [
      '🔴 Isquemia miocárdica (dolor torácico, cambios ST)',
      '🔴 Isquemia periférica (cianosis, frialdad, gangrena)',
      '🔴 Isquemia mesentérica (dolor abdominal, diarrea sanguinolenta)',
      '🟠 Hiponatremia dilucional (en cirrosis con ascitis)',
      '🟠 Bradicardia refleja',
      '🟠 Hipertensión arterial',
      '🟠 Espasmos abdominales, náuseas',
      '🟡 Palidez facial y cianosis labial transitoria (vasocontricción leve)',
    ],

    contraindicaciones: [
      'Embarazo (contraindicación absoluta — oxitócico potente).',
      'Cardiopatía isquémica activa (angina inestable, IAM reciente).',
      'Vasculopatía periférica severa (arteriopatía obliterante avanzada).',
      'Arritmias graves.',
      'Insuficiencia respiratoria grave.',
      'Sepsis no controlada.',
    ],

    fotosensibilidad: 'No relevante. Conservar viales sin reconstituir a temperatura ambiente. Reconstituido: refrigerar 2-8°C.',

    estabilidad: {
      'Vial sin reconstituir':    'Temperatura ambiente hasta vencimiento',
      'Reconstituido':            '<b>24 h a 2-8°C · 4 h a temperatura ambiente</b>',
      'En perfusión (SF 0.9%)':   '24 h a temperatura ambiente',
      'Aspecto':                  'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 4 h a temperatura ambiente o 24 h refrigerada tras reconstitución.',
      dosisRestante:     'Desechar sobrante de vial reconstituido si no se usa en el tiempo indicado.',
      infusionPreparada: '24 h en SF 0.9% a temperatura ambiente si se usa en perfusión continua.',
      notas:             'El disolvente incluido en el kit es el específico para reconstitución. No sustituir por SF para reconstituir.',
    },

    presentaciones: [
      'Glypressin® 1 mg polvo liofilizado + 8.5 mL disolvente',
      'Glypressin® 2 mg polvo liofilizado + 8.5 mL disolvente',
      'Terlipresina Ferrer® — genérico',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hemorragia variceal (>50 kg)',    dosis: '<b>2 mg IV bolo c/4-6 h × 5 días</b>',             via: 'IV' },
      { indicacion: 'Hemorragia variceal (<50 kg)',    dosis: '1 mg IV bolo c/4-6 h × 5 días',                     via: 'IV' },
      { indicacion: 'SHR tipo 1 (inicio)',              dosis: '0.5-1 mg IV bolo c/4-6 h + albúmina 20-40 g/día', via: 'IV' },
      { indicacion: 'SHR tipo 1 (si respuesta)',        dosis: 'Aumentar hasta 2 mg c/4-6 h si creatinina no mejora en 48 h', via: 'IV' },
      { indicacion: 'Perfusión continua (alternativa)', dosis: '4-12 mg/24 h en 250 mL SF',                         via: 'IV' },
    ],

    embarazo: '<b>CONTRAINDICADO</b> — la terlipresina es oxitócica y puede causar contracciones uterinas y muerte fetal. Alternativas: octreótido (menos vasoconstrictor esplácnico pero más seguro en embarazo, uso off-label).',

    pediatria: 'No hay indicación establecida en pediatría. Uso off-label excepcional en hepatología pediátrica bajo supervisión especializada. Sin dosis estándar establecidas.',

    adultoMayor: 'Mayor riesgo de isquemia cardiovascular y periférica. Evaluar función cardíaca antes de iniciar. Reducir dosis inicial (1 mg c/6 h). ECG y exploración vascular más frecuente.',

    insufRenal: 'En SHR la indicación PRINCIPAL es mejorar la función renal. En IR crónica sin SHR: sin indicación habitual. Monitorizar creatinina diaria para evaluar respuesta.',

    insufHepatica: 'Indicado precisamente en cirrosis descompensada. Sin ajuste de dosis por IH — la cirrosis es la indicación. Vigilar hiponatremia dilucional (más frecuente en estadios avanzados).',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Glypressin® (terlipresina).',
      'European Association for the Study of the Liver (EASL). Clinical Practice Guidelines for HRS. J Hepatol. 2023.',
      'de Franchis R et al. Baveno VII Consensus. Expanding consensus in portal hypertension. J Hepatol. 2022.',
      'Angeli P et al. Diagnosis and management of AKI in patients with cirrhosis. J Hepatol. 2015.',
      'Solá E et al. Terlipressin plus albumin for HRS-AKI in cirrhosis. NEJM. 2021.',
      'AASLD Practice Guidance. Management of Varices and Variceal Hemorrhage. Hepatology. 2022.',
    ],
  },

});
