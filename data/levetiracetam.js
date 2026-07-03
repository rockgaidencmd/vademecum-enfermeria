window.MEDS_DB.push({
  id: "levetiracetam",
  nombre: "Levetiracetam",
  nombreComercial: "Keppra® IV, Levetiracetam Accord®",
  presentacion: "Vial 500 mg/5 mL (100 mg/mL) | Vial 1000 mg/10 mL",
  categoria: "Antiepiléptico",
  subcategoria: "Modulador SV2A (2ª generación)",
  mecanismo: "Se une a la proteína de vesícula sináptica SV2A, modulando la liberación de neurotransmisores. No actúa sobre canales de sodio ni GABA. Mecanismo único que explica su perfil de interacciones muy bajo.",
  indicaciones: [
    "Epilepsia focal con/sin generalización secundaria (monoterapia y adyuvante)",
    "Epilepsia generalizada idiopática (crisis mioclónicas, ausencias, tónico-clónicas)",
    "Estatus epiléptico (2ª línea tras benzodiacepinas)",
    "Profilaxis de crisis en TCE/neurocirugía"
  ],
  altoRiesgo: false,
  alertas: [
    "⚠️ Ajuste de dosis OBLIGATORIO en insuficiencia renal (aclaramiento <80 mL/min)",
    "⚠️ Vigilar cambios conductuales: agitación, irritabilidad, psicosis (especialmente en primeras semanas)",
    "⚠️ En estatus epiléptico: administrar en 15 min (máximo — no reducir más el tiempo, riesgo hipotensión)",
    "⚠️ No suspender bruscamente — retirada gradual obligatoria (riesgo de rebote de crisis)",
    "⚠️ Diluir en 100 mL de SF/SG5%/RL — NO administrar concentrado"
  ],
  efectosAdversos: [
    { efecto: "Somnolencia y mareo (frecuente al inicio)", semaforo: "🟠" },
    { efecto: "Cambios conductuales: agitación, hostilidad, depresión", semaforo: "🟠" },
    { efecto: "Hipotensión durante infusión rápida", semaforo: "🟠" },
    { efecto: "Cefalea, astenia", semaforo: "🟡" },
    { efecto: "Leucopenia (raro)", semaforo: "🟡" }
  ],
  niveles: {
    nivel1: {
      descripcion: "Antiepiléptico IV de 2ª generación. Muy bajo perfil de interacciones. Para estatus epiléptico: 30-60 mg/kg (máx 4500 mg) en 100 mL a pasar en 15 min. Mantenimiento: 1000-3000 mg/día en 2 dosis.",
      preparacion: {
        "Diluyente": "SF 0.9%, SG 5% o Ringer Lactato",
        "Volumen": "Diluir en 100 mL mínimo",
        "Dosis estatus": "30-60 mg/kg IV (máx 4500 mg) en 100 mL → infundir en 15 min",
        "Dosis mantenimiento": "500-1500 mg en 100 mL → infundir en 15 min cada 12 h",
        "Concentración máxima": "15 mg/mL (no superar)"
      },
      viaAdministracion: "Intravenosa (perfusión) | Oral (cuando sea posible — biodisponibilidad ~100%)",
      tasaAdministracion: "Infundir en 15 minutos (estatus y mantenimiento IV)"
    },
    nivel2: {
      mecanismoDetallado: "El levetiracetam se une selectivamente a SV2A (glycoprotein de vesículas sinápticas), modificando la cinética de liberación de neurotransmisores tanto excitadores como inhibidores. No tiene efecto sobre canales de Na+ voltaje-dependientes ni sobre receptores GABA-A, lo que explica su excelente perfil de interacciones farmacológicas (no induce ni inhibe CYP450).",
      monitoreo: [
        "Control de crisis (frecuencia, duración, tipo)",
        "Función renal: creatinina/aclaramiento (ajuste de dosis)",
        "Tensión arterial durante infusión IV",
        "Estado conductual y psicológico (primeras semanas)",
        "Niveles plasmáticos si sospecha de falta de eficacia o toxicidad (rango 12-46 mg/L)"
      ],
      cuidadosEnfermeria: [
        "Usar bomba de infusión — pasar en exactamente 15 minutos",
        "Monitorizar TA durante y 15 min después de la infusión",
        "Valorar nivel de consciencia antes y después de cada dosis",
        "Documentar cualquier cambio conductual e informar al médico",
        "Conversión IV→oral: misma dosis, misma frecuencia (bioequivalente)",
        "En insuficiencia renal: verificar ajuste de dosis antes de administrar",
        "Compatible con: lorazepam, diazepam (no mezclar en mismo frasco)"
      ],
      contraindicaciones: [
        "Hipersensibilidad a levetiracetam o derivados pirrolidona",
        "Insuficiencia renal grave sin ajuste de dosis"
      ]
    },
    nivel3: {
      dosis: {
        adultos: "Mantenimiento: 500-1500 mg/12h IV u oral (máx 3000 mg/día). Estatus epiléptico: 30-60 mg/kg IV (máx 4500 mg) en 15 min. Carga inicial en epilepsia: 1000-2000 mg dosis única.",
        pediatria: "1 mes-6 meses: 7 mg/kg/12h (máx 21 mg/kg/día). 6 meses-18 años: 10 mg/kg/12h (máx 30 mg/kg/día, tope 3000 mg/día). Estatus: 40-60 mg/kg IV (máx 3000 mg) en 15 min.",
        ancianos: "Ajustar según función renal. Iniciar con dosis bajas por mayor riesgo de somnolencia y caídas.",
        insuficienciaOrgan: "IR leve (ClCr 50-79): máx 1000 mg/12h. IR moderada (30-49): máx 750 mg/12h. IR grave (<30): máx 500 mg/12h. HD: dosis suplementaria 250-500 mg tras cada sesión."
      },
      compatibilidades: {
        compatible: ["SF 0.9%", "SG 5%", "Ringer Lactato", "Lorazepam", "Diazepam", "Valproato (en Y)"],
        incompatible: ["No mezclar con soluciones que contengan otros antiepilépticos en el mismo frasco"],
        noMezclar: "Administrar solo o en Y con fármacos compatibles verificados"
      },
      farmacocinetica: "Biodisponibilidad oral: ~100%. Unión proteínas: <10% (mínima). T½: 6-8 h (16-22 h en IR grave). No metabolismo CYP450 — hidrólisis enzimática. Excreción renal 66% sin cambios."
    },
    nivel4: {
      evidencia: "Ensayos ESETT y ESTABLISHED demostraron eficacia de levetiracetam en estatus epiléptico comparable a ácido valproico y fenitoína, con mejor perfil de seguridad (menor hipotensión, sin interacciones). Primera línea en guías NICE y AAN para epilepsia focal.",
      referencias: [
        "CIMA AEMPS — Ficha técnica Keppra IV",
        "Kapur J et al. NEJM 2019 — Ensayo ESETT: levetiracetam vs valproato vs fenitoína",
        "Chamberlain JM et al. NEJM 2020 — Ensayo ESTABLISHED",
        "NICE CG137 — Epilepsies: diagnosis and management (2022)",
        "AAN/AES Guidelines on status epilepticus 2023",
        "Guía SEN (Sociedad Española de Neurología) — Epilepsia 2021"
      ],
      niveleEvidencia: "A — Ensayos clínicos aleatorizados de alta calidad en estatus epiléptico y epilepsia crónica."
    }
  },
  estabilidadUsoClinico: {
    ampollaAbierta: "Usar dentro de 12 h tras apertura si se mantiene en condiciones asépticas",
    dosisRestante: "Desechar sobrante de vial abierto si no se usa en la misma jornada",
    infusionPreparada: "Estable 24 h a temperatura ambiente en SF 0.9% o SG 5%",
    notas: "No requiere protección de la luz. Conservar viales sin abrir a temperatura ambiente (<25°C)."
  }
});
