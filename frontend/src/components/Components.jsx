import React from 'react';
import { Box, Rating, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'; // Import MUI components

export default function MediaCard() {
  return (
    <Card sx={{maxWidth: 345}}>
      <CardMedia
        sx={{ height: 200, width: 200, justifySelf: "center" }} //styling for the image 
        image="/src/assets/myimage.jpeg" /*this is the path to your image*/
        title="cypher alien"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SNICKLES
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          I love learning about about coding!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button> {/*implement functionality!*/}
        <Button size="small">Learn More</Button> {/*implement functionality!*/}
      </CardActions>
    </Card>
  );
}