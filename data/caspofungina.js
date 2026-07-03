/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/caspofungina.js
   Fuentes: CIMA AEMPS (Caspofungina Tevagen, Sun),
   IDSA Candidiasis/Aspergilosis Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'caspofungina',
  nombre:         'Caspofungina',
  nombreGenerico: 'Caspofungin Acetate',
  categoria:      'otros',
  tags:           ['antifúngico', 'equinocandina', 'candidiasis invasiva', 'aspergilosis', 'neutropenia febril', 'primera línea crítico'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Antifúngico EQUINOCANDINA (primera de su clase) — inhibe la síntesis de <b>beta-(1,3)-D-glucano</b>, componente esencial de la PARED CELULAR fúngica (mecanismo único, sin diana en células humanas) — <b>fungicida frente a Candida</b>.',
      '<b>TRATAMIENTO EMPÍRICO INICIAL DE ELECCIÓN en candidemia/candidiasis invasiva en pacientes CRÍTICAMENTE ENFERMOS</b> (guías IDSA 2016) — preferida sobre fluconazol en este contexto.',
      'Cobertura excelente de <b>Candida glabrata y Candida krusei</b> (resistentes o de sensibilidad reducida a fluconazol).',
      '<b>NO requiere ajuste de dosis en insuficiencia renal</b> (incluida diálisis) — NO es dializable. SÍ requiere ajuste en insuficiencia hepática moderada.',
      'Segunda línea en <b>aspergilosis invasiva refractaria/intolerante</b> a anfotericina B o itraconazol; también tratamiento empírico en neutropenia febril.',
    ],

    resumenRapido: 'Antifúngico equinocandina lipopeptídica semisintética. Inhibe no competitivamente la enzima beta-(1,3)-D-glucano sintasa, bloqueando la síntesis de glucano de la pared celular fúngica - mecanismo completamente distinto a azoles/polienos y SIN diana equivalente en células de mamífero (excelente perfil de seguridad). Fungicida frente a Candida spp. (incluyendo especies resistentes a fluconazol como C. glabrata y C. krusei), fungistático/activo frente a Aspergillus spp. Vida media: ~9-11h → dosis única diaria tras carga. Indicado en: candidiasis invasiva/candidemia (primera línea en críticos), candidiasis esofágica, aspergilosis invasiva refractaria/intolerante a otros antifúngicos, tratamiento empírico en neutropenia febril con sospecha de infección fúngica.',

    objetivoTerapeutico: 'Tratamiento de primera línea en candidemia/candidiasis invasiva grave · Cobertura de especies de Candida resistentes a azoles · Tratamiento empírico antifúngico en neutropenia febril persistente',

    preparacion: {
      'Presentación':             '<b>Caspofungina 50 mg y 70 mg polvo para concentrado para solución para perfusión</b>',
      'Reconstitución':           '<b>10.5 mL de agua para inyección</b> por vial (concentración resultante ~5.2-7.2 mg/mL según vial)',
      'Dilución para perfusión':  'Reconstituido + 250 mL SF 0.9%, SF 0.45%, o Ringer Lactato',
      '⚠️ NO usar soluciones con glucosa/dextrosa':'<b>NUNCA diluir con SG5%</b> - caspofungina es inestable en soluciones glucosadas',
      'Vía':                      'IV exclusiva en perfusión',
      '⏱️ VELOCIDAD DE INFUSIÓN': '<b>Perfusión LENTA en aproximadamente 1 HORA</b>',
      '⏱️ NO bolo IV':             'Nunca administrar en bolo rápido',
      '⏱️ DOSIS DE CARGA (día 1)':'<b>70 mg IV</b> (dosis única)',
      '⏱️ DOSIS DE MANTENIMIENTO':'<b>50 mg IV c/24h</b> (70 mg/día si peso > 80 kg)',
      '⏱️ ASPERGILOSIS/candidiasis en > 80kg':'Considerar mantener 70 mg/día (no solo el día de carga)',
      'Bomba':                    'Recomendada para perfusión controlada',
      '🧊 ESTABILIDAD reconstituido':'Verificar ficha específica - generalmente breve ventana, usar preferentemente pronto tras preparación',
      'Aspecto':                  'Polvo liofilizado blanco a blanquecino; solución reconstituida transparente',
    },

    vigilancia: {
      antes: [
        'Confirmar indicación: candidiasis invasiva, aspergilosis refractaria, tratamiento empírico en neutropenia febril.',
        'Función hepática basal - AJUSTE en insuficiencia hepática moderada.',
        'Peso del paciente - considerar dosis de 70 mg/día si > 80 kg.',
        'Revisar interacciones: ciclosporina (aumenta niveles de caspofungina - vigilar transaminasas), tacrolimus (caspofungina reduce niveles de tacrolimus), inductores enzimáticos (rifampicina, fenitoína, carbamazepina - pueden requerir aumentar dosis de caspofungina a 70 mg/día).',
        'Doble verificación: dosis de carga vs mantenimiento, dilución correcta (NO con glucosa).',
      ],
      durante: [
        'Perfusión lenta en aproximadamente 1 hora.',
        'Vigilar reacciones relacionadas con la perfusión: fiebre, escalofríos, rash, flebitis - generalmente manejables reduciendo la velocidad.',
        'Vigilar sitio IV.',
        'Observar signos de reacción anafilactoide (rara).',
      ],
      despues: [
        'Vigilar función hepática periódica (transaminasas) durante el tratamiento.',
        'En aspergilosis invasiva: vigilar función respiratoria - se han notificado casos de edema pulmonar y SDRA en este contexto (relacionado más con la enfermedad de base que con el fármaco, pero vigilar).',
        'Evaluar respuesta clínica y microbiológica (hemocultivos de control en candidemia).',
        'Considerar cambio a antifúngico oral (fluconazol si sensible) cuando el paciente esté clínicamente estable y con cultivos negativos.',
        'Documentar: dosis, duración, función hepática, respuesta clínica, eventos.',
      ],
      suspender: [
        'Hepatotoxicidad significativa.',
        'Reacción alérgica/anafilactoide severa.',
        'Completada duración del tratamiento o cambio a terapia dirigida por antibiograma/evolución clínica.',
      ],
    },

    incompatibilidades: [
      '<b>SOLUCIONES CON GLUCOSA/DEXTROSA (SG5%)</b> - INCOMPATIBLE, caspofungina es inestable en estas soluciones.',
      'No debe mezclarse ni co-infundirse con otros medicamentos en la misma línea.',
      'Diluir SOLO con SF 0.9%, SF 0.45%, o Ringer Lactato.',
      'Lavar línea con SF antes y después si se comparte vía con otros fármacos.',
    ],

    alertasSeguridad: [
      '🟠 <b>NUNCA diluir con soluciones de dextrosa/glucosa</b> - inestabilidad química.',
      '🟠 CICLOSPORINA aumenta niveles de caspofungina - vigilar transaminasas si uso concomitante.',
      '🟠 Caspofungina REDUCE niveles de TACROLIMUS - vigilar niveles del inmunosupresor y ajustar dosis si necesario.',
      '🟠 Inductores enzimáticos (rifampicina, fenitoína, carbamazepina, dexametasona, efavirenz, nevirapina) pueden requerir <b>AUMENTAR la dosis de caspofungina a 70 mg/día</b> en tratamientos prolongados.',
      '🟡 Ajuste de dosis necesario en insuficiencia hepática MODERADA (Child-Pugh B) - reducir a 35 mg/día tras la carga habitual.',
      '🟡 Datos limitados en insuficiencia hepática SEVERA (Child-Pugh C) - usar con precaución.',
      '🟡 Reacciones relacionadas con la perfusión (fiebre, escalofríos) generalmente leves - reducir velocidad si aparecen.',
      '🟡 En aspergilosis invasiva: notificados casos de edema pulmonar/SDRA (más relacionado con la gravedad de la enfermedad de base que con causalidad directa del fármaco).',
      '🟡 Excelente perfil de seguridad general - una de las razones de su uso preferente en pacientes críticos/inestables.',
    ],
  },

  modulos: {

    primeraLineaCriticos: `
      <b>Caspofungina como Primera Línea en Candidemia (Pacientes Críticos) - IDSA 2016:</b><br/>
      <b>RECOMENDACIÓN CLAVE:</b><br/>
      • Las guías IDSA recomiendan <b>EQUINOCANDINA (caspofungina, micafungina o anidulafungina) como tratamiento EMPÍRICO INICIAL DE ELECCIÓN</b> en:<br/>
      &nbsp;&nbsp;- Pacientes CRÍTICAMENTE ENFERMOS (UCI, shock séptico).<br/>
      &nbsp;&nbsp;- Exposición previa reciente a azoles.<br/>
      &nbsp;&nbsp;- Alta sospecha de especies resistentes a fluconazol (C. glabrata, C. krusei).<br/>
      &nbsp;&nbsp;- Colonización previa conocida por especies resistentes.<br/><br/>
      <b>POR QUÉ SE PREFIERE SOBRE FLUCONAZOL EN ESTE CONTEXTO:</b><br/>
      • Actividad FUNGICIDA (vs fungistática de fluconazol) - más rápida erradicación en paciente inestable.<br/>
      • Cobertura fiable de C. glabrata y C. krusei sin necesidad de esperar antibiograma.<br/>
      • Menor riesgo de interacciones medicamentosas graves que fluconazol (relevante en polifarmacia de UCI).<br/>
      • Excelente perfil de seguridad, incluso en insuficiencia renal.<br/><br/>
      <b>DE-ESCALADA:</b><br/>
      • Una vez identificada la especie y su sensibilidad, Y el paciente clínicamente estable:<br/>
      • Si especie sensible a fluconazol (C. albicans, C. tropicalis, C. parapsilosis) Y hemocultivos negativos: <b>considerar cambio a fluconazol</b> (más económico, permite VO).<br/><br/>
      <b>DURACIÓN:</b><br/>
      • <b>Mínimo 14 días desde el primer hemocultivo negativo</b> y resolución de síntomas.<br/>
      • Más prolongado si hay foco metastásico (endocarditis, endoftalmitis, osteomielitis).<br/><br/>
      <b>SEGUIMIENTO OBLIGATORIO:</b><br/>
      • Hemocultivos de control seriados hasta negativización.<br/>
      • Examen oftalmológico (fondo de ojo) - descartar endoftalmitis por Candida.<br/>
      • Considerar retirada de catéteres venosos centrales si son la fuente sospechada.
    `,

    aspergilosis: `
      <b>Caspofungina en Aspergilosis Invasiva:</b><br/>
      <b>INDICACIÓN APROBADA:</b><br/>
      • Tratamiento de aspergilosis invasiva en pacientes REFRACTARIOS O INTOLERANTES a anfotericina B (incluidas formulaciones lipídicas) y/o itraconazol.<br/>
      • Definición de resistencia: progresión de la enfermedad o falta de mejoría tras mínimo 7 días de terapia antifúngica efectiva previa.<br/><br/>
      <b>IMPORTANTE - NO ES PRIMERA LÍNEA:</b><br/>
      • El tratamiento de PRIMERA LÍNEA en aspergilosis invasiva es <b>VORICONAZOL</b> (guías IDSA 2016).<br/>
      • Caspofungina se reserva como <b>terapia de RESCATE/SEGUNDA LÍNEA</b> en casos refractarios o con intolerancia.<br/><br/>
      <b>EFICACIA:</b><br/>
      • Tasa de respuesta favorable documentada ~50% en estudios clínicos - inferior a la respuesta en candidiasis invasiva (~81%), reflejando la mayor dificultad terapéutica del Aspergillus.<br/><br/>
      <b>DURACIÓN:</b><br/>
      • Individualizada según gravedad de la enfermedad de base, recuperación de la inmunosupresión, y respuesta clínica.<br/>
      • General: continuar mínimo 7 días tras desaparición de síntomas.<br/>
      • Puede requerir tratamientos prolongados (semanas a meses) según contexto clínico (ej. inmunosupresión persistente).<br/><br/>
      <b>VIGILANCIA ESPECÍFICA:</b><br/>
      • Se han notificado casos de edema pulmonar y SDRA en pacientes con aspergilosis invasiva tratados con caspofungina - vigilar función respiratoria (aunque la relación causal con el fármaco vs la gravedad de la enfermedad de base no está establecida claramente).
    `,

    interaccionesEspecificas: `
      <b>Interacciones Farmacológicas de Caspofungina:</b><br/>
      <b>CICLOSPORINA:</b><br/>
      • Aumenta el AUC de caspofungina significativamente.<br/>
      • Se han observado elevaciones transitorias de transaminasas con el uso combinado.<br/>
      • <b>Usar la combinación SOLO si el beneficio supera el riesgo</b>, con vigilancia estrecha de función hepática.<br/><br/>
      <b>TACROLIMUS:</b><br/>
      • Caspofungina REDUCE las concentraciones de tacrolimus aproximadamente 20-26%.<br/>
      • <b>Monitorizar niveles de tacrolimus</b> y ajustar su dosis según sea necesario durante el tratamiento combinado.<br/><br/>
      <b>INDUCTORES ENZIMÁTICOS (rifampicina, efavirenz, nevirapina, fenitoína, dexametasona, carbamazepina):</b><br/>
      • Pueden REDUCIR las concentraciones de caspofungina por inducción metabólica.<br/>
      • En tratamientos PROLONGADOS con uso concomitante de estos inductores: <b>considerar aumentar la dosis de mantenimiento de caspofungina a 70 mg/día</b>.<br/><br/>
      <b>VENTAJA GENERAL:</b><br/>
      • A diferencia de los azoles (fluconazol, voriconazol), caspofungina NO es un inhibidor significativo del citocromo P450 - <b>perfil de interacciones mucho más favorable</b>, especialmente relevante en pacientes con polifarmacia compleja (trasplantados, oncológicos, UCI).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir con 10.5 mL de agua para inyección según vial (50 mg o 70 mg).',
      '<b>NUNCA diluir con soluciones de dextrosa/glucosa</b> - usar SF 0.9%, SF 0.45% o Ringer Lactato.',
      'Etiquetar: Caspofungina [mg], carga o mantenimiento, hora.',
      '<b>Perfusión LENTA en aproximadamente 1 hora</b> - no acelerar.',
      'Vigilar reacciones relacionadas con la perfusión: fiebre, escalofríos, flebitis.',
      'Si el paciente pesa > 80 kg: confirmar si se debe mantener dosis de 70 mg/día.',
      'Revisar interacciones: ciclosporina, tacrolimus, inductores enzimáticos.',
      'Vigilar función hepática periódica durante el tratamiento.',
      'En candidemia: coordinar hemocultivos de control y examen oftalmológico.',
      'Facilitar de-escalada a fluconazol cuando esté indicado (especie sensible, paciente estable).',
      'Documentar: dosis, hora, función hepática, respuesta clínica, eventos.',
    ],

    efectosAdversos: [
      '🟠 Elevación de transaminasas (especialmente con ciclosporina concomitante)',
      '🟠 Reacciones relacionadas con la perfusión (fiebre, escalofríos)',
      '🟠 Flebitis en sitio IV',
      '🟠 Edema pulmonar/SDRA (notificado en aspergilosis, relación causal no establecida claramente)',
      '🟡 Náuseas, vómitos, diarrea',
      '🟡 Cefalea',
      '🟡 Rash cutáneo, prurito',
      '🟡 Hipopotasemia',
      '🟡 Anemia (uso prolongado)',
      '🟡 Taquicardia',
      '🟡 Escalofríos',
    ],

    contraindicaciones: [
      'Hipersensibilidad a caspofungina o excipientes.',
      'Precaución en: insuficiencia hepática moderada-severa (ajuste de dosis necesario), uso concomitante de ciclosporina (vigilancia hepática).',
    ],

    fotosensibilidad: 'No relevante. Conservar según indicaciones específicas del fabricante, generalmente sin requerimientos especiales de fotoprotección.',

    estabilidad: {
      'Vial sin reconstituir':       'Refrigerar según packaging específico hasta vencimiento',
      'Reconstituido/diluido':       'Verificar ficha específica del fabricante - ventana de estabilidad limitada, usar preferentemente pronto',
      'Aspecto':                      'Polvo liofilizado blanco a blanquecino; solución reconstituida transparente',
      'Temperatura':                  'Seguir indicaciones específicas del fabricante',
    },

    presentaciones: [
      'Caspofungina Tevagen 50 mg y 70 mg polvo para concentrado para solución para perfusión',
      'Caspofungina Sun 50 mg y 70 mg',
      'Caspofungina genéricos varios',
      'Cancidas® (marca histórica)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis de carga (día 1)',                 dosis: '<b>70 mg IV</b>',                            via: 'IV' },
      { indicacion: 'Mantenimiento (peso ≤ 80 kg)',           dosis: '<b>50 mg IV c/24h</b>',                      via: 'IV' },
      { indicacion: 'Mantenimiento (peso > 80 kg)',           dosis: '<b>70 mg IV c/24h</b>',                      via: 'IV' },
      { indicacion: 'Con inductores enzimáticos (tto. prolongado)',dosis:'Considerar 70 mg/día de mantenimiento', via: 'IV' },
      { indicacion: 'Pediátrico (6 meses-17 años)',            dosis: '70 mg/m² carga + 50 mg/m²/día (máx 70 mg/día)',via: 'IV' },
    ],

    embarazo: 'Datos limitados en embarazo humano. Usar solo si el beneficio potencial justifica el riesgo. Se desconoce si se excreta en leche materna - valorar riesgo/beneficio en lactancia.',

    pediatria: 'Aprobada desde 6 meses hasta 17 años para candidiasis invasiva, candidiasis esofágica y aspergilosis invasiva (rescate). Dosis: 70 mg/m² de carga (máximo 70 mg) + 50 mg/m²/día de mantenimiento (máximo 70 mg/día).',

    adultoMayor: 'Efecto moderado de la edad en farmacocinética, similar entre ancianos y pacientes más jóvenes según estudios. Sin ajuste de dosis específico necesario solo por edad.',

    insufRenal: '<b>NO requiere ajuste de dosis</b> en insuficiencia renal de cualquier grado, incluida diálisis. <b>Caspofungina NO es dializable</b>, por lo que no requiere dosis suplementaria post-diálisis.',

    insufHepatica: '<b>Insuficiencia hepática LEVE</b>: sin ajuste necesario. <b>Insuficiencia hepática MODERADA (Child-Pugh B)</b>: reducir a <b>35 mg/día de mantenimiento</b> (manteniendo la carga de 70 mg el día 1). <b>Insuficiencia hepática SEVERA (Child-Pugh C)</b>: datos clínicos limitados, usar con precaución.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Caspofungina Tevagen 50mg/70mg. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Caspofungina Sun 50mg/70mg. AEMPS.',
      'FDA DailyMed. Caspofungin Acetate Injection. U.S. National Library of Medicine.',
      'IDSA Guidelines. Management of Candidiasis. CID. 2016.',
      'IDSA Guidelines. Treatment of Aspergillosis. CID. 2016.',
      'Pappas PG, et al. Clinical Practice Guideline for Candidiasis. IDSA. CID. 2016.',
      'Walsh TJ, et al. Caspofungin for Invasive Aspergillosis - Salvage Therapy. CID. 2004.',
      'Pediamécum AEP. Caspofungina. Asociación Española de Pediatría.',
    ],
  },

});
