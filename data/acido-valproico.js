/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/acido-valproico.js
   Fuentes: CIMA AEMPS (Depakine IV), FDA DailyMed,
   ESETT Trial NEJM 2019, AAN/AES Guidelines 2023,
   Guía SEN Epilepsia 2021
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'acido-valproico',
  nombre:         'Ácido Valproico',
  nombreGenerico: 'Valproic Acid / Valproate Sodium',
  categoria:      'otros',
  tags:           ['antiepiléptico', 'estatus epiléptico', 'neurología', 'UCI', 'valproato', 'bifuncional'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Hepatotóxico (riesgo de fallo hepático fulminante — especialmente en niños <2 años y enfermedades mitocondriales). Teratógeno potente (espina bífida, síndrome fetal). CONTRAINDICADO en embarazo. Monitorizar niveles plasmáticos y función hepática. Múltiples interacciones.',

  nivel1: {

    puntosClave: [
      '<b>Estatus epiléptico</b>: 40 mg/kg IV (máx 3000 mg) a 6 mg/kg/min → mantenimiento 1-2 mg/kg/h.',
      '<b>Infundir como mínimo en 60 min</b> si se usa la dosis de mantenimiento — carga puede ir en 5-10 min si urgente.',
      '<b>CONTRAINDICADO en embarazo</b> (teratógeno potente) y en hepatopatía activa.',
      '<b>Hepatotoxicidad grave</b> en niños <2 años y enfermedades mitocondriales — EVITAR en estos grupos.',
      'Niveles terapéuticos: 50-100 mcg/mL (mantenimiento) / 100-150 mcg/mL (estatus). Extraer antes de la siguiente dosis.',
    ],

    resumenRapido: 'Antiepiléptico de amplio espectro. Mecanismos múltiples: bloquea canales de Na+, potencia GABA, inhibe canales de Ca2+ tipo T. Eficaz en epilepsia generalizada, focal y estatus epiléptico (2ª-3ª línea). También usado en trastorno bipolar y profilaxis de migraña. Eliminación hepática — interacciones extensas. Teratógeno de máxima categoría.',

    objetivoTerapeutico: 'Control del estatus epiléptico · Mantenimiento antiepiléptico en epilepsias generalizadas y focales · Estabilización del ánimo en trastorno bipolar · Profilaxis de migraña',

    preparacion: {
      'Presentación':           '<b>Depakine® IV 400 mg/4 mL (100 mg/mL) — vial 4 mL</b>',
      'Diluyente':              '<b>SF 0.9% o SG 5%</b>',
      'Dosis carga estatus':    '<b>40 mg/kg IV (máx 3000 mg) — diluir en 100 mL SF → infundir en 5-10 min</b>',
      'Velocidad máx carga':    '6 mg/kg/min (urgencia) — máx 15 mg/kg/min en emergencia absoluta',
      'Mantenimiento IV':       '1-2 mg/kg/h en perfusión continua (o dosis oral equivalente)',
      'Conversión IV→oral':     'Misma dosis total diaria, dividida en 2-3 tomas',
      'Concentración máx':      '20 mg/mL para perfusión (100 mg/mL solo para carga rápida)',
      'Vía':                    'IV periférica o central',
      '⏱️ TIEMPO carga':         '<b>5-10 min en emergencia · 60 min si hay tiempo</b>',
      'Bomba':                  'Bomba de infusión recomendada para mantenimiento',
      '🧊 Estabilidad':          '<b>24 horas a temperatura ambiente en SF o SG 5%</b>',
    },

    vigilancia: {
      antes: [
        'Descartar embarazo ANTES de administrar — contraindicado en cualquier trimestre.',
        'Función hepática basal: ALT, AST, bilirrubina — contraindicado si hepatopatía activa.',
        'Recuento plaquetario — trombocitopenia posible.',
        'Verificar medicación concomitante: carbamacepina, fenitoína, lamotrigina, warfarina (interacciones críticas).',
        'Peso actual del paciente para calcular dosis.',
        'Antecedentes de enfermedad mitocondrial (contraindicación en niños).',
      ],
      durante: [
        'Monitorizar FC y TA durante carga rápida.',
        'Vigilar nivel de consciencia y control de crisis.',
        'Observar signos de irritación venosa local.',
        'Si náuseas intensas o dolor abdominal: reducir velocidad de infusión.',
      ],
      despues: [
        'Niveles plasmáticos a las 1-2 h post-carga (rango estatus: 100-150 mcg/mL).',
        'Transaminasas y amoniemia cada 48-72 h en los primeros días.',
        'Plaquetas periódicas durante tratamiento prolongado.',
        'Vigilar signos de hepatotoxicidad: ictericia, dolor abdominal, náuseas persistentes.',
        'Documentar dosis, hora, velocidad de infusión, respuesta clínica y niveles.',
      ],
      suspender: [
        'Elevación de transaminasas >3× el valor normal o ictericia.',
        'Encefalopatía hiperamonémica (amoniemia elevada con confusión).',
        'Trombocitopenia grave (<50.000/μL).',
        'Embarazo confirmado.',
        'Sospecha de enfermedad mitocondrial.',
        'Descenso gradual si se suspende en epilepsia crónica (nunca brusco).',
      ],
    },

    incompatibilidades: [
      'No mezclar con carbamacepina en la misma vía.',
      'Fenitoína: interacción farmacocinética (monitorizar niveles de ambos).',
      'Warfarina: potencia el efecto anticoagulante (monitorizar INR).',
      'Lamotrigina: valproato duplica o triplica los niveles de lamotrigina (reducir dosis).',
      'Lavar vía con SF antes y después si se comparte con otros antiepilépticos.',
    ],

    alertasSeguridad: [
      '🔴 HEPATOTOXICIDAD FULMINANTE — especialmente en niños <2 años con enfermedades metabólicas.',
      '🔴 TERATÓGENO POTENTE — espina bífida, síndrome fetal valproato. CONTRAINDICADO en embarazo.',
      '🔴 ENCEFALOPATÍA HIPERAMONÉMICA — amoniemia elevada + confusión → suspender y tratar.',
      '🟠 Múltiples interacciones: lamotrigina, fenitoína, carbamacepina, warfarina.',
      '🟠 Trombocitopenia dependiente de dosis — monitorizar plaquetas.',
      '🟡 Aumento de peso, caída de cabello (reversible), temblor con uso crónico.',
    ],
  },

  modulos: {

    interacciones: `
      <b>Interacciones principales del Ácido Valproico:</b><br/>
      <b>Fenitoína:</b> Valproato desplaza fenitoína de proteínas → toxicidad fenitoína con niveles "normales".<br/>
      <b>Lamotrigina:</b> Valproato DUPLICA o TRIPLICA niveles de lamotrigina → reducir dosis de lamotrigina a la mitad.<br/>
      <b>Carbamacepina:</b> CBZ reduce niveles de valproato; valproato aumenta el metabolito tóxico de CBZ.<br/>
      <b>Warfarina:</b> Potencia anticoagulación por desplazamiento proteico → monitorizar INR.<br/>
      <b>Rifampicina / meropenem:</b> Reducen niveles de valproato significativamente (30-50%).<br/>
      <b>Aspirina (dosis alta):</b> Desplaza valproato de proteínas → toxicidad.<br/><br/>
      <b>REGLA: antes de añadir cualquier fármaco, revisar interacciones.</b>
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Descartar embarazo activo antes de preparar — contraindicación absoluta.',
      'Comprobar función hepática y plaquetas antes de la primera dosis.',
      'Calcular dosis exacta por peso (mg/kg) — verificar con colega en urgencia.',
      'Etiquetar bolsa: Ácido valproico [dosis], volumen, velocidad, hora de preparación.',
      'Para carga urgente en estatus: preparar en 100 mL SF e infundir en 5-10 min con bomba.',
      'Para mantenimiento: concentración más baja y velocidad lenta (1-2 mg/kg/h).',
      'Monitorizar niveles a las 1-2 h post-carga y antes de cada dosis de mantenimiento.',
      'Vigilar amoniemia si aparece confusión o somnolencia excesiva (encefalopatía hiperamonémica).',
      'Informar al médico si el paciente toma lamotrigina — ajuste de dosis obligatorio.',
      'Documentar control de crisis, nivel de consciencia y efectos adversos en cada turno.',
    ],

    efectosAdversos: [
      '🔴 Hepatotoxicidad fulminante (especialmente niños <2 años)',
      '🔴 Encefalopatía hiperamonémica (amoniemia ↑ sin hepatopatía)',
      '🔴 Pancreatitis aguda (raro pero grave)',
      '🟠 Trombocitopenia dependiente de dosis',
      '🟠 Náuseas, vómitos, dolor abdominal (frecuentes)',
      '🟠 Temblor fino (dosis-dependiente)',
      '🟡 Alopecia reversible',
      '🟡 Aumento de peso',
      '🟡 Somnolencia',
    ],

    contraindicaciones: [
      'Embarazo (cualquier trimestre) — teratógeno potente.',
      'Hepatopatía activa o antecedentes de hepatotoxicidad por valproato.',
      'Enfermedad mitocondrial conocida (síndrome de Alpers-Huttenlocher, mutaciones POLG).',
      'Déficit de ciclo de la urea.',
      'Hipersensibilidad al valproato.',
      'Precaución en niños <2 años y en combinación con topiramato (encefalopatía hiperamonémica).',
    ],

    fotosensibilidad: 'No relevante. Conservar viales a temperatura ambiente, protegidos de luz directa intensa.',

    estabilidad: {
      'Vial sin abrir':       'Temperatura ambiente (<30°C) hasta vencimiento',
      'Diluido en SF 0.9%':   '<b>24 horas a temperatura ambiente</b>',
      'Diluido en SG 5%':     '24 horas a temperatura ambiente',
      'Aspecto':              'Solución incolora — desechar si turbidez o precipitado',
      'Temperatura':          'NO congelar',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de las 24 h si se mantiene en condiciones asépticas.',
      dosisRestante:     'Desechar sobrante si no se usa en la misma jornada.',
      infusionPreparada: '24 h a temperatura ambiente en SF 0.9% o SG 5%.',
      notas:             'No requiere protección especial de la luz. No congelar. Compatible con SF 0.9% y SG 5%.',
    },

    presentaciones: [
      'Depakine® IV 400 mg/4 mL (100 mg/mL) — vial 4 mL',
      'Valproato sódico Normon® IV — genérico',
      'Depakine® Crono 300/500 mg comprimidos (uso oral, retard)',
      'Depakine® 200 mg/mL solución oral',
      'Depakine® 500 mg granulado gastrorresistente',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Estatus epiléptico — carga',       dosis: '<b>40 mg/kg IV (máx 3000 mg) en 5-10 min</b>',     via: 'IV' },
      { indicacion: 'Estatus — mantenimiento IV',        dosis: '1-2 mg/kg/h en perfusión continua',                via: 'IV' },
      { indicacion: 'Epilepsia adulto (mantenimiento)',  dosis: '500-2500 mg/día IV u oral en 2-3 dosis',           via: 'IV/VO' },
      { indicacion: 'Epilepsia niño (mantenimiento)',    dosis: '15-45 mg/kg/día en 2-3 dosis',                     via: 'IV/VO' },
      { indicacion: 'Trastorno bipolar',                 dosis: '750-2500 mg/día oral (titulación lenta)',           via: 'VO' },
      { indicacion: 'Profilaxis migraña',                dosis: '500-1000 mg/día oral',                             via: 'VO' },
    ],

    embarazo: '<b>CONTRAINDICADO en embarazo</b> — categoría X. Teratógeno potente: espina bífida (1-2%), defectos cardíacos, retraso cognitivo, síndrome fetal del valproato. Si la mujer queda embarazada bajo tratamiento: NO suspender bruscamente — consultar con neurología urgente.',

    pediatria: '<b>Contraindicado en <2 años con enfermedades metabólicas o politerapia.</b> En niños 2-11 años: 15-45 mg/kg/día. Monitorización de transaminasas y amoniemia más frecuente. Riesgo de hepatotoxicidad fulminante muy superior al adulto en menores de 2 años.',

    adultoMayor: 'Mayor riesgo de sedación excesiva y caídas. Monitorizar sodio (hiponatremia). Inicio con dosis bajas. T½ puede prolongarse. Mayor riesgo de interacciones por polifarmacia.',

    insufRenal: 'Sin ajuste significativo de dosis (metabolismo hepático). En IRA con hipoalbuminemia: mayor fracción libre de valproato — monitorizar niveles totales y libres.',

    insufHepatica: '<b>CONTRAINDICADO en hepatopatía activa.</b> En IH leve compensada: precaución extrema, dosis reducidas y monitorización hepática estricta.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Depakine® IV (valproato sódico).',
      'Kapur J et al. ESETT Trial. NEJM. 2019.',
      'Trinka E et al. A definition and classification of status epilepticus. Epilepsia. 2015.',
      'AAN/AES Clinical Practice Guideline. Status Epilepticus in Adults. Neurology. 2023.',
      'EMA/PRAC. Valproate: new measures to avoid exposure in pregnancy. 2018.',
      'Sociedad Española de Neurología (SEN). Guía oficial de práctica clínica en epilepsia. 2021.',
    ],
  },

});
