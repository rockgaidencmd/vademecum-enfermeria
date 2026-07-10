/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/anfotericina-b-convencional.js
   Fuentes: CIMA AEMPS (Fungizona), FDA DailyMed,
   IDSA Guidelines Candidiasis/Aspergillosis/Cryptococcosis,
   Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'anfotericina-b-convencional',
  nombre:         'Anfotericina B Convencional',
  nombreComercial: 'Fungizona®',
  nombreGenerico: 'Amphotericin B Deoxycholate',
  categoria:      'antibioticos',
  tags:           ['antifúngico', 'polieno', 'Candida', 'Aspergillus', 'Cryptococcus', 'micosis invasiva', 'leishmaniasis', 'cuadro básico', 'nefrotóxico'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antifúngico de amplio espectro con NEFROTOXICIDAD SIGNIFICATIVAMENTE MAYOR que la formulación liposomal — hasta el 80% de los pacientes desarrolla algún grado de deterioro renal. Reacciones relacionadas con la infusión (fiebre, escalofríos intensos, "sacudida" — conocida como "shake and bake") muy frecuentes, especialmente en las primeras dosis. Sigue siendo ampliamente usada en muchos hospitales públicos de América Latina por su menor costo frente a la formulación liposomal.',

  nivel1: {

    puntosClave: [
      '<b>Antifúngico de amplio espectro</b> de bajo costo — sigue siendo la opción más disponible en muchos hospitales públicos latinoamericanos frente a las formulaciones lipídicas.',
      '<b>NEFROTOXICIDAD MUY FRECUENTE Y SIGNIFICATIVA</b> (hasta 80%) — mucho mayor que la formulación liposomal; requiere hidratación agresiva y vigilancia renal diaria.',
      '<b>Reacción a la infusión intensa ("shake and bake")</b>: fiebre alta, escalofríos violentos, mialgias — premedicar SIEMPRE antes de la primera dosis.',
      'Dosis: <b>0.5-1 mg/kg/día IV</b>, con dosis de prueba inicial en muchos protocolos (1 mg IV) antes de la dosis completa.',
      '<b>Infundir en 4-6 horas</b> diluida en SG 5% (nunca SF — precipita) — infusión más lenta que la formulación liposomal.',
    ],

    resumenRapido: 'Antifúngico polieno de amplio espectro, formulación original (no liposomal) que utiliza desoxicolato como vehículo solubilizante. Es notablemente más nefrotóxica y produce reacciones infusionales mucho más intensas que la formulación liposomal (AmBisome®), pero su costo significativamente menor la mantiene como la opción disponible en muchos hospitales públicos de América Latina, especialmente para infecciones fúngicas invasivas graves cuando el acceso a formulaciones lipídicas es limitado. Requiere hidratación agresiva antes y durante el tratamiento, premedicación sistemática antes de cada dosis (especialmente las primeras) y vigilancia diaria de la función renal e ionograma.',

    objetivoTerapeutico: 'Tratamiento de micosis invasivas graves (candidiasis diseminada, aspergilosis, criptococosis, mucormicosis) cuando no se dispone de formulación liposomal · Terapia empírica antifúngica en neutropenia febril persistente en contextos de recursos limitados · Tratamiento de la leishmaniasis visceral',

    preparacion: {
      'Presentación':            '<b>Fungizona® 50 mg — vial polvo liofilizado</b>',
      'Reconstitución':          'Reconstituir con 10 mL de agua para inyección estéril (SIN electrolitos) según ficha técnica',
      'Diluyente para infusión': '<b>SOLO SG 5% — NUNCA SF 0.9% ni soluciones con electrolitos (precipita)</b>',
      'Dilución final':          'Diluir en SG 5% a una concentración ≤0.1 mg/mL',
      'Dosis de prueba (muchos protocolos)': '1 mg IV en 20-30 min, vigilando reacción, antes de iniciar la dosis completa',
      'Dosis estándar':          '<b>0.5-1 mg/kg/día IV</b> (hasta 1.5 mg/kg/día en infecciones graves)',
      'Premedicación':           'Paracetamol + antihistamínico ± hidrocortisona 30 min antes — reduce la reacción infusional',
      '⏱️ Tiempo de infusión':    '<b>4-6 horas</b> (más lenta que la formulación liposomal)',
      'Hidratación':             'SF 0.9% 500 mL antes de cada dosis (carga de sodio protectora renal)',
      '🧊 Estabilidad':           '<b>24 h refrigerado (2-8°C), protegida de la luz, tras reconstituir</b>',
    },

    vigilancia: {
      antes: [
        'Función renal basal: creatinina, urea, ClCr — repetir DIARIAMENTE durante todo el tratamiento.',
        'Ionograma basal: potasio y magnesio — frecuentemente bajos, incluso antes de iniciar.',
        'Premedicar SIEMPRE con paracetamol y antihistamínico antes de la primera dosis (y valorar en las siguientes según tolerancia).',
        'Asegurar hidratación previa con SF 0.9% — reduce significativamente la nefrotoxicidad.',
        'Constantes basales: TA, FC, Tª.',
      ],
      durante: [
        'Vigilar la reacción a la infusión ("shake and bake"): fiebre alta, escalofríos intensos, mialgias, náuseas — muy frecuente en las primeras dosis.',
        'Constantes cada 15-30 min durante toda la infusión, especialmente las primeras dosis.',
        'Si reacción intensa: puede reducirse la velocidad de infusión; premedicación reforzada en dosis siguientes.',
        'Vigilar signos de reacción anafilactoide grave: disnea, hipotensión marcada.',
      ],
      despues: [
        '<b>Función renal (creatinina) DIARIA</b> durante todo el tratamiento — la nefrotoxicidad es la principal limitación.',
        'Ionograma (K+, Mg2+) diario — reponer de forma proactiva, la hipopotasemia es casi constante con el uso prolongado.',
        'Vigilar signos de anemia (supresión de eritropoyetina) en tratamientos prolongados.',
        'Balance hídrico y diuresis.',
        'Reevaluar la respuesta clínica y microbiológica periódicamente.',
      ],
      suspender: [
        'Deterioro renal significativo (duplicación de creatinina o ClCr <25 mL/min pese a hidratación) — valorar cambio a formulación liposomal si está disponible.',
        'Reacción anafiláctica grave.',
        'Hipopotasemia/hipomagnesemia grave refractaria a reposición.',
        'Toxicidad inaceptable sin alternativa de manejo.',
      ],
    },

    incompatibilidades: [
      '<b>NUNCA diluir ni mezclar con SF 0.9% u otras soluciones con electrolitos</b> — precipita inmediatamente.',
      '<b>SOLO SG 5% para la dilución final.</b>',
      'No mezclar con ningún otro fármaco en la misma vía o solución.',
      'No usar filtros de línea no validados (algunos retienen el fármaco).',
      'Lavar la vía con SG 5% antes y después, o usar una vía dedicada.',
    ],

    alertasSeguridad: [
      '🔴 NEFROTOXICIDAD MUY SIGNIFICATIVA — mucho mayor que la formulación liposomal. Función renal diaria obligatoria e hidratación previa con SF 0.9%.',
      '🔴 SOLO SG 5% — NUNCA SF ni soluciones con electrolitos para diluir (precipitación inmediata).',
      '🔴 REACCIÓN INFUSIONAL INTENSA ("shake and bake") — premedicar siempre, especialmente en las primeras dosis.',
      '🟠 HIPOPOTASEMIA E HIPOMAGNESEMIA muy frecuentes — reposición proactiva durante todo el tratamiento.',
      '🟡 Considerar el cambio a formulación liposomal si está disponible y hay deterioro renal significativo.',
      '🟡 Anemia por supresión de eritropoyetina en tratamientos prolongados.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir con agua para inyección estéril (sin electrolitos) y diluir la infusión final SOLO en SG 5%.',
      'Hidratar con SF 0.9% antes de cada dosis según protocolo — reduce significativamente la nefrotoxicidad.',
      'Premedicar con paracetamol y antihistamínico antes de cada dosis, especialmente las primeras.',
      'Infundir en 4-6 horas; vigilar constantes cada 15-30 min, especialmente en las primeras dosis.',
      'Advertir al paciente sobre la posible reacción "shake and bake" (fiebre, escalofríos intensos) — es frecuente pero manejable con premedicación.',
      'Función renal (creatinina) DIARIA durante todo el tratamiento; comunicar deterioro de inmediato.',
      'Reponer potasio y magnesio de forma proactiva según protocolo — la hipopotasemia es casi constante.',
      'Usar una vía dedicada cuando sea posible; no mezclar con otros fármacos.',
      'Documentar dosis, tolerancia a la infusión, función renal e ionograma en cada control.',
    ],

    efectosAdversos: [
      '🔴 Nefrotoxicidad (mucho más frecuente y grave que con la formulación liposomal)',
      '🔴 Reacción infusional intensa ("shake and bake": fiebre alta, escalofríos violentos)',
      '🟠 Hipopotasemia e hipomagnesemia (muy frecuentes)',
      '🟠 Anemia (supresión de eritropoyetina, uso prolongado)',
      '🟠 Flebitis en el punto de infusión',
      '🟡 Náuseas, vómitos',
      '🟡 Cefalea, mialgias',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a anfotericina B.',
      'Precaución extrema en insuficiencia renal preexistente (considerar formulación liposomal si está disponible).',
      'No usar SF para reconstitución/dilución (incompatibilidad química, error grave de preparación).',
    ],

    fotosensibilidad: 'Fotosensible — proteger de la luz durante la reconstitución, dilución e infusión. Conservar refrigerado (2-8°C) protegido de la luz.',

    estabilidad: {
      'Vial sin reconstituir':   '<b>Refrigerado 2-8°C hasta vencimiento. NO congelar. Proteger de luz.</b>',
      'Reconstituido':           '<b>24 h refrigerado (2-8°C), protegido de la luz</b>',
      'Diluido en SG 5%':       '<b>24 h refrigerado o 6 h a temperatura ambiente, proteger de la luz</b>',
      'Aspecto':                  'Suspensión coloidal amarillenta translúcida — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Reconstituir con agua para inyección; usar dentro de 24 h refrigerado y protegido de la luz.',
      dosisRestante:     'Desechar sobrante de vial reconstituido no utilizado.',
      infusionPreparada: 'Proteger de la luz durante la infusión (usar equipo opaco o cubrir la bolsa/línea si el protocolo institucional lo indica).',
      notas:             'SOLO SG 5% para diluir — nunca SF. Mucho más nefrotóxica que la formulación liposomal; considerar el cambio si hay deterioro renal y hay disponibilidad.',
    },

    presentaciones: [
      'Fungizona® 50 mg — vial polvo liofilizado (formulación convencional/desoxicolato)',
      'Anfotericina B liposomal (AmBisome®) — formulación distinta, mucho menos nefrotóxica, mayor costo',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis de prueba (muchos protocolos)', dosis: '1 mg IV en 20-30 min, antes de la dosis completa', via: 'IV' },
      { indicacion: 'Candidiasis invasiva / aspergilosis',  dosis: '<b>0.5-1 mg/kg/día IV</b>',                          via: 'IV' },
      { indicacion: 'Infección grave / mucormicosis',        dosis: '1-1.5 mg/kg/día IV',                                 via: 'IV' },
      { indicacion: 'Leishmaniasis visceral',                dosis: '0.5-1 mg/kg/día IV según protocolo (días alternos posible)', via: 'IV' },
      { indicacion: 'Meningitis criptocócica',                dosis: '0.7-1 mg/kg/día IV (combinada con flucitosina si disponible)', via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). A pesar de su mayor toxicidad respecto a la liposomal, sigue siendo una opción considerada relativamente segura en el embarazo cuando se requiere tratamiento antifúngico sistémico y no hay acceso a la formulación liposomal, dado que los azoles suelen evitarse por su potencial teratógeno.',

    pediatria: 'Dosis 0.5-1 mg/kg/día IV (similar a adultos, ajustado por peso). Igualmente nefrotóxica en pediatría — vigilar función renal e ionograma con la misma frecuencia. Considerar la formulación liposomal si está disponible por su mejor perfil de seguridad.',

    adultoMayor: 'Mayor riesgo de deterioro de la función renal basal. Vigilar función renal y electrolitos con mayor frecuencia. Hidratación previa especialmente importante en este grupo.',

    insufRenal: 'Usar con extrema precaución — la nefrotoxicidad de esta formulación es mucho mayor que la de la liposomal. Si la función renal se deteriora significativamente, valorar cambio a formulación liposomal (si disponible) o reducción de dosis según protocolo. Hidratación agresiva antes de cada dosis.',

    insufHepatica: 'Sin ajuste formal establecido. Usar con precaución y vigilar función hepática en hepatopatía grave.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Fungizona® (anfotericina B desoxicolato).',
      'Patterson TF et al. Practice Guidelines for the Diagnosis and Management of Aspergillosis. IDSA. Clin Infect Dis. 2016.',
      'Pappas PG et al. Clinical Practice Guideline for the Management of Candidiasis. IDSA. Clin Infect Dis. 2016.',
      'WHO. Control of the leishmaniases. WHO Technical Report Series. 2010.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
