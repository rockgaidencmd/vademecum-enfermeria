/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/albumina.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'albumina',
  nombre:         'Albúmina Humana 20%',
  nombreGenerico: 'Human Albumin 20%',
  categoria:      'otros',
  tags:           ['UCI', 'expansor volumen', 'hipoproteinemia', 'cirrosis', 'quemados', 'hepatorrenal'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Hemoderivado — proteína plasmática purificada, principal responsable de la presión oncótica.',
      'Solución HIPERTÓNICA al 20% — atrae líquido desde el espacio intersticial al intravascular (4-5 veces el volumen administrado).',
      'Administrar a temperatura ambiente — NO calentar artificialmente, NO refrigerar antes de uso.',
      'Filtro de 5 micras integrado al equipo de transfusión OBLIGATORIO.',
      'Riesgo de sobrecarga circulatoria (TACO) — especialmente en cardiópatas y ancianos. Monitorización estricta.',
    ],

    resumenRapido: 'Hemoderivado obtenido de plasma humano fraccionado y termo-inactivado (pasteurización 60°C × 10h). Principal proteína oncótica del plasma. Al 20%, es hipertónica — atrae agua del espacio intersticial al intravascular. Indicado en hipoalbuminemia severa (< 2 g/dL), expansión volumen en paracentesis evacuadora, síndrome hepatorrenal, quemados graves, sepsis con hipoalbuminemia, prevención de edema cerebral en TBI.',

    objetivoTerapeutico: 'Expansión de volumen intravascular · Restaurar presión oncótica · Albúmina sérica > 2.5-3 g/dL · Prevenir disfunción circulatoria post-paracentesis · Mejorar oxigenación tisular',

    preparacion: {
      'Presentación':             'Frasco 50 mL al 20% (10 g albúmina) · Frasco 100 mL al 20% (20 g albúmina)',
      'Presentación alt.':        'Frasco 250 mL al 20% (50 g albúmina) — menos común',
      'Diluyente':                'NO se diluye habitualmente — administrar tal cual',
      'Vía':                      'IV exclusiva — periférica o central',
      '⏱️ TIEMPO INFUSIÓN':       '<b>1-2 mL/min (60-120 mL/h)</b> en pacientes con volumen normal',
      '⏱️ Velocidad en shock':     '<b>Más rápido (hasta 5 mL/min)</b> — pero monitorizar TACO',
      '⏱️ Velocidad en cardiópatas':'<b>1 mL/min máximo</b> — riesgo sobrecarga',
      'Equipo':                   'Equipo de transfusión con FILTRO de 5 micras OBLIGATORIO',
      'Acceso':                   'IV periférico (calibre 18-20G) o central',
      '🧊 ESTABILIDAD':           '<b>Pre-uso: 25°C hasta vencimiento · Una vez abierto: USAR INMEDIATAMENTE</b>',
      '⚠️ Temperatura administración': '<b>15-25°C (temperatura ambiente) — NO calentar artificialmente</b>',
      'Aspecto':                  'Solución clara, ligeramente viscosa, color amarillo paja a verde claro — desechar si turbidez, partículas, color anormal',
    },

    vigilancia: {
      antes: [
        'Verificar albúmina sérica basal (objetivo > 2.5-3 g/dL).',
        'Comprobar función cardíaca y renal — riesgo de sobrecarga.',
        'Revisar PA, FC, FR, SpO₂ basales.',
        'Evaluar signos de hipoperfusión: piel, diuresis, lactato.',
        'En quemados: calcular dosis según superficie quemada y horas post-quemadura.',
        'En paracentesis evacuadora: dosis según volumen extraído (típicamente 8 g/L extraído).',
        'Confirmar disponibilidad de equipo con filtro 5 micras.',
      ],
      durante: [
        'Monitorizar PA, FC c/15 min en la primera hora — vigilar hipertensión por expansión rápida.',
        'Auscultar campos pulmonares c/30 min — detectar estertores (TACO).',
        'Vigilar diuresis horaria — esperada ↑ con buena respuesta.',
        'Observar reacciones alérgicas (raras pero posibles): rash, urticaria, broncoespasmo.',
        'Si signos de sobrecarga (disnea, estertores, ↑ PA severa): DETENER y notificar.',
        'Mantener velocidad correcta según paciente — más lenta en cardiópatas/ancianos.',
      ],
      despues: [
        'Repetir albúmina sérica 24h post-infusión.',
        'Monitorizar PA, FC, FR c/2-4h × 12h.',
        'Vigilar balance hídrico — diuresis, edemas, peso diario.',
        'Auscultar campos pulmonares c/4h × 24h.',
        'En quemados: ajustar próximas dosis según albuminemia y respuesta.',
        'Documentar: dosis, hora, respuesta clínica, signos vitales, reacciones.',
      ],
      suspender: [
        'TACO (sobrecarga circulatoria): disnea, estertores, ingurgitación yugular, ↑ PA severa.',
        'Edema pulmonar agudo.',
        'Reacción alérgica / anafiláctica.',
        'Hipertensión severa (PAS > 200 mmHg).',
        'Insuficiencia cardíaca descompensada.',
        'Prescripción médica de suspensión.',
      ],
    },

    incompatibilidades: [
      'Soluciones de aminoácidos (NPT) — precipitación.',
      'Hidrolizados de proteínas — incompatibilidad.',
      'Soluciones que contengan alcohol.',
      'No mezclar con otros fármacos en misma vía — administrar separadamente.',
      'Lavar línea con SF antes y después.',
    ],

    alertasSeguridad: [
      '🟠 Sobrecarga circulatoria (TACO) — riesgo en cardiópatas, ancianos, IRC.',
      '🟠 Edema pulmonar agudo si infusión rápida en pacientes susceptibles.',
      '🟠 Reacciones alérgicas raras pero posibles — vigilancia primera infusión.',
      '🟡 Hemoderivado — informar al paciente, riesgo teórico de transmisión viral (mínimo, pasteurizada).',
      '🟡 Hipotensión paradójica posible al inicio (raro).',
      '🟡 Costo elevado — usar con indicación clara.',
    ],
  },

  modulos: {

    cardio: `
      <b>Monitorización cardiovascular — Prevención TACO:</b><br/>
      <b>TACO (Transfusion-Associated Circulatory Overload):</b><br/>
      • Disnea súbita.<br/>
      • Estertores pulmonares.<br/>
      • Ingurgitación yugular.<br/>
      • ↑ PA > 30 mmHg sobre basal.<br/>
      • Taquicardia.<br/>
      • SpO₂ ↓.<br/><br/>
      <b>Si TACO:</b><br/>
      1. DETENER infusión.<br/>
      2. Posición sedente con piernas colgando.<br/>
      3. O₂ alto flujo.<br/>
      4. Furosemida 20-40 mg IV.<br/>
      5. Considerar morfina 2-5 mg IV (si dolor torácico).<br/>
      6. Notificar al médico urgentemente.
    `,

    renal: `
      <b>Albúmina en Síndrome Hepatorrenal:</b><br/>
      <b>Indicación:</b> Tratamiento adyuvante a vasopresores (terlipresina).<br/>
      <b>Dosis:</b><br/>
      • Día 1: 1 g/kg IV (máximo 100 g).<br/>
      • Días siguientes: 20-40 g/día IV.<br/>
      <b>Duración:</b> Hasta resolución del SHR o decisión de cese.<br/>
      <b>Vigilancia:</b> Creatinina diaria, diuresis horaria, PA.<br/><br/>
      <b>En paracentesis evacuadora:</b><br/>
      • Indicada si extracción > 5 L de líquido ascítico.<br/>
      • Dosis: 8 g de albúmina por cada litro extraído.<br/>
      • Administrar durante o post-paracentesis.<br/>
      • Previene disfunción circulatoria post-paracentesis (PPCD).
    `,

    npt: `
      <b>Albúmina y Nutrición Parenteral Total (NPT):</b><br/>
      <b>NO mezclar albúmina en bolsa de NPT</b> — incompatibilidad con aminoácidos.<br/>
      <b>Administración separada:</b> usar vía paralela o lavar línea con SF.<br/>
      <b>Indicación en NPT:</b> Hipoalbuminemia severa (< 2 g/dL) en paciente con NPT prolongada.<br/>
      <b>Vigilancia:</b> Albuminemia semanal, balance nitrogenado.<br/>
      <b>Evidencia:</b> Beneficio controvertido — preferir mejorar nutrición proteica vs reposición.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar identidad del paciente y compatibilidad del producto (es hemoderivado).',
      'Inspeccionar visualmente frasco: claridad, color, presencia partículas, integridad.',
      'Usar SIEMPRE equipo de transfusión con filtro 5 micras (incluido en equipo).',
      'NO calentar artificialmente — temperatura ambiente (15-25°C).',
      'NO mezclar con otros fluidos en misma vía.',
      'Iniciar lentamente y observar primeros 15 min — reacciones alérgicas (raras).',
      'Auscultar pulmones cada 30 min durante infusión.',
      'En cardiópatas/ancianos: velocidad < 1 mL/min.',
      'Documentar lote, hora inicio, hora fin, dosis, signos vitales pre/post.',
      'Educar paciente sobre síntomas a reportar: disnea, dolor torácico, palpitaciones.',
    ],

    efectosAdversos: [
      '🟠 Sobrecarga circulatoria (TACO) — edema pulmonar agudo',
      '🟠 Hipertensión severa por expansión rápida',
      '🟠 Reacción alérgica / anafilactoide (raro <1%)',
      '🟡 Náuseas, vómitos',
      '🟡 Fiebre, escalofríos (reacción febril)',
      '🟡 Rash, urticaria',
      '🟡 Broncoespasmo (raro)',
      '🟡 Hipotensión paradójica (raro)',
    ],

    contraindicaciones: [
      'Insuficiencia cardíaca severa descompensada.',
      'Edema pulmonar agudo.',
      'Hipersensibilidad a albúmina o derivados plasmáticos.',
      'Hipertensión severa no controlada.',
      'Anemia severa sin reposición eritrocitaria.',
      'IgA deficiencia con anticuerpos anti-IgA (riesgo anafilaxia).',
    ],

    fotosensibilidad: 'No relevante. Almacenar protegida de luz directa pero sin requerimientos especiales durante administración.',

    estabilidad: {
      'Frasco sin abrir':           'Temperatura ambiente (≤ 25°C) hasta vencimiento (3-5 años)',
      'Una vez abierto':            '<b>USAR INMEDIATAMENTE — no almacenar para uso posterior</b>',
      'Temperatura administración': '15-25°C (NO calentar artificialmente)',
      'Aspecto':                    'Clara, viscosa, amarillo paja a verde claro — desechar si turbidez, partículas, color alterado',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar dentro de las 4 h de apertura del frasco. Desechar sobrante.',
      dosisRestante:    'Desechar. No conservar ni reutilizar el frasco parcialmente utilizado más de 4 h.',
      infusionPreparada:'Administrar en las 4 h siguientes a la apertura. No se suele diluir; si se diluye, usar SF 0.9%.',
      notas:            'No diluir con agua para inyección. Desechar si hay turbidez, color inusual o precipitado visible.',
    },

    presentaciones: [
      'Albúmina humana 20% — frasco 50 mL (10 g de albúmina)',
      'Albúmina humana 20% — frasco 100 mL (20 g de albúmina)',
      'Albúmina humana 25% — frasco 50 mL o 100 mL (algunas marcas)',
      'Albúmina humana 5% — solución isotónica (uso menos frecuente)',
      'Marcas: Albutein®, Albunorm®, Plasbumin®, otras',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Paracentesis evacuadora',           dosis: '8 g/L de ascitis extraída',         via: 'IV' },
      { indicacion: 'Síndrome hepatorrenal (día 1)',     dosis: '1 g/kg (máx 100 g)',                via: 'IV' },
      { indicacion: 'SHR (mantenimiento)',               dosis: '20-40 g/día',                        via: 'IV' },
      { indicacion: 'Hipoalbuminemia severa',            dosis: '20-40 g IV (100-200 mL al 20%)',    via: 'IV' },
      { indicacion: 'Quemados (post-fase aguda)',        dosis: '5 g/kg/día según albuminemia',      via: 'IV' },
      { indicacion: 'PBE (peritonitis bacteriana esp.)', dosis: '1.5 g/kg día 1 + 1 g/kg día 3',     via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Datos limitados pero sin evidencia de teratogenicidad. Usar si indicación clara. Hemoderivado purificado y pasteurizado — riesgo viral mínimo. Compatible con lactancia.',

    pediatria: 'Dosis: 0.5-1 g/kg/dosis IV (máximo 1 g/kg). Velocidad ajustada según peso. Mayor vigilancia de sobrecarga en neonatos y lactantes.',

    adultoMayor: 'Mayor riesgo de sobrecarga circulatoria. REDUCIR VELOCIDAD a < 1 mL/min. Monitorización cardiopulmonar intensiva. Considerar diurético profiláctico si signos de retención.',

    insufRenal: 'En IRA oligúrica: precaución, riesgo de sobrecarga. En SHR: indicación específica con dosis altas. En diálisis: administrar tras sesión si indicado.',

    insufHepatica: 'Indicación frecuente (cirrosis, PBE, SHR). Albuminemia objetivo > 3 g/dL en cirrosis con ascitis. Vigilancia de encefalopatía (hipoalbuminemia ↑ amonio libre).',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Human Albumin Injection. U.S. National Library of Medicine.',
      'EASL Clinical Practice Guidelines. Management of Cirrhosis with Ascites. J Hepatol. 2018.',
      'AASLD Guidelines. Management of Adult Patients with Ascites. Hepatology. 2021.',
      'CIMA AEMPS. Ficha Técnica Albúmina Humana 20%. Agencia Española de Medicamentos.',
      'SAFE Study. Saline vs Albumin Fluid Evaluation in ICU. NEJM. 2004.',
      'Caironi P, et al. Albumin Replacement in Severe Sepsis (ALBIOS). NEJM. 2014.',
      'Micromedex Solutions. Human Albumin. Accessed 2024.',
    ],
  },

});
