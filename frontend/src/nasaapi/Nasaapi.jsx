import { useState, useEffect } from 'react';
import './Nasaapi.css'; 

function Nasaapi() {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/nasa') 
      .then(response => {
        console.log("Raw Response:", response);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        console.log("Parsed Data:", data);
        if (data.image_url) {
          setImageData(data);
        } else {
          throw new Error('No image found in API response');
        }
        setLoading(false);
      });
  }, []);
  

  return (
    <div className="nasa-container">
      <h2>NASA Astronomy Picture of the Day</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imageData && (
        <div>
          <h3>{imageData.title}</h3>
          <img src={imageData.image_url} alt={imageData.title} width="500px" />
          <p>{imageData.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default Nasaapi;
