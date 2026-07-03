/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/gluconato-calcico.js
   Fuentes: CIMA AEMPS (Gluconato Cálcico B. Braun),
   FDA DailyMed, AHA ACLS 2020, Red Antídotos AEMPS
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'gluconato-calcico',
  nombre:         'Gluconato Cálcico 10%',
  nombreGenerico: 'Calcium Gluconate 10%',
  categoria:      'electrolitos',
  tags:           ['electrolito', 'hiperpotasemia', 'hipocalcemia', 'antídoto Ca-antagonistas', 'antídoto Mg', 'tetania', 'PCR'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Solución irritante. Riesgo de extravasación con necrosis tisular grave (soft tissue necrosis). Vigilar arritmias con administración IV rápida. NO usar en pacientes digitalizados (potencia toxicidad digitálica). Precipitación con bicarbonato, fosfatos.',

  nivel1: {

    puntosClave: [
      'Sal de calcio ORGÁNICA — <b>MENOS IRRITANTE</b> que cloruro cálcico (preferida vía periférica). Aporta 9 mg de Ca elemental por mL (2.2 mEq/10 mL).',
      '<b>ANTÍDOTO CARDIOPROTECTOR EN HIPERPOTASEMIA CON CAMBIOS ECG</b> - estabiliza membrana miocárdica en 1-3 min (NO reduce K+ sérico).',
      'Antídoto en: intoxicación por CALCIO-ANTAGONISTAS (verapamilo, diltiazem, amlodipino), SULFATO DE MAGNESIO (eclampsia), FLUORHÍDRICO, EDTA.',
      'Administración IV LENTA obligatoria: <b>1-2 mL/min máximo</b> - IV rápida causa hipotensión, bradicardia, arritmias, PCR.',
      '<b>PRECIPITACIÓN con bicarbonato, fosfatos, sulfatos</b> - usar líneas separadas o lavar bien con SF.',
    ],

    resumenRapido: 'Sal orgánica de calcio (10% = 100 mg/mL de gluconato = 9 mg/mL de Ca elemental = 0.22 mmol/mL). Aporta calcio en emergencias hipocalcémicas y actúa como estabilizador de membrana en hiperpotasemia. Menos irritante que cloruro cálcico (10% cloruro = 27 mg Ca/mL). Indicado en: hiperpotasemia con cambios ECG (cardiop protector), hipocalcemia sintomática aguda (tetania), intoxicación por calcio-antagonistas, reversión de sulfato de magnesio en eclampsia, intoxicación por fluorhídrico, tetania por hiperventilación/hipoparatiroidismo. Inicio: 1-3 min IV.',

    objetivoTerapeutico: 'Cardioprotección en hiperpotasemia · Elevar Ca²⁺ sérico en hipocalcemia · Antagonizar calcio-antagonistas · Revertir toxicidad por Mg · Tratar tetania · Alcanzar Ca²⁺ iónico > 1.1 mmol/L',

    preparacion: {
      'Presentación':             '<b>Gluconato Cálcico 10% - ampolla 10 mL (100 mg/mL = 1 g total = 2.2 mEq)</b>',
      'Contenido calcio elemental':'<b>9 mg Ca elemental por mL</b> (aprox 4.5 mEq por ampolla de 10 mL)',
      'Diluyente':                'SF 0.9% · SG 5% (compatibles)',
      'Dilución para infusión':   '<b>1-2 g (10-20 mL) en 100 mL SF/SG 5%</b>',
      'Vía':                      'IV exclusiva (preferida) - preferentemente vía CENTRAL o vena gruesa',
      '⚠️ Vía periférica':          'Aceptable con gluconato (a diferencia del cloruro cálcico)',
      '⏱️ HIPERPOTASEMIA con ECG': '<b>10-20 mL (1-2 g) IV LENTO en 2-5 min</b>',
      '⏱️ HIPOCALCEMIA aguda':     '<b>10-20 mL (1-2 g) IV en 10-20 min</b>',
      '⏱️ INFUSIÓN mantenimiento': '<b>0.5-2 mg/kg/h Ca elemental IV</b>',
      '⏱️ ANTAG. CALCIO-ANTAG.':  '<b>1-3 g IV bolo lento c/5-10 min hasta respuesta</b>',
      '⏱️ REVERTIR MAGNESIO':     '1 g IV en 5-10 min',
      '⏱️ TETANIA':                '1 g IV en 10 min',
      '⏱️ VELOCIDAD MÁXIMA':      '<b>1-2 mL/min</b> (bolo demasiado rápido causa arritmias)',
      'Bomba':                    'Recomendada para infusión controlada',
      'Sitio IV':                 'Vena de gran calibre, preferir central en dosis altas',
      '🧊 ESTABILIDAD':           'Ampolla sin abrir: hasta vencimiento · Diluida: 24h a TA en SF/SG5%',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez o cristales',
    },

    vigilancia: {
      antes: [
        'Verificar Ca²⁺ sérico basal (total y ionizado).',
        'ECG basal - especialmente en hiperpotasemia (T picudas, QRS ancho).',
        'Confirmar función renal, magnesio, fósforo séricos.',
        '<b>REVISAR uso de DIGOXINA</b> - calcio potencia toxicidad digitálica.',
        'Verificar acceso IV permeable - preferir vena gruesa o central.',
        'ECG monitorizado durante y post-administración.',
        'Tener disponible bomba de infusión.',
        'Doble verificación: dosis en mg de Ca elemental (no confundir con mg de gluconato).',
      ],
      durante: [
        '<b>Administración IV LENTA: máximo 1-2 mL/min</b> (bolo rápido causa asistolia).',
        'Monitor cardíaco continuo - vigilar arritmias, bradicardia, ↓ PA.',
        'En hiperpotasemia: <b>vigilar ECG - normalización de ondas T picudas es objetivo</b>.',
        'En intoxicación calcio-antagonistas: vigilar mejoría hemodinámica (↑ PA, ↑ FC).',
        'Vigilar sitio IV EXTREMADAMENTE - EXTRAVASACIÓN causa NECROSIS TISULAR severa.',
        'Si dolor, hinchazón, palidez en sitio IV: SUSPENDER inmediatamente.',
        'Vigilar sensación de calor generalizado, sabor metálico (esperado, transitorio).',
      ],
      despues: [
        'Ca²⁺ sérico ionizado 1-2h post-administración.',
        'Objetivo: Ca²⁺ ionizado 1.1-1.3 mmol/L (Ca total 8.5-10.5 mg/dL).',
        'Repetir ECG en hiperpotasemia (T picudas deben normalizarse).',
        'Vigilar hipofosfatemia post-corrección (Ca⁺ y P son inversamente relacionados).',
        'Vigilar arritmias tardías (especialmente si digoxina previa).',
        'En pacientes con vía central: sin restricción de vías siguientes.',
        'En vía periférica: vigilar sitio IV 24h por extravasación tardía.',
        'Documentar: dosis exacta (gramos y Ca elemental), hora, Ca²⁺ pre/post, respuesta ECG.',
      ],
      suspender: [
        'Ca²⁺ sérico > 12 mg/dL (hipercalcemia).',
        'Arritmias ventriculares nuevas.',
        'Hipotensión severa (PAS < 80).',
        'Bradicardia severa (FC < 40).',
        'EXTRAVASACIÓN en sitio IV.',
        'Precipitación visible con otros fármacos.',
        'En pacientes digitalizados con signos de intoxicación digitálica.',
      ],
    },

    incompatibilidades: [
      '<b>BICARBONATO SÓDICO</b> - PRECIPITACIÓN INMEDIATA (forma carbonato cálcico insoluble).',
      '<b>FOSFATOS</b> (potásico, sódico) - PRECIPITACIÓN (fosfato cálcico).',
      '<b>SULFATOS</b> (magnesio sulfato, hidrocortisona sulfato) - PRECIPITACIÓN.',
      'Ceftriaxona - PRECIPITACIÓN letal (interacción documentada en neonatos).',
      'Anfotericina B - INCOMPATIBILIDAD.',
      'Tetraciclinas - incompatibilidad.',
      'Vancomicina - verificar antes de mezclar.',
      'Digoxina - potencia toxicidad digitálica.',
      'Adenosina, atenolol.',
      '<b>NUNCA mezclar en misma jeringa/línea con estos fármacos</b>.',
      '<b>Lavar SIEMPRE la línea IV con SF antes y después</b>.',
      'Preferir línea IV independiente para gluconato cálcico.',
    ],

    alertasSeguridad: [
      '🔴 <b>EXTRAVASACIÓN causa NECROSIS TISULAR SEVERA</b> - vigilancia estricta del sitio IV.',
      '🔴 <b>PRECIPITACIÓN con bicarbonato, fosfatos, ceftriaxona</b> - riesgo embólico/mortal.',
      '🔴 Bolo IV rápido causa hipotensión, bradicardia, ARRITMIAS, ASISTOLIA.',
      '🔴 Potencia TOXICIDAD DIGITÁLICA - contraindicado en pacientes digitalizados con signos de intoxicación.',
      '🔴 En NEONATOS: MEZCLA con ceftriaxona causa precipitación cristalina PULMONAR y renal - MUERTE reportada.',
      '🟠 Hipercalcemia con dosis excesivas.',
      '🟠 Hipofosfatemia secundaria.',
      '🟠 Vasodilatación con sensación de calor generalizado (transitoria).',
      '🟡 Sabor metálico común durante infusión.',
      '🟡 Náuseas, vómitos leves.',
      '🟡 Estreñimiento con uso prolongado VO.',
      '🟡 IM/SC CONTRAINDICADO (necrosis) - solo IV.',
    ],
  },

  modulos: {

    hiperpotasemia: `
      <b>Gluconato Cálcico en Hiperpotasemia:</b><br/>
      <b>PROBLEMA CLAVE:</b> Ca²⁺ NO REDUCE K⁺ SÉRICO - solo estabiliza miocardio (cardioprotección).<br/><br/>
      <b>INDICACIÓN:</b><br/>
      • Hiperpotasemia con CAMBIOS ECG:<br/>
      • Ondas T picudas.<br/>
      • Ensanchamiento del QRS.<br/>
      • Ausencia de onda P.<br/>
      • Ritmo idioventricular ("sine wave").<br/>
      • K⁺ > 6.5-7 mEq/L (aún sin ECG).<br/><br/>
      <b>MECANISMO:</b><br/>
      • Aumenta el umbral de despolarización miocárdica.<br/>
      • Restablece diferencia entre potencial de reposo y umbral.<br/>
      • Inicio: 1-3 minutos.<br/>
      • Duración: 30-60 minutos (por eso hay que tratar la hiperpotasemia con otros fármacos también).<br/><br/>
      <b>PROTOCOLO (parte del tratamiento agudo):</b><br/>
      1. <b>GLUCONATO CÁLCICO 10 mL IV LENTO en 2-5 min</b> - PRIMERO (protección).<br/>
      2. Vigilar ECG - ondas T deben normalizarse.<br/>
      3. Si persisten cambios: repetir 5-10 min después.<br/>
      4. Después administrar tratamientos que REDUCEN K⁺:<br/>
      • INSULINA 10 UI IV + GLUCOSA 25 g IV.<br/>
      • SALBUTAMOL 10-20 mg nebulizado.<br/>
      • BICARBONATO 50-100 mEq IV (si acidosis) - <b>USAR LÍNEA SEPARADA</b>.<br/>
      • FUROSEMIDA (excreción renal).<br/>
      • RESINAS (poliestirenosulfonato).<br/>
      • HEMODIÁLISIS (definitivo si severo).<br/><br/>
      <b>DURACIÓN LIMITADA:</b><br/>
      • Efecto ~30-60 min → repetir Ca²⁺ cada 30-60 min hasta K⁺ < 6.5 y ECG normalizado.<br/>
      • NO sustituye a los tratamientos hipopotasemiantes.
    `,

    hipocalcemia: `
      <b>Gluconato Cálcico en Hipocalcemia Sintomática:</b><br/>
      <b>SÍNTOMAS DE HIPOCALCEMIA:</b><br/>
      • <b>Tetania</b>: espasmos musculares, calambres, laringoespasmo.<br/>
      • <b>Signo de Chvostek</b>: contracción muscular facial al percutir nervio facial.<br/>
      • <b>Signo de Trousseau</b>: espasmo carpopedal al inflar manguito.<br/>
      • <b>Parestesias</b>: peribucales, dedos.<br/>
      • Convulsiones.<br/>
      • Arritmias, prolongación QT.<br/>
      • Cardiomiopatía en casos crónicos.<br/><br/>
      <b>CAUSAS:</b><br/>
      • Hipoparatiroidismo (post-tiroidectomía).<br/>
      • Déficit vitamina D.<br/>
      • Insuficiencia renal.<br/>
      • Pancreatitis aguda.<br/>
      • Transfusión masiva (citrato quela calcio).<br/>
      • Sepsis.<br/>
      • Hipoalbuminemia (Ca total ↓ pero ionizado normal).<br/>
      • Alcalosis respiratoria (hiperventilación).<br/><br/>
      <b>PROTOCOLO:</b><br/>
      <b>Aguda sintomática severa (tetania, convulsiones):</b><br/>
      • <b>1-2 g gluconato cálcico IV en 10-20 min</b>.<br/>
      • Repetir cada 6-8h si necesario.<br/>
      <b>Mantenimiento:</b><br/>
      • Perfusión: 0.5-2 mg/kg/h Ca elemental.<br/>
      • Dilución: 100 mL gluconato en 1 L SF/SG5% → 90 mg Ca/mL a 30-60 mL/h.<br/>
      <b>Transición a VO:</b><br/>
      • Carbonato cálcico, gluconato cálcico VO 1-4 g/día.<br/>
      • Vitamina D (calcitriol 0.25-1 mcg/día).<br/><br/>
      <b>CUIDADO:</b><br/>
      • Corregir magnesio primero (hipoMg refractariza tratamiento).<br/>
      • En hipoalbuminemia: usar Ca IONIZADO como referencia.<br/>
      • En transfusión masiva: profilaxis con Ca por cada 3-4 U de hematíes.
    `,

    calcioAntagonistas: `
      <b>Gluconato Cálcico en Intoxicación por Calcio-Antagonistas:</b><br/>
      <b>CALCIO-ANTAGONISTAS (CCB):</b><br/>
      • Dihidropiridinas: amlodipino, nifedipino, felodipino (arterioselectivos).<br/>
      • No-dihidropiridinas: verapamilo, diltiazem (cardioselectivos - más peligrosos en OD).<br/><br/>
      <b>SIGNOS DE INTOXICACIÓN:</b><br/>
      • Hipotensión SEVERA refractaria.<br/>
      • Bradicardia severa (especialmente verapamilo/diltiazem).<br/>
      • Bloqueo AV, ritmo de escape.<br/>
      • Hipoperfusión, shock cardiogénico.<br/>
      • Hiperglucemia (bloqueo canales Ca² en célula β pancreática).<br/>
      • Acidosis láctica.<br/>
      • Convulsiones (dihidropiridinas por hipoperfusión).<br/>
      • Coma.<br/><br/>
      <b>PROTOCOLO ANTÍDOTO (Red Antídotos):</b><br/>
      <b>1. CALCIO IV (primera línea):</b><br/>
      • <b>Gluconato cálcico 3-6 g IV (30-60 mL de 10%) en 5 min</b>.<br/>
      • Repetir cada 5-10 min hasta respuesta.<br/>
      • O infusión continua 30-50 mg/kg/h.<br/>
      • Alternativa: cloruro cálcico (3× más potente pero más irritante - solo vía central).<br/><br/>
      <b>2. ATROPINA</b>: 0.5-1 mg IV si bradicardia (poco efectiva).<br/>
      <b>3. GLUCAGÓN</b>: 5-10 mg IV bolo (mecanismo independiente de Ca).<br/>
      <b>4. INSULINA/GLUCOSA HIGH-DOSE</b>: <br/>
      • Insulina 1 UI/kg IV bolo + 1 UI/kg/h en infusión.<br/>
      • Glucosa: 25 g IV bolo + 0.5 g/kg/h.<br/>
      • Efecto inotrópico independiente de Ca.<br/>
      <b>5. VASOPRESORES</b>: noradrenalina, adrenalina.<br/>
      <b>6. EMULSIÓN LIPÍDICA (Intralipid 20%)</b>: <br/>
      • Bolo 1.5 mL/kg + infusión 0.25 mL/kg/min.<br/>
      • Especialmente en verapamilo/diltiazem.<br/>
      <b>7. Soporte avanzado</b>: marcapasos, ECMO, RCP prolongada.<br/><br/>
      <b>OBJETIVO:</b> Mantener PAS > 90, FC > 60, perfusión adecuada.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>NUNCA administrar por IM/SC</b> - solo IV (necrosis grave).',
      'Preferir gluconato sobre cloruro cálcico en vía periférica (menos irritante).',
      'Vía central o vena gruesa - preferible.',
      'Etiquetar bolsa: Gluconato Cálcico [g], concentración, velocidad, hora.',
      '<b>VELOCIDAD MÁXIMA: 1-2 mL/min</b> - bolo rápido causa asistolia.',
      'Bomba de infusión para dosis altas o infusión continua.',
      '<b>VIGILAR SITIO IV cada 5-10 min</b> - extravasación causa necrosis.',
      'Si dolor, hinchazón, palidez: SUSPENDER inmediatamente.',
      '<b>NUNCA mezclar con bicarbonato, fosfatos, ceftriaxona</b> - PRECIPITACIÓN.',
      'Lavar línea con SF antes y después de gluconato cálcico.',
      'Preferir línea IV independiente.',
      'ECG monitorizado durante y post-administración.',
      'Vigilar sabor metálico, calor generalizado (esperados, transitorios).',
      'En pacientes digitalizados: EXTREMA precaución (potencia toxicidad).',
      'Ca²⁺ ionizado post-administración (30-60 min).',
      'Documentar: dosis en gramos, Ca elemental (mg), hora, Ca pre/post.',
      'En extravasación: HIALURONIDASA 150 UI SC + calor local + elevar extremidad.',
    ],

    efectosAdversos: [
      '🔴 Necrosis tisular por extravasación',
      '🔴 Precipitación con embolias (si mezclado con bicarbonato/fosfatos)',
      '🔴 Arritmias ventriculares, asistolia (bolo rápido)',
      '🔴 Bradicardia severa',
      '🔴 Toxicidad digitálica potenciada',
      '🔴 Hipercalcemia con sobredosis',
      '🟠 Hipotensión moderada',
      '🟠 Hipofosfatemia secundaria',
      '🟠 Calcificaciones ectópicas (uso prolongado)',
      '🟡 Sabor metálico (esperado)',
      '🟡 Sensación de calor generalizado',
      '🟡 Rubor facial',
      '🟡 Náuseas, vómitos leves',
      '🟡 Constipación',
      '🟡 Sequedad de boca',
    ],

    contraindicaciones: [
      'Hipercalcemia (Ca²⁺ > 10.5 mg/dL o Ca ionizado > 1.3 mmol/L).',
      'Fibrilación ventricular en curso.',
      'Pacientes con intoxicación digitálica documentada.',
      'Nefrolitiasis por cálcio.',
      'Hipersensibilidad a productos de calcio.',
      'Sarcoidosis con hipercalcemia.',
      'Precaución en: pacientes digitalizados, IRC con hiperfosfatemia, hipercalciuria.',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente sin requerimientos especiales.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente (15-25°C) hasta vencimiento',
      'Diluida en SF/SG 5%':       '24 horas a TA · 48 horas refrigerada',
      'Post-apertura':              'Usar inmediatamente (microbiológicamente)',
      'Aspecto':                    'Transparente, incolora — desechar si turbidez o cristales',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Gluconato Cálcico 10% - ampolla 10 mL (1 g gluconato = 90 mg Ca elemental)',
      'Gluconato Cálcico 10% - vial 50 mL, 100 mL',
      'Cloruro Cálcico 10% - ampolla 10 mL (más potente, más irritante)',
      'Calcio VO: carbonato 500-1500 mg, citrato, gluconato',
      'B. Braun, Fresenius Kabi, Baxter (múltiples fabricantes)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hiperpotasemia con cambios ECG',       dosis: '<b>1-2 g (10-20 mL 10%) IV en 2-5 min</b>', via: 'IV' },
      { indicacion: 'Hipocalcemia aguda sintomática',       dosis: '<b>1-2 g IV en 10-20 min</b>',              via: 'IV' },
      { indicacion: 'Tetania',                               dosis: '1 g IV en 10 min',                          via: 'IV' },
      { indicacion: 'Intoxicación Ca-antagonistas',         dosis: '<b>3-6 g IV en 5 min, repetir c/5-10 min</b>',via: 'IV' },
      { indicacion: 'Revertir sulfato Mg (eclampsia)',      dosis: '1 g IV en 5-10 min',                        via: 'IV' },
      { indicacion: 'Intoxicación fluorhídrico',             dosis: '1-2 g IV + local si quemadura',             via: 'IV' },
      { indicacion: 'Transfusión masiva (profilaxis)',      dosis: '1 g IV c/4 U hematíes',                     via: 'IV' },
      { indicacion: 'Perfusión mantenimiento',                dosis: '0.5-2 mg/kg/h Ca elemental',                via: 'IV' },
      { indicacion: 'Pediátrico hipocalcemia',                dosis: '100-200 mg/kg IV en 10 min (máx 3 g)',     via: 'IV' },
      { indicacion: 'Velocidad MÁXIMA',                       dosis: '<b>1-2 mL/min</b>',                          via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Uso en emergencias maternas (eclampsia, hipocalcemia severa, intoxicación). Sin evidencia de teratogenicidad. Compatible con lactancia.',

    pediatria: 'Neonatos: 100-200 mg/kg IV (máx 3 g/dosis) en 10 min. <b>NUNCA con ceftriaxona</b> (precipitación cristalina mortal en pulmones/riñones). Dosis pediátrica: 60-100 mg/kg/dosis IV.',

    adultoMayor: 'Sin ajuste específico. Vigilancia intensiva de arritmias (mayor sensibilidad). Precaución con polifarmacia (digoxina, diuréticos tiazídicos).',

    insufRenal: 'En IRC: precaución por posible hiperfosfatemia. Ajuste según respuesta clínica. En diálisis: dosis estándar.',

    insufHepatica: 'Sin ajuste específico. Vigilancia clínica estándar.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Gluconato Cálcico B. Braun 10%. Agencia Española de Medicamentos.',
      'FDA DailyMed. Calcium Gluconate Injection. U.S. National Library of Medicine.',
      'AHA ACLS Guidelines 2020. Hyperkalemia and Cardiac Arrest. Circulation.',
      'AACE Guidelines. Hyperkalemia Management. J Emerg Med. 2019.',
      'Red de Antídotos AEMPS. Gluconato Cálcico - Protocolos de Uso.',
      'St-Onge M, et al. Consensus Guidelines on Calcium Channel Blocker Poisoning. Crit Care Med. 2017.',
      'Ceftriaxone-Calcium Interaction. FDA Safety Alert. 2007.',
      'ESC Guidelines. Acute Cardiovascular Care. European Heart Journal. 2020.',
    ],
  },

});
