/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/piperacilina-tazobactam.js
   Fuentes: CIMA AEMPS (Tazocel, Pip-Tazo Normon, Kabi),
   FDA DailyMed, IDSA Sepsis Guidelines, Surviving Sepsis 2021
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'piperacilina-tazobactam',
  nombre:         'Piperacilina/Tazobactam',
  nombreGenerico: 'Piperacillin Sodium + Tazobactam Sodium',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'penicilina', 'amplio espectro', 'sepsis', 'neumonía nosocomial', 'Pseudomonas', 'anaerobios'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Combinación de PENICILINA antipseudomónica (piperacilina) + INHIBIDOR de betalactamasas (tazobactam) - amplio espectro.',
      'Cubre: gramnegativos (incluyendo <b>Pseudomonas aeruginosa</b>), grampositivos, ANAEROBIOS. NO cubre MRSA, atípicas.',
      '<b>Antibiótico empírico de elección en sepsis grave intrahospitalaria</b>, neumonía nosocomial, infección intraabdominal complicada.',
      'Reconstituir 4 g/0.5 g con 20 mL de diluyente, luego diluir en 50-150 mL SF/SG5% → <b>perfundir en 30 minutos</b>.',
      'Reactividad cruzada con cefalosporinas/penicilinas — CONTRAINDICADO en alergia anafiláctica a betalactámicos.',
    ],

    resumenRapido: 'Antibiótico betalactámico combinado: piperacilina (penicilina de amplio espectro con actividad antipseudomónica) + tazobactam (inhibidor irreversible de betalactamasas que protege a la piperacilina de la degradación). Bactericida por inhibición de síntesis de pared. Amplio espectro: gramnegativos incluyendo P. aeruginosa, grampositivos, anaerobios. Vida media: 1h → dosificación c/6-8h. Indicado en: sepsis grave/shock séptico, neumonía nosocomial, neumonía asociada a ventilador (NAV), infección intraabdominal complicada, infección pélvica, pie diabético infectado complicado, neutropenia febril.',

    objetivoTerapeutico: 'Tratamiento empírico de infecciones graves con sospecha de gramnegativos resistentes · Cobertura amplia con preservación de anaerobios · Sepsis nosocomial · Pseudomonas confirmada o sospechada',

    preparacion: {
      'Presentación 4 g':         '<b>Piperacilina/Tazobactam 4 g/0.5 g vial liofilizado</b> (más usada en adulto)',
      'Presentación 2 g':         'Piperacilina/Tazobactam 2 g/0.25 g vial liofilizado',
      'Diluyente reconstitución': '<b>20 mL SF 0.9% o agua para inyección</b> (para vial 4 g/0.5 g)',
      'Diluyente reconstitución 2 g':'10 mL SF 0.9% o agua para inyección',
      'Diluyente final':          'SF 0.9% · SG 5% (compatibles)',
      'Dilución para perfusión':  '<b>Vial reconstituido + 50-150 mL SF</b> (concentración final 13.33-80 mg/mL pip)',
      'Vía':                      'IV exclusiva (perfusión IV preferida sobre bolo)',
      '⏱️ INYECCIÓN IV LENTA':    '<b>3-5 minutos mínimo</b> (poco usada en adultos)',
      '⏱️ PERFUSIÓN IV (PREFERIDA)':'<b>30 minutos en 50-150 mL SF</b>',
      '⏱️ Perfusión extendida (PK óptimo)':'4 horas (estrategia avanzada en sepsis - mejora T>MIC)',
      '⏱️ DOSIS estándar adulto': '<b>4 g/0.5 g IV c/8h</b> (sepsis grave: c/6h)',
      '⏱️ DOSIS sepsis severa':   '<b>4 g/0.5 g IV c/6h × 7-14 días</b>',
      '⏱️ DOSIS pediátrica':       '90 mg/kg/dosis c/8h IV (máximo 4 g/dosis)',
      'Bomba':                    'Recomendada para perfusión controlada',
      '🧊 ESTABILIDAD reconstituida':'<b>24 horas a 25°C · 48 horas refrigerada (2-8°C)</b>',
      '🧊 Vial sin abrir':        'Temperatura ambiente (< 25°C, algunos < 30°C), en embalaje exterior',
      'Aspecto':                  'Solución transparente, incolora a amarillenta clara - desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>Verificar alergias a betalactámicos</b> (penicilinas, cefalosporinas, carbapenems).',
        '<b>En alergia ANAFILÁCTICA a betalactámicos: CONTRAINDICACIÓN ABSOLUTA</b>.',
        'En alergia leve a penicilina (rash): valorar con alergología.',
        'Confirmar cultivos tomados antes del antibiótico si paciente estable.',
        'Función renal basal - ajuste obligatorio si CrCl < 40 mL/min.',
        'Revisar interacciones: vancomicina (↑ nefrotoxicidad), aminoglucósidos (incompatibilidad física).',
        'Doble verificación: dosis, dilución, velocidad.',
      ],
      durante: [
        'Mantener velocidad correcta: 30 min para perfusión estándar.',
        'Observar reacción alérgica primeros 15-30 min: urticaria, broncoespasmo, anafilaxia.',
        'Vigilar sitio IV - flebitis posible.',
        'Si reacción alérgica: SUSPENDER, tratar anafilaxia.',
      ],
      despues: [
        'Evaluar respuesta clínica a 48-72h: fiebre, leucocitos, PCR, lactato.',
        'Revisar cultivos y antibiograma para de-escalada cuando sea posible.',
        'Vigilar diarrea - si > 3 deposiciones líquidas/día, descartar C. difficile.',
        'En uso > 7 días: control hemograma (neutropenia con uso prolongado), función renal y hepática.',
        'Vigilar HIPOPOTASEMIA (efecto secundario por elevada carga de sodio).',
        'En sepsis: vigilancia hemodinámica, lactato, PCR seriadas.',
        'Documentar: dosis, hora, vía, respuesta clínica, ajustes.',
      ],
      suspender: [
        'Reacción alérgica / anafilaxia.',
        'Diarrea grave con sospecha de C. difficile.',
        'Resultado de antibiograma que permita de-escalada a antibiótico de menor espectro.',
        'Sd Stevens-Johnson o NET.',
        'Citopenia significativa (neutropenia, trombocitopenia).',
        'Insuficiencia renal aguda nueva atribuible.',
        'Completada duración del tratamiento.',
      ],
    },

    incompatibilidades: [
      '<b>BICARBONATO DE SODIO</b> - INCOMPATIBLE (Pediamécum).',
      '<b>RINGER LACTATO</b> - INCOMPATIBLE (precipitación).',
      '<b>AMINOGLUCÓSIDOS (gentamicina, amikacina, tobramicina)</b> - <b>NO mezclar en misma jeringa/línea</b> (incompatibilidad física, inactivación).',
      'Si requiere ambos: administrar por vías SEPARADAS o secuencialmente con lavado SF.',
      '<b>Hemoderivados, albúmina</b> - NO añadir piperacilina/tazobactam.',
      'Anfotericina B - incompatibilidad documentada.',
      'Vancomicina - puede mezclarse con precaución, mejor administrar separados.',
      'Lavar línea con SF antes y después de otros medicamentos.',
    ],

    alertasSeguridad: [
      '🟠 <b>REACTIVIDAD CRUZADA con betalactámicos</b> - vigilar especialmente en alérgicos a penicilina.',
      '🟠 INCOMPATIBLE con bicarbonato, Ringer Lactato, aminoglucósidos.',
      '🟠 NEFROTOXICIDAD aumentada combinado con VANCOMICINA - vigilar función renal.',
      '🟠 HIPOPOTASEMIA por alta carga de sodio - vigilar K+.',
      '🟠 Colitis pseudomembranosa por C. difficile (espectro amplio).',
      '🟠 Convulsiones con dosis muy altas o IRC severa sin ajuste.',
      '🟡 Trombocitopenia, neutropenia con uso > 7-10 días.',
      '🟡 Elevación transitoria de transaminasas.',
      '🟡 Falsos positivos en test de Coombs directo.',
      '🟡 Falsos positivos para galactomanano (Aspergillus) - error diagnóstico.',
    ],
  },

  modulos: {

    sepsis: `
      <b>Piperacilina/Tazobactam en Sepsis - Surviving Sepsis 2021:</b><br/>
      <b>INDICACIONES (cobertura empírica):</b><br/>
      • Sepsis grave/shock séptico de origen intrahospitalario.<br/>
      • Sepsis con foco intraabdominal.<br/>
      • Sepsis con foco urinario complicado.<br/>
      • Neutropenia febril (alternativa a meropenem).<br/>
      • Foco respiratorio nosocomial.<br/><br/>
      <b>VENTAJAS en sepsis:</b><br/>
      • Cobertura amplia: gramneg + grampos + anaerobios + Pseudomonas.<br/>
      • Buena penetración tisular.<br/>
      • Excelente perfil de seguridad.<br/><br/>
      <b>PROTOCOLO SURVIVING SEPSIS:</b><br/>
      1. <b>Antibiótico empírico en PRIMERA HORA</b> tras reconocimiento.<br/>
      2. <b>Piperacilina/Tazobactam 4 g/0.5 g IV inicial</b> (sin esperar dosis ajustada).<br/>
      3. Luego: <b>4 g/0.5 g c/6-8h IV</b> según severidad.<br/>
      4. Considerar combinación con otro antibiótico en shock séptico (vancomicina si sospecha MRSA, aminoglucósido en bacteriemia por gramneg).<br/>
      5. De-escalada según antibiograma a las 48-72h.<br/>
      6. Duración total: 7-14 días según foco.<br/><br/>
      <b>PERFUSIÓN EXTENDIDA (estrategia avanzada):</b><br/>
      • Perfusión de 4 horas en lugar de 30 min.<br/>
      • Mejora T>MIC (tiempo sobre concentración mínima inhibitoria).<br/>
      • Mejora outcomes en sepsis grave por gramneg resistentes.<br/>
      • Cuidado: ocupa línea IV prolongadamente.
    `,

    pseudomonas: `
      <b>Piperacilina/Tazobactam vs Pseudomonas aeruginosa:</b><br/>
      <b>VENTAJAS:</b><br/>
      • Actividad antipseudomónica buena (la piperacilina es antipseudomónica).<br/>
      • Tazobactam protege contra betalactamasas inducibles.<br/>
      • Alternativa a ceftazidima, cefepima, meropenem.<br/><br/>
      <b>LIMITACIONES:</b><br/>
      • Resistencia creciente (15-30% en algunos hospitales).<br/>
      • Si sospecha de MDR-Pseudomonas: combinar con aminoglucósido o usar meropenem.<br/>
      • En neumonía severa por Pseudomonas: considerar perfusión extendida 4h.<br/><br/>
      <b>DOSIS para Pseudomonas:</b><br/>
      • <b>4 g/0.5 g c/6h IV</b> (no c/8h - mejora outcomes).<br/>
      • Considerar perfusión extendida.<br/>
      • Duración: 14 días en bacteriemia, 7-10 días en neumonía.<br/><br/>
      <b>CUIDADO:</b><br/>
      • Si MIC > 16 mg/L: considerar cambio a meropenem.<br/>
      • Combinación con tobramicina en bacteriemia severa (sinergia).
    `,

    nefrotoxicidad: `
      <b>Nefrotoxicidad de Piperacilina/Tazobactam + Vancomicina:</b><br/>
      <b>EVIDENCIA:</b><br/>
      • Estudios recientes (2015-2020) muestran ↑ riesgo de injuria renal aguda (IRA) con la combinación.<br/>
      • Riesgo de IRA: 22-35% en pacientes críticos con la combinación.<br/>
      • Riesgo con monoterapia con cualquiera: 5-10%.<br/><br/>
      <b>MECANISMO:</b><br/>
      • Sinergia tóxica desconocida.<br/>
      • Posible mecanismo inmuno-inflamatorio.<br/>
      • Falsa elevación de creatinina (interferencia con ensayo) en algunos casos.<br/><br/>
      <b>CONSIDERACIONES CLÍNICAS:</b><br/>
      • Si requiere ambos: vigilancia INTENSIVA de creatinina diaria.<br/>
      • Considerar alternativas: cefepima + vancomicina, meropenem + vancomicina.<br/>
      • Hidratación adecuada del paciente.<br/>
      • Ajuste de vancomicina por niveles séricos (target trough 15-20).<br/>
      • Suspender uno de los dos cuando antibiograma lo permita.<br/><br/>
      <b>VIGILANCIA:</b><br/>
      • Creatinina diaria mientras combinación.<br/>
      • Función renal 48-72h post-suspensión.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar alergia a betalactámicos antes de cada dosis.',
      'Reconstituir vial 4 g/0.5 g con 20 mL SF o agua para inyección.',
      'Agitar suavemente con movimientos rotatorios hasta disolver (3 min).',
      'Inspeccionar visualmente - solución transparente sin partículas.',
      'Diluir reconstituido en 50-150 mL SF/SG 5% para perfusión.',
      'Etiquetar bolsa: Pip/Tazo [dosis], hora preparación, fecha límite (24h TA).',
      '<b>Perfusión IV en 30 minutos</b> - usar bomba.',
      '<b>NO MEZCLAR</b> con aminoglucósidos, bicarbonato, Ringer Lactato, hemoderivados.',
      'Acceso IV permeable - vigilar flebitis.',
      'Lavar línea con SF antes y después si se administra junto a otros medicamentos.',
      'Si combinado con vancomicina: vigilancia INTENSIVA de creatinina.',
      'Vigilar primeros 15-30 min por reacción alérgica.',
      'En sepsis: documentar hora exacta - "primera hora" Surviving Sepsis.',
      'Vigilar diarrea (C. difficile).',
      'Documentar: dosis, hora, vía, respuesta, función renal, eventos.',
    ],

    efectosAdversos: [
      '🔴 Reacción anafiláctica',
      '🔴 Síndrome Stevens-Johnson / NET (raro)',
      '🔴 Colitis pseudomembranosa por C. difficile',
      '🔴 Insuficiencia renal aguda (especialmente con vancomicina)',
      '🔴 Convulsiones (dosis altas + IRC)',
      '🟠 Reacción alérgica (rash, urticaria)',
      '🟠 Diarrea',
      '🟠 Hipopotasemia',
      '🟠 Neutropenia, trombocitopenia (uso > 7-10 días)',
      '🟡 Náuseas, vómitos',
      '🟡 Cefalea',
      '🟡 Insomnio',
      '🟡 Flebitis en sitio IV',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Eosinofilia',
      '🟡 Candidiasis (oral, vaginal)',
      '🟡 Falsos positivos: test Coombs, galactomanano',
    ],

    contraindicaciones: [
      '<b>Hipersensibilidad anafiláctica a betalactámicos</b> (penicilinas, cefalosporinas, carbapenems).',
      'Hipersensibilidad a piperacilina, tazobactam o excipientes.',
      'Antecedente de Síndrome Stevens-Johnson o NET por betalactámicos.',
      'Precaución en: insuficiencia renal (ajuste obligatorio), embarazo (categoría B), lactancia.',
    ],

    fotosensibilidad: 'No relevante. Conservar viales en embalaje exterior para evitar luz directa intensa pero sin requerimientos especiales de fotoprotección.',

    estabilidad: {
      'Vial sin reconstituir':       'Temperatura ambiente (< 25-30°C) hasta vencimiento (3 años)',
      'Reconstituido (20 mL SF)':    '<b>24 horas a 25°C · 48 horas refrigerado (2-8°C)</b>',
      'Diluido en SF/SG 5%':         '<b>24 horas a 25°C · 48 horas refrigerado</b>',
      'Aspecto':                      'Transparente, incolora a amarillenta clara - desechar si turbidez',
      'Temperatura':                  'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Piperacilina/Tazobactam 4 g/0.5 g vial (más usado en adulto)',
      'Piperacilina/Tazobactam 2 g/0.25 g vial (dosis pediátrica)',
      'Tazocel® (marca histórica - Pfizer)',
      'Piperacilina/Tazobactam Normon®, Kabi®, Sandoz®, Accord®, Sala® (genéricos)',
      'Múltiples genéricos disponibles globalmente',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Sepsis grave / shock séptico',         dosis: '<b>4 g/0.5 g IV c/6-8h × 7-14 días</b>',   via: 'IV' },
      { indicacion: 'Neumonía nosocomial',                  dosis: '4 g/0.5 g IV c/6-8h × 7-14 días',           via: 'IV' },
      { indicacion: 'NAV (asociada a ventilador)',          dosis: '4 g/0.5 g IV c/6h × 7-14 días',             via: 'IV' },
      { indicacion: 'Infección intraabdominal',             dosis: '4 g/0.5 g IV c/8h × 5-14 días',             via: 'IV' },
      { indicacion: 'Pie diabético complicado',             dosis: '4 g/0.5 g IV c/8h × 7-14 días',             via: 'IV' },
      { indicacion: 'Neutropenia febril',                   dosis: '4 g/0.5 g IV c/6h × hasta resolución',     via: 'IV' },
      { indicacion: 'Pediátrico',                            dosis: '90 mg/kg/dosis c/8h (máx 4 g/dosis)',      via: 'IV' },
      { indicacion: 'Dosis máxima diaria',                   dosis: '24 g/3 g/día (4g/0.5g c/4h)',              via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Atraviesa placenta. Uso seguro durante embarazo si hay indicación clara. Compatible con lactancia (excreción mínima en leche, vigilar diarrea/candidiasis en lactante).',

    pediatria: 'Neonatos: 80 mg/kg/dosis c/8h (1 mes-2 años). Niños: 90 mg/kg/dosis c/8h IV (máximo 4 g). Ajuste por función renal. Cobertura empírica en sepsis pediátrica intrahospitalaria.',

    adultoMayor: 'Ajuste OBLIGATORIO por función renal (común CrCl reducido en ancianos). Vigilancia ↑ de IRA, especialmente con vancomicina. Mayor riesgo de C. difficile.',

    insufRenal: '<b>AJUSTE OBLIGATORIO:</b> CrCl > 40: 4 g/0.5 g c/8h · CrCl 20-40: 4 g/0.5 g c/8-12h · CrCl < 20: 4 g/0.5 g c/12h · Hemodiálisis: 2.25 g IV + 0.75 g tras sesión.',

    insufHepatica: 'Sin ajuste específico - eliminación principalmente renal. En cirrosis severa: vigilancia de citopenias y función renal.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Piperacilina/Tazobactam Normon, Kabi, Sandoz, Accord. AEMPS.',
      'FDA DailyMed. Piperacillin/Tazobactam Injection. U.S. National Library of Medicine.',
      'Surviving Sepsis Campaign Guidelines 2021. Crit Care Med.',
      'IDSA Guidelines. Hospital-Acquired Pneumonia and VAP. CID 2016.',
      'IDSA Guidelines. Intra-abdominal Infections. CID 2010.',
      'Luther MK, et al. Pip/Tazo + Vancomycin and AKI: Meta-analysis. Crit Care Med. 2018.',
      'Pediamécum AEP. Piperacilina/Tazobactam. Asociación Española de Pediatría.',
      'Sanford Guide to Antimicrobial Therapy. 2024.',
    ],
  },

});
