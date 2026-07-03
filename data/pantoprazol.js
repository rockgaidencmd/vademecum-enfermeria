/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/pantoprazol.js
   Fuentes: CIMA AEMPS (Pantoprazol Normon, Aurovitas),
   Protocolo IBPs INGESA, Guías Hemorragia Digestiva Alta
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'pantoprazol',
  nombre:         'Pantoprazol',
  nombreGenerico: 'Pantoprazole Sodium',
  categoria:      'otros',
  tags:           ['inhibidor bomba protones', 'IBP', 'hemorragia digestiva', 'profilaxis úlcera', 'protección gástrica'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Inhibidor de la BOMBA DE PROTONES (IBP) — bloquea de forma irreversible la H+/K+-ATPasa de la célula parietal gástrica, suprimiendo la secreción ácida basal y estimulada.',
      'Indicación destacada: <b>hemorragia digestiva alta</b> (perfusión continua o intermitente tras endoscopia terapéutica), profilaxis de úlcera de estrés en UCI, síndrome de Zollinger-Ellison.',
      'Reconstituir SOLO con SF 0.9% (10 mL) - administrar en <b>2-15 minutos</b> o diluir para perfusión más prolongada.',
      'Interacción relevante: puede <b>AUMENTAR el INR/tiempo de protrombina en pacientes con warfarina/acenocumarol</b> - vigilar coagulación al iniciar/suspender.',
      'Perfil de seguridad excelente para uso agudo hospitalario; uso crónico prolongado asociado a riesgos (fracturas, hipomagnesemia, deficiencia B12, infecciones entéricas) - relevante para educación al alta.',
    ],

    resumenRapido: 'Inhibidor de la bomba de protones (benzimidazol sustituido) que se activa en el ambiente ácido de los canalículos secretores de la célula parietal gástrica, uniéndose covalentemente e irreversiblemente a la H+/K+-ATPasa (bomba de protones), bloqueando la etapa final de la secreción ácida independientemente del estímulo (histamina, gastrina, acetilcolina). Inicio: 1h · Efecto máximo: 2-3h · Duración: 24h (por unión irreversible, requiere síntesis de nuevas bombas). Indicado en: hemorragia digestiva alta (péptica, varicosa como adyuvante), profilaxis de úlcera de estrés en pacientes críticos/UCI, enfermedad por reflujo gastroesofágico grave cuando VO no es posible, síndrome de Zollinger-Ellison, erradicación de H. pylori (como parte de terapia combinada VO).',

    objetivoTerapeutico: 'Supresión ácida potente y sostenida · Facilitar la cicatrización/estabilización del coágulo en hemorragia digestiva · Profilaxis de úlcera de estrés en paciente crítico',

    preparacion: {
      'Presentación':             '<b>Pantoprazol 40 mg polvo para solución inyectable</b> - vial',
      'Reconstitución':           '<b>10 mL de SF 0.9%</b> (NO usar otros disolventes)',
      'Dilución para perfusión':  'Reconstituido + 100 mL SF 0.9% o SG 5% (usar envases de PLÁSTICO para la dilución)',
      'Vía':                      'IV exclusiva (inyección lenta o perfusión)',
      '⏱️ INYECCIÓN IV LENTA':    '<b>2-15 minutos</b> (según protocolo institucional)',
      '⏱️ PERFUSIÓN (si se usa)':  '15-30 minutos',
      '⏱️ DOSIS ESTÁNDAR':        '<b>40 mg IV c/24h</b>',
      '⏱️ HEMORRAGIA DIGESTIVA ALTA (bolo)':'<b>80 mg IV bolo + 40 mg IV c/12h</b> (o perfusión continua según protocolo)',
      '⏱️ HEMORRAGIA DIGESTIVA (perfusión continua, alto riesgo)':'<b>80 mg IV bolo + perfusión 8 mg/h × 72h</b>',
      '⏱️ Zollinger-Ellison':      '80 mg/día inicial, ajustar según respuesta (puede requerir dosis mayores divididas)',
      'Bomba':                    'Recomendada si perfusión continua',
      '🧊 ESTABILIDAD reconstituido':'<b>12 horas a 25°C</b> (algunos fabricantes: hasta 24h según ficha específica)',
      '🌑 Protección luz':        'Conservar vial en embalaje original protegido de la luz',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez o precipitación',
    },

    vigilancia: {
      antes: [
        'Confirmar indicación clínica (hemorragia digestiva, profilaxis, ZES).',
        'Revisar anticoagulación concomitante (warfarina/acenocumarol) - vigilancia de INR necesaria.',
        'Revisar uso de metotrexato a dosis altas - considerar suspensión temporal de IBP si aplica.',
        'Doble verificación: dosis, reconstitución (solo con SF), vía.',
      ],
      durante: [
        'Inyección IV lenta en 2-15 minutos - no bolo rápido.',
        'Vigilar sitio IV.',
        'Observar reacción alérgica (rara).',
      ],
      despues: [
        'En hemorragia digestiva: vigilar signos de resangrado (melenas, hematemesis, inestabilidad hemodinámica).',
        'Si en warfarina: vigilar INR con mayor frecuencia al iniciar o suspender pantoprazol.',
        'Facilitar transición a VO cuando el paciente tolere (misma indicación, dosis equivalente).',
        'En uso prolongado (semanas-meses): considerar vigilancia de magnesio sérico, vitamina B12 si tratamiento muy prolongado.',
        'Documentar: dosis, hora, indicación, respuesta clínica.',
      ],
      suspender: [
        'Reacción alérgica.',
        'Resolución de la indicación aguda (transición a VO o suspensión).',
        'Finalización del protocolo de hemorragia digestiva (típicamente 72h de perfusión IV tras endoscopia de alto riesgo).',
      ],
    },

    incompatibilidades: [
      'No debe mezclarse con otros medicamentos excepto los expresamente indicados en ficha técnica.',
      'Reconstituir SOLO con SF 0.9% (no usar SG5% para la reconstitución inicial, aunque sí puede usarse para dilución posterior según fabricante).',
      'Usar envases de PLÁSTICO para la dilución (no vidrio) según algunas fichas técnicas específicas.',
      'Preferir línea IV independiente.',
    ],

    alertasSeguridad: [
      '🟠 Puede AUMENTAR el INR/tiempo de protrombina en pacientes con warfarina/fenprocumon - vigilar coagulación al iniciar/suspender tratamiento.',
      '🟠 Aumenta niveles de METOTREXATO a dosis altas (300 mg) - considerar retirada temporal de IBP en estos contextos (oncología, psoriasis).',
      '🟡 Uso prolongado (meses-años): asociado a mayor riesgo de fracturas óseas, hipomagnesemia, deficiencia de vitamina B12, infecciones entéricas (incluyendo C. difficile) - relevante para educación al alta, no tan relevante en uso agudo hospitalario.',
      '🟡 Atraviesa placenta con concentración fetal aumentada en gestación avanzada (estudios en rata).',
      '🟡 Desechar si se observa turbidez o precipitación en el vial reconstituido.',
      '🟡 Conservar por debajo de 30°C, protegido de la luz en su embalaje original.',
    ],
  },

  modulos: {

    hemorragiaDigestiva: `
      <b>Pantoprazol en Hemorragia Digestiva Alta:</b><br/>
      <b>FUNDAMENTO:</b><br/>
      • La supresión ácida potente estabiliza el coágulo formado sobre la lesión sangrante (el ácido gástrico degrada los coágulos e inhibe la agregación plaquetaria).<br/>
      • Especialmente relevante TRAS hemostasia endoscópica en úlcera péptica de alto riesgo (Forrest Ia, Ib, IIa, IIb).<br/><br/>
      <b>PROTOCOLO ESTÁNDAR (guías internacionales):</b><br/>
      <b>Antes de la endoscopia (si se sospecha origen péptico):</b><br/>
      • Bolo IV de IBP puede considerarse mientras se organiza la endoscopia (reduce estigmas de alto riesgo, aunque no sustituye la endoscopia).<br/><br/>
      <b>Tras endoscopia con hemostasia en lesión de alto riesgo:</b><br/>
      • <b>Opción A (perfusión continua clásica): 80 mg IV bolo + perfusión 8 mg/h × 72 horas</b>.<br/>
      • <b>Opción B (dosis intermitente, evidencia creciente de no-inferioridad): 40-80 mg IV c/12h × 72 horas</b>.<br/>
      • Tras las 72h: transición a IBP VO a dosis estándar (40 mg/día) durante 4-8 semanas.<br/><br/>
      <b>En lesiones de BAJO riesgo (Forrest IIc, III):</b><br/>
      • IBP VO a dosis estándar es suficiente, sin necesidad de perfusión IV intensiva.<br/><br/>
      <b>VIGILANCIA:</b><br/>
      • Signos de resangrado: melenas recurrentes, hematemesis, taquicardia, hipotensión, descenso de Hb.<br/>
      • Hemoglobina seriada según protocolo (cada 6-12h inicialmente).<br/>
      • Considerar segunda endoscopia si resangrado clínico.
    `,

    profilaxisUlceraEstres: `
      <b>Pantoprazol en Profilaxis de Úlcera de Estrés (UCI):</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Pacientes críticos con factores de riesgo de hemorragia digestiva por úlcera de estrés:<br/>
      &nbsp;&nbsp;- Ventilación mecánica > 48 horas.<br/>
      &nbsp;&nbsp;- Coagulopatía (plaquetas < 50,000, INR > 1.5, TTPA > 2× normal).<br/>
      &nbsp;&nbsp;- TCE grave, quemados extensos, trasplante hepático/renal.<br/>
      &nbsp;&nbsp;- Combinación de 2+ factores de riesgo menores (sepsis, estancia UCI > 1 semana, corticoides a dosis altas, anticoagulación).<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>40 mg IV c/24h</b> - dosis profiláctica estándar.<br/><br/>
      <b>CONSIDERACIONES ACTUALES:</b><br/>
      • Estudios recientes (SUP-ICU trial) han cuestionado el beneficio-riesgo en pacientes de MENOR riesgo - individualizar según factores de riesgo reales.<br/>
      • Suspender la profilaxis cuando el paciente ya no cumple criterios de alto riesgo (extubado, tolerando dieta enteral, sin coagulopatía).<br/>
      • Evitar uso prolongado innecesario - asociado a mayor riesgo de neumonía nosocomial y C. difficile en algunos estudios.<br/><br/>
      <b>ALTERNATIVA:</b><br/>
      • Ranitidina/famotidina (anti-H2) - menor potencia pero también usados, especialmente si se prioriza evitar sobre-supresión ácida.
    `,

    interaccionAnticoagulantes: `
      <b>Pantoprazol e Interacción con Anticoagulantes Cumarínicos:</b><br/>
      <b>DATOS DE FICHA TÉCNICA:</b><br/>
      • Los estudios de farmacocinética clínica NO muestran interacción significativa consistente entre pantoprazol y warfarina/fenprocumon.<br/>
      • SIN EMBARGO, se han notificado casos AISLADOS post-comercialización de <b>AUMENTO del INR y tiempo de protrombina</b> en pacientes que toman IBPs junto con estos anticoagulantes.<br/>
      • Estos aumentos pueden provocar <b>HEMORRAGIAS ANÓMALAS E INCLUSO LA MUERTE</b> (advertencia expresa de ficha técnica).<br/><br/>
      <b>RECOMENDACIÓN PRÁCTICA:</b><br/>
      • <b>Monitorizar INR/tiempo de protrombina</b>:<br/>
      &nbsp;&nbsp;- Al INICIAR tratamiento con pantoprazol en paciente ya anticoagulado.<br/>
      &nbsp;&nbsp;- Al SUSPENDER pantoprazol.<br/>
      &nbsp;&nbsp;- Si el paciente NO toma pantoprazol de forma regular (uso intermitente).<br/><br/>
      <b>CONTEXTO CLÍNICO:</b><br/>
      • Esta interacción es MENOS marcada que con otros IBPs (ej. omeprazol tiene interacciones más consistentes por vía CYP2C19 con clopidogrel).<br/>
      • Aun así, la vigilancia de INR es prudente en cualquier paciente anticoagulado que inicie o suspenda un IBP.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir el vial de 40 mg SOLO con 10 mL de SF 0.9%.',
      'Etiquetar: Pantoprazol 40 mg, hora de preparación, vía.',
      'Inyección IV lenta en 2-15 minutos, o diluir para perfusión más prolongada.',
      'Usar envases de plástico si se diluye para perfusión.',
      'Si en warfarina/acenocumarol: coordinar vigilancia de INR.',
      'En hemorragia digestiva: seguir protocolo específico (bolo + perfusión o dosis intermitente según indicación médica).',
      'Vigilar signos de resangrado en hemorragia digestiva: melenas, hematemesis, inestabilidad hemodinámica.',
      'Facilitar transición a VO cuando el paciente tolere dieta.',
      'En profilaxis UCI: reevaluar diariamente si persisten los criterios de riesgo (evitar uso innecesariamente prolongado).',
      'Proteger el vial de la luz, conservar en su embalaje original.',
      'Desechar si se observa turbidez o precipitación.',
      'Documentar: dosis, hora, indicación, vía, respuesta clínica.',
    ],

    efectosAdversos: [
      '🟠 Aumento de INR/tiempo de protrombina con warfarina (raro pero potencialmente grave)',
      '🟠 Hipomagnesemia (uso prolongado)',
      '🟠 Mayor riesgo de infección por C. difficile (uso prolongado)',
      '🟡 Cefalea',
      '🟡 Diarrea',
      '🟡 Náuseas, vómitos',
      '🟡 Dolor abdominal',
      '🟡 Flatulencia',
      '🟡 Mareos',
      '🟡 Reacción en sitio de inyección',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Deficiencia de vitamina B12 (uso muy prolongado)',
      '🟡 Fracturas óseas (uso crónico prolongado, dosis altas)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a pantoprazol u otros IBPs (posible reactividad cruzada).',
      'Uso concomitante con atazanavir (reduce su absorción significativamente).',
      'Precaución en: uso prolongado de dosis altas de metotrexato, anticoagulación con warfarina/fenprocumon (vigilancia INR).',
    ],

    fotosensibilidad: 'Requiere protección de la luz - conservar el vial en su embalaje original.',

    estabilidad: {
      'Vial sin abrir':             'Temperatura ambiente (< 30°C), protegido de luz, hasta vencimiento (2 años)',
      'Reconstituido':               '<b>12 horas a 25°C</b> (verificar ficha específica del fabricante - algunos indican hasta 24h)',
      'Reconstituido y diluido':     'Según ficha específica del fabricante - generalmente similar ventana de estabilidad',
      'Aspecto':                     'Transparente, incolora — desechar si turbidez o precipitación',
      'Temperatura':                 'NO congelar · < 30°C · Proteger de la luz',
    },

    presentaciones: [
      'Pantoprazol Normon 40 mg polvo para solución inyectable',
      'Pantoprazol Aurovitas 40 mg polvo para solución inyectable',
      'Pantoprazol genéricos varios (Sandoz, Cinfa, Recordati) - principalmente formulación oral',
      'Pantoprazol 40 mg comprimidos gastrorresistentes (VO)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis estándar',                          dosis: '<b>40 mg IV c/24h</b>',                    via: 'IV' },
      { indicacion: 'Hemorragia digestiva (bolo + perfusión)',dosis: '<b>80 mg IV bolo + perfusión 8 mg/h × 72h</b>',via: 'IV' },
      { indicacion: 'Hemorragia digestiva (dosis intermitente)',dosis:'40-80 mg IV c/12h × 72h',                  via: 'IV' },
      { indicacion: 'Profilaxis úlcera de estrés (UCI)',      dosis: '40 mg IV c/24h',                             via: 'IV' },
      { indicacion: 'Síndrome de Zollinger-Ellison',           dosis: '80 mg/día inicial, ajustar según respuesta',via: 'IV' },
      { indicacion: 'Pediátrico (> 1 año, off-label)',         dosis: '0.5-1 mg/kg/día IV',                         via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Atraviesa placenta con concentración fetal aumentada en gestación avanzada (estudios animales). Usar si claramente indicado. Compatible con lactancia (excreción mínima esperada, aunque datos específicos limitados).',

    pediatria: 'Uso IV en pediatría es off-label pero descrito en la práctica clínica: 0.5-1 mg/kg/día en niños > 1 año, según indicación y gravedad.',

    adultoMayor: 'Sin ajuste específico de dosis por edad. Vigilancia estándar de interacciones (mayor prevalencia de polifarmacia, incluyendo anticoagulantes).',

    insufRenal: 'Sin ajuste de dosis necesario - metabolismo principalmente hepático.',

    insufHepatica: 'En insuficiencia hepática grave: considerar reducción de dosis a 20 mg/día (según guías generales de IBPs) - vigilancia clínica.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Pantoprazol Normon 40 mg. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Pantoprazol Aurovitas 40 mg. AEMPS.',
      'INGESA. Protocolo de Uso Racional de los Inhibidores de la Bomba de Protones. Vol II, Nº1, 2020.',
      'FDA DailyMed. Pantoprazole Sodium Injection. U.S. National Library of Medicine.',
      'Sociedad Española de Patología Digestiva. Manejo de la Hemorragia Digestiva Alta. Rev Esp Enferm Dig. 2021.',
      'SUP-ICU Trial. Pantoprazole in ICU Patients at Risk for GI Bleeding. NEJM. 2018.',
      'ACG Clinical Guideline. Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021.',
      'Pediamécum AEP. Pantoprazol. Asociación Española de Pediatría.',
    ],
  },

});
