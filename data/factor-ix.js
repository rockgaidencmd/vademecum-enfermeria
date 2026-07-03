/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/factor-ix.js
   HEMOTERAPIA · Hemoderivados
   Fuentes: CIMA AEMPS (Factor IX), WFH Guidelines Hemophilia 2020,
   AABB Technical Manual, ISTH Guidance
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'factor-ix',
  nombre:         'Factor IX',
  nombreGenerico: 'Coagulation Factor IX',
  categoria:      'hemoderivados',
  tags:           ['hemoterapia', 'hemoderivado', 'factor IX', 'hemofilia B', 'coagulación', 'hemofilia', 'enfermedad de Christmas'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Hemoderivado de ALTO RIESGO. Tratamiento de la hemofilia B: dosificación precisa según peso y nivel objetivo. Diferente rendimiento respecto al FVIII (1 UI/kg sube ≈ 1%). Riesgo de reacciones alérgicas y, con algunos productos plasmáticos (complejo protrombínico), riesgo trombótico. Vigilar la aparición de inhibidores.',

  nivel1: {

    puntosClave: [
      '<b>Tratamiento de la hemofilia B</b> (déficit de Factor IX, enfermedad de Christmas) — sangrados y profilaxis.',
      'Regla de dosificación IV: <b>1 UI/kg sube el FIX ≈ 1%</b> (rendimiento distinto al FVIII). Dosis (UI) = peso × % de aumento.',
      'Objetivos: <b>30-50%</b> en sangrado leve/moderado, <b>60-100%</b> en hemorragia grave o cirugía.',
      '<b>Vida media más larga que el FVIII (~18-24 h)</b>; los productos de vida media extendida permiten dosis menos frecuentes.',
      'Vigilar <b>inhibidores</b> (menos frecuentes que en hemofilia A) y <b>reacciones alérgicas</b> (más asociadas al FIX).',
    ],

    resumenRapido: 'Concentrado de Factor IX de la coagulación, disponible como derivado plasmático purificado (inactivado viralmente) o recombinante. Es el tratamiento sustitutivo de la hemofilia B. Su rendimiento y farmacocinética difieren del FVIII: 1 UI/kg eleva la actividad aproximadamente un 1% y tiene una vida media más prolongada. Debe distinguirse del complejo de protrombina (que contiene FIX junto a otros factores) y usarse el concentrado específico de FIX de alta pureza para la hemofilia B.',

    objetivoTerapeutico: 'Tratar y prevenir hemorragias en la hemofilia B · Cobertura hemostática para cirugía o procedimientos en hemofilia B · Profilaxis a largo plazo para prevenir la artropatía hemofílica',

    preparacion: {
      'Presentación':          '<b>Vial de polvo liofilizado + disolvente</b> (plasmático de alta pureza o recombinante)',
      'Compatibilidad':        'No requiere grupo ABO ni pruebas cruzadas',
      'Reconstitución':        '<b>Con el disolvente incluido, técnica aséptica; girar suavemente hasta disolver (no agitar)</b>',
      'Cálculo de dosis':      '<b>UI = peso (kg) × % de aumento deseado</b> (1 UI/kg ≈ +1%)',
      'Objetivo leve/moderado': '30-50% de actividad',
      'Objetivo grave/cirugía': '60-100% de actividad',
      'Administración':        '<b>IV lenta según la velocidad indicada por el fabricante</b>',
      'Uso tras reconstituir': 'Administrar en pocas horas; no refrigerar una vez reconstituido (según ficha)',
      'Conservación':          '<b>2-8 °C; según producto puede mantenerse a Tª ambiente un tiempo limitado; no congelar</b>',
    },

    vigilancia: {
      antes: [
        'Verificar producto (FIX específico, no confundir con complejo protrombínico) y calcular la dosis en UI.',
        'Actividad de FIX basal si es posible; conocer si el paciente tiene inhibidores o antecedente de alergia al FIX.',
        'Constantes basales y valoración del sangrado.',
        'Comprobar caducidad e integridad del vial y disolvente.',
        'Acceso venoso permeable; técnica aséptica para la reconstitución.',
      ],
      durante: [
        'Administrar IV lento según la velocidad del fabricante.',
        'Vigilar reacción alérgica (más frecuente con FIX que con FVIII): urticaria, rubor, opresión torácica, cambios de TA.',
        'Vigilar signos de trombosis con productos plasmáticos de menor pureza (complejo protrombínico).',
      ],
      despues: [
        'Reevaluar el control del sangrado y, si procede, la actividad de FIX post-infusión.',
        'Vigilar falta de respuesta → sospecha de inhibidores.',
        'Documentar producto, número de lote, UI administradas y respuesta.',
        'Programar dosis siguientes según vida media (más larga que el FVIII).',
      ],
      suspender: [
        '🚨 DETENER ante reacción alérgica grave/anafilaxia (recordar la asociación con inhibidores del FIX).',
        'Signos de trombosis (con productos plasmáticos): valorar.',
        'Falta de respuesta pese a dosis adecuada: sospechar inhibidores y avisar a hematología.',
        'Conservar el registro del lote; notificar la reacción.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros medicamentos en la misma jeringa o línea.',
      'Usar solo el disolvente y el equipo proporcionados por el fabricante.',
      'No reconstituir con diluyentes distintos al indicado.',
      'No confundir el concentrado específico de FIX con el complejo de protrombina (indicaciones y riesgo trombótico distintos).',
    ],

    alertasSeguridad: [
      '🔴 REACCIONES ALÉRGICAS/ANAFILAXIA — más asociadas al FIX; pueden coincidir con la aparición de inhibidores.',
      '🔴 Dosificación específica (1 UI/kg ≈ +1%) — distinta al FVIII; verificar el cálculo.',
      '🟠 RIESGO TROMBÓTICO con productos plasmáticos de baja pureza (complejo protrombínico).',
      '🟠 Registrar el número de lote (trazabilidad del hemoderivado).',
      '🟡 Riesgo infeccioso muy bajo (inactivación viral / recombinantes).',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Calcular la dosis en UI (peso × % deseado) y confirmarla con la prescripción; recordar que el FIX rinde ~1%/UI/kg.',
      'Reconstituir con técnica aséptica usando el disolvente incluido; girar suavemente sin agitar.',
      'Administrar IV lento; vigilar de forma especial las reacciones alérgicas (más frecuentes con FIX).',
      'Registrar el número de lote para la trazabilidad.',
      'Vigilar la respuesta clínica y comunicar si el sangrado no cede (posibles inhibidores).',
      'Educar en autoadministración/profilaxis domiciliaria cuando proceda.',
      'Documentar producto, UI, lote, hora y tolerancia.',
    ],

    efectosAdversos: [
      '🔴 Reacción alérgica grave / anafilaxia (asociación con inhibidores del FIX)',
      '🔴 Aparición de inhibidores (anti-FIX; menos frecuente que en hemofilia A)',
      '🟠 Eventos trombóticos (con productos plasmáticos de baja pureza)',
      '🟠 Reacciones de infusión: rubor, urticaria, cefalea',
      '🟡 Fiebre, escalofríos',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida al producto.',
      'Antecedente de reacción anafiláctica al FIX (valorar desensibilización con hematología).',
      'CID activa (con algunos productos plasmáticos por riesgo trombótico).',
      'Uso en déficits distintos del FIX (elegir el factor específico correspondiente).',
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
      notas:             'Registrar el lote. No confundir con complejo protrombínico. Vigilar alergia/anafilaxia y respuesta hemostática.',
    },

    presentaciones: [
      'Factor IX plasmático de alta pureza (derivado de plasma, inactivado viralmente)',
      'Factor IX recombinante (BeneFIX®, Rixubis®…)',
      'Factor IX de vida media extendida (Alprolix®, Idelvion®…) — menor frecuencia de dosis',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hemorragia leve/moderada',    dosis: 'Alcanzar 30-50%: UI = kg × (30-50)',            via: 'IV' },
      { indicacion: 'Hemorragia grave / cirugía',   dosis: 'Alcanzar 60-100%: UI = kg × (60-100)',          via: 'IV' },
      { indicacion: 'Regla práctica',               dosis: '1 UI/kg sube el FIX ≈ 1%',                       via: 'IV' },
      { indicacion: 'Profilaxis hemofilia B grave', dosis: '25-40 UI/kg 1-2 veces por semana (individualizado)', via: 'IV' },
      { indicacion: 'Vida media extendida',         dosis: 'Intervalos más largos según producto',           via: 'IV' },
    ],

    embarazo: 'Las portadoras o mujeres con déficit pueden requerir factor para el parto o procedimientos, manejado con hematología. Vigilar la hemostasia periparto.',

    pediatria: 'Base del tratamiento de la hemofilia B infantil, incluida la profilaxis. Dosis en UI/kg según objetivo. Vigilar la aparición de inhibidores y de reacciones alérgicas al inicio de la exposición (asociación característica del FIX).',

    adultoMayor: 'Ajustar según comorbilidad y riesgo trombótico, sobre todo con productos plasmáticos de baja pureza. Dosificación en UI guiada por niveles y sangrado.',

    insufRenal: 'Sin ajuste específico. Vigilar tolerancia a la infusión.',

    insufHepatica: 'Sin ajuste específico del factor. En hepatopatía vigilar la hemostasia global; no confundir el déficit adquirido multifactorial con la hemofilia B.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Fichas Técnicas de concentrados de Factor IX (plasmáticos y recombinantes).',
      'Srivastava A et al. WFH Guidelines for the Management of Hemophilia, 3rd edition. Haemophilia. 2020.',
      'AABB. Technical Manual. 20th Edition. 2020.',
      'Peyvandi F et al. The past and future of haemophilia. Lancet. 2016.',
      'DiMichele D. Inhibitor development in haemophilia B: an orphan disease in need of attention. Br J Haematol. 2007.',
    ],
  },

});
