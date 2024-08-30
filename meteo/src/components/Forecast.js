import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { WiDaySunny, WiRain, WiCloudy, WiSnow } from 'react-icons/wi';

const getIcon = (description) => {
    if (description.includes('rain')) return <WiRain />;
    if (description.includes('cloud')) return <WiCloudy />;
    if (description.includes('snow')) return <WiSnow />;
    return <WiDaySunny />;
};

const Forecast = ({ forecastData }) => {
    if (!forecastData || forecastData.length === 0) return <p>Nessuna previsione disponibile.</p>;

    return (
        <ListGroup>
            {forecastData.map((day, index) => (
                <ListGroup.Item key={index} className="d-flex align-items-center">
                    <div className="mr-3" style={{ fontSize: '1.5rem' }}>
                        {getIcon(day.description)}
                    </div>
                    <div>
                        {day.date}: {day.temp} °C, {day.description}
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Forecast;
