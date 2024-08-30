import React from 'react';
import Lottie from 'react-lottie';
import sunnyIcon from '../assets/sunny.json';
import rainyIcon from '../assets/rainy.json';
import cloudyIcon from '../assets/cloudly.json';
import snowyIcon from '../assets/snowy.json';
import nightyIcon from '../assets/nighty.json';

const WeatherIcons = ({ icon, isNight }) => {
    const getIcon = () => {
        if (isNight) {
            return nightyIcon; // Usa nighty.json se è notte
        }

        switch (icon) {
            case '01d': // Sole
            case '02d': // Parzialmente nuvoloso di giorno
            case '03d': // Nuvoloso di giorno
                return sunnyIcon;
            case '09d': // Pioggia leggera di giorno
            case '10d': // Pioggia di giorno
                return rainyIcon;
            case '11d': // Temporale di giorno
                return rainyIcon;
            case '13d': // Neve di giorno
                return snowyIcon;
            case '01n': // Sole di notte
            case '02n': // Parzialmente nuvoloso di notte
            case '03n': // Nuvoloso di notte
            case '04n': // Molto nuvoloso di notte
                return nightyIcon;
            case '09n': // Pioggia leggera di notte
            case '10n': // Pioggia di notte
                return rainyIcon;
            case '11n': // Temporale di notte
                return rainyIcon;
            case '13n': // Neve di notte
                return snowyIcon;
            default:
                return cloudyIcon; // Default se non c'è una corrispondenza
        }
    };

    return (
        <div className="weather-icon-container">
            <Lottie options={{ animationData: getIcon() }} />
        </div>
    );
};

export default WeatherIcons;
