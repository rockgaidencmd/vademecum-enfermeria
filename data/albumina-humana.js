/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/albumina-humana.js
   HEMOTERAPIA · Hemoderivados
   Fuentes: CIMA AEMPS (Albúmina Humana), AABB Technical Manual,
   EASL Cirrhosis Guidelines 2018, ALBIOS NEJM 2014,
   SAFE Study NEJM 2004
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'albumina-humana',
  nombre:         'Albúmina Humana',
  nombreGenerico: 'Human Albumin',
  categoria:      'hemoderivados',
  tags:           ['hemoterapia', 'hemoderivado', 'albúmina', 'expansor de volumen', 'cirrosis', 'paracentesis', 'hipoalbuminemia', 'shock'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Hemoderivado obtenido por fraccionamiento de grandes pools de plasma</b> — proteína plasmática purificada.',
      'Se presenta al <b>5% (isooncótico, expansión de volumen)</b> y al <b>20-25% (hiperoncótico, hipoalbuminemia/cirrosis)</b>.',
      'Indicaciones clave: <b>paracentesis evacuadora, PBE, síndrome hepatorrenal</b> (con terlipresina), shock con hipoalbuminemia.',
      '<b>No requiere pruebas cruzadas ni compatibilidad ABO</b> — no contiene hematíes ni anticuerpos.',
      'Vigilar <b>sobrecarga circulatoria</b> con la presentación al 20-25% (efecto expansor potente por atracción de líquido intravascular).',
    ],

    resumenRapido: 'Solución de albúmina humana purificada a partir de plasma de miles de donantes mediante fraccionamiento e inactivación viral. Es la principal proteína del plasma y el mayor determinante de la presión oncótica. Se usa como expansor de volumen (al 5%) y para corregir la hipoalbuminemia y prevenir la disfunción circulatoria en el cirrótico (al 20-25%). A diferencia de los hemocomponentes, no precisa compatibilidad ABO ni pruebas cruzadas, y tiene un riesgo infeccioso muy bajo por la inactivación viral industrial.',

    objetivoTerapeutico: 'Expansión del volumen plasmático en shock/hipovolemia (5%) · Prevención de disfunción circulatoria post-paracentesis · Tratamiento del síndrome hepatorrenal (con terlipresina) y de la PBE · Corrección de hipoalbuminemia sintomática grave',

    preparacion: {
      'Presentación':          '<b>Albúmina 5% (50 g/L) — isooncótica · Albúmina 20-25% (200-250 g/L) — hiperoncótica</b>',
      'Compatibilidad':        '<b>No requiere grupo ABO ni pruebas cruzadas</b>',
      'Diluyente/compatibles': 'Compatible con SF 0.9% y SG 5%. <b>No diluir la solución al 20% con agua estéril</b> (riesgo de hemólisis por hipotonía)',
      'Equipo':                'Equipo de infusión con filtro proporcionado por el fabricante (no requiere filtro de transfusión de 170 μm)',
      'Paracentesis':          '<b>6-8 g de albúmina por cada litro de ascitis evacuado</b> (> 5 L)',
      'Velocidad':             'Ajustar según estado hemodinámico; en hiperoncótica vigilar sobrecarga',
      'Temperatura':           'Administrar a temperatura ambiente',
      'Conservación':          '<b>≤ 25 °C, NO congelar, proteger de la luz</b> (no requiere nevera)',
      'Aspecto':               'Solución transparente, ligeramente viscosa, ámbar — desechar si turbia o con partículas',
    },

    vigilancia: {
      antes: [
        'Verificar indicación, concentración (5% vs 20-25%) y dosis prescrita.',
        'Constantes basales: TA, FC, FR, SpO2; valorar signos de sobrecarga o de depleción.',
        'Valorar función cardíaca y renal (riesgo de sobrecarga con la hiperoncótica).',
        'Comprobar integridad y aspecto del frasco; verificar caducidad.',
        'En paracentesis: registrar volumen de ascitis evacuado para calcular la dosis.',
      ],
      durante: [
        'Vigilar sobrecarga circulatoria: disnea, ingurgitación yugular, HTA, crepitantes, tos (sobre todo con 20-25%).',
        'Constantes periódicas según el estado del paciente.',
        'Vigilar reacción alérgica (rara): urticaria, prurito, hipotensión.',
        'Controlar el ritmo de infusión, más lento en cardiópatas y ancianos.',
      ],
      despues: [
        'Reevaluar estado hemodinámico y respuesta (TA, diuresis, perfusión).',
        'Vigilar aparición tardía de sobrecarga (edema pulmonar).',
        'Documentar concentración, volumen/gramos administrados y tolerancia.',
        'En cirrótico: control de función renal e ionograma según indicación.',
      ],
      suspender: [
        '🚨 DETENER ante disnea, edema pulmonar o signos de sobrecarga circulatoria.',
        'Reacción alérgica/anafilactoide: detener y tratar.',
        'Hipertensión o cefalea intensa durante la infusión rápida de la solución hiperoncótica.',
      ],
    },

    incompatibilidades: [
      '<b>No diluir la albúmina al 20-25% con agua para inyección</b> — la hipotonía resultante puede causar hemólisis.',
      'No mezclar con hidrolizados de proteínas ni con soluciones que contengan alcohol.',
      'No administrar junto con sangre o concentrados de hematíes por la misma línea sin verificar.',
      'Compatible con SF 0.9% y SG 5%.',
    ],

    alertasSeguridad: [
      '🟠 SOBRECARGA CIRCULATORIA — especialmente con la presentación al 20-25%. Vigilar en cardiopatía, ancianos e IR.',
      '🟠 No diluir la solución al 20% con agua estéril (hemólisis por hipotonía).',
      '🟡 No precisa compatibilidad ABO ni pruebas cruzadas.',
      '🟡 Riesgo infeccioso muy bajo (inactivación viral industrial).',
      '🟡 No usar la albúmina para nutrición ni para corregir hipoalbuminemia asintomática crónica.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar la concentración correcta (5% vs 20-25%) según la indicación prescrita.',
      'No refrigerar ni congelar; conservar protegida de la luz y comprobar el aspecto antes de usar.',
      'En paracentesis: calcular 6-8 g por litro de ascitis evacuado y coordinar con el procedimiento.',
      'Vigilar sobrecarga circulatoria durante y tras la infusión (más con la hiperoncótica).',
      'Ajustar el ritmo en cardiópatas, ancianos y pacientes con IR.',
      'No diluir la solución al 20% con agua estéril; usar SF 0.9% si se requiere.',
      'Registrar concentración, gramos/volumen administrados y respuesta hemodinámica.',
      'Educar al paciente para avisar ante disnea o sensación de falta de aire.',
    ],

    efectosAdversos: [
      '🟠 Sobrecarga circulatoria / edema pulmonar (sobre todo al 20-25%)',
      '🟠 Hipertensión durante infusión rápida',
      '🟡 Reacción alérgica/anafilactoide (rara): urticaria, prurito, hipotensión',
      '🟡 Fiebre, escalofríos',
      '🟡 Náuseas',
    ],

    contraindicaciones: [
      'Insuficiencia cardíaca grave / sobrecarga de volumen (especialmente la hiperoncótica).',
      'Anemia grave con hipervolemia.',
      'Hipersensibilidad conocida a la albúmina humana.',
      'Uso como aporte nutricional o para corregir hipoalbuminemia crónica asintomática (no indicado).',
      'Edema pulmonar establecido.',
    ],

    fotosensibilidad: 'Proteger el frasco de la luz durante el almacenamiento. No congelar. Conservar a ≤ 25 °C.',

    estabilidad: {
      'Conservación':      '≤ 25 °C, proteger de la luz, NO congelar',
      'No requiere nevera': 'Estable a temperatura ambiente hasta la fecha de caducidad',
      'Tras abrir':        'Uso inmediato; desechar el sobrante (sin conservantes)',
      'Aspecto':           'Transparente ámbar; desechar si turbia, con partículas o fugas',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras abrir el frasco; no contiene conservantes.',
      dosisRestante:     'Desechar el sobrante del frasco abierto.',
      infusionPreparada: 'Iniciar la infusión sin demora una vez abierto; completar en pocas horas.',
      notas:             'No diluir la solución al 20% con agua estéril (hemólisis). No requiere compatibilidad ABO. Conservar protegida de la luz sin refrigerar.',
    },

    presentaciones: [
      'Albúmina Humana 5% — viales de 250 mL y 500 mL',
      'Albúmina Humana 20% — viales de 50 mL y 100 mL',
      'Albúmina Humana 25% — vial de 50 mL (según fabricante)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Paracentesis evacuadora (> 5 L)',   dosis: '<b>6-8 g de albúmina por litro de ascitis evacuado</b> (20%)', via: 'IV' },
      { indicacion: 'Peritonitis bacteriana espontánea', dosis: '1.5 g/kg día 1 y 1 g/kg día 3 (con antibiótico)',             via: 'IV' },
      { indicacion: 'Síndrome hepatorrenal',             dosis: '1 g/kg día 1 (máx 100 g) → 20-40 g/día + terlipresina',       via: 'IV' },
      { indicacion: 'Expansión de volumen (shock)',      dosis: 'Albúmina 5% según estado hemodinámico',                        via: 'IV' },
      { indicacion: 'Hipoalbuminemia sintomática grave', dosis: 'Individualizada según déficit y respuesta',                    via: 'IV' },
    ],

    embarazo: 'Puede utilizarse cuando está clínicamente indicada (p. ej. expansión de volumen). La albúmina es una proteína fisiológica; el riesgo infeccioso es muy bajo por la inactivación viral. Vigilar sobrecarga.',

    pediatria: 'Se usa como expansor (5%) y en hipoalbuminemia grave. Dosis 0.5-1 g/kg según indicación. Vigilar sobrecarga de volumen y ajustar el ritmo de infusión.',

    adultoMayor: 'Mayor riesgo de sobrecarga circulatoria, sobre todo con la presentación hiperoncótica. Infundir despacio y vigilar signos de insuficiencia cardíaca.',

    insufRenal: 'Vigilar sobrecarga de volumen. En síndrome hepatorrenal es parte del tratamiento (con terlipresina). Controlar balance hídrico y diuresis.',

    insufHepatica: 'Indicación central en la cirrosis descompensada: paracentesis, PBE y síndrome hepatorrenal. Ajustar la dosis al volumen de ascitis y a la función renal; vigilar sobrecarga.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Albúmina Humana (varias concentraciones).',
      'European Association for the Study of the Liver. EASL Clinical Practice Guidelines for the management of patients with decompensated cirrhosis. J Hepatol. 2018.',
      'Finfer S et al. A Comparison of Albumin and Saline for Fluid Resuscitation in the ICU (SAFE Study). NEJM. 2004.',
      'Caironi P et al. Albumin Replacement in Patients with Severe Sepsis or Septic Shock (ALBIOS). NEJM. 2014.',
      'AABB. Technical Manual. 20th Edition. 2020.',
    ],
  },

});
