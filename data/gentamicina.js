/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/gentamicina.js
   Fuentes: CIMA AEMPS (Gentamicina Normon), FDA DailyMed,
   IDSA Guidelines, SEIMC Guía Antibióticos 2023,
   Surviving Sepsis Campaign 2021
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'gentamicina',
  nombre:         'Gentamicina',
  nombreGenerico: 'Gentamicin Sulfate',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'aminoglucósido', 'gram negativo', 'sinergismo', 'endocarditis', 'ITU', 'sepsis', 'UCI'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Aminoglucósido nefrotóxico y ototóxico. Requiere monitorización de niveles plasmáticos (TDM) y ajuste estricto por función renal. El daño auditivo/vestibular puede ser irreversible. Potencia el bloqueo neuromuscular. Doble verificación en la dosis y en el ajuste renal.',

  nivel1: {

    puntosClave: [
      '<b>Dosis única diaria (extendida)</b>: 5-7 mg/kg IV c/24 h — mejor perfil de seguridad que dosis fraccionadas.',
      '<b>Sinergismo con betalactámicos</b> en endocarditis por enterococo/estreptococo — dosis bajas (1 mg/kg c/8h).',
      '<b>Nefrotoxicidad y ototoxicidad</b> — ambas dependientes de niveles acumulados; monitorizar creatinina y niveles plasmáticos.',
      '<b>Infundir en 30-60 min diluido en SF o SG 5%</b> — nunca en bolo IV directo.',
      'Ajuste renal <b>obligatorio</b> — niveles valle (pre-dosis) y pico según protocolo de TDM.',
    ],

    resumenRapido: 'Aminoglucósido bactericida de amplio espectro frente a bacilos gram negativos aerobios (E. coli, Klebsiella, Pseudomonas, Proteus) y sinergismo con betalactámicos frente a gram positivos (enterococo, estreptococo) en endocarditis. Actúa uniéndose a la subunidad 30S ribosomal, bloqueando la síntesis proteica bacteriana. Su toxicidad renal y ótica dosis-dependiente obliga a la monitorización farmacocinética (TDM) y al ajuste según función renal. La pauta de dosis única diaria extendida ha reemplazado en gran medida a la dosis fraccionada por su mejor perfil de seguridad.',

    objetivoTerapeutico: 'Tratamiento de infecciones graves por gram negativos (sepsis, pielonefritis, neumonía nosocomial) · Sinergismo con betalactámicos en endocarditis por enterococo/estreptococo · Cobertura empírica de amplio espectro en sepsis grave · Profilaxis quirúrgica en combinación',

    preparacion: {
      'Presentación':            '<b>Gentamicina 40 mg/mL — ampolla 1 mL (40 mg), 2 mL (80 mg)</b>',
      'Diluyente':               '<b>SF 0.9% o SG 5%</b>',
      'Dilución':                'Diluir la dosis en 50-100 mL SF/SG 5%',
      'Dosis extendida (1x/día)': '<b>5-7 mg/kg IV c/24 h</b> — pauta de elección en la mayoría de indicaciones',
      'Dosis sinergismo (endocarditis)': '1 mg/kg IV c/8 h (dosis bajas, con betalactámico)',
      'Velocidad de infusión':   '<b>30-60 min — nunca en bolo IV directo</b>',
      'Vía':                     'IV intermitente · IM (menos frecuente)',
      '⏱️ Inicio efecto':         'Concentración pico 30-60 min tras finalizar la infusión',
      'Niveles (TDM)':           '<b>Valle (pre-dosis) y pico según protocolo — ajustar dosis/intervalo</b>',
      '🧊 Estabilidad':           '<b>24 h a temperatura ambiente en SF 0.9% o SG 5%</b>',
    },

    vigilancia: {
      antes: [
        'Función renal basal: creatinina, ClCr — ajuste de dosis/intervalo obligatorio.',
        'Audiometría basal si tratamiento prolongado previsto (>7-10 días) o factores de riesgo ótico.',
        'Peso actual (dosis en mg/kg) — considerar peso ajustado en obesidad.',
        'Revisar medicación concomitante nefrotóxica/ototóxica: vancomicina, furosemida, contraste yodado, otros aminoglucósidos.',
        'Descartar miastenia gravis o uso de bloqueantes neuromusculares (potenciación).',
      ],
      durante: [
        'Infundir en 30-60 min — la infusión rápida se asocia a bloqueo neuromuscular y ototoxicidad.',
        'Vigilar signos de bloqueo neuromuscular en pacientes con bloqueantes musculares o miastenia.',
        'Diuresis horaria si sepsis grave — vigilar oliguria.',
        'Extraer niveles valle según protocolo (habitualmente antes de la 3ª-4ª dosis).',
      ],
      despues: [
        'Creatinina cada 48-72 h (o diaria si IR o tratamiento prolongado).',
        'Niveles plasmáticos (TDM) para ajustar dosis/intervalo — objetivo según indicación.',
        'Preguntar activamente por acúfenos, hipoacusia, vértigo o inestabilidad (ototoxicidad).',
        'Reevaluar la necesidad de continuar tras 48-72 h con cultivos y respuesta clínica.',
        'Documentar dosis, niveles y función renal en cada control.',
      ],
      suspender: [
        'Elevación significativa de creatinina (>0.5 mg/dL sobre basal o >50%).',
        'Síntomas de ototoxicidad/vestibulotoxicidad (acúfenos, hipoacusia, vértigo, ataxia).',
        'Niveles valle persistentemente elevados pese a ajuste de intervalo.',
        'Bloqueo neuromuscular clínico (debilidad, depresión respiratoria) — tratar con calcio IV.',
        'Cuando se dispone de antibiograma y existe alternativa menos tóxica.',
      ],
    },

    incompatibilidades: [
      '<b>Incompatible con betalactámicos en la misma jeringa/solución</b> (penicilinas, cefalosporinas) — inactivación mutua.',
      'Administrar SIEMPRE por vía separada de otros aminoglucósidos, vancomicina o anfotericina B.',
      'No mezclar con heparina.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
      'Lavar la vía con SF antes y después si se comparte el acceso.',
    ],

    alertasSeguridad: [
      '🔴 NEFROTOXICIDAD — acumulativa y dosis-dependiente. Ajuste renal obligatorio y creatinina seriada.',
      '🔴 OTOTOXICIDAD/VESTIBULOTOXICIDAD — puede ser IRREVERSIBLE. Preguntar por acúfenos/vértigo en cada turno.',
      '🔴 Incompatible con betalactámicos en la misma vía — inactivación mutua, infundir por separado.',
      '🟠 Potencia el bloqueo neuromuscular — precaución con relajantes musculares y miastenia gravis.',
      '🟠 Niveles plasmáticos (TDM) obligatorios en tratamientos >48-72 h.',
      '🟡 Nunca en bolo IV rápido — infundir siempre en 30-60 min.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Calcular la dosis con el peso actual (o ajustado en obesidad) y verificar con la prescripción.',
      'Diluir en 50-100 mL SF/SG 5% e infundir en 30-60 min — nunca en bolo.',
      'Administrar por vía separada de betalactámicos, vancomicina y otros nefro/ototóxicos.',
      'Extraer los niveles valle justo antes de la siguiente dosis según protocolo de TDM.',
      'Creatinina cada 48-72 h; comunicar elevaciones al médico de inmediato.',
      'Preguntar activamente cada turno por acúfenos, hipoacusia, vértigo o inestabilidad de la marcha.',
      'Vigilar diuresis, especialmente en sepsis grave o shock.',
      'Reevaluar diariamente la indicación — desescalar o suspender en cuanto sea posible.',
      'Documentar dosis, hora de infusión, niveles y función renal en cada turno.',
    ],

    efectosAdversos: [
      '🔴 Nefrotoxicidad (necrosis tubular aguda, acumulativa)',
      '🔴 Ototoxicidad coclear (hipoacusia, acúfenos) — puede ser irreversible',
      '🔴 Vestibulotoxicidad (vértigo, ataxia, inestabilidad)',
      '🟠 Bloqueo neuromuscular (potencia relajantes musculares)',
      '🟠 Hipomagnesemia, hipopotasemia, hipocalcemia (uso prolongado)',
      '🟡 Erupción cutánea, fiebre por fármacos',
    ],

    contraindicaciones: [
      'Hipersensibilidad a aminoglucósidos.',
      'Miastenia gravis (relativa — riesgo de bloqueo neuromuscular grave).',
      'Insuficiencia renal grave sin ajuste ni monitorización de niveles.',
      'Embarazo salvo indicación vital (ototoxicidad fetal).',
      'Uso concomitante con otros aminoglucósidos.',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':   '<b>24 h a temperatura ambiente</b>',
      'Diluida en SG 5%':     '24 h a temperatura ambiente',
      'Aspecto':               'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente.',
      notas:             'Incompatible con betalactámicos en la misma vía — infundir siempre por separado. TDM obligatorio en tratamientos prolongados.',
    },

    presentaciones: [
      'Gentamicina Normon® 40 mg/mL — ampolla 1 mL (40 mg)',
      'Gentamicina Normon® 40 mg/mL — ampolla 2 mL (80 mg)',
      'Genta Gobens® — genérico',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Sepsis / infección grave gram (-)', dosis: '<b>5-7 mg/kg IV c/24 h</b> (dosis extendida)',        via: 'IV' },
      { indicacion: 'Sinergismo en endocarditis',        dosis: '1 mg/kg IV c/8 h + betalactámico',                     via: 'IV' },
      { indicacion: 'ITU complicada / pielonefritis',    dosis: '5-7 mg/kg IV c/24 h × 5-7 días',                       via: 'IV' },
      { indicacion: 'IR (ClCr 30-60)',                    dosis: '5-7 mg/kg, ampliar intervalo a c/36 h según niveles', via: 'IV' },
      { indicacion: 'IR grave (ClCr <30)',                dosis: 'Dosis única guiada por niveles y TDM estrecho',       via: 'IV' },
    ],

    embarazo: 'Categoría D (FDA). Ototoxicidad fetal documentada (daño del VIII par craneal). Evitar salvo infección grave sin alternativa. Si se usa: dosis mínima eficaz, TDM estricto y monitorización auditiva neonatal.',

    pediatria: 'Neonatos: 4-5 mg/kg IV c/24-48 h según edad gestacional (ajuste por inmadurez renal). Niños: 5-7.5 mg/kg IV c/24 h. TDM obligatorio en neonatos y lactantes. Infundir en 30 min.',

    adultoMayor: 'Mayor riesgo de nefro y ototoxicidad por reducción fisiológica de la función renal. Ajustar por ClCr real (Cockcroft-Gault), no por creatinina aislada. TDM más frecuente y vigilancia auditiva.',

    insufRenal: '<b>Ajuste obligatorio de dosis e intervalo según ClCr y niveles plasmáticos (TDM)</b>. ClCr 30-60: ampliar intervalo a c/36 h. ClCr <30: dosis única guiada por niveles. Diálisis: administrar tras la sesión.',

    insufHepatica: 'Sin ajuste específico — eliminación renal, no hepática. Vigilar función renal como en cualquier paciente.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Gentamicina Normon® (gentamicina sulfato).',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Baddour LM et al. Infective Endocarditis in Adults: Diagnosis, Antimicrobial Therapy. AHA Scientific Statement. Circulation. 2015.',
      'Evans L et al. Surviving Sepsis Campaign: International Guidelines. Crit Care Med. 2021.',
      'Rybak MJ et al. Therapeutic monitoring of aminoglycosides. Pharmacotherapy. 2020.',
    ],
  },

});
