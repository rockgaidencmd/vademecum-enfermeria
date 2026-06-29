/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/metamizol.js
   Fuentes: CIMA AEMPS (Metamizol Normon, Metamizol Basi),
   MSF Guidelines, Farmacia Hospitalaria SEFH
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'metamizol',
  nombre:         'Metamizol (Dipirona)',
  nombreGenerico: 'Metamizole Sodium / Dipyrone',
  categoria:      'analgesia',
  tags:           ['analgesia', 'antipirético', 'dolor moderado-severo', 'cólico', 'fiebre alta', 'post-operatorio'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Analgésico, antipirético y espasmolítico no opiode — derivado pirazolónico con acción central y periférica.',
      'Administración IV LENTA OBLIGATORIA: <b>1 mL/min máximo (≈ 3 min para 1 g)</b> — bolo rápido causa HIPOTENSIÓN SEVERA, shock anafilactoide.',
      'Calentar la solución a temperatura corporal antes de inyectar (según prospecto AEMPS) — reduce dolor venoso.',
      'NO es fotosensible — pero la solución diluida tiene <b>estabilidad limitada</b>, administrar inmediatamente.',
      'RIESGO RARO PERO GRAVE: agranulocitosis (1/1,500-30,000 tratamientos) — vigilar fiebre, infecciones, lesiones mucosas.',
    ],

    resumenRapido: 'Analgésico-antipirético derivado pirazolónico (NO es AINE ni opiode). Mecanismo: inhibición de COX-3 central, modulación de sistema endocannabinoide y opioidérgico. Buen efecto espasmolítico. Indicado en dolor agudo moderado-severo post-operatorio o post-traumático, dolor cólico (renal, biliar), dolor oncológico, fiebre alta refractaria. Muy usado en LATAM y Europa, RETIRADO en EE.UU. por riesgo de agranulocitosis. Inicio IV: 30 min, duración: 4-6h.',

    objetivoTerapeutico: 'Analgesia dolor moderado-severo · Antipiresis en fiebre alta refractaria · Alivio dolor tipo cólico (espasmolítico) · EVA/EVN objetivo < 4/10',

    preparacion: {
      'Presentación':             '<b>2 g/5 mL ampolla</b> (400 mg/mL) - presentación más común',
      'Presentación alt.':        '1 g/2 mL ampolla (500 mg/mL) - Metamizol Basi',
      'Diluyente':                '<b>SF 0.9% · SG 5% · SG 5% + NaCl 0.9% · Ringer Lactato</b> (todos compatibles según AEMPS)',
      'Dilución infusión corta':  '<b>2 g (1 ampolla 5 mL) en 100-250 mL SF</b> → infundir en 15-30 min',
      'Dilución infusión continua':'4-8 g/día en 500-1000 mL SF (perfusión 24h)',
      'Vía':                      'IV (preferida), IM profunda · NUNCA intraarterial (necrosis vascular)',
      '⏱️ INYECCIÓN IV DIRECTA':  '<b>VELOCIDAD MÁXIMA: 1 mL/min</b> (≈ 3 min para 1 g) — riesgo hipotensión',
      '⏱️ INFUSIÓN IV CORTA':     '<b>15-30 minutos</b> en 100-250 mL SF',
      '⏱️ INFUSIÓN CONTINUA':     '4-8 g/día en perfusión 24h',
      '⏱️ Temperatura solución':   '<b>Calentar a temperatura corporal antes de inyectar</b> (recomendación AEMPS)',
      'Bomba':                    'Recomendada para infusión IV corta y continua',
      'Acceso':                   'IV periférico de buen calibre — vigilar extravasación',
      '🧊 ESTABILIDAD':           '<b>USAR INMEDIATAMENTE tras dilución</b> — estabilidad limitada en mezclas IV (recomendación CIMA AEMPS)',
      '🧊 Ampolla sin abrir':     'Temperatura ambiente (< 25°C) hasta vencimiento',
      'Aspecto':                  'Solución transparente, ligeramente amarillenta — el cambio de color a amarillo intenso o rosa indica degradación, desechar',
      '⚠️ Posición paciente':     '<b>Paciente debe estar ACOSTADO durante administración IV</b> — riesgo hipotensión',
    },

    vigilancia: {
      antes: [
        'Verificar antecedentes de agranulocitosis previa por metamizol o pirazolonas — CONTRAINDICACIÓN ABSOLUTA.',
        'PA, FC basales registrados — riesgo de hipotensión.',
        'Confirmar paciente acostado durante administración IV.',
        'Revisar antecedente de asma, urticaria con AINE/AAS (sensibilidad cruzada).',
        'Verificar función renal y hepática — evitar dosis altas si compromiso severo.',
        'En embarazo: contraindicado en 3er trimestre (recomendación AEMPS).',
        'Doble verificación: dosis, ampolla, dilución, velocidad.',
      ],
      durante: [
        '<b>Paciente ACOSTADO durante toda la administración IV</b>.',
        'PA c/5 min durante administración y 30 min post — vigilar hipotensión severa.',
        'FC y FR continuas.',
        'Vigilar reacciones anafilactoides: rubor, urticaria, broncoespasmo, edema angioneurótico.',
        'Observar sitio IV — vigilancia EXTREMA de extravasación (no es necrosante pero molesta).',
        'CONFIRMAR vía IV (no intraarterial) — IA causa necrosis distal severa.',
        'Mantener velocidad ≤ 1 mL/min para inyección directa.',
        'Si hipotensión: detener, posición Trendelemburg, fluidos IV.',
      ],
      despues: [
        'Continuar monitorización PA, FC 30-60 min post-administración.',
        'Evaluar respuesta analgésica/antipirética con escala EVA/EVN.',
        'Vigilar fiebre, infecciones mucosas (faringitis, estomatitis) en próximos días — signo de agranulocitosis.',
        'En uso > 7 días: hemograma completo (descartar agranulocitosis).',
        'Documentar: dosis, hora, vía, velocidad, respuesta, efectos adversos.',
      ],
      suspender: [
        'Hipotensión severa (PAS < 90 mmHg) refractaria.',
        'Reacción anafiláctica / anafilactoide (urticaria generalizada, broncoespasmo, edema laringe).',
        'Signos de agranulocitosis: fiebre alta nueva, faringitis, lesiones mucosas, leucocitos < 1000.',
        'Insuficiencia renal aguda nueva.',
        'Hepatitis tóxica (elevación severa de transaminasas).',
        'Convulsiones.',
        'Prescripción médica de suspensión.',
      ],
    },

    incompatibilidades: [
      '<b>Según prospecto AEMPS: NO mezclar con otras preparaciones inyectables</b> en la misma solución (riesgo incompatibilidad).',
      'Administrar metamizol POR SEPARADO de otros medicamentos IV.',
      'Lavar línea con SF antes y después de otros fármacos.',
      'Compatible (como diluyente): SF 0.9%, SG 5%, Ringer Lactato — pero solo para diluir metamizol.',
      'No mezclar con tramadol, ondansetrón, otros analgésicos en misma jeringa.',
    ],

    alertasSeguridad: [
      '🔴 HIPOTENSIÓN SEVERA si inyección rápida — paciente acostado, velocidad ≤ 1 mL/min.',
      '🔴 AGRANULOCITOSIS rara pero MORTAL (1/1500-30000) — vigilar fiebre, infecciones, lesiones mucosas.',
      '🔴 RETIRADO en EE.UU., Reino Unido, Suecia por riesgo agranulocitosis — usado libremente en España, LATAM, Alemania.',
      '🟠 NUNCA intraarterial — causa necrosis vascular distal severa.',
      '🟠 Reacción anafilactoide grave — más probable que con paracetamol.',
      '🟠 Sensibilidad cruzada con AAS/AINE en pacientes con síndrome de Widal (asma + pólipos + intolerancia AAS).',
      '🟡 Contraindicado 3er trimestre embarazo (cierre prematuro ductus arterioso).',
      '🟡 Coloración rojiza de la orina (metabolito) — informar al paciente, NO es hematuria.',
    ],
  },

  modulos: {

    hipotension: `
      <b>Manejo de hipotensión por metamizol:</b><br/>
      <b>Mecanismo:</b> Vasodilatación periférica + disminución resistencia vascular sistémica.<br/>
      <b>Más probable si:</b><br/>
      • Inyección IV rápida (> 1 mL/min).<br/>
      • Paciente sentado o de pie.<br/>
      • Hipovolemia previa, deshidratación.<br/>
      • Hipotensión basal, shock incipiente.<br/>
      • IAM, politraumatismo.<br/><br/>
      <b>Prevención:</b><br/>
      • Paciente ACOSTADO durante administración.<br/>
      • Velocidad máxima 1 mL/min (3 min para 1 g).<br/>
      • Asegurar normovolemia previa.<br/><br/>
      <b>Si hipotensión:</b><br/>
      1. Detener infusión.<br/>
      2. Trendelemburg (cabeza ↓, pies ↑).<br/>
      3. Fluidos IV (SF 500 mL rápido).<br/>
      4. Si no responde: vasopresores (noradrenalina).<br/>
      5. Notificar médico.
    `,

    agranulocitosis: `
      <b>Vigilancia de agranulocitosis por metamizol:</b><br/>
      <b>Incidencia:</b> 1/1,500-30,000 tratamientos (varía estudios).<br/>
      <b>Mortalidad sin tratamiento:</b> 10-30%.<br/>
      <b>Inicio:</b> Generalmente primeras 4 semanas de uso.<br/><br/>
      <b>Signos de alarma:</b><br/>
      • Fiebre alta nueva (especialmente > 38.5°C).<br/>
      • Faringitis, dolor de garganta intenso.<br/>
      • Estomatitis aftosa (úlceras orales).<br/>
      • Lesiones genitales o anales.<br/>
      • Malestar general intenso.<br/><br/>
      <b>Si sospecha:</b><br/>
      1. SUSPENDER metamizol inmediatamente.<br/>
      2. Hemograma urgente — leucocitos, neutrófilos.<br/>
      3. Si neutrófilos < 1000: AISLAMIENTO INVERSO.<br/>
      4. Hemocultivos, cultivo faríngeo.<br/>
      5. Antibióticos empíricos amplio espectro.<br/>
      6. Considerar G-CSF (factor estimulante granulocitos).<br/>
      7. Notificar farmacovigilancia.<br/>
      <b>Educar al paciente:</b> Consultar urgente si fiebre alta, dolor faringe, llagas bucales.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar antecedente de agranulocitosis o reacciones a pirazolonas ANTES de cada administración.',
      'Calentar la solución a temperatura corporal antes de inyectar (al sostener en mano o tibia con agua tibia).',
      'Etiquetar bolsa de infusión: Metamizol [dosis], dilución, velocidad, hora inicio.',
      'Paciente DEBE estar acostado durante administración IV.',
      'Bomba de infusión para infusión IV (preferida sobre bolo directo).',
      'Velocidad máxima 1 mL/min en inyección directa — usar reloj con segundero.',
      'Monitor de PA y FC continuo durante administración y 30 min post.',
      'Línea IV separada — NO mezclar con otros medicamentos.',
      'Lavar línea con SF antes y después.',
      'Informar al paciente: orina puede tornarse rojiza (no es sangre, es el metabolito).',
      'Educar sobre signos de alarma: fiebre nueva, dolor garganta, llagas bucales (agranulocitosis).',
      'Documentar: dosis, hora, velocidad, PA pre/post, respuesta analgésica.',
    ],

    efectosAdversos: [
      '🔴 Agranulocitosis (rara pero mortal)',
      '🔴 Reacción anafiláctica / anafilactoide',
      '🔴 Hipotensión severa con inyección rápida',
      '🔴 Síndrome Stevens-Johnson / NET (raro)',
      '🟠 Hipotensión moderada',
      '🟠 Urticaria, rash cutáneo',
      '🟠 Broncoespasmo (especialmente en asmáticos)',
      '🟡 Náuseas, vómitos',
      '🟡 Cefalea',
      '🟡 Coloración rojiza de orina (metabolito - inofensivo)',
      '🟡 Dolor en sitio de inyección',
      '🟡 Trombocitopenia (rara)',
      '🟡 Hepatitis tóxica (rara)',
    ],

    contraindicaciones: [
      'Antecedente de agranulocitosis por pirazolonas o pirazolidinas.',
      'Hipersensibilidad a metamizol, otras pirazolonas o pirazolidinas.',
      'Síndrome de Widal (asma + intolerancia a AAS + pólipos nasales).',
      'Anemia, alteraciones hematopoyéticas (médula ósea comprometida).',
      'Porfiria aguda intermitente.',
      'Déficit congénito de glucosa-6-fosfato-deshidrogenasa (G6PD).',
      'Tercer trimestre del embarazo (cierre prematuro ductus arterioso).',
      'Hipotensión severa preexistente, inestabilidad circulatoria.',
      'Lactancia (excreción en leche).',
    ],

    fotosensibilidad: '<b>NO es fotosensible</b> según revisión SEFH (no incluido en lista de medicamentos fotosensibles del Hospital Morales Meseguer). Sin embargo, una solución preparada puede cambiar de color amarillento — esto NO necesariamente indica degradación por luz sino transformación química espontánea (4-metilaminoantipirina). Si cambio de color es intenso (amarillo oscuro o rosa), desechar.',

    estabilidad: {
      'Ampolla sin abrir':       'Temperatura ambiente (< 25°C) hasta vencimiento',
      'Diluida en SF/SG 5%/RL':  '<b>USAR INMEDIATAMENTE (estabilidad limitada según AEMPS)</b>',
      'Calentar antes de usar':  'Temperatura corporal — recomendación AEMPS para reducir dolor venoso',
      'Temperatura ampolla':     'NO congelar · 15-25°C',
      'Aspecto':                 'Transparente, ligeramente amarillenta — desechar si amarillo intenso o rosa',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:   'Usar de inmediato. Desechar sobrante.',
      dosisRestante:    'No conservar. Desechar inmediatamente.',
      infusionPreparada:'Usar dentro de las 6 h de preparación a temperatura ambiente. Proteger de la luz.',
      notas:            'Incompatible con gluconato de calcio y algunos betalactámicos. Verificar compatibilidad antes de mezclar. Desechar si hay cambio de color (vira a amarillo oscuro).',
    },

    presentaciones: [
      'Metamizol Sódico 2 g/5 mL ampolla (Nolotil® - Boehringer)',
      'Metamizol Sódico 1 g/2 mL ampolla (Metamizol Normon)',
      'Metamizol Sódico 0.4 g/0.8 mL ampolla pediátrica',
      'Metamizol Magnésico 500 mg cápsulas VO',
      'Metamizol Magnésico 1 g comprimidos VO',
      'Metamizol Magnésico 250 mg/5 mL solución oral',
      'Marcas: Nolotil®, Neo-Melubrina®, Algocalmin®, Buscapina Composito®',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Adulto > 15 años (IV)',             dosis: '1-2 g IV c/6-8h (máximo 6 g/día)',     via: 'IV' },
      { indicacion: 'Dolor cólico (IV bolo lento)',      dosis: '2 g IV lento (3-5 min)',                via: 'IV' },
      { indicacion: 'Fiebre refractaria (IV)',           dosis: '1-2 g IV c/8h',                         via: 'IV' },
      { indicacion: 'Infusión continua paliativos',      dosis: '4-8 g/día en 500-1000 mL',              via: 'IV' },
      { indicacion: 'Dosis máxima diaria adulto',        dosis: '6 g/día (8 g en oncológicos)',          via: 'IV/VO' },
      { indicacion: 'IM profunda',                        dosis: '1-2 g IM (alternativa)',                via: 'IM' },
    ],

    embarazo: '<b>CONTRAINDICADO EN 3er TRIMESTRE</b> — riesgo de cierre prematuro del ductus arterioso fetal. En 1er-2do trimestre: usar solo si claramente necesario. Lactancia: CONTRAINDICADO (metabolitos pasan a leche en cantidades significativas).',

    pediatria: 'Niños > 3 meses: 6-16 mg/kg IV c/6h (máximo 1.5 g/dosis). Niños > 15 años: dosis adulto. En neonatos y < 3 meses: NO recomendado por datos limitados. Velocidad de inyección muy lenta (1 mL/min máximo).',

    adultoMayor: 'Reducir dosis 25-50% en > 65 años. Mayor riesgo de hipotensión y agranulocitosis. Vigilancia hemodinámica y hematológica intensiva. Evitar uso prolongado.',

    insufRenal: 'Evitar dosis altas si CrCl < 30 mL/min — eliminación reducida. Reducir dosis 25-50% en IRC moderada-severa. Vigilar función renal en uso prolongado.',

    insufHepatica: 'En cirrosis: REDUCIR DOSIS 50% — metabolismo hepático principal. Evitar uso prolongado. Vigilar transaminasas.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Metamizol Normon 0.4 g/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Metamizol Basi 500 mg/mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Nolotil® (Boehringer Ingelheim).',
      'MSF Guidelines. Metamizol (Dipirona). Médicos Sin Fronteras.',
      'SEFH. Estabilidad y compatibilidad del metamizol en jeringa y mezclas IV. Farmacia Hospitalaria. 1999.',
      'Preevid Murciasalud. Perfusión continua metamizol en SF — fotosensibilidad. 2018.',
      'Andrade S, et al. Metamizole and Agranulocytosis Risk. Drug Saf. 2016.',
      'AEMPS. Nota informativa: Metamizol y agranulocitosis. 2018.',
    ],
  },

});
