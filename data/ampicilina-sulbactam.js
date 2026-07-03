/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/ampicilina-sulbactam.js
   Fuentes: CIMA AEMPS (Ampicilina/Sulbactam Reiwa,
   Netpharmalab), Vademecum.es, IDSA Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'ampicilina-sulbactam',
  nombre:         'Ampicilina/Sulbactam',
  nombreGenerico: 'Ampicillin Sodium + Sulbactam Sodium',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'penicilina', 'inhibidor betalactamasas', 'amplio espectro', 'aspiración', 'profilaxis quirúrgica'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Combinación de <b>penicilina de amplio espectro (ampicilina) + inhibidor de betalactamasas (sulbactam)</b> — restaura actividad frente a cepas productoras de betalactamasas.',
      'Espectro: grampositivos (incluyendo enterococo sensible), gramnegativos, y <b>ANAEROBIOS</b> — útil en infecciones mixtas (aspiración, intraabdominales, ginecológicas).',
      '<b>CONTRAINDICADO en mononucleosis infecciosa y leucemia linfática</b> — mayor riesgo de rash cutáneo tipo sarampión (efecto de clase de aminopenicilinas).',
      'Reconstituir vial 1g/0.5g con <b>3.2 mL de agua para inyección</b> — administrar IM/IV lenta (mínimo 3 min) o en perfusión IV (15-30 min).',
      '<b>Dosis MÁXIMA de sulbactam: 4 g/día</b> — limita la dosis total de la combinación independientemente de la gravedad.',
    ],

    resumenRapido: 'Combinación de aminopenicilina (ampicilina) con un inhibidor de betalactamasas (sulbactam) que protege a la ampicilina de la inactivación enzimática, ampliando su espectro a cepas productoras de betalactamasas. Bactericida por inhibición de la síntesis de la pared celular bacteriana. Cubre grampositivos (incluyendo Enterococcus sensible, estreptococos), gramnegativos comunitarios (E. coli, Proteus, Haemophilus productor de betalactamasas), y anaerobios (Bacteroides no fragilis, Peptostreptococcus, Fusobacterium). NO cubre Pseudomonas ni gramnegativos hospitalarios multirresistentes. Vida media corta → dosificación c/6-8h. Indicado en: neumonía aspirativa, infecciones intraabdominales leves-moderadas, infecciones ginecológicas (EIP), infecciones de piel y partes blandas, profilaxis quirúrgica, sinusitis/otitis complicada.',

    objetivoTerapeutico: 'Cobertura de infecciones mixtas (aeróbica + anaeróbica) · Tratamiento de neumonía aspirativa · Profilaxis antibiótica quirúrgica · Alternativa de amplio espectro moderado',

    preparacion: {
      'Presentación':             '<b>Ampicilina/Sulbactam 1 g/0.5 g polvo para solución inyectable/perfusión</b> (relación 2:1)',
      'Presentación alt.':        'Ampicilina/Sulbactam 2 g/1 g (dosis mayores)',
      'Reconstitución':           '<b>Disolver el vial de 1g/0.5g en 3.2 mL de agua para preparaciones inyectables</b>',
      'Diluyente adicional':      'SF 0.9% o Ringer Lactato para perfusión (verificar compatibilidad específica del fabricante)',
      'Vía':                      'IM profunda · IV lenta (inyección directa) · IV en perfusión',
      '⏱️ IM/IV DIRECTA LENTA':   '<b>Mínimo 3 minutos</b>',
      '⏱️ PERFUSIÓN IV (mayor dilución)':'<b>15-30 minutos</b>',
      '⏱️ DOSIS estándar adulto': '<b>1.5-3 g (1/0.5 - 2/1 g) IV/IM c/6-8h</b> según gravedad',
      '⏱️ DOSIS infección leve':  'Pauta cada 12h',
      '⏱️ DOSIS MÁXIMA diaria':   '<b>8/4 g/día total (dosis máxima de sulbactam: 4 g/día)</b>',
      '⏱️ PROFILAXIS QUIRÚRGICA': '<b>1/0.5 - 2/1 g en la inducción anestésica</b>, puede repetirse c/6-8h',
      '⏱️ DURACIÓN':               'Continuar hasta 48h tras desaparición de síntomas, habitualmente 5-14 días',
      'Bomba':                    'Recomendada para perfusión controlada',
      '🌑 Protección luz':        'Conservar el envase en su embalaje exterior para protegerlo de la luz',
      '🧊 ESTABILIDAD':           'No conservar a temperatura > 25°C - verificar ficha específica para tiempo tras reconstitución/dilución',
      'Aspecto':                  'Solución transparente tras reconstitución - usar solo si transparente y libre de partículas',
    },

    vigilancia: {
      antes: [
        'Verificar alergia a betalactámicos/penicilinas - riesgo de reactividad cruzada con cefalosporinas.',
        '<b>DESCARTAR mononucleosis infecciosa o leucemia linfática</b> - contraindicación específica por riesgo de rash tipo sarampión.',
        'Precaución en individuos atópicos (mayor riesgo de reacciones alérgicas).',
        'Función renal basal - ajuste en insuficiencia renal.',
        'Doble verificación: dosis, dilución, vía.',
      ],
      durante: [
        'IM/IV directa: administrar en MÍNIMO 3 minutos.',
        'Perfusión IV: 15-30 minutos.',
        'Verificar que la solución esté transparente y sin partículas - NO usar si turbia.',
        'Observar reacción alérgica primeros 15-30 min: urticaria, anafilaxia, asma, rinitis alérgica.',
        'Si reacción alérgica: SUSPENDER inmediatamente e instaurar tratamiento de soporte.',
      ],
      despues: [
        'Evaluar respuesta clínica a 48-72h.',
        'Vigilar diarrea - descartar C. difficile si prolongada/severa.',
        'Vigilar rash cutáneo (más frecuente que con otras penicilinas si hay infección viral concomitante no diagnosticada).',
        'En uso prolongado: hemograma (anemia, trombocitopenia, eosinofilia, leucopenia descritas), función hepática.',
        'Continuar hasta 48h tras desaparición de síntomas.',
        'Documentar: dosis, hora, respuesta clínica, eventos.',
      ],
      suspender: [
        'Reacción alérgica (urticaria, anafilaxia, asma, rinitis alérgica).',
        'Aparición de rash cutáneo tipo sarampión (considerar infección viral no diagnosticada, especialmente mononucleosis).',
        'Diarrea grave con sospecha de C. difficile.',
        'Completada duración del tratamiento (48h tras resolución de síntomas).',
      ],
    },

    incompatibilidades: [
      'Aminoglucósidos - no mezclar en la misma jeringa/línea (inactivación física, igual que otras penicilinas).',
      'Soluciones con glucosa concentrada - verificar estabilidad específica antes de mezclar.',
      'Preferir línea IV independiente o lavar con SF antes/después de otros fármacos.',
    ],

    alertasSeguridad: [
      '🔴 <b>CONTRAINDICADO en mononucleosis infecciosa y leucemia linfática</b> - riesgo aumentado de reacciones cutáneas tipo sarampión.',
      '🟠 Reactividad cruzada con cefalosporinas en pacientes alérgicos a penicilina.',
      '🟠 Precaución en individuos atópicos (fiebre del heno, asma, urticaria previa) - mayor riesgo de reacciones alérgicas.',
      '🟠 <b>Dosis MÁXIMA de sulbactam: 4 g/día</b> - limita la dosis total posible.',
      '🟡 NO cubre Pseudomonas ni gramnegativos hospitalarios multirresistentes - no usar como monoterapia en sepsis nosocomial grave.',
      '🟡 Colitis pseudomembranosa por C. difficile (como con otros betalactámicos de amplio espectro).',
      '🟡 Ajuste de dosis en insuficiencia renal.',
      '🟡 Usar SOLO soluciones transparentes y libres de partículas - desechar si turbidez.',
    ],
  },

  modulos: {

    neumoniaAspirativa: `
      <b>Ampicilina/Sulbactam en Neumonía Aspirativa:</b><br/>
      <b>POR QUÉ ES ADECUADO:</b><br/>
      • Cobertura de anaerobios orofaríngeos (Peptostreptococcus, Fusobacterium, Bacteroides no fragilis) - flora típica implicada en aspiración.<br/>
      • Cobertura simultánea de grampositivos y gramnegativos comunitarios.<br/>
      • Una de las opciones de referencia en neumonía por aspiración adquirida en la comunidad.<br/><br/>
      <b>INDICACIÓN:</b><br/>
      • Neumonía aspirativa en pacientes con disfagia, alteración del nivel de consciencia, alcoholismo, ACV con broncoaspiración.<br/>
      • Absceso pulmonar de origen aspirativo.<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>1.5-3 g IV c/6-8h</b> según gravedad.<br/>
      • Duración: habitualmente 7-14 días (más prolongado en absceso pulmonar: 3-6 semanas, con transición a VO cuando sea posible).<br/><br/>
      <b>LIMITACIÓN:</b><br/>
      • Si sospecha de origen NOSOCOMIAL (aspiración durante hospitalización, UCI) con mayor riesgo de gramnegativos resistentes: considerar antibiótico de mayor espectro (pip-tazo, meropenem).
    `,

    profilaxisQuirurgica: `
      <b>Ampicilina/Sulbactam en Profilaxis Quirúrgica:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Cirugía con riesgo de contaminación por flora mixta (aeróbica + anaeróbica): cirugía colorrectal, ginecológica, algunas cirugías de cabeza y cuello.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      • <b>1/0.5 - 2/1 g IV en el momento de la inducción anestésica</b> (dentro de los 60 minutos previos a la incisión).<br/>
      • Puede repetirse cada 6-8 horas si la cirugía se prolonga significativamente.<br/>
      • Habitualmente NO se continúa más allá de 24h post-cirugía (profilaxis de dosis única o muy corta duración, según protocolo institucional).<br/><br/>
      <b>VENTAJA:</b><br/>
      • Cobertura de amplio espectro que incluye anaerobios, relevante en cirugías con riesgo de contaminación por flora intestinal/vaginal.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar alergia a betalactámicos/penicilinas.',
      '<b>Descartar mononucleosis infecciosa o leucemia linfática</b> antes de administrar.',
      'Reconstituir vial 1g/0.5g con 3.2 mL de agua para inyección.',
      'Etiquetar: Ampicilina/Sulbactam [dosis], hora preparación, vía.',
      'IM/IV directa en mínimo 3 minutos, o perfusión IV en 15-30 minutos.',
      'Verificar que la solución esté transparente - NO usar si turbia o con partículas.',
      'Vigilar primeros 15-30 min por reacción alérgica.',
      'No exceder dosis máxima de sulbactam (4 g/día).',
      'Vigilar diarrea (C. difficile) en tratamientos prolongados.',
      'Vigilar aparición de rash cutáneo - considerar causa viral concomitante.',
      'Ajustar dosis según función renal (coordinar con médico/farmacia).',
      'Documentar: dosis, hora, vía, respuesta clínica, eventos.',
    ],

    efectosAdversos: [
      '🔴 Reacción anafiláctica',
      '🔴 Colitis pseudomembranosa por C. difficile',
      '🟠 Rash cutáneo (especialmente si infección viral concomitante no diagnosticada)',
      '🟠 Reacciones alérgicas (urticaria, asma, rinitis)',
      '🟠 Anemia, trombocitopenia, eosinofilia, leucopenia',
      '🟡 Náuseas, vómitos, diarrea',
      '🟡 Prurito',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Dolor en sitio de inyección (IM)',
      '🟡 Flebitis en sitio IV',
      '🟡 Candidiasis (sobreinfección)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a ampicilina, sulbactam u otras penicilinas.',
      '<b>Mononucleosis infecciosa</b> (riesgo aumentado de rash tipo sarampión).',
      '<b>Leucemia linfática</b> (mismo riesgo de rash).',
      'Precaución en: individuos atópicos, hipersensibilidad a cefalosporinas (reactividad cruzada posible), insuficiencia renal (ajuste de dosis).',
    ],

    fotosensibilidad: 'Conservar el envase en su embalaje exterior para protegerlo de la luz, según indicación de ficha técnica. No conservar a temperatura superior a 25°C.',

    estabilidad: {
      'Vial sin reconstituir':       'Temperatura ambiente (< 25°C), protegido de luz, hasta vencimiento',
      'Reconstituido/diluido':       'Verificar ficha específica del fabricante para tiempo exacto de estabilidad',
      'Aspecto':                      'Transparente tras reconstitución - desechar si turbidez o partículas',
      'Temperatura':                  'NO congelar · < 25°C · Proteger de la luz',
    },

    presentaciones: [
      'Ampicilina/Sulbactam Reiwa Healthcare 1 g/0.5 g polvo para solución inyectable/perfusión',
      'Ampicilina/Sulbactam Netpharmalab 1 g/0.5 g',
      'Ampicilina/Sulbactam genéricos varios 1g/0.5g y 2g/1g',
      'Unasyn® (marca histórica internacional)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Adultos y niños > 8 años (rango general)', dosis: '<b>1.5-3 g IV/IM c/6-8h</b>',            via: 'IV/IM' },
      { indicacion: 'Infección leve',                            dosis: 'Pauta cada 12h',                             via: 'IV/IM' },
      { indicacion: 'Profilaxis quirúrgica',                     dosis: '1/0.5-2/1 g IV en la inducción, repetir c/6-8h si necesario',via: 'IV' },
      { indicacion: 'DOSIS MÁXIMA diaria total',                 dosis: '<b>8/4 g/día (máx sulbactam 4 g/día)</b>',   via: 'IV/IM' },
      { indicacion: 'Duración habitual',                          dosis: '5-14 días (hasta 48h tras resolución síntomas)',via: 'IV/IM' },
    ],

    embarazo: 'Categoría B. Sin evidencia de teratogenicidad significativa. Usar durante embarazo si claramente indicado. Compatible con lactancia (excreción mínima en leche).',

    pediatria: 'Aprobado en niños > 8 años según algunas fichas: 1/0.5-8/4 g/día en dosis divididas c/6-8h (dosis máxima de sulbactam 4 g/día). Consultar protocolo específico para menores de 8 años bajo indicación especializada.',

    adultoMayor: 'Sin ajuste específico solo por edad, salvo que exista insuficiencia renal (frecuente en este grupo) - ajustar dosis según función renal.',

    insufRenal: 'Ajuste necesario según aclaramiento de creatinina - reducir dosis o ampliar intervalo en insuficiencia renal moderada-severa (ambos componentes se eliminan principalmente por vía renal).',

    insufHepatica: 'Sin ajuste específico mayor establecido - eliminación principalmente renal. Vigilancia clínica en hepatopatía significativa.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Ampicilina/Sulbactam Reiwa Healthcare 1g/0.5g. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Ampicilina/Sulbactam Netpharmalab. AEMPS.',
      'Vademecum.es. Ampicilina/Sulbactam - Monografía y Fichas Técnicas Regionales.',
      'FDA DailyMed. Ampicillin/Sulbactam Injection. U.S. National Library of Medicine.',
      'IDSA/SIS Guidelines. Complicated Intra-abdominal Infection. CID. 2010.',
      'IDSA Guidelines. Community-Acquired Pneumonia / Aspiration Pneumonia. CID. 2019.',
      'Sanford Guide to Antimicrobial Therapy. 2024.',
      'Pediamécum AEP. Ampicilina/Sulbactam. Asociación Española de Pediatría.',
    ],
  },

});
