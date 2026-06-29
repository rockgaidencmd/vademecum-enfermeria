/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/tramadol.js
   Fuentes: FDA NDA 2022, CIMA AEMPS, MSF Guidelines,
   Pharmamedix, Prospecto Tramadol Normon, Micromedex
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'tramadol',
  nombre:         'Tramadol',
  nombreGenerico: 'Tramadol Hydrochloride',
  categoria:      'analgesia',
  tags:           ['UCI', 'analgesia', 'opiode', 'dolor moderado-severo', 'postoperatorio'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  /* ═══════════════════════════════════════════
     NIVEL 1 — VISTA RÁPIDA
  ═══════════════════════════════════════════ */
  nivel1: {

    puntosClave: [
      'Opiode de acción mixta — agonista μ-opiáceo + inhibidor de recaptación de noradrenalina y serotonina.',
      'Administrar siempre en infusión IV lenta de 20–30 minutos — NUNCA bolo directo sin diluir (mayor incidencia de náuseas y convulsiones).',
      'Riesgo de convulsiones: contraindicado en epilepsia, trauma craneal, meningitis — aumenta con dosis > 400 mg/día.',
      'Depresión respiratoria posible, especialmente si se combina con otros opioides o sedantes.',
      'Estreñimiento muy frecuente (>50%) — iniciar profilaxis con laxantes suavizantes.',
    ],

    resumenRapido: 'Analgésico opiode sintético de acción central para dolor moderado a severo. Mecanismo dual: agonismo en receptores μ-opiáceos y bloqueo de recaptación de monoaminas (noradrenalina, serotonina). Indicado en dolor postoperatorio, trauma, cáncer y neuropático. Inicio de acción rápido (minutos), duración 4–6 horas.',

    objetivoTerapeutico: 'Analgesia en dolor moderado a severo · Control del dolor postoperatorio · Manejo de dolor traumático agudo · Escala EVA/EVN objetivo < 4/10',

    preparacion: {
      'Presentación':             '100 mg/2 mL ampolla (50 mg/mL)',
      'Diluyente':                'SF 0.9% (preferido) · Agua para inyección',
      'Dilución estándar':        '<b>100 mg en 50–100 mL SF → 1–2 mg/mL</b>',
      'Ejemplo preparación':      '100 mg + 50 mL SF = 2 mg/mL (concentración máxima recomendada)',
      'Concentración alternativa':'100 mg + 100 mL SF = 1 mg/mL (mejor tolerancia)',
      'Vía':                      'IV infusión lenta OBLIGATORIA · NO inyección IV directa',
      '⏱️ TIEMPO INFUSIÓN':       '<b>20–30 MINUTOS recomendado (PREFERIDO)</b>',
      'Velocidad infusión':       '2–3 minutos solo en emergencia extrema (mayor riesgo de reacciones)',
      'Bomba':                    'Bomba de infusión volumétrica recomendada',
      'Filtro':                   'No requerido',
      '🧊 Estabilidad temp.amb.': '<b>24 horas a 15–25°C en bomba IV (SF 0.9%)</b>',
      '🧊 Estabilidad refrigeración': '<b>24 horas en refrigeración 2–8°C</b> (usar dentro de 24h de preparar)',
      '⚠️ Consideración':         'Desde punto de vista microbiológico, usar de inmediato si posible. Máximo 24h refrigerado antes de iniciar.',
      'Aspecto':                  'Solución transparente, incolora a levemente amarillenta — desechar si turbidez o cambio de color',
    },

    vigilancia: {
      antes: [
        'Verificar alergias previas a tramadol u otros opioides.',
        'Evaluar función respiratoria basal — FR, SpO₂, patrón respiratorio.',
        'Revisar antecedente de epilepsia, trauma craneal, meningitis — RIESGO CRÍTICO de convulsiones.',
        'Comprobar uso concomitante de otros opioides, sedantes, inhibidores MAO (CONTRAINDICADO).',
        'Registrar peso corporal para cálculo de dosis.',
        'Confirmar acceso venoso permeable y de buen calibre.',
        'Doble verificación: ampolla, dosis 100 mg, dilución, tiempo infusión.',
      ],
      durante: [
        'Monitorizar frecuencia respiratoria cada 5–10 min durante infusión — OBJETIVO FR ≥ 12 rpm.',
        'Vigilar SpO₂ continua — ALERTA si SpO₂ < 94%.',
        'Controlar PA y FC cada 10 min inicialmente — evaluar bradicardia/hipotensión.',
        'Observar nivel de consciencia — somnolencia es esperada, confusión NO.',
        'Vigilar sitio de infusión — flebitis o extravasación rara pero posible.',
        'Estar atento a CONVULSIONES (raro pero reportado) — más si >400 mg/día o en epilépticos.',
        'Evaluar náuseas/vómitos — pueden aparecer en primeros 30 min.',
      ],
      despues: [
        'Continuar monitorización respiratoria 30–60 min post-infusión.',
        'Evaluar analgesia con escala EVA/EVN — objetivo < 4/10.',
        'Registrar todos los parámetros: FR, SpO₂, PA, FC, nivel consciencia.',
        'Documentar presencia/ausencia de efectos secundarios.',
        '⚠️ INICIAR PROFILAXIS DE ESTREÑIMIENTO inmediatamente (muy frecuente con opioides).',
        'Verificar presencia de micro durante 24–48h post-administración.',
        'Reevaluar dolor antes de dosis siguiente (c/4–6 horas).',
      ],
      suspender: [
        'Frecuencia respiratoria < 12 lpm (depresión respiratoria grave).',
        'SpO₂ < 90% sin reversión con O₂ suplementario.',
        'Convulsiones confirmadas.',
        'Alteración severa del nivel de consciencia (Glasgow ≤ 10).',
        'Hipotensión severa (PAS < 90 mmHg) refractaria a fluidos.',
        'Prescripción médica de suspensión o cambio de analgésico.',
        'Resolución del dolor — cambiar a analgésico de menor potencia.',
      ],
    },

    incompatibilidades: [
      'OPIOIDES combinados (morfina, codeína) — riesgo de depresión respiratoria aditiva, depresión severa del SNC.',
      'INHIBIDORES MAO — aumento severo del riesgo de síndrome serotoninérgico, convulsiones, coma.',
      'SEDANTES/BENZODIACEPINAS (diazepam, midazolam) — depresión respiratoria potenciada.',
      'ALCOHOL — potencia depresión del SNC y respiratoria.',
      'ANTIDEPRESIVOS SEROTONINÉRGICOS (fluoxetina, paroxetina, clomipramina) — riesgo síndrome serotoninérgico.',
      'Ondansetrón (Zofran) — documentado, puede reducir efectividad analgésica.',
      'Carbamazepina, fenitoína — inducen metabolismo, reducen niveles de tramadol.',
      'Consultar tabla de compatibilidad institucional antes de mezclar con otros fármacos en la misma línea.',
    ],

    alertasSeguridad: [
      '🔴 NUNCA administrar en bolo IV directo sin diluir — causa náuseas severas, vómitos, y ↑ riesgo de convulsiones.',
      '🔴 RIESGO DE CONVULSIONES especialmente en epilepsia, trauma craneal, meningitis, dosis > 400 mg/día.',
      '🟠 Depresión respiratoria potencial — vigilancia estricta si comorbilidad pulmonar (EPOC, asma).',
      '🟠 En ancianos y con insuficiencia hepática/renal: REDUCIR DOSIS al 50% — riesgo de acumulación.',
      '🟡 Estreñimiento muy frecuente (>50%) — iniciar profilaxis simultáneamente, no esperar a que ocurra.',
      '🟡 Potencial de abuso/dependencia — vigilar en pacientes con antecedente de SUD (trastorno por uso de sustancias).',
    ],
  },

  /* ═══════════════════════════════════════════
     MÓDULOS DINÁMICOS
  ═══════════════════════════════════════════ */
  modulos: {

    respiratorio: `
      <b>Monitorización respiratoria obligatoria:</b><br/>
      • FR continua — OBJETIVO ≥ 12 rpm durante infusión.<br/>
      • SpO₂ continua — ALERTA si < 94%, ACCIÓN si < 90%.<br/>
      • Patrón respiratorio — vigilar apneas o respiración superficial.<br/>
      • Capnografía recomendada si sedación profunda (Glasgow < 13) o comorbilidad pulmonar.<br/><br/>
      <b>Si depresión respiratoria:</b><br/>
      1. Estimular al paciente verbalmente y físicamente.<br/>
      2. Posición semiincorporada (30–45°).<br/>
      3. O₂ suplementario si SpO₂ < 94%.<br/>
      4. Preparar naloxona 0.4 mg IV (antagonista de opioides) — dosis c/2–3 min si no respuesta.<br/>
      5. Notificar al médico de inmediato.
    `,

    cardio: `
      <b>Monitorización cardiovascular:</b><br/>
      • PA basal y c/10 min durante infusión — vigilar hipotensión (>20% reducción).<br/>
      • FC cada 10 min — ALERTA si FC < 50 lpm (bradicardia opiácea).<br/>
      • ECG si edad > 60 años o cardiopatía previa.<br/>
      • Evaluar ortostasis al levantarse (mareo, caída de PA).<br/><br/>
      <b>Si hipotensión severa (PAS < 90 mmHg):</b><br/>
      • Acostarse, elevar extremidades inferiores.<br/>
      • Fluidos IV (SF 500 mL rápido).<br/>
      • Si no responde: consultar médico para vasopresores.
    `,

    neuro: `
      <b>Vigilancia neurológica — CRÍTICA:</b><br/>
      • Glasgow cada 15 min durante infusión — alerta si Glasgow < 13.<br/>
      • Pupilas: vigilar miosis (pupilas pequeñas = signo de opioidización).<br/>
      • Convulsiones: estar alerta especialmente si antecedente de epilepsia.<br/>
        - Si convulsión: posición de seguridad, proteger de trauma, llamar médico.<br/>
        - Medicación anticonvulsivante disponible (diazepam 5–10 mg IV).<br/>
      • Confusión/desorientación: NO es normal — reportar inmediatamente.<br/>
      • Nivel de consciencia: escala AVDI (alerta, verbal, dolor, inconsciente).
    `,
  },

  /* ═══════════════════════════════════════════
     NIVEL 2 — VER MÁS
  ═══════════════════════════════════════════ */
  nivel2: {

    cuidadosEnfermeria: [
      'Etiquetar ampolla Y bolsa de infusión con: nombre del fármaco, dosis (100 mg), concentración (50 mg/mL y final 1–2 mg/mL), fecha/hora preparación, iniciales.',
      'Usar vena de buen calibre — preferir acceso central si múltiples dosis o plan de analgesia prolongada.',
      'Infundir lentamente en 20–30 min — usar bomba de infusión, NO por gravedad.',
      'Cambiar sitio IV periférico cada 72h para prevenir flebitis.',
      'Monitorizar continuamente durante infusión — no abandonar la cama del paciente.',
      'Elevar cabecera 30–45° para facilitar respiración y prevenir aspiración.',
      'Tener naloxona (antagonista opiáceo) disponible al lado de la cama.',
      'INICIAR PROFILAXIS DE ESTREÑIMIENTO al mismo tiempo: bisacodilo, lactulosa o sulfato de magnesio.',
      'Registrar escala de dolor PRE y POST infusión en gráfica de enfermería.',
      'Comunicar al médico cualquier efecto adverso — convulsiones, depresión respiratoria, hipotensión.',
    ],

    efectosAdversos: [
      '🔴 Depresión respiratoria — especialmente si comorbilidad pulmonar o asociación con opioides',
      '🔴 Convulsiones — raro pero grave, ↑ riesgo en epilepsia, trauma craneal, dosis > 400 mg/día',
      '🟠 Náuseas y vómitos — 10–15% de pacientes (premeditar con ondansetrón si riesgo alto)',
      '🟠 Hipotensión — reducción de PA especialmente en primeros 15 min',
      '🟠 Bradicardia — FC < 50 lpm en pacientes sensibles',
      '🟠 Mareos y vértigo — muy frecuente, riesgo de caídas',
      '🟡 Estreñimiento — MUY FRECUENTE (>50%), profilaxis obligatoria',
      '🟡 Somnolencia / sedación — esperado, monitorizar nivel',
      '🟡 Confusión / desorientación — si ocurre, reportar inmediatamente',
      '🟡 Prurito — poco frecuente pero molesto',
      '🟡 Taquicardia compensatoria',
      '🟡 Síndrome serotoninérgico — si asociación con ISRS (fiebre, rigidez, agitación)',
    ],

    contraindicaciones: [
      'Epilepsia activa o antecedente de crisis convulsivas (CONTRAINDICACIÓN RELATIVA — riesgo muy elevado).',
      'Trauma craneal reciente o aumento de presión intracraneal.',
      'Meningitis bacteriana o viral activa.',
      'Insuficiencia respiratoria severa (EPOC Gold III–IV, apnea del sueño grave).',
      'Alergia conocida a tramadol o a componentes de la formulación.',
      'Intoxicación aguda por alcohol o drogas.',
      'Hipersensibilidad conocida a opioides.',
      'Uso concomitante de inhibidores MAO (CONTRAINDICACIÓN ABSOLUTA).',
    ],

    fotosensibilidad: 'No se describe fotosensibilidad clínicamente relevante con tramadol. No requiere protección especial de la luz durante la administración normal hospitalaria.',

    estabilidad: {
      'Ampolla sin abrir':           'Temperatura ambiente (15–25°C) hasta fecha de vencimiento',
      'Preparado en bomba IV (SF)':  '<b>24 horas a 15–25°C (temperatura ambiente)</b>',
      'Preparado refrigerado (2–8°C)':'<b>24 horas máximo</b> — desde punto de vista microbiológico, usar de inmediato si posible',
      'Temperatura':                 'NO congelar · Mantener 15–25°C durante infusión',
      'Aspecto':                     'Solución transparente, incolora a ligeramente amarillenta — desechar si turbidez, precipitado o cambio de color',
      'Nota importante':             'Microbiológicamente, usar de inmediato tras preparación. Si debe guardarse refrigerado, máximo 24h antes de infundir.',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato. Desechar sobrante.',
      dosisRestante:    'No conservar. Desechar inmediatamente.',
      infusionPreparada:'24 h a temperatura ambiente en SF 0.9% o SG 5%.',
      notas:            'Compatible en la misma perfusión con metamizol, metoclopramida y ondansetrón. Incompatible con diazepam y diclofenac. Proteger de la luz.',
    },

    presentaciones: [
      'Tramadol Clorhidrato 100 mg/2 mL solución inyectable — ampolla 2 mL',
      'Tramadol Clorhidrato 50 mg/1 mL solución inyectable — ampolla 1 mL (menos frecuente en UCI)',
      'Tramadol Normon® 100 mg/2 mL — ampolla 2 mL (Laboratorios Normon)',
      'Tramadol Krka® 50 mg/1 mL — ampolla 1 mL (disponible en varios países)',
      'Tramadol Andromaco® 100 mg/2 mL — ampolla 2 mL',
      'Genéricos disponibles en la mayoría de países de Latinoamérica y España',
    ],
  },

  /* ═══════════════════════════════════════════
     NIVEL 3 — INFORMACIÓN AVANZADA
  ═══════════════════════════════════════════ */
  nivel3: {

    dosis: [
      { indicacion: 'Dolor postoperatorio (bolo inicial)',    dosis: '100 mg IV lento (2–3 min)',     via: 'IV' },
      { indicacion: 'Mantenimiento (dolor moderado)',         dosis: '50–100 mg c/4–6 horas',        via: 'IV' },
      { indicacion: 'Infusión continua (dolor severo)',       dosis: '100 mg en 50–100 mL c/4–6h',   via: 'IV' },
      { indicacion: 'Dosis máxima diaria recomendada',        dosis: '400 mg/día',                    via: 'IV/VO' },
      { indicacion: 'Dosis máxima POR INFUSIÓN',              dosis: '100 mg',                        via: 'IV' },
      { indicacion: 'Intervalo mínimo entre dosis',           dosis: '4–6 horas',                     via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Tramadol cruza la barrera placentaria. Datos limitados en humanos. Usar solo si beneficio materno supera claramente el riesgo. En tercera trimestre, riesgo de síndrome de abstinencia neonatal si uso prolongado. Compatible con lactancia en pequeñas cantidades — evaluar riesgo/beneficio.',

    pediatria: 'Contraindicado en menores de 12 años por riesgo aumentado de convulsiones y depresión respiratoria. Mayores de 12 años: calcular dosis según peso (no superar dosis de adulto). Vigilancia respiratoria estricta en adolescentes.',

    adultoMayor: 'Mayor riesgo de depresión respiratoria, hipotensión, confusión. REDUCIR DOSIS al 50% en mayores de 65 años o con comorbilidades. Intervalos entre dosis: cada 12h en lugar de cada 4–6h. Monitorización respiratoria intensiva.',

    insufRenal: 'En IRC severa (CrCl < 30 mL/min): REDUCIR DOSIS 50% e INCREMENTAR INTERVALO a c/12h. El tramadol y sus metabolitos se acumulan. En diálisis: administrar tras sesión. Monitorizar signos de toxicidad: confusión, convulsiones.',

    insufHepatica: 'En insuficiencia hepática severa (Child-Pugh C): REDUCIR DOSIS 50% e INCREMENTAR INTERVALO a c/12h. El hígado es responsable del metabolismo y eliminación. Riesgo de acumulación y toxicidad aumentado.',
  },

  /* ═══════════════════════════════════════════
     NIVEL 4 — EVIDENCIA CIENTÍFICA
  ═══════════════════════════════════════════ */
  nivel4: {
    referencias: [
      'FDA NDA 2022. Tramadol Hydrochloride 50 mg IV Infusion. New Drug Application. Avenue Therapeutics, Inc.',
      'CIMA AEMPS. Ficha Técnica Tramadol Krka 50 mg/1 mL Solución Inyectable y para Perfusión. Agencia Española de Medicamentos y Productos Sanitarios.',
      'MSF Guidelines. Tramadol inyectable. Médicos Sin Fronteras — Manejo del dolor en emergencias humanitarias.',
      'Pharmamedix.com. Tramadol — Indicaciones, dosis, farmacocinética. Base de datos de medicamentos.',
      'Prospecto Tramadol Normon 100 mg/2 mL Solución Inyectable y para Perfusión. Laboratorios Normon, S.A.',
      'Prospecto Tramadol Andromaco 100 mg/2 mL Solución Inyectable y para Perfusión. Andrómaco Pharma, S.L.',
      'Micromedex Solutions. Tramadol Hydrochloride (Injectable). Accessed 2024.',
      'MedlinePlus. Tramadol (Systemic). U.S. National Library of Medicine. NIH.',
    ],
  },

});
