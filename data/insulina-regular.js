/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/insulina-regular.js
   Fuentes: DailyMed/FDA, ADA Standards of Care 2024,
   Micromedex, ISMP, Guías ALAD, OPS/OMS
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'insulina-regular',
  nombre:         'Insulina Regular',
  nombreGenerico: 'Insulina Humana Regular (Cristalina)',
  categoria:      'insulinas',
  tags:           ['UCI', 'diabetes', 'CAD', 'hiperglucemia', 'alto riesgo', 'hipoglucemia', 'infusión continua'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Medicamento de alto riesgo ISMP. Errores en la dosis pueden causar hipoglucemia grave, daño neurológico permanente o muerte. Requiere doble verificación independiente antes de cada administración.',

  /* ═══════════════════════════════════════════
     NIVEL 1 — VISTA RÁPIDA
  ═══════════════════════════════════════════ */
  nivel1: {

    puntosClave: [
      'Medicamento de ALTO RIESGO según ISMP — doble verificación independiente OBLIGATORIA antes de cada dosis.',
      'La insulina regular es la ÚNICA insulina que puede administrarse por vía IV (en infusión continua o bolo).',
      'Monitorizar glucemia cada hora durante infusión IV continua, cada 15–30 min si hay hipoglucemia.',
      'Objetivo glucémico en UCI: 140–180 mg/dL (ADA/AACE 2024) — evitar hipoglucemia < 70 mg/dL.',
      'Nunca confundir con insulinas de acción prolongada (glargina, detemir) — son de aspecto similar.',
    ],

    resumenRapido: 'Insulina de acción corta idéntica a la insulina humana endógena. Única insulina apta para uso IV. Indicada en cetoacidosis diabética (CAD), estado hiperosmolar hiperglucémico (EHH), hiperglucemia en UCI, hiperpotasemia grave (con dextrosa) y como terapia basal-bolo subcutánea.',

    objetivoTerapeutico: 'Control glucémico · Corrección de CAD/EHH · Tratamiento de hiperpotasemia · Glucemia 140–180 mg/dL en UCI · < 180 mg/dL en hospitalización general',

    preparacion: {
      'Presentación':          'Frasco vial 10 mL · 100 UI/mL (U-100) · Cartucho 3 mL · Plumas precargadas',
      'Vía IV — Infusión std': '100 UI en 100 mL SF 0.9% → <b>1 UI/mL</b>',
      'Vía IV — Bolo directo': 'Sin diluir de la jeringa · Concentración 100 UI/mL · Verificar dosis con cuidado extremo',
      'Vía SC':                'Sin diluir · Jeringa de insulina U-100 o pluma · Ángulo 45–90°',
      'Vía IM':                'Solo en emergencia sin acceso IV/SC · No es vía habitual',
      'Diluyente IV':          'SF 0.9% únicamente (SG 5% no recomendado para infusión continua)',
      'Adsorción':             '⚠ La insulina se adsorbe al plástico de las bolsas y tubuladuras — purgar el equipo con 20–50 mL antes de conectar al paciente',
      'Bomba':                 'Bomba de infusión volumétrica — obligatoria para infusión IV continua',
      'Jeringa':               'Usar SIEMPRE jeringas de insulina graduadas en UI — nunca jeringas de mL estándar',
      'Temperatura':           'Sacar de refrigeración 30 min antes de uso SC para evitar lipodistrofia',
    },

    vigilancia: {
      antes: [
        'Verificar glucemia capilar antes de cada dosis SC y antes de iniciar infusión IV.',
        'Confirmar tipo de insulina: Regular (cristalina, transparente) — NO confundir con insulina NPH (turbia).',
        'Comprobar fecha de vencimiento y aspecto: debe ser transparente, incolora, sin partículas.',
        'Doble verificación independiente: tipo de insulina, dosis en UI, vía de administración.',
        'Verificar que la jeringa sea de insulina (graduada en UI) — NUNCA usar jeringa de mL.',
        'Confirmar acceso venoso permeable si es vía IV.',
        'Revisar última glucemia y tendencia (subiendo, estable, bajando).',
        'Confirmar que hay dextrosa disponible para tratamiento de hipoglucemia.',
      ],
      durante: [
        'Infusión IV continua: glucemia cada hora — ajustar velocidad según protocolo.',
        'Glucemia < 100 mg/dL durante infusión: reducir velocidad o suspender según protocolo.',
        'Vigilar signos de hipoglucemia: diaforesis, taquicardia, temblor, confusión, pérdida de consciencia.',
        'Monitorizar potasio sérico durante tratamiento de CAD (hipopotasemia frecuente).',
        'Registrar cada modificación de velocidad de infusión con hora y glucemia correspondiente.',
        'En infusión continua: verificar permeabilidad de la vía y conexiones cada hora.',
      ],
      despues: [
        'Glucemia post-dosis SC: controlar a los 60–90 min.',
        'Glucemia post-bolo IV: controlar a los 15–30 min.',
        'Al suspender infusión continua: no suspender bruscamente en CAD — asegurar traslape con insulina SC.',
        'Registrar dosis total administrada en el turno.',
        'Documentar respuesta glucémica y ajustes realizados.',
        'Inspeccionar sitios de inyección SC — rotar zonas según esquema institucional.',
      ],
      suspender: [
        'Glucemia < 70 mg/dL — hipoglucemia confirmada: suspender y tratar de inmediato.',
        'Glucemia < 100 mg/dL en infusión IV: reducir o suspender según protocolo.',
        'Signos de hipoglucemia grave: convulsiones, pérdida de consciencia, Glasgow < 13.',
        'Prescripción médica de cambio de esquema o suspensión.',
        'Resolución de CAD: pH > 7.3, bicarbonato > 18, brecha aniónica normal, paciente tolera vía oral.',
      ],
    },

    incompatibilidades: [
      'Aminofilina — incompatibilidad documentada en misma solución.',
      'Dobutamina — incompatibilidad física.',
      'Bicarbonato de sodio — incompatibilidad, puede causar degradación.',
      'Noradrenalina/adrenalina — incompatibilidad en misma línea.',
      'Soluciones con pH muy alcalino — degradación de la insulina.',
      'Protamina — antagoniza el efecto de la insulina (no mezclar).',
      'Compatible con SF 0.9% y SG 5% para dilución (SG5% solo en situaciones específicas).',
    ],

    alertasSeguridad: [
      'NUNCA administrar insulina sin glucemia previa verificada — la hipoglucemia puede ser fatal.',
      'NUNCA usar jeringa de mL estándar para medir insulina — 1 mL ≠ 1 UI. Siempre jeringas de insulina en UI.',
      'La insulina regular IV tiene inicio de acción en 15–30 min y duración 2–4 horas — ajustar frecuencia de monitorización.',
      'En CAD: NO suspender la insulina IV hasta confirmar resolución bioquímica y traslape con insulina SC.',
      'Todos los viales de insulina (Regular, NPH, Glargina) tienen aspecto similar — verificar etiqueta 3 veces.',
      'La hipoglucemia nocturna es especialmente peligrosa — ajustar dosis vespertina/nocturna con precaución.',
    ],
  },

  /* ═══════════════════════════════════════════
     MÓDULOS DINÁMICOS
  ═══════════════════════════════════════════ */
  modulos: {

    hipoglucemia: `
      <b>Protocolo de hipoglucemia:</b><br/><br/>
      <b>Glucemia 54–70 mg/dL (sintomático o asintomático):</b><br/>
      • Paciente consciente y con vía oral: 15–20 g de carbohidratos de acción rápida (jugo, glucosa oral).<br/>
      • Paciente sin vía oral: <b>Dextrosa al 50% — 25–50 mL IV</b> (12.5–25 g dextrosa).<br/>
      • Controlar glucemia a los 15 min — repetir si persiste < 70 mg/dL.<br/><br/>
      <b>Glucemia < 54 mg/dL (hipoglucemia grave):</b><br/>
      • <b>Dextrosa 50% — 50 mL IV en bolo</b> inmediato.<br/>
      • Notificar al médico de inmediato.<br/>
      • Si no hay acceso IV: <b>Glucagón 1 mg IM o SC</b>.<br/>
      • Monitorizar glucemia cada 15 min hasta ≥ 100 mg/dL.<br/>
      • Iniciar infusión de mantenimiento con dextrosa si es necesario.<br/><br/>
      <b>Documentar:</b> glucemia, hora, síntomas, tratamiento, respuesta y notificación médica.
    `,

    cardio: `
      <b>Insulina + Dextrosa en hiperpotasemia:</b><br/>
      • Indicado en K⁺ > 6.0–6.5 mEq/L con cambios en ECG.<br/>
      • Protocolo habitual: <b>Insulina Regular 10 UI IV</b> + <b>Dextrosa 50% 50 mL IV</b> simultáneos.<br/>
      • Inicio de acción sobre el potasio: 15–30 min · Duración: 2–6 horas.<br/>
      • Reduce el potasio sérico en 0.5–1.5 mEq/L temporalmente (redistribución intracelular).<br/>
      • Monitorizar glucemia cada 30 min durante 4–6 horas post-administración.<br/>
      • No es tratamiento definitivo — requiere medidas de eliminación de potasio.
    `,
  },

  /* ═══════════════════════════════════════════
     NIVEL 2 — VER MÁS
  ═══════════════════════════════════════════ */
  nivel2: {

    cuidadosEnfermeria: [
      'Rotar siempre los sitios de inyección SC: abdomen (mayor absorción), muslos, brazos, glúteos — documentar zona utilizada.',
      'El abdomen tiene absorción más rápida y predecible — preferido para insulina regular.',
      'No inyectar en zonas con lipodistrofia, induración, hematoma o edema.',
      'Purgar el tubo de infusión IV con 20–50 mL de la solución de insulina antes de conectar al paciente.',
      'Etiqueta obligatoria en la bolsa/jeringa: tipo de insulina, concentración en UI/mL, fecha, hora, preparador.',
      'En protocolos de CAD: registrar glucemia horaria, electrolitos c/2–4h, gasometría c/2–4h.',
      'El frasco de insulina abierto puede mantenerse a temperatura ambiente hasta 28 días.',
      'Nunca mezclar insulina regular con glargina o detemir en la misma jeringa.',
      'En bombas de insulina subcutánea (CSII): solo usar insulina de acción ultrarrápida (lispro, aspart) — la Regular también es compatible en algunos protocolos.',
    ],

    efectosAdversos: [
      '🔴 Hipoglucemia grave — pérdida de consciencia, convulsiones, daño neurológico, muerte',
      '🔴 Hipopotasemia — especialmente durante tratamiento de CAD',
      '🟠 Hipoglucemia moderada — diaforesis, taquicardia, temblor, confusión',
      '🟠 Lipodistrofia en sitios de inyección SC (por falta de rotación)',
      '🟠 Edema por insulina (inicio de tratamiento en diabetes descompensada)',
      '🟡 Reacción local en sitio de inyección: eritema, prurito, induración',
      '🟡 Aumento de peso con uso prolongado',
      '🟡 Visión borrosa transitoria al inicio del tratamiento',
      '🟡 Hipersensibilidad local (rara con insulina humana)',
      '🟡 Anafilaxia (muy rara)',
    ],

    contraindicaciones: [
      'Hipoglucemia activa — contraindicación absoluta.',
      'Hipersensibilidad conocida a la insulina humana o a cualquier excipiente.',
      'No existe contraindicación absoluta adicional en pacientes con hiperglucemia que requieren tratamiento.',
    ],

    fotosensibilidad: 'No requiere protección de la luz durante la administración. Sin embargo, el vial debe protegerse de la luz solar directa y del calor excesivo para preservar la potencia. No congelar — la congelación destruye la actividad biológica.',

    estabilidad: {
      'Vial sin abrir':              'Hasta fecha de vencimiento en refrigeración (2–8°C)',
      'Vial abierto':                '28 días a temperatura ambiente (15–25°C) · No refrigerar una vez abierto (puede causar lipodistrofia)',
      'Infusión IV preparada':       '24 horas a temperatura ambiente en SF 0.9%',
      'Jeringa precargada (SC)':     '24–48 horas en refrigeración vertical con aguja hacia arriba',
      'Temperatura':                 'NO congelar · NO exponer a temperaturas > 30°C · NO agitar',
      'Aspecto':                     'Transparente, incolora, sin partículas — desechar si hay turbidez o color',
    },

    presentaciones: [
      'Insulina Regular Humana 100 UI/mL — vial 10 mL (1000 UI total)',
      'Insulina Regular Humana 100 UI/mL — cartucho 3 mL (300 UI)',
      'Humulin R® 100 UI/mL — vial 10 mL',
      'Actrapid® 100 UI/mL — vial 10 mL y cartucho 3 mL',
      'Insulina Regular 500 UI/mL (U-500) — solo para pacientes con resistencia severa, uso especializado',
    ],
  },

  /* ═══════════════════════════════════════════
     NIVEL 3 — INFORMACIÓN AVANZADA
  ═══════════════════════════════════════════ */
  nivel3: {

    dosis: [
      { indicacion: 'Infusión IV continua UCI (inicio)',      dosis: '0.1 UI/kg/h',              via: 'IV' },
      { indicacion: 'CAD — bolo inicial',                    dosis: '0.1 UI/kg bolo IV',         via: 'IV' },
      { indicacion: 'CAD — infusión continua',               dosis: '0.1 UI/kg/h',               via: 'IV' },
      { indicacion: 'EHH — infusión continua',               dosis: '0.05–0.1 UI/kg/h',          via: 'IV' },
      { indicacion: 'Hiperpotasemia',                        dosis: '10 UI + Dextrosa 50% 50 mL', via: 'IV' },
      { indicacion: 'Corrección SC (escala móvil)',          dosis: 'Según protocolo institucional', via: 'SC' },
      { indicacion: 'Nutrición parenteral total',            dosis: '1 UI por cada 10 g dextrosa', via: 'IV' },
    ],

    embarazo: 'La insulina humana regular es el tratamiento de elección para diabetes en el embarazo. No cruza la barrera placentaria en cantidades significativas. Las necesidades de insulina aumentan progresivamente durante el embarazo (especialmente 2do y 3er trimestre). Monitorización glucémica intensiva obligatoria. Objetivo: glucemia preprandial 70–95 mg/dL, postprandial 1h < 140 mg/dL. Compatible con lactancia materna.',

    pediatria: 'CAD pediátrica: bolo 0.1 UI/kg IV, luego infusión 0.05–0.1 UI/kg/h. En niños < 5 años o con hipoglucemia frecuente: iniciar con 0.05 UI/kg/h. Monitorización glucémica cada 30–60 min. Vigilar potasio estrechamente. No administrar bolo inicial si K⁺ < 3.5 mEq/L. Objetivos glucémicos: 150–250 mg/dL en fase inicial de CAD.',

    adultoMayor: 'Mayor riesgo de hipoglucemia por reducción del clearance renal, disminución de la respuesta hormonal contrarreguladora y alimentación irregular. Objetivos glucémicos más permisivos: 140–200 mg/dL. Monitorización más frecuente. Precaución con escalas móviles agresivas. Considerar reducción de dosis del 25–50% respecto al adulto joven.',

    insufRenal: 'La insuficiencia renal prolonga la vida media de la insulina (el riñón degrada un 25–40% de la insulina circulante). Mayor riesgo de hipoglucemia. Reducir dosis en IRT: iniciar con 25–50% de la dosis habitual. Monitorizar glucemia más frecuentemente. En hemodiálisis: la glucemia puede aumentar por la dextrosa del dializante o disminuir post-sesión.',

    insufHepatica: 'El hígado es el principal órgano de degradación de la insulina. En insuficiencia hepática grave, la vida media de la insulina se prolonga significativamente. Mayor sensibilidad a la insulina y riesgo de hipoglucemia. Reducir dosis e intensificar monitorización. En cirrosis: vigilar también hipoglucemia espontánea.',
  },

  /* ═══════════════════════════════════════════
     NIVEL 4 — EVIDENCIA CIENTÍFICA
  ═══════════════════════════════════════════ */
  nivel4: {
    referencias: [
      'American Diabetes Association. Standards of Medical Care in Diabetes 2024. Diabetes Care. 2024;47(Suppl 1):S1-S321.',
      'ISMP. High-Alert Medications in Acute Care Settings. Institute for Safe Medication Practices. 2023. https://www.ismp.org',
      'DailyMed. Insulin Human Regular Injection. U.S. National Library of Medicine. Consultado 2024. https://dailymed.nlm.nih.gov',
      'Kitabchi AE, et al. Hyperglycemic Crises in Adult Patients With Diabetes. Diabetes Care. 2009;32(7):1335-1343.',
      'Moghissi ES, et al. AACE/ADA Consensus Statement on Inpatient Glycemic Control. Endocr Pract. 2009;15(4):353-369.',
      'ALAD. Guías ALAD sobre el Diagnóstico, Control y Tratamiento de la Diabetes Mellitus Tipo 2 con Medicina Basada en Evidencia. Rev ALAD. 2019.',
      'OPS/OMS. Insulina — Medicamento esencial. Lista Modelo de Medicamentos Esenciales OMS. 23a edición. 2023.',
    ],
  },

});
