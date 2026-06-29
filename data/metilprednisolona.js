/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/metilprednisolona.js
   Fuentes: CIMA AEMPS (Solu-Moderin, Urbason), FDA DailyMed,
   Guías esclerosis múltiple, asma severa, vasculitis
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'metilprednisolona',
  nombre:         'Metilprednisolona',
  nombreGenerico: 'Methylprednisolone Sodium Succinate',
  categoria:      'otros',
  tags:           ['corticoide', 'pulsos', 'esclerosis múltiple', 'asma severa', 'shock', 'vasculitis', 'lesión medular'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Glucocorticoide sintético — 5× más potente que hidrocortisona, vida media intermedia (12-36h).',
      '<b>CORTICOIDE DE ELECCIÓN PARA PULSOS DE ALTA DOSIS</b> (megadosis IV) en exacerbaciones agudas de enfermedades autoinmunes.',
      'Reconstituir con el disolvente del fabricante (Mix-O-Vial®), luego diluir en SF o SG 5%.',
      'Administración IV: bolo lento (3-5 min para dosis bajas), infusión 15-60 min para dosis altas (> 250 mg).',
      'En pulsos IV (500-1000 mg/día × 3-5 días): vigilancia estricta de PA, glucemia, K+, riesgo arritmias.',
    ],

    resumenRapido: 'Glucocorticoide sintético de potencia y duración intermedia. 5× más potente que hidrocortisona, 1.25× más que prednisolona. Mínima actividad mineralocorticoide (menos retención sodio que hidrocortisona). Vida media biológica 12-36h. Indicado en: pulsos IV en exacerbaciones de esclerosis múltiple, vasculitis, glomerulonefritis aguda, asma severa refractaria, rechazo agudo trasplante, shock séptico refractario (controvertido), edema cerebral (alternativa a dexametasona), lesión medular aguda (controvertido).',

    objetivoTerapeutico: 'Antiinflamación potente · Inmunosupresión · Tratamiento de exacerbaciones agudas autoinmunes · Reducir edema · Modular respuesta inmune',

    preparacion: {
      'Presentación 40 mg':       '<b>Solu-Moderin 40 mg vial liofilizado</b> + 1 mL solvente (Mix-O-Vial)',
      'Presentación 125 mg':      'Solu-Moderin 125 mg vial liofilizado + 2 mL solvente',
      'Presentación 500 mg':      '<b>Solu-Moderin 500 mg vial</b> + 8 mL solvente',
      'Presentación 1 g':         '<b>Solu-Moderin 1 g vial</b> + 16 mL solvente (pulsos)',
      'Diluyente reconstitución': '<b>Agua bacteriostática del Mix-O-Vial</b> (incluida)',
      'Diluyente final':          'SF 0.9% o SG 5% (compatibles)',
      'Dilución dosis bajas':     '40-125 mg + 50 mL SF → infundir en 15-30 min',
      'Dilución pulsos altos':    '<b>500-1000 mg en 100-250 mL SF → infundir en 30-60 min</b>',
      'Vía':                      'IV (preferida), IM, intraarticular, intralesional',
      '⏱️ BOLO IV bajas dosis':   '40-125 mg en 3-5 min IV directo',
      '⏱️ INFUSIÓN IV altas dosis': '<b>250-1000 mg en 30-60 min (NUNCA bolo)</b>',
      '⏱️ INFUSIÓN MÁS LENTA':    '<b>1 g en 60 min mínimo</b> (recomendado para pulsos)',
      '⏱️ DOSIS pulso EM/Vasculitis': '<b>500-1000 mg/día × 3-5 días</b>',
      '⏱️ DOSIS asma severa':     '40-125 mg IV c/6h',
      '⏱️ DOSIS rechazo trasplante':'500-1000 mg/día × 3 días',
      'Bomba':                    'Recomendada para infusión controlada',
      '🌑 Protección luz':        'Conservar vial en embalaje exterior',
      '🧊 ESTABILIDAD reconstituida':'<b>48 horas a temperatura ambiente</b> en SF/SG 5%',
      'Aspecto':                  'Solución incolora a ligeramente amarillenta - desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>Verificar glucemia basal</b> - corticoides ↑↑ glucosa.',
        'PA basal - corticoides causan retención sodio (aunque menos que hidrocortisona).',
        'K+ basal - hipopotasemia con dosis altas.',
        'Revisar antecedentes: diabetes, HTA, úlcera péptica, infección activa, osteoporosis, tuberculosis latente.',
        '<b>En pulsos IV (> 250 mg)</b>: ECG basal - riesgo arritmias.',
        'Confirmar disolvente correcto (Mix-O-Vial del fabricante).',
        'Doble verificación: dosis, dilución, velocidad infusión.',
      ],
      durante: [
        '<b>INFUSIÓN LENTA - 30-60 min en pulsos IV altos</b>.',
        'Vigilar PA c/15 min en pulsos altos - HTA transitoria.',
        'ECG continuo en pulsos > 250 mg - arritmias auriculares/ventriculares descritas.',
        'Vigilar reacción anafilactoide (rara pero descrita).',
        'Si sensación de "sabor extraño" o ardor genital con bolo rápido: NORMAL, no peligroso.',
        'Si arritmia o hipotensión severa: REDUCIR velocidad o suspender.',
      ],
      despues: [
        '<b>Monitorizar glucemia c/4-6h × 24-48h</b> - hiperglucemia muy frecuente.',
        'Iniciar insulina si glucemia > 180 mg/dL.',
        'Vigilar PA c/4-6h.',
        'Control K+ sérico - hipopotasemia con dosis altas.',
        'En pulsos > 3 días: vigilar infecciones, sangrado digestivo, alteraciones psiquiátricas (psicosis esteroidea).',
        'Profilaxis úlcera péptica (omeprazol/famotidina) si dosis altas o factores de riesgo.',
        'NO suspender bruscamente si uso > 7-10 días - descenso gradual.',
        'Documentar: dosis, hora, vía, indicación, glucemia pre/post, efectos adversos.',
      ],
      suspender: [
        'Arritmia ventricular nueva o severa.',
        'Hipertensión severa refractaria (PAS > 200 mmHg).',
        'Hiperglucemia incontrolable.',
        'Infección oculta empeorando rápidamente.',
        'Sangrado digestivo activo.',
        'Psicosis esteroidea severa.',
        'Reacción anafilactoide.',
        'Prescripción médica de cambio o descenso.',
      ],
    },

    incompatibilidades: [
      'Verificar compatibilidades antes de mezclar.',
      'Generalmente irritante para la vena - diluir bien en infusión.',
      'Soluciones con calcio - precipitación posible.',
      'Lavar línea con SF antes y después de otros fármacos.',
      'Sin interacciones IV graves comunes (mayoría son interacciones farmacológicas sistémicas).',
    ],

    alertasSeguridad: [
      '🟠 <b>ARRITMIAS</b> (auriculares, ventriculares) descritas con pulsos IV altos - infundir LENTO.',
      '🟠 HIPERGLUCEMIA frecuente - monitorizar c/4-6h.',
      '🟠 HIPERTENSIÓN transitoria por retención sodio.',
      '🟠 HIPOPOTASEMIA con dosis altas - monitorizar.',
      '🟠 INMUNOSUPRESIÓN potente - enmascara signos infección.',
      '🟠 ÚLCERA PÉPTICA / sangrado digestivo - considerar profilaxis con dosis altas.',
      '🟠 PSICOSIS ESTEROIDEA - especialmente con pulsos altos.',
      '🟡 Sabor metálico, ardor genital transitorios con bolo rápido (NORMALES, no peligrosos).',
      '🟡 NO SUSPENDER BRUSCAMENTE si uso > 7-10 días - crisis suprarrenal.',
      '🟡 Reactivación tuberculosis latente - descartar antes de pulsos.',
    ],
  },

  modulos: {

    pulsos: `
      <b>Pulsos de Metilprednisolona (Megadosis IV):</b><br/>
      <b>INDICACIONES:</b><br/>
      • <b>Brote esclerosis múltiple (EM)</b>: 500-1000 mg/día × 3-5 días.<br/>
      • <b>Vasculitis severa</b> (Wegener, microscópica): 1000 mg/día × 3 días.<br/>
      • <b>Glomerulonefritis rápidamente progresiva</b>: 500-1000 mg/día × 3 días.<br/>
      • <b>Rechazo agudo trasplante</b>: 500-1000 mg/día × 3 días.<br/>
      • <b>Lupus severo con afectación orgánica</b>: 500-1000 mg/día × 3 días.<br/>
      • <b>Neuritis óptica aguda</b>: 250 mg c/6h × 3 días.<br/>
      • <b>Asma estado crítico</b>: 125 mg c/6h IV.<br/><br/>
      <b>PROTOCOLO PULSO:</b><br/>
      1. <b>Dosis: 500-1000 mg IV/día</b>.<br/>
      2. <b>Dilución: en 100-250 mL SF</b>.<br/>
      3. <b>Velocidad: 30-60 minutos MÍNIMO</b> (NUNCA bolo rápido).<br/>
      4. <b>Duración: 3-5 días</b> (no prolongar más).<br/>
      5. Continuar con corticoide oral en descenso (prednisona 1 mg/kg, descenso gradual).<br/><br/>
      <b>VIGILANCIA EN PULSOS:</b><br/>
      • <b>Monitor cardíaco</b> durante infusión (arritmias).<br/>
      • PA c/15-30 min durante infusión.<br/>
      • Glucemia c/4-6h × 48h.<br/>
      • K+ sérico diario.<br/>
      • Vigilancia de infección, sangrado GI, psicosis.<br/>
      • Profilaxis úlcera con IBP (omeprazol/pantoprazol).<br/>
      <b>CONTRAINDICACIONES PULSOS:</b><br/>
      • Infección sistémica no tratada.<br/>
      • Diabetes severamente descompensada.<br/>
      • HTA no controlada.<br/>
      • Antecedente psicosis esteroidea grave.
    `,

    asmaSevera: `
      <b>Metilprednisolona en Asma Severa / Estado Asmático:</b><br/>
      <b>INDICACIÓN:</b> Crisis asmática severa que no responde a broncodilatadores nebulizados.<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>Carga: 125 mg IV bolo</b>.<br/>
      • <b>Mantenimiento: 40-125 mg IV c/6h × 24-48h</b>.<br/>
      • Transición a prednisona VO 40-60 mg/día × 5-10 días con descenso.<br/><br/>
      <b>VENTAJAS vs hidrocortisona:</b><br/>
      • Menos retención de sodio (mejor en cardiópatas).<br/>
      • Vida media más prolongada (dosificación c/6-12h vs c/4-6h).<br/>
      • Mejor penetración pulmonar.<br/><br/>
      <b>COMBINAR CON:</b><br/>
      • Salbutamol nebulizado continuo.<br/>
      • Bromuro de ipratropio.<br/>
      • Sulfato de magnesio 2 g IV.<br/>
      • O₂ alto flujo / VNI / intubación si requiere.
    `,

    lesionMedular: `
      <b>Metilprednisolona en Lesión Medular Aguda (Protocolo NASCIS - CONTROVERTIDO):</b><br/>
      <b>HISTORIA:</b> NASCIS II y III sugirieron beneficio en lesiones medulares < 8h - revisiones actuales (Cochrane, AANS) NO recomiendan rutinariamente.<br/><br/>
      <b>PROTOCOLO HISTÓRICO NASCIS (si se decide usar):</b><br/>
      1. <b>Bolo: 30 mg/kg IV en 15 min</b>.<br/>
      2. <b>Esperar 45 minutos</b>.<br/>
      3. <b>Infusión: 5.4 mg/kg/h × 23 horas (si inicio < 3h post-trauma) o × 47 horas (si 3-8h)</b>.<br/><br/>
      <b>RIESGOS:</b><br/>
      • Infección.<br/>
      • Sangrado GI.<br/>
      • Hiperglucemia.<br/>
      • Mortalidad ↑ en algunos estudios.<br/><br/>
      <b>RECOMENDACIÓN ACTUAL:</b><br/>
      • <b>AANS/CNS Guidelines 2013</b>: NO recomendado de rutina.<br/>
      • Considerar caso a caso, discusión individual con neurocirugía.<br/>
      • Si se decide usar: documentar consentimiento informado del riesgo/beneficio.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir con el solvente del fabricante (Mix-O-Vial) - rotar suavemente.',
      'Etiquetar bolsa: Metilprednisolona [dosis], dilución, velocidad, hora preparación.',
      'En pulsos altos (500-1000 mg): bomba de infusión OBLIGATORIA, velocidad 30-60 min mínimo.',
      'NO administrar pulsos en bolo rápido - riesgo arritmias.',
      'Monitor cardíaco durante pulsos altos.',
      '<b>Monitorizar glucemia c/4-6h × 48h</b> - hiperglucemia muy frecuente.',
      'Iniciar/ajustar insulina si glucemia > 180 mg/dL.',
      'Vigilar PA c/4-6h.',
      'Control K+ diario en pulsos prolongados.',
      'Profilaxis úlcera con omeprazol/famotidina si dosis altas.',
      'Vigilar signos de infección - corticoides enmascaran fiebre.',
      'En descenso: gradual coordinado con médico - NO suspender bruscamente.',
      'Educar paciente: posibles alteraciones del sueño, mood, palpitaciones, sabor metálico.',
      'Documentar: dosis, vía, indicación, glucemia, PA, efectos adversos.',
    ],

    efectosAdversos: [
      '🟠 Arritmias (auriculares/ventriculares) - en pulsos altos',
      '🟠 Hiperglucemia',
      '🟠 Hipertensión',
      '🟠 Hipopotasemia (dosis altas)',
      '🟠 Inmunosupresión / infecciones',
      '🟠 Úlcera péptica / sangrado digestivo',
      '🟠 Psicosis esteroidea (insomnio, manía, depresión)',
      '🟡 Cara de luna llena, rasgos cushingoides',
      '🟡 Aumento de peso, edema (menos que hidrocortisona)',
      '🟡 Acné, hirsutismo',
      '🟡 Osteoporosis (uso prolongado)',
      '🟡 Cataratas, glaucoma (uso prolongado)',
      '🟡 Miopatía esteroidea',
      '🟡 Supresión eje HHS',
      '🟡 Sabor metálico, ardor genital con bolo rápido (transitorios)',
      '🟡 Tromboembolismo',
    ],

    contraindicaciones: [
      'Infección sistémica activa NO TRATADA.',
      'Hipersensibilidad a metilprednisolona.',
      'Tuberculosis activa no tratada.',
      'Vacunación con virus vivos atenuados.',
      'Úlcera péptica activa sin profilaxis.',
      'Glaucoma severo no controlado.',
      'Embarazo en 1er trimestre (relativa).',
      'Diabetes mellitus mal controlada (relativa).',
      'Psicosis previa por corticoides (relativa).',
    ],

    fotosensibilidad: 'No relevante. Conservar vial en embalaje exterior para evitar luz directa intensa pero sin requerimientos especiales.',

    estabilidad: {
      'Vial sin reconstituir':         'Temperatura ambiente (< 25°C) hasta vencimiento',
      'Reconstituida (Mix-O-Vial)':    '<b>48 horas a temperatura ambiente</b>',
      'Diluida en SF/SG 5%':           '<b>48 horas a TA</b>',
      'Aspecto':                       'Incolora a ligeramente amarillenta - desechar si turbidez',
      'Temperatura':                   'NO congelar · 15-25°C',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Reconstitución: usar dentro de las 48 h si se conserva refrigerada.',
      dosisRestante:    'Conservar reconstitución hasta 48 h en refrigerador (2–8 °C).',
      infusionPreparada:'24 h a temperatura ambiente / 48 h refrigerada (2–8 °C) en SF 0.9% o SG 5%.',
      notas:            'Dosis altas (≥ 500 mg): infundir en 30–60 min mínimo. Incompatible con heparina en la misma solución.',
    },

    presentaciones: [
      'Solu-Moderin® 40 mg vial + 1 mL solvente (Pfizer)',
      'Solu-Moderin® 125 mg vial + 2 mL solvente',
      'Solu-Moderin® 500 mg vial + 8 mL solvente',
      'Solu-Moderin® 1 g vial + 16 mL solvente (pulsos altos)',
      'Urbason Soluble® (genérico)',
      'Metilprednisolona Solumedrol® (multinacional)',
      'Metilprednisolona acetato 40 mg/mL (Depo-Moderin) - intraarticular',
      'Metilprednisolona VO: 4, 8, 16, 32, 40, 100 mg comprimidos',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Pulso EM/Vasculitis/Lupus',           dosis: '<b>500-1000 mg IV/día × 3-5 días</b>',     via: 'IV' },
      { indicacion: 'Asma severa (carga)',                  dosis: '125 mg IV bolo',                            via: 'IV' },
      { indicacion: 'Asma severa (mantenimiento)',          dosis: '40-125 mg IV c/6h',                         via: 'IV' },
      { indicacion: 'Rechazo trasplante',                   dosis: '500-1000 mg IV/día × 3 días',               via: 'IV' },
      { indicacion: 'Edema cerebral (alternativa)',         dosis: '40-125 mg IV c/6h',                         via: 'IV' },
      { indicacion: 'Shock séptico refractario',            dosis: '30 mg/kg/día (controvertido)',              via: 'IV' },
      { indicacion: 'Anafilaxia (adyuvante)',               dosis: '125 mg IV',                                 via: 'IV' },
      { indicacion: 'Pediatría asma severa',                dosis: '1-2 mg/kg IV (máx 60-125 mg) c/6h',         via: 'IV' },
      { indicacion: 'Lesión medular (NASCIS - controvertido)', dosis: '30 mg/kg bolo + 5.4 mg/kg/h × 23-47h',  via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Atraviesa placenta. Usar solo si beneficio supera riesgo. Categoría D en 1er trimestre (asociación con paladar hendido). Compatible con lactancia en dosis terapéuticas (vigilar lactante).',

    pediatria: 'Dosis: 0.5-2 mg/kg/día IV en 1-4 dosis. Asma severa: 1-2 mg/kg c/6h. Vigilar crecimiento en uso prolongado. Pulsos pediátricos: 30 mg/kg/día (máximo 1 g) × 3-5 días.',

    adultoMayor: 'Sin ajuste específico de dosis. Mayor riesgo de hiperglucemia, osteoporosis, infecciones, psicosis, sangrado GI. Vigilancia intensiva. Considerar profilaxis cálcio + vitamina D si uso > 3 meses.',

    insufRenal: 'Sin ajuste específico. Metabolismo principalmente hepático. En diálisis: sin reposición.',

    insufHepatica: 'En cirrosis severa: dosis estándar pero vigilancia clínica de efectos prolongados. Reducir si signos de encefalopatía.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Solu-Moderin® 40 mg, 125 mg, 500 mg, 1 g. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Urbason Soluble. AEMPS.',
      'FDA DailyMed. Methylprednisolone Sodium Succinate. U.S. National Library of Medicine.',
      'Cochrane Review. Methylprednisolone for Acute Spinal Cord Injury. 2012.',
      'AANS/CNS Guidelines. Acute Cervical Spine and Spinal Cord Injuries. Neurosurgery. 2013.',
      'EFNS Guidelines. Treatment of Multiple Sclerosis Relapse. Eur J Neurol. 2018.',
      'GINA 2024. Global Strategy for Asthma Management.',
      'KDIGO Guidelines. Glomerulonephritis. Kidney International. 2021.',
    ],
  },

});
