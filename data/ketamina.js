/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/ketamina.js
   Fuentes: CIMA AEMPS (Ketolar), FDA DailyMed,
   Pediamécum AEP, Manejo dolor agudo crónico SECPAL
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'ketamina',
  nombre:         'Ketamina',
  nombreGenerico: 'Ketamine Hydrochloride',
  categoria:      'analgesia',
  tags:           ['UCI', 'anestésico', 'sedación', 'analgesia', 'intubación', 'asma severa', 'dolor crónico'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Anestésico disociativo potente. Riesgo de aumento de PA, taquicardia, alucinaciones (reacción de emergencia). Solo personal entrenado en vía aérea. Aumenta PIC y PIO. NO usar a largo plazo. Sustancia controlada.',

  nivel1: {

    puntosClave: [
      'Anestésico disociativo único — antagonista NMDA, produce <b>analgesia profunda + sedación + amnesia</b> manteniendo reflejos laringofaríngeos.',
      '<b>FOTOSENSIBLE</b> (CIMA AEMPS) — conservar vial en embalaje exterior para protegerlo de la luz. El color puede oscurecer si se expone a la luz.',
      'A diferencia de propofol/midazolam: <b>NO causa depresión cardiovascular ni respiratoria significativa</b> a dosis bajas — ESTABLE HEMODINÁMICAMENTE.',
      '<b>BROCONDILATADOR</b> potente — opción ideal en sedación de asmáticos/EPOC severos.',
      'REACCIONES DE EMERGENCIA: alucinaciones, pesadillas, delirio al despertar (5-30%) — prevenir con midazolam/propofol coadministrados.',
    ],

    resumenRapido: 'Anestésico disociativo no barbitúrico de acción rápida. Antagonista NMDA + agonista opioide débil. Produce un estado anestésico ÚNICO: analgesia profunda + sedación + inmovilidad + amnesia, pero MANTIENE reflejos laringofaríngeos, tono musculoesquelético normal, y estabilidad cardiorrespiratoria. Indicado en: inducción anestésica, sedación procedural (pediatría, quemados, UCI), intubación en estado asmático/inestabilidad hemodinámica, analgesia subanestésica (dolor crónico, oncológico), agitación pre-hospitalaria (excited delirium). Inicio IV: 30-60 seg, duración: 5-10 min tras bolo único.',

    objetivoTerapeutico: 'Sedación profunda con estabilidad CV · Analgesia potente · Inducción anestesia en pacientes inestables · Sedación en asmáticos (broncodilatación) · Adyuvante en dolor crónico refractario',

    preparacion: {
      'Presentación':             '<b>Ketolar 50 mg/mL solución inyectable</b> - vial 10 mL (500 mg total)',
      'Diluyente':                '<b>SG 5% o SF 0.9%</b> (compatibles)',
      'Dilución estándar AEMPS':  '<b>10 mL Ketolar (500 mg) + 500 mL SG5% → 1 mg/mL</b>',
      'Dilución concentrada':     '500 mg en 250 mL → 2 mg/mL',
      'Dilución pediátrica':       '50 mg en 100 mL SF → 0.5 mg/mL',
      'Vía':                      'IV (preferida hospital), IM, SC, intranasal, oral (rara)',
      '⏱️ BOLO IV INDUCCIÓN':     '<b>1-2 mg/kg IV en MÍNIMO 60 segundos</b> (admin más rápida = depresión respiratoria)',
      '⏱️ INFUSIÓN UCI sedación': '<b>0.5-2 mg/kg/h IV continua</b>',
      '⏱️ DOSIS ANALGÉSICA':      '<b>0.1-0.5 mg/kg IV</b> (subanestésica, mantiene consciencia)',
      '⏱️ DOSIS SEDACIÓN procedural':'1-2 mg/kg IV (titular)',
      '⏱️ IM (sin acceso IV)':    '4-10 mg/kg IM (efecto en 3-5 min, dura 20-30 min)',
      '⏱️ INTRANASAL':             '3-9 mg/kg IN (pediátrico)',
      'Bomba':                    'OBLIGATORIA para infusión continua',
      '🌑 FOTOPROTECCIÓN':        '<b>OBLIGATORIA - vial en embalaje exterior</b> (CIMA AEMPS)',
      '🧊 ESTABILIDAD':           '<b>Diluida: usar INMEDIATAMENTE</b> (CIMA AEMPS - microbiológicamente)',
      '🧊 Vial sin abrir':        'Temperatura ambiente, en embalaje exterior, hasta vencimiento',
      'NO mezclar':                '<b>NUNCA con DIAZEPAM en misma jeringa</b> (incompatibilidad)',
      'Aspecto':                  'Incolora a ligeramente amarillenta - puede oscurecer con luz (desechar si oscura)',
    },

    vigilancia: {
      antes: [
        '<b>Personal entrenado en manejo de vía aérea OBLIGATORIO</b>.',
        'Equipo de intubación, ambú, O₂, succión disponibles.',
        'PA, FC, FR, SpO₂, ECG basales registrados.',
        'Revisar contraindicaciones: HTA mal controlada, IAM reciente, ↑ PIC, glaucoma, hipertiroidismo no controlado, eclampsia, esquizofrenia.',
        'Acceso IV permeable.',
        'Preparar premedicación: midazolam 1-2 mg IV (reduce reacciones de emergencia) + atropina (reduce sialorrea).',
        'En sedación procedural: ayuno previo, monitor completo.',
        'Doble verificación: ampolla 50 mg/mL, dosis exacta por peso.',
      ],
      durante: [
        '<b>FR continua durante administración y 30 min post</b> (mínimo 12 rpm).',
        'SpO₂ continua - aunque mantiene reflejos, puede haber laringoespasmo.',
        'PA y FC c/5 min - <b>vigilar HIPERTENSIÓN y TAQUICARDIA</b> (efecto característico).',
        'ECG continuo - taquiarritmias posibles.',
        'Observar SIALORREA (efecto colinérgico) - succionar si abundante.',
        'Vigilar laringoespasmo (raro pero posible) - especialmente en niños.',
        'En pacientes despiertos: ambiente tranquilo, baja luz, mínimo estímulo (reduce reacciones de emergencia).',
        'Si reacción de emergencia: midazolam 1-2 mg IV.',
        'Vigilar nistagmo, movimientos involuntarios (esperados, no peligrosos).',
      ],
      despues: [
        'Continuar monitor 60-120 min post-bolo (efecto residual y reacciones tardías).',
        'Ambiente tranquilo durante recuperación - reduce reacciones psicotomiméticas.',
        'Evaluar nivel de consciencia, orientación.',
        'Vigilar reacciones de emergencia hasta 24h post-administración.',
        'En pacientes psiquiátricos vulnerables: vigilancia prolongada.',
        'En sedación procedural: alta solo cuando recupere nivel consciencia basal.',
        'Documentar: dosis total, duración, efectos hemodinámicos, reacciones de emergencia.',
        'En infusión > 24h: vigilar tolerancia, taquifilaxia.',
      ],
      suspender: [
        'Hipertensión severa (PAS > 200 mmHg) refractaria.',
        'Taquicardia severa (FC > 140 lpm) con compromiso.',
        'Isquemia miocárdica documentada.',
        'Apnea prolongada sin ventilación mecánica.',
        'Laringoespasmo severo.',
        'Reacción psiquiátrica severa (psicosis, agitación incontrolable).',
        'Convulsiones (raras).',
        'Prescripción médica.',
      ],
    },

    incompatibilidades: [
      '<b>DIAZEPAM</b> - INCOMPATIBLE en misma jeringa/línea (CIMA AEMPS) - administrar por separado.',
      'Barbitúricos (tiopental, fenobarbital) - precipitación.',
      'Soluciones alcalinas (bicarbonato) - incompatibilidad.',
      'Estimulantes tiroideos - efecto aditivo en HTA.',
      'IMAO - crisis hipertensiva.',
      'Halotano - depresión cardiovascular sinérgica.',
      'Lavar línea con SF antes y después de fármacos incompatibles.',
    ],

    alertasSeguridad: [
      '🔴 <b>HIPERTENSIÓN y TAQUICARDIA</b> característicos - 20-25% sobre basal.',
      '🔴 AUMENTO DE PRESIÓN INTRACRANEAL (PIC) - CONTRAINDICADO en TCE, hemorragia intracraneal.',
      '🔴 AUMENTO DE PRESIÓN INTRAOCULAR (PIO) - CONTRAINDICADO en glaucoma agudo.',
      '🔴 LARINGOESPASMO - especialmente en niños o estimulación vía aérea.',
      '🔴 REACCIONES DE EMERGENCIA (5-30%): alucinaciones, pesadillas, delirio, despersonalización.',
      '🟠 SIALORREA muy frecuente - pre-medicar con atropina 0.5 mg IV.',
      '🟠 Apnea con bolo IV rápido (< 60 segundos).',
      '🟠 SUSTANCIA CONTROLADA - potencial de abuso, registro estricto.',
      '🟠 NO USO PROLONGADO (> 7 días) - dependencia, tolerancia, cistitis ulcerativa.',
      '🟡 Reacciones de emergencia: prevenir con MIDAZOLAM/PROPOFOL coadministrados.',
      '🟡 Vívidos sueños/alucinaciones hasta 24h post-dosis.',
      '🟡 NO en pacientes psiquiátricos vulnerables (esquizofrenia, psicosis).',
    ],
  },

  modulos: {

    asma: `
      <b>Ketamina en Estado Asmático / Broncoespasmo Severo:</b><br/>
      <b>INDICACIÓN:</b> Asma severa refractaria a tratamiento estándar, especialmente si requiere intubación.<br/><br/>
      <b>VENTAJA ÚNICA:</b><br/>
      • <b>BRONCODILATADOR potente</b> - antagoniza receptores M y libera catecolaminas endógenas.<br/>
      • Mantiene estabilidad hemodinámica (no como propofol).<br/>
      • Mantiene reflejos respiratorios (puede sedarse despierto).<br/>
      • Analgesia + ansiolisis.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      • <b>Bolo IV:</b> 1-2 mg/kg IV (en > 60 seg).<br/>
      • <b>Infusión:</b> 0.5-2 mg/kg/h IV continua.<br/>
      • Combinar con: salbutamol, ipratropio, corticoides, sulfato de magnesio.<br/>
      • Si requiere intubación: ketamina + rocuronio (RSI).<br/><br/>
      <b>EVIDENCIA:</b><br/>
      • Estudios pequeños demuestran mejoría en broncoespasmo refractario.<br/>
      • Puede evitar intubación en casos seleccionados.<br/>
      • Útil en pediatría con asma severa.
    `,

    dolorCronico: `
      <b>Ketamina Subanestésica en Dolor Crónico:</b><br/>
      <b>INDICACIONES:</b><br/>
      • Dolor neuropático refractario.<br/>
      • Dolor oncológico refractario a opioides.<br/>
      • Hiperalgesia inducida por opioides.<br/>
      • Síndrome dolor regional complejo (CRPS).<br/>
      • Fibromialgia severa.<br/>
      • Dolor en quemados, cambios de apósito.<br/><br/>
      <b>MECANISMO:</b><br/>
      • Antagonismo NMDA - reduce sensibilización central.<br/>
      • Modulación de receptores opioides.<br/>
      • Efecto anti-inflamatorio.<br/>
      • Reducción consumo de opioides 30-50%.<br/><br/>
      <b>DOSIS ANALGÉSICA (subanestésica):</b><br/>
      • <b>IV bolo:</b> 0.1-0.5 mg/kg en 30-60 min.<br/>
      • <b>IV infusión:</b> 0.05-0.3 mg/kg/h.<br/>
      • <b>SC infusión paliativos:</b> 1-5 mg/kg/día (titular).<br/>
      • Combinable con: morfina, lidocaína IV, gabapentina.<br/><br/>
      <b>VIGILANCIA:</b> menor riesgo de efectos psicotomiméticos a dosis bajas, pero monitorizar.
    `,

    reaccionesEmergencia: `
      <b>Reacciones de Emergencia por Ketamina:</b><br/>
      <b>INCIDENCIA:</b> 5-30% adultos · 5-15% niños (menos en pediatría).<br/>
      <b>PRESENTACIÓN:</b><br/>
      • Alucinaciones visuales/auditivas vívidas.<br/>
      • Pesadillas.<br/>
      • Delirio, agitación.<br/>
      • Despersonalización ("estar fuera del cuerpo", "flotar").<br/>
      • Confusión, ansiedad intensa.<br/>
      • Comportamiento irracional.<br/>
      • Pueden persistir hasta 24h post-dosis.<br/><br/>
      <b>FACTORES DE RIESGO:</b><br/>
      • Edad > 16 años (raras en niños pequeños).<br/>
      • Sexo femenino.<br/>
      • Dosis altas o bolo rápido.<br/>
      • Antecedentes psiquiátricos.<br/>
      • Ambiente ruidoso, brillante.<br/><br/>
      <b>PREVENCIÓN:</b><br/>
      • <b>Premedicación con benzodiacepina:</b> Midazolam 1-2 mg IV antes.<br/>
      • Propofol concomitante (1-2 mg/kg) en sedación profunda.<br/>
      • Ambiente tranquilo, baja luz, evitar estímulos verbales innecesarios.<br/>
      • Información preoperatoria al paciente sobre el efecto.<br/><br/>
      <b>MANEJO:</b><br/>
      1. Midazolam 1-2 mg IV.<br/>
      2. Ambiente tranquilo.<br/>
      3. Reassurance verbal calmado.<br/>
      4. Si severa: propofol 20-50 mg IV (con vigilancia respiratoria).<br/>
      5. Vigilancia hasta resolución (puede durar horas).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>Almacenar en armario de estupefacientes con doble llave</b> - sustancia controlada.',
      'Registro estricto en libro de estupefacientes - cada dosis.',
      '<b>Conservar vial en embalaje exterior</b> - fotosensible.',
      'Verificar SIEMPRE concentración: 50 mg/mL (alta concentración).',
      'Etiquetar bolsa/jeringa: Ketamina [mg], concentración, velocidad (mg/kg/h), peso paciente, hora.',
      'Bomba de infusión OBLIGATORIA para continua.',
      'Bolo IV EN MÍNIMO 60 SEGUNDOS - administración rápida causa apnea.',
      'Pre-medicar con MIDAZOLAM 1-2 mg IV (reduce reacciones de emergencia).',
      'Considerar ATROPINA 0.5 mg IV para reducir sialorrea.',
      'Personal entrenado en manejo vía aérea presente.',
      'Monitor: ECG continuo, PA c/5 min, SpO₂, FR, capnografía si profunda.',
      'Tener succión disponible (sialorrea abundante).',
      'NO mezclar con diazepam en misma jeringa.',
      'Ambiente tranquilo, baja luz durante recuperación.',
      'Información al paciente: posibles sueños vívidos, alucinaciones, despersonalización.',
      'Documentar: dosis total, duración, efectos hemodinámicos, reacciones psiquiátricas, manejo.',
    ],

    efectosAdversos: [
      '🔴 Hipertensión severa (20-25% sobre basal)',
      '🔴 Taquicardia (frecuente)',
      '🔴 Laringoespasmo',
      '🔴 Apnea con bolo rápido',
      '🔴 Aumento PIC y PIO',
      '🔴 Reacciones psicotomiméticas severas (psicosis)',
      '🟠 Sialorrea abundante (universal)',
      '🟠 Alucinaciones, pesadillas',
      '🟠 Despersonalización, delirio',
      '🟠 Nistagmo (esperado)',
      '🟠 Movimientos involuntarios, espasmos',
      '🟡 Náuseas, vómitos al despertar',
      '🟡 Diplopia, visión borrosa',
      '🟡 Rash transitorio',
      '🟡 Dolor en sitio IV (poco frecuente)',
      '🟡 Cistitis ulcerativa (uso crónico/abuso)',
      '🟡 Dependencia, tolerancia (uso prolongado)',
    ],

    contraindicaciones: [
      'HTA mal controlada o eclampsia/pre-eclampsia.',
      'IAM reciente, angina inestable.',
      'Aumento de presión intracraneal (TCE, hemorragia intracraneal, hidrocefalia).',
      'Aneurisma intracraneal o aórtico.',
      'Glaucoma de ángulo cerrado, lesión ocular abierta.',
      'Hipertiroidismo no controlado.',
      'Antecedente psiquiátrico de psicosis, esquizofrenia.',
      'Hipersensibilidad a ketamina.',
      'Eclampsia, pre-eclampsia.',
      'Cirugía intracraneal sin monitorización PIC.',
    ],

    fotosensibilidad: '<b>SÍ — FOTOSENSIBLE</b>. La CIMA AEMPS especifica: "Conservar el vial en el embalaje exterior para protegerlo de la luz". El color puede oscurecerse si se expone mucho tiempo a la acción de la luz. Si la solución cambia significativamente de color, DESCARTAR.',

    estabilidad: {
      'Vial sin abrir':            'Temperatura ambiente, en embalaje exterior, hasta vencimiento',
      'Tras apertura':              '<b>USAR INMEDIATAMENTE</b> (CIMA AEMPS) - desechar resto',
      'Diluida en SF/SG5%':        '<b>Usar INMEDIATAMENTE</b> (microbiológicamente)',
      'Si no se usa inmediatamente':'Máximo 24h a 2-8°C en condiciones asépticas controladas',
      'Aspecto':                   'Incolora a ligeramente amarillenta - DESECHAR si oscurece',
      'Temperatura':               'NO congelar · 15-25°C · Proteger luz',
    },

    presentaciones: [
      'Ketolar® 50 mg/mL solución inyectable - vial 10 mL (500 mg)',
      'Ketamina 10 mg/mL solución inyectable (menos común)',
      'Ketamina 100 mg/mL alta concentración (algunos países)',
      'Esketamina (S-ketamina) - enantiómero más potente (uso restringido)',
      'Esketamina intranasal (Spravato®) - depresión refractaria',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Inducción anestesia adulto',         dosis: '<b>1-2 mg/kg IV en > 60 seg</b>',           via: 'IV' },
      { indicacion: 'Inducción IM (sin acceso IV)',       dosis: '<b>4-10 mg/kg IM</b>',                       via: 'IM' },
      { indicacion: 'Sedación UCI (infusión)',            dosis: '<b>0.5-2 mg/kg/h IV</b>',                    via: 'IV' },
      { indicacion: 'Analgesia subanestésica (bolo)',     dosis: '0.1-0.5 mg/kg IV en 30 min',                 via: 'IV' },
      { indicacion: 'Analgesia infusión continua',        dosis: '0.05-0.3 mg/kg/h',                           via: 'IV' },
      { indicacion: 'Sedación procedural pediátrica',     dosis: '1-2 mg/kg IV o 3-7 mg/kg IM',                via: 'IV/IM' },
      { indicacion: 'Asma severa (intubación)',           dosis: '1-2 mg/kg IV',                               via: 'IV' },
      { indicacion: 'Intranasal pediátrico',               dosis: '3-9 mg/kg IN',                               via: 'IN' },
      { indicacion: 'Dosis MEDIA inducción',               dosis: '2 mg/kg (5-10 min anestesia)',               via: 'IV' },
    ],

    embarazo: 'Atraviesa fácilmente placenta. <b>NO RECOMENDADO durante embarazo</b> (CIMA AEMPS) - reportes de problemas respiratorios neonatales, Apgar bajo, hipertensión y ↑ tono uterino materno. <b>CONTRAINDICADO en pre-eclampsia/eclampsia</b>. Lactancia: no recomendado.',

    pediatria: 'Uso amplio en pediatría (mejor perfil que en adultos). Sedación procedural: 1-2 mg/kg IV o 3-7 mg/kg IM. Intranasal: 3-9 mg/kg. <b>Menor incidencia de reacciones de emergencia en niños pequeños</b>. Vigilar laringoespasmo (más frecuente en pediatría).',

    adultoMayor: 'Reducir dosis 30-50% por mayor sensibilidad y aclaramiento reducido. Mayor riesgo de reacciones psicotomiméticas, hipertensión, isquemia miocárdica. Vigilancia hemodinámica intensiva. Iniciar 0.5 mg/kg.',

    insufRenal: 'Sin ajuste de dosis significativo - metabolismo hepático principalmente. En IRC severa: vigilancia clínica, considerar reducción 20-30%.',

    insufHepatica: 'Metabolismo hepático extenso (CYP3A4, CYP2B6). En cirrosis severa: <b>REDUCIR DOSIS 50%</b>, vida media prolongada. Vigilancia neurológica intensiva.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Ketolar® 50 mg/mL. Agencia Española de Medicamentos.',
      'FDA DailyMed. Ketamine Hydrochloride Injection. U.S. National Library of Medicine.',
      'Pediamécum AEP. Ketamina. Asociación Española de Pediatría.',
      'SECPAL. Manejo del dolor agudo y crónico con ketamina. Sociedad Española Cuidados Paliativos.',
      'Sin Bin Tan, et al. Ketamine for Severe Asthma. Cochrane. 2012.',
      'Schwenk ES, et al. Consensus Guidelines on the Use of IV Ketamine Infusions for Acute Pain. Reg Anesth Pain Med. 2018.',
      'ASA Guidelines. Procedural Sedation and Analgesia. Anesthesiology. 2018.',
      'Manual de Cuidados Intensivos Pediátricos. López-Herce J, et al. 4ª ed. 2013.',
    ],
  },

});
