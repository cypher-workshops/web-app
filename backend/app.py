from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS)
CORS(app)

# Replace with your OpenWeatherMap API key
OPENWEATHER_API_KEY = 'b06dbf910c042bb9bbc5e47d7afdadb4'

# NASA API CODE 
NASA_API_KEY = 'OLvXOq4MfGo30XHcDxFw0G2K7fKHc5Y3rj7dSoQc'
# NASA API CODE 

@app.route('/api/weather', methods=['GET'])
def get_weather():
    # Get the city name from the query parameter, default to 'Phoenix'
    city = request.args.get('city', 'Phoenix')
    
    # Construct the OpenWeatherMap API URL
    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid={OPENWEATHER_API_KEY}'
    
    try:
        # Make a request to the OpenWeatherMap API
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors

        # Parse and return the weather data
        weather_data = response.json()
        return jsonify({
            "name": weather_data["name"],
            "main": {
                "temp": weather_data["main"]["temp"]
            }
        })
    except requests.exceptions.RequestException as e:
        print(f"Error fetching weather data: {e}")
        return jsonify({"error": "Failed to fetch weather data"}), 500

# NASA API CODE 
@app.route('/api/nasa', methods=['GET'])
def get_nasa_apod():
    url = f'https://api.nasa.gov/planetary/apod?api_key={NASA_API_KEY}'

    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()

        if data.get("media_type") == "image":
            return jsonify({
                "title": data["title"],
                "image_url": data["hdurl"],
                "explanation": data["explanation"]
            })
        else:
            return jsonify({"error": "No image available"}), 400
    except requests.exceptions.RequestException as e:
        print(f"Error fetching NASA image: {e}")
        return jsonify({"error": "Failed to retrieve NASA image"}), 500
# NASA API CODE 

if __name__ == '__main__':
    app.run(debug=True)