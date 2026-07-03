/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/voriconazol.js
   Fuentes: CIMA AEMPS (Vfend), FDA DailyMed,
   IDSA Aspergillosis Guidelines 2016 (Updated 2020),
   ESCMID/ECMM Candida Guidelines 2020
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'voriconazol',
  nombre:         'Voriconazol',
  nombreGenerico: 'Voriconazole',
  categoria:      'antibioticos',
  tags:           ['antifúngico', 'Aspergillus', 'azol', 'triazol', 'candida', 'UCI', 'inmunodeprimidos', 'hematología'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Antifúngico de primera línea en aspergilosis invasiva</b> — superior a anfotericina B en mortalidad.',
      'Dosis de carga IV: <b>6 mg/kg/12h × 2 dosis</b> → mantenimiento <b>4 mg/kg/12h</b>.',
      '<b>Infundir en mínimo 1-2 horas</b> — infusión rápida (<1 h) causa reacción vasomotora grave.',
      '<b>Inhibidor potente CYP450</b> (CYP2C9, CYP2C19, CYP3A4) — múltiples interacciones críticas: sirolimus, tacrolimus, warfarina, rifampicina.',
      'Monitorizar niveles plasmáticos (TDM): diana de <b>valle 1-5.5 mcg/mL</b> — toxicidad >5.5 mcg/mL.',
    ],

    resumenRapido: 'Triazol de segunda generación con amplio espectro antifúngico. Inhibe la 14α-lanosterol desmetilasa (CYP51 fúngica), bloqueando la síntesis de ergosterol en la membrana fúngica. Primera línea en aspergilosis invasiva (hematología, trasplantados). También activo frente a Candida (incluyendo C. krusei resistente a fluconazol), Scedosporium, Fusarium. Farmacocinética no lineal con gran variabilidad interindividual — TDM obligatorio.',

    objetivoTerapeutico: 'Tratar aspergilosis invasiva y otras infecciones fúngicas graves · Valle plasmático 1-5.5 mcg/mL (eficacia y seguridad) · Erradicación micológica en inmunodeprimidos',

    preparacion: {
      'Presentación IV':       '<b>Vfend® 200 mg/vial polvo liofilizado (reconstituir)</b>',
      'Reconstitución':        'Añadir 19 mL de agua para inyección → 10 mg/mL (200 mg/20 mL)',
      'Diluyente':             '<b>SF 0.9%, SG 5% o Ringer Lactato</b>',
      'Dilución final':        'Concentración 0.5-5 mg/mL — diluir en 100-250 mL SF',
      'Dosis de carga (día 1)': '<b>6 mg/kg IV c/12h × 2 dosis</b>',
      'Mantenimiento':         '<b>4 mg/kg IV c/12h</b> (puede reducirse a 3 mg/kg si toxicidad)',
      'Conversión IV→oral':    '200-300 mg oral c/12h (biodisponibilidad oral ~96% en ayunas)',
      '⏱️ TIEMPO INFUSIÓN':    '<b>MÍNIMO 1-2 horas — NUNCA menos de 60 min</b>',
      'Vía':                   'IV central (preferible) o periférica',
      'Filtro':                'Filtro 1.2 μm si hay partículas visibles (no obligatorio de rutina)',
      '🧊 Estabilidad':         '<b>24 horas a temperatura ambiente en SF 0.9%</b>',
    },

    vigilancia: {
      antes: [
        'Revisar función hepática basal: ALT, AST, bilirrubina, fosfatasa alcalina.',
        'Comprobar medicación concomitante — interacciones CYP2C19/CYP3A4: sirolimus, tacrolimus, warfarina, rifampicina, fenitoína.',
        'Hemocultivos y galactomanano sérico/BAL antes de iniciar (no retrasar tratamiento en aspergilosis grave).',
        'Función renal: la IV contiene excipiente SBECD acumulable en IR grave.',
        'En trasplante: verificar niveles de inmunosupresores ANTES de iniciar (voriconazol los aumenta drásticamente).',
      ],
      durante: [
        'Vigilar reacciones vasomotoras: rubor, fiebre, hipotensión, taquicardia — más frecuentes en infusión rápida.',
        'Si reacción vasomotora: no requiere suspender — reducir velocidad de infusión.',
        'Observar función visual si el paciente está consciente (fotopsias).',
        'Registrar TA y FC durante las primeras infusiones.',
      ],
      despues: [
        'Función hepática semanal durante el primer mes (hepatotoxicidad con uso prolongado).',
        'Niveles plasmáticos (TDM) a las 72 h de inicio: valle 1-5.5 mcg/mL.',
        'Vigilar toxicidad visual: fotopsias, visión borrosa, cambios en percepción del color.',
        'INR si el paciente toma warfarina — voriconazol puede duplicar o triplicar el efecto.',
        'Niveles de tacrolimus/sirolimus/ciclosporina si trasplantado — reducción de dosis del 50% típicamente.',
        'Función renal si uso IV prolongado (acumulación de SBECD).',
      ],
      suspender: [
        'Hepatotoxicidad grave (ALT/AST >10× el valor normal).',
        'Síndrome de Stevens-Johnson u otras reacciones cutáneas graves.',
        'Niveles plasmáticos persistentemente >5.5 mcg/mL con síntomas de toxicidad (alucinaciones, encefalopatía).',
        'No respuesta microbiológica a los 14 días — reevaluar especie y sensibilidad.',
        'Conversión a vía oral cuando el paciente tolera (misma eficacia).',
      ],
    },

    incompatibilidades: [
      '<b>NO mezclar en la misma bolsa o vía con preparaciones IV que contengan bicarbonato</b>.',
      'No compatible con sangre o productos hemáticos.',
      'No mezclar con TPN (nutrición parenteral total) sin verificar compatibilidad.',
      'Rifampicina: contraindicada (reduce niveles de voriconazol en >95%).',
      'Sirolimus: CONTRAINDICADO (niveles de sirolimus aumentan x10).',
      'Lavar vía con SF 0.9% antes y después.',
    ],

    alertasSeguridad: [
      '🔴 HEPATOTOXICIDAD — monitorizar transaminasas semanalmente. Suspender si ALT/AST >10× normal.',
      '🔴 INTERACCIONES CYP: sirolimus (contraindicado), rifampicina (contraindicada), fenitoína, warfarina, tacrolimus.',
      '🔴 Infusión <60 min: reacción vasomotora grave (rubor, hipotensión, taquicardia).',
      '🟠 TOXICIDAD VISUAL: fotopsias, visión borrosa (hasta 30% de pacientes) — generalmente reversible.',
      '🟠 TDM (monitorización de niveles) OBLIGATORIA: valle 1-5.5 mcg/mL.',
      '🟡 Fototoxicidad cutánea con exposición solar prolongada — proteger la piel.',
    ],
  },

  modulos: {

    interacciones: `
      <b>Interacciones críticas del Voriconazol:</b><br/>
      <b>CONTRAINDICADAS:</b><br/>
      • <b>Sirolimus:</b> niveles aumentan ×10 → toxicidad grave (nefrotoxicidad, trombocitopenia).<br/>
      • <b>Rifampicina / rifabutina:</b> reducen niveles de voriconazol >95% → ineficacia.<br/>
      • <b>Carbamazepina, fenobarbital:</b> reducen niveles de voriconazol de forma significativa.<br/><br/>
      <b>REQUIEREN AJUSTE DE DOSIS URGENTE:</b><br/>
      • <b>Tacrolimus:</b> reducir dosis de tacrolimus al 33% al inicio de voriconazol. Niveles diarios.<br/>
      • <b>Ciclosporina:</b> reducir dosis de ciclosporina a la mitad. Niveles c/2-3 días.<br/>
      • <b>Warfarina:</b> puede duplicar/triplicar el INR → monitorizar INR diario.<br/>
      • <b>Fenitoína:</b> reducen niveles de voriconazol (aumentar dosis vori) y voriconazol aumenta fenitoína.<br/>
      • <b>Opioides (fentanilo, oximorfona):</b> aumenta niveles, mayor riesgo de depresión respiratoria.<br/><br/>
      <b>REGLA CLAVE: informar siempre al farmacéutico de toda la medicación concomitante.</b>
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Revisar TODA la medicación del paciente antes de la primera dosis — voriconazol interacciona con decenas de fármacos.',
      'Reconstituir el vial con 19 mL de agua para inyección, nunca con SF directamente.',
      'Diluir la dosis final en SF 0.9% a concentración 0.5-5 mg/mL.',
      'Programar infusión mínimo en 60-120 min — NUNCA menos de 60 min.',
      'En trasplantados: avisar al equipo antes de iniciar — los niveles de inmunosupresores se alteran de inmediato.',
      'Comprobar niveles plasmáticos (TDM) a las 72 h — comunicar si valle <1 o >5.5 mcg/mL.',
      'Función hepática semanal durante el primer mes (ALT, AST, bilirrubina).',
      'Si el paciente refiere fotopsias o cambios en la visión: informar al médico (toxicidad visual esperada, generalmente leve).',
      'Conversión a oral en cuanto sea posible — misma eficacia, biodisponibilidad 96% en ayunas.',
      'En uso oral: administrar en ayunas (1 h antes o 2 h después de las comidas) — la comida reduce absorción.',
    ],

    efectosAdversos: [
      '🔴 Hepatotoxicidad (elevación ALT/AST, ictericia) — especialmente uso prolongado',
      '🔴 Reacción vasomotora (rubor, fiebre, hipotensión) con infusión rápida',
      '🟠 Toxicidad visual: fotopsias, visión borrosa, cromatopsia (hasta 30% — reversible)',
      '🟠 Alucinaciones visuales y encefalopatía (niveles >5.5 mcg/mL)',
      '🟠 Fototoxicidad cutánea y carcinoma escamocelular con uso prolongado (>3 años)',
      '🟡 Náuseas, vómitos, diarrea',
      '🟡 Erupción cutánea, prurito',
    ],

    contraindicaciones: [
      'Hipersensibilidad a voriconazol o azoles.',
      'Combinación con sirolimus (contraindicación absoluta).',
      'Combinación con rifampicina, carbamazepina, fenobarbital (inducen metabolismo).',
      'IR grave (ClCr <50 mL/min) para formulación IV con SBECD (usar formulación oral en su lugar).',
      'IH grave (Child-Pugh C) — reducir dosis de mantenimiento a la mitad.',
    ],

    fotosensibilidad: 'Sí — fototoxicidad cutánea con exposición solar. Usar protector solar y ropa protectora. Con uso prolongado (>3 años): riesgo aumentado de carcinoma escamocelular. Vigilar lesiones cutáneas.',

    estabilidad: {
      'Vial sin reconstituir':    'Temperatura ambiente hasta vencimiento',
      'Reconstituido (10 mg/mL)': '24 h a 2-8°C',
      'Diluido en SF 0.9%':       '<b>24 horas a temperatura ambiente</b>',
      'Diluido en SG 5%':         '24 horas a temperatura ambiente',
      'Aspecto':                   'Incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h si se mantiene a 2-8°C tras reconstitución.',
      dosisRestante:     'Desechar sobrante de vial reconstituido si no se usa en 24 h.',
      infusionPreparada: '24 h a temperatura ambiente en SF 0.9% o SG 5%.',
      notas:             'No compatible con bicarbonato en la misma vía. La formulación oral tiene biodisponibilidad ~96% en ayunas. Cambiar a oral en cuanto sea posible.',
    },

    presentaciones: [
      'Vfend® IV 200 mg/vial — polvo para solución para perfusión',
      'Vfend® 50 mg y 200 mg comprimidos recubiertos (uso oral)',
      'Vfend® 40 mg/mL polvo para suspensión oral',
      'Voriconazol Accord® / Pfizer® / Teva® — genéricos',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Carga IV (día 1)',              dosis: '<b>6 mg/kg IV c/12h × 2 dosis</b>',                  via: 'IV' },
      { indicacion: 'Mantenimiento IV',               dosis: '<b>4 mg/kg IV c/12h</b> (mín 3 mg/kg si toxicidad)', via: 'IV' },
      { indicacion: 'Mantenimiento oral (>40 kg)',   dosis: '200-300 mg oral c/12h (en ayunas)',                    via: 'VO' },
      { indicacion: 'Mantenimiento oral (<40 kg)',   dosis: '100-150 mg oral c/12h (en ayunas)',                    via: 'VO' },
      { indicacion: 'IR grave (ClCr <50) — usar oral', dosis: 'No usar formulación IV — cambiar a 200-300 mg c/12h oral', via: 'VO' },
    ],

    embarazo: 'Categoría D (FDA). Teratógeno en animales. Evitar durante el embarazo. Usar anfotericina B liposomal como alternativa si la infección es grave. En casos de vida o muerte: decisión individualizada con consentimiento informado.',

    pediatria: '2-14 años: carga 9 mg/kg c/12h × 2 dosis → mantenimiento 8 mg/kg c/12h (dosis más altas por mayor aclaramiento). >14 años (>50 kg): dosis adulto. TDM especialmente importante en pediatría. Solución oral útil en <3 años.',

    adultoMayor: 'Sin ajuste de dosis por edad. Mayor riesgo de interacciones por polifarmacia. Vigilar función hepática y renal. TDM especialmente recomendada.',

    insufRenal: '<b>IV con SBECD: CONTRAINDICADA si ClCr <50 mL/min</b> (acumulación del excipiente nefrotóxico). Usar FORMULACIÓN ORAL (200-300 mg c/12h) — misma eficacia, sin SBECD.',

    insufHepatica: 'IH leve-moderada (Child-Pugh A-B): misma dosis de carga → reducir mantenimiento a la mitad. IH grave (Child-Pugh C): contraindicado el uso rutinario — solo si no hay alternativa, monitorización estricta.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Vfend® (voriconazol).',
      'Patterson TF et al. Practice Guidelines for the Diagnosis and Management of Aspergillosis. IDSA. Clin Infect Dis. 2016 (Updated 2020).',
      'Herbrecht R et al. Voriconazole vs amphotericin B for primary therapy of invasive aspergillosis. NEJM. 2002.',
      'Pappas PG et al. Clinical Practice Guideline for the Management of Candidiasis. IDSA. Clin Infect Dis. 2016.',
      'ESCMID/ECMM/ERS Guidelines on Aspergillosis. Clin Microbiol Infect. 2018.',
      'Dolton MJ et al. Voriconazole pharmacokinetics and exposure-response relationships. J Antimicrob Chemother. 2012.',
    ],
  },

});
