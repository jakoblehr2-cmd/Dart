# Dart-Turnierplan

Kleine Web-App für einen K.-o.-Dartabend: Spieleranzahl wählen, Namen eintragen, Turnier starten.

- Automatischer Turnierbaum (2–32 Spieler); bei ungeraden Zahlen gibt es Freilose für die ersten Setzplätze
- Paarungen werden optional ausgelost
- „Jetzt dran“ zeigt alle Spiele, die gerade gespielt werden können
- Sieger per Tippen oder über die Legs (First to X) eintragen
- Viertelfinale, Halbfinale, Finale und Platzierungsspiele (Platz 3, 5–8, 7 …) ergeben sich automatisch; optional nur Spiel um Platz 3
- Punktezähler für 501/301 (Double oder Single Out): Dart für Dart eingeben (Single/Double/Triple), Aufnahme wird automatisch summiert, Rest und Checkout-Vorschlag live, Überwerfen-Erkennung, Legs, Schnitt, Rückgängig; passt ohne Scrollen auf einen Handybildschirm
- Spielreihenfolge: alle offenen Spiele der Reihe nach (läuft / als Nächstes / bereit / wartet), gespielte Spiele aufklappbar
- QR-Code für alle: Freunde scannen ihn, wählen ihren Namen und sehen live, wann sie dran sind, gegen wen und wie weit sie sind
- Als claude.ai-Artifact veröffentlicht sich die Seite nach jeder Ergebnisänderung selbst neu (Capability `artifact`), alle offenen Ansichten laden automatisch nach; nur Bearbeiter dürfen eintragen, alle anderen sehen eine Live-Ansicht
- Zählerstand und Entwürfe bleiben im Browser des Organisators (localStorage)

Einfach `index.html` im Browser öffnen.

Quellcode liegt in `src/page.html` (Markup + CSS) und `src/app.js`. `./build.sh` erzeugt daraus `index.html` und `dist/artifact.html`.
