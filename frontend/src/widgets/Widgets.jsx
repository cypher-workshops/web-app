import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Typography, Button } from '@mui/material';
import './Widgets.css';
import tshirtImage from '../assets/tshirt.png';
import jeansImage from '../assets/jeans.png';
import sneakersImage from '../assets/sneakers.png';

function Widgets() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [showOutfit, setShowOutfit] = useState(false);
  const [outfitSuggestion, setOutfitSuggestion] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/weather', {
          params: { city: 'Phoenix' },
        });
        const data = response.data;
        const temperature = data.main.temp;

        setWeather({
          location: { name: data.name },
          current: { temperature: temperature },
        });

        if (temperature >= 50 && temperature <= 70) {
          setOutfitSuggestion({
            message: 'We suggest a sweater, jeans, and sneakers for today.',
            images: {
              tshirt: tshirtImage,
              jeans: jeansImage,
              sneakers: sneakersImage,
            },
          });
        } else {
          setOutfitSuggestion(null);
        }
      } catch (error) {
        setError('Failed to fetch weather data. Please try again.');
      }
    };

    fetchWeather();
  }, []);

  const handleDressMeClick = () => {
    if (outfitSuggestion) {
      setShowOutfit(true);
    }
  };

  return (
    <div className="widget-page">
      {error ? (
        <Typography className="error-message">{error}</Typography>
      ) : weather ? (
        <>
          <Card className="weather-card">
            <Typography className="weather-location">{weather.location.name}</Typography>
            <Typography className="weather-temperature">{Math.round(weather.current.temperature)}°F</Typography>
          </Card>

          {outfitSuggestion && (
            <div className="outfit-section">
              <Button
                variant="contained"
                onClick={handleDressMeClick}
                className="dress-me-button"
              >
                Dress Me
              </Button>

              {showOutfit && (
                <Card className="outfit-card">
                  <Typography className="outfit-message">{outfitSuggestion.message}</Typography>
                  <div className="outfit-images">
                    <img src={outfitSuggestion.images.tshirt} alt="T-shirt" className="outfit-image" />
                    <img src={outfitSuggestion.images.jeans} alt="Jeans" className="outfit-image" />
                    <img src={outfitSuggestion.images.sneakers} alt="Sneakers" className="outfit-image" />
                  </div>
                </Card>
              )}
            </div>
          )}
        </>
      ) : (
        <Typography>Loading weather data...</Typography>
      )}
    </div>
  );
}

export default Widgets;
