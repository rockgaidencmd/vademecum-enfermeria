/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/vecuronio.js
   Fuentes: CIMA AEMPS (Norcuron), FDA DailyMed,
   SEMICYUC Bloqueo Neuromuscular UCI, Cuadro Básico
   IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'vecuronio',
  nombre:         'Vecuronio',
  nombreComercial: 'Norcuron®',
  nombreGenerico: 'Vecuronium Bromide',
  categoria:      'otros',
  tags:           ['bloqueante neuromuscular', 'BNM', 'relajante muscular', 'anestesia', 'UCI', 'intubación', 'no despolarizante', 'cuadro básico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Bloqueante neuromuscular no despolarizante. Paraliza completamente al paciente — REQUIERE ventilación mecánica asegurada y sedoanalgesia adecuada. Paciente consciente bajo bloqueo neuromuscular es una situación de sufrimiento inaceptable. Eliminación hepática y renal combinada — el efecto se prolonga significativamente en insuficiencia hepática y renal.',

  nivel1: {

    puntosClave: [
      '<b>Bloqueante neuromuscular clásico del cuadro básico</b> — amplia disponibilidad y bajo costo en hospitales de América Latina.',
      'Dosis de intubación: <b>0.08-0.1 mg/kg IV</b> (inicio 2-3 min, duración 25-40 min).',
      '<b>VENTILACIÓN MECÁNICA Y SEDACIÓN PROFUNDA ASEGURADAS</b> antes de administrar — nunca sin vía aérea garantizada.',
      '<b>Eliminación hepática (principal) y renal</b> — a diferencia de cisatracurio, el efecto se prolonga significativamente en insuficiencia hepática o renal.',
      'Reversión con <b>neostigmina + atropina</b> (bloqueo parcial) o <b>sugammadex</b> si está disponible.',
    ],

    resumenRapido: 'Bloqueante neuromuscular no despolarizante de tipo aminoesteroide, de duración intermedia, ampliamente disponible en los hospitales de América Latina por su bajo costo respecto a alternativas más modernas (rocuronio, cisatracurio). Su eliminación combina metabolismo hepático (principal) y excreción renal, lo que prolonga significativamente su efecto en pacientes con insuficiencia hepática o renal, a diferencia del cisatracurio (eliminación independiente de órgano). Se emplea para facilitar la intubación orotraqueal y el mantenimiento del bloqueo neuromuscular durante cirugía o ventilación mecánica en UCI.',

    objetivoTerapeutico: 'Facilitar la intubación orotraqueal · Mantenimiento del bloqueo neuromuscular durante cirugía · Facilitar la ventilación mecánica en el paciente crítico con asincronía grave · Inmovilidad para procedimientos que la requieran',

    preparacion: {
      'Presentación':             '<b>Norcuron® 10 mg — vial polvo liofilizado + disolvente</b>',
      'Reconstitución':           'Reconstituir con 10 mL de agua para inyección o SF 0.9% → 1 mg/mL',
      'Diluyente para perfusión': 'SF 0.9% o SG 5%',
      'Concentración estándar perfusión': '<b>20 mg en 100 mL SF → 0.2 mg/mL</b>',
      'Dosis de intubación':      '<b>0.08-0.1 mg/kg IV bolo</b> (inicio 2-3 min, duración 25-40 min)',
      'Mantenimiento (bolos)':    '0.01-0.015 mg/kg IV c/12-15 min según necesidad',
      'Mantenimiento (perfusión continua UCI)': '<b>0.8-1.7 mcg/kg/min</b>, ajustar según TOF',
      'Objetivo TOF (UCI)':       'Ajustar para 1-2 twitch de 4 en indicaciones que lo requieran',
      'Vía':                      '<b>Venosa central preferente en perfusión continua</b>',
      '⏱️ Inicio efecto':          '2-3 min · Duración bolo: 25-40 min',
      '🧊 Estabilidad tras reconstituir': '<b>24 h refrigerado (2-8°C) — verificar ficha técnica del fabricante</b>',
    },

    vigilancia: {
      antes: [
        '<b>VÍA AÉREA ASEGURADA Y VENTILACIÓN MECÁNICA activa</b> — imprescindible antes de administrar.',
        'Sedoanalgesia profunda instaurada (RASS -4/-5 si uso prolongado en UCI) — nunca bloquear sin sedación adecuada.',
        'Función hepática y renal — determinan la duración esperada del efecto.',
        'TOF basal con estimulador de nervio periférico si se prevé uso prolongado.',
        'Verificar que el ventilador está configurado en modo controlado y las alarmas activas.',
      ],
      durante: [
        'TOF c/2-4 h en uso prolongado — objetivo según indicación clínica.',
        'RASS c/4 h — confirmar sedación profunda adecuada (el paciente no puede comunicarse).',
        'Vigilar pupilas — midriasis puede indicar sedación insuficiente.',
        'Vigilar taquicardia — el vecuronio tiene mínimo efecto cardiovascular directo, pero taquicardia puede indicar dolor/sedación insuficiente enmascarada por el bloqueo.',
        'Evitar alarmas de ventilador silenciadas — riesgo vital si hay desconexión.',
      ],
      despues: [
        'Suspender la perfusión y monitorizar la recuperación TOF (regreso a 4/4).',
        'Evaluar el nivel de sedación al recuperar el tono muscular.',
        'Considerar reversión con neostigmina+atropina (bloqueo parcial) o sugammadex si está disponible y el bloqueo es más profundo.',
        'Valorar la extubación progresiva: TOF 4/4, ratio >0.9, fuerza muscular clínica adecuada.',
        'Documentar TOF, dosis administrada, función hepática/renal y duración del bloqueo.',
      ],
      suspender: [
        'Mejoría clínica que ya no requiere bloqueo neuromuscular.',
        'Fallo del ventilador o pérdida de vía aérea — emergencia.',
        'Signos de bloqueo excesivamente prolongado (sospechar en insuficiencia hepática/renal no ajustada).',
        'TOF 0/4 mantenido con dosis mínimas — reducir o suspender y reevaluar.',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones alcalinas (bicarbonato, tiopental) en la misma vía — precipitación.',
      'Precaución con propofol en la misma vía sin verificar compatibilidad según protocolo institucional.',
      'Administrar por vía separada de fármacos incompatibles.',
      'Compatible con SF 0.9%, SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🔴 SIN VÍA AÉREA ASEGURADA = CONTRAINDICADO ABSOLUTO — apnea garantizada al inicio.',
      '🔴 SEDACIÓN PROFUNDA OBLIGATORIA — paciente paralizado consciente es una situación de sufrimiento inaceptable.',
      '🟠 EFECTO PROLONGADO en insuficiencia hepática o renal — a diferencia de cisatracurio, no es independiente de órgano.',
      '🟠 Miopatía del paciente crítico con uso prolongado (>48-72 h) — limitar a lo clínicamente necesario.',
      '🟡 No revierte espontáneamente rápido en disfunción hepática/renal — tener neostigmina+atropina o sugammadex disponibles.',
      '🟡 Reversión más lenta y menos predecible que con rocuronio/cisatracurio en pacientes con comorbilidad hepática/renal.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar vía aérea asegurada y ventilación mecánica activa ANTES de iniciar la administración.',
      'Verificar sedación profunda adecuada — nunca administrar sin sedoanalgesia instaurada.',
      'Monitorizar TOF con estimulador de nervio periférico en uso prolongado.',
      'Tener en cuenta la función hepática y renal del paciente — el efecto se prolonga significativamente si están alteradas.',
      'Cuidados oculares (lubricación c/4-6 h) — el parpadeo está abolido durante el bloqueo.',
      'Cambios posturales programados — riesgo de úlceras por presión al estar inmóvil.',
      'Vigilar pupilas y signos indirectos de sedación insuficiente (taquicardia, HTA) que el bloqueo puede enmascarar.',
      'Registrar dosis, TOF, función hepática/renal y escala de sedación en cada turno.',
      'Al retirar: reducir gradualmente y evaluar la recuperación TOF antes de plantear la extubación.',
    ],

    efectosAdversos: [
      '🔴 Apnea (esperada — manejo ventilatorio obligatorio)',
      '🔴 Parálisis muscular completa prolongada, especialmente en insuficiencia hepática/renal',
      '🟠 Miopatía del paciente crítico con uso prolongado (>48-72 h)',
      '🟠 Bloqueo prolongado impredecible en disfunción hepática o renal',
      '🟡 Bradicardia leve (poco frecuente)',
      '🟡 Reacción alérgica (rara)',
    ],

    contraindicaciones: [
      'Vía aérea no asegurada o ventilación mecánica no disponible (contraindicación absoluta).',
      'Hipersensibilidad al vecuronio o al bromuro.',
      'Miastenia gravis (extrema sensibilidad al bloqueo neuromuscular no despolarizante).',
      'Uso sin sedoanalgesia simultánea.',
      'Precaución extrema en insuficiencia hepática o renal grave (prolongación marcada del efecto).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar en nevera (2-8°C), proteger de la luz.',

    estabilidad: {
      'Vial sin reconstituir':  '<b>Refrigerado 2-8°C o temperatura ambiente según ficha técnica del fabricante. NO congelar.</b>',
      'Reconstituido':          '<b>24 h refrigerado (2-8°C) — verificar ficha técnica específica</b>',
      'Diluido para perfusión': '24 h a temperatura ambiente en SF 0.9% o SG 5%',
      'Aspecto':                 'Solución incolora tras reconstituir — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras reconstituir, conservando en nevera si no se usa de inmediato.',
      dosisRestante:     'Desechar sobrante de vial reconstituido no utilizado en 24 h.',
      infusionPreparada: '24 h a temperatura ambiente en SF 0.9% o SG 5% tras la dilución final.',
      notas:             'La duración del efecto es mucho más variable que con cisatracurio en pacientes con disfunción hepática/renal — ajustar dosis y vigilar estrechamente.',
    },

    presentaciones: [
      'Norcuron® 10 mg — vial polvo liofilizado + disolvente',
      'Vecuronio genérico — varios fabricantes, ampliamente disponible en cuadros básicos latinoamericanos',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Intubación (inducción)',       dosis: '<b>0.08-0.1 mg/kg IV bolo</b> (inicio 2-3 min)',        via: 'IV' },
      { indicacion: 'Mantenimiento (bolos)',          dosis: '0.01-0.015 mg/kg IV c/12-15 min según necesidad',      via: 'IV' },
      { indicacion: 'Mantenimiento en UCI (perfusión)', dosis: '<b>0.8-1.7 mcg/kg/min</b>, ajustar según TOF',        via: 'IV' },
      { indicacion: 'Reversión (neostigmina+atropina)', dosis: 'Neostigmina 0.04-0.07 mg/kg + atropina 0.5-1 mg IV', via: 'IV' },
      { indicacion: 'Reversión con sugammadex (si disponible)', dosis: '2-4 mg/kg IV según profundidad del bloqueo', via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Cruza la placenta en mínima cantidad a dosis estándar. Puede usarse en cesárea bajo anestesia general cuando esté indicado. Monitorizar al neonato por posible bloqueo residual si se usan dosis altas o repetidas cerca del parto.',

    pediatria: 'Intubación: 0.08-0.1 mg/kg IV (similar a adultos). Neonatos y lactantes pequeños: mayor sensibilidad al bloqueo — considerar dosis reducida y monitorización TOF estrecha. Uso frecuente en anestesia pediátrica por su amplia disponibilidad.',

    adultoMayor: 'El inicio de acción puede ser más lento y la duración más prolongada por reducción fisiológica de la función hepática/renal. Considerar dosis inicial reducida y monitorización TOF más frecuente.',

    insufRenal: '<b>Efecto prolongado</b> — aproximadamente el 30% de la eliminación es renal. En insuficiencia renal grave, reducir la dosis y prolongar el intervalo entre dosis, con monitorización TOF estrecha.',

    insufHepatica: '<b>Efecto significativamente prolongado</b> — la eliminación es predominantemente hepática (metabolismo y excreción biliar). En insuficiencia hepática grave, considerar cisatracurio como alternativa preferente (eliminación independiente de órgano) si está disponible.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Norcuron® (vecuronio bromuro).',
      'Murray MJ et al. Clinical Practice Guidelines for Sustained Neuromuscular Blockade in the Adult Critically Ill Patient. Crit Care Med. 2016.',
      'Brull SJ, Naguib M. Selective Reversal of Muscle Relaxants. Anesthesiology. 2020.',
      'SEMICYUC. Recomendaciones sobre el uso de bloqueantes neuromusculares en el paciente crítico. Med Intensiva.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
