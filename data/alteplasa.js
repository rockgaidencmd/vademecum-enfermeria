window.MEDS_DB.push({
  id: "alteplasa",
  nombre: "Alteplasa",
  nombreComercial: "Actilyse®",
  presentacion: "Vial polvo liofilizado 10 mg | 20 mg | 50 mg | 100 mg + agua para inyección",
  categoria: "Trombolítico",
  subcategoria: "Activador tisular del plasminógeno recombinante (rt-PA)",
  mecanismo: "Activa selectivamente el plasminógeno unido a la fibrina del trombo (fibrinoespecífico), convirtiéndolo en plasmina, que degrada la fibrina y disuelve el coágulo. A diferencia de estreptoquinasa, tiene selectividad relativa por la fibrina con menor fibrinogenolisis sistémica.",
  indicaciones: [
    "ACV isquémico agudo (ventana <4.5 h desde inicio de síntomas)",
    "TEP masivo con inestabilidad hemodinámica",
    "Infarto agudo de miocardio (IAMCEST) si no hay acceso a ICP primaria en <120 min",
    "Trombosis de catéter (dosis muy baja — 1-2 mg intraluminal)"
  ],
  altoRiesgo: true,
  alertas: [
    "🔴 ALTO RIESGO HEMORRÁGICO — contraindicaciones absolutas DEBEN verificarse antes de administrar",
    "🔴 En ACV: SUSPENDER inmediatamente si aparece deterioro neurológico o cefalea intensa (hemorragia intracraneal)",
    "🔴 NO administrar heparina, anticoagulantes ni antiagregantes durante las 24 h siguientes al tPA en ACV",
    "🔴 Control de TA estricto antes y durante: mantener <185/110 mmHg antes de trombolisis en ACV",
    "⚠️ Preparar siempre con el agua para inyección incluida en el kit (no sustituir por SF)",
    "⚠️ En TEP: bolus de 10 mg IV en 1-2 min → resto en 2 h. En ACV: 10% bolus en 1 min → 90% en 60 min",
    "⚠️ No realizar punciones arteriales en los 30 min posteriores a la infusión"
  ],
  efectosAdversos: [
    { efecto: "Hemorragia intracraneal (2-6% en ACV)", semaforo: "🔴" },
    { efecto: "Hemorragia mayor sistémica (digestiva, retroperitoneal)", semaforo: "🔴" },
    { efecto: "Angioedema orolingual (1-5% en ACV — especialmente con IECAs)", semaforo: "🔴" },
    { efecto: "Hipotensión durante infusión", semaforo: "🟠" },
    { efecto: "Hematomas en puntos de punción", semaforo: "🟠" },
    { efecto: "Náuseas/vómitos", semaforo: "🟡" }
  ],
  niveles: {
    nivel1: {
      descripcion: "Trombolítico rt-PA. ACV isquémico: 0.9 mg/kg (máx 90 mg) — 10% en bolus en 1 min + 90% en 60 min. TEP masivo: 100 mg en 2 h (bolus 10 mg en 2 min + 90 mg en 2 h). VERIFICAR CONTRAINDICACIONES ANTES.",
      preparacion: {
        "Reconstitución": "Disolver con el agua para inyección incluida (1 mg/mL resultante)",
        "ACV — dosis total": "0.9 mg/kg (máx 90 mg)",
        "ACV — bolus": "10% de la dosis total IV en 1 minuto",
        "ACV — perfusión": "90% restante en 100 mL SF → infundir en 60 min",
        "TEP — bolus": "10 mg IV en 1-2 min",
        "TEP — perfusión": "90 mg en 250 mL SF → infundir en 2 h",
        "Vía": "Venosa periférica de grueso calibre o central"
      },
      viaAdministracion: "Intravenosa — combinación bolus + perfusión según indicación",
      tasaAdministracion: "ACV: 10% bolus en 1 min → 90% en 60 min. TEP: 10 mg en 2 min → 90 mg en 2 h"
    },
    nivel2: {
      mecanismoDetallado: "La alteplasa es un activador del plasminógeno de segunda generación. A diferencia de estreptoquinasa, se une al plasminógeno unido a fibrina con 200-400 veces más afinidad que al plasminógeno libre, lo que confiere relativa fibrinoespecificidad. El resultado es lisis localizada del trombo con menor degradación del fibrinógeno sistémico. Su vida media muy corta (3-5 min) obliga a administración en infusión continua.",
      monitoreo: [
        "TA cada 15 min durante infusión y 2 h después (en ACV: mantener <180/105 mmHg)",
        "Escala NIHSS neurológica cada 15 min durante y 2 h postinfusión (en ACV)",
        "SpO2, FC, ritmo cardíaco continuo",
        "Signos de sangrado activo: hematuria, melenas, hemoptisis",
        "Nivel de consciencia y focalidad neurológica",
        "TC cerebral 24 h postrombolisis (protocolo ACV)"
      ],
      cuidadosEnfermeria: [
        "VERIFICAR CONTRAINDICACIONES con checklist antes de preparar (cirugía reciente, anticoagulación, ACV previo <3 meses, HTA no controlada, plaquetas <100.000)",
        "Canalizar 2 vías IV antes de iniciar (no realizar más punciones durante la infusión)",
        "Colocar sonda vesical y SNG ANTES de trombolisis si están indicadas",
        "NO administrar heparina, AAS u otros anticoagulantes durante 24 h en ACV",
        "Si deterioro neurológico brusco: DETENER infusión y avisar URGENTEMENTE",
        "Si angioedema: DETENER, adrenalina 0.5 mg IM, antihistamínico IV, corticoide IV",
        "Compresión manual prolongada (10-15 min) en puntos de punción",
        "Régimen de reposo absoluto durante infusión y 1 h después"
      ],
      contraindicaciones: [
        "ACV hemorrágico previo (en cualquier momento)",
        "ACV isquémico o TCE grave en los últimos 3 meses",
        "Cirugía mayor o trauma grave en los últimos 14 días (3 meses para neurocirugía)",
        "TA >185/110 mmHg que no responde a tratamiento antihipertensivo",
        "Anticoagulación activa (INR >1.7, HBPM terapéutica en <24 h, NACOs en <48 h)",
        "Plaquetas <100.000/μL, glucemia <50 o >400 mg/dL (en ACV)",
        "Hemorragia interna activa (excepto menstruación)"
      ]
    },
    nivel3: {
      dosis: {
        adultos: "ACV: 0.9 mg/kg IV (máx 90 mg) — 10% bolus/1 min + 90% en 60 min. TEP masivo: 100 mg en 2 h. IAM (IAMCEST): 15 mg bolus + 50 mg en 30 min + 35 mg en 60 min (régimen acelerado). Trombosis de catéter: 1-2 mg intraluminal en 2 h, aspirar sin infundir.",
        pediatria: "No hay indicación establecida pediátrica para ACV. TEP pediátrico: 0.1-0.6 mg/kg/h durante 6 h (uso off-label, bajo supervisión experta).",
        ancianos: ">80 años: misma dosis en ACV (estudios IST-3 y meta-análisis confirmaron beneficio). Mayor riesgo hemorrágico — vigilancia estrecha.",
        insuficienciaOrgan: "Sin ajuste en IR o IH. En IH grave: mayor riesgo hemorrágico por menor síntesis de factores coagulación."
      },
      compatibilidades: {
        compatible: ["SF 0.9% (perfusión)", "Agua para inyección (reconstitución)"],
        incompatible: ["SG 5% (no recomendado)", "Heparina en la misma vía", "Otros fármacos en la misma perfusión"],
        noMezclar: "Vía exclusiva para alteplasa. Lavar la vía antes y después. No mezclar con ningún otro fármaco."
      },
      farmacocinetica: "T½ inicial: 3-5 min (muy corta — por eso se da en infusión). T½ terminal: 40-50 min. Metabolismo hepático. Aclaramiento plasmático: 380-570 mL/min."
    },
    nivel4: {
      evidencia: "NINDS trial (1995) estableció el beneficio del rt-PA en ACV <3h. ECASS III (2008) extendió la ventana a 4.5h. WAKE-UP trial (2018): beneficio en ACV de tiempo desconocido guiado por RMN. PEITHO (2014): trombolisis en TEP submasivo controvertida. Meta-análisis Cochrane 2014: beneficio claro en ACV <4.5h.",
      referencias: [
        "CIMA AEMPS — Ficha técnica Actilyse® (alteplasa)",
        "NINDS rt-PA Stroke Study Group. NEJM 1995",
        "Hacke W et al. NEJM 2008 — ECASS III trial",
        "Powers WJ et al. Stroke 2019 — AHA/ASA ACV Guidelines",
        "Konstantinides SV et al. Eur Heart J 2020 — ESC Guidelines TEP",
        "Grupo de Estudio de las Enfermedades Cerebrovasculares SEN — Guía ACV España 2023"
      ],
      niveleEvidencia: "A — Ensayos clínicos pivotales y meta-análisis con nivel máximo de evidencia para ACV isquémico <4.5h."
    }
  },
  estabilidadUsoClinico: {
    ampollaAbierta: "Reconstitución: usar inmediatamente tras disolver (o máximo 8 h a 2-8°C)",
    dosisRestante: "Desechar el sobrante no utilizado",
    infusionPreparada: "Usar dentro de las 8 h tras preparación si se conserva a 2-8°C; 4 h a temperatura ambiente",
    notas: "Conservar el polvo liofilizado a 2-8°C. No agitar tras reconstitución (puede desnaturalizarse). La solución reconstituida es transparente a ligeramente opalescente."
  }
});
