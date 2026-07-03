window.MEDS_DB.push({
  id: "acetilcisteina",
  nombre: "Acetilcisteína",
  nombreComercial: "Flumil® IV, Acetilcisteína Combino Pharm®",
  presentacion: "Ampolla 200 mg/mL (3 mL = 600 mg) | Ampolla 200 mg/4 mL | Vial 2 g/10 mL",
  categoria: "Antídoto / Mucolítico",
  subcategoria: "N-acetilcisteína (NAC)",
  mecanismo: "Como antídoto: repone glutatión hepático y actúa como sustituto directo del NAPQI (metabolito tóxico del paracetamol), previniendo necrosis hepatocelular. Como mucolítico: rompe puentes disulfuro de la mucina reduciendo la viscosidad del moco.",
  indicaciones: [
    "Intoxicación por paracetamol (antídoto de elección)",
    "Mucolítico IV en secreciones bronquiales espesas (UCI, fibrosis quística)",
    "Nefroprotección en contraste yodado (uso controvertido)",
    "Fallo hepático agudo no paracetamol (uso compasivo)"
  ],
  altoRiesgo: false,
  alertas: [
    "⚠️ REACCIÓN ANAFILACTOIDE: más frecuente con la 1.ª bolsa (alta concentración). No es alergia IgE-mediada — puede continuarse tras tratamiento sintomático",
    "⚠️ Diluir SIEMPRE en SG 5% — incompatible con SF 0.9% (precipita)",
    "⚠️ La eficacia del antídoto es máxima en las primeras 8-10 h tras ingesta — no esperar niveles si hay sospecha clínica",
    "⚠️ En insuficiencia renal: reducir velocidad de infusión, no la dosis total",
    "⚠️ Monitorizar INR, transaminasas y creatinina cada 4-6 h en intoxicación grave"
  ],
  efectosAdversos: [
    { efecto: "Reacción anafilactoide (urticaria, broncoespasmo, hipotensión)", semaforo: "🔴" },
    { efecto: "Náuseas/vómitos (frecuente al inicio)", semaforo: "🟠" },
    { efecto: "Eritema cutáneo", semaforo: "🟡" },
    { efecto: "Taquicardia", semaforo: "🟡" },
    { efecto: "Flebitis en punto de punción", semaforo: "🟡" }
  ],
  niveles: {
    nivel1: {
      descripcion: "Antídoto del paracetamol y mucolítico IV. PROTOCOLO 3 BOLSAS: bolsa 1 = 150 mg/kg en 200 mL SG 5% en 60 min → bolsa 2 = 50 mg/kg en 500 mL en 4 h → bolsa 3 = 100 mg/kg en 1000 mL en 16 h.",
      preparacion: {
        "Diluyente": "SG 5% EXCLUSIVAMENTE (NO SF 0.9%)",
        "Bolsa 1 (carga)": "150 mg/kg en 200 mL SG 5% → infundir en 60 min",
        "Bolsa 2": "50 mg/kg en 500 mL SG 5% → infundir en 4 h",
        "Bolsa 3 (mantenimiento)": "100 mg/kg en 1000 mL SG 5% → infundir en 16 h",
        "Vía": "IV periférica o central — evitar extravasación",
        "Filtro": "No requerido"
      },
      viaAdministracion: "Intravenosa (perfusión continua) | Nebulización (uso mucolítico)",
      tasaAdministracion: "Según bolsa del protocolo — ver preparación"
    },
    nivel2: {
      mecanismoDetallado: "El paracetamol en sobredosis agota el glutatión hepático. El NAPQI (N-acetil-p-benzoquinona imina) se acumula y se une covalentemente a las proteínas celulares causando necrosis. La NAC restaura el glutatión o actúa como sustrato alternativo. La ventana terapéutica óptima es <8-10 h postingesta, pero hay beneficio hasta 24 h e incluso más tarde en intoxicaciones masivas.",
      monitoreo: [
        "Niveles de paracetamol en sangre (nomograma Rumack-Matthew)",
        "Transaminasas (ALT/AST) cada 4-6 h",
        "INR / tiempo de protrombina (marcador de función hepática)",
        "Creatinina y función renal",
        "Glucemia (hipoglucemia en fallo hepático agudo)",
        "Constantes vitales durante toda la infusión"
      ],
      cuidadosEnfermeria: [
        "Identificar el tiempo exacto de ingesta — condiciona el protocolo",
        "Aplicar nomograma de Rumack-Matthew con los niveles de paracetamol para decidir tratamiento",
        "Tener preparado adrenalina 1:1000 IM y antihistamínico IV ante reacción anafilactoide",
        "Si reacción en bolsa 1: PAUSAR infusión, tratar síntomas, reiniciar a menor velocidad",
        "Usar bomba volumétrica para control exacto de la velocidad",
        "Cambiar de bolsa sin interrumpir tratamiento — el tiempo total es 21 h",
        "Documentar inicio de tratamiento y hora de ingesta en historia clínica",
        "En embarazo: el tratamiento no está contraindicado — la hepatotoxicidad fetal es mayor riesgo"
      ],
      contraindicaciones: [
        "No hay contraindicaciones absolutas cuando hay indicación de antídoto",
        "Antecedente de alergia verdadera a NAC (extrema precaución, valorar beneficio/riesgo)"
      ]
    },
    nivel3: {
      dosis: {
        adultos: "Protocolo 3 bolsas IV (Prescott modificado): Bolsa 1: 150 mg/kg (máx 16.5 g) en 200 mL SG 5% a lo largo de 60 min. Bolsa 2: 50 mg/kg (máx 5.5 g) en 500 mL SG 5% durante 4 h. Bolsa 3: 100 mg/kg (máx 11 g) en 1000 mL SG 5% durante 16 h. Total: 300 mg/kg en 21 h.",
        pediatria: "Mismo protocolo que adultos ajustando por kg. Límites de peso: pacientes >110 kg → calcular para 110 kg (evitar sobredosis de NAC). En <20 kg: reducir volumen de dilución para evitar sobrecarga hídrica (consultar con toxicología).",
        ancianos: "Sin ajuste de dosis. Precaución con el volumen total (~1700 mL en 21 h) en pacientes con ICC o renal crónica.",
        insuficienciaOrgan: "Insuficiencia renal: reducir velocidad de infusión — no la dosis total. Hemodiálisis: continuar el tratamiento, NAC se elimina parcialmente por diálisis."
      },
      compatibilidades: {
        compatible: ["SG 5%", "Agua para inyección"],
        incompatible: ["SF 0.9% (precipitación)", "Solución Ringer", "Antibióticos betalactámicos en Y", "Nitroglicerina (degradación)"],
        noMezclar: "Administrar en vía exclusiva si es posible — la compatibilidad con otros fármacos es limitada"
      },
      farmacocinetica: "Biodisponibilidad IV: 100%. Vida media: ~2.5 h. Unión proteínas: 50%. Metabolismo hepático (desacetilación → cisteína → glutatión). Inicio acción antídoto: inmediato IV."
    },
    nivel4: {
      evidencia: "Protocolo 3 bolsas de Prescott (1979) validado en múltiples estudios. NAC reduce mortalidad de hepatotoxicidad por paracetamol de ~5% a <0.5% si se administra en <8 h. Eficaz hasta 24-36 h postingesta en casos graves.",
      referencias: [
        "CIMA AEMPS — Ficha técnica Flumil IV / Acetilcisteína Combino Pharm",
        "Prescott LF et al. Lancet 1979 — Protocolo NAC original IV",
        "Rumack BH, Matthew H. Pediatrics 1975 — Nomograma Rumack-Matthew",
        "Chiew AL et al. Ann Emerg Med 2016 — Protocolo 2 bolsas vs 3 bolsas",
        "Bateman DN et al. Lancet 2014 — SNAP trial (modificación velocidad 1ª bolsa)",
        "WHO Essential Medicines List — Acetylcysteine antidote",
        "UpToDate: Acetaminophen (paracetamol) poisoning in adults — treatment"
      ],
      niveleEvidencia: "A — Múltiples ensayos clínicos y revisiones sistemáticas para intoxicación por paracetamol."
    }
  },
  estabilidadUsoClinico: {
    ampollaAbierta: "Usar inmediatamente tras apertura — riesgo de oxidación (solución se vuelve rosada/parda si oxidada → desechar)",
    dosisRestante: "Desechar sobrante de ampolla abierta",
    infusionPreparada: "Estable 24 h a temperatura ambiente en SG 5% protegida de la luz",
    notas: "Proteger de la luz UV. No refrigerar la solución preparada. Si la solución presenta color oscuro o turbidez → desechar."
  }
});
