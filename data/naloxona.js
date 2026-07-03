/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/naloxona.js
   Fuentes: CIMA AEMPS (Naloxona Accord, Kern, B. Braun),
   FDA DailyMed, Red Antídotos AEMPS, AHA ACLS 2020
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'naloxona',
  nombre:         'Naloxona',
  nombreGenerico: 'Naloxone Hydrochloride',
  categoria:      'otros',
  tags:           ['antídoto', 'opioides', 'urgencias', 'depresión respiratoria', 'sobredosis', 'reversión'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antídoto de opioides. Reversión BRUSCA puede causar HTA severa, taquicardia ventricular, fibrilación auricular, edema pulmonar y síndrome de abstinencia agudo. Titular dosis con precaución.',

  nivel1: {

    puntosClave: [
      'Antagonista competitivo puro de receptores opioides (μ, κ, δ) — REVIERTE efectos de morfina, fentanilo, tramadol, metadona, heroína.',
      '<b>ANTÍDOTO ESPECÍFICO en depresión respiratoria por opioides</b> — dosis-titulada según respuesta clínica.',
      'Vida media CORTA (30-90 min) — <b>MENOR QUE MUCHOS OPIOIDES</b> (morfina, metadona) → RIESGO DE RESEDACIÓN al pasar el efecto. Vigilancia 4-6h mínimo.',
      'Reversión BRUSCA es peligrosa: HTA severa, TV, FV, edema pulmonar, dolor agudo, síndrome de abstinencia. TITULAR SIEMPRE.',
      'NO es efectiva contra depresión SNC por hipnóticos, benzodiacepinas, alcohol o barbitúricos.',
    ],

    resumenRapido: 'Antagonista opioide puro derivado semisintético de la morfina. Desplaza a los agonistas opioides de sus receptores (μ, κ, δ) revirtiendo TODOS sus efectos: depresión respiratoria, sedación, miosis, analgesia. Inicio IV: 1-2 min · IM/SC: 2-5 min · IN: 3-5 min. Duración: 30-90 min (más corta que la mayoría de opioides). Indicado en: sobredosis por opioides (SNC + respiratoria), reversión de depresión respiratoria post-anestesia, diagnóstico diferencial de coma de origen desconocido, reversión de sedación por opioides en pediatría.',

    objetivoTerapeutico: 'Restaurar respiración efectiva (FR ≥ 12) sin abstinencia aguda · Revertir depresión SNC por opioides · Antídoto en sobredosis · Diagnóstico diferencial de coma',

    preparacion: {
      'Presentación':             '<b>Naloxona 0.4 mg/mL solución inyectable</b> - ampolla 1 mL',
      'Presentación jeringa precargada':'Naloxona 0.4 mg/1 mL jeringa precargada (uso ambulatorio/servicios emergencia)',
      'Presentación intranasal':   'Naloxona nasal 4 mg/0.1 mL (Nyxoid®) - uso comunitario/prehospitalario',
      'Diluyente':                'SF 0.9% · SG 5% (ambos compatibles)',
      'Dilución titulación IV':   '<b>1 ampolla (0.4 mg) + 9 mL SF → 0.04 mg/mL</b> (10 mL para titular)',
      'Dilución perfusión continua':'<b>2 mg (5 amp) en 500 mL SF/SG5% → 4 mcg/mL</b>',
      'Vía':                      'IV (preferida en urgencias), IM, SC, IN (intranasal), ET (intratraqueal si no IV)',
      '⏱️ SOBREDOSIS opiodes (con paro respiratorio)': '<b>0.4-2 mg IV bolo</b> (según severidad)',
      '⏱️ TITULACIÓN sin paro (mejor en post-op)': '<b>0.04-0.1 mg IV c/2 min</b> hasta FR > 12 rpm',
      '⏱️ REPETIR bolo':           'Cada 2-3 minutos hasta respuesta o dosis acumulada 10 mg',
      '⏱️ PERFUSIÓN CONTINUA':    '<b>2/3 de la dosis inicial efectiva/hora</b> (típico 0.25-6.25 mcg/kg/h)',
      '⏱️ IM/SC (sin acceso IV)':  '0.4-0.8 mg IM/SC (inicio 2-5 min)',
      '⏱️ IN prehospitalario':     '<b>2-4 mg IN</b> (1 pulverización en cada fosa, repetir c/2-3 min)',
      '⏱️ Pediátrico':             '0.01 mg/kg IV (repetir c/2-3 min, máximo 2 mg)',
      'Bomba':                    'Necesaria para perfusión continua',
      '🧊 ESTABILIDAD ampolla':   'Temperatura ambiente hasta vencimiento',
      '🧊 ESTABILIDAD diluida':   '<b>24-36 horas a 2-25°C</b> (CIMA AEMPS)',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'CONFIRMAR sospecha de sobredosis por OPIOIDES (miosis puntiforme, depresión respiratoria, coma).',
        'Descartar otras causas de depresión SNC: hipoglucemia, hipoxia, TCE, ACV, benzos, alcohol.',
        'ABC: Airway, Breathing, Circulation - ventilación asistida con ambú si apnea.',
        'Preparar equipo de intubación y aspiración.',
        'Acceso IV permeable (si no, IM/SC/IN).',
        'ECG y monitor continuo — riesgo arritmias con reversión brusca.',
        'Tener disponible: adrenalina, atropina, benzodiacepinas (para agitación post-reversión).',
        'Considerar dosis previa de opioide (fentanilo/metadona duran más que naloxona).',
      ],
      durante: [
        '<b>TITULAR dosis según respuesta clínica</b> - NO administrar dosis grande de golpe.',
        'FR objetivo: <b>≥ 12 rpm</b> con SpO₂ > 92% (no buscar despertar completo si riesgo abstinencia).',
        'Monitor continuo: FR, SpO₂, PA, FC, ECG.',
        'Vigilar SÍNDROME DE ABSTINENCIA AGUDO: agitación, dolor, sudoración, midriasis, HTA, taquicardia, vómitos.',
        'Si HTA severa post-reversión: nitroglicerina o labetalol.',
        'Si arritmia (TV/FV): tratamiento ACLS estándar.',
        'Si edema pulmonar (raro pero descrito): O₂, diuréticos, VNI.',
        'Si convulsiones post-reversión: benzodiacepinas.',
        'Documentar dosis exacta y respuesta a cada bolo.',
      ],
      despues: [
        '<b>VIGILANCIA MÍNIMO 4-6 HORAS post-última dosis</b> (más si opioide de vida media larga: metadona, buprenorfina).',
        '<b>RIESGO DE RESEDACIÓN</b> cuando pase efecto de naloxona (30-90 min) y aún hay opioide activo.',
        'En sobredosis con metadona/buprenorfina: <b>PERFUSIÓN CONTINUA de naloxona</b> puede requerirse 24-72h.',
        'Vigilar reaparición de miosis, ↓ FR, ↓ SpO₂.',
        'Evaluar signos de aspiración pulmonar.',
        'Documentar dosis total administrada y respuesta.',
        'Consulta con toxicología / psiquiatría según etiología (sobredosis intencional, accidental, uso crónico).',
        'Si paciente rechaza ingreso: explicar RIESGO DE RESEDACIÓN, dar seguimiento cercano.',
      ],
      suspender: [
        'FR estable > 12 rpm sin necesidad de repetir dosis por 4-6h.',
        'HTA severa refractaria (PAS > 200) atribuible a reversión.',
        'Taquicardia ventricular sostenida.',
        'Edema pulmonar agudo.',
        'Convulsiones severas.',
        'Dosis acumulada > 10 mg sin respuesta - sospechar otra causa (no opioide, benzodiacepina asociada).',
      ],
    },

    incompatibilidades: [
      '<b>NO MEZCLAR con bisulfito, metabisulfito</b>.',
      '<b>NO MEZCLAR con aniones de cadena larga o alto peso molecular</b>.',
      '<b>NO MEZCLAR con soluciones de pH alcalino</b> (bicarbonato).',
      'Anfotericina B - incompatibilidad.',
      'Cefalosporinas - verificar antes de mezclar.',
      'Generalmente NO mezclar con otros medicamentos en misma jeringa/línea.',
      'Lavar línea con SF antes y después.',
    ],

    alertasSeguridad: [
      '🔴 <b>SÍNDROME DE ABSTINENCIA AGUDO</b> en pacientes dependientes de opioides — agitación, HTA, taquicardia, vómitos, midriasis, convulsiones (menos común).',
      '🔴 REVERSIÓN BRUSCA: HTA severa, TV, FV, edema pulmonar agudo (postoperatorio).',
      '🔴 <b>RIESGO DE RESEDACIÓN</b> tras 30-90 min por vida media corta — vigilancia 4-6h mínimo.',
      '🔴 En sobredosis con opioides de vida media LARGA (metadona, buprenorfina, fentanilo transdérmico): puede requerir PERFUSIÓN CONTINUA 24-72h.',
      '🟠 EN EMBARAZO: puede precipitar síndrome de abstinencia fetal severo — solo en riesgo vital materno.',
      '🟠 NO efectiva contra depresión por benzos, alcohol, barbitúricos, hipnóticos.',
      '🟠 Buprenorfina: reversión INCOMPLETA (alta afinidad receptor) — dosis mayores requeridas.',
      '🟡 Náuseas, vómitos frecuentes post-reversión.',
      '🟡 Dolor agudo tras reversión — reversión de analgesia opiácea.',
      '🟡 Sudoración, temblor, ansiedad.',
    ],
  },

  modulos: {

    sobredosis: `
      <b>Naloxona en Sobredosis por Opioides:</b><br/>
      <b>SOSPECHA CLÍNICA:</b><br/>
      • Triada clásica: <b>MIOSIS puntiforme + DEPRESIÓN RESPIRATORIA + ↓ nivel de consciencia</b>.<br/>
      • FR < 12 rpm, apnea.<br/>
      • Cianosis, hipoxia.<br/>
      • Coma con Glasgow bajo.<br/>
      • Marcas de venopunción (heroína IV).<br/>
      • Fentanilo transdérmico visible.<br/><br/>
      <b>MANEJO ABC PRIMERO:</b><br/>
      1. <b>VÍA AÉREA</b>: aspirar, cánula orofaríngea si necesario.<br/>
      2. <b>VENTILACIÓN</b>: ambú + O₂ 100% si apnea o FR < 8.<br/>
      3. <b>CIRCULACIÓN</b>: acceso IV, fluidos si hipotensión.<br/><br/>
      <b>DOSIS NALOXONA según situación:</b><br/>
      <b>Con paro respiratorio (apnea, GCS 3-6):</b><br/>
      • <b>0.4-2 mg IV bolo</b> inmediato.<br/>
      • Repetir cada 2-3 min hasta FR > 12.<br/>
      • Máximo 10 mg acumulados sin respuesta → considerar otra etiología.<br/><br/>
      <b>Sin paro (respiración presente pero deprimida):</b><br/>
      • <b>TITULACIÓN: 0.04-0.1 mg IV c/2 min</b>.<br/>
      • Objetivo: FR > 12 sin abstinencia aguda.<br/>
      • Diluir ampolla 0.4 mg + 9 mL SF → administrar 1-2 mL c/vez.<br/><br/>
      <b>Sin acceso IV:</b><br/>
      • IM/SC: 0.4-0.8 mg.<br/>
      • Intranasal: 2-4 mg (Nyxoid® o dispositivo MAD).<br/><br/>
      <b>PERFUSIÓN CONTINUA</b> en:<br/>
      • Sobredosis con metadona (vida media 24-48h).<br/>
      • Buprenorfina.<br/>
      • Fentanilo transdérmico.<br/>
      • Recaída tras primer bolo.<br/>
      • <b>Dosis: 2/3 de la dosis inicial efectiva/hora IV</b>.<br/><br/>
      <b>VIGILANCIA POST-REVERSIÓN:</b><br/>
      • Monitorización 4-6h mínimo.<br/>
      • Riesgo alto de re-sedación.<br/>
      • Considerar UCI si opioide de vida media larga.
    `,

    abstinencia: `
      <b>Síndrome de Abstinencia Aguda por Naloxona:</b><br/>
      <b>OCURRE EN:</b> Pacientes dependientes de opioides (crónicos, adictos).<br/><br/>
      <b>SIGNOS:</b><br/>
      • <b>Sistema nervioso</b>: agitación, ansiedad, irritabilidad extrema, insomnio.<br/>
      • <b>Cardiovascular</b>: HTA, taquicardia, sudoración profusa.<br/>
      • <b>Digestivo</b>: náuseas intensas, vómitos, diarrea, dolor abdominal.<br/>
      • <b>Muscular</b>: mialgias, calambres, temblor, piloerección ("carne de gallina").<br/>
      • <b>Ocular</b>: MIDRIASIS (opuesto al efecto opioide), lagrimeo.<br/>
      • <b>Otros</b>: rinorrea, bostezos.<br/>
      • Raramente: convulsiones, arritmias.<br/><br/>
      <b>MANEJO:</b><br/>
      1. Ambiente tranquilo, baja luz.<br/>
      2. Explicar al paciente qué está pasando.<br/>
      3. Fluidos IV si vómitos/diarrea.<br/>
      4. Benzodiacepinas (midazolam 1-2 mg IV) si agitación severa.<br/>
      5. Clonidina 0.1-0.2 mg VO (si HTA leve).<br/>
      6. Antieméticos (ondansetrón).<br/>
      7. NO administrar más opioides para calmar (contraindicado en sobredosis).<br/><br/>
      <b>PREVENCIÓN:</b><br/>
      • En pacientes con sospecha de dependencia crónica: <b>DILUIR y TITULAR</b> (0.04 mg c/2 min) en lugar de bolo grande.<br/>
      • Objetivo: revertir SOLO la depresión respiratoria, no el resto de efectos opioides.
    `,

    resedacion: `
      <b>Prevención de Re-sedación tras Naloxona:</b><br/>
      <b>PROBLEMA:</b><br/>
      • Vida media naloxona: 30-90 min.<br/>
      • Vida media opioides:<br/>
      • Morfina IV: 2-4h.<br/>
      • Fentanilo IV: 3-4h (± acumulación).<br/>
      • Metadona: 24-48h (¡extremo!).<br/>
      • Buprenorfina: 24-72h.<br/>
      • Oxicodona/Hidrocodona VO: 4-6h.<br/>
      • Heroína: 4-6h.<br/><br/>
      <b>Cuando pasa efecto de naloxona → paciente puede volver a sedarse y detenerse la respiración.</b><br/><br/>
      <b>ESTRATEGIA:</b><br/>
      <b>1. Perfusión continua de naloxona:</b><br/>
      • Cálculo: <b>2/3 de la dosis inicial efectiva por hora</b>.<br/>
      • Ejemplo: paciente respondió con 2 mg IV → perfusión 1.3 mg/h.<br/>
      • Dilución: 2 mg (5 amp) en 500 mL SG 5% → 4 mcg/mL a 5-25 mL/h.<br/>
      • Duración: hasta que se metabolice el opioide (12-48h según fármaco).<br/><br/>
      <b>2. Observación 4-6h mínimo</b> tras última dosis IV.<br/>
      <b>3. En metadona/buprenorfina/fentanilo transdérmico:</b> 24-72h de UCI.<br/>
      <b>4. Vigilancia intensiva:</b><br/>
      • FR, SpO₂ continuos.<br/>
      • Nivel de consciencia c/15-30 min.<br/>
      • Pupilas (miosis = opioide activo).<br/>
      • Repetir bolos de naloxona si re-sedación.<br/><br/>
      <b>EDUCAR AL PACIENTE si rechaza ingreso:</b><br/>
      • Riesgo grave de re-sedación y muerte.<br/>
      • NO consumir más opioides en 24-48h.<br/>
      • Vigilancia por familiar/acompañante.<br/>
      • Programa de deshabituación / trabajador social / centro drogodependencias.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>SIEMPRE tener naloxona en carro de paro y armario de estupefacientes junto al opioide</b>.',
      'Verificar ampolla 0.4 mg/mL antes de administrar.',
      'Diluir para TITULACIÓN: 0.4 mg + 9 mL SF → 0.04 mg/mL.',
      'Etiquetar: Naloxona [mg], dilución, vía, hora.',
      '<b>Preparar equipo de reanimación</b>: ambú, O₂, aspiración, intubación.',
      'Monitor continuo: FR, SpO₂, PA, FC, ECG.',
      'Titular dosis - NO administrar todo de golpe (evita abstinencia y complicaciones CV).',
      'Objetivo: FR > 12, no despertar completo.',
      'Documentar: cada dosis, hora, respuesta clínica.',
      '<b>VIGILANCIA MÍNIMO 4-6h post-última dosis</b> (más si opioide de vida media larga).',
      'Preparar perfusión continua si sobredosis con metadona, buprenorfina, fentanilo transdérmico.',
      'Educar al paciente: NO conducir/manejar máquinas 24h post-reversión (riesgo re-sedación).',
      'En sospecha de sobredosis intencional: consulta psiquiatría antes del alta.',
      'Considerar naloxona intranasal (Nyxoid®) para uso ambulatorio en adictos.',
      'No suspender medicación de dependencia previa sin plan terapéutico.',
    ],

    efectosAdversos: [
      '🔴 Síndrome de abstinencia agudo (en dependientes)',
      '🔴 HTA severa (reversión brusca)',
      '🔴 Taquicardia ventricular, fibrilación auricular',
      '🔴 Edema pulmonar agudo (postoperatorio)',
      '🔴 Convulsiones (raras)',
      '🔴 Paro cardíaco (raro)',
      '🟠 Hipotensión (post-reversión)',
      '🟠 Náuseas, vómitos frecuentes',
      '🟠 Dolor agudo (por reversión de analgesia)',
      '🟠 Agitación, ansiedad',
      '🟡 Sudoración profusa',
      '🟡 Temblor',
      '🟡 Rubor cutáneo',
      '🟡 Cefalea',
      '🟡 Rash cutáneo (raro)',
      '🟡 Dolor en sitio inyección IM',
    ],

    contraindicaciones: [
      'Hipersensibilidad a naloxona (rara).',
      'Sensibilidad al metilparabeno o propilparabeno (excipientes en algunas formulaciones).',
      'Precaución en: dependencia de opioides (riesgo abstinencia), embarazo (síndrome abstinencia fetal), cardiopatía severa.',
      'Sin contraindicaciones absolutas en depresión respiratoria por opioides (riesgo vital > riesgo abstinencia).',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente sin requerimientos especiales.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente (15-25°C) hasta vencimiento',
      'Diluida en SF/SG 5%':       '<b>24-36 horas a 2-25°C</b> (CIMA AEMPS)',
      'Post-apertura':              'Usar inmediatamente (microbiológicamente)',
      'Aspecto':                    'Transparente, incolora — desechar si turbidez',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Naloxona 0.4 mg/mL solución inyectable - ampolla 1 mL',
      'Naloxona 0.4 mg/mL jeringa precargada 1 mL',
      'Naloxona Accord 0.4 mg/mL',
      'Naloxona Kern Pharma 0.4 mg/mL',
      'Naloxona B. Braun 0.4 mg/mL',
      'Nyxoid® 1.8 mg spray nasal (uso comunitario)',
      'Narcan® nasal 4 mg (EEUU) - uso prehospitalario',
      'Autoinyector Evzio® (EEUU)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Sobredosis con apnea (adulto)',       dosis: '<b>0.4-2 mg IV bolo, repetir c/2-3 min</b>',via: 'IV' },
      { indicacion: 'Titulación sin apnea',                 dosis: '<b>0.04-0.1 mg IV c/2 min</b>',            via: 'IV' },
      { indicacion: 'IM/SC (sin acceso IV)',                dosis: '0.4-0.8 mg IM/SC',                          via: 'IM/SC' },
      { indicacion: 'Intranasal comunitario',                dosis: '<b>2-4 mg IN</b> (1 spray/fosa)',           via: 'IN' },
      { indicacion: 'Perfusión continua',                    dosis: '<b>2/3 dosis inicial efectiva/hora</b>',    via: 'IV' },
      { indicacion: 'Pediátrico (< 5 años o < 20 kg)',      dosis: '0.1 mg/kg IV (máx 2 mg)',                   via: 'IV' },
      { indicacion: 'Pediátrico (> 5 años o > 20 kg)',      dosis: '2 mg IV bolo',                              via: 'IV' },
      { indicacion: 'Dosis máxima acumulada',                dosis: '10 mg (si no respuesta, otra etiología)',   via: 'IV' },
      { indicacion: 'Sobredosis metadona/buprenorfina',      dosis: 'Dosis inicial + perfusión continua 24-72h', via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Atraviesa placenta rápidamente. En embarazada con sobredosis: puede precipitar síndrome de ABSTINENCIA FETAL SEVERO (parto prematuro, distrés fetal). <b>Solo si riesgo vital materno</b>. Preferir titulación con dosis pequeñas. Compatible con lactancia (no se excreta significativamente).',

    pediatria: 'Neonatos hijos de madre adicta: 10 mcg/kg IV (evitar en madre en tratamiento crónico - riesgo abstinencia neonatal severa). Niños < 5 años o < 20 kg: 0.1 mg/kg IV. Niños > 5 años: 2 mg IV bolo. Usar mismo protocolo de titulación.',

    adultoMayor: 'Sin ajuste de dosis específico. Mayor riesgo de efectos CV adversos (HTA, arritmias). Titulación más cuidadosa recomendada.',

    insufRenal: 'Sin ajuste específico. En IRC severa: vida media prolongada, puede requerir menos dosis. Vigilancia clínica estándar.',

    insufHepatica: 'Metabolismo hepático (glucuronidación). En cirrosis severa: vida media prolongada (ventaja - menor riesgo de re-sedación). No requiere ajuste rutinario.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Naloxona Accord 0.4 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Naloxona Kern Pharma 0.4 mg/mL. AEMPS.',
      'CIMA AEMPS. Ficha Técnica Naloxona B. Braun 0.4 mg/mL. AEMPS.',
      'FDA DailyMed. Naloxone HCl Injection. U.S. National Library of Medicine.',
      'Red de Antídotos AEMPS. Naloxona - Protocolo de Uso. 2025.',
      'AHA ACLS Guidelines 2020. Opioid Overdose Management. Circulation.',
      'WHO Community Management of Opioid Overdose Guidelines. 2014.',
      'Goldfrank\'s Toxicologic Emergencies. Opioids Section. 11th ed. 2019.',
    ],
  },

});
