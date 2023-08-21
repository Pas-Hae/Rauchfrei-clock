# Rauchfrei Clock 🕰️

Die "Rauchfrei Clock" ist eine einfache Webanwendung, welche berechnet wie viele Zigaretten ich NICHT geraucht habe, seit ich das rauchen aufgegeben habe und wie viel Geld ich eingespart habe.

## Installation

1. Klonen Sie das Repository:
```bash
git clone [URL-des-Repositories]
```

2. Installieren Sie die notwendigen Pakete:
```bash
npm install
```

## Verwendung

Um die Anwendung zu starten, führen Sie die folgenden Befehle aus:

### Frontend

Navigieren Sie in das Verzeichnis, in dem sich die `App.js`-Datei befindet, und führen Sie den Befehl aus:
```bash
npm start
```

### Backend

Navigieren Sie in das Verzeichnis, in dem sich die `server.js`-Datei befindet, und führen Sie den Befehl aus:
```bash
node server.js
```

## Funktionen

- Zeigt die Anzahl der nicht gerauchten Zigaretten seit einem bestimmten Datum.
- Zeigt die Menge an Geld, die durch das Nichtrauchen gespart wurde.
- Einfacher Server, um die berechneten Daten bereitzustellen.

## Konfiguration

Das Zigaretten-Aufhördatum kann in der `server.js` Datei angepasst werden. Passen Sie einfach den Wert von `AUFHOER_DATUM` an.

