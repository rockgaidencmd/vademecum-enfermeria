/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/omeprazol.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'omeprazol',
  nombre:         'Omeprazol',
  nombreGenerico: 'Omeprazole Sodium',
  categoria:      'otros',
  tags:           ['UCI', 'IBP', 'gastroprotección', 'úlcera', 'hemorragia digestiva', 'profilaxis estrés'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Inhibidor de bomba de protones (IBP) — bloquea H⁺/K⁺-ATPasa en células parietales gástricas, reduce secreción ácida.',
      'Reconstituir con el solvente del fabricante (10 mL adjunto) — luego diluir en SF 0.9% o SG 5%.',
      'Administración: bolo IV lento (3-5 min) o infusión IV (20-30 min).',
      'Estabilidad limitada tras reconstitución — usar inmediatamente, máximo 4 horas (TA) o 12 horas (refrigerado).',
      'En hemorragia digestiva alta: bolo 80 mg + infusión continua 8 mg/h × 72h.',
    ],

    resumenRapido: 'Inhibidor selectivo e irreversible de la bomba H⁺/K⁺-ATPasa gástrica. Reduce drásticamente la secreción ácida basal y estimulada. Indicado en úlcera péptica activa, hemorragia digestiva alta, ERGE severa, síndrome Zollinger-Ellison, profilaxis de úlcera por estrés en UCI. Inicio: 1 hora, efecto máximo: 2-4h, duración: 24h.',

    objetivoTerapeutico: 'Reducir secreción ácida gástrica · Promover cicatrización de úlcera · Detener hemorragia digestiva · Profilaxis de úlcera por estrés · Mantener pH gástrico > 4',

    preparacion: {
      'Presentación':             '40 mg vial liofilizado + ampolla solvente (10 mL)',
      'Reconstitución':           '40 mg + 10 mL solvente del fabricante → 4 mg/mL',
      'Diluyente final':          'SF 0.9% o SG 5%',
      'Dilución estándar':        '40 mg reconstituido + 90-100 mL SF/SG 5% → 0.4 mg/mL',
      'Infusión continua (hemorragia)': '80 mg en 100 mL SF a 10 mL/h = 8 mg/h',
      'Vía':                      'IV bolo lento (3-5 min) o infusión IV (20-30 min)',
      '⏱️ TIEMPO INFUSIÓN':       '<b>Bolo IV: 3-5 minutos · Infusión IV: 20-30 minutos</b>',
      '⏱️ INFUSIÓN CONTINUA':     '<b>8 mg/h × 72 horas</b> (hemorragia digestiva alta)',
      'Bomba':                    'Bomba de infusión recomendada para infusión continua',
      '🧊 ESTABILIDAD POST-PREPARACIÓN': '<b>Temperatura ambiente: 4 horas máximo · Refrigeración (2-8°C): 12 horas máximo</b>',
      '⚠️ Importante':            'Una vez reconstituido, usar lo antes posible. Si bomba de infusión continua: cambiar bolsa c/12h en refrigeración o c/4h a temperatura ambiente.',
      'Aspecto':                  'Solución incolora a ligeramente amarillenta — desechar si turbidez o cambio de color',
    },

    vigilancia: {
      antes: [
        'Verificar prescripción: dosis, vía, indicación.',
        'Comprobar acceso IV permeable.',
        'Revisar interacciones medicamentosas (warfarina, clopidogrel, digoxina, fenitoína).',
        'En hemorragia digestiva: comprobar Hb basal, signos vitales, sangrado activo.',
        'Doble verificación: vial 40 mg, solvente, dilución correcta.',
      ],
      durante: [
        'Vigilar sitio IV — omeprazol puede causar dolor venoso leve.',
        'Monitorizar signos vitales c/15-30 min si infusión continua.',
        'En hemorragia: vigilar signos de resangrado (hematemesis, melena, taquicardia, hipotensión).',
        'Mantener velocidad correcta — bolo en mínimo 3 min.',
        'Observar reacciones alérgicas (rash, broncoespasmo) — raras pero posibles.',
      ],
      despues: [
        'Evaluar respuesta clínica: reducción dolor epigástrico, hemorragia controlada.',
        'En hemorragia: monitorizar Hb c/6-12h, signos vitales.',
        'Vigilar diarrea (efecto adverso frecuente, riesgo C. difficile en uso prolongado).',
        'Documentar: dosis, hora, vía, respuesta clínica.',
        'Plan de transición a VO cuando paciente tolere.',
      ],
      suspender: [
        'Reacción alérgica / anafilaxia.',
        'Diarrea grave con sospecha de C. difficile (tratamientos prolongados).',
        'Prescripción médica de cambio o suspensión.',
        'Tolerancia oral establecida — transición a VO.',
      ],
    },

    incompatibilidades: [
      'Soluciones que contengan calcio — precipitación.',
      'Bicarbonato de sodio — incompatibilidad documentada.',
      'No mezclar con otros medicamentos en la misma jeringa o línea sin verificar compatibilidad.',
      'Lavar línea IV con SF antes y después de administrar otros fármacos.',
    ],

    alertasSeguridad: [
      '🟡 Estabilidad limitada post-reconstitución — máximo 4h TA, 12h refrigerado.',
      '🟡 Uso prolongado (> 1 año): riesgo de hipomagnesemia, fracturas óseas, déficit B12, C. difficile.',
      '🟡 Interacción con clopidogrel — reduce eficacia antiplaquetaria (preferir pantoprazol si combinación necesaria).',
      '🟡 Puede enmascarar síntomas de cáncer gástrico — descartar antes de uso prolongado.',
    ],
  },

  modulos: {

    hemorragia: `
      <b>Protocolo Omeprazol en Hemorragia Digestiva Alta:</b><br/>
      <b>Bolo inicial:</b> 80 mg IV en 3-5 minutos.<br/>
      <b>Infusión continua:</b> 8 mg/h IV × 72 horas.<br/>
      <b>Preparación bomba:</b> 80 mg en 100 mL SF a 10 mL/h.<br/>
      <b>Estabilidad bomba:</b> Cambiar bolsa c/12h si refrigerada, c/4h si TA.<br/>
      <b>Objetivos:</b><br/>
      • pH gástrico > 6 (estabiliza coágulo).<br/>
      • Prevenir resangrado tras endoscopia.<br/>
      • Reducir necesidad de cirugía/transfusión.<br/>
      <b>Vigilancia:</b> Hb c/6-12h, signos vitales, sangrado activo.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir SOLO con el solvente proporcionado por el fabricante.',
      'Etiquetar bolsa con: Omeprazol [dosis], concentración, hora preparación, hora límite uso (4h TA o 12h refrigerado), iniciales.',
      'En infusión continua de hemorragia: cambiar bolsa según estabilidad (c/4h TA o c/12h refrigerada).',
      'Verificar acceso IV permeable antes de administrar.',
      'Lavar línea con SF antes y después de administrar.',
      'En hemorragia digestiva: vigilancia estrecha de signos de resangrado.',
      'Monitorizar tolerancia oral para transición a VO.',
      'Vigilar diarrea — si > 3 deposiciones/día líquidas, considerar C. difficile.',
      'En uso prolongado: control de magnesio sérico c/6 meses.',
      'Documentar respuesta clínica: dolor, hemorragia, tolerancia.',
    ],

    efectosAdversos: [
      '🟠 Hipomagnesemia — uso prolongado',
      '🟠 Diarrea / Colitis por C. difficile (uso prolongado)',
      '🟡 Cefalea',
      '🟡 Náuseas, dolor abdominal',
      '🟡 Mareos',
      '🟡 Rash cutáneo (raro)',
      '🟡 Reacción alérgica / anafilaxia (rara)',
      '🟡 Elevación leve de transaminasas',
      '🟡 Trombocitopenia (raro)',
      '🟡 Déficit de B12 (uso > 2 años)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a omeprazol o IBP.',
      'Uso concomitante con rilpivirina, atazanavir, nelfinavir (reducción significativa de eficacia antirretroviral).',
      'Precaución en hepatopatía severa.',
    ],

    fotosensibilidad: 'No relevante. La solución reconstituida puede protegerse de luz directa pero no requiere envase opaco.',

    estabilidad: {
      'Vial sin reconstituir':       'Temperatura ambiente (< 25°C) hasta vencimiento',
      'Reconstituido (sin diluir)':  '<b>4 horas a TA (15-25°C) · 12 horas refrigerado (2-8°C)</b>',
      'Diluido en SF/SG 5%':         '<b>4 horas a TA · 12 horas refrigerado</b>',
      'En bomba infusión continua':  'Cambiar bolsa c/4h (TA) o c/12h (refrigerada)',
      'Temperatura':                 'NO congelar',
      'Aspecto':                     'Incolora a ligeramente amarillenta — desechar si turbidez',
    },

    presentaciones: [
      'Omeprazol 40 mg vial liofilizado + solvente 10 mL — vial inyectable',
      'Omeprazol 20 mg, 40 mg cápsulas (uso VO)',
      'Omeprazol 10 mg, 20 mg, 40 mg comprimidos (uso VO)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Úlcera péptica activa',             dosis: '40 mg IV c/24h × 5-7 días',      via: 'IV' },
      { indicacion: 'Hemorragia digestiva (bolo)',       dosis: '80 mg IV en 3-5 min',            via: 'IV' },
      { indicacion: 'Hemorragia digestiva (infusión)',   dosis: '8 mg/h × 72h',                   via: 'IV' },
      { indicacion: 'ERGE severa',                       dosis: '40 mg IV c/24h',                 via: 'IV' },
      { indicacion: 'Profilaxis úlcera por estrés UCI',  dosis: '40 mg IV c/24h',                 via: 'IV' },
      { indicacion: 'Síndrome Zollinger-Ellison',        dosis: '60-120 mg IV c/24h',             via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Datos limitados en humanos. Usar solo si claramente necesario. Compatible con lactancia en dosis terapéuticas.',

    pediatria: 'Niños > 1 año: 0.5-1 mg/kg/día IV (máximo 40 mg). Calcular según peso. En neonatos y lactantes: datos limitados, usar con precaución.',

    adultoMayor: 'Sin ajuste de dosis específico. Mayor riesgo de hipomagnesemia, fracturas, C. difficile en uso prolongado. Reevaluar necesidad de tratamiento.',

    insufRenal: 'Sin ajuste de dosis — metabolismo principalmente hepático. En IRC avanzada: monitorización clínica estándar.',

    insufHepatica: 'En cirrosis: vida media ↑ — considerar reducción de dosis al 50% (20 mg c/24h IV). Monitorizar respuesta clínica.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Omeprazole Sodium for Injection. U.S. National Library of Medicine.',
      'CIMA AEMPS. Ficha Técnica Omeprazol Inyectable. Agencia Española de Medicamentos.',
      'AGA Guidelines. Management of Upper GI Bleeding. American Gastroenterological Association. 2021.',
      'Micromedex Solutions. Omeprazole (Injectable). Accessed 2024.',
      'Sung JJ, et al. Continuous Infusion vs Bolus Omeprazol in Bleeding Ulcers. Ann Intern Med. 2003.',
    ],
  },

});
