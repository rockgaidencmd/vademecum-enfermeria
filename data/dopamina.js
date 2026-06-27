/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/dopamina.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'dopamina',
  nombre:         'Dopamina',
  nombreGenerico: 'Dopamine Hydrochloride',
  categoria:      'vasopresores',
  tags:           ['UCI', 'vasopresor', 'shock cardiogénico', 'hipotensión', 'inotrópico', 'bradicardia'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Catecolamina con efectos dosis-dependientes. Extravasación causa necrosis severa. Requiere vía central preferentemente. Monitorización cardíaca continua obligatoria.',

  nivel1: {

    puntosClave: [
      'Catecolamina con efectos DOSIS-DEPENDIENTES: dopa-renal (1-3 mcg/kg/min), β1-inotrópico (3-10 mcg/kg/min), α-vasoconstrictor (>10 mcg/kg/min).',
      'Vía CENTRAL OBLIGATORIA si infusión > 5 mcg/kg/min — riesgo de necrosis por extravasación periférica.',
      'NUNCA diluir en soluciones alcalinas (bicarbonato) — se inactiva inmediatamente.',
      'Extravasación = EMERGENCIA tisular — antídoto: Fentolamina 5-10 mg SC en zona.',
      'Iniciar con dosis baja (2-5 mcg/kg/min), titular cada 5-10 min según PAM y respuesta.',
    ],

    resumenRapido: 'Catecolamina endógena precursora de noradrenalina. Acción dosis-dependiente: dosis bajas (efecto dopa-renal y vasodilatación), dosis medias (β1-inotrópico, ↑ gasto cardíaco), dosis altas (α-vasoconstrictor). Indicada en shock cardiogénico, hipotensión refractaria a fluidos, bradicardia sintomática. Inicio: 5 min IV, vida media: 2 min (requiere infusión continua).',

    objetivoTerapeutico: 'Mantener PAM ≥ 65 mmHg · Mejorar gasto cardíaco · Restaurar perfusión tisular · Tratar bradicardia sintomática · Mantener diuresis > 0.5 mL/kg/h',

    preparacion: {
      'Presentación':             '200 mg/5 mL ampolla (40 mg/mL)',
      'Presentación alt.':        '400 mg/10 mL ampolla',
      'Diluyente':                '<b>SF 0.9% o SG 5% (compatibles)</b> · NUNCA bicarbonato (inactivación)',
      'Dilución estándar UCI':    '<b>400 mg en 250 mL SF/SG 5% → 1600 mcg/mL</b> (1.6 mg/mL)',
      'Dilución alternativa':     '200 mg en 250 mL SF → 800 mcg/mL',
      'Vía':                      '<b>VÍA CENTRAL OBLIGATORIA si > 5 mcg/kg/min</b> — periférica solo emergencia',
      '⏱️ DOSIS DOPA (renal)':    '<b>1-3 mcg/kg/min</b> — efecto vasodilatador renal (controvertido)',
      '⏱️ DOSIS β1 (inotrópica)': '<b>3-10 mcg/kg/min</b> — ↑ contractilidad, FC, gasto cardíaco',
      '⏱️ DOSIS α (vasopresor)':  '<b>10-20 mcg/kg/min</b> — vasoconstricción periférica',
      '⏱️ DOSIS MÁXIMA':          '<b>20-50 mcg/kg/min</b> (no exceder)',
      'Titulación':                'Iniciar 2-5 mcg/kg/min, ↑ c/5-10 min según PAM y respuesta',
      'Bomba':                    'OBLIGATORIA - bomba de infusión volumétrica de precisión',
      '🧊 ESTABILIDAD':           '<b>24 horas a temperatura ambiente</b> en SF/SG 5% · Proteger de luz extrema',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez o color rosa-marrón (oxidación)',
    },

    vigilancia: {
      antes: [
        'Verificar acceso venoso CENTRAL — preferido para infusión > 5 mcg/kg/min.',
        'Si solo periférico disponible: vena de gran calibre, vigilancia extrema de extravasación.',
        'ECG continuo basal, registrar ritmo y FC.',
        'PA basal (arterial invasiva preferida en shock).',
        'Comprobar volemia previa — reponer fluidos antes de iniciar vasopresor.',
        'Tener fentolamina (antídoto extravasación) disponible al lado de la cama.',
        'Doble verificación: dosis (mcg/kg/min), concentración, peso paciente.',
      ],
      durante: [
        'PA cada 5 min al inicio, c/15 min cuando estable — objetivo PAM ≥ 65 mmHg.',
        'ECG continuo — vigilar arritmias, taquicardia (FC > 120), ectopia ventricular.',
        'Vigilar perfusión periférica: piel, llenado capilar, temperatura distal.',
        'Diuresis horaria — objetivo > 0.5 mL/kg/h.',
        'Sitio IV: inspección c/hora — DETECCIÓN TEMPRANA de extravasación CRÍTICA.',
        'Si extravasación: detener inmediatamente, fentolamina SC en zona, ver módulo.',
        'Titular dosis cada 5-10 min según respuesta — no cambios bruscos.',
      ],
      despues: [
        'Descenso GRADUAL — NUNCA suspender abruptamente (rebote hipotensivo).',
        'Reducir 10-20% cada 30-60 min según tolerancia.',
        'Continuar monitorización 2-4h post-suspensión.',
        'Evaluar respuesta clínica: PA, perfusión, diuresis, lactato.',
        'Documentar: dosis máxima alcanzada, duración total, respuesta, efectos adversos.',
      ],
      suspender: [
        'Taquiarritmia ventricular sostenida (TV/FV).',
        'Isquemia miocárdica documentada (cambios ECG, dolor torácico, ↑ troponina).',
        'Hipertensión severa (PAS > 200 mmHg).',
        'Necrosis tisular en sitio IV.',
        'PAM objetivo alcanzada con descenso progresivo.',
        'Respuesta terapéutica inadecuada — cambiar a otro vasopresor.',
        'Prescripción médica.',
      ],
    },

    incompatibilidades: [
      '⚠️ BICARBONATO DE SODIO — inactivación inmediata, NUNCA mezclar.',
      'Soluciones alcalinas (pH > 7) en general.',
      'Anfotericina B — incompatibilidad documentada.',
      'Furosemida — incompatibilidad.',
      'Tiopental, otros barbitúricos — precipitación.',
      'Insulina — adsorción al PVC.',
      'Lavar línea con SF antes y después de cualquier otro fármaco.',
      'NO mezclar con otros fármacos en misma jeringa o línea.',
    ],

    alertasSeguridad: [
      '🔴 EXTRAVASACIÓN = NECROSIS GRAVE — vigilancia extrema del sitio IV.',
      '🔴 NUNCA con bicarbonato — inactivación total.',
      '🔴 Vía CENTRAL obligatoria si > 5 mcg/kg/min.',
      '🟠 Taquiarritmias ventriculares — vigilancia ECG continua.',
      '🟠 Isquemia miocárdica — riesgo ↑ en cardiopatía isquémica.',
      '🟠 Vasoconstricción extrema en dosis altas — riesgo gangrena distal.',
      '🟡 Náuseas, vómitos por estimulación dopaminérgica central.',
      '🟡 NO suspender abruptamente — rebote hipotensivo.',
    ],
  },

  modulos: {

    extravasacion: `
      <b>Extravasación de Dopamina — EMERGENCIA TISULAR:</b><br/>
      Dopamina es vasoconstrictor potente — extravasación = isquemia/necrosis tisular grave.<br/><br/>
      <b>Acción INMEDIATA:</b><br/>
      1. DETENER infusión inmediatamente.<br/>
      2. NO retirar catéter — aspirar máximo posible.<br/>
      3. <b>Fentolamina 5-10 mg en 10 mL SF, infiltrar SC alrededor de la zona</b> (antagonista α).<br/>
      4. Repetir fentolamina si no mejoría en 30 min.<br/>
      5. Aplicar compresas TIBIAS (NO frías — empeora isquemia).<br/>
      6. Elevar miembro afectado.<br/>
      7. Notificar médico urgentemente.<br/>
      8. Vigilar zona cada hora × 24-48h — evolución a necrosis.<br/>
      9. Considerar interconsulta cirugía plástica si compromiso extenso.<br/>
      10. Documentar: hora, volumen, concentración, manejo realizado.
    `,

    cardio: `
      <b>Monitorización cardiovascular OBLIGATORIA:</b><br/>
      <b>ECG continuo:</b><br/>
      • Vigilar arritmias supraventriculares y ventriculares.<br/>
      • Taquicardia sinusal esperada en dosis β1.<br/>
      • ALERTA: TV, ectopia ventricular > 6/min, fibrilación auricular nueva.<br/>
      <b>PA arterial (invasiva preferida):</b><br/>
      • Objetivo PAM ≥ 65 mmHg (puede ser ↑ en HTA crónica).<br/>
      • Monitorizar c/5 min al inicio.<br/>
      <b>Gasto cardíaco (si Swan-Ganz):</b><br/>
      • Mejora esperada con dosis β1 (3-10 mcg/kg/min).<br/>
      <b>Lactato sérico:</b><br/>
      • Marcador de perfusión tisular — debe ↓ con respuesta adecuada.
    `,

    renal: `
      <b>Efecto dopa-renal (controvertido):</b><br/>
      Dosis bajas (1-3 mcg/kg/min) producen vasodilatación renal teórica → ↑ flujo sanguíneo renal y diuresis.<br/><br/>
      <b>Evidencia actual:</b><br/>
      • Estudios randomizados NO han demostrado beneficio en prevención de IRA.<br/>
      • NO se recomienda dopamina a "dosis renal" para protección renal.<br/>
      • Sin embargo, puede ↑ diuresis temporalmente por efecto hemodinámico.<br/>
      <b>Vigilancia renal:</b><br/>
      • Diuresis horaria > 0.5 mL/kg/h.<br/>
      • Creatinina diaria.<br/>
      • Balance hídrico.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Etiquetar bolsa con: Dopamina [mg total], concentración (mcg/mL), velocidad inicial (mcg/kg/min), peso paciente, hora preparación.',
      'Bomba de infusión OBLIGATORIA — programar en mcg/kg/min según peso.',
      'Vía central preferida — femoral, subclavia, yugular interna.',
      'Si solo periférico: gran calibre (18G+), vigilancia extrema de sitio.',
      'Cambiar sitio IV periférico cada 24-48h si dopamina en curso.',
      'Tener fentolamina (5-10 mg) PREPARADA y disponible para extravasación.',
      'Monitor cardíaco continuo — comunicar arritmias al médico.',
      'PA arterial invasiva preferida si infusión > 10 mcg/kg/min.',
      'Registrar dosis exacta y respuesta hemodinámica cada hora.',
      'En descenso de dosis: gradual (10-20% c/30-60 min), nunca abrupto.',
    ],

    efectosAdversos: [
      '🔴 Necrosis tisular por extravasación',
      '🔴 Taquiarritmias ventriculares — TV, FV',
      '🔴 Isquemia miocárdica / IAM',
      '🔴 Gangrena distal por vasoconstricción extrema',
      '🟠 Taquicardia severa (> 120-140 lpm)',
      '🟠 Hipertensión severa con dosis altas',
      '🟠 Fibrilación auricular',
      '🟡 Náuseas, vómitos',
      '🟡 Cefalea',
      '🟡 Ansiedad',
      '🟡 Disnea',
      '🟡 Palpitaciones',
    ],

    contraindicaciones: [
      'Feocromocitoma (riesgo crisis hipertensiva severa).',
      'Taquiarritmias ventriculares no tratadas.',
      'Fibrilación ventricular.',
      'Hipovolemia no corregida (reponer fluidos primero).',
      'Hipertiroidismo no tratado (relativa).',
      'Hipersensibilidad a catecolaminas o sulfitos (vehículo).',
    ],

    fotosensibilidad: '<b>Proteger de luz extrema</b>. Dopamina se oxida con luz volviéndose rosa/marrón. Almacenar en envase opaco. Si la solución cambia de color, ya está inactiva — desechar.',

    estabilidad: {
      'Ampolla sin abrir':        'Temperatura ambiente protegida de luz hasta vencimiento',
      'Diluida en SF/SG 5%':      '<b>24 horas a 15-25°C</b>',
      'Aspecto':                  'Incolora — DESECHAR si rosa/amarilla/marrón (oxidada)',
      'Temperatura':              'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Dopamina 200 mg/5 mL ampolla (40 mg/mL)',
      'Dopamina 400 mg/10 mL ampolla (40 mg/mL)',
      'Dopamina 800 mg/250 mL bolsa premezclada',
      'Disponible en genéricos en mayoría de países',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis dopa-renal',                  dosis: '1-3 mcg/kg/min',                     via: 'IV' },
      { indicacion: 'Dosis β1 inotrópica',               dosis: '3-10 mcg/kg/min',                    via: 'IV' },
      { indicacion: 'Dosis α vasopresora',               dosis: '10-20 mcg/kg/min',                   via: 'IV' },
      { indicacion: 'Dosis MÁXIMA',                      dosis: '20-50 mcg/kg/min',                   via: 'IV' },
      { indicacion: 'Bradicardia sintomática',           dosis: '2-10 mcg/kg/min',                    via: 'IV' },
      { indicacion: 'Shock cardiogénico',                dosis: '5-15 mcg/kg/min',                    via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA) — atraviesa placenta, vasoconstricción uteroplacentaria. Usar solo si beneficio supera riesgo (shock materno). Vigilancia fetal estricta. Compatible con lactancia pero con precaución.',

    pediatria: 'Neonatos/Pediatría: 2-20 mcg/kg/min IV. Iniciar 2-5 mcg/kg/min. Vigilancia hemodinámica intensiva. Vía central preferida. Mayor riesgo de arritmias.',

    adultoMayor: 'Mayor riesgo de arritmias, isquemia miocárdica, hipertensión. Iniciar con dosis menor (2 mcg/kg/min). Monitorización ECG y PA intensiva. Considerar otras opciones si cardiopatía severa.',

    insufRenal: 'Sin ajuste específico — metabolismo principalmente extrarenal (COMT, MAO). En IRA: puede ↑ diuresis temporalmente. Vigilancia hemodinámica estándar.',

    insufHepatica: 'Sin ajuste de dosis significativo — metabolismo por COMT y MAO independiente de función hepática.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Dopamine Hydrochloride Injection. U.S. National Library of Medicine.',
      'Surviving Sepsis Campaign 2021. Vasopressor Therapy. Intensive Care Med.',
      'De Backer D, et al. Comparison of Dopamine and Norepinephrine in Shock. NEJM. 2010.',
      'CIMA AEMPS. Ficha Técnica Dopamina. Agencia Española de Medicamentos.',
      'AHA/ACC Guidelines. Heart Failure Management. Circulation. 2022.',
      'Bellomo R, et al. Low-dose Dopamine in Critically Ill Patients. Lancet. 2000.',
      'Micromedex Solutions. Dopamine (Injectable). Accessed 2024.',
    ],
  },

});
