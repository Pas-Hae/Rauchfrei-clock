import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    // Initialer Zustand für Daten als leeres Objekt setzen
    const [data, setData] = useState({});

    useEffect(function() {
        axios.get('http://localhost:5000/getData')
        .then(function(response) {
            // Überprüfen, ob die Antwort ein Objekt ist
            if (typeof response.data === 'object' && response.data !== null) {
                setData(response.data);
            } else {
                console.error("Die empfangenen Daten sind kein gültiges Objekt:", response.data);
            }
        })
        .catch(function(error) {
            console.error("Es gab einen Fehler beim Abrufen der Daten:", error);
        });
    }, []);

    return (
        <div className="App">
            <h1>Endlich Rauchfrei!</h1>
            <div>
                <p>Nicht gerauchte Zigaretten: {data.zigarettenNichtGeraucht}</p>
                <p>Geld gespart: CHF {(data.geldGespart ? data.geldGespart.toFixed(2) : "0.00")}</p>
            </div>
        </div>
    );
}

export default App;
