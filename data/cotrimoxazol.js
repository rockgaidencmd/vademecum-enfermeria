/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/cotrimoxazol.js
   Fuentes: CIMA AEMPS (Septrin), FDA DailyMed,
   IDSA PCP Guidelines 2023, ESCMID/ECMM Guidelines,
   NICE Antimicrobial Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'cotrimoxazol',
  nombre:         'Cotrimoxazol (TMP-SMX)',
  nombreGenerico: 'Trimethoprim + Sulfamethoxazole',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'PCP', 'Pneumocystis', 'sulfonamida', 'trimetoprim', 'MRSA', 'ITU', 'toxoplasmosis', 'inmunodeprimidos'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>PCP (Pneumocystis jirovecii)</b>: fármaco de elección — TMP 15-20 mg/kg/día IV en 3-4 dosis × 21 días.',
      'Dosis expresadas en <b>componente TMP</b> — la mayoría de presentaciones tienen ratio TMP:SMX = 1:5.',
      '<b>Hiperpotasemia</b>: el TMP inhibe la secreción tubular de K+ — controlar K+ en dosis altas.',
      'Infundir IV <b>en 60-90 min</b> diluido en SF — precipita si se concentra o infunde rápido.',
      '<b>Fotosensibilidad</b> — proteger la piel. Erupciones cutáneas frecuentes (hasta 5% de pacientes).',
    ],

    resumenRapido: 'Combinación sinérgica de trimetoprim (inhibidor de dihidrofolato reductasa) y sulfametoxazol (inhibidor de dihidropteroato sintetasa). Bloquea dos pasos secuenciales de la síntesis de folato bacteriano. Amplio espectro: gram-positivos (MRSA comunitario), gram-negativos (E. coli, Klebsiella), Pneumocystis jirovecii, Toxoplasma, Nocardia, Stenotrophomonas maltophilia. Primera elección en PCP y profilaxis anti-PCP en inmunodeprimidos.',

    objetivoTerapeutico: 'Tratamiento de PCP (Pneumocystis jirovecii pneumonia) · Profilaxis anti-PCP en inmunodeprimidos · ITU no complicada (si sensible) · Infecciones por MRSA comunitario · Nocardiosis · Toxoplasmosis cerebral (segunda línea)',

    preparacion: {
      'Presentación IV':          '<b>Septrin® IV 80 mg TMP + 400 mg SMX / 5 mL — ampolla 5 mL</b>',
      'Diluyente':                '<b>SG 5% (preferible) — también SF 0.9%</b>',
      'Dilución PCP (tratamiento)': '<b>Diluir cada 5 mL ampolla en 75-125 mL SG 5% → infundir en 60-90 min</b>',
      'Dosis PCP adulto':         '<b>TMP 15-20 mg/kg/día IV en 3-4 dosis = 4-5 ampollas/dosis c/6-8 h</b>',
      'Dosis profilaxis (oral)':  'TMP 160 mg / SMX 800 mg (1 comprimido forte) c/24 h o 3 días/semana',
      'Dosis ITU oral':           'TMP 160 mg / SMX 800 mg (forte) c/12 h × 3-7 días',
      'Concentración máxima':     'No superar 1 ampolla (5 mL) en 75 mL → mayor dilución si tolerado',
      'Vía':                      'IV lenta (60-90 min) · Oral (mayor biodisponibilidad: >90%)',
      '⏱️ Inicio efecto':          'IV: efecto en 24-48 h · Clínico PCP: mejoría 3-5 días',
      '🧊 Estabilidad':            '<b>Diluida en SG 5%: 4-6 h a temperatura ambiente (precipita si más tiempo)</b>',
    },

    vigilancia: {
      antes: [
        'Función renal basal: creatinina y ClCr — ajuste de dosis obligatorio en IR.',
        'Potasio basal — el TMP eleva K+ (efecto potasio-retenedor).',
        'Hemograma: el SMX puede causar leucopenia, trombocitopenia y anemia megaloblástica.',
        'Alergias a sulfonamidas — reacción cruzada posible con sulfonilureas y diuréticos tiazídicos.',
        'Función hepática en uso prolongado.',
        'En PCP: SpO2, gasometría, LDH (marcador de gravedad en PCP).',
      ],
      durante: [
        'Ionograma con K+ c/48-72 h en dosis altas IV — hiperpotasemia frecuente.',
        'Hemograma semanal en tratamientos prolongados (>14 días).',
        'Creatinina cada 3-5 días (nefrotoxicidad posible, especialmente en dosis altas).',
        'Vigilar erupciones cutáneas — exantema maculopapular frecuente; rash vesiculoso/bulloso = suspender.',
        'SpO2 continua en PCP grave — deterioro inicial (días 3-5) puede ser paradójico.',
        'Diuresis — cristaluria posible en deshidratación.',
      ],
      despues: [
        'Ionograma (K+) y creatinina en la primera semana post-tratamiento.',
        'Evaluación de respuesta en PCP: SpO2, infiltrados en Rx/TC, LDH.',
        'Transición a vía oral cuando SpO2 estable (misma eficacia, >90% biodisponibilidad).',
        'En PCP: glucocorticoides como coadyuvante si PaO2 <70 mmHg — no sustituyen al cotrimoxazol.',
        'Documentar tolerancia, hemograma y función renal al alta.',
      ],
      suspender: [
        'Síndrome de Stevens-Johnson o necrólisis epidérmica tóxica — emergencia dermatológica.',
        'Hiperpotasemia grave (K+ >6.5 mEq/L) refractaria.',
        'Anemia megaloblástica grave o pancitopenia.',
        'Hepatotoxicidad grave (ALT/AST >10× normal).',
        'Reacción alérgica grave (anafilaxia).',
        'No respuesta a los 7 días en PCP — cambiar a pentamidina IV.',
      ],
    },

    incompatibilidades: [
      '<b>NO diluir en SF 0.9% concentrado</b> — precipita. Preferir SG 5% y mayor dilución.',
      'Incompatible con soluciones alcalinas.',
      'No mezclar con otros antibióticos en la misma bolsa.',
      'Incompatible con leucovorín (no administrar simultáneamente — interfiere con el efecto).',
      'Lavar la vía con SG 5% antes y después.',
    ],

    alertasSeguridad: [
      '🔴 HIPERPOTASEMIA — el TMP bloquea secreción tubular de K+. K+ c/48-72 h en dosis altas.',
      '🔴 STEVENS-JOHNSON — erupción vesiculosa/ampollosa: suspender inmediatamente.',
      '🟠 Precipitación IV si concentración alta o dilución insuficiente — diluir siempre bien.',
      '🟠 Mielotoxicidad (leucopenia, trombocitopenia, anemia) — hemograma semanal.',
      '🟠 Interacción con warfarina — potencia efecto anticoagulante, monitorizar INR.',
      '🟡 Fotosensibilidad — proteger piel del sol durante el tratamiento.',
    ],
  },

  modulos: {

    pcpProtocolo: `
      <b>Protocolo PCP (Pneumocystis jirovecii) — Cotrimoxazol:</b><br/>
      <b>Diagnóstico PCP grave:</b> PaO2 <70 mmHg, gradiente A-a O2 >35 mmHg.<br/><br/>
      <b>Tratamiento (21 días):</b><br/>
      • <b>TMP 15-20 mg/kg/día IV</b> en 3-4 dosis (= 3-4 ampollas de 5 mL cada dosis c/6-8 h).<br/>
      • Diluir cada 5 mL en 75-125 mL SG 5% → infundir en 60-90 min.<br/>
      • Transición a oral cuando SpO2 estable (misma eficacia).<br/><br/>
      <b>Coadyuvante si PaO2 <70 mmHg:</b><br/>
      • Prednisona 40 mg/12 h × 5 días → 40 mg/24 h × 5 días → 20 mg/24 h × 11 días.<br/>
      • Iniciar dentro de las primeras 72 h.<br/><br/>
      <b>Profilaxis primaria (VIH con CD4 <200/μL):</b><br/>
      • 1 comprimido forte (TMP/SMX 160/800 mg) c/24 h o 3 días/semana.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Diluir cada ampolla (5 mL) en 75-125 mL SG 5% — mayor dilución reduce el riesgo de precipitación.',
      'Infundir en 60-90 min mínimo — nunca bolo IV directo.',
      'Potasio sérico c/48-72 h en dosis altas — el TMP retiene potasio (hiperpotasemia frecuente).',
      'Vigilar erupción cutánea diariamente — el SMX puede causar desde exantema leve hasta Stevens-Johnson.',
      'Si erupción vesiculosa o ampollas: suspender INMEDIATAMENTE y avisar médico.',
      'SpO2 continua en PCP grave — puede empeorar inicialmente (días 3-5) antes de mejorar.',
      'En PCP: valorar cambio a oral cuando SpO2 estable (biodisponibilidad >90% = misma eficacia).',
      'Hidratación adecuada — riesgo de cristaluria con deshidratación.',
      'Hemograma semanal en tratamientos largos (>14 días): leucopenia, trombocitopenia.',
      'Documentar K+, creatinina, SpO2 y respuesta clínica diariamente en PCP.',
    ],

    efectosAdversos: [
      '🔴 Síndrome de Stevens-Johnson / necrólisis epidérmica tóxica (urgencia)',
      '🔴 Hiperpotasemia (dosis altas de TMP)',
      '🟠 Erupción cutánea maculopapular (hasta 5% de pacientes)',
      '🟠 Leucopenia, trombocitopenia, anemia megaloblástica',
      '🟠 Nefrotoxicidad (elevación creatinina, cristaluria)',
      '🟠 Hepatotoxicidad (elevación transaminasas)',
      '🟡 Náuseas, vómitos (frecuentes — mejorar con comida en oral)',
      '🟡 Fotosensibilidad cutánea',
    ],

    contraindicaciones: [
      'Alergia a sulfonamidas (contraindicación absoluta).',
      'Déficit grave de G6PD (hemólisis).',
      'Insuficiencia hepática grave.',
      'Embarazo en el primer trimestre y cerca del parto (riesgo de kernicterus neonatal).',
      'Lactancia (el SMX pasa a la leche).',
      'Precaución en IR grave — ajuste de dosis obligatorio.',
    ],

    fotosensibilidad: 'Sí — las sulfonamidas son fotosensibilizantes. Usar protector solar factor ≥50 y ropa protectora. Evitar exposición solar directa durante el tratamiento y 2-4 semanas después.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento. Proteger de luz.',
      'Diluida en SG 5%':     '<b>4-6 h a temperatura ambiente</b> (preparar justo antes de usar)',
      'Diluida en SF 0.9%':   '<b>2-4 h — mayor riesgo de precipitación. Preferir SG 5%</b>',
      'Concentración máxima':  '1 ampolla (5 mL = 80 mg TMP) en mínimo 75 mL',
      'Aspecto':               'Solución incolora — desechar si hay cristales o turbidez',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente — no guardar sobrante.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '4-6 h en SG 5% a temperatura ambiente. Preparar justo antes de cada dosis.',
      notas:             'Preferir SG 5% sobre SF para dilución (menor riesgo de precipitación). Diluir suficientemente: mínimo 75 mL por ampolla. No mezclar con otros fármacos. Conversión oral tan pronto como sea posible (biodisponibilidad >90%).',
    },

    presentaciones: [
      'Septrin® IV 80 mg TMP / 400 mg SMX / 5 mL — ampolla 5 mL',
      'Septrin® forte 160/800 mg — comprimidos (oral)',
      'Septrin® 80/400 mg — comprimidos (oral)',
      'Septrin® 40/200 mg / 5 mL — suspensión oral pediátrica',
      'Cotrimoxazol Normon® / Kern® — genéricos',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'PCP tratamiento (IV)',        dosis: '<b>TMP 15-20 mg/kg/día IV en 3-4 dosis × 21 días</b>',          via: 'IV' },
      { indicacion: 'PCP tratamiento (oral)',       dosis: 'TMP 15-20 mg/kg/día VO en 3-4 tomas × 21 días',                via: 'VO' },
      { indicacion: 'Profilaxis PCP (oral)',        dosis: '<b>TMP/SMX 160/800 mg (forte) c/24 h o 3 días/semana</b>',     via: 'VO' },
      { indicacion: 'ITU no complicada',            dosis: 'TMP/SMX 160/800 mg c/12 h × 3-7 días',                         via: 'VO' },
      { indicacion: 'Nocardiosis / infección grave', dosis: 'TMP 10-15 mg/kg/día IV en 3-4 dosis',                         via: 'IV' },
    ],

    embarazo: 'Categoría D (FDA) — riesgo de malformaciones (defectos del tubo neural) en 1er trimestre por inhibición del folato. Kernicterus neonatal si uso cerca del parto. Contraindicado en 1er trimestre y cerca del término. En PCP vital (VIH): beneficio > riesgo — usar con suplementos de ácido fólico. Alternativa: pentamidina.',

    pediatria: 'PCP: TMP 15-20 mg/kg/día IV en 3-4 dosis. Profilaxis PCP: TMP 5 mg/kg/día (máx 160 mg) c/24 h. ITU: TMP 6-12 mg/kg/día en 2 dosis. Suspensión pediátrica 40/200 mg por 5 mL. Evitar en neonatos <4 semanas (kernicterus) y en déficit de G6PD.',

    adultoMayor: 'Mayor riesgo de hiperpotasemia (función renal reducida amplifica el efecto del TMP). K+ y creatinina más frecuentes. Mayor riesgo de mielotoxicidad. Ajuste de dosis según ClCr. Interacción con warfarina especialmente relevante en polimedicados.',

    insufRenal: '<b>ClCr >30 mL/min:</b> sin ajuste. <b>ClCr 15-30:</b> 50% de la dosis normal. <b>ClCr <15:</b> no recomendado (acumulación de SMX y sulfato, riesgo de toxicidad grave). En hemodiálisis: dosis después de sesión. TRRC: ajuste según ClCr residual.',

    insufHepatica: 'Metabolismo hepático del SMX. En IH grave: monitorización estrecha, posible reducción de dosis. Riesgo de hepatotoxicidad aumentado.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Septrin® IV (cotrimoxazol).',
      'Masur H et al. Prevention and Treatment of Opportunistic Infections in Adults with HIV. IDSA/NIH/CDC. 2023.',
      'Kovacs JA, Masur H. Evolving health effects of Pneumocystis — one hundred years of progress in diagnosis and treatment. JAMA. 2009.',
      'Bowen AC et al. Trimethoprim-sulfamethoxazole for skin infections: a review. JAMA. 2012.',
      'Hughes WT et al. Comparison of atovaquone and azithromycin with TMP-SMX for the prevention of PCP. NEJM. 1993.',
      'AEMPS. Cotrimoxazol y riesgo de hiperpotasemia. Nota informativa de seguridad. 2015.',
    ],
  },

});
