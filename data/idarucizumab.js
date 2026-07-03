/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/idarucizumab.js
   Fuentes: CIMA AEMPS (Praxbind), FDA DailyMed,
   RE-VERSE AD Trial NEJM 2015/2017,
   ESC AF Guidelines 2020, SEMICYUC 2021
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'idarucizumab',
  nombre:         'Idarucizumab',
  nombreGenerico: 'Idarucizumab',
  categoria:      'otros',
  tags:           ['antídoto', 'dabigatrán', 'reversión anticoagulación', 'urgencias', 'hemorragia', 'anticoagulantes directos', 'ACOD'],
  prioridad:      'critical',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Antídoto específico del dabigatrán (Pradaxa®)</b> — único uso aprobado.',
      'Dosis única: <b>5 g IV</b> (2 viales de 2.5 g) — en 2 bolos consecutivos o infusión en 5-10 min.',
      '<b>Indicación: hemorragia grave/amenazante + cirugía urgente</b> bajo anticoagulación con dabigatrán.',
      'Reversión prácticamente inmediata (<5 min) y mantenida >12-24 h.',
      'Sin necesidad de monitorizar niveles de dabigatrán para decidir el uso — <b>si está indicado, se da</b>.',
    ],

    resumenRapido: 'Anticuerpo monoclonal humanizado (fragmento Fab) que se une específicamente al dabigatrán (y sus metabolitos) con afinidad 350 veces superior a la de la trombina. Revierte el efecto anticoagulante del dabigatrán de forma completa e inmediata. No afecta a otros anticoagulantes (heparina, warfarina, rivaroxabán, apixabán). No requiere ajuste por edad, peso o función renal. Indicado en hemorragia mayor o cirugía urgente en pacientes bajo tratamiento con dabigatrán.',

    objetivoTerapeutico: 'Reversión urgente del efecto anticoagulante de dabigatrán en: hemorragia grave o amenazante para la vida · Cirugía urgente o procedimiento invasivo de emergencia',

    preparacion: {
      'Presentación':             '<b>Praxbind® 2.5 g/50 mL — vial 50 mL (50 mg/mL)</b>',
      'Dosis total':              '<b>5 g IV = 2 viales de 2.5 g/50 mL</b>',
      'Administración':           'Opción A: <b>2 bolos IV consecutivos de 2.5 g cada uno</b> (cada vial en 5-10 min)<br>Opción B: infusión de los 2 viales en 5-10 min total',
      'Dilución':                 '<b>NO diluir — administrar directamente del vial</b>',
      'Vía':                      'IV — puede ser periférica o central',
      'Flusheo previo':           'Lavar la vía con SF 0.9% antes de la infusión',
      '⏱️ Inicio efecto':          '<b><5 min (reversión prácticamente inmediata)</b>',
      '⏱️ Duración':               '>12-24 h en la mayoría de pacientes',
      '🧊 Estabilidad':            '<b>Refrigerar 2-8°C. Una vez sacado de nevera: usar en 6 h a temperatura ambiente</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar que el paciente está tomando o ha tomado dabigatrán (Pradaxa®) — idarucizumab no sirve para otros anticoagulantes.',
        'Si disponible: tiempo de trombina diluida (dTT) o tiempo de ecarina (ECT) para confirmar dabigatrán activo.',
        'aPTT alargado o tiempo de trombina prolongado — apoyan la presencia de dabigatrán activo.',
        'Identificar el origen y gravedad de la hemorragia.',
        'Función renal: la IR aumenta la exposición al dabigatrán (mayor acumulación).',
        'Última dosis de dabigatrán — si hace >12-24 h en paciente con función renal normal puede haber poco efecto residual.',
      ],
      durante: [
        'Monitorización de constantes durante la infusión.',
        'Vigilar reacciones de hipersensibilidad (rara — anticuerpo monoclonal).',
        'Control del sangrado — evaluar respuesta hemostática.',
      ],
      despues: [
        'Repetir dTT o aPTT tras la dosis — confirmar reversión.',
        'Evaluar control del sangrado y hemostasia clínica.',
        'Si el sangrado continúa pese a reversión: buscar otra causa.',
        '<b>Segunda dosis de 5 g</b> puede considerarse si: nueva hemorragia, necesidad de segunda cirugía urgente, o si se sospecha que el dabigatrán sigue activo (IRC con acumulación).',
        'Reinicio de anticoagulación: tan pronto como sea clínicamente adecuado (mínimo 24 h).',
        'Documentar hora de administración, respuesta clínica y laboratorial.',
      ],
      suspender: [
        'No aplicable — administración única.',
        'Segunda dosis si indicada — ver criterios arriba.',
      ],
    },

    incompatibilidades: [
      '<b>No diluir ni mezclar con otros fármacos</b> — administrar solo.',
      'Lavar la vía con SF 0.9% antes de infundir.',
      'No mezclar con otras soluciones IV.',
    ],

    alertasSeguridad: [
      '🔴 SOLO para dabigatrán (Pradaxa®) — NO revierte heparina, warfarina, rivaroxabán ni apixabán.',
      '🟠 Riesgo trombótico post-reversión — reiniciar anticoagulación lo antes posible clínicamente.',
      '🟠 En IR grave: mayor acumulación de dabigatrán — puede precisar segunda dosis.',
      '🟡 Hipersensibilidad (rara) — monitorizar durante la infusión.',
      '🟡 La reversión elimina la protección anticoagulante — vigilar trombosis.',
    ],
  },

  modulos: {

    protocoloReversion: `
      <b>Protocolo Reversión Dabigatrán — Idarucizumab:</b><br/><br/>
      <b>Indicaciones:</b><br/>
      1. <b>Hemorragia mayor</b>: intracraneana, retroperitoneal, GI masiva, pericárdica, que amenaza la vida.<br/>
      2. <b>Cirugía urgente o procedimiento invasivo de emergencia</b> que no puede esperar 12-24 h.<br/><br/>
      <b>Administración:</b><br/>
      • Sacar 2 viales de Praxbind® 2.5 g/50 mL de la nevera.<br/>
      • Lavar la vía IV con SF 0.9%.<br/>
      • Infundir 1º vial (2.5 g en 5-10 min) → inmediatamente el 2º vial (2.5 g en 5-10 min).<br/>
      • <b>Total: 5 g IV en <10-15 min.</b><br/><br/>
      <b>Tras la reversión:</b><br/>
      • Reiniciar dabigatrán o anticoagulación alternativa ≥24 h después si hemostasia asegurada.<br/>
      • Segunda dosis (5 g más) si: nuevo sangrado, nueva cirugía urgente, o IRC con efecto residual.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar con el médico y la historia clínica que el paciente toma dabigatrán — idarucizumab es exclusivo para dabigatrán.',
      'Sacar los 2 viales de Praxbind® de la nevera — pueden usarse hasta 6 h a temperatura ambiente.',
      'NO diluir los viales — administrar el contenido directamente.',
      'Lavar la vía IV con SF 0.9% antes de iniciar la infusión.',
      'Infundir el 1er vial (50 mL) en 5-10 min, inmediatamente el 2º vial (50 mL) en 5-10 min.',
      'Monitorizar constantes durante la infusión — vigilar reacción de hipersensibilidad.',
      'Evaluar control del sangrado durante y después de la infusión.',
      'Informar al médico si el sangrado no cede — puede indicar otra causa o necesidad de segunda dosis.',
      'Documentar hora exacta de administración, lote y respuesta clínica.',
      'Recordar: el efecto dura ~12-24 h — la protección antitrombótica queda eliminada; planificar reinicio de anticoagulación.',
    ],

    efectosAdversos: [
      '🟠 Riesgo trombótico por reversión de anticoagulación (IAM, ACV, TEP, TVP)',
      '🟡 Hipersensibilidad / reacciones alérgicas (rara — anticuerpo monoclonal)',
      '🟡 Cefalea, fiebre leve (muy infrecuente)',
    ],

    contraindicaciones: [
      'No hay contraindicaciones absolutas en emergencia con hemorragia grave.',
      'No usar para revertir otros anticoagulantes (heparina, warfarina, rivaroxabán, apixabán) — sin efecto.',
    ],

    fotosensibilidad: 'No relevante. Conservar en nevera 2-8°C protegido de luz. No congelar. Una vez sacado de nevera: usar en 6 h.',

    estabilidad: {
      'Vial sin abrir':           '<b>Refrigerado 2-8°C hasta vencimiento. NO congelar. Proteger de luz.</b>',
      'A temperatura ambiente':   '<b>Estable hasta 6 h (una vez sacado de nevera)</b>',
      'Aspecto':                  'Solución incolora a ligeramente amarillenta — normal',
      'NO diluir':                'Administrar directamente del vial sin dilución adicional',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras abrir el vial — desechar sobrante.',
      dosisRestante:     'No guardar sobrante de vial abierto.',
      infusionPreparada: 'No aplicable — no se diluye. Usar directamente del vial en ≤6 h tras sacar de nevera.',
      notas:             'NO diluir. NO mezclar con otros fármacos. Lavar la vía con SF antes. Administrar 2 viales consecutivos = dosis total 5 g. Solo para dabigatrán (Pradaxa®).',
    },

    presentaciones: [
      'Praxbind® 2.5 g/50 mL — vial 50 mL (50 mg/mL)',
      'Dosis completa = 2 viales = 5 g en 100 mL total',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Reversión dabigatrán (estándar)', dosis: '<b>5 g IV = 2 × 2.5 g consecutivos</b> (cada vial en 5-10 min)', via: 'IV' },
      { indicacion: 'Segunda dosis (si indicada)',      dosis: '5 g IV adicionales (misma pauta)',                                via: 'IV' },
    ],

    embarazo: 'Datos muy limitados. Usar solo en emergencias con hemorragia grave que amenaza la vida de la madre. Categoría no asignada (aprobado post-2015). Los beneficios en emergencia vital superan los riesgos teóricos.',

    pediatria: 'No aprobado en menores de 18 años. Uso off-label anecdótico en adolescentes. Sin datos de dosis pediátrica establecida.',

    adultoMayor: 'Sin ajuste de dosis. Los ancianos con IR acumulan más dabigatrán — mayor probabilidad de que la reversión sea necesaria y eficaz. Vigilar riesgo trombótico post-reversión (FA, prótesis valvulares).',

    insufRenal: 'Sin ajuste de dosis de idarucizumab. La IR aumenta la acumulación de dabigatrán — mayor duración del efecto y mayor necesidad de reversión. En IRC grave puede precisar segunda dosis de 5 g si el efecto persiste.',

    insufHepatica: 'Sin ajuste de dosis. Datos limitados en IH grave. El dabigatrán no se metaboliza hepaticamente — la IH afecta menos la farmacocinética del dabigatrán que la IR.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Praxbind® (idarucizumab).',
      'Pollack CV et al. Idarucizumab for Dabigatran Reversal. NEJM. 2015 (RE-VERSE AD — interim).',
      'Pollack CV et al. Idarucizumab for Dabigatran Reversal — Full Cohort Analysis. NEJM. 2017 (RE-VERSE AD — final).',
      'Hindricks G et al. 2020 ESC Guidelines for the diagnosis and management of atrial fibrillation. Eur Heart J. 2021.',
      'Ministerio de Sanidad. Informe de posicionamiento terapéutico de idarucizumab. IPT-24/2016.',
      'Connolly SJ et al. Dabigatran versus warfarin in patients with atrial fibrillation. NEJM. 2009 (RE-LY).',
    ],
  },

});
