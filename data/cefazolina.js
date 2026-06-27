/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/cefazolina.js
   Fuentes: CIMA AEMPS, FDA DailyMed, IDSA Surgical
   Prophylaxis Guidelines, ASHP, Sanford Guide
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'cefazolina',
  nombre:         'Cefazolina',
  nombreGenerico: 'Cefazolin Sodium',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'cefalosporina 1G', 'profilaxis quirúrgica', 'infección piel', 'sepsis', 'endocarditis'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Cefalosporina de 1ª generación — bactericida contra grampositivos (S. aureus MSSA, estreptococos) y algunos gramnegativos (E. coli, P. mirabilis, K. pneumoniae).',
      '<b>ANTIBIÓTICO DE ELECCIÓN para profilaxis quirúrgica</b> en la mayoría de cirugías (excepto colorrectal, ginecológica).',
      'Administrar 30-60 minutos ANTES de la incisión quirúrgica — concentración tisular óptima.',
      'Reconstituir con SF 0.9% o agua para inyección — diluir en 50-100 mL SF para infusión IV.',
      'Reactividad cruzada con penicilinas <1% — usar con precaución si alergia leve a penicilina, NO si anafilaxia.',
    ],

    resumenRapido: 'Cefalosporina de 1ª generación. Bactericida por inhibición de síntesis de pared celular (PBP). Espectro: muy buena cobertura grampositivos (especialmente S. aureus MSSA), modesta gramnegativos. NO cubre: Pseudomonas, anaerobios, MRSA, enterococos. Indicado en profilaxis quirúrgica (1ª línea), infecciones de piel y partes blandas, infecciones del tracto urinario no complicadas, endocarditis por MSSA, osteomielitis. Vida media: 1.8h → dosis c/8h.',

    objetivoTerapeutico: 'Profilaxis infección de sitio quirúrgico · Erradicar infección bacteriana susceptible · Tratamiento empírico de SSTI · Cobertura MSSA en endocarditis',

    preparacion: {
      'Presentación':             '<b>Cefazolina 1 g vial liofilizado</b> (más común)',
      'Presentación alt.':        'Cefazolina 500 mg, 2 g vial liofilizado',
      'Reconstitución IV':        '<b>1 g + 10 mL SF 0.9% o agua inyección → 100 mg/mL</b>',
      'Reconstitución IM':        '1 g + 2.5 mL agua inyección → 333 mg/mL (con lidocaína opcional)',
      'Diluyente final':          'SF 0.9% · SG 5% (ambos compatibles)',
      'Dilución infusión IV':     '<b>1 g reconstituido + 50-100 mL SF</b> → 10-20 mg/mL',
      'Vía':                      'IV infusión 30 min (preferida) · IV bolo lento 3-5 min · IM profunda',
      '⏱️ TIEMPO INFUSIÓN':       '<b>IV: 30 minutos en 50-100 mL SF (estándar)</b>',
      '⏱️ Bolo IV (emergencia)':   '3-5 minutos',
      '⏱️ PROFILAXIS QUIRÚRGICA': '<b>1-2 g IV 30-60 min ANTES de incisión</b>',
      '⏱️ Re-dosificación intra-op':'Si cirugía > 4h o pérdida sangre > 1500 mL: repetir dosis',
      'Bomba':                    'Recomendada para infusión controlada',
      '🧊 ESTABILIDAD reconstituido':'<b>24 horas a 25°C · 7-10 días refrigerada (2-8°C)</b> en SF',
      '🧊 Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Aspecto':                  'Solución amarillenta clara — desechar si turbidez o color anormal',
    },

    vigilancia: {
      antes: [
        'Verificar alergias a betalactámicos (penicilinas, cefalosporinas).',
        '<b>En alergia ANAFILÁCTICA a penicilina: NO usar</b> (reactividad cruzada rara pero posible).',
        'En alergia leve a penicilina (rash leve): puede usarse con precaución.',
        'Confirmar cultivos tomados antes del antibiótico (si paciente estable).',
        'Revisar función renal — ajuste si CrCl < 50 mL/min.',
        'Para profilaxis quirúrgica: coordinar con anestesia para timing (30-60 min pre-incisión).',
        'Doble verificación: dosis, vía, momento administración.',
      ],
      durante: [
        'Observar reacción alérgica primeros 15-30 min: urticaria, broncoespasmo, hipotensión.',
        'Vigilar sitio IV — irritación venosa leve posible.',
        'Mantener velocidad estándar 30 min — no infundir más rápido sin necesidad.',
        'Si reacción alérgica: DETENER, tratar anafilaxia (adrenalina, antihistamínicos).',
      ],
      despues: [
        'Para profilaxis quirúrgica: documentar hora exacta de administración (debe ser 30-60 min pre-incisión).',
        'Re-dosificar intra-operatoriamente si cirugía > 4h o pérdida sangre significativa.',
        'En tratamiento: evaluar respuesta a las 48-72h (fiebre, leucocitos, PCR).',
        'Revisar resultados de cultivos para de-escalada o ajuste.',
        'Vigilar diarrea — si > 3 deposiciones/día líquidas, descartar C. difficile.',
        'En uso > 7 días: control de hemograma (neutropenia rara).',
      ],
      suspender: [
        'Reacción alérgica / anafilaxia confirmada.',
        'Resultado de cultivos que permita de-escalada (raro - cefazolina ya es de espectro estrecho).',
        'Diarrea grave con sospecha de C. difficile.',
        'Citopenia significativa.',
        'Completada profilaxis (dosis única) o curso de tratamiento.',
      ],
    },

    incompatibilidades: [
      'Aminoglucósidos (gentamicina, amikacina) — incompatibilidad física en misma solución (administrar separados).',
      'Soluciones con calcio — verificar antes de mezclar.',
      'Anfotericina B — incompatibilidad documentada.',
      'Bleomicina — incompatibilidad.',
      'Lavar línea con SF antes y después de otros medicamentos.',
      'Generalmente NO mezclar con otros antibióticos en misma jeringa.',
    ],

    alertasSeguridad: [
      '🟡 Reactividad cruzada con penicilinas <1% — vigilar si alergia previa.',
      '🟡 En alergia anafiláctica a penicilina: NO usar.',
      '🟡 En IRC severa: AJUSTE DE DOSIS obligatorio.',
      '🟡 Colitis pseudomembranosa por C. difficile (uso prolongado).',
      '🟡 Trombocitopenia, neutropenia raras con uso > 7-10 días.',
      '🟡 Reacción tipo disulfiram con alcohol (raro).',
      '🟡 Para profilaxis: si cirugía > 4h, re-dosificar 1 g IV intra-operatorio.',
    ],
  },

  modulos: {

    profilaxisQuirurgica: `
      <b>Profilaxis Antibiótica Quirúrgica con Cefazolina (IDSA/ASHP):</b><br/>
      <b>INDICACIONES — Primera línea en:</b><br/>
      • Cirugía cardíaca, vascular.<br/>
      • Cirugía ortopédica (prótesis).<br/>
      • Cirugía neuroquirúrgica.<br/>
      • Cirugía general limpia/limpia-contaminada.<br/>
      • Cesárea (1 g IV pre-incisión).<br/>
      • Cirugía mamaria, hernia.<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>1 g IV (peso < 80 kg) o 2 g IV (peso 80-120 kg) o 3 g IV (> 120 kg)</b>.<br/>
      • Administrar <b>30-60 minutos ANTES de la incisión</b>.<br/>
      • Si cirugía > 4 horas o pérdida sangre > 1500 mL: <b>RE-DOSIFICAR</b> intraoperatoriamente.<br/>
      • Generalmente dosis ÚNICA — no continuar post-operatoriamente sin indicación clara.<br/><br/>
      <b>EXCEPCIONES (NO usar cefazolina):</b><br/>
      • <b>Cirugía colorrectal:</b> Cefoxitina, ertapenem o cefazolina + metronidazol (anaerobios).<br/>
      • <b>Cirugía ginecológica con riesgo anaerobios:</b> Asociar metronidazol.<br/>
      • <b>Apendicectomía:</b> Cefoxitina o cefazolina + metronidazol.<br/>
      • <b>Alergia anafiláctica a betalactámicos:</b> Vancomicina + gentamicina + metronidazol.<br/><br/>
      <b>BENEFICIO:</b><br/>
      • Reducción del 50-75% en infecciones de sitio quirúrgico.<br/>
      • Bajo costo, alta eficacia, perfil de seguridad excelente.
    `,

    endocarditis: `
      <b>Cefazolina en Endocarditis por MSSA:</b><br/>
      <b>INDICACIÓN:</b> Alternativa a cloxacilina/nafcilina en endocarditis por S. aureus meticilín-sensible (MSSA).<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>2 g IV c/8h × 6 semanas</b> (válvula nativa).<br/>
      • Combinación con gentamicina 1 mg/kg c/8h × primeros 3-5 días (opcional, ya no rutinario).<br/>
      • En válvula protésica: 2 g IV c/8h × 6 semanas + rifampicina + gentamicina.<br/><br/>
      <b>VENTAJAS sobre cloxacilina/nafcilina:</b><br/>
      • Mejor tolerancia.<br/>
      • Menos nefrotoxicidad.<br/>
      • Dosificación más cómoda.<br/>
      • Eficacia clínica similar en MSSA.<br/><br/>
      <b>NO usar en endocarditis por:</b><br/>
      • MRSA (resistente a cefazolina).<br/>
      • Enterococos (cefazolina inactiva).<br/>
      • Bacilos gramnegativos resistentes.
    `,

    alergia: `
      <b>Cefazolina en pacientes con alergia a penicilina:</b><br/>
      <b>REACTIVIDAD CRUZADA:</b><br/>
      • Histórica: 10% (sobrestimado por cefalosporinas antiguas con cadena lateral similar).<br/>
      • Real (cefalosporinas modernas): <b>< 1-2%</b>.<br/>
      • Cefazolina tiene cadena lateral ÚNICA — riesgo cross-reactivity MUY bajo.<br/><br/>
      <b>DECISIÓN CLÍNICA según severidad de alergia:</b><br/>
      <b>Alergia leve (rash, prurito):</b><br/>
      • Puede usar cefazolina con vigilancia.<br/>
      • Considerar test de provocación previo (alergología).<br/><br/>
      <b>Alergia moderada (urticaria, angioedema leve):</b><br/>
      • Usar con precaución, vigilancia 15-30 min post-administración.<br/>
      • Tener adrenalina disponible.<br/><br/>
      <b>Alergia ANAFILÁCTICA (anafilaxia, SJS, NET):</b><br/>
      • <b>NO USAR cefazolina ni ninguna cefalosporina</b>.<br/>
      • Alternativas: vancomicina, clindamicina, fluoroquinolonas.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir con SF 0.9% (preferido) o agua para inyección.',
      'Verificar fecha de reconstitución — estabilidad 24h TA, 10 días refrigerada.',
      'Etiquetar con: Cefazolina [dosis], concentración, hora preparación, fecha límite.',
      'Para profilaxis quirúrgica: <b>COORDINAR EXACTAMENTE el timing (30-60 min pre-incisión)</b>.',
      'Documentar hora de administración en gráfica perioperatoria.',
      'Si cirugía se retrasa > 60 min post-administración: <b>re-dosificar</b>.',
      'Si cirugía > 4h o pérdida sangre significativa: re-dosificar 1 g IV intra-op.',
      'Vigilar primeros 15-30 min por reacción alérgica.',
      'Educar al paciente: posible diarrea durante tratamiento.',
      'En tratamientos > 7 días: control de hemograma.',
      'Evitar alcohol durante tratamiento (reacción disulfiram-like rara).',
      'Documentar: dosis, hora, vía, indicación, respuesta clínica.',
    ],

    efectosAdversos: [
      '🟠 Reacción alérgica / anafilaxia (rara, < 1%)',
      '🟠 Colitis pseudomembranosa por C. difficile',
      '🟠 Neutropenia, trombocitopenia (uso prolongado)',
      '🟡 Diarrea (5-10%)',
      '🟡 Náuseas, vómitos',
      '🟡 Rash cutáneo (1-3%)',
      '🟡 Flebitis en sitio IV (1-3%)',
      '🟡 Elevación leve de transaminasas',
      '🟡 Eosinofilia transitoria',
      '🟡 Candidiasis oral/vaginal (uso prolongado)',
      '🟡 Reacción tipo disulfiram con alcohol (rara)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a cefazolina u otras cefalosporinas.',
      'Alergia ANAFILÁCTICA a penicilinas (reactividad cruzada posible).',
      'Antecedente de Síndrome Stevens-Johnson o NET por betalactámicos.',
      'Precaución en: historia de colitis, enfermedad GI severa.',
    ],

    fotosensibilidad: 'No relevante. Las soluciones pueden tener leve color amarillento naturalmente (normal). Conservar a temperatura ambiente protegida de luz directa intensa.',

    estabilidad: {
      'Vial sin reconstituir':       'Temperatura ambiente hasta vencimiento (3 años)',
      'Reconstituido (100 mg/mL)':   '<b>24 horas a 25°C · 7-10 días refrigerado (2-8°C)</b>',
      'Diluido en SF/SG 5%':         '24 horas a 25°C · 10 días refrigerado',
      'Aspecto':                      'Amarillenta clara (normal) — desechar si turbidez',
      'Temperatura':                  'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Cefazolina 1 g vial liofilizado para inyección',
      'Cefazolina 500 mg vial liofilizado',
      'Cefazolina 2 g vial liofilizado',
      'Ancef® (marca histórica - GSK)',
      'Kefzol® (marca histórica - Lilly)',
      'Múltiples genéricos disponibles globalmente',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Profilaxis quirúrgica < 80 kg',       dosis: '<b>1 g IV 30-60 min pre-incisión</b>',     via: 'IV' },
      { indicacion: 'Profilaxis quirúrgica 80-120 kg',     dosis: '<b>2 g IV 30-60 min pre-incisión</b>',     via: 'IV' },
      { indicacion: 'Profilaxis quirúrgica > 120 kg',      dosis: '<b>3 g IV 30-60 min pre-incisión</b>',     via: 'IV' },
      { indicacion: 'Infección piel/partes blandas',       dosis: '1-2 g IV c/8h × 7-14 días',                via: 'IV' },
      { indicacion: 'Endocarditis MSSA',                   dosis: '<b>2 g IV c/8h × 6 semanas</b>',           via: 'IV' },
      { indicacion: 'ITU complicada',                      dosis: '1 g IV c/8h × 7-14 días',                  via: 'IV' },
      { indicacion: 'Osteomielitis MSSA',                  dosis: '2 g IV c/8h × 4-6 semanas',                via: 'IV' },
      { indicacion: 'Dosis máxima diaria',                 dosis: '12 g/día (4 g c/6h)',                      via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Uso seguro durante embarazo — atraviesa placenta pero sin teratogenicidad. PROFILAXIS de elección en cesárea (1 g IV pre-incisión). Compatible con lactancia (mínima excreción en leche).',

    pediatria: 'Neonatos < 7 días: 20-40 mg/kg c/12h. > 7 días: 20-40 mg/kg c/8-12h. Niños: 25-100 mg/kg/día IV dividido c/6-8h (máximo 6 g/día). Profilaxis quirúrgica pediátrica: 30 mg/kg IV pre-incisión.',

    adultoMayor: 'Ajuste por función renal (frecuente CrCl reducido en ancianos). Sin ajuste específico por edad. Mayor riesgo de C. difficile en hospitalizados.',

    insufRenal: '<b>AJUSTE OBLIGATORIO:</b> CrCl > 50: dosis estándar · CrCl 35-50: 60% dosis cada 8h · CrCl 11-34: 50% dosis cada 12h · CrCl < 10: 50% dosis cada 18-24h. Diálisis: dosis tras sesión.',

    insufHepatica: 'Sin ajuste de dosis específico — metabolismo renal principal. En cirrosis con disfunción renal: ajuste por CrCl.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Cefazolina. Agencia Española de Medicamentos.',
      'FDA DailyMed. Cefazolin Sodium for Injection. U.S. National Library of Medicine.',
      'Bratzler DW, et al. Clinical Practice Guidelines for Antimicrobial Prophylaxis in Surgery. Am J Health Syst Pharm. 2013.',
      'IDSA Guidelines. Infective Endocarditis. Circulation. 2015.',
      'AHA/IDSA Guidelines. Surgical Site Infection Prevention. 2017.',
      'Sanford Guide to Antimicrobial Therapy. 2024.',
      'ASHP Therapeutic Guidelines on Antimicrobial Prophylaxis in Surgery. Am J Health Syst Pharm.',
      'Pediamécum AEP. Cefazolina. Asociación Española de Pediatría.',
    ],
  },

});
