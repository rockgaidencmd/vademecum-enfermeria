/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/dimenhidrinato.js
   Fuentes: CIMA AEMPS, FDA DailyMed, Cuadro Básico
   IMSS/Sector Salud México, ACOG Nausea Gravídica Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'dimenhidrinato',
  nombre:         'Dimenhidrinato',
  nombreComercial: 'Dramamine® / Vomisin®',
  nombreGenerico: 'Dimenhydrinate',
  categoria:      'otros',
  tags:           ['antiemético', 'antihistamínico', 'vértigo', 'cinetosis', 'náuseas', 'vómito', 'cuadro básico', 'clásico'],
  prioridad:      'low',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Antiemético clásico del cuadro básico</b> — de los más usados en urgencias y hospitalización para náuseas, vómitos y vértigo.',
      'Dosis: <b>50 mg IV lento diluido (mínimo 5 min) o IM</b>, cada 4-6 h según necesidad (máx 400 mg/día).',
      '<b>Sedación marcada</b> — antihistamínico de primera generación con efecto anticolinérgico central.',
      'Muy eficaz en <b>vértigo periférico y cinetosis</b> (mareo por movimiento) — mecanismo vestibular específico.',
      '<b>Diluir bien antes de IV</b> — la inyección rápida o concentrada causa quemazón intensa en la vena y puede producir hipotensión.',
    ],

    resumenRapido: 'Antihistamínico H1 de primera generación con propiedades antieméticas y anti-vertiginosas, derivado de la combinación de difenhidramina con clorteofilina. Actúa a nivel del centro del vómito y del aparato vestibular, siendo especialmente eficaz en el vértigo periférico, la cinetosis (mareo por movimiento) y las náuseas/vómitos de diversas causas. Es uno de los antieméticos más utilizados en los servicios de urgencias y hospitalización de América Latina por su amplia disponibilidad, bajo costo y eficacia, aunque su perfil sedante limita su uso en pacientes que requieren mantenerse alerta.',

    objetivoTerapeutico: 'Tratamiento sintomático de náuseas y vómitos de diversas causas · Manejo del vértigo periférico (síndrome vestibular agudo) · Prevención y tratamiento de la cinetosis (mareo por movimiento) · Náuseas y vómitos postoperatorios (coadyuvante)',

    preparacion: {
      'Presentación':          '<b>Dimenhidrinato 50 mg/mL — ampolla 1 mL</b>',
      'Diluyente':             '<b>Diluir en al menos 10 mL SF 0.9% o SG 5% antes de IV</b> — no administrar sin diluir',
      'Dosis estándar adulto': '<b>50 mg IV lento (diluido) o IM</b>',
      'Repetición':            'Cada 4-6 h según necesidad (máx 400 mg/día, algunos protocolos máx 300 mg/día)',
      'Velocidad IV':          '<b>Mínimo 5 min diluido — la inyección rápida causa quemazón venosa intensa e hipotensión</b>',
      'Vía':                   'IV lenta diluida · IM · Oral (comprimidos/jarabe)',
      '⏱️ Inicio efecto (IV)':  '15-30 min · Pico: 1-2 h',
      '⏱️ Duración':            '4-6 h',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5% tras diluir</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar la indicación (náuseas, vómito, vértigo, cinetosis).',
        'Antecedente de glaucoma de ángulo estrecho o hipertrofia prostática (efecto anticolinérgico).',
        'Nivel de consciencia basal — el efecto sedante puede ser marcado.',
        'TA basal si se prevé administración IV.',
      ],
      durante: [
        'Diluir adecuadamente antes de IV — administrar lento (mínimo 5 min) para evitar quemazón venosa e hipotensión.',
        'Vigilar TA durante la administración.',
        'Observar respuesta a las náuseas/vómito o vértigo.',
      ],
      despues: [
        'Advertir sobre la sedación — no conducir ni operar maquinaria tras la administración.',
        'Vigilar efectos anticolinérgicos: sequedad de boca, visión borrosa.',
        'Documentar dosis, vía y respuesta clínica al síntoma tratado.',
      ],
      suspender: [
        'Reacción paradójica (agitación, especialmente en niños).',
        'Hipotensión significativa.',
        'Signos de retención urinaria en paciente predispuesto.',
        'Sedación excesiva no deseada.',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones alcalinas.',
      'Precaución con otros depresores del SNC (opioides, benzodiacepinas, alcohol) — efecto sedante aditivo.',
      'Compatible con SF 0.9% y SG 5% para dilución — diluir siempre antes de administrar IV.',
    ],

    alertasSeguridad: [
      '🟠 DILUIR SIEMPRE antes de administrar IV — sin diluir causa quemazón venosa intensa e hipotensión.',
      '🟡 Sedación marcada — precaución en pacientes que requieren mantenerse alerta (conducción, trabajo).',
      '🟡 Efecto anticolinérgico — precaución en glaucoma, hipertrofia prostática y ancianos.',
      '🟡 Puede enmascarar síntomas de ototoxicidad por otros fármacos (aminoglucósidos) al suprimir el vértigo — considerar en tratamientos combinados prolongados.',
      '🟢 Perfil de seguridad favorable en uso puntual — ampliamente usado en la práctica clínica diaria.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Diluir siempre en al menos 10 mL de SF 0.9% o SG 5% antes de administrar por vía IV.',
      'Infundir lento (mínimo 5 min) — la administración rápida causa dolor/quemazón en la vena e hipotensión.',
      'Vigilar TA durante la administración, especialmente en pacientes con hipovolemia.',
      'Advertir al paciente sobre la sedación y evitar actividades que requieran alerta tras la dosis.',
      'Vigilar signos de retención urinaria en varones con hipertrofia prostática conocida.',
      'Reevaluar la respuesta al síntoma tratado (náusea, vértigo) a los 30-60 min.',
      'Vigilar agitación paradójica en niños pequeños.',
      'Documentar dosis, vía, indicación y respuesta clínica.',
    ],

    efectosAdversos: [
      '🟠 Hipotensión (con infusión IV rápida o sin diluir)',
      '🟠 Dolor/quemazón en el punto de infusión (sin diluir adecuadamente)',
      '🟡 Sedación marcada, somnolencia',
      '🟡 Sequedad de boca, visión borrosa',
      '🟡 Reacción paradójica: agitación (más en niños)',
      '🟡 Retención urinaria (efecto anticolinérgico, más en varones con HBP)',
    ],

    contraindicaciones: [
      'Glaucoma de ángulo estrecho no tratado.',
      'Hipertrofia prostática con retención urinaria.',
      'Hipersensibilidad conocida a dimenhidrinato o difenhidramina.',
      'Precaución en asma aguda grave (efecto anticolinérgico puede espesar secreciones).',
      'Neonatos y prematuros (riesgo de efectos anticolinérgicos y sedación excesiva).',
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
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente.',
      notas:             'Diluir siempre antes de la administración IV — nunca administrar sin diluir por el riesgo de quemazón venosa e hipotensión.',
    },

    presentaciones: [
      'Dimenhidrinato 50 mg/mL — ampolla 1 mL (IV/IM)',
      'Dramamine® — comprimidos 50 mg (oral)',
      'Vomisin® — presentaciones orales e inyectables según país',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Náuseas/vómitos',           dosis: '<b>50 mg IV lento diluido o IM</b>',           via: 'IV/IM' },
      { indicacion: 'Vértigo periférico',          dosis: '50 mg IV/IM, repetible cada 4-6 h',            via: 'IV/IM' },
      { indicacion: 'Cinetosis (profilaxis)',      dosis: '50-100 mg VO 30-60 min antes del viaje',       via: 'VO' },
      { indicacion: 'Repetición',                   dosis: 'Cada 4-6 h (máx 300-400 mg/día según protocolo)', via: 'IV/IM' },
    ],

    embarazo: 'Categoría B (FDA). Ampliamente utilizado en la práctica clínica para las náuseas y vómitos del embarazo (hiperemesis gravídica) cuando otras medidas no farmacológicas fallan, aunque se recomienda individualizar el uso con el equipo obstétrico. Datos disponibles sin evidencia clara de teratogenicidad.',

    pediatria: '>2 años: 1-1.5 mg/kg IV/IM c/6 h (máx 300 mg/día). Uso frecuente en gastroenteritis con vómitos y en cinetosis pediátrica. Mayor riesgo de reacción paradójica (excitación) en niños pequeños — vigilar estrechamente. Contraindicado en neonatos y prematuros.',

    adultoMayor: 'Uso con precaución por el efecto anticolinérgico central — mayor riesgo de confusión, retención urinaria y caídas. Preferir antieméticos con menor efecto sedante (ondansetrón, metoclopramida) cuando sea posible. Si se usa, dosis reducida y vigilancia estrecha.',

    insufRenal: 'Sin ajuste de dosis formal establecido. Usar con precaución en insuficiencia renal grave por posible prolongación del efecto sedante.',

    insufHepatica: 'Precaución en insuficiencia hepática grave — el metabolismo es principalmente hepático. Considerar reducción de dosis o intervalo más amplio.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Dimenhidrinato.',
      'ACOG Practice Bulletin. Nausea and Vomiting of Pregnancy. Obstet Gynecol. 2018.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
      'FDA DailyMed. Dimenhydrinate — Prescribing Information.',
      'Furman JM, Barton JJS. Vestibular neuritis and labyrinthitis: clinical features and management. UpToDate. 2023.',
    ],
  },

});
