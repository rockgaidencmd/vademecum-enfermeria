/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/cisatracurio.js
   Fuentes: CIMA AEMPS (Nimbex), FDA DailyMed,
   SCCM/ACCP SDRA Guidelines 2017,
   ACURASYS Trial NEJM 2010, ROSE Trial NEJM 2019
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'cisatracurio',
  nombre:         'Cisatracurio',
  nombreGenerico: 'Cisatracurium Besilate',
  categoria:      'otros',
  tags:           ['bloqueante neuromuscular', 'BNM', 'relajante muscular', 'SDRA', 'UCI', 'ventilación mecánica', 'intubación', 'no despolarizante'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Bloqueante neuromuscular no despolarizante. Paraliza completamente al paciente — REQUIERE ventilación mecánica asegurada, sedoanalgesia adecuada y monitorización TOF continua. Paciente consciente bajo bloqueo neuromuscular = tortura. Nunca administrar sin sedación profunda. No revierte espontáneamente rápido — reversión con neostigmina o sugammadex.',

  nivel1: {

    puntosClave: [
      '<b>SDRA grave</b>: infusión continua 1-3 mcg/kg/min × 48 h — mejora oxigenación y asincronía ventilatoria.',
      '<b>VENTILACIÓN MECÁNICA Y SEDACIÓN PROFUNDA ASEGURADAS</b> antes de iniciar — nunca sin vía aérea garantizada.',
      'Ventaja única: <b>eliminación por degradación de Hofmann</b> (pH y temperatura dependiente) — no depende de función renal ni hepática.',
      'Monitorizar TOF: objetivo <b>1-2 twitch de 4</b> (T1/T4 ratio <25%) para SDRA.',
      'Sin efecto cardiovascular significativo — no libera histamina (ventaja frente a atracurio).',
    ],

    resumenRapido: 'Bloqueante neuromuscular no despolarizante benzilisoquinolínico. Isómero R-cis del atracurio con mayor potencia (×3-4) y sin liberación de histamina. Eliminación por degradación espontánea de Hofmann (temperatura y pH dependiente) sin metabolismo renal ni hepático — ideal en fallo multiorgánico. Indicado en SDRA grave para facilitar la ventilación protectora y reducir asincronías, y para mantenimiento de bloqueo NM en UCI. Inicio lento (2-3 min) respecto a rocuronio — no es de primera elección para secuencia rápida de intubación.',

    objetivoTerapeutico: 'Facilitar ventilación mecánica protectora en SDRA grave · Eliminar asincronías paciente-ventilador · Mantener inmovilidad para procedimientos · Alternativa a rocuronio en IR/IH grave',

    preparacion: {
      'Presentación':             '<b>Nimbex® 2 mg/mL — ampolla 5 mL (10 mg) · 10 mL (20 mg)</b>',
      'Concentración alta':       'Nimbex® 5 mg/mL — ampolla 30 mL (150 mg) [solo UCI]',
      'Diluyente':                '<b>SF 0.9% o SG 5%</b>',
      'Concentración estándar':   '<b>20 mg en 100 mL SF → 0.2 mg/mL (200 mcg/mL)</b>',
      'Concentración alta UCI':   '100 mg en 100 mL SF → 1 mg/mL (restricción hídrica)',
      'Dosis de intubación':      '0.15-0.2 mg/kg IV bolo (inicio 2-3 min, duración 45-60 min)',
      'Mantenimiento UCI/SDRA':   '<b>0.5-10 mcg/kg/min perfusión continua</b> (habitualmente 1-3 mcg/kg/min)',
      'Objetivo SDRA':            'Ajustar para TOF 1-2/4 twitch',
      'Bomba':                    '<b>Bomba de jeringa o de infusión OBLIGATORIA</b>',
      'Vía':                      '<b>Venosa central preferente</b>',
      '⏱️ Inicio efecto':          '2-3 min (más lento que rocuronio)',
      '⏱️ Duración bolo':          '45-75 min',
      '🧊 Estabilidad':            '<b>Refrigerar 2-8°C. Diluida: 24 h a temperatura ambiente</b>',
    },

    vigilancia: {
      antes: [
        '<b>VÍA AÉREA ASEGURADA Y VENTILACIÓN MECÁNICA activa</b> — absoluto imprescindible.',
        'Sedoanalgesia profunda instaurada (Richmond RASS -4/-5) — nunca bloquear sin sedación.',
        'TOF basal con estimulador de nervio periférico.',
        'Temperatura corporal — hipotermia enlentece la degradación de Hofmann (mayor duración de efecto).',
        'pH arterial — acidosis enlentece eliminación; alcalosis la acelera.',
        'Verificar que el ventilador está configurado en modo controlado y alarmas activas.',
      ],
      durante: [
        'TOF c/2-4 h — objetivo 1-2 twitch/4 en SDRA (supresión casi total).',
        'RASS c/4 h — confirmar sedación profunda (el paciente no puede comunicarse).',
        'Vigilar pupilas — midriasis puede indicar insuficiencia de sedación.',
        'Temperatura corporal — hipotermia prolonga el bloqueo significativamente.',
        'Posición prono si protocolo SDRA — vigilar presión en puntos de apoyo.',
        'Evitar alarmas de ventilador silenciadas — riesgo vital si desconexión.',
      ],
      despues: [
        'Suspender infusión y monitorizar recuperación TOF (regreso a 4/4).',
        'Evaluar nivel de sedación al recuperar el tono muscular.',
        'Neostigmina + atropina si se desea reversión activa (TOF ≥2/4) o sugammadex (no específico para cisatracurio pero útil).',
        'Valorar extubación progresiva: TOF 4/4, ratio >0.9, fuerza muscular adecuada.',
        'Documentar TOF, dosis administrada, temperatura y duración del bloqueo.',
      ],
      suspender: [
        'Mejoría de SDRA con P/F >150 mmHg mantenida — retirada progresiva.',
        'Temperatura <34°C — puede producir bloqueo excesivamente prolongado.',
        'Fallo del ventilador o pérdida de vía aérea — emergencia.',
        'TOF 0/4 prolongado con dosis mínimas — reducir o suspender.',
        'Al completar las 48 h de protocolo SDRA — evaluar necesidad de continuar.',
      ],
    },

    incompatibilidades: [
      '<b>NO mezclar con propofol</b> — incompatibilidad física (precipitación).',
      'Incompatible con soluciones alcalinas (bicarbonato, tiopental): la degradación de Hofmann se acelera en pH alcalino.',
      'No mezclar con ketorolaco ni diazepam.',
      '<b>Administrar siempre por vía separada</b> del propofol.',
      'Compatible con SF 0.9%, SG 5%, Ringer Lactato.',
    ],

    alertasSeguridad: [
      '🔴 SIN VÍA AÉREA ASEGURADA = CONTRAINDICADO ABSOLUTO — apnea garantizada al inicio.',
      '🔴 SEDACIÓN PROFUNDA OBLIGATORIA — paciente paralizado consciente = sufrimiento severo.',
      '🔴 NO mezclar con propofol en la misma vía — precipitación inmediata.',
      '🟠 Hipotermia prolonga el bloqueo significativamente — vigilar temperatura.',
      '🟠 Miopatía del paciente crítico con uso prolongado — limitar a lo clínicamente necesario.',
      '🟡 No revierte espontáneamente rápido — tener neostigmina+atropina o sugammadex preparados.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar vía aérea asegurada y ventilación mecánica activa ANTES de iniciar la infusión.',
      'Verificar sedación profunda (RASS -4 o -5) — nunca administrar sin sedoanalgesia instaurada.',
      'Monitorizar TOF con estimulador de nervio periférico c/2-4 h — objetivo 1-2/4 en SDRA.',
      'Temperatura corporal continua — hipotermia (<36°C) prolonga el bloqueo; ajustar dosis.',
      'NUNCA mezclar con propofol en la misma vía — usar vías separadas.',
      'Vigilar pupilas: midriasis persistente puede indicar sedación insuficiente.',
      'Cuidados oculares (lubricación ocular c/4-6 h) — el parpadeo está abolido.',
      'Cambios posturales programados — riesgo de úlceras por presión al estar inmóvil.',
      'Registrar dosis, TOF, temperatura y escala de sedación en cada turno.',
      'Al retirar: reducir gradualmente y evaluar recuperación TOF antes de cambiar a modo espontáneo.',
    ],

    efectosAdversos: [
      '🔴 Apnea (esperada — manejo ventilatorio obligatorio)',
      '🔴 Parálisis muscular completa prolongada',
      '🟠 Miopatía del paciente crítico con uso prolongado (>48-72 h)',
      '🟠 Bloqueo prolongado en hipotermia o acidosis',
      '🟡 Bradicardia leve (rara — menos que con atracurio)',
      '🟡 Hipotensión leve (no libera histamina — poco frecuente)',
    ],

    contraindicaciones: [
      'Vía aérea no asegurada o ventilación mecánica no disponible (contraindicación absoluta).',
      'Hipersensibilidad a cisatracurio o atracurio.',
      'Miastenia gravis (extrema sensibilidad al bloqueo NM no despolarizante).',
      'Uso sin sedoanalgesia simultánea.',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar en nevera (2-8°C), proteger de la luz.',

    estabilidad: {
      'Ampolla sin abrir':     '<b>Refrigerada 2-8°C. NO congelar. Proteger de luz.</b>',
      'Diluida en SF 0.9%':   '<b>24 h a temperatura ambiente</b>',
      'Diluida en SG 5%':     '24 h a temperatura ambiente',
      'A temperatura ambiente': 'Estable solo 21 días sin dilución (en presentación comercial)',
      'Aspecto':               'Solución incolora a amarillo muy pálido — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h a temperatura ambiente — nevera si no se usa inmediatamente.',
      dosisRestante:     'Desechar sobrante de ampolla abierta no utilizado en 24 h.',
      infusionPreparada: '24 h a temperatura ambiente en SF 0.9% o SG 5%.',
      notas:             'NO mezclar con propofol. Incompatible con soluciones alcalinas. Degradación de Hofmann dependiente de pH y temperatura — ajustar dosis si hipotermia o alcalosis.',
    },

    presentaciones: [
      'Nimbex® 2 mg/mL — ampolla 5 mL (10 mg)',
      'Nimbex® 2 mg/mL — ampolla 10 mL (20 mg)',
      'Nimbex® 5 mg/mL — ampolla 30 mL (150 mg) [uso UCI exclusivo]',
      'Cisatracurio Accord® / Braun® — genéricos',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Intubación (inducción)',          dosis: '0.15-0.2 mg/kg IV bolo (inicio 2-3 min)',               via: 'IV' },
      { indicacion: 'Mantenimiento en UCI/SDRA',       dosis: '<b>0.5-10 mcg/kg/min perfusión</b> (objetivo TOF 1-2/4)', via: 'IV' },
      { indicacion: 'SDRA grave (protocolo)',           dosis: '1-3 mcg/kg/min × 48 h',                                 via: 'IV' },
      { indicacion: 'Bolos de mantenimiento',           dosis: '0.03 mg/kg IV c/20 min según TOF',                     via: 'IV' },
      { indicacion: 'Reversión (neostigmina + atropina)', dosis: 'Neostigmina 0.04-0.07 mg/kg + atropina 0.5-1 mg IV', via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Uso en cirugía obstétrica: cruce placentario mínimo a dosis estándar. En cesárea urgente puede usarse para mantenimiento. Preferir rocuronio para intubación de secuencia rápida en embarazada. Si se usa: monitorizar al neonato por bloqueo residual.',

    pediatria: 'Intubación: 0.1-0.2 mg/kg IV. Mantenimiento: 1-3 mcg/kg/min (similar adulto). Ventaja especial en neonatos y lactantes con IR/IH por eliminación de Hofmann. Mayor sensibilidad al bloqueo en neonatos prematuros — comenzar con dosis bajas. TOF obligatorio.',

    adultoMayor: 'Sin ajuste de dosis por edad. La eliminación de Hofmann es independiente de la función renal y hepática — ventaja en polimédicos y con comorbilidades. Mayor riesgo de hipotermia — vigilar temperatura. Recuperación más lenta si temperatura corporal baja.',

    insufRenal: '<b>SIN ajuste de dosis</b> — eliminación por degradación de Hofmann, independiente de función renal. Ventaja mayor frente a rocuronio o vecuronio en IR grave o anuria. Ideal en paciente en TRRC.',

    insufHepatica: '<b>SIN ajuste de dosis</b> — eliminación por degradación de Hofmann, independiente de función hepática. Primera elección de BNM en insuficiencia hepática grave y trasplante hepático.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Nimbex® (cisatracurio).',
      'Papazian L et al. Neuromuscular blockers in early acute respiratory distress syndrome. NEJM. 2010 (ACURASYS).',
      'The ROSE Trial Investigators. Early neuromuscular blockade in the acute respiratory distress syndrome. NEJM. 2019.',
      'Murray MJ et al. Clinical Practice Guidelines for Sustained Neuromuscular Blockade in the Adult Critically Ill Patient. Crit Care Med. 2016.',
      'Brull SJ, Naguib M. Selective Reversal of Muscle Relaxants. Anesthesiology. 2020.',
      'Lagneau F et al. Cisatracurium in intensive care — pharmacological and clinical aspects. Ann Fr Anesth Reanim. 2002.',
    ],
  },

});
