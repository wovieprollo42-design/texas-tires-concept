/* Texas Tires concept. Vanilla JS, no dependencies. */
(function () {
  'use strict';
  var d = document, root = d.documentElement;
  var NS = 'http://www.w3.org/2000/svg';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = 'en';

  function $(s, c) { return (c || d).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); }
  function el(tag, attrs, parent) {
    var n = d.createElementNS(NS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }

  /* ---------- Spanish copy ---------- */
  var ES = {
    'skip': 'Saltar al contenido',
    'concept': 'Vista previa de concepto por',
    'concept2': 'para Texas Tires. No es el sitio en vivo.',
    'concept3': 'Ver la oferta',
    'nav.services': 'Servicios', 'nav.size': 'Buscar medida', 'nav.financing': 'Financiamiento', 'nav.work': 'Trabajos', 'nav.locations': 'Ubicaciones', 'nav.quote': 'Cotizar',
    'hero.kicker': 'Llantas · Rines · Mecánica',
    'hero.h1a': 'Sal hoy mismo',
    'hero.h1b': 'con los rines que quieres.',
    'hero.lede': 'Llantas nuevas y usadas, rines personalizados, kits de levantamiento y mecánica completa en Haltom City. Escoge tu juego en la sala de exhibición y llévatelo el mismo día. Financiamiento sin crédito.',
    'hero.cta1': 'Buscar mi medida', 'hero.cta2': 'Llamar al taller',
    'proof1a': 'De por vida', 'proof1b': 'rotación y reparación gratis en llantas nuevas',
    'proof2a': '$5,000', 'proof2b': 'en aprobaciones, sin crédito',
    'proof3a': '7 días', 'proof3b': 'a la semana, dos talleres en Haltom City',
    'hero.note': 'Tu medida, en el costado de la llanta. Prueba el buscador abajo.',
    'sign.script': 'Llantas y Rines',
    'sign.1': 'Llantas nuevas y usadas', 'sign.2': 'Mecánica', 'sign.3': 'Cambio de aceite', 'sign.4': 'Alineación', 'sign.5': 'Frenos', 'sign.6': 'Financiamos sin revisar crédito',
    'size.eyebrow': 'Buscador de medida',
    'size.h2': 'Lee el costado de tu llanta. Tendremos tu medida lista.',
    'size.p': 'Escribe la medida impresa en el costado de tu llanta. Te explicamos qué significa y la enviamos con tu cotización, para que el juego correcto te esté esperando.',
    'size.label': 'Medida de tu llanta',
    'size.help': 'Se ve así: 275/55R20, LT265/70R17 o 35x12.50R20.',
    'size.hand': 'búscala aquí en tu llanta',
    'spec.width': 'Ancho', 'spec.ratio': 'Costado', 'spec.rim': 'Rin', 'spec.all': 'Altura total',
    'size.cta1': 'Cotizar esta medida', 'size.cta2': 'Llamar para ver existencia',
    'svc.eyebrow': 'Servicios',
    'svc.h2': 'Llantas, rines y mecánica bajo un mismo techo amarillo.',
    'tab.tires': 'Llantas', 'tab.wheels': 'Rines y lift', 'tab.repair': 'Mecánica', 'tab.maint': 'Mantenimiento',
    's.t1': 'Llantas nuevas', 's.t1p': 'Muchas marcas en existencia para autos, trocas y SUVs, a precios para tu presupuesto.',
    's.t2': 'Llantas usadas', 's.t2p': 'Llantas usadas de calidad cuando necesitas una solución segura y económica.',
    's.t3': 'Instalación', 's.t3p': 'Montadas e instaladas rápido para que sigas tu camino.',
    's.t4': 'Reparación de llantas', 's.t4p': 'Ponchaduras reparadas. Gratis de por vida en llantas nuevas compradas aquí.',
    's.t5': 'Rotación de llantas', 's.t5p': 'Desgaste parejo y más vida para tus llantas. Gratis de por vida en llantas nuevas compradas aquí.',
    's.t6': 'Balanceo', 's.t6p': 'Un manejo suave, sin vibración en carretera.',
    's.t7': 'Alineación', 's.t7p': 'Para que manejes derecho y tus llantas no se gasten disparejo.',
    's.w1': 'Rines personalizados', 's.w1p': 'Una de las selecciones más grandes en existencia. Escoge estilo, acabado, marca y medida.',
    's.w2': 'Llantas grandes y de alto rendimiento', 's.w2p': 'Medidas más grandes para trocas y llantas de ultra alto rendimiento para autos.',
    's.w3': 'Kits de levantamiento', 's.w3p': 'Levanta tu troca o Jeep y ponle las llantas grandes que quieres.',
    's.w4': 'Instalación el mismo día', 's.w4p': 'Escógelo en la sala de exhibición y sal con él el mismo día.',
    's.r1': 'Frenos', 's.r1p': 'Balatas, rotores y revisión completa cuando frenar no se siente bien.',
    's.r2': 'Diagnóstico de motor', 's.r2p': '¿Se prendió la luz de check engine? Encontramos la causa antes de reparar.',
    's.r3': 'Aire acondicionado', 's.r3p': 'Aire frío otra vez, antes de que llegue el calor de Texas.',
    's.r4': 'Sistema de enfriamiento', 's.r4p': 'Radiadores, mangueras y anticongelante para que no se caliente.',
    's.r5': 'Ejes y flechas', 's.r5p': 'Ejes, juntas homocinéticas y flechas que llevan la fuerza a tus ruedas.',
    's.r6': 'Mofles y escape', 's.r6p': 'Escape silencioso y sin fugas, y reparación de mofles.',
    's.r7': 'Baterías', 's.r7p': 'Prueba y cambio de batería. Se acabaron las mañanas sin arrancar.',
    's.r8': 'Bandas y mangueras', 's.r8p': 'Cambiamos bandas gastadas y mangueras rotas antes de que te dejen tirado.',
    's.m1': 'Cambio de aceite', 's.m1p': 'Cambio rápido de aceite y filtro para mantener sano tu motor.',
    's.m2': 'Afinación', 's.m2p': 'Bujías, filtros y revisiones que devuelven fuerza y rendimiento.',
    's.m3': 'Revisión de fluidos', 's.m3p': 'Revisamos y rellenamos líquido de frenos, transmisión, anticongelante y dirección.',
    's.m4': 'Filtros de aire', 's.m4p': 'Filtros limpios de motor y cabina para mejor rendimiento y aire más limpio.',
    's.m5': 'Limpiaparabrisas', 's.m5p': 'Buena visibilidad en cada tormenta del norte de Texas.',
    's.m6': 'Restauración de faros', 's.m6p': 'Faros opacos y amarillos, claros y brillantes otra vez.',
    's.m7': 'Mantenimiento preventivo', 's.m7p': 'Pequeños arreglos hoy que te ahorran reparaciones grandes mañana.',
    's.m8': 'Revisión mensual', 's.m8p': 'Una revisión rápida cada mes de llantas, fluidos y luces.',
    'ter.eyebrow': 'Sala de exhibición',
    'ter.h2': 'Calle, tierra o lodo. Tenemos el juego perfecto.',
    'ter.p': 'Grandes salas de exhibición con rines y llantas grandes para cualquier vehículo, y la mayor selección de rines personalizados y llantas de ultra alto rendimiento en existencia.',
    'ter.s': 'Calle', 'ter.sp': 'Llantas de perfil bajo y rines personalizados que llaman la atención.',
    'ter.d': 'Tierra', 'ter.dp': 'Llantas todo terreno que agarran en la grava y siguen silenciosas en carretera.',
    'ter.m': 'Lodo', 'ter.mp': 'Llantas agresivas para lodo y kits de levantamiento para trocas que trabajan duro.',
    'pro.eyebrow': 'Nuestra promesa',
    'pro.a': 'Compra llantas nuevas aquí y las rotamos y reparamos gratis.', 'pro.b': 'De por vida.',
    'pro.sub': 'El servicio al cliente es nuestra meta principal. Toda compra de llantas nuevas incluye nuestra garantía de rotación y reparación gratis de por vida.',
    'fin.eyebrow': 'Financiamiento',
    'fin.h2a': 'Financiamos.', 'fin.h2b': 'Sin revisar crédito.',
    'fin.p': 'Financia rines, llantas y reparaciones mecánicas. Aprobaciones de hasta $5,000 sin enganche, y te aprueban en segundos.',
    'fin.l1': 'Opciones con 0% de interés', 'fin.l2': 'Opción igual que contado', 'fin.l3': 'Renta con opción a compra', 'fin.l4': 'No necesitas crédito',
    'fin.cta': 'Solicitar financiamiento',
    'fin.taped': 'también lo dice el letrero',
    'fin.how': 'Cómo funciona',
    'fin.s1': 'Aplica en línea o en el taller', 'fin.s1p': 'Una forma corta. Sin enganche.',
    'fin.s2': 'Respuesta en segundos', 'fin.s2p': 'Aprobaciones de hasta $5,000, sin crédito.',
    'fin.s3': 'Sal el mismo día', 'fin.s3p': 'Con los rines y llantas que escogiste.',
    'fin.partners': 'Opciones de arrendamiento con',
    'fin.fine': 'Los programas de arrendamiento con opción a compra y de financiamiento los ofrecen proveedores externos. Los términos y la aprobación varían según el proveedor.',
    'work.eyebrow': 'Nuestro trabajo',
    'work.h2': 'Visita el edificio amarillo en Denton Hwy.',
    'work.p': 'Un vistazo al taller y a algunos de los vehículos que hemos trabajado. Subimos más cada semana en Facebook e Instagram.',
    'work.ig': 'Mira los trabajos más recientes en Instagram',
    'loc.eyebrow': 'Ubicaciones',
    'loc.h2': 'Dos talleres en Haltom City. Abiertos 7 días.',
    'loc.dir': 'Cómo llegar', 'loc.reviews': '539 reseñas en Google', 'loc.map': 'Ver en el mapa', 'loc.hours': 'Horario', 'loc.ms': 'Lun a Sáb', 'loc.sun': 'Domingo',
    'q.eyebrow': 'Cotiza',
    'q.h2': 'Dinos qué manejas. Te llamamos con un precio.',
    'q.p': 'Llantas, rines, reparaciones o financiamiento. Mándalo aquí, o llama al taller y habla con una persona real.',
    'q.name': 'Nombre', 'q.phone': 'Teléfono', 'q.vehicle': 'Vehículo', 'q.vehicle.ph': 'Año, marca y modelo', 'q.need': 'Necesito',
    'q.o1': 'Llantas', 'q.o2': 'Rines personalizados', 'q.o3': 'Mecánica', 'q.o4': 'Mantenimiento', 'q.o5': 'Financiamiento',
    'q.size': 'Medida de llanta (opcional)', 'q.shop': 'Taller preferido', 'q.msg': '¿Algo más?',
    'q.consent': 'Acepto recibir mensajes de texto informativos (recordatorios de citas, avisos de cuenta) de Alwahban Management (Texas Tires). La frecuencia varía. Pueden aplicar cargos por mensajes y datos. Responde HELP para ayuda o STOP para cancelar.',
    'q.send': 'Enviar mi solicitud',
    'foot.tag': 'Orgullosamente al servicio del norte de Texas.',
    'foot.family': 'Parte de la familia Texas Tires, con más de 30 ubicaciones.',
    'foot.shops': 'Talleres', 'foot.follow': 'Síguenos', 'foot.more': 'Más', 'foot.join': 'Únete al equipo', 'foot.privacy': 'Política de privacidad', 'foot.concept': 'Concepto de sitio web por',
    'hire.tag': 'Estamos contratando', 'hire.title': 'Técnicos de llantas con experiencia', 'hire.note': 'Se requiere experiencia previa.', 'hire.cta': 'Aplica ahora',
    'bar.call': 'Llamar', 'bar.dir': 'Llegar', 'bar.quote': 'Cotizar'
  };

  /* Strings built in JS, per language */
  var T = {
    en: {
      open: 'Open now · until ', closed: 'Closed · opens ', days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], today: '', tomorrow: 'tomorrow ',
      w2: function (i) { return i + ' in across the tread'; },
      r2: function (mm, r) { return mm + ' mm tall, ' + r + '% of the width'; },
      r2f: function (i) { return i + ' in tall sidewall'; },
      rim2: function (r) { return 'Fits a ' + r + ' inch wheel'; },
      dia2: function (t) { return 'About ' + t + ' turns per mile'; },
      pass: 'Passenger tire', lt: 'Light truck tire', st: 'Trailer tire', metric: 'Metric size', flot: 'Flotation size', radial: 'Radial', speed: function (l, m) { return 'Speed rating ' + l + ', up to ' + m + ' mph'; }, load: 'Load index ',
      bad: 'Keep typing, for example 275/55R20',
      need: 'Please add your name and phone so we can call you back.',
      sent: function (n) { return 'Thanks' + (n ? ', ' + n : '') + '. This is a concept preview, so nothing was sent. On the live site this request goes straight to the shop’s phone and inbox. To book now, call (817) 386-2444.'; },
      langBtn: 'ES', langLabel: 'Ver en español'
    },
    es: {
      open: 'Abierto · hasta las ', closed: 'Cerrado · abre ', days: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'], today: '', tomorrow: 'mañana ',
      w2: function (i) { return i + ' in de ancho de banda'; },
      r2: function (mm, r) { return mm + ' mm de alto, ' + r + '% del ancho'; },
      r2f: function (i) { return i + ' in de costado'; },
      rim2: function (r) { return 'Para rin de ' + r + ' pulgadas'; },
      dia2: function (t) { return 'Unas ' + t + ' vueltas por milla'; },
      pass: 'Llanta de pasajero', lt: 'Llanta de troca ligera', st: 'Llanta de remolque', metric: 'Medida métrica', flot: 'Medida de flotación', radial: 'Radial', speed: function (l, m) { return 'Índice de velocidad ' + l + ', hasta ' + m + ' mph'; }, load: 'Índice de carga ',
      bad: 'Sigue escribiendo, por ejemplo 275/55R20',
      need: 'Agrega tu nombre y teléfono para poder llamarte.',
      sent: function (n) { return 'Gracias' + (n ? ', ' + n : '') + '. Esta es una vista previa de concepto, así que no se envió nada. En el sitio real esta solicitud llega directo al teléfono y correo del taller. Para agendar ahora, llama al (817) 386-2444.'; },
      langBtn: 'EN', langLabel: 'View in English'
    }
  };
  function L() { return T[lang]; }

  /* ---------- i18n ---------- */
  var nodes = $$('[data-i18n]');
  nodes.forEach(function (n) { n.setAttribute('data-en', n.innerHTML); });
  var phNodes = $$('[data-i18n-ph]');
  phNodes.forEach(function (n) { n.setAttribute('data-en-ph', n.getAttribute('placeholder') || ''); });
  function setLang(next) {
    lang = next === 'es' ? 'es' : 'en';
    root.lang = lang;
    nodes.forEach(function (n) {
      var k = n.getAttribute('data-i18n');
      n.innerHTML = lang === 'es' && ES[k] ? ES[k] : n.getAttribute('data-en');
    });
    phNodes.forEach(function (n) {
      var k = n.getAttribute('data-i18n-ph');
      n.setAttribute('placeholder', lang === 'es' && ES[k] ? ES[k] : n.getAttribute('data-en-ph'));
    });
    $$('[data-lang-toggle]').forEach(function (b) { b.textContent = L().langBtn; b.setAttribute('aria-label', L().langLabel); });
    store('tt-lang', lang);
    updateStatus();
    decode(true);
  }
  $$('[data-lang-toggle]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(lang === 'en' ? 'es' : 'en'); });
  });

  /* ---------- hero wheel ---------- */
  var wheel = $('.wheel');
  if (wheel) {
    var tread = $('[data-tread]', wheel);
    for (var i = 0; i < 60; i++) {
      var a = i * 6;
      el('rect', { x: -9, y: -297, width: 18, height: 20, rx: 2.5, fill: '#1f1f22', transform: 'rotate(' + a + ')' }, tread);
      el('rect', { x: -5, y: -276, width: 10, height: 12, rx: 2, fill: '#18181a', transform: 'rotate(' + (a + 3) + ')' }, tread);
    }
    el('circle', { r: 262, stroke: '#070708', 'stroke-width': 2 }, tread);
    var holes = $('[data-holes]', wheel);
    for (var h = 0; h < 36; h++) {
      var ring = [102, 120, 138][h % 3];
      var ang = h * 10 * Math.PI / 180;
      el('circle', { cx: (Math.cos(ang) * ring).toFixed(1), cy: (Math.sin(ang) * ring).toFixed(1), r: 3.8 }, holes);
    }
    var spokes = $('[data-spokes]', wheel);
    for (var s = 0; s < 5; s++) {
      var g = el('g', { transform: 'rotate(' + (s * 72) + ')' }, spokes);
      var arm = { fill: '#111113', stroke: 'url(#chrome)', 'stroke-width': 3, 'stroke-linejoin': 'round' };
      el('path', Object.assign({ d: 'M-5,-50L-19,-50Q-25,-112 -42,-180L-15,-181Q-10,-112 -5,-50Z' }, arm), g);
      el('path', Object.assign({ d: 'M5,-50L19,-50Q25,-112 42,-180L15,-181Q10,-112 5,-50Z' }, arm), g);
      el('path', { d: 'M-12,-64Q-17,-118 -29,-168', stroke: '#f9ef06', 'stroke-width': 1.6, 'stroke-linecap': 'round', opacity: .9 }, g);
      el('path', { d: 'M12,-64Q17,-118 29,-168', stroke: '#f9ef06', 'stroke-width': 1.6, 'stroke-linecap': 'round', opacity: .9 }, g);
    }
    var lugs = $('[data-lugs]', wheel);
    for (var l = 0; l < 6; l++) {
      var la = (l * 60 + 30) * Math.PI / 180;
      var cx = (Math.cos(la) * 38).toFixed(1), cy = (Math.sin(la) * 38).toFixed(1);
      el('circle', { cx: cx, cy: cy, r: 7 }, lugs);
      el('circle', { cx: cx, cy: cy, r: 3, fill: '#2a2a2c' }, lugs);
    }

    var heroWheel = $('.hero-wheel');
    var intro = reduce ? 1 : 0, introStart = null, ticking = false;
    function ease(t) { return 1 - Math.pow(1 - t, 3); }
    function frame(ts) {
      ticking = false;
      if (intro < 1) {
        if (introStart === null) introStart = ts;
        intro = Math.min(1, (ts - introStart) / 1400);
      }
      var e = ease(intro);
      var rot = (window.scrollY || 0) * 0.32 - (1 - e) * 240;
      wheel.style.setProperty('--rot', rot.toFixed(2) + 'deg');
      if (heroWheel) heroWheel.style.transform = intro < 1 ? 'translateX(' + ((1 - e) * 38).toFixed(2) + '%)' : '';
      if (intro < 1) request();
    }
    function request() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
    if (!reduce) {
      request();
      window.addEventListener('scroll', request, { passive: true });
    }
  }

  /* ---------- sidewall arc lugs ---------- */
  var arcLugs = $('[data-arc-lugs]');
  if (arcLugs) {
    for (var k = -27; k <= 27; k += 2.7) {
      el('rect', { x: 314, y: 64, width: 12, height: 24, rx: 2, transform: 'rotate(' + k.toFixed(2) + ' 320 900)' }, arcLugs);
    }
  }

  /* ---------- tire size decoder ---------- */
  var SPEED = { L: 75, M: 81, N: 87, P: 93, Q: 99, R: 106, S: 112, T: 118, U: 124, H: 130, V: 149, W: 168, Y: 186 };
  var input = $('#size-input');
  var arcText = $('[data-arc-text]');
  var state = $('[data-size-state]');
  var wheelSize = $('[data-wheel-size]');
  var lastGood = null;
  var specs = $('[data-specs]');
  var meta = null;
  if (specs) {
    meta = d.createElement('p');
    meta.className = 'spec-meta';
    specs.parentNode.insertBefore(meta, specs.nextSibling);
  }

  function parse(raw) {
    var s = String(raw || '').toUpperCase().replace(/\s+/g, '');
    var m = s.match(/^(P|LT|ST|T)?(\d{3})\/(\d{2})(ZR|R|D|B|-)(\d{2})(?:(\d{2,3})(?:\/\d{2,3})?([A-Z]))?$/);
    if (m) {
      var w = +m[2], r = +m[3], rim = +m[5];
      if (w < 125 || w > 395 || r < 25 || r > 90 || rim < 12 || rim > 30) return null;
      var side = w * r / 100;
      var dia = rim + 2 * side / 25.4;
      return { kind: 'metric', type: m[1] || '', w: w, r: r, cons: m[4] === '-' ? 'R' : m[4], rim: rim, side: side, dia: dia, load: m[6] || '', speed: m[7] || '' };
    }
    m = s.match(/^(LT)?(\d{2}(?:\.\d{1,2})?)X(\d{1,2}(?:\.\d{1,2})?)(R|-)?(\d{2})(?:LT)?(?:(\d{2,3})([A-Z]))?$/);
    if (m) {
      var D = +m[2], W = +m[3], R = +m[5];
      if (D < 24 || D > 44 || W < 7 || W > 20 || R < 14 || R > 26 || D <= R) return null;
      return { kind: 'flot', type: 'LT', dia: D, wIn: W, rim: R, cons: 'R', load: m[6] || '', speed: m[7] || '', D: m[2], W: m[3] };
    }
    return null;
  }

  function setPart(part, text) {
    var t = $('[data-part="' + part + '"]', arcText);
    if (t) t.textContent = text;
  }

  function decode(silent) {
    if (!input) return;
    var p = parse(input.value);
    if (state) state.className = 'size-state ' + (p ? 'ok' : (input.value.trim() ? 'bad' : ''));
    if (!p) {
      if (state) state.setAttribute('aria-label', L().bad);
      if (!lastGood) return;
      p = lastGood;
    } else {
      if (state) state.removeAttribute('aria-label');
      lastGood = p;
    }
    var o = function (k) { return $('[data-out="' + k + '"]'); };
    var turns = Math.round(63360 / (Math.PI * p.dia));
    var sizeLabel;
    if (p.kind === 'metric') {
      setPart('type', p.type); setPart('width', p.w); setPart('slash', '/'); setPart('ratio', p.r); setPart('cons', p.cons); setPart('rim', p.rim);
      o('width').textContent = p.w + ' mm';
      o('width2').textContent = L().w2((p.w / 25.4).toFixed(1));
      o('ratio').textContent = p.r + '%';
      o('ratio2').textContent = L().r2(Math.round(p.side), p.r);
      sizeLabel = p.type + p.w + '/' + p.r + p.cons + p.rim;
    } else {
      setPart('type', 'LT'); setPart('width', p.D + 'X' + p.W); setPart('slash', ''); setPart('ratio', ''); setPart('cons', 'R'); setPart('rim', p.rim);
      o('width').textContent = p.W + ' in';
      o('width2').textContent = Math.round(p.wIn * 25.4) + ' mm';
      var sideIn = (p.dia - p.rim) / 2;
      o('ratio').textContent = Math.round(sideIn / p.wIn * 100) + '%';
      o('ratio2').textContent = L().r2f(sideIn.toFixed(1));
      sizeLabel = p.D + 'X' + p.W + 'R' + p.rim;
    }
    o('rim').textContent = p.rim + ' in';
    o('rim2').textContent = L().rim2(p.rim);
    o('dia').textContent = p.dia.toFixed(1) + ' in';
    o('dia2').textContent = L().dia2(turns);

    var bits = [];
    bits.push(p.kind === 'flot' ? L().flot : p.type === 'LT' ? L().lt : p.type === 'ST' ? L().st : p.type === 'P' ? L().pass : L().metric);
    if (p.cons === 'R' || p.cons === 'ZR') bits.push(L().radial);
    if (p.load) bits.push(L().load + p.load);
    if (p.speed && SPEED[p.speed]) bits.push(L().speed(p.speed, SPEED[p.speed]));
    if (meta) meta.textContent = bits.join(' · ');

    var len = sizeLabel.length;
    if (arcText) arcText.parentNode.style.fontSize = Math.min(62, Math.floor(560 / (len * 0.8))) + 'px';
    if (wheelSize) wheelSize.textContent = sizeLabel;
    $$('.chip').forEach(function (c) { c.setAttribute('aria-pressed', String(c.getAttribute('data-size').toUpperCase() === input.value.trim().toUpperCase())); });
    if (!silent) flash();
  }

  var flashTimer;
  function flash() {
    if (!arcText) return;
    var parts = $$('tspan[data-part]', arcText);
    parts.forEach(function (t) { t.classList.add('on'); });
    clearTimeout(flashTimer);
    flashTimer = setTimeout(function () { parts.forEach(function (t) { t.classList.remove('on'); }); }, 700);
  }

  if (input) {
    input.addEventListener('input', function () { decode(); });
    $('[data-size-form]').addEventListener('submit', function (e) { e.preventDefault(); decode(); });
    $$('.chip').forEach(function (c) {
      c.addEventListener('click', function () { input.value = c.getAttribute('data-size'); decode(); });
    });
    var highlight = function (part, on) {
      var targets = part === 'all' ? $$('tspan[data-part]', arcText) : $$('tspan[data-part="' + part + '"]', arcText);
      targets.forEach(function (t) { t.classList.toggle('on', on); });
    };
    $$('.spec').forEach(function (sp) {
      var part = sp.getAttribute('data-for');
      ['mouseenter', 'focus'].forEach(function (ev) { sp.addEventListener(ev, function () { sp.classList.add('on'); highlight(part, true); }); });
      ['mouseleave', 'blur'].forEach(function (ev) { sp.addEventListener(ev, function () { sp.classList.remove('on'); highlight(part, false); }); });
    });
    decode(true);
  }

  /* "Quote this size" pre-fills the form */
  $$('[data-size-quote]').forEach(function (a) {
    a.addEventListener('click', function () {
      var q = $('#q-size'), need = $('#q-need');
      if (q && lastGood) q.value = input.value.trim().toUpperCase();
      if (need) need.selectedIndex = 0;
    });
  });

  /* ---------- service tabs ---------- */
  var tabs = $$('.svc-tab');
  function selectTab(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      var panel = d.getElementById(t.getAttribute('aria-controls'));
      if (panel) {
        panel.hidden = !on;
        if (on) { panel.classList.remove('enter'); void panel.offsetWidth; panel.classList.add('enter'); }
      }
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { selectTab(t); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') n = tabs[0];
      if (e.key === 'End') n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); selectTab(n, true); }
    });
  });

  /* ---------- open / closed (shop time, America/Chicago) ---------- */
  var HOURS = { 0: [600, 960], 1: [480, 1140], 2: [480, 1140], 3: [480, 1140], 4: [480, 1140], 5: [480, 1140], 6: [480, 1140] };
  function fmt(mins) {
    var h = Math.floor(mins / 60), m = mins % 60;
    var ap = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    return h + (m ? ':' + String(m).padStart(2, '0') : '') + ap;
  }
  function shopNow() {
    try {
      var parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
      var o = {}; parts.forEach(function (p) { o[p.type] = p.value; });
      return { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(o.weekday), mins: (+o.hour % 24) * 60 + (+o.minute) };
    } catch (e) { var n = new Date(); return { day: n.getDay(), mins: n.getHours() * 60 + n.getMinutes() }; }
  }
  function updateStatus() {
    var now = shopNow(), t = HOURS[now.day], txt, open = false;
    if (now.mins >= t[0] && now.mins < t[1]) { open = true; txt = L().open + fmt(t[1]); }
    else if (now.mins < t[0]) { txt = L().closed + fmt(t[0]); }
    else { var nd = (now.day + 1) % 7; txt = L().closed + L().tomorrow + fmt(HOURS[nd][0]); }
    $$('[data-status]').forEach(function (s) {
      s.classList.toggle('is-open', open);
      s.classList.toggle('is-closed', !open);
      var span = $('[data-status-text]', s); if (span) span.textContent = txt;
    });
    $$('.hours tr').forEach(function (tr) {
      var days = tr.getAttribute('data-days');
      var today = days === '0' ? now.day === 0 : now.day >= 1 && now.day <= 6;
      tr.classList.toggle('today', today);
    });
  }
  updateStatus();
  setInterval(updateStatus, 60000);

  /* ---------- mobile menu ---------- */
  var menuBtn = $('.menu-btn'), nav = $('#nav'), header = $('.site-header');
  function closeMenu() { if (!nav) return; nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = !nav.classList.contains('open');
      nav.style.setProperty('--nav-top', Math.round(header.getBoundingClientRect().bottom) + 'px');
      nav.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    $$('a', nav).forEach(function (a) { a.addEventListener('click', closeMenu); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  /* ---------- reveal on scroll ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add('in'); });
  }

  /* ---------- map ---------- */
  var mapFrame = $('[data-map-frame]');
  var locs = $$('.loc');
  function loadMap(src) { if (mapFrame && mapFrame.getAttribute('src') !== src) mapFrame.setAttribute('src', src); }
  if (mapFrame) {
    if ('IntersectionObserver' in window) {
      var mo = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { loadMap(mapFrame.getAttribute('data-src')); mo.disconnect(); }
      }, { rootMargin: '400px 0px' });
      mo.observe(mapFrame);
    } else { loadMap(mapFrame.getAttribute('data-src')); }
  }
  locs.forEach(function (loc) {
    var btn = $('.loc-map-btn', loc);
    if (btn) btn.addEventListener('click', function () {
      locs.forEach(function (x) { x.classList.toggle('is-active', x === loc); });
      loadMap(loc.getAttribute('data-map'));
    });
  });

  /* ---------- quote form (concept: no send) ---------- */
  var form = $('[data-quote-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#q-name'), phone = $('#q-phone'), note = $('[data-form-note]');
      var ok = true;
      [name, phone].forEach(function (f) {
        var bad = !f.value.trim() || (f === phone && f.value.replace(/\D/g, '').length < 10);
        f.setAttribute('aria-invalid', String(bad));
        if (bad) ok = false;
      });
      note.classList.add('show');
      if (!ok) { note.textContent = L().need; (name.value.trim() ? phone : name).focus(); return; }
      note.textContent = L().sent(name.value.trim().split(' ')[0]);
    });
  }

  /* ---------- language on load ---------- */
  var saved = store('tt-lang');
  var qs = /[?&]lang=(es|en)/.exec(location.search);
  if (qs) setLang(qs[1]); else if (saved === 'es') setLang('es');
})();
