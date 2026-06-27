/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/amiodarona.js
   Fuentes: FDA DailyMed, CIMA AEMPS, ACLS Guidelines,
   AHA/ACC, Micromedex, Prospecto Amiodarona
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'amiodarona',
  nombre:         'Amiodarona',
  nombreGenerico: 'Amiodarone Hydrochloride',
  categoria:      'antiarritmicos',
  tags:           ['UCI', 'antiarrítmico', 'arritmia ventricular', 'FA rápida', 'paro cardíaco'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antiarrítmico potente con efectos múltiples. Requiere monitorización cardíaca continua. Riesgo de bradicardia, hipotensión, torsades de pointes. Múltiples interacciones medicamentosas graves.',

  nivel1: {

    puntosClave: [
      'Antiarrítmico de clase III — bloquea canales K+ (prolongación QT), tiene actividad de todas las clases (I, II, III, IV).',
      'Monitorización de ECG continua OBLIGATORIA — vigilar QT, QRS, arritmias.',
      'Administración LENTA en infusión (150 mg en 10 min mínimo) — bolo rápido causa hipotensión severa.',
      'Solo diluir en SG 5%, NUNCA en SF 0.9% (incompatible, precipita).',
      'Fotosensibilidad severa — paciente debe evitar sol, usar protector solar SPF 50+, ropa protectora.',
      'Toxicidad pulmonar posible (1-17% con uso prolongado) — vigilar disnea, tos.',
    ],

    resumenRapido: 'Antiarrítmico de clase III con propiedades de las 4 clases. Bloquea canales de K+, Na+, Ca²⁺ y receptores β. Indicado en arritmias ventriculares refractarias, FA con RVD, post-paro cardíaco. Inicio lento (horas-días), vida media prolongada (26-107 días), acumulación tissue crónica.',

    objetivoTerapeutico: 'Convertir arritmia ventricular refractaria · Control de FC en FA · Prevención de recurrencias arrítmicas · Mantener ritmo sinusal',

    preparacion: {
      'Presentación':             '150 mg/3 mL ampolla (50 mg/mL)',
      'Diluyente':                '<b>SOLO SG 5% (OBLIGATORIO)</b> — NO SF 0.9% (precipita)',
      'Dilución estándar':        '150 mg en 97 mL SG 5% = 1.5 mg/mL (total 100 mL)',
      'Ejemplo bolo rápido':      '150 mg en 30 mL SG 5% = 5 mg/mL (máx. concentración)',
      'Vía':                      'IV infusión lenta O en bolo (paro cardíaco)',
      '⏱️ BOLO en paro':          '150 mg IV rápido (1-2 min) en compresiones',
      '⏱️ BOLO estable':          '150 mg en 10-20 min (infusión lenta)',
      '⏱️ INFUSIÓN rápida':       '<b>0.5 mg/min × 6 horas</b> (150 mg en primera hora)',
      '⏱️ INFUSIÓN lenta':        '<b>0.25 mg/min después</b> (0.5-1.5 mg/min mantenimiento)',
      'Bomba':                    'Bomba de infusión volumétrica OBLIGATORIA',
      '🧊 Estabilidad':           '<b>24 horas a temp. ambiente</b> en SG 5% (NO refrigerar)',
      'Aspecto':                  'Solución amarillenta — es normal, NO desechar',
    },

    vigilancia: {
      antes: [
        'ECG basal — medir QT (normal < 440 ms), QRS, FC.',
        'Comprobar función tiroidea (TSH) — amiodarona interfiere.',
        'Comprobar función hepática basal (AST, ALT, bilirrubina).',
        'Verificar función pulmonar basal (radiografía tórax, espirometría).',
        'Revisar medicamentos concomitantes — muchas interacciones graves.',
        'Confirmar acceso IV central (preferido) o periférico de buen calibre.',
        'Comprobar prescripción: dosis, velocidad infusión, ECG objetivo.',
      ],
      durante: [
        'ECG continuo — vigilar QT, QRS, FC, cambios ST-T.',
        'ALERTA si QT > 500 ms o QRS > 120 ms (riesgo torsades de pointes).',
        'Monitorizar PA cada 5-10 min — amiodarona causa hipotensión.',
        'Vigilar FC — puede causar bradicardia severa (< 50 lpm).',
        'Observar sitio IV — amiodarona es irritante venoso.',
        'Vigilar conversión del ritmo arrítmico — puede tomar horas.',
        'En paro cardíaco: seguir algoritmo ACLS, comunicar cada dosis al equipo.',
      ],
      despues: [
        'Continuar ECG continuo durante mínimo 24h post-administración.',
        'Comprobar TSH c/6 meses (disfunción tiroidea frecuente).',
        'Revisar función pulmonar si disnea o tos (toxicidad pulmonar).',
        'Monitorizar función hepática c/3-6 meses.',
        'Educar paciente sobre fotosensibilidad — protección solar obligatoria.',
        'Vigilar signos hipotiroidismo (fatiga, aumento peso) o hipertiroidismo (palpitaciones, pérdida peso).',
        'Revisar interacciones medicamentosas periódicamente.',
      ],
      suspender: [
        'QT > 500-550 ms o prolongación > 60 ms desde basal.',
        'QRS > 140 ms (bloqueo severo).',
        'FC < 40 lpm (bradicardia severa).',
        'PAS < 90 mmHg refractaria a fluidos.',
        'Signos de toxicidad pulmonar: disnea nueva, tos, infiltrados.',
        'Elevación severa de transaminasas.',
        'Reacción alérgica / anafilaxia.',
        'Prescripción médica de suspensión.',
      ],
    },

    incompatibilidades: [
      'SF 0.9% — PRECIPITA completamente, NUNCA usar como diluyente.',
      'Otros antiarrítmicos (procainamida, disopiramida) — efecto aditivo peligroso.',
      'Beta-bloqueantes IV — riesgo severo de bradicardia y bloqueo AV.',
      'Bloqueantes de Ca²⁺ (verapamilo, diltiazem) — bradicardia, colapso cardiovascular.',
      'Quinidina, procainamida — ↑ riesgo torsades de pointes.',
      'Medicamentos que prolongan QT: macrolidos (eritromicina), fluoroquinolonas, antipsicóticos.',
      'Warfarina — amiodarona ↑↑ INR (vigilancia estricta).',
      'Digoxina — amiodarona ↑ niveles digitales (toxicidad).',
      'Estatinas, ciclosporina — ↑ concentraciones por inhibición CYP3A4.',
      'Fenitoína — puede ↓ niveles amiodarona.',
      'Consultar tabla exhaustiva antes de agregar medicamentos.',
    ],

    alertasSeguridad: [
      '🔴 NUNCA diluir en SF 0.9% — precipita inmediatamente.',
      '🔴 ECG CONTINUO obligatorio durante y 24h post-administración.',
      '🔴 Riesgo de torsades de pointes si QT > 550 ms.',
      '🟠 Hipotensión severa posible — vigilancia PA continua.',
      '🟠 Bradicardia que puede requerir marcapasos temporal.',
      '🟠 Múltiples interacciones medicamentosas graves — revisar cada nuevo medicamento.',
      '🟡 Fotosensibilidad severa — educación paciente crítica.',
      '🟡 Toxicidad pulmonar en 1-17% de pacientes con uso prolongado.',
      '🟡 Disfunción tiroidea frecuente — monitorizar TSH.',
    ],
  },

  modulos: {

    cardio: `
      <b>Monitorización cardiovascular — CRÍTICA Y CONTINUA:</b><br/>
      • ECG continuo 12-derivaciones cada minuto inicialmente.<br/>
      • Medir QT exactamente — riesgo torsades si > 500-550 ms.<br/>
      • Medir QRS — riesgo bloqueo si > 140 ms.<br/>
      • PA cada 5-10 min durante infusión — hipotensión frecuente.<br/>
      • FC cada 5-10 min — bradicardia posible.<br/>
      • Troponina, BNP si infarto concomitante.<br/>
      • Electrolitos (K+, Mg²⁺) — hipopotasemia/hipomagnesemia ↑ torsades.<br/>
      • Ecocardiografía si función ventricular comprometida.
    `,

    tiroidea: `
      <b>Monitorización tiroidea obligatoria (amiodarona es yodo 37% en peso):</b><br/>
      • TSH basal antes de iniciar.<br/>
      • TSH c/6 meses durante tratamiento crónico.<br/>
      • Hipotiroidismo (2-20%): fatiga, aumento peso, bradicardia, ↓ FC respuesta ejercicio.<br/>
      • Hipertiroidismo (1-12%): palpitaciones, pérdida peso, nerviosismo, exoftalmos (raro).<br/>
      • Si TSH anormal: considerar levotiroxina (hipotiroidismo) o PTU (hipertiroidismo).<br/>
      • No suspender amiodarona por disfunción tiroidea leve — tratar la disfunción.
    `,

    pulmonar: `
      <b>Vigilancia de toxicidad pulmonar:</b><br/>
      • Radiografía de tórax basal para línea base.<br/>
      • Espirometría si síntomas respiratorios o uso prolongado.<br/>
      • Incidencia: 1-17% según uso crónico, dosis acumulada.<br/>
      • Síntomas: disnea new, tos seca, dolor pleurítico.<br/>
      • Si sospecha: radiografía tórax stat, considerar TC, biopsia si grave.<br/>
      • Manejo: suspender amiodarona, considerar corticoides si neumonitis.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Etiquetar bolsa de infusión SG 5% con: Amiodarona 150 mg, concentración, velocidad infusión (mg/min), duración, fecha/hora, iniciales.',
      'Usar SOLO SG 5% — revisar bolsa antes de conectar.',
      'Acceso central preferido (irritante venoso) — si periférico, rotación cada 48h.',
      'Programar bomba en mg/min (aproximadamente 2.5 mg/min bolo, 0.5 mg/min infusión).',
      'ECG continuo durante infusión y 24h post-administración.',
      'Registrar PA, FC, ECG cada 5-10 min durante infusión.',
      'Medir QT en cada ECG — comunicar si > 500-550 ms.',
      'Tener línea IV permeable para posible inyección de otros fármacos (paro cardíaco).',
      'Educar paciente sobre fotosensibilidad: protector solar SPF 50+, evitar sol directo, ropa protectora.',
      'Documentar meticulosamente: ritmo inicial, ritmo post-amiodarona, duración de efecto, efectos adversos.',
    ],

    efectosAdversos: [
      '🔴 Torsades de pointes — arritmia ventricular polimórfica si QT prolongado',
      '🔴 Bradicardia severa — FC < 40-50 lpm (puede requerir marcapasos)',
      '🔴 Toxicidad pulmonar — neumonitis, fibrosis pulmonar (1-17%)',
      '🟠 Hipotensión severa — especialmente bolo rápido',
      '🟠 Bloqueo AV — puede requerir marcapasos',
      '🟠 Disfunción tiroidea — hipo o hipertiroidismo',
      '🟡 Fotosensibilidad severa — queratosis, reacciones fototóxicas',
      '🟡 Neuropatía periférica — con uso prolongado',
      '🟡 Hepatotoxicidad — elevación transaminasas',
      '🟡 Opacidad corneal — sin afectar visión (reversible)',
      '🟡 Depósitos de melanina en piel (gris-azulada)',
    ],

    contraindicaciones: [
      'Bradicardia severa (< 40 lpm) — relativa.',
      'Bloqueo AV severo sin marcapasos.',
      'QT prolongado basal > 460 ms — riesgo torsades aditivo.',
      'Hipotiroidismo no tratado — relativa.',
      'Hipersensibilidad a yodo o amiodarona.',
      'Síndrome de Brugada o antecedente de síncope arrítmico.',
    ],

    fotosensibilidad: '<b>SÍ — FOTOSENSIBILIDAD SEVERA (10-20% de pacientes)</b>. Amiodarona se deposita en piel. Educación obligatoria: evitar sol directo, usar protector solar SPF 50+ diariamente, ropa protectora (manga larga, sombrero). Reacciones pueden ser severas (quemaduras fototóxicas).',

    estabilidad: {
      'Ampolla sin abrir':        'Temperatura ambiente hasta vencimiento',
      'Preparado en SG 5%':       '<b>24 horas a 15-25°C (temp. ambiente)</b>',
      'NO refrigerar':            'La amiodarona puede precipitar en frío',
      'Aspecto':                  'Amarillenta (normal, por contenido yodo) — desechar si cristales o turbidez',
    },

    presentaciones: [
      'Amiodarona 150 mg/3 mL solución inyectable — ampolla 3 mL',
      'Amiodarona 300 mg/10 mL solución inyectable — ampolla 10 mL (algunas marcas)',
      'Amiodarona tabletas: 200 mg VO (uso crónico)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Bolo en paro cardíaco (ACLS)',       dosis: '150 mg IV en 1-2 min', via: 'IV' },
      { indicacion: 'Bolo en arritmia estable',          dosis: '150 mg en 10-20 min',  via: 'IV' },
      { indicacion: 'Infusión rápida (1er hora)',        dosis: '0.5 mg/min (150 mg/h)', via: 'IV' },
      { indicacion: 'Infusión de mantenimiento',         dosis: '0.25-0.5 mg/min',      via: 'IV' },
      { indicacion: 'Dosis máxima primer día',           dosis: '150 mg bolo + 1 g infusión', via: 'IV' },
      { indicacion: 'Máximo diario crónico',             dosis: '1.2-2.4 g/día (VO)',   via: 'VO' },
    ],

    embarazo: 'Categoría D (FDA) — cruza placenta, teratogénico potencial (malformaciones cardíacas). Usar solo en situaciones de vida o muerte (arritmia refractaria materna). Vigilancia cardíaca fetal. NO en embarazo electivo — cambiar a otras terapias.',

    pediatria: 'Neonatos/Lactantes: 5 mg/kg IV en arritmia refractaria. Calcular dosis exacta según peso. Monitorización ECG estricta. Evitar si posible — alternativas preferidas.',

    adultoMayor: 'Mayor sensibilidad a bradicardia, hipotensión, toxicidad pulmonar. Reducir dosis 30-50%. Velocidad infusión más lenta. Monitorización ECG y PA intensiva. Mayor riesgo disfunción tiroidea.',

    insufRenal: 'No requiere ajuste dosis por insuficiencia renal (metabolismo hepático). Sin embargo, vigilancia de electrolitos (K+, Mg²⁺) crítica — hipopotasemia ↑ riesgo torsades.',

    insufHepatica: 'Amiodarona metabolizada principalmente hígado (CYP3A4, CYP2C8). En cirrosis: reducir dosis 30-50%, monitorización ECG intensiva. Riesgo toxicidad aumentado.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Amiodarone Hydrochloride Injection. U.S. National Library of Medicine.',
      'CIMA AEMPS. Ficha Técnica Amiodarona. Agencia Española de Medicamentos.',
      'AHA/ACC Guidelines. Management of Atrial Fibrillation. Circulation. 2023.',
      'ACLS 2020-2025 Guidelines. American Heart Association.',
      'Micromedex Solutions. Amiodarone (Injectable). Accessed 2024.',
      'Prospecto Amiodarona — Laboratorios varios (España, Latinoamérica).',
    ],
  },

});
