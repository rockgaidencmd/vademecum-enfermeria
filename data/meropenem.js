/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/meropenem.js
   Fuentes: DailyMed/FDA, ASHP, Guías IDSA 2022,
   Micromedex, Lexicomp, Surviving Sepsis 2021, OPS/OMS
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'meropenem',
  nombre:         'Meropenem',
  nombreGenerico: 'Meropenem Trihydrate',
  categoria:      'antibioticos',
  tags:           ['UCI', 'carbapenem', 'antibiótico', 'gram negativo', 'MDRO', 'meningitis', 'infusión extendida'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  /* ═══════════════════════════════════════════
     NIVEL 1 — VISTA RÁPIDA
  ═══════════════════════════════════════════ */
  nivel1: {

    puntosClave: [
      'Carbapenem de amplio espectro — reservar para infecciones graves por gérmenes resistentes o polimicrobianas.',
      'La estabilidad post-reconstitución es limitada: máximo 3 horas a temperatura ambiente una vez diluido en SF.',
      'En infecciones por gérmenes con CIM elevada: considerar infusión extendida (3 horas) para optimizar la farmacodinamia.',
      'Ajuste de dosis obligatorio en insuficiencia renal — la dosis y el intervalo dependen del CrCl.',
      'Vigilar signos de convulsiones — especialmente en pacientes con daño neurológico previo o insuficiencia renal.',
    ],

    resumenRapido: 'Antibiótico carbapenem bactericida de amplio espectro. Cubre gramnegativos (incluidos Pseudomonas aeruginosa y Enterobacteriaceae), grampositivos (excepto MRSA) y anaerobios. Primera línea en infecciones graves por bacilos gramnegativos multirresistentes, meningitis bacteriana, infecciones intraabdominales complejas, neumonía nosocomial grave y bacteriemia en el paciente crítico.',

    objetivoTerapeutico: 'Erradicar infección por gérmenes resistentes de amplio espectro · Optimizar tiempo > CIM (T > CIM) para efecto bactericida máximo · Cobertura empírica en sepsis grave de foco abdominal, urinario o pulmonar',

    preparacion: {
      'Presentación':           '500 mg polvo · 1000 mg (1 g) polvo — vial para inyección',
      'Reconstitución':         '500 mg + 10 mL ASI o SF → 50 mg/mL · 1 g + 20 mL ASI o SF → 50 mg/mL',
      'Dilución IV intermitente':'Diluir en 50–250 mL SF 0.9% (preferido) o SG 5%',
      'Concentración final':    '1–20 mg/mL (habitual: 5–10 mg/mL)',
      'Ejemplo 500 mg':         '500 mg en 100 mL SF → 5 mg/mL',
      'Ejemplo 1 g':            '1 g en 100 mL SF → 10 mg/mL',
      'Vía':                    'IV intermitente (30 min) · IV en infusión extendida (3 horas) · NO IM rutinaria',
      'Velocidad estándar':     '<b>500 mg o 1 g en 30 minutos</b> (infusión intermitente habitual)',
      'Infusión extendida':     '<b>1–2 g en 3 horas</b> — para optimizar T > CIM en gérmenes con CIM alta',
      'Bomba':                  'Bomba de infusión volumétrica — recomendada',
      'Filtro':                 'No requerido',
      '⚠ Estabilidad crítica':  'Una vez diluido en SF: <b>máximo 3 horas a temperatura ambiente</b> — preparar justo antes de usar',
    },

    vigilancia: {
      antes: [
        'Verificar alergias a carbapenems, penicilinas y cefalosporinas (reactividad cruzada < 1%).',
        'Revisar función renal basal: creatinina, BUN, CrCl — ajustar dosis según resultado.',
        'Confirmar cultivos tomados antes de iniciar el antibiótico.',
        'Verificar dosis, intervalo y vía según prescripción médica y función renal.',
        'Comprobar estabilidad: preparar justo antes de administrar — no usar si lleva más de 3h preparado.',
        'Revisar antecedente de convulsiones — aumenta el riesgo con carbapenems.',
      ],
      durante: [
        'Observar signos de reacción alérgica: urticaria, prurito, eritema, broncoespasmo (primeros 30 min).',
        'Vigilar estado neurológico — alertar ante temblor, mioclonías o convulsiones.',
        'Monitorizar sitio de infusión IV — puede causar flebitis en vía periférica.',
        'Registrar hora exacta de inicio y fin de cada dosis para mantener intervalos correctos.',
        'En infusión extendida de 3h: verificar estabilidad de la solución — no superar el tiempo límite.',
      ],
      despues: [
        'Monitorizar función renal cada 48–72 horas durante tratamientos prolongados.',
        'Evaluar respuesta clínica: fiebre, leucocitos, PCR, procalcitonina a las 48–72h.',
        'Revisar resultados de cultivos y sensibilidad para ajuste de antibiótico (de-escalada).',
        'Vigilar aparición de diarrea por C. difficile en tratamientos > 5 días.',
        'Documentar días de tratamiento — los carbapenems deben usarse el tiempo mínimo necesario.',
      ],
      suspender: [
        'Reacción alérgica o anafiláctica confirmada.',
        'Convulsiones atribuibles al meropenem.',
        'Resultado de cultivo que permite de-escalada a antibiótico de menor espectro.',
        'Diarrea grave con sospecha de colitis por C. difficile.',
        'Prescripción médica de cambio o suspensión.',
        'Completado el curso de tratamiento prescrito.',
      ],
    },

    incompatibilidades: [
      'Ácido valproico / valproato — el meropenem reduce los niveles de valproato hasta un 70% en 24h, riesgo de convulsiones.',
      'Soluciones de bicarbonato de sodio — incompatibilidad, degradación del meropenem.',
      'Gluconato de calcio — incompatibilidad en mezcla directa.',
      'Diazepam — incompatibilidad física documentada.',
      'Aciclovir — incompatibilidad en mezcla.',
      'Anfotericina B — incompatibilidad física.',
      'Ondansetrón — incompatibilidad documentada en misma línea.',
      'No mezclar con otros antibióticos en la misma solución — administrar siempre por separado.',
    ],

    alertasSeguridad: [
      'La interacción con ácido valproico es crítica y frecuentemente olvidada — el meropenem reduce niveles de valproato hasta un 70%, riesgo de convulsiones.',
      'La estabilidad de 3 horas post-dilución en SF es el límite más importante — preparar y administrar inmediatamente.',
      'El uso indiscriminado de carbapenems genera resistencias (KPC, NDM) — usar solo cuando está indicado.',
      'En infusión extendida de 3 horas: la solución debe prepararse con SF frío y administrarse inmediatamente.',
      'La reactividad cruzada con penicilinas es < 1% pero verificar siempre antecedente de alergia grave.',
    ],
  },

  /* ═══════════════════════════════════════════
     MÓDULOS DINÁMICOS
  ═══════════════════════════════════════════ */
  modulos: {

    renal: `
      <b>Ajuste de dosis en insuficiencia renal:</b><br/><br/>
      <table style="width:100%;font-size:.76rem;border-collapse:collapse;">
        <tr style="background:rgba(0,212,255,0.08);">
          <td style="padding:6px 8px;color:var(--cyan);font-family:var(--font-mono);font-size:.65rem;">CrCl (mL/min)</td>
          <td style="padding:6px 8px;color:var(--cyan);font-family:var(--font-mono);font-size:.65rem;">DOSIS</td>
          <td style="padding:6px 8px;color:var(--cyan);font-family:var(--font-mono);font-size:.65rem;">INTERVALO</td>
        </tr>
        <tr style="border-bottom:1px solid var(--border);">
          <td style="padding:6px 8px;color:var(--text-secondary);">> 50 mL/min</td>
          <td style="padding:6px 8px;color:var(--text-secondary);">1 g (o según indicación)</td>
          <td style="padding:6px 8px;color:var(--text-secondary);">c/8h</td>
        </tr>
        <tr style="border-bottom:1px solid var(--border);">
          <td style="padding:6px 8px;color:var(--text-secondary);">26–50 mL/min</td>
          <td style="padding:6px 8px;color:var(--text-secondary);">1 g</td>
          <td style="padding:6px 8px;color:var(--text-secondary);">c/12h</td>
        </tr>
        <tr style="border-bottom:1px solid var(--border);">
          <td style="padding:6px 8px;color:var(--text-secondary);">10–25 mL/min</td>
          <td style="padding:6px 8px;color:var(--text-secondary);">500 mg</td>
          <td style="padding:6px 8px;color:var(--text-secondary);">c/12h</td>
        </tr>
        <tr>
          <td style="padding:6px 8px;color:var(--text-secondary);">< 10 mL/min / HD</td>
          <td style="padding:6px 8px;color:var(--text-secondary);">500 mg</td>
          <td style="padding:6px 8px;color:var(--text-secondary);">c/24h</td>
        </tr>
      </table>
      <br/>
      <b>Hemodiálisis:</b> Administrar dosis post-diálisis · El meropenem es dializable (50% eliminado en sesión de 4h).<br/>
      <b>TRRC:</b> 500 mg–1 g c/8–12h según modalidad y flujo — consultar protocolo institucional.
    `,

    respiratorio: `
      <b>Meropenem en neumonía nosocomial grave / VAP:</b><br/>
      • Primera línea en NAV (neumonía asociada al ventilador) por P. aeruginosa o Acinetobacter.<br/>
      • Dosis optimizada: <b>2 g c/8h en infusión extendida de 3 horas</b> para maximizar T > CIM.<br/>
      • Combinar con un aminoglucósido o colistina en infecciones por gérmenes XDR.<br/>
      • Monitorizar SpO₂, mecánica ventilatoria y parámetros del respirador.<br/>
      • Evaluar respuesta clínica a las 48–72h: si no hay mejoría, revisar cultivos y ajustar cobertura.<br/>
      • Duración recomendada: 7–8 días en VAP no complicada (desescalar cuando sea posible).
    `,
  },

  /* ═══════════════════════════════════════════
     NIVEL 2 — VER MÁS
  ═══════════════════════════════════════════ */
  nivel2: {

    cuidadosEnfermeria: [
      'Preparar la solución justo antes de administrar — no preparar con anticipación por la estabilidad limitada (3h en SF a temperatura ambiente).',
      'Etiquetar SIEMPRE con: hora de preparación, hora límite de administración, concentración, dosis.',
      'En infusión extendida de 3 horas: preparar en SF frío (4°C) y administrar de inmediato — mejora la estabilidad a 4–6h.',
      'Registrar la hora exacta de inicio de cada dosis para mantener el intervalo terapéutico correcto.',
      'Si el paciente recibe valproato: alertar al médico antes de iniciar meropenem — interacción crítica.',
      'Verificar resultado de cultivos en las primeras 48–72h para evaluar de-escalada antibiótica.',
      'En tratamientos > 7 días: vigilar diarrea (C. difficile), elevación de transaminasas y trombocitosis.',
      'Rotar sitio de acceso venoso periférico cada 72h para prevenir flebitis.',
      'Documentar días de tratamiento en cada turno — apoyar el programa de stewardship antimicrobiano.',
    ],

    efectosAdversos: [
      '🔴 Convulsiones — especialmente en pacientes con daño neurológico o insuficiencia renal sin ajuste',
      '🟠 Reacción alérgica / anafilaxia (rara, < 1%)',
      '🟠 Colitis pseudomembranosa por C. difficile (tratamientos prolongados)',
      '🟠 Elevación de transaminasas (hepatotoxicidad leve-moderada)',
      '🟠 Reducción de niveles de valproato (interacción crítica)',
      '🟡 Náuseas, vómitos, diarrea',
      '🟡 Cefalea',
      '🟡 Flebitis en sitio de infusión periférica',
      '🟡 Trombocitosis transitoria',
      '🟡 Erupción cutánea (rash)',
      '🟡 Eosinofilia transitoria',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a meropenem o carbapenems.',
      'Hipersensibilidad grave inmediata (anafilaxia) a betalactámicos (precaución — reactividad cruzada < 1%).',
      'No usar como antibiótico de primera línea en infecciones por gérmenes sensibles a antibióticos de menor espectro (principio de stewardship).',
    ],

    fotosensibilidad: 'No se describe fotosensibilidad clínicamente relevante. La solución reconstituida y diluida debe protegerse de la luz solar directa para preservar la estabilidad, pero no requiere cubierta opaca durante la infusión normal en condiciones hospitalarias.',

    estabilidad: {
      'Polvo sin reconstituir':          'Temperatura ambiente (≤ 25°C) hasta fecha de vencimiento',
      'Reconstituido (50 mg/mL en ASI)': '2 horas a temperatura ambiente · 12 horas en refrigeración (4°C)',
      'Diluido en SF 0.9%':              '<b>3 horas a temperatura ambiente · 24 horas en refrigeración</b>',
      'Diluido en SG 5%':                '1 hora a temperatura ambiente · 8 horas en refrigeración',
      'Infusión extendida (SF frío)':    '4–6 horas — preparar en SF refrigerado e iniciar inmediatamente',
      'Temperatura':                     'NO congelar · Mantener ≤ 25°C durante infusión',
      'Aspecto':                         'Solución incolora a levemente amarillenta · Desechar si hay turbidez o partículas',
    },

    presentaciones: [
      'Meropenem 500 mg polvo liofilizado — vial 20 mL',
      'Meropenem 1000 mg (1 g) polvo liofilizado — vial 30 mL',
      'Meropenem 2000 mg (2 g) polvo liofilizado — vial (disponibilidad según país)',
      'Meronem® 500 mg y 1 g (AstraZeneca) — marca original',
      'Disponible en genéricos en la mayoría de países de Latinoamérica',
    ],
  },

  /* ═══════════════════════════════════════════
     NIVEL 3 — INFORMACIÓN AVANZADA
  ═══════════════════════════════════════════ */
  nivel3: {

    dosis: [
      { indicacion: 'Infecciones moderadas-graves',        dosis: '500 mg – 1 g c/8h',    via: 'IV 30 min' },
      { indicacion: 'Infecciones graves / bacteriemia',    dosis: '1 g c/8h',              via: 'IV 30 min' },
      { indicacion: 'Meningitis bacteriana',               dosis: '2 g c/8h',              via: 'IV 30 min' },
      { indicacion: 'Fibrosis quística (P. aeruginosa)',   dosis: '2 g c/8h',              via: 'IV 30 min' },
      { indicacion: 'Infusión extendida (T > CIM alto)',   dosis: '1–2 g c/8h',            via: 'IV 3 horas' },
      { indicacion: 'Dosis máxima habitual',               dosis: '6 g/día (2 g c/8h)',    via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Los estudios en animales no muestran efectos teratogénicos. Datos limitados en humanos, pero se considera relativamente seguro cuando el beneficio supera el riesgo. Cruza la barrera placentaria. En sepsis grave o infecciones por gérmenes resistentes durante el embarazo, puede ser necesario. Monitorizar función renal con mayor frecuencia. Pasa a leche materna en cantidades mínimas — evaluar riesgo/beneficio.',

    pediatria: 'Neonatos (0–7 días): 20 mg/kg c/12h. Neonatos (> 7 días): 20 mg/kg c/8h. Lactantes y niños (> 3 meses): 10–20 mg/kg c/8h (máximo 2 g/dosis). Meningitis pediátrica: 40 mg/kg c/8h (máximo 2 g/dosis). Fibrosis quística: 40 mg/kg c/8h. Ajustar en insuficiencia renal según CrCl pediátrico.',

    adultoMayor: 'Ajuste de dosis basado en función renal (CrCl) — calcular con Cockcroft-Gault. El CrCl puede estar reducido aunque la creatinina sérica sea normal en pacientes mayores con poca masa muscular. Mayor riesgo de convulsiones por reducción del clearance renal. Vigilar estado neurológico. Riesgo aumentado de colitis por C. difficile.',

    insufRenal: 'Ajuste obligatorio — ver módulo de monitorización renal con tabla de dosis por CrCl. El meropenem es eliminado principalmente por el riñón (70% sin cambios en orina). La acumulación aumenta el riesgo de convulsiones. En TRRC: 500 mg – 1 g c/8–12h según modalidad. Consultar nefrólogo o farmacéutico clínico en casos complejos.',

    insufHepatica: 'No se requiere ajuste de dosis en insuficiencia hepática aislada — la eliminación es principalmente renal. Monitorizar transaminasas en insuficiencia hepática grave. El meropenem puede causar elevación transitoria de enzimas hepáticas.',
  },

  /* ═══════════════════════════════════════════
     NIVEL 4 — EVIDENCIA CIENTÍFICA
  ═══════════════════════════════════════════ */
  nivel4: {
    referencias: [
      'DailyMed. Meropenem for Injection. U.S. National Library of Medicine. Consultado 2024. https://dailymed.nlm.nih.gov',
      'Kalil AC, et al. Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia: 2016 Clinical Practice Guidelines by the IDSA and ATS. Clin Infect Dis. 2016;63(5):e61-e111.',
      'Evans L, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Intensive Care Med. 2021;47(11):1181-1247.',
      'Lodise TP, et al. Pharmacodynamic Profiling of Meropenem: Development of a Dosing Strategy. Antimicrob Agents Chemother. 2006;50(12):4363-4366.',
      'Roberts JA, et al. DALI: Defining Antibiotic Levels in Intensive care unit patients. Crit Care. 2014;18(3):R99.',
      'Nau R, et al. Pharmacokinetics and Pharmacodynamics of Antibiotics in CNS Infections. Curr Opin Infect Dis. 2010;23(3):228-233.',
      'ASHP. Drug Interaction: Meropenem and Valproic Acid. American Society of Health-System Pharmacists. 2022.',
      'OPS/OMS. Plan de Acción sobre la Resistencia a los Antimicrobianos. 2015–2019 (actualización 2023).',
    ],
  },

});
