/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/daptomicina.js
   Fuentes: CIMA AEMPS (Daptomicina Accord, Normon, Cipla,
   Noridem), FDA DailyMed, IDSA MRSA/Bacteriemia Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'daptomicina',
  nombre:         'Daptomicina',
  nombreGenerico: 'Daptomycin',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'lipopéptido', 'MRSA', 'VRE', 'bacteriemia', 'endocarditis', 'piel partes blandas'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antibiótico lipopéptido. INACTIVADA por el surfactante pulmonar - NUNCA usar en neumonía. Riesgo de miopatía/rabdomiolisis - requiere monitorización de CPK. Riesgo de neumonía eosinofílica (rara pero grave).',

  nivel1: {

    puntosClave: [
      'Antibiótico LIPOPÉPTIDO CÍCLICO (primero de su clase) — se inserta en la membrana celular bacteriana dependiente de calcio, causando despolarización y muerte bacteriana rápida (bactericida, a diferencia de linezolid).',
      '<b>INACTIVADA POR EL SURFACTANTE PULMONAR — NUNCA USAR EN NEUMONÍA</b> (ni siquiera por MRSA) — pierde eficacia completamente en tejido pulmonar.',
      'Espectro: grampositivos multirresistentes — <b>MRSA, VRE, S. aureus/epidermidis</b> — indicada en bacteriemia, endocarditis derecha, piel/partes blandas complicadas.',
      '<b>RIESGO DE MIOPATÍA/RABDOMIOLISIS</b> — requiere <b>monitorización semanal de CPK</b> durante todo el tratamiento.',
      'Dosis ÚNICA DIARIA (no fraccionada) — administrar en perfusión de 30 minutos o inyección IV en 2 minutos.',
    ],

    resumenRapido: 'Antibiótico lipopéptido cíclico derivado de Streptomyces roseosporus. Mecanismo único: se inserta en la membrana citoplasmática bacteriana de forma dependiente de calcio, formando canales que causan despolarización rápida de la membrana e inhibición de síntesis de proteínas, ADN y ARN - acción BACTERICIDA rápida y concentración-dependiente. Espectro limitado a grampositivos: S. aureus (incluyendo MRSA), S. epidermidis, Enterococcus faecalis/faecium (incluyendo VRE), estreptococos. NO cubre gramnegativos. Vida media: 8-9h → dosis única diaria. Indicado en: bacteriemia por S. aureus (incluyendo endocarditis derecha), infecciones de piel y partes blandas complicadas por grampositivos resistentes, infecciones por VRE (alternativa a linezolid). CONTRAINDICADA en neumonía (inactivación por surfactante).',

    objetivoTerapeutico: 'Erradicar bacteriemia por MRSA/grampositivos resistentes · Tratamiento de endocarditis derecha · Alternativa en VRE · Infecciones de piel/partes blandas complicadas',

    preparacion: {
      'Presentación':             '<b>Daptomicina 350 mg y 500 mg polvo para solución inyectable/perfusión</b>',
      'Diluyente reconstitución':  'SF 0.9% (NO usar soluciones con glucosa/dextrosa - inactivan el fármaco)',
      'Volumen reconstitución':    '350 mg en 7 mL SF · 500 mg en 10 mL SF (concentración final ~50 mg/mL)',
      '⚠️ CONTRAINDICADO diluir con dextrosa':'<b>NUNCA usar SG5% ni soluciones con glucosa</b> - inactivación química del fármaco',
      'Dilución para perfusión':  'Reconstituido + 50 mL SF (si perfusión 30 min)',
      'Vía':                      'IV - perfusión de 30 minutos O inyección directa en 2 minutos',
      '⏱️ INYECCIÓN IV DIRECTA':  '<b>2 minutos</b>',
      '⏱️ PERFUSIÓN IV':          '<b>30 minutos</b>',
      '⏱️ DOSIS bacteriemia/piel-partes blandas':'<b>4-6 mg/kg IV cada 24 horas (dosis única diaria)</b>',
      '⏱️ DOSIS endocarditis derecha':'<b>6 mg/kg IV cada 24 horas</b>',
      '⏱️ Duración máxima estudiada':'14 días en ensayos clínicos (uso más prolongado bajo vigilancia CPK estrecha)',
      'Bomba':                    'Recomendada para perfusión controlada',
      '🧊 ESTABILIDAD reconstituida':'<b>12 horas a 25°C · 48 horas refrigerada (2-8°C)</b>',
      '🧊 ESTABILIDAD diluida en bolsa':'<b>12 horas a 25°C · 24 horas refrigerada</b>',
      'Aspecto':                  'Polvo/solución de color amarillo pálido a marrón claro (color característico, normal)',
    },

    vigilancia: {
      antes: [
        '<b>CONFIRMAR que NO es neumonía</b> - daptomicina inactivada por surfactante pulmonar, ineficaz en esta indicación.',
        '<b>CPK (creatina fosfoquinasa) basal OBLIGATORIA</b>.',
        'Función renal basal - ajuste de intervalo en IRC.',
        'Revisar medicación concomitante: estatinas (mayor riesgo de miopatía si se combinan).',
        'Confirmar diagnóstico: bacteriemia, endocarditis derecha, piel/partes blandas por grampositivos resistentes.',
        'Doble verificación: dosis por peso, vía, dilución (NO con dextrosa).',
      ],
      durante: [
        'Inyección IV en 2 min O perfusión en 30 min.',
        'Observar reacción alérgica primeros 15-30 min.',
        'Vigilar sitio IV.',
        'Vigilar signos de reacción anafilactoide.',
      ],
      despues: [
        '<b>MONITORIZAR CPK SEMANALMENTE</b> durante todo el tratamiento - más frecuente si síntomas musculares o uso concomitante de estatinas.',
        'Si CPK > 5× límite superior normal CON síntomas musculares (mialgia, debilidad): <b>SUSPENDER daptomicina</b>.',
        'Si CPK > 10× límite superior SIN síntomas: considerar suspensión.',
        'Considerar suspender estatinas temporalmente durante el tratamiento con daptomicina si es posible.',
        'Vigilar signos de neumonía eosinofílica (rara pero grave): fiebre, disnea, infiltrados pulmonares nuevos, eosinofilia - especialmente si aparecen DURANTE el tratamiento.',
        'Evaluar respuesta clínica: hemocultivos de control en bacteriemia (documentar aclaramiento).',
        'Documentar: dosis, hora, CPK seriada, función renal, respuesta clínica, eventos.',
      ],
      suspender: [
        'CPK elevada significativamente con síntomas musculares.',
        'Signos de neumonía eosinofílica.',
        'Reacción alérgica/anafilaxia.',
        'Diarrea grave con sospecha de C. difficile.',
        'Completada duración del tratamiento o cambio a terapia dirigida por antibiograma.',
      ],
    },

    incompatibilidades: [
      '<b>SOLUCIONES CON DEXTROSA/GLUCOSA (SG5%)</b> - INCOMPATIBLE, inactiva químicamente el fármaco - usar SOLO SF 0.9% para reconstituir/diluir.',
      'No debe mezclarse con otros medicamentos en la misma jeringa/línea salvo indicación expresa de compatibilidad.',
      'Lavar línea con SF antes y después de otros medicamentos si se comparte vía.',
    ],

    alertasSeguridad: [
      '🔴 <b>INACTIVADA POR SURFACTANTE PULMONAR — NUNCA USAR EN NEUMONÍA</b>, incluso por MRSA confirmado.',
      '🔴 <b>MIOPATÍA/RABDOMIOLISIS</b> - CPK semanal obligatoria durante todo el tratamiento.',
      '🔴 <b>NUNCA diluir/reconstituir con soluciones que contengan dextrosa/glucosa</b> - inactivación química.',
      '🟠 Neumonía eosinofílica (rara pero grave) - vigilar fiebre, disnea, infiltrados nuevos durante tratamiento.',
      '🟠 Mayor riesgo de miopatía si se combina con ESTATINAS - considerar suspender temporalmente.',
      '🟠 Ajuste de intervalo obligatorio en insuficiencia renal.',
      '🟡 Puede causar elevación transitoria de INR en pacientes con warfarina - vigilar coagulación.',
      '🟡 Interferencia con pruebas de tiempo de protrombina/INR si se toma la muestra poco después de la infusión - espaciar la toma de muestra.',
      '🟡 Color amarillo pálido a marrón claro de la solución es NORMAL (característico del fármaco).',
    ],
  },

  modulos: {

    inactivacionSurfactante: `
      <b>Daptomicina - Inactivación por Surfactante Pulmonar:</b><br/>
      <b>DATO CRÍTICO DE SEGURIDAD:</b><br/>
      • El surfactante pulmonar (compuesto por fosfolípidos) SE UNE e INACTIVA a la daptomicina en el tejido pulmonar.<br/>
      • Esto significa que, aunque el patógeno sea sensible in vitro, <b>daptomicina NO FUNCIONA clínicamente en neumonía</b>, incluyendo neumonía por MRSA.<br/><br/>
      <b>IMPLICACIÓN CLÍNICA:</b><br/>
      • <b>CONTRAINDICACIÓN DE USO en cualquier tipo de neumonía</b> (nosocomial, comunitaria, asociada a ventilador), independientemente del patógeno causal.<br/>
      • Este es uno de los errores de prescripción más importantes a evitar - un antibiótico "activo" en el antibiograma que será CLÍNICAMENTE INEFECTIVO en este contexto específico.<br/><br/>
      <b>ALTERNATIVAS PARA NEUMONÍA POR MRSA:</b><br/>
      • <b>Vancomicina</b> (con monitorización de niveles).<br/>
      • <b>Linezolid</b> (buena penetración pulmonar, posible ventaja adicional en este contexto).<br/><br/>
      <b>DÓNDE SÍ ES EFECTIVA (buena penetración/actividad):</b><br/>
      • Sangre (bacteriemia).<br/>
      • Endocardio (endocarditis derecha, aunque NO indicada en endocarditis izquierda por menor eficacia documentada).<br/>
      • Piel y tejidos blandos.<br/>
      • Hueso (osteomielitis - uso extendido, aunque no siempre indicación formal).<br/><br/>
      <b>EDUCACIÓN AL EQUIPO:</b><br/>
      • Verificar SIEMPRE el foco de infección antes de seleccionar daptomicina.<br/>
      • Si hay coexistencia de neumonía y bacteriemia por el mismo patógeno: considerar linezolid o vancomicina en su lugar, o combinación de antibióticos si es necesario.
    `,

    miopatia: `
      <b>Miopatía y Rabdomiolisis por Daptomicina:</b><br/>
      <b>MECANISMO:</b><br/>
      • Daptomicina puede acumularse en tejido muscular esquelético y causar toxicidad miocelular directa.<br/>
      • Efecto dosis-dependiente, más frecuente con dosis altas o tratamientos prolongados.<br/><br/>
      <b>FACTORES DE RIESGO:</b><br/>
      • Uso concomitante de ESTATINAS (mayor riesgo de miopatía aditiva).<br/>
      • Insuficiencia renal (acumulación del fármaco).<br/>
      • Dosis altas (> 6 mg/kg) o tratamientos prolongados (> 14 días).<br/>
      • Obesidad (dosificación por peso real puede requerir ajuste).<br/><br/>
      <b>MONITORIZACIÓN OBLIGATORIA:</b><br/>
      • <b>CPK basal ANTES de iniciar el tratamiento</b>.<br/>
      • <b>CPK SEMANAL durante todo el tratamiento</b>.<br/>
      • Más frecuente (cada 2-3 días) si: síntomas musculares, uso de estatinas concomitante, insuficiencia renal, dosis altas.<br/><br/>
      <b>CRITERIOS DE ACCIÓN:</b><br/>
      • <b>CPK > 5× límite superior normal (LSN) CON síntomas musculares</b> (mialgia, debilidad, dolor): <b>SUSPENDER daptomicina</b>.<br/>
      • <b>CPK > 10× LSN SIN síntomas</b>: considerar suspensión, vigilancia estrecha.<br/>
      • Síntomas musculares significativos independientemente del valor de CPK: evaluar suspensión.<br/><br/>
      <b>MANEJO PRÁCTICO:</b><br/>
      • Si es posible, <b>suspender temporalmente las estatinas</b> durante el tratamiento con daptomicina (coordinar con médico).<br/>
      • Hidratación adecuada.<br/>
      • Si rabdomiolisis franca: manejo estándar (fluidos IV agresivos, vigilancia de función renal, alcalinización urinaria si indicado).<br/>
      • Generalmente REVERSIBLE al suspender el fármaco.
    `,

    bacteriemiaEndocarditis: `
      <b>Daptomicina en Bacteriemia y Endocarditis:</b><br/>
      <b>INDICACIÓN APROBADA:</b><br/>
      • Bacteriemia por Staphylococcus aureus, incluyendo la asociada a endocarditis derecha.<br/>
      • Alternativa importante cuando vancomicina falla, hay intolerancia, o se documenta resistencia/tolerancia.<br/><br/>
      <b>DOSIS EN ESTE CONTEXTO:</b><br/>
      • <b>6 mg/kg IV cada 24 horas</b> (dosis más alta que en piel/partes blandas).<br/>
      • Algunos expertos usan dosis aún mayores (8-10 mg/kg) en casos complicados, bajo vigilancia estrecha de CPK (uso off-label pero respaldado por evidencia creciente).<br/><br/>
      <b>VENTAJAS:</b><br/>
      • Acción bactericida RÁPIDA (ventaja sobre linezolid, que es bacteriostático, en el contexto de bacteriemia/endocarditis donde se prefiere bactericida).<br/>
      • Actividad frente a VRE también.<br/>
      • Sin necesidad de monitorización de niveles séricos (a diferencia de vancomicina).<br/><br/>
      <b>LIMITACIÓN IMPORTANTE:</b><br/>
      • <b>NO indicada en endocarditis IZQUIERDA</b> (menor eficacia documentada en esta localización específica) - para endocarditis izquierda por MRSA, vancomicina sigue siendo de elección.<br/><br/>
      <b>DURACIÓN:</b><br/>
      • Bacteriemia no complicada: 2 semanas.<br/>
      • Endocarditis derecha: 2-4 semanas según complejidad.<br/>
      • Vigilancia de CPK semanal durante todo el tratamiento, especialmente relevante en tratamientos prolongados.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>CONFIRMAR que la indicación NO es neumonía</b> antes de administrar - contraindicación por inactivación por surfactante.',
      '<b>CPK basal antes de iniciar tratamiento</b>.',
      'Reconstituir SOLO con SF 0.9% - NUNCA con soluciones de dextrosa/glucosa.',
      'Etiquetar: Daptomicina [mg/kg], hora, vía.',
      'Inyección IV en 2 min O perfusión en 30 min - dosis única diaria.',
      '<b>Programar CPK semanal</b> durante todo el tratamiento.',
      'Vigilar síntomas musculares: mialgia, debilidad - reportar inmediatamente si aparecen.',
      'Revisar si el paciente toma estatinas - coordinar posible suspensión temporal con médico.',
      'Vigilar signos de neumonía eosinofílica: fiebre nueva, disnea, durante el tratamiento.',
      'Ajustar intervalo de dosificación según función renal.',
      'Si toma warfarina: espaciar la toma de muestra de INR respecto a la infusión (interferencia analítica).',
      'Informar que el color amarillo pálido/marrón claro de la solución es normal.',
      'Documentar: dosis, hora, CPK seriada, función renal, respuesta clínica, eventos musculares.',
    ],

    efectosAdversos: [
      '🔴 Miopatía / rabdomiolisis',
      '🔴 Neumonía eosinofílica (rara)',
      '🔴 Anafilaxia',
      '🔴 Colitis pseudomembranosa por C. difficile',
      '🟠 Elevación de CPK (con o sin síntomas)',
      '🟠 Mialgia, debilidad muscular',
      '🟠 Elevación transitoria de INR (interferencia analítica)',
      '🟡 Náuseas, vómitos, diarrea',
      '🟡 Cefalea',
      '🟡 Reacción en sitio de infusión',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Rash cutáneo',
      '🟡 Insomnio',
    ],

    contraindicaciones: [
      '<b>Neumonía (de cualquier tipo)</b> - contraindicación funcional por inactivación por surfactante pulmonar.',
      'Hipersensibilidad a daptomicina.',
      'Precaución en: insuficiencia renal (ajuste de intervalo), uso concomitante de estatinas (mayor riesgo miopatía), antecedente de miopatía.',
    ],

    fotosensibilidad: 'No relevante específicamente, aunque se recomienda proteger de luz directa intensa según buenas prácticas generales de conservación.',

    estabilidad: {
      'Vial sin reconstituir':       'Refrigerar 2-8°C hasta vencimiento (verificar packaging específico)',
      'Reconstituido (con SF)':      '<b>12 horas a 25°C · 48 horas refrigerado (2-8°C)</b>',
      'Diluido en bolsa (SF)':       '<b>12 horas a 25°C · 24 horas refrigerado</b>',
      'Aspecto':                      'Amarillo pálido a marrón claro - color NORMAL y característico',
      'Temperatura':                  'Refrigerar preferentemente · NO congelar',
    },

    presentaciones: [
      'Daptomicina Accord 350 mg y 500 mg polvo para solución inyectable/perfusión',
      'Daptomicina Normon 350 mg y 500 mg',
      'Daptomicina Cipla 350 mg y 500 mg',
      'Daptomicina Noridem 500 mg',
      'Daptomicina Sala 500 mg',
      'Daptomicina Lorien 350 mg',
      'Cubicin® (marca histórica)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Piel/partes blandas complicada',        dosis: '<b>4 mg/kg IV c/24h</b>',                   via: 'IV' },
      { indicacion: 'Bacteriemia por S. aureus',              dosis: '<b>6 mg/kg IV c/24h</b>',                   via: 'IV' },
      { indicacion: 'Endocarditis derecha',                    dosis: '<b>6 mg/kg IV c/24h</b>',                   via: 'IV' },
      { indicacion: 'Casos complicados (uso experto, off-label)',dosis:'8-10 mg/kg IV c/24h (vigilancia CPK estrecha)',via: 'IV' },
      { indicacion: 'Pediátrico (1-17 años, según edad)',     dosis: '4-10 mg/kg IV c/24h según grupo etario',   via: 'IV' },
      { indicacion: 'NEUMONÍA',                                dosis: '<b>NO USAR - inactivada por surfactante</b>',via: '—' },
    ],

    embarazo: 'Categoría B (FDA). Datos limitados en embarazo humano. Usar solo si el beneficio justifica el riesgo potencial desconocido. Datos limitados sobre excreción en leche materna - valorar riesgo/beneficio en lactancia.',

    pediatria: 'Estudiada en niños de 1-17 años con bacteriemia por S. aureus (estudio DAP-PEDBAC). Dosis varía según grupo etario (mayor mg/kg en niños más pequeños por farmacocinética diferente) - consultar tabla específica pediátrica según edad.',

    adultoMayor: 'Sin ajuste específico de dosis por edad, aunque mayor prevalencia de insuficiencia renal requiere considerar ajuste de intervalo. Vigilancia de CPK igualmente importante.',

    insufRenal: '<b>AJUSTE DE INTERVALO (no de dosis) en insuficiencia renal:</b> CrCl ≥ 30: dosis estándar c/24h · CrCl < 30 (incluida diálisis): misma dosis pero c/48h. En hemodiálisis: administrar tras la sesión.',

    insufHepatica: 'Sin ajuste específico necesario en insuficiencia hepática leve-moderada. Datos limitados en insuficiencia hepática grave - vigilancia clínica.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Daptomicina Accord, Normon, Cipla 350mg/500mg. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Daptomicina Noridem, Sala, Lorien. AEMPS.',
      'FDA DailyMed. Daptomycin Injection. U.S. National Library of Medicine.',
      'IDSA Guidelines. Methicillin-Resistant Staphylococcus aureus Infections. CID. 2011 (vigente con actualizaciones).',
      'AHA Guidelines. Infective Endocarditis Management. Circulation. 2015 (actualización 2023).',
      'Silverman JA, et al. Correlation of Daptomycin Bactericidal Activity and Surfactant Binding. AAC. 2005.',
      'Pediamécum AEP. Daptomicina. Asociación Española de Pediatría.',
      'Sanford Guide to Antimicrobial Therapy. 2024.',
    ],
  },

});
