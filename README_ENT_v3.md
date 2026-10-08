# Regeneron ENT 2026 - v3 (komplettes Medienpaket)

## Inhalt
Die komplette React + Vite + TypeScript Microsite basiert auf ENT v2, mit der
Startseiten-Badge `59th ENT Congress Mannheim` und fünf Kacheln:

1. Company Brochure – Blau
2. VelociSuite® Technologies – Lila/Magenta
3. Regeneron Genetics Center® – Dunkelblau
4. ASCO 2026 – Lila/Magenta
5. ESMO 2026 – Blau wie Company Brochure, inklusive Demo-Preview und Demo-PDF

Die ursprünglichen Quellen und Vorschaugrafiken wurden aus den vom Auftraggeber
nachgereichten Dateien in `public/downloads/` kopiert, unter den kanonischen,
von der App genutzten Dateinamen. `velocisuite-flyer-2026.pdf` ist die jetzt aktive
Version; der ältere Flyer aus 2025 liegt ebenfalls im Ordner als Archivdatei.

| Kachel | Preview | PDF |
|---|---|---|
| Company Brochure | `company-update-preview.png` | `Regeneron_Company-Update.pdf` |
| VelociSuite | `velocisuite-preview.png` | `velocisuite-flyer-2026.pdf` |
| Regeneron Genetics Center | `rgc-preview.png` | `rgc-factsheet-2025.pdf` |
| ASCO 2026 | `regeneron-publications-preview.png` | `regeneron-publications-asco-2026.pdf` |
| ESMO 2026 | `regeneron-publications-esmo-2026-preview.png` (Platzhalter) | `regeneron-publications-esmo-2026.pdf` (Platzhalter) |

Außerdem im Medienordner vorhanden, aber **nicht als ENT-Kachel verlinkt**:
- `melanoma-bicr-ado-2025-preview.png`
- `McKean_R3767_1613-Melanoma-BICR_ADO-2025.pdf`
- `velocisuite-flyer-2025.pdf`

### Platzhalterhinweis
Die ESMO-Dateien sind ausschließlich Platzhalter und enthalten keine
freigegebenen wissenschaftlichen Inhalte. Vor einer öffentlichen Veröffentlichung
durch finale Unterlagen ersetzen und bei Bedarf die Download-Beschriftung in
`src/App.tsx` aktualisieren.

### Installation / Deployment
```bash
npm ci
npm run build
```
Vercel: Framework `Vite`, Build Command `npm run build`, Output `dist`.

### Verlinkungen / Dateipfade
Alle PDF- und PNG-Pfade beginnen im Code mit `/downloads/`, sie verweisen auf
`public/downloads/`. Dabei auf Groß-/Kleinschreibung und Umlaute achten.
Der PDF-Link wird in einem neuen Browsertab geöffnet.

### Kontakt und Rechtliches
Die vorhandenen Impressums-/Datenschutzseiten sowie die Kontaktseite wurden
beibehalten. Rechtliche Freigaben und Produkt-/Werbeaussagen vor Livegang prüfen.
