/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/aciclovir.js
   Fuentes: CIMA AEMPS (Aciclovir Accord, Noridem, Sala,
   Altan, Tedec), IDSA Encefalitis Herpética Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'aciclovir',
  nombre:         'Aciclovir (IV)',
  nombreGenerico: 'Aciclovir',
  categoria:      'otros',
  tags:           ['antiviral', 'herpes', 'encefalitis herpética', 'varicela zóster', 'herpes neonatal', 'nefrotoxicidad'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antiviral con pH muy alcalino (~11) tras reconstitución - NUNCA administrar vía oral ni en bolo rápido. Riesgo de NEFROTOXICIDAD por cristalización tubular, especialmente en deshidratación o infusión rápida. Errores de dilución reportados - seguir estrictamente el procedimiento.',

  nivel1: {

    puntosClave: [
      'Análogo de nucleósido (guanosina) — inhibe selectivamente la <b>ADN polimerasa viral</b> tras ser fosforilado por la timidina-quinasa VIRAL (mecanismo selectivo, mínima toxicidad en células no infectadas).',
      '<b>INDICACIÓN CRÍTICA: ENCEFALITIS HERPÉTICA</b> — iniciar EMPÍRICAMENTE ante sospecha clínica, sin esperar confirmación diagnóstica (PCR en LCR) — el retraso empeora significativamente el pronóstico neurológico.',
      'Solución reconstituida <b>pH ~11 (muy alcalina)</b> — <b>NUNCA administrar por vía oral</b> ni en bolo IV rápido.',
      '<b>INFUNDIR EN MÍNIMO 1 HORA</b> — infusión rápida causa cristalización tubular renal y NEFROTOXICIDAD AGUDA.',
      '<b>HIDRATACIÓN ADECUADA OBLIGATORIA</b> antes y durante el tratamiento para prevenir nefrotoxicidad, especialmente en dosis altas (encefalitis).',
    ],

    resumenRapido: 'Antiviral análogo de guanosina activo frente a virus herpes simple (VHS-1, VHS-2) y virus varicela-zóster (VVZ), con menor actividad frente a citomegalovirus y virus Epstein-Barr. Mecanismo altamente selectivo: requiere fosforilación inicial por la timidina-quinasa VIRAL (las células no infectadas la fosforilan muy poco), tras lo cual inhibe competitivamente la ADN polimerasa viral y se incorpora al ADN viral terminando su elongación - esto explica su excelente perfil de seguridad relativo. Inicio de acción: horas. Indicado en: encefalitis herpética (emergencia neurológica - tratamiento empírico inmediato), herpes simple mucocutáneo severo/diseminado, herpes neonatal, varicela-zóster en inmunocomprometidos o formas graves/diseminadas, herpes zóster oftálmico, profilaxis en trasplantados de alto riesgo.',

    objetivoTerapeutico: 'Tratamiento urgente de encefalitis herpética (reducir mortalidad/secuelas neurológicas) · Control de infecciones herpéticas graves/diseminadas · Tratamiento de varicela-zóster complicada',

    preparacion: {
      'Presentación':             '<b>Aciclovir 250 mg y 500 mg polvo para solución para perfusión</b>',
      'Reconstitución':           'Con agua para inyección o SF 0.9% - 250 mg en 10 mL · 500 mg en 20 mL (según indicación del fabricante)',
      '⚠️ pH ALCALINO':           '<b>Solución reconstituida pH ~11 - NUNCA administrar por vía oral</b>',
      'Dilución para perfusión':  '<b>Diluir hasta concentración MÁXIMA de 0.5% (250 mg/50 mL)</b>',
      'Vía':                      'IV exclusiva en perfusión - NUNCA bolo IV directo, NUNCA IM/SC (muy irritante)',
      '⏱️ VELOCIDAD DE INFUSIÓN': '<b>Mínimo 1 HORA</b> mediante bomba de infusión de ritmo controlado - NUNCA más rápido',
      '⏱️ DOSIS herpes simple/VVZ (función renal normal)':'<b>5 mg/kg IV c/8h</b>',
      '⏱️ DOSIS ENCEFALITIS HERPÉTICA':'<b>10 mg/kg IV c/8h</b>',
      '⏱️ DOSIS inmunocomprometidos con VVZ':'<b>10 mg/kg IV c/8h</b>',
      '⏱️ DURACIÓN encefalitis herpética':'<b>14-21 días</b>',
      '⏱️ DURACIÓN herpes simple no complicado':'5 días (según gravedad y respuesta)',
      '⏱️ DURACIÓN herpes neonatal SNC/diseminado':'21 días',
      '⏱️ DURACIÓN herpes neonatal piel-ojo-boca':'14 días',
      'Bomba':                    'OBLIGATORIA - bomba de infusión de ritmo controlado',
      '🧊 ESTABILIDAD':           'Verificar ficha específica del fabricante - generalmente usar dentro de pocas horas tras dilución',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez o precipitación',
    },

    vigilancia: {
      antes: [
        '<b>Ante sospecha de ENCEFALITIS HERPÉTICA: iniciar tratamiento EMPÍRICO INMEDIATO</b> sin esperar confirmación por PCR - el retraso empeora el pronóstico.',
        'Función renal basal (creatinina, urea) - AJUSTE OBLIGATORIO según función renal.',
        '<b>Asegurar HIDRATACIÓN ADECUADA</b> antes de iniciar, especialmente en dosis altas.',
        'Revisar uso de otros fármacos nefrotóxicos concomitantes.',
        'Confirmar acceso IV permeable de buen calibre.',
        'Doble verificación: dosis por peso, dilución (máx 0.5%), velocidad de infusión.',
      ],
      durante: [
        '<b>Infusión en MÍNIMO 1 HORA</b> mediante bomba de ritmo controlado - NUNCA acelerar.',
        'Vigilar sitio IV - flebitis frecuente (pH alcalino irritante).',
        'Vigilar signos de extravasación - puede causar irritación tisular significativa.',
        'Observar reacciones inmediatas: rash, prurito.',
      ],
      despues: [
        '<b>Función renal diaria</b> (creatinina, urea, diuresis) durante todo el tratamiento, especialmente en dosis altas o factores de riesgo.',
        'Mantener HIDRATACIÓN adecuada durante todo el tratamiento.',
        'Vigilar efectos neurológicos: confusión, temblor, alucinaciones, letargia - más frecuentes en ancianos e insuficiencia renal.',
        'En encefalitis herpética: vigilancia neurológica seriada, considerar PCR de control en LCR según evolución.',
        'Vigilar flebitis en sitio IV - rotar el acceso si es necesario.',
        'Documentar: dosis, hora, función renal seriada, respuesta clínica, eventos.',
      ],
      suspender: [
        'Deterioro significativo de función renal atribuible.',
        'Efectos neurológicos severos (confusión marcada, convulsiones).',
        'Reacción alérgica/anafilaxia.',
        'Completada la duración del tratamiento.',
      ],
    },

    incompatibilidades: [
      'No debe mezclarse con otros medicamentos o hemoderivados en la misma solución.',
      'Se han notificado ERRORES DE DILUCIÓN con aciclovir - seguir estrictamente el procedimiento de reconstitución/dilución específico del fabricante.',
      'Preferir línea IV independiente.',
      'Lavar línea con SF antes y después si se comparte vía con otros medicamentos.',
    ],

    alertasSeguridad: [
      '🔴 <b>NEFROTOXICIDAD por cristalización tubular</b> - especialmente con infusión rápida, deshidratación, o dosis altas sin ajuste renal.',
      '🔴 <b>pH ~11 tras reconstitución - NUNCA administrar por vía oral</b>.',
      '🔴 <b>NUNCA bolo IV rápido</b> - infundir en mínimo 1 hora.',
      '🔴 <b>ERRORES DE DILUCIÓN reportados</b> - seguir estrictamente el protocolo de preparación.',
      '🟠 Efectos NEUROLÓGICOS (confusión, temblor, alucinaciones) más frecuentes en ANCIANOS e INSUFICIENCIA RENAL - vigilancia estrecha.',
      '🟠 AJUSTE OBLIGATORIO de dosis en insuficiencia renal.',
      '🟠 Cautela con OTROS FÁRMACOS NEFROTÓXICOS concomitantes - vigilar función renal si es inevitable la combinación.',
      '🟠 Tratamientos prolongados/repetidos en inmunodeprimidos graves pueden seleccionar cepas con sensibilidad reducida.',
      '🟡 Contiene sodio - considerar en pacientes con restricción estricta (aporta hasta 2.8% de la ingesta máxima diaria OMS por vial de 20 mL).',
      '🟡 Probenecid y cimetidina AUMENTAN la vida media/niveles de aciclovir (comparten mecanismo de eliminación tubular renal).',
      '🟡 Muy irritante - NUNCA administrar IM ni SC.',
    ],
  },

  modulos: {

    encefalitisHerpetica: `
      <b>Aciclovir en Encefalitis Herpética - EMERGENCIA NEUROLÓGICA:</b><br/>
      <b>POR QUÉ ES UNA URGENCIA:</b><br/>
      • La encefalitis herpética (predominantemente por VHS-1) es la causa más frecuente de encefalitis viral esporádica grave.<br/>
      • Sin tratamiento: mortalidad > 70%.<br/>
      • Con tratamiento PRECOZ: mortalidad reducida a ~20%, con mejores secuelas neurológicas.<br/>
      • <b>CADA HORA DE RETRASO empeora el pronóstico</b> - relación directa entre tiempo hasta inicio de aciclovir y desenlace neurológico.<br/><br/>
      <b>SOSPECHA CLÍNICA (iniciar tratamiento EMPÍRICO INMEDIATO):</b><br/>
      • Fiebre + alteración del nivel de consciencia + focalidad neurológica (especialmente temporal: afasia, alucinaciones olfativas, convulsiones).<br/>
      • Cualquier encefalitis de causa no aclarada inmediatamente.<br/>
      • <b>NO ESPERAR confirmación por PCR de VHS en LCR</b> para iniciar tratamiento - la PCR puede tardar horas/días y puede ser falsamente negativa en las primeras 24-72h.<br/><br/>
      <b>PROTOCOLO:</b><br/>
      1. <b>Aciclovir 10 mg/kg IV c/8h</b> (ajustar según función renal).<br/>
      2. <b>Infundir en mínimo 1 hora</b>, con hidratación adecuada simultánea.<br/>
      3. <b>Duración: 14-21 días</b> (más prolongado que otras indicaciones - erradicación completa del virus del SNC).<br/>
      4. Realizar punción lumbar con PCR de VHS tan pronto sea seguro (considerar TC/RM previa si hay signos de hipertensión intracraneal).<br/>
      5. Si PCR negativa pero alta sospecha clínica: <b>CONTINUAR tratamiento</b> y repetir PCR a las 72h (falsos negativos tempranos son posibles).<br/>
      6. Si PCR confirmada negativa en repetición Y diagnóstico alternativo identificado: considerar suspender.<br/><br/>
      <b>VIGILANCIA DURANTE TRATAMIENTO:</b><br/>
      • Función renal DIARIA (dosis altas + duración prolongada = mayor riesgo nefrotóxico).<br/>
      • Vigilancia neurológica seriada (GCS, focalidad).<br/>
      • Considerar RM cerebral para evaluar extensión/evolución de las lesiones temporales características.<br/>
      • Manejo de complicaciones: edema cerebral, convulsiones (anticomiciales si necesario), PIC elevada.
    `,

    nefrotoxicidad: `
      <b>Prevención de Nefrotoxicidad por Aciclovir:</b><br/>
      <b>MECANISMO:</b><br/>
      • Aciclovir tiene baja solubilidad en orina.<br/>
      • Con concentraciones altas (infusión rápida, deshidratación, dosis altas) puede CRISTALIZAR en los túbulos renales, causando obstrucción tubular y lesión renal aguda.<br/><br/>
      <b>FACTORES DE RIESGO:</b><br/>
      • Infusión RÁPIDA (< 1 hora).<br/>
      • Deshidratación.<br/>
      • Insuficiencia renal preexistente sin ajuste de dosis.<br/>
      • Dosis altas (encefalitis herpética: 10 mg/kg c/8h).<br/>
      • Uso concomitante de otros nefrotóxicos.<br/>
      • Edad avanzada.<br/><br/>
      <b>MEDIDAS PREVENTIVAS:</b><br/>
      1. <b>Infundir SIEMPRE en mínimo 1 hora</b> mediante bomba de ritmo controlado.<br/>
      2. <b>Asegurar HIDRATACIÓN ADECUADA</b> antes y durante el tratamiento (favorece la dilución urinaria del fármaco).<br/>
      3. <b>Ajustar dosis según función renal</b> desde el inicio.<br/>
      4. Monitorizar función renal DIARIAMENTE, especialmente en dosis altas o factores de riesgo.<br/>
      5. Evitar combinación innecesaria con otros nefrotóxicos (AINEs, aminoglucósidos, contraste yodado) cuando sea posible.<br/><br/>
      <b>SI APARECE NEFROTOXICIDAD:</b><br/>
      • Generalmente REVERSIBLE al ajustar dosis, mejorar hidratación, o suspender temporalmente.<br/>
      • En casos severos: puede requerir hemodiálisis (aciclovir es dializable).<br/>
      • Reevaluar la dosis y velocidad de infusión antes de reiniciar.
    `,

    herpesNeonatal: `
      <b>Aciclovir en Herpes Neonatal:</b><br/>
      <b>CONTEXTO:</b><br/>
      • Infección grave adquirida perinatalmente (contacto con secreciones maternas infectadas durante el parto, principalmente).<br/>
      • Tres formas de presentación con diferente gravedad y duración de tratamiento.<br/><br/>
      <b>DOSIS:</b><br/>
      • <b>10 mg/kg IV c/8h</b> (neonatos, ajustada según edad gestacional/postnatal y función renal).<br/><br/>
      <b>DURACIÓN SEGÚN FORMA CLÍNICA:</b><br/>
      • <b>Enfermedad limitada a piel-ojo-boca (SEM)</b>: <b>14 días</b>.<br/>
      • <b>Enfermedad diseminada o del SNC</b>: <b>21 días</b> - requiere tratamiento más prolongado por mayor dificultad de erradicación viral y mayor riesgo de secuelas/recurrencia.<br/><br/>
      <b>CONSIDERACIONES ESPECIALES:</b><br/>
      • Ajuste de dosis según función renal neonatal (inmadurez renal fisiológica).<br/>
      • Vigilancia de neutropenia (efecto adverso descrito, especialmente en tratamientos prolongados) - hemograma seriado.<br/>
      • En enfermedad del SNC: considerar PCR de control en LCR al finalizar el tratamiento antes de suspender (algunos protocolos).<br/>
      • Seguimiento neurológico a largo plazo en casos de afectación del SNC.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      '<b>Ante sospecha de encefalitis herpética: preparar y administrar SIN DEMORA</b>.',
      'Reconstituir según instrucciones específicas del fabricante - seguir el procedimiento estrictamente (errores de dilución reportados).',
      '<b>NUNCA administrar la solución reconstituida por vía oral</b> (pH ~11).',
      'Diluir a concentración máxima de 0.5% (250 mg/50 mL) para perfusión.',
      'Etiquetar: Aciclovir [mg/kg], dosis, hora, indicación.',
      '<b>Infundir en bomba de ritmo controlado, MÍNIMO 1 HORA</b> - nunca bolo rápido.',
      '<b>Asegurar hidratación adecuada</b> del paciente antes y durante el tratamiento.',
      'NUNCA administrar IM ni SC (muy irritante).',
      'Vigilar sitio IV - flebitis frecuente, considerar vía central si tratamiento prolongado.',
      '<b>Función renal DIARIA</b> durante el tratamiento.',
      'Vigilar efectos neurológicos (confusión, temblor) especialmente en ancianos/IRC.',
      'En encefalitis herpética: coordinar PCR de LCR, pero NO retrasar el tratamiento por esperar el resultado.',
      'Documentar: dosis, hora, función renal, respuesta clínica, eventos neurológicos.',
    ],

    efectosAdversos: [
      '🔴 Nefrotoxicidad aguda (cristalización tubular)',
      '🔴 Efectos neurológicos severos (confusión, convulsiones) - más en ancianos/IRC',
      '🔴 Anafilaxia (rara)',
      '🟠 Flebitis en sitio IV (frecuente, pH alcalino)',
      '🟠 Elevación transitoria de creatinina/urea',
      '🟠 Neutropenia, trombocitopenia (uso prolongado)',
      '🟡 Náuseas, vómitos',
      '🟡 Cefalea',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Rash cutáneo',
      '🟡 Fatiga',
      '🟡 Irritación local si extravasación',
    ],

    contraindicaciones: [
      'Hipersensibilidad a aciclovir, valaciclovir, ganciclovir o excipientes.',
      'Administración por vía oral de la solución reconstituida (pH incompatible).',
      'Administración IM o SC (muy irritante para tejidos).',
      'Precaución en: insuficiencia renal (ajuste de dosis obligatorio), deshidratación (corregir antes), edad avanzada (mayor riesgo neurológico/renal).',
    ],

    fotosensibilidad: 'No relevante específicamente para el aciclovir IV, aunque se recomienda protección general de luz directa intensa según buenas prácticas de conservación.',

    estabilidad: {
      'Vial sin reconstituir':       'Temperatura ambiente hasta vencimiento (verificar packaging)',
      'Reconstituido/diluido':       'Verificar ficha específica del fabricante - usar preferentemente dentro de pocas horas',
      'Aspecto':                      'Transparente, incolora — desechar si turbidez o precipitación',
      'Temperatura':                  'NO congelar la solución reconstituida (puede precipitar)',
    },

    presentaciones: [
      'Aciclovir Accord 250 mg polvo para solución inyectable/perfusión',
      'Aciclovir Noridem 250 mg y 500 mg',
      'Aciclovir Sala 250 mg',
      'Aciclovir Altan 250 mg',
      'Aciclovir Tedec 25 mg/mL solución para perfusión',
      'Aciclovir VO: comprimidos 200, 400, 800 mg · suspensión oral',
      'Aciclovir tópico: crema, pomada oftálmica',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Herpes simple/VVZ (función renal normal)',dosis:'<b>5 mg/kg IV c/8h</b>',                   via: 'IV' },
      { indicacion: 'Encefalitis herpética',                   dosis: '<b>10 mg/kg IV c/8h × 14-21 días</b>',      via: 'IV' },
      { indicacion: 'Inmunocomprometidos con VVZ',             dosis: '10 mg/kg IV c/8h',                          via: 'IV' },
      { indicacion: 'Herpes neonatal (piel-ojo-boca)',         dosis: '10 mg/kg IV c/8h × 14 días',                via: 'IV' },
      { indicacion: 'Herpes neonatal (SNC/diseminado)',        dosis: '10 mg/kg IV c/8h × 21 días',                via: 'IV' },
      { indicacion: 'Pediátrico > 3 meses (herpes/VVZ)',       dosis: '250-500 mg/m² c/8h según indicación',       via: 'IV' },
      { indicacion: 'Duración herpes simple no complicado',   dosis: '5 días (según respuesta)',                   via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Amplia experiencia de uso considerada relativamente segura cuando está indicado (infección herpética grave, diseminada, encefalitis, o varicela materna complicada). Compatible con lactancia (concentraciones en leche materna bajas).',

    pediatria: 'Niños > 3 meses: 250-500 mg/m² c/8h según indicación (VVZ inmunocomprometidos/encefalitis: 500 mg/m²; herpes simple no complicado: 250 mg/m²). Neonatos (herpes simple): 10 mg/kg c/8h - ajustar según edad gestacional/postnatal.',

    adultoMayor: '<b>Mayor riesgo de efectos neurológicos y nefrotoxicidad</b> - considerar ajuste de dosis por función renal disminuida (frecuente en este grupo) y vigilancia estrecha de efectos adversos neurológicos.',

    insufRenal: '<b>AJUSTE OBLIGATORIO según CrCl</b>: reducir dosis y/o ampliar intervalo según grado de insuficiencia renal (consultar tabla específica de ajuste según CrCl exacto). En diálisis: administrar tras la sesión.',

    insufHepatica: 'Sin ajuste específico establecido - eliminación principalmente renal. Vigilancia clínica estándar.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Aciclovir Accord, Noridem, Sala, Altan, Tedec. Agencia Española de Medicamentos.',
      'FDA DailyMed. Acyclovir Injection. U.S. National Library of Medicine.',
      'IDSA Guidelines. Management of Encephalitis. CID. 2008 (vigente con actualizaciones).',
      'Whitley RJ. Herpes Simplex Encephalitis - Adolescents and Adults. Antiviral Res. 2006.',
      'AAP Red Book. Neonatal Herpes Simplex Virus Infections. 2021.',
      'Pediamécum AEP. Aciclovir. Asociación Española de Pediatría.',
      'Kimberlin DW, et al. Neonatal HSV Disease - Treatment Duration. NEJM. 2011.',
      'Sanford Guide to Antimicrobial Therapy. 2024.',
    ],
  },

});
