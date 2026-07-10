/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/anfotericina-b-liposomal.js
   Fuentes: CIMA AEMPS (AmBisome), FDA DailyMed,
   IDSA Guidelines Aspergillosis/Candidiasis/Cryptococcosis,
   ESCMID/ECMM Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'anfotericina-b-liposomal',
  nombre:         'Anfotericina B Liposomal',
  nombreComercial: 'AmBisome®',
  nombreGenerico: 'Liposomal Amphotericin B',
  categoria:      'antibioticos',
  tags:           ['antifúngico', 'polieno', 'Candida', 'Aspergillus', 'Cryptococcus', 'micosis invasiva', 'leishmaniasis', 'UCI', 'inmunodeprimidos'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antifúngico de amplio espectro y ALTO RIESGO. Reacciones relacionadas con la infusión (fiebre, escalofríos, hipotensión) muy frecuentes, especialmente en la primera dosis. Nefrotoxicidad significativa (menor que la formulación convencional, pero presente). Hipopotasemia e hipomagnesemia frecuentes. Requiere premedicación y monitorización estrecha durante la infusión.',

  nivel1: {

    puntosClave: [
      '<b>Antifúngico polieno de amplio espectro</b> — Candida, Aspergillus, Cryptococcus, mucormicosis y otros hongos filamentosos.',
      'La <b>formulación liposomal reduce significativamente la nefrotoxicidad</b> respecto a la anfotericina B convencional (desoxicolato), aunque no la elimina.',
      '<b>Reacciones relacionadas con la infusión</b> (fiebre, escalofríos, mialgias, hipotensión) — muy frecuentes en la primera dosis; premedicar.',
      'Dosis habitual <b>3-5 mg/kg/día IV</b>, infundir en 1-2 horas (puede acortarse a 60 min si bien tolerada).',
      '<b>Hipopotasemia e hipomagnesemia frecuentes</b> — reponer electrolitos de forma proactiva durante todo el tratamiento.',
    ],

    resumenRapido: 'Antifúngico polieno que se une al ergosterol de la membrana fúngica, alterando su permeabilidad y causando lisis celular. La formulación liposomal encapsula el fármaco en vesículas lipídicas que reducen su unión al colesterol de las membranas de las células humanas (especialmente en el túbulo renal), disminuyendo notablemente la nefrotoxicidad y las reacciones infusionales respecto a la formulación convencional (desoxicolato), aunque ambos efectos siguen presentes. Es de elección en micosis invasivas graves (candidiasis diseminada, aspergilosis, criptococosis, mucormicosis) en pacientes críticos e inmunodeprimidos, y también se emplea en leishmaniasis visceral.',

    objetivoTerapeutico: 'Tratamiento de micosis invasivas graves (candidiasis diseminada, aspergilosis, criptococosis, mucormicosis) · Terapia empírica antifúngica en neutropenia febril persistente · Tratamiento de la leishmaniasis visceral · Alternativa cuando fracasan o están contraindicados los azoles/equinocandinas',

    preparacion: {
      'Presentación':          '<b>AmBisome® 50 mg — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con agua para inyección estéril según ficha técnica (NO usar SF para reconstituir)',
      'Diluyente para infusión': '<b>SOLO SG 5% — NUNCA SF 0.9% (precipita)</b>',
      'Dilución final':        'Diluir en SG 5% a una concentración de 1-2 mg/mL',
      'Filtro':                'Usar filtro en línea de 1 micra si se indica en ficha técnica',
      'Dosis estándar':        '<b>3-5 mg/kg/día IV</b> (hasta 10 mg/kg/día en mucormicosis)',
      'Premedicación':         'Paracetamol + antihistamínico ± hidrocortisona antes de la primera dosis (según protocolo)',
      '⏱️ Tiempo de infusión':  '<b>1-2 horas</b> (puede reducirse a 60 min en dosis bien toleradas tras la primera infusión)',
      'Vía':                   'IV exclusivamente (no IM, no intratecal salvo indicación específica)',
      '🧊 Estabilidad':         '<b>24 h refrigerado (2-8°C) tras reconstituir; diluida en SG 5%: 24 h a temperatura ambiente</b>',
    },

    vigilancia: {
      antes: [
        'Función renal basal: creatinina, urea, ClCr — repetir periódicamente durante el tratamiento.',
        'Ionograma basal: potasio y magnesio — frecuentemente bajos incluso antes de iniciar.',
        'Premedicar con paracetamol y antihistamínico antes de la primera dosis (reduce la reacción infusional).',
        'Constantes basales: TA, FC, Tª.',
        'Confirmar diagnóstico micológico o alta sospecha clínica que justifique el tratamiento empírico.',
      ],
      durante: [
        'Vigilar reacción a la infusión: fiebre, escalofríos, mialgias, náuseas, hipotensión — más intensa en la primera dosis.',
        'Constantes cada 15-30 min durante la primera infusión; luego según tolerancia.',
        'Si reacción moderada: puede reducirse la velocidad de infusión (no siempre requiere suspender).',
        'Vigilar signos de reacción anafilactoide grave: disnea, hipotensión marcada, broncoespasmo.',
      ],
      despues: [
        'Función renal (creatinina) 2-3 veces por semana o más frecuente si hay deterioro.',
        'Ionograma (K+, Mg2+) regular — reponer de forma proactiva, no reactiva.',
        'Vigilar signos de anemia (supresión de eritropoyetina) en tratamientos prolongados.',
        'Reevaluar la respuesta clínica y microbiológica periódicamente.',
        'Documentar dosis, tolerancia a la infusión y función renal en cada control.',
      ],
      suspender: [
        'Deterioro renal significativo pese a hidratación y ajuste (creatinina >2-3× el valor basal).',
        'Reacción anafiláctica grave.',
        'Hipopotasemia/hipomagnesemia grave refractaria a reposición.',
        'Toxicidad inaceptable sin alternativa de manejo — valorar cambio de antifúngico.',
        'Al completar la duración de tratamiento indicada según la infección.',
      ],
    },

    incompatibilidades: [
      '<b>NUNCA diluir ni reconstituir con SF 0.9% u otras soluciones con electrolitos</b> — precipita inmediatamente.',
      '<b>SOLO SG 5% para la dilución final.</b>',
      'No mezclar con ningún otro fármaco en la misma vía o solución.',
      'No usar filtros de línea distintos a los validados en ficha técnica (algunos filtros retienen el fármaco).',
      'Lavar la vía con SG 5% antes y después si es posible; si no, usar una vía dedicada.',
    ],

    alertasSeguridad: [
      '🔴 SOLO SG 5% — NUNCA SF ni soluciones con electrolitos para diluir (precipitación inmediata).',
      '🔴 REACCIÓN INFUSIONAL frecuente en la primera dosis — premedicar y vigilar estrechamente.',
      '🟠 NEFROTOXICIDAD — menor que la formulación convencional, pero presente; función renal seriada.',
      '🟠 HIPOPOTASEMIA E HIPOMAGNESEMIA frecuentes — reposición proactiva durante todo el tratamiento.',
      '🟡 No confundir con la anfotericina B convencional (desoxicolato) — dosis y toxicidad muy diferentes; verificar la formulación prescrita.',
      '🟡 Anemia por supresión de eritropoyetina en tratamientos prolongados.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir SIEMPRE con agua para inyección (nunca SF) y diluir la infusión final SOLO en SG 5%.',
      'Premedicar con paracetamol y antihistamínico antes de la primera dosis según protocolo.',
      'Infundir en 1-2 horas; vigilar constantes cada 15-30 min durante la primera infusión.',
      'Verificar que la formulación es liposomal (AmBisome®) y no la convencional — dosis muy distintas.',
      'Función renal (creatinina) 2-3 veces por semana; comunicar deterioro de inmediato.',
      'Reponer potasio y magnesio de forma proactiva según protocolo, no esperar a la hipopotasemia sintomática.',
      'Vigilar signos de reacción anafilactoide grave: disnea, hipotensión marcada.',
      'Usar una vía dedicada quando sea posible; no mezclar con otros fármacos.',
      'Documentar dosis, tolerancia a la infusión, función renal e ionograma en cada control.',
    ],

    efectosAdversos: [
      '🔴 Reacción relacionada con la infusión (fiebre, escalofríos, hipotensión) — frecuente en 1ª dosis',
      '🟠 Nefrotoxicidad (menor que la formulación convencional, pero presente)',
      '🟠 Hipopotasemia e hipomagnesemia',
      '🟠 Anemia (supresión de eritropoyetina, uso prolongado)',
      '🟡 Náuseas, vómitos',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Cefalea, mialgias',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a anfotericina B o a componentes liposomales.',
      'Precaución extrema en insuficiencia renal preexistente grave (monitorización más estrecha, no contraindicación absoluta).',
      'No usar SF para reconstitución/dilución (incompatibilidad química, no contraindicación clínica pero error grave de preparación).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar el vial refrigerado (2-8°C) protegido de la luz. No congelar.',

    estabilidad: {
      'Vial sin reconstituir':   '<b>Refrigerado 2-8°C hasta vencimiento. NO congelar.</b>',
      'Reconstituido':           '<b>24 h refrigerado (2-8°C)</b>',
      'Diluido en SG 5%':       '<b>24 h a temperatura ambiente, proteger de luz prolongada</b>',
      'Aspecto':                  'Suspensión translúcida amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Reconstituir con agua para inyección; usar dentro de 24 h refrigerado.',
      dosisRestante:     'Desechar sobrante de vial reconstituido no utilizado.',
      infusionPreparada: '24 h a temperatura ambiente tras la dilución final en SG 5%.',
      notas:             'SOLO SG 5% para diluir — nunca SF. No confundir con la anfotericina B convencional (desoxicolato), de dosis y toxicidad muy diferentes.',
    },

    presentaciones: [
      'AmBisome® 50 mg — vial polvo liofilizado (formulación liposomal)',
      'Anfotericina B convencional (desoxicolato) — formulación distinta, mayor toxicidad, dosis diferente',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Candidiasis invasiva / aspergilosis', dosis: '<b>3-5 mg/kg/día IV</b>',                          via: 'IV' },
      { indicacion: 'Mucormicosis',                          dosis: '5-10 mg/kg/día IV',                                via: 'IV' },
      { indicacion: 'Meningitis criptocócica',               dosis: '3-4 mg/kg/día IV (combinada con flucitosina)',   via: 'IV' },
      { indicacion: 'Neutropenia febril empírica',           dosis: '3 mg/kg/día IV',                                  via: 'IV' },
      { indicacion: 'Leishmaniasis visceral',                dosis: '3 mg/kg/día en días 1-5, 14 y 21 (pauta OMS)',   via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Considerada la opción antifúngica sistémica de elección en el embarazo cuando se requiere tratamiento de una micosis invasiva grave, ya que los azoles suelen evitarse (especialmente en el primer trimestre) por su potencial teratógeno.',

    pediatria: 'Dosis 3-5 mg/kg/día IV (igual que en adultos, ajustado por peso). Bien tolerada en general. Vigilar función renal e ionograma con la misma frecuencia que en adultos. Uso frecuente en oncohematología pediátrica.',

    adultoMayor: 'Mayor riesgo de deterioro de la función renal basal. Vigilar función renal y electrolitos con mayor frecuencia. Sin ajuste de dosis específico por edad, pero valorar comorbilidad renal/cardíaca antes de iniciar.',

    insufRenal: 'No requiere ajuste de dosis formal en insuficiencia renal (a diferencia de la formulación convencional), aunque la nefrotoxicidad sigue siendo posible. Vigilar la función renal estrechamente y considerar hidratación adecuada antes de cada infusión.',

    insufHepatica: 'Sin ajuste formal establecido. Usar con precaución y vigilar función hepática en hepatopatía grave, dado el metabolismo y eliminación combinados.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica AmBisome® (anfotericina B liposomal).',
      'Patterson TF et al. Practice Guidelines for the Diagnosis and Management of Aspergillosis. IDSA. Clin Infect Dis. 2016.',
      'Pappas PG et al. Clinical Practice Guideline for the Management of Candidiasis. IDSA. Clin Infect Dis. 2016.',
      'Perfect JR et al. Clinical Practice Guidelines for the Management of Cryptococcal Disease. IDSA. Clin Infect Dis. 2010.',
      'Cornely OA et al. Global guideline for the diagnosis and management of mucormycosis. Lancet Infect Dis. 2019.',
      'WHO. Control of the leishmaniases. WHO Technical Report Series. 2010.',
    ],
  },

});
