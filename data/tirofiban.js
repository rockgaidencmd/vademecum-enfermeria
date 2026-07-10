/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/tirofiban.js
   Fuentes: CIMA AEMPS (Agrastat), FDA DailyMed,
   ESC ACS Guidelines 2023, ACC/AHA PCI Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'tirofiban',
  nombre:         'Tirofibán',
  nombreComercial: 'Agrastat®',
  nombreGenerico: 'Tirofiban Hydrochloride',
  categoria:      'anticoagulantes',
  tags:           ['antiagregante', 'inhibidor GP IIb/IIIa', 'síndrome coronario agudo', 'angioplastia', 'ICP', 'trombocitopenia', 'sangrado'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antiagregante plaquetario potente (inhibidor de la glicoproteína IIb/IIIa). Riesgo elevado de sangrado, especialmente combinado con heparina y otros antiagregantes/anticoagulantes (terapia antitrombótica múltiple). Trombocitopenia aguda grave (incluida trombocitopenia inducida por el fármaco) posible en las primeras horas. Ajuste de dosis obligatorio en insuficiencia renal. Uso exclusivo en UCI/hemodinámica con monitorización estrecha.',

  nivel1: {

    puntosClave: [
      '<b>Inhibidor de la glicoproteína IIb/IIIa plaquetaria</b> — bloquea la vía final común de la agregación plaquetaria, independiente del estímulo desencadenante.',
      'Indicado en <b>síndrome coronario agudo de alto riesgo</b> y como coadyuvante en <b>angioplastia coronaria (ICP)</b>.',
      'Dosis de carga <b>25 mcg/kg IV en 3 min → mantenimiento 0.15 mcg/kg/min</b> (ajustar en insuficiencia renal).',
      '<b>Recuento plaquetario a las 2-6 h</b> de iniciar — riesgo de trombocitopenia aguda grave (<50.000 o <20% del basal).',
      '<b>Riesgo de sangrado elevado</b>, potenciado con heparina/AAS/inhibidores P2Y12 concomitantes (terapia antitrombótica múltiple habitual en SCA).',
    ],

    resumenRapido: 'Antiagregante plaquetario no peptídico que inhibe de forma reversible y competitiva el receptor de la glicoproteína IIb/IIIa en la superficie plaquetaria, bloqueando la unión del fibrinógeno y por tanto la vía final común de la agregación plaquetaria, independientemente del estímulo que la desencadene (ADP, trombina, colágeno). Se emplea como tratamiento coadyuvante en el síndrome coronario agudo de alto riesgo y durante la angioplastia coronaria percutánea, habitualmente en combinación con heparina, ácido acetilsalicílico y un inhibidor P2Y12, lo que exige una vigilancia hemorrágica especialmente estrecha por el efecto antitrombótico acumulativo de la terapia múltiple.',

    objetivoTerapeutico: 'Tratamiento coadyuvante del síndrome coronario agudo de alto riesgo (angina inestable/IAM sin elevación del ST) · Prevención de complicaciones trombóticas durante la angioplastia coronaria percutánea (ICP) · Reducción de eventos isquémicos en pacientes de alto riesgo sometidos a revascularización urgente',

    preparacion: {
      'Presentación':            '<b>Agrastat® 50 mcg/mL — bolsa/vial 250 mL lista para diluir o usar según presentación</b>',
      'Diluyente':               'SF 0.9% o SG 5% según protocolo de preparación',
      'Dosis de carga':          '<b>25 mcg/kg IV en bolo, infundido en 3 min</b>',
      'Dosis de mantenimiento':  '<b>0.15 mcg/kg/min en perfusión continua</b> (habitualmente 48-108 h según protocolo/ICP)',
      'Ajuste renal':            'Reducir la dosis de mantenimiento al 50% si ClCr <60 mL/min',
      'Vía':                     '<b>IV exclusiva — vía dedicada preferente</b>',
      '⏱️ Inicio efecto':         'Inmediato tras la carga · Inhibición plaquetaria máxima en minutos',
      '⏱️ Duración tras suspender': 'Función plaquetaria se recupera en 4-8 h',
      'Bomba':                   '<b>Bomba de infusión/jeringa OBLIGATORIA con cálculo preciso por peso</b>',
      '🧊 Estabilidad':           'Presentación lista para usar según ficha técnica; verificar caducidad del envase',
    },

    vigilancia: {
      antes: [
        'Recuento plaquetario, hemoglobina/hematocrito y coagulación (TP/TTPa) basales.',
        'Función renal (creatinina, ClCr) — determina el ajuste de dosis.',
        'Confirmar la terapia antitrombótica concomitante (heparina, AAS, inhibidor P2Y12) — mayor riesgo de sangrado combinado.',
        'Antecedente de sangrado activo, ACV reciente, cirugía mayor reciente o trombocitopenia previa.',
        'Peso del paciente para el cálculo exacto de la dosis (mcg/kg).',
      ],
      durante: [
        '<b>Recuento plaquetario a las 2-6 h de iniciar</b> la perfusión, y luego según protocolo (diario mínimo).',
        'Vigilar signos de sangrado en cada turno: hematomas, sangrado en el punto de punción arterial/venoso, hematuria, melenas.',
        'TA y FC según protocolo de SCA/UCI.',
        'Vigilar el punto de acceso vascular (femoral/radial) tras ICP — riesgo de sangrado local o hematoma retroperitoneal.',
        'Si trombocitopenia grave (<50.000 o descenso >50% del basal): avisar de inmediato, suspender el fármaco.',
      ],
      despues: [
        'Recuento plaquetario diario mientras dure la perfusión.',
        'Vigilar sangrado hasta la recuperación completa de la función plaquetaria (4-8 h tras suspender).',
        'Función renal si el tratamiento se prolonga.',
        'Documentar dosis, plaquetas seriadas y cualquier evento hemorrágico.',
      ],
      suspender: [
        'Trombocitopenia grave: plaquetas <50.000/μL o descenso >50% del valor basal.',
        'Sangrado mayor o clínicamente significativo.',
        'Al completar la duración indicada del tratamiento (habitualmente 48-108 h según protocolo).',
        'Necesidad de cirugía urgente con riesgo hemorrágico no asumible.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros fármacos en la misma vía sin verificar compatibilidad — usar vía dedicada cuando sea posible.',
      'Compatible con heparina no fraccionada en perfusión simultánea (uso protocolizado habitual), pero por vías o lúmenes preferiblemente distintos según protocolo local.',
      'No mezclar con soluciones que contengan otros antiagregantes en la misma jeringa.',
    ],

    alertasSeguridad: [
      '🔴 RIESGO DE SANGRADO ELEVADO — potenciado por la terapia antitrombótica múltiple habitual en el SCA (heparina + AAS + P2Y12).',
      '🔴 TROMBOCITOPENIA AGUDA GRAVE — recuento plaquetario obligatorio a las 2-6 h del inicio; puede ser súbita y grave.',
      '🟠 Ajuste de dosis obligatorio en insuficiencia renal (ClCr <60 mL/min: reducir 50%).',
      '🟠 Vigilancia estrecha del punto de acceso vascular tras procedimientos invasivos (ICP).',
      '🟡 La función plaquetaria se recupera en 4-8 h tras suspender — relevante antes de procedimientos invasivos urgentes.',
      '🟡 Uso exclusivo en UCI/unidad coronaria/hemodinámica con monitorización continua.',
    ],
  },

  modulos: {
    cardio: `
      <b>Protocolo Síndrome Coronario Agudo de Alto Riesgo / ICP — Tirofibán:</b><br/>
      <b>Contexto habitual:</b> angina inestable/IAMSEST de alto riesgo, o durante angioplastia coronaria con carga trombótica elevada.<br/><br/>
      <b>Administración:</b><br/>
      • Carga: 25 mcg/kg IV en 3 min.<br/>
      • Mantenimiento: 0.15 mcg/kg/min en perfusión continua (48-108 h según protocolo o hasta 12-24 h post-ICP).<br/>
      • Ajustar a la mitad si ClCr &lt;60 mL/min.<br/><br/>
      <b>Combinado habitualmente con:</b><br/>
      • Heparina no fraccionada (ajustada por TTPa/ACT según protocolo de hemodinámica).<br/>
      • AAS + inhibidor P2Y12 (clopidogrel/ticagrelor/prasugrel).<br/><br/>
      <b>Vigilancia crítica:</b> plaquetas a las 2-6 h, y luego diario. Vigilancia estrecha del punto de acceso vascular arterial tras el procedimiento.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Calcular la dosis exacta en mcg/kg con el peso actual del paciente — verificar el cálculo antes de programar la bomba.',
      'Administrar la carga en exactamente 3 min mediante bomba de infusión.',
      'Solicitar/verificar el recuento plaquetario a las 2-6 h del inicio — es un control crítico, no omitir.',
      'Vigilar activamente signos de sangrado en cada turno, con especial atención al punto de acceso vascular tras ICP.',
      'Usar vía dedicada para la perfusión cuando sea posible.',
      'Ajustar la dosis de mantenimiento a la mitad si la función renal está reducida (ClCr <60 mL/min) — confirmar con el equipo médico.',
      'Ante sospecha de trombocitopenia (petequias, sangrado inusual): avisar de inmediato y preparar para suspender el fármaco.',
      'Documentar dosis, plaquetas seriadas, y cualquier signo de sangrado en cada turno.',
    ],

    efectosAdversos: [
      '🔴 Sangrado mayor (el efecto adverso más relevante)',
      '🔴 Trombocitopenia aguda grave (puede ser súbita, primeras horas)',
      '🟠 Sangrado menor (hematomas, sangrado en el punto de punción)',
      '🟠 Hematoma en el acceso vascular tras procedimiento invasivo',
      '🟡 Reacción alérgica (rara)',
      '🟡 Bradicardia (poco frecuente)',
    ],

    contraindicaciones: [
      'Sangrado activo o antecedente de diátesis hemorrágica en los últimos 30 días.',
      'ACV en los últimos 30 días o antecedente de ACV hemorrágico.',
      'Cirugía mayor o traumatismo grave en las últimas 6 semanas.',
      'Trombocitopenia previa conocida (<100.000/μL).',
      'Hipertensión arterial grave no controlada.',
      'Insuficiencia renal grave en diálisis (contraindicación relativa según ficha técnica, valorar con nefrología).',
      'Disección aórtica, pericarditis aguda.',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar según ficha técnica del fabricante a temperatura ambiente, protegido de luz directa.',

    estabilidad: {
      'Presentación lista para usar': 'Verificar caducidad del envase — algunas presentaciones no requieren dilución adicional',
      'Tras iniciar la perfusión':    'Seguir indicaciones de la ficha técnica específica del producto',
      'Aspecto':                       'Solución incolora — desechar si turbia o con partículas',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Si requiere dilución, usar según protocolo institucional y ficha técnica.',
      dosisRestante:     'Desechar sobrante no utilizado según protocolo de residuos.',
      infusionPreparada: 'Verificar el tiempo máximo de uso tras preparar según ficha técnica del fabricante.',
      notas:             'Uso exclusivo en unidades con monitorización continua (UCI, unidad coronaria, hemodinámica). Vigilancia plaquetaria crítica en las primeras horas.',
    },

    presentaciones: [
      'Agrastat® 50 mcg/mL — bolsa/vial 250 mL',
      'Agrastat® 250 mcg/mL — vial concentrado para diluir',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Carga (SCA/ICP)',                    dosis: '<b>25 mcg/kg IV en 3 min</b>',                    via: 'IV' },
      { indicacion: 'Mantenimiento (función renal normal)', dosis: '<b>0.15 mcg/kg/min</b> × 48-108 h o 12-24 h post-ICP', via: 'IV' },
      { indicacion: 'Mantenimiento (ClCr <60 mL/min)',      dosis: '0.075 mcg/kg/min (reducción del 50%)',            via: 'IV' },
      { indicacion: 'Duración habitual del tratamiento',    dosis: '48-108 h según protocolo, o hasta 12-24 h tras ICP', via: '—' },
    ],

    embarazo: 'Categoría B (FDA). Datos limitados en gestantes; el síndrome coronario agudo en el embarazo es infrecuente pero grave, y el uso se valora individualmente según el riesgo vital materno, con manejo multidisciplinar cardio-obstétrico.',

    pediatria: 'No hay indicación establecida en pediatría — el síndrome coronario agudo aterosclerótico es excepcional en este grupo de edad. Uso no estandarizado.',

    adultoMayor: 'Mayor riesgo de sangrado por fragilidad vascular y frecuente reducción de la función renal — ajustar la dosis según ClCr real (Cockcroft-Gault) y vigilar de forma más estrecha el recuento plaquetario y los signos de sangrado.',

    insufRenal: '<b>Ajuste obligatorio</b>: ClCr <60 mL/min → reducir la dosis de mantenimiento al 50% (0.075 mcg/kg/min), manteniendo la dosis de carga completa. En insuficiencia renal grave o diálisis, valorar riesgo/beneficio con el equipo de cardiología/nefrología.',

    insufHepatica: 'Sin ajuste de dosis específico establecido — el fármaco tiene eliminación predominantemente renal, no hepática. Precaución general en hepatopatía grave con coagulopatía asociada, por el riesgo hemorrágico combinado.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Agrastat® (tirofibán).',
      'Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.',
      'Lawton JS et al. 2021 ACC/AHA/SCAI Guideline for Coronary Artery Revascularization. Circulation. 2022.',
      'Valgimigli M et al. 2017 ESC focused update on dual antiplatelet therapy in coronary artery disease. Eur Heart J. 2018.',
      'Kastrati A et al. Abciximab and Heparin versus Bivalirudin for Non–ST-Elevation Myocardial Infarction. NEJM. 2011.',
    ],
  },

});
