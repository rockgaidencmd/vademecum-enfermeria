/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/tiamina.js
   Fuentes: CIMA AEMPS (Benerva), FDA DailyMed,
   European Federation of Neurological Societies 2010,
   SEMICYUC Encefalopatía Wernicke 2021
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'tiamina',
  nombre:         'Tiamina (Vitamina B1)',
  nombreGenerico: 'Thiamine Hydrochloride',
  categoria:      'otros',
  tags:           ['vitamina B1', 'Wernicke', 'encefalopatía alcohólica', 'déficit tiamina', 'neuroprotección', 'alcohólicos', 'UCI'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Síndrome de Wernicke: emergencia neurológica</b> — dar tiamina ANTES de cualquier suero glucosado. La glucosa sin tiamina puede precipitar/agravar la encefalopatía.',
      'Dosis Wernicke: <b>500 mg IV c/8 h × 3 días</b>, en 100 mL SF en 30 min. Luego 250 mg/día × 5 días.',
      'Tríada clásica Wernicke: <b>confusión + oftalmoplejía + ataxia</b> — solo presente en ~16% de los casos; tratar ante sospecha.',
      '<b>Administrar antes de glucosa</b> en alcohólicos o desnutridos con alteración del nivel de consciencia.',
      'Profilaxis en alcohólicos hospitalizados o nutrición parenteral: <b>100-200 mg/día IV</b>.',
    ],

    resumenRapido: 'Vitamina hidrosoluble del grupo B esencial para el metabolismo energético neuronal (coenzima en el ciclo de Krebs). Su déficit causa síndrome de Wernicke-Korsakoff y polineuropatía periférica. Imprescindible en alcohólicos, estados de malnutrición, vómitos persistentes y nutrición parenteral. Administrar ANTES que la glucosa en cualquier paciente con riesgo de déficit: la glucosa aumenta la demanda de tiamina y puede precipitar la encefalopatía de Wernicke.',

    objetivoTerapeutico: 'Tratar y prevenir encefalopatía de Wernicke · Reposición en déficit por alcoholismo o malnutrición · Neuroprotección en alcohólicos antes de administrar glucosa · Profilaxis en nutrición parenteral',

    preparacion: {
      'Presentación IV':        '<b>Benerva® 100 mg/mL — ampolla 2 mL (200 mg)</b>',
      'Diluyente':              '<b>SF 0.9% o SG 5% (100 mL)</b>',
      'Dosis Wernicke (tratamiento)': '<b>500 mg IV c/8 h × 3 días → 250 mg/día × 5 días</b>',
      'Dilución Wernicke':      '500 mg en 100 mL SF — infundir en 30 min',
      'Profilaxis/déficit leve': '100-300 mg IV c/8-24 h',
      'Antes de glucosa (urgencias)': '<b>200-500 mg IV ANTES de cualquier suero glucosado</b>',
      'Vía oral mantenimiento': '100-300 mg/día VO en 1-3 tomas',
      '⏱️ Inicio efecto':        'Mejoría de oftalmoplejía en 6-12 h · Confusión mejora en días',
      'Vía':                    'IV lenta (preferible) · IM · Oral (mantenimiento)',
      '⏱️ Velocidad infusión':   'Mínimo 30 min — no infundir en bolo rápido (riesgo reacción)',
      '🧊 Estabilidad':          '<b>24 h a temperatura ambiente en SF 0.9%</b>',
    },

    vigilancia: {
      antes: [
        'Verificar si el paciente está en ayunas, tiene alcoholismo crónico o ha tenido vómitos prolongados.',
        '<b>REGLA CLAVE: tiamina ANTES de glucosa</b> en todo paciente alcohólico o con malnutrición grave.',
        'Tríada Wernicke: confusión, oftalmoplejía, ataxia — ante cualquier elemento, tratar empíricamente.',
        'Descartar hipoglucemia simultánea (frecuente en alcohólicos) — tiamina primero, luego glucosa.',
        'Revisar si hay alergia previa a tiamina (rara — posible anafilaxia con IV rápido).',
      ],
      durante: [
        'Vigilar reacción de hipersensibilidad con la infusión IV: rubor, prurito, hipotensión (rara).',
        'Evaluar respuesta neurológica: mejoría de oftalmoplejía (primer signo de respuesta), confusión.',
        'Constantes vitales durante los primeros 15-30 min de la primera infusión.',
        'Registro de diuresis si se usa junto con fluidoterapia en alcohólicos.',
      ],
      despues: [
        'Reevaluar estado neurológico a las 24 y 72 h del inicio.',
        'Síndrome de Korsakoff (amnesia retrógrada/anterógrada): puede persistir pese al tratamiento — documentar.',
        'Transición a vía oral cuando sea posible (mantenimiento 100-300 mg/día).',
        'Evaluar y tratar otros déficits vitamínicos: B12, folato, vitamina C (frecuentes en alcohólicos).',
        'Documentar dosis, vía y respuesta clínica.',
      ],
      suspender: [
        'No aplicable como tal — ajustar a pauta de mantenimiento oral.',
        'Si reacción alérgica grave: suspender y tratar.',
        'Al completar pauta IV (3+5 días) → continuar oral.',
      ],
    },

    incompatibilidades: [
      '<b>Incompatible con soluciones alcalinas</b> (bicarbonato, pH >7) — degradación.',
      'No mezclar con vitaminas B2 y B12 en la misma jeringa (pueden interaccionar).',
      'Compatible con SF 0.9% y SG 5%.',
      'No mezclar con sulfitos (preservantes comunes en fármacos IV) — degradación de la tiamina.',
      'Lavar vía con SF antes de administrar.',
    ],

    alertasSeguridad: [
      '🔴 GLUCOSA ANTES QUE TIAMINA = RIESGO DE WERNICKE — en alcohólicos/desnutridos: TIAMINA PRIMERO.',
      '🟠 Reacción anafilactoide con infusión IV rápida — infundir siempre en mínimo 30 min.',
      '🟠 Diagnóstico de Wernicke clínico — no esperar niveles de laboratorio para tratar.',
      '🟠 La tríada completa solo aparece en el 16% — ante sospecha, tratar empíricamente con dosis alta.',
      '🟡 Déficit silente frecuente en alcohólicos, embarazadas con hiperemesis, cirugía bariátrica.',
      '🟡 Compatible con vitamina C IV (frecuentemente coadministrada en alcohólicos).',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'En alcohólicos con alteración del nivel de consciencia: administrar tiamina ANTES de cualquier suero glucosado.',
      'Diluir 500 mg en 100 mL SF e infundir en 30 min mínimo — nunca en bolo rápido.',
      'Primera infusión IV: vigilar durante los primeros 15-30 min por riesgo de reacción (rara pero posible).',
      'Documentar estado neurológico basal: nivel de consciencia, motilidad ocular, marcha/ataxia.',
      'Reevaluar motilidad ocular a las 6-12 h de inicio — primera señal de respuesta a tratamiento.',
      'En nutrición parenteral total: asegurarse de que la mezcla incluye vitaminas del grupo B (tiamina incluida).',
      'Recordar déficits asociados en alcohólicos: magnesio, fósforo, potasio, zinc — solicitar analítica completa.',
      'Transición a oral (100-300 mg/día) tan pronto como sea posible.',
      'Evitar almacenamiento con luz directa — la tiamina se degrada con la luz.',
      'Documentar la secuencia de administración: tiamina → glucosa (nunca al revés en paciente de riesgo).',
    ],

    efectosAdversos: [
      '🟠 Reacción anafilactoide con infusión IV rápida (rubor, prurito, hipotensión — rara)',
      '🟡 Náuseas leves con administración IM (dolor en lugar de inyección)',
      '🟡 Prurito o eritema localizados con dosis altas IV',
      '🟡 Hipersensibilidad (muy rara con uso oral)',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a tiamina (muy rara).',
      'No hay contraindicaciones absolutas relevantes para el uso clínico habitual.',
      'Precaución en administración IV rápida (reacción anafilactoide).',
    ],

    fotosensibilidad: 'La tiamina se degrada con la luz — proteger las ampollas y las soluciones diluidas de la exposición directa a la luz. No relevante clínicamente para el paciente.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento. Proteger de luz.',
      'Diluida en SF 0.9%':   '<b>24 h a temperatura ambiente protegida de luz</b>',
      'Diluida en SG 5%':     '24 h a temperatura ambiente',
      'Aspecto':               'Solución incolora a amarillo pálido — normal',
      'Temperatura':           '15-25°C · NO congelar',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% a temperatura ambiente protegida de luz directa.',
      notas:             'Incompatible con soluciones alcalinas (pH >7) y sulfitos. Compatible con SG 5% y SF. Dar SIEMPRE antes de glucosa en pacientes en riesgo.',
    },

    presentaciones: [
      'Benerva® 100 mg/mL — ampolla 2 mL (200 mg)',
      'Tiamina Braun® 100 mg/mL — ampolla 2 mL',
      'Vitamina B1 Kern® — comprimidos 300 mg (oral)',
      'Polivitamínicos IV (Cernevit®, Soluvit®) — contienen tiamina para NP',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Wernicke agudo (tratamiento)',          dosis: '<b>500 mg IV c/8 h × 3 días</b> en 100 mL SF/30 min', via: 'IV' },
      { indicacion: 'Wernicke agudo (continuación)',          dosis: '250 mg IV c/24 h × 5 días adicionales',              via: 'IV' },
      { indicacion: 'Antes de glucosa (profilaxis urgente)',  dosis: '<b>200-500 mg IV antes de cualquier glucosa</b>',     via: 'IV' },
      { indicacion: 'Profilaxis hospitalización alcohólicos', dosis: '100-300 mg IV/IM c/8-24 h',                          via: 'IV/IM' },
      { indicacion: 'Mantenimiento oral',                     dosis: '100-300 mg/día VO en 1-3 tomas',                     via: 'VO' },
    ],

    embarazo: 'Categoría A (FDA). Segura en embarazo. Requerimientos aumentados en embarazo (1.4 mg/día). Imprescindible en hiperemesis gravídica para prevenir Wernicke. Dosis terapéuticas en hiperemesis: 100-200 mg IV c/8-12 h.',

    pediatria: 'Déficit pediátrico (raro en países desarrollados): lactantes con leche de fórmula sin enriquecer. Neonatal: 10-25 mg IV/IM. Niños >1 año: 10-25 mg/día. Wernicke pediátrico (ej. cáncer con nutrición parenteral): 50-100 mg IV c/8 h. Relativamente segura en pediatría.',

    adultoMayor: 'Mayor riesgo de déficit por malnutrición, alcoholismo y polifarmacia. Dosis igual que adulto. Vigilar interacciones con diuréticos (aumentan pérdidas de tiamina urinaria). Profilaxis recomendada en hospitalizados con riesgo.',

    insufRenal: 'Sin ajuste de dosis. Diálisis puede eliminar tiamina — suplementar de forma sistemática en pacientes en HD o TRRC prolongada (incluir en vitaminas IV o suplementar por separado).',

    insufHepatica: 'Sin ajuste de dosis. La cirrosis altera el almacenamiento hepático de tiamina — las dosis habituales son adecuadas pero el déficit es más frecuente y grave. Suplementar de forma liberal.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Benerva® (tiamina).',
      'Latt N, Dore G. Thiamine in the treatment of Wernicke encephalopathy in patients with alcohol use disorders. Intern Med J. 2014.',
      'Galvin R et al. EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. Eur J Neurol. 2010.',
      'Polegato BF et al. Role of Thiamine in Health and Disease. Nutr Clin Pract. 2019.',
      'Day E, Bentham PW, Callaghan R, Kuruvilla T, George S. Thiamine for prevention and treatment of Wernicke-Korsakoff Syndrome. Cochrane Database. 2013.',
      'Royal College of Physicians. Alcohol Use Disorders: Diagnosis and Clinical Management of Alcohol-Related Physical Complications. NICE CG100. 2010.',
    ],
  },

});
