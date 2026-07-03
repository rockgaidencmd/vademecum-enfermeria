window.MEDS_DB.push({
  id: "fenobarbital",
  nombre: "Fenobarbital",
  nombreComercial: "Luminal® inyectable, Gardenal®",
  presentacion: "Ampolla 200 mg/mL (1 mL) | Ampolla 200 mg/4 mL (50 mg/mL)",
  categoria: "Antiepiléptico / Barbitúrico",
  subcategoria: "Barbitúrico de acción prolongada",
  mecanismo: "Potencia la acción inhibitoria del GABA sobre los receptores GABA-A, aumentando la duración de la apertura del canal de cloro. A dosis altas, bloquea también los receptores AMPA del glutamato. Produce sedación, hipnosis y anestesia dependiente de dosis. Inductor potente del CYP450.",
  indicaciones: [
    "Estatus epiléptico refractario (3ª línea tras benzodiacepinas y fenitoína/levetiracetam)",
    "Epilepsia crónica (especialmente en recién nacidos y lactantes)",
    "Crisis neonatales",
    "Síndrome de abstinencia a alcohol/benzodiacepinas (tratamiento de segunda línea)"
  ],
  altoRiesgo: true,
  alertas: [
    "🔴 DEPRESIÓN RESPIRATORIA grave — tener equipamiento de ventilación y flumazenil disponibles",
    "🔴 Velocidad máxima de administración IV: 100 mg/min en adultos, 30 mg/min en niños — más rápido = parada cardiorrespiratoria",
    "🔴 INDUCTOR POTENTE CYP450 — reduce efecto de warfarina, anticonceptivos orales, antirretrovirales, corticoides y muchos otros",
    "⚠️ pH muy alcalino (9-10) — riesgo de necrosis tisular por extravasación: SOLO vía segura",
    "⚠️ Sustancia controlada — registro doble llave obligatorio",
    "⚠️ Monitorización continua cardiorrespiratoria obligatoria durante administración IV",
    "⚠️ Nunca suspender bruscamente en epilepsia crónica — retirada gradual (meses)"
  ],
  efectosAdversos: [
    { efecto: "Depresión respiratoria / apnea (especialmente con opioides o BZD)", semaforo: "🔴" },
    { efecto: "Hipotensión con administración rápida", semaforo: "🔴" },
    { efecto: "Necrosis tisular por extravasación (pH alcalino)", semaforo: "🔴" },
    { efecto: "Sedación excesiva, ataxia, nistagmo", semaforo: "🟠" },
    { efecto: "Síndrome de Stevens-Johnson (raro pero grave)", semaforo: "🟠" },
    { efecto: "Tolerancia y dependencia con uso crónico", semaforo: "🟠" }
  ],
  niveles: {
    nivel1: {
      descripcion: "Barbitúrico antiepiléptico. Estatus epiléptico: 20 mg/kg IV (máx 1000 mg) a ≤100 mg/min. Diluir en SF 0.9%. MONITORIZACIÓN CONTINUA. Sustancia controlada — doble firma.",
      preparacion: {
        "Diluyente": "SF 0.9% (concentración final ≤15 mg/mL para IV lenta)",
        "Dosis de carga estatus": "20 mg/kg IV (máx 1000 mg) diluidos en SF",
        "Velocidad máxima adultos": "≤100 mg/min (nunca más rápido)",
        "Velocidad máxima niños": "≤30 mg/min",
        "Mantenimiento oral/IV": "1-3 mg/kg/día en 1-2 dosis",
        "Vía": "IV central o periférica de buen flujo — NUNCA intramuscular profunda si IV disponible"
      },
      viaAdministracion: "Intravenosa (preferente) | Intramuscular (emergencia sin acceso IV)",
      tasaAdministracion: "Máximo 100 mg/min en adultos. Nunca superar esta velocidad."
    },
    nivel2: {
      mecanismoDetallado: "El fenobarbital se une al receptor GABA-A en un sitio distinto a las benzodiacepinas, aumentando la frecuencia Y la duración de apertura del canal de cloro (a diferencia de las BZD que solo aumentan la frecuencia). Esto lo hace eficaz incluso cuando los receptores GABA-A están saturados por benzodiacepinas, de ahí su uso secuencial en el estatus epiléptico. Como inductor del CYP1A2, CYP2C9 y CYP3A4, puede reducir drásticamente los niveles de numerosos fármacos.",
      monitoreo: [
        "Monitorización cardiorrespiratoria continua durante infusión IV",
        "FR, SpO2 y nivel de consciencia cada 5-10 min",
        "TA y FC continuas",
        "Niveles plasmáticos de fenobarbital (rango terapéutico: 15-40 mg/L)",
        "EEG en estatus epiléptico refractario",
        "Función hepática (hepatotoxicidad con uso crónico)",
        "Punto de punción: verificar flujo correcto y ausencia de extravasación"
      ],
      cuidadosEnfermeria: [
        "Verificar SIEMPRE permeabilidad de la vía antes de administrar (pH alcalino = necrosis)",
        "Preparar equipo de ventilación y resucitación antes de iniciar la infusión",
        "Administrar estrictamente a la velocidad máxima indicada — usar bomba de perfusión",
        "Si extravasación: DETENER, no retirar el catéter, inyectar suero fisiológico para diluir",
        "No mezclar con otros fármacos en el mismo frasco (pH incompatible con la mayoría)",
        "Registro de administración en libro de estupefacientes (doble firma)",
        "Antídoto en depresión respiratoria: ventilación mecánica (no hay antídoto farmacológico específico)",
        "Advertir sobre interacciones al alta: anticonceptivos orales, warfarina, etc."
      ],
      contraindicaciones: [
        "Porfiria aguda intermitente (induce síntesis del hemo)",
        "Depresión respiratoria grave preexistente",
        "Hipersensibilidad a barbitúricos",
        "Insuficiencia hepática grave"
      ]
    },
    nivel3: {
      dosis: {
        adultos: "Estatus epiléptico: 20 mg/kg IV (máx 1000 mg) a ≤100 mg/min. Puede repetirse 5-10 mg/kg si persiste. Mantenimiento epilepsia: 60-200 mg/día (1-3 mg/kg/día) en 1-2 dosis.",
        pediatria: "Estatus: 20 mg/kg IV a ≤30 mg/min. Neonatos: 20 mg/kg IV (puede dar dosis adicionales de 5 mg/kg hasta máx 40 mg/kg). Mantenimiento neonatos: 3-5 mg/kg/día. Niños: 3-6 mg/kg/día.",
        ancianos: "Reducir dosis de mantenimiento 30-50%. Mayor riesgo de sedación y caídas. Inicio con 30 mg/noche e incremento gradual.",
        insuficienciaOrgan: "IR: reducir dosis (eliminación renal 25-50% sin cambios). IH: reducir dosis significativamente, monitorizar niveles plasmáticos."
      },
      compatibilidades: {
        compatible: ["SF 0.9%", "SG 5% (solo si necesario)"],
        incompatible: ["Fenitoína (precipita)", "Morfina", "Codeína", "Midazolam", "La mayoría de fármacos (pH alcalino 9-10)"],
        noMezclar: "Administrar en vía exclusiva. Incompatible con prácticamente todos los fármacos por su pH extremadamente alcalino."
      },
      farmacocinetica: "Biodisponibilidad oral: 90-100%. Unión proteínas: 45-50%. T½: 75-120 h (prolongadísima — permite dosificación única diaria). Metabolismo hepático (CYP2C19). Excreción renal 25-50% sin cambios."
    },
    nivel4: {
      evidencia: "El fenobarbital es el antiepiléptico más antiguo (1912) con más de un siglo de uso clínico. En estatus epiléptico neonatal es de elección (evidencia nivel A, Cochrane 2013). En adultos, estudios VA Cooperative Study y ESETT lo posicionan como 3ª línea. Sigue siendo el antiepiléptico más prescrito mundialmente por su bajo coste.",
      referencias: [
        "CIMA AEMPS — Ficha técnica Luminal® inyectable",
        "Treiman DM et al. NEJM 1998 — VA Cooperative Study on SE",
        "Kapur J et al. NEJM 2019 — Ensayo ESETT",
        "Pressler RM et al. Lancet Neurol 2021 — Fenobarbital en SE neonatal",
        "AAN/AES Guidelines on Status Epilepticus 2023",
        "Guía SEN Epilepsia España 2021"
      ],
      niveleEvidencia: "A en estatus neonatal. B-C en adultos (3ª línea tras BZD + antiepiléptico 2ª generación)."
    }
  },
  estabilidadUsoClinico: {
    ampollaAbierta: "Usar inmediatamente — desechar sobrante de ampolla abierta",
    dosisRestante: "No reutilizar sobrante; registrar destrucción en libro de estupefacientes",
    infusionPreparada: "Estable 24 h en SF 0.9% a temperatura ambiente si se mantiene protegida de la luz",
    notas: "Proteger de la luz (fotosensible). Conservar ampollas a temperatura ambiente <25°C. No refrigerar la solución preparada. Si precipitación visible → desechar."
  }
});
