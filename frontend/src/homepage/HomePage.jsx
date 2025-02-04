import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'; // Import MUI components

export default function MediaCard() {
  return (
    <Card sx={{maxWidth: 345}}>
      <CardMedia
        sx={{ height: 200, width: 200, justifySelf: "center" }} //styling for the image 
        image="/src/assets/myimage.png" /*this is the path to your image*/
        title="cypher alien"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Neutron Star Collision
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This is actually so cool!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">This is</Button> {/*implement functionality!*/}
        <Button size="small">Awesome</Button> {/*implement functionality!*/}
      </CardActions>
    </Card>
  );
}