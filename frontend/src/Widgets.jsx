import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Typography } from '@mui/material';
import './Widgets.css';

function Widgets() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/weather', {
          params: { city: 'Phoenix' }, // Replace 'Phoenix' with a dynamic city name if needed
        });
        console.log('API Response:', response.data);

        const data = response.data;
        setWeather({
          location: { name: data.name },
          current: { temperature: data.main.temp },
        });
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
      ) : weather ? (
        <Card className="weather-card">
          <Typography className="weather-location">{weather.location.name}</Typography>
          <Typography className="weather-temperature">{Math.round(weather.current.temperature)}°F</Typography>
        </Card>
      ) : (
        <Typography>Loading weather data...</Typography>
      )}
      <Typography className="helper-text">If you can't see the weather, let us know.</Typography>
    </div>
  );
}

export default Widgets;
