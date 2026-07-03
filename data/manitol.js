/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/manitol.js
   Fuentes: CIMA AEMPS (Osmofundina 20%, Manitol Mein 20%),
   FDA DailyMed, Brain Trauma Foundation Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'manitol',
  nombre:         'Manitol 20%',
  nombreGenerico: 'Mannitol 20%',
  categoria:      'otros',
  tags:           ['diurético osmótico', 'edema cerebral', 'PIC elevada', 'glaucoma agudo', 'TCE', 'neurocirugía'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Diurético osmótico hipertónico. Riesgo de sobrecarga circulatoria, edema pulmonar, insuficiencia renal, hipernatremia/hiponatremia dilucional. CONTRAINDICADO en hemorragia intracraneal activa (excepto craneotomía), anuria, ICC grave. Puede cristalizar - inspeccionar antes de usar.',

  nivel1: {

    puntosClave: [
      'Diurético OSMÓTICO — crea gradiente osmótico que extrae líquido del tejido cerebral/ocular hacia el plasma, luego se excreta por riñón arrastrando agua.',
      '<b>REQUIERE BARRERA HEMATOENCEFÁLICA (BHE) INTACTA</b> para funcionar — si BHE dañada (TCE severo, acidosis), el efecto puede REVERTIRSE (efecto rebote, empeora edema).',
      'Indicaciones principales: <b>reducción de PIC/edema cerebral</b>, glaucoma agudo, profilaxis de fallo renal agudo, forzar diuresis en intoxicaciones.',
      '<b>PUEDE CRISTALIZAR</b> a bajas temperaturas — si aparecen cristales, calentar el frasco a baño maría (50-70°C) hasta disolución completa. Usar filtro 12-15 micras en el equipo de infusión.',
      'CONTRAINDICADO en: hemorragia intracraneal activa (excepto durante craneotomía), anuria, insuficiencia cardíaca grave, edema pulmonar, deshidratación severa.',
    ],

    resumenRapido: 'Diurético osmótico (alcohol de azúcar) que no se reabsorbe en túbulo renal. Crea gradiente osmótico: extrae agua del tejido cerebral/ocular hacia el plasma (requiere BHE intacta), luego se filtra en glomérulo arrastrando agua por ósmosis (diuresis). Inicio de efecto en PIC: 15-30 min · Duración: 3-8h. Indicado en: reducción de PIC y edema cerebral (TCE, ACV, tumor, post-neurocirugía), glaucoma agudo de ángulo cerrado, profilaxis de fallo renal agudo (tras test de perfusión positivo), forzar diuresis en intoxicaciones por sustancias de eliminación renal, síndrome de lisis tumoral (adyuvante).',

    objetivoTerapeutico: 'Reducir presión intracraneal · Reducir presión intraocular en glaucoma agudo · Prevenir fallo renal agudo · Forzar diuresis en intoxicaciones · Reducir edema cerebral perilesional',

    preparacion: {
      'Presentación':             '<b>Manitol 20% (200 mg/mL) - frasco/bolsa 250 mL, 500 mL</b>',
      'Presentación 10%':         'Manitol 10% (100 mg/mL) - frasco 250, 500, 1000 mL',
      'Diluyente':                '<b>NO requiere dilución - usar directamente</b> (solución lista para perfusión)',
      'Vía':                      'IV exclusiva (bolo o perfusión según indicación)',
      '⚠️ INSPECCIÓN OBLIGATORIA':'<b>PUEDE CRISTALIZAR</b> - si hay cristales visibles, calentar a baño maría 50-70°C hasta disolución completa, enfriar a temperatura corporal antes de usar',
      '⚠️ FILTRO':                '<b>Usar equipo de infusión con filtro 12-15 micras</b> (previene microcristales invisibles)',
      '⏱️ PIC ELEVADA / EDEMA CEREBRAL':'<b>0.25-0.5 g/kg IV bolo en 10-30 min</b> (típico 350 mL manitol 20% en adulto 70kg = 0.5g/kg... ajustar)',
      '⏱️ Repetir si necesario':   'Cada 4-6h según PIC/respuesta clínica',
      '⏱️ TEST PERFUSIÓN (fallo renal)':'0.15-0.25 g/kg IV bolo en 3-5 min → evaluar diuresis en 2-3h',
      '⏱️ PERFUSIÓN CONTINUA (tras test +)':'0.15-0.3 g/kg/h IV',
      '⏱️ DOSIS MÁXIMA DIARIA':   '<b>1.5 g/kg/día (~7.5 mL/kg de manitol 20%)</b>',
      '⏱️ GLAUCOMA AGUDO':        '0.25-0.5 g/kg IV bolo en 10-30 min (usar manitol 10%)',
      'Bomba':                    'Recomendada para control preciso de velocidad',
      '🧊 ESTABILIDAD':           'Frasco sin abrir hasta vencimiento · Post-apertura: usar inmediatamente',
      'Aspecto':                  'Solución transparente, incolora — PUEDE CRISTALIZAR a baja Tª (ver arriba)',
    },

    vigilancia: {
      antes: [
        'Confirmar indicación: PIC elevada, edema cerebral, glaucoma agudo, profilaxis fallo renal.',
        '<b>INSPECCIONAR el frasco: descartar cristalización</b> - si hay cristales, calentar antes de usar.',
        'Función renal, electrolitos (Na+, K+), osmolaridad sérica basales.',
        'PA, FC, diuresis basal (sondaje vesical si PIC elevada para balance estricto).',
        'Descartar contraindicaciones: anuria, ICC grave, edema pulmonar, deshidratación severa, hemorragia intracraneal activa (salvo craneotomía).',
        'Verificar acceso IV de buen calibre (idealmente vena central en dosis repetidas).',
        'Preparar equipo de infusión con FILTRO 12-15 micras.',
        'Doble verificación: dosis calculada por peso, concentración (10% vs 20%).',
      ],
      durante: [
        '<b>Bolo IV en 10-30 minutos</b> - velocidad rápida causa cefalea, escalofríos, dolor torácico.',
        'Monitor: PA, FC continuo, PIC si monitorizada.',
        'Vigilar sitio IV - EXTRAVASACIÓN causa edema y necrosis cutánea.',
        'Control de diuresis horaria (sonda vesical recomendada).',
        'Vigilar signos de sobrecarga circulatoria: disnea, crepitantes, ingurgitación yugular.',
        'Si aparece dolor torácico, taquicardia: reducir velocidad o suspender.',
      ],
      despues: [
        'Balance hídrico ESTRICTO (entradas vs diuresis).',
        'Electrolitos (Na+, K+) cada 6-12h - riesgo hipernatremia o hiponatremia dilucional.',
        'Osmolaridad sérica - mantener < 320 mOsm/L (mayor riesgo de fallo renal).',
        'Función renal (creatinina, urea) diaria en uso repetido.',
        'PIC de control si monitorizada.',
        'Vigilar efecto rebote (↑ PIC de nuevo) especialmente si BHE dañada.',
        'Vigilar signos de deshidratación intracelular excesiva.',
        'Documentar: dosis, hora, diuresis obtenida, PIC pre/post, electrolitos.',
      ],
      suspender: [
        'Osmolaridad sérica > 320 mOsm/L.',
        'Anuria o diuresis inadecuada tras dosis test.',
        'Signos de sobrecarga circulatoria / edema pulmonar.',
        'Hipernatremia severa (Na+ > 155).',
        'Deterioro de función renal atribuible.',
        'Efecto rebote con empeoramiento de PIC.',
        'Extravasación con signos de necrosis.',
      ],
    },

    incompatibilidades: [
      'Sangre entera / hemoderivados - NO administrar por misma vía (pseudoaglutinación).',
      'Muchos fármacos - verificar antes de mezclar en misma línea.',
      'Soluciones con electrolitos concentrados - verificar compatibilidad.',
      'Preferir línea IV independiente para manitol.',
      'Lavar línea con SF antes y después si se comparte vía.',
    ],

    alertasSeguridad: [
      '🔴 <b>CONTRAINDICADO en hemorragia intracraneal activa</b> (excepto durante craneotomía).',
      '🔴 <b>CONTRAINDICADO en anuria</b> - si no hay función renal, el manitol se acumula causando sobrecarga masiva.',
      '🔴 SOBRECARGA CIRCULATORIA / EDEMA PULMONAR - especialmente en cardiópatas, IRC.',
      '🔴 EFECTO REBOTE si BHE dañada - puede EMPEORAR el edema cerebral y PIC.',
      '🟠 Hipernatremia o hiponatremia dilucional según fase de tratamiento.',
      '🟠 Insuficiencia renal aguda con dosis excesivas o deshidratación asociada.',
      '🟠 <b>PUEDE CRISTALIZAR</b> - inspeccionar SIEMPRE antes de administrar.',
      '🟠 Extravasación causa NECROSIS cutánea - vigilar sitio IV.',
      '🟡 Cefalea, escalofríos con infusión rápida.',
      '🟡 Osmolaridad sérica > 320 mOsm/L aumenta riesgo de fallo renal - monitorizar.',
      '🟡 Usar FILTRO 12-15 micras en equipo de infusión.',
    ],
  },

  modulos: {

    picElevada: `
      <b>Manitol en PIC Elevada / Edema Cerebral:</b><br/>
      <b>INDICACIONES:</b><br/>
      • TCE con PIC > 20-22 mmHg.<br/>
      • ACV hemorrágico o isquémico con edema significativo.<br/>
      • Tumor cerebral con edema perilesional.<br/>
      • Post-neurocirugía con edema.<br/>
      • Herniación cerebral inminente (signos clínicos: midriasis unilateral, deterioro GCS).<br/><br/>
      <b>MECANISMO:</b><br/>
      • Crea gradiente osmótico plasma-cerebro.<br/>
      • Extrae agua del parénquima cerebral hacia el plasma.<br/>
      • <b>REQUIERE BHE INTACTA</b> - si dañada, el manitol puede pasar al tejido cerebral e INVERTIR el gradiente (empeora edema).<br/>
      • Efecto adicional: mejora reología sanguínea (↓ viscosidad, ↑ flujo cerebral).<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. <b>Bolo: 0.25-0.5 g/kg IV en 10-30 min</b> (0.25 g/kg si mantenimiento, 1 g/kg en herniación inminente).<br/>
      2. Efecto en 15-30 min, pico 60-90 min, duración 3-8h.<br/>
      3. Repetir cada 4-6h según PIC/clínica.<br/>
      4. <b>Sondaje vesical</b> para control estricto de diuresis.<br/>
      5. Reponer volumen perdido para evitar hipovolemia (mantener euvolemia).<br/>
      6. <b>Suspender si osmolaridad > 320 mOsm/L</b> (riesgo de fallo renal supera beneficio).<br/><br/>
      <b>ALTERNATIVA/COMPLEMENTO:</b><br/>
      • Solución salina hipertónica (3%, 7.5%, 23.4%) - especialmente si hipovolemia o hiponatremia.<br/>
      • Ventaja SSH: no requiere BHE intacta, no causa diuresis (mejor en hipotensos).<br/><br/>
      <b>MONITORIZACIÓN:</b><br/>
      • PIC continua si disponible (objetivo < 20-22 mmHg).<br/>
      • Osmolaridad sérica c/6-12h.<br/>
      • Electrolitos, función renal diaria.<br/>
      • Balance hídrico estricto.
    `,

    glaucoma: `
      <b>Manitol en Glaucoma Agudo de Ángulo Cerrado:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Crisis de glaucoma agudo que no responde a tratamiento tópico/oral inicial.<br/>
      • PIO muy elevada con riesgo de daño del nervio óptico.<br/>
      • Como puente a iridotomía láser/quirúrgica.<br/><br/>
      <b>MECANISMO:</b><br/>
      • Reduce volumen del vítreo por deshidratación osmótica.<br/>
      • Reduce PIO en 30-60 minutos.<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>0.25-0.5 g/kg IV en 10-30 min</b> (usar manitol 10% preferentemente para esta indicación).<br/>
      • Dosis única generalmente suficiente como puente a tratamiento definitivo.<br/><br/>
      <b>COMBINAR CON:</b><br/>
      • Timolol tópico.<br/>
      • Pilocarpina tópica.<br/>
      • Acetazolamida IV/VO.<br/>
      • Análogos de prostaglandinas.<br/>
      • Iridotomía láser (tratamiento definitivo).<br/><br/>
      <b>VIGILANCIA:</b><br/>
      • PIO de control a los 30-60 min.<br/>
      • Vigilar efectos sistémicos (igual que uso neurológico).
    `,

    fallorenal: `
      <b>Manitol en Profilaxis de Fallo Renal Agudo:</b><br/>
      <b>INDICACIÓN:</b><br/>
      • Riesgo de necrosis tubular aguda (cirugía cardiovascular, rabdomiolisis, contraste yodado en alto riesgo).<br/>
      • Oliguria incipiente antes de establecerse fallo renal irreversible.<br/><br/>
      <b>PROTOCOLO - TEST DE PERFUSIÓN:</b><br/>
      1. <b>Bolo test: 0.15-0.25 g/kg IV en 3-5 minutos</b>.<br/>
      2. <b>Evaluar diuresis en las siguientes 2-3 horas</b>.<br/>
      3. <b>Si diuresis ≥ 40 mL/h</b>: respuesta POSITIVA → continuar con perfusión.<br/>
      4. <b>Si diuresis < 40 mL/h</b>: respuesta NEGATIVA → SUSPENDER manitol (riesgo de sobrecarga sin beneficio).<br/><br/>
      <b>SI RESPUESTA POSITIVA - Perfusión continua:</b><br/>
      • <b>0.15-0.3 g/kg/h IV</b>.<br/>
      • No superar dosis diaria máxima 1.5 g/kg/día.<br/>
      • Vigilar diuresis horaria, electrolitos, osmolaridad.<br/><br/>
      <b>RABDOMIOLISIS (uso adyuvante):</b><br/>
      • Junto con fluidoterapia agresiva (SF 0.9%).<br/>
      • Alcalinización urinaria con bicarbonato (controvertido).<br/>
      • Objetivo: diuresis > 200-300 mL/h para prevenir depósito de mioglobina tubular.<br/><br/>
      <b>PRECAUCIÓN:</b><br/>
      • Si ya establecido fallo renal (anuria): CONTRAINDICADO - solo sobrecarga sin beneficio.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>SIEMPRE inspeccionar el frasco antes de usar</b> - descartar cristalización.',
      'Si hay cristales: calentar a baño maría 50-70°C hasta disolución, enfriar a temperatura corporal.',
      '<b>Usar equipo de infusión con FILTRO 12-15 micras</b>.',
      'Verificar concentración: 10% vs 20% - diferentes indicaciones/dosis.',
      'Calcular dosis exacta por peso (g/kg).',
      'Etiquetar bolsa: Manitol [g/mL], concentración, velocidad, hora.',
      'Bomba de infusión para control preciso.',
      'Sondaje vesical si uso en PIC elevada - control diuresis horaria.',
      'Vigilar sitio IV - extravasación causa necrosis.',
      'Preferir vena central en dosis repetidas/altas.',
      'Control de electrolitos (Na+, K+) y osmolaridad c/6-12h.',
      'Balance hídrico ESTRICTO.',
      'Vigilar signos de sobrecarga: disnea, crepitantes, taquicardia.',
      'En profilaxis renal: evaluar respuesta del test de perfusión ANTES de continuar.',
      'Suspender si osmolaridad > 320 mOsm/L.',
      'Documentar: dosis, diuresis obtenida, PIC/PIO pre-post, electrolitos.',
    ],

    efectosAdversos: [
      '🔴 Sobrecarga circulatoria / edema pulmonar',
      '🔴 Insuficiencia renal aguda',
      '🔴 Efecto rebote (empeora PIC si BHE dañada)',
      '🔴 Hipernatremia o hiponatremia dilucional severa',
      '🔴 Convulsiones (dosis muy altas)',
      '🟠 Necrosis cutánea por extravasación',
      '🟠 Hipovolemia (diuresis excesiva)',
      '🟠 Hipopotasemia',
      '🟠 Flebitis, trombosis venosa en sitio IV',
      '🟡 Cefalea con infusión rápida',
      '🟡 Escalofríos, fiebre',
      '🟡 Dolor torácico transitorio',
      '🟡 Náuseas, vómitos',
      '🟡 Visión borrosa transitoria',
      '🟡 Sed intensa',
    ],

    contraindicaciones: [
      '<b>Anuria o fallo renal establecido</b> (sin respuesta a test de perfusión).',
      '<b>Hemorragia intracraneal activa</b> (excepto durante craneotomía).',
      'Insuficiencia cardíaca congestiva grave.',
      'Edema pulmonar activo o congestión pulmonar severa.',
      'Deshidratación severa no corregida.',
      'Hipertensión arterial grave no controlada.',
      'Hiperosmolaridad sérica preexistente.',
      'Alteración conocida de la barrera hematoencefálica (relativa - riesgo efecto rebote).',
      'Hipersensibilidad al manitol.',
    ],

    fotosensibilidad: 'No relevante. Conservar a temperatura ambiente (evitar temperaturas muy bajas que favorecen cristalización).',

    estabilidad: {
      'Frasco sin abrir':          'Temperatura ambiente (15-25°C) hasta vencimiento - evitar frío extremo (cristalización)',
      'Si cristaliza':              '<b>Calentar a baño maría 50-70°C hasta disolución completa</b>, enfriar a temperatura corporal antes de usar',
      'Post-apertura':               'Usar inmediatamente',
      'Aspecto':                     'Transparente, incolora — verificar ausencia de cristales antes de cada uso',
      'Temperatura':                 'NO congelar · Evitar temperaturas < 15°C (riesgo cristalización)',
    },

    presentaciones: [
      'Osmofundina® 20% (200 mg/mL) - frasco 250 mL, 500 mL (B. Braun)',
      'Osmofundina® 10% (100 mg/mL) - frasco 250, 500, 1000 mL',
      'Manitol Mein® 20% solución para perfusión',
      'Manitol Mein® 10% solución para perfusión',
      'Manitol 15% (menos común)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'PIC elevada / edema cerebral',          dosis: '<b>0.25-0.5 g/kg IV en 10-30 min</b>',      via: 'IV' },
      { indicacion: 'Herniación cerebral inminente',         dosis: '<b>1 g/kg IV bolo rápido</b>',              via: 'IV' },
      { indicacion: 'Test de perfusión (fallo renal)',       dosis: '0.15-0.25 g/kg IV en 3-5 min',              via: 'IV' },
      { indicacion: 'Perfusión continua (tras test +)',      dosis: '0.15-0.3 g/kg/h IV',                        via: 'IV' },
      { indicacion: 'Glaucoma agudo',                          dosis: '0.25-0.5 g/kg IV en 10-30 min',            via: 'IV' },
      { indicacion: 'Forzar diuresis (intoxicaciones)',       dosis: '0.25-2 g/kg IV según protocolo',            via: 'IV' },
      { indicacion: 'Dosis diaria MÁXIMA',                     dosis: '<b>1.5 g/kg/día (~7.5 mL/kg de 20%)</b>',  via: 'IV' },
      { indicacion: 'Pediátrico (PIC elevada)',                dosis: '0.25-1 g/kg IV en 20-30 min',              via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Atraviesa placenta. Uso solo si beneficio > riesgo (situaciones de riesgo vital: herniación cerebral, glaucoma agudo). Datos limitados en lactancia.',

    pediatria: 'Dosis: 0.25-1 g/kg IV en 20-30 min para PIC elevada. Mismo mecanismo y precauciones que en adultos. Vigilancia intensiva de electrolitos y balance hídrico (mayor sensibilidad a desequilibrios).',

    adultoMayor: 'Mayor riesgo de sobrecarga circulatoria e insuficiencia cardíaca. Considerar dosis en el rango inferior. Vigilancia hemodinámica intensiva.',

    insufRenal: '<b>PRECAUCIÓN EXTREMA</b> - en IRC moderada: usar dosis test antes de continuar. En IRC severa/anuria: CONTRAINDICADO (no hay excreción, solo sobrecarga).',

    insufHepatica: 'Sin ajuste específico. Vigilar balance hídrico y electrolitos con mayor frecuencia.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Osmofundina® 20% Solución para Perfusión. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Manitol Mein® 20%. AEMPS.',
      'FDA DailyMed. Mannitol Injection 20%. U.S. National Library of Medicine.',
      'Brain Trauma Foundation Guidelines. Management of Severe TBI, 4th ed. Neurosurgery. 2017.',
      'Neurocritical Care Society. Guidelines for Management of Elevated ICP. 2020.',
      'AAO Guidelines. Acute Angle-Closure Glaucoma Management. 2021.',
      'KDIGO Guidelines. Acute Kidney Injury. Kidney International. 2012.',
      'Pediamécum AEP. Manitol. Asociación Española de Pediatría.',
    ],
  },

});
