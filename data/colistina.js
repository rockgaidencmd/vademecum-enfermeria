/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/colistina.js
   Fuentes: CIMA AEMPS (Colistimetato de sodio), FDA DailyMed,
   ERS/ESICM/ESCMID/IDSA Consensus Colistin 2019,
   SEIMC Guía Antibióticos 2023
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'colistina',
  nombre:         'Colistina (Colistimetato de sodio)',
  nombreGenerico: 'Colistimethate Sodium (Polymyxin E)',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'polimixina', 'multirresistencia', 'Pseudomonas', 'Acinetobacter', 'BLEE', 'carbapenemasas', 'nefrotoxicidad', 'último recurso'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antibiótico de ÚLTIMO RECURSO reservado para multirresistentes (Pseudomonas, Acinetobacter, Enterobacterias productoras de carbapenemasas). Nefrotoxicidad muy frecuente (hasta 60%) y dosis-dependiente — vigilancia renal diaria obligatoria. Neurotoxicidad (parestesias, bloqueo neuromuscular). Nomenclatura de dosis compleja (mg de colistina base vs UI vs colistimetato) — verificar SIEMPRE la unidad antes de administrar.',

  nivel1: {

    puntosClave: [
      '<b>Antibiótico de último recurso</b> para gram negativos multirresistentes (Pseudomonas, Acinetobacter, Enterobacterias productoras de carbapenemasas).',
      '<b>NEFROTOXICIDAD MUY FRECUENTE</b> (hasta 60% de pacientes) — dosis-dependiente y habitualmente reversible al suspender.',
      '<b>ALERTA DE UNIDADES</b>: la dosis puede prescribirse en mg de colistina base (CBA), UI o mg de colistimetato sódico (CMS) — verificar SIEMPRE la unidad exacta antes de preparar.',
      'Dosis de carga inicial seguida de mantenimiento — <b>infundir en 30-60 min</b>, diluido en SF 0.9%.',
      'Neurotoxicidad: parestesias periorales, vértigo, potencia el <b>bloqueo neuromuscular</b> — vigilar función respiratoria.',
    ],

    resumenRapido: 'Antibiótico polipeptídico (polimixina E) que actúa como detergente catiónico sobre la membrana externa de bacilos gram negativos, alterando su permeabilidad. Se administra como profármaco inactivo (colistimetato sódico, CMS) que se hidroliza in vivo a colistina activa. Reservado como último recurso para infecciones graves por gram negativos multirresistentes cuando no existe alternativa de menor toxicidad. Su principal limitación es la nefrotoxicidad dosis-dependiente, muy frecuente, que obliga a una monitorización renal estrecha y a un balance cuidadoso entre eficacia y toxicidad.',

    objetivoTerapeutico: 'Tratamiento de infecciones graves por gram negativos multirresistentes (Pseudomonas aeruginosa, Acinetobacter baumannii, Enterobacterias productoras de carbapenemasas) sin alternativa terapéutica de menor toxicidad · Terapia de rescate en sepsis por multirresistentes en UCI',

    preparacion: {
      'Presentación':            '<b>Vial de colistimetato sódico (CMS) — potencia expresada en UI o mg de CBA según fabricante</b>',
      '⚠️ VERIFICAR UNIDADES':    '<b>Confirmar SIEMPRE si la prescripción está en mg de colistina base (CBA), UI o mg de CMS — no son intercambiables</b>',
      'Reconstitución':          'Según ficha técnica del fabricante (agua para inyección o SF)',
      'Diluyente':               '<b>SF 0.9%</b>',
      'Dosis de carga':          'Dosis de carga inicial (según peso y función renal) para alcanzar concentración eficaz rápidamente',
      'Dosis de mantenimiento':  'Ajustada estrictamente por función renal (ClCr)',
      '⏱️ Tiempo de infusión':    '<b>30-60 min — no administrar en bolo</b>',
      'Vía':                     'IV intermitente · Nebulizada (neumonía asociada a ventilación, uso complementario)',
      '🧊 Estabilidad':           '<b>Usar dentro de las horas indicadas por el fabricante tras reconstituir — verificar ficha técnica del producto concreto</b>',
    },

    vigilancia: {
      antes: [
        '<b>VERIFICAR LA UNIDAD DE PRESCRIPCIÓN (mg CBA / UI / mg CMS)</b> con el médico y la farmacia antes de preparar.',
        'Función renal basal: creatinina y ClCr — determina la dosis de mantenimiento.',
        'Confirmar que no existe alternativa de menor toxicidad disponible (antibiograma).',
        'Peso actual para el cálculo de la dosis de carga.',
        'Descartar miastenia gravis o uso de bloqueantes neuromusculares (potenciación del bloqueo).',
      ],
      durante: [
        'Infundir en 30-60 min — vigilar parestesias periorales o de extremidades durante la infusión.',
        'Vigilar signos de bloqueo neuromuscular: debilidad, dificultad respiratoria (más en miastenia o con relajantes musculares).',
        'Diuresis horaria — vigilar oliguria como signo precoz de nefrotoxicidad.',
        'Constantes vitales según protocolo de sepsis/infección grave.',
      ],
      despues: [
        '<b>Creatinina DIARIA</b> durante todo el tratamiento — la nefrotoxicidad es muy frecuente y dosis-dependiente.',
        'Reevaluar la dosis de mantenimiento si la función renal cambia (ajuste dinámico).',
        'Vigilar parestesias, vértigo o alteraciones visuales (neurotoxicidad).',
        'Reevaluar la indicación diariamente — suspender en cuanto exista alternativa o se resuelva la infección.',
        'Documentar dosis (con unidad exacta), función renal y tolerancia en cada turno.',
      ],
      suspender: [
        'Deterioro significativo de la función renal (duplicación de creatinina o ClCr <30 sin ajuste).',
        'Signos de bloqueo neuromuscular con compromiso respiratorio.',
        'Reacción alérgica grave.',
        'Disponibilidad de antibiótico de menor toxicidad tras antibiograma — desescalar de inmediato.',
        'Toxicidad renal grave que no permite continuar pese al ajuste de dosis.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros antibióticos en la misma solución.',
      'No coadministrar con otros fármacos nefrotóxicos sin valorar riesgo/beneficio (aminoglucósidos, vancomicina, contraste).',
      'No mezclar con relajantes musculares en la misma vía sin verificar compatibilidad.',
      'Compatible con SF 0.9% para dilución según ficha técnica.',
    ],

    alertasSeguridad: [
      '🔴 NEFROTOXICIDAD MUY FRECUENTE (hasta 60%) — creatinina diaria obligatoria durante todo el tratamiento.',
      '🔴 ALERTA DE UNIDADES DE DOSIFICACIÓN — verificar SIEMPRE mg CBA vs UI vs mg CMS antes de preparar (error histórico frecuente).',
      '🔴 NEUROTOXICIDAD/BLOQUEO NEUROMUSCULAR — vigilar parestesias y función respiratoria, especial precaución con relajantes musculares.',
      '🟠 Antibiótico de último recurso — reservar para multirresistentes sin alternativa de menor toxicidad.',
      '🟠 Ajuste de dosis dinámico según función renal cambiante.',
      '🟡 Uso nebulizado como terapia adyuvante en neumonía asociada a ventilación mecánica.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar con el médico y la farmacia la unidad exacta de la prescripción (mg CBA / UI / mg CMS) antes de preparar — no asumir.',
      'Reconstituir y diluir en SF 0.9% siguiendo estrictamente la ficha técnica del producto concreto.',
      'Infundir en 30-60 min; vigilar parestesias durante la administración.',
      'Solicitar/verificar creatinina diaria durante todo el tratamiento.',
      'Vigilar diuresis horaria como signo precoz de nefrotoxicidad.',
      'Vigilar signos de debilidad muscular o dificultad respiratoria (bloqueo neuromuscular).',
      'Comunicar de inmediato cualquier deterioro de la función renal para reajuste de dosis.',
      'Reevaluar diariamente con el equipo médico la posibilidad de desescalar a un antibiótico menos tóxico.',
      'Documentar la dosis con su unidad exacta, la hora de administración y la tolerancia en cada turno.',
    ],

    efectosAdversos: [
      '🔴 Nefrotoxicidad (muy frecuente, dosis-dependiente, habitualmente reversible)',
      '🔴 Bloqueo neuromuscular con compromiso respiratorio (potenciado por relajantes musculares)',
      '🟠 Parestesias periorales y de extremidades',
      '🟠 Vértigo, ataxia',
      '🟠 Elevación de transaminasas',
      '🟡 Erupción cutánea',
      '🟡 Broncoespasmo con la forma nebulizada',
    ],

    contraindicaciones: [
      'Hipersensibilidad a polimixinas.',
      'Miastenia gravis (relativa — riesgo grave de bloqueo neuromuscular).',
      'Insuficiencia renal grave sin posibilidad de ajuste y monitorización estrecha.',
      'Disponibilidad de alternativa de menor toxicidad tras antibiograma (no es de primera línea).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar el vial según ficha técnica, habitualmente a temperatura ambiente o refrigerado.',

    estabilidad: {
      'Vial sin reconstituir':  'Según ficha técnica del fabricante hasta vencimiento',
      'Reconstituido/diluido':  '<b>Verificar ficha técnica del producto concreto — la estabilidad varía notablemente entre fabricantes</b>',
      'Aspecto':                 'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro del tiempo indicado por la ficha técnica específica del producto tras reconstituir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido no utilizado.',
      infusionPreparada: 'Administrar dentro del tiempo indicado por el fabricante tras la dilución final.',
      notas:             'Verificar SIEMPRE la unidad de dosificación (mg CBA / UI / mg CMS) del producto concreto disponible en la institución — existe variabilidad significativa entre fabricantes y países.',
    },

    presentaciones: [
      'Colistimetato de sodio — vial polvo liofilizado para IV (potencia variable según fabricante)',
      'Presentación para nebulización (uso adyuvante en neumonía asociada a ventilación)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis de carga (función renal normal)', dosis: 'Según peso — calculada para alcanzar concentración eficaz rápida (verificar protocolo institucional)', via: 'IV' },
      { indicacion: 'Mantenimiento (función renal normal)',  dosis: 'Ajustado según ClCr — administrar en 2-3 dosis/día',                                              via: 'IV' },
      { indicacion: 'IR moderada',                             dosis: 'Reducción de dosis de mantenimiento según ClCr',                                                  via: 'IV' },
      { indicacion: 'IR grave / hemodiálisis',                 dosis: 'Ajuste estricto individualizado — consultar protocolo de TDM si disponible',                     via: 'IV' },
      { indicacion: 'Nebulizada (adyuvante NAV)',              dosis: 'Según protocolo institucional, en combinación con tratamiento IV',                                via: 'Nebulizada' },
    ],

    embarazo: 'Categoría C (FDA). Datos limitados en humanos. Atraviesa la barrera placentaria. Usar solo en infecciones graves multirresistentes sin alternativa, tras valoración riesgo/beneficio individualizada con el equipo de infectología.',

    pediatria: 'Uso reservado a infecciones graves multirresistentes sin alternativa, bajo supervisión de infectología pediátrica. Dosis ajustada por peso y función renal, con monitorización renal muy estrecha por mayor variabilidad farmacocinética en la infancia.',

    adultoMayor: 'Mayor riesgo de nefrotoxicidad por reducción fisiológica de la función renal. Ajustar la dosis de mantenimiento por ClCr real (Cockcroft-Gault) y vigilar la función renal a diario con especial atención.',

    insufRenal: '<b>Ajuste de dosis de mantenimiento obligatorio y dinámico según ClCr</b> — la dosis de carga inicial habitualmente NO se ajusta por función renal, pero el mantenimiento sí. Consultar protocolo institucional o farmacocinética clínica para el ajuste preciso.',

    insufHepatica: 'Sin ajuste específico — eliminación fundamentalmente renal. La función renal es el determinante principal de la dosis, no la hepática.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Colistimetato de sodio.',
      'Tsuji BT et al. International Consensus Guidelines for the Optimal Use of the Polymyxins. Pharmacotherapy. 2019.',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Nation RL, Li J. Colistin in the 21st century. Curr Opin Infect Dis. 2009.',
      'Paul M et al. European Society of Clinical Microbiology and Infectious Diseases guidelines for treatment of infections caused by multidrug-resistant Gram-negative bacilli. Clin Microbiol Infect. 2022.',
    ],
  },

});
