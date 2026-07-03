/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/plasma-fresco-congelado.js
   HEMOTERAPIA · Hemocomponentes
   Fuentes: AABB Technical Manual 20th ed., SETS Guía 2023,
   BSH Guidelines FFP/Cryo Br J Haematol 2018,
   OMS Uso Clínico de la Sangre
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'plasma-fresco-congelado',
  nombre:         'Plasma Fresco Congelado (PFC)',
  nombreGenerico: 'Fresh Frozen Plasma (FFP)',
  categoria:      'hemocomponentes',
  tags:           ['hemoterapia', 'transfusión', 'plasma', 'PFC', 'factores de coagulación', 'coagulopatía', 'hemocomponente'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Hemocomponente de ALTO RIESGO. La compatibilidad ABO es inversa a la de los hematíes (AB es donante universal de plasma). Requiere descongelación controlada y uso precoz. Riesgo elevado de TRALI y sobrecarga circulatoria por el volumen. Verificación doble a pie de cama obligatoria.',

  nivel1: {

    puntosClave: [
      '<b>Aporta todos los factores de coagulación</b> (lábiles y estables) — no es un expansor de volumen.',
      'Indicado en <b>déficit de múltiples factores</b> con sangrado: CID, hepatopatía, transfusión masiva, reversión urgente de dicumarínicos si no hay complejo protrombínico.',
      '<b>Compatibilidad ABO INVERSA a los hematíes</b>: el plasma <b>AB es donante universal</b>; O solo a receptores O.',
      'Debe <b>descongelarse (37 °C, baño validado)</b> y transfundirse pronto — no recongelar.',
      'Dosis habitual <b>10-15 mL/kg</b>; infundir con filtro, en 30 min-2 h. Vigilar TRALI y sobrecarga.',
    ],

    resumenRapido: 'Porción líquida de la sangre separada y congelada rápidamente (habitualmente en las primeras 6-8 h) para preservar los factores de coagulación lábiles (V y VIII) y estables. Contiene todos los factores, fibrinógeno, albúmina e inmunoglobulinas. Su indicación es la corrección de deficiencias múltiples de factores en presencia de hemorragia o antes de procedimientos invasivos; NO debe usarse como expansor de volumen ni para corregir alteraciones leves de la coagulación sin sangrado.',

    objetivoTerapeutico: 'Reponer múltiples factores de coagulación en coagulopatía con sangrado · Soporte hemostático en CID, hepatopatía y transfusión masiva · Reversión urgente de anticoagulantes orales antivitamina K cuando no se dispone de complejo protrombínico · Recambio plasmático en PTT',

    preparacion: {
      'Compatibilidad':        '<b>ABO compatible (INVERSA a hematíes): plasma AB = donante universal</b>',
      'Descongelación':        '<b>Baño a 37 °C validado (o sistema de descongelación) — nunca a temperatura ambiente ni microondas</b>',
      'Diluyente':             'No requiere; no añadir nada a la bolsa',
      'Equipo':                'Equipo de transfusión con filtro (170-200 μm)',
      'Dosis habitual':        '<b>10-15 mL/kg</b> (≈ 3-4 unidades en adulto); ajustar a objetivo',
      'Volumen por unidad':    '~200-300 mL',
      'Tiempo de infusión':    '30 min a 2 h por unidad (según tolerancia; máx 4 h)',
      'Uso tras descongelar':  '<b>Idealmente en <6-24 h; los factores lábiles (V, VIII) decaen con el tiempo</b>',
      'Conservación congelado': '≤ −25 °C hasta 36 meses (según normativa)',
    },

    vigilancia: {
      antes: [
        'Verificación DOBLE a pie de cama: identidad del paciente frente a bolsa y documentación.',
        'Comprobar compatibilidad ABO (recordar que es inversa a la de hematíes).',
        'Verificar que la descongelación se hizo correctamente (37 °C) e integridad de la bolsa.',
        'Constantes basales: TA, FC, Tª, FR, SpO2.',
        'Pruebas de coagulación basales (TP/INR, TTPa, fibrinógeno) y consentimiento.',
        'Acceso venoso permeable de buen calibre.',
      ],
      durante: [
        '<b>Permanecer con el paciente los primeros 15 minutos.</b>',
        'Constantes a los 15 min y al finalizar.',
        'Vigilar reacción alérgica (frecuente con plasma): urticaria, prurito, hasta anafilaxia.',
        'Vigilar TRALI (disnea, hipoxemia, edema no cardiogénico en <6 h) y TACO (sobrecarga).',
        'Ajustar ritmo según tolerancia hemodinámica.',
      ],
      despues: [
        'Constantes al finalizar; documentar unidades, grupo y horario.',
        'Reevaluar coagulación (TP/INR, TTPa, fibrinógeno) para valorar respuesta.',
        'Vigilar signos de sobrecarga en las horas siguientes.',
        'Valorar necesidad de dosis adicionales según objetivo hemostático.',
      ],
      suspender: [
        '🚨 DETENER ante disnea/hipoxemia (TRALI/TACO), reacción alérgica grave o anafilaxia.',
        'Mantener vía con SF 0.9%, avisar a médico y banco de sangre.',
        'Anafilaxia (especialmente en déficit de IgA): tratar como urgencia.',
        'Conservar bolsa y equipo; notificar a hemovigilancia.',
      ],
    },

    incompatibilidades: [
      '<b>Compatibilidad ABO inversa a hematíes</b> — no confundir (plasma O solo a receptores O).',
      'No co-administrar medicación por la misma vía.',
      'Solo SF 0.9% si se requiere purgar la vía.',
      'No recongelar una vez descongelado.',
      'No usar como expansor de volumen ni como aporte nutricional/proteico.',
    ],

    alertasSeguridad: [
      '🔴 TRALI — el plasma es uno de los componentes más implicados. Vigilar disnea/hipoxemia en <6 h.',
      '🔴 Compatibilidad ABO INVERSA a hematíes (AB donante universal de plasma).',
      '🔴 Verificación doble a pie de cama obligatoria.',
      '🟠 Reacciones alérgicas/anafilaxia más frecuentes que con hematíes (riesgo en déficit de IgA).',
      '🟠 Sobrecarga circulatoria (TACO) por el volumen — cuidado en cardiópatas/ancianos.',
      '🟡 No indicado como expansor de volumen ni para INR levemente alterado sin sangrado.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar la compatibilidad ABO teniendo presente que es inversa a la de los hematíes.',
      'Comprobar que la descongelación se realizó a 37 °C en baño validado y transfundir sin demora.',
      'Verificación doble a pie de cama antes de conectar; revisar integridad de la bolsa.',
      'Iniciar con el paciente presente los primeros 15 minutos; registrar constantes.',
      'Vigilar de forma especial reacciones alérgicas y signos de TRALI/sobrecarga.',
      'No superar 4 h de infusión por unidad; ajustar ritmo en riesgo de TACO.',
      'Reevaluar coagulación tras la transfusión para valorar eficacia.',
      'Documentar número de unidades, grupo, hora de inicio/fin y tolerancia.',
    ],

    efectosAdversos: [
      '🔴 TRALI (lesión pulmonar aguda asociada a transfusión)',
      '🔴 Anafilaxia (especialmente en déficit de IgA)',
      '🔴 Sobrecarga circulatoria (TACO)',
      '🟠 Reacción alérgica (urticaria, prurito) — frecuente',
      '🟠 Reacción febril no hemolítica',
      '🟡 Toxicidad por citrato (hipocalcemia) en grandes volúmenes / recambio plasmático',
      '🟡 Transmisión de infecciones (riesgo muy bajo con cribado actual)',
    ],

    contraindicaciones: [
      'Uso como expansor de volumen o aporte nutricional (no indicado).',
      'Corrección de INR levemente elevado sin hemorragia ni procedimiento.',
      'Reversión de dicumarínicos cuando se dispone de complejo protrombínico (este es de elección).',
      'Déficit aislado de un factor con concentrado específico disponible.',
      'Déficit de IgA con anti-IgA: alto riesgo de anafilaxia (valorar plasma IgA-deficiente).',
    ],

    fotosensibilidad: 'No aplica. Conservación congelada ≤ −25 °C. Una vez descongelado, no recongelar; transfundir precozmente.',

    estabilidad: {
      'Congelado':         '≤ −25 °C, hasta 36 meses (según normativa)',
      'Descongelación':    '37 °C en baño/sistema validado',
      'Tras descongelar':  '<b>Uso precoz (idealmente <6-24 h); los factores lábiles decaen</b>',
      'No recongelar':     'Prohibido recongelar una unidad descongelada',
      'Plasma inactivado': 'Existen versiones tratadas con azul de metileno / solvente-detergente (menor riesgo infeccioso)',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Una vez descongelado y conectado, completar en ≤ 4 h.',
      dosisRestante:     'No conservar unidades parcialmente transfundidas; desechar según protocolo biológico.',
      infusionPreparada: 'Transfundir lo antes posible tras la descongelación; conservar refrigerado 2-6 °C solo el tiempo mínimo autorizado si hay demora.',
      notas:             'Compatibilidad ABO inversa a hematíes. No recongelar. Solo SF 0.9% si se purga.',
    },

    presentaciones: [
      'Plasma fresco congelado (PFC) de sangre total o aféresis ~200-300 mL',
      'Plasma inactivado por azul de metileno',
      'Plasma tratado por solvente-detergente (SD) — pool industrial',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Coagulopatía con sangrado',        dosis: '<b>10-15 mL/kg</b> (≈ 3-4 unidades adulto)',                via: 'IV' },
      { indicacion: 'Reversión urgente de AVK (sin CCP)', dosis: '15-30 mL/kg (preferible complejo protrombínico si disponible)', via: 'IV' },
      { indicacion: 'Transfusión masiva',               dosis: 'Ratio hematíes:plasma:plaquetas según protocolo (p. ej. 1:1:1)', via: 'IV' },
      { indicacion: 'Recambio plasmático (PTT)',        dosis: 'Según volumen plasmático calculado',                         via: 'IV' },
      { indicacion: 'Tiempo por unidad',                dosis: '30 min-2 h (máx 4 h)',                                       via: 'IV' },
    ],

    embarazo: 'Indicado en coagulopatía obstétrica con sangrado (p. ej. CID en abruptio, hemorragia posparto masiva). Priorizar la corrección hemostática dirigida por objetivos (fibrinógeno, TP/TTPa) junto con concentrados específicos.',

    pediatria: 'Dosis 10-15 mL/kg. En neonatos vigilar toxicidad por citrato (hipocalcemia) y sobrecarga. Utilizar plasma compatible ABO; considerar plasma inactivado por seguridad infecciosa.',

    adultoMayor: 'Alto riesgo de TACO por el volumen. Transfundir despacio, valorar diurético e ir reevaluando la necesidad. Usar la dosis mínima eficaz guiada por coagulación.',

    insufRenal: 'Vigilar sobrecarga de volumen. En recambio plasmático y grandes volúmenes, controlar calcio iónico (citrato).',

    insufHepatica: 'Es una indicación frecuente (coagulopatía por hepatopatía), pero solo si hay sangrado o procedimiento invasivo. Corregir de forma dirigida; vigilar sobrecarga e hipocalcemia por citrato (metabolismo hepático reducido).',
  },

  nivel4: {
    referencias: [
      'Green L et al. British Society for Haematology Guidelines on the spectrum of fresh frozen plasma and cryoprecipitate products. Br J Haematol. 2018.',
      'AABB. Technical Manual. 20th Edition. 2020.',
      'Sociedad Española de Transfusión Sanguínea (SETS). Guía sobre la transfusión de componentes sanguíneos. 2023.',
      'OMS. El uso clínico de la sangre. Manual de bolsillo.',
      'Roback JD et al. Evidence-based practice guidelines for plasma transfusion. Transfusion. 2010.',
    ],
  },

});
