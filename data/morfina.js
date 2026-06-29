/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/morfina.js
   Fuentes: FDA DailyMed, CIMA AEMPS, OMS, Micromedex,
   Prospecto Morfina B. Braun, Surviving Sepsis 2021
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'morfina',
  nombre:         'Morfina',
  nombreGenerico: 'Morphine Sulfate / Hydrochloride',
  categoria:      'analgesia',
  tags:           ['UCI', 'opiode', 'analgesia', 'dolor severo', 'IAM', 'cuidados paliativos', 'edema pulmonar'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Opiode potente. Riesgo de depresión respiratoria severa, especialmente combinado con sedantes. Vigilancia respiratoria continua obligatoria. Antídoto: Naloxona 0.4 mg IV.',

  nivel1: {

    puntosClave: [
      'Opiode mayor — agonista μ puro. Analgesia, sedación, depresión respiratoria, miosis, estreñimiento, euforia.',
      '<b>FOTOSENSIBLE</b> — proteger vial y solución preparada de la luz directa (envoltura opaca/papel aluminio).',
      'Administración IV LENTA OBLIGATORIA: 4-5 minutos mínimo — bolo rápido causa apnea, hipotensión severa.',
      'DEPRESIÓN RESPIRATORIA es el efecto adverso más peligroso. Antídoto: NALOXONA 0.4 mg IV (repetir c/2-3 min hasta 10 mg total).',
      'Iniciar profilaxis de estreñimiento simultáneamente — efecto adverso casi universal con opioides.',
    ],

    resumenRapido: 'Opiode mayor de referencia (alcaloide del opio). Agonista μ puro produce analgesia potente, sedación, ansiolisis, euforia. Indicado en dolor severo agudo o crónico (postoperatorio, oncológico, IAM, trauma), edema pulmonar agudo (efecto venodilatador), cuidados paliativos. Inicio IV: 5 min, pico: 15-30 min, duración: 3-5h. Vida media: 2-4h.',

    objetivoTerapeutico: 'Analgesia dolor severo · EVA/EVN < 4/10 · Reducción precarga en edema pulmonar agudo · Sedación leve adyuvante · Confort en paliativos',

    preparacion: {
      'Presentación':             '10 mg/mL ampolla 1 mL (10 mg) · 20 mg/mL ampolla 1 mL (alta concentración)',
      'Presentación alt.':        '2 mg/mL ampolla 5 mL (10 mg total) — uso pediátrico',
      'Diluyente':                'SF 0.9% (preferido) · SG 5% · Agua para inyección',
      'Dilución IV bolo':         '10 mg + 9 mL SF → 1 mg/mL (concentración estándar segura)',
      'Dilución infusión continua':'<b>50 mg en 50 mL SF → 1 mg/mL</b> · o 100 mg en 100 mL SF',
      'PCA (analgesia paciente)': '1 mg/mL · bolos 1-2 mg con lockout 6-10 min',
      'Vía':                      'IV (preferida), SC, IM, epidural, intratecal, oral',
      '⏱️ BOLO IV adulto':         '<b>2-5 mg IV LENTO en 4-5 minutos</b>',
      '⏱️ INFUSIÓN CONTINUA':     '<b>0.5-3 mg/h IV</b> (titular según EVA)',
      '⏱️ IAM (cardio)':           '2-4 mg IV c/5-15 min según dolor',
      '⏱️ Edema pulmonar':         '2-5 mg IV lento c/5-30 min',
      '⏱️ SC':                    '5-10 mg c/4h',
      'Bomba':                    'OBLIGATORIA para infusión continua y PCA',
      '🌑 FOTOPROTECCIÓN':        '<b>OBLIGATORIA — envolver bolsa/jeringa en material opaco</b> (papel aluminio o protector dedicado)',
      '🧊 ESTABILIDAD':           '<b>24 horas a TA (15-25°C) protegida de luz · 7 días refrigerada (2-8°C) protegida de luz</b>',
      'Aspecto':                  'Solución transparente, incolora — desechar si amarillenta o turbidez (oxidación por luz)',
    },

    vigilancia: {
      antes: [
        'Verificar permeabilidad de vía aérea — riesgo depresión respiratoria.',
        'FR, SpO₂, PA, FC, nivel consciencia basales.',
        'Comprobar uso concomitante de otros depresores SNC (benzodiacepinas, alcohol).',
        'Revisar antecedentes: EPOC, asma, hepatopatía, insuficiencia renal.',
        'Acceso IV permeable.',
        'Tener disponible: NALOXONA (antídoto), O₂, ambú, equipo intubación.',
        'Doble verificación: dosis, ampolla (cuidado con la 20 mg/mL — alta concentración), dilución.',
        'En oncológicos crónicos: revisar dosis total diaria (puede ser muy alta por tolerancia).',
      ],
      durante: [
        'FR continua durante administración — OBJETIVO ≥ 12 rpm.',
        'SpO₂ continua — ALERTA si < 94%, ACCIÓN si < 90%.',
        'PA c/5-10 min — vigilar hipotensión (especialmente con bolo rápido).',
        'Vigilar nivel de consciencia — sedación esperada, confusión NO.',
        'Observar pupilas — miosis es esperada (pupilas puntiformes).',
        'Sitio IV — vigilar dolor venoso, flebitis (poco común).',
        'En dolor torácico (IAM): monitor cardíaco continuo.',
        'Si depresión respiratoria: estimular, O₂, NALOXONA si severo.',
      ],
      despues: [
        'Continuar monitorización respiratoria 30-60 min post-bolo (más si dosis altas).',
        'Evaluar analgesia con escala EVA/EVN a los 15-30 min.',
        'Documentar FR, SpO₂, PA, nivel consciencia, EVA.',
        '<b>INICIAR PROFILAXIS DE ESTREÑIMIENTO inmediatamente</b> (laxantes osmóticos + estimulantes).',
        'Vigilar náuseas/vómitos — premedicar con antieméticos si dosis altas.',
        'En infusión continua: vigilancia c/4h mínimo, despertar diario en UCI.',
        'En uso > 7 días: vigilancia de síndrome de abstinencia si descenso brusco.',
      ],
      suspender: [
        'FR < 10 rpm sostenida (depresión respiratoria).',
        'SpO₂ < 90% sin reversión con O₂.',
        'Hipotensión severa (PAS < 90 mmHg) refractaria.',
        'Apnea o paro respiratorio — preparar NALOXONA inmediatamente.',
        'Sedación excesiva (Glasgow ≤ 10).',
        'Convulsiones (raro, más con metabolitos en IRC).',
        'Reacción alérgica.',
        'Prescripción médica de descenso/suspensión.',
      ],
    },

    incompatibilidades: [
      'Sangre y derivados — incompatibilidad documentada.',
      'Aminofilina, fenitoína — precipitación.',
      'Furosemida — incompatibilidad en mezcla directa.',
      'Heparina — incompatibilidad en algunas concentraciones.',
      'Soluciones alcalinas (bicarbonato) — precipitación.',
      'Tiopental, fenobarbital — incompatibilidad.',
      'Lavar línea con SF antes y después de otros medicamentos.',
      'No mezclar con barbitúricos en misma jeringa.',
    ],

    alertasSeguridad: [
      '🔴 DEPRESIÓN RESPIRATORIA — efecto adverso más grave, potencia con benzodiacepinas/alcohol.',
      '🔴 NUNCA bolo IV rápido — administrar mínimo en 4-5 minutos.',
      '🔴 NALOXONA debe estar disponible al lado de la cama SIEMPRE.',
      '🟠 <b>FOTOSENSIBLE</b> — proteger SIEMPRE de luz directa.',
      '🟠 Hipotensión severa por liberación de histamina (especialmente IV rápido).',
      '🟠 Estreñimiento muy frecuente (>50%) — profilaxis OBLIGATORIA.',
      '🟠 En IRC: acumulación de metabolito activo (morfina-6-glucurónido) — sedación prolongada, convulsiones.',
      '🟡 Tolerancia, dependencia física con uso > 7 días — descenso gradual.',
      '🟡 Atención a alta concentración (20 mg/mL) — riesgo de sobredosis por confusión con 10 mg/mL.',
    ],
  },

  modulos: {

    respiratorio: `
      <b>Monitorización respiratoria — OBLIGATORIA:</b><br/>
      <b>Vigilancia continua:</b><br/>
      • FR — objetivo ≥ 12 rpm (alerta si 8-12, acción si < 8).<br/>
      • SpO₂ — objetivo ≥ 94%.<br/>
      • Patrón respiratorio — vigilar apneas.<br/>
      • Capnografía recomendada en infusión continua o dosis altas.<br/>
      • Nivel de consciencia (escala AVDI o Glasgow).<br/><br/>
      <b>Si depresión leve (FR 8-12):</b><br/>
      1. Estimular paciente (verbal, físico).<br/>
      2. O₂ suplementario.<br/>
      3. Reducir próxima dosis 50%.<br/>
      <b>Si depresión severa (FR < 8 o apnea):</b><br/>
      1. Maniobras vía aérea (frente-mentón).<br/>
      2. Ventilación con ambú + O₂ 100%.<br/>
      3. <b>NALOXONA 0.4 mg IV (diluida en 10 mL SF, administrar 1 mL c/min)</b>.<br/>
      4. Repetir c/2-3 min hasta respuesta (máximo 10 mg total).<br/>
      5. Infusión continua de naloxona si necesario (vida media corta).<br/>
      6. Notificar médico urgentemente.
    `,

    cardio: `
      <b>Morfina en Síndrome Coronario Agudo (IAM/SCA):</b><br/>
      <b>Indicación:</b> Dolor torácico isquémico persistente pese a nitratos.<br/>
      <b>Dosis:</b> 2-4 mg IV lento c/5-15 min según dolor.<br/>
      <b>Beneficios:</b><br/>
      • Analgesia del dolor isquémico.<br/>
      • Reducción de ansiedad (↓ demanda O₂ miocárdica).<br/>
      • Venodilatación leve (↓ precarga).<br/>
      <b>Precaución:</b><br/>
      • Vigilar hipotensión (↓ retorno venoso).<br/>
      • Bradicardia posible.<br/>
      • Estudios recientes (CIRCUS, IMMEDIATE): cuestionan beneficio de morfina en IAMCEST — posible reducción de absorción de antiagregantes (clopidogrel, ticagrelor).<br/>
      <b>Vigilancia:</b> Monitor cardíaco continuo, troponinas, ECG seriado.
    `,

    edemaPulmonar: `
      <b>Morfina en Edema Pulmonar Agudo:</b><br/>
      <b>Indicación:</b> Edema pulmonar cardiogénico con disnea severa y ansiedad.<br/>
      <b>Dosis:</b> 2-5 mg IV lento c/5-30 min.<br/>
      <b>Mecanismo:</b><br/>
      • Venodilatación (↓ precarga).<br/>
      • Reducción de ansiedad y trabajo respiratorio.<br/>
      • Reducción de catecolaminas circulantes.<br/>
      <b>Precaución:</b><br/>
      • Vigilar depresión respiratoria — paciente ya con compromiso pulmonar.<br/>
      • Hipotensión puede empeorar perfusión.<br/>
      • Uso CONTROVERTIDO — guías actuales prefieren ventilación no invasiva + diuréticos + nitratos.<br/>
      <b>Vigilancia:</b> SpO₂, FR, PA cada 5 min inicialmente.
    `,

    renal: `
      <b>Morfina en Insuficiencia Renal:</b><br/>
      <b>Problema:</b> Metabolito activo morfina-6-glucurónido (M6G) se acumula en IRC.<br/>
      <b>Consecuencias:</b><br/>
      • Sedación prolongada.<br/>
      • Depresión respiratoria tardía.<br/>
      • Mioclonías, convulsiones.<br/>
      <b>Ajuste:</b><br/>
      • CrCl > 50 mL/min: dosis estándar.<br/>
      • CrCl 30-50: reducir 25% e intervalo c/6h.<br/>
      • CrCl 10-30: reducir 50% e intervalo c/8h.<br/>
      • CrCl < 10 o diálisis: <b>EVITAR — preferir fentanilo o metadona</b>.<br/>
      • Diálisis: M6G es dializable, pero rebote post-diálisis.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Almacenar morfina en armario de estupefacientes con doble llave (legislación).',
      'Registrar cada ampolla utilizada en libro de estupefacientes — control estricto.',
      'Verificar SIEMPRE concentración (10 mg/mL vs 20 mg/mL) — error común y peligroso.',
      'Etiquetar bolsa de infusión: Morfina [dosis], concentración (mg/mL), velocidad (mg/h), hora inicio.',
      '<b>ENVOLVER bolsa/jeringa en papel aluminio o protector opaco — fotosensible.</b>',
      'Bomba de infusión OBLIGATORIA para infusión continua o PCA.',
      'Monitor respiratorio continuo (SpO₂, FR) durante administración y 30 min post.',
      'Tener NALOXONA preparada y disponible al lado de la cama.',
      'En PCA: educar paciente sobre uso correcto del botón (solo él lo presiona, no familiares).',
      '<b>INICIAR PROFILAXIS DE ESTREÑIMIENTO desde el primer día.</b>',
      'Documentar: dosis, hora, EVA pre/post, FR, SpO₂, efectos adversos, naloxona si requerida.',
      'En descenso de dosis tras uso prolongado: gradual (10-20% c/24-48h).',
    ],

    efectosAdversos: [
      '🔴 Depresión respiratoria / apnea',
      '🔴 Hipotensión severa por liberación histamina',
      '🟠 Sedación excesiva, somnolencia',
      '🟠 Estreñimiento (>50%) — universal',
      '🟠 Náuseas, vómitos (15-40%)',
      '🟠 Retención urinaria',
      '🟠 Miosis (pupilas puntiformes)',
      '🟠 Prurito (liberación histamina) — frecuente con morfina',
      '🟠 Bradicardia',
      '🟡 Confusión, alucinaciones (especialmente ancianos)',
      '🟡 Tolerancia, dependencia física (uso > 7 días)',
      '🟡 Hipogonadismo (uso crónico)',
      '🟡 Mioclonías, convulsiones (IRC, dosis altas)',
      '🟡 Síndrome de abstinencia tras suspensión abrupta',
    ],

    contraindicaciones: [
      'Depresión respiratoria severa sin ventilación mecánica.',
      'Asma bronquial activa severa (riesgo de broncoespasmo por histamina).',
      'Íleo paralítico, obstrucción intestinal.',
      'Hipersensibilidad a morfina u opioides.',
      'Trauma craneoencefálico con ↑ PIC (oculta signos neurológicos).',
      'Insuficiencia hepática severa (Child-Pugh C) — relativa.',
      'IRC severa CrCl < 10 — preferir otros opioides.',
      'Intoxicación aguda por alcohol o depresores SNC.',
      'Uso concomitante con IMAO (en las últimas 2 semanas).',
    ],

    fotosensibilidad: '<b>SÍ — FOTOSENSIBLE</b>. La morfina se oxida y degrada con la luz, perdiendo potencia (puede tornarse amarillenta-marrón). Proteger ampollas, viales y soluciones preparadas con material opaco (papel aluminio o protectores comerciales). Si la solución cambia de color, DESCARTAR — no usar.',

    estabilidad: {
      'Ampolla sin abrir':          'Temperatura ambiente, protegida de luz, hasta vencimiento',
      'Diluida en SF/SG 5%':        '<b>24 horas a TA · 7 días refrigerada — TODO protegido de luz</b>',
      'En jeringa de PCA':          '24 horas a TA · 7 días refrigerada (protegida luz)',
      'En bomba de infusión continua': 'Cambiar bolsa c/24h (protegida de luz)',
      'Temperatura':                 'NO congelar · 15-25°C',
      'Aspecto':                     'Transparente, incolora — DESECHAR si amarillenta, marrón o turbidez',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato. Desechar sobrante (estupefaciente controlado — registrar destrucción).',
      dosisRestante:    'No conservar. Desechar y registrar conforme a normativa de estupefacientes. Requiere doble firma.',
      infusionPreparada:'24 h a temperatura ambiente / 7 días refrigerada (2–8 °C) en SF 0.9% o SG 5%, protegida de la luz.',
      notas:            'Fármaco controlado — registrar preparación y destrucción. Compatible con ketamina, midazolam e insulina en mezclas PCA. Proteger de la luz.',
    },

    presentaciones: [
      'Morfina HCl 10 mg/mL ampolla 1 mL (10 mg)',
      'Morfina HCl 20 mg/mL ampolla 1 mL (20 mg) - alta concentración',
      'Morfina HCl 2 mg/mL ampolla 5 mL (10 mg) - uso pediátrico',
      'Morfina Sulfato 10 mg/mL ampolla',
      'Morfina HCl 0.5 mg/mL solución oral',
      'Morfina liberación prolongada VO: MST Continus®, Sevredol®',
      'Disponible en presentaciones epidurales/intratecales (sin conservantes)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dolor agudo severo (bolo IV)',     dosis: '2-5 mg IV lento (titular)',           via: 'IV' },
      { indicacion: 'Mantenimiento (infusión)',         dosis: '0.5-3 mg/h IV',                       via: 'IV' },
      { indicacion: 'IAM/dolor torácico',               dosis: '2-4 mg IV c/5-15 min',                via: 'IV' },
      { indicacion: 'Edema pulmonar agudo',             dosis: '2-5 mg IV lento c/5-30 min',          via: 'IV' },
      { indicacion: 'PCA postoperatorio',               dosis: 'Bolos 1-2 mg, lockout 6-10 min',      via: 'IV-PCA' },
      { indicacion: 'SC continuo (paliativos)',         dosis: '5-10 mg SC c/4h o infusión',          via: 'SC' },
      { indicacion: 'VO (paliativos crónicos)',         dosis: '10-30 mg c/4h (liberación inmediata)', via: 'VO' },
      { indicacion: 'Dosis máxima inicial bolo',         dosis: '10-15 mg IV en pacientes vírgenes',   via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA) — atraviesa placenta. Uso solo si claramente necesario. En trabajo de parto: riesgo de depresión respiratoria neonatal. En uso crónico durante embarazo: síndrome de abstinencia neonatal (NAS). Compatible con lactancia en dosis únicas — evitar en infusión continua.',

    pediatria: 'Neonatos (con ventilación): 0.05-0.1 mg/kg IV c/4-6h. Lactantes/niños: 0.1-0.2 mg/kg IV c/2-4h (máximo 15 mg). Infusión continua pediátrica: 0.01-0.04 mg/kg/h. Mayor sensibilidad a depresión respiratoria en < 6 meses.',

    adultoMayor: 'REDUCIR DOSIS 30-50% (1-2 mg IV inicial). Vida media ↑ por reducción del clearance. Mayor riesgo de delirio, caídas, depresión respiratoria, estreñimiento. Vigilancia intensiva. Considerar laxantes profilácticos siempre.',

    insufRenal: '<b>Metabolito activo (M6G) se acumula</b>. CrCl > 50: dosis estándar. CrCl 30-50: reducir 25%. CrCl 10-30: reducir 50%. <b>CrCl < 10 o diálisis: EVITAR — preferir fentanilo o metadona</b>. Diálisis: M6G dializable pero rebote post-sesión.',

    insufHepatica: 'Cirrosis: vida media ↑↑↑. REDUCIR DOSIS 50% e intervalo c/6-8h. Riesgo de encefalopatía hepática ↑. En insuficiencia severa (Child-Pugh C): preferir otros opioides (fentanilo).',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Morphine Sulfate Injection. U.S. National Library of Medicine.',
      'CIMA AEMPS. Ficha Técnica Morfina B. Braun. Agencia Española de Medicamentos.',
      'OMS. Escalera Analgésica - Cancer Pain Management. World Health Organization.',
      'ESMO Guidelines. Cancer Pain Management. Annals of Oncology. 2018.',
      'IMMEDIATE Trial. Morphine in Acute Coronary Syndrome. JAMA. 2005.',
      'CIRCUS Trial. Morphine and Antiplatelet Absorption in STEMI. 2016.',
      'EAPC Guidelines. Opioids in Cancer Pain. Lancet Oncol. 2012.',
      'Micromedex Solutions. Morphine (Injectable). Accessed 2024.',
    ],
  },

});
