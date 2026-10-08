# Regeneron ENT 2026 – v1

Mobile-first React + TypeScript + Vite NFC-Microsite für den 59th ENT Congress Mannheim.

## Änderungen in v1

- Neue letzte Kachel **ESMO 2026** nach **ASCO 2026**.
- Farbtausch: **VelociSuite® Technologies** verwendet den vorherigen ASCO-Blauverlauf; **ASCO 2026** verwendet den vorherigen VelociSuite-Lila-/Magenta-Verlauf.
- **ESMO 2026** verwendet den bisherigen ASCO-Blauverlauf, auch auf der Unterseite.
- ESMO hat eine eigene Modul-ID `esmo-2026` und einen separaten PDF-Pfad.
- Der Kongresshinweis `59th ENT Congress Mannheim` wurde unverändert übernommen.

## Dateien vor der Veröffentlichung ergänzen

Im bereitgestellten Ausgangs-ZIP waren **keine Download-PDFs oder Preview-Bilder** enthalten. Die Links werden erst funktionieren, wenn die Dateien im Ordner `public/downloads/` liegen. Erwartete Dateinamen:

- `Regeneron_Company-Update.pdf`
- `company-update-preview.png`
- `velocisuite-flyer-2026.pdf`
- `velocisuite-preview.png`
- `rgc-factsheet-2025.pdf`
- `rgc-preview.png`
- `regeneron-publications-asco-2026.pdf`
- `regeneron-publications-preview.png`
- **NEU:** `regeneron-publications-esmo-2026.pdf`

Der ESMO-Vorschaubildpfad zeigt **wie gewünscht vorläufig auf** `regeneron-publications-preview.png` (die gleiche Datei wie ASCO). Später kann ein eigenständiges ESMO-Vorschaubild ergänzt werden, indem der Pfad in `src/App.tsx` geändert wird.

## Lokal oder in StackBlitz

```bash
npm install
npm run dev
npm run build
```

Für Vercel: Framework **Vite**, Build **`npm run build`**, Output **`dist`**.
