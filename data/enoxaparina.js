/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/enoxaparina.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'enoxaparina',
  nombre:         'Enoxaparina',
  nombreGenerico: 'Enoxaparin Sodium (Heparina BPM)',
  categoria:      'anticoagulantes',
  tags:           ['anticoagulante', 'HBPM', 'profilaxis tromboembólica', 'TVP', 'EP', 'SCA'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Anticoagulante de bajo peso molecular. Riesgo de sangrado grave. Requiere ajuste por peso y función renal. Antídoto parcial: Sulfato de Protamina (neutralización 60-65% efectividad).',

  nivel1: {

    puntosClave: [
      'Heparina de bajo peso molecular (HBPM) — inhibe principalmente factor Xa, con menor efecto antitrombina (anti-IIa).',
      'Administración SUBCUTÁNEA OBLIGATORIA — NUNCA IM (hematomas) ni IV directa (excepto en SCA).',
      'Jeringa precargada lista para usar — NO purgar la burbuja de aire (queda atrapada al inyectar, evita extravasación).',
      'Sitio inyección: pared abdominal anterolateral, rotando lados (NO en cicatrices, hematomas).',
      'NO requiere monitorización TTPA rutinaria — opcional anti-Xa en casos especiales (obesidad mórbida, IRC, embarazo).',
    ],

    resumenRapido: 'Heparina de bajo peso molecular (HBPM) obtenida por despolimerización química de heparina porcina. Inhibe predominantemente factor Xa (ratio anti-Xa/anti-IIa 3.8:1). Ventajas vs heparina no fraccionada: vida media más larga (4-6h), dosis fija sin TTPA, menor riesgo TIH, menor sangrado. Indicada en profilaxis TEV post-quirúrgica/médica, tratamiento TVP/EP, SCA, FA en transición.',

    objetivoTerapeutico: 'Prevenir trombosis venosa profunda · Tratar TEV establecido · Anticoagulación en SCA · Profilaxis en pacientes médicos/quirúrgicos · Anti-Xa terapéutico 0.5-1 UI/mL (4h post-dosis)',

    preparacion: {
      'Presentación':             '<b>Jeringa precargada lista para usar</b> — NO requiere reconstitución',
      'Dosis disponibles':        '20 mg/0.2 mL · 40 mg/0.4 mL · 60 mg/0.6 mL · 80 mg/0.8 mL · 100 mg/mL',
      'Dosis altas':              '120 mg/0.8 mL · 150 mg/mL (alta concentración)',
      'Vía':                      '<b>SUBCUTÁNEA EXCLUSIVA</b> (excepto SCA donde puede ser IV en bolo)',
      '⏱️ Administración SC':     '<b>Inyección lenta en 10-30 segundos</b>',
      'Sitio inyección':          'Pared abdominal anterolateral (alternar derecha/izquierda)',
      'Técnica':                  'Pellizcar piel, insertar aguja 90°, NO purgar burbuja, inyectar lento, retirar sin frotar',
      '⏱️ DOSIS PROFILAXIS':      '<b>40 mg SC c/24h</b> (riesgo moderado) o 60 mg SC c/12h (alto riesgo, obesos)',
      '⏱️ DOSIS TERAPÉUTICA':     '<b>1 mg/kg SC c/12h</b> (TVP/EP) o 1.5 mg/kg SC c/24h (alternativo)',
      '⏱️ SCA':                   '30 mg IV bolo + 1 mg/kg SC c/12h',
      'Bomba':                    'No requerida (administración SC manual)',
      '🧊 ESTABILIDAD':           '<b>Temperatura ambiente (< 25°C) hasta vencimiento · NO congelar</b>',
      'Aspecto':                  'Solución transparente, incolora a ligeramente amarillenta',
    },

    vigilancia: {
      antes: [
        'Verificar contraindicaciones: sangrado activo, trombocitopenia severa (< 50,000), cirugía cerebral reciente.',
        'Revisar función renal — ajuste obligatorio si CrCl < 30 mL/min.',
        'Comprobar peso corporal — dosis se ajusta por kg.',
        'Verificar hemoglobina, plaquetas basales.',
        'En obesidad mórbida (IMC > 40) o embarazo: considerar anti-Xa.',
        'Confirmar sitio de inyección sin lesiones, cicatrices o hematomas previos.',
        'Doble verificación: dosis (mg), jeringa correcta, vía SC.',
      ],
      durante: [
        'Pellizcar piel del abdomen anterolateral (distancia 5 cm del ombligo).',
        'Insertar aguja a 90° en pliegue cutáneo.',
        'NO PURGAR burbuja de aire (queda en el tejido, sella canal de inyección).',
        'Inyectar LENTAMENTE en 10-30 segundos.',
        'Mantener pliegue cutáneo durante toda la inyección.',
        'Retirar aguja sin frotar el sitio (provoca hematoma).',
        'Si sangrado: presión LEVE 1-2 min (no frotar).',
      ],
      despues: [
        'Vigilar sangrado: equimosis, petequias, hematuria, melena, sangrado encías.',
        'Inspeccionar sitio inyección — hematoma local es común (no preocupar a menos que extenso).',
        'En tratamiento prolongado (> 5-7 días): control de plaquetas (descartar TIH).',
        'Anti-Xa 4h post-dosis si: obesidad mórbida, IRC, embarazo, sangrado, falla de tratamiento.',
        'Documentar: sitio inyección, dosis, hora, signos sangrado, hematomas.',
      ],
      suspender: [
        'Sangrado activo grave (gastrointestinal, intracraneal, hematuria macroscópica).',
        'Trombocitopenia severa (< 50,000) o ↓ > 50% (sospecha TIH).',
        'Cirugía mayor inminente — suspender 24h antes (terapéutica) o 12h (profilaxis).',
        'Anestesia neuroaxial — suspender 12-24h antes (riesgo hematoma espinal).',
        'Reacción alérgica.',
        'Prescripción médica.',
      ],
    },

    incompatibilidades: [
      'NO mezclar con otros medicamentos (administración SC directa).',
      'Si bolo IV en SCA: lavar línea con SF antes y después.',
      'Otros anticoagulantes (warfarina, NOAC, heparina no fraccionada) — solapamiento solo bajo prescripción.',
      'AINE — riesgo sangrado ↑.',
      'Antiplaquetarios (aspirina, clopidogrel) — riesgo sangrado ↑ (uso conjunto solo si indicado).',
    ],

    alertasSeguridad: [
      '🔴 NUNCA administrar IM — riesgo de hematoma muscular grande.',
      '🔴 Hematoma espinal con anestesia neuroaxial — RIESGO PARÁLISIS. Suspender 12-24h antes de punción.',
      '🟠 Riesgo de sangrado — vigilancia continua de signos hemorrágicos.',
      '🟠 TIH (Trombocitopenia Inducida por Heparina) — menor riesgo que con heparina no fraccionada pero posible.',
      '🟠 En IRC severa (CrCl < 30): acumulación → ajuste dosis obligatorio.',
      '🟡 Hematoma local en sitio inyección — común pero usualmente leve.',
      '🟡 Antídoto incompleto (Protamina neutraliza solo 60-65%).',
    ],
  },

  modulos: {

    renal: `
      <b>Enoxaparina en Insuficiencia Renal:</b><br/>
      <b>CrCl > 30 mL/min:</b> Dosis estándar (1 mg/kg c/12h terapéutico).<br/>
      <b>CrCl < 30 mL/min:</b><br/>
      • Terapéutico: <b>1 mg/kg SC c/24h</b> (en lugar de c/12h).<br/>
      • Profilaxis: 30 mg SC c/24h (en lugar de 40 mg).<br/>
      <b>CrCl < 15 mL/min o hemodiálisis:</b><br/>
      • PREFERIR heparina no fraccionada (mejor titulable).<br/>
      • Si se usa enoxaparina: anti-Xa obligatorio cada dosis.<br/>
      <b>Monitorización anti-Xa:</b><br/>
      • Objetivo terapéutico: 0.5-1 UI/mL (4h post-dosis).<br/>
      • Objetivo profiláctico: 0.2-0.5 UI/mL.
    `,

    sangrado: `
      <b>Vigilancia de sangrado y reversión:</b><br/>
      <b>Signos de sangrado mayor:</b><br/>
      • Hb ↓ > 2 g/dL sin otra causa.<br/>
      • Sangrado GI: melena, hematemesis.<br/>
      • Hematuria macroscópica.<br/>
      • Hemorragia intracraneal: cefalea, déficit neurológico.<br/>
      • Hematoma retroperitoneal: dolor lumbar, hipotensión.<br/><br/>
      <b>Reversión con Sulfato de Protamina (parcial):</b><br/>
      • <b>Si dentro de 8h post-inyección:</b> 1 mg protamina por cada 1 mg enoxaparina.<br/>
      • <b>Si > 8h post-inyección:</b> 0.5 mg protamina por cada 1 mg enoxaparina.<br/>
      • <b>Velocidad:</b> 5 mg/min IV (máximo 50 mg/dosis).<br/>
      • <b>Neutralización solo 60-65% del efecto anti-Xa.</b><br/>
      • Considerar transfusión, plasma fresco congelado, factor VIIa según severidad.
    `,

    procedimientos: `
      <b>Suspensión pre-procedimiento:</b><br/>
      <b>Dosis terapéutica (1 mg/kg c/12h):</b><br/>
      • Suspender <b>24 horas antes</b> del procedimiento.<br/>
      <b>Dosis profiláctica (40 mg c/24h):</b><br/>
      • Suspender <b>12 horas antes</b> del procedimiento.<br/><br/>
      <b>Anestesia neuroaxial (raquídea/epidural):</b><br/>
      • <b>Dosis profiláctica:</b> Esperar 12h tras última dosis.<br/>
      • <b>Dosis terapéutica:</b> Esperar 24h tras última dosis.<br/>
      • Reanudar enoxaparina mínimo 4h tras retiro de catéter epidural.<br/>
      • Riesgo: hematoma espinal con parálisis irreversible.<br/><br/>
      <b>Cirugía mayor:</b><br/>
      • Reanudar tromboprofilaxis 6-12h post-cirugía si hemostasia adecuada.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Almacenar a temperatura ambiente — no refrigerar.',
      'Verificar identidad del paciente y dosis prescrita.',
      'Inspeccionar jeringa precargada — solución debe ser clara.',
      'Seleccionar sitio: pared abdominal anterolateral, 5 cm del ombligo.',
      'Alternar lados (derecha/izquierda) en dosis sucesivas — registrar en gráfica.',
      'NO PURGAR la burbuja de aire — es parte de la técnica (sello de inyección).',
      'Pellizcar piel formando pliegue, insertar aguja 90°, inyectar lento.',
      'NO frotar sitio post-inyección — causa hematoma.',
      'Documentar: dosis, hora, sitio (D/I), signos sangrado, hematomas previos.',
      'Educar al paciente: signos de sangrado, evitar AINE, importancia de adherencia.',
      'En tratamiento ambulatorio: enseñar autoadministración, manejo de jeringa.',
    ],

    efectosAdversos: [
      '🔴 Sangrado grave — gastrointestinal, intracraneal, retroperitoneal',
      '🔴 Hematoma espinal (anestesia neuroaxial) — riesgo parálisis',
      '🟠 Trombocitopenia Inducida por Heparina (TIH) — menos frecuente que con HNF',
      '🟠 Hemorragia menor — equimosis, hematuria microscópica',
      '🟠 Osteoporosis (uso prolongado > 6 meses)',
      '🟡 Hematoma local en sitio inyección (muy común, leve)',
      '🟡 Eritema, dolor en sitio inyección',
      '🟡 Hipercaliemia (rara)',
      '🟡 Reacción alérgica / rash (raro)',
      '🟡 Elevación leve transaminasas',
    ],

    contraindicaciones: [
      'Sangrado activo grave — contraindicación absoluta.',
      'Hipersensibilidad a enoxaparina, heparina o productos porcinos.',
      'TIH previa.',
      'Trombocitopenia severa (< 50,000).',
      'Hemorragia intracraneal reciente.',
      'Endocarditis bacteriana aguda.',
      'Úlcera péptica activa.',
      'Aneurisma cerebral.',
    ],

    fotosensibilidad: 'No relevante.',

    estabilidad: {
      'Jeringa precargada':       '<b>Temperatura ambiente (< 25°C) hasta vencimiento</b>',
      'NO refrigerar':             'No es necesario · Refrigerada usable también',
      'NO congelar':               'Congelación causa pérdida de actividad',
      'Aspecto':                   'Solución clara, incolora a ligeramente amarillenta — desechar si turbidez',
      'Tiempo de uso':             'Inmediato tras apertura',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Jeringa precargada monodosis: usar de inmediato. Desechar sobrante.',
      dosisRestante:    'No conservar. Jeringas monodosis de un solo uso — desechar tras cada administración.',
      infusionPreparada:'Administración SC o IV directa. No se utiliza en infusión continua de forma habitual.',
      notas:            'No mezclar con otros fármacos. Si hay presentación multidosis (con benzyl alcohol), conservar refrigerada y usar en 28 días desde apertura.',
    },

    presentaciones: [
      'Enoxaparina 20 mg/0.2 mL jeringa precargada',
      'Enoxaparina 40 mg/0.4 mL jeringa precargada (profilaxis estándar)',
      'Enoxaparina 60 mg/0.6 mL jeringa precargada',
      'Enoxaparina 80 mg/0.8 mL jeringa precargada',
      'Enoxaparina 100 mg/mL jeringa precargada',
      'Enoxaparina 120 mg/0.8 mL · 150 mg/mL (alta concentración)',
      'Clexane® (Sanofi - marca original), Inhixa®, Crusia® (genéricos)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Profilaxis TEV (riesgo moderado)',  dosis: '40 mg SC c/24h',                      via: 'SC' },
      { indicacion: 'Profilaxis TEV (alto riesgo)',      dosis: '40 mg SC c/12h o 60 mg c/12h',        via: 'SC' },
      { indicacion: 'TVP/EP (terapéutico)',              dosis: '1 mg/kg SC c/12h',                    via: 'SC' },
      { indicacion: 'TVP/EP (alternativo)',              dosis: '1.5 mg/kg SC c/24h',                  via: 'SC' },
      { indicacion: 'SCA con/sin elevación ST',          dosis: '30 mg IV bolo + 1 mg/kg SC c/12h',    via: 'IV+SC' },
      { indicacion: 'FA en transición',                  dosis: '1 mg/kg SC c/12h',                    via: 'SC' },
      { indicacion: 'Embarazo (terapéutico)',            dosis: '1 mg/kg SC c/12h con anti-Xa',        via: 'SC' },
    ],

    embarazo: 'Categoría B (FDA) — NO atraviesa placenta. ANTICOAGULANTE DE ELECCIÓN en embarazo. Requiere ajuste por cambios farmacocinéticos — monitorización anti-Xa recomendada. Suspender 24h antes del parto. NO usar warfarina (teratogénica). Compatible con lactancia.',

    pediatria: 'Neonatos: 1.5 mg/kg SC c/12h (terapéutico), 0.75 mg/kg SC c/12h (profilaxis). Niños > 2 meses: 1 mg/kg SC c/12h. Anti-Xa OBLIGATORIO para monitoreo en pediatría.',

    adultoMayor: 'Mayor riesgo de sangrado y acumulación en IRC. Ajustar por peso y función renal estricto. Vigilancia clínica intensiva. En > 75 años con SCA: NO administrar bolo IV inicial.',

    insufRenal: 'CrCl < 30 mL/min: REDUCIR DOSIS — 1 mg/kg SC c/24h terapéutico, 30 mg SC c/24h profilaxis. CrCl < 15 o diálisis: preferir HNF. Anti-Xa obligatorio si se usa.',

    insufHepatica: 'En cirrosis: mayor riesgo sangrado por coagulopatía concomitante. Vigilancia clínica estricta. Sin ajuste específico de dosis pero precaución.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Enoxaparin Sodium Injection (Lovenox®). U.S. National Library of Medicine.',
      'CIMA AEMPS. Ficha Técnica Clexane®. Agencia Española de Medicamentos.',
      'ACCP Guidelines. Antithrombotic Therapy for VTE Disease. Chest. 2021.',
      'ESC Guidelines. NSTEMI/STEMI Management. European Heart Journal. 2023.',
      'ACOG Practice Bulletin. Thromboembolism in Pregnancy. 2018.',
      'ASRA Guidelines. Anticoagulation and Neuraxial Anesthesia. Reg Anesth Pain Med. 2018.',
      'Micromedex Solutions. Enoxaparin. Accessed 2024.',
    ],
  },

});
