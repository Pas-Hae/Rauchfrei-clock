// Benötigte Module importieren
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());

// Das Aufhördatum festlegen
const AUFHOER_DATUM = new Date('2023-08-16T15:00:00'); // Datum an dem ich aufgehört habe.

function berechneEinsparungen(aufhoerDatum, preisProZigarette) {
    const jetzt = new Date();
    const zigarettenProTag = Math.floor(((22 - 6) * 60) / 50);
    const tageSeitAufhoeren = Math.ceil((jetzt - aufhoerDatum) / (1000 * 60 * 60 * 24));

    const zigarettenNichtGeraucht = tageSeitAufhoeren * zigarettenProTag;
    const geldGespart = zigarettenNichtGeraucht * preisProZigarette;

    return { zigarettenNichtGeraucht, geldGespart };
}

app.get('/', function(req, res) {
    res.send('Hello from Smokefree Clock Backend!');
});

app.post('/saveData', function(req, res) {
    const data = new rauchfrei({
        zigarettenNichtGeraucht: req.body.zigarettenNichtGeraucht,
        geldGespart: req.body.geldGespart
    });

    data.save()
    .then(savedData => {
        res.send(savedData);
    })
    .catch(err => {
        res.status(500).send('Internal server error');
    });
});

// Überarbeiteter Endpunkt
app.get('/getData', function(req, res) {
    const preisProZigarette = 0.45;
    const einsparungen = berechneEinsparungen(AUFHOER_DATUM, preisProZigarette);

    // Die berechneten Einsparungen senden
    res.send(einsparungen);
});

const PORT = 5000;
app.listen(PORT, function() {
    console.log('Server started on http://localhost:' + PORT);
});

