/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/salbutamol.js
   Fuentes: CIMA AEMPS (Ventolin), FDA DailyMed,
   GINA Guidelines 2024, GOLD COPD Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'salbutamol',
  nombre:         'Salbutamol (Albuterol)',
  nombreGenerico: 'Salbutamol Sulfate / Albuterol Sulfate',
  categoria:      'otros',
  tags:           ['broncodilatador', 'asma', 'EPOC', 'broncoespasmo', 'emergencia respiratoria', 'β2-agonista'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'β2-agonista selectivo de acción corta (SABA) — broncodilatador de primera línea en crisis asmática y EPOC exacerbado.',
      'Vías: NEBULIZACIÓN (primera línea hospital), INHALADOR PRESURIZADO (MDI con cámara), IV (refractario), SC (raro).',
      'En nebulización: con O₂ a 6-8 L/min (NO aire) en asma — mejora oxigenación. En EPOC: aire ambiente (riesgo retención CO₂).',
      'Dosis pediátrica: 0.15 mg/kg en nebulización (mínimo 2.5 mg, máximo 5 mg) c/20 min × 3 dosis en crisis severa.',
      'Vigilar HIPOPOTASEMIA, TAQUICARDIA, TEMBLOR — efectos β2 sistémicos en dosis altas o repetidas.',
    ],

    resumenRapido: 'Agonista β2-adrenérgico selectivo de acción corta (SABA). Mecanismo: relajación de músculo liso bronquial vía AMPc. Indicado en crisis aguda de asma, exacerbación de EPOC, broncoespasmo agudo, prevención de broncoespasmo inducido por ejercicio, hiperpotasemia (efecto secundario). Inicio: 5 min nebulizado, pico: 30-60 min, duración: 4-6h.',

    objetivoTerapeutico: 'Broncodilatación rápida · Alivio de disnea · Mejora SpO₂ y flujo espiratorio (FEV1/PEF) · Reducción ingreso hospitalario · Control de crisis asmática/EPOC',

    preparacion: {
      'Presentación nebulización': '<b>Ventolin® 5 mg/mL — frasco multidosis 10 mL · Monodosis 2.5 mg/2.5 mL</b>',
      'Presentación MDI':         'Inhalador presurizado 100 mcg/inhalación (200 dosis)',
      'Presentación IV':          '0.5 mg/mL ampolla 1 mL (uso restringido a emergencias)',
      'Diluyente nebulización':   '<b>SF 0.9% (3-4 mL) si se diluye salbutamol concentrado</b>',
      'Dilución estándar nebul.': '<b>0.5-1 mL salbutamol 5 mg/mL + 3-4 mL SF</b> → 5 mg total en 4-5 mL',
      'Vía':                      'NEBULIZACIÓN (1ª línea hospital), MDI con cámara, IV (refractario), SC',
      '⏱️ NEBULIZACIÓN adulto':   '<b>2.5-5 mg en 4-5 mL SF</b> nebulizado en 10-15 min',
      '⏱️ NEBULIZACIÓN pediátrica':'<b>0.15 mg/kg</b> (mín 2.5 mg, máx 5 mg) en 4-5 mL SF',
      '⏱️ NEBULIZACIÓN continua': '<b>10-15 mg/h</b> en crisis severa refractaria',
      '⏱️ MDI con cámara crisis': '4-8 puffs (100 mcg c/u) c/20 min × 3 dosis',
      '⏱️ IV (refractario)':       '4-8 mcg/kg en 10 min, luego 0.1-0.5 mcg/kg/min',
      'O₂ flujo nebulización':    '<b>6-8 L/min</b> (O₂ en asma, AIRE en EPOC hipercápnico)',
      'Bomba (IV)':                'Necesaria para infusión continua IV',
      '🧊 ESTABILIDAD nebulización': '<b>Usar inmediatamente tras diluir</b> — preparar al momento',
      '🧊 ESTABILIDAD frasco abierto':'1 mes a temperatura ambiente (frasco multidosis)',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez o cambio de color',
    },

    vigilancia: {
      antes: [
        'Evaluar severidad de crisis: FR, SpO₂, sibilancias, uso de músculos accesorios, FEM/PEF.',
        'Comprobar FC basal — vigilar taquicardia post-administración.',
        'En EPOC hipercápnico: nebulizar con AIRE (no O₂) para evitar retención de CO₂.',
        'En asma con SpO₂ baja: nebulizar con O₂ 6-8 L/min.',
        'Revisar K+ sérico si dosis repetidas (hipopotasemia frecuente).',
        'Comprobar uso reciente de otros β2-agonistas (riesgo acumulación).',
        'Doble verificación: dosis, vía, dispositivo, fuente de gas (O₂ vs aire).',
      ],
      durante: [
        'Vigilar FR, SpO₂, FC continuamente durante nebulización.',
        'Observar respuesta clínica: reducción de sibilancias, mejor entrada de aire, ↓ trabajo respiratorio.',
        'Vigilar TAQUICARDIA — esperable hasta 110-120 lpm, alerta si > 130 lpm.',
        'Observar TEMBLOR — esperable, especialmente en dosis altas o IV.',
        'Mantener flujo correcto del nebulizador (6-8 L/min) para vaporización adecuada.',
        'Si broncoespasmo paradójico (raro): suspender inmediatamente.',
        'Vigilar ansiedad, agitación, cefalea — efectos β2 sistémicos.',
      ],
      despues: [
        'Reevaluar: SpO₂, FR, sibilancias, FEM/PEF a los 15-20 min post-nebulización.',
        'Buena respuesta: SpO₂ > 92-94%, FR < 20 (adulto), ↓ sibilancias, FEM > 60% basal.',
        'Mala respuesta: considerar nebulización adicional, asociar bromuro de ipratropio, corticoides sistémicos.',
        'Documentar respuesta clínica detallada.',
        'En dosis repetidas (3 nebulizaciones): control de K+ sérico.',
        'Educar paciente sobre técnica correcta de MDI con cámara para casa.',
      ],
      suspender: [
        'Broncoespasmo paradójico (raro pero grave).',
        'Taquicardia ventricular o arritmia severa.',
        'Hipertensión severa.',
        'Hipopotasemia severa (K+ < 3.0 mEq/L) sin reposición.',
        'Crisis hipertiroidea (raro).',
        'Respuesta clínica adecuada — espaciar dosis.',
        'Prescripción médica de cambio o suspensión.',
      ],
    },

    incompatibilidades: [
      'En nebulización: generalmente NO mezclar con otros nebulizables sin verificar (ej: ipratropio SÍ es compatible).',
      'Bromuro de ipratropio: <b>COMPATIBLE en nebulización conjunta</b> (Combivent® o mezcla manual).',
      'Budesonida nebulizada: COMPATIBLE en mezcla.',
      'Acetilcisteína nebulizada: INCOMPATIBLE — administrar separados.',
      'Cromoglicato sódico: INCOMPATIBLE.',
      'Si IV: lavar línea con SF antes y después.',
    ],

    alertasSeguridad: [
      '🟠 HIPOPOTASEMIA con dosis altas/repetidas — vigilar K+ sérico, riesgo arritmias.',
      '🟠 TAQUICARDIA — vigilar en cardiópatas, ancianos, hipertiroideos.',
      '🟠 BRONCOESPASMO PARADÓJICO — raro pero grave, suspender si ocurre.',
      '🟠 En EPOC hipercápnico: nebulizar con AIRE, no O₂ alto flujo (riesgo retención CO₂).',
      '🟡 TEMBLOR esperado — efecto β2 muscular, no es alarmante en dosis terapéuticas.',
      '🟡 ANSIEDAD, agitación, insomnio — efectos β2 centrales.',
      '🟡 Cefalea común.',
      '🟡 Acidosis láctica con dosis muy altas (rara).',
      '🟡 Empeoramiento de glucemia en diabéticos.',
    ],
  },

  modulos: {

    crisisAsmatica: `
      <b>Protocolo Crisis Asmática Aguda (GINA 2024):</b><br/>
      <b>EVALUACIÓN inicial:</b><br/>
      • Leve-moderada: FR < 30, SpO₂ > 92%, FEM > 50%, habla en frases.<br/>
      • Severa: FR > 30, SpO₂ 90-92%, FEM 33-50%, habla en palabras, uso accesorios.<br/>
      • Vital: SpO₂ < 90%, FEM < 33%, silencio auscultatorio, alteración consciencia.<br/><br/>
      <b>MANEJO INICIAL (1ª hora):</b><br/>
      1. <b>O₂ suplementario</b> para SpO₂ 94-98%.<br/>
      2. <b>Salbutamol 2.5-5 mg nebulizado con O₂ 6-8 L/min</b> c/20 min × 3 dosis.<br/>
      3. <b>Bromuro de Ipratropio 500 mcg</b> + salbutamol (en crisis severa).<br/>
      4. <b>Corticoides sistémicos</b>: prednisolona 40-50 mg VO o hidrocortisona 100-200 mg IV.<br/>
      5. <b>Sulfato de Magnesio 2 g IV</b> en 20 min si refractaria.<br/>
      <b>SI NO MEJORA en 1h:</b><br/>
      • Nebulización continua salbutamol 10-15 mg/h.<br/>
      • Adrenalina IM (si anafilaxia asociada).<br/>
      • Considerar VNI o intubación si fatiga respiratoria.<br/>
      • UCI si: SpO₂ < 92% con O₂, hipercapnia (PCO₂ > 45), exhausto, alteración consciencia.
    `,

    epoc: `
      <b>Salbutamol en Exacerbación EPOC (GOLD 2024):</b><br/>
      <b>CUIDADOS ESPECIALES:</b><br/>
      • Nebulizar con AIRE comprimido (no O₂ alto flujo) si paciente hipercápnico (riesgo retención CO₂).<br/>
      • Si necesita O₂: usar mascarilla Venturi 24-28% para mantener SpO₂ 88-92% (no más alta).<br/><br/>
      <b>MANEJO:</b><br/>
      1. Salbutamol 2.5 mg nebulizado + Ipratropio 500 mcg c/4-6h.<br/>
      2. Corticoides sistémicos: prednisolona 40 mg/día × 5 días.<br/>
      3. Antibióticos si esputo purulento (amoxicilina-clavulánico, levofloxacino).<br/>
      4. VNI (BiPAP) si pH < 7.35 + hipercapnia + disnea severa.<br/>
      <b>VIGILANCIA:</b><br/>
      • Gasometría arterial pre y post tratamiento.<br/>
      • SpO₂ no debe exceder 92% (riesgo empeoramiento hipercapnia).<br/>
      • Vigilar somnolencia, confusión (signos retención CO₂).
    `,

    hiperpotasemia: `
      <b>Salbutamol en Hiperpotasemia:</b><br/>
      <b>Efecto secundario aprovechable:</b><br/>
      • Salbutamol IV o nebulizado ↓ K+ sérico transitoriamente (efecto β2 → entrada de K+ a célula).<br/>
      • Reducción esperada: 0.5-1 mEq/L en 30-60 min.<br/>
      <b>Dosis:</b><br/>
      • Nebulización: 10-20 mg en 4 mL SF (dosis MAYOR que para broncoespasmo).<br/>
      • IV: 0.5 mg en 100 mL SG 5% en 15 min.<br/>
      <b>Como parte del tratamiento agudo de hiperpotasemia:</b><br/>
      1. Gluconato cálcico (protege miocardio).<br/>
      2. Insulina + glucosa (entrada K+ a célula).<br/>
      3. Salbutamol (adyuvante).<br/>
      4. Furosemida (excreción renal).<br/>
      5. Resinas, hemodiálisis (eliminación definitiva).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar la fuente de gas para nebulización: <b>O₂ en asma, AIRE en EPOC hipercápnico</b>.',
      'Flujo correcto del nebulizador: <b>6-8 L/min</b> para generar partículas respirables.',
      'Volumen mínimo de llenado: 4-5 mL (para que el nebulizador funcione bien).',
      'Tiempo de nebulización: 10-15 min hasta vapor mínimo o cápsula seca.',
      'Posición del paciente: <b>sentado o semi-sentado</b> para mejor expansión torácica.',
      'Mascarilla bien ajustada — boca y nariz cubiertas.',
      'Vigilancia continua de FC, SpO₂ durante nebulización.',
      'Educar al paciente: respirar normal y profundo, NO contener respiración.',
      'En MDI: técnica con cámara espaciadora es ESENCIAL (10× más eficaz que sin cámara).',
      'Enjuagar boca tras nebulización si hay corticoide asociado (prevenir candidiasis).',
      'En dosis repetidas: control K+ sérico, vigilar arritmias.',
      'Documentar: dosis, vía, hora, fuente de gas, respuesta clínica (FR, SpO₂, sibilancias antes/después).',
    ],

    efectosAdversos: [
      '🟠 Hipopotasemia (dosis altas o repetidas)',
      '🟠 Taquicardia, palpitaciones',
      '🟠 Arritmias cardíacas (raras)',
      '🟠 Broncoespasmo paradójico (raro)',
      '🟡 Temblor fino (muy común — efecto β2 muscular)',
      '🟡 Cefalea',
      '🟡 Ansiedad, agitación, nerviosismo',
      '🟡 Insomnio',
      '🟡 Náuseas (raras)',
      '🟡 Boca seca, irritación faríngea',
      '🟡 Empeoramiento glucemia en diabéticos',
      '🟡 Acidosis láctica (dosis muy altas, raro)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a salbutamol u otros β2-agonistas.',
      'Taquiarritmias graves no controladas.',
      'Hipertiroidismo no controlado (riesgo crisis).',
      'Precaución en: cardiopatía isquémica, IAM reciente, HTA severa, diabetes descompensada, glaucoma de ángulo cerrado.',
      'Embarazo: usar solo si claramente necesario (categoría C).',
    ],

    fotosensibilidad: 'No es significativamente fotosensible. Conservar a temperatura ambiente protegido de luz directa pero sin requerimientos especiales de envase opaco.',

    estabilidad: {
      'Frasco sin abrir':           'Temperatura ambiente (< 25°C) hasta vencimiento',
      'Frasco multidosis abierto':  '1 mes a temperatura ambiente',
      'Monodosis (UDV)':            'Uso único — desechar tras administración',
      'Diluido en SF para nebulización': '<b>Usar inmediatamente</b> — no preparar con anticipación',
      'Temperatura':                 'NO congelar · 15-25°C',
      'Aspecto':                     'Transparente, incolora — desechar si turbidez o cambio de color',
    },

    presentaciones: [
      'Salbutamol nebulización 5 mg/mL — frasco multidosis 10 mL (Ventolin®)',
      'Salbutamol nebulización 2.5 mg/2.5 mL — monodosis (UDV)',
      'Salbutamol nebulización 5 mg/2.5 mL — monodosis (alta concentración)',
      'Salbutamol MDI 100 mcg/inhalación — inhalador presurizado (Ventolin®)',
      'Salbutamol IV 0.5 mg/mL — ampolla 1 mL (uso restringido)',
      'Salbutamol VO 2 mg, 4 mg comprimidos',
      'Salbutamol VO 2 mg/5 mL jarabe pediátrico',
      'Combinaciones: Combivent® (salbutamol + ipratropio nebulización)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Crisis asma adulto (nebulización)', dosis: '2.5-5 mg c/20 min × 3 dosis',         via: 'NEB' },
      { indicacion: 'Crisis asma pediátrica',            dosis: '0.15 mg/kg (mín 2.5, máx 5 mg)',      via: 'NEB' },
      { indicacion: 'Crisis severa refractaria',         dosis: 'Nebulización continua 10-15 mg/h',    via: 'NEB' },
      { indicacion: 'EPOC exacerbación',                 dosis: '2.5 mg c/4-6h + ipratropio',          via: 'NEB' },
      { indicacion: 'MDI con cámara (crisis)',           dosis: '4-8 puffs c/20 min × 3',              via: 'MDI' },
      { indicacion: 'IV refractario (UCI)',              dosis: '4-8 mcg/kg en 10 min',                via: 'IV' },
      { indicacion: 'Infusión IV continua',              dosis: '0.1-0.5 mcg/kg/min',                  via: 'IV' },
      { indicacion: 'Hiperpotasemia',                    dosis: '10-20 mg nebulizado',                 via: 'NEB' },
    ],

    embarazo: 'Categoría C (FDA). Atraviesa placenta — datos limitados pero amplia experiencia clínica. Asma no controlada en embarazo es MÁS PELIGROSA que el medicamento. Continuar tratamiento si necesario. En trabajo de parto: puede retrasar inicio del parto por tocolisis. Compatible con lactancia.',

    pediatria: '<b>0.15 mg/kg/dosis</b> (mínimo 2.5 mg, máximo 5 mg) c/20 min × 3 dosis en crisis severa. Lactantes < 2 años: 2.5 mg c/4-6h. En crisis grave pediátrica: nebulización continua 0.3-0.5 mg/kg/h.',

    adultoMayor: 'Mayor riesgo de taquicardia, arritmias, hipopotasemia. Vigilancia cardiovascular intensiva. Considerar dosis inicial menor (2.5 mg) en cardiópatas. Evitar en pacientes con taquiarritmias o IAM reciente.',

    insufRenal: 'Sin ajuste de dosis significativo. En IRC severa: vigilar acumulación, especialmente con dosis repetidas. Monitorización K+ más frecuente.',

    insufHepatica: 'Sin ajuste de dosis específico. Metabolismo hepático presente pero amplia ventana terapéutica.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Ventolin® Respirador. Agencia Española de Medicamentos.',
      'GINA 2024. Global Strategy for Asthma Management and Prevention. Global Initiative for Asthma.',
      'GOLD 2024. Global Strategy for COPD. Global Initiative for Chronic Obstructive Lung Disease.',
      'FDA DailyMed. Albuterol Sulfate Inhalation Solution. U.S. National Library of Medicine.',
      'NICE Guidelines. Asthma Diagnosis and Management. NG80. UK National Institute for Health and Care Excellence.',
      'BTS/SIGN Guidelines. British Thoracic Society. Asthma Guideline. 2019.',
      'Pediamécum AEP. Salbutamol. Asociación Española de Pediatría.',
      'Cates CJ, et al. Holding chambers vs nebulisers for beta-agonist treatment. Cochrane. 2013.',
    ],
  },

});
