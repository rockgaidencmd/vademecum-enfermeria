/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/acido-tranexamico.js
   Fuentes: CIMA AEMPS (Amchafibrin, Anvitoff),
   FDA DailyMed, CRASH-2 Trial, WOMAN Trial, HALT-IT
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'acido-tranexamico',
  nombre:         'Ácido Tranexámico',
  nombreGenerico: 'Tranexamic Acid',
  categoria:      'anticoagulantes',
  tags:           ['antifibrinolítico', 'hemorragia', 'trauma', 'hemorragia postparto', 'cirugía', 'CRASH-2'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'ANTIFIBRINOLÍTICO — inhibe activación de plasminógeno a plasmina (que degrada fibrina) → estabiliza el coágulo, no lo forma.',
      '<b>ADMINISTRACIÓN TEMPRANA CRUCIAL</b>: eficacia MÁXIMA en primeras 3 horas post-trauma o inicio hemorragia (CRASH-2, WOMAN Trial).',
      'Indicaciones principales: <b>trauma con hemorragia significativa</b>, <b>hemorragia postparto</b>, hemorragia digestiva alta, cirugía mayor, epistaxis severa, hemorragia por hemofilia.',
      'Administración IV LENTA: <b>MÍNIMO 10 minutos</b> - infusión rápida causa hipotensión, mareos, convulsiones.',
      'Reduce mortalidad por hemorragia sin aumentar riesgo de trombosis (CRASH-2 y WOMAN establecieron seguridad).',
    ],

    resumenRapido: 'Análogo sintético de lisina, antifibrinolítico. Se une reversiblemente al sitio de lisina del plasminógeno, impidiendo su activación a plasmina y por tanto la degradación de la fibrina. NO es un anticoagulante ni forma coágulos - solo previene su disolución. Inicio IV: 15-30 min · Duración: 3-4h (vida media 2h). Indicado en: TRAUMA CON HEMORRAGIA (CRASH-2), HEMORRAGIA POSTPARTO (WOMAN), cirugía cardíaca/ortopédica/urológica, hemorragia digestiva alta (HALT-IT - beneficio dudoso), epistaxis severa, menorragia, hemorragia por hemofilia (adyuvante), sangrado cutáneo por trombopenia.',

    objetivoTerapeutico: 'Reducir mortalidad por hemorragia · Reducir necesidad transfusional · Estabilizar coágulos formados · Control de sangrado en trauma/parto/cirugía',

    preparacion: {
      'Presentación IV':          '<b>Ácido Tranexámico 500 mg/5 mL o 1 g/10 mL ampolla</b> (100 mg/mL)',
      'Presentación VO':          'Comprimidos 500 mg (Amchafibrin®)',
      'Diluyente':                'SF 0.9% · SG 5% · Ringer Lactato (todos compatibles)',
      'Dilución IV':              '<b>1 g (10 mL) en 100 mL SF/SG5%</b> → 10 mg/mL',
      'Vía':                      'IV (preferida hospitalaria), IM, VO, tópica (empapado en gasas)',
      '⏱️ TRAUMA (CRASH-2)':      '<b>1 g IV en 10 min + 1 g IV en 8h</b>',
      '⏱️ HEMORRAGIA POSTPARTO':  '<b>1 g IV en 10 min (repetir en 30 min si continúa)</b>',
      '⏱️ CIRUGÍA (profilaxis)':  '10-15 mg/kg IV pre-incisión + 1-2 mg/kg/h intra-operatorio',
      '⏱️ CIRUGÍA CARDÍACA':     '<b>1 g IV pre-incisión + 1 g intra-op + 1 g post-op</b>',
      '⏱️ EPISTAXIS SEVERA':      '500-1000 mg IV o gasas empapadas',
      '⏱️ HEMORRAGIA GI':         '<b>1 g IV c/8h × 24h</b> (beneficio dudoso HALT-IT)',
      '⏱️ VELOCIDAD MÁXIMA IV':   '<b>1 mL/min (100 mg/min) - MÍNIMO 10 min para 1 g</b>',
      'Bomba':                    'Necesaria para infusión controlada',
      '🧊 ESTABILIDAD':           '<b>24 horas a temperatura ambiente</b> en SF/SG5%/RL',
      '🧊 Ampolla sin abrir':     'Temperatura ambiente (15-25°C) hasta vencimiento',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>CONFIRMAR ventana temporal</b> - máxima eficacia < 3h desde inicio hemorragia.',
        'Evaluar severidad del sangrado (clase hemorragia trauma, pérdida estimada, PA, FC).',
        'Revisar antecedentes: TEP/TVP previa, IAM, ACV, coagulopatía trombótica.',
        'Hb, hematocrito, coagulación (INR, TTPA, fibrinógeno) basales.',
        'Función renal - AJUSTE OBLIGATORIO si CrCl < 50 mL/min.',
        'Verificar CONTRAINDICACIONES: CID activa, hemorragia subaracnoidea (relativa), convulsiones activas.',
        'Acceso IV permeable.',
        'Doble verificación: dosis, dilución, velocidad.',
      ],
      durante: [
        '<b>Infusión IV en MÍNIMO 10 minutos</b> - bolo rápido causa hipotensión, convulsiones.',
        'Monitor: PA, FC, FR, SpO₂, ECG.',
        'Vigilar sitio IV.',
        'Observar reacciones inmediatas: náuseas, mareos, hipotensión.',
        'En hemorragia postparto: vigilar tono uterino, sangrado vaginal.',
        'En trauma: seguimiento del foco hemorrágico.',
        'Si aparecen convulsiones: SUSPENDER inmediatamente.',
      ],
      despues: [
        'Evaluar respuesta clínica: reducción sangrado, estabilidad hemodinámica.',
        'Hb, hematocrito control a las 2-4h y 12-24h.',
        'Vigilar signos de complicación trombótica: TEP (disnea, dolor torácico), TVP (dolor MI, edema), ACV (déficit focal), IAM.',
        'En trauma: control de coagulopatía asociada a trauma (TIC).',
        'En hemorragia postparto: seguimiento loquios, involución uterina.',
        'En perfusión continua: control periódico de hemostasia.',
        'Documentar: dosis total, tiempo desde inicio hemorragia, respuesta, eventos.',
      ],
      suspender: [
        'Convulsiones nuevas o exacerbación de epilepsia.',
        'Signos de TEP: disnea aguda, dolor torácico pleurítico, taquicardia.',
        'Signos de TVP: dolor MI unilateral, edema, empastamiento.',
        'IAM o ACV nuevo.',
        'Coagulación intravascular diseminada (CID).',
        'Reacción alérgica.',
        'Hemorragia resuelta o control quirúrgico establecido.',
        'Ventana terapéutica cerrada (> 3h desde inicio - eficacia reducida).',
      ],
    },

    incompatibilidades: [
      'Penicilina - INCOMPATIBLE.',
      'Diazepam - incompatibilidad documentada.',
      'Nitroglicerina - verificar.',
      'Furosemida - INCOMPATIBLE.',
      'Anfotericina B - incompatibilidad.',
      'Concentrados de complejo protrombínico - verificar.',
      'Generalmente NO mezclar con otros medicamentos en misma línea.',
      'Lavar línea con SF antes y después.',
    ],

    alertasSeguridad: [
      '🔴 <b>ADMINISTRACIÓN TEMPRANA CRUCIAL</b> - > 3h post-inicio hemorragia: eficacia MUY REDUCIDA (CRASH-2, WOMAN).',
      '🔴 INFUSIÓN RÁPIDA (< 10 min): hipotensión, convulsiones, mareos severos.',
      '🟠 <b>CONVULSIONES</b> con dosis altas o infusión rápida - especialmente en cirugía cardíaca > 100 mg/kg.',
      '🟠 Contraindicado en CID activa (empeora consumo de factores).',
      '🟠 Precaución en trombosis previa (TEP, TVP, IAM, ACV) - vigilancia.',
      '🟠 En hemorragia subaracnoidea: puede empeorar vasoespasmo (uso limitado a primeras 72h).',
      '🟡 AJUSTE OBLIGATORIO en IRC (CrCl < 50).',
      '🟡 Reducción de MORTALIDAD por hemorragia sin aumento significativo de trombosis en estudios grandes.',
      '🟡 Uso rutinario en HEMORRAGIA GI: beneficio DUDOSO (estudio HALT-IT 2020 no mostró reducción de mortalidad).',
      '🟡 En cirugía electiva: reducción de transfusiones ~30% (evidencia sólida).',
    ],
  },

  modulos: {

    trauma: `
      <b>Ácido Tranexámico en Trauma (CRASH-2):</b><br/>
      <b>ESTUDIO CRASH-2 (2010):</b><br/>
      • 20,211 pacientes con trauma y hemorragia significativa.<br/>
      • Reducción de mortalidad por hemorragia del 32% si administrado en primeras 3 horas.<br/>
      • <b>SIN AUMENTO significativo</b> de complicaciones tromboembólicas.<br/>
      • Base de guías actuales (ATLS, Damage Control).<br/><br/>
      <b>INDICACIÓN:</b><br/>
      • Trauma con hemorragia significativa o riesgo de hemorragia significativa.<br/>
      • PAS < 90 mmHg o FC > 110 lpm en contexto de trauma.<br/>
      • Sospecha de hemorragia interna (abdomen, tórax, pelvis).<br/>
      • Hemorragia externa masiva.<br/>
      • <b>DENTRO DE LAS PRIMERAS 3 HORAS DEL TRAUMA</b>.<br/><br/>
      <b>PROTOCOLO CRASH-2:</b><br/>
      1. <b>DOSIS DE CARGA: 1 g IV en 10 minutos</b>.<br/>
      2. <b>DOSIS DE MANTENIMIENTO: 1 g IV en 8 horas de infusión</b>.<br/>
      3. Ventana temporal: primeras 3 horas post-trauma.<br/>
      4. Después de 3h: eficacia MUY reducida, incluso puede ser dañino.<br/><br/>
      <b>UBICACIÓN EN CADENA DE SUPERVIVENCIA:</b><br/>
      • Prehospitalario: iniciar en ambulancia si trauma severo.<br/>
      • Urgencias: administrar en primer bolo si no se ha hecho.<br/>
      • Muchos protocolos incluyen TXA en "protocolo de transfusión masiva".<br/><br/>
      <b>EVIDENCIA POSTERIOR:</b><br/>
      • MATTERs Trial (2012): militares con hemorragia masiva - reducción mortalidad.<br/>
      • Estudios pediátricos: similar beneficio.<br/>
      • Estudios de TCE (CRASH-3, 2019): reducción mortalidad si TCE moderado con < 3h.
    `,

    postparto: `
      <b>Ácido Tranexámico en Hemorragia Postparto (WOMAN Trial):</b><br/>
      <b>ESTUDIO WOMAN (2017):</b><br/>
      • 20,060 mujeres con HPP.<br/>
      • Reducción de mortalidad por hemorragia del 31% si administrado en primeras 3 horas.<br/>
      • <b>OMS y FIGO recomiendan uso RUTINARIO en HPP</b>.<br/><br/>
      <b>INDICACIÓN:</b><br/>
      • Hemorragia postparto (HPP) definida como:<br/>
      • Pérdida > 500 mL en parto vaginal.<br/>
      • Pérdida > 1000 mL en cesárea.<br/>
      • Cualquier pérdida con signos de inestabilidad hemodinámica.<br/><br/>
      <b>PROTOCOLO WOMAN:</b><br/>
      1. <b>1 g IV en 10 minutos</b>.<br/>
      2. Si continúa hemorragia en 30 min: <b>segunda dosis 1 g IV en 10 min</b>.<br/>
      3. <b>Máximo 2 dosis (2 g total)</b>.<br/>
      4. Ventana temporal: <b>PRIMERAS 3 HORAS del parto</b>.<br/><br/>
      <b>COMBINAR CON:</b><br/>
      • Uterotónicos: oxitocina, misoprostol, metilergonovina, carbetocina.<br/>
      • Fluidos IV, transfusión si necesario.<br/>
      • Balón de Bakri, sutura B-Lynch si atonía persistente.<br/>
      • Histerectomía en último recurso.<br/><br/>
      <b>SEGURIDAD EN LACTANCIA:</b><br/>
      • Compatible - excreción mínima en leche.<br/>
      • Sin riesgo demostrado para el neonato.
    `,

    convulsiones: `
      <b>Convulsiones por Ácido Tranexámico:</b><br/>
      <b>FACTORES DE RIESGO:</b><br/>
      • Dosis altas (> 100 mg/kg en cirugía cardíaca).<br/>
      • Infusión rápida (< 10 min).<br/>
      • Circulación extracorpórea (aumenta niveles séricos).<br/>
      • Insuficiencia renal (acumulación).<br/>
      • Epilepsia previa.<br/>
      • Uso concomitante de proconvulsivantes.<br/><br/>
      <b>MECANISMO:</b><br/>
      • Antagonismo de receptores GABA (efecto proconvulsivante paradójico).<br/>
      • Especialmente peligroso en cirugía cardíaca con dosis altas.<br/><br/>
      <b>PRESENTACIÓN:</b><br/>
      • Convulsiones tónico-clónicas generalizadas.<br/>
      • Estado post-operatorio en cirugía cardíaca (más frecuente).<br/>
      • Pueden aparecer horas después.<br/><br/>
      <b>MANEJO:</b><br/>
      1. SUSPENDER TXA inmediatamente.<br/>
      2. ABC - proteger vía aérea.<br/>
      3. <b>Benzodiacepinas</b>: midazolam 5-10 mg IV o diazepam 10 mg IV.<br/>
      4. Si refractario: levetiracetam 20-40 mg/kg, fenitoína.<br/>
      5. Consulta con neurología.<br/>
      6. EEG si estado epiléptico.<br/><br/>
      <b>PREVENCIÓN:</b><br/>
      • Infusión LENTA (mínimo 10 min).<br/>
      • Dosis apropiada al peso (no exceder 30 mg/kg dosis única).<br/>
      • Ajuste en IRC.<br/>
      • Evitar dosis altas en cirugía cardíaca.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar VENTANA TEMPORAL (< 3h desde hemorragia inicial) - clave para eficacia.',
      'Etiquetar bolsa: TXA [g], dilución, velocidad, hora.',
      'Bomba de infusión OBLIGATORIA.',
      '<b>INFUSIÓN IV en MÍNIMO 10 MINUTOS</b> - NUNCA bolo rápido.',
      'Acceso IV de buen calibre.',
      'Monitor: PA, FC, FR, SpO₂, ECG durante y post-administración.',
      'Vigilar convulsiones - suspender si aparecen.',
      'Vigilar mareos, hipotensión (transitorios).',
      'En trauma: documentar HORA EXACTA de administración vs hora del trauma.',
      'En hemorragia postparto: coordinar con uterotónicos, control tono uterino.',
      'En cirugía: coordinar con anestesia (pre, intra, post-operatorio).',
      'Ajuste en IRC (CrCl < 50) - reducir dosis.',
      'Vigilar signos de complicación tromboembólica: TEP, TVP, IAM, ACV.',
      'Educar al paciente sobre riesgo trombótico (uso prolongado).',
      'En pacientes anticoagulados: NO suspender el anticoagulante por TXA.',
      'Documentar: dosis total, ventana temporal, respuesta hemorragia, complicaciones.',
    ],

    efectosAdversos: [
      '🔴 Convulsiones (dosis altas, cirugía cardíaca)',
      '🔴 Trombosis: TEP, TVP, IAM, ACV (raras)',
      '🔴 Coagulación intravascular diseminada (raro)',
      '🟠 Hipotensión con infusión rápida',
      '🟠 Reacción alérgica (rara)',
      '🟠 Vasoespasmo cerebral (en hemorragia subaracnoidea)',
      '🟡 Náuseas, vómitos, diarrea',
      '🟡 Mareos, cefalea',
      '🟡 Alteración visual (dosis muy altas)',
      '🟡 Prurito, rash cutáneo',
      '🟡 Dolor en sitio inyección',
      '🟡 Fatiga',
    ],

    contraindicaciones: [
      'Hipersensibilidad a ácido tranexámico.',
      'Antecedente activo o alto riesgo de tromboembolismo (TEP/TVP reciente).',
      'CID (Coagulación Intravascular Diseminada) sin cobertura anticoagulante.',
      'Hemorragia subaracnoidea (relativa - riesgo vasoespasmo).',
      'Hematuria macroscópica de origen renal (riesgo obstrucción por coágulos).',
      'Insuficiencia renal severa (CrCl < 30) - ajuste obligatorio.',
      'Convulsiones activas.',
      'Trombosis retiniana previa.',
      'Precaución: embarazo (categoría B - usar si beneficio > riesgo).',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente sin requerimientos especiales.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente (15-25°C) hasta vencimiento',
      'Diluida en SF/SG5%/RL':     '<b>24 horas a temperatura ambiente</b>',
      'Aspecto':                    'Transparente, incolora — desechar si turbidez',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Amchafibrin® 500 mg/5 mL - ampolla 5 mL (Rottapharm)',
      'Amchafibrin® 1 g/10 mL - ampolla 10 mL',
      'Anvitoff® 500 mg/5 mL (genérico)',
      'Ácido Tranexámico Normon, Kern, Rovi (múltiples genéricos)',
      'Amchafibrin® 500 mg comprimidos (uso VO)',
      'Cyklokapron® (marca internacional)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Trauma con hemorragia (CRASH-2)',      dosis: '<b>1 g IV en 10 min + 1 g IV en 8h</b>',    via: 'IV' },
      { indicacion: 'Hemorragia postparto (WOMAN)',         dosis: '<b>1 g IV en 10 min (repetir 30 min si continúa)</b>',via: 'IV' },
      { indicacion: 'Cirugía cardíaca',                       dosis: '1 g pre + 1 g intra + 1 g post-op',         via: 'IV' },
      { indicacion: 'Cirugía ortopédica (profilaxis)',       dosis: '10-15 mg/kg pre-incisión',                  via: 'IV' },
      { indicacion: 'Epistaxis severa',                       dosis: '500-1000 mg IV o gasas empapadas',          via: 'IV/local' },
      { indicacion: 'Hemorragia digestiva (HALT-IT - dudoso)',dosis: '1 g IV c/8h × 24h',                        via: 'IV' },
      { indicacion: 'Menorragia (VO)',                         dosis: '500-1000 mg c/6-8h VO durante regla',      via: 'VO' },
      { indicacion: 'Hemofilia (adyuvante)',                   dosis: '25 mg/kg c/8h VO o 10 mg/kg c/8h IV',      via: 'IV/VO' },
      { indicacion: 'Pediátrico',                              dosis: '15-25 mg/kg IV (máx 1 g)',                 via: 'IV' },
      { indicacion: 'Velocidad MÁXIMA IV',                     dosis: '<b>100 mg/min (1 mL/min)</b>',              via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Uso extensivo en hemorragia postparto (WOMAN Trial - reducción mortalidad materna). Compatible durante embarazo si indicación clara (hemorragia). Compatible con lactancia (excreción mínima).',

    pediatria: '15-25 mg/kg IV (máximo 1 g/dosis). En trauma pediátrico: mismo protocolo CRASH-2 adaptado por peso. Uso en cirugía cardíaca pediátrica bien establecido.',

    adultoMayor: 'Sin ajuste específico. Ajustar por función renal (frecuente CrCl reducido). Mayor vigilancia de complicaciones tromboembólicas.',

    insufRenal: '<b>AJUSTE OBLIGATORIO:</b> CrCl 50-80: dosis estándar · CrCl 10-50: 10 mg/kg c/12h · CrCl < 10: 10 mg/kg c/24h. En diálisis: dosis tras sesión.',

    insufHepatica: 'Sin ajuste específico - eliminación principalmente renal. Vigilancia clínica.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Amchafibrin® 500 mg/5 mL y 1 g/10 mL. Agencia Española de Medicamentos.',
      'FDA DailyMed. Tranexamic Acid Injection. U.S. National Library of Medicine.',
      'CRASH-2 Trial Collaborators. Effect of TXA in Trauma Patients. Lancet. 2010.',
      'WOMAN Trial Collaborators. Effect of TXA in Postpartum Hemorrhage. Lancet. 2017.',
      'HALT-IT Trial Collaborators. Effect of TXA in Gastrointestinal Bleeding. Lancet. 2020.',
      'CRASH-3 Trial Collaborators. Effect of TXA in Traumatic Brain Injury. Lancet. 2019.',
      'WHO Recommendations for Postpartum Hemorrhage. World Health Organization. 2017.',
      'European Trauma Course Guidelines. Damage Control Resuscitation. 2022.',
    ],
  },

});
