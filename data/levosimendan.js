/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/levosimendan.js
   Fuentes: CIMA AEMPS (Simdax), FDA DailyMed,
   ESC HF Guidelines 2021, SURVIVE Trial 2007,
   LIDO Trial Lancet 2002
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'levosimendan',
  nombre:         'Levosimendán',
  nombreGenerico: 'Levosimendan',
  categoria:      'vasopresores',
  tags:           ['inotrópico', 'sensibilizador calcio', 'insuficiencia cardíaca', 'shock cardiogénico', 'ICC descompensada', 'UCI', 'cardíaco'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Inotrópico-vasodilatador. Produce hipotensión significativa (vasodilatación sistémica y pulmonar). No administrar si TA sistólica <85 mmHg sin soporte vasopresor. Monitorización hemodinámica invasiva obligatoria. El metabolito activo OR-1896 mantiene el efecto hasta 7-10 días tras la infusión — considerar en la planificación del tratamiento.',

  nivel1: {

    puntosClave: [
      '<b>Infusión única de 24 h</b>: 0.05-0.2 mcg/kg/min — el efecto dura <b>7-10 días</b> por metabolito activo.',
      '<b>Carga opcional</b>: 6-12 mcg/kg en 10 min — <b>omitir si TA sistólica <100 mmHg</b> (causa hipotensión).',
      '<b>Mecanismo único</b>: sensibiliza la troponina C al calcio (inotrópico sin aumentar consumo de O2) + vasodilatación K-ATP.',
      'No taquicardia refleja significativa — ventaja sobre dobutamina.',
      '<b>Potasio</b> antes de iniciar — hipopotasemia potencia la vasodilatación y el riesgo de arritmias.',
    ],

    resumenRapido: 'Inotrópico sensibilizador de calcio con efecto vasodilatador adicional. Actúa mediante dos mecanismos: 1) sensibiliza la troponina C cardíaca al Ca2+ (inotropismo positivo sin aumentar el consumo de O2 miocárdico); 2) abre canales K-ATP en músculo liso vascular (vasodilatación sistémica y pulmonar). Ventajas sobre catecolaminas: no arritmogénico, no taquicárdico, no aumenta consumo de O2. Su metabolito activo (OR-1896) extiende el efecto hasta 7-10 días tras una sola infusión de 24 h.',

    objetivoTerapeutico: 'Mejorar el gasto cardíaco en ICC descompensada grave · Reducir las presiones de llenado ventricular · Disminuir resistencias vasculares sistémicas y pulmonares · Tratamiento del shock cardiogénico · Alternativa a dobutamina (sin taquicardia, sin aumento de O2)',

    preparacion: {
      'Presentación':              '<b>Simdax® 2.5 mg/mL — vial 5 mL (12.5 mg)</b>',
      'Diluyente':                 '<b>SG 5% (OBLIGATORIO — no diluir en SF, precipita)</b>',
      'Concentración estándar':    '<b>12.5 mg en 250 mL SG 5% → 50 mcg/mL</b>',
      'Concentración alta':        '12.5 mg en 125 mL SG 5% → 100 mcg/mL (restricción hídrica)',
      'Carga (opcional)':          '6-12 mcg/kg IV en 10 min (OMITIR si TA sistólica <100 mmHg)',
      'Mantenimiento':             '<b>0.05-0.2 mcg/kg/min × 24 h</b>',
      'Inicio habitual':           '0.1 mcg/kg/min — ajustar según respuesta y TA',
      'Duración del tratamiento':  '<b>Infusión única de 24 h — efecto persiste 7-10 días por OR-1896</b>',
      'Bomba':                     '<b>Bomba de jeringa OBLIGATORIA</b>',
      'Vía':                       '<b>Venosa central preferente</b> — periférica solo si emergencia',
      '⏱️ Inicio efecto':           '5-30 min · Efecto máximo hemodinámico: 2-4 h',
      '⏱️ Duración total':          '<b>7-10 días por metabolito activo OR-1896</b>',
      '🧊 Estabilidad':             '<b>Refrigerar 2-8°C. Diluido en SG 5%: 24 h a temperatura ambiente</b>',
    },

    vigilancia: {
      antes: [
        'TA invasiva (arterial) o PANI cada 5 min — contraindicado si sistólica <85 mmHg sin vasopresor.',
        'Potasio sérico: hipopotasemia potencia vasodilatación y arritmias — corregir si <3.5 mEq/L.',
        'Hemoglobina — anemia reduce el beneficio del inotrópico.',
        'Función renal basal: creatinina — ajuste en IR grave.',
        'ECG basal — arritmias previas aumentan el riesgo.',
        'Peso actual para cálculo de dosis en mcg/kg/min.',
        'Ecocardiografía o PICCO si disponible — fracción de eyección, presiones de llenado.',
      ],
      durante: [
        'TA cada 5-15 min al inicio, luego c/30 min cuando esté estable.',
        'FC continua — taquicardia >120 lpm: valorar reducción de dosis.',
        'ECG continuo — vigilar arritmias (FA, TV).',
        'Potasio c/6-8 h — la vasodilatación puede producir hipopotasemia reactiva.',
        'Diuresis horaria — objetivo >0.5 mL/kg/h.',
        'Si TA sistólica <85 mmHg: omitir carga, reducir dosis de mantenimiento, valorar noradrenalina.',
      ],
      despues: [
        'Vigilancia hemodinámica 24-48 h post-infusión — efecto vasodilatador persiste.',
        'Creatinina diaria durante los primeros 3-5 días.',
        'Vigilar hipotensión tardía (24-48 h post-infusión) por el metabolito OR-1896.',
        'Evaluar mejoría clínica: diuresis, edemas, TA, gasto cardíaco.',
        'No repetir infusión antes de 7-10 días — el metabolito activo sigue presente.',
        'Documentar dosis, TA, FC y respuesta hemodinámica en cada turno.',
      ],
      suspender: [
        'Hipotensión grave refractaria (PAM <55 mmHg a pesar de ajustes y vasopresores).',
        'Arritmias ventriculares graves (TV sostenida, FV).',
        'Completar las 24 h de infusión — no prolongar (efecto se mantiene por metabolito).',
        'Mejoría rápida que no requiere continuar.',
      ],
    },

    incompatibilidades: [
      '<b>SOLO diluir en SG 5% — NO en SF 0.9% (precipitación)</b>.',
      'No mezclar con furosemida en la misma vía.',
      'No mezclar con otros fármacos en la misma bolsa.',
      'Incompatible con soluciones que contengan bicarbonato.',
      'Compatible en Y con: dobutamina, nitroglicerina (verificar protocolo).',
    ],

    alertasSeguridad: [
      '🔴 HIPOTENSIÓN — contraindicado si TA sistólica <85 mmHg sin vasopresor. Omitir la carga.',
      '🔴 SOLO EN SG 5% — precipita en SF. Preparar siempre con glucosa.',
      '🟠 Metabolito activo OR-1896: efecto vasodilatador hasta 7-10 días post-infusión — planificar.',
      '🟠 Hipopotasemia potencia vasodilatación y arritmias — corregir K+ antes de iniciar.',
      '🟠 No repetir antes de 7-10 días — efecto acumulativo con el metabolito.',
      '🟡 Cefalea frecuente (vasodilatación). Taquicardia leve posible.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Diluir SIEMPRE en SG 5% — NUNCA en SF 0.9% (precipitación inmediata).',
      'Preparar: 12.5 mg (1 vial de 5 mL) en 250 mL SG 5% → 50 mcg/mL.',
      'Calcular velocidad de infusión en mcg/kg/min con peso actual — programar bomba de jeringa.',
      'TA cada 5-15 min al inicio — omitir la dosis de carga si sistólica <100 mmHg.',
      'Si TA sistólica <85 mmHg: reducir velocidad, informar médico, valorar noradrenalina.',
      'Potasio sérico antes de iniciar y c/6-8 h — reponer si <3.5 mEq/L.',
      'ECG continuo durante toda la infusión — vigilar FA, flutter, arritmias ventriculares.',
      'Vigilar hipotensión durante 24-48 h DESPUÉS de finalizar la infusión (metabolito activo).',
      'Diuresis horaria — mejoría de la diuresis es señal de respuesta positiva.',
      'Documentar velocidad, TA, FC, K+ y diuresis en cada turno.',
    ],

    efectosAdversos: [
      '🔴 Hipotensión (frecuente — especialmente con dosis de carga)',
      '🟠 Taquicardia sinusal leve',
      '🟠 Arritmias (FA, flutter auricular — poco frecuentes)',
      '🟠 Cefalea (vasodilatación cerebral)',
      '🟡 Hipopotasemia reactiva',
      '🟡 Náuseas',
    ],

    contraindicaciones: [
      'TA sistólica <85 mmHg sin soporte vasopresor (hipotensión inicial).',
      'Obstrucción al flujo ventricular significativa (estenosis aórtica grave, CMHO).',
      'Insuficiencia renal grave (ClCr <30 mL/min) — acumulación del metabolito OR-1896.',
      'Insuficiencia hepática grave.',
      'Hipersensibilidad a levosimendán.',
      'Torsades de pointes previas o QTc muy prolongado.',
    ],

    fotosensibilidad: 'No relevante. Conservar en nevera 2-8°C. Proteger las bolsas diluidas de la luz directa.',

    estabilidad: {
      'Vial sin abrir':            '<b>Refrigerado 2-8°C hasta vencimiento. Proteger de luz.</b>',
      'Diluido en SG 5%':         '<b>24 h a temperatura ambiente protegido de luz</b>',
      'NO usar en SF 0.9%':       'Precipitación — solo SG 5%',
      'Aspecto':                   'Solución amarilla-naranja — normal (color del fármaco)',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras apertura del vial — desechar sobrante.',
      dosisRestante:     'Desechar sobrante de vial abierto.',
      infusionPreparada: '24 h en SG 5% a temperatura ambiente, protegida de luz directa.',
      notas:             'SOLO SG 5% — nunca SF 0.9%. El fármaco tiene color amarillo-naranja natural. Infusión única de 24 h; el metabolito activo OR-1896 extiende el efecto 7-10 días. No repetir antes de 7-10 días.',
    },

    presentaciones: [
      'Simdax® 2.5 mg/mL — vial 5 mL (12.5 mg)',
      'Levosimendán Orion® — genérico',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Carga (opcional)',             dosis: '6-12 mcg/kg IV en 10 min (omitir si TA <100)',                via: 'IV' },
      { indicacion: 'Mantenimiento estándar',        dosis: '<b>0.05-0.2 mcg/kg/min × 24 h en SG 5%</b>',               via: 'IV' },
      { indicacion: 'Dosis inicial recomendada',     dosis: '0.1 mcg/kg/min — ajustar c/30-60 min según TA y FC',        via: 'IV' },
      { indicacion: 'IR leve-moderada (ClCr 30-60)', dosis: '0.05-0.1 mcg/kg/min (reducir dosis — acumulación OR-1896)', via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Datos muy limitados en humanos. En ICC descompensada grave que amenaza la vida: usar solo si el beneficio supera el riesgo. Puede producir hipotensión fetal por vasodilatación. Monitorización fetal continua si se usa.',

    pediatria: 'Uso off-label en cardiopatías congénitas postquirúrgicas. Dosis: 0.05-0.2 mcg/kg/min IV × 24 h. Carga: 6-12 mcg/kg en 10-20 min (solo si TA normal). Uso creciente en UCI cardíaca pediátrica. Sin formulaciones pediátricas aprobadas.',

    adultoMayor: 'Mayor riesgo de hipotensión — reducir dosis inicial (0.05-0.1 mcg/kg/min) y omitir la carga. Vigilar función renal (acumulación del metabolito). Vigilar hipotensión tardía (mayor duración del efecto). No hay ajuste formal por edad.',

    insufRenal: '<b>ClCr <30 mL/min: CONTRAINDICADO</b> (acumulación grave del metabolito OR-1896 — efecto vasodilatador muy prolongado e impredecible). ClCr 30-60: reducir dosis a 0.05-0.1 mcg/kg/min. Diálisis no elimina el metabolito eficazmente.',

    insufHepatica: 'En IH moderada (Child-Pugh B): usar con precaución, reducir dosis. En IH grave (Child-Pugh C): CONTRAINDICADO (acumulación del metabolito OR-1896 por reducción del metabolismo hepático).',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Simdax® (levosimendán).',
      'Follath F et al. Efficacy and safety of intravenous levosimendan compared with dobutamine. Lancet. 2002 (LIDO).',
      'Mebazaa A et al. Levosimendan vs dobutamine for patients with acute decompensated heart failure. JAMA. 2007 (SURVIVE).',
      'McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021.',
      'Packer M et al. Levosimendan in patients with decompensated heart failure. NEJM. 2022.',
      'Nieminen MS et al. Executive summary of the guidelines on the diagnosis and treatment of acute heart failure. Eur Heart J. 2005.',
    ],
  },

});
