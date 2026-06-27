/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/famotidina.js
   Fuentes: CIMA AEMPS, FDA DailyMed, AEMPS retirada
   ranitidina 2020, Guías profilaxis úlcera estrés UCI
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'famotidina',
  nombre:         'Famotidina',
  nombreGenerico: 'Famotidine',
  categoria:      'otros',
  tags:           ['anti-H2', 'gastroprotección', 'úlcera', 'ERGE', 'profilaxis estrés UCI', 'anafilaxia'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      'Antagonista selectivo de receptores H2 (histamina) en células parietales gástricas — reduce secreción ácida basal y estimulada.',
      'SUSTITUTO de la RANITIDINA — retirada del mercado en 2020 por contaminación con NDMA (nitrosamina carcinogénica).',
      'Reconstituir vial con 5-10 mL SF — luego diluir en 50-100 mL SF para infusión IV.',
      'Bolo IV LENTO (mínimo 2 minutos) o infusión 15-30 min — bolo rápido raramente causa arritmias.',
      'Alternativa a omeprazol — menos potente pero MAYOR SEGURIDAD a largo plazo (menos efectos óseos, renales, cognitivos).',
    ],

    resumenRapido: 'Antagonista competitivo y selectivo del receptor H2 de histamina, principal mediador de secreción ácida gástrica. Acción rápida y prolongada. Menos potente que IBP (omeprazol) pero con mejor perfil de seguridad a largo plazo. Indicado en úlcera péptica activa, ERGE moderada, profilaxis úlcera por estrés en UCI, hemorragia digestiva alta (alternativa a IBP), síndrome Zollinger-Ellison, anafilaxia (adyuvante anti-H2). Inicio IV: 30 min, duración: 10-12h.',

    objetivoTerapeutico: 'Reducir secreción ácida gástrica · Mantener pH gástrico > 4 · Cicatrizar úlcera péptica · Profilaxis úlcera estrés en críticos · Adyuvante en anafilaxia',

    preparacion: {
      'Presentación':             '<b>Famotidina 20 mg vial liofilizado</b> o 20 mg/2 mL ampolla',
      'Presentación alt.':        'Famotidina 10 mg/mL solución inyectable',
      'Diluyente reconstitución': '5-10 mL SF 0.9% (si vial liofilizado)',
      'Diluyente final':          'SF 0.9% · SG 5% · Ringer Lactato (compatibles)',
      'Dilución infusión corta':  '<b>20 mg en 50-100 mL SF</b> → infundir en 15-30 min',
      'Vía':                      'IV (preferida hospital), IM, VO',
      '⏱️ BOLO IV directo':       '<b>Mínimo 2 minutos para 20 mg</b>',
      '⏱️ INFUSIÓN IV corta':     '<b>15-30 minutos en 50-100 mL SF</b> (preferida)',
      '⏱️ INFUSIÓN CONTINUA':     '1.7 mg/h IV (40 mg/día en 24h)',
      '⏱️ DOSIS estándar':         '<b>20 mg IV c/12h</b> (profilaxis y úlcera)',
      '⏱️ DOSIS hemorragia digestiva': '20 mg IV c/12h o 40 mg/24h en infusión',
      'Bomba':                    'Recomendada para infusión',
      '🧊 ESTABILIDAD post-reconstitución': '<b>24-48 horas a 2-25°C</b> en SF/SG 5% (CIMA AEMPS)',
      '🧊 Vial sin reconstituir': 'Temperatura ambiente hasta vencimiento',
      'Aspecto':                  'Solución transparente, incolora — desechar si turbidez o cambio de color',
    },

    vigilancia: {
      antes: [
        'Verificar función renal — ajuste obligatorio en CrCl < 50 mL/min.',
        'Revisar prescripción: indicación, dosis, intervalo.',
        'Comprobar uso concomitante de otros gastroprotectores (evitar duplicar).',
        'En anafilaxia: confirmar que se ha administrado adrenalina IM primero.',
        'Acceso IV permeable.',
      ],
      durante: [
        'Administrar lentamente — bolo IV mínimo 2 min o infusión 15-30 min.',
        'Vigilar FC durante administración (arritmias muy raras pero posibles con bolo rápido).',
        'Observar sitio IV — irritación venosa leve posible.',
        'Vigilar reacción alérgica primeros 15 min (rara).',
      ],
      despues: [
        'Evaluar respuesta clínica: alivio dispepsia, control hemorragia, prevención úlcera.',
        'En hemorragia digestiva: monitorizar Hb c/6-12h.',
        'Vigilar diarrea o estreñimiento (efectos GI variables).',
        'En uso prolongado (> 1 año): control B12 (déficit posible).',
        'Documentar respuesta y efectos adversos.',
        'Planificar transición a VO cuando tolere.',
      ],
      suspender: [
        'Reacción alérgica / anafilaxia (rara).',
        'Trombocitopenia significativa (< 100,000).',
        'Confusión / delirium (especialmente ancianos con IRC).',
        'Arritmia ventricular (muy rara).',
        'Tolerancia oral establecida — cambio a VO.',
        'Prescripción médica de cambio o suspensión.',
      ],
    },

    incompatibilidades: [
      'Generalmente bien tolerado en mezclas IV.',
      'Anfotericina B — incompatibilidad documentada.',
      'Algunos antibióticos: verificar antes de mezclar.',
      'Sin interacciones graves con la mayoría de fármacos (a diferencia de cimetidina).',
      'Lavar línea con SF antes y después de fármacos sospechosos de incompatibilidad.',
    ],

    alertasSeguridad: [
      '🟡 En IRC severa: REDUCIR DOSIS — eliminación principalmente renal.',
      '🟡 En ancianos con IRC: riesgo de confusión / delirium.',
      '🟡 NO sustituye a IBP en hemorragia digestiva alta grave — omeprazol IV es de elección.',
      '🟡 Trombocitopenia rara pero descrita.',
      '🟡 Sustituto de ranitidina (retirada por NDMA 2020) — famotidina sin contaminación documentada.',
      '🟡 En uso > 1 año: posible déficit B12 (menor que IBP).',
    ],
  },

  modulos: {

    profilaxisUci: `
      <b>Profilaxis Úlcera por Estrés en UCI:</b><br/>
      <b>INDICACIONES (factores de riesgo):</b><br/>
      • Ventilación mecánica > 48h.<br/>
      • Coagulopatía (plaquetas < 50,000 o INR > 1.5).<br/>
      • Cirugía mayor reciente.<br/>
      • Trauma grave, quemados extensos.<br/>
      • TCE con Glasgow < 10.<br/>
      • Falla renal o hepática.<br/>
      • Antecedente de hemorragia digestiva.<br/><br/>
      <b>OPCIONES TERAPÉUTICAS:</b><br/>
      • <b>IBP (omeprazol 40 mg IV c/24h)</b> — más potente.<br/>
      • <b>Anti-H2 (famotidina 20 mg IV c/12h)</b> — menos NAV pero menos potente.<br/><br/>
      <b>EVIDENCIA:</b><br/>
      • IBP > anti-H2 para prevención de hemorragia clínicamente significativa.<br/>
      • Anti-H2 = MENOR RIESGO de neumonía nosocomial (mantienen pH gástrico > 4 menos tiempo).<br/>
      • Estudios recientes: beneficio de profilaxis solo en pacientes de alto riesgo.<br/><br/>
      <b>DOSIS FAMOTIDINA:</b><br/>
      • 20 mg IV c/12h (estándar).<br/>
      • En IRC (CrCl < 50): 20 mg IV c/24h.<br/>
      • SUSPENDER cuando ya no haya factores de riesgo.
    `,

    anafilaxia: `
      <b>Famotidina (Anti-H2) en Anafilaxia:</b><br/>
      <b>PRINCIPIO:</b> ADYUVANTE a adrenalina IM, NUNCA sustituto.<br/><br/>
      <b>PROTOCOLO ANAFILAXIA:</b><br/>
      1. <b>ADRENALINA 0.3-0.5 mg IM</b> (muslo anterolateral) - PRIMERA LÍNEA.<br/>
      2. Repetir adrenalina c/5-15 min si no respuesta.<br/>
      3. Oxígeno alto flujo.<br/>
      4. Fluidos IV (cristaloides 1-2 L rápido).<br/>
      5. <b>Antihistamínicos H1:</b> Difenhidramina 25-50 mg IV.<br/>
      6. <b>Antihistamínicos H2:</b> Famotidina 20 mg IV (combina con H1).<br/>
      7. <b>Corticoide:</b> Hidrocortisona 100-200 mg IV o metilprednisolona.<br/>
      8. Salbutamol nebulizado si broncoespasmo.<br/><br/>
      <b>FUNDAMENTO H1+H2:</b><br/>
      • Bloqueo combinado H1+H2 = mejor respuesta vs solo H1.<br/>
      • H2 bloquea efecto cardíaco de histamina (mejora PA).<br/>
      • Estudios: ↓ síntomas residuales, ↓ rebote.
    `,

    renal: `
      <b>Famotidina en Insuficiencia Renal:</b><br/>
      <b>Eliminación:</b> 70% renal sin cambios — requiere ajuste.<br/>
      <b>AJUSTE OBLIGATORIO:</b><br/>
      • CrCl > 50: dosis estándar (20 mg c/12h).<br/>
      • CrCl 30-50: <b>20 mg c/24h</b>.<br/>
      • CrCl < 30: <b>10-20 mg c/24h</b>.<br/>
      • Hemodiálisis: 20 mg IV tras sesión.<br/><br/>
      <b>VIGILANCIA en IRC:</b><br/>
      • Confusión, delirium (especialmente ancianos).<br/>
      • Función renal seriada.<br/>
      • Considerar IBP como alternativa si necesario.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Reconstituir vial liofilizado SOLO con SF (5-10 mL).',
      'Etiquetar bolsa de infusión: Famotidina [dosis], concentración, hora preparación, fecha límite (24-48h).',
      'Administración LENTA: bolo IV mínimo 2 min o infusión 15-30 min en 50-100 mL SF.',
      'Acceso IV permeable, lavar con SF antes y después.',
      'En IRC: comprobar CrCl basal y ajustar dosis (CrCl < 50 = c/24h).',
      'En anafilaxia: NUNCA reemplazar adrenalina con famotidina — siempre adyuvante.',
      'Vigilar primeros 15 min por reacciones alérgicas (raras).',
      'Educar al paciente: posible cefalea, mareos, alteración GI leve.',
      'En uso prolongado: control de hemograma (trombocitopenia rara), B12.',
      'Documentar: dosis, hora, vía, indicación, respuesta clínica.',
      'Transición a VO cuando tolere — biodisponibilidad oral buena.',
    ],

    efectosAdversos: [
      '🟠 Trombocitopenia (rara)',
      '🟠 Confusión / delirium (especialmente IRC + ancianos)',
      '🟡 Cefalea (5-10%)',
      '🟡 Mareos',
      '🟡 Estreñimiento o diarrea',
      '🟡 Náuseas, vómitos',
      '🟡 Rash cutáneo (raro)',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Ginecomastia (menos frecuente que cimetidina)',
      '🟡 Bradicardia, arritmias (raras con bolo rápido)',
      '🟡 Déficit de B12 (uso > 1 año)',
      '🟡 Pancreatitis (muy rara)',
    ],

    contraindicaciones: [
      'Hipersensibilidad a famotidina u otros anti-H2.',
      'Reactividad cruzada potencial con otros anti-H2 (cimetidina, ranitidina).',
      'Precaución en: IRC severa, hepatopatía severa, ancianos con polifarmacia.',
    ],

    fotosensibilidad: 'No es significativamente fotosensible. Conservar a temperatura ambiente protegido de luz directa pero sin requerimientos especiales de envase opaco.',

    estabilidad: {
      'Vial sin reconstituir':       'Temperatura ambiente hasta vencimiento',
      'Reconstituido':                '<b>48 horas a 2-25°C</b> (CIMA AEMPS)',
      'Diluido en SF/SG 5%':          '<b>24-48 horas a 2-25°C</b>',
      'Aspecto':                      'Transparente, incolora — desechar si turbidez',
      'Temperatura':                  'NO congelar · 15-25°C',
    },

    presentaciones: [
      'Famotidina 20 mg vial liofilizado para inyección',
      'Famotidina 20 mg/2 mL ampolla',
      'Famotidina 10 mg/mL solución inyectable',
      'Famotidina 20 mg, 40 mg comprimidos (uso VO)',
      'Famotidina 40 mg/5 mL suspensión oral',
      'Pepcid® (marca original Merck) — retirado en algunos países',
      'Múltiples genéricos disponibles globalmente',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Profilaxis úlcera estrés UCI',       dosis: '<b>20 mg IV c/12h</b>',                    via: 'IV' },
      { indicacion: 'Úlcera péptica activa',               dosis: '20 mg IV c/12h × 4-8 semanas',             via: 'IV/VO' },
      { indicacion: 'ERGE',                                dosis: '20 mg IV/VO c/12h',                        via: 'IV/VO' },
      { indicacion: 'Hemorragia digestiva alta',           dosis: '20 mg IV c/12h o 40 mg/24h infusión',      via: 'IV' },
      { indicacion: 'Síndrome Zollinger-Ellison',         dosis: '20-40 mg IV c/6h (titular)',               via: 'IV' },
      { indicacion: 'Anafilaxia (adyuvante)',              dosis: '20 mg IV',                                 via: 'IV' },
      { indicacion: 'Dosis máxima diaria',                 dosis: '160 mg/día (Zollinger-Ellison)',           via: 'IV/VO' },
    ],

    embarazo: 'Categoría B (FDA). Datos limitados pero sin evidencia de teratogenicidad. Usada en hiperémesis gravídica con ERGE asociada. Atraviesa placenta — sin efectos adversos neonatales documentados. Compatible con lactancia.',

    pediatria: 'Niños > 1 año: 0.5 mg/kg IV c/12h (máximo 40 mg/día). Niños < 1 año: datos limitados — usar con precaución. En reflujo gastroesofágico pediátrico: 0.5 mg/kg VO c/12h.',

    adultoMayor: 'Mayor riesgo de confusión / delirium especialmente si IRC concomitante. Reducir dosis si CrCl < 50 mL/min. Vigilancia neurológica estrecha.',

    insufRenal: '<b>AJUSTE OBLIGATORIO:</b> CrCl 30-50: 20 mg c/24h · CrCl < 30: 10-20 mg c/24h · Diálisis: 20 mg tras sesión.',

    insufHepatica: 'Sin ajuste de dosis específico — metabolismo principalmente renal. En cirrosis: vigilancia clínica estándar.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Famotidina. Agencia Española de Medicamentos.',
      'FDA DailyMed. Famotidine Injection. U.S. National Library of Medicine.',
      'AEMPS. Retirada de ranitidina por NDMA. Nota informativa. 2020.',
      'Krag M, et al. Pantoprazole in Patients at Risk for GI Bleeding in the ICU (SUP-ICU). NEJM. 2018.',
      'WAO Anaphylaxis Guidelines. World Allergy Organization. 2020.',
      'ASHP Therapeutic Guidelines on Stress Ulcer Prophylaxis. Am J Health Syst Pharm.',
      'Pediamécum AEP. Famotidina. Asociación Española de Pediatría.',
      'EAACI Guidelines. Anaphylaxis Management. 2021.',
    ],
  },

});
