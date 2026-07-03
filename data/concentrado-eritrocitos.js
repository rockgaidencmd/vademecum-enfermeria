/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/concentrado-eritrocitos.js
   HEMOTERAPIA · Hemocomponentes
   Fuentes: AABB Technical Manual 20th ed., SETS Guía 2023,
   Carson JL et al. AABB RBC Thresholds JAMA 2016,
   OMS Uso Clínico de la Sangre
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'concentrado-eritrocitos',
  nombre:         'Concentrado de Eritrocitos',
  nombreComercial: 'Paquete Globular / Concentrado de Hematíes',
  nombreGenerico: 'Packed Red Blood Cells (PRBC)',
  categoria:      'hemocomponentes',
  tags:           ['hemoterapia', 'transfusión', 'paquete globular', 'concentrado de hematíes', 'anemia', 'hemorragia', 'hemocomponente'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Hemocomponente de ALTO RIESGO y el más transfundido. La incompatibilidad ABO/Rh puede provocar reacción hemolítica aguda mortal. Verificación doble a pie de cama obligatoria. Solo compatible con SF 0.9%. Vigilancia estrecha los primeros 15 minutos.',

  nivel1: {

    puntosClave: [
      '<b>El hemocomponente más transfundido</b> — aumenta la capacidad de transporte de oxígeno en anemia sintomática o hemorragia aguda.',
      '<b>1 unidad sube la Hb ≈ 1 g/dL</b> (o el hematocrito ~3%) en un adulto sin sangrado activo.',
      'Umbral restrictivo habitual: transfundir con <b>Hb < 7 g/dL</b> (o <8 g/dL en cardiopatía/cirugía), individualizado.',
      '<b>Compatibilidad ABO/Rh</b>: en urgencia vital sin grupo conocido → <b>O negativo</b> (dador universal de hematíes).',
      'Verificación doble a pie de cama · equipo con filtro 170-200 μm · <b>solo SF 0.9%</b> · ≤ 4 h por unidad.',
    ],

    resumenRapido: 'Componente obtenido por centrifugación de la sangre total tras retirar la mayor parte del plasma; contiene la masa de glóbulos rojos con un hematocrito del 55-75% y un volumen aproximado de 250-350 mL por unidad. Es el hemocomponente de elección para corregir la anemia sintomática y restaurar la capacidad de transporte de oxígeno. La estrategia transfusional restrictiva (Hb < 7 g/dL en la mayoría de pacientes estables) es la recomendada por su mejor perfil de seguridad.',

    objetivoTerapeutico: 'Aumentar la capacidad de transporte de oxígeno en anemia sintomática · Reponer masa eritrocitaria en hemorragia aguda · Mantener una hemoglobina adecuada según el umbral clínico individualizado',

    preparacion: {
      'Compatibilidad':       '<b>ABO/Rh compatible (O negativo si urgencia sin grupo)</b>',
      'Diluyente compatible': '<b>SOLO SF 0.9% — nunca SG 5% (hemólisis) ni Ringer Lactato (calcio)</b>',
      'Equipo':               '<b>Equipo de transfusión con filtro de 170-200 μm</b>',
      'Volumen':              '~250-350 mL por unidad (Hto 55-75%)',
      'Rendimiento':          '<b>1 unidad ≈ +1 g/dL de Hb (~+3% Hto)</b> en adulto sin sangrado',
      'Tiempo de infusión':   '<b>Lento los primeros 15 min → completar en 1.5-4 h (máx 4 h)</b>',
      'Calentador':           'Solo en transfusión masiva, exanguinotransfusión o crioaglutininas (calentador validado)',
      'Conservación':         '2-6 °C en nevera de banco validada',
      'Tiempo fuera de nevera': '<b>Iniciar en <30 min; desechar si >30 min sin transfundir</b>',
    },

    vigilancia: {
      antes: [
        'Verificación DOBLE a pie de cama por 2 profesionales: identidad del paciente (pulsera + nombre + fecha de nacimiento) frente a bolsa y pruebas cruzadas.',
        'Comprobar grupo ABO/Rh de la bolsa, número de unidad, caducidad e integridad (sin coágulos ni hemólisis).',
        'Constantes basales: TA, FC, Tª, FR, SpO2.',
        'Consentimiento informado firmado.',
        'Acceso venoso permeable de buen calibre (18-20 G).',
        'Valorar indicación y umbral (Hb) — evitar transfusiones innecesarias.',
      ],
      durante: [
        '<b>Permanecer con el paciente los primeros 15 minutos</b> e iniciar a ritmo lento.',
        'Constantes a los 15 min, periódicamente y al finalizar.',
        'Vigilar reacción: fiebre/escalofríos, disnea, dolor lumbar/torácico, urticaria, hipotensión.',
        'Vigilar sobrecarga (TACO): disnea, HTA, ingurgitación yugular, tos, SpO2 descendente.',
        'Ajustar el ritmo para completar en ≤ 4 h.',
      ],
      despues: [
        'Constantes al finalizar; documentar unidad, grupo, volumen y horario.',
        'Control de hemoglobina/hematocrito post-transfusión (según protocolo).',
        'Vigilar reacciones tardías (hemólisis diferida, fiebre) hasta 24 h.',
        'Valorar respuesta clínica (mejoría de disnea, taquicardia, astenia).',
      ],
      suspender: [
        '🚨 DETENER ante fiebre + escalofríos, dolor lumbar/torácico, disnea, hipotensión o dolor en la vía.',
        'Mantener vía con SF 0.9%, avisar a médico y banco de sangre.',
        'Sospecha de reacción hemolítica aguda (hemoglobinuria, dolor lumbar): urgencia vital.',
        'TACO con disnea/edema pulmonar: detener y tratar (O2, diurético según indicación).',
        'Conservar bolsa y equipo; enviar muestras al banco para estudio.',
      ],
    },

    incompatibilidades: [
      '<b>Solo SF 0.9%</b> — SG 5% hemoliza los hematíes; Ringer Lactato (Ca2+) favorece la coagulación en la vía.',
      '<b>Nunca co-administrar medicación</b> por la misma vía que el concentrado.',
      'No añadir fármacos a la bolsa.',
      'No compartir la vía con nutrición parenteral.',
      'Grupo ABO/Rh incompatible: contraindicación absoluta.',
    ],

    alertasSeguridad: [
      '🔴 REACCIÓN HEMOLÍTICA AGUDA por ABO incompatible — mortal. Verificación doble obligatoria.',
      '🔴 Solo SF 0.9%; jamás SG 5% ni Ringer en la misma vía.',
      '🔴 En urgencia sin grupo: O negativo (hematíes). Mujeres en edad fértil: preferir Rh negativo.',
      '🟠 Sobrecarga circulatoria (TACO) — ancianos, cardiópatas, nefrópatas. Transfundir lento.',
      '🟠 Permanecer con el paciente los primeros 15 minutos.',
      '🟡 Adoptar estrategia restrictiva (Hb < 7 g/dL) salvo indicación específica.',
    ],
  },

  modulos: {
    respiratorio: `
      <b>Diferenciar TACO vs TRALI (disnea durante/tras transfusión):</b><br/>
      • <b>TACO (sobrecarga):</b> HTA, ingurgitación yugular, edema, respuesta a diuréticos. Aparece durante o hasta 6-12 h. Factores: gran volumen, ancianos, cardiopatía, IR.<br/>
      • <b>TRALI (lesión pulmonar aguda):</b> hipotensión, fiebre, edema pulmonar no cardiogénico en las primeras 6 h; NO responde a diuréticos. Requiere soporte respiratorio.<br/>
      <b>En ambos: DETENER la transfusión</b>, administrar oxígeno, avisar y notificar a hemovigilancia.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificación doble a pie de cama con otro profesional antes de conectar — paso irrenunciable.',
      'Purgar el equipo con filtro usando SF 0.9%; comprobar integridad de la bolsa.',
      'Iniciar a ritmo lento y permanecer con el paciente los primeros 15 minutos.',
      'Registrar constantes antes, a los 15 min, durante y al finalizar.',
      'No superar 4 horas de infusión por unidad.',
      'Educar al paciente para avisar ante escalofríos, prurito, disnea o dolor lumbar.',
      'En pacientes con riesgo de TACO: ritmo lento y valorar diurético según indicación médica.',
      'Documentar número de unidad, grupo, hora de inicio/fin y tolerancia.',
      'Un equipo por cada 1-2 unidades; cambiarlo según protocolo institucional.',
    ],

    efectosAdversos: [
      '🔴 Reacción hemolítica aguda (incompatibilidad ABO)',
      '🔴 Sobrecarga circulatoria asociada a transfusión (TACO)',
      '🔴 Lesión pulmonar aguda asociada a transfusión (TRALI)',
      '🟠 Reacción febril no hemolítica',
      '🟠 Reacción alérgica (urticaria; raramente anafilaxia)',
      '🟠 Contaminación bacteriana / sepsis (menor que en plaquetas)',
      '🟡 Aloinmunización eritrocitaria (reacción hemolítica tardía)',
      '🟡 Hiperpotasemia / hipocalcemia en transfusión masiva',
    ],

    contraindicaciones: [
      'Grupo ABO/Rh incompatible (contraindicación absoluta).',
      'Anemia carencial (ferropénica, B12, fólico) corregible con tratamiento específico, salvo anemia sintomática grave.',
      'Uso como expansor de volumen sin anemia (no es su indicación).',
      'Déficit de IgA con anti-IgA: valorar hematíes lavados.',
    ],

    fotosensibilidad: 'No aplica. Conservar a 2-6 °C en nevera de banco validada. La congelación destruye los hematíes.',

    estabilidad: {
      'Conservación':      '2-6 °C en nevera de banco de sangre validada',
      'Caducidad':         'Hasta 42 días con solución aditiva (SAG-M)',
      'Fuera de nevera':   '<b>Iniciar en <30 min; máximo 4 h de infusión</b>',
      'Irradiado/leucodepletado': 'Según indicación (inmunodeprimidos, neonatos, familiares directos)',
      'NO congelar':       'Salvo procesamiento especial (hematíes criopreservados en glicerol)',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Una vez conectada, completar la transfusión en un máximo de 4 horas.',
      dosisRestante:     'No conservar unidades parcialmente transfundidas; desechar según protocolo biológico.',
      infusionPreparada: 'Iniciar en menos de 30 min tras salir del banco; no reintroducir en nevera no validada.',
      notas:             'Solo SF 0.9% como diluyente. Calentador validado solo si transfusión masiva, rápida o crioaglutininas.',
    },

    presentaciones: [
      'Concentrado de hematíes en solución aditiva SAG-M ~250-350 mL',
      'Concentrado de hematíes leucodepletado (filtrado)',
      'Concentrado de hematíes irradiado (prevención de EICH-AT en inmunodeprimidos)',
      'Concentrado de hematíes lavados (déficit de IgA, reacciones alérgicas graves)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Anemia sintomática adulto',      dosis: '1 unidad → reevaluar (≈ +1 g/dL Hb); umbral Hb < 7 g/dL',      via: 'IV' },
      { indicacion: 'Cardiopatía / perioperatorio',   dosis: 'Umbral Hb < 8 g/dL, individualizado',                          via: 'IV' },
      { indicacion: 'Hemorragia aguda',                dosis: 'Según pérdidas y respuesta hemodinámica (protocolo masivo)',   via: 'IV' },
      { indicacion: 'Pediatría',                       dosis: '10-15 mL/kg → sube Hb ≈ 2-3 g/dL',                             via: 'IV' },
      { indicacion: 'Tiempo por unidad',               dosis: '1.5-4 h (máx 4 h); lento los primeros 15 min',                via: 'IV' },
    ],

    embarazo: 'Indicado en anemia grave sintomática o hemorragia. En mujeres Rh negativo utilizar hematíes Rh negativo para evitar aloinmunización y enfermedad hemolítica en gestaciones futuras. Valorar profilaxis anti-D.',

    pediatria: 'Dosis 10-15 mL/kg (sube Hb ~2-3 g/dL). En neonatos e inmunodeprimidos usar componentes irradiados y leucodepletados; vigilar hiperpotasemia, hipocalcemia por citrato e hipotermia. Preferir unidades frescas en neonatos.',

    adultoMayor: 'Alto riesgo de TACO: transfundir de una unidad en una unidad, ritmo lento y valorar diurético. Reevaluar clínicamente antes de una segunda unidad.',

    insufRenal: 'Riesgo de sobrecarga de volumen e hiperpotasemia (más con unidades almacenadas). Transfundir lento, vigilar potasio y balance hídrico; coordinar con sesiones de diálisis si procede.',

    insufHepatica: 'Metabolismo del citrato reducido en transfusión masiva → riesgo de hipocalcemia. Vigilar calcio iónico y coagulación.',
  },

  nivel4: {
    referencias: [
      'Carson JL et al. Clinical Practice Guidelines From the AABB: Red Blood Cell Transfusion Thresholds and Storage. JAMA. 2016.',
      'AABB. Technical Manual. 20th Edition. 2020.',
      'Sociedad Española de Transfusión Sanguínea (SETS). Guía sobre la transfusión de componentes sanguíneos. 2023.',
      'OMS. El uso clínico de la sangre. Manual de bolsillo.',
      'Mueller MM et al. Patient Blood Management: Recommendations of the ICC-PBM. JAMA. 2019.',
    ],
  },

});
