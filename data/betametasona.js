/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/betametasona.js
   Fuentes: CIMA AEMPS (Celestone), FDA DailyMed,
   ACOG Antenatal Corticosteroids Guidelines 2021,
   Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'betametasona',
  nombre:         'Betametasona',
  nombreComercial: 'Celestone®',
  nombreGenerico: 'Betamethasone',
  categoria:      'otros',
  tags:           ['corticoide', 'maduración pulmonar fetal', 'obstetricia', 'parto pretérmino', 'antiinflamatorio', 'cuadro básico'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Maduración pulmonar fetal</b>: 12 mg IM cada 24 h × 2 dosis — indicación obstétrica más frecuente y de mayor impacto en supervivencia neonatal.',
      'Indicado en <b>riesgo de parto pretérmino entre las 24-34 semanas</b> (algunos protocolos hasta 36+6 semanas en contextos específicos).',
      '<b>Vía IM profunda</b> — NO administrar por vía IV en la indicación de maduración pulmonar (esquema estándar establecido con IM).',
      'También usado como <b>antiinflamatorio/inmunosupresor sistémico</b> en otras indicaciones (alergias graves, enfermedades reumatológicas, edema cerebral) a dosis distintas.',
      'Potencia glucocorticoide alta con <b>mínimo efecto mineralocorticoide</b> — a diferencia de la hidrocortisona.',
    ],

    resumenRapido: 'Corticosteroide sintético de acción prolongada con alta potencia glucocorticoide y mínima actividad mineralocorticoide. Su indicación más relevante y de mayor impacto en la práctica obstétrica es la maduración pulmonar fetal: administrado a la madre entre las 24 y 34 semanas de gestación cuando existe riesgo de parto pretérmino, acelera la producción de surfactante pulmonar fetal, reduciendo significativamente la incidencia y gravedad del síndrome de distrés respiratorio neonatal, la hemorragia intraventricular y la mortalidad neonatal. También se utiliza como antiinflamatorio/inmunosupresor sistémico en diversas indicaciones no obstétricas.',

    objetivoTerapeutico: 'Maduración pulmonar fetal en riesgo de parto pretérmino (24-34 semanas) · Tratamiento antiinflamatorio/inmunosupresor sistémico en diversas patologías · Reducción del edema en procesos inflamatorios específicos',

    preparacion: {
      'Presentación':          '<b>Celestone Soluspan® / Cronodex® 12 mg/mL — ampolla 1 mL (fosfato + acetato de betametasona)</b>',
      'Vía':                   '<b>IM profunda (glúteo)</b> — NO usar la vía IV para el esquema de maduración pulmonar fetal',
      'Esquema maduración pulmonar': '<b>12 mg IM cada 24 h × 2 dosis (total 24 mg)</b>',
      'Ciclo de rescate':      'Un único ciclo de rescate puede considerarse si persiste riesgo de parto pretérmino >14 días tras el primer ciclo y <34 semanas (según protocolo institucional)',
      'Dosis antiinflamatoria (otras indicaciones)': 'Variable según indicación, habitualmente 4-8 mg/día IM/IV',
      '⏱️ Inicio efecto (maduración pulmonar)': 'Beneficio óptimo si el parto ocurre entre 24 h y 7 días tras completar el ciclo',
      '🧊 Estabilidad':         'Ampolla lista para usar — verificar aspecto (suspensión) antes de administrar',
    },

    vigilancia: {
      antes: [
        'Confirmar la edad gestacional (24-34 semanas) y el riesgo real de parto pretérmino.',
        'Descartar corioamnionitis clínica activa (relativa, valorar con obstetricia).',
        'Glucemia basal en gestante diabética — el corticoide puede elevar la glucemia significativamente.',
        'Confirmar que la vía es IM — no debe administrarse IV en este esquema.',
      ],
      durante: [
        'Administrar IM profunda en glúteo, agitando suavemente la ampolla antes de cargar (es una suspensión).',
        'Vigilar reacción local en el punto de inyección.',
        'En diabéticas: vigilar glucemia capilar más frecuentemente en las 24-72 h siguientes.',
      ],
      despues: [
        'Glucemia capilar en gestantes diabéticas o con diabetes gestacional durante 3-5 días tras cada dosis.',
        'Monitorización fetal según protocolo (puede observarse disminución transitoria de la variabilidad de la frecuencia cardíaca fetal en las 48-72 h).',
        'Documentar la hora exacta de cada dosis — relevante para calcular la ventana óptima de beneficio antes del parto.',
        'Coordinar con el equipo obstétrico y neonatología la programación del parto si es posible, para maximizar el beneficio del ciclo completo.',
      ],
      suspender: [
        'Reacción alérgica.',
        'Al completar las 2 dosis del ciclo estándar.',
        'Corioamnionitis clínica que contraindique diferir el parto (decisión obstétrica).',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros fármacos en la misma jeringa.',
      'No usar la vía IV para el esquema de maduración pulmonar fetal (esquema validado con IM).',
      'Agitar suavemente antes de usar — es una suspensión, no una solución.',
    ],

    alertasSeguridad: [
      '🟠 Vía IM exclusiva en el esquema de maduración pulmonar fetal — no administrar IV en esta indicación.',
      '🟠 Puede elevar la glucemia materna significativamente — vigilar en diabéticas/diabetes gestacional.',
      '🟡 Disminución transitoria de la variabilidad de la frecuencia cardíaca fetal esperable en las 48-72 h — no confundir con compromiso fetal.',
      '🟡 El ciclo de rescate debe limitarse según protocolo — no repetir de forma indiscriminada.',
      '🟡 Es una suspensión — agitar suavemente antes de cargar la dosis.',
    ],
  },

  modulos: {
    obstetricia: `
      <b>Protocolo Maduración Pulmonar Fetal — Betametasona:</b><br/>
      <b>Indicación:</b> riesgo de parto pretérmino entre las 24 y 34 semanas de gestación (algunos protocolos amplían la ventana en contextos específicos).<br/><br/>
      <b>Esquema estándar:</b><br/>
      • <b>12 mg IM cada 24 horas × 2 dosis</b> (total 24 mg).<br/>
      • Vía IM profunda (glúteo) — nunca IV en este esquema.<br/><br/>
      <b>Beneficio óptimo:</b> si el nacimiento ocurre entre 24 horas y 7 días después de completar el ciclo.<br/><br/>
      <b>Alternativa equivalente:</b> dexametasona 6 mg IM cada 12 h × 4 dosis (según disponibilidad y protocolo institucional).<br/><br/>
      <b>Vigilancia materna:</b> glucemia en diabéticas/diabetes gestacional durante varios días tras cada dosis.<br/>
      <b>Vigilancia fetal:</b> puede observarse reducción transitoria de la variabilidad de la FCF en las 48-72 h — hallazgo esperado, no patológico.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar la edad gestacional y la indicación antes de administrar.',
      'Agitar suavemente la ampolla antes de cargar — es una suspensión.',
      'Administrar IM profunda en glúteo — nunca por vía IV en el esquema de maduración pulmonar.',
      'Programar la segunda dosis exactamente a las 24 h de la primera.',
      'En gestantes diabéticas: intensificar los controles de glucemia capilar tras cada dosis.',
      'Informar al equipo de neonatología sobre el esquema administrado si el parto es inminente.',
      'Vigilar la variabilidad de la frecuencia cardíaca fetal según protocolo, sin alarmar innecesariamente por la disminución transitoria esperada.',
      'Documentar la hora exacta de cada dosis del ciclo.',
    ],

    efectosAdversos: [
      '🟠 Hiperglucemia materna (más marcada en diabéticas)',
      '🟠 Disminución transitoria de la variabilidad de la FCF (48-72 h, esperada)',
      '🟡 Leucocitosis transitoria materna',
      '🟡 Dolor/induración en el punto de inyección',
      '🟡 Insomnio, irritabilidad materna transitoria',
      '🟡 Edema leve',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a betametasona o corticoides.',
      'Infección sistémica no controlada (relativa, valorar con el equipo obstétrico).',
      'Corioamnionitis clínica que requiera finalizar el embarazo de inmediato (decisión obstétrica caso a caso).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':  'Temperatura ambiente hasta vencimiento',
      'Aspecto':             'Suspensión blanca — agitar suavemente antes de usar; no usar si hay grumos irreversibles',
      'Uso único':           'Cada ampolla es de dosis única — no conservar sobrante',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras abrir — desechar sobrante.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: 'No aplica — administración IM directa desde la ampolla.',
      notas:             'Es una suspensión (no solución) — agitar suavemente antes de cargar la jeringa. No usar la vía IV en el esquema de maduración pulmonar fetal.',
    },

    presentaciones: [
      'Celestone Soluspan® 12 mg/mL — ampolla 1 mL (fosfato sódico + acetato de betametasona)',
      'Cronodex® — presentación equivalente según país',
      'Betametasona genérica — varios fabricantes',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Maduración pulmonar fetal',      dosis: '<b>12 mg IM c/24 h × 2 dosis</b>',                   via: 'IM' },
      { indicacion: 'Ciclo de rescate (según protocolo)', dosis: 'Un ciclo adicional si persiste riesgo >14 días y <34 semanas', via: 'IM' },
      { indicacion: 'Antiinflamatorio sistémico (otras indicaciones)', dosis: '4-8 mg/día IM/IV según indicación',   via: 'IM/IV' },
    ],

    embarazo: 'Es precisamente el fármaco de elección para la maduración pulmonar fetal entre las 24-34 semanas de gestación cuando existe riesgo de parto pretérmino. Beneficio ampliamente demostrado en la reducción de morbimortalidad neonatal (síndrome de distrés respiratorio, hemorragia intraventricular, enterocolitis necrotizante).',

    pediatria: 'No aplica en la indicación obstétrica (se administra a la madre, no al neonato/niño). En otras indicaciones pediátricas (antiinflamatorias), dosis ajustada por peso según protocolo específico.',

    adultoMayor: 'No aplica en el contexto de uso obstétrico. En otras indicaciones, usar con las mismas precauciones que cualquier corticoide sistémico en el adulto mayor (glucemia, densidad ósea, infecciones).',

    insufRenal: 'Sin ajuste de dosis específico necesario en el esquema de maduración pulmonar fetal.',

    insufHepatica: 'Sin ajuste específico necesario en el esquema estándar de maduración pulmonar fetal.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Celestone Soluspan® (betametasona).',
      'ACOG Committee Opinion. Antenatal Corticosteroid Therapy for Fetal Maturation. Obstet Gynecol. 2021.',
      'Roberts D et al. Antenatal corticosteroids for accelerating fetal lung maturation for women at risk of preterm birth. Cochrane Database Syst Rev. 2017.',
      'WHO Recommendations on Interventions to Improve Preterm Birth Outcomes. 2015.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
