/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/ketorolaco.js
   Fuentes: CIMA AEMPS (Toradol/Droal), FDA DailyMed,
   AEMPS Nota de Seguridad Ketorolaco 2021,
   SEIMC/SEMES Guías de Manejo del Dolor Agudo
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'ketorolaco',
  nombre:         'Ketorolaco',
  nombreComercial: 'Toradol® / Droal®',
  nombreGenerico: 'Ketorolac Trometamol',
  categoria:      'analgesia',
  tags:           ['AINE', 'analgésico', 'dolor agudo', 'postoperatorio', 'cólico renal', 'antiinflamatorio', 'ahorrador de opioides'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'AINE de alta potencia analgésica con riesgo significativo de sangrado gastrointestinal, nefrotoxicidad y sangrado perioperatorio. Uso limitado a un MÁXIMO de 5 días (IV+oral combinados) según la AEMPS. Contraindicado en insuficiencia renal, sangrado activo, cirugía con alto riesgo hemorrágico y en combinación con otros AINEs o anticoagulantes.',

  nivel1: {

    puntosClave: [
      '<b>AINE de alta potencia analgésica</b>, equivalente a opioides menores — sin depresión respiratoria ni sedación.',
      '<b>Duración MÁXIMA 5 días</b> (IV + oral combinados) — no es un tratamiento crónico, uso limitado al dolor agudo.',
      'Dosis: <b>10-30 mg IV/IM c/6 h</b> (máx 90 mg/día adultos, 60 mg/día en >65 años o <50 kg).',
      '<b>Riesgo de sangrado GI y renal</b> — no combinar con otros AINEs, anticoagulantes o en pacientes con función renal comprometida.',
      'Muy útil en <b>cólico renal, dolor postoperatorio y traumatológico</b> — efecto ahorrador de opioides.',
    ],

    resumenRapido: 'Antiinflamatorio no esteroideo (AINE) del grupo de los ácidos acéticos, con potencia analgésica notablemente superior a otros AINEs, comparable en muchos contextos a la de opioides menores, pero sin depresión respiratoria ni sedación. Inhibe la ciclooxigenasa (COX-1/COX-2) no selectiva, reduciendo la síntesis de prostaglandinas. Su uso está estrictamente limitado a 5 días por el riesgo acumulado de toxicidad gastrointestinal, renal y hemorrágica, siendo especialmente valioso en el manejo del dolor agudo postoperatorio, traumatológico y en el cólico renal.',

    objetivoTerapeutico: 'Tratamiento del dolor agudo moderado-grave de corta duración · Analgesia postoperatoria (efecto ahorrador de opioides) · Tratamiento del cólico renal · Dolor traumatológico y musculoesquelético agudo',

    preparacion: {
      'Presentación':          '<b>Toradol® / Droal® 30 mg/mL — ampolla 1 mL</b>',
      'Diluyente':             'Puede administrarse sin diluir (IV directo lento) o diluido en SF 0.9%/SG 5%',
      'Dosis estándar adulto': '<b>10-30 mg IV/IM c/6 h</b>',
      'Dosis máxima diaria':   '90 mg/día (adultos <65 años, >50 kg)',
      'Dosis reducida':        '<b>Máx 60 mg/día en >65 años, <50 kg o insuficiencia renal leve</b>',
      'Duración MÁXIMA':       '<b>5 días combinando IV + oral — no prolongar el tratamiento</b>',
      'Velocidad IV':          'Bolo lento en al menos 15 segundos, o infundir en 100 mL SF en 15-30 min',
      'Vía':                   'IV lenta · IM profunda · Oral (tras vía parenteral, para completar los 5 días)',
      '⏱️ Inicio efecto':       '10 min (IM) · Pico analgésico: 1-2 h',
      '⏱️ Duración':            '4-6 h',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5%</b>',
    },

    vigilancia: {
      antes: [
        'Función renal basal: creatinina y ClCr — contraindicado si IR moderada-grave.',
        'Antecedente de sangrado gastrointestinal, úlcera péptica activa o reciente.',
        'Revisar medicación concomitante: otros AINEs, anticoagulantes, antiagregantes, IECA/ARA-II, diuréticos (mayor riesgo renal y hemorrágico).',
        'Alergia a AINEs o ácido acetilsalicílico (riesgo de reacción cruzada, incluido broncoespasmo en asmáticos).',
        'Estado de hidratación — la deshidratación aumenta el riesgo de nefrotoxicidad.',
        'Riesgo hemorrágico si se prevé cirugía (efecto antiagregante plaquetario reversible).',
      ],
      durante: [
        'Administrar en bolo lento (mínimo 15 segundos) — la inyección rápida puede causar dolor en el punto de infusión.',
        'Vigilar signos de reacción alérgica: rash, broncoespasmo (especialmente en asmáticos con poliposis nasal).',
        'TA — puede elevarse levemente por retención de sodio/agua.',
      ],
      despues: [
        'Vigilar signos de sangrado digestivo: melenas, hematemesis, dolor epigástrico.',
        'Función renal si el tratamiento se prolonga o hay factores de riesgo (creatinina cada 24-48 h).',
        'Diuresis — vigilar oliguria como signo precoz de nefrotoxicidad.',
        'Contar los días totales de uso (IV + oral) — no superar 5 días.',
        'Reevaluar la necesidad de continuar; transicionar a paracetamol/AINE oral estándar en cuanto sea posible.',
      ],
      suspender: [
        'Al cumplir 5 días de tratamiento (IV + oral combinados) — obligatorio, sin excepciones.',
        'Signos de sangrado gastrointestinal.',
        'Deterioro de la función renal.',
        'Reacción alérgica o broncoespasmo.',
        'Cirugía programada con riesgo hemorrágico inminente (suspender con antelación según protocolo).',
      ],
    },

    incompatibilidades: [
      'No mezclar con opioides (morfina, petidina, prometazina) en la misma jeringa — precipitación.',
      'No mezclar con otros AINEs.',
      '<b>No combinar con anticoagulantes, otros AINEs o corticoides sistémicos</b> sin valorar riesgo/beneficio (mayor riesgo GI/hemorrágico).',
      'Compatible con SF 0.9% y SG 5% para dilución si se opta por infusión.',
    ],

    alertasSeguridad: [
      '🔴 MÁXIMO 5 DÍAS de tratamiento (IV + oral) — no es un AINE de uso prolongado. Contar los días desde el inicio.',
      '🔴 RIESGO DE SANGRADO GASTROINTESTINAL — mayor que otros AINEs; evitar en antecedente de úlcera/sangrado digestivo.',
      '🔴 CONTRAINDICADO en insuficiencia renal moderada-grave y en depleción de volumen no corregida.',
      '🟠 Efecto antiagregante plaquetario — riesgo hemorrágico perioperatorio; comunicar antes de cirugía.',
      '🟠 No combinar con otros AINEs, anticoagulantes o corticoides — riesgo aditivo de sangrado/nefrotoxicidad.',
      '🟡 Reacción cruzada con alergia a AAS/AINEs — riesgo de broncoespasmo en asmáticos con poliposis nasal.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar que no se superan los 5 días de tratamiento total (IV + oral) — llevar el conteo desde la primera dosis.',
      'Administrar en bolo lento (mínimo 15 segundos) o diluido en infusión de 15-30 min.',
      'Reducir la dosis a máximo 60 mg/día en mayores de 65 años, peso <50 kg o insuficiencia renal leve.',
      'Vigilar signos de sangrado digestivo (melenas, dolor epigástrico) durante el tratamiento.',
      'Función renal y diuresis si el paciente tiene factores de riesgo o el tratamiento se prolonga varios días.',
      'Preguntar por alergia a AINEs/AAS y antecedente de asma con poliposis nasal antes de la primera dosis.',
      'Comunicar al equipo quirúrgico si el paciente ha recibido ketorolaco recientemente (riesgo hemorrágico).',
      'Transicionar a analgesia oral estándar (paracetamol, AINE convencional) en cuanto el dolor lo permita.',
      'Documentar dosis, vía, día de tratamiento (1 de 5, 2 de 5...) y respuesta analgésica.',
    ],

    efectosAdversos: [
      '🔴 Sangrado gastrointestinal (úlcera, hemorragia digestiva)',
      '🔴 Nefrotoxicidad (necrosis papilar, insuficiencia renal aguda) con uso prolongado o deshidratación',
      '🟠 Aumento del riesgo hemorrágico perioperatorio (efecto antiagregante)',
      '🟠 Retención hidrosalina / elevación de la TA',
      '🟡 Dolor en el punto de inyección',
      '🟡 Náuseas, dispepsia',
      '🟡 Broncoespasmo en asmáticos sensibles a AINEs (reacción cruzada)',
    ],

    contraindicaciones: [
      'Insuficiencia renal moderada-grave o riesgo de deterioro renal (deshidratación, hipovolemia).',
      'Antecedente de úlcera péptica o sangrado gastrointestinal activo o reciente.',
      'Hipersensibilidad a AINEs o ácido acetilsalicílico (incluido broncoespasmo).',
      'Riesgo hemorrágico elevado o coagulopatía (uso concomitante de anticoagulantes).',
      'Cirugía con alto riesgo de sangrado (uso perioperatorio o hemostasia no asegurada).',
      'Embarazo (3er trimestre) y lactancia.',
      'Insuficiencia cardíaca grave.',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':   '<b>24 h a temperatura ambiente</b>',
      'Diluida en SG 5%':     '24 h a temperatura ambiente',
      'Aspecto':               'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente.',
      notas:             'Máximo 5 días de tratamiento combinando vía IV y oral. No mezclar con opioides en la misma jeringa (precipitación).',
    },

    presentaciones: [
      'Toradol® 30 mg/mL — ampolla 1 mL',
      'Droal® 30 mg/mL — ampolla 1 mL',
      'Ketorolaco Normon® — ampolla 30 mg/mL',
      'Ketorolaco 10 mg — comprimidos (oral, para completar los 5 días)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dolor agudo moderado-grave (adulto <65 años)', dosis: '<b>10-30 mg IV/IM c/6 h (máx 90 mg/día)</b>', via: 'IV/IM' },
      { indicacion: '>65 años, <50 kg o IR leve',                    dosis: '<b>10-15 mg IV/IM c/6 h (máx 60 mg/día)</b>', via: 'IV/IM' },
      { indicacion: 'Cólico renal',                                   dosis: '30 mg IV en bolo lento o infusión 15-30 min',   via: 'IV' },
      { indicacion: 'Transición a oral',                              dosis: '10 mg VO c/4-6 h (máx 40 mg/día), completando los 5 días totales', via: 'VO' },
      { indicacion: 'Duración máxima',                                dosis: '<b>5 días IV + oral combinados — no prolongar</b>', via: '—' },
    ],

    embarazo: 'Contraindicado, especialmente en el 3er trimestre (cierre prematuro del ductus arterioso, oligohidramnios, riesgo hemorrágico materno-fetal). Categoría D/contraindicado según trimestre. Evitar durante toda la gestación si existen alternativas.',

    pediatria: 'No recomendado de forma rutinaria en menores de 16-17 años por falta de datos suficientes de seguridad establecidos en ficha técnica; su uso en pediatría es excepcional y bajo supervisión especializada. Preferir otros analgésicos (paracetamol, ibuprofeno) como primera línea.',

    adultoMayor: '<b>Dosis reducida obligatoria: máximo 60 mg/día</b>. Mayor riesgo de sangrado gastrointestinal, nefrotoxicidad y descompensación cardiovascular. Usar la dosis mínima eficaz durante el menor tiempo posible, con vigilancia estrecha de función renal.',

    insufRenal: '<b>Contraindicado en IR moderada-grave</b> (creatinina elevada o ClCr reducido). En IR leve: reducir la dosis (máx 60 mg/día) y usar con precaución, asegurando buena hidratación. Evitar en depleción de volumen no corregida.',

    insufHepatica: 'Precaución en insuficiencia hepática — puede prolongar la vida media del fármaco. Evitar en hepatopatía grave. Vigilar función hepática si se usa en hepatopatía leve-moderada.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Toradol® / Droal® (ketorolaco trometamol).',
      'AEMPS. Ketorolaco: restricciones de uso por riesgo de hemorragia digestiva. Nota informativa. 2021.',
      'Gaitán DG et al. Ketorolac for the management of postoperative pain. Cochrane Database Syst Rev. 2021.',
      'SEMES. Manejo del dolor agudo en Urgencias. Guía de práctica clínica. 2022.',
      'Motov S et al. Comparison of intravenous ketorolac at three single-dose regimens for treating acute pain in the emergency department. Ann Emerg Med. 2017.',
    ],
  },

});
