/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/succinilcolina.js
   Fuentes: CIMA AEMPS (Anectine), FDA DailyMed,
   Cochrane RSI 2015, Miller's Anesthesia 9ª ed.,
   SFAR Anaphylaxis Guidelines 2019
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'succinilcolina',
  nombre:         'Succinilcolina',
  nombreGenerico: 'Succinylcholine (Suxamethonium)',
  categoria:      'anestesia',
  tags:           ['bloqueante neuromuscular', 'ISR', 'intubación', 'relajante muscular', 'despolarizante', 'urgencias', 'quirófano', 'UCI'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Bloqueante neuromuscular despolarizante. CONTRAINDICADO en quemados, lesión medular, aplastamiento, denervación: hiperpotasemia letal. Puede desencadenar HIPERTERMIA MALIGNA en susceptibles. No hay antídoto — el bloqueo revierte solo. Conservar SIEMPRE en nevera (2-8°C). Jamás administrar sin equipamiento de intubación y ventilación disponible.',

  nivel1: {

    puntosClave: [
      '<b>ISR (intubación de secuencia rápida)</b>: 1-1.5 mg/kg IV bolus en 10-15 seg → intubación a los 45-60 seg.',
      '<b>CONTRAINDICADO</b> en quemados >24h, lesión medular >24h, aplastamiento extenso — hiperpotasemia puede causar parada cardíaca.',
      '<b>HIPERTERMIA MALIGNA</b>: rigidez muscular + ↑ temperatura + taquicardia + acidosis → DANTROLENO 2.5 mg/kg IV urgente.',
      'No tiene antídoto funcional — el bloqueo se resuelve en 8-12 min por pseudocolinesterasa plasmática.',
      '<b>Conservar en nevera 2-8°C</b> — pierde potencia a temperatura ambiente. Verificar temperatura y caducidad.',
    ],

    resumenRapido: 'Bloqueante neuromuscular despolarizante de acción ultracorta. Se une a receptores nAChR de la placa motora, produciendo despolarización (fasciculaciones) seguida de bloqueo por desensibilización. Hidrolizado rápidamente por pseudocolinesterasa plasmática (8-12 min). Gold standard para ISR por su inicio más rápido (45-60 s) y duración más corta que cualquier otro relajante muscular. En déficit de pseudocolinesterasa: bloqueo prolongado horas.',

    objetivoTerapeutico: 'Relajación muscular completa en 45-60 seg para intubación de secuencia rápida (ISR) · Resolución de laringospasmo grave · ECT con protección muscular',

    preparacion: {
      'Presentación':           '<b>Anectine® 50 mg/mL — ampolla 2 mL (100 mg)</b>',
      'ISR adultos':            '<b>1-1.5 mg/kg IV bolus directo — NO diluir para ISR</b>',
      'Velocidad ISR':          '<b>Bolus en 10-15 segundos</b>',
      'ISR pediátrico':         '2 mg/kg IV (<10 kg) · 1-1.5 mg/kg IV (>10 kg)',
      'Laringospasmo (sin IV)':  '4 mg/kg IM (máx 150 mg)',
      'Infusión continua (si precisa)': '1-2 mg/mL en SF → 2.5-3 mg/min',
      '⏱️ Inicio efecto':        '<b>45-60 segundos IV</b>',
      '⏱️ Duración':             '<b>8-12 minutos</b> (hasta recuperación tono muscular)',
      'Vía':                    'IV directa (ISR) · IM (sin acceso IV, niños)',
      '🧊 CONSERVACIÓN':         '<b>OBLIGATORIO en nevera 2-8°C — comprobar temperatura antes de usar</b>',
    },

    vigilancia: {
      antes: [
        '<b>VERIFICAR CONTRAINDICACIONES</b>: quemados >24h, lesión medular >24h, aplastamiento, miopatías, hiperpotasemia previa, historia familiar de hipertermia maligna.',
        'Preparar TODO antes: laringoscopio, tubo endotraqueal, aspirador, ambú, capnógrafo, oxígeno.',
        'Tener DANTROLENO disponible (mínimo 720 mg = 36 viales de 20 mg) si riesgo de hipertermia maligna.',
        'En niños: preparar atropina (0.02 mg/kg IV mín 0.1 mg) para administrar antes de succinilcolina.',
        'Verificar que el fármaco sale de nevera (<2-8°C) y comprobar fecha de caducidad.',
        'Asegurar sedación/analgesia ANTES del relajante — el paciente puede estar consciente y paralizado.',
      ],
      durante: [
        'SpO2 continua — crítica durante ISR.',
        'Registrar fasciculaciones (signo de inicio de efecto) — intubación óptima 45-60 seg después.',
        'FC y ritmo cardíaco — bradicardia posible especialmente en 2ª dosis o niños.',
        'TA continua durante y después de ISR.',
        'Confirmar posición del tubo endotraqueal con capnografía (ETCO2) inmediatamente tras intubación.',
        'Vigilar temperatura — inicio de hipertermia maligna puede aparecer durante la administración.',
      ],
      despues: [
        'Evaluar recuperación del tono muscular (8-12 min en dosis estándar).',
        'Si tono no recuperado en 15-20 min: sospechar déficit de pseudocolinesterasa — continuar ventilación mecánica.',
        'Potasio sérico si paciente de riesgo de hiperpotasemia.',
        'Documentar: dosis, tiempo de administración, tiempo de recuperación, incidencias.',
        'En hipertermia maligna: continuar dantroleno, enfriar al paciente, analítica urgente (CPK, lactato, gases).',
      ],
      suspender: [
        'No aplicable — la succinilcolina es de dosis única (no infusión continua en la mayoría de usos).',
        'Si laringospasmo: una dosis única resuelve el problema.',
        'ISR: dosis única seguida de otro relajante si precisa mantenimiento.',
      ],
    },

    incompatibilidades: [
      '<b>Soluciones alcalinas (bicarbonato, tiopental) — hidrólisis del fármaco</b>.',
      'Barbitúricos en la misma solución.',
      'Propofol en la misma jeringa.',
      'pH neutro — incompatible con soluciones alcalinas. Administrar sola en bolus directo.',
    ],

    alertasSeguridad: [
      '🔴 HIPERTERMIA MALIGNA: rigidez + ↑Tª + taquicardia + acidosis → DANTROLENO 2.5 mg/kg IV urgente.',
      '🔴 HIPERPOTASEMIA LETAL en quemados/lesión medular/aplastamiento (K+ puede subir 5-10 mEq/L).',
      '🔴 Sin antídoto — ventilación mecánica hasta recuperación (en déficit de pseudocolinesterasa: horas).',
      '🔴 Bradicardia grave en 2ª dosis o en niños — atropina previa obligatoria en pediatría.',
      '🟠 Fasciculaciones y mialgias postoperatorias — preventivas con dosis pequeña de relajante no despolarizante.',
      '🟠 Conservación fuera de nevera = pérdida de potencia (puede fallar en ISR).',
      '🟡 Aumento transitorio de presión intraocular, intracraneal e intragástrica.',
    ],
  },

  modulos: {

    hipertermiamaligna: `
      <b>Protocolo Hipertermia Maligna — EMERGENCIA:</b><br/>
      <b>Signos: rigidez muscular + temperatura >38.8°C + taquicardia + hipercapnia + acidosis metabólica</b><br/><br/>
      <b>1. DETENER el agente desencadenante</b> (succinilcolina / anestésicos halogenados).<br/>
      <b>2. DANTROLENO 2.5 mg/kg IV bolus</b> → repetir cada 5-10 min hasta 10 mg/kg (máx 30 mg/kg).<br/>
      3. Hiperventilación con O₂ 100%.<br/>
      4. Enfriar activamente: hielo, SF frío IV, lavado gástrico con SF frío.<br/>
      5. Bicarbonato IV (si acidosis grave).<br/>
      6. Tratar hiperpotasemia: glucosa + insulina IV.<br/>
      7. Control de diuresis — manitol si mioglobinuria.<br/>
      8. Analítica urgente: CPK, lactato, gases, potasio, creatinina.<br/>
      9. UCI para monitorización ≥ 24 h.<br/><br/>
      <b>DANTROLENO mínimo disponible: 36 viales de 20 mg (= 720 mg)</b>
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar contraindicaciones con checklist ANTES de preparar: quemados, lesión medular, miopatías, hiperpotasemia.',
      'Comprobar temperatura de conservación (nevera 2-8°C) y fecha de caducidad ANTES de usar.',
      'Preparar TODO el equipo de intubación antes de administrar — una vez dado no hay vuelta atrás.',
      'En niños: preparar y administrar atropina 0.02 mg/kg IV ANTES de succinilcolina.',
      'Administrar sedante/analgésico ANTES del relajante — no paralizar a un paciente consciente.',
      'Informar al paciente consciente que notará fasciculaciones y pérdida de fuerza — normal.',
      'Confirmar posición del tubo con capnografía inmediatamente tras la intubación.',
      'Si intubación fallida tras succinilcolina: ventilación manual con mascarilla hasta recuperación del tono.',
      'Si sospecha de hipertermia maligna: avisar URGENTE y preparar dantroleno.',
      'Documentar: dosis, hora, tiempo de inicio de fasciculaciones, tiempo de intubación, tiempo de recuperación.',
    ],

    efectosAdversos: [
      '🔴 Hipertermia maligna (genéticamente susceptible)',
      '🔴 Hiperpotasemia letal en quemados / lesión medular / aplastamiento',
      '🔴 Bradicardia grave (especialmente 2ª dosis o niños)',
      '🔴 Bloqueo neuromuscular prolongado (déficit de pseudocolinesterasa)',
      '🟠 Fasciculaciones musculares y mialgias postoperatorias',
      '🟠 Aumento de presión intraocular (riesgo en ojo abierto)',
      '🟠 Aumento de presión intragástrica (regurgitación)',
      '🟡 Aumento transitorio de presión intracraneal',
      '🟡 Hipersalivación',
    ],

    contraindicaciones: [
      'Quemaduras extensas (>24 h postquemadura, hasta 2 años después).',
      'Lesión medular aguda o crónica (>24 h postlesión).',
      'Aplastamiento muscular extenso o rabdomiólisis.',
      'Denervación muscular: ELA, Guillain-Barré, parálisis cerebral grave, ictus con paresia.',
      'Miopatías congénitas: Duchenne, Becker, miotonías.',
      'Hiperpotasemia preexistente (K+ >5.5 mEq/L).',
      'Historia personal o familiar de hipertermia maligna.',
      'Déficit conocido de pseudocolinesterasa.',
      'Glaucoma de ángulo cerrado (aumento PIO).',
      'Ojo abierto con trauma ocular (aumento PIO).',
    ],

    fotosensibilidad: 'No fotosensible. Conservar ampollas en nevera 2-8°C (sensible a temperatura — no a la luz).',

    estabilidad: {
      'Ampolla sin abrir':      '<b>NEVERA 2-8°C obligatorio — pierde potencia a temperatura ambiente</b>',
      'Preparada en SF 0.9%':  '<b>24 horas a 2-8°C (1-2 mg/mL)</b>',
      'A temperatura ambiente': 'Inestable — no almacenar fuera de nevera (uso inmediato si es necesario)',
      'Aspecto':                'Solución incolora — desechar si turbidez o precipitado',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras apertura — desechar sobrante.',
      dosisRestante:     'Desechar sobrante de ampolla.',
      infusionPreparada: 'Estable 24 h a 2-8°C en SF 0.9% (1-2 mg/mL).',
      notas:             'CONSERVAR EN NEVERA 2-8°C OBLIGATORIAMENTE. Pierde potencia rápidamente a temperatura ambiente. Verificar temperatura de conservación antes de administrar. Si ha estado fuera de nevera tiempo indeterminado: descartar.',
    },

    presentaciones: [
      'Anectine® 50 mg/mL — ampolla 2 mL (100 mg)',
      'Lysthenon® 500 mg/10 mL (50 mg/mL) — vial',
      'Succinilcolina Kern Pharma® — genérico',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'ISR adulto',                   dosis: '<b>1-1.5 mg/kg IV bolus (máx 150-200 mg)</b>',        via: 'IV' },
      { indicacion: 'ISR pediátrico (<10 kg)',       dosis: '2 mg/kg IV bolus',                                    via: 'IV' },
      { indicacion: 'ISR pediátrico (>10 kg)',       dosis: '1-1.5 mg/kg IV bolus',                                via: 'IV' },
      { indicacion: 'ISR pediátrico sin vía IV',     dosis: '4 mg/kg IM (máx 150 mg)',                             via: 'IM' },
      { indicacion: 'Laringospasmo (sin IV)',         dosis: '4 mg/kg IM o 0.5-1 mg/kg IV',                        via: 'IM/IV' },
      { indicacion: 'ECT',                           dosis: '0.5-1 mg/kg IV',                                      via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Puede usarse si está indicado (no hay alternativa más segura en ISR urgente). El nivel de pseudocolinesterasa está reducido en el embarazo — puede producirse bloqueo ligeramente prolongado. Sin efectos teratogénicos conocidos. Puede causar bradicardia fetal con dosis altas.',

    pediatria: 'ISR: <10 kg: 2 mg/kg IV · >10 kg: 1-1.5 mg/kg IV · Sin acceso IV: 4 mg/kg IM (máx 150 mg). ATROPINA OBLIGATORIA PREVIA en niños (0.02 mg/kg, mín 0.1 mg IV) — alto riesgo de bradicardia grave. Precaución extrema en <1 año y en miopatías pediátricas.',

    adultoMayor: 'Misma dosis ajustada por peso. Mayor riesgo de bradicardia e hiperpotasemia. Valorar alternativa con rocuronio si hay factores de riesgo cardiovascular. La función de pseudocolinesterasa disminuye con la edad — posible bloqueo ligeramente más prolongado.',

    insufRenal: 'Sin ajuste de dosis (metabolismo por pseudocolinesterasa plasmática, no renal). En IR grave: mayor riesgo de hiperpotasemia basal — contraindicado si K+ >5.5 mEq/L.',

    insufHepatica: 'En IH grave: menor producción de pseudocolinesterasa → posible bloqueo prolongado. Reducir dosis o considerar rocuronio.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Anectine® (suxametonio/succinilcolina).',
      'Tran DT et al. Rocuronium vs succinylcholine for RSI. Cochrane. 2015.',
      'Miller RD. Neuromuscular Blocking Drugs. Miller\'s Anesthesia 9ª ed. 2019.',
      'Mertes PM et al. Reducing the risk of anaphylaxis during anaesthesia. SFAR/ENDA. Anaesth Crit Care Pain Med. 2019.',
      'Brandom BW et al. Malignant hyperthermia. Paediatr Anaesth. 2011.',
      'Hopkins PM. Malignant hyperthermia: pharmacology of triggering agents. Br J Anaesth. 2011.',
    ],
  },

});
