/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/butilescopolamina.js
   Fuentes: CIMA AEMPS (Buscapina), FDA DailyMed (Hyoscine
   Butylbromide), Cochrane Reviews Abdominal Pain/Colic
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'butilescopolamina',
  nombre:         'Butilescopolamina',
  nombreComercial: 'Buscapina®',
  nombreGenerico: 'Hyoscine Butylbromide (Scopolamine Butylbromide)',
  categoria:      'otros',
  tags:           ['antiespasmódico', 'anticolinérgico', 'cólico', 'dolor abdominal', 'espasmo digestivo', 'ginecológico', 'urgencias'],
  prioridad:      'low',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Antiespasmódico anticolinérgico</b> — relaja el músculo liso digestivo, biliar, urinario y ginecológico.',
      'Indicación clásica: <b>cólico abdominal, biliar, renal y dismenorrea</b> — muy usado en urgencias por dolor tipo cólico.',
      'Dosis: <b>20 mg IV/IM/SC</b>, puede repetirse cada 6-8 h (máx 100 mg/día).',
      '<b>No cruza significativamente la barrera hematoencefálica</b> — a diferencia de la escopolamina base, no produce sedación ni efectos centrales relevantes.',
      'Frecuentes <b>efectos anticolinérgicos periféricos</b>: sequedad de boca, taquicardia, visión borrosa — contraindicado en glaucoma y obstrucción urinaria/intestinal.',
    ],

    resumenRapido: 'Derivado cuaternario de amonio de la escopolamina (hioscina), con acción antimuscarínica periférica selectiva sobre el músculo liso del tracto digestivo, biliar, urinario y genital. Al ser una molécula cuaternaria, su paso a través de la barrera hematoencefálica es mínimo, por lo que carece de los efectos sedantes y centrales característicos de la escopolamina base (usada en cinetosis). Es uno de los fármacos más utilizados en urgencias y atención primaria para el alivio sintomático rápido del dolor de tipo cólico (biliar, renal, intestinal, ginecológico).',

    objetivoTerapeutico: 'Alivio del dolor abdominal tipo cólico (biliar, renal, intestinal) · Tratamiento sintomático de la dismenorrea · Relajación del músculo liso previa a procedimientos endoscópicos o radiológicos · Manejo de espasmos gastrointestinales',

    preparacion: {
      'Presentación':          '<b>Buscapina® 20 mg/mL — ampolla 1 mL</b>',
      'Diluyente':             'Puede administrarse sin diluir (IV lenta directa) o diluido en SF 0.9%/SG 5%',
      'Dosis estándar adulto': '<b>20 mg IV/IM/SC</b>',
      'Repetición':            'Cada 6-8 h según necesidad (máx 100 mg/día)',
      'Velocidad IV':          'Administrar lentamente en 1-2 min — la inyección rápida puede causar hipotensión y taquicardia',
      'Vía':                   'IV lenta · IM · SC · Oral (comprimidos, para tratamiento ambulatorio)',
      '⏱️ Inicio efecto':       'IV: pocos minutos · IM/SC: 15-30 min',
      '⏱️ Duración':            '4-6 horas',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5% si se diluye</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar el tipo de dolor (cólico, espasmódico) — no indicado para dolor de otro origen.',
        'Antecedente de glaucoma de ángulo estrecho, hipertrofia prostática con retención urinaria o obstrucción intestinal (contraindicaciones).',
        'Antecedente cardiovascular (taquiarritmias) — el efecto anticolinérgico puede aumentar la FC.',
        'Constantes basales: FC y TA.',
      ],
      durante: [
        'Administrar IV lento — la inyección rápida se asocia a hipotensión transitoria y taquicardia.',
        'Vigilar FC durante la administración.',
        'Observar respuesta analgésica en los minutos siguientes.',
      ],
      despues: [
        'Reevaluar el dolor a los 15-30 min — si no mejora, reconsiderar el diagnóstico (el cólico típico responde bien).',
        'Vigilar efectos anticolinérgicos: sequedad de boca, visión borrosa, taquicardia.',
        'Documentar dosis, vía y respuesta analgésica.',
      ],
      suspender: [
        'Reacción alérgica (rara).',
        'Taquicardia sintomática significativa.',
        'Signos de retención urinaria aguda en paciente predispuesto (HBP).',
        'Ausencia de respuesta tras dosis repetidas — reevaluar diagnóstico.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros fármacos en la misma jeringa sin verificar compatibilidad.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
      'Precaución con otros anticolinérgicos (efecto aditivo).',
    ],

    alertasSeguridad: [
      '🟡 Contraindicado en glaucoma de ángulo estrecho, retención urinaria y obstrucción intestinal mecánica.',
      '🟡 Efectos anticolinérgicos periféricos frecuentes: sequedad de boca, taquicardia, visión borrosa.',
      '🟡 Infusión IV rápida puede causar hipotensión transitoria — administrar lento.',
      '🟢 Perfil de seguridad favorable — no produce sedación ni depresión respiratoria (a diferencia de opioides usados para el mismo síntoma).',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Administrar IV lentamente (1-2 min) para minimizar el riesgo de hipotensión y taquicardia transitorias.',
      'Preguntar por antecedente de glaucoma, hipertrofia prostática u obstrucción intestinal antes de la primera dosis.',
      'Vigilar FC durante y después de la administración.',
      'Reevaluar el dolor a los 15-30 min — el cólico típico suele responder bien y rápido.',
      'Informar al paciente sobre la posible sequedad de boca y visión borrosa transitorias.',
      'Documentar dosis, vía, hora y respuesta analgésica en cada administración.',
      'Si se repiten dosis, no superar 100 mg/día.',
    ],

    efectosAdversos: [
      '🟠 Retención urinaria aguda (en paciente predispuesto, ej. HBP)',
      '🟡 Taquicardia',
      '🟡 Sequedad de boca',
      '🟡 Visión borrosa (efecto anticolinérgico)',
      '🟡 Hipotensión transitoria (con IV rápido)',
      '🟡 Estreñimiento (uso repetido)',
    ],

    contraindicaciones: [
      'Glaucoma de ángulo estrecho no tratado.',
      'Hipertrofia prostática con retención urinaria.',
      'Obstrucción intestinal mecánica (íleo obstructivo).',
      'Megacolon tóxico.',
      'Miastenia gravis.',
      'Taquiarritmias significativas no controladas.',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de la luz.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':   '<b>24 h a temperatura ambiente</b>',
      'Diluida en SG 5%':     '24 h a temperatura ambiente',
      'Aspecto':               'Solución incolora — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente si se diluye.',
      notas:             'Puede administrarse sin diluir en bolo IV lento. No cruza significativamente la barrera hematoencefálica — sin efectos sedantes centrales relevantes.',
    },

    presentaciones: [
      'Buscapina® 20 mg/mL — ampolla 1 mL (IV/IM/SC)',
      'Buscapina® 10 mg — comprimidos recubiertos (oral)',
      'Buscapina Compositum® — combinación con metamizol (analgésico + antiespasmódico)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Cólico abdominal/biliar/renal', dosis: '<b>20 mg IV/IM/SC</b>',                       via: 'IV/IM/SC' },
      { indicacion: 'Repetición según necesidad',     dosis: 'Cada 6-8 h (máx 100 mg/día)',                 via: 'IV/IM/SC' },
      { indicacion: 'Dismenorrea',                     dosis: '10-20 mg VO/IV según intensidad',             via: 'VO/IV' },
      { indicacion: 'Mantenimiento oral',              dosis: '10-20 mg VO c/6-8 h',                          via: 'VO' },
    ],

    embarazo: 'Categoría C (FDA) / uso con precaución. Datos limitados pero ampliamente utilizado en la práctica clínica para cólicos durante el embarazo cuando está claramente indicado. Usar la dosis mínima eficaz y valorar riesgo/beneficio con el equipo obstétrico.',

    pediatria: '>6 años: 0.3-0.6 mg/kg IV/IM/SC (dosis ajustada por peso) o dosis fija según protocolo local, hasta 3-4 veces al día. En menores de 6 años, uso excepcional y bajo supervisión especializada.',

    adultoMayor: 'Mayor sensibilidad a los efectos anticolinérgicos (retención urinaria, confusión en casos de deterioro cognitivo, estreñimiento). Usar con precaución, especialmente en varones con hipertrofia prostática conocida o sospechada.',

    insufRenal: 'Sin ajuste de dosis formal establecido. Precaución general por la eliminación renal parcial del fármaco; vigilar efectos anticolinérgicos en insuficiencia renal grave.',

    insufHepatica: 'Sin ajuste de dosis formal necesario en la mayoría de los casos. Usar con precaución en insuficiencia hepática grave.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Buscapina® (butilescopolamina/hioscina butilbromuro).',
      'Tytgat GN. Hyoscine butylbromide: a review of its use in the treatment of abdominal cramping and pain. Drugs. 2007.',
      'Cochrane Database of Systematic Reviews. Antispasmodics for the treatment of renal colic. 2018.',
      'FDA DailyMed. Hyoscine Butylbromide — Prescribing Information.',
      'SEMES. Manejo del dolor abdominal agudo en Urgencias. Guía de práctica clínica.',
    ],
  },

});
