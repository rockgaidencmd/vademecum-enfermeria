/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/cefuroxima.js
   Fuentes: CIMA AEMPS (Zinnat/Curoxima IV), FDA DailyMed,
   SEIMC Guía Antibióticos 2023, ASHP Surgical Prophylaxis Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'cefuroxima',
  nombre:         'Cefuroxima',
  nombreGenerico: 'Cefuroxime Sodium',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'cefalosporina', '2ª generación', 'profilaxis quirúrgica', 'respiratorio', 'gram positivo', 'gram negativo'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Cefalosporina de 2ª generación</b> — buen equilibrio entre cobertura de gram positivos y gram negativos comunes.',
      '<b>Profilaxis quirúrgica de elección</b> en muchos protocolos: 1.5 g IV 30-60 min antes de la incisión.',
      'Uso terapéutico: <b>infecciones respiratorias, urinarias, de piel y partes blandas</b> de gravedad leve-moderada.',
      'Administrar <b>en 15-30 min IV o en bolo lento de 3-5 min</b> según dosis.',
      'Reacción cruzada con alergia a penicilinas <b>poco frecuente pero posible</b> — preguntar siempre antes de administrar.',
    ],

    resumenRapido: 'Cefalosporina de segunda generación con mayor estabilidad frente a betalactamasas que las de primera generación, lo que amplía su cobertura a Haemophilus influenzae, Moraxella catarrhalis y enterobacterias comunes, manteniendo buena actividad frente a cocos gram positivos (estafilococo meticilín-sensible, estreptococo). Es una de las cefalosporinas de elección para la profilaxis antibiótica quirúrgica por su espectro adecuado y su perfil de seguridad favorable, además de emplearse en infecciones respiratorias, urinarias y de piel/partes blandas de gravedad leve-moderada.',

    objetivoTerapeutico: 'Profilaxis antibiótica quirúrgica (cirugía limpia-contaminada) · Tratamiento de neumonía adquirida en la comunidad y exacerbación de EPOC · Infecciones urinarias complicadas · Infecciones de piel y partes blandas no complicadas',

    preparacion: {
      'Presentación':          '<b>Cefuroxima 750 mg y 1.5 g — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con agua para inyección según ficha técnica',
      'Diluyente':             'SF 0.9% o SG 5%',
      'Dilución para infusión': 'Diluir en 50-100 mL SF/SG 5%',
      'Dosis profilaxis quirúrgica': '<b>1.5 g IV 30-60 min antes de la incisión</b> (dosis única o repetir si cirugía >4 h)',
      'Dosis terapéutica estándar':  '750 mg-1.5 g IV c/8 h',
      '⏱️ Tiempo de infusión':  '15-30 min (infusión) o 3-5 min (bolo IV lento)',
      'Vía':                   'IV intermitente · IM (menos frecuente en hospital)',
      '🧊 Estabilidad':         '<b>18-24 h a temperatura ambiente tras reconstituir/diluir según ficha técnica</b>',
    },

    vigilancia: {
      antes: [
        'Preguntar activamente por alergia a penicilinas o cefalosporinas — reacción cruzada posible.',
        'Función renal basal si se prevé tratamiento prolongado o el paciente tiene IR conocida.',
        'En profilaxis quirúrgica: coordinar el horario para administrar 30-60 min antes de la incisión.',
        'Confirmar la indicación y la dosis según el peso y la gravedad de la infección.',
      ],
      durante: [
        'Vigilar reacción alérgica: rash, prurito, urticaria, disnea.',
        'Si bolo IV lento: administrar en 3-5 min, no más rápido.',
        'En profilaxis quirúrgica prolongada (>4 h): valorar redosificación intraoperatoria según protocolo.',
      ],
      despues: [
        'Vigilar diarrea — descartar C. difficile en tratamientos prolongados.',
        'Reevaluar la respuesta clínica (fiebre, leucocitos, PCR) a las 48-72 h.',
        'Función renal periódica si tratamiento prolongado.',
        'Documentar dosis, hora y tolerancia.',
      ],
      suspender: [
        'Reacción alérgica grave/anafilaxia.',
        'Diarrea grave con sospecha de colitis por C. difficile.',
        'Ausencia de respuesta clínica a las 72 h — reevaluar cobertura antibiótica.',
        'Al completar la pauta indicada (dosis única en profilaxis, o curso completo en tratamiento).',
      ],
    },

    incompatibilidades: [
      'No mezclar con aminoglucósidos en la misma jeringa o solución.',
      'Incompatible con soluciones que contengan bicarbonato sódico.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
      'Lavar la vía antes y después si se comparte el acceso con otros fármacos.',
    ],

    alertasSeguridad: [
      '🟠 Reacción alérgica cruzada con penicilinas (poco frecuente, ~1-3%) — preguntar siempre antes de administrar.',
      '🟡 En profilaxis quirúrgica: el horario de administración (30-60 min antes de la incisión) es crítico para la eficacia.',
      '🟡 Diarrea/colitis por C. difficile con tratamientos prolongados.',
      '🟡 Ajuste de dosis en insuficiencia renal moderada-grave.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Preguntar siempre por alergia a penicilinas/cefalosporinas antes de la primera dosis.',
      'En profilaxis quirúrgica: coordinar con quirófano para administrar 30-60 min antes de la incisión.',
      'Reconstituir y diluir según ficha técnica; infundir en 15-30 min o en bolo lento de 3-5 min.',
      'Vigilar reacción alérgica durante y después de la administración.',
      'En cirugía prolongada (>4 h): comunicar al equipo para valorar redosificación intraoperatoria.',
      'Vigilar diarrea persistente en tratamientos de varios días.',
      'Documentar dosis, hora exacta de administración (especialmente relevante en profilaxis) y tolerancia.',
    ],

    efectosAdversos: [
      '🟠 Reacción alérgica (rash, urticaria; anafilaxia rara)',
      '🟠 Diarrea / colitis por C. difficile',
      '🟡 Náuseas, vómitos',
      '🟡 Flebitis en el punto de infusión',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Eosinofilia transitoria',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a cefalosporinas.',
      'Antecedente de reacción anafiláctica grave a penicilinas (valorar riesgo/beneficio y posible reacción cruzada).',
    ],

    fotosensibilidad: 'No relevante. Conservar el vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Diluido en SF 0.9%':    '<b>18-24 h a temperatura ambiente</b> (verificar ficha técnica del fabricante)',
      'Diluido en SG 5%':      '18-24 h a temperatura ambiente',
      'Aspecto':                'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro del tiempo indicado tras reconstituir/diluir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: '18-24 h a temperatura ambiente en SF 0.9% o SG 5%.',
      notas:             'Incompatible con aminoglucósidos en la misma vía. En profilaxis quirúrgica, el horario de administración es tan importante como la dosis.',
    },

    presentaciones: [
      'Cefuroxima Normon® 750 mg — vial polvo liofilizado IV/IM',
      'Cefuroxima Normon® 1.5 g — vial polvo liofilizado IV',
      'Zinnat® — presentación oral (cefuroxima axetilo, distinta indicación ambulatoria)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Profilaxis quirúrgica',           dosis: '<b>1.5 g IV 30-60 min antes de la incisión</b>',    via: 'IV' },
      { indicacion: 'Neumonía / infección respiratoria', dosis: '750 mg-1.5 g IV c/8 h',                             via: 'IV' },
      { indicacion: 'ITU complicada',                    dosis: '750 mg IV c/8 h',                                    via: 'IV' },
      { indicacion: 'Piel y partes blandas',              dosis: '750 mg-1.5 g IV c/8 h',                             via: 'IV' },
      { indicacion: 'IR (ClCr 10-20)',                    dosis: '750 mg IV c/12 h',                                  via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Las cefalosporinas se consideran generalmente seguras en el embarazo cuando están indicadas. Se ha usado ampliamente sin evidencia de teratogenicidad. Ajustar según indicación clínica.',

    pediatria: '>3 meses: 30-100 mg/kg/día IV en 3-4 dosis (máx 6 g/día en infecciones graves). Profilaxis quirúrgica pediátrica: 50 mg/kg dosis única. Bien tolerada; vigilar alergia como en el adulto.',

    adultoMayor: 'Sin ajuste específico por edad salvo por función renal disminuida. Ajustar la dosis según ClCr. Vigilar diarrea, más frecuente y potencialmente más grave (C. difficile) en este grupo.',

    insufRenal: '<b>Ajuste según ClCr</b>: ClCr 10-20 mL/min: 750 mg c/12h. ClCr <10 mL/min: 750 mg c/24h. Hemodiálisis: dosis adicional tras la sesión.',

    insufHepatica: 'Sin ajuste específico — eliminación fundamentalmente renal, no hepática.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Cefuroxima (formulación IV/IM).',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Bratzler DW et al. Clinical Practice Guidelines for Antimicrobial Prophylaxis in Surgery. Am J Health Syst Pharm. 2013.',
      'Metlay JP et al. Diagnosis and Treatment of Adults with Community-acquired Pneumonia. ATS/IDSA. Am J Respir Crit Care Med. 2019.',
      'Gilbert DN et al. The Sanford Guide to Antimicrobial Therapy. 2023.',
    ],
  },

});
