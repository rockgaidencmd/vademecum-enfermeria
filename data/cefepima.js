/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/cefepima.js
   Fuentes: CIMA AEMPS (Cefepima Kabi, Sala, Normon, LDP),
   FDA DailyMed, IDSA Neutropenia Febril
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'cefepima',
  nombre:         'Cefepima',
  nombreGenerico: 'Cefepime Hydrochloride',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'cefalosporina 4ª generación', 'Pseudomonas', 'neutropenia febril', 'amplio espectro', 'nosocomial'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Cefalosporina de <b>CUARTA GENERACIÓN</b> — amplio espectro con excelente actividad frente a <b>gramnegativos incluyendo Pseudomonas aeruginosa</b> Y grampositivos (mejor cobertura grampositiva que ceftazidima).',
      '<b>ATRAVIESA MEJOR LA MEMBRANA EXTERNA</b> de gramnegativos y es más resistente a betalactamasas cromosómicas tipo AmpC que cefalosporinas de 3ª generación.',
      'Indicación destacada: <b>NEUTROPENIA FEBRIL</b> (cobertura empírica de elección junto con pip-tazo/meropenem), neumonía nosocomial, infecciones complicadas del tracto urinario, piel/partes blandas.',
      '<b>INCOMPATIBLE con metronidazol, vancomicina, aminoglucósidos (gentamicina/tobramicina/netilmicina) y aminofilina</b> — no administrar por la misma línea.',
      '<b>NEUROTOXICIDAD (encefalopatía, mioclonías, convulsiones)</b> con acumulación en insuficiencia renal sin ajuste de dosis — riesgo bien documentado.',
    ],

    resumenRapido: 'Cefalosporina betalactámica de 4ª generación, bactericida por inhibición de síntesis de pared celular. Estructura zwitteriónica que le permite penetrar eficazmente la membrana externa de bacterias gramnegativas y mayor estabilidad frente a betalactamasas cromosómicas AmpC que las cefalosporinas de generaciones previas. Espectro amplio: gramnegativos (incluyendo P. aeruginosa), grampositivos (S. aureus sensible a meticilina, estreptococos), NO cubre MRSA ni anaerobios significativamente. Vida media: 2h → dosificación c/8-12h. Indicado en: neutropenia febril (empírico), neumonía nosocomial/comunitaria grave, infecciones complicadas del tracto urinario, infecciones intraabdominales (combinado con metronidazol - en línea separada), piel/partes blandas complicadas, meningitis bacteriana (alternativa).',

    objetivoTerapeutico: 'Cobertura empírica de amplio espectro en paciente neutropénico febril · Tratamiento de infecciones nosocomiales graves · Cobertura antipseudomónica con buena actividad grampositiva',

    preparacion: {
      'Presentación 1 g':          '<b>Cefepima 1 g polvo para solución inyectable/perfusión</b>',
      'Presentación 2 g':          '<b>Cefepima 2 g polvo para solución inyectable/perfusión</b>',
      'Diluyente reconstitución':  'Agua para inyección · SF 0.9% · SG 5%',
      'Volumen reconstitución (IV directa)':'1 g en 10 mL · 2 g en 10-15 mL',
      'Dilución para perfusión':  'Reconstituido + 50-100 mL SF/SG5%',
      'Vía':                      'IV (directa o perfusión) · IM profunda (zona de alta masa muscular)',
      '⏱️ INYECCIÓN IV DIRECTA':  '<b>3-5 minutos</b>',
      '⏱️ PERFUSIÓN IV':          '<b>30 minutos</b>',
      '⏱️ DOSIS ESTÁNDAR':        '<b>1-2 g IV c/8-12h</b> según gravedad',
      '⏱️ NEUTROPENIA FEBRIL':    '<b>2 g IV c/8h</b>',
      '⏱️ NEUMONÍA NOSOCOMIAL':   '2 g IV c/8-12h',
      '⏱️ ITU complicada':         '0.5-1 g IV/IM c/12h',
      'Vía IM':                   'Inyección profunda en zona de alta masa muscular (glúteo)',
      'Bomba':                    'Recomendada para perfusión controlada',
      '🧊 ESTABILIDAD':           '<b>18 horas a 15-25°C · 7 días refrigerado (2-8°C)</b>',
      'Aspecto':                  'Solución transparente, de incolora a amarillo claro/ámbar — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Verificar alergia a cefalosporinas/betalactámicos.',
        '<b>Función renal basal - AJUSTE OBLIGATORIO si CrCl < 60 mL/min</b>.',
        'En neutropenia febril: cultivos tomados antes del antibiótico si posible sin retrasar tratamiento.',
        'Revisar antecedentes de convulsiones o patología del SNC (mayor riesgo de neurotoxicidad).',
        'Doble verificación: dosis, dilución, vía.',
      ],
      durante: [
        'Mantener velocidad correcta: 3-5 min (directa) o 30 min (perfusión).',
        'Observar reacción alérgica primeros 15-30 min.',
        'Vigilar sitio IV - flebitis posible.',
      ],
      despues: [
        'Evaluar respuesta clínica a 48-72h: fiebre, leucocitos, PCR.',
        'En neutropenia febril: vigilar recuperación de neutrófilos, persistencia de fiebre.',
        '<b>VIGILAR SIGNOS DE NEUROTOXICIDAD</b>: confusión, mioclonías, convulsiones - especialmente en IRC sin ajuste adecuado.',
        'Vigilar diarrea - descartar C. difficile si prolongada/severa.',
        'Revisar cultivos para de-escalada cuando sea posible.',
        'Documentar: dosis, hora, respuesta clínica, función renal, eventos.',
      ],
      suspender: [
        'Reacción alérgica / anafilaxia.',
        'Signos de neurotoxicidad (confusión, mioclonías, convulsiones).',
        'Diarrea grave con sospecha de C. difficile.',
        'Resultado de antibiograma que permita de-escalada.',
        'Completada duración del tratamiento.',
      ],
    },

    incompatibilidades: [
      '<b>METRONIDAZOL</b> - INCOMPATIBLE físico-químicamente (CIMA AEMPS) - administrar por línea SEPARADA.',
      '<b>VANCOMICINA</b> - INCOMPATIBLE - administrar por línea separada.',
      '<b>AMINOGLUCÓSIDOS (gentamicina, tobramicina, netilmicina)</b> - INCOMPATIBLES - vías separadas.',
      '<b>AMINOFILINA</b> - INCOMPATIBLE.',
      'Si se requiere combinación (ej. cefepima + metronidazol en infección intraabdominal): administrar por vías/líneas SEPARADAS, nunca mezclados.',
      'Lavar línea con SF antes y después de otros medicamentos.',
    ],

    alertasSeguridad: [
      '🔴 <b>NEUROTOXICIDAD</b> (encefalopatía, mioclonías, convulsiones, coma) - especialmente en INSUFICIENCIA RENAL sin ajuste de dosis. Bien documentada en la literatura.',
      '🟠 <b>INCOMPATIBLE con metronidazol, vancomicina, aminoglucósidos, aminofilina</b> en la misma línea.',
      '🟠 Reactividad cruzada con otros betalactámicos en pacientes alérgicos.',
      '🟠 Ajuste OBLIGATORIO de dosis en insuficiencia renal (CrCl < 60).',
      '🟠 Colitis pseudomembranosa por C. difficile (amplio espectro).',
      '🟡 Ancianos con función renal alterada: mayor riesgo de acumulación y neurotoxicidad - ajustar con precaución.',
      '🟡 NO cubre MRSA - considerar asociar vancomicina/linezolid si sospecha.',
      '🟡 NO cubre anaerobios significativamente - asociar metronidazol (línea separada) en infecciones mixtas.',
      '🟡 Farmacocinética similar en insuficiencia hepática - no requiere ajuste por esta causa.',
    ],
  },

  modulos: {

    neutropeniaFebril: `
      <b>Cefepima en Neutropenia Febril:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Fiebre en paciente neutropénico (neutrófilos < 500/mm³ o < 1000 con descenso esperado) - EMERGENCIA ONCOLÓGICA.<br/>
      • Cefepima es uno de los antibióticos empíricos de PRIMERA LÍNEA recomendados por IDSA.<br/><br/>
      <b>PROTOCOLO (IDSA Guidelines):</b><br/>
      1. <b>Hemocultivos x2 (periférico + catéter si aplica) ANTES del antibiótico</b>, sin retrasar el inicio más de 1 hora.<br/>
      2. <b>Cefepima 2 g IV c/8h</b> en monoterapia (alternativa: piperacilina/tazobactam, meropenem).<br/>
      3. Añadir vancomicina/linezolid SI: sospecha de infección de catéter, inestabilidad hemodinámica, colonización previa por MRSA, mucositis severa.<br/>
      4. Añadir antifúngico empírico si fiebre persiste > 4-7 días sin foco identificado.<br/><br/>
      <b>VENTAJAS de cefepima en este contexto:</b><br/>
      • Excelente cobertura de Pseudomonas (causa grave y potencialmente letal en neutropénicos).<br/>
      • Buena cobertura de grampositivos (mejor que ceftazidima).<br/>
      • Monoterapia efectiva según múltiples ensayos clínicos.<br/><br/>
      <b>DURACIÓN:</b><br/>
      • Continuar hasta afebril Y recuperación de neutrófilos (> 500/mm³), o según foco identificado.<br/>
      • Reevaluación diaria de la necesidad de escalada/de-escalada.
    `,

    neurotoxicidad: `
      <b>Neurotoxicidad por Cefepima:</b><br/>
      <b>MECANISMO:</b><br/>
      • Antagonismo de receptores GABA-A en el SNC (similar a otros betalactámicos pero más pronunciado con cefepima).<br/>
      • Acumulación por insuficiencia renal sin ajuste adecuado de dosis es el principal factor de riesgo.<br/><br/>
      <b>FACTORES DE RIESGO:</b><br/>
      • Insuficiencia renal (especialmente si no se ajusta dosis).<br/>
      • Edad avanzada.<br/>
      • Patología del SNC previa (epilepsia, ACV, demencia).<br/>
      • Dosis altas o acumulación por administración prolongada sin ajuste.<br/><br/>
      <b>PRESENTACIÓN CLÍNICA:</b><br/>
      • Encefalopatía: confusión, desorientación, alteración del nivel de consciencia.<br/>
      • Mioclonías (frecuentemente el signo más temprano y reconocible).<br/>
      • Convulsiones (pueden ser no convulsivas - EEG puede ser necesario para diagnóstico).<br/>
      • Coma en casos severos.<br/>
      • Puede confundirse con delirium de otras causas en el paciente hospitalizado - MANTENER ALTO ÍNDICE DE SOSPECHA.<br/><br/>
      <b>MANEJO:</b><br/>
      1. SUSPENDER cefepima ante sospecha.<br/>
      2. Evaluación neurológica, considerar EEG si alteración de consciencia no explicada.<br/>
      3. Soporte sintomático (benzodiacepinas si convulsiones).<br/>
      4. Generalmente REVERSIBLE en días tras suspensión, más rápido con hemodiálisis en IRC.<br/><br/>
      <b>PREVENCIÓN:</b><br/>
      • <b>AJUSTE CUIDADOSO de dosis según función renal SIEMPRE</b>.<br/>
      • Vigilancia neurológica activa en pacientes de riesgo (ancianos, IRC).
    `,

    pseudomonas: `
      <b>Cefepima vs Pseudomonas aeruginosa:</b><br/>
      <b>PERFIL DE ACTIVIDAD:</b><br/>
      • Excelente actividad antipseudomónica - una de las cefalosporinas de elección.<br/>
      • Mayor estabilidad frente a betalactamasas AmpC inducibles que cefalosporinas de 3ª generación.<br/>
      • Comparable a ceftazidima en actividad antipseudomónica, con MEJOR cobertura grampositiva adicional.<br/><br/>
      <b>INDICACIONES:</b><br/>
      • Neumonía nosocomial/asociada a ventilador con sospecha de Pseudomonas.<br/>
      • Sepsis de origen nosocomial.<br/>
      • Infecciones en neutropénicos (alto riesgo de Pseudomonas).<br/>
      • Infecciones urinarias complicadas por Pseudomonas.<br/><br/>
      <b>DOSIS PARA PSEUDOMONAS:</b><br/>
      • <b>2 g IV c/8h</b> (dosis alta, no c/12h) para asegurar concentración adecuada.<br/>
      • En infecciones graves: considerar perfusión extendida (mayor tiempo por encima de CIM).<br/><br/>
      <b>CONSIDERAR COMBINACIÓN si:</b><br/>
      • Sospecha de Pseudomonas multirresistente: añadir aminoglucósido (en línea SEPARADA por incompatibilidad) o fluoroquinolona.<br/>
      • Neumonía muy grave con shock séptico: doble cobertura antipseudomónica inicial hasta antibiograma.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar alergia a betalactámicos/cefalosporinas.',
      'Reconstituir según volúmenes recomendados (1g en 10mL, 2g en 10-15mL).',
      'Etiquetar: Cefepima [dosis], hora preparación, vía.',
      'Inyección IV directa en 3-5 min O perfusión en 30 min.',
      '<b>NUNCA mezclar con metronidazol, vancomicina, aminoglucósidos, aminofilina</b> en la misma línea.',
      'Si requiere combinación con estos: usar vías/líneas separadas.',
      'Ajuste OBLIGATORIO de dosis según función renal - verificar con médico/farmacia.',
      'Vigilar signos de neurotoxicidad: confusión, mioclonías - especialmente en IRC/ancianos.',
      'En neutropenia febril: hemocultivos ANTES del antibiótico si es posible sin retrasar.',
      'Vigilar primeros 15-30 min por reacción alérgica.',
      'Vigilar diarrea (C. difficile).',
      'Vía IM: inyección profunda en zona de alta masa muscular.',
      'Documentar: dosis, hora, vía, respuesta clínica, función renal, eventos neurológicos.',
    ],

    efectosAdversos: [
      '🔴 Encefalopatía/neurotoxicidad (especialmente en IRC)',
      '🔴 Convulsiones',
      '🔴 Anafilaxia',
      '🔴 Colitis pseudomembranosa por C. difficile',
      '🟠 Reacción alérgica (rash, urticaria)',
      '🟠 Mioclonías',
      '🟠 Confusión, desorientación',
      '🟡 Diarrea',
      '🟡 Náuseas, vómitos',
      '🟡 Flebitis en sitio IV',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Eosinofilia',
      '🟡 Cefalea',
      '🟡 Candidiasis (oral, vaginal)',
      '🟡 Dolor en sitio IM',
    ],

    contraindicaciones: [
      'Hipersensibilidad a cefepima, otras cefalosporinas o excipientes.',
      'Hipersensibilidad grave (anafilaxia) a otros betalactámicos (penicilinas, carbapenems) - riesgo de reactividad cruzada.',
      'Precaución en: insuficiencia renal (ajuste obligatorio), antecedente de convulsiones/patología SNC, embarazo, lactancia.',
    ],

    fotosensibilidad: 'No relevante. Conservar viales protegidos de luz directa intensa pero sin requerimientos especiales de fotoprotección durante la administración.',

    estabilidad: {
      'Vial sin reconstituir':       'Temperatura ambiente hasta vencimiento',
      'Reconstituido/diluido':       '<b>18 horas a 15-25°C · 7 días refrigerado (2-8°C)</b>',
      'Aspecto':                      'Transparente, de incolora a amarillo claro/ámbar (normal, puede oscurecer ligeramente) - desechar si turbidez marcada',
      'Temperatura':                  'NO congelar · 15-25°C o refrigerado',
    },

    presentaciones: [
      'Cefepima Kabi 1 g y 2 g polvo para solución inyectable/perfusión',
      'Cefepima Sala 1 g y 2 g',
      'Cefepima Normon 1 g polvo y disolvente',
      'Cefepima LDP (Laboratorios Torlan)',
      'Múltiples genéricos disponibles',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis estándar adulto',                 dosis: '<b>1-2 g IV c/8-12h</b>',                   via: 'IV' },
      { indicacion: 'Neutropenia febril',                     dosis: '<b>2 g IV c/8h</b>',                        via: 'IV' },
      { indicacion: 'Neumonía nosocomial',                    dosis: '2 g IV c/8-12h',                            via: 'IV' },
      { indicacion: 'ITU complicada',                          dosis: '0.5-1 g IV/IM c/12h',                       via: 'IV/IM' },
      { indicacion: 'Infección intraabdominal (+ metronidazol en línea separada)',dosis:'2 g IV c/12h',           via: 'IV' },
      { indicacion: 'Pediátrico (2 meses-16 años)',            dosis: '50 mg/kg IV c/8-12h (máx 2 g/dosis)',      via: 'IV' },
      { indicacion: 'Meningitis (alternativa)',                dosis: '2 g IV c/8h',                               via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Atraviesa placenta. Uso durante embarazo si claramente indicado. Compatible con lactancia (excreción mínima en leche).',

    pediatria: 'Aprobada desde 2 meses. Dosis: 50 mg/kg IV c/8-12h (máximo 2 g/dosis). Farmacocinética estudiada y similar independiente de la edad dentro del rango pediátrico.',

    adultoMayor: '<b>Mayor riesgo de insuficiencia renal</b> - seleccionar dosis con precaución y monitorizar función renal. AUC superior y menor aclaramiento renal comparado con jóvenes. Ajustar dosis si insuficiencia renal concomitante.',

    insufRenal: '<b>AJUSTE OBLIGATORIO:</b> CrCl > 60: dosis estándar · CrCl 30-60: reducir a la mitad o ampliar intervalo · CrCl 11-29: 1 g c/24h · CrCl < 11: 500 mg c/24h · Hemodiálisis: dosis de carga + suplemento post-sesión. Consultar tabla específica de ajuste.',

    insufHepatica: 'Sin ajuste necesario - la farmacocinética no se modifica significativamente en insuficiencia hepática (dosis única estudiada de 1g).',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Cefepima Kabi 1g/2g. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Cefepima Sala, Normon, LDP. AEMPS.',
      'FDA DailyMed. Cefepime Hydrochloride Injection. U.S. National Library of Medicine.',
      'IDSA Guidelines. Management of Fever and Neutropenia in Cancer Patients. CID. 2011 (vigente con actualizaciones).',
      'IDSA/ATS Guidelines. Hospital-Acquired and Ventilator-Associated Pneumonia. CID. 2016.',
      'Lamoth F, et al. Cefepime Neurotoxicity: Systematic Review. Clin Microbiol Infect. 2010.',
      'Pediamécum AEP. Cefepima. Asociación Española de Pediatría.',
      'Sanford Guide to Antimicrobial Therapy. 2024.',
    ],
  },

});
