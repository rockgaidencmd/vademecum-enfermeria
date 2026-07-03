/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/imipenem-cilastatina.js
   Fuentes: CIMA AEMPS (Tienam), FDA DailyMed,
   SEIMC Guía Antibióticos 2023, IDSA Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'imipenem-cilastatina',
  nombre:         'Imipenem-Cilastatina',
  nombreGenerico: 'Imipenem/Cilastatin Sodium',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'carbapenem', 'amplio espectro', 'sepsis', 'multirresistencia', 'UCI', 'convulsiones'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Carbapenem de amplio espectro con riesgo de convulsiones dosis-dependiente, mayor que otros carbapenems (meropenem/ertapenem). Ajuste renal obligatorio — el sobredosaje en IR aumenta drásticamente el riesgo convulsivo. Reservar para infecciones graves por multirresistentes; evitar uso indiscriminado (presión selectiva).',

  nivel1: {

    puntosClave: [
      '<b>Carbapenem de amplísimo espectro</b> — gram positivos, gram negativos (incluidos productores de BLEE) y anaerobios.',
      '<b>Mayor riesgo de convulsiones</b> que otros carbapenems — dosis-dependiente, especialmente en IR no ajustada y patología del SNC.',
      'La cilastatina <b>inhibe la deshidropeptidasa renal</b> que degradaría el imipenem — componente obligatorio, no antibiótico por sí sola.',
      '<b>Infundir en 40-60 min</b> (dosis ≥500 mg) — la infusión rápida aumenta náuseas/vómitos y riesgo convulsivo.',
      'Reservar para <b>infecciones graves/multirresistentes</b> — antibiótico de último recurso, evitar uso empírico innecesario.',
    ],

    resumenRapido: 'Antibiótico betalactámico carbapenémico de espectro extremadamente amplio, activo frente a gram positivos, gram negativos (incluidos productores de betalactamasas de espectro extendido) y anaerobios. Se combina en proporción 1:1 con cilastatina, un inhibidor de la deshidropeptidasa-I renal que evita la degradación e inactivación del imipenem en el túbulo renal, aumentando su concentración urinaria activa. Su principal limitación de seguridad es el riesgo de convulsiones, superior al de otros carbapenems, por lo que requiere ajuste renal estricto y precaución en pacientes con patología del SNC.',

    objetivoTerapeutico: 'Tratamiento de infecciones graves polimicrobianas o por multirresistentes (BLEE) · Sepsis de origen abdominal, urinario o respiratorio nosocomial · Cobertura empírica de amplio espectro en paciente crítico con sospecha de multirresistencia · Infecciones mixtas aerobias-anaerobias',

    preparacion: {
      'Presentación':          '<b>Tienam® 500 mg/500 mg — vial polvo liofilizado (imipenem/cilastatina 1:1)</b>',
      'Reconstitución':        'Reconstituir según ficha técnica y diluir posteriormente',
      'Diluyente':             '<b>SF 0.9% (preferible) o SG 5%</b>',
      'Dilución final':        'Diluir en 100 mL SF/SG 5% (100-250 mL según dosis)',
      'Dosis estándar':        '<b>500 mg IV c/6 h</b> (infecciones moderadas-graves)',
      'Dosis alta (grave)':    '1 g IV c/6-8 h (máx 4 g/día) en infecciones muy graves con función renal normal',
      '⏱️ Tiempo de infusión (≥500 mg)': '<b>40-60 min — NUNCA en bolo IV directo</b>',
      'Tiempo infusión (<500 mg)': '20-30 min',
      'Vía':                   'IV intermitente (IM disponible para infecciones leves-moderadas, no en UCI)',
      '🧊 Estabilidad':         '<b>4 h a temperatura ambiente en SF 0.9%; menor en SG 5%</b>',
    },

    vigilancia: {
      antes: [
        'Función renal basal: creatinina y ClCr — ajuste de dosis obligatorio.',
        'Antecedentes de epilepsia, patología del SNC o traumatismo craneal — mayor riesgo convulsivo.',
        'Alergia a betalactámicos — reacción cruzada posible con penicilinas/cefalosporinas (baja pero presente).',
        'Confirmar la indicación (infección grave/multirresistente) — evitar uso empírico de amplio espectro innecesario.',
        'Peso del paciente para ajuste de dosis.',
      ],
      durante: [
        'Infundir en 40-60 min — nunca en bolo, reduce náuseas/vómitos y riesgo convulsivo.',
        'Vigilar signos de crisis convulsiva: mioclonías, confusión, movimientos anormales.',
        'Vigilar náuseas/vómitos durante la infusión (efecto adverso frecuente).',
        'Constantes vitales según protocolo de infección grave/sepsis.',
      ],
      despues: [
        'Función renal seriada (creatinina) — reajustar dosis si empeora.',
        'Vigilar diarrea — descartar C. difficile en tratamientos prolongados.',
        'Reevaluar la indicación a las 48-72 h con cultivos — desescalar cuando sea posible.',
        'Documentar dosis, tolerancia y respuesta clínica (fiebre, leucocitos, PCR).',
      ],
      suspender: [
        'Crisis convulsiva durante el tratamiento — suspender y avisar de inmediato.',
        'Reacción alérgica grave/anafilaxia.',
        'Diarrea grave con sospecha de colitis por C. difficile.',
        'Disponibilidad de antibiograma con alternativa de menor espectro (desescalada).',
        'Deterioro renal significativo sin reajuste — riesgo de acumulación neurotóxica.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros antibióticos en la misma solución.',
      '<b>Incompatible con soluciones que contengan lactato</b> (Ringer Lactato) — usar SF o SG 5%.',
      'No mezclar con aminoglucósidos en la misma jeringa/vía.',
      'Precipita si se diluye en concentraciones superiores a las recomendadas — seguir la dilución de ficha técnica.',
    ],

    alertasSeguridad: [
      '🔴 CONVULSIONES — riesgo mayor que otros carbapenems, especialmente en IR no ajustada o patología del SNC.',
      '🔴 Ajuste renal OBLIGATORIO — el sobredosaje relativo en IR incrementa drásticamente el riesgo convulsivo.',
      '🟠 Reacción cruzada con alergia a penicilinas/cefalosporinas (baja incidencia pero posible).',
      '🟠 Náuseas/vómitos frecuentes — infundir siempre lento (40-60 min).',
      '🟡 Reservar para infecciones graves/multirresistentes — antibiótico de espectro extendido de último recurso.',
      '🟡 Diarrea por C. difficile con tratamientos prolongados.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar el ajuste de dosis según función renal antes de cada administración.',
      'Diluir según ficha técnica en SF 0.9% (evitar Ringer Lactato) e infundir en 40-60 min.',
      'Vigilar de forma activa signos de convulsión, especialmente en las primeras dosis.',
      'Preguntar por antecedentes de epilepsia o patología del SNC antes de la primera dosis.',
      'Vigilar náuseas/vómitos durante la infusión — informar si son intensos.',
      'Controlar la función renal seriada y comunicar su deterioro para reajuste de dosis.',
      'Vigilar diarrea persistente — sospechar C. difficile en tratamientos >5-7 días.',
      'Reevaluar diariamente la indicación con el equipo médico — favorecer la desescalada.',
      'Documentar dosis, hora, tolerancia y respuesta clínica en cada turno.',
    ],

    efectosAdversos: [
      '🔴 Convulsiones (dosis-dependiente, mayor riesgo que otros carbapenems)',
      '🟠 Náuseas, vómitos (frecuentes, relacionados con velocidad de infusión)',
      '🟠 Diarrea / colitis por C. difficile',
      '🟠 Erupción cutánea, reacción alérgica',
      '🟡 Flebitis en el punto de infusión',
      '🟡 Elevación transitoria de transaminasas',
    ],

    contraindicaciones: [
      'Hipersensibilidad a carbapenems.',
      'Antecedente de reacción anafiláctica grave a betalactámicos (valorar riesgo/beneficio).',
      'Epilepsia no controlada o patología grave del SNC sin ajuste estricto de dosis.',
      'Insuficiencia renal grave sin ajuste de dosis/intervalo.',
    ],

    fotosensibilidad: 'No relevante. Conservar el vial a temperatura ambiente, proteger de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Diluido en SF 0.9%':    '<b>4 h a temperatura ambiente / 24 h refrigerado (2-8°C)</b>',
      'Diluido en SG 5%':      'Menor estabilidad — usar preferentemente SF 0.9%',
      'Aspecto':                'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Reconstituir y usar según ficha técnica — no conservar el polvo reconstituido sin diluir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: '4 h a temperatura ambiente en SF 0.9% tras la dilución final.',
      notas:             'Evitar Ringer Lactato como diluyente. Infundir siempre en 40-60 min para dosis ≥500 mg.',
    },

    presentaciones: [
      'Tienam® 500 mg/500 mg — vial polvo liofilizado IV',
      'Imipenem/Cilastatina Normon® — genérico IV',
      'Presentación IM disponible para infecciones leves-moderadas (no en UCI)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Infección moderada-grave',      dosis: '<b>500 mg IV c/6 h</b>',                              via: 'IV' },
      { indicacion: 'Infección muy grave (función renal normal)', dosis: '1 g IV c/6-8 h (máx 4 g/día)',            via: 'IV' },
      { indicacion: 'IR (ClCr 30-60)',                 dosis: '500 mg IV c/8 h (reducción de dosis)',                via: 'IV' },
      { indicacion: 'IR grave (ClCr 15-30)',            dosis: '250-500 mg IV c/12 h',                                via: 'IV' },
      { indicacion: 'Hemodiálisis',                     dosis: 'Dosis tras la sesión de diálisis',                    via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Datos limitados en humanos. Usar solo si el beneficio supera el riesgo, en infecciones graves sin alternativa de menor riesgo (p. ej. un betalactámico más estudiado). Preferir alternativas con más experiencia en gestación cuando sea posible.',

    pediatria: '>3 meses: 15-25 mg/kg IV c/6 h (máx 2 g/día en infecciones no meníngeas). Contraindicado relativamente en meningitis por mayor riesgo convulsivo (preferir meropenem, que atraviesa mejor la barrera hematoencefálica con menor riesgo). Ajustar por función renal.',

    adultoMayor: 'Mayor riesgo de convulsiones por reducción fisiológica de la función renal y mayor prevalencia de patología del SNC. Ajustar estrictamente por ClCr real (Cockcroft-Gault) y vigilar de forma activa signos neurológicos.',

    insufRenal: '<b>Ajuste obligatorio según ClCr</b> — ClCr 30-60: 500 mg c/8h. ClCr 15-30: 250-500 mg c/12h. ClCr <15: no administrar salvo hemodiálisis en las 48 h siguientes. El incumplimiento del ajuste es la principal causa evitable de convulsiones.',

    insufHepatica: 'Sin ajuste específico — metabolismo mínimamente hepático, eliminación fundamentalmente renal (tras la acción protectora de la cilastatina). Vigilar función renal como determinante principal de la dosis.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Tienam® (imipenem/cilastatina).',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Solomkin JS et al. Diagnosis and Management of Complicated Intra-abdominal Infection. IDSA/SIS Guidelines. Clin Infect Dis. 2010.',
      'Norrby SR. Neurotoxicity of carbapenem antibacterials. Drug Saf. 1996.',
      'Kollef MH et al. Antibiotic resistance and management strategies in the ICU. Chest. 2019.',
    ],
  },

});
