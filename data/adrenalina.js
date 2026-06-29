/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/adrenalina.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'adrenalina',
  nombre:         'Adrenalina',
  nombreGenerico: 'Epinephrine (Adrenaline)',
  categoria:      'vasopresores',
  tags:           ['UCI', 'emergencia', 'anafilaxia', 'paro cardíaco', 'shock', 'broncoespasmo'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Medicamento de emergencia vital. Errores de dilución y vía causan eventos catastróficos. NUNCA confundir presentaciones 1:1000 (IM) con 1:10,000 (IV). Requiere monitorización cardíaca continua.',

  nivel1: {

    puntosClave: [
      'Catecolamina endógena — agonista α y β adrenérgico potente. Efecto α (vasoconstricción), β1 (inotropismo, cronotropismo), β2 (broncodilatación).',
      '⚠️ DOS CONCENTRACIONES — confusión = MUERTE. 1:1000 (1 mg/mL) IM. 1:10,000 (0.1 mg/mL) IV.',
      'Anafilaxia: SIEMPRE ADRENALINA PRIMERO IM, no corticoides. Dosis: 0.3-0.5 mg IM (1:1000) en muslo lateral.',
      'Paro cardíaco: 1 mg IV bolo (1:10,000) c/3-5 min según algoritmo ACLS.',
      'Extravasación IV de adrenalina = NECROSIS — antídoto: fentolamina 5-10 mg SC en zona.',
    ],

    resumenRapido: 'Catecolamina endógena con acción agonista α y β adrenérgica. Vasoconstrictor potente, inotrópico positivo, broncodilatador. Medicamento de emergencia vital. Indicado en anafilaxia, paro cardíaco, shock anafiláctico/distributivo, broncoespasmo severo refractario, bradicardia sintomática.',

    objetivoTerapeutico: 'Revertir anafilaxia · Restaurar circulación en paro cardíaco · Mejorar PA en shock distributivo · Broncodilatar en asma severa · Aumentar FC en bradicardia sintomática',

    preparacion: {
      'Presentación 1:1000':      '1 mg/mL ampolla (1 mL) — <b>USO IM/SC</b>',
      'Presentación 1:10,000':    '0.1 mg/mL jeringa precargada (10 mL = 1 mg) — <b>USO IV</b>',
      'Diluyente':                'SF 0.9% (preferido) · SG 5%',
      'Para infusión IV continua': '1 mg en 250 mL SF → 4 mcg/mL · 1 mg en 100 mL SF → 10 mcg/mL',
      'Dosis IV preparación':     '1 mg + 9 mL SF = 1:10,000 (preparación urgencia)',
      'Vía ANAFILAXIA':           '<b>IM (muslo anterolateral) con 1:1000 - PRIMERA LÍNEA</b>',
      'Vía PARO':                 '<b>IV bolo con 1:10,000 (1 mg en 10 mL)</b>',
      'Vía SHOCK':                '<b>IV infusión continua 0.05-0.5 mcg/kg/min</b>',
      '⏱️ TIEMPO IM':              '<b>INMEDIATO - se administra rápido, no diluir</b>',
      '⏱️ BOLO IV (paro)':         '<b>1 mg IV rápido c/3-5 min</b>',
      '⏱️ INFUSIÓN IV':            '<b>0.05-0.5 mcg/kg/min (titular según PA)</b>',
      'Bomba':                    'OBLIGATORIA para infusión IV continua',
      'Acceso':                   'Vía central preferida para infusión continua (irritante venoso)',
      '🧊 Estabilidad preparada': '<b>24 horas a TA en SF · Proteger de luz</b>',
      'Aspecto':                  'Incolora a ligeramente amarillenta — desechar si turbidez, color rosa-marrón (oxidación)',
    },

    vigilancia: {
      antes: [
        '⚠️ VERIFICAR CONCENTRACIÓN — 1:1000 (1 mg/mL) IM · 1:10,000 (0.1 mg/mL) IV.',
        'En anafilaxia: NO retrasar adrenalina por otros tratamientos.',
        'Acceso IV permeable (vía central preferida para infusión).',
        'ECG continuo si infusión IV o paciente con cardiopatía.',
        'Verificar prescripción: dosis, vía, concentración, indicación.',
        'Tener disponible: O₂, fluidos IV, otros antianafilácticos (difenhidramina, hidrocortisona).',
      ],
      durante: [
        'ANAFILAXIA: monitorización CV/respiratoria intensiva — puede requerir adrenalina repetida c/5-15 min.',
        'PARO: seguir algoritmo ACLS — adrenalina c/3-5 min en compresiones.',
        'INFUSIÓN: PA c/5 min al inicio, ECG continuo, titular según PAM > 65 mmHg.',
        'Vigilar arritmias — taquicardia, ectopia, fibrilación ventricular.',
        'Observar sitio IV — extravasación causa necrosis.',
        'Si extravasación: ver módulo extravasación, fentolamina urgente.',
      ],
      despues: [
        'En anafilaxia: vigilancia 6-12h por riesgo de reacción bifásica.',
        'Después de infusión: descender lentamente, no suspender abruptamente (rebote).',
        'Monitorizar glucemia — adrenalina ↑ glucosa.',
        'Vigilar K+ sérico — puede causar hipopotasemia transitoria.',
        'Documentar: dosis, hora, vía, respuesta clínica, efectos adversos.',
      ],
      suspender: [
        'Arritmias ventriculares severas (TV, FV).',
        'Crisis hipertensiva (PAS > 200 mmHg).',
        'Isquemia miocárdica documentada.',
        'Extravasación con compromiso tisular.',
        'Recuperación clínica completa (descenso gradual).',
        'Prescripción médica de suspensión.',
      ],
    },

    incompatibilidades: [
      'Soluciones alcalinas (bicarbonato) — inactivación rápida.',
      'Aminofilina — incompatibilidad.',
      'Hialuronidasa — incompatibilidad documentada.',
      'Furosemida — incompatibilidad en mezcla.',
      'Lavar línea con SF antes y después.',
      'NO mezclar en misma jeringa con otros fármacos.',
    ],

    alertasSeguridad: [
      '🔴 ERROR CRÍTICO: confundir 1:1000 con 1:10,000 = OVERDOSIS LETAL.',
      '🔴 NUNCA administrar 1:1000 (concentrada) IV directa — causa HTA crítica, arritmias, IAM.',
      '🔴 Extravasación IV causa NECROSIS — fentolamina obligatoria.',
      '🟠 Vasoconstricción periférica severa — riesgo de gangrena distal en infusión prolongada.',
      '🟠 Arritmias ventriculares — vigilancia ECG continua.',
      '🟠 Isquemia miocárdica — riesgo ↑ en cardiopatía previa.',
      '🟡 Hiperglucemia, hipopotasemia transitoria.',
      '🟡 Ansiedad, temblor, palpitaciones — efectos β esperados.',
    ],
  },

  modulos: {

    anafilaxia: `
      <b>Protocolo ANAFILAXIA — Adrenalina IM PRIMERA LÍNEA:</b><br/>
      <b>Dosis adulto:</b> 0.3-0.5 mg IM (0.3-0.5 mL de 1:1000) en muslo anterolateral.<br/>
      <b>Dosis pediátrica:</b> 0.01 mg/kg IM (máximo 0.3 mg).<br/>
      <b>Repetir:</b> c/5-15 min si no respuesta (hasta 3 dosis).<br/>
      <b>NO usar IV en anafilaxia inicial</b> — riesgo de arritmias.<br/>
      <b>Si refractaria:</b> Infusión IV continua 0.1-1 mcg/kg/min con monitorización.<br/>
      <b>Adyuvantes:</b><br/>
      • Difenhidramina 25-50 mg IV (antihistamínico H1).<br/>
      • Ranitidina IV (antihistamínico H2).<br/>
      • Hidrocortisona 100-200 mg IV (corticoide).<br/>
      • Salbutamol nebulizado (broncoespasmo).<br/>
      • Fluidos IV cristaloides 1-2 L rápido.<br/>
      <b>Vigilancia:</b> 6-12h por reacción bifásica.
    `,

    paro: `
      <b>Protocolo Adrenalina en Paro Cardíaco (ACLS):</b><br/>
      <b>Dosis:</b> 1 mg IV bolo (10 mL de 1:10,000) c/3-5 min.<br/>
      <b>Administrar durante compresiones torácicas</b> (no detener RCP).<br/>
      <b>Vía:</b> IV preferida (central > periférica) · IO si no acceso IV · ET (2-2.5× dosis si no opción).<br/>
      <b>Después de cada dosis:</b> Flush 20 mL SF, elevar brazo.<br/>
      <b>Continuar:</b> Hasta retorno de circulación espontánea (RCE) o decisión de cese.<br/>
      <b>Evidencia:</b> ↑ probabilidad de RCE, beneficio neurológico a largo plazo controvertido (PARAMEDIC-2).
    `,

    extravasacion: `
      <b>Extravasación de Adrenalina — EMERGENCIA TISULAR:</b><br/>
      <b>Acción inmediata:</b><br/>
      1. DETENER infusión inmediatamente.<br/>
      2. NO retirar catéter — aspirar máximo posible.<br/>
      3. Elevar miembro afectado.<br/>
      4. <b>Fentolamina 5-10 mg en 10 mL SF, infiltrar SC en zona</b> (antagonista α).<br/>
      5. Aplicar compresas tibias (NO frías — empeora isquemia).<br/>
      6. Vigilar zona c/hora × 24-48h.<br/>
      7. Notificar al médico — considerar cirugía plástica si necrosis.<br/>
      8. Documentar exhaustivamente.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '⚠️ TRIPLE VERIFICACIÓN de concentración: 1:1000 (IM) vs 1:10,000 (IV).',
      'En carro de paro: tener ambas presentaciones claramente etiquetadas y separadas.',
      'Etiquetar bolsa de infusión con: Adrenalina [dosis], concentración, velocidad (mcg/kg/min), hora inicio.',
      'En anafilaxia: NUNCA esperar otros tratamientos — adrenalina IM PRIMERO.',
      'Acceso central preferido para infusión IV — periférico solo si emergencia.',
      'ECG continuo durante infusión y 2-4h después.',
      'PA c/5 min al inicio de infusión, c/15 min cuando estable.',
      'Tener fentolamina disponible (antídoto extravasación).',
      'Cambiar sistema IV cada 48-72h.',
      'Documentar meticulosamente cada dosis: hora, dosis, vía, respuesta.',
    ],

    efectosAdversos: [
      '🔴 Arritmias ventriculares — TV, FV',
      '🔴 Crisis hipertensiva — riesgo hemorragia cerebral',
      '🔴 Isquemia miocárdica / IAM',
      '🔴 Necrosis tisular por extravasación',
      '🟠 Taquicardia severa (> 150 lpm)',
      '🟠 Vasoconstricción periférica severa — gangrena',
      '🟡 Ansiedad, agitación, temblor',
      '🟡 Palpitaciones, cefalea',
      '🟡 Hiperglucemia',
      '🟡 Hipopotasemia transitoria',
      '🟡 Diaforesis, palidez',
    ],

    contraindicaciones: [
      'NO HAY CONTRAINDICACIONES ABSOLUTAS en anafilaxia o paro cardíaco (es vital).',
      'Precaución relativa: hipertensión severa, taquiarritmias preexistentes, glaucoma de ángulo estrecho.',
      'Hipertiroidismo no tratado.',
      'Feocromocitoma (riesgo de crisis hipertensiva).',
    ],

    fotosensibilidad: '<b>SÍ — Proteger de luz</b>. La adrenalina se oxida con luz y oxígeno volviéndose rosa/marrón. Almacenar en envase opaco. Desechar si cambia de color.',

    estabilidad: {
      'Ampolla sin abrir':        'Temperatura ambiente, protegida de luz — hasta vencimiento',
      'Preparada en SF':          '<b>24 horas a TA · Proteger de luz</b>',
      'Aspecto':                  'Incolora — desechar si rosa/marrón (oxidada, sin actividad)',
      'Temperatura':              'NO congelar · 15-25°C',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato tras la apertura. Desechar cualquier sobrante de la ampolla.',
      dosisRestante:    'No conservar. Desechar inmediatamente. No reutilizar restos de dosis preparadas.',
      infusionPreparada:'24 h a temperatura ambiente (protegida de la luz) / 48 h refrigerada (2–8 °C). Usar envases ámbar o cubrir con funda opaca.',
      notas:            'Desechar si la solución vira a marrón/rosado o aparece precipitado. Compatible con SG 5% y SF 0.9%; no mezclar con soluciones alcalinas.',
    },

    presentaciones: [
      'Adrenalina 1 mg/mL (1:1000) ampolla 1 mL — uso IM/SC',
      'Adrenalina 0.1 mg/mL (1:10,000) jeringa precargada 10 mL — uso IV',
      'Adrenalina autoinyector EpiPen® 0.3 mg (adulto) / 0.15 mg (pediátrico)',
      'Adrenalina spray nasal/oftálmico (otros usos)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Anafilaxia adulto (IM)',            dosis: '0.3-0.5 mg IM (1:1000)',          via: 'IM' },
      { indicacion: 'Anafilaxia pediátrica',             dosis: '0.01 mg/kg IM (máx 0.3 mg)',      via: 'IM' },
      { indicacion: 'Paro cardíaco (IV)',                dosis: '1 mg IV c/3-5 min (1:10,000)',    via: 'IV' },
      { indicacion: 'Paro cardíaco pediátrico',          dosis: '0.01 mg/kg IV c/3-5 min',         via: 'IV' },
      { indicacion: 'Infusión continua shock',           dosis: '0.05-0.5 mcg/kg/min',             via: 'IV' },
      { indicacion: 'Bradicardia sintomática',           dosis: '2-10 mcg/min IV (titular)',       via: 'IV' },
      { indicacion: 'Broncoespasmo severo',              dosis: '0.3 mg IM o 0.5 mg nebulizada',   via: 'IM/NEB' },
    ],

    embarazo: 'Categoría C (FDA). Uso indicado en anafilaxia materna — beneficio supera riesgo. Puede reducir flujo uteroplacentario. En emergencia, sin alternativa segura. Compatible con lactancia (minimal excreción en leche).',

    pediatria: 'Anafilaxia: 0.01 mg/kg IM (máximo 0.3 mg). Paro: 0.01 mg/kg IV c/3-5 min. Calcular siempre por peso. Mayor riesgo de errores de dosificación — triple verificación.',

    adultoMayor: 'Mayor riesgo de isquemia cardíaca, arritmias, crisis hipertensiva. Iniciar infusión a dosis menor (0.05 mcg/kg/min). Vigilancia ECG intensiva. Pero NO retrasar en anafilaxia o paro.',

    insufRenal: 'Sin ajuste de dosis significativo. Metabolismo principalmente extrarenal. En IRA: monitorización estándar.',

    insufHepatica: 'Sin ajuste de dosis específico. Metabolismo por COMT y MAO independiente de función hepática.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Epinephrine Injection. U.S. National Library of Medicine.',
      'AHA ACLS Guidelines 2020-2025. Epinephrine in Cardiac Arrest. Circulation.',
      'WAO Anaphylaxis Guidelines 2020. World Allergy Organization.',
      'EAACI Guidelines. Anaphylaxis Management. Allergy. 2021.',
      'CIMA AEMPS. Ficha Técnica Adrenalina. Agencia Española de Medicamentos.',
      'PARAMEDIC-2 Trial. Epinephrine in Out-of-Hospital Cardiac Arrest. NEJM. 2018.',
      'Micromedex Solutions. Epinephrine (Injectable). Accessed 2024.',
    ],
  },

});
