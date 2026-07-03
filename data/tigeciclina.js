/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/tigeciclina.js
   Fuentes: CIMA AEMPS (Tygacil), FDA DailyMed,
   FDA Black Box Warning (mortalidad), SEIMC Guía Antibióticos 2023
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'tigeciclina',
  nombre:         'Tigeciclina',
  nombreGenerico: 'Tigecycline',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'glicilciclina', 'multirresistencia', 'MRSA', 'BLEE', 'abdominal', 'piel y partes blandas', 'último recurso'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'La FDA incluye una advertencia de recuadro negro (black box warning): aumento de la mortalidad global comparado con otros antibióticos en ensayos clínicos, especialmente en neumonía asociada a ventilación mecánica. Reservar para cuando no exista alternativa adecuada. NO cubre Pseudomonas ni Proteus — verificar el espectro antes de usar como monoterapia empírica.',

  nivel1: {

    puntosClave: [
      '<b>Advertencia FDA de mortalidad aumentada</b> (black box) frente a comparadores — usar solo cuando no hay alternativa adecuada.',
      '<b>NO cubre Pseudomonas aeruginosa ni Proteus</b> — no usar como monoterapia empírica si se sospechan estos gérmenes.',
      'Espectro amplio: MRSA, enterococo resistente a vancomicina (VRE), BLEE, anaerobios — <b>infecciones complicadas intraabdominales y de piel/partes blandas</b>.',
      '<b>Dosis de carga 100 mg IV → mantenimiento 50 mg IV c/12 h</b>, infusión de 30-60 min.',
      'Náuseas y vómitos <b>muy frecuentes</b> (hasta 30%) — considerar antiemético profiláctico.',
    ],

    resumenRapido: 'Antibiótico glicilciclina, derivado estructural de las tetraciclinas con espectro ampliado, activo frente a gram positivos multirresistentes (MRSA, enterococo resistente a vancomicina), gram negativos productores de BLEE y anaerobios. Carece de actividad clínicamente útil frente a Pseudomonas aeruginosa y Proteus spp. Indicado en infecciones complicadas intraabdominales y de piel/partes blandas cuando no hay alternativa de menor riesgo, dado que los ensayos clínicos mostraron un exceso de mortalidad frente a comparadores, motivo de la advertencia de recuadro negro de la FDA.',

    objetivoTerapeutico: 'Tratamiento de infecciones complicadas intraabdominales y de piel/partes blandas por multirresistentes · Cobertura de MRSA y enterococo resistente a vancomicina · Alternativa cuando no existe opción de menor riesgo tras valoración de infectología',

    preparacion: {
      'Presentación':          '<b>Tygacil® 50 mg — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con 5.3 mL de SF 0.9% o SG 5% → 10 mg/mL',
      'Diluyente':             '<b>SF 0.9% o SG 5%</b>',
      'Dilución final':        'Diluir en 100 mL de SF o SG 5%',
      'Dosis de carga':        '<b>100 mg IV (dosis única inicial)</b>',
      'Dosis de mantenimiento': '<b>50 mg IV c/12 h</b>',
      '⏱️ Tiempo de infusión':  '<b>30-60 min por dosis</b>',
      'Vía':                   'IV intermitente',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente / 48 h refrigerado tras la dilución final</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar que NO se sospecha Pseudomonas o Proteus como causa de la infección (sin cobertura eficaz).',
        'Función hepática basal — ajuste de dosis en IH grave (Child-Pugh C).',
        'Valorar antiemético profiláctico dada la alta frecuencia de náuseas/vómitos.',
        'Revisar alergia a tetraciclinas (reacción cruzada posible).',
        'Confirmar que no existe alternativa de menor riesgo tras valoración de infectología.',
      ],
      durante: [
        'Infundir en 30-60 min; vigilar náuseas/vómitos durante la administración.',
        'Vigilar signos de pancreatitis aguda (dolor abdominal intenso, amilasa/lipasa) — descrita con tigeciclina.',
        'Constantes vitales según protocolo de infección grave.',
        'Vigilar reacción alérgica (rash, prurito).',
      ],
      despues: [
        'Función hepática periódica en tratamientos prolongados.',
        'Vigilar diarrea — descartar C. difficile.',
        'Reevaluar mortalidad/beneficio clínico y necesidad de continuar según evolución.',
        'Documentar tolerancia, dosis y respuesta clínica (fiebre, PCR, leucocitos).',
      ],
      suspender: [
        'Signos de pancreatitis aguda.',
        'Reacción alérgica grave/anafilaxia.',
        'Deterioro clínico sin respuesta — reevaluar cobertura antibiótica completa (recordar que no cubre Pseudomonas).',
        'Disponibilidad de alternativa de menor riesgo tras antibiograma.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros antibióticos en la misma solución.',
      'Incompatible con anfotericina B liposomal y con diazepam en la misma vía.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
      'Lavar la vía antes y después si se comparte el acceso.',
    ],

    alertasSeguridad: [
      '🔴 ADVERTENCIA FDA: AUMENTO DE MORTALIDAD frente a comparadores — reservar para cuando no hay alternativa adecuada.',
      '🔴 NO CUBRE Pseudomonas ni Proteus — verificar el espectro antes de usar como monoterapia empírica.',
      '🟠 Náuseas/vómitos muy frecuentes (hasta 30%) — considerar profilaxis antiemética.',
      '🟠 Riesgo de pancreatitis aguda — vigilar dolor abdominal intenso.',
      '🟡 Reacción cruzada posible con alergia a tetraciclinas.',
      '🟡 Ajuste de dosis en insuficiencia hepática grave (Child-Pugh C).',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar la indicación con el equipo médico — verificar que no se sospecha Pseudomonas ni Proteus.',
      'Reconstituir con 5.3 mL de SF/SG 5% y diluir en 100 mL para la infusión final.',
      'Administrar la dosis de carga (100 mg) en la primera dosis; las siguientes son de 50 mg c/12 h.',
      'Infundir en 30-60 min; valorar antiemético profiláctico por la alta frecuencia de náuseas/vómitos.',
      'Vigilar dolor abdominal intenso — descartar pancreatitis si aparece.',
      'Vigilar diarrea prolongada — posible C. difficile.',
      'Función hepática periódica en tratamientos largos.',
      'Reevaluar diariamente la evolución clínica y la necesidad de mantener el tratamiento.',
      'Documentar dosis, tolerancia y respuesta clínica en cada turno.',
    ],

    efectosAdversos: [
      '🔴 Aumento de mortalidad global (advertencia FDA en ensayos clínicos)',
      '🟠 Náuseas y vómitos (muy frecuentes, hasta 30%)',
      '🟠 Pancreatitis aguda (descrita, poco frecuente pero relevante)',
      '🟠 Elevación de transaminasas',
      '🟡 Diarrea',
      '🟡 Flebitis en el punto de infusión',
      '🟡 Fotosensibilidad (efecto de clase de tetraciclinas)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a tigeciclina o tetraciclinas.',
      'Embarazo (categoría D — afecta el desarrollo dental y óseo fetal, como las tetraciclinas).',
      'Niños <8 años (tinción dental permanente, como las tetraciclinas).',
      'Sospecha o confirmación de infección por Pseudomonas o Proteus sin cobertura adicional.',
      'Disponibilidad de alternativa de menor riesgo (no es de primera línea).',
    ],

    fotosensibilidad: 'Posible (efecto de clase de las tetraciclinas). Recomendar protección solar y evitar exposición solar prolongada durante el tratamiento.',

    estabilidad: {
      'Vial sin reconstituir':  'Refrigerado 2-8°C hasta vencimiento',
      'Reconstituido':          'Usar dentro de las horas indicadas por ficha técnica',
      'Diluido en SF/SG 5%':   '<b>24 h a temperatura ambiente / 48 h refrigerado (2-8°C)</b>',
      'Aspecto':                'Polvo/solución de color amarillo-naranja — normal (color propio del fármaco)',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Reconstituir y diluir siguiendo la ficha técnica; usar dentro del tiempo indicado.',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: '24 h a temperatura ambiente o 48 h refrigerado tras la dilución final.',
      notas:             'El color amarillo-naranja es característico del fármaco. Incompatible con anfotericina B liposomal y diazepam en la misma vía.',
    },

    presentaciones: [
      'Tygacil® 50 mg — vial polvo liofilizado IV',
      'Tigeciclina genérica (varios fabricantes) — vial 50 mg',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dosis de carga (inicial)',        dosis: '<b>100 mg IV dosis única</b>',                   via: 'IV' },
      { indicacion: 'Mantenimiento',                     dosis: '<b>50 mg IV c/12 h</b>',                          via: 'IV' },
      { indicacion: 'IH grave (Child-Pugh C)',           dosis: 'Carga 100 mg → mantenimiento 25 mg IV c/12 h',   via: 'IV' },
      { indicacion: 'Insuficiencia renal',               dosis: 'Sin ajuste necesario (eliminación biliar/fecal predominante)', via: 'IV' },
    ],

    embarazo: 'Categoría D (FDA). Efecto de clase de las tetraciclinas sobre el desarrollo dental y óseo fetal (tinción dental permanente, inhibición del crecimiento óseo). Contraindicado salvo ausencia absoluta de alternativa en infección con riesgo vital, tras valoración de infectología.',

    pediatria: 'Contraindicado en menores de 8 años por el riesgo de tinción dental permanente (efecto de clase de las tetraciclinas). Uso excepcional en adolescentes >8 años bajo supervisión de infectología pediátrica cuando no hay alternativa.',

    adultoMayor: 'Sin ajuste específico por edad, pero mayor riesgo de deshidratación por náuseas/vómitos frecuentes — vigilar el estado hidroelectrolítico. Función hepática basal recomendada.',

    insufRenal: 'Sin ajuste de dosis necesario — la eliminación es predominantemente biliar/fecal, no renal. Puede usarse sin modificación en insuficiencia renal, incluida la grave.',

    insufHepatica: '<b>Ajuste obligatorio en IH grave (Child-Pugh C)</b>: dosis de carga 100 mg → mantenimiento reducido a 25 mg IV c/12 h. En IH leve-moderada (Child-Pugh A-B) no se requiere ajuste.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Tygacil® (tigeciclina).',
      'FDA. Drug Safety Communication: increased risk of death with Tygacil (tigecycline). 2013.',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Solomkin JS et al. Diagnosis and Management of Complicated Intra-abdominal Infection. IDSA/SIS Guidelines. Clin Infect Dis. 2010.',
      'Prasad P et al. Excess deaths associated with tigecycline after approval based on noninferiority trials. Clin Infect Dis. 2012.',
    ],
  },

});
