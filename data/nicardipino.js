/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/nicardipino.js
   Fuentes: CIMA AEMPS (Vasonase 1 mg/mL), EMA,
   ACOG Preeclampsia, AHA/ASA Stroke Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'nicardipino',
  nombre:         'Nicardipino',
  nombreGenerico: 'Nicardipine Hydrochloride',
  categoria:      'antiarritmicos',
  tags:           ['calcioantagonista', 'HTA emergencia', 'ACV', 'neurocrítico', 'preeclampsia', 'vasodilatador'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Calcioantagonista dihidropiridínico vasodilatador potente. Solo debe administrarse por especialistas en entornos controlados (UCI/hospital) con monitorización continua de PA. Riesgo de hipotensión severa, taquicardia refleja, hipoxia (especialmente en EPOC/insuficiencia cardíaca).',

  nivel1: {

    puntosClave: [
      'Calcioantagonista DIHIDROPIRIDÍNICO — <b>vasodilatador arterial selectivo</b> (mínimo efecto sobre nódulo AV/contractilidad) — reduce resistencia vascular periférica.',
      '<b>ALTAMENTE TITULABLE</b> — efecto dosis-dependiente predecible, ideal para HTA emergencia con necesidad de control preciso.',
      'Uso destacado en: <b>ACV (isquémico/hemorrágico) con HTA severa, preeclampsia/eclampsia, HTA perioperatoria, disección aórtica (tras control de FC con beta-bloqueante)</b>.',
      '<b>SOLO debe administrarse por especialistas en entornos controlados</b> (UCI/hospital) con bomba de infusión precisa y monitorización continua.',
      'Vigilancia OBLIGATORIA de PA/FC <b>cada 5 minutos durante la perfusión y mínimo 12 horas después</b> de finalizada.',
    ],

    resumenRapido: 'Calcioantagonista dihidropiridínico de segunda generación. Bloquea canales de calcio tipo L en músculo liso vascular arterial, produciendo vasodilatación potente y selectiva con mínimo efecto sobre el miocardio (contractilidad, conducción AV) comparado con verapamilo/diltiazem. Inicio: 5-15 min · Duración tras suspender: 30 min-4h (más prolongada de lo esperado por acumulación tisular). Indicado en: HTA emergencia general, ACV isquémico/hemorrágico con HTA severa, preeclampsia/eclampsia severa, HTA perioperatoria (especialmente neuroquirúrgica y cardiovascular), disección aórtica (adyuvante tras control de FC).',

    objetivoTerapeutico: 'Reducir PA de forma controlada y titulable · Mantener perfusión cerebral adecuada en ACV · Control de HTA severa en preeclampsia · Vasodilatación arterial selectiva sin comprometer contractilidad cardíaca',

    preparacion: {
      'Presentación':             '<b>Nicardipino 1 mg/mL (Vasonase®) - ampolla 10 mL (10 mg)</b>',
      'Diluyente':                'SF 0.9% · SG 5% (compatibles)',
      'Dilución estándar':        '<b>25 mg (25 mL) en 250 mL SF/SG5% → 0.1 mg/mL (100 mcg/mL)</b>',
      'Vía':                      'IV exclusiva en PERFUSIÓN CONTINUA - uso hospitalario/UCI únicamente',
      '⏱️ DOSIS INICIAL':         '<b>3-5 mg/h IV durante 15 minutos</b>',
      '⏱️ Ajuste ascendente':      'Aumentar en incrementos de 2.5 mg/h cada 5-15 min según respuesta',
      '⏱️ DOSIS MÁXIMA':          '<b>NO superar 15 mg/h</b>',
      '⏱️ Mantenimiento tras objetivo':'Reducir progresivamente a 2-4 mg/h (dosis de mantenimiento habitual)',
      '⏱️ PREECLAMPSIA/ECLAMPSIA':'<b>NO superar 4 mg/h habitualmente</b> (dosis inicial 1-5 mg/h)',
      '⏱️ ANCIANOS/EMBARAZO':      '<b>Iniciar 1-5 mg/h</b>, ajustar en incrementos de 0.5 mg/h tras 30 min',
      '⏱️ Bolo inicial alternativo (algunos protocolos)':'Ocasionalmente bolo de carga seguido de perfusión, según protocolo institucional',
      'Bomba':                    'OBLIGATORIA - bomba de infusión electrónica o volumétrica de precisión',
      '🧊 ESTABILIDAD':           'Verificar protocolo institucional (generalmente 24h tras dilución en condiciones controladas)',
      'Aspecto':                  'Solución transparente, amarillenta clara — desechar si turbidez marcada',
    },

    vigilancia: {
      antes: [
        'PA basal en ambos brazos, FC, ECG.',
        '<b>Solo iniciar en entorno de UCI/hospitalización con monitorización continua</b>.',
        'Revisar contraindicaciones: estenosis aórtica severa, ICC descompensada aguda.',
        'Confirmar disponibilidad de bomba de infusión de precisión.',
        'Revisar interacciones: cimetidina (↑ niveles nicardipino), ciclosporina (nicardipino ↑ sus niveles).',
        'Acceso IV permeable de buen calibre.',
        'Doble verificación: dosis, dilución, velocidad en bomba.',
      ],
      durante: [
        '<b>Monitor PA y FC OBLIGATORIO al menos cada 5 minutos durante toda la perfusión</b>.',
        'ECG continuo recomendado.',
        'Titular dosis en incrementos según respuesta y objetivo de PA establecido.',
        'Vigilar TAQUICARDIA REFLEJA (efecto vasodilatador puro sin cronotropismo negativo).',
        'Vigilar HIPOXIA - descrita especialmente en pacientes con patología pulmonar (posible alteración V/Q por vasodilatación pulmonar).',
        'Vigilar cefalea, rubor facial (vasodilatación).',
        'En ACV: vigilar signos de hipoperfusión cerebral si PA desciende demasiado rápido.',
        'Vigilar sitio IV - flebitis posible con uso prolongado.',
      ],
      despues: [
        '<b>Continuar monitor PA/FC hasta estabilización, MÍNIMO 12 HORAS tras finalizar la perfusión</b> (indicación expresa CIMA/EMA).',
        'Transición a antihipertensivo oral cuando estabilizado.',
        'Vigilar efecto rebote de HTA al suspender (menos frecuente que con nitroprusiato, pero posible).',
        'Control de función hepática si uso prolongado (metabolismo hepático extenso).',
        'Documentar: dosis, velocidad, hora inicio/fin, PA/FC seriadas, respuesta, eventos.',
      ],
      suspender: [
        'Hipotensión severa sintomática.',
        'Taquicardia severa sintomática.',
        'Hipoxia significativa atribuible.',
        'Angina o isquemia miocárdica de nueva aparición.',
        'PA en objetivo terapéutico sostenido (transición a VO).',
        'Reacción alérgica.',
      ],
    },

    incompatibilidades: [
      'Verificar compatibilidad específica antes de mezclar con otros fármacos en Y-site.',
      'Preferir línea IV independiente.',
      'Lavar línea con SF antes y después si se comparte vía.',
    ],

    alertasSeguridad: [
      '🔴 <b>SOLO debe administrarse por especialistas en entornos controlados</b> (hospital/UCI) con bomba de precisión y monitorización continua.',
      '🔴 <b>NO superar 15 mg/h</b> de velocidad de perfusión.',
      '🟠 <b>Monitorización de PA/FC cada 5 min durante perfusión y mínimo 12h post-finalización</b> - indicación expresa de ficha técnica.',
      '🟠 HIPOXIA descrita tras administración IV, especialmente en pacientes con patología pulmonar de base.',
      '🟠 Taquicardia refleja - vigilar especialmente en cardiopatía isquémica.',
      '🟠 En preeclampsia: NO superar 4 mg/h habitualmente (dosis mayores no suelen ser necesarias y aumentan riesgo).',
      '🟡 CIMETIDINA aumenta niveles de nicardipino - vigilancia si uso concomitante.',
      '🟡 Nicardipino AUMENTA niveles de CICLOSPORINA - monitorizar y ajustar dosis de inmunosupresor.',
      '🟡 Antídoto de sobredosis: GLUCONATO CÁLCICO IV puede ayudar a revertir el bloqueo de canales de calcio; vasopresores (noradrenalina) para hipotensión profunda refractaria.',
      '🟡 Metabolismo hepático extenso - considerar en insuficiencia hepática (misma pauta que ancianos, según ficha técnica).',
    ],
  },

  modulos: {

    acv: `
      <b>Nicardipino en ACV con HTA Severa:</b><br/>
      <b>POR QUÉ ES ÚTIL EN NEUROCRÍTICOS:</b><br/>
      • Titulación precisa y predecible - crucial cuando el margen de PA segura es estrecho.<br/>
      • Efecto vasodilatador arterial selectivo sin comprometer significativamente la perfusión cerebral por vía miocárdica.<br/>
      • Ampliamente usado en unidades de ACV/neurocríticos.<br/><br/>
      <b>ACV ISQUÉMICO (candidato a trombolisis):</b><br/>
      • Objetivo: PA < 185/110 mmHg ANTES de administrar rtPA.<br/>
      • Nicardipino IV: iniciar 5 mg/h, aumentar 2.5 mg/h cada 5-15 min (máximo 15 mg/h) hasta objetivo.<br/>
      • Tras trombolisis: mantener PA < 180/105 mmHg durante 24h.<br/><br/>
      <b>ACV HEMORRÁGICO (hemorragia intracerebral):</b><br/>
      • Guías AHA/ASA: reducir PAS a < 140 mmHg de forma rápida pero controlada (estudio INTERACT2/ATACH-2).<br/>
      • Nicardipino permite el descenso gradual y monitorizado necesario.<br/>
      • Evitar descensos DEMASIADO rápidos o excesivos (riesgo de hipoperfusión perilesional).<br/><br/>
      <b>HEMORRAGIA SUBARACNOIDEA:</b><br/>
      • Control de PA antes del tratamiento definitivo del aneurisma (clipaje/coiling).<br/>
      • Nicardipino es preferido sobre nitroprusiato en este contexto (nitroprusiato puede aumentar PIC más).<br/><br/>
      <b>VENTAJA vs nitroprusiato en neurocríticos:</b><br/>
      • Menor riesgo de aumento de PIC.<br/>
      • Sin riesgo de toxicidad por cianuro/tiocianato.<br/>
      • Titulación más simple.
    `,

    preeclampsia: `
      <b>Nicardipino en Preeclampsia/Eclampsia Severa:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Alternativa a labetalol o hidralazina en HTA severa del embarazo.<br/>
      • Especialmente útil cuando labetalol está contraindicado (asma materna) o es insuficiente.<br/><br/>
      <b>DOSIFICACIÓN ESPECÍFICA EN EMBARAZO:</b><br/>
      • <b>Dosis inicial: 1-5 mg/h IV</b> (rango inferior comparado con HTA general).<br/>
      • Ajustar en incrementos de <b>0.5 mg/h cada 30 minutos</b> según respuesta.<br/>
      • <b>En preeclampsia: generalmente NO se superan 4 mg/h</b>.<br/>
      • Máximo absoluto: 15 mg/h (raramente necesario en este contexto).<br/><br/>
      <b>OBJETIVO:</b> PA 140-150/90-100 mmHg (evitar hipoperfusión placentaria por descenso excesivo).<br/><br/>
      <b>COMBINAR CON (en eclampsia):</b><br/>
      • Sulfato de magnesio (prevención/tratamiento de convulsiones).<br/>
      • Monitorización fetal continua si feto viable.<br/><br/>
      <b>CONSIDERACIONES:</b><br/>
      • Nicardipino se excreta en leche materna (estudios en animales) - valorar riesgo/beneficio en lactancia.<br/>
      • Vigilancia neonatal si uso periparto (aunque generalmente bien tolerado).
    `,

    perioperatoria: `
      <b>Nicardipino en HTA Perioperatoria:</b><br/>
      <b>INDICACIONES:</b><br/>
      • HTA severa en el período perioperatorio (especialmente neurocirugía, cirugía cardiovascular).<br/>
      • Control de PA durante craneotomía o cirugía vascular.<br/>
      • HTA post-operatoria inmediata.<br/><br/>
      <b>VENTAJAS EN ESTE CONTEXTO:</b><br/>
      • Titulación rápida y precisa según necesidades cambiantes durante cirugía.<br/>
      • Perfil hemodinámico predecible.<br/>
      • Sin acumulación de metabolitos tóxicos (a diferencia de nitroprusiato).<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. Iniciar 5 mg/h.<br/>
      2. Ajustar cada 5-15 min en incrementos de 2.5 mg/h según objetivo específico del procedimiento.<br/>
      3. Mantener PA según objetivo definido por el equipo quirúrgico/anestesia (varía según tipo de cirugía).<br/>
      4. Post-operatorio: continuar monitorización 12h post-suspensión según indicación de ficha técnica.<br/><br/>
      <b>DISECCIÓN AÓRTICA (uso adyuvante):</b><br/>
      • <b>SIEMPRE después de haber iniciado beta-bloqueante</b> (esmolol/labetalol) para controlar FC primero.<br/>
      • Nicardipino se añade si la PA sigue elevada tras control adecuado de FC.<br/>
      • Nunca usar vasodilatador puro sin beta-bloqueo previo en disección (riesgo de taquicardia refleja que empeora el estrés de pared aórtica).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>Solo debe administrarse en UCI/hospitalización con monitorización continua</b>.',
      'Etiquetar bolsa: Nicardipino [mg], dilución, velocidad (mg/h), hora.',
      'Bomba de infusión de PRECISIÓN (electrónica o volumétrica) OBLIGATORIA.',
      '<b>Monitor PA y FC cada 5 minutos durante toda la perfusión</b>.',
      'Titular dosis en incrementos pequeños según respuesta y objetivo establecido.',
      '<b>NO superar 15 mg/h</b> de velocidad.',
      'Vigilar taquicardia refleja.',
      'Vigilar hipoxia, especialmente en pacientes con patología pulmonar.',
      'En preeclampsia: dosis más conservadora (generalmente ≤ 4 mg/h).',
      'En disección aórtica: SIEMPRE después de beta-bloqueante, nunca antes.',
      '<b>Continuar monitorización PA/FC mínimo 12 horas tras finalizar la perfusión</b>.',
      'Vigilar signos de flebitis en sitio IV con uso prolongado.',
      'Coordinar transición a antihipertensivo oral cuando estabilizado.',
      'Documentar: dosis, velocidad, hora inicio/fin, PA/FC seriadas, respuesta, eventos.',
    ],

    efectosAdversos: [
      '🔴 Hipotensión severa',
      '🔴 Hipoxia (especialmente en patología pulmonar)',
      '🔴 Isquemia miocárdica (por taquicardia refleja en coronariopatía)',
      '🟠 Taquicardia refleja',
      '🟠 Cefalea (vasodilatación)',
      '🟠 Flebitis en sitio IV (uso prolongado)',
      '🟡 Rubor facial',
      '🟡 Náuseas',
      '🟡 Mareos',
      '🟡 Edema periférico (uso prolongado)',
      '🟡 Palpitaciones',
      '🟡 Elevación transitoria de transaminasas',
    ],

    contraindicaciones: [
      'Estenosis aórtica severa.',
      'Insuficiencia cardíaca descompensada aguda severa.',
      'Hipersensibilidad a nicardipino u otras dihidropiridinas.',
      'Precaución en: insuficiencia hepática (mismo ajuste que ancianos), patología pulmonar (riesgo hipoxia), cardiopatía isquémica (taquicardia refleja).',
    ],

    fotosensibilidad: 'Verificar packaging específico - algunas formulaciones requieren protección de luz. Conservar según indicaciones del fabricante.',

    estabilidad: {
      'Ampolla sin abrir':          'Temperatura ambiente hasta vencimiento (verificar packaging específico)',
      'Diluida en SF/SG5%':         'Según protocolo institucional - generalmente 24h en condiciones controladas',
      'Aspecto':                     'Transparente, amarillenta clara — desechar si turbidez marcada',
      'Temperatura':                 'NO congelar',
    },

    presentaciones: [
      'Vasonase® 1 mg/mL solución para perfusión - ampolla 10 mL (10 mg)',
      'Nicardipino SEID (genérico)',
      'Nicardipino genéricos varios',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'HTA emergencia (dosis inicial)',        dosis: '<b>3-5 mg/h IV durante 15 min</b>',         via: 'IV' },
      { indicacion: 'Ajuste ascendente',                       dosis: 'Incrementos 2.5 mg/h c/5-15 min',           via: 'IV' },
      { indicacion: 'DOSIS MÁXIMA',                            dosis: '<b>15 mg/h</b>',                             via: 'IV' },
      { indicacion: 'Mantenimiento tras objetivo',            dosis: '2-4 mg/h (habitual)',                        via: 'IV' },
      { indicacion: 'Preeclampsia/eclampsia',                 dosis: '<b>1-5 mg/h (generalmente ≤ 4 mg/h)</b>',   via: 'IV' },
      { indicacion: 'Ancianos',                                 dosis: '1-5 mg/h, ajustar 0.5 mg/h c/30 min',       via: 'IV' },
      { indicacion: 'Shock refractario (uso IV, sobredosis)', dosis: 'Gluconato cálcico como antídoto parcial',   via: 'IV' },
      { indicacion: 'Pediátrico (urgencia)',                   dosis: '0.5-5 mcg/kg/min (inicio) - especializado',via: 'IV' },
    ],

    embarazo: 'Se excreta en leche materna en modelos animales. Usado en preeclampsia/eclampsia severa como alternativa a labetalol/hidralazina. Dosis inicial más conservadora (1-5 mg/h). Vigilar en lactancia por posible excreción láctea.',

    pediatria: 'Seguridad y eficacia NO establecidas formalmente en bebés de bajo peso al nacer, recién nacidos, lactantes, bebés y niños según ficha técnica CIMA/EMA. Uso especializado en UCI pediátrica bajo supervisión experta cuando es necesario: 0.5-5 mcg/kg/min inicial, mantenimiento 1-4 mcg/kg/min, con precaución especial en insuficiencia renal.',

    adultoMayor: 'Estudios clínicos no incluyeron suficientes sujetos ≥ 65 años para determinar respuesta diferencial (ficha técnica). Iniciar con dosis conservadora (1-5 mg/h) según recomendación específica. Vigilancia hemodinámica intensiva.',

    insufRenal: 'Sin ajuste específico de dosis establecido en adultos - metabolismo principalmente hepático. En pediatría: usar con especial precaución en insuficiencia renal.',

    insufHepatica: '<b>Se recomienda usar la MISMA PAUTA que en pacientes de edad avanzada</b> (dosis inicial conservadora 1-5 mg/h) - nicardipino se metaboliza extensamente en el hígado, por lo que la reducción de flujo portal hepático también requiere ajuste según ficha técnica.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Vasonase® 1 mg/mL. Agencia Española de Medicamentos.',
      'EMA. Nicardipine Article 31 Referral - Annex III (Ficha Técnica Armonizada UE).',
      'FDA DailyMed. Nicardipine Hydrochloride Injection. U.S. National Library of Medicine.',
      'AHA/ASA Guidelines. Early Management of Acute Ischemic Stroke. Stroke. 2019.',
      'AHA/ASA Guidelines. Spontaneous Intracerebral Hemorrhage. Stroke. 2022.',
      'ACOG Practice Bulletin. Gestational Hypertension and Preeclampsia. Obstet Gynecol. 2020.',
      'Qureshi AI, et al. INTERACT2/ATACH-2 Trials - BP Management in ICH.',
      'Pediamécum AEP. Nicardipino. Asociación Española de Pediatría.',
    ],
  },

});
