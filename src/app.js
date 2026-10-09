(function () {
  var SRC = document.currentScript ? document.currentScript.textContent : "";
  var KEY = "dart-turnier-v1", ME_KEY = "dart-turnier-ich";
  var ARTIFACT_URL = "https://claude.ai/artifact/4faMWk2BiWjz4nBSj8CyEi";
  // QR-Code für ARTIFACT_URL, vorab erzeugt (Fehlerkorrektur M), damit er ohne externe Bibliothek funktioniert
  var QR_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 33\" shape-rendering=\"crispEdges\"><path fill=\"#000\" d=\"M0 0h1v1h-1zM1 0h1v1h-1zM2 0h1v1h-1zM3 0h1v1h-1zM4 0h1v1h-1zM5 0h1v1h-1zM6 0h1v1h-1zM8 0h1v1h-1zM13 0h1v1h-1zM14 0h1v1h-1zM15 0h1v1h-1zM16 0h1v1h-1zM18 0h1v1h-1zM21 0h1v1h-1zM23 0h1v1h-1zM26 0h1v1h-1zM27 0h1v1h-1zM28 0h1v1h-1zM29 0h1v1h-1zM30 0h1v1h-1zM31 0h1v1h-1zM32 0h1v1h-1zM0 1h1v1h-1zM6 1h1v1h-1zM10 1h1v1h-1zM13 1h1v1h-1zM14 1h1v1h-1zM18 1h1v1h-1zM19 1h1v1h-1zM20 1h1v1h-1zM24 1h1v1h-1zM26 1h1v1h-1zM32 1h1v1h-1zM0 2h1v1h-1zM2 2h1v1h-1zM3 2h1v1h-1zM4 2h1v1h-1zM6 2h1v1h-1zM9 2h1v1h-1zM14 2h1v1h-1zM17 2h1v1h-1zM18 2h1v1h-1zM20 2h1v1h-1zM21 2h1v1h-1zM22 2h1v1h-1zM23 2h1v1h-1zM24 2h1v1h-1zM26 2h1v1h-1zM28 2h1v1h-1zM29 2h1v1h-1zM30 2h1v1h-1zM32 2h1v1h-1zM0 3h1v1h-1zM2 3h1v1h-1zM3 3h1v1h-1zM4 3h1v1h-1zM6 3h1v1h-1zM8 3h1v1h-1zM9 3h1v1h-1zM15 3h1v1h-1zM16 3h1v1h-1zM17 3h1v1h-1zM21 3h1v1h-1zM23 3h1v1h-1zM24 3h1v1h-1zM26 3h1v1h-1zM28 3h1v1h-1zM29 3h1v1h-1zM30 3h1v1h-1zM32 3h1v1h-1zM0 4h1v1h-1zM2 4h1v1h-1zM3 4h1v1h-1zM4 4h1v1h-1zM6 4h1v1h-1zM8 4h1v1h-1zM10 4h1v1h-1zM11 4h1v1h-1zM12 4h1v1h-1zM13 4h1v1h-1zM16 4h1v1h-1zM17 4h1v1h-1zM19 4h1v1h-1zM23 4h1v1h-1zM24 4h1v1h-1zM26 4h1v1h-1zM28 4h1v1h-1zM29 4h1v1h-1zM30 4h1v1h-1zM32 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h1v1h-1zM9 5h1v1h-1zM10 5h1v1h-1zM11 5h1v1h-1zM13 5h1v1h-1zM14 5h1v1h-1zM15 5h1v1h-1zM18 5h1v1h-1zM20 5h1v1h-1zM22 5h1v1h-1zM24 5h1v1h-1zM26 5h1v1h-1zM32 5h1v1h-1zM0 6h1v1h-1zM1 6h1v1h-1zM2 6h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1zM5 6h1v1h-1zM6 6h1v1h-1zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h1v1h-1zM27 6h1v1h-1zM28 6h1v1h-1zM29 6h1v1h-1zM30 6h1v1h-1zM31 6h1v1h-1zM32 6h1v1h-1zM8 7h1v1h-1zM10 7h1v1h-1zM12 7h1v1h-1zM14 7h1v1h-1zM17 7h1v1h-1zM18 7h1v1h-1zM19 7h1v1h-1zM20 7h1v1h-1zM21 7h1v1h-1zM0 8h1v1h-1zM4 8h1v1h-1zM6 8h1v1h-1zM7 8h1v1h-1zM8 8h1v1h-1zM10 8h1v1h-1zM11 8h1v1h-1zM12 8h1v1h-1zM13 8h1v1h-1zM15 8h1v1h-1zM17 8h1v1h-1zM21 8h1v1h-1zM23 8h1v1h-1zM24 8h1v1h-1zM25 8h1v1h-1zM26 8h1v1h-1zM27 8h1v1h-1zM28 8h1v1h-1zM29 8h1v1h-1zM32 8h1v1h-1zM0 9h1v1h-1zM1 9h1v1h-1zM2 9h1v1h-1zM7 9h1v1h-1zM9 9h1v1h-1zM14 9h1v1h-1zM15 9h1v1h-1zM16 9h1v1h-1zM17 9h1v1h-1zM18 9h1v1h-1zM23 9h1v1h-1zM25 9h1v1h-1zM29 9h1v1h-1zM30 9h1v1h-1zM0 10h1v1h-1zM1 10h1v1h-1zM4 10h1v1h-1zM5 10h1v1h-1zM6 10h1v1h-1zM7 10h1v1h-1zM8 10h1v1h-1zM10 10h1v1h-1zM11 10h1v1h-1zM13 10h1v1h-1zM14 10h1v1h-1zM15 10h1v1h-1zM16 10h1v1h-1zM18 10h1v1h-1zM22 10h1v1h-1zM23 10h1v1h-1zM24 10h1v1h-1zM26 10h1v1h-1zM29 10h1v1h-1zM5 11h1v1h-1zM7 11h1v1h-1zM9 11h1v1h-1zM11 11h1v1h-1zM12 11h1v1h-1zM13 11h1v1h-1zM15 11h1v1h-1zM19 11h1v1h-1zM21 11h1v1h-1zM23 11h1v1h-1zM24 11h1v1h-1zM26 11h1v1h-1zM31 11h1v1h-1zM32 11h1v1h-1zM6 12h1v1h-1zM7 12h1v1h-1zM8 12h1v1h-1zM11 12h1v1h-1zM12 12h1v1h-1zM13 12h1v1h-1zM16 12h1v1h-1zM19 12h1v1h-1zM21 12h1v1h-1zM22 12h1v1h-1zM24 12h1v1h-1zM25 12h1v1h-1zM26 12h1v1h-1zM27 12h1v1h-1zM28 12h1v1h-1zM29 12h1v1h-1zM31 12h1v1h-1zM0 13h1v1h-1zM4 13h1v1h-1zM5 13h1v1h-1zM7 13h1v1h-1zM8 13h1v1h-1zM13 13h1v1h-1zM14 13h1v1h-1zM18 13h1v1h-1zM19 13h1v1h-1zM20 13h1v1h-1zM21 13h1v1h-1zM22 13h1v1h-1zM23 13h1v1h-1zM27 13h1v1h-1zM30 13h1v1h-1zM2 14h1v1h-1zM4 14h1v1h-1zM5 14h1v1h-1zM6 14h1v1h-1zM7 14h1v1h-1zM9 14h1v1h-1zM10 14h1v1h-1zM13 14h1v1h-1zM15 14h1v1h-1zM18 14h1v1h-1zM20 14h1v1h-1zM23 14h1v1h-1zM24 14h1v1h-1zM25 14h1v1h-1zM26 14h1v1h-1zM27 14h1v1h-1zM29 14h1v1h-1zM30 14h1v1h-1zM31 14h1v1h-1zM0 15h1v1h-1zM3 15h1v1h-1zM5 15h1v1h-1zM8 15h1v1h-1zM10 15h1v1h-1zM11 15h1v1h-1zM13 15h1v1h-1zM15 15h1v1h-1zM16 15h1v1h-1zM17 15h1v1h-1zM21 15h1v1h-1zM22 15h1v1h-1zM25 15h1v1h-1zM26 15h1v1h-1zM27 15h1v1h-1zM0 16h1v1h-1zM1 16h1v1h-1zM2 16h1v1h-1zM3 16h1v1h-1zM4 16h1v1h-1zM5 16h1v1h-1zM6 16h1v1h-1zM7 16h1v1h-1zM8 16h1v1h-1zM10 16h1v1h-1zM13 16h1v1h-1zM14 16h1v1h-1zM16 16h1v1h-1zM17 16h1v1h-1zM19 16h1v1h-1zM21 16h1v1h-1zM22 16h1v1h-1zM26 16h1v1h-1zM28 16h1v1h-1zM30 16h1v1h-1zM31 16h1v1h-1zM1 17h1v1h-1zM3 17h1v1h-1zM4 17h1v1h-1zM5 17h1v1h-1zM8 17h1v1h-1zM9 17h1v1h-1zM10 17h1v1h-1zM11 17h1v1h-1zM15 17h1v1h-1zM18 17h1v1h-1zM21 17h1v1h-1zM23 17h1v1h-1zM25 17h1v1h-1zM29 17h1v1h-1zM30 17h1v1h-1zM31 17h1v1h-1zM4 18h1v1h-1zM5 18h1v1h-1zM6 18h1v1h-1zM7 18h1v1h-1zM13 18h1v1h-1zM15 18h1v1h-1zM17 18h1v1h-1zM20 18h1v1h-1zM21 18h1v1h-1zM22 18h1v1h-1zM23 18h1v1h-1zM24 18h1v1h-1zM25 18h1v1h-1zM27 18h1v1h-1zM29 18h1v1h-1zM31 18h1v1h-1zM3 19h1v1h-1zM9 19h1v1h-1zM10 19h1v1h-1zM11 19h1v1h-1zM13 19h1v1h-1zM17 19h1v1h-1zM18 19h1v1h-1zM21 19h1v1h-1zM23 19h1v1h-1zM27 19h1v1h-1zM31 19h1v1h-1zM32 19h1v1h-1zM2 20h1v1h-1zM6 20h1v1h-1zM8 20h1v1h-1zM9 20h1v1h-1zM13 20h1v1h-1zM14 20h1v1h-1zM15 20h1v1h-1zM18 20h1v1h-1zM19 20h1v1h-1zM20 20h1v1h-1zM22 20h1v1h-1zM26 20h1v1h-1zM28 20h1v1h-1zM29 20h1v1h-1zM32 20h1v1h-1zM0 21h1v1h-1zM2 21h1v1h-1zM4 21h1v1h-1zM7 21h1v1h-1zM8 21h1v1h-1zM9 21h1v1h-1zM10 21h1v1h-1zM14 21h1v1h-1zM16 21h1v1h-1zM19 21h1v1h-1zM25 21h1v1h-1zM27 21h1v1h-1zM30 21h1v1h-1zM31 21h1v1h-1zM3 22h1v1h-1zM4 22h1v1h-1zM6 22h1v1h-1zM7 22h1v1h-1zM13 22h1v1h-1zM16 22h1v1h-1zM17 22h1v1h-1zM19 22h1v1h-1zM21 22h1v1h-1zM22 22h1v1h-1zM23 22h1v1h-1zM29 22h1v1h-1zM30 22h1v1h-1zM31 22h1v1h-1zM4 23h1v1h-1zM7 23h1v1h-1zM11 23h1v1h-1zM13 23h1v1h-1zM14 23h1v1h-1zM17 23h1v1h-1zM18 23h1v1h-1zM19 23h1v1h-1zM20 23h1v1h-1zM21 23h1v1h-1zM25 23h1v1h-1zM26 23h1v1h-1zM28 23h1v1h-1zM31 23h1v1h-1zM0 24h1v1h-1zM1 24h1v1h-1zM3 24h1v1h-1zM6 24h1v1h-1zM7 24h1v1h-1zM9 24h1v1h-1zM10 24h1v1h-1zM11 24h1v1h-1zM12 24h1v1h-1zM15 24h1v1h-1zM17 24h1v1h-1zM20 24h1v1h-1zM21 24h1v1h-1zM22 24h1v1h-1zM24 24h1v1h-1zM25 24h1v1h-1zM26 24h1v1h-1zM27 24h1v1h-1zM28 24h1v1h-1zM31 24h1v1h-1zM32 24h1v1h-1zM8 25h1v1h-1zM9 25h1v1h-1zM11 25h1v1h-1zM13 25h1v1h-1zM15 25h1v1h-1zM17 25h1v1h-1zM18 25h1v1h-1zM24 25h1v1h-1zM28 25h1v1h-1zM30 25h1v1h-1zM32 25h1v1h-1zM0 26h1v1h-1zM1 26h1v1h-1zM2 26h1v1h-1zM3 26h1v1h-1zM4 26h1v1h-1zM5 26h1v1h-1zM6 26h1v1h-1zM8 26h1v1h-1zM9 26h1v1h-1zM13 26h1v1h-1zM15 26h1v1h-1zM16 26h1v1h-1zM18 26h1v1h-1zM20 26h1v1h-1zM21 26h1v1h-1zM24 26h1v1h-1zM26 26h1v1h-1zM28 26h1v1h-1zM29 26h1v1h-1zM31 26h1v1h-1zM0 27h1v1h-1zM6 27h1v1h-1zM12 27h1v1h-1zM13 27h1v1h-1zM14 27h1v1h-1zM15 27h1v1h-1zM19 27h1v1h-1zM20 27h1v1h-1zM21 27h1v1h-1zM24 27h1v1h-1zM28 27h1v1h-1zM31 27h1v1h-1zM0 28h1v1h-1zM2 28h1v1h-1zM3 28h1v1h-1zM4 28h1v1h-1zM6 28h1v1h-1zM8 28h1v1h-1zM10 28h1v1h-1zM11 28h1v1h-1zM12 28h1v1h-1zM13 28h1v1h-1zM16 28h1v1h-1zM20 28h1v1h-1zM21 28h1v1h-1zM22 28h1v1h-1zM24 28h1v1h-1zM25 28h1v1h-1zM26 28h1v1h-1zM27 28h1v1h-1zM28 28h1v1h-1zM29 28h1v1h-1zM0 29h1v1h-1zM2 29h1v1h-1zM3 29h1v1h-1zM4 29h1v1h-1zM6 29h1v1h-1zM9 29h1v1h-1zM10 29h1v1h-1zM13 29h1v1h-1zM18 29h1v1h-1zM19 29h1v1h-1zM20 29h1v1h-1zM21 29h1v1h-1zM24 29h1v1h-1zM26 29h1v1h-1zM27 29h1v1h-1zM28 29h1v1h-1zM0 30h1v1h-1zM2 30h1v1h-1zM3 30h1v1h-1zM4 30h1v1h-1zM6 30h1v1h-1zM9 30h1v1h-1zM10 30h1v1h-1zM11 30h1v1h-1zM12 30h1v1h-1zM13 30h1v1h-1zM14 30h1v1h-1zM15 30h1v1h-1zM20 30h1v1h-1zM21 30h1v1h-1zM22 30h1v1h-1zM24 30h1v1h-1zM26 30h1v1h-1zM27 30h1v1h-1zM28 30h1v1h-1zM0 31h1v1h-1zM6 31h1v1h-1zM10 31h1v1h-1zM11 31h1v1h-1zM15 31h1v1h-1zM16 31h1v1h-1zM17 31h1v1h-1zM18 31h1v1h-1zM21 31h1v1h-1zM23 31h1v1h-1zM25 31h1v1h-1zM26 31h1v1h-1zM0 32h1v1h-1zM1 32h1v1h-1zM2 32h1v1h-1zM3 32h1v1h-1zM4 32h1v1h-1zM5 32h1v1h-1zM6 32h1v1h-1zM8 32h1v1h-1zM10 32h1v1h-1zM13 32h1v1h-1zM14 32h1v1h-1zM16 32h1v1h-1zM17 32h1v1h-1zM20 32h1v1h-1zM21 32h1v1h-1zM23 32h1v1h-1zM24 32h1v1h-1zM25 32h1v1h-1zM29 32h1v1h-1zM30 32h1v1h-1zM32 32h1v1h-1z\"/></svg>";
  // Diese Felder sind der Turnierstand, den alle sehen; der Rest (Zähler, Entwürfe) bleibt auf dem Gerät.
  var SHARED = ["phase", "name", "mode", "firstTo", "full", "players", "slots", "results", "liveId", "updated"];
  // Gerüst, in das die Plattform die Seite einbettet; eine Selbst-Veröffentlichung muss genau so beginnen.
  var SKELETON = '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>' +
    ':root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}' +
    "</style></head><body>";
  var BYE = -1, TBD = null;
  var MODES = ["501 Double Out", "501 Single Out", "301 Double Out", "301 Single Out", "Cricket"];

  function blankState() {
    return { phase: "setup", name: "Dartabend", count: 8, names: [], mode: MODES[0], firstTo: 2, shuffle: true, full: true,
             players: [], slots: [], results: {}, confirm: false, live: null, liveId: null };
  }
  var S;
  try { S = JSON.parse(localStorage.getItem(KEY)); } catch (e) { S = null; }
  if (!S || !S.phase) S = blankState();
  if (S.full == null) S.full = true;
  S.confirm = false;
  var note = null, showQR = false;

  var embedded = null;
  try { embedded = JSON.parse(document.getElementById("shared").textContent); } catch (e) {}
  function sharedOf(o) { var r = {}; SHARED.forEach(function (k) { r[k] = o[k] === undefined ? null : o[k]; }); return r; }
  function hashOf(o) { var c = sharedOf(o); delete c.updated; return JSON.stringify(c); }
  function applyShared(o) { SHARED.forEach(function (k) { if (o[k] != null) S[k] = o[k]; }); if (!o.liveId) S.liveId = null; }
  if (embedded && (embedded.updated || 0) > (S.updated || 0)) applyShared(embedded);
  var lastPub = embedded ? hashOf(embedded) : null, curHash = hashOf(S);

  // Rolle: "org" darf eintragen (Besitzer oder eigenständige Datei), "view" sieht nur zu.
  var role = window.claude && window.claude.use ? "pending" : "org", art = null;
  var pubTimer = null, pubState = "";
  if (role === "pending") {
    Promise.all([window.claude.use("artifact"), window.claude.use("user")]).then(function (r) {
      art = r[0];
      return r[1] ? r[1].canEdit() : false;
    }).then(function (ed) { setRole(ed && art ? "org" : "view"); }, function () { setRole("view"); });
  }
  function setRole(r) {
    role = r;
    if (r === "view") { S = blankState(); if (embedded) applyShared(embedded); }
    render();
  }
  function shouldShare() { return S.phase === "run" || (embedded && embedded.phase === "run"); }

  function save() {
    if (role === "view") return;
    var h = hashOf(S);
    if (h !== curHash) { curHash = h; S.updated = Date.now(); }
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
    if (art && role === "org" && h !== lastPub && shouldShare()) schedulePublish();
  }
  function schedulePublish() {
    clearTimeout(pubTimer); pubState = "saving"; renderStatus();
    pubTimer = setTimeout(doPublish, 1500);
  }
  function buildDoc(data) {
    var json = JSON.stringify(data).replace(/</g, "\\u003c");
    return SKELETON + "\n<title>Dart Turnierplan</title>\n" +
      '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600&display=swap">\n' +
      '<style id="page-style">' + document.getElementById("page-style").textContent + "</style>\n\n" +
      '<div class="wrap" id="app"></div>\n\n' +
      '<script type="application/json" id="shared">' + json + "<\/script>\n" +
      "<script>" + SRC + "<\/script>\n\n</body></html>";
  }
  // Veröffentlicht die Seite mit dem aktuellen Stand; danach laden alle offenen Ansichten (auch diese) neu.
  function doPublish() {
    if (!art || !SRC) return;
    var data = sharedOf(S);
    art.publish(buildDoc(data)).then(function () { lastPub = hashOf(data); pubState = "ok"; renderStatus(); }, function (e) {
      var c = e && e.code;
      if (c === "conflict") return;
      if (c === "not_writer" || c === "not_granted" || c === "not_declared" || c === "consent_required") { art = null; pubState = "off"; }
      else pubState = "err";
      renderStatus();
    });
  }
  function statusHtml() {
    if (role !== "org" || !art) return "";
    var dirty = shouldShare() && hashOf(S) !== lastPub;
    if (pubState === "saving") return '<span>Wird für alle aktualisiert …</span>';
    if (pubState === "err") return '<span class="err">Teilen hat nicht geklappt.</span><button class="btn" id="share-now">Nochmal versuchen</button>';
    if (pubState === "off") return '<span class="err">Diese Ansicht darf den Plan nicht veröffentlichen.</span>';
    if (dirty) return '<span>Noch nicht für alle sichtbar.</span><button class="btn" id="share-now">Jetzt teilen</button>';
    return shouldShare() ? '<span class="ok">✓ Für alle sichtbar</span>' : "";
  }
  function renderStatus() { var el = document.getElementById("status"); if (el) el.innerHTML = statusHtml(); }

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
    S.live = null; S.liveId = null;
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
    function node(ent, src, p, depth, group) {
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
        var m = resolve({ id: "p" + p + "n" + n + "m" + i, a: ent[2 * i], b: ent[2 * i + 1], srcA: src[2 * i], srcB: src[2 * i + 1], p: p, depth: depth, group: group, title: title });
        ms.push(m); all.push(m);
        if (group !== "main") groups[group].matches.push(m);
      }
      node(ms.map(function (m) { return m.winner; }), ms.map(function (m) { return { m: m, w: true }; }), p, depth + 1, group);
      var lg = group;
      if (group === "main") {
        lg = "g" + (p + n / 2);
        var hi = p + n - 1;
        groups[lg] = { from: p + n / 2, title: n === 2 ? null : n === 4 ? "Spiel um Platz 3" : "Platz " + (p + n / 2) + "–" + hi, matches: [] };
      }
      node(ms.map(function (m) { return m.loser; }), ms.map(function (m) { return { m: m, w: false }; }), p + n / 2, depth + 1, lg);
    }
    node(S.slots.slice(), [], 1, 0, "main");
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

  function myIndex() {
    var n; try { n = localStorage.getItem(ME_KEY); } catch (e) { n = null; }
    for (var i = 0; i < S.players.length; i++) if (S.players[i].name === n) return i;
    return -1;
  }
  function matchCard(m) {
    var ro = role !== "org", me = myIndex();
    var cls = "match" + (m.bye ? " bye" : "") + (m.playable ? " live" : "");
    var rows = ["a", "b"].map(function (side) {
      var p = m[side], real = p !== BYE && p !== TBD;
      var st = m.winner !== TBD && m.ready ? (m.winner === p ? " win" : " lose") : "";
      var legs = m.res && m.res["l" + side] != null ? m.res["l" + side] : "";
      return '<div class="mrow' + st + (real && p === me ? " me" : "") + '">' +
        '<button class="pick' + (real ? "" : " ph") + '" data-id="' + m.id + '" data-side="' + side + '"' + (real && m.ready && !ro ? "" : " disabled") +
        ' title="' + (real ? "Als Sieger markieren" : "") + '">' + esc(nameOf(p)) + "</button>" +
        (m.bye ? "" : '<input class="legs" type="number" inputmode="numeric" min="0" max="' + S.firstTo + '" aria-label="Legs ' + esc(nameOf(p)) +
          '" data-id="' + m.id + '" data-side="' + side + '" value="' + legs + '" placeholder="–"' + (m.ready && !ro ? "" : " disabled") + ">") +
        "</div>";
    }).join("");
    var running = S.live && S.live.id === m.id;
    var tag = m.playable && ro ? '<span class="tag">' + (S.liveId === m.id ? "läuft gerade" : "an die Scheibe") + "</span>"
      : m.playable
      ? (hasCounter() ? '<button class="go" data-go="' + m.id + '">' + (running ? "▶ Weiter" : "▶ Spiel starten") + "</button>" : '<span class="tag">an die Scheibe</span>')
      : m.bye ? "<span>Freilos</span>" : m.winner !== TBD ? "<span>fertig</span>" : "<span>wartet</span>";
    return '<div class="' + cls + '"><div class="mhead"><span>' + (m.no ? "Spiel " + m.no : "") + "</span>" + tag + "</div>" + rows + "</div>";
  }
  function labelled(m) { return '<div class="lab"><span class="eyebrow">' + m.title + "</span>" + matchCard(m) + "</div>"; }

  function renderSetup() {
    if (role !== "org") {
      return '<header class="head"><div class="board"><div class="ring" aria-hidden="true"></div><div><div class="eyebrow">Turnierplan</div><h1>' + esc(S.name || "Dartabend") + "</h1></div></div></header>" +
        '<div class="empty">' + (role === "pending" ? "Lädt …" : "Das Turnier hat noch nicht begonnen. Die Seite aktualisiert sich von selbst, sobald es losgeht.") + "</div>";
    }
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
    h += '<div class="actions"><button class="btn" id="qr">QR-Code</button>' + (role !== "org" ? "" : S.confirm
      ? '<div class="confirm"><span>Alle Ergebnisse löschen?</span><button class="btn danger" id="reset-yes">Ja, neues Turnier</button><button class="btn" id="redraw">Gleiche Spieler neu auslosen</button><button class="btn" id="reset-no">Abbrechen</button></div>'
      : '<button class="btn" id="reset">Neues Turnier</button>') + "</div></header>";
    h += '<div class="status" id="status">' + (role === "org" ? statusHtml() : "Live-Ansicht · aktualisiert sich automatisch") + "</div>";
    h += '<div class="progress" aria-hidden="true"><i style="width:' + (real.length ? (done / real.length) * 100 : 0) + '%"></i></div>';

    h += '<div class="top"><section class="sec">' + meCard(T);
    if (fin && fin.winner !== TBD && fin.winner !== BYE) {
      h += '<div class="champ"><span class="eyebrow">Turniersieger</span><strong>' + esc(nameOf(fin.winner)) + "</strong>" +
        (fin.res && fin.res.la != null && fin.res.lb != null ? '<span class="meta">Finale ' + fin.res.la + ":" + fin.res.lb + " gegen " + esc(nameOf(fin.loser)) + "</span>" : "") + "</div>";
    }
    var next = T.all.filter(function (m) { return m.playable; });
    h += "<h2>Jetzt dran</h2>";
    h += next.length ? '<div class="next">' + next.map(labelled).join("") + "</div>"
      : '<div class="empty">' + (done === real.length ? "Alle Spiele sind gespielt." : "Warte auf Ergebnisse aus der vorigen Runde.") + "</div>";
    if (role === "org") h += '<p class="hint">' + (hasCounter() ? "„Spiel starten“ öffnet den Punktezähler. " : "") +
      "Ohne Zähler: auf einen Namen tippen, um den Sieger zu markieren, oder die Legs eintragen. Nochmal tippen hebt das Ergebnis auf.</p>";
    h += "</section>";

    var placed = {}; T.places.forEach(function (x) { placed[x.p] = 1; });
    var stillIn = S.players.map(function (_, i) { return i; }).filter(function (i) { return !placed[i]; });
    h += '<section class="sec"><h2>Platzierungen</h2><table class="table"><tbody>';
    T.places.forEach(function (x) {
      h += '<tr class="' + (x.from === 1 ? "p1" : "") + (x.p === myIndex() ? " me" : "") + '"><td class="pl">' + x.label + "</td><td>" + esc(nameOf(x.p)) + "</td></tr>";
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
    return h + (role === "org" ? renderCounter(T) : "") + renderQR();
  }

  // ---------- Persönliche Karte ----------
  // Bei einem Freilos-Spiel rückt der Spieler einfach durch, also dessen Herkunft nennen.
  function srcLabel(s) {
    if (!s) return "offen";
    var m = s.m;
    if (m.bye) return s.w ? srcLabel(m.a === BYE ? m.srcB : m.srcA) : "offen";
    return (s.w ? "Sieger" : "Verlierer") + " aus Spiel " + m.no;
  }
  function meCard(T) {
    var me = myIndex();
    var opts = '<select id="me" aria-label="Wer bist du?"><option value="">Wer bist du? Namen wählen …</option>' +
      S.players.map(function (p, i) { return '<option value="' + esc(p.name) + '"' + (i === me ? " selected" : "") + ">" + esc(p.name) + "</option>"; }).join("") + "</select>";
    if (me < 0) return '<div class="mecard"><span class="eyebrow">Dein Turnier</span><span>Wähle deinen Namen, dann siehst du, wann du dran bist.</span>' + opts + "</div>";
    var mine = T.all.filter(function (m) { return !m.bye && (m.a === me || m.b === me); });
    var open = mine.filter(function (m) { return m.winner === TBD; })[0];
    var place = T.places.filter(function (x) { return x.p === me; })[0];
    var big, sub = "", turn = false;
    if (open) {
      var side = open.a === me ? "a" : "b", opp = open[side === "a" ? "b" : "a"];
      var oppName = opp === TBD ? srcLabel(side === "a" ? open.srcB : open.srcA) : nameOf(opp);
      if (open.playable) {
        var before = T.all.filter(function (m) { return m.playable && m.no < open.no; }).length;
        turn = before === 0;
        big = S.liveId === open.id ? "Du spielst gerade" : turn ? "Du bist dran!" : "Gleich dran";
        sub = "Spiel " + open.no + " · " + open.title + " gegen " + esc(oppName) + (before ? " · noch " + before + (before === 1 ? " Spiel" : " Spiele") + " vor dir" : "");
      } else {
        var waiting = T.all.filter(function (m) { return m.winner === TBD && !m.bye && m.no < open.no; }).length;
        big = "Kurz Pause";
        sub = "Nächstes Spiel: Spiel " + open.no + " · " + open.title + " gegen " + esc(oppName) + " · vorher noch " + waiting + (waiting === 1 ? " Spiel" : " Spiele");
      }
    } else if (place) {
      big = place.from === 1 ? "Turniersieger! 🏆" : "Platz " + place.label;
      sub = "Alle deine Spiele sind gespielt.";
    } else { big = "Warte auf dein nächstes Spiel"; }
    var hist = mine.filter(function (m) { return m.winner !== TBD; }).map(function (m) {
      var won = m.winner === me, opp = m.a === me ? m.b : m.a;
      var sc = m.res && m.res.la != null && m.res.lb != null ? " " + (m.a === me ? m.res.la + ":" + m.res.lb : m.res.lb + ":" + m.res.la) : "";
      return "<li>" + m.title + ": " + (won ? "Sieg" : "Niederlage") + " gegen " + esc(nameOf(opp)) + sc + "</li>";
    }).join("");
    return '<div class="mecard' + (turn ? " turn" : "") + '"><span class="eyebrow">' + esc(nameOf(me)) + (place ? "" : " · noch im Turnier") + '</span><span class="big">' + big + "</span>" +
      (sub ? "<span>" + sub + "</span>" : "") + (hist ? "<ul>" + hist + "</ul>" : "") + opts + "</div>";
  }

  // ---------- QR-Code ----------
  function shareUrl() { return ARTIFACT_URL; }
  function renderQR() {
    if (!showQR) return "";
    return '<div class="ov scroll" role="dialog" aria-modal="true" aria-label="QR-Code"><div class="sheet">' +
      '<div class="sheet-head"><h2>Turnierplan für alle</h2><button class="x" id="qr-close" aria-label="Schließen">✕</button></div>' +
      "<p>Mit der Handykamera scannen. Jeder wählt seinen Namen und sieht live, wann er dran ist.</p>" +
      '<div class="qrbox">' + QR_SVG + "</div>" +
      '<div class="url">' + esc(shareUrl()) + '</div><button class="btn" id="copy">Link kopieren</button>' +
      (role === "org" ? '<p class="hint">Damit Freunde den Plan ohne eigenes Konto öffnen können, stelle über „Teilen“ dieser Seite den Zugriff auf „Jeder mit dem Link“.</p>' : "") +
      "</div></div>";
  }

  // ---------- Punktezähler ----------
  // Jeder Dart wird einzeln erfasst ({m: 1|2|3, n: 0..20|25}); die Aufnahme summiert sich automatisch.
  function dVal(d) { return d.m * d.n; }
  function dLabel(d) { return d.n === 0 ? "0" : d.n === 25 ? (d.m === 2 ? "Bull" : "25") : (d.m === 3 ? "T" : d.m === 2 ? "D" : "") + d.n; }
  function range(a, b) { var o = []; for (var i = a; i >= b; i--) o.push(i); return o; }
  var FIN_D = [20, 16, 18, 12, 10, 8, 19, 17, 15, 14, 13, 11, 9, 7, 6, 5, 4, 3, 2, 1, 25].map(function (n) { return { m: 2, n: n }; });
  var ALL = range(20, 1).map(function (n) { return { m: 3, n: n }; }).concat([{ m: 2, n: 25 }, { m: 1, n: 25 }],
    range(20, 1).map(function (n) { return { m: 1, n: n }; }), range(20, 1).map(function (n) { return { m: 2, n: n }; }));
  var SETUP = ALL.filter(function (d) { return d.m !== 2 || d.n === 25; });
  function oneDart(v) {
    if (v <= 0) return null;
    if (v <= 20 || v === 25) return { m: 1, n: v };
    if (v % 3 === 0 && v / 3 <= 20) return { m: 3, n: v / 3 };
    if (v % 2 === 0 && (v / 2 <= 20 || v === 50)) return { m: 2, n: v / 2 };
    return null;
  }
  // Kürzester Checkout mit bevorzugten Doppeln (D20, D16, D18 …); bei Single Out darf jeder Dart beenden.
  function checkout(rest, left) {
    if (rest <= 0 || left <= 0 || (doubleOut() && rest === 1)) return null;
    var fins = doubleOut() ? FIN_D : ALL, i, j, v;
    for (i = 0; i < fins.length; i++) if (dVal(fins[i]) === rest) return [fins[i]];
    if (left >= 2) for (i = 0; i < fins.length; i++) { v = oneDart(rest - dVal(fins[i])); if (v) return [v, fins[i]]; }
    if (left >= 3) for (i = 0; i < fins.length; i++) for (j = 0; j < SETUP.length; j++) {
      v = oneDart(rest - dVal(fins[i]) - dVal(SETUP[j])); if (v) return [SETUP[j], v, fins[i]];
    }
    return null;
  }

  function newLive(m) {
    var r = m.res || {}, s = startScore();
    return { id: m.id, a: m.a, b: m.b, open: true, legs: [r.la || 0, r.lb || 0], rest: [s, s], turn: 0, starter: 0, darts: [], mod: 1,
             stats: [{ pts: 0, visits: 0 }, { pts: 0, visits: 0 }], last: [null, null], done: false, hist: [] };
  }
  function openCounter(id) {
    var m = compute().all.filter(function (x) { return x.id === id; })[0];
    if (!m || !m.ready) return;
    if (!S.live || S.live.id !== id || S.live.a !== m.a || S.live.b !== m.b || !S.live.darts) S.live = newLive(m);
    S.live.open = true; S.liveId = id; note = null;
    save(); render();
  }
  function writeResult(L) {
    var r = S.results[L.id];
    if (!r || r.a !== L.a || r.b !== L.b) r = { a: L.a, b: L.b, w: null };
    r.la = L.legs[0]; r.lb = L.legs[1];
    r.w = L.done ? (L.legs[0] > L.legs[1] ? L.a : L.b) : null;
    S.results[L.id] = r;
  }
  function snapshot(L) { var s = JSON.parse(JSON.stringify(L)); delete s.hist; L.hist.push(s); if (L.hist.length > 80) L.hist.shift(); }
  function visitSum(L) { return L.darts.reduce(function (s, d) { return s + dVal(d); }, 0); }

  function addDart(n) {
    var L = S.live;
    if (!L || L.done) return;
    var d = { m: n === 0 ? 1 : L.mod, n: n };
    if (n === 25 && d.m === 3) return;
    if (!L.darts.length) snapshot(L);
    L.darts.push(d); L.mod = 1; note = null;
    var nr = L.rest[L.turn] - visitSum(L);
    var bust = nr < 0 || (doubleOut() && nr === 1) || (nr === 0 && doubleOut() && d.m !== 2);
    if (bust || nr === 0 || L.darts.length === 3) return endVisit(bust);
    save(); render();
  }
  function endVisit(bust) {
    var L = S.live, t = L.turn, sum = visitSum(L), who = nameOf(t ? L.b : L.a);
    if (!L.darts.length) snapshot(L);
    L.stats[t].visits++;
    var lbl = L.darts.map(dLabel).join(" ");
    if (bust) {
      L.last[t] = "Bust (" + lbl + ")";
      note = { t: "Überworfen! " + who + " bleibt auf " + L.rest[t] + "." + (doubleOut() && L.rest[t] - sum === 0 ? " Der letzte Dart muss ein Doppel sein." : ""), ok: false };
      L.turn = 1 - t;
    } else {
      L.stats[t].pts += sum; L.rest[t] -= sum; L.last[t] = (lbl || "0") + " = " + sum;
      if (L.rest[t] === 0) {
        L.legs[t]++;
        if (L.legs[t] >= S.firstTo) { L.done = true; S.liveId = null; note = { t: who + " checkt " + sum + " und gewinnt!", ok: true }; }
        else {
          L.starter = 1 - L.starter; L.turn = L.starter; L.rest = [startScore(), startScore()]; L.last = [null, null];
          note = { t: who + " checkt " + sum + ". Leg " + L.legs[0] + ":" + L.legs[1] + ", " + nameOf(L.starter ? L.b : L.a) + " wirft an.", ok: true };
        }
        writeResult(L);
      } else L.turn = 1 - t;
    }
    L.darts = []; L.mod = 1;
    save(); render();
  }
  // ⌫: letzten Dart löschen; ist die Aufnahme leer, die vorige Aufnahme zurücknehmen.
  function back() {
    var L = S.live; if (!L) return;
    if (L.darts.length) {
      L.darts.pop();
      if (!L.darts.length) L.hist.pop();
      note = null; save(); return render();
    }
    if (!L.hist.length) return;
    var h = L.hist, prev = h.pop(); prev.hist = h; prev.open = true; prev.darts = prev.darts || [];
    S.live = prev; writeResult(prev); note = { t: "Letzte Aufnahme zurückgenommen.", ok: true };
    save(); render();
  }

  function renderCounter(T) {
    var L = S.live;
    if (!L || !L.open) return "";
    var m = T.all.filter(function (x) { return x.id === L.id; })[0];
    if (!m || m.a !== L.a || m.b !== L.b) { S.live = null; return ""; }
    var sum = visitSum(L);
    var h = '<div class="ov" role="dialog" aria-modal="true" aria-label="Punktezähler"><div class="sheet">';
    h += '<div class="sheet-head"><div class="eyebrow">' + (m.no ? "Spiel " + m.no + " · " : "") + m.title + " · " + esc(S.mode) + " · First to " + S.firstTo + "</div>" +
      '<button class="x" id="c-close" aria-label="Zähler schließen">✕</button></div>';
    h += '<div class="duel">' + [0, 1].map(function (i) {
      var st = L.stats[i], avg = st.visits ? (st.pts / st.visits).toFixed(1) : "–";
      var on = !L.done && L.turn === i, rest = L.rest[i] - (on ? sum : 0);
      var co = L.done ? null : checkout(rest, on ? 3 - L.darts.length : 3);
      var dots = ""; for (var k = 0; k < S.firstTo; k++) dots += '<i class="' + (k < L.legs[i] ? "f" : "") + '"></i>';
      return '<div class="pl-card' + (on ? " on" : "") + '"><div class="sm"><span class="who">' + esc(nameOf(i ? L.b : L.a)) + '</span><span class="dots" aria-label="' + L.legs[i] + legWord(L.legs[i]) + '">' + dots + "</span></div>" +
        '<div class="rest">' + rest + "</div>" +
        '<div class="co">' + (co ? co.map(function (d) { return d.m === 1 && d.n !== 25 ? "S" + d.n : dLabel(d); }).join(" ") : rest > 0 && rest <= 180 && !L.done ? '<span class="no">kein Finish</span>' : "&nbsp;") + "</div>" +
        '<div class="sm"><span>Ø ' + avg + "</span><span>" + (L.last[i] ? esc(L.last[i]) : "") + "</span></div></div>";
    }).join("") + "</div>";
    h += '<div class="msg' + (note && note.ok ? " ok" : "") + '" aria-live="polite">' + (note ? esc(note.t) : "") + "</div>";
    if (L.done) {
      var nx = T.all.filter(function (x) { return x.playable; })[0];
      h += '<div class="wonbox"><span class="eyebrow">Sieger</span><strong>' + esc(nameOf(L.legs[0] > L.legs[1] ? L.a : L.b)) + "</strong><span>" + L.legs[0] + ":" + L.legs[1] + " Legs</span></div>";
      if (nx) h += '<button class="btn primary big" data-next="' + nx.id + '">▶ Nächstes Spiel: ' + esc(nameOf(nx.a)) + " – " + esc(nameOf(nx.b)) + "</button>";
      h += '<div class="sheet-foot"><button class="btn" id="c-back">Rückgängig</button><button class="btn" id="c-done">Zum Turnierplan</button></div>';
    } else {
      h += '<div class="visit">' + [0, 1, 2].map(function (i) { return '<span class="slot' + (L.darts[i] ? " f" : "") + '">' + (L.darts[i] ? dLabel(L.darts[i]) : "Dart " + (i + 1)) + "</span>"; }).join("") +
        '<span class="sum">= ' + sum + "</span></div>";
      h += '<div class="mods">' + [[1, "Single"], [2, "Double"], [3, "Triple"]].map(function (x) {
        return '<button data-mod="' + x[0] + '" aria-pressed="' + (L.mod === x[0]) + '">' + x[1] + "</button>"; }).join("") + "</div>";
      h += '<div class="pad">' + range(20, 1).reverse().map(function (n) {
        return '<button data-dart="' + n + '">' + (L.mod > 1 ? (L.mod === 3 ? "T" : "D") : "") + n + (L.mod > 1 ? "<small>" + L.mod * n + "</small>" : "") + "</button>";
      }).join("") +
        '<button data-dart="25"' + (L.mod === 3 ? " disabled" : "") + ">" + (L.mod === 2 ? "Bull<small>50</small>" : "25") + "</button>" +
        '<button data-dart="0">0<small>Miss</small></button>' +
        '<button id="c-back" aria-label="Letzten Dart löschen"' + (L.darts.length || L.hist.length ? "" : " disabled") + ">⌫</button>" +
        '<button id="c-ok" class="ok">Fertig</button></div>';
    }
    return h + "</div></div>";
  }

  // ---------- Rendern & Events ----------
  var app = document.getElementById("app");
  function render() {
    app.innerHTML = S.phase === "run" ? renderRun() : renderSetup();
    var ov = showQR || (role === "org" && S.live && S.live.open && S.phase === "run");
    document.documentElement.style.overflow = ov ? "hidden" : "";
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
    if (t.id === "reset-yes") { S.phase = "setup"; S.results = {}; S.live = null; S.liveId = null; S.confirm = false; save(); return render(); }
    if (t.id === "qr") { showQR = true; return render(); }
    if (t.id === "qr-close") { showQR = false; return render(); }
    if (t.id === "share-now") { clearTimeout(pubTimer); pubState = "saving"; renderStatus(); return doPublish(); }
    if (t.id === "copy") {
      var done = function () { t.textContent = "Kopiert ✓"; };
      var sel = function () { var u = document.querySelector(".url"); var r = document.createRange(); r.selectNodeContents(u); var w = getSelection(); w.removeAllRanges(); w.addRange(r); t.textContent = "Link markiert, jetzt kopieren"; };
      try { navigator.clipboard.writeText(shareUrl()).then(done, sel); } catch (err) { sel(); }
      return;
    }
    if (t.id === "redraw") return startTournament(true);
    if (t.dataset.go) return openCounter(t.dataset.go);
    if (t.dataset.dart) return addDart(+t.dataset.dart);
    if (t.dataset.mod && S.live) { S.live.mod = S.live.mod === +t.dataset.mod ? 1 : +t.dataset.mod; save(); return render(); }
    if (t.id === "c-back") return back();
    if (t.id === "c-ok") return endVisit(false);
    if (t.id === "c-close") { S.live.open = false; save(); return render(); }
    if (t.id === "c-done") { S.live = null; S.liveId = null; note = null; save(); return render(); }
    if (t.dataset.next) { S.live = null; return openCounter(t.dataset.next); }
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
    if (t.id === "me") { try { localStorage.setItem(ME_KEY, t.value); } catch (err) {} return render(); }
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
    if (role === "org" && !showQR && S.live && S.live.open && S.phase === "run" && !S.live.done) {
      if (e.key === "Backspace") { e.preventDefault(); return back(); }
      if (e.key === "Enter") { e.preventDefault(); return endVisit(false); }
    }
    if (e.key === "Escape" && showQR) { showQR = false; return render(); }
    if (e.key === "Escape" && S.live && S.live.open) { S.live.open = false; save(); return render(); }
    if (e.key === "Enter" && e.target.dataset && e.target.dataset.i != null) {
      var nx = document.getElementById("n" + (+e.target.dataset.i + 1));
      if (nx) nx.focus(); else document.getElementById("start").focus();
    }
  });

  render();
})();
