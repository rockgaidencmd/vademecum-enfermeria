/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/amikacina.js
   Fuentes: CIMA AEMPS (Amikacina Normon, Braun),
   FDA DailyMed, IDSA Guidelines, Sanford Guide 2024,
   ASHP Drug Information
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'amikacina',
  nombre:         'Amikacina',
  nombreGenerico: 'Amikacin Sulfate',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'aminoglucósido', 'gramnegativo', 'Pseudomonas', 'UCI', 'nefrotóxico', 'ototóxico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Aminoglucósido con riesgo significativo de nefrotoxicidad y ototoxicidad irreversible. Requiere monitorización de niveles séricos (pico y valle) y función renal. Ajuste de dosis obligatorio en insuficiencia renal.',

  nivel1: {

    puntosClave: [
      'Administrar en infusión IV de <b>30-60 minutos</b> — nunca bolo directo (riesgo bloqueo neuromuscular).',
      '<b>MONITORIZACIÓN DE NIVELES SÉRICOS obligatoria</b>: valle (Cmin) < 5 mcg/mL · pico (Cmax) 20-30 mcg/mL (1h post-infusión).',
      'Nefrotóxico y ototóxico — monitorizar creatinina diaria y audición en tratamientos > 7 días.',
      '<b>NUNCA mezclar con betalactámicos en la misma jeringa o bolsa</b> — inactivación mutua.',
      'Una sola dosis diaria (15-20 mg/kg/día) es el estándar actual — más eficaz y menos tóxica que dosis múltiples.',
    ],

    resumenRapido: 'Aminoglucósido semisintético de amplio espectro. Bactericida por inhibición irreversible de síntesis proteica (subunidad 30S ribosomal). Espectro: excelente actividad frente a gramnegativos aerobios incluyendo Pseudomonas aeruginosa, Enterobacterales, Acinetobacter, Klebsiella. Activo frente a Mycobacterium tuberculosis (segunda línea). Resistente a la mayoría de enzimas inactivadoras de aminoglucósidos. Indicado en infecciones graves por gramnegativos resistentes: sepsis, neumonía nosocomial, infecciones urinarias complicadas, endocarditis (combinado), infecciones por micobacterias.',

    objetivoTerapeutico: 'Erradicar infección por gramnegativos resistentes · Pico/MIC > 8-10 (eficacia) · Valle < 5 mcg/mL (seguridad renal) · AUC/MIC objetivo en dosificación extendida',

    preparacion: {
      'Presentación':          '<b>Amikacina 250 mg/mL — vial 2 mL (500 mg)</b> · vial 4 mL (1 g)',
      'Presentación alt.':     'Amikacina 500 mg/2 mL · 250 mg/mL vial 1 mL (250 mg)',
      'Diluyente':             '<b>SF 0.9% · SG 5%</b> (ambos compatibles)',
      'Dilución estándar':     '<b>500 mg en 100 mL SF → 5 mg/mL</b>',
      'Dilución dosis alta':   '1 g en 200 mL SF → 5 mg/mL',
      'Vía':                   'IV infusión (preferida) · IM profunda (alternativa)',
      '⏱️ TIEMPO INFUSIÓN':    '<b>30-60 minutos</b> (NUNCA bolo directo)',
      '⏱️ Dosis diaria única':  '<b>15-20 mg/kg IV c/24h</b> (estándar actual EDD)',
      '⏱️ Dosis múltiples':    '7.5 mg/kg IV c/12h (alternativa en casos específicos)',
      '⏱️ NIVELES SÉRICOS':    'Valle: extraer ANTES de la siguiente dosis · Pico: 1h post-infusión',
      'Bomba':                 'Bomba de infusión recomendada',
      '🧊 ESTABILIDAD':        '<b>24 horas a TA · 48 horas refrigerada (2-8°C)</b> en SF/SG 5%',
      'Aspecto':               'Solución incolora a ligeramente amarillenta — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Revisar función renal basal: creatinina, BUN, TFG — ajuste de dosis obligatorio si TFG < 60 mL/min.',
        'Verificar hidratación adecuada — la deshidratación potencia la nefrotoxicidad.',
        'Comprobar uso concomitante de otros nefrotóxicos: vancomicina, anfotericina, AINEs, contraste IV.',
        'Antecedente de sordera o hipoacusia — la ototoxicidad puede ser irreversible.',
        'Confirmar cultivos y antibiograma — amikacina debe tener CMI baja para el patógeno.',
        'Peso real vs peso ideal — usar peso ajustado en pacientes obesos.',
        'Doble verificación de dosis con otro profesional (medicamento de alto riesgo).',
      ],
      durante: [
        'Mantener velocidad correcta — infusión en 30-60 min.',
        'Vigilar sitio IV — flebitis posible.',
        'Observar signos de bloqueo neuromuscular (raro): debilidad muscular, dificultad respiratoria.',
        'Vigilar reacción alérgica: rash, urticaria (raras con amikacina).',
        'Mantener hidratación correcta durante tratamiento.',
      ],
      despues: [
        '<b>Monitorizar creatinina DIARIA</b> durante tratamiento — nefrotoxicidad suele aparecer 5-7 días.',
        '<b>Niveles séricos: valle y pico según protocolo</b> — ajustar dosis según resultado.',
        'Vigilar diuresis — oliguria = señal de nefrotoxicidad.',
        'En tratamiento > 7 días: evaluación audiológica (tinitus, hipoacusia, vértigo).',
        'Evaluar respuesta clínica a 48-72h: fiebre, leucocitos, PCR.',
        'Revisar cultivos — de-escalar si es posible.',
        'Documentar: dosis, hora, niveles séricos, función renal, respuesta clínica.',
      ],
      suspender: [
        'Elevación de creatinina > 50% sobre basal (nefrotoxicidad).',
        'Niveles de valle persistentemente > 5-10 mcg/mL.',
        'Signos de ototoxicidad: tinitus, hipoacusia, vértigo.',
        'Oliguria o anuria.',
        'Bloqueo neuromuscular.',
        'Reacción alérgica grave.',
        'Resultado de cultivos que permita de-escalada.',
        'Completado el curso prescrito.',
      ],
    },

    incompatibilidades: [
      '<b>BETALACTÁMICOS en misma jeringa/bolsa — inactivación mutua</b> (penicilinas, cefalosporinas, carbapenems).',
      'Vancomicina — potenciación de nefrotoxicidad (usar vías separadas y vigilar función renal).',
      'Heparina — incompatibilidad física documentada.',
      'Anfotericina B — precipitación + potenciación nefrotoxicidad.',
      'Furosemida — potenciación de ototoxicidad (usar con vigilancia).',
      'Lavar línea con SF antes y después de cualquier otro medicamento.',
    ],

    alertasSeguridad: [
      '🔴 OTOTOXICIDAD IRREVERSIBLE — daño coclear (hipoacusia) y vestibular (vértigo). Puede aparecer semanas después de suspender.',
      '🔴 NEFROTOXICIDAD — necrosis tubular aguda. Riesgo aumentado con deshidratación y otros nefrotóxicos.',
      '🔴 BLOQUEO NEUROMUSCULAR — raro pero grave. Riesgo con anestésicos, bloqueantes neuromusculares.',
      '🟠 <b>Niveles séricos OBLIGATORIOS</b> — sin monitorización no se puede usar con seguridad.',
      '🟠 Ajuste de dosis INMEDIATO si creatinina aumenta > 50%.',
      '🟡 Inactivación mutua con betalactámicos — no mezclar nunca.',
      '🟡 Mayor toxicidad en ancianos, pacientes con IRC previa, deshidratados.',
    ],
  },

  modulos: {

    niveles: `
      <b>Monitorización de niveles séricos de Amikacina:</b><br/>
      <b>DOSIFICACIÓN DIARIA EXTENDIDA (EDD) — estándar actual:</b><br/>
      • <b>Valle (Cmin):</b> Extraer 30 min ANTES de la siguiente dosis.<br/>
      • Objetivo: <b>< 5 mcg/mL</b> (idealmente < 2 mcg/mL).<br/>
      • Si valle > 5: ampliar intervalo o reducir dosis.<br/><br/>
      • <b>Pico (Cmax):</b> Extraer 1 hora post-fin de infusión.<br/>
      • Objetivo: <b>20-30 mcg/mL</b> (eficacia: Cmax/CMI > 8-10).<br/>
      • Si pico < 20: aumentar dosis.<br/><br/>
      <b>CUÁNDO MONITORIZAR:</b><br/>
      • 1ª determinación: a las 24-48h de inicio.<br/>
      • Luego: c/3-5 días si estable (c/24-48h si función renal alterada).<br/>
      • Siempre que cambie la función renal o el estado clínico.<br/><br/>
      <b>AJUSTE SEGÚN FUNCIÓN RENAL:</b><br/>
      • TFG > 60: dosis estándar c/24h.<br/>
      • TFG 40-60: c/36h.<br/>
      • TFG 20-40: c/48h.<br/>
      • TFG < 20: c/72h o según niveles.<br/>
      • Hemodiálisis: dosis post-diálisis, según niveles.
    `,

    nefrotoxicidad: `
      <b>Prevención y manejo de nefrotoxicidad por amikacina:</b><br/>
      <b>FACTORES DE RIESGO:</b><br/>
      • Deshidratación o hipoperfusión renal.<br/>
      • Uso concomitante de vancomicina, AINEs, contraste IV, anfotericina.<br/>
      • TFG basal < 60 mL/min.<br/>
      • Tratamiento prolongado (> 7 días).<br/>
      • Edad avanzada.<br/><br/>
      <b>PREVENCIÓN:</b><br/>
      • Asegurar hidratación correcta (diuresis > 1 mL/kg/h).<br/>
      • Dosis única diaria (menos nefrotóxica que dosis múltiples).<br/>
      • Monitorizar creatinina diaria.<br/>
      • Evitar otros nefrotóxicos simultáneos cuando sea posible.<br/>
      • Reducir duración al mínimo necesario (5-7 días suele ser suficiente).<br/><br/>
      <b>SIGNOS DE ALARMA:</b><br/>
      • Creatinina ↑ > 0.3 mg/dL sobre basal.<br/>
      • Diuresis ↓ < 0.5 mL/kg/h.<br/>
      • Valle sérico persistentemente elevado.<br/>
      Si cualquiera de estos: reducir dosis, ampliar intervalo o suspender.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar peso actual del paciente — calcular dosis según mg/kg (peso ajustado en obesos).',
      'Confirmar función renal basal antes de primera dosis.',
      'Diluir en 100-200 mL SF y administrar en 30-60 min — NUNCA bolo.',
      'Etiquetar bolsa: Amikacina [dosis], concentración, hora preparación, hora límite.',
      '<b>NUNCA mezclar con betalactámicos</b> — lavar línea con SF entre administraciones.',
      'Programar extracción de niveles séricos (valle y pico) según protocolo.',
      'Monitorizar creatinina diaria — anotar en gráfica junto con la dosis del día.',
      'Controlar diuresis horaria — objetivo > 0.5-1 mL/kg/h durante tratamiento.',
      'Vigilar hidratación — reponer fluidos si balance negativo.',
      'Preguntar al paciente por tinitus, sensación de oídos tapados, mareos (ototoxicidad).',
      'En tratamiento > 7 días: solicitar evaluación audiológica.',
      'Documentar: dosis, hora, vía, niveles séricos, creatinina, diuresis, respuesta clínica.',
    ],

    efectosAdversos: [
      '🔴 Ototoxicidad irreversible: hipoacusia neurosensorial, tinitus, vértigo',
      '🔴 Nefrotoxicidad: necrosis tubular aguda, IRA',
      '🔴 Bloqueo neuromuscular (raro, con anestesia o bloqueantes)',
      '🟠 Nefrotoxicidad moderada: elevación creatinina, proteinuria, cilindros granulosos',
      '🟠 Ototoxicidad vestibular: vértigo, ataxia, nistagmo',
      '🟡 Flebitis en sitio IV',
      '🟡 Rash, urticaria (raros)',
      '🟡 Náuseas, vómitos (poco frecuentes)',
      '🟡 Elevación transitoria de transaminasas',
    ],

    contraindicaciones: [
      'Hipersensibilidad a amikacina u otros aminoglucósidos.',
      'Antecedente de ototoxicidad o nefrotoxicidad grave por aminoglucósidos.',
      'Miastenia gravis (potenciación del bloqueo neuromuscular).',
      'Precaución severa en: insuficiencia renal (ajuste obligatorio), deshidratación, uso concomitante de otros nefrotóxicos.',
    ],

    fotosensibilidad: 'No relevante. Conservar viales a temperatura ambiente protegidos de luz directa intensa.',

    estabilidad: {
      'Vial sin abrir':       'Temperatura ambiente (15-25°C) hasta vencimiento (3 años)',
      'Diluida en SF':        '<b>24 horas a TA (15-25°C) · 48 horas refrigerada (2-8°C)</b>',
      'Diluida en SG 5%':     '24 horas a TA · 48 horas refrigerada',
      'Aspecto':              'Incolora a ligeramente amarillenta — desechar si turbidez o precipitado',
      'Temperatura':          'NO congelar · 15-25°C',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar dentro de las 24 h si se conserva refrigerada.',
      dosisRestante:    'Conservar hasta 24 h en refrigerador (2–8 °C).',
      infusionPreparada:'24 h a temperatura ambiente / 48 h refrigerada (2–8 °C) en SF 0.9% o SG 5%.',
      notas:            'No mezclar con betalactámicos (penicilinas, cefalosporinas) en la misma solución — inactivación mutua. Lavar línea IV antes y después.',
    },

    presentaciones: [
      'Amikacina 250 mg/mL — vial 2 mL (500 mg)',
      'Amikacina 250 mg/mL — vial 4 mL (1 g)',
      'Amikacina 500 mg/2 mL — vial (250 mg/mL)',
      'Amikacina Normon® · Amikacina B. Braun® · Amikacina Normon® (genéricos)',
      'Amikin® (marca original — Bristol-Myers Squibb)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Infección grave (dosis única diaria)',   dosis: '<b>15-20 mg/kg IV c/24h</b>',            via: 'IV' },
      { indicacion: 'Infección grave (dosis múltiples)',      dosis: '7.5 mg/kg IV c/12h',                     via: 'IV' },
      { indicacion: 'Sepsis por gramnegativo resistente',     dosis: '20-25 mg/kg IV c/24h (dosis alta)',      via: 'IV' },
      { indicacion: 'TBC (segunda línea)',                    dosis: '15 mg/kg IM/IV c/24h × 2-3 meses',       via: 'IV/IM' },
      { indicacion: 'Endocarditis (combinado)',               dosis: '7.5 mg/kg IV c/12h (con betalactámico)', via: 'IV' },
      { indicacion: 'ITU complicada (dosis única)',           dosis: '15 mg/kg IV dosis única',                 via: 'IV' },
      { indicacion: 'Dosis máxima diaria',                    dosis: '1.5 g/día (obesos: según peso ajustado)', via: 'IV' },
    ],

    embarazo: '<b>Categoría D (FDA)</b> — atraviesa placenta. Riesgo de ototoxicidad fetal (daño auditivo congénito documentado). <b>Evitar durante embarazo salvo indicación vital sin alternativa.</b> En uso: monitorización estricta de niveles y audición neonatal post-parto. Contraindicado en lactancia (excreción en leche).',

    pediatria: 'Neonatos prematuros: 7.5 mg/kg c/18-24h. Neonatos a término: 10 mg/kg c/12-24h. Niños: 15-22.5 mg/kg/día dividido c/8h o dosis única diaria. Monitorización de niveles y función renal obligatoria. Mayor riesgo de ototoxicidad en prematuros.',

    adultoMayor: 'Mayor riesgo de nefrotoxicidad y ototoxicidad. Ajuste por TFG. Dosis única diaria preferida. Monitorización de niveles más frecuente (c/2-3 días). Vigilar diuresis y creatinina diaria.',

    insufRenal: '<b>AJUSTE OBLIGATORIO:</b> TFG > 60: 15-20 mg/kg c/24h · TFG 40-60: 15 mg/kg c/36h · TFG 20-40: 15 mg/kg c/48h · TFG < 20: 15 mg/kg c/72h o según niveles. Hemodiálisis: 5-7.5 mg/kg post-diálisis (niveles dirigen ajuste). SIEMPRE guiado por niveles séricos.',

    insufHepatica: 'Sin ajuste de dosis necesario (eliminación principalmente renal). En cirrosis con síndrome hepatorrenal: ajuste renal estricto.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Amikacina Normon 250 mg/mL. Agencia Española de Medicamentos.',
      'FDA DailyMed. Amikacin Sulfate Injection. U.S. National Library of Medicine.',
      'IDSA Guidelines. Gram-Negative Bacterial Infections. Clin Infect Dis. 2022.',
      'Sanford Guide to Antimicrobial Therapy 2024.',
      'Nicolau DP, et al. Experience with a once-daily aminoglycoside program. Antimicrob Agents Chemother. 1995.',
      'ASHP Drug Information. Amikacin. American Society of Health-System Pharmacists. 2024.',
      'Pediamécum AEP. Amikacina. Asociación Española de Pediatría.',
      'Micromedex Solutions. Amikacin. Accessed 2024.',
    ],
  },

});
