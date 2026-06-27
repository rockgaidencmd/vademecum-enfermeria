/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/midazolam.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'midazolam',
  nombre:         'Midazolam',
  nombreGenerico: 'Midazolam Hydrochloride',
  categoria:      'analgesia',
  tags:           ['UCI', 'sedante', 'benzodiazepina', 'intubación', 'status epilepticus', 'ansiolítico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Benzodiazepina potente. Riesgo de depresión respiratoria severa, especialmente combinado con opioides. Requiere monitorización respiratoria continua. Antídoto disponible: Flumazenil.',

  nivel1: {

    puntosClave: [
      'Benzodiazepina de acción corta — agonista receptor GABA-A, efecto sedante, ansiolítico, anticonvulsivante, amnésico.',
      'DEPRESIÓN RESPIRATORIA es el efecto adverso más peligroso — potenciada por opioides (sinergia letal).',
      'Antídoto disponible: FLUMAZENIL 0.2 mg IV (repetir c/min hasta 1 mg total).',
      'Administración IV LENTA: 0.5-2 mg en 2-3 min — bolo rápido causa apnea.',
      'Vida media corta (1-4h) — ideal para infusión continua en UCI con titulación rápida.',
    ],

    resumenRapido: 'Benzodiazepina hidrosoluble de acción rápida y corta duración. Agonista GABA-A produce sedación, ansiolisis, amnesia anterógrada, relajación muscular, efecto anticonvulsivante. Indicado en sedación UCI, inducción anestésica, ansiolisis pre-procedimiento, status epilepticus refractario, intubación de secuencia rápida. Inicio: 1-2 min IV, pico: 3-5 min, duración: 30-80 min (acumulación con infusión prolongada).',

    objetivoTerapeutico: 'Sedación UCI (Ramsay 3-4, RASS -2 a -3) · Ansiolisis · Amnesia procedimental · Control de status epilepticus · Facilitar intubación',

    preparacion: {
      'Presentación':             '5 mg/5 mL ampolla (1 mg/mL) · 15 mg/3 mL ampolla (5 mg/mL)',
      'Presentación alt.':        '50 mg/10 mL vial (5 mg/mL) · 100 mg/20 mL vial',
      'Diluyente':                'SF 0.9% o SG 5% (ambos compatibles)',
      'Dilución IV directa':      'Sin diluir o diluido 1:10 en SF (mejor titulación)',
      'Dilución infusión continua':'<b>50 mg en 50 mL SF → 1 mg/mL</b> (bomba directa)',
      'Dilución infusión continua alt.':'100 mg en 100 mL SF → 1 mg/mL',
      'Vía':                      'IV bolo lento, infusión continua, IM, intranasal, oral',
      '⏱️ BOLO IV (sedación)':    '<b>0.5-2 mg IV lento en 2-3 minutos</b>',
      '⏱️ BOLO IV (inducción)':   '<b>0.1-0.3 mg/kg en 30-60 segundos</b>',
      '⏱️ INFUSIÓN UCI':          '<b>0.02-0.1 mg/kg/h</b> (típico 2-10 mg/h en adulto 70 kg)',
      '⏱️ STATUS EPILEPTICUS':    '<b>0.2 mg/kg IV bolo, luego 0.05-0.4 mg/kg/h</b>',
      'Bomba':                    'OBLIGATORIA para infusión continua',
      '🧊 ESTABILIDAD':           '<b>24 horas a TA en SF/SG 5% · 7 días refrigerado (2-8°C)</b>',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Verificar permeabilidad de vía aérea — riesgo de depresión respiratoria.',
        'FR, SpO₂, PA, FC basales registrados.',
        'Comprobar uso concomitante de opioides — sinergia depresora.',
        'Acceso IV permeable.',
        'Tener disponible: O₂, ambú, equipo intubación, FLUMAZENIL (antídoto).',
        'En sedación procedimental: ayuno previo, consentimiento, monitorización completa.',
        'Doble verificación: dosis, concentración, peso paciente.',
      ],
      durante: [
        'FR continua — OBJETIVO ≥ 12 rpm.',
        'SpO₂ continua — ALERTA si < 94%, ACCIÓN si < 90%.',
        'Capnografía recomendada en sedación profunda.',
        'PA c/5 min al inicio — hipotensión posible (especialmente con opioides).',
        'Nivel de sedación (RASS o Ramsay) c/15 min — ajustar dosis.',
        'Vigilar respuesta verbal y motora.',
        'Si depresión respiratoria: estimular, O₂, considerar FLUMAZENIL.',
      ],
      despues: [
        'Continuar monitorización respiratoria 30-60 min post-bolo (más si dosis altas).',
        'En infusión prolongada: vigilancia post-suspensión 2-4h (vida media ↑ con acumulación).',
        'Evaluar nivel de sedación al despertar — recuperación gradual esperada.',
        'En UCI: "descanso diario" de sedación (interrupción) recomendado para evaluación neurológica.',
        'Documentar: dosis total, duración, eventos adversos, recuperación.',
        'Vigilar síndrome de abstinencia si infusión > 7 días.',
      ],
      suspender: [
        'FR < 10 rpm sostenida.',
        'SpO₂ < 90% sin reversión con O₂.',
        'Hipotensión severa (PAS < 90 mmHg).',
        'Apnea o paro respiratorio (preparar FLUMAZENIL).',
        'Sedación excesiva (Ramsay 6, RASS -5).',
        'Reacción paradójica (agitación, confusión).',
        'Prescripción médica de descenso/suspensión.',
      ],
    },

    incompatibilidades: [
      'Soluciones alcalinas (bicarbonato) — precipitación.',
      'Furosemida — incompatibilidad documentada.',
      'Ranitidina — verificar compatibilidad.',
      'Albúmina — adsorción posible.',
      'Heparina en algunas formulaciones.',
      'Lavar línea con SF antes y después de otros fármacos.',
      'NO mezclar en misma jeringa con barbitúricos.',
    ],

    alertasSeguridad: [
      '🔴 DEPRESIÓN RESPIRATORIA — efecto adverso más grave, potenciado por opioides.',
      '🔴 Combinación con opioides = SINERGIA — reducir dosis ambos 30-50%.',
      '🟠 Acumulación en infusión prolongada — vida media ↑ a 50-100h tras > 72h.',
      '🟠 Síndrome de abstinencia si suspensión brusca > 7 días — agitación, taquicardia, convulsiones.',
      '🟠 Hipotensión por reducción del tono simpático.',
      '🟡 Reacciones paradójicas — agitación, ansiedad (5-15% en niños y ancianos).',
      '🟡 En ancianos: dosis reducida 30-50% — mayor sensibilidad y vida media ↑.',
      '🟡 ANTÍDOTO: Flumazenil debe estar disponible — pero NO usar rutinariamente (riesgo convulsión en epilépticos).',
    ],
  },

  modulos: {

    respiratorio: `
      <b>Monitorización respiratoria — OBLIGATORIA:</b><br/>
      <b>Vigilancia continua:</b><br/>
      • FR — objetivo ≥ 12 rpm.<br/>
      • SpO₂ — objetivo ≥ 94%.<br/>
      • Patrón respiratorio — superficial vs apneas.<br/>
      • Capnografía recomendada en sedación profunda.<br/>
      <b>Si depresión respiratoria leve (FR 8-12):</b><br/>
      1. Estimular paciente (verbal, dolor).<br/>
      2. O₂ suplementario.<br/>
      3. Reducir dosis 50%.<br/>
      <b>Si depresión severa (FR < 8 o apnea):</b><br/>
      1. Maniobras vía aérea (frente-mentón).<br/>
      2. Ventilación con ambú + O₂ 100%.<br/>
      3. <b>FLUMAZENIL 0.2 mg IV, repetir c/min hasta 1 mg total</b>.<br/>
      4. Si no respuesta: intubación.<br/>
      5. Notificar médico urgentemente.
    `,

    sedacion: `
      <b>Escalas de sedación en UCI:</b><br/>
      <b>RASS (Richmond Agitation-Sedation Scale):</b><br/>
      • +4: Combativo · +3: Muy agitado · +2: Agitado · +1: Inquieto.<br/>
      • 0: Alerta y tranquilo.<br/>
      • -1: Somnoliento · -2: Sedación ligera · -3: Sedación moderada.<br/>
      • -4: Sedación profunda · -5: No responde.<br/>
      <b>OBJETIVO UCI:</b> RASS -2 a -3 (sedación ligera a moderada).<br/><br/>
      <b>Ramsay:</b><br/>
      • 1: Ansioso · 2: Cooperador, orientado · 3: Responde a órdenes.<br/>
      • 4: Respuesta vigorosa a estímulo · 5: Respuesta lenta · 6: Sin respuesta.<br/>
      <b>OBJETIVO:</b> Ramsay 3-4.
    `,

    abstinencia: `
      <b>Síndrome de abstinencia de benzodiazepinas:</b><br/>
      <b>Riesgo:</b> Infusión continua > 7 días o dosis altas.<br/>
      <b>Síntomas (12-72h post-suspensión):</b><br/>
      • Ansiedad, agitación, irritabilidad.<br/>
      • Temblor, sudoración, taquicardia.<br/>
      • Hipertensión, fiebre.<br/>
      • Insomnio, pesadillas.<br/>
      • Convulsiones (severo).<br/>
      • Alucinaciones, delirio (severo).<br/>
      <b>Prevención:</b><br/>
      • Descenso GRADUAL: 20-25% c/24-48h.<br/>
      • Considerar cambio a benzodiazepina de vida media larga (diazepam, clonazepam VO).<br/>
      • Dexmedetomidina como puente útil.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Etiquetar bolsa de infusión con: Midazolam [mg], concentración (mg/mL), velocidad inicial (mg/h), peso paciente, hora.',
      'Bomba de infusión OBLIGATORIA para infusión continua.',
      'Tener FLUMAZENIL disponible al lado de la cama.',
      'Monitor cardíaco, oximetría continua, capnografía si disponible.',
      'Evaluar nivel de sedación c/15-30 min con escala RASS o Ramsay.',
      'Implementar "descanso diario de sedación" en UCI según protocolo.',
      'Vigilar nivel de consciencia, FR, SpO₂ continuamente.',
      'En infusión > 72h: vida media ↑, prever despertar tardío.',
      'En sedación procedimental: ayuno 6-8h, paciente monitorizado, equipo de reanimación.',
      'Documentar: dosis total acumulada, duración, nivel sedación, efectos adversos.',
    ],

    efectosAdversos: [
      '🔴 Depresión respiratoria / apnea',
      '🔴 Hipotensión severa (especialmente con opioides)',
      '🟠 Sedación excesiva — Glasgow ↓',
      '🟠 Reacción paradójica — agitación, confusión',
      '🟠 Síndrome de abstinencia tras infusión prolongada',
      '🟠 Amnesia anterógrada (esperado pero a veces problemático)',
      '🟡 Náuseas, vómitos',
      '🟡 Cefalea',
      '🟡 Dolor en sitio IV',
      '🟡 Bradicardia',
      '🟡 Hipo (efecto común con midazolam)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a midazolam o benzodiazepinas.',
      'Glaucoma de ángulo cerrado agudo.',
      'Shock o coma sin protección vía aérea.',
      'Intoxicación aguda por alcohol o depresores SNC.',
      'Miastenia gravis (relativa).',
      'Insuficiencia respiratoria severa sin ventilación mecánica.',
    ],

    fotosensibilidad: 'No relevante. Almacenar a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':        'Temperatura ambiente hasta vencimiento',
      'Diluido en SF/SG 5%':      '<b>24 horas a TA · 7 días refrigerado (2-8°C)</b>',
      'En jeringa precargada':    '24 horas a TA · 7 días refrigerada',
      'Temperatura':              'NO congelar · 15-25°C',
      'Aspecto':                  'Transparente, incolora — desechar si turbidez',
    },

    presentaciones: [
      'Midazolam 5 mg/5 mL ampolla (1 mg/mL)',
      'Midazolam 15 mg/3 mL ampolla (5 mg/mL)',
      'Midazolam 50 mg/10 mL vial (5 mg/mL)',
      'Midazolam 100 mg/20 mL vial (5 mg/mL)',
      'Midazolam solución oral 2 mg/mL (uso pediátrico)',
      'Midazolam intranasal 5 mg/mL (uso emergencia)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Sedación procedural adulto',        dosis: '0.5-2 mg IV lento (titular)',         via: 'IV' },
      { indicacion: 'Inducción anestésica',              dosis: '0.1-0.3 mg/kg IV',                    via: 'IV' },
      { indicacion: 'Sedación UCI (infusión)',           dosis: '0.02-0.1 mg/kg/h',                    via: 'IV' },
      { indicacion: 'Status epilepticus (bolo)',         dosis: '0.2 mg/kg IV (máx 10 mg)',            via: 'IV' },
      { indicacion: 'Status epilepticus (infusión)',     dosis: '0.05-0.4 mg/kg/h',                    via: 'IV' },
      { indicacion: 'Ansiolisis pre-procedimiento',      dosis: '0.5-1 mg IV o 1-2 mg IM',             via: 'IV/IM' },
      { indicacion: 'Pediatría intranasal',              dosis: '0.2-0.3 mg/kg IN (convulsión)',       via: 'IN' },
    ],

    embarazo: 'Categoría D (FDA) — atraviesa placenta. Riesgo síndrome de abstinencia neonatal si uso peri-parto. Evitar en primer trimestre (datos limitados sobre malformaciones). Compatible con lactancia en dosis únicas.',

    pediatria: 'Neonatos: 0.05-0.15 mg/kg IV lento (alta sensibilidad). Lactantes/Niños: 0.05-0.1 mg/kg IV. Sedación procedural: 0.05-0.1 mg/kg IV. Intranasal: 0.2-0.3 mg/kg (convulsiones, ansiolisis). Mayor riesgo de reacciones paradójicas.',

    adultoMayor: 'REDUCIR DOSIS 50% (0.5-1 mg IV inicial). Vida media ↑↑ (puede llegar a 30h). Mayor riesgo de delirio, caídas, depresión respiratoria. Vigilancia post-administración prolongada.',

    insufRenal: 'Sin ajuste dosis significativo en bolo único. En infusión prolongada o IRA severa: metabolito activo (α-hidroxi-midazolam) se acumula → sedación prolongada. Reducir dosis 25-50% en CrCl < 30.',

    insufHepatica: 'Metabolismo hepático (CYP3A4). En cirrosis: vida media ↑↑↑ (hasta 9h). REDUCIR DOSIS 50%. Evitar infusión continua prolongada si posible. Riesgo encefalopatía hepática ↑.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Midazolam Hydrochloride Injection. U.S. National Library of Medicine.',
      'SCCM Guidelines. Pain, Agitation, Delirium in ICU (PAD). Crit Care Med. 2018.',
      'NEJM. Sedation Strategies in Critically Ill Patients. 2020.',
      'CIMA AEMPS. Ficha Técnica Midazolam. Agencia Española de Medicamentos.',
      'AAN Guidelines. Convulsive Status Epilepticus Management. Neurology. 2016.',
      'Riker RR, et al. Sedation in the ICU. Curr Opin Crit Care. 2017.',
      'Micromedex Solutions. Midazolam (Injectable). Accessed 2024.',
    ],
  },

});
