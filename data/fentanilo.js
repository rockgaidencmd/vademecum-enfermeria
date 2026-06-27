/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/fentanilo.js
   Fuentes: CIMA AEMPS (Fentanest, Fentanilo Basi, Ethypharm),
   FDA DailyMed, Surviving Sepsis 2021, ASA Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'fentanilo',
  nombre:         'Fentanilo',
  nombreGenerico: 'Fentanyl Citrate',
  categoria:      'analgesia',
  tags:           ['UCI', 'opiode', 'analgesia', 'anestesia', 'sedación', 'intubación', 'dolor severo'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Opiode sintético 100× más potente que la morfina. Riesgo de depresión respiratoria severa y rigidez torácica con bolo rápido. Solo personal entrenado en vía aérea. Antídoto: Naloxona 0.4 mg IV.',

  nivel1: {

    puntosClave: [
      'Opiode sintético MUY POTENTE — <b>100 mcg de fentanilo ≈ 10 mg de morfina</b> (100× más potente).',
      'Inicio rápido (1-2 min IV) y duración CORTA (30-60 min) — ideal para procedimientos y UCI con titulación fina.',
      '<b>RIGIDEZ TORÁCICA</b> con bolo rápido o dosis altas — puede impedir ventilación, requiere relajante muscular.',
      'NO causa liberación de histamina (a diferencia de morfina) — mejor estabilidad hemodinámica.',
      'Solo administrar con manejo de vía aérea garantizado — DEPRESIÓN RESPIRATORIA frecuente.',
    ],

    resumenRapido: 'Opiode sintético derivado de la fenilpiperidina. Agonista μ-opioide puro 100× más potente que morfina. NO libera histamina (estable hemodinámicamente). Inicio: 1-2 min IV, pico: 4-10 min, duración: 30-60 min tras bolo único (vida media contextual ↑ con infusión prolongada). Indicado en analgesia para anestesia general, sedación UCI con ventilación mecánica, intubación de secuencia rápida, dolor agudo severo (incluyendo IAM), dolor oncológico (parches transdérmicos).',

    objetivoTerapeutico: 'Analgesia para anestesia · Sedación UCI con ventilación · Facilitar intubación · Control dolor severo agudo · EVA/EVN < 4/10',

    preparacion: {
      'Presentación estándar':    '<b>Fentanest 0.05 mg/mL (50 mcg/mL)</b> — ampolla 3 mL (150 mcg) o 10 mL (500 mcg)',
      'Presentación alt.':        'Fentanilo 50 mcg/mL ampolla 2 mL (100 mcg) o 10 mL (500 mcg)',
      'Diluyente':                'SF 0.9% o SG 5% (compatibles - sin pérdida por sorción)',
      'Dilución IV directa':      '<b>Sin diluir o diluido 1:10 en SF</b> (5 mcg/mL) para titulación fina',
      'Dilución infusión continua':'<b>500 mcg en 100 mL SF → 5 mcg/mL</b> (UCI estándar)',
      'Dilución alta concentración':'1000 mcg (1 mg) en 100 mL SF → 10 mcg/mL',
      'Vía':                      'IV (preferida), epidural, intratecal, transdérmica (parches crónico)',
      '⏱️ BOLO ANALGESIA (cirugía)':'<b>50-100 mcg IV lento en 1-2 min</b>',
      '⏱️ BOLO INTUBACIÓN':       '<b>1-3 mcg/kg IV lento en 1-2 min</b>',
      '⏱️ INFUSIÓN UCI':          '<b>0.5-5 mcg/kg/h</b> (típico 25-200 mcg/h)',
      '⏱️ ANESTESIA cirugía':     '50-200 mcg IV pre-inducción, repetir 25-50 mcg PRN',
      '⏱️ Velocidad bolo':         '<b>Mínimo 1-2 minutos</b> — bolo rápido = rigidez torácica',
      'Bomba':                    'OBLIGATORIA para infusión continua',
      '🧊 ESTABILIDAD post-apertura':'<b>24 horas a 25°C (TA)</b> — comprobado AEMPS',
      '🧊 ESTABILIDAD refrigerada':'24 horas a 2-8°C',
      '🧊 Microbiológicamente':   'Usar inmediatamente — preparar al momento si posible',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Verificar manejo de vía aérea garantizado — equipo de intubación disponible.',
        'FR, SpO₂, PA, FC, nivel consciencia basales.',
        'Comprobar uso concomitante de otros depresores SNC (benzodiacepinas, alcohol) — sinergia.',
        'Revisar uso de inhibidores CYP3A4 (amiodarona, claritromicina, fluconazol) — ↑ niveles fentanilo.',
        'Tener NALOXONA preparada y disponible al lado de la cama.',
        'En obesos: calcular dosis por peso magro (no peso real).',
        'Doble verificación: ampolla 50 mcg/mL, dosis exacta, dilución.',
        'En sedación procedural: ayuno previo, monitor continuo.',
      ],
      durante: [
        '<b>FR continua durante administración y 30 min post</b> — OBJETIVO ≥ 12 rpm.',
        'SpO₂ continua — ALERTA si < 94%, ACCIÓN si < 90%.',
        'Capnografía recomendada en sedación profunda o infusión.',
        'PA c/5-10 min al inicio (estable hemodinámicamente vs morfina pero hipotensión posible).',
        'FC continua — bradicardia esperada por efecto vagomimético.',
        'Vigilar RIGIDEZ TORÁCICA — paciente "no puede respirar" pese a esfuerzo, abdomen tenso.',
        'Si rigidez torácica: relajante muscular (succinilcolina, rocuronio) + ventilación asistida.',
        'Observar miosis (pupilas puntiformes) — signo de opioidización.',
        'Sitio IV — generalmente sin irritación venosa (a diferencia de morfina).',
      ],
      despues: [
        'Continuar monitorización respiratoria 30-60 min post-bolo único.',
        'En infusión prolongada (> 6h): vigilancia post-suspensión 2-4h (vida media contextual ↑).',
        'En infusión > 48h: acumulación significativa — descenso gradual.',
        'En parches transdérmicos: vigilancia 12-24h post-retiro (depósito en grasa).',
        'INICIAR PROFILAXIS DE ESTREÑIMIENTO desde el primer día (universal con opioides).',
        'Documentar: dosis total, duración, EVA, FR, SpO₂, eventos adversos.',
      ],
      suspender: [
        'FR < 10 rpm sostenida (depresión respiratoria).',
        'SpO₂ < 90% sin reversión con O₂ — preparar NALOXONA.',
        'Apnea o paro respiratorio — NALOXONA 0.4 mg IV inmediatamente.',
        'Rigidez torácica severa que impide ventilación.',
        'Hipotensión severa (PAS < 90 mmHg) refractaria.',
        'Bradicardia severa (FC < 40 lpm).',
        'Reacción alérgica (rara).',
        'Prescripción médica de descenso/suspensión.',
      ],
    },

    incompatibilidades: [
      'Tiopental, fenobarbital — incompatibilidad por pH.',
      'Diazepam — precipitación.',
      'Soluciones alcalinas — incompatibilidad.',
      'Nafcilina — incompatibilidad documentada.',
      'NO mezclar con otros fármacos en misma jeringa sin verificar.',
      'Compatible: morfina, midazolam, propofol en líneas separadas (no en misma jeringa).',
      'Lavar línea con SF antes y después de fármacos incompatibles.',
    ],

    alertasSeguridad: [
      '🔴 DEPRESIÓN RESPIRATORIA — efecto adverso más grave, potenciada por benzodiacepinas/propofol.',
      '🔴 RIGIDEZ TORÁCICA con bolo rápido o > 5 mcg/kg — puede requerir succinilcolina/rocuronio + ventilación.',
      '🔴 NUNCA bolo IV en menos de 1-2 minutos.',
      '🔴 100× MÁS POTENTE QUE MORFINA — error de dosificación = sobredosis fatal.',
      '🟠 Acumulación con infusión prolongada > 6h — vida media contextual prolongada.',
      '🟠 Bradicardia por efecto vagomimético.',
      '🟠 Inhibidores CYP3A4 (amiodarona, claritromicina) — ↑ niveles fentanilo hasta 67%.',
      '🟠 Tolerancia, dependencia con uso > 7 días — descenso gradual.',
      '🟡 Estreñimiento universal con opioides — profilaxis OBLIGATORIA.',
      '🟡 Confusión con morfina o tramadol en dosis — ¡100× más potente!',
      '🟡 Síndrome serotoninérgico con ISRS (raro pero descrito).',
    ],
  },

  modulos: {

    respiratorio: `
      <b>Manejo de depresión respiratoria por fentanilo:</b><br/>
      <b>Vigilancia continua durante y 30 min post-bolo:</b><br/>
      • FR — objetivo ≥ 12 rpm (alerta 8-12, acción < 8).<br/>
      • SpO₂ — objetivo ≥ 94%.<br/>
      • Capnografía — gold standard en sedación profunda.<br/>
      • Nivel de consciencia.<br/><br/>
      <b>Si depresión leve (FR 8-12):</b><br/>
      1. Estimular paciente (verbal, dolor).<br/>
      2. O₂ suplementario 4-6 L/min.<br/>
      3. Reducir próxima dosis 50%.<br/>
      <b>Si depresión severa (FR < 8, apnea, SpO₂ < 90%):</b><br/>
      1. Maniobras vía aérea + ventilación con ambú + O₂ 100%.<br/>
      2. <b>NALOXONA 0.4 mg IV diluida en 10 mL SF, administrar 1 mL c/min</b>.<br/>
      3. Repetir cada 2-3 min hasta respuesta (máximo 10 mg).<br/>
      4. <b>Atención: vida media naloxona (1h) < vida media fentanilo en infusión prolongada (3-4h)</b>.<br/>
      5. Puede requerirse infusión de naloxona o repeticiones de bolos.<br/>
      6. Si no responde: intubación + ventilación mecánica.<br/>
      7. Notificar médico urgentemente.
    `,

    rigidezToracica: `
      <b>Rigidez Torácica por Fentanilo — EMERGENCIA:</b><br/>
      <b>Causa:</b> Estimulación opiode central → tono muscular torácico/abdominal severo.<br/>
      <b>Factores de riesgo:</b><br/>
      • Bolo IV rápido (< 1 min).<br/>
      • Dosis > 5 mcg/kg.<br/>
      • Inducción anestésica.<br/><br/>
      <b>Presentación clínica:</b><br/>
      • Paciente intenta respirar pero NO PUEDE.<br/>
      • Abdomen y tórax extremadamente tensos, "tabla".<br/>
      • Imposible ventilar con ambú.<br/>
      • Hipoxia rápida, cianosis.<br/>
      • SpO₂ ↓↓ pese a esfuerzo respiratorio.<br/><br/>
      <b>Manejo INMEDIATO:</b><br/>
      1. Pedir AYUDA — equipo de intubación.<br/>
      2. <b>SUCCINILCOLINA 1 mg/kg IV</b> (o rocuronio 0.6-1 mg/kg).<br/>
      3. Ventilación con ambú + intubación.<br/>
      4. NALOXONA si claramente por fentanilo (puede invertirse efecto).<br/>
      5. Monitor cardíaco continuo.<br/>
      <b>Prevención:</b> Bolo IV LENTO (mínimo 1-2 min). Evitar dosis > 5 mcg/kg.
    `,

    interacciones: `
      <b>Interacciones medicamentosas críticas:</b><br/>
      <b>INHIBIDORES CYP3A4 - ↑ NIVELES FENTANILO:</b><br/>
      • Ritonavir (↑↑ 67% niveles fentanilo).<br/>
      • Amiodarona.<br/>
      • Claritromicina, eritromicina.<br/>
      • Diltiazem, verapamilo.<br/>
      • Fluconazol, itraconazol, ketoconazol, voriconazol.<br/>
      • Cimetidina.<br/>
      <b>Acción:</b> Reducir dosis fentanilo 25-50%, vigilancia respiratoria intensiva.<br/><br/>
      <b>INDUCTORES CYP3A4 - ↓ NIVELES FENTANILO:</b><br/>
      • Carbamazepina, fenitoína, fenobarbital.<br/>
      • Rifampicina.<br/>
      • Hierba de San Juan.<br/>
      <b>Acción:</b> Pueden requerirse dosis ↑.<br/><br/>
      <b>SINERGIA DEPRESORA:</b><br/>
      • Benzodiacepinas (midazolam, lorazepam) → ↑↑ depresión respiratoria.<br/>
      • Propofol → ↑ depresión respiratoria y CV.<br/>
      • Alcohol → ↑↑ depresión SNC.<br/>
      • Otros opioides → no combinar sin estricta vigilancia.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Almacenar fentanilo en armario de estupefacientes con doble llave — control estricto.',
      'Registrar cada ampolla en libro de estupefacientes — legislación.',
      '<b>Verificar SIEMPRE la concentración: 50 mcg/mL (microgramos, no miligramos)</b>.',
      'Recordar: 100 mcg fentanilo = 10 mg morfina (100× más potente).',
      'Etiquetar bolsa/jeringa con: Fentanilo [mcg], concentración (mcg/mL), velocidad (mcg/h o mcg/kg/h), peso paciente, hora.',
      'Bomba de infusión OBLIGATORIA — programar en mcg/h o mcg/kg/h.',
      'Bolo IV mínimo 1-2 minutos para evitar rigidez torácica.',
      'Tener NALOXONA, succinilcolina/rocuronio, equipo intubación al lado de la cama.',
      'Monitor continuo: ECG, PA, SpO₂, capnografía si disponible.',
      'En sedación con propofol/midazolam: VIGILANCIA EXTREMA (sinergia depresora).',
      'En infusión > 6h: prever vida media prolongada al suspender.',
      'En parches transdérmicos: NO calor sobre el parche (↑ liberación, sobredosis).',
      '<b>INICIAR PROFILAXIS DE ESTREÑIMIENTO desde el día 1</b>.',
      'Vigilar miosis (pupilas puntiformes) como signo de efecto.',
      'En descenso prolongado: gradual 10-20% c/24-48h.',
    ],

    efectosAdversos: [
      '🔴 Depresión respiratoria / apnea',
      '🔴 Rigidez torácica con bolo rápido',
      '🔴 Hipotensión severa (especialmente con propofol)',
      '🔴 Bradicardia severa',
      '🟠 Sedación excesiva, somnolencia',
      '🟠 Estreñimiento (universal con opioides)',
      '🟠 Náuseas, vómitos (15-30%)',
      '🟠 Retención urinaria',
      '🟠 Miosis (pupilas puntiformes)',
      '🟡 Tolerancia, dependencia (uso > 7 días)',
      '🟡 Síndrome de abstinencia tras suspensión brusca',
      '🟡 Confusión, delirium en ancianos',
      '🟡 Prurito (menos frecuente que con morfina)',
      '🟡 Tórax rígido / "tabla" abdominal',
      '🟡 Hipertonia muscular',
    ],

    contraindicaciones: [
      'Depresión respiratoria severa sin ventilación mecánica.',
      'Asma bronquial activa severa (riesgo de broncoespasmo).',
      'Trauma craneoencefálico con ↑ PIC (oculta signos neurológicos, ↑ PIC).',
      'Íleo paralítico, obstrucción intestinal.',
      'Hipersensibilidad a fentanilo u opioides.',
      'Uso concomitante con IMAO en últimas 2 semanas.',
      'Embarazo (categoría C) — usar solo si beneficio supera riesgo.',
      'Miastenia gravis (relativa).',
    ],

    fotosensibilidad: 'No es significativamente fotosensible. La solución es estable a temperatura ambiente. Almacenar protegido de luz directa intensa pero sin requerimientos especiales de envase opaco.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente (< 25°C) hasta vencimiento',
      'Post-apertura ampolla':     '<b>USAR INMEDIATAMENTE</b> (microbiológicamente)',
      'Diluido en SF/SG 5%':       '<b>24 horas a 25°C · 24 horas a 2-8°C</b> (comprobado AEMPS)',
      'En bomba de infusión':      '24 horas máximo, cambiar bolsa al día',
      'Aspecto':                   'Transparente, incolora — desechar si turbidez',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Fentanest® 0.05 mg/mL (50 mcg/mL) — ampolla 3 mL (150 mcg)',
      'Fentanest® 0.05 mg/mL — ampolla 10 mL (500 mcg)',
      'Fentanilo Basi 50 mcg/mL — ampolla 2 mL (100 mcg) y 10 mL (500 mcg)',
      'Fentanilo Ethypharm 50 mcg/mL — ampolla 2 mL y 10 mL',
      'Parches transdérmicos: 12, 25, 50, 75, 100 mcg/h (Durogesic®, Matrifen®)',
      'Comprimidos sublinguales/bucales (Abstral®, Effentora®) — dolor irruptivo oncológico',
      'Aerosol nasal (PecFent®, Instanyl®) — dolor irruptivo',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Anestesia inducción adulto',          dosis: '50-100 mcg IV lento (1-2 min)',         via: 'IV' },
      { indicacion: 'Anestesia mantenimiento',             dosis: '25-50 mcg IV PRN',                       via: 'IV' },
      { indicacion: 'Intubación secuencia rápida',         dosis: '<b>1-3 mcg/kg IV lento</b>',             via: 'IV' },
      { indicacion: 'Sedación UCI (infusión)',             dosis: '<b>0.5-5 mcg/kg/h IV</b>',               via: 'IV' },
      { indicacion: 'Dolor severo agudo',                  dosis: '25-50 mcg IV c/30-60 min PRN',           via: 'IV' },
      { indicacion: 'Anestesia alta dosis (cirugía mayor)',dosis: '50-100 mcg/kg total IV',                 via: 'IV' },
      { indicacion: 'Parche transdérmico (crónico)',       dosis: '12-100 mcg/h (cambio c/72h)',            via: 'TD' },
      { indicacion: 'Dolor irruptivo (sublingual)',        dosis: '100-800 mcg sublingual PRN',             via: 'SL' },
    ],

    embarazo: 'Categoría C (FDA). Atraviesa placenta. Uso en cesárea: depresión respiratoria neonatal posible — minimizar dosis. En uso crónico durante embarazo: síndrome de abstinencia neonatal (NAS). Compatible con lactancia en dosis únicas pequeñas — evitar en infusión continua.',

    pediatria: 'Neonatos: 1-4 mcg/kg IV lento (con ventilación). Lactantes/niños: 1-2 mcg/kg IV c/30-60 min PRN. Infusión continua pediátrica: 1-5 mcg/kg/h. Mayor sensibilidad a depresión respiratoria en < 6 meses. Vigilancia hemodinámica intensiva.',

    adultoMayor: 'REDUCIR DOSIS 30-50%. Vida media ↑. Mayor riesgo de depresión respiratoria, delirium, caídas. Inicio 25 mcg en lugar de 50-100 mcg. Vigilancia post-administración prolongada.',

    insufRenal: '<b>VENTAJA vs morfina:</b> Sin metabolitos activos. Sin acumulación en IRC. Sin ajuste de dosis significativo. <b>OPIODE PREFERIDO en IRC severa (CrCl < 30) y diálisis</b>. Vigilancia clínica estándar.',

    insufHepatica: 'Metabolismo hepático (CYP3A4). En cirrosis severa: REDUCIR DOSIS 25-50%. Vida media ↑↑. Vigilancia neurológica intensiva. En insuficiencia hepática fulminante: preferir otros analgésicos.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Fentanest® 0.05 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Fentanilo Basi 50 mcg/mL. AEMPS.',
      'CIMA AEMPS. Ficha Técnica Fentanilo Ethypharm 50 mcg/mL. AEMPS.',
      'FDA DailyMed. Fentanyl Citrate Injection. U.S. National Library of Medicine.',
      'SCCM Guidelines. PADIS (Pain, Agitation, Delirium, Immobility, Sleep). Crit Care Med. 2018.',
      'ASA Guidelines. Practice Guidelines for Moderate Procedural Sedation. Anesthesiology. 2018.',
      'WHO Essential Medicines List. Fentanyl. 2023.',
      'Pediamécum AEP. Fentanilo. Asociación Española de Pediatría.',
    ],
  },

});
