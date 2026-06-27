/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/furosemida.js
   Fuentes: FDA DailyMed, CIMA AEMPS, Micromedex,
   Prospecto Furosemida, Guías de hipertensión
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'furosemida',
  nombre:         'Furosemida',
  nombreGenerico: 'Furosemide',
  categoria:      'diureticos',
  tags:           ['UCI', 'diurético', 'edema pulmonar', 'insuficiencia cardíaca', 'hipercalcemia'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Diurético de asa — inhibidor potente de la reabsorción de Na+, K+, Cl- a nivel del asa de Henle.',
      'Administración IV en bolo o infusión lenta — NUNCA en bolo rápido (ototoxicidad, hipotensión severa).',
      'Monitorizar electrolitos (K+, Na+, Cl-) y función renal antes y después de cada dosis.',
      'Hipopotasemia muy frecuente (>50%) — monitorizar K+ sérico, iniciar reposición si < 3.5 mEq/L.',
      'Velocidad máxima IV: 4 mg/min (máximo 40 mg en infusión lenta de 10 min) — superar causa ototoxicidad irreversible.',
      'FOTOSENSIBLE — proteger vial y solución preparada de la luz directa.',
    ],

    resumenRapido: 'Diurético de asa de gran potencia. Inhibe cotransportador Na-K-2Cl en asa de Henle ascendente. Indicado en edema pulmonar agudo, insuficiencia cardíaca descompensada, hipercalcemia, ascitis, síndrome nefrótico. Inicio de acción: 1 min IV, pico: 10-20 min, duración: 2-4 horas.',

    objetivoTerapeutico: 'Aliviar edema pulmonar · Reducir precarga cardíaca · Mejorar oxigenación · Normalizar volumen intravascular · Mantener diuresis > 0.5 mL/kg/h',

    preparacion: {
      'Presentación':             '40 mg/4 mL ampolla (10 mg/mL)',
      'Diluyente':                'SF 0.9% (preferido) · SG 5%',
      'Dilución estándar':        '40 mg en 10 mL SF → 4 mg/mL',
      'Dilución alternativa':     '40 mg en 20 mL SF → 2 mg/mL (infusión lenta)',
      'Vía':                      'IV bolo lento o infusión IV',
      '⏱️ VELOCIDAD MÁXIMA':      '<b>4 mg/min MÁXIMO</b> — superar causa ototoxicidad irreversible',
      'Ejemplo velocidad':        '40 mg = 10 minutos mínimo de infusión',
      'Bomba':                    'Bomba de infusión recomendada para precisión',
      '🧊 Estabilidad':           '<b>24 horas a temp. ambiente (15-25°C)</b> sin protección de luz especial',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez o cambios de color',
    },

    vigilancia: {
      antes: [
        'Verificar función renal basal: creatinina, BUN, TFG.',
        'Comprobar electrolitos basales: K+, Na+, Cl-, HCO3-.',
        'Registrar PA y FC basales — evaluar volemia.',
        'Revisar peso corporal (comparar con peso previo).',
        'Auscultar campos pulmonares — evaluar estertores.',
        'Revisar diuresis previa (últimas 24h).',
        'Comprobar prescripción: dosis, vía, velocidad infusión.',
      ],
      durante: [
        'Monitorizar PA cada 5-10 min durante infusión — ALERTA si ↓ > 20% o PAS < 100 mmHg.',
        'Vigilar FC — evaluar taquicardia compensatoria.',
        'Observar respuesta diurética: volumen orina, características (color, densidad).',
        'Vigilar campos pulmonares — disminución de estertores indica efecto.',
        'Mantener velocidad infusión ≤ 4 mg/min — CRÍTICO para evitar ototoxicidad.',
        'En caso de hipotensión: reducir velocidad o suspender infusión.',
      ],
      despues: [
        'Registrar volumen de orina producida en los próximos 30-60 min.',
        'Comprobar peso corporal 1-2h post-administración (reducción esperable).',
        'Verificar electrolitos 4-6h post-dosis (hipopotasemia muy frecuente).',
        'Evaluar respuesta clínica: disnea, ortopnea, edema periférico.',
        'Si respuesta inadecuada: comunicar al médico para ajuste de dosis.',
        'Documentar: volumen diuresis, características, cambios de PA, síntomas.',
      ],
      suspender: [
        'PAS < 90 mmHg sostenida o síncope (hipotensión severa).',
        'Oliguria severa (< 0.5 mL/kg/h pese a dosis adecuada).',
        'Cambios auditivos: acúfenos, hipoacusia (ototoxicidad).',
        'Prescripción médica de suspensión.',
        'Acidosis severa o deterioro rápido de función renal.',
      ],
    },

    incompatibilidades: [
      'Anfotericina B IV — potencia nefrotoxicidad, hipopotasemia severa.',
      'Aminoglucósidos (gentamicina, amikacina) — ototoxicidad aditiva.',
      'AINE (ibuprofeno, naproxeno) — reducen efecto diurético, ↑ riesgo renal.',
      'IECA / ARA II — hipotensión aditiva (vigilancia estricta).',
      'Bicarbonato de sodio — no mezclar en misma línea IV.',
      'Digitálicos (digoxina) — hipopotasemia ↑ riesgo de toxicidad digitálica.',
      'Consultar tabla de compatibilidad institucional antes de mezclar con otros fármacos.',
    ],

    alertasSeguridad: [
      '🔴 NUNCA administrar en bolo rápido — causa ototoxicidad irreversible (sordera).',
      '🟠 Velocidad máxima 4 mg/min es OBLIGATORIA — documentar en bomba.',
      '🟠 Hipopotasemia muy frecuente (>50%) — monitorizar y reponer K+ agresivamente.',
      '🟡 Hipotensión posible, especialmente en ancianos — vigilancia continua de PA.',
      '🟡 En insuficiencia renal: requiere dosis mayores pero con riesgo ototóxico ↑.',
      '🟡 Ototoxicidad es IRREVERSIBLE — acúfenos, hipoacusia persistente si velocidad excedida.',
    ],
  },

  modulos: {

    renal: `
      <b>Monitorización renal obligatoria:</b><br/>
      • Creatinina sérica basal y c/4-6h durante tratamiento agudo.<br/>
      • TFG (Cockcroft-Gault) — ajustar dosis si TFG < 30 mL/min.<br/>
      • BUN sérico — evaluar balance hídrico.<br/>
      • Diuresis horaria — objetivo > 0.5 mL/kg/h · alerta si < 0.3 mL/kg/h.<br/>
      • En insuficiencia renal severa (CrCl < 30 mL/min): dosis puede requerir ↑ hasta 80-120 mg, pero vigilancia ototóxica estricta.
    `,

    electrolitos: `
      <b>Monitorización de electrolitos — CRÍTICA:</b><br/>
      <b>Hipopotasemia (K+ < 3.5 mEq/L):</b><br/>
      • Muy frecuente (>50%) — monitorizar c/4-6h en fase aguda.<br/>
      • Riesgo de arritmias cardíacas si K+ < 3.0 mEq/L.<br/>
      • Reposición agresiva: KCl 20-40 mEq IV lento si K+ < 3.0 mEq/L.<br/>
      <b>Hiponatremia:</b><br/>
      • Por pérdida de Na+ en orina — monitorizar Na+ sérico.<br/>
      <b>Hipocloremia:</b><br/>
      • Acompañante de hipopotasemia — reposición conjunta.<br/>
      <b>Alcalosis metabólica:</b><br/>
      • Por pérdida de H+ y Cl- — puede empeorar hipopotasemia.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Etiquetar ampolla y línea IV con: Furosemida 40 mg, dosis, concentración, velocidad máxima (4 mg/min), hora inicio, iniciales.',
      'Usar bomba de infusión volumétrica — programar velocidad máxima de 4 mg/min para precisión.',
      'NO usar gravedad — riesgo de infusión rápida accidental y ototoxicidad.',
      'Monitorizar PA cada 5-10 min durante infusión — registrar valores.',
      'Colocar recipiente calibrado para recolectar orina — registrar volumen y características c/hora.',
      'En edema pulmonar agudo: monitorizar campos pulmonares c/15-30 min — evaluar disminución de estertores.',
      'Mantener línea IV permeable y vigilar por extravasación.',
      'Iniciar reposición de K+ simultáneamente si K+ basal < 3.5 mEq/L.',
      'Comunicar inmediatamente si acúfenos, hipoacusia o mareos severos (ototoxicidad).',
      'Documentar respuesta clínica: disnea, ortopnea, edema, volumen diuresis.',
    ],

    efectosAdversos: [
      '🔴 Ototoxicidad — acúfenos, hipoacusia (irreversible si velocidad excedida)',
      '🔴 Hipopotasemia severa — < 2.5 mEq/L causa arritmias letales',
      '🟠 Hipotensión — especialmente en primeros 30 min',
      '🟠 Desequilibrio electrolítico severo — alcalosis metabólica',
      '🟠 Insuficiencia renal aguda — en pacientes deshidratados',
      '🟠 Hiperglucemia — puede descompensar diabetes',
      '🟡 Mareos, cefalea',
      '🟡 Náuseas, vómitos',
      '🟡 Hiperuricemia — puede precipitar gota',
      '🟡 Reacciones alérgicas (raro)',
    ],

    contraindicaciones: [
      'Anauria (ausencia total de diuresis) — contraindicación absoluta.',
      'Hipersensibilidad a sulfamidas (furosemida las contiene).',
      'Deshidratación severa o shock cardiogénico sin reemplazo de volumen.',
      'Hipopotasemia severa no corregida (< 2.5 mEq/L) — riesgo de arritmias.',
      'Precaución en insuficiencia renal severa, hepatopatía con encefalopatía.',
    ],

    fotosensibilidad: '<b>SÍ — FOTOSENSIBLE.</b> La furosemida inyectable se degrada con la exposición a la luz. Proteger el vial y la solución preparada de la luz directa (envase opaco o papel aluminio). Si se nota un cambio de color amarillento intenso, descartar la solución — indica degradación por luz.',

    estabilidad: {
      'Ampolla sin abrir':      'Temperatura ambiente hasta fecha vencimiento',
      'Preparado en SF':        '<b>24 horas a 15-25°C</b> (temperatura ambiente)',
      'Preparado en SG':        '24 horas a temperatura ambiente',
      'Temperatura':            'NO congelar · Mantener 15-25°C',
      'Aspecto':                'Transparente, incolora — desechar si turbidez',
    },

    presentaciones: [
      'Furosemida 40 mg/4 mL solución inyectable — ampolla 4 mL',
      'Furosemida 10 mg/mL solución inyectable — ampolla 2 mL o 4 mL',
      'Furosemida 250 mg/25 mL solución inyectable — ampolla 25 mL (dosis altas)',
      'Genéricos disponibles en mayoría de países',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Edema pulmonar agudo',              dosis: '40-80 mg IV lento (10 min)', via: 'IV' },
      { indicacion: 'Edema pulmonar refractario',        dosis: '120-240 mg IV en infusión', via: 'IV' },
      { indicacion: 'Insuficiencia cardíaca crónica',    dosis: '20-40 mg c/24h',            via: 'IV/VO' },
      { indicacion: 'Hipercalcemia severa',              dosis: '80-100 mg IV + reposición', via: 'IV' },
      { indicacion: 'Dosis máxima por infusión',         dosis: '240 mg',                    via: 'IV' },
      { indicacion: 'Velocidad máxima infusión',         dosis: '4 mg/min',                  via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Atraviesa placenta. Usar solo si beneficio supera claramente el riesgo (eclampsia, edema pulmonar agudo). Vigilancia fetal estricta. Compatible con lactancia — excreción mínima en leche.',

    pediatria: 'Neonatos: 1-4 mg/kg c/6-12h. Lactantes: 1-4 mg/kg c/6h. Niños: 1-6 mg/kg c/6-12h. Calcular según peso. Monitorización de electrolitos estricta. Mayor sensibilidad a efectos adversos.',

    adultoMayor: 'Mayor riesgo de hipotensión, deshidratación, hipopotasemia. Iniciar con dosis menores (20 mg). Monitorización de PA y electrolitos más frecuente. Vigilancia de ototoxicidad (hipoacusia en ancianos).',

    insufRenal: 'En TFG < 30 mL/min: dosis pueden requerir ↑ (hasta 120-240 mg) por reducida filtración glomerular. Velocidad máxima sigue siendo 4 mg/min. Mayor riesgo ototóxico con dosis altas. Monitorización renal intensiva.',

    insufHepatica: 'En cirrosis: mayor riesgo de encefalopatía hepática por hipopotasemia e hiponatremia. Dosis cuidadosa, monitorización estricta de electrolitos. Riesgo de hepatorrenal.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Furosemide Injection, USP. U.S. National Library of Medicine.',
      'CIMA AEMPS. Ficha Técnica Furosemida. Agencia Española de Medicamentos y Productos Sanitarios.',
      'Micromedex Solutions. Furosemide (Injectable). Accessed 2024.',
      'Prospecto Furosemida — Laboratorios varios (España, Latinoamérica).',
      'ESC/EAS Guidelines. Hyperkalemia Management in Heart Failure. European Society of Cardiology, 2021.',
      'Kidney Disease: Improving Global Outcomes (KDIGO). Acute Kidney Injury Clinical Practice Guideline.',
    ],
  },

});
