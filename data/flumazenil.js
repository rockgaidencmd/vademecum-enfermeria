/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/flumazenil.js
   Fuentes: CIMA AEMPS (Anexate, Flumazenil Kern),
   FDA DailyMed, Red Antídotos AEMPS
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'flumazenil',
  nombre:         'Flumazenil',
  nombreGenerico: 'Flumazenil',
  categoria:      'otros',
  tags:           ['antídoto', 'benzodiacepinas', 'urgencias', 'reversión', 'midazolam', 'diazepam'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antídoto benzodiacepinas. RIESGO DE CONVULSIONES en pacientes con: uso crónico de benzos, epilépticos tratados con benzos, intoxicación mixta con antidepresivos tricíclicos, cocaína, tramadol. Titular con precaución.',

  nivel1: {

    puntosClave: [
      'Antagonista competitivo específico de receptores BENZODIACEPÍNICOS en el complejo GABA-A → revierte efectos hipnóticos y sedantes.',
      '<b>ANTÍDOTO ESPECÍFICO en sobredosis por benzodiacepinas</b> (midazolam, diazepam, lorazepam, alprazolam, clonazepam, zolpidem, zopiclona).',
      'Vida media MUY CORTA (40-80 min) — <b>MUCHO MENOR</b> que la mayoría de benzos → RIESGO ALTO DE RE-SEDACIÓN.',
      '<b>RIESGO DE CONVULSIONES</b> en: usuarios crónicos de benzos (dependientes), pacientes epilépticos con benzos, sobredosis mixta con antidepresivos tricíclicos o cocaína.',
      'NO efectivo contra depresión SNC por opiáceos, alcohol, barbitúricos, antipsicóticos.',
    ],

    resumenRapido: 'Antagonista competitivo puro y específico de receptores benzodiacepínicos (sitio de unión BZD del receptor GABA-A). Revierte los efectos sedantes, hipnóticos, ansiolíticos, amnésicos, miorrelajantes y anticonvulsivantes de las benzodiacepinas. NO revierte efectos de otros depresores SNC. Inicio IV: 1-2 min · Pico: 6-10 min · Duración: 45-90 min. Indicado en: reversión de sedación consciente/anestesia por benzos, sobredosis por benzos (diagnóstico y tratamiento), coma de origen desconocido (diagnóstico diferencial).',

    objetivoTerapeutico: 'Revertir sedación por benzodiacepinas · Restaurar respiración efectiva y consciencia · Diagnóstico diferencial en coma · Facilitar recuperación post-endoscopia/cardioversión',

    preparacion: {
      'Presentación':             '<b>Flumazenil 0.1 mg/mL solución inyectable</b> - ampolla 5 mL (0.5 mg) o 10 mL (1 mg)',
      'Diluyente':                'SF 0.9% · SG 5% · Ringer Lactato (compatibles)',
      'Dilución IV directa':      'Sin diluir habitualmente o + 5-10 mL SF para titulación',
      'Dilución perfusión continua':'<b>2.5 mg (25 mL) en 250 mL SF/SG5% → 10 mcg/mL</b>',
      'Vía':                      'IV exclusiva',
      '⏱️ DOSIS INICIAL sedación consciente': '<b>0.2 mg IV en 15 seg</b>',
      '⏱️ REPETIR c/60 seg si no respuesta':  '0.1 mg IV c/60 seg',
      '⏱️ DOSIS TOTAL habitual':   '0.3-1 mg (raramente > 1 mg)',
      '⏱️ SOBREDOSIS benzodiacepinas': '<b>0.3 mg IV inicial, repetir 0.3 mg c/60 seg hasta 3 mg</b>',
      '⏱️ PERFUSIÓN CONTINUA':    '<b>0.1-0.4 mg/h IV</b> (evita re-sedación con benzos vida media larga)',
      '⏱️ DOSIS MÁXIMA acumulada': '<b>3 mg en 1 hora · 5 mg total</b>',
      'Bomba':                    'Necesaria para perfusión continua',
      '🧊 ESTABILIDAD':           '<b>24 horas a 25°C y 24-48 horas refrigerada</b> en SF/SG5%',
      '🧊 Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'CONFIRMAR sospecha de sedación/sobredosis por BENZODIACEPINAS.',
        'Descartar otras causas: opioides (naloxona en cambio), alcohol, hipoglucemia, hipoxia.',
        '<b>Revisar antecedentes: uso crónico de benzos, epilepsia, sobredosis mixta con TCA o cocaína (CONTRAINDICACIÓN o precaución EXTREMA).</b>',
        'ABC: garantizar vía aérea, ventilación asistida si necesario.',
        'Acceso IV permeable.',
        'ECG y monitor continuo — riesgo arritmias y convulsiones.',
        'Tener disponible: benzodiacepinas (para tratar convulsiones si aparecen paradójicamente).',
        'Doble verificación: dosis, dilución.',
      ],
      durante: [
        '<b>TITULACIÓN: 0.2 mg IV en 15 seg, luego 0.1 mg c/60 seg</b>.',
        'Monitor continuo: nivel de consciencia, FR, SpO₂, PA, FC, ECG.',
        '<b>VIGILAR CONVULSIONES</b> — pueden aparecer al pasar el efecto benzo o por reversión brusca.',
        'Si convulsiones: <b>NO administrar más flumazenil</b>, dar benzodiacepina (paradójicamente).',
        'Vigilar HTA leve, taquicardia, ansiedad post-reversión (menos severo que naloxona).',
        'Vigilar reaparición de sedación durante infusión.',
      ],
      despues: [
        '<b>VIGILANCIA MÍNIMO 2-4 HORAS post-última dosis</b> (más si benzo de vida media larga: diazepam, clonazepam).',
        '<b>RIESGO DE RE-SEDACIÓN</b> importante cuando pase efecto de flumazenil (45-90 min).',
        'En sobredosis con benzo de vida media larga: <b>PERFUSIÓN CONTINUA</b>.',
        'Vigilar signos de abstinencia en usuarios crónicos: agitación, ansiedad extrema, convulsiones.',
        'Evaluar signos de aspiración pulmonar.',
        'Consulta con toxicología / psiquiatría si sobredosis intencional.',
        'Documentar dosis total administrada y respuesta.',
        'NO recomendar conducir/manejar máquinas 24h post-reversión.',
      ],
      suspender: [
        '<b>CONVULSIONES</b> - suspender inmediatamente, tratar con benzo.',
        'Arritmia ventricular.',
        'HTA severa refractaria.',
        'Agitación severa incontrolable.',
        'Dosis acumulada > 5 mg sin respuesta - sospechar otra etiología.',
        'Respuesta clínica adecuada (consciencia, FR > 12).',
      ],
    },

    incompatibilidades: [
      'Generalmente bien tolerado en compatibilidades.',
      'Soluciones alcalinas - verificar antes.',
      'Aciclovir - incompatibilidad documentada.',
      'Generalmente NO mezclar con otros medicamentos en misma jeringa.',
      'Lavar línea con SF antes y después.',
    ],

    alertasSeguridad: [
      '🔴 <b>CONVULSIONES</b> - especialmente en usuarios crónicos de benzos, epilépticos con benzos, sobredosis mixta con antidepresivos tricíclicos o cocaína.',
      '🔴 <b>RIESGO DE RE-SEDACIÓN</b> por vida media corta - vigilancia 2-4h mínimo.',
      '🔴 En sobredosis con benzo de vida media LARGA (diazepam, clonazepam): perfusión continua.',
      '🟠 CONTRAINDICADO en: intoxicación mixta con TCA, cocaína, tramadol.',
      '🟠 En dependientes crónicos: síndrome de abstinencia agudo (agitación severa, convulsiones).',
      '🟠 En pacientes epilépticos tratados con benzos: pueden aparecer convulsiones.',
      '🟠 Reversión de sedación puede exponer dolor previamente enmascarado.',
      '🟡 NO efectivo contra: opioides, alcohol, barbitúricos, antipsicóticos, GHB.',
      '🟡 Náuseas, vómitos frecuentes post-reversión.',
      '🟡 Ansiedad, agitación, sudoración post-reversión.',
    ],
  },

  modulos: {

    contraindicaciones: `
      <b>Contraindicaciones y Precauciones Especiales de Flumazenil:</b><br/>
      <b>CONTRAINDICACIÓN ABSOLUTA:</b><br/>
      • <b>Sobredosis mixta con antidepresivos tricíclicos (ATC)</b>: amitriptilina, imipramina, clomipramina, nortriptilina. Los ATC causan convulsiones y arritmias; las benzos las suprimen. Revertir benzos con flumazenil puede desencadenar convulsiones/arritmias fatales.<br/>
      • Signos de intoxicación por ATC: QRS ancho > 100 ms, arritmias, convulsiones, coma profundo.<br/><br/>
      <b>CONTRAINDICACIÓN RELATIVA (evitar salvo riesgo vital):</b><br/>
      • <b>Uso crónico de benzos</b> (dependencia): riesgo de síndrome de abstinencia agudo con convulsiones.<br/>
      • <b>Epilepsia tratada con benzos</b>: revertir puede precipitar estado epiléptico.<br/>
      • <b>Sobredosis mixta con cocaína, tramadol, isoniazida, teofilina</b>: fármacos proconvulsivantes.<br/>
      • Hipertensión intracraneal (revertir puede ↑ PIC).<br/>
      • Trauma craneal reciente.<br/>
      • Sobredosis con desconocimiento del fármaco (evitar si no seguro que sea benzo pura).<br/><br/>
      <b>SITUACIONES DE ALTA VIGILANCIA:</b><br/>
      • Convulsiones febriles previas.<br/>
      • Alcoholismo crónico.<br/>
      • Politoxicomanías.<br/><br/>
      <b>ANTES DE ADMINISTRAR:</b><br/>
      1. ECG - buscar QRS ancho (ATC).<br/>
      2. Anamnesis dirigida a fármacos habituales.<br/>
      3. Descartar epilepsia crónica.<br/>
      4. Descartar politoxicomanía.<br/>
      5. Si duda: soporte respiratorio en lugar de flumazenil.
    `,

    resedacion: `
      <b>Prevención de Re-sedación por Benzodiacepinas:</b><br/>
      <b>PROBLEMA:</b><br/>
      • Vida media flumazenil: 45-90 min.<br/>
      • Vida media benzos:<br/>
      • Midazolam: 2-6h (más si obesidad, cirrosis).<br/>
      • Diazepam: 20-100h (¡extrema!).<br/>
      • Lorazepam: 10-20h.<br/>
      • Alprazolam: 6-27h.<br/>
      • Clonazepam: 18-50h.<br/>
      • Zolpidem: 1.5-4h.<br/><br/>
      <b>Al pasar el efecto de flumazenil, si aún hay benzo activa → re-sedación, apnea, muerte.</b><br/><br/>
      <b>ESTRATEGIA:</b><br/>
      <b>1. Perfusión continua de flumazenil:</b><br/>
      • Indicada en sobredosis con: diazepam, clonazepam, alprazolam, lorazepam.<br/>
      • Dosis: <b>0.1-0.4 mg/h IV</b>.<br/>
      • Dilución: 2.5 mg (5 amp 5 mL) en 250 mL SF → 10 mcg/mL a 10-40 mL/h.<br/>
      • Duración: hasta que se metabolice el benzo (12-72h según fármaco).<br/><br/>
      <b>2. Observación mínima 4h</b> tras última dosis (con benzo de acción corta).<br/>
      <b>3. En diazepam o clonazepam: 24-48h de vigilancia en UCI</b>.<br/>
      <b>4. Vigilancia intensiva:</b><br/>
      • Nivel de consciencia c/15-30 min.<br/>
      • FR, SpO₂ continuos.<br/>
      • Repetir bolos de flumazenil si re-sedación.<br/><br/>
      <b>EDUCAR AL PACIENTE:</b><br/>
      • Riesgo de re-sedación.<br/>
      • NO consumir más benzos en 24-48h.<br/>
      • NO alcohol en 24h.<br/>
      • NO conducir/manejar máquinas 24h.
    `,

    convulsiones: `
      <b>Convulsiones por Flumazenil - Manejo:</b><br/>
      <b>MECANISMO:</b><br/>
      • Reversión brusca del efecto GABA (inhibidor) → hiperexcitabilidad SNC.<br/>
      • Especialmente peligroso en: usuarios crónicos, epilépticos, sobredosis mixta.<br/><br/>
      <b>FACTORES DE RIESGO:</b><br/>
      • Sobredosis mixta con antidepresivos tricíclicos (ATC).<br/>
      • Cocaína, tramadol, isoniazida.<br/>
      • Epilepsia previa.<br/>
      • Dependencia crónica a benzos.<br/>
      • Reversión demasiado rápida.<br/>
      • Dosis elevadas de flumazenil.<br/><br/>
      <b>PRESENTACIÓN:</b><br/>
      • Convulsiones tónico-clónicas generalizadas.<br/>
      • Estado epiléptico refractario en casos graves.<br/>
      • Pueden aparecer minutos-horas post-flumazenil.<br/><br/>
      <b>MANEJO:</b><br/>
      1. <b>SUSPENDER flumazenil</b> inmediatamente.<br/>
      2. ABC - proteger vía aérea, O₂.<br/>
      3. <b>PARADÓJICAMENTE: DAR BENZODIACEPINA</b>:<br/>
      • Midazolam 5-10 mg IV o<br/>
      • Diazepam 10 mg IV o<br/>
      • Lorazepam 4 mg IV.<br/>
      4. Si refractario:<br/>
      • Fenitoína 15-20 mg/kg IV.<br/>
      • Fenobarbital.<br/>
      • Levetiracetam 20-40 mg/kg IV.<br/>
      5. Si estado epiléptico: propofol/tiopental + IOT.<br/>
      6. Reevaluar necesidad de más flumazenil (probablemente NO).<br/>
      7. Consulta con toxicología.<br/><br/>
      <b>PREVENCIÓN:</b><br/>
      • ECG previo (descartar ATC por QRS ancho).<br/>
      • Anamnesis de dependencia crónica.<br/>
      • Titulación lenta.<br/>
      • Evitar dosis grandes de golpe.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>Tener flumazenil en carro de paro y junto a benzodiacepinas</b>.',
      'Verificar ampolla 0.1 mg/mL antes de administrar.',
      '<b>ANAMNESIS DIRIGIDA</b>: uso crónico de benzos, epilepsia, ATC, cocaína.',
      'ECG previo - buscar QRS ancho (ATC = contraindicación).',
      'Diluir para titulación o usar sin diluir.',
      'Etiquetar: Flumazenil [mg], dilución, vía, hora.',
      'Preparar equipo de reanimación: ambú, O₂, aspiración.',
      '<b>PREPARAR BENZODIACEPINA</b> (midazolam) por si aparecen convulsiones.',
      'Monitor continuo: nivel consciencia, FR, SpO₂, PA, FC, ECG.',
      'Titulación: 0.2 mg en 15 seg, luego 0.1 mg c/60 seg.',
      'NO superar 3 mg en 1 hora, 5 mg total.',
      'Vigilar convulsiones - SI aparecen, SUSPENDER flumazenil + dar benzo.',
      'Vigilancia mínima 2-4h post-última dosis (más si benzo de VM larga).',
      'Perfusión continua si sobredosis con diazepam/clonazepam.',
      'Documentar: cada dosis, hora, respuesta, eventos.',
      'Educar al paciente: no conducir 24h, riesgo re-sedación.',
      'En sobredosis intencional: consulta psiquiatría antes del alta.',
    ],

    efectosAdversos: [
      '🔴 Convulsiones tónico-clónicas',
      '🔴 Estado epiléptico',
      '🔴 Arritmias cardíacas',
      '🔴 Muerte súbita (por convulsiones/arritmias en sobredosis mixta)',
      '🟠 Síndrome de abstinencia agudo (dependientes)',
      '🟠 HTA moderada',
      '🟠 Taquicardia',
      '🟠 Agitación, ansiedad',
      '🟡 Náuseas, vómitos frecuentes',
      '🟡 Mareos',
      '🟡 Cefalea',
      '🟡 Sudoración',
      '🟡 Rubor cutáneo',
      '🟡 Temblor',
      '🟡 Visión borrosa transitoria',
      '🟡 Reacción en sitio inyección',
    ],

    contraindicaciones: [
      'Hipersensibilidad a flumazenil o excipientes.',
      '<b>Sobredosis mixta con antidepresivos tricíclicos</b> (CONTRAINDICACIÓN ABSOLUTA - riesgo convulsiones/arritmias fatales).',
      '<b>Pacientes que reciben benzodiacepinas para tratar patología potencialmente mortal</b> (epilepsia, hipertensión intracraneal).',
      'Dependencia crónica de benzodiacepinas (relativa - riesgo abstinencia).',
      'Sobredosis mixta con cocaína, tramadol, isoniazida, teofilina (proconvulsivantes).',
      'Hipertensión intracraneal.',
      'Trauma craneal reciente.',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente sin requerimientos especiales.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente (15-25°C) hasta vencimiento',
      'Diluida en SF/SG 5%/RL':    '<b>24 horas a 25°C · 24-48h refrigerada</b>',
      'Post-apertura':              'Usar inmediatamente (microbiológicamente)',
      'Aspecto':                    'Transparente, incolora — desechar si turbidez',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Anexate® 0.1 mg/mL ampolla 5 mL (0.5 mg) - Roche',
      'Anexate® 0.1 mg/mL ampolla 10 mL (1 mg)',
      'Flumazenil Kern Pharma 0.1 mg/mL (genérico)',
      'Flumazenil Normon 0.1 mg/mL (genérico)',
      'Flumazenil Accord 0.1 mg/mL',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Reversión sedación consciente',       dosis: '<b>0.2 mg IV en 15 seg</b>',                via: 'IV' },
      { indicacion: 'Repetir si no respuesta',              dosis: '0.1 mg IV c/60 seg (máx 1 mg)',            via: 'IV' },
      { indicacion: 'Sobredosis benzodiacepinas',           dosis: '<b>0.3 mg IV inicial + 0.3 mg c/60 seg</b>',via: 'IV' },
      { indicacion: 'Perfusión continua (evitar re-sedac.)',dosis: '<b>0.1-0.4 mg/h IV</b>',                    via: 'IV' },
      { indicacion: 'Pediátrico',                            dosis: '0.01 mg/kg IV (máx 0.2 mg/dosis)',         via: 'IV' },
      { indicacion: 'Dosis máxima total 1 hora',             dosis: '<b>3 mg</b>',                               via: 'IV' },
      { indicacion: 'Dosis máxima acumulada',                dosis: '<b>5 mg total</b>',                         via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Atraviesa placenta. Uso en emergencias maternas. En sobredosis de embarazada por benzo con riesgo vital: usar con precaución. Compatible con lactancia (mínima excreción).',

    pediatria: 'Uso en > 1 año. Dosis: 0.01 mg/kg IV (máximo 0.2 mg/dosis). Repetir c/60 seg hasta respuesta (máximo 4 dosis). Uso principal: reversión de sedación tras procedimientos con midazolam.',

    adultoMayor: 'Mayor sensibilidad - iniciar con dosis menor. Vigilar arritmias, HTA. Mayor riesgo de re-sedación (menor aclaramiento de benzos).',

    insufRenal: 'Sin ajuste específico. Metabolismo principalmente hepático.',

    insufHepatica: 'En cirrosis: aclaramiento reducido, vida media prolongada. Reducir dosis en 30-50%. Vigilancia clínica intensiva.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Anexate® 0.1 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Flumazenil Kern Pharma. AEMPS.',
      'FDA DailyMed. Flumazenil Injection. U.S. National Library of Medicine.',
      'Red de Antídotos AEMPS. Flumazenil - Protocolo de Uso.',
      'Weinbroum AA, et al. Flumazenil in Benzodiazepine Overdose. Drug Saf. 1997.',
      'Seger DL. Flumazenil - Treatment or Toxin. J Toxicol Clin Toxicol. 2004.',
      'Goldfrank\'s Toxicologic Emergencies. Benzodiazepines Section. 11th ed. 2019.',
      'ASA Guidelines. Practice Guidelines for Procedural Sedation. Anesthesiology. 2018.',
    ],
  },

});
