window.MEDS_DB.push({
  id: "succinilcolina",
  nombre: "Succinilcolina",
  nombreComercial: "Anectine®, Lysthenon®",
  presentacion: "Ampolla 100 mg/2 mL (50 mg/mL) | Vial 500 mg/10 mL",
  categoria: "Bloqueador neuromuscular",
  subcategoria: "Bloqueador despolarizante (relajante muscular)",
  mecanismo: "Agonista de los receptores nicotínicos de acetilcolina en la unión neuromuscular. Produce despolarización sostenida de la membrana muscular (fasciculaciones visibles) seguida de bloqueo por desensibilización del receptor. Acción ultracorta por hidrólisis rápida por pseudocolinesterasa plasmática.",
  indicaciones: [
    "Intubación de secuencia rápida (ISR) — gold standard por su inicio ultrarrápido",
    "Laringospasmo grave que no cede con CPAP",
    "Intubación de emergencia cuando el tiempo de intubación es crítico",
    "Electroconvulsivoterapia (ECT)"
  ],
  altoRiesgo: true,
  alertas: [
    "🔴 HIPERTERMIA MALIGNA: puede desencadenarla en individuos susceptibles — antídoto DANTROLENO (tener disponible)",
    "🔴 HIPERPOTASEMIA LETAL: CONTRAINDICADA en quemados >24h, lesión medular >24h, aplastamiento muscular extenso, denervación — el K+ puede subir 5-10 mEq/L → parada cardíaca",
    "🔴 No tiene antídoto funcional — el bloqueo se revierte espontáneamente por pseudocolinesterasa (3-12 min)",
    "🔴 En déficit de pseudocolinesterasa: bloqueo prolongado horas — ventilación mecánica hasta recuperación",
    "⚠️ SIEMPRE disponible equipo completo de intubación y ventilación manual ANTES de administrar",
    "⚠️ Produce fasciculaciones previas al bloqueo — avisar al paciente/familia si consciente",
    "⚠️ Conservar en nevera 2-8°C — pierde potencia a temperatura ambiente"
  ],
  efectosAdversos: [
    { efecto: "Hipertermia maligna (genéticamente susceptible)", semaforo: "🔴" },
    { efecto: "Hiperpotasemia grave en quemados/lesión medular/aplastamiento", semaforo: "🔴" },
    { efecto: "Bradicardia severa (especialmente en 2ª dosis o niños)", semaforo: "🔴" },
    { efecto: "Bloqueo neuromuscular prolongado (déficit pseudocolinesterasa)", semaforo: "🔴" },
    { efecto: "Fasciculaciones musculares y mialgias postoperatorias", semaforo: "🟠" },
    { efecto: "Aumento de presión intraocular e intragástrica transitorio", semaforo: "🟠" },
    { efecto: "Aumento de presión intracraneal transitorio", semaforo: "🟠" }
  ],
  niveles: {
    nivel1: {
      descripcion: "Bloqueante neuromuscular despolarizante de acción ULTRACORTA. ISR: 1-1.5 mg/kg IV bolus. Inicio 45-60 seg, duración 8-12 min. VERIFICAR contraindicaciones. SIEMPRE tener dantroleno disponible y equipo de intubación listo.",
      preparacion: {
        "Dosis ISR adultos": "1-1.5 mg/kg IV bolus directo (NO diluir para ISR)",
        "Velocidad": "Bolus rápido IV directo (en 10-15 segundos)",
        "Precurarización (opcional)": "Atracurio 0.05 mg/kg IV 3 min antes → reduce fasciculaciones",
        "Perfusión continua (si necesario)": "1-2 mg/mL en SF → 2.5-3 mg/min",
        "Vía": "IV directa o central — inicio de acción 45-60 seg"
      },
      viaAdministracion: "Intravenosa (bolus directo para ISR) | Intramuscular (niños sin acceso IV: 4 mg/kg)",
      tasaAdministracion: "ISR: bolus directo en 10-15 seg. Laringospasmo IM: 4 mg/kg (máx 150 mg)"
    },
    nivel2: {
      mecanismoDetallado: "La succinilcolina está formada por dos moléculas de acetilcolina unidas. Se une a los receptores nAChR de la placa motora produciendo primero despolarización (fasciculaciones) y luego bloqueo por desensibilización del receptor (la membrana no puede repolarizarse mientras el fármaco esté unido). La pseudocolinesterasa plasmática la hidroliza en succinilmonocolina (inactiva) y colina en 3-5 minutos, restaurando el tono muscular. En déficit de pseudocolinesterasa (genético o adquirido — enfermedad hepática, embarazo, anticolinesterásicos), el bloqueo puede prolongarse horas.",
      monitoreo: [
        "SpO2 continua — CRÍTICA durante y después de ISR",
        "FC, TA y ritmo cardíaco",
        "Capnografía (ETCO2) tras intubación para confirmar posición del tubo",
        "Train-of-Four (TOF) si se usa estimulador de nervio periférico",
        "Temperatura (alerta de hipertermia maligna: >38.8°C + rigidez + taquicardia + acidosis)",
        "Potasio sérico (en pacientes de riesgo de hiperpotasemia)"
      ],
      cuidadosEnfermeria: [
        "VERIFICAR contraindicaciones antes de preparar: quemados >24h, lesión medular/neurológica >24h, hiperpotasemia previa, miopatías",
        "Tener TODO preparado ANTES: laringoscopio, tubo ET, aspirador, ambú, capnógrafo",
        "Tener DANTROLENO 20 mg/vial (mínimo 36 viales = 720 mg) disponible en quirófano/UCI",
        "Si hipertermia maligna: DANTROLENO 2.5 mg/kg IV bolo → repetir hasta 10 mg/kg, enfriar al paciente",
        "Comprobar que el fármaco está frío (sale de nevera) — verificar fecha de caducidad",
        "La 2ª dosis de succinilcolina en niños REQUIERE atropina previa (alto riesgo de bradicardia grave)",
        "Documentar tiempo de administración y tiempo de recuperación del tono muscular",
        "No relajar sin analgesia/sedación — el paciente puede estar consciente y paralizado"
      ],
      contraindicaciones: [
        "Quemaduras extensas (>24 h postquemadura hasta 2 años después)",
        "Lesión medular aguda o crónica (>24 h postlesión)",
        "Aplastamiento muscular extenso o rabdomiólisis",
        "Denervación muscular (ELA, Guillain-Barré, parálisis cerebral grave)",
        "Miopatías congénitas (Duchenne, Becker, miotonías)",
        "Hiperpotasemia preexistente (K+ >5.5 mEq/L)",
        "Historia personal o familiar de hipertermia maligna",
        "Déficit conocido de pseudocolinesterasa",
        "Glaucoma de ángulo cerrado (aumento PIO transitorio)"
      ]
    },
    nivel3: {
      dosis: {
        adultos: "ISR: 1-1.5 mg/kg IV bolus rápido (máx 150-200 mg). Laringospasmo: 0.5 mg/kg IV o 4 mg/kg IM. ECT: 0.5-1 mg/kg IV.",
        pediatria: "ISR: 2 mg/kg IV (<10 kg) o 1-1.5 mg/kg IV (>10 kg). IM si sin acceso IV: 4 mg/kg (máx 150 mg). SIEMPRE atropina previa en niños: 0.02 mg/kg IV (mín 0.1 mg).",
        ancianos: "Misma dosis ajustada por peso. Mayor riesgo de bradicardia y hiperpotasemia. Considerar alternativa con rocuronio si hay contraindicaciones.",
        insuficienciaOrgan: "IH grave: reducir dosis (menor producción de pseudocolinesterasa → bloqueo prolongado). IR: sin ajuste (no depende de vía renal). Embarazo: nivel de pseudocolinesterasa reducido → bloqueo puede prolongarse moderadamente."
      },
      compatibilidades: {
        compatible: ["SF 0.9%", "SG 5%"],
        incompatible: ["Soluciones alcalinas (bicarbonato, tiopental)", "Propofol en la misma vía", "Barbitúricos"],
        noMezclar: "Administrar sola en bolus directo para ISR. pH neutro — incompatible con soluciones alcalinas."
      },
      farmacocinetica: "Inicio: 45-60 seg IV (30-60 seg con dosis altas). Duración: 8-12 min (fase I), posible fase II con dosis altas. Metabolismo: pseudocolinesterasa plasmática (rápido). T½: <1 min. Sin excreción renal significativa."
    },
    nivel4: {
      evidencia: "La succinilcolina sigue siendo el gold standard para ISR por su inicio más rápido (45-60 s) y duración más corta que cualquier otro relajante. Miller RD et al. demostró superioridad vs rocuronio para ISR en condiciones de estómago lleno. Controversia con rocuronio+sugammadex: proporciona reversión rápida pero más costoso. Metaanálisis 2015: similares condiciones de intubación con 1.2 mg/kg rocuronio vs 1.5 mg/kg succinilcolina.",
      referencias: [
        "CIMA AEMPS — Ficha técnica Anectine® (succinilcolina)",
        "Succinylcholine vs Rocuronium for RSI — Cochrane 2015",
        "Miller RD. Miller's Anesthesia 9ª ed. — Neuromuscular blocking agents",
        "Mertes PM et al. Anaesth Crit Care Pain Med 2019 — Guías SFAR reacciones alérgicas perioperatorias",
        "Brandom BW et al. Paediatr Anaesth 2011 — Hipertermia maligna",
        "Naguib M et al. Anesth Analg 2010 — Consensus statement on relajantes musculares"
      ],
      niveleEvidencia: "A para ISR. Evidencia sólida de más de 70 años de uso clínico."
    }
  },
  estabilidadUsoClinico: {
    ampollaAbierta: "Usar inmediatamente tras apertura — desechar sobrante",
    dosisRestante: "Desechar sobrante de ampolla",
    infusionPreparada: "Estable 24 h a 2-8°C en SF 0.9% (1-2 mg/mL)",
    notas: "CONSERVAR EN NEVERA 2-8°C obligatoriamente — pierde potencia rápidamente a temperatura ambiente. Temperatura de la solución al administrar: verificar que no esté fría en exceso (puede administrarse a temperatura ambiente si se saca de nevera poco antes)."
  }
});
