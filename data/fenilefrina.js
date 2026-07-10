/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/fenilefrina.js
   Fuentes: CIMA AEMPS, FDA DailyMed, SEMICYUC Shock 2023,
   Obstetric Anesthesia Guidelines (hipotensión en raquianestesia)
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'fenilefrina',
  nombre:         'Fenilefrina',
  nombreGenerico: 'Phenylephrine Hydrochloride',
  categoria:      'vasopresores',
  tags:           ['vasopresor', 'alfa-agonista puro', 'hipotensión', 'anestesia obstétrica', 'shock', 'bradicardia refleja', 'raquianestesia'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Vasopresor alfa-1 agonista puro. Produce vasoconstricción intensa sin efecto inotrópico ni cronotrópico directo — puede causar bradicardia refleja marcada. Riesgo de necrosis tisular grave por extravasación (requiere manejo con fentolamina). Uso preferente por vía central en infusión continua; bolos IV solo en contextos específicos (anestesia).',

  nivel1: {

    puntosClave: [
      '<b>Agonista alfa-1 adrenérgico puro</b> — vasoconstricción intensa sin efecto beta (no aumenta la contractilidad ni la FC directamente).',
      '<b>Fármaco de elección en hipotensión durante raquianestesia/anestesia epidural obstétrica</b> — menos depresión fetal que otros vasopresores en dosis equipotentes.',
      'Bolo IV en anestesia: <b>50-100 mcg</b>; perfusión continua en shock: <b>0.5-5 mcg/kg/min</b>.',
      '<b>Bradicardia refleja</b> frecuente por el aumento brusco de la poscarga (barorreceptores) — vigilar FC.',
      '<b>Extravasación = necrosis tisular grave</b> — antídoto: fentolamina infiltrada localmente.',
    ],

    resumenRapido: 'Vasopresor agonista alfa-1 adrenérgico puro, sin actividad beta significativa. Produce vasoconstricción arterial y venosa intensa, aumentando las resistencias vasculares sistémicas y la presión arterial, sin incrementar la frecuencia cardíaca ni la contractilidad de forma directa (de hecho, puede inducir bradicardia refleja mediada por barorreceptores). Es el vasopresor de elección para tratar la hipotensión inducida por raquianestesia/epidural en la paciente obstétrica, por su menor efecto sobre la perfusión uteroplacentaria comparado con dosis equipotentes de efedrina. También se usa en shock con resistencias vasculares bajas y taquiarritmias donde se busca evitar el efecto cronotrópico de otros vasopresores.',

    objetivoTerapeutico: 'Corrección de la hipotensión durante anestesia raquídea/epidural (especialmente obstétrica) · Soporte de la presión arterial en shock vasodilatador cuando se desea evitar el efecto cronotrópico · Tratamiento de la hipotensión con taquicardia asociada · Descongestionante nasal (uso tópico, no relevante en contexto hospitalario IV)',

    preparacion: {
      'Presentación':             '<b>Fenilefrina 10 mg/mL — ampolla 1 mL</b>',
      'Diluyente':                'SF 0.9% o SG 5%',
      'Bolo IV (anestesia)':      '<b>50-100 mcg IV en bolo</b> (diluir 10 mg en 100 mL SF → 100 mcg/mL, administrar 0.5-1 mL)',
      'Perfusión continua':       '<b>0.5-5 mcg/kg/min</b> — ajustar según respuesta',
      'Concentración estándar perfusión': '10 mg en 250 mL SF → 40 mcg/mL',
      'Vía':                      '<b>Vía central preferente en perfusión continua</b> · vía periférica de buen calibre solo para bolos puntuales',
      '⏱️ Inicio efecto':          'Inmediato (IV) · Duración del bolo: 15-20 min',
      'Bomba':                    'Bomba de jeringa/infusión obligatoria en perfusión continua',
      '🧊 Estabilidad':            '<b>24 h a temperatura ambiente en SF 0.9% o SG 5%</b>',
    },

    vigilancia: {
      antes: [
        'TA basal (invasiva si perfusión continua en shock, o no invasiva frecuente en anestesia).',
        'FC basal — el efecto puede inducir bradicardia refleja marcada.',
        'Verificar acceso venoso adecuado — extravasación produce necrosis tisular grave.',
        'En obstetricia: valorar el estado fetal si se dispone de monitorización.',
      ],
      durante: [
        'TA cada 1-2 min tras el bolo en anestesia, o continua/frecuente en perfusión.',
        'FC continua — bradicardia refleja frecuente, especialmente con bolos rápidos o dosis altas.',
        'Vigilar el punto de infusión de forma continua — cualquier signo de extravasación (dolor, palidez, induración) requiere actuación inmediata.',
        'En perfusión continua: ajustar la dosis según objetivo de TA, evitando la hipertensión reactiva.',
      ],
      despues: [
        'TA y FC hasta estabilización tras suspender el bolo/perfusión.',
        'Vigilar perfusión periférica (frialdad, palidez) por la vasoconstricción intensa, sobre todo en perfusiones prolongadas.',
        'Documentar TA, FC, dosis y respuesta en cada control.',
      ],
      suspender: [
        'Hipertensión excesiva o bradicardia sintomática grave.',
        'Signos de isquemia periférica (extremidades frías, cianosis distal) en perfusión prolongada.',
        'Extravasación — suspender inmediatamente esa vía, cambiar de acceso e infiltrar fentolamina en la zona.',
        'Objetivo hemodinámico alcanzado y estable.',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones alcalinas (bicarbonato) — inestabilidad química.',
      'Precaución con IMAO — respuesta presora exagerada.',
      'No administrar en la misma vía que fármacos incompatibles con catecolaminas/simpaticomiméticos sin verificar.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🔴 EXTRAVASACIÓN = NECROSIS TISULAR — vigilar el punto de infusión continuamente; antídoto: fentolamina infiltrada localmente.',
      '🔴 BRADICARDIA REFLEJA — puede ser marcada, especialmente con bolos rápidos; tener atropina disponible.',
      '🟠 Vasoconstricción intensa puede comprometer la perfusión periférica en uso prolongado.',
      '🟠 Interacción con IMAO — riesgo de crisis hipertensiva.',
      '🟡 Preferir vía central en perfusión continua prolongada.',
      '🟡 En obstetricia, primera elección sobre efedrina en muchos protocolos actuales por mejor perfil fetal.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Diluir según el uso previsto: bolo (100 mcg/mL) o perfusión continua (40 mcg/mL) — verificar la concentración antes de administrar.',
      'Vigilar el punto de infusión de forma continua — la extravasación causa necrosis tisular grave.',
      'Monitorizar FC de forma continua — la bradicardia refleja es frecuente y puede requerir atropina.',
      'TA frecuente tras cada bolo o ajuste de perfusión.',
      'Preferir vía central para perfusiones prolongadas; si es periférica, usar vena de buen calibre y vigilar estrechamente.',
      'En anestesia obstétrica: coordinar la administración con el equipo de anestesia según protocolo de hipotensión post-raquianestesia.',
      'Tener fentolamina disponible en la unidad para el manejo de una eventual extravasación.',
      'Documentar TA, FC, dosis y respuesta en cada control.',
    ],

    efectosAdversos: [
      '🔴 Necrosis tisular por extravasación',
      '🔴 Bradicardia refleja marcada',
      '🟠 Hipertensión excesiva / reactiva',
      '🟠 Isquemia periférica en perfusión prolongada',
      '🟡 Cefalea',
      '🟡 Ansiedad, temblor',
      '🟡 Reducción del gasto cardíaco por aumento excesivo de la poscarga (dosis altas)',
    ],

    contraindicaciones: [
      'Hipertensión arterial grave no controlada.',
      'Taquiarritmias ventriculares graves.',
      'Feocromocitoma.',
      'Uso concomitante con IMAO (riesgo de crisis hipertensiva).',
      'Precaución extrema en cardiopatía isquémica grave (aumento de la poscarga puede empeorar la isquemia).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':   '<b>24 h a temperatura ambiente</b>',
      'Diluida en SG 5%':     '24 h a temperatura ambiente',
      'Aspecto':               'Solución incolora — desechar si turbia o con precipitado',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente.',
      notas:             'Vigilancia continua del punto de infusión por riesgo de extravasación. Preferir vía central en perfusión continua prolongada.',
    },

    presentaciones: [
      'Fenilefrina 10 mg/mL — ampolla 1 mL',
      'Fenilefrina genérica — presentaciones similares (verificar disponibilidad local, algunos países la comercializan combinada con otros fármacos para uso tópico nasal, no relevante en contexto IV)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hipotensión en raquianestesia (bolo)', dosis: '<b>50-100 mcg IV en bolo</b>',                 via: 'IV' },
      { indicacion: 'Shock vasodilatador (perfusión)',        dosis: '<b>0.5-5 mcg/kg/min</b> — ajustar según TA', via: 'IV' },
      { indicacion: 'Hipotensión con taquicardia',            dosis: '50-100 mcg IV en bolo, repetible',           via: 'IV' },
      { indicacion: 'Perfusión de inicio habitual',           dosis: '0.5-1 mcg/kg/min → titular',                  via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA), pero es el vasopresor de elección en la hipotensión inducida por raquianestesia/epidural en la paciente obstétrica según guías actuales — menor acidosis fetal comparado con efedrina en dosis equipotentes, al no atravesar significativamente la placenta en cantidades relevantes con el uso en bolos estándar.',

    pediatria: 'Uso excepcional en pediatría, bajo supervisión especializada. Dosis en perfusión: 0.1-0.5 mcg/kg/min, titulando según respuesta. Datos limitados en población pediátrica.',

    adultoMayor: 'Mayor sensibilidad a la vasoconstricción y a la bradicardia refleja. Iniciar con dosis más bajas y titular con cautela. Vigilar isquemia periférica y cardíaca en perfusiones prolongadas.',

    insufRenal: 'Sin ajuste de dosis específico — metabolismo no predominantemente renal. Vigilar la perfusión renal durante el uso, ya que la vasoconstricción intensa puede comprometerla en dosis altas o uso prolongado.',

    insufHepatica: 'Sin ajuste de dosis específico necesario. El metabolismo es principalmente por MAO/COMT tisular, no exclusivamente hepático.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Fenilefrina (formulación inyectable).',
      'Kee WD et al. Prophylactic and therapeutic use of vasopressors in obstetric anesthesia. Obstet Anesth Dig. 2016.',
      'SEMICYUC. Manejo del shock en el paciente crítico. Med Intensiva. 2023.',
      'Habib AS. A review of the impact of phenylephrine administration on maternal hemodynamics and maternal and neonatal outcomes in women undergoing cesarean delivery under spinal anesthesia. Anesth Analg. 2012.',
      'Gilbert DN et al. Vasopressor Selection in Shock. Crit Care Med. 2021.',
    ],
  },

});
