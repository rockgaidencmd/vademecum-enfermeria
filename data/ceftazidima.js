/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/ceftazidima.js
   Fuentes: CIMA AEMPS (Ceftazidima Normon, Sala, Accord, Qilu)
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'ceftazidima',
  nombre:         'Ceftazidima',
  nombreGenerico: 'Ceftazidime',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'cefalosporina 3ª generación', 'Pseudomonas', 'antipseudomónica', 'neutropenia febril', 'nosocomial'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Cefalosporina de <b>TERCERA GENERACIÓN con EXCELENTE actividad ANTIPSEUDOMÓNICA</b> — una de las cefalosporinas de referencia frente a Pseudomonas aeruginosa.',
      '<b>NULA actividad frente a grampositivos relevantes</b> (S. aureus, estreptococos con sensibilidad limitada) y NULA frente a anaerobios — requiere combinación en infecciones mixtas.',
      '<b>INCOMPATIBLE con bicarbonato sódico</b> (menos estable), <b>vancomicina</b> (precipitación en disolución) y <b>aminoglucósidos</b> (no mezclar en la misma jeringa/equipo).',
      'Ajuste de dosis <b>OBLIGATORIO según aclaramiento de creatinina</b> — dosis de carga inicial de 1 g seguida de mantenimiento según función renal.',
      'En <b>mayores de 80 años: dosis diaria NO debe exceder 3 g</b> por reducción fisiológica del aclaramiento asociada a la edad.',
    ],

    resumenRapido: 'Cefalosporina betalactámica de 3ª generación con espectro dirigido especialmente a gramnegativos, incluyendo excelente cobertura antipseudomónica. Bactericida por inhibición de la síntesis de la pared celular bacteriana. Activa frente a Klebsiella, Pseudomonas aeruginosa, Enterobacter, Citrobacter, Serratia, Salmonella, Shigella, Acinetobacter, Haemophilus (incluso resistente a ampicilina), y algunos anaerobios grampositivos, pero con actividad limitada/nula frente a Enterococcus, SASM/SARM y la mayoría de anaerobios gramnegativos (muchas cepas de B. fragilis son resistentes). Vida media: ~2h → dosificación c/8h habitual. Indicado en: neumonía nosocomial, sepsis de origen gramnegativo/Pseudomonas, infecciones complicadas del tracto urinario, meningitis bacteriana por gramnegativos, peritonitis asociada a diálisis peritoneal, otitis externa maligna (Pseudomonas), fibrosis quística con infección pulmonar por Pseudomonas.',

    objetivoTerapeutico: 'Cobertura antipseudomónica dirigida · Tratamiento de infecciones nosocomiales graves por gramnegativos · Meningitis por gramnegativos sensibles · Infección respiratoria en fibrosis quística',

    preparacion: {
      'Presentación':             '<b>Ceftazidima 1 g y 2 g polvo (+ disolvente en algunas presentaciones) para solución inyectable/perfusión</b>',
      'Reconstitución (vial + disolvente)':'10 mL de agua para inyección (o el disolvente incluido)',
      'Dilución para perfusión':  'Reconstituido + 50-100 mL SF 0.9% o SG 5%',
      '⚠️ NO usar bicarbonato como diluyente':'<b>Ceftazidima es MENOS ESTABLE en disolución de bicarbonato sódico</b> - no recomendado',
      'Vía':                      'IV (inyección directa o perfusión) · IM profunda (glúteo o cara lateral del muslo) si no es posible la vía IV',
      '⏱️ INYECCIÓN IV DIRECTA':  '<b>3-5 minutos</b>',
      '⏱️ PERFUSIÓN IV':          '<b>15-30 minutos</b>',
      '⏱️ DOSIS DE CARGA inicial':'<b>1 g IV</b>',
      '⏱️ DOSIS estándar adulto': '<b>1-2 g IV c/8h</b> (según gravedad)',
      '⏱️ Infecciones GRAVES/potencialmente mortales':'Aumentar la dosis unitaria un 50% o aumentar la frecuencia de administración',
      '⏱️ Meningitis / infección grave por Pseudomonas':'2 g IV c/8h',
      '⏱️ Fibrosis quística':      '100-150 mg/kg/día en 3 dosis (dosis altas, hasta 9 g/día)',
      '⏱️ DOSIS MÁXIMA (>80 años)':'<b>No exceder 3 g/día</b>',
      'Bomba':                    'Recomendada para perfusión controlada',
      '🌑 Protección luz':        'Conservar viales en embalaje exterior para proteger de la luz',
      '🧊 ESTABILIDAD':           '<b>24 horas a 2-8°C · 2 horas a 25°C</b> (verificar ficha específica, algunas formulaciones permiten hasta 4-6h a 25°C según concentración)',
      'Aspecto':                  'Polvo blanco a amarillento; solución transparente tras reconstitución - desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Verificar alergia a betalactámicos/cefalosporinas.',
        '<b>Función renal basal - AJUSTE OBLIGATORIO</b> según aclaramiento de creatinina.',
        'En > 80 años: confirmar que la dosis diaria no exceda 3 g.',
        'Revisar si se combina con aminoglucósidos o vancomicina - planificar vías/horarios separados.',
        'Doble verificación: dosis, dilución, vía.',
      ],
      durante: [
        'Mantener velocidad correcta: 3-5 min (directa) o 15-30 min (perfusión).',
        'Observar reacción alérgica primeros 15-30 min.',
        'Vigilar sitio IV - flebitis posible.',
      ],
      despues: [
        'Evaluar respuesta clínica a 48-72h.',
        'Revisar cultivos y antibiograma para de-escalada cuando sea posible.',
        'Vigilar diarrea - descartar C. difficile si prolongada/severa.',
        'En uso prolongado: hemograma, función renal y hepática periódicas.',
        'Documentar: dosis, hora, respuesta clínica, función renal, eventos.',
      ],
      suspender: [
        'Reacción alérgica/anafilaxia.',
        'Diarrea grave con sospecha de C. difficile.',
        'Resultado de antibiograma que permita de-escalada a antibiótico de menor espectro.',
        'Completada duración del tratamiento.',
      ],
    },

    incompatibilidades: [
      '<b>BICARBONATO SÓDICO</b> - ceftazidima es MENOS ESTABLE en esta disolución, no recomendado como diluyente.',
      '<b>VANCOMICINA</b> - PRECIPITACIÓN observada al añadir vancomicina a disolución de ceftazidima - lavar equipos entre administraciones.',
      '<b>AMINOGLUCÓSIDOS</b> - NO mezclar en el mismo equipo de perfusión ni en la misma jeringa - administrar por vías/horarios separados.',
      'Lavar la línea IV con SF entre la administración de ceftazidima y estos fármacos.',
      'Preferir línea IV independiente cuando sea posible.',
    ],

    alertasSeguridad: [
      '🟠 <b>INCOMPATIBLE con bicarbonato, vancomicina (precipitación) y aminoglucósidos</b> (misma línea/jeringa).',
      '🟠 Reactividad cruzada con otros betalactámicos en pacientes alérgicos.',
      '🟠 AJUSTE OBLIGATORIO de dosis en insuficiencia renal.',
      '🟠 <b>En > 80 años: dosis diaria NO debe exceder 3 g</b> por reducción del aclaramiento.',
      '🟡 NULA cobertura de grampositivos relevantes (S. aureus, enterococo) y anaerobios - requiere combinación en infecciones mixtas.',
      '🟡 Colitis pseudomembranosa por C. difficile (amplio espectro gramnegativo).',
      '🟡 No hay evidencia de que a dosis terapéuticas normales afecte negativamente la función renal per se (a diferencia de otros nefrotóxicos).',
      '🟡 Contiene sodio (~52 mg por vial de 1g) - considerar en restricción estricta de sodio.',
    ],
  },

  modulos: {

    pseudomonas: `
      <b>Ceftazidima vs Pseudomonas aeruginosa:</b><br/>
      <b>PERFIL:</b><br/>
      • Una de las cefalosporinas de REFERENCIA con actividad antipseudomónica fiable.<br/>
      • Activa también frente a otros gramnegativos nosocomiales: Klebsiella, Enterobacter, Citrobacter, Serratia, Acinetobacter.<br/><br/>
      <b>INDICACIONES ESPECÍFICAS:</b><br/>
      • Neumonía nosocomial/asociada a ventilador con sospecha de Pseudomonas.<br/>
      • Sepsis de origen nosocomial por gramnegativos.<br/>
      • Otitis externa maligna (Pseudomonas) - indicación clásica.<br/>
      • Infección respiratoria en fibrosis quística (dosis altas específicas).<br/>
      • Meningitis por gramnegativos sensibles (buena penetración en LCR).<br/><br/>
      <b>DOSIS PARA INFECCIÓN GRAVE POR PSEUDOMONAS:</b><br/>
      • <b>2 g IV c/8h</b> (dosis alta para infecciones graves/potencialmente mortales).<br/>
      • En fibrosis quística: dosis mucho más altas (100-150 mg/kg/día, hasta 9 g/día en adultos) por farmacocinética alterada en estos pacientes.<br/><br/>
      <b>CONSIDERAR COMBINACIÓN si:</b><br/>
      • Sospecha de Pseudomonas multirresistente - añadir aminoglucósido (vía/horario SEPARADO por incompatibilidad).<br/>
      • Sepsis grave: doble cobertura antipseudomónica inicial hasta antibiograma en algunos protocolos.
    `,

    ajusteRenal: `
      <b>Ajuste de Dosis de Ceftazidima según Función Renal:</b><br/>
      <b>PRINCIPIO GENERAL:</b><br/>
      • Ceftazidima se excreta INALTERADA por vía renal - ajuste de dosis obligatorio en insuficiencia renal.<br/>
      • <b>Dosis de carga inicial: 1 g</b> (independiente de la función renal).<br/>
      • Las dosis de MANTENIMIENTO posteriores se basan en el aclaramiento de creatinina (CrCl).<br/><br/>
      <b>ESQUEMA GENERAL (consultar tabla específica de ficha técnica para ajuste exacto):</b><br/>
      • CrCl > 50 mL/min: dosis estándar sin ajuste (1-2 g c/8-12h).<br/>
      • CrCl 31-50 mL/min: mantener dosis unitaria, ampliar intervalo a c/12h.<br/>
      • CrCl 16-30 mL/min: reducir dosis unitaria a la mitad, mantener c/12h.<br/>
      • CrCl 6-15 mL/min: reducir dosis unitaria a la mitad, ampliar intervalo a c/24h.<br/>
      • CrCl < 5 mL/min: reducir dosis unitaria a la mitad, ampliar intervalo a c/48h.<br/>
      • Hemodiálisis: dosis de carga + dosis suplementaria tras cada sesión (semivida en diálisis: 3-5h).<br/><br/>
      <b>EN INFECCIONES GRAVES</b> incluso con ajuste renal: se debe aumentar la dosis unitaria un 50% o la frecuencia de administración, siempre respetando los límites de seguridad renal.<br/><br/>
      <b>ANCIANOS:</b><br/>
      • Reducción fisiológica del aclaramiento asociada a la edad.<br/>
      • <b>En > 80 años: dosis diaria NO debe exceder 3 g</b>, independientemente de la indicación.<br/>
      • Monitorización clínica estrecha de seguridad y eficacia recomendada en este grupo.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar alergia a betalactámicos/cefalosporinas.',
      'Reconstituir según volumen indicado (10 mL agua para inyección o disolvente incluido).',
      'Etiquetar: Ceftazidima [dosis], hora preparación, vía.',
      'Inyección IV directa en 3-5 min O perfusión en 15-30 min.',
      '<b>NO mezclar con bicarbonato, vancomicina o aminoglucósidos</b> en la misma línea/jeringa.',
      'Si requiere combinación con estos: vías/horarios SEPARADOS, lavar línea con SF entre administraciones.',
      'Confirmar ajuste de dosis según función renal - especialmente relevante en ancianos.',
      'En > 80 años: verificar que la dosis diaria total no exceda 3 g.',
      'Vigilar primeros 15-30 min por reacción alérgica.',
      'Vigilar diarrea (C. difficile) en tratamientos prolongados.',
      'Vía IM: inyección profunda en glúteo o cara lateral del muslo (solo si IV no es posible).',
      'Documentar: dosis, hora, vía, respuesta clínica, función renal, eventos.',
    ],

    efectosAdversos: [
      '🔴 Reacción anafiláctica',
      '🔴 Colitis pseudomembranosa por C. difficile',
      '🟠 Reacción alérgica (rash, urticaria)',
      '🟠 Flebitis en sitio IV',
      '🟠 Elevación transitoria de transaminasas',
      '🟡 Diarrea',
      '🟡 Náuseas, vómitos',
      '🟡 Candidiasis (oral, vaginal)',
      '🟡 Eosinofilia',
      '🟡 Cefalea',
      '🟡 Dolor en sitio IM',
    ],

    contraindicaciones: [
      'Hipersensibilidad a ceftazidima u otras cefalosporinas.',
      'Hipersensibilidad grave (anafilaxia) a otros betalactámicos - riesgo de reactividad cruzada.',
      'Precaución en: insuficiencia renal (ajuste obligatorio), edad avanzada (límite de dosis diaria), embarazo/lactancia (usar si claramente indicado).',
    ],

    fotosensibilidad: 'Conservar los viales en su embalaje exterior para protegerlos de la luz, según indicación de ficha técnica.',

    estabilidad: {
      'Vial sin reconstituir':       'Temperatura ambiente (< 25°C), protegido de luz, hasta vencimiento',
      'Reconstituido/diluido':       '<b>24 horas a 2-8°C · 2 horas a 25°C</b> (verificar ficha específica del fabricante)',
      'Aspecto':                      'Polvo blanco/amarillento; solución transparente tras reconstituir - desechar si turbidez',
      'Temperatura':                  'NO congelar · < 25°C · Proteger de la luz',
    },

    presentaciones: [
      'Ceftazidima Normon 1 g polvo y disolvente para solución inyectable',
      'Ceftazidima Sala 1000 mg polvo para solución inyectable',
      'Ceftazidima Accord 1 g',
      'Ceftazidima Qilu 1 g polvo para solución inyectable/perfusión',
      'Zavicefta® (ceftazidima/avibactam) - combinación con inhibidor de betalactamasas para multirresistentes',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis de carga inicial',                dosis: '<b>1 g IV</b>',                              via: 'IV' },
      { indicacion: 'Dosis estándar adulto',                   dosis: '<b>1-2 g IV c/8h</b>',                       via: 'IV' },
      { indicacion: 'Infección grave por Pseudomonas',        dosis: '2 g IV c/8h',                                via: 'IV' },
      { indicacion: 'Meningitis por gramnegativos',            dosis: '2 g IV c/8h',                                via: 'IV' },
      { indicacion: 'Fibrosis quística (dosis altas)',        dosis: '100-150 mg/kg/día en 3 dosis (máx 9 g/día)', via: 'IV' },
      { indicacion: 'Peritonitis (DPAC)',                      dosis: 'Según protocolo específico intraperitoneal/IV',via: 'IV/IP' },
      { indicacion: 'Pediátrico (incluye neonatos)',           dosis: '25-50 mg/kg c/8-12h según edad',             via: 'IV' },
      { indicacion: 'DOSIS MÁXIMA (> 80 años)',                dosis: '<b>No exceder 3 g/día</b>',                  via: 'IV' },
    ],

    embarazo: 'Sin evidencia de teratogenicidad. Usar durante embarazo si claramente indicado. Compatible con lactancia (excreción mínima en leche).',

    pediatria: 'Aprobada desde el nacimiento (incluyendo neonatos). Dosis: 25-50 mg/kg c/8-12h según edad y gravedad. Ajustar CrCl por superficie corporal o masa corporal magra.',

    adultoMayor: '<b>Reducción del aclaramiento asociada a la edad</b> - dosis diaria NO debe exceder 3 g en > 80 años. Monitorización clínica estrecha de seguridad y eficacia recomendada.',

    insufRenal: '<b>AJUSTE OBLIGATORIO según CrCl</b> tras dosis de carga inicial de 1 g - consultar tabla específica de ajuste (reducir dosis unitaria y/o ampliar intervalo según grado de insuficiencia). En hemodiálisis: dosis suplementaria post-sesión (semivida en diálisis 3-5h).',

    insufHepatica: 'No se requiere ajuste de dosis en insuficiencia hepática leve o moderada según datos disponibles.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Ceftazidima Normon, Sala, Accord, Qilu. Agencia Española de Medicamentos.',
      'FDA DailyMed. Ceftazidime Injection. U.S. National Library of Medicine.',
      'EUCAST. Clinical Breakpoints - Ceftazidime.',
      'IDSA/ATS Guidelines. Hospital-Acquired and Ventilator-Associated Pneumonia. CID. 2016.',
      'Sanford Guide to Antimicrobial Therapy. 2024.',
      'Pediamécum AEP. Ceftazidima. Asociación Española de Pediatría.',
    ],
  },

});
