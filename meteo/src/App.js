import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ForecastPage from './pages/ForecastPage';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const cities = ['Rome', 'Tokyo', 'New York', 'Paris', 'London', 'Sydney'];

const App = ({ backgroundImage }) => {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});

  const apiKey = '43c3185f53a1409627d95ab543e3882a';

  const fetchWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=it&units=metric`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Errore nella chiamata API per ${city}:`, error);
      return null;
    }
  };

  const fetchForecastData = async (city) => {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${apiKey}&lang=it&units=metric`;

    try {
      const response = await axios.get(forecastUrl);
      return response.data.list.map(day => ({
        date: new Date(day.dt * 1000).toLocaleDateString('it-IT'),
        temp: day.temp.day,
        description: day.weather[0].description,
      }));
    } catch (error) {
      console.error(`Errore nella chiamata API per ${city}:`, error);
      return [];
    }
  };

  const loadCityData = useCallback(async () => {
    const weatherPromises = cities.map(city => fetchWeatherData(city));
    const forecastPromises = cities.map(city => fetchForecastData(city));

    const weatherResults = await Promise.all(weatherPromises);
    const forecastResults = await Promise.all(forecastPromises);

    const weatherMap = cities.reduce((acc, city, index) => {
      acc[city] = weatherResults[index];
      return acc;
    }, {});

    const forecastMap = cities.reduce((acc, city, index) => {
      acc[city] = forecastResults[index];
      return acc;
    }, {});

    setWeatherData(weatherMap);
    setForecastData(forecastMap);
  }, []);

  useEffect(() => {
    loadCityData();
  }, [loadCityData]);

  return (
    <Router>
      <Header />
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                weatherData={weatherData}
                forecastData={forecastData}
                onSearch={(city) => {
                  const formattedCity = `${city},IT`;
                  fetchWeatherData(formattedCity).then(data => {
                    setWeatherData(prev => ({ ...prev, [city]: data }));
                  });
                  fetchForecastData(formattedCity).then(data => {
                    setForecastData(prev => ({ ...prev, [city]: data }));
                  });
                }}
              />
            }
          />
          <Route
            path="/forecast"
            element={<ForecastPage forecastData={forecastData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
