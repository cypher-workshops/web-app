import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Typography } from '@mui/material';
import './Widgets.css';

function Widgets() {
  const [weather, setWeather] = useState([]); // Store an array of weather data
  const [error, setError] = useState(null);
  const cities = ['Phoenix', 'New York', 'Paris']; // Array of cities that will be passed to our API 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const responses = await Promise.all(
          cities.map(city =>
            axios.get('http://localhost:5000/api/weather', { params: { city } })
          )
        );

        console.log('API Responses:', responses.map(res => res.data)); // Correct logging

        const data = responses.map(response => ({
          location: { name: response.data?.name || 'Unknown' }, // Handle potential undefined
          current: { temperature: response.data?.main?.temp || 0 }, // Handle potential undefined
        }));

        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Failed to fetch weather data. Please try again.');
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="widget-page">
      {error ? (
        <Typography className="error-message">{error}</Typography>
      ) : weather.length > 0 ? (
        weather.map((cityWeather, index) => (
          <Card key={index} className="weather-card">
            <Typography className="weather-location">{cityWeather.location.name}</Typography>
            <Typography className="weather-temperature">
              {Math.round(cityWeather.current.temperature)}°F
            </Typography>
          </Card>
        ))
      ) : (
        <Typography>Loading weather data...</Typography>
      )}
    </div>
  );
}

export default Widgets;
