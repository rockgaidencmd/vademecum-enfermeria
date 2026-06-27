/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/fenitoina.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'fenitoina',
  nombre:         'Fenitoína',
  nombreGenerico: 'Phenytoin Sodium',
  categoria:      'antiarritmicos',
  tags:           ['UCI', 'anticonvulsivante', 'convulsiones', 'arritmias post-op', 'nivel sérico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Anticonvulsivante potente. Extravasación causa necrosis tisular grave. Requiere monitorización de niveles séricos terapéuticos. Muchas interacciones medicamentosas.',

  nivel1: {

    puntosClave: [
      'Anticonvulsivante hidantoína — estabiliza membrana neuronal bloqueando canales Na+.',
      'Administración lenta OBLIGATORIA: máximo 50 mg/min IV — bolo rápido causa arritmias, hipotensión.',
      'Solo diluyente: SF 0.9% (NUNCA dextosa) — precipita en SG 5%.',
      'Extravasación = EMERGENCIA — causa necrosis tisular severa, requiere hialuronidasa.',
      'Monitorizar nivel sérico (terapéutico 10-20 mcg/mL) — farmacocinética no lineal.',
      'Síndrome de Dilantin: reacciones alérgicas exfoliativas — vigilancia de rash.',
    ],

    resumenRapido: 'Anticonvulsivante de clase I (antiarrítmico). Bloquea canales Na+ estabilizando umbral excitabilidad neuronal. Indicado en convulsiones, status epilepticus, arritmias post-operatorias, traumatismo craneoencefálico. Inicio: 30-60 min IV, pico sérico: 4-12h, vida media: 22h (varía individualmente).',

    objetivoTerapeutico: 'Prevenir/controlar convulsiones · Antiarritmia post-quirúrgica · Nivel sérico terapéutico 10-20 mcg/mL · Prevenir status epilepticus',

    preparacion: {
      'Presentación':             '250 mg/5 mL solución inyectable (50 mg/mL)',
      'Diluyente':                '<b>SOLO SF 0.9% (OBLIGATORIO)</b> — NO SG 5% (precipita)',
      'Dilución estándar':        '250 mg en 50 mL SF → 5 mg/mL',
      'Vía':                      'IV infusión lenta OBLIGATORIA',
      '⏱️ VELOCIDAD MÁXIMA':      '<b>50 mg/min máximo</b> — idealmente 25-30 mg/min',
      'Ejemplo dosis':            '250 mg = 5 minutos mínimo (50 mg/min) a 10 minutos (25 mg/min preferido)',
      'Bomba':                    'Bomba de infusión recomendada para precisión',
      'Acceso':                   'Preferir vena de buen calibre · VIGILANCIA extravasación crítica',
      '🧊 Estabilidad':           '<b>Usar INMEDIATAMENTE tras preparación (máximo 1-2h)</b> — degradación rápida',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez o precipitado',
    },

    vigilancia: {
      antes: [
        'Verificar nivel sérico basal si disponible.',
        'Comprobar glucosa basal (fenitoína ↑ glucosa).',
        'Revisar medicamentos concomitantes — muchas interacciones.',
        'Evaluar rash existente (riesgo síndrome de Dilantin).',
        'Acceso IV de buen calibre, verificar permeabilidad.',
        'Doble verificación: dosis, dilución, velocidad infusión, diluyente SF.',
      ],
      durante: [
        'Monitorizar PA y FC cada 5-10 min durante infusión — hipotensión/bradicardia posibles.',
        'ECG si disponible — vigilar QT, arritmias.',
        'Vigilancia ESTRECHA del sitio IV — extravasación = necrosis tisular.',
        'Mantener velocidad ≤ 50 mg/min — CRÍTICO.',
        'Si hipotensión: reducir velocidad, comunicar médico.',
        'Si extravasación sospechada: DETENER infusión, ver módulo extravasación.',
      ],
      despues: [
        'Verificar nivel sérico 4-12h post-dosis (pico) — rango terapéutico 10-20 mcg/mL.',
        'Monitorizar glucosa si diabético (fenitoína ↑ glucosa).',
        'Vigilar rash, reacciones alérgicas en próximas 24-72h.',
        'Revisar interacciones medicamentosas — muchos fármacos afectan niveles de fenitoína.',
        'Documentar: dosis, hora, nivel sérico, PA, FC, sitio IV.',
      ],
      suspender: [
        'PAS < 90 mmHg refractaria a fluidos (hipotensión severa).',
        'Bradcar dia severa (FC < 40 lpm).',
        'Extravasación confirmada.',
        'Reacción alérgica severa / síndrome de Dilantin exfoliativo.',
        'Prescripción médica de suspensión.',
      ],
    },

    incompatibilidades: [
      'SG 5% — PRECIPITA completamente, NUNCA usar.',
      'Ácido láctico, vitaminas B complejas — precipitación.',
      'Clorpromazina, otros antipsicóticos — incompatibilidad.',
      'Soluciones ácidas/alcalinas extremas.',
      'Morfina, metadona — incompatibilidad documentada.',
      'Consultar tabla de compatibilidad exhaustiva antes de cada medicamento concomitante.',
    ],

    alertasSeguridad: [
      '🔴 NUNCA diluir en SG 5% — precipita inmediatamente.',
      '🔴 Extravasación causa NECROSIS TISULAR GRAVE — vigilancia crítica del sitio IV.',
      '🔴 Velocidad máxima 50 mg/min es OBLIGATORIA — superar causa arritmias, hipotensión severa.',
      '🟠 Síndrome de Dilantin: reacciones alérgicas exfoliativas (rash, fiebre, linfadenopatía).',
      '🟠 Hiperglucemia posible — monitorizar glucosa.',
      '🟡 Farmacocinética no lineal — niveles séricos críticos para dosificación.',
      '🟡 Múltiples interacciones medicamentosas — revisar cada medicamento nuevo.',
    ],
  },

  modulos: {

    extravasacion: `
      <b>Extravasación de fenitoína — EMERGENCIA TISULAR:</b><br/>
      La fenitoína es necrosante — causa necrosis, ulceración, cicatrización severa.<br/><br/>
      <b>Acción inmediata:</b><br/>
      1. DETENER infusión inmediatamente.<br/>
      2. NO retirar catéter — aspirar máximo posible del fármaco extravasado.<br/>
      3. Elevar miembro afectado.<br/>
      4. Aplicar compresas FRÍAS (NO calientes).<br/>
      5. Inyectar hialuronidasa 150 UI en la zona de extravasación (si disponible y prescrita).<br/>
      6. Notificar al médico inmediatamente.<br/>
      7. Considerar cirugía plástica si extenso.<br/>
      8. Vigilar área cada hora durante 48h — evolución de necrosis.
    `,

    cardio: `
      <b>Monitorización cardiovascular:</b><br/>
      • PA cada 5-10 min durante infusión — hipotensión frecuente.<br/>
      • FC cada 5-10 min — bradicardia posible.<br/>
      • ECG si disponible — vigilar QT, arritmias durante infusión.<br/>
      • Si arritmias o PAS < 90: reducir velocidad infusión.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Etiquetar línea IV con: Fenitoína 250 mg, diluyente SF OBLIGATORIO, velocidad máxima (50 mg/min), hora inicio.',
      'Bomba de infusión volumétrica — programar en mg/min (máximo 50 mg/min).',
      'Acceso IV de buen calibre (18-20G preferido) — vena central si posible.',
      'Vigilancia CONTINUA del sitio IV durante infusión — detectar extravasación temprano.',
      'Cambiar sistema IV cada 48-72h según protocolo.',
      'Monitorizar PA, FC c/5-10 min durante infusión.',
      'Mantener velocidad exacta — NO exceder 50 mg/min.',
      'En caso de extravasación: ver módulo extravasación, notificar médico URGENTEMENTE.',
      'Verificar nivel sérico 4-12h post-dosis — comunicar resultados al médico.',
      'En diabéticos: monitorizar glucosa c/4-6h (fenitoína ↑ glucosa).',
    ],

    efectosAdversos: [
      '🔴 Necrosis tisular por extravasación',
      '🔴 Síndrome de Dilantin — reacciones alérgicas exfoliativas (rash, fiebre, linfadenopatía, hepatitis)',
      '🟠 Hipotensión severa — especialmente con infusión rápida',
      '🟠 Bradicardia severa',
      '🟠 Arritmias cardíacas',
      '🟡 Hiperglucemia — especialmente en diabéticos',
      '🟡 Ataxia, nistagmo, confusión si niveles > 20 mcg/mL',
      '🟡 Neuropatía periférica — con uso crónico',
      '🟡 Hiperplasia gingival — con uso prolongado',
      '🟡 Osteomalacia — metabolismo óseo alterado',
    ],

    contraindicaciones: [
      'Síndrome de Dilantin previo (alergia exfoliativa).',
      'Bloqueo AV de 2º o 3º grado.',
      'Hipersensibilidad a hidantoínas.',
      'Bradicardia severa (< 50 lpm).',
      'Hipotensión severa no tratada.',
    ],

    fotosensibilidad: 'No significativa. Proteger de luz extrema durante almacenamiento pero sin requerimientos especiales de envase opaco.',

    estabilidad: {
      'Ampolla sin abrir':      'Temperatura ambiente hasta vencimiento',
      'Preparado en SF':        '<b>Usar INMEDIATAMENTE o máximo 1-2h</b> — degradación rápida',
      'Temperatura':            'NO congelar · Mantener 15-25°C',
      'Aspecto':                'Transparente, incolora — desechar si turbidez o precipitado',
    },

    presentaciones: [
      'Fenitoína 250 mg/5 mL solución inyectable — ampolla 5 mL',
      'Fenitoína 100 mg comprimidos (uso VO)',
      'Fenitoína 50 mg/mL suspensión oral',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis de carga (convulsión)',       dosis: '15-20 mg/kg IV (típico 1000-1500 mg)', via: 'IV' },
      { indicacion: 'Velocidad máxima',                  dosis: '50 mg/min',                          via: 'IV' },
      { indicacion: 'Dosis de mantenimiento',            dosis: '5-7 mg/kg/día VO (dividido)',        via: 'VO' },
      { indicacion: 'Objetivo nivel sérico',             dosis: '10-20 mcg/mL',                       via: 'monitoreo' },
      { indicacion: 'Nivel tóxico',                      dosis: '> 20-30 mcg/mL',                     via: 'alerta' },
    ],

    embarazo: 'Categoría D (FDA) — teratogénico (síndrome fetal hidantoína: malformaciones cardíacas, faciales, desarrollo retrasado). Usar SOLO si beneficio >> riesgo. Considerarse lamotrigina o levetiracetam. Vigilancia fetal estricta.',

    pediatria: 'Dosis: 15-20 mg/kg carga, luego 5-7 mg/kg/día mantenimiento dividido. Calcular exactamente. Farmacocinética distinta en niños. Monitorizar nivel sérico intensivamente.',

    adultoMayor: 'Mayor sensibilidad a hipotensión, bradicardia, confusión. Velocidad infusión más lenta si posible (25-30 mg/min). Monitorización PA/FC intensiva. Menor clearance — niveles ↑.',

    insufRenal: 'Sin ajuste dosis por excreción renal mínima (metabolismo hepático). Sin embargo, vigilancia de hipotensión y bradicardia intensiva. En IRA: riesgo acumulación tóxica.',

    insufHepatica: 'Metabolismo principalmente hepático — en cirrosis: reducir dosis 20-30%. Riesgo toxicidad ↑ por acumulación. Niveles séricos más lábiles.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Phenytoin Sodium Injection. U.S. National Library of Medicine.',
      'CIMA AEMPS. Ficha Técnica Fenitoína. Agencia Española de Medicamentos.',
      'AES (American Epilepsy Society). Phenytoin Guidelines. 2020.',
      'Micromedex Solutions. Phenytoin (Injectable). Accessed 2024.',
      'Prospecto Fenitoína — Laboratorios varios.',
    ],
  },

});
