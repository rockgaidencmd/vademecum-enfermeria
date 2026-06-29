/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/propofol.js
   Fuentes: CIMA AEMPS (Diprivan, Propofol Fresenius, Lipuro),
   Pediamécum AEP, FDA DailyMed, Surviving Sepsis 2021
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'propofol',
  nombre:         'Propofol',
  nombreGenerico: 'Propofol (2,6-diisopropilfenol)',
  categoria:      'analgesia',
  tags:           ['UCI', 'sedante', 'anestésico IV', 'intubación', 'sedación UCI', 'anestesia'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Anestésico IV potente. Riesgo de hipotensión severa, bradicardia profunda, asistolia, depresión respiratoria. Riesgo de SÍNDROME DE INFUSIÓN DE PROPOFOL (PRIS) con dosis > 4 mg/kg/h. Solo personal entrenado en manejo de vía aérea.',

  nivel1: {

    puntosClave: [
      '<b>EMULSIÓN LIPÍDICA</b> blanca (aceite de soja + lecitina huevo + glicerol) — NO es solución acuosa. Cuidado con alergias a soja/huevo.',
      'Solo personal con entrenamiento en manejo de vía aérea — DEPRESIÓN RESPIRATORIA y apnea son frecuentes y predecibles.',
      'Dolor venoso intenso en inyección — usar venas gruesas (antecubital, antebrazo) o pre-medicar con lidocaína 20-40 mg IV.',
      'SÍNDROME DE INFUSIÓN DE PROPOFOL (PRIS) si > 4 mg/kg/h × > 48h: acidosis metabólica, rabdomiolisis, hiperpotasemia, falla cardíaca — RARO PERO MORTAL.',
      'NO es fotosensible significativamente, pero la emulsión es buen medio de cultivo bacteriano — usar bolsa nueva c/12h, técnica estéril estricta.',
    ],

    resumenRapido: 'Anestésico IV de acción ultracorta. Agonista GABA-A y modulador glutamato. Produce sedación, hipnosis profunda, amnesia, NO analgesia (combinar con opiode). Inicio: 30-60 segundos, despertar: 5-10 min tras bolo (vida media contextual corta). Indicado en inducción anestésica, sedación UCI, intubación de secuencia rápida, sedación procedural, status epilepticus refractario. Cardiodepresor y vasodilatador.',

    objetivoTerapeutico: 'Sedación UCI (RASS -2 a -3) · Inducción anestésica rápida · Hipnosis para procedimientos · Recuperación cognitiva rápida tras suspensión',

    preparacion: {
      'Presentación 1%':          '<b>Propofol 10 mg/mL emulsión</b> — ampolla 20 mL (200 mg) / vial 50-100 mL',
      'Presentación 2%':          '<b>Propofol 20 mg/mL emulsión</b> — ampolla 20-50 mL / vial 50-100 mL (preferida UCI)',
      'Tipo de preparación':      'EMULSIÓN LIPÍDICA (aceite soja 10% + lecitina huevo + glicerol)',
      'Diluyente':                '<b>SOLO SG 5%</b> (NO SF 0.9% — desestabiliza emulsión)',
      'Dilución (Diprivan 10 mg/mL)':'Máximo 1:5 con SG 5% → 2 mg/mL (mezcla estable 6h)',
      'Dilución (Propofol 20 mg/mL)':'<b>Sin diluir (se administra directamente del vial)</b> en bomba',
      'Vía':                      '<b>IV exclusiva — venas gruesas (antecubital) o vía central</b>',
      '⏱️ INDUCCIÓN ANESTESIA':   '<b>1.5-2.5 mg/kg IV en 10-40 segundos</b> (titulación)',
      '⏱️ SEDACIÓN UCI inicial':  '0.3-0.5 mg/kg IV bolo lento',
      '⏱️ SEDACIÓN UCI infusión': '<b>0.3-4 mg/kg/h IV continuo</b> (titular según RASS)',
      '⏱️ DOSIS MÁXIMA UCI':      '<b>4 mg/kg/h MÁXIMO</b> — superar causa PRIS',
      '⏱️ SEDACIÓN PROCEDURAL':   '0.5-1 mg/kg IV bolo + bolos repetidos 10-20 mg PRN',
      'Bomba':                    'OBLIGATORIA para infusión continua',
      'Lidocaína pre-inyección':  '20-40 mg IV inmediatamente antes (reduce dolor venoso)',
      '🧊 ESTABILIDAD ampolla':   'Temperatura ambiente (< 25°C) hasta vencimiento',
      '🧊 ESTABILIDAD diluido':   '<b>6 horas máximo tras dilución (CIMA AEMPS)</b>',
      '🧊 ESTABILIDAD post-apertura':'<b>12 HORAS MÁXIMO en bomba</b> — emulsión = medio de cultivo bacteriano',
      '⚠️ Técnica':                'Asepsia ESTRICTA — desechar bolsa/jeringa c/12h aunque quede contenido',
      'Aspecto':                  'Emulsión blanca opalescente — desechar si separación de fases, color anormal',
    },

    vigilancia: {
      antes: [
        'Verificar alergia a soja, cacahuete (maní), huevo — CONTRAINDICACIÓN.',
        'Personal entrenado en manejo vía aérea presente.',
        'Equipo de intubación, ambú, O₂ disponibles.',
        'PA, FC, FR, SpO₂, ECG basales.',
        'Acceso IV permeable en vena gruesa (antecubital o central).',
        'Volemia adecuada — hipovolemia potencia hipotensión.',
        'Doble verificación: dosis, concentración, peso paciente.',
        'En UCI: prever cambio bolsa/jeringa c/12h.',
      ],
      durante: [
        'Monitor continuo: ECG, PA, SpO₂, capnografía si disponible.',
        'PA c/5 min al inicio — hipotensión esperada (15-30% de reducción).',
        'FC continua — vigilar BRADICARDIA PROFUNDA / asistolia.',
        'FR y SpO₂ — apnea y depresión respiratoria son frecuentes.',
        'Nivel de consciencia (RASS) c/15-30 min para titulación.',
        'Vigilar sitio IV — emulsión causa dolor venoso intenso.',
        'En infusión > 24h: vigilar acidosis metabólica, CPK (rabdomiolisis), K+ (PRIS).',
        'Si bradicardia severa: atropina 0.5-1 mg IV.',
      ],
      despues: [
        'Continuar monitorización CV y respiratoria 30-60 min post-suspensión.',
        'En sedación UCI prolongada: vigilar tiempo de despertar (acumulación con > 72h).',
        'En infusión > 48h: control de gasometría, lactato, CPK, troponina, K+ — descartar PRIS.',
        'Evaluar nivel de consciencia, función neurológica al despertar.',
        'Documentar: dosis total, duración, eventos adversos, tiempo de recuperación.',
        '"Descanso diario de sedación" en UCI para evaluación neurológica.',
      ],
      suspender: [
        'Hipotensión severa (PAS < 80 mmHg) refractaria a fluidos.',
        'Bradicardia severa (FC < 40 lpm) o asistolia.',
        'Apnea prolongada sin ventilación mecánica.',
        'Signos de PRIS: acidosis metabólica nueva, hiperpotasemia, rabdomiolisis, falla cardíaca.',
        'Reacción alérgica a soja/huevo.',
        'Síndrome de Brugada inducido (elevación ST, T invertida).',
        'Prescripción médica.',
      ],
    },

    incompatibilidades: [
      '<b>SF 0.9% — desestabiliza la emulsión</b>, NO usar como diluyente.',
      'Atracurio, mivacurio — NO en misma línea sin lavar con SF previo.',
      'Sangre y derivados — NO mezclar.',
      'Soluciones con calcio (Ringer Lactato) — incompatibilidad.',
      'Aminofilina — incompatibilidad documentada.',
      'NO mezclar con otros medicamentos en la misma jeringa.',
      'Si misma línea: lavar con SF antes y después.',
      'Vía central preferida para infusión continua (separar de otras medicaciones).',
    ],

    alertasSeguridad: [
      '🔴 SÍNDROME DE INFUSIÓN DE PROPOFOL (PRIS) — dosis > 4 mg/kg/h × > 48h. Acidosis, rabdomiolisis, falla cardíaca, MORTAL.',
      '🔴 HIPOTENSIÓN severa esperada — 15-30% reducción PA, mayor con hipovolemia/ancianos.',
      '🔴 BRADICARDIA PROFUNDA y ASISTOLIA documentadas — tener atropina disponible.',
      '🔴 APNEA esperada — solo administrar con manejo vía aérea garantizado.',
      '🟠 DOLOR VENOSO INTENSO — usar venas gruesas, pre-medicar con lidocaína.',
      '🟠 Alergia a SOJA, CACAHUETE, HUEVO — CONTRAINDICACIÓN ABSOLUTA.',
      '🟠 ELEVACIÓN DE LÍPIDOS (triglicéridos) — vigilar en infusión > 24h.',
      '🟡 Emulsión es medio de cultivo — bacteriemia si técnica no estéril. Cambiar c/12h.',
      '🟡 NO contiene analgesia — combinar con opiode (fentanilo, morfina, remifentanilo).',
      '🟡 Coloración verde/marrón de la orina — efecto inofensivo (metabolitos).',
    ],
  },

  modulos: {

    pris: `
      <b>Síndrome de Infusión de Propofol (PRIS) — EMERGENCIA UCI:</b><br/>
      <b>Factores de riesgo:</b><br/>
      • Dosis > 4 mg/kg/h.<br/>
      • Duración > 48 horas.<br/>
      • Pacientes pediátricos (contraindicación sedación UCI < 16 años).<br/>
      • Pacientes críticos con sepsis, trauma craneal.<br/>
      • Uso concomitante de catecolaminas, corticoides.<br/><br/>
      <b>Signos clínicos:</b><br/>
      • <b>Acidosis metabólica</b> sin causa explicable (lactato ↑).<br/>
      • <b>Rabdomiolisis</b> — CPK > 5000, mioglobinuria.<br/>
      • <b>Hiperpotasemia</b> (K+ > 5.5 mEq/L).<br/>
      • <b>Hipertrigliceridemia</b>.<br/>
      • <b>Insuficiencia cardíaca</b> de evolución rápida, refractaria a inotrópicos.<br/>
      • <b>Arritmias</b> — Brugada-like (elevación ST, T invertida), bloqueos.<br/>
      • Insuficiencia hepática, renal.<br/><br/>
      <b>Manejo (mortalidad 30-80%):</b><br/>
      1. SUSPENDER propofol inmediatamente.<br/>
      2. Cambiar a midazolam o dexmedetomidina.<br/>
      3. Soporte hemodinámico: vasopresores, inotrópicos.<br/>
      4. Corrección acidosis (bicarbonato, hemodiálisis si severa).<br/>
      5. Manejo hiperpotasemia.<br/>
      6. Vigilancia CPK, troponina, gasometría c/4-6h.<br/>
      7. Considerar ECMO si shock cardiogénico refractario.<br/>
      <b>Prevención:</b> NO exceder 4 mg/kg/h. Si requiere más sedación, combinar con otros agentes.
    `,

    respiratorio: `
      <b>Manejo respiratorio durante propofol:</b><br/>
      <b>APNEA es esperada y predecible:</b><br/>
      • Tras inducción anestésica (1.5-2.5 mg/kg): apnea 30-60 segundos típica.<br/>
      • Solo administrar con manejo vía aérea garantizado.<br/><br/>
      <b>Equipo preparado:</b><br/>
      • Ambú con reservorio.<br/>
      • O₂ 100%.<br/>
      • Mascarillas faciales varios tamaños.<br/>
      • Laringoscopio, tubo orotraqueal del tamaño adecuado.<br/>
      • Aspiración funcional.<br/><br/>
      <b>Durante apnea:</b><br/>
      1. Maniobras vía aérea (frente-mentón, tracción mandibular).<br/>
      2. Ventilación con ambú + O₂ 100%.<br/>
      3. Si > 60 segundos: considerar intubación.<br/>
      4. Si sedación procedural prolongada: monitor capnografía obligatorio.
    `,

    cardio: `
      <b>Manejo cardiovascular durante propofol:</b><br/>
      <b>Efectos predecibles:</b><br/>
      • ↓ PAM 15-30% (vasodilatación + depresión miocárdica).<br/>
      • ↓ FC (efecto vagomimético).<br/>
      • ↓ Gasto cardíaco moderado.<br/><br/>
      <b>Si hipotensión:</b><br/>
      1. Trendelemburg leve.<br/>
      2. Fluidos IV (SF 500 mL rápido).<br/>
      3. Reducir velocidad infusión.<br/>
      4. Si severa: efedrina 5-10 mg IV o noradrenalina.<br/><br/>
      <b>Si bradicardia (< 50 lpm):</b><br/>
      1. ATROPINA 0.5-1 mg IV (tener preparada).<br/>
      2. Si asistolia: maniobras RCP, adrenalina.<br/>
      3. Reducir/suspender propofol.<br/><br/>
      <b>Vigilancia ECG:</b><br/>
      • Patrón Brugada-like puede aparecer (elevación ST, T invertida).<br/>
      • Si aparece: SUSPENDER propofol urgentemente.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>VERIFICAR alergia a soja, cacahuete, huevo</b> antes de cada administración.',
      'Personal entrenado en manejo vía aérea presente — propofol NO es para enfermería sola en sedación.',
      'Etiquetar bolsa/jeringa con: Propofol [concentración], velocidad inicial (mg/kg/h), peso paciente, hora preparación, fecha límite (12h).',
      'Bomba de infusión OBLIGATORIA para infusión continua — programar en mg/kg/h.',
      'Vía central preferida — periférica solo en venas gruesas (antecubital).',
      'Pre-medicar con LIDOCAÍNA 20-40 mg IV antes del propofol para reducir dolor venoso.',
      '<b>Cambiar bolsa/jeringa CADA 12 HORAS</b> aunque queda contenido — emulsión = cultivo bacteriano.',
      'Técnica ESTÉRIL ESTRICTA — alcohol antes de pinchar tapón, jeringa nueva c/dosis.',
      'Monitor continuo: ECG, PA, SpO₂, capnografía si posible.',
      'Tener disponible: atropina, vasopresores, equipo intubación.',
      'En sedación UCI > 48h: vigilancia diaria de PRIS (CPK, gasometría, lactato, triglicéridos).',
      '"Descanso diario de sedación" según protocolo UCI.',
      'Vigilar coloración verdosa/marrón de orina — inofensivo, informar paciente/familia.',
      'Documentar: dosis acumulada, duración, RASS, eventos adversos, recambios de bolsa.',
    ],

    efectosAdversos: [
      '🔴 Síndrome de Infusión de Propofol (PRIS)',
      '🔴 Hipotensión severa, shock',
      '🔴 Bradicardia profunda / asistolia',
      '🔴 Apnea / depresión respiratoria',
      '🔴 Anafilaxia (soja, huevo)',
      '🟠 Dolor venoso intenso en inyección',
      '🟠 Tromboflebitis local',
      '🟠 Hipertrigliceridemia (uso prolongado)',
      '🟠 Pancreatitis (raro)',
      '🟠 Convulsiones / mioclonías paradójicas',
      '🟡 Náuseas, vómitos al despertar',
      '🟡 Coloración verde/marrón de orina (inofensivo)',
      '🟡 Excitación, agitación al despertar (rare)',
      '🟡 Abuso/dependencia (principalmente personal sanitario)',
    ],

    contraindicaciones: [
      '<b>Hipersensibilidad a propofol, SOJA, CACAHUETE o HUEVO</b> — contraindicación absoluta.',
      '<b>Sedación UCI en pacientes ≤ 16 años</b> — riesgo aumentado de PRIS.',
      'Hipovolemia severa no corregida.',
      'Embarazo (excepto urgencias).',
      'Lactancia (relativa — datos limitados).',
      'Bradicardia severa preexistente.',
      'Hipotensión severa preexistente sin reanimación.',
      'Trastornos metabólicos lipídicos severos.',
    ],

    fotosensibilidad: 'No es significativamente fotosensible. La emulsión blanca opalescente no requiere protección especial de luz durante administración normal. Sin embargo, el riesgo principal es la <b>contaminación bacteriana</b> de la emulsión — cambiar bolsa/jeringa cada 12 horas con técnica estéril estricta.',

    estabilidad: {
      'Ampolla/vial sin abrir':     'Temperatura ambiente (< 25°C), no refrigerar, hasta vencimiento',
      'NO CONGELAR':                 'Desestabiliza la emulsión',
      'Una vez abierto (sin diluir)': '<b>12 HORAS máximo</b> en bomba o jeringa',
      'Diluido en SG 5% (Diprivan 10 mg/mL)': '<b>6 HORAS máximo tras dilución</b>',
      'Cambio bolsa/jeringa':       'OBLIGATORIO cada 12h — riesgo bacteriano',
      'Temperatura':                 '< 25°C · NO refrigerar (algunos prospectos sí permiten)',
      'Aspecto':                     'Emulsión blanca opalescente uniforme — desechar si separación de fases, partículas',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato o dentro de las 6 h máximo de apertura. Técnica aséptica estricta.',
      dosisRestante:    'Desechar a las 6 h de apertura o al finalizar la infusión. No guardar restos en el vial.',
      infusionPreparada:'Máximo 12 h por sistema de infusión. Cambiar tubuladuras y frascos cada 12 h.',
      notas:            'Emulsión lipídica: alto riesgo de crecimiento bacteriano si se contamina. Técnica aséptica obligatoria. Desechar si hay separación de fases o cambio de color.',
    },

    presentaciones: [
      'Propofol 10 mg/mL (1%) — ampolla 20 mL · vial 50, 100 mL',
      'Propofol 20 mg/mL (2%) — vial 50, 100 mL (preferido UCI)',
      'Propofol 5 mg/mL — Propofol Lipuro pediátrico',
      'Diprivan® 10 mg/mL y 20 mg/mL (AstraZeneca)',
      'Propofol Lipuro® 10 mg/mL y 20 mg/mL (B. Braun)',
      'Propofol Fresenius® 10 mg/mL y 20 mg/mL (Fresenius Kabi)',
      'Propofol Baxter® 10 mg/mL (Baxter)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Inducción anestesia adulto',         dosis: '1.5-2.5 mg/kg IV en 10-40 seg',         via: 'IV' },
      { indicacion: 'Inducción anestesia anciano',        dosis: '1-1.5 mg/kg IV lento',                  via: 'IV' },
      { indicacion: 'Mantenimiento anestesia',            dosis: '4-12 mg/kg/h en infusión',              via: 'IV' },
      { indicacion: 'Sedación UCI inicial',               dosis: '0.3-0.5 mg/kg IV bolo lento',           via: 'IV' },
      { indicacion: 'Sedación UCI infusión',              dosis: '<b>0.3-4 mg/kg/h IV continuo</b>',      via: 'IV' },
      { indicacion: 'Sedación procedural (bolo)',         dosis: '0.5-1 mg/kg IV',                        via: 'IV' },
      { indicacion: 'Status epilepticus refractario',     dosis: '1-2 mg/kg IV bolo + 2-10 mg/kg/h',      via: 'IV' },
      { indicacion: 'DOSIS MÁXIMA UCI (evitar PRIS)',     dosis: '<b>4 mg/kg/h</b>',                       via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Atraviesa placenta. Uso en cesárea: depresión neonatal posible. Solo si beneficio supera riesgo. Lactancia: pasa a leche en pequeñas cantidades — esperar 6-12h tras única dosis antes de amamantar.',

    pediatria: '<b>CONTRAINDICADO en sedación UCI ≤ 16 años</b> — riesgo PRIS. Permitido en: anestesia general > 1 mes, sedación procedural > 1 mes. Dosis: inducción 2.5-3.5 mg/kg IV. Mantenimiento anestesia: 9-15 mg/kg/h. Vigilancia hemodinámica estricta.',

    adultoMayor: 'REDUCIR DOSIS 30-50% — mayor sensibilidad, vida media ↑. Inducción: 1-1.5 mg/kg (no 2-2.5). Sedación UCI: 0.3-1 mg/kg/h máximo inicial. Mayor riesgo hipotensión, bradicardia. Monitorización CV intensiva.',

    insufRenal: 'Sin ajuste de dosis significativo — metabolismo hepático principal. En IRC: eliminación de metabolitos puede prolongarse pero sin acumulación clínicamente relevante. En diálisis: dosis estándar.',

    insufHepatica: 'Metabolismo hepático extenso (glucuronidación, CYP2B6). En cirrosis: REDUCIR DOSIS 25-50%. Vida media ↑. Vigilancia neurológica intensiva tras suspensión (despertar tardío). Riesgo encefalopatía hepática.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Diprivan® 10 mg/mL y 20 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Propofol Fresenius 20 mg/mL. AEMPS.',
      'CIMA AEMPS. Ficha Técnica Propofol Lipuro 10 mg/mL. AEMPS.',
      'Pediamécum AEP. Propofol. Asociación Española de Pediatría. 2021.',
      'FDA DailyMed. Propofol Injectable Emulsion. U.S. National Library of Medicine.',
      'SCCM Guidelines. Pain, Agitation, Delirium in ICU (PAD/PADIS). Crit Care Med. 2018.',
      'Carrillo-Esper R, et al. Síndrome por Infusión de Propofol. Rev Mex Anest. 2010.',
      'Hemphill S, et al. PRIS — Diagnosis and Management. Br J Anaesth. 2019.',
      'Krajčová A, et al. Propofol Infusion Syndrome — Review. Crit Care. 2015.',
    ],
  },

});
