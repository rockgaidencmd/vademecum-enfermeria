/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/inmunoglobulinas.js
   HEMOTERAPIA · Hemoderivados
   Fuentes: CIMA AEMPS (IGIV), AABB Technical Manual,
   EFNS/PNS Guillain-Barré Guidelines, ASH ITP 2019,
   Perez EE et al. IVIG Use J Allergy Clin Immunol 2017
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'inmunoglobulinas',
  nombre:         'Inmunoglobulinas (IgG)',
  nombreComercial: 'IGIV / IGSC (Flebogamma, Privigen, Octagam…)',
  nombreGenerico: 'Human Immunoglobulin G',
  categoria:      'hemoderivados',
  tags:           ['hemoterapia', 'hemoderivado', 'inmunoglobulina', 'IGIV', 'inmunodeficiencia', 'Guillain-Barré', 'PTI', 'autoinmune', 'anti-D'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Hemoderivado de ALTO RIESGO por reacciones relacionadas con la infusión, riesgo trombótico, insuficiencia renal aguda (productos con sacarosa) y meningitis aséptica. La velocidad de infusión debe aumentarse de forma escalonada y vigilada. Precaución en déficit de IgA (anafilaxia).',

  nivel1: {

    puntosClave: [
      '<b>Concentrado de anticuerpos IgG</b> de grandes pools de plasma; puede ser <b>inespecífica (IGIV/IGSC)</b> o <b>específica/hiperinmune</b> (anti-D, antitetánica, antirrábica, anti-HBs).',
      'Indicaciones inespecíficas: <b>inmunodeficiencias primarias</b>, y como inmunomodulador en <b>Guillain-Barré, PTI, Kawasaki, CIDP</b>.',
      '<b>Velocidad escalonada</b>: iniciar lento y aumentar de forma progresiva y vigilada — la mayoría de reacciones son velocidad-dependientes.',
      'Riesgos: <b>trombosis, insuficiencia renal aguda, meningitis aséptica, reacciones de infusión</b>; precaución en <b>déficit de IgA</b>.',
      'La <b>anti-D</b> específica previene la aloinmunización Rh en gestantes Rh negativo y en receptores Rh− de componentes Rh+.',
    ],

    resumenRapido: 'Preparado de inmunoglobulina G purificada a partir del plasma de miles de donantes. Las formulaciones inespecíficas (intravenosa IGIV o subcutánea IGSC) se usan como terapia sustitutiva en inmunodeficiencias y como inmunomodulador en enfermedades autoinmunes/inflamatorias (síndrome de Guillain-Barré, PTI, enfermedad de Kawasaki, CIDP, miastenia). Las específicas o hiperinmunes (anti-D, antitetánica, antirrábica, anti-hepatitis B) aportan anticuerpos concretos para profilaxis post-exposición o prevención de la aloinmunización.',

    objetivoTerapeutico: 'Terapia sustitutiva en inmunodeficiencias primarias y secundarias · Inmunomodulación en enfermedades autoinmunes (Guillain-Barré, PTI, CIDP, Kawasaki) · Profilaxis específica post-exposición (tétanos, rabia, hepatitis B) · Prevención de la aloinmunización Rh (anti-D)',

    preparacion: {
      'Presentación':          '<b>IGIV inespecífica (viales al 5-10%) · IGSC · Ig específicas (anti-D, antitetánica, antirrábica, anti-HBs)</b>',
      'Compatibilidad':        'No requiere grupo ABO ni pruebas cruzadas',
      'Reconstitución':        'Según fabricante (liofilizados) o lista para usar; llevar a temperatura ambiente antes de infundir',
      'Diluyente':             'Muchas se administran sin diluir; si procede, según ficha técnica (a menudo SG 5%)',
      'Velocidad':             '<b>Escalonada: iniciar lenta (0.5-1 mL/kg/h) y aumentar progresivamente según tolerancia</b>',
      'Vía':                   'IV (IGIV) · Subcutánea (IGSC, domiciliaria) · IM (algunas específicas)',
      'Hidratación':           'Asegurar buena hidratación antes/durante (reduce riesgo renal y trombótico)',
      'Premedicación':         'Valorar paracetamol/antihistamínico si reacciones previas (según protocolo)',
      'Conservación':          '<b>Habitualmente 2-8 °C (algunas a Tª ambiente); no congelar; proteger de la luz</b>',
    },

    vigilancia: {
      antes: [
        'Verificar producto correcto (inespecífica vs específica) y dosis; muchas se dosifican en g/kg.',
        'Constantes basales: TA, FC, Tª, FR, SpO2.',
        'Valorar factores de riesgo trombótico (edad, inmovilidad, trombofilia) y función renal basal.',
        'Antecedente de déficit de IgA o reacciones previas a inmunoglobulinas.',
        'Asegurar hidratación adecuada; llevar el producto a temperatura ambiente.',
        'Acceso venoso permeable (IGIV).',
      ],
      durante: [
        '<b>Aumentar la velocidad de forma escalonada y vigilada</b> — la mayoría de reacciones dependen del ritmo.',
        'Constantes al inicio, con cada incremento de velocidad y periódicamente.',
        'Vigilar reacción de infusión: cefalea, fiebre/escalofríos, mialgias, rubor, náuseas, dolor lumbar/torácico, cambios de TA.',
        'Ante reacción: <b>reducir o detener la velocidad</b>; reanudar más lento cuando ceda (según protocolo).',
        'Vigilar signos de anafilaxia (sobre todo en déficit de IgA).',
      ],
      despues: [
        'Vigilar reacciones tardías: cefalea intensa / meningitis aséptica (horas-días), síntomas trombóticos.',
        'Controlar diuresis y función renal si hay factores de riesgo (IRA por productos con sacarosa).',
        'Documentar producto, lote, dosis, velocidad y tolerancia.',
        'Reevaluar respuesta clínica (plaquetas en PTI, fuerza en Guillain-Barré, etc.).',
      ],
      suspender: [
        '🚨 DETENER ante anafilaxia, disnea, dolor torácico o reacción de infusión grave.',
        'Reducir/parar la velocidad ante cefalea intensa, escalofríos o cambios tensionales marcados.',
        'Signos de trombosis (ACV, IAM, TVP/TEP): detener y tratar como urgencia.',
        'Oligoanuria o deterioro renal agudo: suspender y valorar.',
        'Conservar el vial/registro del lote; notificar la reacción.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros medicamentos ni con otros hemoderivados en la misma línea.',
      'Administrar por vía independiente; lavar la línea según ficha técnica.',
      'Seguir estrictamente el diluyente indicado por el fabricante (a menudo SG 5%).',
      'Precaución con vacunas de virus vivos: reducen su eficacia hasta semanas-meses después.',
    ],

    alertasSeguridad: [
      '🔴 ANAFILAXIA en déficit de IgA con anti-IgA — verificar antecedentes; usar productos IgA-depletados si procede.',
      '🔴 RIESGO TROMBÓTICO (ACV, IAM, TEP) — hidratar, velocidad escalonada, valorar factores de riesgo.',
      '🔴 INSUFICIENCIA RENAL AGUDA — mayor con formulaciones que contienen sacarosa; hidratar y vigilar diuresis.',
      '🟠 Reacciones de infusión velocidad-dependientes (cefalea, fiebre, mialgias) — ajustar el ritmo.',
      '🟠 Meningitis aséptica (cefalea intensa, rigidez de nuca) horas-días después — autolimitada pero alarmante.',
      '🟡 Interfiere con la respuesta a vacunas de virus vivos (espaciar la vacunación).',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Comprobar que el producto es el correcto (inespecífica vs específica) y llevarlo a temperatura ambiente antes de infundir.',
      'Asegurar una buena hidratación antes y durante para reducir el riesgo renal y trombótico.',
      'Iniciar la infusión lenta y aumentar la velocidad de forma escalonada, vigilando en cada incremento.',
      'Registrar constantes al inicio, con cada aumento de ritmo y periódicamente.',
      'Ante reacción de infusión: reducir o detener la velocidad y reanudar más lento cuando ceda.',
      'Verificar antecedente de déficit de IgA o reacciones previas; tener preparado el manejo de anafilaxia.',
      'Vigilar cefalea intensa post-infusión (meningitis aséptica) y síntomas trombóticos.',
      'Registrar el número de lote (trazabilidad de hemoderivados) además de producto, dosis y tolerancia.',
      'Espaciar las vacunas de virus vivos según indicación.',
    ],

    efectosAdversos: [
      '🔴 Anafilaxia (déficit de IgA con anti-IgA)',
      '🔴 Eventos trombóticos (ACV, IAM, TVP/TEP)',
      '🔴 Insuficiencia renal aguda (productos con sacarosa)',
      '🟠 Reacciones de infusión: cefalea, fiebre, escalofríos, mialgias, rubor, náuseas',
      '🟠 Meningitis aséptica (cefalea intensa, fotofobia, rigidez de nuca)',
      '🟠 Hemólisis (por isoaglutininas, con dosis altas)',
      '🟡 Hipertensión o hipotensión transitorias durante la infusión',
    ],

    contraindicaciones: [
      'Déficit selectivo de IgA con anticuerpos anti-IgA (riesgo de anafilaxia): usar productos IgA-depletados.',
      'Hipersensibilidad conocida a las inmunoglobulinas humanas.',
      'Insuficiencia renal grave: precaución extrema; evitar formulaciones con sacarosa.',
      'Estados de hiperviscosidad o alto riesgo trombótico: valorar riesgo/beneficio y velocidad.',
    ],

    fotosensibilidad: 'Proteger de la luz durante el almacenamiento. La mayoría se conservan en nevera (2-8 °C) o a temperatura ambiente según el producto; no congelar.',

    estabilidad: {
      'Conservación':      'Según ficha técnica: habitualmente 2-8 °C; algunas a ≤ 25 °C',
      'No congelar':       'La congelación puede desnaturalizar y agregar la proteína',
      'Antes de infundir': 'Llevar a temperatura ambiente',
      'Tras reconstituir/abrir': 'Uso inmediato (sin conservantes); desechar el sobrante',
      'Proteger de la luz': 'Sí',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras abrir/reconstituir; no contiene conservantes.',
      dosisRestante:     'Desechar el sobrante del vial abierto.',
      infusionPreparada: 'Iniciar sin demora; seguir el tiempo máximo indicado por el fabricante.',
      notas:             'Registrar el lote (trazabilidad). Velocidad escalonada y buena hidratación. Precaución en déficit de IgA y riesgo trombótico/renal.',
    },

    presentaciones: [
      'IGIV inespecífica (Flebogamma®, Privigen®, Octagam®, Kiovig®…) al 5-10%',
      'IGSC subcutánea (Hizentra®, Cuvitru®…) — administración domiciliaria',
      'Inmunoglobulina anti-D (Rhophylac®, Rhesonativ®) — prevención aloinmunización Rh',
      'Inmunoglobulina antitetánica, antirrábica y anti-hepatitis B (específicas/hiperinmunes)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Inmunodeficiencia primaria (sustitución)', dosis: '0.4-0.6 g/kg cada 3-4 semanas (ajustar a niveles valle de IgG)', via: 'IV/SC' },
      { indicacion: 'Guillain-Barré / CIDP',                     dosis: '0.4 g/kg/día × 5 días (total 2 g/kg)',                          via: 'IV' },
      { indicacion: 'PTI (trombocitopenia inmune)',              dosis: '1 g/kg/día × 1-2 días (o 0.4 g/kg/día × 5 días)',               via: 'IV' },
      { indicacion: 'Enfermedad de Kawasaki',                    dosis: '2 g/kg en dosis única (con AAS)',                               via: 'IV' },
      { indicacion: 'Profilaxis anti-D (gestante Rh−)',          dosis: '≈ 300 μg (1500 UI) IM/IV según protocolo',                     via: 'IM/IV' },
    ],

    embarazo: 'Se utilizan con seguridad cuando están indicadas (p. ej. PTI gestacional, inmunodeficiencia). La inmunoglobulina anti-D es parte esencial de la prevención de la enfermedad hemolítica del recién nacido en gestantes Rh negativo (semana 28 y posparto).',

    pediatria: 'Ampliamente usadas en Kawasaki (2 g/kg dosis única), PTI e inmunodeficiencias. Ajustar la dosis al peso y la velocidad de forma escalonada. Asegurar hidratación y vigilar reacciones de infusión.',

    adultoMayor: 'Mayor riesgo trombótico y renal. Hidratar bien, infundir a velocidad más lenta y vigilar función renal y signos de trombosis. Preferir formulaciones sin sacarosa.',

    insufRenal: 'Riesgo de insuficiencia renal aguda, sobre todo con productos que contienen sacarosa. Evitar dichas formulaciones, reducir la velocidad, hidratar y monitorizar diuresis y creatinina.',

    insufHepatica: 'Sin ajuste específico. Vigilar tolerancia general a la infusión.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Fichas Técnicas de inmunoglobulinas humanas (IGIV/IGSC y específicas).',
      'Perez EE et al. Update on the use of immunoglobulin in human disease: A review of evidence. J Allergy Clin Immunol. 2017.',
      'Neunert C et al. American Society of Hematology 2019 guidelines for immune thrombocytopenia. Blood Adv. 2019.',
      'Van den Berg B et al. Guillain-Barré syndrome: pathogenesis, diagnosis, treatment and prognosis. Nat Rev Neurol. 2014.',
      'AABB. Technical Manual. 20th Edition. 2020.',
    ],
  },

});
