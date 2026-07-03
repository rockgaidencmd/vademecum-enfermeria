/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/sulfato-protamina.js
   Fuentes: CIMA AEMPS (Protamina LEO Pharma, Hospira),
   Red de Antídotos AEMPS, FDA DailyMed
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'sulfato-protamina',
  nombre:         'Sulfato de Protamina',
  nombreGenerico: 'Protamine Sulfate',
  categoria:      'anticoagulantes',
  tags:           ['antídoto', 'heparina', 'HBPM', 'reversión anticoagulación', 'cirugía cardíaca', 'hemorragia'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antídoto de heparina. RIESGO DE ANAFILAXIA (especialmente en diabéticos con insulina NPH previa, alérgicos al pescado, vasectomizados, exposición previa a protamina). Administración rápida causa hipotensión severa y bradicardia. Sobredosis tiene efecto ANTICOAGULANTE paradójico.',

  nivel1: {

    puntosClave: [
      'Proteína policatiónica básica (derivada de esperma de salmón) — forma complejo ESTABLE e INACTIVO con la heparina ácida, neutralizando su efecto anticoagulante.',
      '<b>1 mg de protamina neutraliza aproximadamente 100 UI de heparina no fraccionada</b> (si administrada < 15 min desde la heparina).',
      '<b>SOLO REVIERTE HEPARINA</b> — NO es antídoto de warfarina, dabigatrán, ni otros anticoagulantes cumarínicos.',
      '<b>RIESGO DE ANAFILAXIA</b> — mayor en: diabéticos con insulina NPH/protamina previa, alérgicos al pescado, hombres vasectomizados, exposición previa a protamina.',
      'Administración IV LENTA obligatoria: <b>máximo 5 mg/minuto</b> — infusión rápida causa hipotensión severa, bradicardia, shock anafilactoide.',
    ],

    resumenRapido: 'Antídoto específico de heparina no fraccionada (HNF) y parcial de heparinas de bajo peso molecular (HBPM). Se une iónicamente a la heparina (fuertemente ácida) formando un complejo estable sin actividad anticoagulante. NEUTRALIZA CASI COMPLETAMENTE la actividad anti-IIa de HBPM pero SOLO PARCIALMENTE la actividad anti-Xa (por eso la reversión de HBPM es incompleta, máximo 60-75%). Inicio: 5 minutos. Indicado en: reversión urgente de heparina no fraccionada (sobredosis, hemorragia, previo a procedimiento urgente), reversión parcial de HBPM (enoxaparina, dalteparina), neutralización post-circulación extracorpórea (cirugía cardíaca), reversión de heparina en diálisis.',

    objetivoTerapeutico: 'Neutralizar el efecto anticoagulante de heparina en sobredosis o hemorragia · Reversión post-bypass cardiopulmonar · Control de sangrado asociado a heparina',

    preparacion: {
      'Presentación':             '<b>Protamina Sulfato 10 mg/mL (1.400 UI anti-heparina/mL) - ampolla 5 mL (50 mg)</b>',
      'Diluyente':                'SF 0.9% · SG 5% (compatibles) - o administrar SIN DILUIR',
      'Dilución para perfusión':  '50 mg (5 mL) en 100-200 mL SF/SG5% (si perfusión lenta)',
      'Vía':                      'IV exclusiva (bolo lento o perfusión) - NUNCA IM/SC (riesgo hematoma)',
      '⏱️ ADMINISTRACIÓN':        '<b>Preferible SIN DILUIR, IV lenta en 10 minutos o perfusión continua</b>',
      '⏱️ VELOCIDAD MÁXIMA':      '<b>NUNCA superar 5 mg/minuto</b> (bolo rápido = hipotensión/shock)',
      '⏱️ DOSIS SEGÚN TIEMPO TRANSCURRIDO desde heparina:': '',
      '⏱️ < 15 min':               '<b>1-1.5 mg protamina por cada 100 UI heparina</b>',
      '⏱️ 30-60 min':              '<b>0.5-0.75 mg por cada 100 UI heparina</b>',
      '⏱️ 60-120 min':             '<b>0.375-0.5 mg por cada 100 UI heparina</b>',
      '⏱️ > 120 min':              '<b>0.25-0.375 mg por cada 100 UI heparina</b>',
      '⏱️ DOSIS MÁXIMA en bolo único':'<b>50 mg (5 mL)</b> — no exceder',
      '⏱️ Reversión HBPM (enoxaparina)':'1 mg protamina por cada 1 mg enoxaparina (si < 8h) - reversión PARCIAL (60-75%)',
      '⏱️ Cirugía cardíaca (post-CEC)':'1-1.3 mg por cada 100 UI heparina total administrada',
      'Bomba':                    'Recomendada para perfusión controlada',
      '🧊 ESTABILIDAD':           'Ampolla sin abrir: hasta vencimiento · Diluida: usar en 24h',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>Confirmar tiempo transcurrido desde última dosis de heparina</b> - determina dosis necesaria.',
        'Calcular dosis según UI de heparina a neutralizar.',
        'Revisar antecedentes de RIESGO ANAFILÁCTICO: diabetes con insulina NPH previa, alergia al pescado, vasectomía, exposición previa a protamina.',
        'TTPA/TCA basal (o anti-Xa si HBPM).',
        'Tener disponible: adrenalina, antihistamínicos, corticoides, equipo de reanimación.',
        'Acceso IV permeable.',
        'Considerar premedicación con antihistamínico + corticoide si alto riesgo alérgico.',
        'Doble verificación: cálculo de dosis, concentración de heparina previa.',
      ],
      durante: [
        '<b>Administración LENTA: máximo 5 mg/min</b> - NUNCA bolo rápido.',
        'Monitor continuo: PA, FC, SpO₂, ECG.',
        'Vigilar reacción ANAFILACTOIDE: rubor, urticaria, broncoespasmo, hipotensión súbita.',
        'Vigilar hipotensión y bradicardia (relacionadas con velocidad de infusión).',
        'Si reacción anafiláctica: SUSPENDER inmediatamente, tratar con adrenalina.',
        'Vigilar sensación de calor, náuseas (efectos por liberación de histamina, dosis-dependiente).',
      ],
      despues: [
        '<b>TTPA/TCA de control a los 5-15 minutos</b> post-administración.',
        'Repetir pruebas de coagulación según necesidad (especialmente en cirugía cardíaca).',
        'Vigilar sangrado - si continúa, puede requerir dosis adicional (con cautela).',
        '<b>VIGILAR EFECTO REBOTE de heparina</b> - puede reaparecer hasta 8h post-neutralización (redistribución tisular de heparina).',
        'Si hemorragia por sobredosis de protamina: la protamina EN EXCESO tiene actividad anticoagulante propia.',
        'Considerar plasma fresco congelado o sangre si hemorragia grave persiste.',
        'Documentar: dosis exacta, hora, tiempo desde heparina, respuesta coagulación.',
      ],
      suspender: [
        'Reacción anafiláctica / anafilactoide - suspender YA.',
        'Hipotensión severa refractaria.',
        'Bradicardia severa.',
        'Broncoespasmo agudo.',
        'Dosis máxima alcanzada (50 mg) sin lograr reversión adecuada.',
        'TTPA normalizado.',
      ],
    },

    incompatibilidades: [
      'Cefalosporinas (algunas) - verificar antes de mezclar.',
      'Penicilinas de amplio espectro.',
      'Generalmente NO mezclar con otros fármacos en misma jeringa/línea.',
      'Lavar línea con SF antes y después.',
    ],

    alertasSeguridad: [
      '🔴 <b>ANAFILAXIA</b> - riesgo mayor en diabéticos con NPH previa, alérgicos al pescado, vasectomizados, exposición previa a protamina.',
      '🔴 Administración rápida (> 5 mg/min): HIPOTENSIÓN SEVERA, BRADICARDIA, shock.',
      '🔴 <b>SOBREDOSIS de protamina TIENE EFECTO ANTICOAGULANTE PROPIO</b> - paradójicamente puede empeorar sangrado.',
      '🟠 <b>NO revierte warfarina ni otros cumarínicos</b> - solo heparina/HBPM.',
      '🟠 Reversión de HBPM es SOLO PARCIAL (60-75% de actividad anti-Xa).',
      '🟠 EFECTO REBOTE de heparina hasta 8h post-neutralización - vigilar sangrado tardío.',
      '🟠 Reacciones por liberación de histamina dosis-dependiente: rubor, prurito, náuseas.',
      '🟡 En cirugía cardíaca: dosis debe ajustarse según pruebas de coagulación seriadas.',
      '🟡 NUNCA administrar IM/SC - solo IV (riesgo de hematoma en sitio).',
      '🟡 Hipertensión pulmonar aguda descrita en raras ocasiones (especialmente en cirugía cardíaca).',
    ],
  },

  modulos: {

    anafilaxia: `
      <b>Riesgo de Anafilaxia por Protamina - Factores de Riesgo:</b><br/>
      <b>POBLACIONES DE ALTO RIESGO:</b><br/>
      • <b>Diabéticos tratados con insulina NPH o protamina-zinc</b> (exposición previa a protamina - sensibilización).<br/>
      • <b>Alérgicos al pescado</b> (protamina derivada de esperma de salmón).<br/>
      • <b>Hombres vasectomizados</b> (pueden desarrollar anticuerpos anti-protamina por exposición a proteínas similares en espermatozoides).<br/>
      • Exposición PREVIA a protamina (cirugía cardíaca previa, hemodiálisis previa).<br/>
      • Alergia a mariscos/pescado en general.<br/><br/>
      <b>PRESENTACIÓN CLÍNICA:</b><br/>
      • Reacción ANAFILACTOIDE (no siempre mediada por IgE) - liberación de histamina.<br/>
      • Rubor facial, urticaria.<br/>
      • Broncoespasmo, disnea.<br/>
      • Hipotensión súbita y severa.<br/>
      • Taquicardia o bradicardia refleja.<br/>
      • Shock cardiovascular.<br/>
      • Hipertensión pulmonar aguda (reacción específica, especialmente en CEC).<br/><br/>
      <b>PREVENCIÓN EN ALTO RIESGO:</b><br/>
      • Considerar premedicación: antihistamínico H1 + H2 + corticoide 30 min antes.<br/>
      • Administración MUY LENTA (más lenta que la estándar).<br/>
      • Tener adrenalina preparada.<br/>
      • Considerar alternativas si es posible (ej. dejar que heparina se metabolice naturalmente si no hay urgencia).<br/><br/>
      <b>MANEJO DE ANAFILAXIA:</b><br/>
      1. SUSPENDER protamina inmediatamente.<br/>
      2. <b>Adrenalina IM 0.3-0.5 mg</b> (0.01 mg/kg pediátrico) - cara anterolateral del muslo.<br/>
      3. O₂ alto flujo.<br/>
      4. Fluidos IV (cristaloides).<br/>
      5. Antihistamínicos: difenhidramina IV.<br/>
      6. Corticoides: hidrocortisona 200 mg IV.<br/>
      7. Broncodilatadores si broncoespasmo.<br/>
      8. Soporte vasopresor si shock refractario.<br/>
      9. Considerar circulación extracorpórea de emergencia si en quirófano.
    `,

    hbpm: `
      <b>Reversión de Heparina de Bajo Peso Molecular (HBPM):</b><br/>
      <b>LIMITACIÓN IMPORTANTE:</b><br/>
      • Protamina neutraliza CASI COMPLETAMENTE la actividad anti-IIa de HBPM.<br/>
      • Pero solo neutraliza <b>PARCIALMENTE (60-75%) la actividad anti-Xa</b>.<br/>
      • Por tanto, la reversión de HBPM es SIEMPRE INCOMPLETA.<br/><br/>
      <b>INDICACIÓN:</b><br/>
      • Hemorragia grave asociada a enoxaparina, dalteparina, tinzaparina.<br/>
      • Sobredosis de HBPM con riesgo de sangrado.<br/>
      • Necesidad de cirugía urgente en paciente con HBPM reciente.<br/><br/>
      <b>DOSIS según tiempo desde última dosis de HBPM:</b><br/>
      • <b>< 8 horas:</b> 1 mg protamina por cada 1 mg de enoxaparina (o equivalente).<br/>
      • <b>8-12 horas:</b> 0.5 mg protamina por cada 1 mg de enoxaparina.<br/>
      • <b>> 12 horas:</b> Generalmente no necesario (HBPM ya parcialmente eliminada).<br/><br/>
      <b>SI SANGRADO CONTINÚA:</b><br/>
      • Segunda dosis: 0.5 mg protamina por cada 1 mg de HBPM inicial.<br/>
      • Considerar factor VIIa recombinante en hemorragia refractaria (uso off-label).<br/>
      • Medidas de soporte: transfusión, compresión, control quirúrgico del foco.<br/><br/>
      <b>MONITORIZACIÓN:</b><br/>
      • Actividad anti-Xa (si disponible) - aunque no se normaliza completamente.<br/>
      • Clínica de sangrado como guía principal.
    `,

    cirugiaCardiaca: `
      <b>Protamina en Cirugía Cardíaca (Post-Bypass):</b><br/>
      <b>CONTEXTO:</b><br/>
      • Circulación extracorpórea (CEC) requiere heparinización masiva (300-400 UI/kg).<br/>
      • Al finalizar CEC: neutralización con protamina es CRÍTICA antes de cierre.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. Calcular dosis total de heparina administrada durante CEC.<br/>
      2. <b>Dosis protamina: 1-1.3 mg por cada 100 UI heparina total</b>.<br/>
      3. Administrar LENTAMENTE (10-15 min) mientras se retira la cánula aórtica.<br/>
      4. <b>NUNCA administrar mientras el paciente aún está en bypass</b> (riesgo de coagulación del circuito).<br/>
      5. Verificar TCA (tiempo de coagulación activado) - objetivo: valor basal pre-heparina.<br/>
      6. Si TCA sigue elevado: dosis adicional de protamina (cautelosa, riesgo de sobredosis).<br/><br/>
      <b>COMPLICACIONES ESPECÍFICAS EN CEC:</b><br/>
      • Hipertensión pulmonar aguda (reacción tipo II - mediada por complemento).<br/>
      • Colapso cardiovascular severo (reacción tipo III - anafilactoide).<br/>
      • Hipotensión sistémica transitoria (reacción tipo I - por velocidad de infusión).<br/><br/>
      <b>MANEJO SI HIPERTENSIÓN PULMONAR:</b><br/>
      • Óxido nítrico inhalado.<br/>
      • Soporte con vasopresores.<br/>
      • Considerar reinstitución de CEC si colapso severo.<br/><br/>
      <b>VIGILANCIA POST-QUIRÚRGICA:</b><br/>
      • Sangrado por drenajes torácicos.<br/>
      • TCA/TTPA seriados.<br/>
      • Efecto rebote de heparina (redistribución tisular) hasta 6-8h post-CEC.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>Revisar antecedentes de riesgo alérgico</b>: diabetes con NPH, alergia pescado, vasectomía.',
      'Calcular dosis según tiempo transcurrido desde la heparina.',
      'Preferir administración SIN DILUIR o diluida en poco volumen.',
      'Etiquetar jeringa: Protamina [mg], dosis calculada, hora.',
      '<b>VELOCIDAD MÁXIMA: 5 mg/min</b> - nunca bolo rápido.',
      'Bomba de infusión si perfusión lenta.',
      'Tener preparados: adrenalina, antihistamínicos, corticoides.',
      'Monitor continuo: PA, FC, SpO₂, ECG.',
      'Vigilar reacción anafiláctica/anafilactoide primeros 10-15 min.',
      '<b>NUNCA administrar IM/SC</b> - solo IV.',
      'TTPA/TCA de control a los 5-15 min post-administración.',
      'Vigilar efecto rebote de heparina hasta 8h post (redistribución tisular).',
      'En cirugía cardíaca: coordinar con perfusionista/cirujano el momento exacto.',
      'Documentar: dosis exacta, hora, tiempo desde heparina, respuesta coagulación, eventos.',
      'Si anafilaxia: protocolo de emergencia inmediato con adrenalina IM.',
    ],

    efectosAdversos: [
      '🔴 Anafilaxia / reacción anafilactoide',
      '🔴 Hipotensión severa (infusión rápida)',
      '🔴 Bradicardia severa',
      '🔴 Colapso cardiovascular',
      '🔴 Hipertensión pulmonar aguda (cirugía cardíaca)',
      '🔴 Efecto anticoagulante paradójico (sobredosis)',
      '🟠 Broncoespasmo',
      '🟠 Efecto rebote de heparina (sangrado tardío)',
      '🟡 Rubor facial, urticaria',
      '🟡 Náuseas, vómitos',
      '🟡 Fatiga, malestar',
      '🟡 Cefalea',
      '🟡 Hiperventilación',
      '🟡 Elevación de temperatura',
      '🟡 Sensación de calor generalizado',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a protamina o pescado.',
      'Precaución EXTREMA en: diabéticos con insulina NPH, vasectomizados, exposición previa a protamina.',
      'No usar como antídoto de anticoagulantes NO heparínicos (warfarina, DOACs).',
      'Precaución en insuficiencia cardíaca o pulmonar severa (riesgo de hipertensión pulmonar).',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente sin requerimientos especiales.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente (15-25°C) hasta vencimiento',
      'Diluida en SF/SG 5%':       '<b>24 horas</b>',
      'Post-apertura':              'Usar inmediatamente (microbiológicamente)',
      'Aspecto':                    'Transparente, incolora — desechar si turbidez',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Protamina Sulfato LEO Pharma 1.400 UI/mL (10 mg/mL) - ampolla 5 mL (50 mg)',
      'Protamina Hospira 10 mg/mL - ampolla 5 mL',
      'Protamina Sulfato Genéricos varios',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Heparina < 15 min desde administración',dosis: '<b>1-1.5 mg por cada 100 UI heparina</b>',  via: 'IV' },
      { indicacion: 'Heparina 30-60 min',                     dosis: '0.5-0.75 mg por cada 100 UI',              via: 'IV' },
      { indicacion: 'Heparina 60-120 min',                    dosis: '0.375-0.5 mg por cada 100 UI',             via: 'IV' },
      { indicacion: 'Heparina > 120 min',                     dosis: '0.25-0.375 mg por cada 100 UI',            via: 'IV' },
      { indicacion: 'HBPM (enoxaparina) < 8h',                dosis: '<b>1 mg por cada 1 mg enoxaparina</b>',    via: 'IV' },
      { indicacion: 'HBPM 8-12h',                              dosis: '0.5 mg por cada 1 mg enoxaparina',         via: 'IV' },
      { indicacion: 'Cirugía cardíaca (post-CEC)',            dosis: '1-1.3 mg por cada 100 UI heparina total',  via: 'IV' },
      { indicacion: 'DOSIS MÁXIMA bolo único',                dosis: '<b>50 mg (5 mL)</b>',                       via: 'IV' },
      { indicacion: 'Velocidad MÁXIMA',                        dosis: '<b>5 mg/min</b>',                            via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Uso en emergencias (hemorragia por heparina) durante embarazo si beneficio > riesgo. Compatible con lactancia según e-lactancia (datos limitados pero sin riesgo reportado).',

    pediatria: 'Seguridad y eficacia NO establecidas formalmente en < 18 años (ficha técnica CIMA), pero se usa clínicamente con precaución. Dosis: mismo cálculo proporcional que en adultos, con control estricto de coagulación.',

    adultoMayor: 'Sin ajuste específico de dosis. Mayor vigilancia hemodinámica (hipotensión, bradicardia).',

    insufRenal: 'Sin ajuste específico. Vigilancia clínica estándar.',

    insufHepatica: 'Sin ajuste específico. Vigilancia clínica estándar.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Protamina Sulfato LEO Pharma 1.400 UI/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Protamina Hospira 10 mg/mL. AEMPS.',
      'Red de Antídotos AEMPS. Protamina Sulfato - Protocolo de Uso. 2025.',
      'FDA DailyMed. Protamine Sulfate Injection. U.S. National Library of Medicine.',
      'e-lactancia.org. Protamina Sulfato - Compatibilidad con Lactancia.',
      'AHA/ACC Guidelines. Cardiopulmonary Bypass Anticoagulation Management. 2021.',
      'Levy JH, et al. Protamine Reactions - Mechanisms and Management. Anesth Analg. 2019.',
      'UpToDate. Protamine Sulfate - Drug Information. 2025.',
    ],
  },

});
