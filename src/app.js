(function () {
  var KEY = "dart-turnier-v1";
  var BYE = -1, TBD = null;
  var MODES = ["501 Double Out", "501 Single Out", "301 Double Out", "301 Single Out", "Cricket"];
  // Mit drei Darts nicht werfbare Punktzahlen
  var IMPOSSIBLE = [163, 166, 169, 172, 173, 175, 176, 178, 179];
  // Restwerte ≤ 170, die sich mit Doppel-Out nicht in einer Aufnahme checken lassen
  var BOGEY = [159, 162, 163, 165, 166, 168, 169];
  var QUICK = [26, 41, 45, 60, 81, 85, 100, 121, 140, 180];

  function blankState() {
    return { phase: "setup", name: "Dartabend", count: 8, names: [], mode: MODES[0], firstTo: 2, shuffle: true, full: true,
             players: [], slots: [], results: {}, confirm: false, live: null };
  }
  var S;
  try { S = JSON.parse(localStorage.getItem(KEY)); } catch (e) { S = null; }
  if (!S || !S.phase) S = blankState();
  if (S.full == null) S.full = true;
  S.confirm = false;
  var typed = "", note = null;
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function legWord(n) { return n === 1 ? " Leg" : " Legs"; }
  function startScore() { return parseInt(S.mode, 10) || 0; }
  function doubleOut() { return /Double/.test(S.mode); }
  function hasCounter() { return startScore() > 0; }

  // Standard-Setzliste: 1 trifft auf N, 2 auf N-1 ... Freilose gehen so an die oberen Setzplätze.
  function seedOrder(n) {
    var o = [1];
    while (o.length < n) { var m = o.length * 2 + 1; o = o.reduce(function (a, s) { return a.concat([s, m - s]); }, []); }
    return o;
  }
  function roundName(matches) {
    return { 1: "Finale", 2: "Halbfinale", 4: "Viertelfinale", 8: "Achtelfinale", 16: "Sechzehntelfinale" }[matches] || "Runde";
  }

  function startTournament(reshuffle) {
    var players = [];
    for (var i = 0; i < S.count; i++) {
      var n = (S.names[i] || "").trim();
      players.push({ name: n || "Spieler " + (i + 1) });
    }
    var order = players.map(function (_, i) { return i; });
    if (S.shuffle || reshuffle) {
      for (var j = order.length - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var t = order[j]; order[j] = order[k]; order[k] = t; }
    }
    var N = 1; while (N < players.length) N *= 2;
    S.players = players;
    S.slots = seedOrder(N).map(function (s) { return s <= players.length ? order[s - 1] : BYE; });
    S.results = {};
    S.live = null;
    S.phase = "run";
    S.confirm = false;
    save(); render();
  }

  // Ein Ergebnis gilt nur, solange dieselben zwei Spieler im Spiel stehen.
  function resolve(m) {
    var a = m.a, b = m.b;
    m.winner = TBD; m.loser = TBD; m.res = null;
    if (a === BYE && b === BYE) { m.winner = BYE; m.loser = BYE; }
    else if (a === BYE) { m.winner = b; m.loser = BYE; }
    else if (b === BYE) { m.winner = a; m.loser = BYE; }
    else if (a !== TBD && b !== TBD) {
      var r = S.results[m.id];
      if (r && r.a === a && r.b === b) {
        m.res = r;
        if (r.w === a || r.w === b) { m.winner = r.w; m.loser = r.w === a ? b : a; }
      }
    }
    m.bye = a === BYE || b === BYE;
    m.ready = a !== TBD && b !== TBD && !m.bye;
    m.playable = m.ready && m.winner === TBD;
    return m;
  }

  // Der Baum wird aus Setzung und Ergebnissen abgeleitet. Jede Runde teilt das Feld:
  // Sieger spielen um die vorderen Plätze weiter, Verlierer um die hinteren.
  function compute() {
    var all = [], places = [], groups = {};
    function node(ent, p, depth, group) {
      var n = ent.length;
      if (n === 1) {
        if (ent[0] !== BYE && ent[0] !== TBD) places.push({ p: ent[0], from: p, label: p + "." });
        return;
      }
      if (group !== "main" && !S.full && n > 2) {
        var k = ent.filter(function (e) { return e !== BYE; }).length;
        var label = k > 1 ? p + ".–" + (p + k - 1) + "." : p + ".";
        ent.filter(function (e) { return e !== BYE && e !== TBD; }).forEach(function (e) { places.push({ p: e, from: p, label: label }); });
        return;
      }
      var title = n === 2 ? (p === 1 ? "Finale" : "Spiel um Platz " + p) : p === 1 ? roundName(n / 2) : "Platz " + p + "–" + (p + n - 1);
      var ms = [];
      for (var i = 0; i < n / 2; i++) {
        var m = resolve({ id: "p" + p + "n" + n + "m" + i, a: ent[2 * i], b: ent[2 * i + 1], p: p, depth: depth, group: group, title: title });
        ms.push(m); all.push(m);
        if (group !== "main") groups[group].matches.push(m);
      }
      node(ms.map(function (m) { return m.winner; }), p, depth + 1, group);
      var lg = group;
      if (group === "main") {
        lg = "g" + (p + n / 2);
        var hi = p + n - 1;
        groups[lg] = { from: p + n / 2, title: n === 2 ? null : n === 4 ? "Spiel um Platz 3" : "Platz " + (p + n / 2) + "–" + hi, matches: [] };
      }
      node(ms.map(function (m) { return m.loser; }), p + n / 2, depth + 1, lg);
    }
    node(S.slots.slice(), 1, 0, "main");
    // Spielreihenfolge: Runde für Runde, innerhalb einer Runde zuerst die hinteren Plätze, das Finale ganz am Schluss
    all.sort(function (x, y) { return x.depth - y.depth || y.p - x.p || x.id.localeCompare(y.id); });
    var no = 1;
    all.forEach(function (m) { if (!m.bye) m.no = no++; });
    places.sort(function (x, y) { return x.from - y.from || S.players[x.p].name.localeCompare(S.players[y.p].name); });
    var gl = Object.keys(groups).map(function (k) { return groups[k]; })
      .filter(function (g) { return g.matches.some(function (m) { return !m.bye; }); })
      .sort(function (x, y) { return x.from - y.from; });
    return { all: all, places: places, groups: gl, final: all.filter(function (m) { return m.id === "p1n2m0"; })[0] };
  }

  function nameOf(p) { return p === BYE ? "Freilos" : p === TBD ? "offen" : S.players[p].name; }

  function matchCard(m) {
    var cls = "match" + (m.bye ? " bye" : "") + (m.playable ? " live" : "");
    var rows = ["a", "b"].map(function (side) {
      var p = m[side], real = p !== BYE && p !== TBD;
      var st = m.winner !== TBD && m.ready ? (m.winner === p ? " win" : " lose") : "";
      var legs = m.res && m.res["l" + side] != null ? m.res["l" + side] : "";
      return '<div class="mrow' + st + '">' +
        '<button class="pick' + (real ? "" : " ph") + '" data-id="' + m.id + '" data-side="' + side + '"' + (real && m.ready ? "" : " disabled") +
        ' title="' + (real ? "Als Sieger markieren" : "") + '">' + esc(nameOf(p)) + "</button>" +
        (m.bye ? "" : '<input class="legs" type="number" inputmode="numeric" min="0" max="' + S.firstTo + '" aria-label="Legs ' + esc(nameOf(p)) +
          '" data-id="' + m.id + '" data-side="' + side + '" value="' + legs + '" placeholder="–"' + (m.ready ? "" : " disabled") + ">") +
        "</div>";
    }).join("");
    var running = S.live && S.live.id === m.id;
    var tag = m.playable
      ? (hasCounter() ? '<button class="go" data-go="' + m.id + '">' + (running ? "▶ Weiter" : "▶ Spiel starten") + "</button>" : '<span class="tag">an die Scheibe</span>')
      : m.bye ? "<span>Freilos</span>" : m.winner !== TBD ? "<span>fertig</span>" : "<span>wartet</span>";
    return '<div class="' + cls + '"><div class="mhead"><span>' + (m.no ? "Spiel " + m.no : "") + "</span>" + tag + "</div>" + rows + "</div>";
  }
  function labelled(m) { return '<div class="lab"><span class="eyebrow">' + m.title + "</span>" + matchCard(m) + "</div>"; }

  function renderSetup() {
    var h = '<header class="head"><div class="board"><div class="ring" aria-hidden="true"></div><div><div class="eyebrow">Turnierplan</div><h1>Neues Dart-Turnier</h1></div></div></header>';
    h += '<section class="panel">';
    h += '<div class="row">' +
      '<div class="field"><label for="tname">Turniername</label><input class="txt" id="tname" value="' + esc(S.name) + '"></div>' +
      '<div class="field"><span class="lbl">Anzahl Spieler</span><div class="row" style="gap:10px;align-items:center">' +
        '<div class="stepper"><button id="minus" aria-label="Weniger Spieler">−</button><output id="cnt">' + S.count + '</output><button id="plus" aria-label="Mehr Spieler">+</button></div>' +
        '<div class="quick">' + [4, 6, 8, 12, 16].map(function (n) { return '<button data-n="' + n + '" aria-pressed="' + (S.count === n) + '">' + n + "</button>"; }).join("") + "</div>" +
      "</div></div></div>";
    h += '<div class="field"><span class="lbl">Namen</span><div class="names">';
    for (var i = 0; i < S.count; i++) {
      h += '<label class="nm"><span>' + (i + 1) + '</span><input id="n' + i + '" data-i="' + i + '" placeholder="Spieler ' + (i + 1) + '" value="' + esc(S.names[i] || "") + '" autocomplete="off"></label>';
    }
    h += '</div><div class="hint">Leere Felder heißen automatisch „Spieler 1“, „Spieler 2“ usw. Die Namen bleiben auf diesem Gerät gespeichert.</div></div>';
    h += '<div class="row">' +
      '<div class="field"><label for="mode">Spielmodus</label><select id="mode">' + MODES.map(function (m) { return "<option" + (m === S.mode ? " selected" : "") + ">" + m + "</option>"; }).join("") + "</select></div>" +
      '<div class="field"><label for="ft">Gewonnen bei</label><select id="ft">' + [1, 2, 3, 4, 5].map(function (n) { return '<option value="' + n + '"' + (n === S.firstTo ? " selected" : "") + ">First to " + n + legWord(n) + "</option>"; }).join("") + "</select></div>" +
      '<label class="check"><input type="checkbox" id="shuffle"' + (S.shuffle ? " checked" : "") + "> Paarungen auslosen</label>" +
      '<label class="check"><input type="checkbox" id="full"' + (S.full ? " checked" : "") + "> Alle Plätze ausspielen</label>" +
      "</div>";
    var N = 1; while (N < S.count) N *= 2;
    var byes = N - S.count;
    h += '<div class="row" style="justify-content:space-between;align-items:center"><div class="hint">' +
      S.count + " Spieler · K.-o. " + (S.full ? "mit Spielen um alle Plätze" : "mit Spiel um Platz 3") +
      (byes ? " · " + byes + (byes === 1 ? " Freilos" : " Freilose") + " in Runde 1" : "") +
      (hasCounter() ? " · Punktezähler " + startScore() : "") +
      '</div><button class="btn primary" id="start">Turnier starten</button></div>';
    h += "</section>";
    return h;
  }

  // labelExcept: in Platzierungsgruppen jede Karte beschriften, außer wenn der Titel schon über der Gruppe steht
  function columns(ms, labelExcept) {
    var by = {};
    ms.forEach(function (m) { (by[m.depth] = by[m.depth] || []).push(m); });
    return Object.keys(by).sort(function (a, b) { return a - b; }).map(function (d) {
      var col = by[d].sort(function (x, y) { return x.p - y.p || x.id.localeCompare(y.id); });
      return { title: col[0].title, html: col.map(function (m) { return labelExcept !== undefined && m.title !== labelExcept ? labelled(m) : matchCard(m); }).join("") };
    });
  }

  function renderRun() {
    var T = compute();
    var real = T.all.filter(function (m) { return !m.bye; });
    var done = real.filter(function (m) { return m.winner !== TBD; }).length;
    var fin = T.final;
    var h = '<header class="head"><div class="board"><div class="ring" aria-hidden="true"></div><div><div class="eyebrow">' + esc(S.mode) + " · First to " + S.firstTo + legWord(S.firstTo) +
      "</div><h1>" + esc(S.name || "Dart-Turnier") + '</h1><div class="meta">' + S.players.length + " Spieler · " + done + " von " + real.length + " Spielen gespielt</div></div></div>";
    h += '<div class="actions">' + (S.confirm
      ? '<div class="confirm"><span>Alle Ergebnisse löschen?</span><button class="btn danger" id="reset-yes">Ja, neues Turnier</button><button class="btn" id="redraw">Gleiche Spieler neu auslosen</button><button class="btn" id="reset-no">Abbrechen</button></div>'
      : '<button class="btn" id="reset">Neues Turnier</button>') + "</div></header>";
    h += '<div class="progress" aria-hidden="true"><i style="width:' + (real.length ? (done / real.length) * 100 : 0) + '%"></i></div>';

    h += '<div class="top"><section class="sec">';
    if (fin && fin.winner !== TBD && fin.winner !== BYE) {
      h += '<div class="champ"><span class="eyebrow">Turniersieger</span><strong>' + esc(nameOf(fin.winner)) + "</strong>" +
        (fin.res && fin.res.la != null && fin.res.lb != null ? '<span class="meta">Finale ' + fin.res.la + ":" + fin.res.lb + " gegen " + esc(nameOf(fin.loser)) + "</span>" : "") + "</div>";
    }
    var next = T.all.filter(function (m) { return m.playable; });
    h += "<h2>Jetzt dran</h2>";
    h += next.length ? '<div class="next">' + next.map(labelled).join("") + "</div>"
      : '<div class="empty">' + (done === real.length ? "Alle Spiele sind gespielt." : "Warte auf Ergebnisse aus der vorigen Runde.") + "</div>";
    h += '<p class="hint">' + (hasCounter() ? "„Spiel starten“ öffnet den Punktezähler. " : "") +
      "Ohne Zähler: auf einen Namen tippen, um den Sieger zu markieren, oder die Legs eintragen. Nochmal tippen hebt das Ergebnis auf.</p>";
    h += "</section>";

    var placed = {}; T.places.forEach(function (x) { placed[x.p] = 1; });
    var stillIn = S.players.map(function (_, i) { return i; }).filter(function (i) { return !placed[i]; });
    h += '<section class="sec"><h2>Platzierungen</h2><table class="table"><tbody>';
    T.places.forEach(function (x) {
      h += '<tr class="' + (x.from === 1 ? "p1" : "") + '"><td class="pl">' + x.label + "</td><td>" + esc(nameOf(x.p)) + "</td></tr>";
    });
    if (stillIn.length) h += '<tr class="open"><td class="pl">–</td><td>Noch offen: ' + stillIn.map(function (i) { return esc(nameOf(i)); }).join(", ") + "</td></tr>";
    h += "</tbody></table></section></div>";

    h += '<section class="sec"><h2>Turnierbaum</h2><div class="bracket-wrap"><div class="bracket">';
    columns(T.all.filter(function (m) { return m.group === "main"; })).forEach(function (c) {
      h += '<div class="round"><h3>' + c.title + '</h3><div class="round-m">' + c.html + "</div></div>";
    });
    h += "</div></div></section>";

    if (T.groups.length) {
      h += '<section class="sec"><h2>Platzierungsspiele</h2><div class="groups">';
      T.groups.forEach(function (g) {
        h += '<div class="pgroup">' + (g.title ? "<h3>" + g.title + "</h3>" : "") + '<div class="bracket-wrap"><div class="pcols">';
        columns(g.matches.filter(function (m) { return !m.bye; }), g.title).forEach(function (c) { h += '<div class="pcol">' + c.html + "</div>"; });
        h += "</div></div></div>";
      });
      h += "</div></section>";
    }
    return h + renderCounter(T);
  }

  // ---------- Punktezähler ----------
  function newLive(m) {
    var r = m.res || {};
    var s = startScore();
    return { id: m.id, a: m.a, b: m.b, open: true, legs: [r.la || 0, r.lb || 0], rest: [s, s], turn: 0, starter: 0,
             stats: [{ pts: 0, visits: 0 }, { pts: 0, visits: 0 }], last: [null, null], done: false, hist: [] };
  }
  function openCounter(id) {
    var m = compute().all.filter(function (x) { return x.id === id; })[0];
    if (!m || !m.ready) return;
    if (!S.live || S.live.id !== id || S.live.a !== m.a || S.live.b !== m.b) S.live = newLive(m);
    S.live.open = true; typed = ""; note = null;
    save(); render();
  }
  function writeResult(L) {
    var r = S.results[L.id];
    if (!r || r.a !== L.a || r.b !== L.b) r = { a: L.a, b: L.b, w: null };
    r.la = L.legs[0]; r.lb = L.legs[1];
    r.w = L.done ? (L.legs[0] > L.legs[1] ? L.a : L.b) : null;
    S.results[L.id] = r;
  }
  function submit(v) {
    var L = S.live;
    if (!L || L.done) return;
    if (isNaN(v) || v > 180 || IMPOSSIBLE.indexOf(v) >= 0) { note = { t: v + " kann man mit drei Darts nicht werfen.", ok: false }; typed = ""; return render(); }
    var snap = JSON.parse(JSON.stringify(L)); delete snap.hist; L.hist.push(snap);
    if (L.hist.length > 60) L.hist.shift();
    var t = L.turn, who = nameOf(t ? L.b : L.a), nr = L.rest[t] - v;
    L.stats[t].visits++;
    if (nr < 0 || (doubleOut() && nr === 1)) {
      L.last[t] = "Bust"; note = { t: "Überworfen! " + who + " bleibt auf " + L.rest[t] + ".", ok: false };
      L.turn = 1 - t;
    } else {
      L.stats[t].pts += v; L.rest[t] = nr; L.last[t] = v; note = null;
      if (nr === 0) {
        L.legs[t]++;
        if (L.legs[t] >= S.firstTo) { L.done = true; note = { t: who + " gewinnt das Spiel!", ok: true }; }
        else {
          L.starter = 1 - L.starter; L.turn = L.starter; L.rest = [startScore(), startScore()]; L.last = [null, null];
          note = { t: "Leg für " + who + " (" + L.legs[0] + ":" + L.legs[1] + "). " + nameOf(L.starter ? L.b : L.a) + " beginnt.", ok: true };
        }
        writeResult(L);
      } else L.turn = 1 - t;
    }
    typed = ""; save(); render();
  }
  function undo() {
    var L = S.live; if (!L || !L.hist.length) return;
    var h = L.hist, prev = h.pop(); prev.hist = h; prev.open = true;
    S.live = prev; writeResult(prev); typed = ""; note = { t: "Letzte Aufnahme zurückgenommen.", ok: true };
    save(); render();
  }
  function finishable(rest) {
    if (doubleOut()) return rest <= 170 && rest > 1 && BOGEY.indexOf(rest) < 0;
    return rest <= 180 && IMPOSSIBLE.indexOf(rest) < 0;
  }

  function renderCounter(T) {
    var L = S.live;
    if (!L || !L.open) return "";
    var m = T.all.filter(function (x) { return x.id === L.id; })[0];
    if (!m || m.a !== L.a || m.b !== L.b) { S.live = null; return ""; }
    var h = '<div class="ov" role="dialog" aria-modal="true" aria-label="Punktezähler"><div class="sheet">';
    h += '<div class="sheet-head"><div><div class="eyebrow">' + (m.no ? "Spiel " + m.no + " · " : "") + m.title + "</div><h2>" + esc(S.mode) + " · First to " + S.firstTo + "</h2></div>" +
      '<button class="x" id="c-close" aria-label="Zähler schließen">✕</button></div>';
    h += '<div class="duel">' + [0, 1].map(function (i) {
      var st = L.stats[i], avg = st.visits ? (st.pts / st.visits).toFixed(1) : "–";
      var dots = ""; for (var k = 0; k < S.firstTo; k++) dots += '<i class="' + (k < L.legs[i] ? "f" : "") + '"></i>';
      return '<div class="pl-card' + (!L.done && L.turn === i ? " on" : "") + '"><div class="who">' + esc(nameOf(i ? L.b : L.a)) + "</div>" +
        '<div class="dots" aria-label="' + L.legs[i] + legWord(L.legs[i]) + '">' + dots + "</div>" +
        '<div class="rest">' + L.rest[i] + "</div>" +
        '<div class="sm"><span>Ø ' + avg + "</span><span>" + (L.last[i] != null ? "zuletzt " + L.last[i] : "") + "</span></div>" +
        '<div class="sm">' + (!L.done && finishable(L.rest[i]) ? '<span class="fin">Finish möglich</span>' : "<span>&nbsp;</span>") + "</div></div>";
    }).join("") + "</div>";
    h += '<div class="msg' + (note && note.ok ? " ok" : "") + '" aria-live="polite">' + (note ? esc(note.t) : "") + "</div>";
    if (L.done) {
      h += '<div class="wonbox"><span class="eyebrow">Sieger</span><strong>' + esc(nameOf(L.legs[0] > L.legs[1] ? L.a : L.b)) + "</strong><span>" + L.legs[0] + ":" + L.legs[1] + " Legs</span></div>";
      h += '<div class="sheet-foot"><button class="btn" id="c-undo">Rückgängig</button><button class="btn primary" id="c-done">Zurück zum Turnier</button></div>';
    } else {
      h += '<div class="typed">' + (typed ? esc(typed) : '<span class="ph">Punkte für ' + esc(nameOf(L.turn ? L.b : L.a)) + "</span>") + "</div>";
      h += '<div class="qs">' + QUICK.map(function (q) { return '<button data-q="' + q + '">' + q + "</button>"; }).join("") + "</div>";
      h += '<div class="pad">' + [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (d) { return '<button data-k="' + d + '">' + d + "</button>"; }).join("") +
        '<button data-k="del" aria-label="Löschen">⌫</button><button data-k="0">0</button><button data-k="ok" class="ok">OK</button></div>';
      h += '<div class="sheet-foot"><button class="btn" id="c-undo"' + (L.hist.length ? "" : " disabled") + '>Rückgängig</button><button class="btn" id="c-rest" title="Rest direkt eintragen">Rest = 0 (Checkout)</button></div>';
    }
    return h + "</div></div>";
  }
  function key(k) {
    if (k === "del") typed = typed.slice(0, -1);
    else if (k === "ok") return submit(typed === "" ? 0 : parseInt(typed, 10));
    else if (typed.length < 3) typed = (typed + k).replace(/^0+(?=\d)/, "");
    render();
  }

  // ---------- Rendern & Events ----------
  var app = document.getElementById("app");
  function render() {
    app.innerHTML = S.phase === "run" ? renderRun() : renderSetup();
    document.documentElement.style.overflow = S.live && S.live.open && S.phase === "run" ? "hidden" : "";
  }

  function setCount(n) {
    n = Math.max(2, Math.min(32, n));
    if (n === S.count) return;
    S.count = n; save(); render();
  }
  function findMatch(id) { return compute().all.filter(function (m) { return m.id === id; })[0]; }

  app.addEventListener("click", function (e) {
    var t = e.target.closest("button");
    if (!t || t.disabled) return;
    if (t.id === "minus") return setCount(S.count - 1);
    if (t.id === "plus") return setCount(S.count + 1);
    if (t.dataset.n) return setCount(+t.dataset.n);
    if (t.id === "start") return startTournament(false);
    if (t.id === "reset") { S.confirm = true; return render(); }
    if (t.id === "reset-no") { S.confirm = false; return render(); }
    if (t.id === "reset-yes") { S.phase = "setup"; S.results = {}; S.live = null; S.confirm = false; save(); return render(); }
    if (t.id === "redraw") return startTournament(true);
    if (t.dataset.go) return openCounter(t.dataset.go);
    if (t.dataset.k) return key(t.dataset.k);
    if (t.dataset.q) return submit(+t.dataset.q);
    if (t.id === "c-rest" && S.live) return submit(S.live.rest[S.live.turn]);
    if (t.id === "c-undo") return undo();
    if (t.id === "c-close") { S.live.open = false; save(); return render(); }
    if (t.id === "c-done") { S.live = null; note = null; save(); return render(); }
    if (t.classList.contains("pick")) {
      var m = findMatch(t.dataset.id); if (!m || !m.ready) return;
      var p = m[t.dataset.side];
      var r = m.res || { a: m.a, b: m.b, w: null };
      if (r.w === p) { delete S.results[m.id]; }
      else { r.w = p; S.results[m.id] = r; }
      save(); render();
    }
  });

  app.addEventListener("change", function (e) {
    var t = e.target;
    if (t.classList.contains("legs")) {
      var m = findMatch(t.dataset.id); if (!m || !m.ready) return;
      var r = m.res || { a: m.a, b: m.b, w: null };
      var v = t.value === "" ? null : Math.max(0, Math.min(S.firstTo, parseInt(t.value, 10) || 0));
      r["l" + t.dataset.side] = v;
      var la = r.la || 0, lb = r.lb || 0;
      if (la >= S.firstTo && la > lb) r.w = m.a;
      else if (lb >= S.firstTo && lb > la) r.w = m.b;
      S.results[m.id] = r;
      save(); render();
    }
    if (t.id === "mode") { S.mode = t.value; save(); render(); }
    if (t.id === "ft") { S.firstTo = +t.value; save(); }
    if (t.id === "shuffle") { S.shuffle = t.checked; save(); }
    if (t.id === "full") { S.full = t.checked; save(); render(); }
  });

  app.addEventListener("input", function (e) {
    var t = e.target;
    if (t.dataset.i != null) { S.names[+t.dataset.i] = t.value; save(); }
    if (t.id === "tname") { S.name = t.value; save(); }
  });
  document.addEventListener("keydown", function (e) {
    if (S.live && S.live.open && S.phase === "run" && !S.live.done) {
      if (/^\d$/.test(e.key)) { e.preventDefault(); return key(e.key); }
      if (e.key === "Backspace") { e.preventDefault(); return key("del"); }
      if (e.key === "Enter") { e.preventDefault(); return key("ok"); }
    }
    if (e.key === "Escape" && S.live && S.live.open) { S.live.open = false; save(); return render(); }
    if (e.key === "Enter" && e.target.dataset && e.target.dataset.i != null) {
      var nx = document.getElementById("n" + (+e.target.dataset.i + 1));
      if (nx) nx.focus(); else document.getElementById("start").focus();
    }
  });

  render();
})();
