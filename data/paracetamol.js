/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/paracetamol.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'paracetamol',
  nombre:         'Paracetamol IV',
  nombreGenerico: 'Acetaminophen / Paracetamol',
  categoria:      'analgesia',
  tags:           ['analgesia', 'antipirético', 'dolor leve-moderado', 'fiebre', 'post-operatorio', 'multimodal'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Analgésico y antipirético — inhibe COX central (cerebro), mínima acción periférica. NO es antiinflamatorio.',
      'Solución pre-mezclada lista para usar (1 g/100 mL) — NO requiere dilución.',
      'Infusión IV en 15 minutos — bolo rápido NO aporta beneficio analgésico adicional.',
      'Dosis máxima ABSOLUTA: 4 g/día en adulto (3 g si peso < 50 kg, insuf. hepática, alcoholismo).',
      'HEPATOTOXICIDAD si sobredosis o uso crónico > dosis máxima — N-acetilcisteína es el antídoto.',
    ],

    resumenRapido: 'Analgésico y antipirético central. Mecanismo no completamente claro: inhibe COX cerebral (principalmente COX-3), modula sistema endocannabinoide y serotoninérgico. Indicado en dolor leve-moderado, fiebre, post-operatorio (analgesia multimodal), cólico renal, dismenorrea. Base de la analgesia escalonada OMS. Inicio: 5-10 min IV, pico: 15 min, duración: 4-6h.',

    objetivoTerapeutico: 'Analgesia dolor leve-moderado · Antipiresis · Reducir necesidad de opioides (analgesia multimodal) · EVA/EVN objetivo < 4/10',

    preparacion: {
      'Presentación':             '<b>1 g/100 mL frasco PREMEZCLADO listo para uso</b> (10 mg/mL)',
      'Presentación pediátrica':  '500 mg/50 mL frasco pediátrico',
      'Diluyente':                '<b>NO requiere dilución</b> — administrar tal cual',
      'Diluyente adicional (si dosis < 1g)': 'SF 0.9% o SG 5% (compatibles)',
      'Vía':                      'IV exclusiva (NO IM, NO SC)',
      '⏱️ TIEMPO INFUSIÓN':       '<b>15 minutos (estándar)</b>',
      '⏱️ Bolo IV':                'NO recomendado — infusión 15 min preferida',
      'Bomba':                    'Recomendada para infusión controlada',
      'Acceso':                   'IV periférico (calibre 18-20G) o central',
      '🧊 ESTABILIDAD pre-uso':   'Temperatura ambiente (< 30°C), protegido de luz · NO refrigerar (cristalización)',
      '🧊 Una vez abierto':       '<b>Usar inmediatamente (estabilidad limitada post-perforación)</b>',
      'Aspecto':                  'Solución clara, incolora a ligeramente amarillenta — desechar si turbidez o cristales',
    },

    vigilancia: {
      antes: [
        'Verificar peso corporal — dosis se ajusta si < 50 kg.',
        'Revisar función hepática basal (AST, ALT) — riesgo hepatotoxicidad.',
        'Confirmar uso concomitante de otros productos con paracetamol (combinaciones VO) — riesgo sobredosis acumulada.',
        'Revisar antecedentes: hepatopatía, alcoholismo crónico, desnutrición.',
        'Comprobar prescripción: dosis (g), intervalo (c/6-8h), dosis diaria total.',
      ],
      durante: [
        'Mantener velocidad estándar 15 min — no hay beneficio en infusión más rápida.',
        'Observar reacción alérgica primeros 15 min (rara pero posible).',
        'Vigilar sitio IV — irritación venosa leve posible.',
        'Si dolor en sitio IV: reducir velocidad o diluir más.',
      ],
      despues: [
        'Evaluar respuesta analgésica con escala EVA/EVN a los 30-60 min.',
        'Evaluar respuesta antipirética a los 60 min.',
        'Documentar EVA pre y post administración.',
        'Llevar registro de dosis diaria total — NO superar 4 g/24h.',
        'En uso > 5 días: control de función hepática.',
        'Evaluar transición a paracetamol VO cuando paciente tolere.',
      ],
      suspender: [
        'Reacción alérgica (rara — rash, broncoespasmo, anafilaxia).',
        'Elevación significativa de transaminasas (> 3× LSN).',
        'Hepatopatía nueva o descompensación.',
        'Dosis diaria total alcanzada (4 g/24h).',
        'Respuesta analgésica adecuada con menor dosis.',
        'Tolerancia oral establecida — cambio a VO.',
      ],
    },

    incompatibilidades: [
      'Diazepam — incompatibilidad documentada (precipitación).',
      'Clorpromazina — incompatibilidad.',
      'No mezclar con otros fármacos en misma jeringa o línea sin verificar.',
      'Generalmente compatible con la mayoría de fluidos IV estándar.',
      'Lavar línea con SF antes y después de otros fármacos.',
    ],

    alertasSeguridad: [
      '🔴 HEPATOTOXICIDAD por sobredosis (> 4 g/día) o uso crónico — antídoto: N-acetilcisteína.',
      '🟠 En hepatopatía, alcoholismo, desnutrición: REDUCIR dosis máxima a 3 g/día.',
      '🟠 Si peso < 50 kg: ajustar dosis a 15 mg/kg (no exceder 60 mg/kg/día).',
      '🟡 Hipotensión leve posible con infusión rápida — administrar en 15 min.',
      '🟡 Atención a combinaciones VO con paracetamol (analgésicos compuestos, antigripales) — sobredosis fácil.',
      '🟡 Evitar uso con alcohol o INH (isoniazida) — potencia hepatotoxicidad.',
    ],
  },

  modulos: {

    multimodal: `
      <b>Analgesia Multimodal con Paracetamol:</b><br/>
      <b>Concepto:</b> Combinar fármacos con diferentes mecanismos para potenciar analgesia y reducir efectos adversos.<br/><br/>
      <b>Esquema recomendado (escalera OMS adaptada):</b><br/>
      • <b>Base:</b> Paracetamol 1 g IV c/6h (o ibuprofeno si no contraindicado).<br/>
      • <b>+ AINE:</b> Ketorolaco 30 mg IV c/8h (si no contraindicado).<br/>
      • <b>+ Opioide débil:</b> Tramadol 50-100 mg IV c/6h si dolor moderado.<br/>
      • <b>+ Opioide fuerte:</b> Morfina si dolor severo refractario.<br/>
      <b>Beneficios:</b><br/>
      • Reducción 30-40% del consumo de opioides.<br/>
      • Menos efectos adversos opioides (náuseas, estreñimiento, depresión respiratoria).<br/>
      • Mejor control del dolor.<br/>
      • Movilización temprana.
    `,

    hepatotoxicidad: `
      <b>Manejo de sobredosis / hepatotoxicidad por paracetamol:</b><br/>
      <b>Dosis tóxica:</b> > 4 g en 24h adulto, > 150 mg/kg dosis única.<br/>
      <b>Toxicidad hepática:</b> Pico AST/ALT 48-72h post-ingesta.<br/><br/>
      <b>Manejo:</b><br/>
      1. <b>Niveles de paracetamol sérico 4h post-ingesta</b> — nomograma de Rumack-Matthew.<br/>
      2. <b>N-acetilcisteína (NAC):</b><br/>
      • Dosis carga: 150 mg/kg IV en 60 min.<br/>
      • Mantenimiento: 50 mg/kg en 4h, luego 100 mg/kg en 16h.<br/>
      • O régimen 21h.<br/>
      3. Función hepática c/12h × 72h.<br/>
      4. Si insuficiencia hepática severa: consultar centro trasplante.<br/>
      <b>Prevención:</b> No exceder 4 g/24h, vigilar combinaciones VO.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar peso del paciente — ajuste si < 50 kg.',
      'Mantener registro acumulado de dosis paracetamol en 24h — incluir cualquier fuente VO o IV.',
      'Etiquetar frasco con: hora inicio, hora fin, dosis administrada, total acumulado del día.',
      'Bomba de infusión para controlar 15 min de infusión.',
      'Evaluar dolor con escala EVA/EVN PRE y POST administración.',
      'Educar al paciente: NO automedicar con paracetamol VO sin consultar.',
      'En post-operatorio: combinar con AINE y opioides según protocolo multimodal.',
      'Vigilar combinaciones potencialmente hepatotóxicas (INH, alcohol).',
      'Documentar respuesta analgésica/antipirética y efectos adversos.',
      'En ancianos o hepatopatía: dosis máxima 3 g/día.',
    ],

    efectosAdversos: [
      '🔴 Hepatotoxicidad — solo con sobredosis o uso crónico excesivo',
      '🟠 Reacción alérgica / anafilaxia (rara)',
      '🟠 Reacción cutánea severa — SJS/TEN (muy rara pero grave)',
      '🟡 Hipotensión leve (especialmente bolo rápido)',
      '🟡 Náuseas, vómitos',
      '🟡 Cefalea',
      '🟡 Insomnio (raro)',
      '🟡 Trombocitopenia (raro)',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Dolor en sitio IV',
    ],

    contraindicaciones: [
      'Hipersensibilidad a paracetamol.',
      'Insuficiencia hepática severa (Child-Pugh C).',
      'Hepatitis viral aguda.',
      'Alcoholismo crónico activo (relativa — dosis reducida).',
      'Anemia, déficit de G6PD severo (precaución).',
    ],

    fotosensibilidad: 'No relevante. Almacenar protegido de luz directa pero sin requisitos especiales durante administración.',

    estabilidad: {
      'Frasco sin abrir':           'Temperatura ambiente (< 30°C), protegido de luz, hasta vencimiento',
      'NO refrigerar':              'Refrigeración causa cristalización — desechar si ocurre',
      'Una vez abierto':            '<b>Usar inmediatamente</b> (estabilidad post-perforación limitada)',
      'Aspecto':                    'Clara, incolora a ligeramente amarillenta — desechar si turbidez o cristales',
      'Temperatura':                'NO congelar · NO refrigerar · 15-25°C ideal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Frasco premezclado: una vez abierto, administrar en los 15 min siguientes. Desechar sobrante.',
      dosisRestante:    'Desechar el frasco parcialmente utilizado inmediatamente. No guardar.',
      infusionPreparada:'Administrar en 15 min sin dilución adicional. Desechar sobrante al finalizar.',
      notas:            'La presentación IV no requiere dilución. Usar sistema de infusión cerrado. Desechar si hay turbidez, cambio de color o partículas visibles.',
    },

    presentaciones: [
      'Paracetamol 1 g/100 mL frasco premezclado IV (Perfalgan®)',
      'Paracetamol 500 mg/50 mL frasco pediátrico IV',
      'Paracetamol 500 mg, 650 mg, 1 g comprimidos VO',
      'Paracetamol 120 mg/5 mL, 250 mg/5 mL suspensión oral',
      'Paracetamol supositorios pediátricos y adultos',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Adulto > 50 kg',                    dosis: '1 g IV c/6h (máx 4 g/día)',           via: 'IV' },
      { indicacion: 'Adulto < 50 kg',                    dosis: '15 mg/kg c/6h (máx 60 mg/kg/día)',    via: 'IV' },
      { indicacion: 'Pediátrico > 10 kg',                dosis: '15 mg/kg c/6h (máx 60 mg/kg/día)',    via: 'IV' },
      { indicacion: 'Pediátrico < 10 kg',                dosis: '7.5 mg/kg c/6h (máx 30 mg/kg/día)',   via: 'IV' },
      { indicacion: 'Hepatopatía / alcohólico',          dosis: 'MÁX 3 g/día (750 mg c/6h)',           via: 'IV/VO' },
      { indicacion: 'Intervalo mínimo entre dosis',      dosis: '4 horas',                              via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA) — uso seguro durante todo el embarazo. Analgésico de PRIMERA ELECCIÓN en gestantes. Compatible con lactancia (mínima excreción en leche).',

    pediatria: 'Neonatos: dosis ajustadas según protocolo NICU. > 10 kg: 15 mg/kg c/6h (máximo 60 mg/kg/día). < 10 kg: 7.5 mg/kg c/6h (máximo 30 mg/kg/día). NUNCA exceder 4 g/24h adolescentes.',

    adultoMayor: 'Sin ajuste de dosis si función hepática normal. Considerar dosis máxima 3 g/día en > 65 años con comorbilidades, desnutrición o múltiples fármacos hepatotóxicos.',

    insufRenal: 'Sin ajuste hasta CrCl > 30 mL/min. CrCl < 30 mL/min: INTERVALO C/8H (no c/6h). En diálisis: dosis estándar tras sesión. Sin acumulación significativa.',

    insufHepatica: 'Insuficiencia hepática leve-moderada: máximo 3 g/día. Insuficiencia severa (Child-Pugh C): CONTRAINDICADO. Alcoholismo crónico: máximo 2-3 g/día con vigilancia hepática.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Acetaminophen Injection (Perfalgan®). U.S. National Library of Medicine.',
      'CIMA AEMPS. Ficha Técnica Paracetamol IV. Agencia Española de Medicamentos.',
      'OMS Pain Ladder. Cancer Pain Management. World Health Organization.',
      'PROSPECT Guidelines. Postoperative Pain Management. Anesthesiology. 2019.',
      'Micromedex Solutions. Acetaminophen (Injectable). Accessed 2024.',
      'Rumack-Matthew Nomogram. Acetaminophen Overdose Assessment.',
      'AASLD Guidelines. Acetaminophen Hepatotoxicity Management. Hepatology. 2017.',
    ],
  },

});
