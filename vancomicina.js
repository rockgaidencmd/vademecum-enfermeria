/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/vancomicina.js
   Fuentes: DailyMed/FDA, ASHP, Guías IDSA 2020,
   Micromedex, Lexicomp, OPS/OMS
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'vancomicina',
  nombre:         'Vancomicina',
  nombreGenerico: 'Vancomicin Hydrochloride',
  categoria:      'antibioticos',
  tags:           ['UCI', 'MRSA', 'glucopéptido', 'antibiótico', 'nefrotóxico', 'ototóxico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antibiótico de estrecho margen terapéutico. Requiere monitorización de niveles séricos, función renal y velocidad de infusión estricta. Riesgo de nefrotoxicidad, ototoxicidad y síndrome del hombre rojo.',

  /* ═══════════════════════════════════════════
     NIVEL 1 — VISTA RÁPIDA
  ═══════════════════════════════════════════ */
  nivel1: {

    puntosClave: [
      'Infundir SIEMPRE lentamente: mínimo 60 minutos por cada 500 mg. Nunca en bolo directo.',
      'Velocidad máxima de infusión: 10–15 mg/min para prevenir el síndrome del hombre rojo.',
      'Monitorizar función renal (creatinina, BUN) antes de cada dosis y c/48–72h durante el tratamiento.',
      'Vigilar niveles séricos (valle) para ajuste de dosis — objetivo AUC/MIC 400–600 (guías ASHP 2020).',
      'En pacientes con insuficiencia renal, ajustar dosis e intervalo según clearance de creatinina.',
    ],

    resumenRapido: 'Glucopéptido bactericida de primera línea contra Staphylococcus aureus resistente a meticilina (MRSA) y otros grampositivos multirresistentes. Inhibe la síntesis de la pared celular bacteriana. Uso frecuente en UCI, endocarditis, meningitis, osteomielitis y bacteriemia por MRSA.',

    objetivoTerapeutico: 'Erradicar infección por gérmenes grampositivos resistentes · Niveles séricos terapéuticos (AUC/MIC 400–600) · Prevenir nefrotoxicidad y ototoxicidad',

    preparacion: {
      'Presentación':      '500 mg polvo · 1000 mg polvo (liofilizado para inyección)',
      'Reconstitución':    '500 mg + 10 mL ASI → 50 mg/mL · 1000 mg + 20 mL ASI → 50 mg/mL',
      'Dilución':          'Concentración final máx. <b>5 mg/mL</b> (preferido ≤ 2.5 mg/mL)',
      'Diluyente':         'SF 0.9% o SG 5% — volumen según dosis',
      'Ejemplo 500 mg':    '500 mg en 100 mL SF → 5 mg/mL',
      'Ejemplo 1000 mg':   '1000 mg en 200–250 mL SF → 4–5 mg/mL',
      'Ejemplo 1500 mg':   '1500 mg en 300–500 mL SF → 3–5 mg/mL',
      'Vía':               'IV intermitente — NUNCA en bolo directo · NUNCA IM',
      'Velocidad':         '<b>Mínimo 60 min por cada 500 mg</b> · Máximo 10–15 mg/min',
      'Tiempo infusión':   '500 mg → 60 min · 1g → 60–90 min · 1.5g → 90 min · 2g → 120 min',
      'Bomba':             'Bomba de infusión volumétrica — obligatoria',
      'Filtro':            'No requerido rutinariamente',
    },

    vigilancia: {
      antes: [
        'Verificar función renal basal: creatinina sérica, BUN, clearance de creatinina (CrCl).',
        'Revisar alergias previas a vancomicina o glucopéptidos.',
        'Confirmar dosis prescrita según peso y función renal.',
        'Verificar último nivel sérico si es dosis de continuación.',
        'Evaluar audición basal en tratamientos prolongados (> 7 días).',
        'Confirmar acceso venoso adecuado — preferir vena de buen calibre.',
        'Doble verificación: dosis, concentración, velocidad de infusión.',
      ],
      durante: [
        'Vigilar signos del síndrome del hombre rojo: rubor, eritema, prurito, hipotensión (inicio primeros 30 min).',
        'Si aparece síndrome del hombre rojo: detener o reducir velocidad de infusión.',
        'Monitorizar PA y FC durante la infusión — especialmente primeros 30 min.',
        'Observar sitio de infusión IV: flebitis, dolor, tumefacción.',
        'Vigilar signos de reacción anafiláctica: urticaria, broncoespasmo, hipotensión.',
        'En infusión continua: verificar permeabilidad de la línea cada 4–6 horas.',
      ],
      despues: [
        'Obtener nivel sérico (valle) 30–60 min antes de la siguiente dosis.',
        'Monitorizar creatinina y BUN cada 48–72 horas durante el tratamiento.',
        'Vigilar diuresis — oliguria puede indicar nefrotoxicidad.',
        'Evaluar signos de ototoxicidad: acúfenos, hipoacusia, vértigo.',
        'Documentar respuesta clínica: fiebre, leucocitos, marcadores inflamatorios.',
      ],
      suspender: [
        'Creatinina sérica aumenta ≥ 0.5 mg/dL o ≥ 50% sobre el valor basal (nefrotoxicidad).',
        'Aparición de tinnitus, pérdida auditiva o vértigo (ototoxicidad).',
        'Reacción anafiláctica o hipersensibilidad grave.',
        'Niveles séricos tóxicos no controlables con ajuste de dosis.',
        'Indicación médica de cambio de antibiótico.',
      ],
    },

    incompatibilidades: [
      'Piperacilina-tazobactam — precipitación documentada, NO mezclar ni infundir por la misma vía simultáneamente.',
      'Cefepime — incompatibilidad física.',
      'Heparina — precipitación (especialmente a concentraciones altas).',
      'Bicarbonato de sodio — degradación del fármaco en medio alcalino.',
      'Omeprazol, pantoprazol IV — incompatibilidad documentada.',
      'Albumina — incompatibilidad física.',
      'Furosemida IV — incompatibilidad, aumenta riesgo de ototoxicidad si se administran juntos.',
      'Lavar la vía con SF 0.9% antes y después si se comparte línea con otros fármacos.',
    ],

    alertasSeguridad: [
      'NUNCA administrar en bolo IV directo — riesgo de paro cardíaco, hipotensión severa y síndrome del hombre rojo.',
      'La nefrotoxicidad es dosis-dependiente y se potencia con aminoglucósidos, anfotericina B y diuréticos de asa.',
      'Ajustar dosis SIEMPRE en insuficiencia renal — el no ajustar es la causa más frecuente de toxicidad.',
      'Concentraciones > 5 mg/mL en la infusión aumentan el riesgo de flebitis y síndrome del hombre rojo.',
      'En pacientes obesos: calcular dosis por peso corporal total (PCT) para infecciones graves.',
    ],
  },

  /* ═══════════════════════════════════════════
     MÓDULOS DINÁMICOS
  ═══════════════════════════════════════════ */
  modulos: {

    sindrome_hombre_rojo: `
      <b>Síndrome del hombre rojo (Red Man Syndrome):</b><br/>
      <b>No es una reacción alérgica verdadera</b> — es una reacción anafilactoide por liberación de histamina.<br/><br/>
      <b>Manifestaciones:</b> Eritema, rubor y prurito en cara, cuello y tronco superior · Hipotensión · Angioedema (raro).<br/><br/>
      <b>Manejo:</b><br/>
      1. Detener o reducir la velocidad de infusión al 50%.<br/>
      2. Administrar <b>difenhidramina 25–50 mg IV</b> según prescripción.<br/>
      3. Si hay hipotensión: hidratación IV y soporte hemodinámico.<br/>
      4. Una vez resuelto, reiniciar a velocidad menor (mínimo 90–120 min por dosis).<br/>
      5. En pacientes con antecedente: premedicar con difenhidramina 30–60 min antes.
    `,

    renal: `
      <b>Monitorización renal obligatoria:</b><br/>
      • Creatinina sérica y BUN basal antes de iniciar.<br/>
      • Controlar cada 48–72h durante el tratamiento.<br/>
      • En pacientes de alto riesgo (ancianos, diabetes, TFG reducida): cada 24–48h.<br/>
      • Clearance de creatinina para ajuste de dosis (fórmula Cockcroft-Gault).<br/><br/>
      <b>Ajuste según CrCl:</b><br/>
      • CrCl > 90 mL/min: 15–20 mg/kg c/8–12h<br/>
      • CrCl 50–90 mL/min: 15–20 mg/kg c/12h<br/>
      • CrCl 10–50 mL/min: 15–20 mg/kg c/24–48h<br/>
      • CrCl < 10 mL/min / hemodiálisis: dosis según niveles séricos<br/><br/>
      <b>Combinaciones nefrotóxicas a evitar:</b> aminoglucósidos, anfotericina B, cisplatino, contraste IV.
    `,
  },

  /* ═══════════════════════════════════════════
     NIVEL 2 — VER MÁS
  ═══════════════════════════════════════════ */
  nivel2: {

    cuidadosEnfermeria: [
      'Etiquetar siempre: nombre, dosis, concentración, fecha/hora preparación, velocidad de infusión.',
      'Usar vena de buen calibre — preferir acceso central en tratamientos prolongados para prevenir flebitis.',
      'Rotar sitios de punción periférica cada 72 horas o antes si hay signos de flebitis.',
      'Administrar a temperatura ambiente — sacar la bolsa de refrigeración 30 min antes.',
      'Registrar nivel sérico (valle) exactamente 30 min antes de la siguiente dosis — documentar hora exacta de toma.',
      'Comunicar al médico cualquier nivel fuera de rango terapéutico antes de administrar la siguiente dosis.',
      'En terapia prolongada: vigilar cambios en audición, tintineo o sensación de oídos tapados.',
      'Mantener hidratación adecuada del paciente durante el tratamiento para proteger función renal.',
    ],

    efectosAdversos: [
      '🔴 Nefrotoxicidad — elevación de creatinina, oliguria, IRA',
      '🔴 Ototoxicidad — tinnitus, hipoacusia, vértigo (irreversible si no se detecta a tiempo)',
      '🔴 Síndrome del hombre rojo — eritema, prurito, hipotensión (por infusión rápida)',
      '🟠 Neutropenia / trombocitopenia (tratamientos prolongados)',
      '🟠 Flebitis en sitio de infusión periférica',
      '🟠 Hipotensión durante la infusión',
      '🟡 Fiebre relacionada con el fármaco',
      '🟡 Náuseas, escalofríos',
      '🟡 Exantema cutáneo',
      '🟡 Elevación de enzimas hepáticas (raro)',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a la vancomicina o glucopéptidos.',
      'Hipoacusia severa preexistente (precaución extrema — no contraindicación absoluta si no hay alternativa).',
      'Insuficiencia renal severa sin capacidad de monitorización de niveles (precaución, ajustar dosis).',
    ],

    fotosensibilidad: 'No se describe fotosensibilidad clínicamente relevante. No requiere protección especial de la luz para la solución reconstituida durante la administración normal.',

    estabilidad: {
      'Polvo sin reconstituir':     'Conservar a temperatura ambiente (15–25°C) · Proteger de la luz',
      'Reconstituido (50 mg/mL)':   '96 horas en refrigeración (2–8°C) · 24 horas a temperatura ambiente',
      'Diluido en SF/SG5% (5mg/mL)':'14 días en refrigeración · 7 días a temperatura ambiente',
      'Infusión continua':           '24 horas a temperatura ambiente en SF 0.9%',
      'Aspecto':                     'Solución clara, incolora a ligeramente amarilla — desechar si hay turbidez o partículas',
    },

    presentaciones: [
      'Vancomicina HCl 500 mg polvo liofilizado — vial 10 mL',
      'Vancomicina HCl 1000 mg (1 g) polvo liofilizado — vial 20 mL',
      'Vancomicina HCl 5 mg/mL solución lista para infundir — bolsa 100 mL (según disponibilidad)',
      'Vancomicina oral 125 mg cápsulas — solo para colitis por C. difficile (no absorbe sistémicamente)',
    ],
  },

  /* ═══════════════════════════════════════════
     NIVEL 3 — INFORMACIÓN AVANZADA
  ═══════════════════════════════════════════ */
  nivel3: {

    dosis: [
      { indicacion: 'Infecciones graves (MRSA)',        dosis: '25–30 mg/kg/día dividido c/8–12h', via: 'IV' },
      { indicacion: 'Bacteriemia / endocarditis',       dosis: '30 mg/kg/día c/8–12h',             via: 'IV' },
      { indicacion: 'Meningitis bacteriana',            dosis: '30–45 mg/kg/día c/8–12h',           via: 'IV' },
      { indicacion: 'Dosis individual habitual adulto', dosis: '15–20 mg/kg c/8–12h',               via: 'IV' },
      { indicacion: 'Dosis máxima por dosis',           dosis: '3000 mg (3g)',                       via: 'IV' },
      { indicacion: 'C. difficile (oral)',               dosis: '125 mg c/6h × 10 días',             via: 'VO' },
    ],

    embarazo: 'Categoría C (FDA). Cruza la barrera placentaria. Puede acumularse en tejido fetal. Usar solo si el beneficio materno supera el riesgo. Monitorizar niveles séricos con mayor frecuencia en el embarazo (volumen de distribución alterado). Pasa a leche materna — evaluar riesgo/beneficio en lactancia. Vigilar ototoxicidad neonatal si se usó en el tercer trimestre.',

    pediatria: 'Neonatos (< 1 mes): 10–15 mg/kg c/12–24h según edad gestacional y postnatal. Lactantes y niños: 40–60 mg/kg/día dividido c/6h. Adolescentes: igual que adulto. Monitorizar niveles séricos en todos los grupos pediátricos. Ajustar por función renal. En meningitis pediátrica: 60 mg/kg/día c/6h.',

    adultoMayor: 'Mayor riesgo de nefrotoxicidad y ototoxicidad por reducción fisiológica del clearance renal. Calcular CrCl con fórmula Cockcroft-Gault. Intervalos de dosificación más prolongados. Monitorización de niveles séricos más frecuente (c/24–48h). Hidratación adecuada es clave para proteger la función renal.',

    insufRenal: 'Ajuste obligatorio según CrCl. En hemodiálisis intermitente: dosis suplementaria post-diálisis según niveles (vancomicina es parcialmente dializable). En TRRC (terapia de reemplazo renal continuo): 15–20 mg/kg cada 24–48h con monitorización de niveles. Consultar protocolo institucional.',

    insufHepatica: 'No se requiere ajuste de dosis en insuficiencia hepática aislada, ya que la eliminación es principalmente renal. Sin embargo, en pacientes con síndrome hepatorrenal, ajustar según función renal.',
  },

  /* ═══════════════════════════════════════════
     NIVEL 4 — EVIDENCIA CIENTÍFICA
  ═══════════════════════════════════════════ */
  nivel4: {
    referencias: [
      'Rybak MJ, et al. Therapeutic Monitoring of Vancomycin for Serious Methicillin-Resistant Staphylococcus aureus Infections: A Revised Consensus Guideline and Review by the ASHP, IDSA, and SIDP. Am J Health Syst Pharm. 2020;77(11):835-864.',
      'DailyMed. Vancomycin Hydrochloride Injection. U.S. National Library of Medicine. Consultado 2024. https://dailymed.nlm.nih.gov',
      'Liu C, et al. Clinical Practice Guidelines by the Infectious Diseases Society of America for the Treatment of Methicillin-Resistant Staphylococcus aureus Infections in Adults and Children. Clin Infect Dis. 2011;52(3):e18-e55.',
      'Lodise TP, et al. Vancomycin Exposure in Patients with Suspected or Documented Gram-Positive Infections. Antimicrob Agents Chemother. 2014;58(8):4465-4473.',
      'Neely MN, et al. Are Vancomycin Trough Concentrations Adequate for Optimal Dosing? Antimicrob Agents Chemother. 2014;58(1):309-316.',
      'ASHP. ASHP Technical Assistance Bulletin on Handling of Cytotoxic and Hazardous Drugs. Am J Health Syst Pharm. 2018.',
      'OPS/OMS. Resistencia a los antimicrobianos — Guías para el uso racional de antibióticos en hospitales. 2022.',
    ],
  },

});
