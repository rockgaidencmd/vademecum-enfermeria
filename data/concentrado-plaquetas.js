/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/concentrado-plaquetas.js
   HEMOTERAPIA · Hemocomponentes
   Fuentes: AABB Technical Manual 20th ed., SETS Guía 2023,
   Kaufman RM et al. AABB Platelet Transfusion Ann Intern Med 2015,
   OMS Uso Clínico de la Sangre
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'concentrado-plaquetas',
  nombre:         'Concentrado de Plaquetas',
  nombreGenerico: 'Platelet Concentrate',
  categoria:      'hemocomponentes',
  tags:           ['hemoterapia', 'transfusión', 'plaquetas', 'trombocitopenia', 'aféresis', 'pool', 'hemocomponente'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Hemocomponente de ALTO RIESGO. Se conserva a temperatura ambiente en agitación continua, lo que aumenta el riesgo de contaminación bacteriana y sepsis. Verificación doble a pie de cama obligatoria. Infusión rápida (20-30 min). Vigilancia estrecha los primeros 15 minutos.',

  nivel1: {

    puntosClave: [
      '<b>Previene o trata la hemorragia</b> en trombocitopenia o disfunción plaquetaria.',
      'Se obtiene por <b>pool de varios donantes</b> (a partir de sangre total) o por <b>aféresis de un único donante</b>.',
      '<b>Se conserva a 20-24 °C EN AGITACIÓN CONTINUA</b> — nunca en nevera (la refrigeración las inactiva).',
      'Umbral profiláctico habitual: <b>< 10 000/μL</b> (o < 20 000 con fiebre/sepsis, < 50 000 si procedimiento/sangrado).',
      'Infusión <b>rápida (20-30 min)</b>, con filtro; <b>compatibilidad ABO preferible</b> (Rh importa en mujeres en edad fértil → anti-D si Rh+ a Rh−).',
    ],

    resumenRapido: 'Componente rico en plaquetas suspendidas en plasma, obtenido por separación de sangre total (habitualmente en pool de 4-6 donantes) o por aféresis de un solo donante. Una dosis terapéutica de adulto (pool o una aféresis) suele elevar el recuento en 30 000-50 000/μL. Se conserva a temperatura ambiente con agitación suave y constante, lo que limita su vida útil a 5-7 días y aumenta el riesgo de contaminación bacteriana respecto a otros componentes.',

    objetivoTerapeutico: 'Prevenir la hemorragia espontánea en trombocitopenia grave · Tratar el sangrado activo por trombocitopenia o disfunción plaquetaria · Cobertura plaquetaria previa a procedimientos invasivos o cirugía',

    preparacion: {
      'Compatibilidad':       '<b>ABO compatible preferible; Rh relevante en mujeres en edad fértil</b>',
      'Diluyente':            'No requiere dilución; si se purga, <b>SF 0.9%</b>',
      'Equipo':               '<b>Equipo de transfusión con filtro (170-200 μm) — NO usar filtro de leucodepleción de cabecera para hematíes</b>',
      'Conservación':         '<b>20-24 °C EN AGITACIÓN CONTINUA — NUNCA refrigerar</b>',
      'Volumen':              '~200-350 mL (pool) · ~200 mL (aféresis)',
      'Rendimiento':          '1 dosis de adulto ≈ +30 000-50 000/μL',
      'Tiempo de infusión':   '<b>Rápido: 20-30 min por dosis (máx 4 h)</b>',
      'Rh negativo a Rh+':    'En mujeres en edad fértil Rh− que reciben plaquetas Rh+: valorar <b>profilaxis anti-D</b>',
      'Caducidad':            '5-7 días desde la extracción (por riesgo bacteriano)',
    },

    vigilancia: {
      antes: [
        'Verificación DOBLE a pie de cama: identidad del paciente frente a bolsa y documentación.',
        'Comprobar grupo/compatibilidad, número de unidad, caducidad e integridad (aspecto "arremolinado" normal = swirling).',
        'Descartar aspecto turbio o agregados anómalos (posible contaminación).',
        'Constantes basales: TA, FC, Tª, FR, SpO2.',
        'Consentimiento informado firmado y acceso venoso permeable.',
        'Verificar recuento plaquetario y la indicación/umbral.',
      ],
      durante: [
        '<b>Permanecer con el paciente los primeros 15 minutos.</b>',
        'Infundir de forma rápida (20-30 min) con filtro adecuado.',
        'Constantes a los 15 min y al finalizar.',
        'Vigilar reacción: fiebre/escalofríos (frecuente), urticaria, disnea, hipotensión.',
        'Alta sospecha de sepsis si fiebre/escalofríos/hipotensión bruscos (riesgo bacteriano por conservación a Tª ambiente).',
      ],
      despues: [
        'Constantes al finalizar; documentar unidad, tipo (pool/aféresis) y horario.',
        'Recuento plaquetario post-transfusión (10-60 min o a la hora) para valorar rendimiento.',
        'Valorar refractariedad si no hay incremento esperado (posible aloinmunización HLA).',
        'Administrar anti-D si procede (Rh− receptor de plaquetas Rh+ en edad fértil).',
      ],
      suspender: [
        '🚨 DETENER ante fiebre + escalofríos, hipotensión, disnea o dolor — descartar sepsis y reacción.',
        'Mantener vía con SF 0.9%, avisar a médico y banco de sangre.',
        'Enviar la bolsa para hemocultivo si se sospecha contaminación bacteriana.',
        'Reacción alérgica grave/anafilaxia: detener y tratar.',
        'Conservar bolsa y equipo; notificar a hemovigilancia.',
      ],
    },

    incompatibilidades: [
      '<b>Nunca refrigerar</b> — la conservación en frío inactiva irreversiblemente las plaquetas.',
      'No co-administrar medicación por la misma vía.',
      'No usar filtros de leucorreducción de cabecera pensados para hematíes que retengan plaquetas.',
      'No añadir fármacos a la bolsa.',
      'Solo SF 0.9% si se requiere purgar.',
    ],

    alertasSeguridad: [
      '🔴 CONTAMINACIÓN BACTERIANA / SEPSIS — mayor riesgo por conservación a temperatura ambiente. Sospechar ante fiebre/hipotensión bruscas.',
      '🔴 NUNCA refrigerar las plaquetas.',
      '🔴 Verificación doble a pie de cama obligatoria.',
      '🟠 Reacción febril y alérgica más frecuentes que con hematíes.',
      '🟠 Rh negativo en mujer en edad fértil que recibe plaquetas Rh+: profilaxis anti-D.',
      '🟡 Refractariedad plaquetaria por aloinmunización HLA — valorar plaquetas HLA compatibles.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar que las plaquetas se han mantenido a temperatura ambiente con agitación — nunca en nevera.',
      'Verificación doble a pie de cama antes de conectar.',
      'Comprobar el "swirling" (aspecto arremolinado) como signo de viabilidad; descartar bolsas turbias o con agregados.',
      'Infundir rápido (20-30 min) con el filtro adecuado; permanecer los primeros 15 minutos.',
      'Registrar constantes antes, a los 15 min y al finalizar.',
      'Ante fiebre/escalofríos con hipotensión: detener y descartar sepsis con urgencia.',
      'Solicitar recuento plaquetario post-transfusión para evaluar rendimiento.',
      'Gestionar profilaxis anti-D si receptor Rh− en edad fértil recibe plaquetas Rh+.',
      'Documentar tipo (pool/aféresis), número de unidad, hora y tolerancia.',
    ],

    efectosAdversos: [
      '🔴 Sepsis por contaminación bacteriana (mayor riesgo entre los hemocomponentes)',
      '🔴 Reacción alérgica grave / anafilaxia',
      '🔴 TRALI / TACO',
      '🟠 Reacción febril no hemolítica (frecuente)',
      '🟠 Urticaria, prurito',
      '🟡 Refractariedad plaquetaria (aloinmunización HLA)',
      '🟡 Aloinmunización Rh (requiere anti-D en mujeres en edad fértil)',
    ],

    contraindicaciones: [
      'Púrpura trombótica trombocitopénica (PTT) y trombocitopenia inducida por heparina (TIH): contraindicadas salvo hemorragia con riesgo vital (pueden empeorar la trombosis).',
      'Trombocitopenia inmune (PTI) sin hemorragia grave: respuesta escasa; reservar para sangrado con riesgo vital.',
      'Refractariedad por aloinmunización sin plaquetas compatibles: valorar HLA/HPA compatibles.',
    ],

    fotosensibilidad: 'No aplica. Conservación estricta a 20-24 °C en agitador de plaquetas validado. La refrigeración las inactiva.',

    estabilidad: {
      'Conservación':      '<b>20-24 °C EN AGITACIÓN CONTINUA</b>',
      'Caducidad':         '5-7 días desde la extracción',
      'NUNCA refrigerar':  'La conservación en frío inactiva las plaquetas',
      'Aspecto normal':    'Swirling (arremolinado) presente; descartar si turbio o con agregados',
      'Irradiadas':        'Según indicación (inmunodeprimidos, donante familiar)',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Una vez conectada, infundir de forma rápida (20-30 min); no exceder 4 h.',
      dosisRestante:     'No conservar dosis parcialmente transfundidas; desechar según protocolo biológico.',
      infusionPreparada: 'Transfundir en cuanto se dispone de la unidad; no refrigerar en ningún momento.',
      notas:             'Riesgo bacteriano elevado por conservación a temperatura ambiente. Vigilar sepsis. Solo SF 0.9% si se purga.',
    },

    presentaciones: [
      'Pool de plaquetas (de sangre total, 4-6 donantes) ~200-350 mL',
      'Plaquetas de aféresis (donante único) ~200 mL — menor exposición a donantes',
      'Plaquetas irradiadas (prevención de EICH-AT)',
      'Plaquetas leucodepletadas / HLA compatibles (refractariedad)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Profilaxis (trombocitopenia estable)', dosis: '1 dosis de adulto (pool o 1 aféresis); umbral < 10 000/μL', via: 'IV' },
      { indicacion: 'Fiebre / sepsis',                       dosis: 'Umbral < 20 000/μL',                                        via: 'IV' },
      { indicacion: 'Procedimiento invasivo / cirugía',      dosis: 'Umbral < 50 000/μL (< 100 000 en neurocirugía/SNC)',        via: 'IV' },
      { indicacion: 'Rendimiento esperado',                  dosis: '1 dosis adulto ≈ +30 000-50 000/μL',                        via: 'IV' },
      { indicacion: 'Pediatría',                             dosis: '10-15 mL/kg',                                               via: 'IV' },
    ],

    embarazo: 'Indicadas ante trombocitopenia con hemorragia o para procedimientos. En mujeres Rh negativo que reciben plaquetas Rh positivo, administrar profilaxis anti-D para prevenir aloinmunización.',

    pediatria: 'Dosis 10-15 mL/kg. En neonatos e inmunodeprimidos utilizar plaquetas irradiadas y leucodepletadas. Infusión rápida con filtro adecuado y vigilancia de reacciones.',

    adultoMayor: 'Vigilar sobrecarga y reacciones febriles/alérgicas. Ritmo de infusión rápido pero con vigilancia estrecha en cardiópatas.',

    insufRenal: 'La disfunción plaquetaria urémica puede no responder a la transfusión; valorar desmopresina como alternativa/coadyuvante. Transfundir solo ante sangrado o procedimiento.',

    insufHepatica: 'Trombocitopenia frecuente por hiperesplenismo. La respuesta puede ser subóptima por secuestro esplénico. Transfundir según sangrado/procedimiento y respuesta.',
  },

  nivel4: {
    referencias: [
      'Kaufman RM et al. Platelet Transfusion: A Clinical Practice Guideline From the AABB. Ann Intern Med. 2015.',
      'AABB. Technical Manual. 20th Edition. 2020.',
      'Sociedad Española de Transfusión Sanguínea (SETS). Guía sobre la transfusión de componentes sanguíneos. 2023.',
      'Estcourt LJ et al. Guidelines for the use of platelet transfusions. Br J Haematol. 2017.',
      'OMS. El uso clínico de la sangre. Manual de bolsillo.',
    ],
  },

});
