import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'; // Import MUI components

export default function MediaCard() {
  return (
    <Card sx={{maxWidth: 500}}>
      <CardMedia
        sx={{ height: 400, width: 400, justifySelf: "center" }} //styling for the image 
        image="/src/assets/myimage.jpg" /*this is the path to your image*/
        title="cypher alien"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Grey's Anatomy
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          (the best show ever)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Season 1</Button> {/*implement functionality!*/}
        <Button size="small">Episode 1</Button> {/*implement functionality!*/}
      </CardActions>
      <CardMedia
        sx={{ height: 400, width: 400, justifySelf: "center" }} //styling for the image 
        image="/src/assets/myimage.jpg" /*this is the path to your image*/
        title="cypher alien"
      />
      <CardContent> 
        <Typography gutterLeft variant="h5" component="div">
          Grey's Anatomy
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          (the best show ever)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Season 1</Button> {/*implement functionality!*/}
        <Button size="small">Episode 1</Button> {/*implement functionality!*/}
      </CardActions>
    </Card>
  );
}
