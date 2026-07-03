/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/fluconazol.js
   Fuentes: CIMA AEMPS (Fluconazol Sala, B.Braun, Normon, Kabi),
   IDSA Candidiasis Guidelines 2016
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'fluconazol',
  nombre:         'Fluconazol',
  nombreGenerico: 'Fluconazole',
  categoria:      'antibioticos',
  tags:           ['antifúngico', 'azol', 'candidiasis', 'meningitis criptocócica', 'candidemia', 'profilaxis neutropenia'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Antifúngico AZÓLICO (triazol) — inhibe la síntesis de ERGOSTEROL de la membrana fúngica mediante inhibición del citocromo P450 fúngico — <b>fungistático</b> frente a Candida (fungicida frente a Cryptococcus).',
      'Solución IV <b>2 mg/mL LISTA PARA USAR</b> — NO requiere dilución ni reconstitución, administración directa en perfusión.',
      '<b>MISMA DOSIS IV que VO</b> — biodisponibilidad oral excelente (~90%), permite cambio IV→VO sin ajuste cuando el paciente tolera vía oral.',
      'Indicaciones destacadas: <b>candidiasis invasiva/candidemia</b>, meningitis criptocócica, profilaxis en neutropenia prolongada (trasplante hematopoyético, quimioterapia).',
      '<b>MÚLTIPLES INTERACCIONES por inhibición de CYP2C9/CYP3A4</b> — potencia warfarina, fenitoína, ciclosporina, tacrolimus, sulfonilureas, benzodiacepinas; riesgo de prolongación de QT con otros fármacos QT-prolongadores.',
    ],

    resumenRapido: 'Antifúngico triazólico de amplio uso, con buena penetración tisular incluyendo LCR (útil en meningitis fúngica) y excelente biodisponibilidad oral. Inhibe la 14-alfa-desmetilasa fúngica (enzima del citocromo P450), bloqueando la síntesis de ergosterol, componente esencial de la membrana celular fúngica. Actividad fungistática frente a especies de Candida (aunque algunas especies como C. krusei son intrínsecamente resistentes, y C. glabrata tiene sensibilidad variable/dosis-dependiente) y fungicida frente a Cryptococcus neoformans. NO cubre Aspergillus ni mucorales. Vida media larga (~30h) → dosis única diaria tras dosis de carga. Indicado en: candidiasis invasiva/candidemia, meningitis criptocócica (inducción con anfotericina B + flucitosina, luego consolidación/mantenimiento con fluconazol), candidiasis mucosas (orofaríngea, esofágica), candiduria, profilaxis antifúngica en neutropenia prolongada.',

    objetivoTerapeutico: 'Tratamiento de candidiasis invasiva y candidemia · Terapia de consolidación/mantenimiento en meningitis criptocócica · Profilaxis antifúngica en pacientes de alto riesgo (neutropenia, trasplante)',

    preparacion: {
      'Presentación IV':          '<b>Fluconazol 2 mg/mL solución para perfusión</b> - frasco/bolsa 50, 100, 200 mL - LISTA PARA USAR',
      'Presentación VO':          'Cápsulas 50, 100, 150, 200 mg · Suspensión oral',
      'Diluyente':                '<b>NO requiere dilución</b> - listo para perfusión directa',
      'Vía':                      'IV (perfusión) o VO - misma dosis en ambas vías (biodisponibilidad oral ~90%)',
      '⏱️ VELOCIDAD DE PERFUSIÓN':'<b>Máximo 200 mg/hora</b> (no exceder esta velocidad)',
      '⏱️ CANDIDEMIA/candidiasis invasiva (dosis carga)':'<b>800 mg IV/VO el primer día</b>',
      '⏱️ CANDIDEMIA (mantenimiento)':'<b>400 mg IV/VO c/24h</b>',
      '⏱️ MENINGITIS CRIPTOCÓCICA (consolidación)':'400 mg/día tras inducción con anfotericina B + flucitosina',
      '⏱️ MENINGITIS CRIPTOCÓCICA (mantenimiento/supresión)':'200 mg/día',
      '⏱️ PROFILAXIS neutropenia':'400 mg/día',
      '⏱️ Candidiasis orofaríngea':'200 mg carga + 100 mg/día × 7-14 días',
      '⏱️ Candidiasis esofágica': '200-400 mg/día × 14-21 días',
      'Cambio IV→VO':             'Misma dosis, sin ajuste (biodisponibilidad equivalente)',
      'Bomba':                    'Recomendada para perfusión controlada',
      '🧊 ESTABILIDAD post-apertura':'<b>24 horas a 25°C</b> · Compatible con sueros estándar (SF, SG5%, RL) hasta 72h en mezcla según fabricante',
      'Aspecto':                  'Solución transparente e incolora - desechar si turbidez',
    },

    vigilancia: {
      antes: [
        '<b>REVISAR TODA LA MEDICACIÓN por interacciones</b>: warfarina, fenitoína, ciclosporina, tacrolimus, sulfonilureas, benzodiacepinas, fármacos QT-prolongadores.',
        'Función hepática basal (transaminasas).',
        'ECG basal si hay factores de riesgo de QT largo o uso concomitante de otros QT-prolongadores.',
        'Función renal basal - ajuste de dosis según CrCl.',
        'Confirmar indicación: cultivos/serologías tomados si es posible antes de iniciar (sin retrasar tratamiento en sepsis).',
        'Doble verificación: dosis de carga vs mantenimiento, vía, velocidad de perfusión.',
      ],
      durante: [
        'Perfusión IV a velocidad máxima de 200 mg/hora - NO exceder.',
        'Vigilar sitio IV.',
        'Observar reacción alérgica primeros 15-30 min.',
      ],
      despues: [
        'Vigilar función hepática periódica en tratamientos prolongados (semanal-quincenal según duración).',
        'Vigilar signos de hepatotoxicidad: ictericia, coluria, dolor en hipocondrio derecho.',
        'Si en warfarina: vigilancia MÁS FRECUENTE de INR (fluconazol potencia su efecto significativamente).',
        'Si en fenitoína: vigilar niveles (fluconazol aumenta concentración).',
        'Si en ciclosporina/tacrolimus: vigilar niveles (riesgo de toxicidad por inmunosupresores).',
        'Evaluar respuesta clínica y microbiológica (hemocultivos de control en candidemia).',
        'Facilitar transición a VO cuando el paciente tolere (misma dosis).',
        'Documentar: dosis, duración, función hepática, INR si aplica, respuesta clínica.',
      ],
      suspender: [
        'Hepatotoxicidad significativa (transaminasas > 5-10× normal o síntomas clínicos).',
        'Reacción alérgica/anafilaxia.',
        'Síndrome de Stevens-Johnson o NET (raro).',
        'Prolongación significativa del QT con arritmia asociada.',
        'Completada duración del tratamiento o cambio a terapia dirigida.',
      ],
    },

    incompatibilidades: [
      'No debe mezclarse con otros medicamentos en la misma solución salvo compatibilidad expresa confirmada.',
      'Generalmente compatible con SF 0.9%, SG 5%, Ringer Lactato para co-infusión en Y (verificar ficha específica del fabricante).',
      'Preferir línea IV independiente si hay dudas de compatibilidad.',
    ],

    alertasSeguridad: [
      '🟠 <b>MÚLTIPLES INTERACCIONES por inhibición CYP2C9/CYP3A4</b>: potencia warfarina (↑ INR significativo), fenitoína, ciclosporina, tacrolimus, sulfonilureas (riesgo hipoglucemia), benzodiacepinas.',
      '🟠 <b>PROLONGACIÓN DEL QT</b> - precaución con otros fármacos QT-prolongadores (antiarrítmicos, algunos antipsicóticos, macrólidos).',
      '🟠 Hepatotoxicidad - vigilar función hepática en tratamientos prolongados.',
      '🟠 <b>Candida krusei es INTRÍNSECAMENTE RESISTENTE</b> a fluconazol - no usar si se identifica esta especie.',
      '🟠 <b>Candida glabrata</b> tiene sensibilidad variable/dosis-dependiente - considerar dosis más altas o alternativa (equinocandina) según antibiograma.',
      '🟡 NO cubre Aspergillus ni mucorales - usar antifúngico apropiado si se sospecha/confirma.',
      '🟡 Ajuste de dosis necesario en insuficiencia renal.',
      '🟡 Terfenadina/astemizol (si aún disponibles): contraindicación con dosis altas de fluconazol por riesgo de arritmia.',
      '🟡 Buena penetración en LCR - por eso es de elección en la fase de consolidación de meningitis criptocócica.',
    ],
  },

  modulos: {

    candidemiaInvasiva: `
      <b>Fluconazol en Candidemia / Candidiasis Invasiva (IDSA 2016):</b><br/>
      <b>CONSIDERACIÓN INICIAL IMPORTANTE:</b><br/>
      • En pacientes CRÍTICAMENTE ENFERMOS o con exposición previa a azoles: <b>las guías IDSA recomiendan EQUINOCANDINA (caspofungina, micafungina, anidulafungina) como tratamiento EMPÍRICO INICIAL</b>, no fluconazol.<br/>
      • Fluconazol es apropiado como tratamiento inicial en pacientes <b>NO críticamente enfermos, sin exposición previa a azoles, y con baja probabilidad de especies resistentes</b>.<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>Dosis de carga: 800 mg IV/VO el primer día</b>.<br/>
      • <b>Mantenimiento: 400 mg IV/VO c/24h</b>.<br/><br/>
      <b>DE-ESCALADA A FLUCONAZOL:</b><br/>
      • Tras iniciar equinocandina empírica, si:<br/>
      &nbsp;&nbsp;- El paciente está clínicamente estable.<br/>
      &nbsp;&nbsp;- La especie es sensible a fluconazol (C. albicans, C. tropicalis, C. parapsilosis).<br/>
      &nbsp;&nbsp;- Hemocultivos de control negativos.<br/>
      • Se puede realizar transición a fluconazol (de-escalada) - más económico y permite VO.<br/><br/>
      <b>DURACIÓN:</b><br/>
      • <b>14 días desde el primer hemocultivo negativo</b> Y resolución de síntomas, en ausencia de metástasis (endoftalmitis, endocarditis).<br/>
      • Más prolongado si hay foco metastásico (endocarditis, osteomielitis, absceso).<br/><br/>
      <b>SEGUIMIENTO OBLIGATORIO:</b><br/>
      • Hemocultivos de control cada 24-48h hasta negativización.<br/>
      • <b>Examen oftalmológico</b> (fondo de ojo) en la primera semana - descartar endoftalmitis por Candida (puede ser asintomática inicialmente).<br/>
      • Retirar catéteres venosos centrales si es la fuente sospechada (cuando sea posible).
    `,

    meningitisCriptococica: `
      <b>Fluconazol en Meningitis Criptocócica:</b><br/>
      <b>PROTOCOLO EN 3 FASES (IDSA):</b><br/><br/>
      <b>1. INDUCCIÓN (2 semanas):</b><br/>
      • <b>Anfotericina B liposomal + Flucitosina</b> - fluconazol NO es de elección en esta fase inicial.<br/><br/>
      <b>2. CONSOLIDACIÓN (8 semanas):</b><br/>
      • <b>Fluconazol 400 mg/día VO/IV</b> - AQUÍ es donde fluconazol tiene su papel principal.<br/><br/>
      <b>3. MANTENIMIENTO/SUPRESIÓN (mínimo 1 año, VIH+ hasta reconstitución inmune):</b><br/>
      • <b>Fluconazol 200 mg/día VO</b>.<br/><br/>
      <b>POR QUÉ FLUCONAZOL ES IDÓNEO EN ESTA INDICACIÓN:</b><br/>
      • Excelente penetración en LCR (mejor que muchos otros antifúngicos).<br/>
      • Actividad fungicida específicamente contra Cryptococcus (a diferencia de su perfil fungistático en Candida).<br/>
      • Buena tolerancia para tratamiento prolongado (meses).<br/><br/>
      <b>CONTEXTO CLÍNICO:</b><br/>
      • Principalmente en pacientes VIH+ con inmunosupresión severa (CD4 < 100).<br/>
      • También en otros inmunocomprometidos (trasplante, corticoterapia prolongada).<br/>
      • Considerar manejo de presión intracraneal elevada (frecuente en esta entidad) - punciones lumbares evacuadoras seriadas si es necesario.
    `,

    interacciones: `
      <b>Interacciones Farmacológicas Relevantes de Fluconazol:</b><br/>
      <b>MECANISMO:</b> Inhibidor de CYP2C9 y CYP3A4 (moderado-fuerte según isoenzima).<br/><br/>
      <b>WARFARINA / ACENOCUMAROL:</b><br/>
      • Fluconazol AUMENTA significativamente el efecto anticoagulante.<br/>
      • <b>Monitorizar INR MÁS FRECUENTEMENTE</b> al iniciar/suspender fluconazol.<br/>
      • Puede requerir reducción de dosis del anticoagulante.<br/><br/>
      <b>FENITOÍNA:</b><br/>
      • Fluconazol aumenta niveles de fenitoína - vigilar niveles séricos y signos de toxicidad.<br/><br/>
      <b>CICLOSPORINA / TACROLIMUS:</b><br/>
      • Fluconazol aumenta niveles de estos inmunosupresores - riesgo de nefrotoxicidad.<br/>
      • <b>Monitorizar niveles séricos</b> y ajustar dosis del inmunosupresor si es necesario.<br/><br/>
      <b>SULFONILUREAS (glibenclamida, glimepirida):</b><br/>
      • Fluconazol potencia su efecto - <b>riesgo de HIPOGLUCEMIA</b>.<br/>
      • Vigilar glucemia más estrechamente en diabéticos.<br/><br/>
      <b>BENZODIACEPINAS (midazolam, triazolam):</b><br/>
      • Fluconazol aumenta su efecto sedante - considerar reducción de dosis.<br/><br/>
      <b>FÁRMACOS QT-PROLONGADORES:</b><br/>
      • Precaución con antiarrítmicos, algunos antipsicóticos, macrólidos - riesgo de arritmia por prolongación aditiva del QT.<br/><br/>
      <b>ESTATINAS (simvastatina, atorvastatina):</b><br/>
      • Riesgo aumentado de miopatía/rabdomiolisis - considerar reducción de dosis de estatina o cambio a una menos interactiva (pravastatina).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Solución LISTA PARA USAR - no requiere dilución.',
      'Etiquetar: Fluconazol [mg], hora de inicio, vía.',
      '<b>Velocidad máxima de perfusión: 200 mg/hora</b> - no exceder.',
      '<b>REVISAR interacciones</b>: warfarina, fenitoína, ciclosporina/tacrolimus, sulfonilureas, benzodiacepinas.',
      'Si el paciente toma warfarina: coordinar vigilancia MÁS FRECUENTE de INR.',
      'Si el paciente es diabético con sulfonilureas: vigilar glucemia (riesgo hipoglucemia).',
      'Vigilar función hepática en tratamientos prolongados.',
      'Vigilar signos de hepatotoxicidad: ictericia, coluria.',
      'Facilitar transición a VO cuando el paciente tolere (misma dosis, sin ajuste).',
      'En candidemia: coordinar hemocultivos de control y examen oftalmológico (descartar endoftalmitis).',
      'Ajustar dosis según función renal (coordinar con farmacia/médico).',
      'Vigilar primeros 15-30 min por reacción alérgica.',
      'Documentar: dosis, hora, vía, función hepática, INR si aplica, respuesta clínica.',
    ],

    efectosAdversos: [
      '🔴 Hepatotoxicidad severa (rara)',
      '🔴 Síndrome de Stevens-Johnson / NET (raro)',
      '🔴 Anafilaxia (rara)',
      '🔴 Prolongación del QT / arritmias (con interacciones)',
      '🟠 Elevación de transaminasas',
      '🟠 Hipoglucemia (con sulfonilureas concomitantes)',
      '🟡 Náuseas, vómitos, diarrea',
      '🟡 Cefalea',
      '🟡 Dolor abdominal',
      '🟡 Rash cutáneo',
      '🟡 Alopecia (uso prolongado, dosis altas)',
      '🟡 Alteración del gusto',
      '🟡 Mareos',
    ],

    contraindicaciones: [
      'Hipersensibilidad a fluconazol u otros azoles.',
      'Uso concomitante con terfenadina/astemizol a dosis múltiples altas de fluconazol (si aún disponibles - riesgo arritmia).',
      'Uso concomitante con cisaprida (riesgo de arritmia grave).',
      'Precaución en: insuficiencia hepática (vigilancia), insuficiencia renal (ajuste dosis), embarazo (evitar dosis altas repetidas), antecedente de QT largo.',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente sin requerimientos especiales de fotoprotección.',

    estabilidad: {
      'Frasco/bolsa sin abrir':     'Temperatura ambiente (no > 25°C) hasta vencimiento · No congelar',
      'Post-apertura':               '<b>24 horas a 25°C</b>',
      'En mezcla con sueros compatibles':'Hasta 72 horas a 25°C según fabricante específico (verificar ficha)',
      'Aspecto':                      'Transparente e incolora — desechar si turbidez',
      'Temperatura':                  'NO congelar · No exceder 25°C',
    },

    presentaciones: [
      'Fluconazol Sala 2 mg/mL solución para perfusión',
      'Fluconazol B. Braun 2 mg/mL solución para perfusión',
      'Fluconazol Normon 2 mg/mL solución para perfusión IV',
      'Fluconazol Kabi 2 mg/mL (frascos KabiPac o bolsas Freeflex)',
      'Fluconazol cápsulas 50, 100, 150, 200 mg (múltiples marcas: Cinfa, Normon, Stada, Viatris)',
      'Fluconazol suspensión oral',
      'Diflucan® (marca histórica)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Candidemia (dosis de carga)',           dosis: '<b>800 mg IV/VO el primer día</b>',        via: 'IV/VO' },
      { indicacion: 'Candidemia (mantenimiento)',             dosis: '<b>400 mg IV/VO c/24h</b>',                 via: 'IV/VO' },
      { indicacion: 'Meningitis criptocócica (consolidación)',dosis: '400 mg/día × 8 semanas',                   via: 'IV/VO' },
      { indicacion: 'Meningitis criptocócica (mantenimiento)',dosis: '200 mg/día (mínimo 1 año)',                via: 'VO' },
      { indicacion: 'Profilaxis en neutropenia',              dosis: '400 mg/día',                                via: 'IV/VO' },
      { indicacion: 'Candidiasis orofaríngea',                dosis: '200 mg carga + 100 mg/día × 7-14 días',    via: 'VO' },
      { indicacion: 'Candidiasis esofágica',                   dosis: '200-400 mg/día × 14-21 días',              via: 'IV/VO' },
      { indicacion: 'Candidiasis vaginal',                     dosis: '150 mg dosis única',                        via: 'VO' },
      { indicacion: 'Pediátrico (candidiasis invasiva)',      dosis: '6-12 mg/kg/día IV/VO',                      via: 'IV/VO' },
    ],

    embarazo: 'Categoría D en dosis altas/repetidas (FDA) - asociación con anomalías congénitas múltiples reportadas con uso prolongado a dosis altas (400-800 mg/día) para infecciones sistémicas. Dosis única baja (150 mg) para candidiasis vaginal considerada de menor riesgo pero aún con precaución. Evitar si es posible, especialmente en 1er trimestre. Compatible con lactancia en dosis estándar (excreción en leche pero generalmente bien tolerado por el lactante).',

    pediatria: 'Aprobado desde el nacimiento. Candidiasis invasiva: 6-12 mg/kg/día. Candidiasis mucosas: 3-6 mg/kg/día. Profilaxis: 3-12 mg/kg/día según riesgo. Neonatos: intervalo de dosificación ajustado por inmadurez renal (cada 48-72h en prematuros muy jóvenes).',

    adultoMayor: 'Sin ajuste específico por edad, pero mayor prevalencia de insuficiencia renal e interacciones medicamentosas (polifarmacia) - vigilancia intensiva de interacciones y función renal.',

    insufRenal: '<b>AJUSTE OBLIGATORIO:</b> CrCl > 50: dosis estándar · CrCl ≤ 50 (sin diálisis): 50% de la dosis · Hemodiálisis: dosis completa tras cada sesión (se dializa significativamente).',

    insufHepatica: 'Sin ajuste específico establecido, pero vigilancia clínica y de transaminasas más estrecha, especialmente en tratamientos prolongados o insuficiencia hepática preexistente significativa.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Fluconazol Sala, B.Braun, Normon, Kabi 2 mg/mL. Agencia Española de Medicamentos.',
      'FDA DailyMed. Fluconazole Injection. U.S. National Library of Medicine.',
      'IDSA Guidelines. Management of Candidiasis. CID. 2016.',
      'IDSA Guidelines. Management of Cryptococcal Disease. CID. 2010 (vigente con actualizaciones).',
      'WHO Guidelines. Management of Cryptococcal Meningitis. 2018 (actualización 2022).',
      'Pediamécum AEP. Fluconazol. Asociación Española de Pediatría.',
      'Pappas PG, et al. Clinical Practice Guideline for Candidiasis. IDSA. CID. 2016.',
      'Sanford Guide to Antimicrobial Therapy. 2024.',
    ],
  },

});
