/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/rocuronio.js
   Fuentes: CIMA AEMPS (Esmeron, Rocuronio Kabi),
   FDA DailyMed, ASA Guidelines, RSI Protocols
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'rocuronio',
  nombre:         'Rocuronio',
  nombreGenerico: 'Rocuronium Bromide',
  categoria:      'analgesia',
  tags:           ['UCI', 'relajante muscular', 'no despolarizante', 'intubación', 'RSI', 'anestesia', 'ventilación mecánica'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Relajante muscular no despolarizante. PARÁLISIS RESPIRATORIA COMPLETA - requiere ventilación mecánica obligatoria. Solo personal entrenado en manejo de vía aérea. SUGAMMADEX 16 mg/kg IV es antídoto específico (reversor rápido). Riesgo de anafilaxia.',

  nivel1: {

    puntosClave: [
      'Relajante muscular NO DESPOLARIZANTE de acción intermedia - bloquea receptor nicotínico de acetilcolina en placa motora.',
      '<b>NO CAUSA HIPNOSIS NI ANALGESIA</b> - paciente PARALIZADO PERO CONSCIENTE si no se asocia hipnótico. Garantizar sedación adecuada.',
      'Inicio rápido (60-90 segundos en RSI con dosis altas) - <b>ALTERNATIVA a SUCCINILCOLINA en RSI</b> cuando contraindicada.',
      '<b>ANTÍDOTO ESPECÍFICO: SUGAMMADEX 16 mg/kg IV</b> - reversión inmediata (1-3 min) incluso de bloqueo profundo.',
      'Duración: 30-40 min tras dosis de intubación (más prolongada en ancianos, hepatopatía).',
    ],

    resumenRapido: 'Bloqueador neuromuscular NO despolarizante (aminoesteroide) de acción intermedia. Antagoniza competitivamente receptores nicotínicos de acetilcolina en placa motora → parálisis muscular esquelética flácida. <b>NO afecta SNC</b> (sin hipnosis ni analgesia). Inicio: 1-2 min (dosis intubación), 60-90 seg (dosis RSI). Duración: 30-40 min. Indicado en: facilitar INTUBACIÓN endotraqueal (especialmente RSI), relajación muscular durante anestesia general, RELAJACIÓN MUSCULAR EN UCI con ventilación mecánica (SDRA, asincronía con ventilador). ANTÍDOTO específico: SUGAMMADEX.',

    objetivoTerapeutico: 'Facilitar intubación endotraqueal · Relajación muscular en cirugía · Asincronía con ventilador en UCI · Alternativa a succinilcolina en RSI cuando contraindicada',

    preparacion: {
      'Presentación estándar':    '<b>Rocuronio 10 mg/mL vial 5 mL (50 mg total) - Esmeron®</b>',
      'Presentación grande':      'Rocuronio 10 mg/mL vial 10 mL (100 mg)',
      'Diluyente':                'NO requiere dilución habitualmente - <b>usar sin diluir</b> en bolo',
      'Si requiere dilución':     'SF 0.9% · SG 5% (compatibles para infusión continua)',
      'Vía':                      'IV exclusiva',
      '⏱️ DOSIS intubación estándar':'<b>0.6 mg/kg IV bolo</b> (típico 42 mg adulto 70 kg) - inicio 1-2 min',
      '⏱️ DOSIS RSI (alta dosis)': '<b>1-1.2 mg/kg IV bolo</b> (típico 70-85 mg) - inicio 60-90 seg',
      '⏱️ DOSIS mantenimiento':    '0.15 mg/kg IV bolo PRN c/20-40 min',
      '⏱️ INFUSIÓN CONTINUA UCI': '<b>0.3-0.6 mg/kg/h IV</b> (titular con TOF)',
      '⏱️ DOSIS reversión sugammadex':'<b>16 mg/kg IV bolo</b> (reversión inmediata) · 2-4 mg/kg (reversión rutinaria)',
      'Bomba':                    'OBLIGATORIA para infusión continua',
      '🧊 ESTABILIDAD vial sin abrir':'REFRIGERAR (2-8°C) hasta vencimiento · TA hasta 12 semanas',
      '🧊 ESTABILIDAD diluido':   '24 horas a TA · 48 horas refrigerado',
      'Aspecto':                  'Solución transparente, incolora a ligeramente amarillenta - desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>SEDACIÓN PROFUNDA OBLIGATORIA</b> - rocuronio NO da hipnosis, paciente paralizado pero consciente.',
        'Personal entrenado en vía aérea y ventilación mecánica.',
        'Equipo de intubación, ambú, O₂, ventilador disponibles.',
        '<b>SUGAMMADEX disponible</b> (antídoto - vía aérea fallida).',
        'PA, FC, FR, SpO₂, ECG basales registrados.',
        'Capnografía OBLIGATORIA (verificación de intubación correcta y ventilación).',
        'Monitor de TOF (Train of Four) recomendado para titulación en UCI.',
        'Acceso IV permeable de buen calibre.',
        'En UCI: prever sedoanalgesia continua (midazolam/propofol + fentanilo).',
        'Doble verificación: dosis exacta por peso real (no peso ideal).',
      ],
      durante: [
        '<b>SEDACIÓN MANTENIDA SIEMPRE</b> - vigilar nivel sedación (BIS si disponible).',
        'Monitor continuo: ECG, PA, SpO₂, capnografía.',
        'Vigilar parálisis muscular (TOF si disponible).',
        'Confirmar relajación adecuada antes de intubar (60-90 seg post-bolo RSI).',
        'PA estable - rocuronio sin efectos hemodinámicos significativos (vs succinilcolina).',
        'Vigilar reacción alérgica/anafilaxia (rara pero descrita - urticaria, broncoespasmo).',
        'En UCI con infusión: TOF c/4-8h, "vacaciones de relajante" diarias.',
      ],
      despues: [
        'Continuar ventilación mecánica hasta recuperación neuromuscular completa.',
        'Reversión: SUGAMMADEX al final de cirugía o si requerimiento urgente.',
        '<b>Esperar recuperación COMPLETA</b> antes de extubar (TOF 0.9, sostener cabeza 5 seg).',
        'Vigilar parálisis residual (debilidad respiratoria, disfagia, ↑ aspiración).',
        'En UCI tras suspensión: vigilancia por 12-24h por debilidad residual.',
        'Documentar: dosis, duración, sedación concomitante, reversión, eventos.',
        'Si requirió alta dosis o uso prolongado: considerar miopatía/neuropatía del enfermo crítico (CINP/CIM).',
      ],
      suspender: [
        'Reversión planeada al final de procedimiento.',
        'Reacción anafiláctica - SUGAMMADEX urgente + adrenalina + soporte.',
        'Vía aérea fallida (cannot intubate, cannot ventilate) - SUGAMMADEX 16 mg/kg.',
        'Bradicardia/asistolia severa (rara).',
        'En UCI: extubación planeada, mejoría de patología subyacente.',
      ],
    },

    incompatibilidades: [
      'Soluciones alcalinas (bicarbonato) - precipitación.',
      'Tiopental - precipitación.',
      'Anfotericina B - incompatibilidad.',
      'Generalmente NO mezclar con otros medicamentos en misma jeringa.',
      'Lavar línea con SF antes y después de otros medicamentos.',
      'Compatible: propofol, midazolam, fentanilo en líneas separadas.',
    ],

    alertasSeguridad: [
      '🔴 <b>PARÁLISIS RESPIRATORIA COMPLETA</b> - VENTILACIÓN MECÁNICA OBLIGATORIA.',
      '🔴 NO causa hipnosis - paciente CONSCIENTE PERO PARALIZADO si no se asocia hipnótico (experiencia traumática).',
      '🔴 ANAFILAXIA - rocuronio es el RELAJANTE MUSCULAR CON MAYOR riesgo (especialmente Francia).',
      '🔴 NO USAR sin manejo de vía aérea garantizado.',
      '🟠 MIOPATÍA/NEUROPATÍA DEL ENFERMO CRÍTICO con uso prolongado en UCI (>48h).',
      '🟠 Recuperación retrasada en obesidad, ancianos, cirrosis (vida media ↑).',
      '🟠 Vigilar TOF (Train of Four) en infusión continua para titular.',
      '🟡 Sin efectos histaminérgicos significativos (vs atracurio).',
      '🟡 Bradicardia leve posible (vagomimético).',
      '🟡 Dolor en sitio de inyección (raro).',
      '🟡 Reactivación de bloqueo en hipotermia, acidosis, hipopotasemia.',
    ],
  },

  modulos: {

    rsi: `
      <b>Rocuronio en Intubación de Secuencia Rápida (RSI):</b><br/>
      <b>INDICACIÓN PRINCIPAL:</b> Alternativa a SUCCINILCOLINA cuando esta está CONTRAINDICADA:<br/>
      • Hiperpotasemia (K+ > 5).<br/>
      • Quemaduras > 24h, trauma masivo > 24-48h.<br/>
      • Lesión medular > 24-48h.<br/>
      • Distrofia muscular, miopatía.<br/>
      • Hipertermia maligna familiar.<br/>
      • Deficiencia pseudocolinesterasa.<br/>
      • Glaucoma de ángulo cerrado.<br/>
      • Lesión ocular abierta.<br/><br/>
      <b>VENTAJAS sobre succinilcolina:</b><br/>
      • Sin riesgo de hiperpotasemia.<br/>
      • Sin hipertermia maligna.<br/>
      • Sin fasciculaciones (no aumenta dolor, ↓ PIC).<br/>
      • <b>SUGAMMADEX puede revertirla rápidamente</b>.<br/><br/>
      <b>DESVENTAJAS:</b><br/>
      • Duración mucho mayor (30-40 min vs 5-10 min succinilcolina).<br/>
      • Sin sugammadex disponible: ¡problema en vía aérea fallida!<br/><br/>
      <b>PROTOCOLO RSI:</b><br/>
      <b>Preoxigenación:</b> O₂ 100% × 3 min.<br/>
      <b>Premedicación:</b> Fentanilo 1-3 mcg/kg IV (opcional).<br/>
      <b>Inducción hipnótica:</b><br/>
      • Etomidato 0.3 mg/kg (estabilidad CV) O<br/>
      • Propofol 1.5-2 mg/kg (estable hemodinámicamente) O<br/>
      • Ketamina 1-2 mg/kg (asma, shock).<br/>
      <b>Relajante muscular:</b><br/>
      • <b>Rocuronio 1-1.2 mg/kg IV bolo</b>.<br/>
      • Intubación a los 60-90 segundos.<br/>
      <b>Verificación:</b> Capnografía + auscultación + visualización directa.<br/>
      <b>Mantenimiento:</b> Sedación + analgesia + ventilación mecánica.<br/>
      <b>DURACIÓN:</b> Esperar 30-40 min para recuperación o usar SUGAMMADEX 4-16 mg/kg.
    `,

    sugammadex: `
      <b>SUGAMMADEX - Antídoto Específico:</b><br/>
      <b>MECANISMO:</b><br/>
      • γ-ciclodextrina modificada que encapsula al rocuronio en plasma.<br/>
      • Forma complejo inactivo eliminado por riñón.<br/>
      • Reversión EN 1-3 MINUTOS incluso de bloqueo profundo.<br/><br/>
      <b>DOSIS según nivel de bloqueo:</b><br/>
      • <b>Reversión PROFUNDA (TOF count 0, PTC ≥ 1):</b> 4 mg/kg IV.<br/>
      • <b>Reversión RUTINARIA (TOF count 2):</b> 2 mg/kg IV.<br/>
      • <b>Reversión INMEDIATA (paciente acaba de recibir 1.2 mg/kg rocuronio):</b> <b>16 mg/kg IV</b>.<br/>
      <b>ADMINISTRACIÓN:</b><br/>
      • Bolo IV único en 10 segundos.<br/>
      • Recuperación neuromuscular en 1-3 minutos.<br/><br/>
      <b>INDICACIONES INMEDIATAS (16 mg/kg):</b><br/>
      • <b>Vía aérea fallida (cannot intubate, cannot ventilate)</b>.<br/>
      • Anafilaxia con rocuronio.<br/>
      • Emergencia que requiere despertar inmediato.<br/><br/>
      <b>VENTAJAS:</b><br/>
      • Reversión más rápida y completa que neostigmina + atropina.<br/>
      • Funciona en cualquier nivel de bloqueo.<br/>
      • Sin efectos colinérgicos (no taquicardia, no broncoespasmo).<br/>
      • Sin riesgo de re-curarización.<br/><br/>
      <b>EFECTOS ADVERSOS:</b><br/>
      • Bradicardia / hipotensión (raro).<br/>
      • Anafilaxia (rara).<br/>
      • Recurarización (con dosis insuficiente).<br/>
      • Anticonceptivos hormonales: ↓ eficacia × 7 días.<br/>
      <b>CONTRAINDICACIONES:</b> Insuficiencia renal severa (CrCl < 30).
    `,

    uci: `
      <b>Rocuronio en UCI - Relajación Muscular Continua:</b><br/>
      <b>INDICACIONES:</b><br/>
      • SDRA moderado-severo (mejora oxigenación, según estudio ACURASYS).<br/>
      • Asincronía severa con ventilador.<br/>
      • Hipertensión intracraneal refractaria.<br/>
      • Hipertermia maligna (raro).<br/>
      • Estado epiléptico refractario (raro).<br/>
      • Tétanos con espasmos severos.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. <b>Garantizar SEDACIÓN PROFUNDA</b> (midazolam/propofol + fentanilo) - paciente paralizado debe estar inconsciente.<br/>
      2. <b>Dosis bolo:</b> 0.6-1 mg/kg IV.<br/>
      3. <b>Infusión continua:</b> 0.3-0.6 mg/kg/h IV.<br/>
      4. <b>Titular con TOF</b> (objetivo 1-2/4 twitches).<br/>
      5. <b>"Vacaciones de relajante" DIARIAS</b> - suspender 30-60 min para evaluación neurológica.<br/>
      6. Duración: máximo 48 horas (recomendado) - prolongado ↑ riesgo miopatía/neuropatía.<br/><br/>
      <b>RIESGOS DE USO PROLONGADO:</b><br/>
      • <b>Polineuropatía/miopatía del enfermo crítico</b> (CINP/CIM).<br/>
      • Atrofia muscular.<br/>
      • Trombosis venosa profunda (inmovilización).<br/>
      • Úlceras por presión.<br/>
      • Atelectasias.<br/>
      • Sd compartimental.<br/>
      <b>VIGILANCIA:</b><br/>
      • TOF c/4-8h.<br/>
      • Capnografía continua.<br/>
      • PA, FC, SpO₂.<br/>
      • Nivel de sedación (BIS/RASS).<br/>
      • Cuidados de inmovilización (cambios postura, prevención UPP).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>SEDACIÓN PROFUNDA OBLIGATORIA</b> antes de rocuronio - paciente no debe estar consciente.',
      'Verificar dosis exacta por peso (0.6-1.2 mg/kg).',
      'Etiquetar jeringa: Rocuronio [mg], dosis (mg/kg), hora.',
      'Personal entrenado en vía aérea y ventilación mecánica.',
      'Equipo de intubación COMPLETO disponible.',
      '<b>SUGAMMADEX preparado y disponible</b> (antídoto).',
      'Capnografía OBLIGATORIA durante administración.',
      'Monitor TOF si disponible (UCI con infusión continua).',
      'Acceso IV de buen calibre.',
      'Bolo IV directo (sin diluir habitualmente).',
      'En infusión continua: bomba programada en mg/kg/h.',
      '<b>VACACIONES DIARIAS de relajante</b> en UCI - evaluación neurológica.',
      'Cuidados de inmovilización: cambios postura c/2h, prevención UPP, profilaxis TVP.',
      'Vigilar reacción anafiláctica primeros 5-15 min.',
      'Documentar: dosis, hora, sedación concomitante, reversión, eventos.',
      'No retirar de cabecera de paciente paralizado bajo ningún concepto.',
    ],

    efectosAdversos: [
      '🔴 Parálisis respiratoria (efecto esperado - VM obligatoria)',
      '🔴 Conciencia con parálisis si no hay hipnótico (experiencia traumática)',
      '🔴 Anafilaxia (más frecuente con rocuronio que otros relajantes)',
      '🔴 Reversión inadecuada → debilidad respiratoria post-extubación',
      '🟠 Miopatía/neuropatía del enfermo crítico (uso prolongado)',
      '🟠 Bradicardia (rara)',
      '🟠 Dolor en sitio IV (raro)',
      '🟡 Hipotensión transitoria',
      '🟡 Eritema cutáneo',
      '🟡 Recurarización (sugammadex dosis insuficiente)',
      '🟡 Prolongación bloqueo en hipotermia, acidosis, hipopotasemia',
      '🟡 Interacciones con antibióticos (aminoglucósidos potencian bloqueo)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a rocuronio u otros bromuros.',
      'Antecedente de anafilaxia a relajantes neuromusculares.',
      'Falta de manejo de vía aérea / ventilación mecánica disponible.',
      '<b>SIN sedación/hipnótico concomitante</b> - CONTRAINDICACIÓN ABSOLUTA.',
      'Miastenia gravis (relativa - usar dosis reducidas).',
      'Sd miasténico (Eaton-Lambert) - hipersensible.',
      'Embarazo (categoría B/C - usar si necesario).',
    ],

    fotosensibilidad: 'No relevante. Conservar vial en embalaje exterior pero sin requerimientos especiales de fotoprotección.',

    estabilidad: {
      'Vial sin abrir':            '<b>REFRIGERAR (2-8°C)</b> hasta vencimiento - TA hasta 12 semanas',
      'Diluido en SF/SG 5%':       '24 horas a TA · 48 horas refrigerado',
      'Aspecto':                   'Transparente, incolora a ligeramente amarillenta - desechar si turbidez',
      'Temperatura':               'NO congelar · refrigerado 2-8°C preferido',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato. Desechar sobrante.',
      dosisRestante:    'No conservar. Desechar inmediatamente.',
      infusionPreparada:'24 h a temperatura ambiente en SF 0.9% o SG 5%.',
      notas:            'Viales sin abrir: conservar en refrigerador (2–8 °C). A temperatura ambiente: estable hasta 12 semanas. Incompatible con barbitúricos (tiopental) en la misma línea.',
    },

    presentaciones: [
      'Esmeron® 10 mg/mL vial 5 mL (50 mg) - MSD',
      'Esmeron® 10 mg/mL vial 10 mL (100 mg)',
      'Rocuronio Kabi 10 mg/mL (genérico)',
      'Rocuronio Hospira 10 mg/mL (genérico)',
      'Múltiples genéricos disponibles',
      'Antídoto: Bridion® (sugammadex) 100 mg/mL vial 2 mL o 5 mL',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Intubación estándar adulto',           dosis: '<b>0.6 mg/kg IV bolo</b>',                  via: 'IV' },
      { indicacion: 'Intubación de secuencia rápida (RSI)', dosis: '<b>1-1.2 mg/kg IV bolo</b>',                via: 'IV' },
      { indicacion: 'Mantenimiento durante cirugía',        dosis: '0.15 mg/kg IV PRN c/20-40 min',             via: 'IV' },
      { indicacion: 'Infusión continua UCI',                dosis: '<b>0.3-0.6 mg/kg/h IV</b>',                 via: 'IV' },
      { indicacion: 'Pediátrico > 1 año',                    dosis: '0.6 mg/kg IV (similar adulto)',             via: 'IV' },
      { indicacion: 'Sugammadex reversión inmediata',        dosis: '<b>16 mg/kg IV bolo</b>',                   via: 'IV' },
      { indicacion: 'Sugammadex reversión profunda',         dosis: '4 mg/kg IV',                                 via: 'IV' },
      { indicacion: 'Sugammadex reversión rutinaria',        dosis: '2 mg/kg IV',                                 via: 'IV' },
    ],

    embarazo: 'Categoría B/C (FDA según fuente). Atraviesa placenta mínimamente. Uso seguro en cesárea con dosis estándar. Compatible con lactancia (eliminación rápida del medicamento).',

    pediatria: 'Aprobado en > 1 año. Dosis: 0.6 mg/kg IV (similar adulto). Inicio más rápido en niños. Duración similar. Cuidado con neonatos (datos limitados).',

    adultoMayor: 'DURACIÓN PROLONGADA en > 65 años (vida media ↑ 30-50%). Considerar dosis reducida en mantenimiento. Vigilancia TOF intensiva. Sugammadex efectivo igualmente.',

    insufRenal: 'Sin ajuste significativo - eliminación principalmente hepática (rocuronio). <b>SUGAMMADEX: precaución en CrCl < 30 (excreción renal)</b>. En diálisis: rocuronio sin acumulación significativa.',

    insufHepatica: 'En cirrosis severa: <b>DURACIÓN PROLONGADA significativamente</b> (50-100% más larga). REDUCIR dosis de mantenimiento. Sugammadex puede revertir igualmente.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Esmeron® 10 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Bridion® (Sugammadex). AEMPS.',
      'FDA DailyMed. Rocuronium Bromide Injection. U.S. National Library of Medicine.',
      'Sparr HJ, et al. Sugammadex - A New Era in Neuromuscular Blockade Reversal. Anaesthesia. 2009.',
      'ACURASYS Trial. Neuromuscular Blockers in ARDS. NEJM. 2010.',
      'ROSE Trial. Early Neuromuscular Blockade in ARDS. NEJM. 2019.',
      'Naguib M, et al. Anesthesiologist Society Guidelines on NMB Monitoring. Anesth Analg. 2017.',
      'Stollings JL, et al. Sedation and Analgesia in ICU. Crit Care Med. 2017.',
    ],
  },

});
