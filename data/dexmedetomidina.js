window.MEDS_DB.push({
  id: "dexmedetomidina",
  nombre: "Dexmedetomidina",
  nombreComercial: "Precedex®, Dexdor®",
  presentacion: "Vial 200 mcg/2 mL (100 mcg/mL) | Vial 400 mcg/4 mL",
  categoria: "Sedante / Analgésico",
  subcategoria: "Agonista alfa-2 adrenérgico selectivo",
  mecanismo: "Agonista selectivo de receptores alfa-2 adrenérgicos en el locus coeruleus (SNC), produciendo sedación cooperativa sin depresión respiratoria significativa. Tiene efecto analgésico y simpaticolítico (reduce FC y TA). El paciente puede ser despertado fácilmente para evaluación neurológica.",
  indicaciones: [
    "Sedación en UCI de pacientes ventilados (duración >24 h)",
    "Sedación para procedimientos en pacientes no intubados (sedación consciente)",
    "Destete ventilatorio — facilita extubación",
    "Agitación y delirium en UCI",
    "Analgesia-sedación en postoperatorio"
  ],
  altoRiesgo: true,
  alertas: [
    "🔴 BRADICARDIA e HIPOTENSIÓN: efectos clase frecuentes y potencialmente graves — tener atropina y fluidos preparados",
    "🔴 Dosis de carga: puede causar hipertensión transitoria seguida de hipotensión — administrar lentamente en 10-20 min",
    "⚠️ No usar como único agente en epilepsia activa ni en presión intracraneal elevada (vasodilatación cerebral)",
    "⚠️ Evitar en bloqueo AV de 2º-3er grado sin marcapasos",
    "⚠️ Requiere bomba de jeringa — NUNCA en bolo directo",
    "⚠️ Suspensión brusca tras uso prolongado: posible síndrome de retirada (hipertensión, taquicardia)"
  ],
  efectosAdversos: [
    { efecto: "Bradicardia (hasta 30% de pacientes)", semaforo: "🔴" },
    { efecto: "Hipotensión", semaforo: "🔴" },
    { efecto: "Hipertensión transitoria con dosis de carga rápida", semaforo: "🟠" },
    { efecto: "Boca seca", semaforo: "🟡" },
    { efecto: "Náuseas", semaforo: "🟡" }
  ],
  niveles: {
    nivel1: {
      descripcion: "Sedante UCI alfa-2 agonista. Sedación cooperativa SIN depresión respiratoria. Perfusión continua 0.2-1.4 mcg/kg/h. Diluir en SF 0.9%: concentración estándar 4 mcg/mL (200 mcg en 50 mL).",
      preparacion: {
        "Diluyente": "SF 0.9% exclusivamente",
        "Concentración estándar": "200 mcg en 50 mL SF → 4 mcg/mL",
        "Concentración alternativa (restricción hídrica)": "400 mcg en 50 mL SF → 8 mcg/mL",
        "Dosis de carga (opcional)": "1 mcg/kg en 10-20 min → luego perfusión",
        "Mantenimiento": "0.2-1.4 mcg/kg/h (ajustar según RASS objetivo)",
        "Vía": "Venosa central preferente (periférica tolerable a corto plazo)"
      },
      viaAdministracion: "Intravenosa — perfusión continua con bomba de jeringa",
      tasaAdministracion: "0.2-1.4 mcg/kg/h. Dosis de carga: 1 mcg/kg en 10-20 min (nunca más rápido)"
    },
    nivel2: {
      mecanismoDetallado: "La activación de receptores alfa-2 en el locus coeruleus inhibe la liberación de noradrenalina, produciendo sedación que imita el sueño fisiológico (actividad NREM). A nivel espinal, reduce la transmisión del dolor. El efecto simpaticolítico reduce la frecuencia cardíaca y la tensión arterial. A diferencia de benzodiacepinas y propofol, no actúa sobre receptores GABA, por lo que no produce depresión respiratoria y el paciente mantiene reflejos protectores de vía aérea.",
      monitoreo: [
        "RASS (Richmond Agitation Sedation Scale) cada hora — objetivo habitual: -1 a -2",
        "FC y TA cada 15-30 min durante carga y al inicio",
        "SpO2 y FR (aunque depresión respiratoria es infrecuente)",
        "CAM-ICU para valoración de delirium",
        "Temperatura (hipotermia leve posible)",
        "Glucemia (efecto inhibidor sobre liberación de insulina)"
      ],
      cuidadosEnfermeria: [
        "Verificar RASS antes de cada ajuste de dosis",
        "Tener atropina 0.5-1 mg IV preparada ante bradicardia",
        "Si FC <50 lpm: reducir velocidad de infusión e informar al médico",
        "Si TA sistólica <90 mmHg: reducir velocidad y administrar fluidos según protocolo",
        "Valorar posibilidad de retirada gradual si uso >48 h (reducir 25% cada 2 h)",
        "Documentar nivel de sedación con RASS cada hora",
        "No agitar el vial — invertir suavemente antes de usar"
      ],
      contraindicaciones: [
        "Bloqueo AV de 2º-3er grado sin marcapasos",
        "Hipotensión grave no controlada",
        "Insuficiencia hepática grave (reducir dosis significativamente)"
      ]
    },
    nivel3: {
      dosis: {
        adultos: "Carga (opcional): 1 mcg/kg IV en 10-20 min. Mantenimiento: 0.2-1.4 mcg/kg/h. Inicio con 0.3-0.4 mcg/kg/h y titular cada 30 min según RASS. Procedimientos: 0.5-1 mcg/kg en 10 min → 0.2-1 mcg/kg/h.",
        pediatria: "No aprobado en ficha técnica en <18 años (uso off-label en UCI pediátrica): 0.2-0.7 mcg/kg/h. Dosis de carga generalmente evitada en <1 año.",
        ancianos: "Reducir dosis un 30-50% (mayor sensibilidad a hipotensión y bradicardia). Evitar dosis de carga. Iniciar 0.2 mcg/kg/h.",
        insuficienciaOrgan: "Insuficiencia hepática: reducir hasta 0.1-0.2 mcg/kg/h (metabolismo hepático extenso). Insuficiencia renal: no requiere ajuste (metabolitos glucuronidados inactivos)."
      },
      compatibilidades: {
        compatible: ["SF 0.9%", "SG 5%", "Ringer Lactato", "Morfina", "Fentanilo", "Midazolam (en Y)", "Propofol (en Y)"],
        incompatible: ["Anfotericina B", "Diazepam"],
        noMezclar: "No mezclar en mismo frasco con otros fármacos — usar vía exclusiva o en Y verificada"
      },
      farmacocinetica: "Unión proteínas: 94%. Metabolismo hepático (CYP2A6, glucuronidación). T½: 2 h. Excreción renal 95% (como metabolitos). Inicio efecto: 5-10 min. Pico: 15 min."
    },
    nivel4: {
      evidencia: "Estudio MENDS2 (2016): dexmedetomidina redujo delirium vs propofol en UCI. PRODEX y MIDEX (JAMA 2012): noninferioridad vs midazolam/propofol con menos días de ventilación mecánica. Guías SCCM 2018 (PADIS) recomiendan sedación leve y dexmedetomidina para reducir delirium.",
      referencias: [
        "CIMA AEMPS — Ficha técnica Dexdor® (dexmedetomidina)",
        "Devlin JW et al. Crit Care Med 2018 — PADIS Guidelines (SCCM)",
        "Jakob SM et al. JAMA 2012 — PRODEX/MIDEX trials",
        "Hughes CG et al. Crit Care Med 2021 — MENDS2 trial",
        "Riker RR et al. JAMA 2009 — Sedación UCI con dexmedetomidina vs midazolam",
        "SEMICYUC — Recomendaciones sedoanalgesia y delirium en UCI 2022"
      ],
      niveleEvidencia: "A — Múltiples ensayos clínicos aleatorizados en UCI. Recomendado en guías internacionales SCCM/SEMICYUC."
    }
  },
  estabilidadUsoClinico: {
    ampollaAbierta: "Usar dentro de 24 h tras apertura en condiciones asépticas",
    dosisRestante: "Desechar sobrante de vial tras 24 h de apertura",
    infusionPreparada: "Estable 24 h a temperatura ambiente en SF 0.9% o SG 5% en PVC o vidrio",
    notas: "No refrigerar la solución preparada. Conservar viales sin abrir a temperatura ambiente. La solución puede presentar color amarillo pálido — es normal y no indica deterioro."
  }
});
