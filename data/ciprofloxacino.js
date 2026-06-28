/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/ciprofloxacino.js
   Fuentes: CIMA AEMPS (Ciprofloxacino Normon, Altan,
   Anartis), FDA Black Box quinolonas 2016, IDSA Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'ciprofloxacino',
  nombre:         'Ciprofloxacino',
  nombreGenerico: 'Ciprofloxacin Hydrochloride',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'fluoroquinolona', 'ITU', 'neumonía', 'gastroenteritis', 'pielonefritis'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Fluoroquinolona de 2ª generación — bactericida por inhibición de ADN-girasa y topoisomerasa IV.',
      '<b>FOTOSENSIBLE CONFIRMADO</b> (CIMA AEMPS) — proteger bolsa de luz, retirar sobreenvoltura solo antes de administrar.',
      'FDA BLACK BOX 2016: riesgo de TENDINITIS y RUPTURA TENDINOSA (Aquiles), NEUROPATÍA PERIFÉRICA, EFECTOS SNC (convulsiones, psicosis).',
      'Administración IV en 60 minutos (200 mg) o 90 minutos (400 mg) — infusión rápida causa flebitis severa.',
      'Múltiples interacciones graves: tizanidina (CONTRAINDICADA), teofilina (toxicidad), warfarina (↑↑ INR), antiácidos (↓ absorción VO).',
    ],

    resumenRapido: 'Fluoroquinolona de 2ª generación, antibiótico bactericida de amplio espectro. Activa contra gramnegativos (incluyendo Pseudomonas aeruginosa), bacterias atípicas (Legionella, Mycoplasma, Chlamydia), y grampositivos parcialmente. NO efectivo contra anaerobios. Indicado en: ITU complicada, pielonefritis, prostatitis bacteriana, neumonía nosocomial, gastroenteritis bacterianas, ántrax. Restricción de uso por FDA/AEMPS en infecciones simples por efectos adversos graves.',

    objetivoTerapeutico: 'Erradicar infección bacteriana susceptible · Cobertura empírica de gramnegativos resistentes · Tratamiento de Pseudomonas · Alternativa en alergia a betalactámicos',

    preparacion: {
      'Presentación':             '<b>Ciprofloxacino 200 mg/100 mL bolsa premezclada</b> (2 mg/mL)',
      'Presentación alt.':        'Ciprofloxacino 400 mg/200 mL bolsa premezclada',
      'Diluyente':                '<b>LISTO PARA USAR</b> — bolsa premezclada NO requiere dilución',
      'Si requiere dilución adicional':'SF 0.9% · SG 5% · Ringer Lactato (compatibles)',
      'Vía':                      'IV exclusiva en hospital · VO disponible (transición temprana)',
      '⏱️ TIEMPO INFUSIÓN':       '<b>200 mg: 60 minutos · 400 mg: 90 minutos</b>',
      '⏱️ NO bolo IV':             '<b>NUNCA infundir en menos de 30 minutos</b> — flebitis severa',
      'Bomba':                    'Recomendada para controlar velocidad correcta',
      'Acceso':                   'IV periférico de buen calibre — vena gruesa para reducir flebitis',
      '🌑 FOTOPROTECCIÓN':        '<b>OBLIGATORIA</b> — mantener bolsa en sobreenvoltura hasta administración inmediata (CIMA AEMPS)',
      '🧊 ESTABILIDAD':           '<b>24 horas tras retirar sobreenvoltura</b> (CIMA AEMPS - razones microbiológicas y estabilidad)',
      '🧊 Bolsa sin abrir':       'Temperatura ambiente, en sobreenvoltura, hasta vencimiento',
      'Aspecto':                  'Solución transparente, incolora a ligeramente amarillenta — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>Verificar alergias a quinolonas y betalactámicos.</b>',
        'Revisar antecedentes: convulsiones, epilepsia, TCE — RIESGO DE CONVULSIONES.',
        'Confirmar función renal — ajuste obligatorio si CrCl < 60 mL/min.',
        'Verificar medicación concomitante: tizanidina (CONTRAINDICADA), teofilina, warfarina, antiácidos.',
        'ECG basal si paciente con factores de riesgo de QT largo (electrolitos, antiarrítmicos, antipsicóticos).',
        'En ancianos: evaluar riesgo de tendinopatía (uso concomitante de corticoides).',
        'En cultivos: tomar muestras ANTES de iniciar antibiótico si paciente estable.',
      ],
      durante: [
        'Mantener velocidad correcta: 60 min para 200 mg, 90 min para 400 mg.',
        'Vigilar sitio IV — FLEBITIS muy frecuente con ciprofloxacino (cambiar sitio c/48-72h).',
        'Observar reacción alérgica primeros 15-30 min: urticaria, broncoespasmo, anafilaxia.',
        'Vigilar SNC: confusión, agitación, alucinaciones, convulsiones — SUSPENDER si aparecen.',
        'Si dolor en sitio IV: reducir velocidad, considerar vía central.',
      ],
      despues: [
        'Evaluar respuesta clínica a 48-72h: fiebre, leucocitos, PCR.',
        'Revisar resultados de cultivos para de-escalada (a antibiótico de menor espectro si posible).',
        'Vigilar TENDINITIS/RUPTURA TENDINOSA (especialmente Aquiles) — dolor, inflamación, tumefacción.',
        'Si dolor tendinoso: SUSPENDER ciprofloxacino, reposo, evaluación traumatológica.',
        'Vigilar diarrea — si > 3 deposiciones/día, descartar C. difficile.',
        'Vigilar NEUROPATÍA PERIFÉRICA: parestesias, hipoestesia, dolor neuropático.',
        'Vigilar EFECTOS PSIQUIÁTRICOS: depresión, ideas suicidas, psicosis.',
        'En uso prolongado: control de hemograma, función renal y hepática.',
        '<b>Educar al paciente: EVITAR EXPOSICIÓN SOLAR</b> durante tratamiento (fotosensibilidad cutánea).',
      ],
      suspender: [
        'Reacción alérgica / anafilaxia.',
        'Convulsiones nuevas o exacerbación de epilepsia.',
        'Dolor o tumefacción tendinosa (especialmente Aquiles) — riesgo ruptura.',
        'Neuropatía periférica nueva o empeoramiento.',
        'Efectos psiquiátricos graves (psicosis, ideas suicidas).',
        'Síndrome Stevens-Johnson o NET.',
        'Prolongación severa del QT.',
        'Diarrea grave con sospecha de C. difficile.',
        'Hipoglucemia severa (especialmente en diabéticos).',
        'Prescripción médica.',
      ],
    },

    incompatibilidades: [
      'Soluciones alcalinas (bicarbonato) — incompatibilidad.',
      'Heparina — incompatibilidad documentada.',
      'Anfotericina B — incompatibilidad.',
      'NO mezclar con otros antibióticos en misma línea sin verificar.',
      'Antiácidos VO con calcio/magnesio/aluminio — ↓↓ absorción ciprofloxacino VO (separar 2-6h).',
      'Productos lácteos VO — ↓ absorción.',
      'Lavar línea con SF antes y después de otros fármacos.',
    ],

    alertasSeguridad: [
      '🔴 <b>FDA BLACK BOX 2016</b>: tendinitis/ruptura tendinosa (Aquiles), neuropatía periférica, efectos SNC.',
      '🔴 RESTRICCIÓN DE USO: NO en infecciones simples (sinusitis aguda, bronquitis no complicada, cistitis no complicada) si hay otras opciones.',
      '🔴 CONTRAINDICACIÓN con tizanidina (relajante muscular) — hipotensión severa.',
      '🟠 <b>FOTOSENSIBLE</b> — proteger bolsa de luz, educar al paciente sobre evitar sol.',
      '🟠 Convulsiones — vigilar especialmente en epilépticos, IRC, dosis altas.',
      '🟠 Prolongación QT — riesgo torsades con electrolitos alterados.',
      '🟠 Hipoglucemia severa en diabéticos (interacción con sulfonilureas).',
      '🟠 Disección aórtica/aneurisma: alerta FDA 2018 — vigilar dolor torácico/abdominal nuevo.',
      '🟡 Diarrea por C. difficile más frecuente que con otros antibióticos.',
      '🟡 Efectos psiquiátricos (depresión, psicosis, ideas suicidas) — descritos incluso con primera dosis.',
    ],
  },

  modulos: {

    interacciones: `
      <b>Interacciones críticas de Ciprofloxacino:</b><br/>
      <b>CONTRAINDICADAS:</b><br/>
      • <b>Tizanidina (Sirdalud®)</b>: ciprofloxacino ↑↑↑ niveles → hipotensión severa, sedación profunda.<br/><br/>
      <b>GRAVES - VIGILAR:</b><br/>
      • <b>Teofilina</b>: ciprofloxacino ↑↑ niveles → toxicidad (convulsiones, arritmias). Vigilar niveles.<br/>
      • <b>Warfarina</b>: ↑↑ INR (3-4×) — control diario, ajuste dosis.<br/>
      • <b>Cafeína</b>: ↑ niveles, ↑ efectos estimulantes.<br/>
      • <b>Metotrexato</b>: ↑ toxicidad metotrexato.<br/>
      • <b>AINEs</b>: ↑ riesgo convulsiones.<br/>
      • <b>Corticoides</b>: ↑↑ riesgo tendinopatía/ruptura tendinosa.<br/>
      • <b>Antiarrítmicos QT</b>: amiodarona, sotalol → riesgo torsades.<br/>
      • <b>Sulfonilureas (glibenclamida)</b>: hipoglucemia severa en diabéticos.<br/>
      • <b>Ciclosporina</b>: ↑ nefrotoxicidad.<br/><br/>
      <b>↓ ABSORCIÓN VO (si VO):</b><br/>
      • Antiácidos con Al/Mg/Ca → separar 2-6 horas.<br/>
      • Hierro, zinc, multivitaminas → separar 2-6 horas.<br/>
      • Productos lácteos → separar 2 horas.<br/>
      • Sucralfato → separar 6 horas.
    `,

    tendinopatia: `
      <b>Tendinitis y Ruptura Tendinosa por Quinolonas:</b><br/>
      <b>FACTORES DE RIESGO:</b><br/>
      • <b>Edad > 60 años</b>.<br/>
      • <b>Uso concomitante de corticoides</b>.<br/>
      • Trasplante de órganos (riñón, corazón, pulmón).<br/>
      • Antecedente de trastorno tendinoso.<br/>
      • Insuficiencia renal.<br/><br/>
      <b>LOCALIZACIÓN:</b><br/>
      • <b>Tendón de Aquiles</b> (más frecuente) — riesgo de ruptura por contralateral.<br/>
      • Manguito rotador (hombro).<br/>
      • Bicep braquial.<br/>
      • Tendón patelar.<br/><br/>
      <b>SIGNOS DE ALARMA:</b><br/>
      • Dolor agudo en tendón.<br/>
      • Hinchazón, calor local.<br/>
      • Dolor al movimiento.<br/>
      • "Chasquido" o dolor súbito al esfuerzo (ruptura).<br/><br/>
      <b>MANEJO:</b><br/>
      1. SUSPENDER ciprofloxacino INMEDIATAMENTE.<br/>
      2. Reposo de la extremidad — NO cargar peso.<br/>
      3. Hielo local.<br/>
      4. Consultar traumatología/ortopedia.<br/>
      5. Ecografía o RMN si sospecha ruptura.<br/>
      6. Documentar reacción adversa, evitar quinolonas futuras.<br/>
      <b>Puede aparecer desde primera dosis hasta 6 MESES post-tratamiento.</b>
    `,

    fotosensibilidad: `
      <b>Fotosensibilidad por Ciprofloxacino - CIMA AEMPS:</b><br/>
      <b>VERIFICADO en ficha técnica:</b> "Ciprofloxacino es sensible a la luz, sólo se extraerá la sobreenvoltura de la bolsa inmediatamente antes de su administración".<br/><br/>
      <b>DOBLE NIVEL DE FOTOSENSIBILIDAD:</b><br/>
      <b>1. Medicamento:</b><br/>
      • Mantener bolsa en sobreenvoltura hasta inmediatamente antes de uso.<br/>
      • NO administrar si bolsa expuesta a luz solar directa por períodos largos.<br/>
      • Estabilidad post-apertura: 24 horas.<br/><br/>
      <b>2. Paciente:</b><br/>
      • <b>EVITAR EXPOSICIÓN SOLAR durante tratamiento y 3 días post-tratamiento</b>.<br/>
      • NO usar camas solares, lámparas UV.<br/>
      • Protector solar SPF 50+ obligatorio si exposición inevitable.<br/>
      • Ropa protectora (manga larga, sombrero).<br/>
      • Si aparece reacción cutánea: SUSPENDER tratamiento.<br/><br/>
      <b>REACCIONES:</b><br/>
      • Eritema "tipo quemadura solar" exagerada.<br/>
      • Vesículas, ampollas.<br/>
      • Hiperpigmentación residual.<br/>
      • En casos severos: SJS-like.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar alergias a quinolonas y antecedentes de convulsiones.',
      '<b>Mantener bolsa en SOBREENVOLTURA hasta administración inmediata</b> — fotosensible.',
      'Etiquetar con: Ciprofloxacino [dosis], hora preparación, fecha límite (24h).',
      'Velocidad correcta: 60 min para 200 mg, 90 min para 400 mg — NO acelerar.',
      'Acceso IV de buen calibre — vigilar flebitis (muy común).',
      'Cambiar sitio IV cada 48-72h.',
      'Educar al paciente: EVITAR SOL durante tratamiento + 3 días post.',
      'Vigilar tendones (especialmente Aquiles) — comunicar dolor o tumefacción.',
      'Educar al paciente sobre signos de neuropatía: parestesias, hipoestesia, dolor.',
      'Vigilar efectos SNC: confusión, agitación, ideas suicidas.',
      'En diabéticos: monitorizar glucemia (hipoglucemia severa posible).',
      'Si VO concomitante: separar de antiácidos, lácteos, hierro (2-6h).',
      'Documentar: dosis, hora, vía, respuesta, efectos adversos.',
    ],

    efectosAdversos: [
      '🔴 Convulsiones (especialmente IRC, dosis altas)',
      '🔴 Ruptura tendinosa (Aquiles)',
      '🔴 Síndrome Stevens-Johnson / NET (raro)',
      '🔴 Hipoglucemia severa (diabéticos)',
      '🔴 Aneurisma/disección aórtica (alerta FDA 2018)',
      '🔴 Prolongación QT / torsades',
      '🟠 Tendinitis',
      '🟠 Neuropatía periférica (puede ser irreversible)',
      '🟠 Efectos psiquiátricos: depresión, psicosis, ideas suicidas',
      '🟠 Confusión, alucinaciones',
      '🟠 Colitis pseudomembranosa por C. difficile',
      '🟠 Reacción alérgica / anafilaxia',
      '🟡 Fotosensibilidad cutánea',
      '🟡 Náuseas, vómitos, diarrea',
      '🟡 Cefalea, mareos',
      '🟡 Flebitis en sitio IV (muy frecuente)',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Trombocitopenia, eosinofilia',
      '🟡 Sabor metálico',
    ],

    contraindicaciones: [
      'Hipersensibilidad a quinolonas/fluoroquinolonas.',
      '<b>Uso concomitante con TIZANIDINA</b> (CONTRAINDICACIÓN ABSOLUTA).',
      'Antecedente de tendinopatía por quinolonas.',
      'Niños < 18 años (relativa - solo en infecciones graves sin alternativa).',
      'Embarazo (categoría C) y lactancia.',
      'Epilepsia activa no controlada.',
      'Miastenia gravis (empeora).',
      'Síndrome QT largo congénito.',
      'Trastornos cardiovasculares con aneurisma aórtico.',
    ],

    fotosensibilidad: '<b>SÍ — FOTOSENSIBLE confirmado por CIMA AEMPS</b>. Doble nivel: (1) Medicamento: bolsa en sobreenvoltura hasta administración, retirar SOLO inmediatamente antes de usar. (2) Paciente: evitar exposición solar durante tratamiento y 3 días post. Reacciones cutáneas tipo "quemadura solar exagerada", vesículas, ampollas. Educar al paciente sobre protector solar SPF 50+, ropa protectora.',

    estabilidad: {
      'Bolsa sin abrir':            'Temperatura ambiente, en sobreenvoltura, hasta vencimiento',
      'Sobreenvoltura abierta':     '<b>24 horas tras retirar sobreenvoltura</b> (CIMA AEMPS)',
      'Aspecto':                    'Transparente, incolora a ligeramente amarillenta — desechar si turbidez',
      'Temperatura':                'NO congelar · NO refrigerar (precipitación) · 15-25°C',
    },

    presentaciones: [
      'Ciprofloxacino 200 mg/100 mL bolsa premezclada IV',
      'Ciprofloxacino 400 mg/200 mL bolsa premezclada IV',
      'Ciprofloxacino 250, 500, 750 mg comprimidos VO',
      'Ciprofloxacino 250 mg/5 mL suspensión oral',
      'Ciprofloxacino colirio oftálmico 0.3%',
      'Ciprofloxacino gotas óticas 0.2%',
      'Marcas: Baycip®, Ciproxina®, Ciprofloxacino Normon®, Altan®',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'ITU complicada / Pielonefritis',     dosis: '400 mg IV c/12h × 7-14 días',              via: 'IV' },
      { indicacion: 'ITU no complicada (último recurso)',  dosis: '250 mg VO c/12h × 3 días',                via: 'VO' },
      { indicacion: 'Neumonía nosocomial',                 dosis: '400 mg IV c/8h × 7-14 días',              via: 'IV' },
      { indicacion: 'Sepsis (gramnegativos)',              dosis: '400 mg IV c/8h',                          via: 'IV' },
      { indicacion: 'Prostatitis bacteriana aguda',        dosis: '400 mg IV c/12h × 14-28 días',            via: 'IV' },
      { indicacion: 'Gastroenteritis bacteriana grave',    dosis: '400 mg IV c/12h × 5-7 días',              via: 'IV' },
      { indicacion: 'Pseudomonas (fibrosis quística)',     dosis: '400 mg IV c/8h × 14-21 días',             via: 'IV' },
      { indicacion: 'Ántrax (exposición)',                 dosis: '400 mg IV c/12h × 60 días',               via: 'IV' },
      { indicacion: 'Dosis máxima diaria',                 dosis: '1200 mg/día IV (400 mg c/8h)',            via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Atraviesa placenta. <b>Contraindicado durante embarazo</b> excepto si no hay alternativas (ántrax, infecciones graves). Asociado a artropatía en estudios animales. Compatible con lactancia con precaución (mínima excreción).',

    pediatria: '<b>Uso restringido en < 18 años</b> por artropatía en animales jóvenes. Indicaciones aprobadas: infecciones por P. aeruginosa en fibrosis quística, ántrax post-exposición, ITU complicada (sin alternativas). Dosis: 10-15 mg/kg c/12h (máximo 400 mg/dosis).',

    adultoMayor: 'Mayor riesgo de tendinopatía/ruptura tendinosa, especialmente con corticoides. Mayor riesgo de prolongación QT, hipoglucemia, efectos psiquiátricos. AJUSTE por función renal. Considerar alternativas si posible.',

    insufRenal: '<b>AJUSTE OBLIGATORIO:</b> CrCl > 60: dosis estándar · CrCl 30-60: 250-500 mg c/12h VO o 200-400 mg c/12h IV · CrCl < 30: 250-500 mg c/24h VO o 200-400 mg c/24h IV · Diálisis: dosis tras sesión.',

    insufHepatica: 'Sin ajuste de dosis significativo. En cirrosis severa: vigilancia clínica de efectos prolongados.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Ciprofloxacino Altan 2 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Ciprofloxacino Normon 2 mg/mL. AEMPS.',
      'CIMA AEMPS. Ficha Técnica Ciprofloxacino Anartis 400 mg/200 mL. AEMPS.',
      'FDA Drug Safety Communication. Fluoroquinolone Antibacterial Drugs - Tendon Rupture and Other Serious Side Effects. 2016.',
      'FDA Drug Safety Communication. Aortic Aneurysm and Dissection with Fluoroquinolones. 2018.',
      'AEMPS. Nota informativa: Restricción de uso de fluoroquinolonas. 2019.',
      'IDSA Guidelines. Urinary Tract Infections. Clin Infect Dis. 2010.',
      'Pediamécum AEP. Ciprofloxacino. Asociación Española de Pediatría.',
    ],
  },

});
