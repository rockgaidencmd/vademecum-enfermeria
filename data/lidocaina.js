/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/lidocaina.js
   Fuentes: CIMA AEMPS (Lidocaína Braun, Normon),
   FDA DailyMed, AHA ACLS 2020-2025, ASRA, IASP
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'lidocaina',
  nombre:         'Lidocaína',
  nombreGenerico: 'Lidocaine Hydrochloride',
  categoria:      'antiarritmicos',
  tags:           ['anestésico local', 'antiarrítmico', 'TV', 'intubación', 'dolor neuropático', 'analgesia IV'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Anestésico local y antiarrítmico clase IB. Riesgo de toxicidad sistémica (LAST) con sobredosis IV: convulsiones, paro cardíaco. Vigilancia ECG obligatoria. NO usar lidocaína con epinefrina en dedos, nariz, pene, oreja, pene (necrosis isquémica).',

  nivel1: {

    puntosClave: [
      'Anestésico local tipo amida + Antiarrítmico clase IB — bloqueo de canales de Na+ neuronales y miocárdicos.',
      'Dos usos principales: <b>(1) anestesia local</b> (infiltración, regional, raquídea) · <b>(2) antiarrítmico IV</b> en TV/FV, intubación.',
      '<b>LAST (Local Anesthetic Systemic Toxicity)</b>: convulsiones → coma → arritmias → paro. ANTÍDOTO: Intralipid 20%.',
      'CONTRAINDICADO con epinefrina en zonas de circulación terminal (dedos, nariz, pene, oreja) - necrosis isquémica.',
      'Como antiarrítmico: <b>bolo 1-1.5 mg/kg IV</b> seguido de infusión 1-4 mg/min en TV/FV refractaria.',
    ],

    resumenRapido: 'Anestésico local amida de acción intermedia y antiarrítmico clase IB. Bloquea canales de Na+ → estabiliza membranas, bloquea conducción nerviosa y reduce automaticidad ventricular. Dos perfiles de uso: ANESTÉSICO (infiltración local, anestesia regional/raquídea, sutura, biopsia, drenaje) - inicio 2-5 min, duración 30-60 min sin epinefrina, 60-120 min con epinefrina. ANTIARRÍTMICO IV (TV/FV refractaria, prevención arritmias post-intubación) - inicio 1-2 min, duración 10-20 min (requiere infusión continua).',

    objetivoTerapeutico: 'Anestesia local · Antiarrítmico ventricular (TV/FV) · Analgesia adyuvante perioperatoria · Atenuar respuesta cardiovascular a intubación · Dolor neuropático refractario',

    preparacion: {
      'Presentación 1%':          '<b>Lidocaína 1% (10 mg/mL)</b> - ampolla 10 mL (100 mg)',
      'Presentación 2%':          '<b>Lidocaína 2% (20 mg/mL)</b> - ampolla 10 mL (200 mg) - PREFERIDA IV',
      'Presentación 5%':          'Lidocaína 5% (50 mg/mL) - alta concentración (raquídea)',
      'Con epinefrina':           'Lidocaína 1-2% + epinefrina 1:100,000 o 1:200,000 (anestesia local)',
      'Diluyente':                'SF 0.9% o SG 5% (compatibles)',
      'Dilución antiarrítmica':   '<b>2 g (100 mL al 2%) en 500 mL SG 5% → 4 mg/mL</b>',
      'Vía':                      'IV (antiarrítmico, analgesia), SC/intradérmica (anestesia local), epidural, raquídea, tópica, inhalada',
      '⏱️ BOLO IV ANTIARRÍTMICO': '<b>1-1.5 mg/kg IV en 2-3 min</b> (típico 75-100 mg)',
      '⏱️ Repetir bolo si TV/FV': '0.5-0.75 mg/kg IV c/5-10 min (máximo 3 mg/kg total)',
      '⏱️ INFUSIÓN antiarrítmica': '<b>1-4 mg/min IV continua</b> (post-conversión)',
      '⏱️ Pre-intubación':         '1.5 mg/kg IV 90 seg antes (atenúa respuesta CV)',
      '⏱️ Analgesia perioperatoria':'1-1.5 mg/kg IV + infusión 1-2 mg/kg/h',
      '⏱️ Dosis MÁXIMA anestesia local': '<b>4.5 mg/kg sin epi · 7 mg/kg con epi</b>',
      'Bomba':                    'Necesaria para infusión continua',
      '🧊 ESTABILIDAD':           'Vial sin abrir: hasta vencimiento · Diluida: 24h en SF/SG5%',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Verificar alergia a anestésicos locales tipo amida.',
        'En uso antiarrítmico: ECG basal, electrolitos (K+, Mg²⁺), gasometría.',
        'Revisar función hepática - lidocaína se metaboliza en hígado, ajuste en cirrosis.',
        'Calcular dosis máxima según peso - <b>4.5 mg/kg sin epi, 7 mg/kg con epi</b>.',
        'Para anestesia local: verificar NO usar con epinefrina en zonas terminales (dedos, nariz, pene, oreja).',
        'Tener disponible: <b>Intralipid 20%</b> (antídoto LAST), benzodiacepinas, equipo RCP.',
      ],
      durante: [
        '<b>Bolo IV LENTO en 2-3 minutos</b> - bolo rápido causa toxicidad SNC.',
        'Monitor cardíaco continuo durante administración IV.',
        'PA c/5 min - vigilar hipotensión.',
        'En anestesia local: ASPIRAR antes de inyectar (descartar inyección intravascular).',
        'Inyectar lentamente con FRACCIONES de 3-5 mL c/30-60 seg (evita LAST).',
        '<b>Vigilar signos PRECOCES de LAST</b>: parestesias periorales, tinnitus, mareo, sabor metálico, agitación.',
        'Si signos: SUSPENDER inmediatamente, oxígeno, preparar Intralipid.',
        'En antiarrítmico: vigilar conversión del ritmo (efecto en 1-2 min).',
      ],
      despues: [
        'Continuar monitor cardíaco 60 min post-bolo o tras infusión.',
        'En analgesia IV: vigilar respuesta clínica (EVA).',
        'En antiarrítmico: ECG, electrolitos.',
        'Vigilar reacciones tardías: rash, urticaria.',
        'En infusión continua: vigilar acumulación (niveles tóxicos > 5 mcg/mL).',
        'Documentar: dosis total, vía, indicación, respuesta, efectos adversos.',
      ],
      suspender: [
        'Signos de LAST (toxicidad sistémica): parestesias periorales, convulsiones, arritmias.',
        'Hipotensión severa refractaria.',
        'Bradicardia severa (FC < 40 lpm) o bloqueo AV.',
        'Asistolia o arritmia ventricular nueva.',
        'Reacción alérgica.',
        'Dosis máxima alcanzada.',
        'Resolución de arritmia (descenso gradual de infusión).',
      ],
    },

    incompatibilidades: [
      'Anfotericina B - incompatibilidad.',
      'Cefazolina - incompatibilidad documentada.',
      'Sulfadiazina - precipitación.',
      'Bicarbonato de sodio - puede precipitar.',
      'Soluciones alcalinas en general.',
      'En anestesia local: NO mezclar con epinefrina en zonas terminales.',
      'Lavar línea con SF antes y después de otros medicamentos.',
    ],

    alertasSeguridad: [
      '🔴 <b>LAST (Local Anesthetic Systemic Toxicity)</b> - convulsiones, arritmias, paro. ANTÍDOTO: INTRALIPID 20% 1.5 mL/kg IV bolo + 0.25 mL/kg/min infusión.',
      '🔴 NO USAR LIDOCAÍNA CON EPINEFRINA EN: dedos, nariz, pene, oreja, pie (necrosis isquémica).',
      '🔴 Sobredosis IV: convulsiones, depresión respiratoria, colapso cardiovascular.',
      '🟠 Velocidad de infusión: NO superar 4 mg/min (riesgo toxicidad).',
      '🟠 Acumulación en infusión prolongada > 24h o cirrosis - niveles tóxicos.',
      '🟠 En 2ª y 3ª trimestre embarazo: usar con precaución.',
      '🟡 Concentración para anestesia regional: 1-2%. Concentración para raquídea: 5% (hiperbárica).',
      '🟡 Aspirar antes de inyectar - descartar inyección intravascular.',
      '🟡 Inyectar FRACCIONADO 3-5 mL c/30 seg en anestesia regional.',
    ],
  },

  modulos: {

    last: `
      <b>LAST (Local Anesthetic Systemic Toxicity) - EMERGENCIA:</b><br/>
      <b>CAUSA:</b> Inyección intravascular accidental o sobredosis sistémica.<br/><br/>
      <b>SÍNTOMAS PROGRESIVOS:</b><br/>
      <b>1. Síntomas iniciales SNC:</b><br/>
      • <b>Parestesias periorales / lengua adormecida</b>.<br/>
      • <b>Sabor metálico</b>.<br/>
      • Tinnitus, mareo.<br/>
      • Visión borrosa, diplopia.<br/>
      • Agitación, hablar enlentecido.<br/>
      <b>2. SNC intermedio:</b><br/>
      • Temblor muscular.<br/>
      • Convulsiones tónico-clónicas.<br/>
      • Depresión SNC, coma.<br/>
      <b>3. Cardiovascular (más tarde):</b><br/>
      • Arritmias (TV, FV).<br/>
      • Bradicardia.<br/>
      • Hipotensión.<br/>
      • <b>Paro cardíaco</b>.<br/><br/>
      <b>MANEJO INMEDIATO:</b><br/>
      1. <b>SUSPENDER lidocaína</b>.<br/>
      2. Pedir AYUDA, equipo RCP.<br/>
      3. <b>O₂ al 100%</b>, mantener vía aérea, ventilación asistida.<br/>
      4. Si convulsiones: <b>Midazolam 1-2 mg IV</b> (NO propofol en LAST - empeora CV).<br/>
      5. <b>INTRALIPID 20% (Emulsión lipídica)</b>:<br/>
      • <b>Bolo: 1.5 mL/kg IV en 1 min</b>.<br/>
      • <b>Infusión: 0.25 mL/kg/min × 10-30 min</b>.<br/>
      • Repetir bolos hasta 3 mL/kg si no respuesta.<br/>
      • Continuar infusión 10 min post-estabilización.<br/>
      6. Si arritmias: NO usar lidocaína (obvio). Considerar amiodarona.<br/>
      7. Si paro: RCP prolongada (hasta 60+ min) - lidocaína se redistribuye lentamente.<br/>
      8. NO usar vasopresina, bloqueadores Ca²⁺, betabloqueantes.<br/>
      9. Monitorización UCI 24-48h post-evento.<br/><br/>
      <b>PREVENCIÓN:</b><br/>
      • Calcular dosis MÁXIMA: 4.5 mg/kg sin epi, 7 mg/kg con epi.<br/>
      • Aspirar antes de inyectar.<br/>
      • Inyectar FRACCIONADO 3-5 mL c/30 seg.<br/>
      • Tener Intralipid 20% disponible en quirófano/sala procedimientos.
    `,

    antiarritmico: `
      <b>Lidocaína como Antiarrítmico - ACLS:</b><br/>
      <b>INDICACIONES:</b><br/>
      • TV monomórfica estable o inestable.<br/>
      • FV refractaria tras desfibrilación.<br/>
      • TV peri-paro o post-paro cardíaco.<br/>
      • Arritmias ventriculares post-IAM (controvertido).<br/><br/>
      <b>PROTOCOLO ACLS:</b><br/>
      <b>Carga IV:</b> 1-1.5 mg/kg IV en 2-3 min.<br/>
      <b>Repetir si arritmia persiste:</b> 0.5-0.75 mg/kg c/5-10 min.<br/>
      <b>Dosis máxima total:</b> 3 mg/kg en primera hora.<br/>
      <b>Infusión mantenimiento:</b> 1-4 mg/min IV continua.<br/><br/>
      <b>ALTERNATIVA a amiodarona</b> en paro cardíaco con FV/TVsP refractaria - resultados similares.<br/><br/>
      <b>VIGILANCIA:</b><br/>
      • ECG continuo durante administración.<br/>
      • Niveles séricos en infusión > 24h (terapéutico: 1.5-5 mcg/mL).<br/>
      • Vigilar signos de toxicidad (similares a LAST pero por acumulación).
    `,

    intubacion: `
      <b>Lidocaína para Atenuar Respuesta a Intubación:</b><br/>
      <b>INDICACIÓN:</b> Prevenir respuesta hipertensiva/taquicardia durante laringoscopia/intubación, especialmente en:<br/>
      • Pacientes con TCE (evitar ↑ PIC).<br/>
      • Cardiopatía isquémica activa.<br/>
      • Aneurisma intracraneal.<br/>
      • HTA severa.<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>1.5 mg/kg IV 90 segundos antes de laringoscopia</b>.<br/>
      • Combinada con otros agentes RSI: etomidato/propofol + opioide + relajante muscular.<br/><br/>
      <b>EVIDENCIA:</b><br/>
      • Reduce ↑ PA 20-30% durante intubación.<br/>
      • Reduce ↑ PIC en TCE (controvertido).<br/>
      • Reduce tos durante intubación.<br/>
      • Atenúa respuesta broncomotora (útil en asmáticos).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar concentración (1%, 2%, 5%) - diferentes usos.',
      'Calcular dosis máxima según peso (4.5 mg/kg sin epi, 7 mg/kg con epi).',
      'Etiquetar bolsa de infusión: Lidocaína [mg], concentración, velocidad (mg/min), hora.',
      'Bomba de infusión OBLIGATORIA para infusión continua.',
      'En antiarrítmico IV: bolo lento (2-3 min), NO rápido.',
      'En anestesia local: aspirar antes de inyectar (descartar intravascular).',
      'Inyección regional fraccionada: 3-5 mL c/30 segundos.',
      '<b>TENER INTRALIPID 20% disponible</b> (antídoto LAST).',
      'Monitor cardíaco durante administración IV.',
      'Vigilar signos precoces de LAST: parestesias periorales, sabor metálico, tinnitus.',
      'En infusión > 24h: niveles séricos, ajuste si cirrosis.',
      'NO usar con epinefrina en dedos, nariz, pene, oreja.',
      'Documentar: dosis total, vía, indicación, respuesta, efectos adversos.',
      'Educar al paciente sobre síntomas a reportar (boca dormida, mareo, ruido oído).',
    ],

    efectosAdversos: [
      '🔴 LAST (Local Anesthetic Systemic Toxicity): convulsiones, arritmias, paro',
      '🔴 Arritmias ventriculares (con sobredosis o niveles altos)',
      '🔴 Bradicardia severa, bloqueo AV',
      '🔴 Convulsiones',
      '🔴 Coma',
      '🔴 Necrosis isquémica con epi en zonas terminales',
      '🟠 Hipotensión severa',
      '🟠 Depresión SNC (somnolencia, confusión)',
      '🟠 Reacción alérgica (rara, especialmente con preservantes)',
      '🟡 Parestesias periorales, lengua adormecida',
      '🟡 Sabor metálico',
      '🟡 Tinnitus, mareo',
      '🟡 Náuseas, vómitos',
      '🟡 Visión borrosa, diplopia',
      '🟡 Temblor, ansiedad',
      '🟡 Sensación de calor o frío',
      '🟡 Dolor en sitio inyección (mejor con bicarbonato adicionado)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a anestésicos locales tipo amida.',
      'Bloqueo AV de 2º-3º grado sin marcapasos.',
      'Insuficiencia cardíaca severa.',
      'Shock cardiogénico.',
      'Síndrome de Stokes-Adams.',
      'Síndrome de Wolff-Parkinson-White (precaución).',
      'Porfiria aguda intermitente.',
      'Hipovolemia severa no corregida.',
      'En anestesia regional: infección en sitio inyección, coagulopatía severa.',
    ],

    fotosensibilidad: 'No es significativamente fotosensible. Conservar a temperatura ambiente protegido de luz directa intensa pero sin requerimientos especiales.',

    estabilidad: {
      'Ampolla sin abrir':        'Temperatura ambiente (< 25°C) hasta vencimiento',
      'Diluida en SF/SG 5%':      '24 horas a 25°C · 7 días refrigerada',
      'Con epinefrina':            'Estabilidad reducida (luz, calor) - usar inmediatamente',
      'Aspecto':                  'Transparente, incolora — desechar si turbidez',
      'Temperatura':              'NO congelar · 15-25°C',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Ampolla monodosis: usar de inmediato. Desechar sobrante.',
      dosisRestante:    'No conservar ampollas monodosis abiertas. Viales multidosis (con conservante): refrigerar y usar en 30 días.',
      infusionPreparada:'24 h a temperatura ambiente en SG 5% o SF 0.9%.',
      notas:            'Para uso IV antiarrítmico usar preparaciones SIN conservantes (benzyl alcohol). Compatible con la mayoría de soluciones IV.',
    },

    presentaciones: [
      'Lidocaína 1% (10 mg/mL) - ampolla 10 mL',
      'Lidocaína 2% (20 mg/mL) - ampolla 10 mL (preferida IV)',
      'Lidocaína 5% (50 mg/mL) - hiperbárica (raquídea)',
      'Lidocaína 1% + epinefrina 1:100,000 (anestesia local)',
      'Lidocaína 2% + epinefrina 1:200,000 (anestesia local extendida)',
      'Lidocaína gel 2% (uso urológico, intubación)',
      'Lidocaína spray 10% (anestesia tópica oral, laringe)',
      'Parches lidocaína 5% (Versatis®) - dolor neuropático localizado',
      'EMLA® (lidocaína + prilocaína) - anestesia tópica antes de venopunción',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'TV/FV (carga IV)',                   dosis: '<b>1-1.5 mg/kg IV en 2-3 min</b>',          via: 'IV' },
      { indicacion: 'TV/FV (infusión mantenimiento)',     dosis: '<b>1-4 mg/min IV</b>',                       via: 'IV' },
      { indicacion: 'Pre-intubación (atenuar respuesta)', dosis: '1.5 mg/kg IV 90 seg pre-laringoscopia',     via: 'IV' },
      { indicacion: 'Analgesia perioperatoria',           dosis: '1-1.5 mg/kg IV + 1-2 mg/kg/h',              via: 'IV' },
      { indicacion: 'Anestesia local infiltración',       dosis: 'Volumen 1-2% sin/con epi',                  via: 'SC' },
      { indicacion: 'Anestesia regional periférica',      dosis: '5-30 mL 1-2% (titular)',                    via: 'PNB' },
      { indicacion: 'Anestesia raquídea',                  dosis: '50-100 mg lidocaína 5% hiperbárica',       via: 'IT' },
      { indicacion: 'DOSIS MÁXIMA sin epi',               dosis: '<b>4.5 mg/kg (300 mg adulto 70 kg)</b>',    via: 'todas' },
      { indicacion: 'DOSIS MÁXIMA con epi',               dosis: '<b>7 mg/kg (500 mg adulto 70 kg)</b>',      via: 'todas' },
    ],

    embarazo: 'Categoría B (FDA). Atraviesa placenta - depresión fetal con dosis altas. Uso seguro en anestesia local y raquídea para parto. Evitar dosis altas IV en 3er trimestre. Compatible con lactancia (excreción mínima en leche).',

    pediatria: 'Dosis máxima similar: 4.5 mg/kg sin epi, 7 mg/kg con epi. En antiarrítmico: 1 mg/kg IV. En infusión: 20-50 mcg/kg/min. <b>NO usar epinefrina en zonas terminales (dedos)</b>. Mayor riesgo de LAST en niños pequeños (menor proteína plasmática).',

    adultoMayor: 'Reducir dosis 25-30% por menor aclaramiento. Mayor riesgo de toxicidad SNC (confusión, convulsiones) y CV. Vigilancia ECG intensiva. En infusión: ajustar según niveles séricos.',

    insufRenal: 'Sin ajuste significativo de dosis - eliminación principalmente hepática. En IRC: vigilancia clínica estándar.',

    insufHepatica: 'En cirrosis severa: <b>REDUCIR DOSIS 50%</b> - metabolismo hepático (CYP3A4, CYP1A2). Vida media ↑↑. Niveles tóxicos rápidos en infusión prolongada. Considerar niveles séricos c/24h.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Lidocaína Braun. Agencia Española de Medicamentos.',
      'FDA DailyMed. Lidocaine HCl Injection. U.S. National Library of Medicine.',
      'AHA ACLS Guidelines 2020-2025. Antiarrhythmics in Cardiac Arrest. Circulation.',
      'ASRA Guidelines. LAST (Local Anesthetic Systemic Toxicity). Reg Anesth Pain Med. 2021.',
      'Neal JM, et al. The Third American Society of Regional Anesthesia and Pain Medicine Checklist for Managing LAST. 2018.',
      'IASP. Lidocaine in Neuropathic Pain Management.',
      'WHO. Lidocaine as Essential Medicine. List 2023.',
      'Pediamécum AEP. Lidocaína. Asociación Española de Pediatría.',
    ],
  },

});
