/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/bicarbonato-sodico.js
   Fuentes: CIMA AEMPS (Bicarbonato Sódico 1M B. Braun),
   FDA DailyMed, AHA ACLS 2020, Red Antídotos
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'bicarbonato-sodico',
  nombre:         'Bicarbonato Sódico 8.4%',
  nombreGenerico: 'Sodium Bicarbonate 1M',
  categoria:      'electrolitos',
  tags:           ['electrolito', 'acidosis metabólica', 'PCR', 'hiperpotasemia', 'antídoto ATC', 'urgencias'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Solución HIPERTÓNICA (8.4% = 1 mmol/mL). Riesgo de alcalosis metabólica, hipernatremia, hipopotasemia, hipocalcemia, edema pulmonar, extravasación con necrosis. NUNCA administrar por vía IM/SC. Precipitación con muchos fármacos.',

  nivel1: {

    puntosClave: [
      '<b>Solución tampón HIPERTÓNICA</b> (8.4% = 1 mEq/mL = 1 mmol/mL) — neutraliza acidez uniéndose a H+ para formar CO₂ + H₂O.',
      'Indicaciones principales: <b>ACIDOSIS METABÓLICA severa</b> (pH < 7.1), <b>HIPERPOTASEMIA</b> con cambios ECG, <b>INTOXICACIÓN POR ANTIDEPRESIVOS TRICÍCLICOS</b> (QRS > 100 ms), alcalinización urinaria en intoxicación por salicilatos/barbitúricos.',
      'Uso rutinario en PCR CONTROVERTIDO: solo en PCR prolongado > 10-15 min o etiología reversible (hiperpotasemia, ATC).',
      '<b>PRECIPITACIÓN con CATECOLAMINAS, CALCIO, MAGNESIO</b> — usar líneas SEPARADAS o lavar bien con SF entre fármacos.',
      'Cálculo del déficit: <b>mEq HCO₃ = 0.3 × peso (kg) × déficit base</b> (administrar 50% de la dosis calculada, revalorar).',
    ],

    resumenRapido: 'Solución alcalina tampón (bicarbonato 1M = 8.4%). Neutraliza acidez: HCO₃⁻ + H⁺ → H₂CO₃ → CO₂ + H₂O. Requiere ventilación adecuada para eliminar CO₂ (si no, empeora acidosis intracelular). Indicaciones: acidosis metabólica severa (pH < 7.1), hiperpotasemia con cambios ECG, intoxicación por antidepresivos tricíclicos (QRS ancho), alcalinización urinaria (salicilatos, barbitúricos, rabdomiolisis), PCR prolongado con etiología reversible. Inicio: 15 min · Duración: 1-2h.',

    objetivoTerapeutico: 'Corregir acidosis metabólica (pH > 7.2) · Reducir K+ sérico en hiperpotasemia · Ensanchar QRS en intoxicación ATC · Alcalinizar orina · Restaurar homeostasis ácido-base',

    preparacion: {
      'Presentación':             '<b>Bicarbonato Sódico 8.4% (1 M) - ampolla 10 mL (10 mEq/mmol)</b>',
      'Presentación alt.':        'Bicarbonato Sódico 8.4% frasco 250 mL, 500 mL',
      'Presentación 1.4% (isotónico)':'Bicarbonato Sódico 1.4% frasco 250 mL, 500 mL (perfusión periférica)',
      'Diluyente':                '<b>SG 5% o SF 0.9%</b> (compatible)',
      '⚠️ VÍA CENTRAL SIEMPRE con 8.4%':'<b>Bicarbonato 8.4% es HIPERTÓNICO — SÓLO vía central o vena gruesa</b>',
      'Vía periférica':            'SOLO diluido: mezclar 100 mL bicarbonato 8.4% + 250-500 mL SF/SG5%',
      'Dilución PCR (adulto)':    '<b>50-100 mL de 8.4% (50-100 mEq) IV bolo directo</b>',
      'Dilución perfusión':        '150 mL de 8.4% en 850 mL SG5% → aprox. bicarbonato 1.5% isotónico',
      'Vía':                      'IV exclusiva (central preferida para 8.4%) - NUNCA IM/SC',
      '⏱️ DOSIS PCR (últimos guidelines)': '<b>1 mEq/kg IV bolo</b> (típico 50-100 mEq adulto)',
      '⏱️ DOSIS INTOXICACIÓN ATC': '<b>1-2 mEq/kg IV bolo + perfusión mantenimiento</b>',
      '⏱️ DOSIS HIPERPOTASEMIA':  '<b>50-100 mEq IV en 5 min</b>',
      '⏱️ ACIDOSIS METABÓLICA':   '<b>0.3 × peso × déficit base</b> (administrar 50% y revalorar)',
      '⏱️ ALCALINIZACIÓN ORINA':  'Perfusión continua para mantener pH orina > 7.5',
      'Bomba':                    'Recomendada para perfusión continua',
      '🧊 ESTABILIDAD':           'Ampolla sin abrir: hasta vencimiento · Post-apertura: usar inmediatamente',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez, cristales o precipitación',
    },

    vigilancia: {
      antes: [
        'GASOMETRÍA arterial basal: pH, HCO₃, PCO₂, base exceso, K+.',
        'Verificar VENTILACIÓN ADECUADA — sin ventilación efectiva, bicarbonato empeora acidosis intracelular (↑ CO₂).',
        'ECG basal.',
        'Función renal, electrolitos (Na+, K+, Ca²⁺, Mg²⁺).',
        '<b>Confirmar acceso IV central o vena gruesa</b> para 8.4% - riesgo extravasación con necrosis.',
        'Calcular dosis: <b>déficit HCO₃ (mEq) = 0.3 × peso × (24 - HCO₃ real)</b>.',
        'Doble verificación: dosis, dilución, concentración.',
      ],
      durante: [
        'Monitor continuo: ECG, PA, FR, SpO₂.',
        'Vigilar respuesta clínica en intoxicación ATC: QRS debe ESTRECHARSE (< 100 ms).',
        'En hiperpotasemia: repetir ECG a los 5-10 min (T picuda debe normalizar).',
        'Vigilar sitio IV — EXTRAVASACIÓN causa necrosis severa. Si periférica, revisar c/5 min.',
        'Si administrado con calcio o catecolaminas por misma línea: PRECIPITACIÓN visible - lavar con SF.',
        'Vigilar sobrecarga hídrica (paciente cardiópata, IRC).',
      ],
      despues: [
        'Gasometría de control 30 min post-administración.',
        'Objetivo: pH > 7.2 (no normalizar completamente en fase aguda).',
        'Vigilar HIPOPOTASEMIA (bicarbonato desplaza K+ al interior célular).',
        'Vigilar HIPOCALCEMIA (alcalosis ↓ Ca²⁺ ionizado - riesgo tetania, arritmias).',
        'Vigilar HIPERNATREMIA (cada ampolla aporta 10 mEq de sodio).',
        'Vigilar alcalosis de rebote si dosis excesiva.',
        'Continuar tratamiento de la causa subyacente de la acidosis.',
        'Documentar: dosis total, hora, pH pre/post, electrolitos, respuesta.',
      ],
      suspender: [
        'pH > 7.35 (evitar alcalosis).',
        'HCO₃ > 26 mEq/L.',
        'Hipernatremia severa (Na+ > 155).',
        'Hipopotasemia severa (K+ < 3.0).',
        'Hipocalcemia sintomática (tetania, Chvostek positivo).',
        'Edema pulmonar por sobrecarga.',
        'Extravasación en vía periférica.',
        'Precipitación visible con otros fármacos.',
      ],
    },

    incompatibilidades: [
      '<b>CATECOLAMINAS (adrenalina, noradrenalina, dopamina, dobutamina)</b> - INACTIVACIÓN.',
      '<b>CALCIO (cloruro, gluconato)</b> - PRECIPITACIÓN inmediata (forma carbonato de calcio insoluble).',
      '<b>MAGNESIO SULFATO</b> - PRECIPITACIÓN.',
      'Vancomicina - INCOMPATIBLE.',
      'Ciprofloxacino - PRECIPITACIÓN.',
      'Nicardipino, verapamilo.',
      'Insulina - inactivación.',
      'Atropina, morfina, midazolam - verificar.',
      '<b>NALOXONA</b> - NO mezclar (pH alcalino incompatible).',
      'Digoxina, amiodarona.',
      'Etomidato, propofol - precipitación.',
      '<b>SIEMPRE lavar línea con SF antes y después de bicarbonato</b>.',
      'Preferir línea IV independiente para bicarbonato.',
    ],

    alertasSeguridad: [
      '🔴 <b>SOLUCIÓN HIPERTÓNICA</b> (8.4%) - solo vía central o vena gruesa - NECROSIS con extravasación.',
      '🔴 <b>PRECIPITACIÓN con calcio, catecolaminas, magnesio</b> - inactivación medicamentosa.',
      '🔴 EMPEORA ACIDOSIS INTRACELULAR si ventilación inadecuada (↑ CO₂ no eliminado).',
      '🔴 HIPERNATREMIA - cada ampolla 10 mL = 10 mEq de Na⁺ (equivale a 230 mg sal).',
      '🟠 HIPOPOTASEMIA - K+ entra a célula, riesgo arritmias.',
      '🟠 HIPOCALCEMIA - alcalosis ↓ Ca²⁺ ionizado, tetania.',
      '🟠 ALCALOSIS METABÓLICA de rebote con dosis excesivas.',
      '🟠 Sobrecarga hídrica en cardiópatas/renales.',
      '🟡 Uso rutinario en PCR NO recomendado (guidelines actuales) - solo casos específicos.',
      '🟡 Contraindicado en alcalosis metabólica, hipernatremia, hipopotasemia severa.',
    ],
  },

  modulos: {

    acidosis: `
      <b>Bicarbonato en Acidosis Metabólica:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • <b>Acidosis metabólica severa</b> con pH < 7.1 o HCO₃ < 8-10 mEq/L.<br/>
      • Especialmente si compromiso hemodinámico.<br/>
      • Acidosis láctica severa (controvertido - beneficio limitado).<br/>
      • Cetoacidosis diabética con pH < 6.9 (protocolos DKA).<br/>
      • Acidosis por diarrea severa.<br/>
      • Acidosis tubular renal.<br/><br/>
      <b>CÁLCULO DE DOSIS:</b><br/>
      • <b>Déficit HCO₃ (mEq) = 0.3 × peso (kg) × déficit base</b>.<br/>
      • Déficit base = 24 - HCO₃ real.<br/>
      • Ejemplo: paciente 70 kg con HCO₃ 8 → déficit = 24-8 = 16.<br/>
      • Cálculo: 0.3 × 70 × 16 = 336 mEq.<br/>
      • <b>Administrar SOLO 50% de la dosis calculada</b> (168 mEq).<br/>
      • Reevaluar con gasometría 30 min post.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. Confirmar ventilación adecuada.<br/>
      2. Vía central o vena gruesa.<br/>
      3. Administrar 50% de dosis en 30-60 min.<br/>
      4. Gasometría de control.<br/>
      5. Objetivo pH > 7.2 (no normalizar completamente).<br/>
      6. Continuar tratamiento de causa subyacente.<br/><br/>
      <b>PRECAUCIONES:</b><br/>
      • En acidosis láctica: beneficio limitado según estudios recientes (BICAR-ICU).<br/>
      • En DKA: solo si pH < 6.9 (guías ADA).<br/>
      • En acidosis mixta (respiratoria + metabólica): asegurar ventilación primero.
    `,

    tca: `
      <b>Bicarbonato en Intoxicación por Antidepresivos Tricíclicos:</b><br/>
      <b>ANTIDEPRESIVOS TRICÍCLICOS (ATC):</b><br/>
      • Amitriptilina, imipramina, clomipramina, nortriptilina, dosulepina.<br/>
      • Toxicidad: bloqueo canales de Na⁺, K⁺ y receptores muscarínicos.<br/>
      • Ventana estrecha entre dosis terapéutica y tóxica.<br/><br/>
      <b>SIGNOS DE INTOXICACIÓN GRAVE:</b><br/>
      • <b>QRS ancho > 100 ms</b> (bloqueo canales Na⁺).<br/>
      • Onda R alta en aVR (r > 3 mm).<br/>
      • R/S ratio > 0.7 en aVR.<br/>
      • Convulsiones.<br/>
      • Arritmias ventriculares (TV, FV).<br/>
      • Hipotensión refractaria.<br/>
      • Sd anticolinérgico: midriasis, retención urinaria, íleo, hipertermia.<br/>
      • Coma.<br/><br/>
      <b>BICARBONATO ES ANTÍDOTO ESPECÍFICO:</b><br/>
      • Alcaliniza la sangre (pH 7.5-7.55).<br/>
      • Aumenta la unión de ATC a proteínas.<br/>
      • Sodio revierte bloqueo canales Na⁺.<br/>
      • <b>ESTRECHA el QRS y previene arritmias</b>.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. <b>1-2 mEq/kg IV en 1-2 min</b> (bolo inicial).<br/>
      2. Repetir hasta QRS < 100 ms.<br/>
      3. <b>Perfusión mantenimiento</b>: 150 mEq (150 mL de 8.4%) en 1 L SG 5% a 250-500 mL/h.<br/>
      4. Objetivo: pH arterial 7.45-7.55.<br/>
      5. Vigilar K+ (riesgo hipopotasemia).<br/>
      6. NO usar flumazenil (contraindicado).<br/>
      7. Si convulsiones: benzodiacepinas.<br/>
      8. Si arritmias: <b>NO usar antiarrítmicos clase IA/IC</b> (empeoran).
    `,

    hiperpotasemia: `
      <b>Bicarbonato en Hiperpotasemia:</b><br/>
      <b>MECANISMO:</b><br/>
      • Alcalosis desplaza K⁺ del extracelular al intracelular.<br/>
      • Reducción esperada: 0.5-1 mEq/L en 15-30 min.<br/>
      • Efecto transitorio (1-2h).<br/><br/>
      <b>INDICACIÓN:</b><br/>
      • Hiperpotasemia con CAMBIOS ECG (ondas T picudas, QRS ancho, ausencia P, ritmo idioventricular).<br/>
      • K⁺ > 6.5 mEq/L sintomática.<br/>
      • Especialmente útil si acidosis concomitante.<br/><br/>
      <b>PROTOCOLO (parte de tratamiento agudo):</b><br/>
      1. <b>GLUCONATO CÁLCICO 10 mL IV en 2-5 min</b> - protege miocardio (PRIMERO).<br/>
      2. <b>INSULINA 10 UI IV + GLUCOSA 25 g IV</b> - desplaza K⁺ intracelular.<br/>
      3. <b>SALBUTAMOL 10-20 mg nebulizado</b> - desplaza K⁺ intracelular.<br/>
      4. <b>BICARBONATO 50-100 mEq IV en 5 min</b> - especialmente si acidosis.<br/>
      5. <b>FUROSEMIDA</b> - excreción renal.<br/>
      6. <b>RESINAS (poliestirenosulfonato)</b> - eliminación GI.<br/>
      7. <b>HEMODIÁLISIS</b> - eliminación definitiva.<br/><br/>
      <b>CUIDADO:</b><br/>
      • Bicarbonato es adyuvante, NO tratamiento principal.<br/>
      • Menor eficacia si no hay acidosis.<br/>
      • Considerar sobrecarga de sodio en cardiópatas.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar concentración: 8.4% (hipertónico) vs 1.4% (isotónico).',
      '<b>SOLO por vía CENTRAL o VENA GRUESA</b> para 8.4% - riesgo extravasación con necrosis.',
      'Etiquetar con dosis en mEq y volumen exacto.',
      'Bomba de infusión para perfusión continua.',
      '<b>NUNCA mezclar con calcio, catecolaminas, magnesio</b> - PRECIPITACIÓN.',
      '<b>Lavar SIEMPRE la línea con SF antes y después</b> de bicarbonato.',
      'Preferir línea IV independiente para bicarbonato.',
      'Gasometría pre y post-administración (30 min después).',
      'Monitor continuo: ECG, PA, FR, SpO₂.',
      'Vigilar sitio IV cada 5-10 min si periférico - extravasación causa necrosis grave.',
      'En intoxicación ATC: vigilar QRS - debe estrecharse a < 100 ms.',
      'En hiperpotasemia: repetir ECG a los 10 min.',
      'Control de Na⁺, K⁺, Ca²⁺ post-administración.',
      'Documentar: dosis exacta (mEq), hora, pH pre/post, respuesta.',
      'En extravasación: HIALURONIDASA subcutánea + calor local + cirugía si necrosis.',
    ],

    efectosAdversos: [
      '🔴 Alcalosis metabólica de rebote (sobredosis)',
      '🔴 Hipernatremia',
      '🔴 Hipopotasemia (desplazamiento K⁺ intracelular)',
      '🔴 Hipocalcemia (alcalosis ↓ Ca²⁺ ionizado, tetania)',
      '🔴 Edema pulmonar (sobrecarga hídrica)',
      '🔴 Necrosis por extravasación',
      '🔴 Precipitación con calcio/catecolaminas → embolias',
      '🟠 Empeoramiento acidosis intracelular si ventilación inadecuada',
      '🟠 Sobrecarga cardiovascular',
      '🟡 Cefalea',
      '🟡 Náuseas',
      '🟡 Distensión abdominal (por gas CO₂)',
      '🟡 Alcalinización urinaria',
    ],

    contraindicaciones: [
      'Alcalosis metabólica preexistente.',
      'Hipernatremia (Na⁺ > 145).',
      'Hipopotasemia severa (K⁺ < 3.0) NO corregida.',
      'Hipocalcemia sintomática.',
      'Insuficiencia respiratoria con hipoventilación (empeora acidosis intracelular).',
      'Edema pulmonar activo.',
      'Insuficiencia cardíaca descompensada severa.',
      'Insuficiencia renal severa con oligoanuria (relativa).',
      'Vómitos o aspiración gástrica (alcalosis metabólica compensatoria).',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente sin requerimientos especiales.',

    estabilidad: {
      'Ampolla sin abrir':         'Temperatura ambiente (15-25°C) hasta vencimiento',
      'Post-apertura':              'Usar inmediatamente (contaminación microbiológica)',
      'Diluida en SG 5% o SF':     'Usar inmediatamente (recomendación general)',
      'Aspecto':                    'Transparente, incolora — desechar si turbidez, precipitación o cristales',
      'Temperatura':                'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Bicarbonato Sódico 8.4% (1M) - ampolla 10 mL (10 mEq)',
      'Bicarbonato Sódico 8.4% frasco 250 mL (250 mEq)',
      'Bicarbonato Sódico 8.4% frasco 500 mL (500 mEq)',
      'Bicarbonato Sódico 1.4% (isotónico) - frasco 250, 500, 1000 mL',
      'Bicarbonato Sódico 5% (aprox 0.6 M)',
      'B. Braun, Fresenius Kabi, Baxter (múltiples fabricantes)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'PCR prolongado (>10 min) o etiología revers.',dosis: '<b>1 mEq/kg IV bolo</b> (50-100 mEq adulto)',via: 'IV' },
      { indicacion: 'Intoxicación ATC (QRS > 100 ms)',       dosis: '<b>1-2 mEq/kg IV + perfusión</b>',          via: 'IV' },
      { indicacion: 'Hiperpotasemia con cambios ECG',        dosis: '<b>50-100 mEq IV en 5 min</b>',             via: 'IV' },
      { indicacion: 'Acidosis metabólica severa (pH < 7.1)', dosis: '<b>0.3 × peso × déficit base</b> (50%)',    via: 'IV' },
      { indicacion: 'DKA (pH < 6.9 - solo en severos)',      dosis: '100 mEq en 400 mL SF + K+ 20 mEq × 2h',    via: 'IV' },
      { indicacion: 'Alcalinización urinaria (salicilatos)', dosis: '150 mEq en 1 L SG 5% → pH orina > 7.5',    via: 'IV' },
      { indicacion: 'Rabdomiolisis (protección renal)',      dosis: 'Perfusión para mantener pH orina > 6.5',   via: 'IV' },
      { indicacion: 'Pediátrico PCR',                         dosis: '1 mEq/kg IV bolo',                          via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Uso en emergencias maternas (acidosis severa, PCR, intoxicación ATC). Sin evidencia de teratogenicidad. Compatible con lactancia.',

    pediatria: 'Neonatos: DILUIR bicarbonato 8.4% al 4.2% (1:1 con agua para inyección) por hiperosmolaridad — riesgo hemorragia intraventricular. Dosis: 1-2 mEq/kg IV lento (5-10 min). En PCR pediátrico: 1 mEq/kg IV.',

    adultoMayor: 'Mayor riesgo de sobrecarga hídrica, insuficiencia cardíaca, alteraciones electrolíticas. Vigilancia intensiva.',

    insufRenal: 'En IRC oligúrica: PRECAUCIÓN por sobrecarga de sodio. Dosis reducidas. Vigilar sobrecarga hídrica. En diálisis: dosis estándar con monitorización.',

    insufHepatica: 'Sin ajuste específico. Vigilar edema, ascitis por sobrecarga sodio.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Bicarbonato Sódico 1M B. Braun. Agencia Española de Medicamentos.',
      'FDA DailyMed. Sodium Bicarbonate Injection. U.S. National Library of Medicine.',
      'AHA ACLS Guidelines 2020. Sodium Bicarbonate in Cardiac Arrest. Circulation.',
      'Jaber S, et al. BICAR-ICU Trial - Sodium Bicarbonate in Severe Acidosis. Lancet. 2018.',
      'AACE Guidelines. Diabetic Ketoacidosis Management. Endocr Pract. 2016.',
      'AACE Guidelines. Hyperkalemia. J Emerg Med. 2019.',
      'Body R, et al. TCA Overdose Management. Emerg Med J. 2011.',
      'Red de Antídotos AEMPS. Bicarbonato Sódico - Protocolo de Uso.',
    ],
  },

});
