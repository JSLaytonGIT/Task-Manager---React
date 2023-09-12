import React, { useState, useEffect } from "react";
import axios from 'axios';
import CityInput from "../../components/cityInput/CityInput";
import './WeatherApp.css';
import { WiDaySunny, WiDaySunnyOvercast, WiRain, WiDayRainMix, WiThunderstorm, WiFog, WiSnow, WiCloudy, WiCloud } from 'weather-icons-react';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('London');
    const [isDaytime, setIsDaytime] = useState(true);

    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const units = 'metric';

    useEffect(() => {
        if (city) {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
          .then((response) => {
            setWeatherData(response.data);
            const sunrise = response.data.sys.sunrise * 1000;
            const sunset = response.data.sys.sunset * 1000;
            const currentTime = Date.now();
            setIsDaytime(currentTime >= sunrise && currentTime <= sunset);
          })
          .catch((err) => {
            setError(err.message);
          });
        }
    }, [city, apiKey]);

    const getWeatherIcon = (weatherCode, size = 64) => {
        switch (weatherCode) {
            case '01d':
            case '01n':
            case '800':
                return <WiDaySunny size={size} color='#FFD700' />;
            case '02d':
            case '02n':
                return <WiDaySunnyOvercast size={size} color='#BBAA11' />;
            case '03d':
            case '03n':
                return <WiCloud size={size} color='#FFF' />;
            case '04d':
            case '04n':
                return <WiCloudy size={size} color='#AAA' />;
            case '09d':
            case '09n':
                return <WiRain size={size} color='#0074D9' />;
            case '10d':
            case '10n':
                return <WiDayRainMix size={size} color='#0074D9' />;
            case '11d':
            case '11n':
                return <WiThunderstorm size={size} color='#0074D9' />;
            case '13d':
            case '13n':
                return <WiSnow size={size} color='#FFFFFF' />;
            case '50d':
            case '50n':
                return <WiFog size={size} color='#999' />;
            default:
                const weatherId = parseInt(weatherCode);               
                if (weatherId >= 200 && weatherId <= 299) {
                    return <WiThunderstorm size={size} color='#0074D9' />;
                }
                if ((weatherId >= 300 && weatherId <= 399) || (weatherId >= 500 && weatherId <= 599)) {
                    return <WiRain size={size} color='#0074D9' />;
                }
                if (weatherId >= 600 && weatherId <= 699) {
                    return <WiSnow size={size} color='#0074D9' />;
                }
                if (weatherId >= 600 && weatherId <= 699) {
                    return <WiFog size={size} color='#0074D9' />;
                }
                if (weatherId >= 600 && weatherId <= 699) {
                    return <WiSnow size={size} color='#0074D9' />;
                }
                if (weatherId >= 800 && weatherId <= 899) {
                    return <WiDaySunny size={size} color='#0074D9' />;
                }
                return null;
        }
    };

    return (
        <div className={`weather-app ${isDaytime ? 'day' : 'night'}`}>
            <CityInput onCityChange={(newCity) => setCity(newCity)} />

            {error ? (
              <p>There was an error: {error}</p>
            ) : (
                <div>
                {weatherData && (
                    <div>
                        <h1>{weatherData.name}, {weatherData.sys.country}</h1>
                        <h2>Temperature: {weatherData.main.temp.toFixed(2)}°C</h2>
                        <h2>Humidity: {weatherData.main.humidity}%</h2>
                        <div className="weatherIcon">
                        {weatherData.weather && weatherData.weather[0] && (
                            getWeatherIcon(weatherData.weather[0].icon, 128)
                        )}
                        </div>
                        <h1>{weatherData.weather[0].description}</h1>
                    </div>
                )}
                </div>
            )}
        </div>
    )
}

export default WeatherApp;
