/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/factor-viii.js
   HEMOTERAPIA · Hemoderivados
   Fuentes: CIMA AEMPS (Factor VIII), WFH Guidelines Hemophilia 2020,
   AABB Technical Manual, ISTH Guidance
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'factor-viii',
  nombre:         'Factor VIII',
  nombreGenerico: 'Coagulation Factor VIII',
  categoria:      'hemoderivados',
  tags:           ['hemoterapia', 'hemoderivado', 'factor VIII', 'hemofilia A', 'coagulación', 'hemofilia', 'von Willebrand'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Hemoderivado de ALTO RIESGO. Utilizado en hemofilia A: dosificación precisa según peso, nivel objetivo y tipo de sangrado. La aparición de inhibidores (anticuerpos anti-FVIII) puede hacerlo ineficaz y constituye una complicación grave. Requiere reconstitución aséptica y administración IV lenta.',

  nivel1: {

    puntosClave: [
      '<b>Tratamiento de la hemofilia A</b> (déficit congénito de Factor VIII) — para sangrados y profilaxis.',
      'Regla de dosificación IV: <b>1 UI/kg sube el FVIII ≈ 2%</b>. Dosis (UI) = peso (kg) × % de aumento deseado × 0.5.',
      'Objetivos: <b>30-50%</b> en sangrado leve/moderado, <b>80-100%</b> en hemorragia grave o cirugía mayor.',
      '<b>Vida media ~8-12 h</b> — a menudo requiere dosis repetidas o perfusión continua en sangrado grave.',
      'Complicación clave: <b>desarrollo de inhibidores</b> (anti-FVIII) → falta de respuesta; sospechar si no mejora el sangrado.',
    ],

    resumenRapido: 'Concentrado de Factor VIII de la coagulación, disponible como derivado plasmático (fraccionamiento de pools de plasma, inactivado viralmente) o recombinante. Es el tratamiento de sustitución de la hemofilia A. Algunos concentrados plasmáticos contienen además Factor von Willebrand y se emplean en la enfermedad de von Willebrand. La dosis se calcula de forma individualizada según el peso, el nivel de FVIII que se quiere alcanzar y la gravedad del sangrado, con controles de laboratorio (actividad de FVIII).',

    objetivoTerapeutico: 'Tratar y prevenir hemorragias en la hemofilia A · Cobertura hemostática para cirugía o procedimientos en hemofilia A · Tratamiento de la enfermedad de von Willebrand (concentrados que contienen FvW) · Profilaxis a largo plazo para prevenir artropatía',

    preparacion: {
      'Presentación':          '<b>Vial de polvo liofilizado (250-3000 UI) + disolvente</b> (plasmático o recombinante)',
      'Compatibilidad':        'No requiere grupo ABO ni pruebas cruzadas',
      'Reconstitución':        '<b>Con el disolvente incluido, técnica aséptica; girar suavemente hasta disolver (no agitar)</b>',
      'Cálculo de dosis':      '<b>UI = peso (kg) × % aumento deseado × 0.5</b> (1 UI/kg ≈ +2%)',
      'Objetivo leve/moderado': '30-50% de actividad',
      'Objetivo grave/cirugía': '80-100% de actividad',
      'Administración':        '<b>IV lenta en bolo (habitualmente ≤ 2-3 mL/min según producto) o perfusión continua</b>',
      'Uso tras reconstituir': 'Administrar en pocas horas; no refrigerar una vez reconstituido (según ficha)',
      'Conservación':          '<b>2-8 °C; según producto puede mantenerse a Tª ambiente un tiempo limitado; no congelar</b>',
    },

    vigilancia: {
      antes: [
        'Verificar el producto y calcular la dosis en UI según peso, nivel objetivo y tipo de sangrado.',
        'Actividad de FVIII basal si es posible; conocer si el paciente tiene inhibidores.',
        'Constantes basales y valoración del sangrado (localización, gravedad).',
        'Comprobar caducidad e integridad del vial y del disolvente.',
        'Acceso venoso permeable; técnica aséptica para la reconstitución.',
      ],
      durante: [
        'Administrar IV lento según la velocidad indicada por el fabricante.',
        'Vigilar reacción alérgica/de infusión: rubor, urticaria, opresión torácica, cambios de TA/FC.',
        'Observar la zona de punción y la tolerancia general.',
      ],
      despues: [
        'Reevaluar el control del sangrado y, si procede, la actividad de FVIII post-infusión (recuperación).',
        'Vigilar signos de falta de respuesta → sospecha de inhibidores.',
        'Documentar producto, número de lote (trazabilidad), UI administradas y respuesta.',
        'Programar dosis siguientes según vida media y objetivo terapéutico.',
      ],
      suspender: [
        '🚨 DETENER ante reacción alérgica grave/anafilaxia.',
        'Falta de respuesta hemostática pese a dosis adecuada: sospechar inhibidores y avisar a hematología.',
        'Signos de trombosis (raros): valorar.',
        'Conservar el registro del lote; notificar la reacción.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros medicamentos en la misma jeringa o línea.',
      'Usar únicamente el disolvente y el equipo de administración proporcionados por el fabricante.',
      'No reconstituir con SF u otros diluyentes distintos al indicado.',
      'Administrar por vía independiente; no compartir línea con otros fluidos sin verificar.',
    ],

    alertasSeguridad: [
      '🔴 DESARROLLO DE INHIBIDORES (anti-FVIII) — principal complicación; sospechar si no cede el sangrado.',
      '🔴 Dosificación precisa según peso, objetivo y gravedad — verificar el cálculo en UI.',
      '🟠 Reacciones alérgicas/de infusión — vigilar durante la administración.',
      '🟠 Registrar siempre el número de lote (trazabilidad del hemoderivado).',
      '🟡 Riesgo infeccioso muy bajo (inactivación viral / productos recombinantes).',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Calcular la dosis en UI con la fórmula (peso × % deseado × 0.5) y confirmarla con la prescripción.',
      'Reconstituir con técnica aséptica usando el disolvente incluido; girar suavemente sin agitar.',
      'Administrar IV lento según la velocidad del fabricante; vigilar reacciones durante la infusión.',
      'Registrar el número de lote para la trazabilidad del hemoderivado.',
      'Vigilar la respuesta clínica y comunicar si el sangrado no cede (posibles inhibidores).',
      'Educar al paciente/familia en autoadministración y profilaxis domiciliaria cuando proceda.',
      'Documentar producto, UI, lote, hora y tolerancia.',
    ],

    efectosAdversos: [
      '🔴 Aparición de inhibidores (anticuerpos anti-FVIII) con pérdida de eficacia',
      '🔴 Reacción alérgica grave / anafilaxia (poco frecuente)',
      '🟠 Reacciones de infusión: rubor, urticaria, cefalea, náuseas',
      '🟡 Fiebre, escalofríos',
      '🟡 Eventos trombóticos (raros)',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida al producto o a proteínas de ratón/hámster (algunos recombinantes).',
      'Presencia de inhibidores de alto título: requiere agentes de puenteo (FEIBA, FVIIa recombinante) — no responde al FVIII estándar.',
      'Uso en déficits distintos del FVIII (elegir el factor específico correspondiente).',
    ],

    fotosensibilidad: 'Proteger de la luz. Conservar en nevera (2-8 °C) según ficha; muchos productos toleran un periodo a temperatura ambiente. No congelar.',

    estabilidad: {
      'Conservación':      '2-8 °C (según producto, periodo limitado a ≤ 25 °C)',
      'No congelar':       'Sí',
      'Proteger de la luz': 'Sí',
      'Tras reconstituir': 'Uso en pocas horas; no volver a refrigerar (según ficha técnica)',
      'Aspecto':           'Solución transparente tras reconstituir; desechar si turbia o con partículas',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar tras la reconstitución dentro del tiempo indicado por el fabricante (habitualmente pocas horas).',
      dosisRestante:     'Desechar el sobrante del vial reconstituido.',
      infusionPreparada: 'Administrar sin demora tras reconstituir; no conservar para dosis posteriores.',
      notas:             'Registrar el lote (trazabilidad). Dosificación individualizada en UI. Ante falta de respuesta, sospechar inhibidores.',
    },

    presentaciones: [
      'Factor VIII plasmático (derivado de plasma, inactivado viralmente) — viales 250-1000 UI',
      'Factor VIII recombinante (Advate®, Kogenate®, Elocta®…) — viales de distinta potencia',
      'Factor VIII/von Willebrand plasmático (Haemate®, Fanhdi®) — para enfermedad de von Willebrand',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hemorragia leve/moderada',   dosis: 'Alcanzar 30-50%: UI = kg × (30-50) × 0.5',        via: 'IV' },
      { indicacion: 'Hemorragia grave / cirugía',  dosis: 'Alcanzar 80-100%: UI = kg × (80-100) × 0.5',      via: 'IV' },
      { indicacion: 'Regla práctica',              dosis: '1 UI/kg sube el FVIII ≈ 2%',                       via: 'IV' },
      { indicacion: 'Profilaxis hemofilia A grave', dosis: '20-40 UI/kg 2-3 veces por semana (individualizado)', via: 'IV' },
      { indicacion: 'Enfermedad de von Willebrand', dosis: 'Concentrado FVIII/FvW dosificado en UI de FvW:RCo', via: 'IV' },
    ],

    embarazo: 'Las portadoras de hemofilia o mujeres con déficit pueden requerir factor en el parto o procedimientos. Se maneja con hematología; los niveles de FVIII aumentan de forma fisiológica en la gestación pero pueden caer rápidamente tras el parto.',

    pediatria: 'Base del tratamiento de la hemofilia A infantil, incluida la profilaxis precoz para prevenir la artropatía. Dosis en UI/kg según objetivo. Frecuente autoadministración/educación familiar. Vigilar la aparición de inhibidores en los primeros días de exposición.',

    adultoMayor: 'Ajustar según comorbilidad y riesgo trombótico. Dosificación en UI igual, guiada por niveles y sangrado.',

    insufRenal: 'Sin ajuste específico. Vigilar tolerancia a la infusión.',

    insufHepatica: 'Sin ajuste específico del factor. En hepatopatía coexistente vigilar la hemostasia global.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Fichas Técnicas de concentrados de Factor VIII (plasmáticos y recombinantes).',
      'Srivastava A et al. WFH Guidelines for the Management of Hemophilia, 3rd edition. Haemophilia. 2020.',
      'AABB. Technical Manual. 20th Edition. 2020.',
      'Peyvandi F et al. The past and future of haemophilia: diagnosis, treatments, and its complications. Lancet. 2016.',
      'Collins PW et al. Factor VIII requirement to maintain a target plasma level. J Thromb Haemost. 2010.',
    ],
  },

});
