/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/etomidato.js
   Fuentes: CIMA AEMPS (Etomidato Lipuro, Hypnomidate),
   FDA DailyMed, ASA Guidelines, RSI Protocols
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'etomidato',
  nombre:         'Etomidato',
  nombreGenerico: 'Etomidate',
  categoria:      'analgesia',
  tags:           ['UCI', 'inductor anestésico', 'intubación', 'RSI', 'estabilidad CV', 'emergencia'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Inductor anestésico potente. SUPRESIÓN SUPRARRENAL DOSIS-DEPENDIENTE (incluso dosis única en sepsis - controvertido). Mioclonías frecuentes. NO USO EN INFUSIÓN CONTINUA. Solo personal entrenado en vía aérea.',

  nivel1: {

    puntosClave: [
      'Inductor anestésico no-barbitúrico de acción ultracorta — agonista GABA-A.',
      '<b>VENTAJA ÚNICA: ESTABILIDAD HEMODINÁMICA</b> — sin caída de PA, FC o gasto cardíaco. Indicado en pacientes inestables, IAM, shock, cardiópatas.',
      'Inicio < 1 minuto · Duración 5-10 min tras bolo único — ideal para INTUBACIÓN DE SECUENCIA RÁPIDA (RSI).',
      '<b>SUPRESIÓN SUPRARRENAL</b> dosis-dependiente — controvertida en sepsis con bolo único, contraindicada en infusión continua.',
      'MIOCLONÍAS frecuentes (50-80%) durante inducción — premediar con benzodiacepina o fentanilo para reducirlas.',
    ],

    resumenRapido: 'Inductor anestésico no-barbitúrico derivado del imidazol. Agonista del receptor GABA-A → hipnosis profunda y sedación. Inicio: 30-60 segundos, pico: 1 min, duración: 5-10 min tras bolo único. <b>ESTABILIDAD HEMODINÁMICA</b> excepcional (sin depresión CV) - preferido en pacientes inestables, IAM, shock cardiogénico, intubación urgente. No analgesia. No relajación muscular. Indicado en: INDUCCIÓN ANESTÉSICA en pacientes hemodinámicamente inestables, RSI (intubación de secuencia rápida), sedación procedural breve (cardioversión, reducción de fracturas).',

    objetivoTerapeutico: 'Inducción anestésica rápida con preservación hemodinámica · Intubación de secuencia rápida (RSI) · Cardioversión sin compromiso CV · Procedimientos breves en pacientes inestables',

    preparacion: {
      'Presentación Etomidato Lipuro':'<b>Etomidato 2 mg/mL emulsión lipídica - ampolla 10 mL (20 mg)</b>',
      'Presentación Hypnomidate':  'Etomidato 2 mg/mL en propilenglicol - ampolla 10 mL (20 mg)',
      'Diferencia formulaciones':  'Lipuro (emulsión lipídica): menos dolor IV · Hypnomidate (propilenglicol): mayor dolor IV',
      'Diluyente':                'NO requiere dilución habitualmente - <b>USAR SIN DILUIR</b>',
      'Si requiere dilución':     'SF 0.9% (compatible)',
      'Vía':                      'IV exclusiva',
      '⏱️ DOSIS INDUCCIÓN':       '<b>0.2-0.3 mg/kg IV en 30-60 seg</b> (típico 14-21 mg adulto 70 kg)',
      '⏱️ DOSIS RSI':              '<b>0.3 mg/kg IV en bolo único</b> (administración rápida para intubación)',
      '⏱️ DOSIS sedación procedural':'0.1-0.2 mg/kg IV (cardioversión, reducción)',
      '⏱️ DOSIS pediátrica':      '0.2-0.3 mg/kg IV (similar adulto)',
      '⏱️ DOSIS anciano/inestable':'<b>0.1-0.2 mg/kg IV</b> (reducción 30-50%)',
      '⏱️ Velocidad bolo RSI':     '<b>Bolo rápido (10-15 segundos)</b> para RSI · Más lento (30-60 seg) en sedación procedural',
      'Bomba':                    '<b>NO requiere bomba</b> - uso en bolo único',
      '🧊 ESTABILIDAD':           'Vial sin abrir: hasta vencimiento · Una vez abierto: usar inmediatamente',
      'Aspecto Lipuro':           'Emulsión blanca opalescente uniforme - desechar si separación de fases',
      'Aspecto Hypnomidate':       'Solución transparente, incolora - desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>Personal entrenado en manejo de vía aérea OBLIGATORIO</b>.',
        'Equipo de intubación, laringoscopio, tubos, ambú, O₂, succión disponibles.',
        'PA, FC, FR, SpO₂, ECG basales registrados.',
        'Acceso IV permeable de buen calibre.',
        'En sepsis: considerar alternativa (ketamina) por riesgo supresión suprarrenal.',
        'Premedicar con FENTANILO 1-3 mcg/kg o MIDAZOLAM 1-2 mg para reducir mioclonías.',
        'Tener relajante muscular preparado para RSI (succinilcolina o rocuronio).',
        'Doble verificación: dosis exacta (calcular por peso), no superar 0.3 mg/kg.',
      ],
      durante: [
        '<b>Bolo IV 30-60 segundos</b> (RSI: 10-15 seg).',
        'Monitor continuo: ECG, PA, SpO₂, capnografía.',
        'Vigilar MIOCLONÍAS - movimientos involuntarios musculares (50-80%) - generalmente breves.',
        'Si mioclonías severas: midazolam 1-2 mg IV rescate.',
        'PA c/5 min - estable hemodinámicamente pero vigilancia.',
        'FR puede ↓ - DEPRESIÓN RESPIRATORIA en 30-60% (apnea breve).',
        'Vigilar DOLOR EN SITIO IV (especialmente Hypnomidate) - 30-50% de pacientes.',
        'Si vómito en inducción (raro): aspiración protegida.',
      ],
      despues: [
        'Continuar monitor 30-60 min post-bolo.',
        'Evaluar nivel de consciencia (recuperación rápida 5-10 min).',
        'Si DOSIS ÚNICA para RSI: vigilancia de cortisol o vigilancia clínica de insuficiencia suprarrenal en sepsis.',
        'NO ADMINISTRAR EN INFUSIÓN CONTINUA (supresión suprarrenal severa).',
        'Documentar: dosis exacta, indicación, respuesta hemodinámica, mioclonías, eventos.',
        'En sepsis post-RSI con etomidato: considerar hidrocortisona profiláctica (controvertido, individualizar).',
      ],
      suspender: [
        'Reacción alérgica / anafilaxia.',
        'Hipotensión severa (raro pero descrito).',
        'Apnea prolongada sin manejo de vía aérea preparado.',
        'Sospecha de insuficiencia suprarrenal aguda.',
        'NO USO EN INFUSIÓN CONTINUA - solo bolos únicos.',
      ],
    },

    incompatibilidades: [
      'Generalmente bien tolerado en compatibilidades.',
      'Soluciones alcalinas - posible incompatibilidad.',
      'Etomidato Lipuro (emulsión): NO MEZCLAR con otros medicamentos en misma jeringa (puede romper la emulsión).',
      'Hypnomidate: contiene propilenglicol - alergia rara pero descrita.',
      'NO mezclar con bloqueantes neuromusculares en misma jeringa - administrar secuencialmente.',
    ],

    alertasSeguridad: [
      '🔴 <b>SUPRESIÓN SUPRARRENAL DOSIS-DEPENDIENTE</b> - inhibe 11-beta-hidroxilasa.',
      '🔴 <b>NUNCA USO EN INFUSIÓN CONTINUA</b> - mortalidad significativa por supresión suprarrenal.',
      '🔴 EN SEPSIS: controvertido bolo único - algunos estudios muestran ↑ mortalidad, otros no.',
      '🟠 MIOCLONÍAS frecuentes (50-80%) - premediar con benzo/fentanilo.',
      '🟠 DOLOR EN SITIO IV - especialmente Hypnomidate (propilenglicol).',
      '🟠 NÁUSEAS/VÓMITOS al despertar - 30%.',
      '🟠 NO ANALGÉSICO - combinar con opioide.',
      '🟠 NO RELAJACIÓN MUSCULAR - requiere relajante para intubación.',
      '🟡 Depresión respiratoria/apnea transitoria - 30-60%.',
      '🟡 En porfiria aguda intermitente: CONTRAINDICADO.',
      '🟡 Sin efecto analgésico residual - asegurar analgesia post-intubación.',
    ],
  },

  modulos: {

    rsi: `
      <b>Etomidato en Intubación de Secuencia Rápida (RSI):</b><br/>
      <b>INDICACIÓN PREFERIDA:</b><br/>
      • Pacientes hemodinámicamente INESTABLES.<br/>
      • IAM agudo / shock cardiogénico.<br/>
      • Hipovolemia / shock hipovolémico.<br/>
      • Trauma con hemorragia.<br/>
      • Cardiopatía severa.<br/>
      • Pacientes ancianos frágiles.<br/><br/>
      <b>VENTAJA vs propofol/ketamina:</b><br/>
      • <b>SIN caída de PA</b> (propofol: -30%, ketamina: ↑ HTA).<br/>
      • Sin depresión miocárdica.<br/>
      • Sin ↑ PIC (vs ketamina).<br/>
      • Inicio y duración predecibles.<br/><br/>
      <b>PROTOCOLO RSI:</b><br/>
      <b>Preoxigenación:</b> O₂ 100% × 3 min (denitrogenación).<br/>
      <b>Premedicación (opcional):</b><br/>
      • Fentanilo 1-3 mcg/kg IV (atenúa respuesta CV, reduce mioclonías).<br/>
      • Lidocaína 1.5 mg/kg IV (en TCE, ↑ PIC, asma).<br/>
      <b>Inducción:</b><br/>
      • <b>Etomidato 0.3 mg/kg IV bolo (10-15 seg)</b>.<br/>
      <b>Relajante muscular:</b><br/>
      • Succinilcolina 1-1.5 mg/kg IV (acción 30-60 seg).<br/>
      • Alternativa: Rocuronio 0.6-1.2 mg/kg IV (90 seg).<br/>
      <b>Maniobra de Sellick</b> (opcional, controvertido).<br/>
      <b>Intubación a los 45-60 segundos</b> post-relajante.<br/>
      <b>Post-intubación:</b><br/>
      • Sedación de mantenimiento (propofol, midazolam, ketamina).<br/>
      • Analgesia (fentanilo, morfina).<br/>
      • Ventilación mecánica.
    `,

    sepsis: `
      <b>Etomidato en Sepsis - Controversia:</b><br/>
      <b>PROBLEMA:</b><br/>
      • Etomidato inhibe 11-beta-hidroxilasa suprarrenal.<br/>
      • Reduce síntesis de cortisol durante 6-72 horas tras dosis única.<br/>
      • En sepsis: insuficiencia suprarrenal relativa puede empeorar pronóstico.<br/><br/>
      <b>EVIDENCIA:</b><br/>
      <b>A favor de etomidato en sepsis:</b><br/>
      • Estabilidad hemodinámica crucial en intubación de séptico.<br/>
      • Algunos estudios (Kettler) no muestran ↑ mortalidad con bolo único.<br/>
      • Alternativas (ketamina, propofol) tienen propias desventajas.<br/><br/>
      <b>En contra:</b><br/>
      • Meta-análisis (Chan 2012) sugiere ↑ mortalidad ~ 10%.<br/>
      • Estudio CORTICUS reanalizado.<br/>
      • Surviving Sepsis 2021 sugiere PRECAUCIÓN.<br/><br/>
      <b>RECOMENDACIÓN ACTUAL:</b><br/>
      • Caso a caso - individualizar.<br/>
      • <b>Si paciente séptico INESTABLE:</b> etomidato puede ser mejor opción que propofol (estabilidad CV).<br/>
      • <b>Alternativa preferida:</b> ketamina 1-2 mg/kg IV (estable hemodinámicamente, sin supresión suprarrenal).<br/>
      • Considerar hidrocortisona profiláctica 200 mg/día IV post-etomidato en sepsis (controvertido).<br/>
      • <b>NUNCA infusión continua</b> en sepsis - claramente perjudicial.
    `,

    mioclonias: `
      <b>Manejo de Mioclonías por Etomidato:</b><br/>
      <b>INCIDENCIA:</b> 50-80% de pacientes - una de las características más distintivas.<br/>
      <b>DESCRIPCIÓN:</b><br/>
      • Movimientos musculares involuntarios.<br/>
      • Tipo "fasciculaciones" o "espasmos breves".<br/>
      • Generalmente cara, cuello, miembros.<br/>
      • Duración: 30-60 segundos.<br/>
      • No son convulsiones (ECG y EEG normales).<br/><br/>
      <b>PROBLEMA:</b><br/>
      • Puede dificultar intubación.<br/>
      • Aumenta consumo de O₂.<br/>
      • Doloroso si paciente parcialmente consciente.<br/>
      • Puede simular convulsiones.<br/><br/>
      <b>PREVENCIÓN (efectiva):</b><br/>
      • <b>Fentanilo 1-3 mcg/kg IV</b> 90 seg pre-etomidato (reduce 70%).<br/>
      • <b>Midazolam 1-2 mg IV</b> pre-etomidato.<br/>
      • Lidocaína 1.5 mg/kg IV.<br/>
      • Inyección más lenta (60 seg vs 10 seg).<br/><br/>
      <b>MANEJO si ocurren:</b><br/>
      1. Tranquilizar al equipo (no son convulsiones).<br/>
      2. Midazolam 1-2 mg IV bolus si severas.<br/>
      3. Esperar - autolimitadas en < 1 min.<br/>
      4. Proceder con relajante muscular para RSI.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar formulación: Lipuro (emulsión, menos dolor) vs Hypnomidate (propilenglicol).',
      'Calcular dosis exacta por peso: 0.2-0.3 mg/kg.',
      'Etiquetar jeringa: Etomidato [mg], dosis (mg/kg), hora.',
      'Personal entrenado en vía aérea presente.',
      'Equipo de intubación COMPLETO disponible.',
      'Premedicar con fentanilo o midazolam para reducir mioclonías.',
      'Tener relajante muscular preparado (succinilcolina o rocuronio).',
      'Monitor continuo: ECG, PA, SpO₂, capnografía.',
      'Bolo IV 30-60 segundos (RSI: 10-15 seg).',
      'Acceso IV de buen calibre (Hypnomidate causa dolor venoso).',
      '<b>NUNCA infusión continua</b> - solo bolos únicos.',
      'En sepsis: considerar ketamina como alternativa.',
      'Documentar: dosis, mioclonías, respuesta hemodinámica, post-RSI plan.',
      'Sedación de mantenimiento post-RSI (etomidato dura solo 5-10 min).',
      'Asegurar analgesia post-intubación (etomidato no es analgésico).',
    ],

    efectosAdversos: [
      '🔴 Supresión suprarrenal (dosis única: transitoria, infusión: severa)',
      '🔴 Insuficiencia suprarrenal aguda',
      '🟠 Mioclonías (50-80%)',
      '🟠 Náuseas, vómitos al despertar (30%)',
      '🟠 Dolor en sitio IV (Hypnomidate: 30-50%)',
      '🟠 Depresión respiratoria, apnea (30-60%)',
      '🟠 Tromboflebitis local',
      '🟡 Hipo, tos durante inducción',
      '🟡 Reacción alérgica (rara)',
      '🟡 Espasmo laríngeo (raro)',
      '🟡 Movimientos oculares involuntarios',
      '🟡 Trismus',
    ],

    contraindicaciones: [
      'Hipersensibilidad a etomidato.',
      '<b>USO EN INFUSIÓN CONTINUA</b> - CONTRAINDICACIÓN ABSOLUTA.',
      'Insuficiencia suprarrenal conocida (relativa - usar con cobertura corticoide).',
      'Porfiria aguda intermitente.',
      'Lactancia (relativa, datos limitados).',
      'Sepsis severa (RELATIVA - controvertido, individualizar).',
    ],

    fotosensibilidad: 'No relevante. Conservar viales en embalaje exterior a temperatura ambiente sin requerimientos especiales.',

    estabilidad: {
      'Vial sin abrir':            'Temperatura ambiente (15-25°C) hasta vencimiento',
      'Una vez abierto':            '<b>Usar inmediatamente</b> - desechar resto',
      'Aspecto Lipuro':             'Emulsión blanca uniforme - desechar si separación de fases',
      'Aspecto Hypnomidate':        'Transparente, incolora - desechar si turbidez',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato. Desechar sobrante (administración en bolo único de inducción).',
      dosisRestante:    'No conservar. Desechar inmediatamente.',
      infusionPreparada:'No se usa en infusión continua para sedación mantenida (supresión adrenal cortisol). Bolo único de inducción anestésica.',
      notas:            'Presentación lipídica (Lipuro®): desechar si hay separación de fases o cambio de aspecto. Verificar visualmente antes de usar.',
    },

    presentaciones: [
      'Etomidato Lipuro® 2 mg/mL emulsión - ampolla 10 mL (B. Braun)',
      'Hypnomidate® 2 mg/mL solución propilenglicol - ampolla 10 mL',
      'Etomidato Kalceks 2 mg/mL (genérico)',
      'Etomidato 20 mg/10 mL - presentación estándar',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Inducción anestésica adulto',          dosis: '<b>0.2-0.3 mg/kg IV en 30-60 seg</b>',     via: 'IV' },
      { indicacion: 'RSI (intubación secuencia rápida)',    dosis: '<b>0.3 mg/kg IV bolo (10-15 seg)</b>',     via: 'IV' },
      { indicacion: 'Sedación procedural breve',            dosis: '0.1-0.2 mg/kg IV',                          via: 'IV' },
      { indicacion: 'Cardioversión eléctrica',              dosis: '0.1-0.15 mg/kg IV',                         via: 'IV' },
      { indicacion: 'Anciano / inestable hemodinámico',     dosis: '<b>0.1-0.2 mg/kg IV</b> (reducción)',      via: 'IV' },
      { indicacion: 'Pediátrico > 10 años',                  dosis: '0.2-0.3 mg/kg IV',                          via: 'IV' },
      { indicacion: 'DOSIS MÁXIMA bolo único',              dosis: '0.6 mg/kg',                                 via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Atraviesa placenta. Posible supresión suprarrenal neonatal. Uso en cesárea: considerar otras opciones si posible. Lactancia: datos limitados, evitar si posible.',

    pediatria: 'Aprobado en > 10 años. Dosis: 0.2-0.3 mg/kg IV. En < 10 años: datos limitados, uso individualizado. Mayor incidencia de mioclonías. Cuidado con propilenglicol (Hypnomidate) en neonatos.',

    adultoMayor: 'REDUCIR DOSIS 30-50% por mayor sensibilidad. Iniciar 0.1-0.2 mg/kg. Vigilancia hemodinámica intensiva. Aún así, mejor opción que propofol en frágiles.',

    insufRenal: 'Sin ajuste significativo. En IRC severa: metabolismo hepático preservado. Diálisis: dosis estándar.',

    insufHepatica: 'En cirrosis severa: vida media ↑↑↑ (de 5-10 min a 20+ min). REDUCIR DOSIS 25-50%. Vigilancia neurológica intensiva post-bolo.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Etomidato Lipuro 2 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Hypnomidate 2 mg/mL. AEMPS.',
      'FDA DailyMed. Etomidate Injection. U.S. National Library of Medicine.',
      'ASA Guidelines. Practice Guidelines for Procedural Sedation. Anesthesiology. 2018.',
      'Chan CM, et al. Etomidate and Sepsis Mortality: Meta-analysis. Crit Care Med. 2012.',
      'CORTICUS Trial. Hydrocortisone in Septic Shock. NEJM. 2008.',
      'Surviving Sepsis Campaign Guidelines. 2021.',
      'Stollings JL, et al. RSI Medications. Ann Emerg Med. 2014.',
    ],
  },

});
