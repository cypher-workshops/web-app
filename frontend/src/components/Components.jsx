import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'; // Import MUI components

export default function MediaCard() {
  return (
    <Card sx={{maxWidth: 345}}>
      <CardMedia
        sx={{ height: 200, width: 300, justifySelf: "center" }} //styling for the image 
        image="/src/assets/Coding.jpeg" /*this is the path to your image*/
        title="cypher alien"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          For More Information:  
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        On chocolate and chemistry!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Recipes</Button> {/*implement functionality!*/}
        <Button size="small">Resources</Button> {/*implement functionality!*/}
      </CardActions>
    </Card>
  );
}