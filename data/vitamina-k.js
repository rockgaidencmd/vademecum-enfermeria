/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/vitamina-k.js
   Fuentes: CIMA AEMPS (Konakion 10mg/mL, Konakion pediátrico),
   Red de Antídotos AEMPS, FDA DailyMed
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'vitamina-k',
  nombre:         'Vitamina K (Fitomenadiona)',
  nombreGenerico: 'Phytomenadione (Vitamin K1)',
  categoria:      'anticoagulantes',
  tags:           ['antídoto', 'warfarina', 'acenocumarol', 'sintrom', 'INR elevado', 'hemorragia', 'enfermedad hemorrágica neonatal'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antídoto de anticoagulantes cumarínicos. INICIO DE ACCIÓN LENTO (4-6h VO, 1-3h IV) - NO es un antídoto de reversión inmediata como protamina. En hemorragia grave, combinar SIEMPRE con plasma fresco congelado o concentrado de complejo protrombínico. Riesgo de anafilaxia con IV rápida (rara pero descrita).',

  nivel1: {

    puntosClave: [
      'Vitamina liposoluble esencial para la <b>CARBOXILACIÓN de los factores de coagulación II, VII, IX, X</b> (y proteínas C y S) — sin ella, estos factores son inactivos.',
      '<b>ANTÍDOTO ÚNICO Y ESPECÍFICO de anticoagulantes cumarínicos</b> (warfarina, acenocumarol/Sintrom) — medicamento esencial OMS.',
      '<b>INICIO LENTO</b>: IV 1-3h · VO 4-6h — <b>NO revierte hemorragia de forma inmediata</b>. En sangrado grave, combinar con PLASMA FRESCO CONGELADO o CONCENTRADO COMPLEJO PROTROMBÍNICO (CCP) para reversión rápida.',
      'Vía IV: <b>NO diluir, inyectar lentamente en 30 segundos a 30 minutos</b> según dosis - riesgo de anafilaxia con infusión rápida.',
      'Uso pediátrico esencial: <b>profilaxis de enfermedad hemorrágica del recién nacido</b> (dosis única IM al nacer).',
    ],

    resumenRapido: 'Vitamina K1 sintética idéntica a la natural. Cofactor esencial para la carboxilación postraduccional de los factores de coagulación dependientes de vitamina K (II, VII, IX, X) y de las proteínas anticoagulantes C y S. Los anticoagulantes cumarínicos (warfarina, acenocumarol) actúan bloqueando el reciclaje de vitamina K, por lo que revertir su efecto requiere restaurar el pool de vitamina K activa. Inicio: IV 1-3h · VO 4-6h (mucho más lento que protamina para heparina). Indicado en: reversión de sobredosis o INR elevado por cumarínicos, hemorragia por warfarina/acenocumarol, intoxicación por rodenticidas cumarínicos (raticidas), enfermedad hemorrágica del recién nacido (profilaxis y tratamiento), hipoprotrombinemia por malabsorción/colestasis/antibióticos prolongados.',

    objetivoTerapeutico: 'Revertir el efecto anticoagulante de cumarínicos · Normalizar INR · Tratar/prevenir hemorragia por déficit de vitamina K · Profilaxis de enfermedad hemorrágica neonatal',

    preparacion: {
      'Presentación adulto':      '<b>Konakion 10 mg/mL - ampolla 1 mL</b> (solución oral e inyectable)',
      'Presentación pediátrica':  '<b>Konakion pediátrico 2 mg/0.2 mL - ampolla 0.2 mL</b>',
      'Diluyente':                '<b>NO DILUIR</b> - administrar directamente',
      'Técnica IV':               'Se puede inyectar en la parte inferior (Y) de un equipo de infusión ya en marcha',
      'Vía':                      'IV lenta (preferida en emergencia), VO (preferida si no urgente), IM (uso pediátrico profilaxis)',
      '⏱️ HEMORRAGIA GRAVE/POTENCIALMENTE MORTAL':'<b>5-10 mg IV en 30 segundos, JUNTO CON plasma fresco o CCP</b>',
      '⏱️ INR elevado SIN sangrado o sangrado leve':'<b>1-5 mg VO o IV lento</b> (según INR y riesgo)',
      '⏱️ INR > 10 sin sangrado':  '2.5-5 mg VO',
      '⏱️ Reversión antes de cirugía urgente':'2.5-10 mg IV lento (según urgencia)',
      '⏱️ Intoxicación raticidas cumarínicos':'<b>25-50 mg VO c/6-8h × 1-2 días</b> (superwarfarínicos: semanas-meses)',
      '⏱️ Profilaxis RN (enf. hemorrágica)':'<b>1 mg IM dosis única al nacer</b> (0.5-1 mg si prematuro < 32 sem)',
      '⏱️ VELOCIDAD IV':           '<b>NO superar 1 mg/min</b> - infusión lenta en 30 seg a algunos minutos según dosis',
      'Bomba':                    'No necesaria habitualmente - administración directa lenta',
      '🧊 ESTABILIDAD':           'Ampolla sin abrir: hasta vencimiento · Ampolla de vidrio ámbar (fotosensible)',
      'Aspecto':                  'Líquido claro a ligeramente opalescente',
    },

    vigilancia: {
      antes: [
        'Confirmar INR actual y anticoagulante utilizado (warfarina, acenocumarol).',
        'Evaluar SEVERIDAD del sangrado: menor, mayor, potencialmente mortal.',
        '<b>Si hemorragia grave: preparar PLASMA FRESCO CONGELADO o CCP</b> (vitamina K sola es LENTA).',
        'Revisar indicación de anticoagulación (¿por qué está anticoagulado? - válvula mecánica, FA, TVP reciente).',
        'Considerar riesgo de RESISTENCIA a reanudar anticoagulación tras dosis altas de vitamina K.',
        'Acceso IV permeable si vía IV.',
        'Doble verificación: dosis, vía, indicación.',
      ],
      durante: [
        '<b>Administración IV LENTA</b> - NO diluir, inyectar en 30 seg a varios minutos según dosis.',
        'Se puede inyectar en la parte inferior (Y) de una infusión en marcha.',
        'Monitor: PA, FC durante administración IV (riesgo anafilaxia raro pero descrito).',
        'Vigilar reacción anafiláctica: rubor, disnea, hipotensión (más frecuente con infusión rápida).',
        'Si VO: sin requerimientos especiales de monitorización durante la toma.',
        'Vigilar irritación venosa/flebitis en sitio IV.',
      ],
      despues: [
        '<b>Control de INR a las 6-12-24h</b> según la vía y dosis administrada.',
        'Si hemorragia grave: evaluar respuesta clínica junto con hemoderivados administrados.',
        'Vigilar sangrado activo continuado.',
        '<b>Considerar reducción/suspensión de la siguiente dosis de anticoagulante</b>.',
        'En reversión completa: evaluar necesidad de puente con heparina si alto riesgo trombótico (válvula mecánica).',
        'Documentar: dosis, vía, hora, INR pre/post, hemoderivados asociados.',
        'Planificar reinicio de anticoagulación según indicación original y riesgo/beneficio.',
      ],
      suspender: [
        'INR normalizado según objetivo clínico.',
        'Reacción anafiláctica - suspender inmediatamente.',
        'Resolución de la hemorragia.',
        'Completado el curso de tratamiento en intoxicación por raticidas.',
      ],
    },

    incompatibilidades: [
      '<b>NO debe diluirse ni mezclarse con otros medicamentos parenterales</b> (indicación expresa CIMA AEMPS).',
      'Puede inyectarse en la parte inferior (Y) de un equipo de infusión ya en marcha, pero sin mezclar directamente.',
      'Preferir línea IV independiente.',
    ],

    alertasSeguridad: [
      '🔴 <b>INICIO LENTO</b> - NO usar como único tratamiento en hemorragia grave; combinar SIEMPRE con plasma fresco/CCP.',
      '🔴 <b>ANAFILAXIA</b> rara pero descrita con administración IV rápida - inyectar LENTO.',
      '🟠 Dosis altas (> 10 mg) pueden causar <b>RESISTENCIA a la reanudación de anticoagulación cumarínica</b> durante 1-2 semanas.',
      '🟠 En pacientes con válvula mecánica/alto riesgo trombótico: BALANCEAR riesgo hemorrágico vs trombótico al decidir dosis.',
      '🟡 No se conoce síndrome de hipervitaminosis por vitamina K1 (CIMA AEMPS).',
      '🟡 En neonatos: sobredosis puede asociarse a ictericia, hiperbilirrubinemia (relación causal no establecida claramente).',
      '🟡 Irritación venosa / flebitis con vía IV.',
      '🟡 NO es antídoto de heparina, HBPM, ni anticoagulantes directos (dabigatrán, rivaroxabán, apixabán).',
    ],
  },

  modulos: {

    hemorragiaGrave: `
      <b>Vitamina K en Hemorragia Grave por Cumarínicos:</b><br/>
      <b>PROBLEMA CLAVE:</b> Vitamina K sola tarda 1-3h (IV) o 4-6h (VO) en hacer efecto - <b>DEMASIADO LENTO</b> para hemorragia activa grave.<br/><br/>
      <b>PROTOCOLO DE REVERSIÓN COMPLETA (guías internacionales):</b><br/>
      <b>1. VITAMINA K:</b><br/>
      • <b>5-10 mg IV lento (30 segundos)</b>.<br/>
      • Inicia proceso de síntesis de nuevos factores (tarda horas en completarse).<br/><br/>
      <b>2. REVERSIÓN INMEDIATA (elegir uno):</b><br/>
      • <b>CONCENTRADO DE COMPLEJO PROTROMBÍNICO (CCP)</b> - PREFERIDO:<br/>
      &nbsp;&nbsp;- Contiene factores II, VII, IX, X ya activos.<br/>
      &nbsp;&nbsp;- Dosis: 25-50 UI/kg IV según INR.<br/>
      &nbsp;&nbsp;- Efecto en MINUTOS.<br/>
      &nbsp;&nbsp;- Menor volumen que PFC (mejor en cardiópatas).<br/>
      • <b>PLASMA FRESCO CONGELADO (PFC)</b> - alternativa si no hay CCP:<br/>
      &nbsp;&nbsp;- Dosis: 10-15 mL/kg IV.<br/>
      &nbsp;&nbsp;- Efecto más lento que CCP, mayor volumen.<br/><br/>
      <b>3. MEDIDAS DE SOPORTE:</b><br/>
      • Control del foco de sangrado (endoscopia, cirugía si necesario).<br/>
      • Transfusión de hematíes si anemia sintomática.<br/>
      • Monitorización de INR seriada (objetivo < 1.5).<br/><br/>
      <b>REPETIR VITAMINA K</b> a las 12-24h si INR sigue elevado (especialmente en intoxicación por dosis altas o raticidas de acción prolongada).
    `,

    inrElevado: `
      <b>Manejo de INR Elevado según Guías (ACCP/CHEST):</b><br/>
      <b>INR 4.5-10, SIN sangrado:</b><br/>
      • Omitir 1-2 dosis de anticoagulante.<br/>
      • <b>Vitamina K generalmente NO necesaria</b> (bajo riesgo hemorrágico).<br/>
      • Reanudar a dosis ajustada cuando INR terapéutico.<br/><br/>
      <b>INR > 10, SIN sangrado:</b><br/>
      • Omitir anticoagulante.<br/>
      • <b>Vitamina K 2.5-5 mg VO</b> (vía oral preferida, efecto en 24h).<br/>
      • Control INR en 24h.<br/><br/>
      <b>INR elevado CON SANGRADO MENOR:</b><br/>
      • Omitir anticoagulante.<br/>
      • <b>Vitamina K 1-2.5 mg VO o IV lento</b>.<br/>
      • Control INR en 24h, repetir vitamina K si necesario.<br/><br/>
      <b>INR elevado CON SANGRADO MAYOR/POTENCIALMENTE MORTAL:</b><br/>
      • Ver protocolo "Hemorragia Grave" (CCP/PFC + Vitamina K 5-10 mg IV).<br/><br/>
      <b>CONSIDERACIONES:</b><br/>
      • Pacientes con válvula mecánica: preferir dosis BAJAS de vitamina K (evitar resistencia prolongada a warfarina).<br/>
      • Reanudar anticoagulación tan pronto sea seguro tras controlar el evento.
    `,

    raticidas: `
      <b>Intoxicación por Raticidas Cumarínicos (Superwarfarínicos):</b><br/>
      <b>SUSTANCIAS:</b> Brodifacoum, bromadiolona, difenacoum (rodenticidas de acción prolongada).<br/>
      <b>DIFERENCIA CLAVE:</b> Vida media MUCHO más larga que warfarina (semanas a meses vs 20-60h).<br/><br/>
      <b>PRESENTACIÓN:</b><br/>
      • Ingesta accidental (niños) o intencional (intento autolítico).<br/>
      • Coagulopatía puede aparecer 24-48h después de la ingesta.<br/>
      • Hemorragias en piel, mucosas, articulaciones, internas.<br/><br/>
      <b>MANEJO:</b><br/>
      <b>Si asintomático, ingesta reciente (< 1-2h):</b><br/>
      • Carbón activado si procede.<br/>
      • Control de INR a las 24-48h (no antes - puede ser falsamente normal).<br/>
      • NO dar vitamina K profiláctica (puede enmascarar la exposición).<br/><br/>
      <b>Si INR elevado o sangrado:</b><br/>
      • <b>Vitamina K 25-50 mg VO c/6-8h</b> (dosis MUCHO más altas que en warfarina terapéutica).<br/>
      • <b>Superwarfarínicos de acción prolongada: tratamiento puede prolongarse SEMANAS A MESES</b>.<br/>
      • Ajustar dosis según evolución del INR.<br/>
      • Considerar hospitalización para monitorización inicial.<br/><br/>
      <b>SEGUIMIENTO:</b><br/>
      • Control INR seriado hasta normalización sostenida SIN vitamina K.<br/>
      • Puede requerir semanas de vigilancia tras suspender tratamiento.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>NO diluir la vitamina K</b> - administrar directamente.',
      'Puede inyectarse en la parte inferior (Y) de un equipo de infusión ya en marcha.',
      'Verificar concentración: Konakion adulto 10 mg/mL vs pediátrico 2 mg/0.2 mL.',
      'Etiquetar jeringa: Vitamina K [mg], vía, hora.',
      '<b>Administración IV LENTA</b> - no superar velocidad recomendada.',
      'Monitor: PA, FC durante IV (riesgo anafilaxia raro).',
      'En hemorragia grave: <b>coordinar con banco de sangre para PFC/CCP simultáneo</b>.',
      'Control de INR según protocolo (6-24h post-administración).',
      'En profilaxis neonatal: 1 mg IM dosis única, técnica estéril.',
      'Educar al paciente sobre la importancia de continuar seguimiento de INR.',
      'Documentar: dosis, vía, hora, INR pre/post, hemoderivados asociados si aplica.',
      'En intoxicación por raticidas: educar sobre duración prolongada del tratamiento.',
      'Vigilar sitio IV - irritación venosa/flebitis posible.',
    ],

    efectosAdversos: [
      '🔴 Anafilaxia (rara, con IV rápida)',
      '🟠 Resistencia prolongada a reanudación de cumarínicos (dosis altas)',
      '🟡 Irritación venosa, flebitis (vía IV)',
      '🟡 Rubor facial transitorio',
      '🟡 Sabor alterado',
      '🟡 Mareos leves',
      '🟡 En neonatos (sobredosis, relación causal no establecida): ictericia, hiperbilirrubinemia',
      '🟡 Reacciones en sitio de inyección (IM)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a fitomenadiona o excipientes.',
      'No es contraindicación absoluta en ninguna situación clínica de reversión de cumarínicos.',
      'Precaución en pacientes con alto riesgo trombótico (válvula mecánica) - usar dosis mínima necesaria.',
      'Precaución en insuficiencia hepática severa (respuesta puede ser subóptima - hígado dañado no puede usar la vitamina K eficazmente).',
    ],

    fotosensibilidad: '<b>SÍ - Ampolla de vidrio ÁMBAR</b> (protección específica de luz según packaging CIMA AEMPS). Conservar en su envase original.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente, protegida de luz (vidrio ámbar), hasta vencimiento',
      'Post-apertura':              'Usar inmediatamente',
      'Aspecto':                    'Líquido claro a ligeramente opalescente',
      'Temperatura':                'NO congelar · 15-25°C · Proteger de la luz',
    },

    presentaciones: [
      'Konakion® 10 mg/mL - ampolla 1 mL (solución oral/inyectable) - adulto',
      'Konakion® 2 mg/0.2 mL pediátrico - ampolla 0.2 mL',
      'Fitomenadiona Larjan 1 mg/0.5 mL (otra presentación)',
      'Konakion MM® (mixed micelles) - formulación mejorada en algunos países',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hemorragia grave/potencialmente mortal',dosis: '<b>5-10 mg IV lento + PFC/CCP</b>',          via: 'IV' },
      { indicacion: 'INR > 10 sin sangrado',                  dosis: '2.5-5 mg VO',                                via: 'VO' },
      { indicacion: 'INR elevado con sangrado menor',        dosis: '1-2.5 mg VO o IV lento',                    via: 'IV/VO' },
      { indicacion: 'Reversión pre-cirugía urgente',          dosis: '2.5-10 mg IV lento',                        via: 'IV' },
      { indicacion: 'Intoxicación raticidas cumarínicos',    dosis: '<b>25-50 mg VO c/6-8h × 1-2 días (o más)</b>',via: 'VO' },
      { indicacion: 'Profilaxis RN (enf. hemorrágica)',       dosis: '<b>1 mg IM dosis única al nacer</b>',       via: 'IM' },
      { indicacion: 'RN prematuro < 32 semanas',              dosis: '0.5-1 mg IM al nacer',                      via: 'IM' },
      { indicacion: 'Sin tto previo + sobreingesta con sangrado',dosis:'0.3 mg/kg IV (máx 10 mg)',                via: 'IV' },
    ],

    embarazo: 'Vitamina K1 no atraviesa fácilmente la placenta. Uso seguro durante embarazo para revertir cumarínicos si necesario. Compatible con lactancia (mínima excreción en leche) según CIMA, aunque no se recomienda para profilaxis de enfermedad hemorrágica del RN en madres en periodo de lactancia (usar directamente en el neonato).',

    pediatria: 'Profilaxis enfermedad hemorrágica del RN: 1 mg IM dosis única al nacer (0.5-1 mg si prematuro < 32 semanas). Para RN amamantados: puede considerarse profilaxis oral semanal (2 mg al nacer + 1 mg semanal hasta 3 meses) según algunos protocolos, aunque la vía IM es más efectiva y es la recomendada de primera línea.',

    adultoMayor: '<b>MAYOR SENSIBILIDAD</b> (indicación expresa CIMA AEMPS) - usar dosis en el LÍMITE INFERIOR del rango recomendado. Vigilancia de INR más frecuente.',

    insufRenal: 'Sin ajuste específico de dosis. Vigilancia clínica estándar de INR.',

    insufHepatica: 'En hepatopatía severa: RESPUESTA SUBÓPTIMA esperada (el hígado dañado no puede sintetizar eficazmente los factores de coagulación incluso con vitamina K disponible). Puede requerir PFC/CCP con mayor frecuencia.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Konakion 10 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Konakion 2 mg/0.2 mL Pediátrico. AEMPS.',
      'Red de Antídotos AEMPS. Fitomenadiona (Vitamina K) - Protocolo de Uso. 2025.',
      'FDA DailyMed. Phytonadione Injection. U.S. National Library of Medicine.',
      'CHEST Guidelines. Antithrombotic Therapy - Reversal of Vitamin K Antagonists. 2012 (actualizaciones posteriores).',
      'AEMPS. Nota informativa sobre problema de suministro de Konakion. 2024.',
      'MSF Guías de Práctica Clínica. Fitomenadiona Vitamina K1 Inyectable. 2024.',
      'Pediamécum AEP. Vitamina K1 - Profilaxis Enfermedad Hemorrágica del RN.',
    ],
  },

});
