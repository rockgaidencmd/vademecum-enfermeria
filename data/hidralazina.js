/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/hidralazina.js
   Fuentes: CIMA AEMPS (Hydrapres 20mg inyectable),
   ACOG Preeclampsia Guidelines, Cardioteca
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'hidralazina',
  nombre:         'Hidralazina',
  nombreGenerico: 'Hydralazine Hydrochloride',
  categoria:      'antiarritmicos',
  tags:           ['vasodilatador', 'preeclampsia', 'eclampsia', 'HTA embarazo', 'insuficiencia cardíaca', 'emergencia hipertensiva'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Vasodilatador arteriolar directo. Reacciona con metales - requiere filtro no metálico y uso inmediato tras reconstitución. Riesgo de taquicardia refleja e hipotensión excesiva. Contraindicada en disección aórtica, cardiopatía isquémica activa. Puede inducir síndrome lupus-like con uso prolongado.',

  nivel1: {

    puntosClave: [
      'Vasodilatador arteriolar DIRECTO (hidrazinoftalazina) — relaja el músculo liso arteriolar sin efecto venoso significativo — <b>reduce poscarga sin afectar precarga</b>.',
      '<b>FÁRMACO CLÁSICO en PREECLAMPSIA/ECLAMPSIA</b> — larga historia de uso obstétrico con perfil de seguridad fetal bien documentado en el tercer trimestre.',
      '<b>REACCIONA CON METALES</b> — reconstituir con filtro NO metálico y usar INMEDIATAMENTE tras la preparación; <b>NO recomendada en suero glucosado</b>.',
      '<b>TAQUICARDIA REFLEJA</b> significativa (vasodilatación arteriolar sin bloqueo simpático) — en uso crónico oral SIEMPRE combinar con beta-bloqueante; en uso agudo IV vigilar estrechamente la FC.',
      'Contraindicada en <b>disección aórtica</b> (la taquicardia refleja empeora el estrés de pared) y en <b>cardiopatía isquémica activa</b> (aumenta demanda de O2 miocárdico).',
    ],

    resumenRapido: 'Vasodilatador arteriolar de acción directa, derivado hidrazinoftalazínico. Relaja el músculo liso de las arteriolas de resistencia mediante interferencia con el metabolismo del calcio intracelular, reduciendo la resistencia vascular periférica y la poscarga cardíaca, con mínimo efecto sobre el sistema venoso (a diferencia del nitroprusiato). La vasodilatación arteriolar sin compensación venosa provoca activación simpática refleja (taquicardia, aumento del gasto cardíaco) y retención de sodio/agua (activación del sistema renina-angiotensina). Inicio IV: 10-30 min · Duración: 2-4h. Indicado en: preeclampsia y eclampsia (parenteral), hipertensión moderada-grave en tratamiento combinado (nunca monoterapia), insuficiencia cardíaca crónica combinada con nitratos (especialmente en pacientes afroamericanos, estudio A-HeFT).',

    objetivoTerapeutico: 'Control de HTA severa en preeclampsia/eclampsia · Reducción de poscarga en insuficiencia cardíaca (combinada con nitratos) · Vasodilatación arteriolar en HTA moderada-grave (combinada)',

    preparacion: {
      'Presentación':             '<b>Hydrapres® 20 mg polvo para solución inyectable</b> - ampolla',
      'Reconstitución':           '<b>Disolver con 1.1 mL de agua para inyección</b>',
      '⚠️ REACCIÓN CON METALES': '<b>Preparar con filtro/aguja NO metálica y usar INMEDIATAMENTE</b> tras la extracción a la jeringa',
      '⚠️ NO usar suero glucosado':'<b>NO se recomienda la administración IV en suero glucosado</b> - usar SF u otros líquidos convencionales de perfusión',
      'Vía':                      'IV (bolo lento) o IM - NO se recomienda perfusión continua',
      '⏱️ PREECLAMPSIA/ECLAMPSIA (dosis inicial)':'<b>5 mg IV</b>',
      '⏱️ Dosis siguientes':       '<b>5-10 mg IV cada 20-30 minutos</b> (rango total 5-20 mg) hasta control de PA',
      '⏱️ En insuficiencia renal importante':'Puede requerir dosis más bajas',
      '⏱️ Transición a VO':        'La mayoría de pacientes pueden pasar a tratamiento oral en las primeras 24-48 horas',
      'Bomba':                    'NO se recomienda perfusión continua - administración en bolos IV lentos intermitentes',
      '🧊 ESTABILIDAD':           '<b>Usar inmediatamente tras reconstitución</b> - no conservar para uso posterior',
      'Aspecto':                  'Solución transparente tras reconstitución',
    },

    vigilancia: {
      antes: [
        'PA basal (ambos brazos si es posible), FC, ECG.',
        'En preeclampsia: confirmar diagnóstico y severidad, evaluar bienestar fetal.',
        'Revisar contraindicaciones: disección aórtica, cardiopatía isquémica, taquicardia intensa, enfermedad valvular mitral/aórtica, LES.',
        'Preparar con filtro NO metálico.',
        'Doble verificación: dosis, reconstitución inmediata, vía.',
      ],
      durante: [
        'Administración en BOLO LENTO IV.',
        'Monitor continuo: PA, FC, ECG.',
        'Vigilar TAQUICARDIA REFLEJA - puede ser significativa.',
        'Vigilar hipotensión excesiva - objetivo de descenso gradual, no brusco.',
        'En preeclampsia: vigilar bienestar fetal (monitorización si disponible y feto viable).',
        'Repetir dosis cada 20-30 min según respuesta de PA hasta control adecuado.',
      ],
      despues: [
        'Continuar monitor PA/FC hasta estabilización.',
        'En preeclampsia: continuar vigilancia materno-fetal según protocolo obstétrico.',
        'Coordinar transición a tratamiento oral en 24-48h para la mayoría de pacientes.',
        'En uso prolongado (semanas-meses, vía oral): vigilar síntomas de síndrome lupus-like (artralgias, rash, fiebre) - generalmente reversible al reducir/suspender.',
        'Documentar: dosis total, hora, PA pre/post cada dosis, respuesta, eventos.',
      ],
      suspender: [
        'Hipotensión severa sintomática.',
        'Taquicardia severa sintomática o isquemia miocárdica.',
        'PA en objetivo terapéutico (transición a tratamiento de mantenimiento).',
        'Reacción alérgica.',
        'Síntomas de síndrome lupus-like en uso prolongado (uso crónico oral).',
      ],
    },

    incompatibilidades: [
      '<b>METALES</b> - la hidralazina reacciona con metales; usar filtro/material NO metálico en la preparación.',
      '<b>NO recomendada en suero glucosado/fructosado/con lactosa o maltosa</b> como diluyente.',
      'Compatible con líquidos convencionales de perfusión venosa (SF) para dilución si es necesario.',
      'Usar rápidamente una vez preparada (no almacenar la solución reconstituida).',
    ],

    alertasSeguridad: [
      '🔴 <b>CONTRAINDICADA en disección aórtica</b> - la taquicardia refleja empeora el estrés de pared aórtica.',
      '🔴 <b>CONTRAINDICADA en cardiopatía isquémica activa/antecedente de enfermedad coronaria</b> - aumenta demanda de O2 miocárdico por taquicardia refleja.',
      '🔴 <b>REACCIONA CON METALES</b> - usar material de preparación no metálico, administrar inmediatamente tras reconstitución.',
      '🟠 Taquicardia refleja significativa - en uso crónico oral, SIEMPRE asociar beta-bloqueante.',
      '🟠 <b>NO usar en suero glucosado</b> para dilución/administración IV.',
      '🟠 CONTRAINDICADA en insuficiencia cardíaca con gasto alto (tirotoxicosis), cor pulmonale aislado, estenosis mitral/aórtica, enfermedad reumática de válvula mitral.',
      '🟡 Puede inducir SÍNDROME LUPUS-LIKE con uso prolongado (más frecuente en tratamiento oral crónico que en uso agudo IV) - generalmente reversible al reducir dosis.',
      '🟡 En 1er y 2º trimestre del embarazo: evitar si es posible (aunque en 3er trimestre para preeclampsia el perfil de seguridad está bien documentado).',
      '🟡 Casos aislados de trombocitopenia/sangrado neonatal en hijos de madres tratadas en 3er trimestre - relación causal no establecida claramente.',
      '🟡 Efectos adversos más frecuentes: cefalea, palpitaciones, taquicardia, anorexia, náuseas, vómitos, diarrea.',
    ],
  },

  modulos: {

    preeclampsia: `
      <b>Hidralazina en Preeclampsia / Eclampsia:</b><br/>
      <b>CONTEXTO HISTÓRICO Y ACTUAL:</b><br/>
      • Fármaco CLÁSICO en el manejo de la HTA severa del embarazo, con décadas de uso documentado.<br/>
      • En guías actuales (ACOG, ISSHP): alternativa a labetalol y nifedipino, con eficacia similar en ensayos comparativos, aunque algunos meta-análisis sugieren más episodios de hipotensión materna con hidralazina que con labetalol.<br/><br/>
      <b>INDICACIÓN:</b><br/>
      • PA ≥ 160/110 mmHg en preeclampsia severa (tratamiento urgente, dentro de 30-60 minutos).<br/>
      • Crisis hipertensiva en eclampsia.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. <b>Dosis inicial: 5 mg IV</b> (bolo lento).<br/>
      2. Si PA persiste ≥ 160/110 a los 20-30 min: <b>repetir 5-10 mg IV</b>.<br/>
      3. Continuar cada 20-30 minutos según respuesta (rango total habitual 5-20 mg).<br/>
      4. En insuficiencia renal importante: considerar dosis más bajas.<br/>
      5. La mayoría de pacientes pueden transicionar a tratamiento oral en 24-48h.<br/><br/>
      <b>OBJETIVO:</b> PA 140-150/90-100 mmHg (evitar descenso excesivo - riesgo de hipoperfusión placentaria).<br/><br/>
      <b>COMBINAR CON (en eclampsia):</b><br/>
      • Sulfato de magnesio (prevención/tratamiento de convulsiones - mecanismo independiente).<br/>
      • Monitorización fetal continua si feto viable.<br/><br/>
      <b>PRECAUCIÓN:</b><br/>
      • Vigilar taquicardia refleja materna.<br/>
      • Descenso de PA más impredecible que con labetalol en algunos estudios - vigilancia estrecha.
    `,

    insuficienciaCardiaca: `
      <b>Hidralazina en Insuficiencia Cardíaca (combinada con Nitratos):</b><br/>
      <b>EVIDENCIA:</b><br/>
      • Estudios V-HeFT I (1986) y V-HeFT II (1991): la combinación hidralazina + dinitrato de isosorbide mejora la supervivencia en IC con FEVI reducida.<br/>
      • <b>Estudio A-HeFT (2004)</b>: beneficio especialmente marcado en <b>pacientes afroamericanos</b> con IC - la combinación se añadió a terapia estándar con reducción significativa de mortalidad en este subgrupo.<br/>
      • Guía ESC de IC 2021/2023: <b>recomendación Clase IIa, Nivel B</b> para esta combinación en el contexto apropiado.<br/><br/>
      <b>INDICACIÓN ACTUAL:</b><br/>
      • Pacientes con IC y FEVI reducida que:<br/>
      &nbsp;&nbsp;- Permanecen sintomáticos a pesar de terapia óptima (IECA/ARA-II/ARNI, beta-bloqueante, antagonista mineralocorticoide, iSGLT2).<br/>
      &nbsp;&nbsp;- NO toleran IECA/ARA-II/ARNI (ej. insuficiencia renal severa, hiperpotasemia, angioedema previo).<br/>
      &nbsp;&nbsp;- Especialmente considerar en <b>pacientes de raza negra/afroamericana</b> (mayor evidencia de beneficio en este subgrupo).<br/><br/>
      <b>MECANISMO COMPLEMENTARIO:</b><br/>
      • Hidralazina: vasodilatación arteriolar (reduce poscarga).<br/>
      • Nitratos: venodilatación (reduce precarga).<br/>
      • Combinación cubre ambos componentes hemodinámicos.<br/><br/>
      <b>USO EN ESTE CONTEXTO:</b><br/>
      • Principalmente vía ORAL para tratamiento crónico de IC (no la indicación IV aguda cubierta en esta ficha, que se centra en preeclampsia/emergencia).<br/>
      • SIEMPRE en combinación con nitratos, nunca monoterapia en este contexto.
    `,

    reaccionMetales: `
      <b>Precauciones de Preparación - Reacción con Metales:</b><br/>
      <b>EL PROBLEMA:</b><br/>
      • La hidralazina REACCIONA QUÍMICAMENTE con metales.<br/>
      • Esta interacción puede alterar la estabilidad/composición del fármaco durante su preparación.<br/><br/>
      <b>MEDIDAS PRÁCTICAS OBLIGATORIAS:</b><br/>
      1. <b>Reconstituir con 1.1 mL de agua para inyección</b>.<br/>
      2. <b>Usar un filtro o aguja de material NO metálico</b> si el equipo de preparación lo requiere.<br/>
      3. <b>Extraer con aguja a la jeringa y USAR INMEDIATAMENTE</b> - no dejar reposar la solución preparada.<br/>
      4. <b>NO conservar la solución reconstituida</b> para uso posterior - preparar dosis a dosis en el momento de la administración.<br/><br/>
      <b>DILUYENTE:</b><br/>
      • Compatible con líquidos convencionales de perfusión venosa (SF 0.9%) si se requiere mayor dilución.<br/>
      • <b>NO recomendada la administración IV en suero glucosado</b> (glucosa, fructosa) ni en soluciones con lactosa o maltosa.<br/><br/>
      <b>ADMINISTRACIÓN:</b><br/>
      • NO se recomienda perfusión continua - administrar en bolos IV lentos intermitentes según el protocolo de dosificación (cada 20-30 min según respuesta).<br/>
      • Monitorizar la PA durante todo el tratamiento.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>Reconstituir con 1.1 mL de agua para inyección usando material NO metálico</b>.',
      '<b>Usar INMEDIATAMENTE tras la preparación</b> - no conservar para dosis posteriores.',
      '<b>NO diluir/administrar en suero glucosado</b> - usar SF si se requiere dilución adicional.',
      'Etiquetar: Hidralazina [mg], hora de preparación y administración.',
      'Administrar en BOLO IV LENTO.',
      'Monitor continuo: PA, FC, ECG.',
      'Vigilar taquicardia refleja.',
      'En preeclampsia: repetir dosis cada 20-30 min según respuesta de PA, coordinar con obstetricia.',
      'Vigilar bienestar fetal si aplica (monitorización si disponible).',
      'NO usar en infusión continua - solo bolos intermitentes.',
      'Coordinar transición a VO en 24-48h cuando esté indicado.',
      'En uso oral prolongado: vigilar síntomas de síndrome lupus-like (artralgias, rash).',
      'Documentar: dosis, hora, PA pre/post cada dosis, respuesta, eventos.',
    ],

    efectosAdversos: [
      '🔴 Hipotensión severa',
      '🔴 Isquemia miocárdica (por taquicardia refleja en cardiopatía coronaria)',
      '🟠 Taquicardia refleja significativa',
      '🟠 Síndrome lupus-like (uso oral prolongado) - artralgias, rash, fiebre',
      '🟠 Retención de sodio y agua (uso prolongado)',
      '🟡 Cefalea (muy frecuente)',
      '🟡 Palpitaciones (muy frecuente)',
      '🟡 Anorexia, náuseas, vómitos, diarrea',
      '🟡 Rubor facial',
      '🟡 Congestión nasal',
      '🟡 Mareos',
      '🟡 Trombocitopenia neonatal (casos aislados, uso en 3er trimestre - relación causal no establecida)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a hidralazina.',
      'Taquicardia intensa.',
      'Aneurisma aórtico disecante.',
      'Insuficiencia cardíaca con gasto alto (tirotoxicosis).',
      'Insuficiencia cardíaca derecha aislada (cor pulmonale).',
      'Insuficiencia miocárdica por obstrucción mecánica (estenosis mitral/aórtica, pericarditis constrictiva).',
      'Enfermedad reumática de la válvula mitral.',
      'Lupus eritematoso sistémico idiopático y desórdenes relacionados.',
      'Antecedentes de enfermedad coronaria.',
      'Primer y segundo trimestre del embarazo (salvo beneficio claro).',
      'No debe utilizarse en niños y adolescentes según algunas fichas técnicas (eficacia/seguridad no establecida formalmente, aunque hay experiencia clínica de uso).',
    ],

    fotosensibilidad: 'No relevante específicamente. Conservar según indicaciones del fabricante, sin requerimientos especiales de fotoprotección durante la conservación estándar del vial.',

    estabilidad: {
      'Vial sin abrir':            'Temperatura ambiente hasta vencimiento',
      'Tras reconstitución':        '<b>Usar INMEDIATAMENTE</b> - no conservar la solución preparada',
      'Aspecto':                    'Transparente tras reconstitución',
      'Preparación':                'Con material NO metálico',
    },

    presentaciones: [
      'Hydrapres® 20 mg polvo para solución inyectable',
      'Hydrapres® 25 mg comprimidos (VO)',
      'Hydrapres® 50 mg comprimidos (VO)',
      'Hidralazina clorhidrato 10 mg/mL solución oral (fórmula magistral tipificada, uso pediátrico)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Preeclampsia/eclampsia (dosis inicial)',dosis: '<b>5 mg IV</b>',                             via: 'IV' },
      { indicacion: 'Dosis siguientes (repetir según respuesta)',dosis:'<b>5-10 mg IV c/20-30 min (rango 5-20 mg)</b>',via: 'IV' },
      { indicacion: 'Insuficiencia renal importante',         dosis: 'Considerar dosis más bajas',                 via: 'IV' },
      { indicacion: 'Pediátrico (dosis general, uso descrito)',dosis:'1.7-3.5 mg/kg/día o 50-100 mg/m²/día en 4-6 dosis (máx dosis inicial 20 mg)',via: 'IV/VO' },
      { indicacion: 'Transición a VO',                          dosis: 'Generalmente en 24-48h tras control agudo', via: 'VO' },
    ],

    embarazo: 'Uso bien documentado en el TERCER TRIMESTRE para preeclampsia/eclampsia con perfil de seguridad fetal establecido por larga experiencia clínica. En estudios animales es teratógena (paladar hendido) en ratones, no confirmado en ratas; sin estudios adecuados controlados en humanos. <b>Evitar en 1er y 2º trimestre si es posible</b> - usar solo si el beneficio claramente supera el riesgo. Se excreta en leche materna en bajas concentraciones - no se han descrito efectos adversos significativos en el lactante, pero se aconseja precaución y vigilancia del neonato si el uso es inevitable.',

    pediatria: 'Seguridad y eficacia no establecida formalmente en ensayos clínicos controlados según algunas fichas técnicas (Hydrapres específicamente indica que no debe usarse en niños/adolescentes), aunque existe experiencia clínica de uso: 1.7-3.5 mg/kg/día o 50-100 mg/m²/día divididas en 4-6 dosis, con dosis inicial no superior a 20 mg.',

    adultoMayor: 'No se requiere ajuste de dosis específico generalmente, aunque se debe considerar iniciar con dosis más bajas dada la mayor sensibilidad potencial en este grupo.',

    insufRenal: 'Pacientes con insuficiencia renal importante pueden requerir dosis más bajas que las estándar - ajustar según respuesta clínica y tolerancia.',

    insufHepatica: 'Sin ajuste específico ampliamente establecido, aunque el metabolismo es principalmente hepático (acetilación) - considerar vigilancia clínica en hepatopatía significativa.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Hydrapres® 20 mg Polvo para Solución Inyectable. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Hydrapres® 25 mg y 50 mg Comprimidos. AEMPS.',
      'Cardioteca. Hidralazina: Evidencia y Práctica Clínica. 2025-2026.',
      'ACOG Practice Bulletin. Gestational Hypertension and Preeclampsia. Obstet Gynecol. 2020.',
      'ISSHP Guidelines. Hypertensive Disorders of Pregnancy. Hypertension. 2018.',
      'V-HeFT I Trial. Cohn JN, et al. NEJM. 1986. V-HeFT II Trial. NEJM. 1991.',
      'A-HeFT Trial. Taylor AL, et al. Combination of Isosorbide Dinitrate and Hydralazine in Blacks with Heart Failure. NEJM. 2004.',
      'ESC Guidelines. Acute and Chronic Heart Failure. Eur Heart J. 2021/2023.',
      'Pediamécum AEP. Hidralazina. Asociación Española de Pediatría.',
    ],
  },

});
