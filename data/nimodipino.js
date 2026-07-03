/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/nimodipino.js
   Fuentes: CIMA AEMPS (Nimotop, Nimodipino Altan),
   Pediamécum AEP, Guías HSA Aneurismática
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'nimodipino',
  nombre:         'Nimodipino',
  nombreGenerico: 'Nimodipine',
  categoria:      'antiarritmicos',
  tags:           ['calcioantagonista', 'hemorragia subaracnoidea', 'vasoespasmo cerebral', 'neuroprotector', 'aneurisma', 'UCI neurocrítico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Calcioantagonista dihidropiridínico con efecto neuroprotector específico. FOTOSENSIBLE (proteger frasco, bomba y equipo de infusión completo). NO usar tubos de PVC estándar (absorción del fármaco). Riesgo de hipotensión que puede comprometer la presión de perfusión cerebral.',

  nivel1: {

    puntosClave: [
      'Calcioantagonista dihidropiridínico con <b>ALTA LIPOFILIA</b> que le permite atravesar la barrera hematoencefálica — efecto <b>NEUROPROTECTOR DIRECTO</b> además del vasodilatador.',
      '<b>INDICACIÓN ÚNICA Y ESPECÍFICA: prevención del deterioro neurológico por VASOESPASMO en hemorragia subaracnoidea (HSA) aneurismática</b> — reduce mortalidad y mejora pronóstico neurológico (evidencia sólida).',
      '<b>CONTRAINDICADO en HSA de origen TRAUMÁTICO</b> — beneficio no demostrado en esta población.',
      '<b>NO UTILIZAR TUBOS DE PVC ESTÁNDAR</b> — el nimodipino se adsorbe a estos materiales, reduciendo la dosis efectiva administrada; usar sistemas específicos (polietileno) según ficha técnica.',
      '<b>FOTOSENSIBLE</b> — proteger de la luz el frasco, la bomba de infusión Y el equipo/línea completa durante toda la administración.',
    ],

    resumenRapido: 'Calcioantagonista dihidropiridínico de segunda generación, con alta lipofilia que le permite atravesar eficazmente la barrera hematoencefálica (a diferencia de nicardipino/otras dihidropiridinas usadas para HTA sistémica). Bloquea canales de calcio tipo L tanto en músculo liso vascular cerebral como directamente en neuronas, ejerciendo un efecto neuroprotector al proteger contra la sobrecarga de calcio intracelular que ocurre en la isquemia. Este efecto neuroprotector es más pronunciado en regiones cerebrales previamente dañadas o hipoperfundidas. Inicio IV: minutos · Indicado EXCLUSIVAMENTE en: prevención del deterioro neurológico isquémico causado por vasoespasmo cerebral secundario a hemorragia subaracnoidea (HSA) por rotura de aneurisma.',

    objetivoTerapeutico: 'Prevenir/reducir el deterioro neurológico isquémico por vasoespasmo cerebral post-HSA aneurismática · Mejorar el pronóstico neurológico funcional · Reducir la mortalidad asociada al vasoespasmo',

    preparacion: {
      'Presentación':             '<b>Nimotop® 0.2 mg/mL solución para perfusión - frasco 50 mL (10 mg total)</b>',
      'Contiene':                 'Etanol al 96% (10 g/frasco) - relevante en pacientes con intolerancia al alcohol',
      'Diluyente co-infusión':    'SF 0.9% o SG 5% en infusión en Y (si no se administra puro por vía central)',
      '⚠️ MATERIAL DEL EQUIPO':   '<b>NO usar tubos de PVC estándar</b> - el nimodipino se adsorbe al PVC, reduciendo la dosis real administrada. Usar el equipo de infusión específico recomendado por el fabricante.',
      'Vía':                      'IV en perfusión continua - preferiblemente vía CENTRAL',
      '🌑 PROTECCIÓN LUZ OBLIGATORIA':'<b>Proteger de la luz: el FRASCO, la BOMBA de infusión, y el EQUIPO/LÍNEA completa</b>',
      '⏱️ DOSIS INICIAL (primeras 2h)':'<b>1 mg/h IV (5 mL/h) durante 2 horas</b> (aprox. 15 mcg/kg/h)',
      '⏱️ DOSIS DE MANTENIMIENTO (si se tolera bien la PA)':'<b>2 mg/h IV (10 mL/h)</b>',
      '⏱️ Si hipotensión con dosis inicial':'Reducir a 0.5 mg/h (2.5 mL/h) o según respuesta de PA',
      '⏱️ INICIO DEL TRATAMIENTO':'<b>Lo antes posible, MÁXIMO 4 días tras la hemorragia</b>',
      '⏱️ DURACIÓN':               '<b>Continuar durante 5-14 días</b> tras la HSA (período de máximo riesgo de vasoespasmo)',
      '⏱️ Si cirugía del aneurisma durante el tratamiento':'Continuar el tratamiento IV en el postoperatorio',
      '⏱️ TRANSICIÓN a VO tras la perfusión':'<b>60 mg VO c/4h</b> (comprimidos), completando el curso total',
      'Bomba':                    'OBLIGATORIA - bomba de infusión de precisión',
      'Técnica de conexión':      'Conectar en llave de 3 vías: tubo de co-infusión + catéter central',
      '🧊 ESTABILIDAD':           'Verificar ficha específica del fabricante',
      'Aspecto':                  'Solución ligeramente amarillenta (normal, por su composición)',
    },

    vigilancia: {
      antes: [
        'Confirmar diagnóstico de HSA por ROTURA DE ANEURISMA (NO traumática).',
        'PA y FC basales.',
        'Función hepática basal - biodisponibilidad aumentada en insuficiencia hepática.',
        'Verificar disponibilidad de equipo de infusión SIN PVC estándar.',
        'Preparar material de protección de luz para frasco, bomba y línea completa.',
        'Confirmar acceso venoso CENTRAL si es posible.',
        'Doble verificación: dosis inicial (1 mg/h), material del equipo, protección lumínica.',
      ],
      durante: [
        'Monitor continuo: PA, FC.',
        'Vigilar HIPOTENSIÓN - puede comprometer la presión de perfusión cerebral (contraproducente en el contexto de riesgo de isquemia).',
        'Si hipotensión significativa: reducir velocidad de infusión.',
        'Verificar que la protección de luz se mantiene intacta durante toda la infusión.',
        'Vigilancia neurológica seriada (GCS, focalidad) - parte del seguimiento habitual en HSA, no específico de nimodipino pero relevante en este contexto clínico.',
        'Si tratado quirúrgicamente el aneurisma durante el tratamiento: continuar la perfusión en el postoperatorio.',
      ],
      despues: [
        'Al completar la perfusión IV (tras 5-14 días según protocolo): <b>transición a VO 60 mg c/4h</b>.',
        'Continuar vigilancia neurológica y de PA durante la transición.',
        'Vigilar función hepática si tratamiento prolongado.',
        'Documentar: dosis, duración de perfusión IV, PA seriada, transición a VO, eventos.',
      ],
      suspender: [
        'Hipotensión severa refractaria a reducción de dosis.',
        'Reacción alérgica.',
        'Completado el período de tratamiento (5-14 días de perfusión + transición a VO).',
        'Decisión médica de suspender por otras razones clínicas.',
      ],
    },

    incompatibilidades: [
      '<b>NO usar tubos de PVC estándar</b> - adsorción significativa del fármaco al material.',
      'Usar equipo de infusión específico según indicación del fabricante (habitualmente polietileno).',
      'Compatible en infusión en Y con SF 0.9% o SG 5% para co-infusión.',
      'Preferir línea IV independiente/dedicada cuando sea posible.',
    ],

    alertasSeguridad: [
      '🔴 <b>CONTRAINDICADO en HSA de origen TRAUMÁTICO</b> - sin relación beneficio/riesgo positiva establecida en esta población.',
      '🔴 <b>NO usar tubos de PVC estándar</b> - reduce significativamente la dosis efectiva administrada.',
      '🔴 <b>FOTOSENSIBLE</b> - proteger frasco, bomba y equipo de infusión completo de la luz.',
      '🟠 HIPOTENSIÓN puede comprometer la presión de perfusión cerebral - vigilancia estrecha, especialmente relevante en el contexto de riesgo de isquemia por vasoespasmo.',
      '🟠 Insuficiencia hepática AUMENTA la biodisponibilidad (menor aclaramiento) - efectos farmacológicos y adversos más marcados, considerar ajuste de dosis.',
      '🟠 Precaución en angina inestable o primeras 4 semanas post-IAM - sopesar riesgo (isquemia coronaria) vs beneficio (perfusión cerebral).',
      '🟡 Monitorización clínica y ECG si insuficiencia cardíaca avanzada o trastornos de conducción intracardiaca.',
      '🟡 Metabolizado por CYP3A4 - interacciones con inhibidores/inductores de esta vía.',
      '🟡 Contiene etanol (10 g/frasco) - considerar en pacientes con intolerancia al alcohol o hepatopatía.',
      '🟡 Se puede continuar durante anestesia, cirugía del aneurisma y angiografía cerebral sin necesidad de suspender.',
    ],
  },

  modulos: {

    vasoespasmoHSA: `
      <b>Nimodipino en Prevención de Vasoespasmo por HSA Aneurismática:</b><br/>
      <b>FISIOPATOLOGÍA DEL VASOESPASMO:</b><br/>
      • Complicación grave de la HSA aneurismática - estrechamiento de arterias cerebrales por productos de degradación de la sangre subaracnoidea.<br/>
      • Pico de riesgo: <b>días 4-14 tras la hemorragia</b> (más frecuente entre el día 7-10).<br/>
      • Puede causar isquemia cerebral diferida - una de las principales causas de morbimortalidad tras HSA.<br/><br/>
      <b>EVIDENCIA DE NIMODIPINO:</b><br/>
      • Reduce significativamente la lesión neurológica isquémica secundaria a vasoespasmo.<br/>
      • Mejora la sintomatología clínica.<br/>
      • <b>Reduce la mortalidad</b> - beneficio establecido en múltiples ensayos clínicos, base de las guías internacionales (Clase I, Nivel A).<br/>
      • El efecto NO se explica completamente por la vasodilatación (el nimodipino puede no revertir el vasoespasmo angiográfico de forma consistente) - el efecto NEUROPROTECTOR DIRECTO sobre las neuronas parece ser el mecanismo principal del beneficio clínico.<br/><br/>
      <b>PROTOCOLO TEMPORAL:</b><br/>
      1. <b>Iniciar lo antes posible, máximo 4 días tras la HSA</b>.<br/>
      2. <b>Mantener durante todo el período de riesgo: 5-14 días</b> post-hemorragia (vía IV, luego transición a VO si se completa antes por vía oral en algunos protocolos).<br/>
      3. Si se realiza tratamiento quirúrgico/endovascular del aneurisma durante este período: <b>CONTINUAR el nimodipino</b> sin interrupción.<br/>
      4. Tras completar el curso IV: transición a <b>VO 60 mg c/4h</b> hasta completar el período total recomendado.<br/><br/>
      <b>MANEJO INTEGRAL DEL VASOESPASMO (más allá de nimodipino):</b><br/>
      • Terapia "Triple H" modificada (euvolemia, hipertensión inducida, hemodilución) - actualmente con énfasis en euvolemia + hipertensión inducida más que hemodilución agresiva.<br/>
      • Angioplastia transluminal o vasodilatadores intraarteriales (nicardipino, verapamilo) en casos refractarios documentados por angiografía/Doppler transcraneal.<br/>
      • Doppler transcraneal seriado para detección precoz de vasoespasmo (velocidades elevadas en ACM).
    `,

    pvcAdsorcion: `
      <b>Problema de Adsorción al PVC - Aspecto Técnico Crítico:</b><br/>
      <b>EL PROBLEMA:</b><br/>
      • El nimodipino es una molécula altamente LIPOFÍLICA.<br/>
      • Los tubos de PVC (cloruro de polivinilo) ESTÁNDAR absorben una parte significativa del fármaco durante su paso por la línea de infusión.<br/>
      • Esto puede resultar en que el paciente reciba una dosis REAL menor a la programada, comprometiendo la eficacia del tratamiento en una indicación donde la dosis adecuada es crítica.<br/><br/>
      <b>SOLUCIÓN:</b><br/>
      • Usar sistemas de infusión específicamente diseñados para nimodipino, generalmente de <b>POLIETILENO</b> u otros materiales sin esta interacción.<br/>
      • Verificar las especificaciones del equipo de infusión ANTES de conectar la perfusión.<br/>
      • Si hay dudas sobre el material del equipo disponible: consultar con farmacia hospitalaria.<br/><br/>
      <b>TÉCNICA DE CONEXIÓN RECOMENDADA:</b><br/>
      • Conectar mediante llave de 3 vías: el tubo de co-infusión (SF o SG5%) y el catéter central.<br/>
      • Si no se recomienda volumen adicional de fluidos: se puede administrar la solución pura a través de catéter central sin co-infusión.<br/><br/>
      <b>IMPORTANCIA CLÍNICA:</b><br/>
      • Este es un error de administración potencialmente relevante que puede pasar desapercibido - la infusión "se ve correcta" pero el paciente recibe menos fármaco del programado.<br/>
      • Educar al personal sobre este aspecto específico es importante para la seguridad del tratamiento.
    `,

    fotoproteccion: `
      <b>Protección de la Luz en la Infusión de Nimodipino:</b><br/>
      <b>QUÉ PROTEGER:</b><br/>
      • <b>El frasco/envase</b> de la solución.<br/>
      • <b>La bomba de infusión</b> misma (si la solución es visible a través de ella).<br/>
      • <b>El equipo/línea de infusión COMPLETO</b> - no solo el frasco.<br/><br/>
      <b>POR QUÉ ES IMPORTANTE:</b><br/>
      • El nimodipino es fotosensible - la exposición a la luz puede degradar el fármaco, reduciendo su eficacia y potencialmente generando productos de degradación.<br/>
      • Al ser una perfusión de larga duración (días), la exposición acumulada a la luz ambiental puede ser significativa si no se protege adecuadamente.<br/><br/>
      <b>MÉTODOS PRÁCTICOS:</b><br/>
      • Usar el envase opaco/protector que acompaña al producto comercial cuando esté disponible.<br/>
      • Cubrir la línea de infusión completa con material opaco (fundas específicas, papel de aluminio) si no viene con protección incorporada.<br/>
      • Evitar la exposición directa a luz solar o luces intensas de quirófano/UCI durante la preparación y administración.<br/><br/>
      <b>VERIFICACIÓN:</b><br/>
      • Revisar periódicamente que la protección se mantiene intacta durante las horas/días de la perfusión continua, especialmente durante cambios de turno o manipulaciones.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar indicación: HSA por ROTURA DE ANEURISMA (no traumática).',
      '<b>Usar equipo de infusión SIN PVC estándar</b> - verificar material específico.',
      '<b>Proteger de la luz: frasco, bomba, Y línea de infusión completa</b>.',
      'Preferir vía CENTRAL para la administración.',
      'Etiquetar: Nimodipino [mg/h], velocidad (mL/h), hora de inicio.',
      'Bomba de infusión de precisión OBLIGATORIA.',
      'Iniciar a 1 mg/h (5 mL/h) durante las primeras 2 horas.',
      'Monitor de PA y FC continuo - vigilar hipotensión.',
      'Si hipotensión: reducir velocidad (coordinar con médico).',
      'Continuar el tratamiento durante cirugía/angiografía del aneurisma si se realiza durante el período de tratamiento.',
      'Mantener la perfusión durante 5-14 días según protocolo (período de riesgo de vasoespasmo).',
      'Al finalizar: coordinar transición a VO 60 mg c/4h.',
      'Vigilar función hepática si tratamiento prolongado.',
      'Documentar: dosis, velocidad, hora, PA seriada, eventos, verificación de protección lumínica y material del equipo.',
    ],

    efectosAdversos: [
      '🔴 Hipotensión que compromete presión de perfusión cerebral',
      '🟠 Bradicardia o taquicardia refleja',
      '🟠 Trombosis venosa/flebitis en sitio IV',
      '🟡 Cefalea',
      '🟡 Náuseas',
      '🟡 Sudoración',
      '🟡 Rubor facial',
      '🟡 Sensación de calor',
      '🟡 Edema periférico (uso prolongado)',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Trombocitopenia (rara)',
    ],

    contraindicaciones: [
      '<b>Hemorragia subaracnoidea de origen TRAUMÁTICO</b> - beneficio no establecido.',
      'Hipersensibilidad a nimodipino u otras dihidropiridinas.',
      'Uso concomitante con rifampicina (reduce significativamente niveles de nimodipino) o ciertos anticonvulsivantes inductores enzimáticos potentes (fenobarbital, fenitoína, carbamazepina) - eficacia comprometida.',
      'Precaución en: angina inestable, primeras 4 semanas post-IAM, insuficiencia hepática (ajuste de dosis), insuficiencia cardíaca avanzada.',
    ],

    fotosensibilidad: '<b>SÍ - FOTOSENSIBLE</b>. Proteger de la luz el frasco, la bomba de infusión y el equipo/línea de infusión completo durante toda la administración.',

    estabilidad: {
      'Frasco sin abrir':           'Temperatura ambiente, protegido de luz, hasta vencimiento',
      'Durante la perfusión':       'Mantener protección lumínica constante en frasco, bomba y línea',
      'Aspecto':                     'Ligeramente amarillenta (normal por su composición)',
      'Temperatura':                 'NO congelar · Proteger de la luz siempre',
    },

    presentaciones: [
      'Nimotop® 0.2 mg/mL solución para perfusión - frasco 50 mL (10 mg)',
      'Nimodipino Altan 0.2 mg/mL solución para perfusión',
      'Nimotop® 30 mg comprimidos recubiertos (VO, transición tras IV)',
      'Nimodipino Stada 30 mg comprimidos (genérico VO)',
      'Brainal® 30 mg comprimidos (otra marca VO)',
      'Nimodipino Remontal 30 mg comprimidos',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis inicial (primeras 2 horas)',      dosis: '<b>1 mg/h IV (5 mL/h)</b>',                 via: 'IV' },
      { indicacion: 'Mantenimiento (si buena tolerancia PA)',dosis: '<b>2 mg/h IV (10 mL/h)</b>',                 via: 'IV' },
      { indicacion: 'Si hipotensión con dosis inicial',       dosis: 'Reducir a 0.5 mg/h (2.5 mL/h) o según PA', via: 'IV' },
      { indicacion: 'Duración de perfusión IV',                dosis: '<b>5-14 días</b> desde la HSA',            via: 'IV' },
      { indicacion: 'Transición a VO tras IV',                 dosis: '<b>60 mg VO c/4h</b>',                       via: 'VO' },
      { indicacion: 'Inicio del tratamiento',                   dosis: 'Máximo 4 días tras la hemorragia',          via: 'IV' },
    ],

    embarazo: 'Datos limitados en embarazo humano. Uso solo si el beneficio (HSA materna con riesgo de vasoespasmo) claramente supera el riesgo potencial. Considerar consulta con especialista dado el contexto de emergencia neurológica grave.',

    pediatria: 'Uso off-label en pediatría descrito en casos específicos de HSA pediátrica (rara), bajo supervisión especializada en neurocríticos pediátricos. No hay dosis pediátrica establecida formalmente en ficha técnica.',

    adultoMayor: 'Sin ajuste específico de dosis por edad, aunque mayor prevalencia de insuficiencia hepática/cardíaca puede requerir vigilancia más estrecha y ajuste según respuesta individual.',

    insufRenal: 'Sin ajuste específico de dosis - eliminación principalmente hepática, metabolitos eliminados por vía renal y biliar sin acumulación significativa relevante.',

    insufHepatica: '<b>Biodisponibilidad AUMENTADA</b> por reducción del aclaramiento metabólico (CYP3A4) - efectos farmacológicos y adversos (especialmente hipotensión) más marcados. Realizar ajuste de dosis según respuesta de PA, considerar reducción de velocidad de infusión, vigilancia intensiva.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Nimotop® 0.2 mg/mL Solución para Perfusión. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Nimodipino Altan 0.2 mg/mL. AEMPS.',
      'FDA DailyMed. Nimodipine (referencia internacional).',
      'Pediamécum AEP. Nimodipino. Asociación Española de Pediatría.',
      'AHA/ASA Guidelines. Management of Aneurysmal Subarachnoid Hemorrhage. Stroke. 2023.',
      'Dorhout Mees SM, et al. Calcium Antagonists for Aneurysmal SAH (Cochrane Review). 2007.',
      'Neurocritical Care Society. Guidelines for Vasospasm Management. 2020.',
      'Connolly ES, et al. Guidelines for Management of Aneurysmal SAH. AHA/ASA. Stroke. 2012 (actualización 2023).',
    ],
  },

});
