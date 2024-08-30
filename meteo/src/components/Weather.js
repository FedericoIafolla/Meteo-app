import React from 'react';
import Map from './Map';
import WeatherIcons from './WeatherIcons'; // Importa il componente delle icone animate
import { Card } from 'react-bootstrap';
import './WeatherIcons.css'; // Assicurati che il percorso sia corretto

// Traduzioni dei campi in italiano
const fieldLabels = {
    temp: "Temperatura",
    feels_like: "Percepita",
    humidity: "Umidità",
    time: "Orario"
};

// Mappa dei nomi delle città in italiano
const cityNames = {
    Rome: "Roma",
    Tokyo: "Tokyo",
    "New York": "New York",
    Paris: "Parigi",
    London: "Londra",
    Sydney: "Sydney"
};

// Funzione per formattare l'orario e sottrarre due ore
const formatTime = (timezoneOffset) => {
    // Calcola l'orario locale in base all'offset del fuso orario
    const localDate = new Date(new Date().getTime() + timezoneOffset * 1000 - 2 * 60 * 60 * 1000);
    return localDate.toLocaleTimeString('it-IT', { timeStyle: 'short' });
};

const Weather = ({ weatherData }) => {
    if (!weatherData) {
        return <p>Seleziona una città per vedere i dettagli.</p>;
    }

    const { main, weather, coord, name, timezone } = weatherData;
    const { temp, feels_like, humidity } = main;
    const { description, icon } = weather[0];
    const { lat, lon } = coord;

    // Calcola l'orario basato sull'offset del fuso orario e sottrae due ore
    const time = formatTime(timezone);

    return (
        <div className="weather-card-container"> {/* Aggiungi un contenitore con margine sotto */}
            <Card className="mb-3 weather-card">
                <Card.Body className="weather-content">
                    <div className="weather-info">
                        <Card.Title>{cityNames[name] || name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted card-subtitle">
                            {time} {/* Orario esatto */}
                        </Card.Subtitle>
                        <Card.Text>
                            <p>{description}</p>
                            <p>{fieldLabels.temp}: {temp}°C</p>
                            <p>{fieldLabels.feels_like}: {feels_like}°C</p>
                            <p>{fieldLabels.humidity}: {humidity}%</p>
                        </Card.Text>
                    </div>
                    <div className="weather-icon-container">
                        <WeatherIcons icon={icon} />
                    </div>
                </Card.Body>
            </Card>
            <Map latitude={lat} longitude={lon} />
        </div>
    );
};

export default Weather;
