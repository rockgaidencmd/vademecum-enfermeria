/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/levetiracetam.js
   Fuentes: CIMA AEMPS (Keppra IV), FDA DailyMed,
   ESETT Trial NEJM 2019, AAN/AES Guidelines 2023,
   NICE CG137 Epilepsies 2022
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'levetiracetam',
  nombre:         'Levetiracetam',
  nombreGenerico: 'Levetiracetam',
  categoria:      'otros',
  tags:           ['antiepiléptico', 'crisis convulsivas', 'estatus epiléptico', 'neurología', 'UCI', 'bajo interacciones'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Estatus epiléptico</b>: 30-60 mg/kg IV (máx 4500 mg) diluido en 100 mL a pasar en <b>15 minutos</b>.',
      'Perfil de interacciones muy bajo — no induce ni inhibe CYP450. No requiere ajuste por otros fármacos.',
      '<b>Ajuste de dosis OBLIGATORIO en insuficiencia renal</b> — elimina 66% sin cambios por vía renal.',
      'Conversión IV → oral directa: misma dosis, misma frecuencia (biodisponibilidad oral ~100%).',
      'Vigilar cambios conductuales: agitación, irritabilidad, depresión (especialmente primeras semanas).',
    ],

    resumenRapido: 'Antiepiléptico de 2ª generación. Se une a la proteína de vesícula sináptica SV2A, modulando la liberación de neurotransmisores. No actúa sobre canales de sodio ni GABA, lo que explica su mínimo perfil de interacciones. Eficaz en epilepsia focal, generalizada y estatus epiléptico (2ª-3ª línea tras benzodiacepinas). Conversión IV/oral directa por bioequivalencia total.',

    objetivoTerapeutico: 'Control de crisis convulsivas · Resolución del estatus epiléptico · Profilaxis de crisis posquirúrgicas/TCE · Conversión a tratamiento oral antiepiléptico',

    preparacion: {
      'Diluyente':              '<b>SF 0.9%, SG 5% o Ringer Lactato</b>',
      'Volumen':                '<b>Diluir en 100 mL mínimo</b>',
      'Dosis estatus epiléptico':'<b>30-60 mg/kg IV (máx 4500 mg) en 100 mL → infundir en 15 min</b>',
      'Dosis mantenimiento IV': '500-1500 mg en 100 mL → infundir en 15 min cada 12 h',
      'Concentración máxima':   '15 mg/mL (no superar)',
      'Vía':                    'IV periférica o central',
      '⏱️ TIEMPO INFUSIÓN':     '<b>15 minutos (estatus y mantenimiento)</b>',
      'Bomba':                  'Bomba de infusión recomendada (control de velocidad exacto)',
      '🧊 Estabilidad':         '<b>24 horas a temperatura ambiente en SF 0.9% o SG 5%</b>',
    },

    vigilancia: {
      antes: [
        'Comprobar función renal: creatinina y aclaramiento — ajuste obligatorio si ClCr <80 mL/min.',
        'Registrar nivel de consciencia y tipo de crisis.',
        'Verificar que la vía IV sea permeable y de calibre adecuado.',
        'Conocer otros antiepilépticos que recibe el paciente (aunque interacciones son mínimas).',
        'En estatus: confirmar que se han administrado BZD previamente (levetiracetam es 2ª-3ª línea).',
      ],
      durante: [
        'Monitorizar TA y FC durante y 15 min después de la infusión (riesgo de hipotensión leve).',
        'Vigilar nivel de consciencia y frecuencia/tipo de crisis durante administración.',
        'Asegurar velocidad de infusión correcta con bomba — exactamente en 15 min.',
        'Observar signos de irritación venosa local.',
      ],
      despues: [
        'Evaluar respuesta antiepiléptica: reducción/cese de crisis.',
        'Monitorizar cambios conductuales: irritabilidad, agitación, labilidad emocional.',
        'Control de función renal periódico durante tratamiento crónico.',
        'Si niveles plasmáticos (rango terapéutico 12-46 mg/L): útil si falta de eficacia o toxicidad sospechada.',
        'Documentar dosis, hora, respuesta clínica y tolerabilidad.',
      ],
      suspender: [
        'Cambio a vía oral cuando sea posible (misma dosis).',
        'Nunca suspender bruscamente en epilepsia crónica — retirada gradual (semanas).',
        'Si reacción alérgica documentada.',
        'Prescripción médica de suspensión o de-escalada.',
      ],
    },

    incompatibilidades: [
      'Generalmente compatible con la mayoría de fármacos IV (bajo riesgo de interacciones físico-químicas).',
      'No mezclar en el mismo frasco con otros antiepilépticos.',
      'Lavar vía con SF antes y después si se comparte con otros fármacos.',
      'Compatible en Y con: lorazepam, diazepam (verificar protocolo local).',
    ],

    alertasSeguridad: [
      '🔴 Ajuste de dosis OBLIGATORIO en insuficiencia renal — sin ajuste puede acumularse y causar toxicidad del SNC.',
      '🟠 Cambios conductuales (agitación, hostilidad, psicosis) — principalmente primeras semanas.',
      '🟠 Hipotensión leve durante infusión rápida — respetar los 15 minutos mínimos.',
      '🟡 Somnolencia y mareo al inicio del tratamiento.',
      '🟡 Suspensión brusca en epilepsia crónica puede provocar rebote de crisis.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar función renal ANTES de calcular la dosis — la dosificación depende del ClCr.',
      'Diluir en mínimo 100 mL de SF o SG5% — no administrar concentrado.',
      'Programar bomba de infusión a exactamente 15 minutos.',
      'Monitorizar TA antes, durante y 15 min después de cada dosis IV.',
      'Registrar nivel de consciencia y evaluar control de crisis tras administración.',
      'Advertir al paciente/familia sobre posibles cambios de comportamiento — comunicar inmediatamente.',
      'Conversión IV→oral: misma dosis, misma frecuencia (biodisponibilidad oral ~100%).',
      'Etiquetar bolsa: Levetiracetam [dosis], volumen, velocidad, hora de preparación.',
      'En epilepsia crónica: planificar reducción gradual si se decide retirar (nunca abrupto).',
    ],

    efectosAdversos: [
      '🟠 Cambios conductuales: agitación, hostilidad, irritabilidad, depresión',
      '🟠 Somnolencia y mareo (frecuente al inicio)',
      '🟠 Hipotensión durante infusión IV',
      '🟡 Cefalea y astenia',
      '🟡 Náuseas, anorexia',
      '🟡 Leucopenia (raro, vigilar en tratamiento prolongado)',
      '🟡 Diplopía, visión borrosa',
    ],

    contraindicaciones: [
      'Hipersensibilidad a levetiracetam o derivados de pirrolidona.',
      'Insuficiencia renal grave sin ajuste de dosis apropiado.',
    ],

    fotosensibilidad: 'No relevante. Conservar viales a temperatura ambiente (<30°C).',

    estabilidad: {
      'Vial sin abrir':       'Temperatura ambiente (<30°C) hasta vencimiento',
      'Diluido en SF 0.9%':  '<b>24 horas a temperatura ambiente</b>',
      'Diluido en SG 5%':    '24 horas a temperatura ambiente',
      'Aspecto':              'Solución clara, incolora — desechar si turbidez o precipitado',
      'Temperatura':          'NO congelar · 15-30°C',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 12 h si se mantiene en condiciones asépticas.',
      dosisRestante:     'Desechar sobrante de vial abierto si no se usa en la misma jornada.',
      infusionPreparada: '24 h a temperatura ambiente en SF 0.9% o SG 5%.',
      notas:             'No requiere protección de la luz. Conservar viales sin abrir a temperatura ambiente (<30°C).',
    },

    presentaciones: [
      'Keppra® IV 500 mg/5 mL (100 mg/mL) — vial 5 mL',
      'Keppra® IV 1000 mg/10 mL (100 mg/mL) — vial 10 mL',
      'Levetiracetam Accord® / Normon® / Teva® — genéricos',
      'Keppra® 250/500/750/1000 mg comprimidos (uso oral)',
      'Keppra® 100 mg/mL solución oral (pediátrico)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Estatus epiléptico (adulto)',    dosis: '<b>30-60 mg/kg IV (máx 4500 mg) en 15 min</b>',  via: 'IV' },
      { indicacion: 'Estatus epiléptico (niño)',       dosis: '40-60 mg/kg IV (máx 3000 mg) en 15 min',         via: 'IV' },
      { indicacion: 'Mantenimiento adulto',            dosis: '500-1500 mg IV/oral c/12h (máx 3000 mg/día)',    via: 'IV/VO' },
      { indicacion: 'Inicio epilepsia (carga)',         dosis: '1000-2000 mg IV dosis única, luego mantenimiento', via: 'IV' },
      { indicacion: 'Niño 6m-18a (mantenimiento)',     dosis: '10 mg/kg c/12h (máx 30 mg/kg/día, tope 3000 mg)', via: 'IV/VO' },
    ],

    embarazo: 'Categoría C (FDA). Atraviesa placenta. Usar solo si el beneficio supera el riesgo. El status epiléptico no tratado supone mayor riesgo fetal que el fármaco. Monitorizar niveles durante embarazo (aumento de aclaramiento renal).',

    pediatria: '1-6 meses: 7 mg/kg c/12h (máx 21 mg/kg/día). 6 meses-18 años: 10 mg/kg c/12h (máx 30 mg/kg/día, tope 3000 mg/día). Estatus: 40-60 mg/kg IV en 15 min (máx 3000 mg). Usar solución oral 100 mg/mL en <4 años.',

    adultoMayor: 'Ajustar siempre por función renal. Mayor riesgo de somnolencia y caídas. Iniciar con dosis bajas (500 mg/12h) e incrementar gradualmente.',

    insufRenal: '<b>Ajuste OBLIGATORIO:</b> ClCr 50-79: máx 1000 mg/12h · ClCr 30-49: máx 750 mg/12h · ClCr <30: máx 500 mg/12h · Hemodiálisis: misma dosis + suplemento 250-500 mg post-sesión.',

    insufHepatica: 'Sin ajuste de dosis en IH leve-moderada. En IH grave: si también hay disfunción renal, reducir dosis. Sin metabolismo hepático significativo.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Keppra® 100 mg/mL solución para perfusión.',
      'Kapur J et al. Randomized Trial of Three Anticonvulsants for Status Epilepticus. NEJM. 2019 (ESETT).',
      'Chamberlain JM et al. ESTABLISHED trial. NEJM. 2020.',
      'NICE CG137. Epilepsies: diagnosis and management. Updated 2022.',
      'AAN/AES Guideline on Status Epilepticus. Neurology. 2023.',
      'Sociedad Española de Neurología (SEN). Guía oficial de práctica clínica en epilepsia. 2021.',
    ],
  },

});
