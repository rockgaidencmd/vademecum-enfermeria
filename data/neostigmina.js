/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/neostigmina.js
   Fuentes: CIMA AEMPS (Prostigmine), FDA DailyMed,
   Guideline on NMB Reversal Br J Anaesth 2020,
   SEMICYUC Sedoanalgesia UCI 2022
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'neostigmina',
  nombre:         'Neostigmina',
  nombreGenerico: 'Neostigmine Methylsulfate',
  categoria:      'otros',
  tags:           ['anticolinesterásico', 'reversión bloqueo neuromuscular', 'íleo paralítico', 'miastenia gravis', 'anestesia', 'UCI'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Anticolinesterásico potente. Produce efectos muscarínicos significativos (bradicardia, broncoespasmo, hipersecreción). Administrar SIEMPRE con atropina o glicopirrolato para contrarrestar efectos muscarínicos. Contraindicado si bloqueo neuromuscular completo (TOF 0/4) — esperar recuperación parcial.',

  nivel1: {

    puntosClave: [
      '<b>SIEMPRE junto con atropina</b> 0.5-1 mg IV (o glicopirrolato 0.2 mg por cada 1 mg de neostigmina) para evitar bradicardia grave.',
      'Solo revierte bloqueo PARCIAL — verificar TOF ≥2/4 antes de administrar. Si TOF 0/4: esperar.',
      'Reversión bloqueantes no despolarizantes (rocuronio, vecuronio, atracurio) — <b>NO revierte succinilcolina</b>.',
      'Uso adicional: <b>íleo paralítico postoperatorio/Ogilvie</b>: 2 mg IV lento en 3-5 min.',
      'Dosis de reversión: <b>0.04-0.07 mg/kg IV</b> (máx 5 mg) — inicio 5-10 min, pico 10-20 min.',
    ],

    resumenRapido: 'Inhibidor reversible de la acetilcolinesterasa. Aumenta los niveles de acetilcolina en la unión neuromuscular, desplazando competitivamente al relajante muscular no despolarizante del receptor nAChR. Efecto muscarínico concomitante (bradicardia, broncoespasmo, aumento de secreciones) requiere cobertura anticolinérgica. Indicado en reversión de bloqueo neuromuscular, miastenia gravis e íleo paralítico.',

    objetivoTerapeutico: 'Revertir bloqueo neuromuscular no despolarizante (TOF ≥ 0.9 antes de extubación) · Tratar íleo paralítico postquirúrgico o síndrome de Ogilvie · Diagnóstico y tratamiento de miastenia gravis',

    preparacion: {
      'Presentación':              '<b>Prostigmine® 0.5 mg/mL — ampolla 1 mL (0.5 mg) · 2.5 mg/mL — ampolla 1 mL (2.5 mg)</b>',
      'Diluyente':                 'SF 0.9% (puede administrarse directo IV lento)',
      'Dosis reversión adulto':    '<b>0.04-0.07 mg/kg IV (máx 5 mg en dosis única)</b>',
      'Preparación reversión':     'Diluir en 10-20 mL SF → administrar en 1-2 min',
      'ATROPINA PREVIA/SIMULTÁNEA':'<b>0.5-1 mg IV por cada 2.5 mg de neostigmina</b>',
      'Íleo paralítico (Ogilvie)': '2 mg IV en 3-5 min lento — repetir si necesario a los 3 h',
      'Miastenia gravis (diagnóstico)': '0.5-1 mg IV (test de Tensilon)',
      '⏱️ Inicio efecto':           '1-5 min IV · Pico: 10-20 min',
      '⏱️ Duración':                '30-60 min',
      'Vía':                       'IV lenta (no bolus rápido) · IM/SC (miastenia gravis crónica)',
      '🧊 Estabilidad':             '<b>Estable 24 h a temperatura ambiente en SF 0.9%</b>',
    },

    vigilancia: {
      antes: [
        'Verificar TOF (Train-of-Four) — mínimo 2/4 respuestas para administrar. Si TOF 0: esperar o usar sugammadex.',
        '<b>Preparar y administrar atropina ANTES o SIMULTÁNEAMENTE</b> — nunca neostigmina sola.',
        'Verificar temperatura corporal — hipotermia enlentece la reversión del bloqueo.',
        'Controlar dosis de relajante recibida y tiempo desde última dosis.',
        'En íleo: comprobar ausencia de obstrucción mecánica (contraindicación).',
        'Evaluar función respiratoria basal antes de extubación (si se usa para reversión).',
      ],
      durante: [
        'Monitorización cardíaca continua — vigilar bradicardia (respuesta muscarínica).',
        'Si bradicardia <50 lpm pese a atropina: repetir atropina 0.5 mg IV.',
        'Observar aumento de secreciones orales y bronquiales.',
        'SpO2 continua durante la reversión.',
        'TOF si disponible: evaluar respuesta cada 3-5 min.',
        'Vigilar broncoespasmo en pacientes asmáticos.',
      ],
      despues: [
        'Valorar fuerza muscular clínica: capacidad de levantar la cabeza 5 seg, apretón de mano.',
        'TOF ratio ≥0.9 o TOF 4/4 sin fade = reversión completa.',
        'No extubar si TOF <4/4 o ratio <0.9 (riesgo de reintubación).',
        'Vigilar recurarizacion (rebote del bloqueo) 30-60 min post-reversión — neostigmina tiene duración limitada.',
        'Documentar TOF antes y después, dosis administrada, respuesta clínica.',
      ],
      suspender: [
        'No aplicable — dosis única para reversión.',
        'En íleo: reanudar si no hay respuesta en 3 h (segunda dosis o sugammadex).',
        'Si broncoespasmo grave: salbutamol nebulizado, evaluar riesgo-beneficio.',
      ],
    },

    incompatibilidades: [
      'No mezclar con succinilcolina (inhibe su metabolismo).',
      'Precaución con betabloqueantes — potenciación de bradicardia.',
      'Atropina: compatible y necesaria — puede mezclarse en la misma jeringa.',
      'No mezclar con otros fármacos en la misma solución sin verificar compatibilidad.',
    ],

    alertasSeguridad: [
      '🔴 BRADICARDIA GRAVE si se administra sin atropina — puede causar paro sinusal.',
      '🔴 BRONCOESPASMO — precaución extrema en asma/EPOC. Tener salbutamol preparado.',
      '🔴 NO revierte succinilcolina — es ineficaz e incluso puede prolongar el bloqueo.',
      '🟠 Hypersecreción bronquial y oral — puede comprometer vía aérea.',
      '🟠 Recurarización posible (30-60 min): vigilar recuperación muscular completa antes de extubar.',
      '🟡 Crisis colinérgicas con dosis excesivas — confusión, sialorrea, bradicardia, broncospasmo.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Preparar atropina ANTES de neostigmina — nunca administrar neostigmina sola.',
      'Calcular dosis de neostigmina y la atropina correspondiente de forma simultánea.',
      'Verificar TOF con estimulador de nervio periférico si disponible — mínimo 2/4 antes de revertir.',
      'Administrar IV lentamente en 1-2 min (no bolo rápido) para reducir efectos muscarínicos.',
      'Monitorización cardíaca continua durante la reversión.',
      'Si bradicardia: repetir atropina 0.5 mg IV — tenerla preparada en la cabecera.',
      'Después de la reversión: evaluar fuerza muscular clínica (levantar cabeza 5 seg, apretar mano).',
      'No extubar si hay dudas sobre la calidad de la reversión.',
      'Vigilar durante 30-60 min post-reversión por riesgo de recurarización.',
      'En íleo paralítico: verificar ECG previo (contraindicado en broncospasmo activo u obstrucción mecánica).',
    ],

    efectosAdversos: [
      '🔴 Bradicardia grave / paro sinusal (si no hay cobertura anticolinérgica)',
      '🔴 Broncoespasmo (riesgo alto en asma/EPOC)',
      '🟠 Aumento de secreciones bronquiales y orales',
      '🟠 Náuseas, vómitos, cólicos abdominales',
      '🟠 Miosis, lagrimeo, sudoración profusa (efectos muscarínicos)',
      '🟡 Diarrea, urgencia miccional',
      '🟡 Fasciculaciones musculares a dosis altas',
    ],

    contraindicaciones: [
      'Obstrucción mecánica intestinal o urinaria (riesgo de perforación).',
      'Asma bronquial grave (broncoespasmo).',
      'Bloqueo neuromuscular completo TOF 0/4 (ineficaz — usar sugammadex).',
      'Hipertiroidismo.',
      'Bradicardia sintomática sin marcapasos.',
    ],

    fotosensibilidad: 'No relevante. Conservar ampollas a temperatura ambiente protegidas de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':   '24 horas a temperatura ambiente',
      'Aspecto':               'Solución incolora — desechar si turbidez',
      'Temperatura':           'NO congelar · 15-25°C',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras apertura — desechar sobrante.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: 'Estable 24 h a temperatura ambiente en SF 0.9%.',
      notas:             'Compatible con atropina en la misma jeringa. No mezclar con succinilcolina.',
    },

    presentaciones: [
      'Prostigmine® 0.5 mg/mL — ampolla 1 mL (0.5 mg)',
      'Prostigmine® 2.5 mg/mL — ampolla 1 mL (2.5 mg)',
      'Neostigmina Kern Pharma® — genérico',
      'Uso oral: Prostigmine® 15 mg comprimidos (miastenia gravis crónica)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Reversión bloqueo NM adulto',     dosis: '<b>0.04-0.07 mg/kg IV (máx 5 mg)</b> + atropina 0.5-1 mg', via: 'IV' },
      { indicacion: 'Reversión bloqueo NM niño',       dosis: '0.05-0.07 mg/kg IV + atropina 0.02 mg/kg',                  via: 'IV' },
      { indicacion: 'Íleo paralítico / Ogilvie',       dosis: '2 mg IV lento en 3-5 min (repetir c/3 h si precisa)',       via: 'IV' },
      { indicacion: 'Test diagnóstico miastenia',       dosis: '0.5-1 mg IV (test de Tensilon)',                             via: 'IV' },
      { indicacion: 'Miastenia gravis (mantenimiento)', dosis: '15-375 mg/día oral en 4-6 dosis',                           via: 'VO' },
    ],

    embarazo: 'Categoría C (FDA). Puede usarse si el beneficio supera el riesgo. No teratógeno conocido. Puede causar contracciones uterinas y bradicardia fetal transitoria. En miastenia gravis: continuar tratamiento bajo supervisión.',

    pediatria: 'Reversión: 0.05-0.07 mg/kg IV + atropina 0.02 mg/kg IV previa. Miastenia neonatal (transitoria): 0.1-0.3 mg/kg IM o SC. Mayor sensibilidad a efectos muscarínicos — atropina OBLIGATORIA.',

    adultoMayor: 'Mayor riesgo de bradicardia y broncoespasmo. Reducir velocidad de administración. Atropina siempre presente. Evaluación cuidadosa de la función renal para ajuste en miastenia crónica.',

    insufRenal: 'Eliminación renal del 50%. En IR grave: reducir dosis de mantenimiento. Para dosis únicas de reversión: sin ajuste. Monitorización estrecha.',

    insufHepatica: 'Sin ajuste necesario en dosis única. En tratamiento crónico de miastenia: monitorización de niveles y ajuste individualizado.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Prostigmine® (neostigmina metilsulfato).',
      'Checketts MR et al. Recommendations for standards of monitoring during anaesthesia and recovery. Anaesthesia. 2016.',
      'Naguib M et al. Consensus Statement on Perioperative Use of Neuromuscular Monitoring. Anesth Analg. 2018.',
      'Briggs ED, Bhatt DL. Neostigmine for acute colonic pseudo-obstruction. NEJM. 1999.',
      'Ortigoza-Escobar JD et al. Myasthenia gravis: clinical features and management. Neurología. 2021.',
      'Brull SJ, Naguib M. Selective Reversal of Muscle Relaxants. Anesthesiology. 2020.',
    ],
  },

});
