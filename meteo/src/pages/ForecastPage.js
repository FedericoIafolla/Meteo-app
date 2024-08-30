// src/pages/ForecastPage.js
import React from 'react';
import Forecast from '../components/Forecast';

const ForecastPage = ({ forecastData }) => (
    <div>
        <h2>Previsioni a lungo termine</h2>
        <Forecast forecastData={forecastData} />
    </div>
);

export default ForecastPage;
