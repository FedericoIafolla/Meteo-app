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
            return nightyIcon;
        }

        switch (icon) {
            case '01d':
            case '02d':
            case '03d':
                return sunnyIcon;
            case '09d':
            case '10d':
                return rainyIcon;
            case '11d':
                return rainyIcon;
            case '13d':
                return snowyIcon;
            case '01n':
            case '02n':
            case '03n':
            case '04n':
                return nightyIcon;
            case '09n':
            case '10n':
                return rainyIcon;
            case '11n':
                return rainyIcon;
            case '13n':
                return snowyIcon;
            default:
                return cloudyIcon;
        }
    };

    return (
        <div className="weather-icon-container">
            <Lottie options={{ animationData: getIcon() }} />
        </div>
    );
};

export default WeatherIcons;
