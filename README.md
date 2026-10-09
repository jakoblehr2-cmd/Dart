# Dart-Turnierplan

Kleine Web-App für einen K.-o.-Dartabend: Spieleranzahl wählen, Namen eintragen, Turnier starten.

- Automatischer Turnierbaum (2–32 Spieler); bei ungeraden Zahlen gibt es Freilose für die ersten Setzplätze
- Paarungen werden optional ausgelost
- „Jetzt dran“ zeigt alle Spiele, die gerade gespielt werden können
- Sieger per Tippen oder über die Legs (First to X) eintragen
- Viertelfinale, Halbfinale, Finale und Platzierungsspiele (Platz 3, 5–8, 7 …) ergeben sich automatisch; optional nur Spiel um Platz 3
- Punktezähler für 501/301 (Double oder Single Out): Dart für Dart eingeben (Single/Double/Triple), Aufnahme wird automatisch summiert, Rest und Checkout-Vorschlag live, Überwerfen-Erkennung, Legs, Schnitt, Rückgängig; passt ohne Scrollen auf einen Handybildschirm
- Stand wird im Browser gespeichert (localStorage)

Einfach `index.html` im Browser öffnen.

Quellcode liegt in `src/page.html` (Markup + CSS) und `src/app.js`. `./build.sh` erzeugt daraus `index.html` und `dist/artifact.html`.
