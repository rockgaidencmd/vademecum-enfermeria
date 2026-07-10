/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/glucagon.js
   Fuentes: CIMA AEMPS (GlucaGen), FDA DailyMed,
   ADA Standards of Care in Diabetes 2024,
   ACLS Guidelines (betabloqueante/calcioantagonista toxicidad)
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'glucagon',
  nombre:         'Glucagón',
  nombreComercial: 'GlucaGen®',
  nombreGenerico: 'Glucagon',
  categoria:      'otros',
  tags:           ['hipoglucemia', 'diabetes', 'emergencia', 'antídoto', 'betabloqueante', 'calcioantagonista', 'relajante muscular liso'],
  prioridad:      'critical',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Hipoglucemia grave sin acceso IV</b>: 1 mg IM/SC — es el tratamiento de elección cuando no hay vía venosa disponible.',
      '<b>Ineficaz en depleción de glucógeno</b>: ayuno prolongado, alcoholismo, malnutrición — en estos casos usar glucosa IV directamente.',
      'Inicio de acción <b>10-15 min IM</b> — más lento que la glucosa IV; si hay vía disponible, la glucosa IV es más rápida.',
      '<b>Antídoto en intoxicación por betabloqueantes y calcioantagonistas</b>: bypassa el receptor beta, aumenta el AMPc directamente — dosis mucho más altas (3-10 mg).',
      'Tras la respuesta: <b>dar hidratos de carbono de absorción lenta</b> en cuanto el paciente pueda tragar — el efecto es transitorio (deplección de glucógeno hepático).',
    ],

    resumenRapido: 'Hormona polipeptídica que estimula la glucogenólisis hepática, liberando glucosa a la circulación en minutos. Es el tratamiento de elección para la hipoglucemia grave con alteración de consciencia cuando NO se dispone de acceso venoso (administración IM/SC por personal no sanitario, familiares o primeros intervinientes). También se emplea como antídoto en la intoxicación por betabloqueantes y calcioantagonistas (a dosis mucho más altas), y como relajante del músculo liso digestivo en procedimientos endoscópicos/radiológicos (espasmo esofágico, íleo).',

    objetivoTerapeutico: 'Revertir la hipoglucemia grave con alteración de consciencia cuando no hay acceso IV · Antídoto en intoxicación grave por betabloqueantes o calcioantagonistas · Relajación del músculo liso digestivo para procedimientos endoscópicos o radiológicos',

    preparacion: {
      'Presentación':             '<b>GlucaGen® HypoKit 1 mg — vial liofilizado + jeringa precargada con disolvente</b>',
      'Reconstitución':           'Inyectar el disolvente de la jeringa en el vial, agitar suavemente hasta disolver (no agitar con fuerza)',
      'Dosis hipoglucemia adulto': '<b>1 mg IM o SC</b> (dosis única)',
      'Dosis hipoglucemia niño <25 kg': '0.5 mg IM/SC',
      'Dosis antídoto (beta/calcioantagonistas)': '<b>3-10 mg IV en bolo lento → perfusión 2-5 mg/h</b> según respuesta',
      'Vía':                      'IM · SC (hipoglucemia) · IV (antídoto en intoxicaciones, uso hospitalario)',
      '⏱️ Inicio efecto (IM)':     '10-15 min · Efecto máximo: 30 min',
      '⏱️ Inicio efecto (IV)':     '1-5 min (uso en intoxicaciones)',
      '⏱️ Duración':               '60-90 min (efecto transitorio — depleción de glucógeno)',
      '🧊 Estabilidad tras reconstituir': '<b>Usar inmediatamente — no conservar la solución reconstituida</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar hipoglucemia (glucemia capilar si es posible) y alteración de consciencia que impide la vía oral.',
        'Verificar que no hay acceso IV disponible (si lo hay, la glucosa IV al 10-50% es más rápida y eficaz).',
        'Descartar causa de depleción de glucógeno (ayuno prolongado, alcoholismo, malnutrición, insuficiencia hepática) — el glucagón será poco eficaz.',
        'En uso como antídoto: confirmar intoxicación por betabloqueante/calcioantagonista con bradicardia/hipotensión refractaria.',
      ],
      durante: [
        'Vigilar respuesta: recuperación de consciencia en 10-15 min tras IM/SC.',
        'Glucemia capilar a los 10-15 min tras la administración.',
        'Vigilar náuseas y vómitos (frecuentes) — proteger la vía aérea si el paciente sigue con bajo nivel de consciencia.',
        'En uso IV como antídoto: monitorización cardíaca continua, vigilar FC y TA.',
      ],
      despues: [
        '<b>Dar hidratos de carbono de absorción lenta en cuanto el paciente pueda tragar</b> — el efecto del glucagón es transitorio.',
        'Glucemia capilar cada 15-30 min hasta estabilizar — riesgo de hipoglucemia de rebote.',
        'Si no hay respuesta en 10-15 min: administrar glucosa IV directamente (sospecha de depleción de glucógeno).',
        'Investigar la causa de la hipoglucemia (dosis de insulina, alimentación, alcohol).',
        'Documentar dosis, hora, glucemia pre/post y respuesta clínica.',
      ],
      suspender: [
        'No aplicable — dosis única en hipoglucemia.',
        'En uso como antídoto: suspender la perfusión si aparecen náuseas/vómitos intensos o si el efecto ya no es necesario.',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones que contengan cloruro sódico en la misma jeringa (puede precipitar).',
      'Reconstituir SOLO con el disolvente incluido en el kit.',
      'No conservar la solución reconstituida — administrar de inmediato.',
    ],

    alertasSeguridad: [
      '🟠 INEFICAZ en depleción de glucógeno (ayuno prolongado, alcoholismo, malnutrición, insuficiencia hepática grave) — usar glucosa IV en estos casos.',
      '🟠 Efecto TRANSITORIO — dar carbohidratos de absorción lenta en cuanto sea posible para evitar hipoglucemia de rebote.',
      '🟡 Náuseas y vómitos frecuentes — proteger la vía aérea si el nivel de consciencia sigue bajo.',
      '🟡 En feocromocitoma puede desencadenar liberación de catecolaminas — usar con precaución.',
      '🟡 A dosis altas (antídoto) puede causar hiperglucemia e hipopotasemia — monitorizar.',
    ],
  },

  modulos: {
    hipoglucemia: `
      <b>Protocolo Hipoglucemia Grave — Glucagón:</b><br/>
      <b>Con acceso IV disponible:</b><br/>
      • Glucosa IV: 25 g (150-250 mL de SG 10% o 50 mL de SG 50%) en bolo lento.<br/>
      • Reevaluar glucemia a los 15 min; repetir si persiste <70 mg/dL.<br/><br/>
      <b>SIN acceso IV (primera opción en este caso):</b><br/>
      • Glucagón 1 mg IM o SC (0.5 mg si <25 kg).<br/>
      • Puede administrarlo un familiar o cuidador entrenado.<br/>
      • Recuperación esperada en 10-15 min.<br/><br/>
      <b>Tras la recuperación (ambas vías):</b><br/>
      • Dar hidratos de carbono de absorción lenta en cuanto trague (pan, galletas + zumo).<br/>
      • Vigilar glucemia cada 15-30 min — riesgo de hipoglucemia de rebote.<br/>
      • Investigar la causa (dosis de insulina/antidiabéticos, ingesta, ejercicio, alcohol).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir con el disolvente incluido en el kit; agitar suavemente hasta disolver completamente.',
      'Administrar de inmediato tras reconstituir — no conservar la solución preparada.',
      'Vía IM preferente (deltoides, muslo o glúteo) si no hay acceso IV.',
      'Glucemia capilar antes y a los 10-15 min tras la administración.',
      'Colocar al paciente en posición lateral de seguridad si el nivel de consciencia es bajo (riesgo de vómito).',
      'En cuanto recupere la consciencia y pueda tragar: ofrecer hidratos de carbono de absorción lenta.',
      'Si no hay respuesta en 10-15 min, avisar para valorar glucosa IV (sospecha de depleción de glucógeno).',
      'Educar al paciente/familia en el uso del kit para futuras hipoglucemias graves en domicilio.',
      'Documentar glucemia pre/post, dosis, vía y respuesta clínica.',
    ],

    efectosAdversos: [
      '🟠 Náuseas y vómitos (frecuentes, hasta 30%)',
      '🟠 Hipoglucemia de rebote si no se dan carbohidratos tras la recuperación',
      '🟡 Taquicardia transitoria',
      '🟡 Cefalea',
      '🟡 Reacción alérgica (rara)',
      '🟡 Hiperglucemia e hipopotasemia (dosis altas, uso como antídoto)',
    ],

    contraindicaciones: [
      'Feocromocitoma (puede desencadenar crisis hipertensiva por liberación de catecolaminas).',
      'Insulinoma (puede causar hipoglucemia de rebote paradójica).',
      'Hipersensibilidad conocida al glucagón o a la proteína de origen del producto.',
      'Ayuno prolongado, malnutrición grave o alcoholismo (ineficaz por depleción de glucógeno — no es contraindicación pero sí ineficacia esperada).',
    ],

    fotosensibilidad: 'No relevante. Conservar el kit en nevera (2-8°C); puede mantenerse a temperatura ambiente (≤25°C) durante un periodo limitado según ficha técnica — revisar fecha de caducidad si se conserva fuera de nevera.',

    estabilidad: {
      'Vial sin reconstituir (nevera)': '2-8°C hasta la fecha de caducidad',
      'Vial sin reconstituir (Tª ambiente)': 'Estable un tiempo limitado a ≤25°C (ver ficha técnica del lote)',
      'Reconstituido':                  '<b>Usar de inmediato — no conservar</b>',
      'Aspecto':                        'Solución transparente incolora tras reconstituir — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras reconstituir.',
      dosisRestante:     'Desechar cualquier sobrante — no se conserva.',
      infusionPreparada: 'No aplicable a la dosis IM/SC estándar. En perfusión IV (antídoto): preparar y usar según protocolo hospitalario.',
      notas:             'El kit doméstico (GlucaGen HypoKit) está pensado para uso de emergencia por el propio paciente o su entorno — reforzar la educación en su uso.',
    },

    presentaciones: [
      'GlucaGen® HypoKit 1 mg — vial + jeringa precargada con disolvente',
      'Glucagón genérico — presentaciones similares en kit',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hipoglucemia grave adulto (sin IV)', dosis: '<b>1 mg IM o SC</b>',                              via: 'IM/SC' },
      { indicacion: 'Hipoglucemia grave niño <25 kg',       dosis: '0.5 mg IM/SC',                                    via: 'IM/SC' },
      { indicacion: 'Antídoto betabloqueante/calcioantagonista', dosis: '3-10 mg IV bolo lento → perfusión 2-5 mg/h', via: 'IV' },
      { indicacion: 'Relajante músculo liso (procedimiento)', dosis: '0.25-2 mg IV/IM según indicación',              via: 'IV/IM' },
    ],

    embarazo: 'Categoría B (FDA). No atraviesa significativamente la placenta (molécula grande). Considerado seguro en el embarazo cuando está indicado para hipoglucemia grave. Usar sin restricción en emergencia.',

    pediatria: '<25 kg o <6-8 años: 0.5 mg IM/SC. ≥25 kg: 1 mg IM/SC (dosis de adulto). Muy usado en diabetes tipo 1 pediátrica para hipoglucemia grave en domicilio/colegio. Educar a cuidadores y profesores en su uso.',

    adultoMayor: 'Sin ajuste de dosis específico. Mayor probabilidad de causa multifactorial de la hipoglucemia (polifarmacia, insuficiencia renal). Vigilar recuperación y aporte de carbohidratos tras la respuesta.',

    insufRenal: 'Sin ajuste de dosis necesario. La hipoglucemia es más frecuente y prolongada en insuficiencia renal (menor aclaramiento de insulina/antidiabéticos) — vigilancia glucémica más estrecha tras la respuesta.',

    insufHepatica: '<b>Eficacia reducida o nula</b> en hepatopatía grave — los depósitos de glucógeno hepático están disminuidos. En estos pacientes, preferir glucosa IV directa si hay acceso venoso disponible.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica GlucaGen® HypoKit (glucagón).',
      'American Diabetes Association. Standards of Care in Diabetes—2024. Diabetes Care. 2024.',
      'Panchal AR et al. 2020 AHA Guidelines for CPR and ECC — Special Circumstances (toxicología). Circulation. 2020.',
      'Graudins A et al. Calcium channel antagonist and beta-blocker overdose: antidotes and adjunct therapies. Br J Clin Pharmacol. 2016.',
      'Cryer PE et al. Evaluation and Management of Adult Hypoglycemic Disorders: Endocrine Society Guideline. J Clin Endocrinol Metab. 2009.',
    ],
  },

});
