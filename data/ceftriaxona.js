/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/ceftriaxona.js
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'ceftriaxona',
  nombre:         'Ceftriaxona',
  nombreGenerico: 'Ceftriaxone Sodium',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'cefalosporina', 'neumonía', 'meningitis', 'pielonefritis', 'sepsis'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Cefalosporina de 3ª generación — amplio espectro: gramnegativos (E. coli, Klebsiella, H. influenzae), grampositivos (S. pneumoniae), excluye Pseudomonas y MRSA.',
      'INCOMPATIBLE con soluciones que contengan CALCIO (Ringer Lactato, NPT con calcio) — precipitación letal, especialmente en neonatos.',
      'Reconstituir con 10 mL ASI o SF — luego diluir en 50-100 mL SF/SG 5%.',
      'Administración: IV en 30 min, IM con lidocaína (uso menos frecuente).',
      'Una dosis al día por vida media larga (8h) — ideal para hospitalización y manejo ambulatorio.',
    ],

    resumenRapido: 'Antibiótico cefalosporina de 3ª generación de amplio espectro. Bactericida — inhibe síntesis de pared celular (PBP). Excelente penetración SNC (única cefalosporina con eficacia probada en meningitis). Indicada en neumonía adquirida en comunidad, meningitis bacteriana, pielonefritis, sepsis sin sospecha de Pseudomonas, gonorrea, profilaxis quirúrgica. Vida media 8h → 1 dosis/día.',

    objetivoTerapeutico: 'Erradicar infección bacteriana susceptible · Cubrir gramnegativos comunitarios + S. pneumoniae · Tratar meningitis bacteriana · Profilaxis perioperatoria',

    preparacion: {
      'Presentación':             '1 g vial liofilizado · 2 g vial liofilizado',
      'Presentación pediátrica':  '500 mg, 250 mg vial liofilizado',
      'Reconstitución IV':        '<b>1 g + 10 mL ASI o SF → 100 mg/mL</b>',
      'Reconstitución IM':        '1 g + 3.5 mL lidocaína 1% sin epinefrina (uso menos común)',
      'Diluyente final':          '<b>SF 0.9% o SG 5% (NUNCA Ringer Lactato — contiene calcio)</b>',
      'Dilución estándar IV':     '1 g reconstituido + 50-100 mL SF → 10-20 mg/mL',
      'Vía':                      'IV infusión 30 min (preferida) · IM con lidocaína',
      '⏱️ TIEMPO INFUSIÓN':       '<b>IV: 30 minutos (estándar)</b>',
      '⏱️ Bolo IV en emergencia': '2-4 minutos (uso restringido, preferir infusión)',
      'Bomba':                    'Recomendada para infusión controlada',
      '⚠️ INCOMPATIBILIDAD GRAVE': '<b>NUNCA con soluciones que contengan CALCIO</b> — Ringer Lactato, NPT con calcio',
      '🧊 ESTABILIDAD reconstituido':'<b>24 horas a TA (15-25°C) · 10 DÍAS refrigerado (2-8°C)</b>',
      '🧊 Diluido en SF/SG 5%':   '<b>24 horas a TA · 10 días refrigerado</b>',
      'Aspecto':                  'Solución amarillenta clara a ámbar — desechar si turbidez o precipitado',
    },

    vigilancia: {
      antes: [
        'Verificar alergias a betalactámicos (penicilinas, cefalosporinas, carbapenems).',
        'En alergia a penicilina: reactividad cruzada 1-3% con cefalosporinas de 3ª gen.',
        'Confirmar cultivos tomados antes de iniciar antibiótico (si paciente estable).',
        'Revisar función renal y hepática basales.',
        '⚠️ EN NEONATOS: contraindicada con calcio IV concomitante.',
        'Verificar prescripción: dosis, vía, frecuencia, indicación.',
      ],
      durante: [
        'Observar reacción alérgica primeros 15-30 min: urticaria, broncoespasmo, hipotensión.',
        'Vigilar sitio IV — irritación venosa posible (flebitis 1-3%).',
        'Mantener velocidad estándar 30 min — no infundir más rápido sin necesidad.',
        'Si reacción alérgica: DETENER, tratar anafilaxia (adrenalina, antihistamínicos, corticoides).',
      ],
      despues: [
        'Evaluar respuesta clínica a las 48-72h: fiebre, leucocitos, PCR, mejoría síntomas.',
        'Revisar resultados de cultivos y sensibilidad — ajustar o de-escalar antibiótico.',
        'Vigilar diarrea (frecuente con cefalosporinas) — si grave: descartar C. difficile.',
        'En tratamientos > 7 días: control de hemograma (leucopenia, neutropenia).',
        'Vigilar transaminasas si > 14 días de tratamiento.',
        'Documentar: dosis, hora, vía, respuesta clínica, efectos adversos.',
      ],
      suspender: [
        'Reacción alérgica / anafilaxia confirmada.',
        'Resultado de cultivos que permita de-escalada a antibiótico más específico.',
        'Diarrea grave con sospecha de C. difficile.',
        'Citopenia significativa (neutropenia < 1500, plaquetopenia).',
        'Completado el curso prescrito (típicamente 7-14 días).',
      ],
    },

    incompatibilidades: [
      '⚠️ SOLUCIONES CON CALCIO — Ringer Lactato, gluconato de calcio, NPT con calcio. PRECIPITACIÓN LETAL.',
      '⚠️ NPT (Nutrición Parenteral Total) — si contiene calcio, NUNCA mezclar.',
      'Aminoglucósidos (gentamicina, amikacina) — incompatibilidad física en mismo recipiente (administrar separados).',
      'Vancomicina — incompatibilidad documentada.',
      'Anfotericina B — precipitación.',
      'Fluconazol — incompatibilidad.',
      'Lavar línea con SF antes y después de otros medicamentos.',
    ],

    alertasSeguridad: [
      '🔴 INCOMPATIBILIDAD CRÍTICA CON CALCIO — riesgo de muerte neonatal por precipitación pulmonar/renal.',
      '🔴 En neonatos: NO usar simultáneamente con calcio IV (intervalo mínimo 48h entre infusiones).',
      '🟠 Reacción alérgica cruzada con penicilinas 1-3% — vigilar si alergia previa.',
      '🟠 Colitis pseudomembranosa por C. difficile — riesgo con tratamientos prolongados.',
      '🟡 Litiasis biliar pseudolitiásica — depósitos de ceftriaxona-calcio en vesícula (reversible).',
      '🟡 Reacción tipo "disulfiram" con alcohol — evitar consumo durante tratamiento.',
    ],
  },

  modulos: {

    renal: `
      <b>Ceftriaxona en Insuficiencia Renal:</b><br/>
      <b>Ventaja:</b> Eliminación dual hepática-renal (60% renal, 40% biliar).<br/>
      <b>Ajuste:</b><br/>
      • CrCl > 30 mL/min: SIN ajuste (dosis estándar).<br/>
      • CrCl < 30 mL/min: SIN ajuste (eliminación biliar compensatoria).<br/>
      • CrCl < 10 mL/min: REDUCIR a 1 g/día (máximo 2 g/día).<br/>
      • Hemodiálisis: dosis estándar tras sesión.<br/>
      <b>Vigilancia:</b> Función renal y hepática c/3-5 días en uso prolongado.
    `,

    npt: `
      <b>⚠️ Ceftriaxona y Nutrición Parenteral Total (NPT):</b><br/>
      <b>CONTRAINDICACIÓN si NPT contiene CALCIO:</b><br/>
      • Riesgo de precipitación de ceftriaxona-calcio en circulación.<br/>
      • Precipitados pueden bloquear capilares pulmonares/renales.<br/>
      • Casos de muerte neonatal documentados.<br/><br/>
      <b>Manejo seguro:</b><br/>
      • Administrar ceftriaxona en línea SEPARADA de NPT.<br/>
      • Si misma vía: lavar con 10-20 mL SF entre infusiones.<br/>
      • Intervalo mínimo recomendado: 48h entre ceftriaxona y NPT con calcio (especialmente neonatos).<br/>
      • Considerar alternativas (cefotaxima) en neonatos críticos con NPT.<br/>
      <b>En adultos:</b> Menos riesgo, pero mantener separación física de líneas.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir SOLO con ASI, SF o lidocaína (para IM) — verificar etiqueta del solvente.',
      'Etiquetar con: Ceftriaxona [dosis], concentración, hora preparación, fecha límite.',
      'Verificar SIEMPRE que no hay calcio en otras infusiones concomitantes.',
      'Línea IV SEPARADA si paciente recibe Ringer Lactato o NPT con calcio.',
      'Lavar línea con 10-20 mL SF antes y después de administrar.',
      'Vigilar primeros 15-30 min por reacción alérgica.',
      'Documentar resultado de cultivos para de-escalada antibiótica.',
      'En diarrea: evaluar frecuencia, características, descartar C. difficile si > 3/día.',
      'Educar al paciente sobre evitar alcohol durante tratamiento.',
      'Rotar sitio IV cada 72h para prevenir flebitis.',
    ],

    efectosAdversos: [
      '🟠 Reacción alérgica / anafilaxia (rara)',
      '🟠 Colitis pseudomembranosa por C. difficile',
      '🟠 Neutropenia, trombocitopenia (uso prolongado)',
      '🟠 Litiasis biliar pseudolitiásica (reversible)',
      '🟡 Diarrea (5-10%)',
      '🟡 Náuseas, vómitos',
      '🟡 Rash cutáneo (1-3%)',
      '🟡 Flebitis en sitio IV (1-3%)',
      '🟡 Elevación leve de transaminasas',
      '🟡 Eosinofilia transitoria',
      '🟡 Reacción tipo disulfiram con alcohol',
    ],

    contraindicaciones: [
      'Hipersensibilidad a ceftriaxona, cefalosporinas u otros betalactámicos.',
      'Alergia grave (anafilaxia) a penicilinas — reactividad cruzada posible.',
      'Neonatos hiperbilirrubinémicos — desplazamiento bilirrubina-albúmina (riesgo kernicterus).',
      'Neonatos prematuros recibiendo calcio IV — contraindicación absoluta.',
      'Precaución en historia de colitis o enfermedad GI.',
    ],

    fotosensibilidad: 'No relevante. La solución es naturalmente amarillenta-ámbar. Almacenar a temperatura ambiente protegida de luz extrema.',

    estabilidad: {
      'Vial sin reconstituir':       'Temperatura ambiente hasta vencimiento (24 meses)',
      'Reconstituido (100 mg/mL)':   '<b>24 horas a TA · 10 días refrigerado (2-8°C)</b>',
      'Diluido en SF/SG 5%':         '<b>24 horas a TA · 10 días refrigerado</b>',
      'Aspecto':                     'Amarillenta a ámbar (normal) — desechar si turbidez o precipitado',
      'Temperatura':                 'NO congelar · 15-25°C',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Liofilizado reconstituido: usar dentro de las 6 h a temperatura ambiente.',
      dosisRestante:    'Reconstitución sin diluir: hasta 3 días refrigerada (2–8 °C). Anotar fecha y hora.',
      infusionPreparada:'6 h a temperatura ambiente / 3 días refrigerada (2–8 °C) en SF 0.9% o SG 5%.',
      notas:            'No mezclar con calcio IV (precipita, especialmente en neonatos). Incompatible con Ringer lactato.',
    },

    presentaciones: [
      'Ceftriaxona 1 g vial liofilizado para inyección',
      'Ceftriaxona 2 g vial liofilizado para inyección',
      'Ceftriaxona 500 mg vial (pediátrico)',
      'Ceftriaxona 250 mg vial (pediátrico)',
      'Rocephin® (marca original Roche)',
      'Múltiples genéricos disponibles globalmente',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Neumonía adquirida comunidad',      dosis: '1-2 g IV c/24h × 7-10 días',           via: 'IV' },
      { indicacion: 'Meningitis bacteriana adulto',      dosis: '2 g IV c/12h × 10-14 días',            via: 'IV' },
      { indicacion: 'Pielonefritis aguda',               dosis: '1-2 g IV c/24h × 7-14 días',           via: 'IV' },
      { indicacion: 'Sepsis (sin Pseudomonas)',          dosis: '2 g IV c/24h',                          via: 'IV' },
      { indicacion: 'Gonorrea no complicada',            dosis: '500 mg IM dosis única',                 via: 'IM' },
      { indicacion: 'Profilaxis quirúrgica',             dosis: '1-2 g IV 30-60 min pre-incisión',       via: 'IV' },
      { indicacion: 'Dosis máxima diaria',               dosis: '4 g/día (2 g c/12h)',                   via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA) — atraviesa placenta pero sin teratogenicidad demostrada. Uso seguro durante embarazo para infecciones bacterianas. Compatible con lactancia (mínima excreción en leche).',

    pediatria: 'Neonatos: 20-50 mg/kg c/24h (PRECAUCIÓN con calcio IV). Lactantes/Niños: 50-75 mg/kg c/24h. Meningitis pediátrica: 80-100 mg/kg c/24h (máximo 4 g/día). Dosis única IM en gonorrea pediátrica: 50 mg/kg (máx 125 mg).',

    adultoMayor: 'Sin ajuste de dosis específico — eliminación dual. Vigilancia función renal y hepática estándar. Mayor riesgo de C. difficile.',

    insufRenal: 'Sin ajuste hasta CrCl > 10 mL/min (eliminación biliar compensatoria). CrCl < 10 mL/min: máximo 2 g/día. En diálisis: dosis estándar tras sesión.',

    insufHepatica: 'En insuficiencia hepática + renal severas: REDUCIR DOSIS al 50%. Eliminación dual permite uso en casos hepáticos aislados.',
  },

  nivel4: {
    referencias: [
      'FDA DailyMed. Ceftriaxone for Injection. U.S. National Library of Medicine.',
      'CIMA AEMPS. Ficha Técnica Ceftriaxona. Agencia Española de Medicamentos.',
      'IDSA Guidelines. Community-Acquired Pneumonia. Clin Infect Dis. 2019.',
      'IDSA Guidelines. Bacterial Meningitis in Adults. Clin Infect Dis. 2017.',
      'CDC. STI Treatment Guidelines. MMWR. 2021.',
      'FDA Drug Safety. Ceftriaxone-Calcium Precipitation in Neonates. 2009.',
      'Micromedex Solutions. Ceftriaxone. Accessed 2024.',
    ],
  },

});
