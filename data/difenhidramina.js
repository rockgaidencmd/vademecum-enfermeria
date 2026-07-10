/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/difenhidramina.js
   Fuentes: CIMA AEMPS, FDA DailyMed, WAO Anaphylaxis
   Guidelines 2020, Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'difenhidramina',
  nombre:         'Difenhidramina',
  nombreGenerico: 'Diphenhydramine Hydrochloride',
  categoria:      'otros',
  tags:           ['antihistamínico', 'alergia', 'anafilaxia', 'reacción transfusional', 'premedicación', 'sedante', 'cuadro básico'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Antihistamínico H1 de primera generación</b> — tratamiento sintomático de reacciones alérgicas y coadyuvante en anafilaxia (NUNCA sustituye a la adrenalina).',
      'Dosis: <b>25-50 mg IV/IM lento</b>, puede repetirse cada 4-6 h (máx 400 mg/día).',
      'Muy usado como <b>premedicación</b> antes de transfusiones y de fármacos con riesgo de reacción infusional (vancomicina, contrastes yodados).',
      '<b>Sedación marcada</b> — atraviesa la barrera hematoencefálica (a diferencia de los antihistamínicos de 2ª generación) — precaución al conducir/operar maquinaria.',
      'Infundir <b>lento (mínimo 5 min)</b> — la administración rápida puede causar hipotensión y sedación excesiva.',
    ],

    resumenRapido: 'Antihistamínico H1 de primera generación con propiedades sedantes marcadas por su paso a través de la barrera hematoencefálica, además de efecto anticolinérgico. Se emplea en el tratamiento sintomático de reacciones alérgicas (urticaria, prurito), como coadyuvante en el manejo de la anafilaxia (junto con adrenalina, que sigue siendo el tratamiento de primera línea), en la premedicación antes de transfusiones sanguíneas o fármacos con riesgo de reacción infusional, y ocasionalmente como sedante o en el manejo de síntomas extrapiramidales agudos inducidos por antipsicóticos.',

    objetivoTerapeutico: 'Tratamiento sintomático de reacciones alérgicas (urticaria, prurito, angioedema leve) · Coadyuvante en el manejo de la anafilaxia (tras adrenalina) · Premedicación antes de transfusiones o fármacos con riesgo de reacción infusional · Tratamiento de reacciones extrapiramidales agudas por antipsicóticos',

    preparacion: {
      'Presentación':          '<b>Difenhidramina 10 mg/mL — ampolla 1-2 mL</b>',
      'Diluyente':             'Puede administrarse sin diluir (IV lenta) o diluido en SF 0.9%/SG 5%',
      'Dosis estándar adulto': '<b>25-50 mg IV/IM lento</b>',
      'Repetición':            'Cada 4-6 h según necesidad (máx 400 mg/día)',
      'Premedicación transfusional': '25-50 mg IV/IM 30 min antes de la transfusión',
      'Velocidad IV':          '<b>Mínimo 5 min — la infusión rápida causa hipotensión y sedación intensa</b>',
      'Vía':                   'IV lenta · IM · Oral (comprimidos/jarabe)',
      '⏱️ Inicio efecto (IV)':  '5-15 min · Pico: 1-3 h',
      '⏱️ Duración':            '4-8 h',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5% si se diluye</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar la indicación (reacción alérgica, premedicación, síntomas extrapiramidales).',
        'En anafilaxia: verificar que la adrenalina ya se ha administrado o está preparada — la difenhidramina NUNCA sustituye a la adrenalina en anafilaxia.',
        'Antecedente de glaucoma de ángulo estrecho o hipertrofia prostática (efecto anticolinérgico).',
        'Nivel de consciencia basal si se prevé sedación.',
      ],
      durante: [
        'Infundir lento (mínimo 5 min) — vigilar TA por riesgo de hipotensión con administración rápida.',
        'Vigilar el nivel de sedación, especialmente en ancianos.',
        'Observar respuesta al tratamiento de la reacción alérgica (prurito, urticaria).',
      ],
      despues: [
        'Advertir sobre la sedación — no conducir ni operar maquinaria tras la administración.',
        'Vigilar efectos anticolinérgicos: sequedad de boca, visión borrosa, retención urinaria (más en ancianos).',
        'Documentar dosis, vía y respuesta clínica.',
      ],
      suspender: [
        'Reacción paradójica (agitación, especialmente en niños y ancianos).',
        'Hipotensión significativa tras infusión rápida.',
        'Signos de retención urinaria aguda en paciente predispuesto.',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones alcalinas.',
      'Precaución con otros depresores del SNC (opioides, benzodiacepinas) — efecto sedante aditivo.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🟠 EN ANAFILAXIA: NUNCA sustituye a la adrenalina — es solo coadyuvante sintomático.',
      '🟠 Sedación marcada — atraviesa la barrera hematoencefálica, a diferencia de antihistamínicos modernos.',
      '🟡 Infusión rápida puede causar hipotensión — administrar siempre lento (mínimo 5 min).',
      '🟡 Efecto anticolinérgico — precaución en glaucoma, hipertrofia prostática y ancianos (mayor riesgo de confusión/delirium).',
      '🟡 Reacción paradójica (agitación) posible en niños y ancianos.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Administrar IV lento (mínimo 5 min) — nunca en bolo rápido, riesgo de hipotensión.',
      'En anafilaxia, confirmar que la adrenalina se ha administrado primero o está disponible de inmediato — la difenhidramina es coadyuvante, no tratamiento principal.',
      'Vigilar TA durante la administración, especialmente en ancianos y pacientes con hipovolemia.',
      'Advertir al paciente sobre la sedación y evitar actividades que requieran alerta (conducir) tras la dosis.',
      'Vigilar signos de retención urinaria en varones con hipertrofia prostática conocida.',
      'En premedicación transfusional: administrar 30 min antes del inicio de la transfusión.',
      'Vigilar confusión o agitación paradójica en ancianos y niños pequeños.',
      'Documentar dosis, vía, indicación y respuesta clínica.',
    ],

    efectosAdversos: [
      '🟠 Hipotensión (con infusión IV rápida)',
      '🟠 Retención urinaria (efecto anticolinérgico, más en varones con HBP)',
      '🟡 Sedación marcada, somnolencia',
      '🟡 Sequedad de boca, visión borrosa',
      '🟡 Reacción paradójica: agitación (niños, ancianos)',
      '🟡 Confusión / delirium en ancianos (efecto anticolinérgico central)',
    ],

    contraindicaciones: [
      'Glaucoma de ángulo estrecho no tratado.',
      'Hipertrofia prostática con retención urinaria.',
      'Asma aguda grave (el efecto anticolinérgico puede espesar las secreciones).',
      'Hipersensibilidad conocida a difenhidramina.',
      'Precaución en ancianos (lista Beers — riesgo de efectos anticolinérgicos centrales).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':   '<b>24 h a temperatura ambiente</b>',
      'Diluida en SG 5%':     '24 h a temperatura ambiente',
      'Aspecto':               'Solución incolora — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente si se diluye.',
      notas:             'Puede administrarse sin diluir en IV lenta. Coadyuvante, no sustituto, de la adrenalina en anafilaxia.',
    },

    presentaciones: [
      'Difenhidramina 10 mg/mL — ampolla 1-2 mL (IV/IM)',
      'Difenhidramina 25 mg y 50 mg — cápsulas/comprimidos (oral)',
      'Benadryl® — presentaciones orales de venta libre en varios países',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Reacción alérgica / prurito',        dosis: '<b>25-50 mg IV/IM lento</b>',                 via: 'IV/IM' },
      { indicacion: 'Coadyuvante en anafilaxia',           dosis: '25-50 mg IV lento, DESPUÉS de la adrenalina', via: 'IV' },
      { indicacion: 'Premedicación transfusional',         dosis: '25-50 mg IV/IM 30 min antes',                 via: 'IV/IM' },
      { indicacion: 'Síntomas extrapiramidales agudos',    dosis: '25-50 mg IV/IM',                              via: 'IV/IM' },
      { indicacion: 'Repetición',                           dosis: 'Cada 4-6 h (máx 400 mg/día)',                 via: 'IV/IM' },
    ],

    embarazo: 'Categoría B (FDA). Considerada relativamente segura durante el embarazo cuando está claramente indicada, aunque se prefieren antihistamínicos de segunda generación para uso prolongado por su menor efecto sedante. Uso puntual en reacciones alérgicas agudas aceptado.',

    pediatria: '>6 meses: 1-1.5 mg/kg IV/IM c/6 h (máx 300 mg/día). Mayor riesgo de reacción paradójica (excitación/agitación) en niños pequeños — vigilar estrechamente. Uso frecuente en premedicación pediátrica antes de transfusiones.',

    adultoMayor: '<b>Uso con precaución</b> (lista Beers) — mayor riesgo de efectos anticolinérgicos centrales: confusión, delirium, caídas, retención urinaria. Preferir antihistamínicos de segunda generación cuando sea posible. Si se usa, dosis reducida y vigilancia estrecha.',

    insufRenal: 'Sin ajuste de dosis formal establecido, aunque la eliminación puede prolongarse en insuficiencia renal grave. Usar con precaución y vigilar sedación prolongada.',

    insufHepatica: 'Precaución en insuficiencia hepática grave — el metabolismo es principalmente hepático, con posible prolongación del efecto sedante. Considerar reducción de dosis.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Difenhidramina.',
      'Cardona V et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020.',
      'Sicherer SH, Simons FER. Epinephrine for First-aid Management of Anaphylaxis. Pediatrics. 2017.',
      'American Geriatrics Society. 2023 Updated AGS Beers Criteria. J Am Geriatr Soc. 2023.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
