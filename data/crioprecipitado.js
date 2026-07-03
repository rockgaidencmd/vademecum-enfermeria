/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/crioprecipitado.js
   HEMOTERAPIA · Hemocomponentes
   Fuentes: AABB Technical Manual 20th ed., SETS Guía 2023,
   BSH Guidelines FFP/Cryo Br J Haematol 2018,
   OMS Uso Clínico de la Sangre
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'crioprecipitado',
  nombre:         'Crioprecipitado',
  nombreGenerico: 'Cryoprecipitate',
  categoria:      'hemocomponentes',
  tags:           ['hemoterapia', 'transfusión', 'crioprecipitado', 'fibrinógeno', 'factor VIII', 'von Willebrand', 'factor XIII', 'hemocomponente'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Hemocomponente de ALTO RIESGO. Fuente concentrada de fibrinógeno para hipofibrinogenemia con sangrado. Requiere descongelación controlada y uso muy precoz. Verificación doble a pie de cama obligatoria. Infusión rápida.',

  nivel1: {

    puntosClave: [
      '<b>Fracción rica en fibrinógeno</b>, además de Factor VIII, Factor von Willebrand y Factor XIII.',
      'Indicación principal: <b>hipofibrinogenemia con sangrado</b> (fibrinógeno < 1.5-2 g/L), CID, hemorragia obstétrica y transfusión masiva.',
      'Se obtiene de la <b>fracción que precipita al descongelar el PFC a 1-6 °C</b> y se vuelve a congelar.',
      '<b>Descongelar a 37 °C</b> y transfundir de inmediato (idealmente <4-6 h) — infusión rápida con filtro.',
      'Dosis habitual: <b>1 unidad por cada 5-10 kg</b> (o pools de 8-10 unidades en adulto); compatibilidad ABO preferible.',
    ],

    resumenRapido: 'Componente obtenido a partir del plasma fresco congelado: al descongelarlo de forma controlada entre 1-6 °C precipita una fracción proteica que se recupera y se recongela. Es muy rico en fibrinógeno (factor I), y contiene también Factor VIII, Factor von Willebrand y Factor XIII. Su uso principal actual es la reposición de fibrinógeno en la hemorragia con hipofibrinogenemia (CID, hemorragia obstétrica masiva, transfusión masiva), aunque en muchos centros se prefiere el concentrado de fibrinógeno cuando está disponible.',

    objetivoTerapeutico: 'Reponer fibrinógeno en hipofibrinogenemia con hemorragia · Soporte hemostático en CID, hemorragia obstétrica y transfusión masiva · Aporte de Factor XIII o de Factor VIII/von Willebrand cuando no se dispone de concentrados específicos',

    preparacion: {
      'Compatibilidad':       'ABO compatible preferible (volumen pequeño; menos crítico que hematíes)',
      'Descongelación':       '<b>Baño a 37 °C validado — nunca a temperatura ambiente ni microondas</b>',
      'Equipo':               'Equipo de transfusión con filtro (170-200 μm)',
      'Contenido por unidad': '≥ 150 mg de fibrinógeno, Factor VIII, FvW y Factor XIII (~10-20 mL)',
      'Dosis habitual':       '<b>1 unidad / 5-10 kg</b> (pool de 8-10 unidades en adulto)',
      'Rendimiento':          'Un pool de adulto sube el fibrinógeno ≈ 0.5-1 g/L',
      'Tiempo de infusión':   '<b>Rápido (bolo/en 10-30 min por pool); máx 4 h</b>',
      'Uso tras descongelar': '<b>Idealmente <4-6 h; no recongelar</b>',
      'Conservación congelado': '≤ −25 °C hasta 36 meses (según normativa)',
    },

    vigilancia: {
      antes: [
        'Verificación DOBLE a pie de cama: identidad del paciente frente a bolsa/pool y documentación.',
        'Comprobar compatibilidad ABO, número de unidades, caducidad e integridad.',
        'Verificar descongelación correcta (37 °C).',
        'Constantes basales y nivel de fibrinógeno basal (objetivo > 1.5-2 g/L en sangrado).',
        'Consentimiento informado y acceso venoso permeable.',
      ],
      durante: [
        '<b>Permanecer con el paciente los primeros 15 minutos.</b>',
        'Infusión rápida con filtro; constantes a los 15 min y al finalizar.',
        'Vigilar reacción alérgica y febril.',
        'Vigilar signos de trombosis si se administran grandes cantidades.',
      ],
      despues: [
        'Constantes al finalizar; documentar número de unidades/pool, grupo y horario.',
        'Reevaluar fibrinógeno para valorar respuesta y necesidad de dosis adicionales.',
        'Vigilar reacciones tardías.',
      ],
      suspender: [
        '🚨 DETENER ante reacción alérgica grave/anafilaxia, disnea o fiebre con afectación clínica.',
        'Mantener vía con SF 0.9%, avisar a médico y banco de sangre.',
        'Conservar bolsa y equipo; notificar a hemovigilancia.',
      ],
    },

    incompatibilidades: [
      'No co-administrar medicación por la misma vía.',
      'Solo SF 0.9% si se requiere purgar.',
      'No recongelar tras la descongelación.',
      'No usar como fuente de volumen.',
    ],

    alertasSeguridad: [
      '🔴 Verificación doble a pie de cama obligatoria.',
      '🔴 Descongelar a 37 °C y transfundir de inmediato (los factores decaen rápido).',
      '🟠 Reacciones alérgicas/febriles posibles.',
      '🟠 En muchos centros el concentrado de fibrinógeno es de elección cuando está disponible (dosificación precisa, inactivado viralmente).',
      '🟡 Riesgo trombótico teórico con dosis muy altas de fibrinógeno.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar la descongelación a 37 °C y transfundir sin demora (uso muy precoz).',
      'Verificación doble a pie de cama; comprobar número de unidades del pool e integridad.',
      'Infundir de forma rápida con filtro; permanecer los primeros 15 minutos.',
      'Registrar constantes antes, a los 15 min y al finalizar.',
      'Reevaluar el fibrinógeno tras la transfusión para valorar eficacia.',
      'Vigilar reacciones alérgicas/febriles; tener preparado el manejo.',
      'Documentar número de unidades/pool, grupo, hora y tolerancia.',
    ],

    efectosAdversos: [
      '🔴 Reacción alérgica grave / anafilaxia (poco frecuente)',
      '🟠 Reacción febril no hemolítica',
      '🟠 Reacción alérgica leve (urticaria)',
      '🟡 Riesgo trombótico con dosis elevadas',
      '🟡 Transmisión de infecciones (riesgo muy bajo)',
    ],

    contraindicaciones: [
      'Uso como expansor de volumen (no indicado).',
      'Disponibilidad de concentrado de fibrinógeno o de factores específicos (preferibles por seguridad y dosificación).',
      'Déficit específico corregible con concentrado (Factor XIII, FvW) cuando esté disponible.',
      'Ausencia de sangrado con fibrinógeno normal.',
    ],

    fotosensibilidad: 'No aplica. Conservación congelada ≤ −25 °C. No recongelar tras descongelar.',

    estabilidad: {
      'Congelado':        '≤ −25 °C, hasta 36 meses (según normativa)',
      'Descongelación':   '37 °C en baño validado',
      'Tras descongelar': '<b>Uso precoz (idealmente <4-6 h); no recongelar</b>',
      'Contenido clave':  'Fibrinógeno, Factor VIII, Factor von Willebrand, Factor XIII',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Una vez descongelado y conectado, transfundir de forma rápida; no exceder 4 h.',
      dosisRestante:     'No conservar restos; desechar según protocolo biológico.',
      infusionPreparada: 'Transfundir inmediatamente tras la descongelación; no recongelar.',
      notas:             'Fuente concentrada de fibrinógeno. Considerar concentrado de fibrinógeno como alternativa de elección donde esté disponible.',
    },

    presentaciones: [
      'Crioprecipitado — unidad individual (~10-20 mL, ≥150 mg fibrinógeno)',
      'Pool de crioprecipitado (8-10 unidades) para dosis de adulto',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hipofibrinogenemia con sangrado', dosis: '<b>1 unidad / 5-10 kg</b> (pool 8-10 U adulto); objetivo fibrinógeno > 1.5-2 g/L', via: 'IV' },
      { indicacion: 'Hemorragia obstétrica / CID',      dosis: 'Según fibrinógeno y sangrado (protocolo hemorragia masiva)',    via: 'IV' },
      { indicacion: 'Déficit de Factor XIII',           dosis: 'Según indicación hematológica (si no hay concentrado específico)', via: 'IV' },
      { indicacion: 'Rendimiento esperado',             dosis: 'Pool adulto ≈ +0.5-1 g/L de fibrinógeno',                       via: 'IV' },
    ],

    embarazo: 'Muy relevante en la hemorragia obstétrica masiva con hipofibrinogenemia (objetivo de fibrinógeno más alto, > 2 g/L, en gestación). Reponer de forma dirigida junto con el protocolo de hemorragia posparto.',

    pediatria: 'Dosis 1 unidad por cada 5-10 kg. Reevaluar fibrinógeno. Usar componentes compatibles y, si procede, inactivados/irradiados según el paciente.',

    adultoMayor: 'Vigilar reacciones y estado hemodinámico. El volumen es pequeño, por lo que el riesgo de sobrecarga es menor que con PFC.',

    insufRenal: 'Sin ajuste específico. Vigilar reacciones. El pequeño volumen limita el riesgo de sobrecarga.',

    insufHepatica: 'Indicación frecuente por hipofibrinogenemia de la hepatopatía con sangrado. Corregir de forma dirigida por objetivos de fibrinógeno.',
  },

  nivel4: {
    referencias: [
      'Green L et al. British Society for Haematology Guidelines on the spectrum of fresh frozen plasma and cryoprecipitate products. Br J Haematol. 2018.',
      'AABB. Technical Manual. 20th Edition. 2020.',
      'Sociedad Española de Transfusión Sanguínea (SETS). Guía sobre la transfusión de componentes sanguíneos. 2023.',
      'Wikkelsø A et al. Fibrinogen concentrate in bleeding patients. Cochrane Database Syst Rev. 2013.',
      'OMS. El uso clínico de la sangre. Manual de bolsillo.',
    ],
  },

});
