import React from 'react'; 
import { useState } from 'react'; 
import './Homepage.css'; 
import { Box, Typography, TextField, Button } from '@mui/material'; 

function HomePage() { 
  const [name, setName] = useState(''); 
  const [greeting, setGreeting] = useState(''); // Declare a state variable `greeting` (an empty string) with `setGreeting` to update it
  const handleGreet = () => setGreeting(`Hi, ${name}!`); // A function that updates the `greeting` state and creates the message using `name` state.

  return ( 
    <Box
      className="home-page">
      <Typography variant="h4" color="primary" gutterBottom>
        The Chemistry of Chocolate
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleGreet} // Calls the handle greet function when the button is clicked 
      >
        Greet
      </Button>
      {greeting && ( // Renders the Typography text if greeting is not empty 
        <Typography variant="h4" color="secondary">
          {greeting}  
        </Typography>
      )}
    </Box>
  );
}

export default HomePage;  

