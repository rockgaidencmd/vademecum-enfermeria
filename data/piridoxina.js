/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/piridoxina.js
   Fuentes: CIMA AEMPS, FDA DailyMed, ATS/CDC/IDSA
   Tuberculosis Treatment Guidelines, ACOG Hiperemesis
   Gravídica, Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'piridoxina',
  nombre:         'Piridoxina (Vitamina B6)',
  nombreGenerico: 'Pyridoxine Hydrochloride',
  categoria:      'otros',
  tags:           ['vitamina B6', 'antídoto', 'isoniazida', 'hiperemesis gravídica', 'neuropatía periférica', 'convulsiones', 'cuadro básico'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Antídoto específico de la intoxicación por isoniazida</b> — convulsiones refractarias por sobredosis de INH requieren piridoxina en dosis altas (gramo por gramo).',
      '<b>Profilaxis de neuropatía periférica</b> en pacientes que reciben isoniazida para tuberculosis — 25-50 mg/día VO/IM de forma preventiva.',
      'Coadyuvante en <b>náuseas y vómitos del embarazo</b> (hiperemesis gravídica) — primera línea junto con doxilamina.',
      'En <b>sobredosis de isoniazida con convulsiones</b>: dosis de piridoxina equivalente en gramos a la dosis de INH ingerida (o 5 g empírico si se desconoce), IV.',
      'Déficit de piridoxina puede causar <b>convulsiones neonatales piridoxino-dependientes y neuropatía periférica</b> en adultos.',
    ],

    resumenRapido: 'Forma activa precursora de la vitamina B6, cofactor esencial en múltiples reacciones enzimáticas del metabolismo de aminoácidos y neurotransmisores, incluida la síntesis de GABA. Su indicación de emergencia más relevante es como antídoto específico en la intoxicación por isoniazida: la INH inhibe la piridoxina quinasa y agota los depósitos de piridoxal-5-fosfato, precipitando convulsiones refractarias a las benzodiacepinas convencionales que solo responden a la administración de piridoxina en dosis altas. También se usa de forma preventiva en pacientes bajo tratamiento antituberculoso con isoniazida (para evitar la neuropatía periférica) y como coadyuvante de primera línea en las náuseas y vómitos del embarazo.',

    objetivoTerapeutico: 'Tratamiento de las convulsiones por intoxicación/sobredosis de isoniazida · Profilaxis de la neuropatía periférica en pacientes con tratamiento antituberculoso (isoniazida) · Coadyuvante en el tratamiento de las náuseas y vómitos del embarazo · Tratamiento de estados carenciales de vitamina B6',

    preparacion: {
      'Presentación':               '<b>Piridoxina 100 mg/mL — ampolla 1-2 mL</b>',
      'Diluyente':                  'SF 0.9% o SG 5% para dosis altas en infusión',
      'Dosis profilaxis (con INH)': '<b>25-50 mg/día VO o IM</b>',
      'Dosis convulsiones por INH (dosis conocida)': '<b>1 g de piridoxina IV por cada gramo de INH ingerida</b>',
      'Dosis convulsiones por INH (dosis desconocida)': '<b>5 g IV empírico</b> (puede repetirse si persisten las convulsiones)',
      'Velocidad IV (dosis altas)': 'Infundir en 30-60 min (bolo lento si la situación es crítica) — no superar la velocidad recomendada para evitar toxicidad',
      'Dosis hiperemesis gravídica': '10-25 mg VO c/8 h, con o sin doxilamina',
      'Vía':                        'IV (emergencia por intoxicación) · IM · Oral (profilaxis, hiperemesis)',
      '⏱️ Inicio efecto (convulsiones por INH)': 'Minutos tras la dosis IV adecuada',
      '🧊 Estabilidad':              'Ampolla lista para usar, proteger de la luz',
    },

    vigilancia: {
      antes: [
        'En sospecha de intoxicación por isoniazida: confirmar la dosis ingerida si es posible (determina la dosis de piridoxina 1:1 en gramos).',
        'Constantes vitales y estado neurológico (nivel de consciencia, actividad convulsiva).',
        'Glucemia — descartar hipoglucemia como causa alternativa de las convulsiones.',
        'En profilaxis con isoniazida: valorar factores de riesgo de neuropatía (diabetes, alcoholismo, desnutrición, embarazo, VIH).',
      ],
      durante: [
        'En convulsiones por INH: administrar la piridoxina IV mientras se mantiene el soporte de vía aérea y las medidas habituales de manejo de la crisis convulsiva.',
        'Vigilar la respuesta a la piridoxina — las convulsiones por INH típicamente ceden en minutos tras la dosis adecuada, a diferencia de la falta de respuesta a benzodiacepinas solas.',
        'Constantes vitales continuas durante el manejo de la emergencia.',
      ],
      despues: [
        'Vigilar la recurrencia de convulsiones — puede requerir dosis adicionales de piridoxina.',
        'Evaluar la función hepática si hay sospecha de hepatotoxicidad concomitante por isoniazida.',
        'En profilaxis crónica: reevaluar la aparición de síntomas de neuropatía periférica (parestesias, hormigueo) pese al tratamiento.',
        'Documentar la dosis administrada, indicación y respuesta clínica.',
      ],
      suspender: [
        'No aplicable en el contexto de emergencia (dosis única o repetida según respuesta).',
        'En profilaxis crónica: reacción alérgica (rara).',
        'Dosis muy altas y prolongadas (no relacionadas con el uso estándar) pueden asociarse a neuropatía sensitiva paradójica — relevante solo en uso crónico a dosis suprafisiológicas prolongadas, no en el contexto de antídoto agudo.',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones fuertemente alcalinas.',
      'Compatible con SF 0.9% y SG 5% para dilución en dosis altas.',
      'No hay interacciones relevantes que contraindiquen su uso urgente como antídoto.',
    ],

    alertasSeguridad: [
      '🟠 En convulsiones por sobredosis de isoniazida, las benzodiacepinas SOLAS suelen ser ineficaces — la piridoxina es el tratamiento específico y debe administrarse sin demora.',
      '🟡 Dosis altas IV deben infundirse a velocidad controlada, no en bolo extremadamente rápido.',
      '🟡 Uso crónico a dosis muy altas y prolongadas (no relacionado con el uso puntual como antídoto) se ha asociado a neuropatía sensitiva — relevante solo en contextos de suplementación crónica excesiva.',
      '🟢 Perfil de seguridad muy favorable en el uso puntual como antídoto o profilaxis estándar — vitamina hidrosoluble con amplio margen terapéutico.',
    ],
  },

  modulos: {
    respiratorio: `
      <b>Protocolo Convulsiones por Sobredosis de Isoniazida — Piridoxina:</b><br/>
      <b>Sospecha:</b> convulsiones refractarias a benzodiacepinas en paciente con tratamiento antituberculoso o exposición a isoniazida, especialmente con acidosis metabólica y alteración de consciencia asociadas.<br/><br/>
      <b>Tratamiento:</b><br/>
      • Si se conoce la dosis ingerida: <b>1 g de piridoxina IV por cada gramo de isoniazida ingerida</b>.<br/>
      • Si se desconoce la dosis: <b>5 g de piridoxina IV empírico</b> (diluida, infundir en 30-60 min si la situación lo permite, o más rápido si es crítica).<br/>
      • Puede repetirse si las convulsiones persisten.<br/><br/>
      <b>Junto con:</b><br/>
      • Benzodiacepinas para el control sintomático de la crisis (coadyuvante, no sustituye a la piridoxina).<br/>
      • Soporte de vía aérea y medidas generales de manejo de la crisis convulsiva.<br/>
      • Corrección de la acidosis metabólica asociada según gasometría.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'En sospecha de intoxicación por isoniazida con convulsiones: preparar y administrar piridoxina sin demora, junto con las medidas habituales de manejo de la crisis.',
      'Calcular la dosis según la cantidad de isoniazida ingerida si se conoce (1 g piridoxina por cada gramo de INH), o usar la dosis empírica de 5 g si se desconoce.',
      'Infundir la dosis IV a velocidad controlada, salvo en situación crítica que requiera mayor rapidez según indicación médica.',
      'Vigilar la respuesta a la piridoxina — la mejoría de las convulsiones apoya el diagnóstico de intoxicación por INH.',
      'En pacientes con tratamiento antituberculoso crónico: asegurar la administración de la dosis profiláctica diaria (25-50 mg) para prevenir la neuropatía periférica.',
      'En hiperemesis gravídica: administrar según pauta oral establecida, vigilando la respuesta a las náuseas.',
      'Documentar dosis, indicación, vía y respuesta clínica.',
    ],

    efectosAdversos: [
      '🟡 Muy bien tolerada en las dosis habituales',
      '🟡 Parestesias o neuropatía sensitiva (solo con uso crónico a dosis muy altas y prolongadas, no relacionado con el uso puntual como antídoto)',
      '🟡 Reacción alérgica (muy rara)',
      '🟡 Dolor en el punto de inyección IM',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a la piridoxina (muy rara).',
      'No hay contraindicaciones absolutas relevantes para el uso como antídoto en emergencia.',
    ],

    fotosensibilidad: 'Sí — la piridoxina se degrada con la exposición prolongada a la luz. Conservar la ampolla protegida de la luz.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento, proteger de la luz',
      'Diluida en SF/SG 5%':  '<b>24 h a temperatura ambiente, proteger de la luz directa</b>',
      'Aspecto':                'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente, protegida de la luz.',
      notas:             'En emergencia por intoxicación de isoniazida, no retrasar la administración por preparación — priorizar la disponibilidad rápida de la dosis calculada.',
    },

    presentaciones: [
      'Piridoxina 100 mg/mL — ampolla 1 mL o 2 mL (IV/IM)',
      'Piridoxina 25 mg, 50 mg — comprimidos (oral, profilaxis/mantenimiento)',
      'Complejo B — presentaciones combinadas con tiamina y cianocobalamina (IM), uso distinto a la dosis de antídoto',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Convulsiones por sobredosis de INH (dosis conocida)', dosis: '<b>1 g IV por cada gramo de INH ingerida</b>', via: 'IV' },
      { indicacion: 'Convulsiones por sobredosis de INH (dosis desconocida)', dosis: '<b>5 g IV empírico</b> (repetible)',        via: 'IV' },
      { indicacion: 'Profilaxis de neuropatía (con isoniazida)',           dosis: '25-50 mg/día VO/IM',                            via: 'VO/IM' },
      { indicacion: 'Hiperemesis gravídica',                                dosis: '10-25 mg VO c/8 h',                             via: 'VO' },
      { indicacion: 'Déficit carencial',                                    dosis: '10-20 mg/día VO/IM según gravedad',            via: 'VO/IM' },
    ],

    embarazo: 'Categoría A (FDA) a dosis habituales. Es de primera línea (junto con doxilamina) para las náuseas y vómitos del embarazo según ACOG. Las gestantes con tratamiento antituberculoso con isoniazida requieren profilaxis con piridoxina de forma sistemática por el mayor riesgo de neuropatía periférica durante el embarazo.',

    pediatria: 'Convulsiones neonatales piridoxino-dependientes (rara enfermedad genética): 50-100 mg IV en el momento agudo, con mantenimiento posterior según diagnóstico especializado. Profilaxis con isoniazida en niños: 1-2 mg/kg/día (dosis pediátrica ajustada, máx 25-50 mg/día).',

    adultoMayor: 'Sin ajuste de dosis específico. Mayor riesgo basal de déficit de vitamina B6 por menor ingesta y polifarmacia — la profilaxis con isoniazida es igualmente relevante en este grupo.',

    insufRenal: 'Sin ajuste de dosis formal necesario en el uso como antídoto de emergencia. En insuficiencia renal crónica con diálisis, puede haber mayor pérdida de piridoxina — considerar suplementación de mantenimiento si hay tratamiento antituberculoso concomitante.',

    insufHepatica: 'Sin ajuste de dosis específico necesario. La indicación de antídoto en intoxicación por isoniazida es independiente de la función hepática, aunque debe vigilarse la hepatotoxicidad propia de la INH.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Piridoxina (vitamina B6).',
      'Nelson LS, Hoffman RS. Isoniazid Toxicity. En: Goldfrank\'s Toxicologic Emergencies. 2019.',
      'Nahid P et al. Official ATS/CDC/IDSA Clinical Practice Guidelines: Treatment of Drug-Susceptible Tuberculosis. Clin Infect Dis. 2016.',
      'ACOG Practice Bulletin. Nausea and Vomiting of Pregnancy. Obstet Gynecol. 2018.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
