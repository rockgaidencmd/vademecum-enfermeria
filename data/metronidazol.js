/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/metronidazol.js
   Fuentes: CIMA AEMPS (Flagyl IV, Metronidazol Normon),
   FDA DailyMed, IDSA C. difficile Guidelines,
   IDSA Intra-abdominal Infections
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'metronidazol',
  nombre:         'Metronidazol',
  nombreGenerico: 'Metronidazole',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'antianaerobio', 'nitroimidazol', 'C. difficile', 'infecciones intraabdominales', 'giardiasis', 'amebiasis'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Antimicrobiano nitroimidazol — bactericida contra ANAEROBIOS estrictos (Bacteroides, Clostridium, Fusobacterium, Peptostreptococcus) y PROTOZOOS (Trichomonas, Giardia, Entamoeba, Leishmania).',
      '<b>NO ACTIVO contra bacterias AEROBIAS</b> - necesita combinación con otros antibióticos en infecciones mixtas.',
      'Presentación IV lista para usar: <b>500 mg/100 mL bolsa PREMEZCLADA</b> - NO requiere reconstitución ni dilución adicional.',
      '<b>REACCIÓN TIPO DISULFIRAM con ALCOHOL</b> - taquicardia, rubor, náuseas, vómitos, cefalea intensa. Evitar alcohol durante y 48-72h post-tratamiento.',
      'En C. difficile leve-moderada: alternativa a vancomicina VO (guías actuales prefieren vancomicina o fidaxomicina).',
    ],

    resumenRapido: 'Antimicrobiano nitroimidazol. Mecanismo único: dentro de células anaerobias es reducido a radicales libres que dañan ADN bacteriano. Excelente cobertura de anaerobios y protozoos, pero SIN actividad contra aerobios. Vida media: 6-8h → dosificación c/8h. Indicado en: infecciones intraabdominales (con otro antibiótico), infecciones ginecológicas, absceso cerebral, endocarditis por anaerobios, giardiasis, amebiasis intestinal e hepática, tricomoniasis, vaginosis bacteriana, C. difficile leve-moderada (alternativa), profilaxis quirúrgica en cirugía colorrectal, H. pylori (triple/cuádruple terapia).',

    objetivoTerapeutico: 'Erradicar anaerobios patógenos · Tratar infecciones protozoarias · Alternativa en C. difficile · Cobertura complementaria en infecciones mixtas',

    preparacion: {
      'Presentación IV':          '<b>Metronidazol 500 mg/100 mL bolsa premezclada</b> (5 mg/mL) - LISTA PARA USAR',
      'Presentación VO':          'Comprimidos 250 mg, 500 mg (Flagyl®)',
      'Presentación tópica':       'Metronidazol gel 0.75%, 1% (rosácea)',
      'Presentación óvulos':      'Metronidazol 500 mg (uso ginecológico)',
      'Diluyente':                '<b>NO requiere dilución - LISTO PARA USAR</b>',
      'Si requiere dilución adicional':'SF 0.9% · SG 5% · Ringer Lactato',
      'Vía':                      'IV (perfusión), VO, tópica, óvulos vaginales',
      '⏱️ INFUSIÓN IV':           '<b>500 mg en 20-60 minutos</b> (velocidad estándar 5 mg/min)',
      '⏱️ NO bolo IV':             '<b>NUNCA bolo rápido</b> - infusión mínimo 20 min',
      '⏱️ DOSIS estándar adulto': '<b>500 mg IV c/8h</b>',
      '⏱️ DOSIS infección severa': '15 mg/kg dosis carga + 7.5 mg/kg c/6h (máximo 4 g/día)',
      '⏱️ C. DIFFICILE (leve-moderada)':'<b>500 mg VO c/8h × 10-14 días</b> (VO preferido sobre IV para colitis)',
      '⏱️ PROFILAXIS colorrectal': '500 mg IV pre-incisión + cefazolina',
      '⏱️ Giardiasis / amebiasis': '500 mg VO c/8h × 5-10 días',
      'Bomba':                    'Recomendada para infusión controlada',
      '🌑 Protección luz':        'Conservar bolsa en embalaje exterior · Ligeramente fotosensible',
      '🧊 ESTABILIDAD':           '<b>Bolsa sin abrir hasta vencimiento · Post-apertura: usar inmediatamente</b>',
      'Aspecto':                  'Solución transparente, ligeramente amarilla — desechar si turbidez',
    },

    vigilancia: {
      antes: [
        'Verificar alergia a nitroimidazoles (metronidazol, tinidazol, secnidazol).',
        '<b>Educar al paciente: NO CONSUMIR ALCOHOL</b> durante tratamiento y 48-72h post (reacción disulfiram).',
        'Revisar medicación concomitante: warfarina (potencia efecto), litio (toxicidad), fenitoína.',
        'Función hepática basal - ajuste en cirrosis severa.',
        'Confirmar función renal (sin ajuste rutinario).',
        'En embarazo: EVITAR en 1er trimestre (categoría B, uso restringido).',
        'Doble verificación: dosis, vía, velocidad.',
      ],
      durante: [
        'Infusión IV en 20-60 minutos - NO acelerar.',
        'Vigilar sitio IV - irritación venosa leve posible.',
        'Observar reacciones inmediatas: rash, prurito.',
        'Vigilar sabor metálico común (informar es normal).',
        'Vigilar reacción con alcohol si se sospecha ingesta reciente.',
      ],
      despues: [
        'Evaluar respuesta clínica a 48-72h en infecciones agudas.',
        'Revisar cultivos y de-escalar si posible.',
        'Vigilar efectos SNC en uso prolongado: cefalea, ataxia, convulsiones (raras), neuropatía periférica.',
        '<b>EDUCAR: no alcohol × 48-72h post-tratamiento</b>.',
        'En uso > 10 días: neuropatía periférica reversible (parestesias en manos/pies).',
        'Vigilar coloración marrón-rojiza de la orina (efecto normal - metabolito - inofensivo, INFORMAR al paciente).',
        'Documentar: dosis total, respuesta clínica, efectos adversos, adherencia a restricción alcohol.',
      ],
      suspender: [
        'Reacción alérgica.',
        'Neuropatía periférica progresiva (dosis-dependiente).',
        'Convulsiones nuevas.',
        'Ataxia cerebelosa.',
        'Hepatotoxicidad severa.',
        'Encefalopatía (rara pero descrita).',
        'Prescripción médica o completado curso.',
      ],
    },

    incompatibilidades: [
      'Ceftriaxona - PRECIPITACIÓN en algunas condiciones.',
      'Anfotericina B - incompatibilidad.',
      'Dopamina - verificar antes.',
      'Sulfa - incompatibilidad.',
      'Generalmente NO mezclar con otros antibióticos en misma jeringa.',
      'Lavar línea con SF antes y después.',
    ],

    alertasSeguridad: [
      '🔴 <b>REACCIÓN TIPO DISULFIRAM con ALCOHOL</b> - taquicardia, rubor, náuseas severas, vómitos, cefalea intensa, hipotensión. Evitar alcohol 48-72h post-tratamiento.',
      '🟠 NEUROPATÍA PERIFÉRICA con uso prolongado o dosis altas - generalmente reversible.',
      '🟠 CONVULSIONES en uso prolongado o dosis altas - especialmente en pacientes con predisposición.',
      '🟠 ENCEFALOPATÍA (rara pero descrita) - confusión, ataxia, disartria.',
      '🟠 Potencia efecto de WARFARINA (aumenta INR) - vigilar coagulación.',
      '🟠 Aumenta niveles de LITIO - toxicidad.',
      '🟠 Aumenta niveles de FENITOÍNA.',
      '🟠 EMBARAZO 1er trimestre: EVITAR (categoría B).',
      '🟡 Sabor metálico común - no es alergia.',
      '🟡 Coloración marrón-rojiza de la orina (metabolito) - normal, no es hematuria.',
      '🟡 CIMETIDINA aumenta niveles metronidazol.',
      '🟡 En C. difficile: guías actuales prefieren VANCOMICINA VO o FIDAXOMICINA sobre metronidazol.',
    ],
  },

  modulos: {

    disulfiram: `
      <b>Reacción tipo Disulfiram con Alcohol:</b><br/>
      <b>MECANISMO:</b><br/>
      • Metronidazol inhibe la enzima ALDEHÍDO DESHIDROGENASA.<br/>
      • Acumulación de ACETALDEHÍDO (metabolito tóxico del alcohol).<br/>
      • Reacción intensa incluso con pequeñas cantidades de alcohol.<br/><br/>
      <b>PRESENTACIÓN:</b><br/>
      • Aparece a los 15-30 min de ingerir alcohol.<br/>
      • <b>Rubor intenso</b> (rostro, cuello, torso).<br/>
      • <b>Taquicardia severa</b>.<br/>
      • <b>Náuseas y vómitos intensos</b>.<br/>
      • <b>Cefalea pulsátil severa</b>.<br/>
      • Sudoración profusa.<br/>
      • Hipotensión.<br/>
      • Ansiedad, agitación.<br/>
      • Palpitaciones.<br/>
      • En casos graves: arritmias, colapso CV.<br/><br/>
      <b>DURACIÓN:</b> Varias horas.<br/><br/>
      <b>MANEJO:</b><br/>
      1. Soporte sintomático.<br/>
      2. Fluidos IV.<br/>
      3. Antieméticos (ondansetrón).<br/>
      4. Vigilancia hemodinámica.<br/>
      5. En casos graves: soporte cardiovascular.<br/><br/>
      <b>EDUCACIÓN AL PACIENTE:</b><br/>
      • <b>NO consumir alcohol durante el tratamiento</b>.<br/>
      • <b>NO consumir 48-72h después de la última dosis</b>.<br/>
      • Incluye: bebidas alcohólicas, jarabes con alcohol, algunos enjuagues bucales, algunas medicaciones con alcohol.<br/>
      • Evitar productos con propilenglicol (potencia efecto).
    `,

    cdifficile: `
      <b>Metronidazol en C. difficile - Actualización de Guías:</b><br/>
      <b>CAMBIO IMPORTANTE (IDSA 2018, ACG 2021):</b><br/>
      • Metronidazol <b>YA NO ES PRIMERA LÍNEA</b> en C. difficile.<br/>
      • Preferir <b>VANCOMICINA VO 125 mg c/6h × 10-14 días</b> o <b>FIDAXOMICINA VO 200 mg c/12h × 10 días</b>.<br/><br/>
      <b>CUÁNDO USAR METRONIDAZOL:</b><br/>
      • C. difficile leve-moderada NO complicada (alternativa cuando no hay vanco/fidaxo disponible).<br/>
      • <b>PRIMERA LÍNEA en C. difficile FULMINANTE con íleo/megacolon</b>: Metronidazol IV 500 mg c/8h + Vancomicina VO/enema 500 mg c/6h.<br/>
      • Situaciones económicas limitadas.<br/>
      • Alergia a vancomicina y fidaxomicina no disponible.<br/><br/>
      <b>DOSIS EN C. DIFFICILE:</b><br/>
      • VO: 500 mg c/8h × 10-14 días.<br/>
      • IV: 500 mg c/8h (solo si no se puede administrar VO - íleo).<br/>
      • IV ES MENOS EFECTIVO que VO para C. difficile (no alcanza concentración en colon).<br/><br/>
      <b>C. DIFFICILE FULMINANTE (Sepsis, íleo, megacolon):</b><br/>
      1. <b>Vancomicina 500 mg VO/SNG c/6h + enema Vancomicina 500 mg en 100 mL SF c/6h</b>.<br/>
      2. <b>METRONIDAZOL IV 500 mg c/8h</b> (adyuvante).<br/>
      3. Cirugía (colectomía) si megacolon tóxico refractario.<br/>
      4. Trasplante microbiota fecal en recurrencias.
    `,

    intraabdominal: `
      <b>Metronidazol en Infecciones Intraabdominales:</b><br/>
      <b>INDICACIONES:</b><br/>
      • Peritonitis secundaria (apendicitis perforada, diverticulitis, colecistitis complicada).<br/>
      • Absceso intraabdominal.<br/>
      • Infección post-cirugía abdominal.<br/>
      • Absceso hepático (piógeno o amebiano).<br/>
      • Colangitis ascendente.<br/><br/>
      <b>ESTRATEGIA COMBINADA (guías IDSA 2010):</b><br/>
      Metronidazol NUNCA en monoterapia para infecciones mixtas (no cubre gramneg aerobios).<br/><br/>
      <b>ESQUEMAS COMBINADOS:</b><br/>
      <b>Adquirida en comunidad, leve-moderada:</b><br/>
      • Metronidazol 500 mg IV c/8h + Ceftriaxona 2 g IV c/24h.<br/>
      • Alt: Metronidazol + Ciprofloxacino 400 mg IV c/12h.<br/><br/>
      <b>Adquirida en comunidad, severa (sepsis):</b><br/>
      • Piperacilina/Tazobactam 4.5 g IV c/8h (cubre anaerobios - metronidazol no necesario).<br/>
      • Meropenem 1 g IV c/8h (cubre anaerobios - metronidazol no necesario).<br/><br/>
      <b>Nosocomial:</b><br/>
      • Piperacilina/Tazobactam o Meropenem (cubren anaerobios).<br/>
      • Metronidazol NO añadir si se usan estos.<br/><br/>
      <b>DURACIÓN:</b><br/>
      • 4-7 días si buen control del foco quirúrgico.<br/>
      • 7-14 días si peritonitis complicada.<br/>
      • Transición a VO cuando tolere.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>EDUCAR al paciente</b>: NO ALCOHOL durante tratamiento y 48-72h después (reacción disulfiram).',
      'Bolsa premezclada 500 mg/100 mL - NO requiere reconstitución.',
      'Etiquetar bolsa: Metronidazol 500 mg, hora inicio, velocidad, fecha.',
      'Infusión IV en 20-60 min - NO acelerar.',
      'Bomba de infusión recomendada.',
      'Acceso IV permeable - vigilar flebitis leve.',
      'Vigilar signos de neuropatía periférica en uso > 10 días (parestesias).',
      'Vigilar convulsiones (raras) especialmente si predisposición.',
      'Informar al paciente sobre coloración marrón-rojiza de la orina (NORMAL).',
      'En anticoagulados con warfarina: control frecuente de INR.',
      'En pacientes con litio: control de niveles séricos.',
      'En embarazo 1er trimestre: consulta obligatoria antes de iniciar.',
      'Transición temprana a VO cuando paciente tolera dieta.',
      'Educar sobre productos con alcohol oculto (jarabes, enjuagues, algunos medicamentos).',
      'Documentar: dosis, hora, respuesta clínica, adherencia a restricción alcohol.',
    ],

    efectosAdversos: [
      '🔴 Reacción tipo disulfiram con alcohol',
      '🔴 Convulsiones (uso prolongado o dosis altas)',
      '🔴 Encefalopatía (rara)',
      '🟠 Neuropatía periférica (uso prolongado - reversible)',
      '🟠 Ataxia cerebelosa',
      '🟠 Reacción alérgica (rara)',
      '🟠 Sd Stevens-Johnson / NET (muy raro)',
      '🟡 Sabor metálico (muy común)',
      '🟡 Coloración marrón-rojiza de orina (metabolito - normal)',
      '🟡 Náuseas, vómitos',
      '🟡 Anorexia',
      '🟡 Cefalea',
      '🟡 Mareos',
      '🟡 Sequedad de boca',
      '🟡 Glositis, estomatitis',
      '🟡 Flebitis en sitio IV',
      '🟡 Rash cutáneo, prurito',
      '🟡 Candidiasis oral/vaginal (sobreinfección)',
      '🟡 Leucopenia leve (raro)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a metronidazol u otros nitroimidazoles.',
      'Primer trimestre de embarazo (categoría B - restricción).',
      'Discrasia sanguínea activa (leucopenia severa).',
      'Enfermedad activa del SNC (relativa - epilepsia).',
      'Consumo actual de alcohol (contraindicación relativa).',
      'Precaución en: hepatopatía severa (Child-Pugh C), lactancia (interrumpir 12-24h post-dosis para amamantar).',
    ],

    fotosensibilidad: 'Ligeramente fotosensible. Conservar bolsa en embalaje exterior para proteger de luz directa intensa pero sin requerimientos especiales de fotoprotección durante administración.',

    estabilidad: {
      'Bolsa sin abrir':            'Temperatura ambiente (15-25°C) hasta vencimiento',
      'Post-apertura':               'Usar inmediatamente (microbiológicamente)',
      'Aspecto':                     'Transparente, ligeramente amarilla — desechar si turbidez',
      'Temperatura':                 'NO congelar · 15-25°C · Proteger luz',
    },

    presentaciones: [
      'Metronidazol 500 mg/100 mL bolsa premezclada IV (Flagyl® IV, genéricos)',
      'Metronidazol 250 mg comprimidos',
      'Metronidazol 500 mg comprimidos',
      'Metronidazol 250 mg/5 mL suspensión oral',
      'Metronidazol 500 mg óvulos vaginales',
      'Metronidazol gel 0.75%, 1% (rosácea)',
      'Combinaciones tópicas para vaginosis, acné',
      'Flagyl® (marca clásica), Metrogyl, Nidazol',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Infección severa adulto',              dosis: '<b>500 mg IV c/8h</b>',                     via: 'IV' },
      { indicacion: 'Dosis carga (infección grave)',        dosis: '15 mg/kg IV inicial',                       via: 'IV' },
      { indicacion: 'Mantenimiento tras carga',              dosis: '7.5 mg/kg IV c/6h (máx 4 g/día)',           via: 'IV' },
      { indicacion: 'C. difficile leve-moderada (alt)',      dosis: '<b>500 mg VO c/8h × 10-14 días</b>',        via: 'VO' },
      { indicacion: 'C. difficile fulminante (adyuvante)',   dosis: '500 mg IV c/8h + Vanco VO 500 mg c/6h',    via: 'IV' },
      { indicacion: 'Profilaxis colorrectal',                dosis: '500 mg IV pre-incisión + cefazolina',       via: 'IV' },
      { indicacion: 'Giardiasis',                             dosis: '250 mg VO c/8h × 5-7 días',                 via: 'VO' },
      { indicacion: 'Amebiasis intestinal',                   dosis: '500-750 mg VO c/8h × 5-10 días',            via: 'VO' },
      { indicacion: 'Vaginosis bacteriana',                   dosis: '500 mg VO c/12h × 7 días o dosis única 2 g',via: 'VO' },
      { indicacion: 'H. pylori (triple terapia)',             dosis: '500 mg VO c/12h × 10-14 días',              via: 'VO' },
      { indicacion: 'Pediátrico',                             dosis: '30 mg/kg/día IV c/8h (máx 4 g)',            via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). <b>EVITAR EN 1er TRIMESTRE</b> - datos limitados sobre teratogenicidad (informes contradictorios). En 2º-3º trimestre: usar si beneficio > riesgo. Lactancia: metronidazol pasa a leche - interrumpir lactancia 12-24h post-dosis.',

    pediatria: 'Neonatos: 15 mg/kg dosis carga + 7.5 mg/kg c/12h. Niños: 30 mg/kg/día IV c/8h (máximo 4 g/día). En giardiasis pediátrica: 15 mg/kg/día VO c/8h × 5-7 días.',

    adultoMayor: 'Sin ajuste específico por edad. Mayor riesgo de neuropatía y efectos SNC. Vigilancia intensiva.',

    insufRenal: 'Sin ajuste rutinario (aclaramiento renal < 20% del total). En IRC severa (CrCl < 10): considerar reducción 50% en uso prolongado.',

    insufHepatica: 'En cirrosis severa (Child-Pugh C): REDUCIR DOSIS 50%. Vigilar aumento de niveles y toxicidad. Vida media prolongada.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Flagyl® IV 500 mg/100 mL. Agencia Española de Medicamentos.',
      'CIMA AEMPS. Ficha Técnica Metronidazol Normon 500 mg/100 mL. AEMPS.',
      'FDA DailyMed. Metronidazole Injection. U.S. National Library of Medicine.',
      'IDSA/SHEA Guidelines. Clostridioides difficile Infection. CID. 2018 (updated 2021).',
      'ACG Clinical Guidelines. Clostridioides difficile Infection. Am J Gastroenterol. 2021.',
      'IDSA/SIS Guidelines. Complicated Intra-abdominal Infection. CID. 2010.',
      'Cochrane Review. Metronidazole for the treatment of Clostridium difficile infection. 2017.',
      'Pediamécum AEP. Metronidazol. Asociación Española de Pediatría.',
    ],
  },

});
