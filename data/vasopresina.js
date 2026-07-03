/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/vasopresina.js
   Fuentes: CIMA AEMPS (Empressin 20 UI/mL),
   Surviving Sepsis 2021, VASST Trial, AHA ACLS
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'vasopresina',
  nombre:         'Vasopresina (Argipresina)',
  nombreGenerico: 'Arginine Vasopressin',
  categoria:      'vasopresores',
  tags:           ['vasopresor', 'shock séptico', 'shock vasopléjico', 'ahorrador catecolaminas', 'UCI', 'segundo agente'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Vasopresor potente por mecanismo NO adrenérgico. NUNCA administrar en bolo IV rápido. Riesgo de isquemia periférica/mesentérica/coronaria por vasoconstricción intensa. NO recomendado en niños/lactantes (VASST pediátrico sin beneficio, más eventos adversos).',

  nivel1: {

    puntosClave: [
      'Hormona antidiurética sintética (argipresina) — actúa sobre <b>receptores V1 vasculares</b> (vasoconstricción NO adrenérgica) y V2 renales (antidiuresis) — mecanismo COMPLEMENTARIO a catecolaminas.',
      '<b>SEGUNDO AGENTE de elección en shock séptico</b> (tras noradrenalina) — Surviving Sepsis 2021: añadir cuando noradrenalina alcanza 0.25-0.5 mcg/kg/min, en vez de seguir escalando.',
      'Efecto <b>"AHORRADOR DE CATECOLAMINAS"</b> (decatecolaminización) — permite reducir dosis de noradrenalina, mitigando sus efectos adversos a dosis altas.',
      '<b>NUNCA administrar en bolo IV rápido para shock</b> — siempre en perfusión continua (excepción: PCR en dosis única).',
      'Dosis BAJAS Y FIJAS en shock séptico (0.01-0.03-0.04 UI/min) — <b>NO se titula al alza como los demás vasopresores</b> (dosis mayores no aportan beneficio y aumentan isquemia).',
    ],

    resumenRapido: 'Hormona antidiurética sintética idéntica a la vasopresina natural (arginina-vasopresina). A diferencia de las catecolaminas, actúa por mecanismo NO adrenérgico: receptores V1a en músculo liso vascular (vasoconstricción potente, especialmente en shock vasopléjico donde los receptores adrenérgicos están regulados a la baja) y V2 renales (antidiuresis). En shock séptico, los niveles endógenos de vasopresina están paradójicamente BAJOS (deficiencia relativa), lo que fundamenta su uso como terapia de reemplazo a dosis bajas. Inicio: minutos · Vida media: 10-20 min. Indicado en: shock séptico refractario a noradrenalina (segundo agente, SSC 2021), shock vasopléjico post-cirugía cardíaca, paro cardíaco (alternativa/adyuvante a adrenalina en algunos protocolos), diabetes insípida (uso endocrinológico, no relevante en UCI shock).',

    objetivoTerapeutico: 'Añadir efecto vasopresor no adrenérgico en shock refractario · Permitir reducción de dosis de noradrenalina · Alcanzar PAM objetivo en shock vasopléjico · Reducir efectos adversos de catecolaminas a dosis altas',

    preparacion: {
      'Presentación':             '<b>Empressin 20 UI/mL - ampolla 1 mL (20 UI)</b>',
      'Diluyente':                'SF 0.9% (compatible)',
      '⚠️ DILUCIÓN OBLIGATORIA':  '<b>NUNCA administrar sin diluir</b>',
      'Dilución estándar (ampolla 1 mL)':'1 mL (20 UI) + 49 mL SF 0.9% → <b>0.4 UI/mL</b>',
      'Dilución alternativa (ampolla 2 mL - otras presentaciones)':'2 mL + 48 mL SF → 0.8 UI/mL',
      'Vía':                      'IV exclusiva en PERFUSIÓN CONTINUA (nunca bolo rápido en shock)',
      '⏱️ DOSIS SHOCK SÉPTICO (SSC/VASST)':'<b>0.01-0.03 UI/min IV continua</b> (rango extendido hasta 0.04 UI/min)',
      '⏱️ Sin titulación ascendente':'<b>DOSIS FIJA</b> - NO aumentar más allá de 0.03-0.04 UI/min (no mejora respuesta, ↑ isquemia)',
      '⏱️ PCR (protocolo alternativo, uso limitado)':'40 UI IV/IO dosis única (puede sustituir 1ª o 2ª dosis de adrenalina - uso decreciente en guías actuales)',
      '⏱️ Shock vasopléjico post-cirugía cardíaca':'0.01-0.1 UI/min según protocolo institucional',
      'Bomba':                    'OBLIGATORIA para perfusión continua - control preciso en UI/min',
      '🧊 ESTABILIDAD':           'Ampolla sin abrir: refrigerar 2-8°C · Diluida: verificar protocolo institucional (usar preferentemente en 24h)',
      'Aspecto':                  'Solución transparente, incolora',
    },

    vigilancia: {
      antes: [
        'Confirmar shock séptico ya en noradrenalina a dosis 0.25-0.5 mcg/kg/min (indicación SSC 2021).',
        'PA, FC, perfusión periférica basal (color, temperatura, relleno capilar de extremidades).',
        'Evaluar perfusión coronaria/mesentérica basal si es posible.',
        'Revisar antecedentes de enfermedad arterial periférica, coronariopatía severa (mayor riesgo isquémico).',
        'Acceso IV central preferido (igual que otros vasopresores).',
        'Doble verificación: dilución CORRECTA, dosis en UI/min, velocidad en bomba.',
      ],
      durante: [
        'Monitor continuo: PA (línea arterial preferida), FC, ECG.',
        '<b>Vigilar ISQUEMIA PERIFÉRICA</b>: color y temperatura de dedos de manos/pies, livedo reticularis.',
        'Vigilar ISQUEMIA MESENTÉRICA: distensión abdominal, dolor, acidosis láctica progresiva.',
        'Vigilar ISQUEMIA CORONARIA: cambios en ECG, dolor torácico si el paciente está consciente.',
        'NO titular al alza agresivamente - mantener dosis baja fija (0.01-0.03-0.04 UI/min).',
        'Vigilar hiponatremia (efecto antidiurético V2).',
        'Monitorizar diuresis - puede REDUCIRSE por efecto antidiurético.',
      ],
      despues: [
        'Al mejorar el shock: <b>reducir PRIMERO la noradrenalina, luego la vasopresina</b> (o simultáneo según protocolo) - evitar destete brusco de vasopresina (riesgo de hipotensión de rebote).',
        'Continuar vigilancia de perfusión periférica tras suspender.',
        'Control de sodio sérico (riesgo de alteraciones por efecto antidiurético).',
        'Evaluar función renal, hepática, isquemia digital residual.',
        'Documentar: dosis, duración, respuesta en PAM, reducción de noradrenalina lograda, eventos isquémicos.',
      ],
      suspender: [
        'Isquemia digital/periférica significativa.',
        'Isquemia mesentérica sospechada o confirmada.',
        'Isquemia coronaria aguda atribuible.',
        'Hiponatremia severa sintomática.',
        'PAM objetivo alcanzado permitiendo destete de vasopresores.',
        'Reacción alérgica (rara).',
      ],
    },

    incompatibilidades: [
      'No debe intercambiarse con otros medicamentos que contengan argipresina con diferentes unidades de concentración.',
      'Verificar compatibilidad antes de mezclar con otros fármacos en la misma línea.',
      'Preferir línea IV independiente o vía central dedicada, especialmente si se combina con noradrenalina en líneas separadas.',
    ],

    alertasSeguridad: [
      '🔴 <b>NUNCA administrar en bolo IV rápido para tratamiento de shock</b> - solo perfusión continua (excepción: dosis única en PCR según protocolo específico).',
      '🔴 <b>ISQUEMIA PERIFÉRICA, MESENTÉRICA Y CORONARIA</b> por vasoconstricción intensa - vigilancia continua.',
      '🔴 <b>NO RECOMENDADO en niños y lactantes</b> para shock séptico (ficha técnica CIMA: sin mejora en supervivencia, más eventos adversos vs tratamiento convencional).',
      '🟠 <b>DOSIS FIJA BAJA</b> - no title al alza esperando mayor efecto (0.01-0.04 UI/min es el rango basado en evidencia, VASST).',
      '🟠 Hiponatremia por efecto antidiurético (retención de agua libre).',
      '🟠 Reducción de diuresis (efecto V2 renal antidiurético).',
      '🟡 No intercambiar entre presentaciones con diferentes unidades de concentración - riesgo de error de dosificación grave.',
      '🟡 En shock séptico: SIEMPRE como terapia AÑADIDA a noradrenalina, nunca como monoterapia de primera línea.',
      '🟡 Reducción de necesidad de catecolaminas documentada (efecto "ahorrador") - permite bajar noradrenalina gradualmente.',
    ],
  },

  modulos: {

    shockSeptico: `
      <b>Vasopresina en Shock Séptico - Surviving Sepsis 2021:</b><br/>
      <b>RECOMENDACIÓN ACTUAL:</b><br/>
      • <b>Añadir vasopresina cuando la noradrenalina alcanza 0.25-0.5 mcg/kg/min</b>, EN LUGAR de continuar escalando la dosis de noradrenalina.<br/>
      • Evidencia reciente favorece el <b>INICIO TEMPRANO</b> de vasopresina, antes de alcanzar dosis muy altas de noradrenalina.<br/><br/>
      <b>FUNDAMENTO FISIOPATOLÓGICO:</b><br/>
      • En shock séptico prolongado, los niveles endógenos de vasopresina están PARADÓJICAMENTE BAJOS (deficiencia relativa) - "terapia de reemplazo" más que "vasopresor exógeno adicional".<br/>
      • Los receptores adrenérgicos se regulan a la baja (down-regulation) en shock prolongado - la vasopresina actúa por vía DIFERENTE (V1a), manteniendo efectividad.<br/><br/>
      <b>ENSAYO VASST (referencia):</b><br/>
      • 778 pacientes con shock séptico resistente a fluidos.<br/>
      • Comparó vasopresina (0.01-0.03 UI/min) vs noradrenalina adicional.<br/>
      • Sin diferencia significativa en mortalidad global, pero POSIBLE beneficio en subgrupo de shock séptico menos severo.<br/>
      • Estableció el rango de dosis BAJA como seguro y efectivo.<br/><br/>
      <b>PROTOCOLO PRÁCTICO:</b><br/>
      1. Noradrenalina ya en curso, alcanzando 0.25-0.5 mcg/kg/min sin PAM objetivo (≥65 mmHg).<br/>
      2. <b>Añadir vasopresina 0.01-0.03 UI/min</b> (diluida correctamente).<br/>
      3. <b>Mantener dosis FIJA</b> - no titular al alza como con catecolaminas.<br/>
      4. Efecto esperado: PAM ↑, posibilidad de REDUCIR noradrenalina ("ahorro de catecolaminas").<br/>
      5. Si PAM sigue sin objetivo pese a vasopresina + noradrenalina alta: considerar tercer agente (adrenalina) y reevaluar foco/causa del shock.<br/><br/>
      <b>DECATECOLAMINIZACIÓN:</b><br/>
      • Concepto clave: reducir la carga total de catecolaminas exógenas reduce sus efectos adversos (arritmias, isquemia miocárdica, inmunosupresión).<br/>
      • Vasopresina facilita este objetivo al aportar vasoconstricción por vía independiente.
    `,

    isquemia: `
      <b>Vigilancia de Isquemia por Vasopresina:</b><br/>
      <b>MECANISMO DE RIESGO:</b><br/>
      • Vasoconstricción potente y generalizada por receptores V1a.<br/>
      • A diferencia de catecolaminas, el efecto es menos "selectivo" en redistribuir flujo hacia órganos vitales.<br/><br/>
      <b>TERRITORIOS DE RIESGO:</b><br/>
      <b>1. Isquemia periférica (más frecuente):</b><br/>
      • Vigilar color, temperatura, relleno capilar de dedos de manos y pies.<br/>
      • Livedo reticularis.<br/>
      • Cianosis distal progresiva.<br/>
      • Puede llevar a necrosis digital en casos severos/prolongados.<br/><br/>
      <b>2. Isquemia mesentérica (grave, puede pasar desapercibida):</b><br/>
      • Distensión abdominal nueva.<br/>
      • Dolor abdominal (si el paciente puede reportarlo).<br/>
      • Acidosis láctica progresiva sin otra explicación.<br/>
      • Íleo, intolerancia a nutrición enteral.<br/>
      • Considerar TC abdominal si alta sospecha.<br/><br/>
      <b>3. Isquemia coronaria:</b><br/>
      • Cambios en ECG (elevación/descenso ST, nuevas ondas Q).<br/>
      • Troponina seriada si hay sospecha.<br/>
      • Especial precaución en pacientes con coronariopatía conocida.<br/><br/>
      <b>MANEJO SI APARECE ISQUEMIA:</b><br/>
      1. Reducir o suspender vasopresina.<br/>
      2. Compensar con ajuste de noradrenalina si necesario para mantener PAM.<br/>
      3. Evaluación por especialista según territorio afectado (cirugía vascular, digestivo, cardiología).<br/>
      4. Documentar el evento para decisiones futuras de manejo del paciente.
    `,

    pediatriaExclusion: `
      <b>Vasopresina NO Recomendada en Niños/Lactantes:</b><br/>
      <b>DATOS DE FICHA TÉCNICA (CIMA AEMPS):</b><br/>
      • La argipresina ha sido utilizada para shock séptico en niños y lactantes en UCI y procedimientos quirúrgicos.<br/>
      • <b>Comparada con tratamiento convencional: NO produjo mejora en supervivencia</b>.<br/>
      • <b>Mostró tasas MÁS ALTAS de eventos adversos</b> (isquémicos, entre otros).<br/>
      • <b>CONCLUSIÓN: NO SE RECOMIENDA el uso en niños y lactantes</b> para esta indicación.<br/><br/>
      <b>IMPLICACIÓN CLÍNICA:</b><br/>
      • En shock séptico pediátrico refractario a noradrenalina: preferir otras estrategias (adrenalina como segundo agente, optimización de fluidos, considerar corticoides si insuficiencia suprarrenal relativa).<br/>
      • Uso de vasopresina en pediatría debe reservarse a decisión especializada individualizada, fuera de la indicación estándar de shock séptico, y con conocimiento del perfil de riesgo/beneficio menos favorable que en adultos.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>SIEMPRE diluir antes de administrar</b> - nunca sin diluir.',
      'Verificar concentración del vial y calcular dilución exacta.',
      'Etiquetar bolsa: Vasopresina [UI], concentración final (UI/mL), velocidad (UI/min), hora.',
      'Bomba de infusión OBLIGATORIA - programada en UI/min o mL/h según protocolo.',
      'Preferir vía central (igual que otros vasopresores).',
      '<b>NUNCA bolo IV rápido</b> para tratamiento de shock.',
      'Monitor continuo: PA (línea arterial preferida), FC, ECG.',
      'Vigilar ISQUEMIA PERIFÉRICA: color, temperatura, relleno capilar de extremidades cada turno.',
      'Vigilar signos de isquemia mesentérica: distensión abdominal, intolerancia digestiva, lactato.',
      'Vigilar cambios ECG sugestivos de isquemia coronaria.',
      '<b>NO titular al alza agresivamente</b> - mantener dosis baja fija según protocolo.',
      'Control de sodio sérico y diuresis (efecto antidiurético).',
      'Al destete: coordinar con médico el orden de reducción de vasopresores.',
      'Documentar: dosis, duración, PAM lograda, reducción de noradrenalina, eventos isquémicos.',
      'NO usar en pediatría salvo indicación especializada específica.',
    ],

    efectosAdversos: [
      '🔴 Isquemia periférica (digital)',
      '🔴 Isquemia mesentérica',
      '🔴 Isquemia coronaria',
      '🔴 Necrosis cutánea/digital (casos severos)',
      '🟠 Hiponatremia (efecto antidiurético)',
      '🟠 Reducción de diuresis',
      '🟠 Arritmias (menos frecuente que con catecolaminas)',
      '🟡 Palidez cutánea generalizada',
      '🟡 Náuseas, dolor abdominal leve',
      '🟡 Cefalea',
      '🟡 Broncoconstricción leve (raro)',
      '🟡 Reacción alérgica (rara)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a argipresina o excipientes.',
      'Enfermedad vascular oclusiva severa (relativa - vigilancia extrema si se usa).',
      'No recomendado como primera línea en niños/lactantes para shock séptico.',
      'Precaución en: coronariopatía severa, enfermedad arterial periférica avanzada, insuficiencia vascular mesentérica previa.',
    ],

    fotosensibilidad: 'No relevante. Conservar refrigerado según indicación del fabricante.',

    estabilidad: {
      'Ampolla sin abrir':          'Refrigerar 2-8°C (verificar packaging específico) hasta vencimiento',
      'Diluida en SF':               'Uso según protocolo institucional - generalmente preferible usar en 24h',
      'Aspecto':                     'Transparente, incolora — desechar si turbidez',
      'Temperatura':                 'Refrigerar · NO congelar',
    },

    presentaciones: [
      'Empressin® 20 UI/mL - ampolla 1 mL (20 UI)',
      'Otras presentaciones internacionales pueden variar en concentración - VERIFICAR SIEMPRE antes de diluir',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Shock séptico (segundo agente, SSC 2021)',dosis: '<b>0.01-0.03 UI/min IV continua</b>',      via: 'IV' },
      { indicacion: 'Rango extendido según respuesta',        dosis: 'Hasta 0.04 UI/min (dosis fija, no escalar más)',via: 'IV' },
      { indicacion: 'Shock vasopléjico post-cirugía cardíaca', dosis: '0.01-0.1 UI/min según protocolo',           via: 'IV' },
      { indicacion: 'PCR (protocolo alternativo, uso limitado)',dosis: '40 UI IV/IO dosis única',                  via: 'IV/IO' },
      { indicacion: 'Pediátrico',                              dosis: '<b>NO RECOMENDADO</b> (ficha técnica CIMA)',via: '—' },
    ],

    embarazo: 'Datos limitados en embarazo. Uso solo en emergencias maternas (shock séptico refractario) si beneficio > riesgo. Vigilar contractilidad uterina (efecto oxitócico cruzado potencial a dosis altas).',

    pediatria: '<b>NO RECOMENDADO</b> según ficha técnica CIMA AEMPS - estudios en niños y lactantes con shock séptico no mostraron mejora en supervivencia y sí mayores tasas de eventos adversos comparado con tratamiento convencional.',

    adultoMayor: 'Sin ajuste específico de dosis. Mayor riesgo de isquemia por mayor prevalencia de enfermedad vascular/coronaria de base. Vigilancia intensiva.',

    insufRenal: 'Sin ajuste específico de dosis. Vigilar balance hídrico y sodio con mayor frecuencia (efecto antidiurético puede ser más pronunciado).',

    insufHepatica: 'Sin ajuste específico establecido. Vigilancia clínica estándar.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Empressin® 20 UI/mL Concentrado para Solución para Perfusión. Agencia Española de Medicamentos.',
      'Surviving Sepsis Campaign Guidelines 2021. Crit Care Med.',
      'Russell JA, et al. VASST Trial - Vasopressin versus Norepinephrine in Septic Shock. NEJM. 2008.',
      'Medicina Intensiva. Diez Aspectos Clave sobre el Uso de la Vasopresina en el Paciente Crítico. 2024.',
      'AHA ACLS Guidelines 2020. Vasopressors in Cardiac Arrest. Circulation.',
      'Cardioteca. Noradrenalina y Vasopresores: Evidencia y Práctica Clínica. 2025.',
      'Gordon AC, et al. Effect of Early Vasopressin vs Norepinephrine on Kidney Failure in Septic Shock (VANISH Trial). JAMA. 2016.',
      'Pediamécum AEP / Ficha Técnica CIMA - Uso Pediátrico No Recomendado.',
    ],
  },

});
