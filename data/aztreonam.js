/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/aztreonam.js
   Fuentes: CIMA AEMPS (Azactam), FDA DailyMed,
   SEIMC Guía Antibióticos 2023, IDSA Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'aztreonam',
  nombre:         'Aztreonam',
  nombreGenerico: 'Aztreonam',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'monobactam', 'gram negativo', 'alergia a penicilina', 'Pseudomonas', 'sin reacción cruzada'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Monobactam</b> — cobertura EXCLUSIVA de gram negativos aerobios (incluida Pseudomonas), SIN actividad frente a gram positivos ni anaerobios.',
      '<b>Ventaja clave: sin reacción cruzada con alergia a penicilinas/cefalosporinas</b> (salvo posible reactividad cruzada con ceftazidima por cadena lateral similar).',
      'Alternativa de elección para <b>gram negativos en pacientes con alergia grave a betalactámicos</b>.',
      '<b>Infundir en 20-60 min</b> según dosis — nunca en bolo rápido a dosis altas.',
      'Debe <b>combinarse con otro antibiótico</b> si se sospechan gram positivos o anaerobios (no da cobertura empírica completa por sí solo).',
    ],

    resumenRapido: 'Antibiótico betalactámico monobactámico con actividad exclusiva frente a bacilos gram negativos aerobios, incluida Pseudomonas aeruginosa, careciendo de actividad frente a gram positivos y anaerobios. Su estructura monocíclica hace que la reacción cruzada con alergia a penicilinas y cefalosporinas sea mínima (con la posible excepción de ceftazidima, que comparte una cadena lateral similar), lo que lo convierte en una alternativa muy valiosa para tratar infecciones por gram negativos en pacientes con alergia grave documentada a betalactámicos. Al no cubrir gram positivos ni anaerobios, habitualmente se combina con otro antibiótico cuando la cobertura debe ser más amplia.',

    objetivoTerapeutico: 'Tratamiento de infecciones por gram negativos (incluida Pseudomonas) en pacientes con alergia grave a penicilinas/cefalosporinas · Infecciones urinarias, respiratorias e intraabdominales por gram negativos · Componente de terapia combinada en sepsis grave con alergia a betalactámicos',

    preparacion: {
      'Presentación':          '<b>Azactam® 1 g y 2 g — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con agua para inyección según ficha técnica',
      'Diluyente':             'SF 0.9% o SG 5%',
      'Dilución final':        'Diluir en 50-100 mL SF/SG 5% (bolo IV directo posible en dosis bajas según ficha)',
      'Dosis estándar':        '<b>1-2 g IV c/8-12 h</b>',
      'Dosis alta (grave)':    '2 g IV c/6-8 h (máx 8 g/día) en infecciones muy graves',
      '⏱️ Tiempo de infusión':  '<b>20-60 min según dosis — bolo lento (3-5 min) posible en dosis ≤1 g</b>',
      'Vía':                   'IV intermitente · IM (menos frecuente)',
      '🧊 Estabilidad':         '<b>48 h a temperatura ambiente / 7 días refrigerado tras reconstituir/diluir</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar la indicación — SOLO cubre gram negativos, valorar necesidad de combinar con otro antibiótico.',
        'Alergia a betalactámicos: aztreonam tiene bajo riesgo de reacción cruzada, EXCEPTO posible reactividad con ceftazidima.',
        'Función renal basal — ajuste de dosis en IR.',
        'Confirmar el germen o la sospecha clínica (útil especialmente en Pseudomonas).',
      ],
      durante: [
        'Infundir en 20-60 min según la dosis; bolo lento aceptable en dosis bajas.',
        'Vigilar reacción alérgica (poco frecuente, pero posible: rash, prurito).',
        'Observar la zona de punción por flebitis.',
      ],
      despues: [
        'Reevaluar la respuesta clínica a las 48-72 h con cultivos.',
        'Función renal periódica si tratamiento prolongado.',
        'Vigilar diarrea — descartar C. difficile en tratamientos largos.',
        'Confirmar si se necesita añadir cobertura de gram positivos/anaerobios según evolución.',
      ],
      suspender: [
        'Reacción alérgica grave (poco frecuente).',
        'Ausencia de respuesta clínica — reevaluar el espectro (recordar que no cubre gram positivos/anaerobios).',
        'Disponibilidad de antibiograma para desescalar.',
        'Diarrea grave con sospecha de C. difficile.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros antibióticos en la misma solución sin verificar compatibilidad.',
      'Incompatible con nafcilina en la misma solución.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
      'Lavar la vía antes y después si se comparte el acceso.',
    ],

    alertasSeguridad: [
      '🟠 SOLO CUBRE GRAM NEGATIVOS — no usar como monoterapia si se sospechan gram positivos o anaerobios.',
      '🟠 Posible reacción cruzada con ceftazidima (cadena lateral similar) — precaución si alergia específica a ceftazidima.',
      '🟡 Bajo riesgo de reacción cruzada con otras penicilinas/cefalosporinas — alternativa valiosa en alergia grave.',
      '🟡 Ajuste de dosis en insuficiencia renal.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar con el médico si se requiere combinar con otro antibiótico (aztreonam no cubre gram positivos/anaerobios).',
      'Diluir según ficha técnica en SF 0.9% o SG 5%; infundir en 20-60 min según dosis.',
      'En dosis bajas puede administrarse en bolo lento (3-5 min) según protocolo institucional.',
      'Vigilar reacción alérgica durante y después de la administración (poco frecuente).',
      'Preguntar por alergia específica a ceftazidima antes de administrar (posible reactividad cruzada).',
      'Vigilar la zona de punción por flebitis.',
      'Documentar dosis, hora y tolerancia en cada turno.',
    ],

    efectosAdversos: [
      '🟠 Reacción alérgica (poco frecuente; menor riesgo cruzado que otros betalactámicos)',
      '🟡 Flebitis en el punto de infusión',
      '🟡 Náuseas, vómitos, diarrea',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Erupción cutánea',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a aztreonam.',
      'Precaución en alergia específica documentada a ceftazidima (posible reactividad cruzada).',
      'No usar como monoterapia si se requiere cobertura de gram positivos o anaerobios.',
    ],

    fotosensibilidad: 'No relevante. Conservar el vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Diluido en SF/SG 5%':   '<b>48 h a temperatura ambiente / 7 días refrigerado (2-8°C)</b>',
      'Aspecto':                 'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro del tiempo indicado tras reconstituir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: '48 h a temperatura ambiente o 7 días refrigerado tras la dilución final.',
      notas:             'Alternativa segura frente a betalactámicos en alergia grave, salvo posible reactividad con ceftazidima. Combinar con otro antibiótico si se necesita cobertura de gram positivos/anaerobios.',
    },

    presentaciones: [
      'Azactam® 1 g — vial polvo liofilizado IV/IM',
      'Azactam® 2 g — vial polvo liofilizado IV',
      'Aztreonam genérico — varios fabricantes',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Infección moderada (ITU/respiratoria)', dosis: '<b>1 g IV c/8-12 h</b>',                       via: 'IV' },
      { indicacion: 'Infección grave',                          dosis: '2 g IV c/6-8 h (máx 8 g/día)',                 via: 'IV' },
      { indicacion: 'Infección por Pseudomonas',               dosis: '2 g IV c/6-8 h (combinar según antibiograma)', via: 'IV' },
      { indicacion: 'IR (ClCr 10-30)',                          dosis: 'Dosis de carga completa, luego 50% de la dosis c/8-12 h', via: 'IV' },
      { indicacion: 'IR grave (ClCr <10)',                       dosis: 'Dosis de carga completa, luego 25% de la dosis c/8-12 h', via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Datos disponibles no muestran teratogenicidad significativa. Puede considerarse cuando está indicado, especialmente valioso en gestantes con alergia grave a otros betalactámicos que requieren cobertura de gram negativos.',

    pediatria: '>1 semana: 30 mg/kg IV c/6-8 h (máx 120 mg/kg/día, hasta 8 g/día en infecciones graves). Alternativa útil en niños con alergia grave a betalactámicos que requieren cobertura de gram negativos.',

    adultoMayor: 'Ajustar la dosis según función renal (ClCr real). Sin toxicidad específica relevante añadida por la edad más allá del ajuste renal habitual.',

    insufRenal: '<b>Ajuste según ClCr</b>: dosis de carga completa siempre, luego reducir la dosis de mantenimiento — ClCr 10-30: 50% de la dosis. ClCr <10: 25% de la dosis. Hemodiálisis: dosis adicional (12.5% de la dosis de carga) tras la sesión.',

    insufHepatica: 'Sin ajuste específico necesario — eliminación fundamentalmente renal. Vigilar función renal como determinante principal de la dosis.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Azactam® (aztreonam).',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Solensky R, Khan DA. Drug allergy: an updated practice parameter. Ann Allergy Asthma Immunol. 2010.',
      'Gilbert DN et al. The Sanford Guide to Antimicrobial Therapy. 2023.',
      'Romano A et al. Cross-reactivity among beta-lactams. Curr Allergy Asthma Rep. 2016.',
    ],
  },

});
