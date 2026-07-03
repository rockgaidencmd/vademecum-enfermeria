/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/acetilcisteina.js
   Fuentes: CIMA AEMPS (Flumil IV), FDA DailyMed,
   Prescott LF Lancet 1979, Rumack-Matthew nomogram,
   WHO Essential Medicines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'acetilcisteina',
  nombre:         'Acetilcisteína',
  nombreGenerico: 'N-Acetylcysteine (NAC)',
  categoria:      'otros',
  tags:           ['antídoto', 'paracetamol', 'intoxicación', 'mucolítico', 'NAC', 'urgencias', 'hepatoprotector'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Antídoto del paracetamol</b> — protocolo 3 bolsas IV: 150 mg/kg (60 min) → 50 mg/kg (4 h) → 100 mg/kg (16 h).',
      'Diluir SIEMPRE en <b>SG 5%</b> — incompatible con SF 0.9% (precipita).',
      '<b>REACCIÓN ANAFILACTOIDE</b> frecuente con la 1ª bolsa (alta concentración) — no es alergia verdadera, puede continuarse tras tratar los síntomas.',
      'La eficacia es máxima en las <b>primeras 8-10 h</b> tras ingesta — no esperar niveles si hay sospecha clínica.',
      'Como mucolítico IV: 300 mg diluidos en SF, nebulizado o vía oral.',
    ],

    resumenRapido: 'N-acetilcisteína (NAC): antídoto de elección en intoxicación por paracetamol y agente mucolítico IV. Actúa reponiendo glutatión hepático y como sustituto directo del NAPQI (metabolito tóxico). Eficacia máxima <8-10 h tras ingesta. Como mucolítico, rompe puentes disulfuro de la mucina reduciendo la viscosidad de las secreciones bronquiales.',

    objetivoTerapeutico: 'Prevenir necrosis hepática por intoxicación de paracetamol · Reponer glutatión hepático · Neutralizar NAPQI · Reducir viscosidad de secreciones (uso mucolítico)',

    preparacion: {
      'Diluyente':             '<b>SG 5% EXCLUSIVAMENTE</b> — incompatible con SF 0.9%',
      'Bolsa 1 (carga)':       '<b>150 mg/kg en 200 mL SG 5% → infundir en 60 min</b>',
      'Bolsa 2':               '<b>50 mg/kg en 500 mL SG 5% → infundir en 4 horas</b>',
      'Bolsa 3 (mantenimiento)':'<b>100 mg/kg en 1000 mL SG 5% → infundir en 16 horas</b>',
      'Dosis total':           '300 mg/kg IV en 21 horas',
      'Concentración máxima':  '15 mg/mL (no superar)',
      'Vía':                   'IV periférica o central — evitar extravasación',
      '⏱️ Duración total':      '<b>21 horas (las 3 bolsas seguidas sin interrupción)</b>',
      'Bomba':                 'Bomba de infusión obligatoria (control exacto de velocidad)',
      '🧊 Estabilidad':        '<b>24 horas a temperatura ambiente en SG 5% · Proteger de luz UV</b>',
    },

    vigilancia: {
      antes: [
        'Identificar tiempo exacto de ingesta del paracetamol — condiciona toda la estrategia.',
        'Solicitar niveles de paracetamol en sangre y aplicar nomograma Rumack-Matthew.',
        'Evaluar función hepática basal: ALT, AST, bilirrubina, INR.',
        'Creatinina basal (hepatotoxicidad suele ir acompañada de nefrotoxicidad).',
        'Glucemia (hipoglucemia en fallo hepático grave).',
        'Preparar adrenalina 1:1000 IM y antihistamínico IV (por si reacción anafilactoide).',
      ],
      durante: [
        'Vigilar signos de reacción anafilactoide durante la 1ª bolsa: urticaria, broncoespasmo, hipotensión.',
        'Si reacción: PAUSAR infusión, tratar síntomas, reiniciar a menor velocidad cuando ceda.',
        'Registrar TA, FC y SpO2 cada 30 min durante la 1ª bolsa.',
        'Asegurar cambio de bolsa sin interrumpir tratamiento.',
        'Usar siempre bomba volumétrica — la velocidad exacta es crítica.',
      ],
      despues: [
        'Transaminasas (ALT/AST) cada 4-6 h para evaluar evolución hepática.',
        'INR / tiempo de protrombina (marcador de función hepática sintética).',
        'Creatinina y función renal.',
        'Glucemia (hipoglucemia en fallo hepático avanzado).',
        'Documentar inicio, hora de ingesta y pauta completa en historia clínica.',
        'TC/UCI si INR > 3 o ALT > 1000 UI/L — fallo hepático agudo.',
      ],
      suspender: [
        'Tras completar las 3 bolsas (21 h) si evolución favorable.',
        'Alergia verdadera documentada a NAC (extrema rareza).',
        'Intoxicación no confirmada con niveles subterapéuticos y sin clínica.',
        'Prescripción médica de suspensión.',
      ],
    },

    incompatibilidades: [
      '<b>SF 0.9% — precipitación con NAC (uso de SG 5% obligatorio)</b>.',
      'Nitroglicerina — degradación de NAC en misma solución.',
      'Antibióticos betalactámicos — no mezclar en la misma bolsa.',
      'Lavar vía con SG 5% antes y después si se comparte con otros fármacos.',
    ],

    alertasSeguridad: [
      '🔴 Reacción anafilactoide (urticaria, broncoespasmo, hipotensión) — más frecuente en 1ª bolsa. Preparar adrenalina y antihistamínico.',
      '🔴 Diluyente incorrecto (SF) causa precipitación — usar SOLO SG 5%.',
      '🟠 No interrumpir el tratamiento entre bolsas — las 3 deben administrarse consecutivas.',
      '🟠 Reducir velocidad de infusión si IC o insuficiencia renal (no reducir dosis total).',
      '🟡 La solución se oxida y vira a rosa/parda — desechar si cambio de color.',
      '🟡 Náuseas/vómitos frecuentes al inicio de la infusión.',
    ],
  },

  modulos: {

    protocoloParacetamol: `
      <b>Protocolo 3 bolsas (Prescott modificado) — Adultos:</b><br/>
      <b>Paso 1 — Bolsa de carga:</b> 150 mg/kg IV en 200 mL SG5% a pasar en 60 min.<br/>
      <b>Paso 2 — Bolsa intermedia:</b> 50 mg/kg en 500 mL SG5% en 4 horas.<br/>
      <b>Paso 3 — Bolsa mantenimiento:</b> 100 mg/kg en 1000 mL SG5% en 16 horas.<br/>
      <b>Duración total: 21 horas · Dosis total: 300 mg/kg</b><br/><br/>
      <b>Indicación según nomograma Rumack-Matthew:</b><br/>
      • Nivel paracetamol ≥ línea de tratamiento (4h: ≥150 mcg/mL): iniciar NAC.<br/>
      • No esperar niveles si: ingesta >150 mg/kg, tiempo incierto, hepatopatía previa.<br/><br/>
      <b>Reacción anafilactoide (si ocurre en bolsa 1):</b><br/>
      1. PAUSAR infusión 30-60 min.<br/>
      2. Difenhidramina 25-50 mg IV o clemastina IV.<br/>
      3. Si broncoespasmo: salbutamol nebulizado.<br/>
      4. Reiniciar a mitad de velocidad cuando síntomas cedan.<br/>
      5. Continuar siempre que sea posible — no abandonar el tratamiento.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar tiempo de ingesta ANTES de preparar — el nomograma requiere tiempo exacto.',
      'Preparar las 3 bolsas con SG 5% (nunca SF) — verificar con colega.',
      'Etiquetar cada bolsa: Acetilcisteína [dosis], volumen, velocidad de infusión, número de bolsa (1/3, 2/3, 3/3).',
      'Tener adrenalina 1:1000 IM y difenhidramina IV preparadas antes de iniciar.',
      'Colocar paciente en posición semiincorporada durante bolsa 1 — facilita manejo de reacción.',
      'Iniciar el reloj al empezar bolsa 1 — registrar hora de inicio de cada bolsa.',
      'Cambiar de bolsa sin interrupción — el tiempo continuo es parte del protocolo.',
      'Vigilar color de la solución: si vira a rosa/parda (oxidación), desechar y preparar nueva.',
      'Control analítico a las 4 y 12 horas de inicio: transaminasas, INR, creatinina, glucemia.',
      'Registrar diuresis horaria — oliguria indica fallo hepático-renal.',
    ],

    efectosAdversos: [
      '🔴 Reacción anafilactoide: urticaria, broncoespasmo, hipotensión (especialmente bolsa 1)',
      '🟠 Náuseas y vómitos al inicio de la infusión',
      '🟠 Eritema cutáneo transitorio',
      '🟡 Taquicardia durante la infusión',
      '🟡 Flebitis en punto de punción',
      '🟡 Rubor facial',
    ],

    contraindicaciones: [
      'No hay contraindicaciones absolutas cuando existe indicación de antídoto — el riesgo hemorrágico siempre supera al de la reacción.',
      'Antecedente de alergia verdadera a NAC: considerar premedicación o desensibilización.',
      'Asma grave: mayor riesgo de broncoespasmo — premedicar con broncodilatador.',
    ],

    fotosensibilidad: 'Sí — proteger de la luz UV. La solución puede oxidarse y virar de color. No refrigerar la solución preparada.',

    estabilidad: {
      'Ampolla sin abrir':        'Temperatura ambiente (<30°C), protegida de luz',
      'Preparada en SG 5%':       '<b>24 horas a temperatura ambiente · Proteger de luz UV</b>',
      'Aspecto':                   'Incolora a ligeramente amarillenta — desechar si rosa o parda (oxidada)',
      'Temperatura':               'NO refrigerar la solución preparada',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras apertura — riesgo de oxidación.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h a temperatura ambiente en SG 5%, protegida de luz UV.',
      notas:             'No refrigerar la solución preparada. Si la solución presenta color oscuro o turbidez → desechar.',
    },

    presentaciones: [
      'Flumil® IV 300 mg/3 mL (100 mg/mL) — ampolla 3 mL',
      'Acetilcisteína Combino Pharm® 200 mg/mL — ampolla 10 mL (2 g)',
      'Acetilcisteína Normon® 600 mg/mL — vial liofilizado',
      'Uso oral/efervescente: Flumil® 200 mg, 600 mg (uso mucolítico — diferente vía)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Bolsa 1 — carga (adulto)',      dosis: '<b>150 mg/kg en 200 mL SG5% en 60 min</b>',   via: 'IV' },
      { indicacion: 'Bolsa 2 (adulto)',               dosis: '50 mg/kg en 500 mL SG5% en 4 h',              via: 'IV' },
      { indicacion: 'Bolsa 3 — mantenimiento',        dosis: '100 mg/kg en 1000 mL SG5% en 16 h',           via: 'IV' },
      { indicacion: 'Mucolítico IV (adulto)',          dosis: '300 mg en 250 mL SF IV c/8-12h',              via: 'IV' },
      { indicacion: 'Mucolítico nebulizado',           dosis: '300-600 mg nebulizado c/8h',                  via: 'NEB' },
      { indicacion: 'Dosis máxima única (peso >110kg)', dosis: 'Calcular como si fuera 110 kg (evitar sobredosis)', via: 'IV' },
    ],

    embarazo: 'No contraindicado en embarazo — la hepatotoxicidad fetal por NAPQI es mayor riesgo que la NAC. Se recomienda tratamiento estándar en embarazadas intoxicadas. Excreción en leche materna no significativa.',

    pediatria: 'Mismo protocolo de 3 bolsas ajustado por peso. Límite: pacientes >110 kg → calcular como 110 kg. En <20 kg: reducir volumen de cada bolsa para evitar sobrecarga hídrica (consultar con toxicología pediátrica). Neonatos: 10 mg/kg/dosis IV c/8h bajo supervisión experta.',

    adultoMayor: 'Sin ajuste de dosis. Precaución con el volumen total (~1700 mL en 21 h) en pacientes con ICC o restricción hídrica — considerar reducción de volumen de dilución con misma dosis.',

    insufRenal: 'Reducir velocidad de infusión (no la dosis total). La hemodiálisis elimina parcialmente la NAC — puede ser necesario continuar o repetir la pauta. Vigilar función renal durante y después del tratamiento.',

    insufHepatica: 'No contraindicada — es la indicación principal. La NAC puede continuar aunque exista daño hepático previo. Ajustar soporte hepático y vitamina K si INR elevado.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Flumil® IV / Acetilcisteína Combino Pharm®.',
      'Prescott LF et al. Intravenous N-acetylcysteine. Lancet. 1979.',
      'Rumack BH, Matthew H. Acetaminophen poisoning and toxicity. Pediatrics. 1975.',
      'Chiew AL et al. Ann Emerg Med 2016 — Two vs three bag protocol.',
      'Bateman DN et al. Paracetamol toxicity — SNAP trial. Lancet. 2014.',
      'WHO Essential Medicines List. N-Acetylcysteine (antidote).',
      'UpToDate. Acetaminophen (paracetamol) poisoning in adults: treatment. Accessed 2024.',
    ],
  },

});
