import React from 'react'; 
import { useState } from 'react'; 
import './Homepage.css'; 
import { Box, Typography, TextField, Button } from '@mui/material'; 

function HomePage() { 
  const [name, setName] = useState(''); 
  const [greeting, setGreeting] = useState(''); // Declare a state variable `greeting` (an empty string) with `setGreeting` to update it
  const handleGreet = () => setGreeting(`Hi, ${name}!`); // A function that updates the `greeting` state and creates the message using `name` state.

  return ( 
    <Box status
      className="home-page">
      <Typography variant="h4" color="primary" gutterBottom>
        Enter Your Name
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
        onClick={handleGreet} 
      >
        Greet
      </Button>
      {greeting && ( 
        <Typography variant="h4" color="secondary">
          {greeting} 
        </Typography>
      )}
    </Box>
  );
}


export default HomePage;  

