/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/fosfomicina.js
   Fuentes: CIMA AEMPS (Fosfocina IV), FDA DailyMed,
   SEIMC Guía Antibióticos 2023, ESCMID UTI Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'fosfomicina',
  nombre:         'Fosfomicina IV',
  nombreComercial: 'Fosfocina®',
  nombreGenerico: 'Fosfomycin Disodium',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'fosfomicina', 'multirresistencia', 'ITU complicada', 'sinergismo', 'MRSA', 'BLEE', 'sodio', 'último recurso'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antibiótico de amplio espectro reservado en gran parte para infecciones por multirresistentes y para terapia combinada. Cada gramo de fosfomicina disódica aporta una carga de sodio considerable — riesgo de sobrecarga de sodio/hipopotasemia en insuficiencia cardíaca, renal o hepática. Requiere ajuste renal y vigilancia electrolítica.',

  nivel1: {

    puntosClave: [
      '<b>Antibiótico de amplio espectro</b> — gram positivos (incluido MRSA) y gram negativos (incluidos BLEE) por mecanismo único (inhibe la síntesis de la pared celular en un paso distinto a los betalactámicos).',
      '<b>ALTA CARGA DE SODIO</b>: cada gramo de fosfomicina disódica aporta ~14.5 mEq de sodio — vigilar en IC, IR e IH.',
      'Uso principal: <b>ITU complicada por multirresistentes</b> y <b>terapia combinada</b> en infecciones graves (sinergismo con betalactámicos, aminoglucósidos o daptomicina).',
      '<b>Infundir en 60-120 min según dosis</b> — dosis altas requieren infusión más lenta.',
      'Vigilar <b>hipopotasemia</b> (efecto natriurético indirecto) durante el tratamiento.',
    ],

    resumenRapido: 'Antibiótico de estructura química única (derivado del ácido fosfónico) que inhibe la enzima MurA, bloqueando un paso inicial y específico de la síntesis de la pared celular bacteriana, distinto al mecanismo de los betalactámicos. Esta particularidad le confiere actividad frente a un amplio espectro de gram positivos (incluido MRSA) y gram negativos (incluidos productores de BLEE y algunos carbapenemasas), sin resistencia cruzada con otras familias de antibióticos, lo que lo hace muy valioso en terapia combinada frente a multirresistentes. La formulación IV es la sal disódica, que aporta una carga de sodio considerable a tener en cuenta en pacientes con insuficiencia cardíaca, renal o hepática.',

    objetivoTerapeutico: 'Tratamiento de infecciones urinarias complicadas por multirresistentes · Terapia combinada en infecciones graves (bacteriemia, endocarditis, infección osteoarticular) por gram positivos multirresistentes (MRSA) · Combinación en infecciones por gram negativos productores de carbapenemasas',

    preparacion: {
      'Presentación':          '<b>Fosfocina® IV 1 g y 4 g — vial polvo liofilizado (fosfomicina disódica)</b>',
      'Reconstitución':        'Reconstituir con agua para inyección según ficha técnica',
      'Diluyente':             'SF 0.9% o SG 5%',
      'Dilución final':        'Diluir en 100-250 mL SF/SG 5% según dosis',
      '⚠️ Carga de sodio':      '<b>~14.5 mEq de Na+ por cada gramo de fosfomicina disódica</b> — considerar en balance hidroelectrolítico',
      'Dosis estándar':        '<b>2-4 g IV c/6-8 h</b> según gravedad',
      'Dosis alta (grave)':    '4 g IV c/6 h en infecciones muy graves (máx 16 g/día en algunos protocolos)',
      '⏱️ Tiempo de infusión':  '<b>60-120 min según dosis — infusión lenta para dosis altas</b>',
      'Vía':                   'IV intermitente',
      '🧊 Estabilidad':         '<b>12-24 h a temperatura ambiente tras reconstituir/diluir según ficha técnica</b>',
    },

    vigilancia: {
      antes: [
        'Función renal basal — ajuste de dosis en insuficiencia renal.',
        'Función cardíaca (IC) e ionograma basal — la carga de sodio puede descompensar una insuficiencia cardíaca.',
        'Potasio basal — riesgo de hipopotasemia durante el tratamiento.',
        'Confirmar la indicación (multirresistencia, terapia combinada) — no es de primera línea rutinaria.',
      ],
      durante: [
        'Infundir según el tiempo indicado (60-120 min) — dosis altas requieren infusión más lenta.',
        'Vigilar signos de sobrecarga de volumen/sodio en cardiópatas o nefrópatas.',
        'Constantes vitales según protocolo de infección grave.',
        'Vigilar reacción alérgica (poco frecuente).',
      ],
      despues: [
        'Ionograma (sodio y potasio) periódico durante el tratamiento.',
        'Balance hídrico y peso diario en pacientes con insuficiencia cardíaca o renal.',
        'Función renal periódica si tratamiento prolongado.',
        'Reevaluar respuesta clínica y necesidad de mantener la combinación antibiótica.',
        'Documentar dosis, ionograma y tolerancia en cada control.',
      ],
      suspender: [
        'Sobrecarga de volumen/sodio con descompensación cardíaca.',
        'Hipopotasemia grave refractaria a reposición.',
        'Reacción alérgica grave.',
        'Al completar la pauta indicada o disponer de alternativa con menor carga de sodio.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros antibióticos en la misma solución sin verificar compatibilidad.',
      'Precaución con soluciones que contengan calcio (posible incompatibilidad según preparación).',
      'Compatible con SF 0.9% y SG 5% para dilución.',
      'Lavar la vía antes y después si se comparte el acceso.',
    ],

    alertasSeguridad: [
      '🔴 ALTA CARGA DE SODIO (~14.5 mEq/g) — riesgo de descompensación en IC, IR e IH. Vigilar balance hidroelectrolítico.',
      '🟠 HIPOPOTASEMIA — vigilar potasio durante todo el tratamiento.',
      '🟠 Ajuste de dosis obligatorio en insuficiencia renal.',
      '🟡 Generalmente usada en terapia combinada, no como monoterapia en infecciones graves.',
      '🟡 Infundir lento en dosis altas para reducir molestias/flebitis.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Calcular la carga de sodio total administrada y comunicarla al equipo en pacientes con insuficiencia cardíaca o renal.',
      'Diluir según ficha técnica en SF 0.9% o SG 5%; infundir en 60-120 min según la dosis.',
      'Vigilar balance hídrico y peso diario en cardiópatas/nefrópatas durante el tratamiento.',
      'Controlar el potasio de forma periódica — reponer si desciende.',
      'Vigilar la zona de punción por flebitis (dosis altas pueden ser irritantes).',
      'Confirmar con el equipo médico si se usa en combinación con otro antibiótico (uso habitual).',
      'Función renal periódica si el tratamiento se prolonga.',
      'Documentar dosis, ionograma y tolerancia en cada turno.',
    ],

    efectosAdversos: [
      '🟠 Sobrecarga de sodio / descompensación cardíaca (por la alta carga de Na+)',
      '🟠 Hipopotasemia',
      '🟡 Náuseas, vómitos, diarrea',
      '🟡 Flebitis en el punto de infusión',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Erupción cutánea (poco frecuente)',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a fosfomicina.',
      'Insuficiencia cardíaca grave descompensada sin control estricto de la carga de sodio.',
      'Hipernatremia no corregida.',
      'Precaución extrema en insuficiencia renal grave sin ajuste de dosis.',
    ],

    fotosensibilidad: 'No relevante. Conservar el vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Diluido en SF/SG 5%':   '<b>12-24 h a temperatura ambiente</b> (verificar ficha técnica del fabricante)',
      'Aspecto':                 'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro del tiempo indicado tras reconstituir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: '12-24 h a temperatura ambiente en SF 0.9% o SG 5% tras la dilución final.',
      notas:             'Recordar la carga de sodio significativa por cada gramo administrado. Habitualmente usada en combinación con otro antibiótico.',
    },

    presentaciones: [
      'Fosfocina® IV 1 g — vial polvo liofilizado',
      'Fosfocina® IV 4 g — vial polvo liofilizado',
      'Fosfomicina trometamol — presentación oral (indicación distinta: ITU no complicada, dosis única)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'ITU complicada / infección moderada', dosis: '<b>2-4 g IV c/8 h</b>',                          via: 'IV' },
      { indicacion: 'Infección grave / terapia combinada',  dosis: '4 g IV c/6-8 h (hasta 16 g/día en casos graves)', via: 'IV' },
      { indicacion: 'Infección osteoarticular / endocarditis (combinada)', dosis: '4 g IV c/6 h con otro antibiótico', via: 'IV' },
      { indicacion: 'IR (ClCr 20-40)',                        dosis: 'Reducir dosis según ClCr (consultar tabla específica)', via: 'IV' },
      { indicacion: 'IR grave (ClCr <20)',                     dosis: 'Reducción significativa de dosis e intervalo — TDM si disponible', via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA) para la formulación oral (fosfomicina trometamol); la formulación IV disódica tiene menos experiencia documentada. Usar solo si el beneficio supera el riesgo en infecciones graves sin alternativa, vigilando la carga de sodio.',

    pediatria: 'Uso IV en infecciones graves multirresistentes bajo supervisión de infectología pediátrica: 100-200 mg/kg/día IV en 3-4 dosis (máx según indicación). Vigilar la carga de sodio, especialmente en neonatos y lactantes pequeños.',

    adultoMayor: 'Mayor riesgo de descompensación cardíaca por la carga de sodio. Vigilar balance hídrico, peso y función renal con mayor frecuencia. Ajustar la dosis según ClCr real.',

    insufRenal: '<b>Ajuste obligatorio según ClCr</b> — reducir dosis e intervalo progresivamente en insuficiencia renal moderada-grave. Consultar tablas específicas de ajuste o farmacocinética clínica ante IR significativa.',

    insufHepatica: 'Sin ajuste específico necesario — eliminación fundamentalmente renal. Vigilar la carga de sodio en hepatopatía con ascitis o insuficiencia cardíaca asociada.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Fosfocina® IV (fosfomicina disódica).',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Falagas ME et al. Fosfomycin. Clin Microbiol Rev. 2016.',
      'Grabein B et al. Intravenous fosfomycin — back to the future. Systematic review and meta-analysis. Clin Microbiol Infect. 2017.',
      'Gilbert DN et al. The Sanford Guide to Antimicrobial Therapy. 2023.',
    ],
  },

});
