/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/sangre-total.js
   HEMOTERAPIA · Hemocomponentes
   Fuentes: AABB Technical Manual 20th ed., SETS Guía 2023,
   Real Decreto 1088/2005, OMS Uso Clínico de la Sangre
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'sangre-total',
  nombre:         'Sangre Total',
  nombreGenerico: 'Whole Blood',
  categoria:      'hemocomponentes',
  tags:           ['hemoterapia', 'transfusión', 'sangre total', 'exanguinotransfusión', 'trauma masivo', 'hemocomponente'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Hemocomponente de ALTO RIESGO. La transfusión de grupo ABO/Rh incorrecto puede causar reacción hemolítica aguda mortal. Verificación doble a pie de cama obligatoria (identidad del paciente + grupo de la bolsa). Uso clínico actual muy limitado. Vigilancia estrecha los primeros 15 minutos.',

  nivel1: {

    puntosClave: [
      '<b>Uso actual muy raro</b> — reservado a exanguinotransfusión neonatal y protocolos de trauma masivo/transfusión masiva.',
      '<b>Contiene todos los elementos</b>: hematíes, plasma, factores de coagulación y plaquetas (estas pierden función tras 24 h de almacenamiento).',
      '<b>Compatibilidad ABO/Rh idéntica obligatoria</b> — no se aplican reglas de compatibilidad parcial como en los concentrados.',
      '<b>Verificación doble a pie de cama</b>: identidad del paciente + datos de la bolsa + grupo sanguíneo antes de conectar.',
      'Solo se infunde con <b>equipo con filtro (170-200 μm)</b> y <b>únicamente con SF 0.9%</b>.',
    ],

    resumenRapido: 'Sangre extraída del donante mezclada con anticoagulante-conservante (CPDA-1), sin fraccionar. Un volumen habitual es ~450-500 mL con hematocrito 35-45%. Aporta simultáneamente capacidad de transporte de oxígeno (hematíes) y volumen/proteínas (plasma). Su uso ha sido sustituido casi por completo por la terapia con componentes específicos, quedando reservada a exanguinotransfusión neonatal y algunos protocolos de transfusión masiva en trauma. Requiere compatibilidad ABO/Rh idéntica.',

    objetivoTerapeutico: 'Reposición simultánea de masa eritrocitaria y volumen en hemorragia masiva · Exanguinotransfusión neonatal (enfermedad hemolítica del RN) · Restauración de la capacidad de transporte de O2 y del volumen circulante en un solo producto',

    preparacion: {
      'Compatibilidad':       '<b>ABO/Rh IDÉNTICA obligatoria (no compatible cruzada)</b>',
      'Diluyente compatible': '<b>SOLO SF 0.9% — nunca SG 5% (hemólisis) ni Ringer Lactato (calcio → coágulos)</b>',
      'Equipo':               '<b>Equipo de transfusión con filtro de 170-200 μm</b>',
      'Volumen':              '~450-500 mL por unidad (adulto)',
      'Tiempo de infusión':   '<b>Iniciar lento (primeros 15 min) → completar en máximo 4 horas</b>',
      'Temperatura':          'Administrar a temperatura ambiente; calentador solo en transfusión masiva/neonatal',
      'Conservación':         '2-6 °C en nevera de banco de sangre validada — NUNCA en nevera doméstica',
      'Tiempo fuera de nevera': '<b>Iniciar en <30 min tras salir del banco; desechar si >30 min sin transfundir</b>',
      'Consentimiento':       'Verificar consentimiento informado firmado antes de transfundir',
    },

    vigilancia: {
      antes: [
        'Verificación DOBLE a pie de cama (dos profesionales): identidad del paciente con pulsera + nombre completo + fecha de nacimiento.',
        'Comprobar que el grupo ABO/Rh de la bolsa coincide con el del paciente y con la pruebas cruzadas.',
        'Verificar número de unidad, fecha de caducidad e integridad de la bolsa (sin coágulos, hemólisis ni cambio de color).',
        'Registrar constantes basales: TA, FC, Tª, FR y SpO2.',
        'Confirmar consentimiento informado firmado.',
        'Asegurar acceso venoso permeable de buen calibre (18 G en adulto).',
      ],
      durante: [
        '<b>Permanecer con el paciente los primeros 15 minutos</b> — la mayoría de reacciones graves aparecen precozmente.',
        'Iniciar a ritmo lento (~2 mL/min) los primeros 15 min; si tolera, ajustar para completar en ≤4 h.',
        'Constantes a los 15 min, luego según protocolo (cada 30-60 min) y al finalizar.',
        'Vigilar signos de reacción: fiebre/escalofríos, disnea, dolor lumbar o torácico, urticaria, hipotensión, dolor en zona de punción.',
        'Vigilar sobrecarga circulatoria (TACO): disnea, ingurgitación yugular, HTA, tos.',
      ],
      despues: [
        'Registrar constantes al finalizar y documentar volumen transfundido, número de unidad y hora de inicio/fin.',
        'Vigilar reacciones tardías (hasta 24 h): fiebre, ictericia, orina oscura (hemólisis).',
        'Conservar la bolsa y el equipo según protocolo si hubo cualquier reacción.',
        'Reevaluar hemoglobina/hematocrito y estado hemodinámico.',
      ],
      suspender: [
        '🚨 DETENER de inmediato ante fiebre + escalofríos, dolor lumbar/torácico, disnea, hipotensión o dolor en la vía.',
        'Mantener la vía permeable con SF 0.9% y avisar al médico y al banco de sangre.',
        'Sospecha de reacción hemolítica aguda (orina roja/oscura, dolor lumbar): urgencia vital.',
        'Sobrecarga circulatoria (TACO) con disnea/edema: detener y tratar.',
        'Conservar la bolsa, el equipo y enviar muestras al banco para investigación.',
      ],
    },

    incompatibilidades: [
      '<b>NUNCA co-administrar medicamentos por la misma vía que la sangre.</b>',
      '<b>Solo compatible con SF 0.9%</b> — SG 5% produce hemólisis; Ringer Lactato (calcio) favorece la coagulación.',
      'No añadir ningún fármaco a la bolsa.',
      'No usar la misma vía para nutrición parenteral.',
      'Grupo ABO/Rh no idéntico: contraindicación absoluta.',
    ],

    alertasSeguridad: [
      '🔴 REACCIÓN HEMOLÍTICA AGUDA por incompatibilidad ABO — potencialmente mortal. Verificación doble obligatoria.',
      '🔴 Verificación de identidad a pie de cama por 2 profesionales antes de conectar.',
      '🔴 Solo SF 0.9% — SG 5% hemoliza, Ringer coagula.',
      '🟠 Sobrecarga circulatoria (TACO) — riesgo alto por el gran volumen. Vigilar en cardiópatas y ancianos.',
      '🟠 Permanecer con el paciente los primeros 15 minutos.',
      '🟡 Las plaquetas y factores lábiles pierden función tras 24 h de almacenamiento.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Realizar la verificación doble a pie de cama con otro profesional — nunca omitir este paso.',
      'Comprobar integridad de la bolsa: ausencia de coágulos, hemólisis, cambio de color o fugas.',
      'Usar siempre equipo de transfusión con filtro y purgar con SF 0.9%.',
      'Registrar constantes antes, a los 15 min, durante y al finalizar.',
      'Permanecer junto al paciente los primeros 15 minutos e iniciar a ritmo lento.',
      'No transfundir una unidad en más de 4 horas (riesgo de contaminación bacteriana).',
      'Un solo equipo por cada 1-2 unidades; cambiar el equipo según protocolo.',
      'Educar al paciente para que avise ante escalofríos, picor, disnea o dolor lumbar.',
      'Documentar número de unidad, grupo, hora de inicio/fin y tolerancia.',
    ],

    efectosAdversos: [
      '🔴 Reacción hemolítica aguda (incompatibilidad ABO): fiebre, dolor lumbar, hipotensión, hemoglobinuria',
      '🔴 Sobrecarga circulatoria asociada a transfusión (TACO)',
      '🔴 Lesión pulmonar aguda asociada a transfusión (TRALI)',
      '🟠 Reacción febril no hemolítica (fiebre, escalofríos)',
      '🟠 Reacción alérgica (urticaria, prurito; raramente anafilaxia)',
      '🟠 Contaminación bacteriana / sepsis',
      '🟡 Hipotermia y toxicidad por citrato (hipocalcemia) en transfusión masiva',
      '🟡 Hiperpotasemia (unidades almacenadas, sobre todo en neonatos)',
    ],

    contraindicaciones: [
      'Grupo ABO/Rh no idéntico (contraindicación absoluta).',
      'Anemia crónica normovolémica que puede corregirse con concentrado de hematíes (evitar sobrecarga).',
      'Pacientes con riesgo de sobrecarga circulatoria en los que solo se necesita masa eritrocitaria.',
      'Déficit de IgA con anticuerpos anti-IgA (riesgo de anafilaxia) — valorar productos lavados.',
    ],

    fotosensibilidad: 'No aplica. Conservar en nevera validada de banco de sangre a 2-6 °C, nunca en nevera doméstica ni a temperatura ambiente prolongada.',

    estabilidad: {
      'Conservación':          '2-6 °C en nevera de banco de sangre validada',
      'Caducidad':             'Hasta 21-35 días según anticoagulante (CPDA-1: 35 días)',
      'Fuera de nevera':       '<b>Iniciar en <30 min; máximo 4 h de infusión total</b>',
      'Plaquetas/factores':    'Pierden función tras 24 h de almacenamiento',
      'NO congelar':           'La congelación destruye los hematíes (hemólisis)',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Una vez conectada la bolsa, completar la transfusión en un máximo de 4 horas.',
      dosisRestante:     'No guardar unidades parcialmente transfundidas; desechar según protocolo de residuos biológicos.',
      infusionPreparada: 'Iniciar en menos de 30 min tras retirarla del banco de sangre; no volver a refrigerar en nevera no validada.',
      notas:             'Solo SF 0.9% como diluyente compatible. Nunca añadir medicación a la bolsa ni compartir vía.',
    },

    presentaciones: [
      'Unidad de sangre total ~450-500 mL con anticoagulante CPDA-1',
      'Sangre total reconstituida (para exanguinotransfusión neonatal: concentrado de hematíes + plasma compatible)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Transfusión masiva / trauma',   dosis: 'Según protocolo de transfusión masiva y respuesta hemodinámica', via: 'IV' },
      { indicacion: 'Exanguinotransfusión neonatal', dosis: 'Aprox. 2 volemias (~160-170 mL/kg) recambiadas',                  via: 'IV' },
      { indicacion: 'Ritmo de inicio',                dosis: 'Lento los primeros 15 min (~2 mL/min), luego según tolerancia',   via: 'IV' },
      { indicacion: 'Tiempo máximo por unidad',       dosis: '≤ 4 horas por unidad',                                            via: 'IV' },
    ],

    embarazo: 'La transfusión está indicada en la gestante ante hemorragia grave con inestabilidad. En mujeres Rh negativo se debe garantizar sangre Rh negativo para evitar la aloinmunización. Valorar profilaxis anti-D según protocolo.',

    pediatria: 'La sangre total reconstituida se usa en exanguinotransfusión neonatal por enfermedad hemolítica del recién nacido (incompatibilidad Rh/ABO). En neonatos vigilar hiperpotasemia, hipocalcemia por citrato e hipotermia; usar productos frescos e irradiados según indicación.',

    adultoMayor: 'Riesgo elevado de sobrecarga circulatoria (TACO). Transfundir a ritmo lento, valorar diurético según indicación médica y vigilar signos de insuficiencia cardíaca.',

    insufRenal: 'Riesgo de hiperpotasemia y sobrecarga de volumen. Preferir concentrado de hematíes cuando solo se requiere corregir anemia. Vigilar potasio y balance hídrico.',

    insufHepatica: 'Menor capacidad de metabolizar el citrato del anticoagulante → riesgo de hipocalcemia en transfusión de gran volumen. Vigilar calcio iónico y signos de tetania.',
  },

  nivel4: {
    referencias: [
      'AABB. Technical Manual. 20th Edition. 2020.',
      'Sociedad Española de Transfusión Sanguínea y Terapia Celular (SETS). Guía sobre la transfusión de componentes sanguíneos. 2023.',
      'Real Decreto 1088/2005, requisitos técnicos y condiciones mínimas de la hemodonación.',
      'OMS. El uso clínico de la sangre. Manual de bolsillo.',
      'Carson JL et al. Clinical Practice Guidelines From the AABB: Red Blood Cell Transfusion Thresholds. JAMA. 2016.',
    ],
  },

});
