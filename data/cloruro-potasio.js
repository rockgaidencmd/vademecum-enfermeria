/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/cloruro-potasio.js
   Fuentes: DailyMed/FDA, ISMP, ASHP, Micromedex,
   Lexicomp, Guías SEMICYUC, OPS/OMS
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'cloruro-potasio',
  nombre:         'Cloruro de Potasio',
  nombreGenerico: 'Potassium Chloride — KCl',
  categoria:      'electrolitos',
  tags:           ['UCI', 'electrolito', 'hipopotasemia', 'alto riesgo', 'paro cardíaco', 'crítico'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Medicamento de MÁXIMO riesgo ISMP. La administración en bolo directo IV o sin diluir CAUSA PARO CARDÍACO INMEDIATO. Requiere triple verificación, dilución obligatoria y velocidad máxima estricta.',

  /* ═══════════════════════════════════════════
     NIVEL 1 — VISTA RÁPIDA
  ═══════════════════════════════════════════ */
  nivel1: {

    puntosClave: [
      '🛑 NUNCA administrar KCl concentrado (sin diluir) por vía IV — causa paro cardíaco inmediato.',
      'Velocidad máxima IV periférica: 10 mEq/h · Velocidad máxima IV central: 20 mEq/h (con monitorización cardíaca continua).',
      'Concentración máxima vía periférica: 40 mEq/L (0.04 mEq/mL) para evitar dolor y flebitis.',
      'Monitorizar ECG continuo cuando la velocidad supere 10 mEq/h o en pacientes con riesgo cardíaco.',
      'Controlar potasio sérico antes de iniciar, a las 2–4h de la infusión y al finalizar la reposición.',
    ],

    resumenRapido: 'Electrolito esencial para la función cardíaca, neuromuscular y ácido-base. Indicado en hipopotasemia (K⁺ < 3.5 mEq/L). La hipopotasemia grave (< 2.5 mEq/L) puede causar arritmias letales, debilidad muscular severa y paro respiratorio. La reposición debe ser controlada y monitoreada estrictamente.',

    objetivoTerapeutico: 'Corregir hipopotasemia · Mantener K⁺ sérico 3.5–5.0 mEq/L · Prevenir arritmias por hipopotasemia · Soporte en CAD y alcalosis metabólica',

    preparacion: {
      'Presentación':           'Ampolla 10 mEq/10 mL (1 mEq/mL) · Ampolla 20 mEq/10 mL (2 mEq/mL)',
      '⚠ NUNCA sin diluir':    'La solución concentrada NUNCA se administra directamente — dilución obligatoria',
      'Diluyente':              'SF 0.9% (preferido) · SG 5% (en casos específicos)',
      'Conc. máx. periférica':  '<b>40 mEq/L</b> (0.04 mEq/mL) → 20 mEq en 500 mL SF',
      'Conc. máx. central':     '<b>100–150 mEq/L</b> con monitorización cardíaca continua',
      'Ejemplo periférico':     '20 mEq (2 ampollas 10 mEq) en 500 mL SF → 40 mEq/L',
      'Ejemplo central':        '40 mEq en 400 mL SF → 100 mEq/L (solo UCI con ECG continuo)',
      'Velocidad máx. periférica': '<b>10 mEq/h</b> — no superar',
      'Velocidad máx. central': '<b>20 mEq/h</b> con ECG continuo — casos graves',
      'Velocidad normal':       '5–10 mEq/h como estándar seguro',
      'Bomba':                  'Bomba de infusión volumétrica — OBLIGATORIA siempre',
      'Mezcla':                 'Invertir la bolsa varias veces tras agregar el KCl — evitar capas concentradas',
    },

    vigilancia: {
      antes: [
        'Verificar potasio sérico — no iniciar sin resultado de laboratorio.',
        'Revisar función renal (creatinina) — la insuficiencia renal aumenta riesgo de hiperpotasemia.',
        'Confirmar diuresis adecuada (> 0.5 mL/kg/h) — no reponer potasio en oliguria sin indicación médica explícita.',
        'Evaluar ECG basal si K⁺ < 3.0 mEq/L o paciente con cardiopatía.',
        'Triple verificación: dosis total en mEq, concentración final, velocidad de infusión.',
        'Confirmar que la bolsa está correctamente mezclada (no hay capas de KCl concentrado).',
        'Verificar acceso venoso: calibre adecuado, permeabilidad, sin signos de flebitis.',
      ],
      durante: [
        'ECG continuo si velocidad > 10 mEq/h o paciente con cardiopatía.',
        'Controlar potasio sérico cada 2–4 horas durante reposición aguda.',
        'Vigilar signos de hiperpotasemia por sobredosis: bradicardia, alteraciones ECG (ondas T picudas, ensanchamiento QRS).',
        'Monitorizar dolor y ardor en el sitio de infusión — KCl es irritante venoso.',
        'Verificar diuresis horaria — la oliguria aumenta riesgo de hiperpotasemia.',
        'Si aparece dolor intenso en la vena: reducir velocidad o cambiar a vía central.',
        'Registrar cada control de potasio con hora y velocidad de infusión en ese momento.',
      ],
      despues: [
        'Controlar potasio sérico 1–2 horas después de finalizar la reposición.',
        'Evaluar ECG post-reposición si hubo alteraciones iniciales.',
        'Documentar dosis total administrada, tiempo, vía y potasio final.',
        'Valorar causa de la hipopotasemia para tratamiento etiológico.',
        'Iniciar suplementación oral si el paciente tolera vía oral y el cuadro lo permite.',
      ],
      suspender: [
        'Potasio sérico ≥ 5.0 mEq/L — hiperpotasemia.',
        'Oliguria severa (< 20 mL/h) sin indicación médica de continuar.',
        'Cambios en ECG sugestivos de hiperpotasemia: ondas T picudas, ensanchamiento QRS, bloqueos.',
        'Bradicardia severa (FC < 50 lpm) durante la infusión.',
        'Extravasación — el KCl es necrotizante en tejidos.',
        'Prescripción médica de suspensión o ajuste.',
      ],
    },

    incompatibilidades: [
      'Anfotericina B — precipitación, incompatibilidad física.',
      'Diazepam — incompatibilidad documentada.',
      'Fenitoína — precipitación en soluciones con KCl.',
      'Bicarbonato de sodio — incompatibilidad, puede causar precipitación de carbonato de potasio.',
      'Mannitol — incompatibilidad en mezclas concentradas.',
      'No mezclar en la misma solución con medicamentos sin verificar compatibilidad — consultar tabla institucional.',
      'Compatible con: SF 0.9%, SG 5%, solución de Ringer lactato (en concentraciones bajas).',
    ],

    alertasSeguridad: [
      '🛑 El KCl concentrado sin diluir es uno de los medicamentos más frecuentemente implicados en muertes por error de medicación (ISMP).',
      'Muchas instituciones tienen PROHIBIDO almacenar KCl concentrado fuera de la farmacia o UCI.',
      'NUNCA administrar KCl IV en bolo directo — ni en emergencias. Siempre diluido y en infusión controlada.',
      'La vía intramuscular o subcutánea está CONTRAINDICADA — causa necrosis tisular grave.',
      'En pacientes digitalizados: la hipopotasemia potencia la toxicidad digitálica — monitorización especial.',
      'Verificar SIEMPRE la concentración de la ampolla antes de calcular el volumen a extraer.',
    ],
  },

  /* ═══════════════════════════════════════════
     MÓDULOS DINÁMICOS
  ═══════════════════════════════════════════ */
  modulos: {

    cardio: `
      <b>Monitorización cardíaca obligatoria:</b><br/><br/>
      <b>ECG continuo requerido cuando:</b><br/>
      • Velocidad de infusión > 10 mEq/h.<br/>
      • K⁺ basal < 2.5 mEq/L (hipopotasemia grave).<br/>
      • Paciente con cardiopatía previa, arritmias o en tratamiento con digoxina.<br/>
      • Infusión por vía central a concentraciones > 40 mEq/L.<br/><br/>
      <b>Signos ECG de hipopotasemia:</b><br/>
      • Aplanamiento o inversión de onda T · Aparición de onda U prominente · Depresión ST · QT prolongado.<br/><br/>
      <b>Signos ECG de hiperpotasemia (sobredosis):</b><br/>
      • Ondas T picudas y simétricas · Ensanchamiento del QRS · Bloqueo AV · Fibrilación ventricular.<br/><br/>
      <b>Ante cualquier cambio ECG durante la infusión: detener y notificar al médico de inmediato.</b>
    `,

    extravasacion: `
      <b>Extravasación de KCl — EMERGENCIA:</b><br/>
      El cloruro de potasio es altamente irritante y puede causar necrosis tisular grave.<br/><br/>
      <b>Manejo inmediato:</b><br/>
      1. Detener la infusión de inmediato.<br/>
      2. NO retirar el catéter — aspirar el máximo posible del fármaco extravasado.<br/>
      3. Notificar al médico de inmediato.<br/>
      4. Elevar el miembro afectado.<br/>
      5. Aplicar compresas frías (NO calientes) en la zona afectada.<br/>
      6. Hialuronidasa SC en la zona (si disponible y prescrita) para dispersar el electrolito.<br/>
      7. Vigilar la zona cada hora durante 24–48 horas: eritema, dolor, necrosis.<br/>
      8. Documentar: hora, zona, volumen extravasado, concentración, tratamiento realizado.
    `,
  },

  /* ═══════════════════════════════════════════
     NIVEL 2 — VER MÁS
  ═══════════════════════════════════════════ */
  nivel2: {

    cuidadosEnfermeria: [
      'Etiquetar la bolsa con etiqueta de ALTO RIESGO (roja) además de la etiqueta estándar.',
      'Mezclar bien la solución invirtiendo la bolsa 8–10 veces tras agregar el KCl — el KCl es más denso y puede estratificarse.',
      'Preferir vía central para concentraciones > 40 mEq/L — menor riesgo de flebitis y dolor.',
      'Si se usa vía periférica: usar vena de buen calibre, vigilar cada hora el sitio de punción.',
      'La reposición oral (cloruro de potasio VO) es preferible cuando el paciente tolera y la urgencia lo permite.',
      'En hipopotasemia con alcalosis metabólica: la corrección del potasio también corrige la alcalosis.',
      'En hipopotasemia con hipomagnesemia: corregir magnesio primero — la hipopotasemia refractaria puede deberse a déficit de magnesio.',
      'Registrar balance hídrico — la diuresis excesiva perpetúa la hipopotasemia.',
      'Nunca agregar KCl a bolsas de solución que ya estén colgadas e infundiendo — riesgo de bolo concentrado.',
    ],

    efectosAdversos: [
      '🔴 Paro cardíaco — por administración rápida, sin diluir o sobredosis',
      '🔴 Hiperpotasemia grave — arritmias letales, fibrilación ventricular',
      '🔴 Necrosis tisular por extravasación',
      '🟠 Flebitis severa en vía periférica (especialmente con concentraciones > 40 mEq/L)',
      '🟠 Dolor intenso en el sitio de infusión y trayecto venoso',
      '🟠 Hiperpotasemia moderada — náuseas, debilidad muscular, parestesias',
      '🟡 Náuseas, vómitos (especialmente con KCl oral)',
      '🟡 Diarrea con preparaciones orales',
      '🟡 Irritación gástrica (KCl oral)',
    ],

    contraindicaciones: [
      'Hiperpotasemia (K⁺ > 5.5 mEq/L) — contraindicación absoluta.',
      'Oliguria / anuria sin indicación médica específica.',
      'Insuficiencia renal severa sin monitorización estricta.',
      'Enfermedad de Addison sin tratamiento (retención de potasio).',
      'Deshidratación grave no tratada.',
      'Acidosis metabólica severa no tratada (puede enmascarar la hipopotasemia real).',
      'Quemaduras extensas o trauma muscular masivo (hiperpotasemia por liberación celular).',
    ],

    fotosensibilidad: 'No aplica. El cloruro de potasio no requiere protección especial de la luz. Las soluciones preparadas son estables a temperatura ambiente y bajo luz normal durante el período de infusión.',

    estabilidad: {
      'Ampolla sin abrir':          'Temperatura ambiente (15–25°C) hasta fecha de vencimiento',
      'Solución diluida en SF/SG5%':'24 horas a temperatura ambiente · 48 horas en refrigeración',
      'Temperatura':                 'No congelar · Mantener 15–25°C',
      'Aspecto':                     'Solución transparente, incolora · Desechar si hay turbidez o partículas',
      'Contenedor':                  'Compatible con PVC, vidrio y polipropileno',
    },

    presentaciones: [
      'KCl 10 mEq/10 mL (1 mEq/mL) — ampolla 10 mL',
      'KCl 20 mEq/10 mL (2 mEq/mL) — ampolla 10 mL',
      'KCl 40 mEq/20 mL (2 mEq/mL) — ampolla 20 mL',
      'KCl oral 600 mg (8 mEq) — comprimidos de liberación prolongada',
      'KCl oral solución 10% (1.34 mEq/mL) — frasco',
      'Soluciones premezcladas: SF + KCl 20 mEq/500 mL, SF + KCl 40 mEq/1000 mL (según disponibilidad)',
    ],
  },

  /* ═══════════════════════════════════════════
     NIVEL 3 — INFORMACIÓN AVANZADA
  ═══════════════════════════════════════════ */
  nivel3: {

    dosis: [
      { indicacion: 'Hipopotasemia leve K⁺ 3.0–3.5 mEq/L',  dosis: '40–80 mEq/día IV o VO',      via: 'IV/VO' },
      { indicacion: 'Hipopotasemia moderada K⁺ 2.5–3.0 mEq/L', dosis: '80–120 mEq/día IV',        via: 'IV' },
      { indicacion: 'Hipopotasemia grave K⁺ < 2.5 mEq/L',    dosis: '120–200 mEq/día IV',          via: 'IV central' },
      { indicacion: 'Velocidad estándar segura',              dosis: '5–10 mEq/h',                  via: 'IV periférica' },
      { indicacion: 'Velocidad máxima periférica',            dosis: '10 mEq/h',                    via: 'IV periférica' },
      { indicacion: 'Velocidad máxima central (UCI)',         dosis: '20 mEq/h con ECG',            via: 'IV central' },
      { indicacion: 'Dosis máxima diaria habitual',           dosis: '200–400 mEq/día',             via: 'IV/VO' },
    ],

    embarazo: 'El cloruro de potasio es seguro durante el embarazo cuando se usa en dosis terapéuticas para corregir hipopotasemia documentada. Categoría A para suplementación en dosis fisiológicas. Monitorizar potasio sérico con mayor frecuencia. Los requerimientos de potasio pueden aumentar en embarazos con vómitos importantes (hiperémesis gravídica). Compatible con lactancia.',

    pediatria: 'Dosis: 0.5–1 mEq/kg/dosis IV (máximo 1 mEq/kg/dosis) · Velocidad máxima: 0.3–0.5 mEq/kg/h · Concentración máxima periférica: 40 mEq/L · Concentración máxima central: 80 mEq/L · Monitorización ECG continua en hipopotasemia grave pediátrica. En neonatos: extrema precaución, dosis 0.1–0.2 mEq/kg/h bajo monitorización continua.',

    adultoMayor: 'Mayor riesgo de hiperpotasemia por reducción del filtrado glomerular. Monitorizar función renal antes y durante la reposición. Preferir reposición oral si tolera. Velocidades de infusión más bajas (máximo 5–10 mEq/h). Mayor sensibilidad a los efectos cardiovasculares. Vigilar interacciones con IECA, ARA II y diuréticos ahorradores de potasio.',

    insufRenal: 'Extrema precaución. La insuficiencia renal reduce la excreción de potasio y aumenta el riesgo de hiperpotasemia grave. En IRA oligúrica: contraindicado sin indicación médica específica. En ERC: reducir dosis al 50% y controlar potasio cada 1–2 horas. En diálisis: ajustar según potasio sérico y pauta de diálisis. La hipopotasemia en IRC puede indicar pérdidas extrarrenales importantes.',

    insufHepatica: 'En cirrosis con ascitis: la hipopotasemia es frecuente por hiperaldosteronismo secundario y uso de diuréticos. La reposición de potasio es parte del manejo estándar. Sin embargo, en encefalopatía hepática, controlar estrictamente para evitar hiperpotasemia que puede agravar la encefalopatía.',
  },

  /* ═══════════════════════════════════════════
     NIVEL 4 — EVIDENCIA CIENTÍFICA
  ═══════════════════════════════════════════ */
  nivel4: {
    referencias: [
      'ISMP. ISMP\'s List of High-Alert Medications in Acute Care Settings. Institute for Safe Medication Practices. 2023. https://www.ismp.org',
      'DailyMed. Potassium Chloride in 5% Dextrose Injection. U.S. National Library of Medicine. Consultado 2024. https://dailymed.nlm.nih.gov',
      'Kraft MD, et al. Treatment of Electrolyte Disorders in Adult Patients in the Intensive Care Unit. Am J Health Syst Pharm. 2005;62(16):1663-1682.',
      'Weiner ID, Wingo CS. Hypokalemia: Consequences, Causes, and Correction. J Am Soc Nephrol. 1997;8(7):1179-1188.',
      'Gennari FJ. Hypokalemia. N Engl J Med. 1998;339(7):451-458.',
      'ASHP. Guidelines on Preventing Medication Errors in Hospitals. Am J Health Syst Pharm. 2018.',
      'SEMICYUC. Recomendaciones para el manejo de electrolitos en el paciente crítico. Med Intensiva. 2021.',
      'OPS/OMS. Prevención de errores de medicación con electrolitos concentrados. Alerta de Seguridad. 2019.',
    ],
  },

});
