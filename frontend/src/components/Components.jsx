import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'; // Import MUI components

export default function MediaCard() {
  return (
    <Card sx={{maxWidth: 345}}>
      <CardMedia
        sx={{ height: 200, width: 200, justifySelf: "center" }} //styling for the image 
        image="/src/assets/bonestime.jpg" /*this is the path to your image*/
        title="cypher alien"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bones!!
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Temperence Brennan and Seely Booth
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Season 4</Button> {/*implement functionality!*/}
        <Button size="small">Episode 17</Button> {/*implement functionality!*/}
      </CardActions>

      <CardMedia
        sx={{ height: 300, width: 300, justifySelf: "center" }} //styling for the image 
        image="/src/assets/bonesbraintumor.jpg" /*this is the path to your image*/
        title="cypher alien"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bones!!
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Temperence Brennan and Seely Booth
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Season 4</Button> {/*implement functionality!*/}
        <Button size="small">Episode 21</Button> {/*implement functionality!*/}
      </CardActions>

      <CardMedia
        sx={{ height: 300, width: 300, justifySelf: "center" }} //styling for the image 
        image="/src/assets/bonessexyscientist.jpg" /*this is the path to your image*/
        title="cypher alien"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bones!!
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Temperence Brennan and Seely Booth
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Season 4</Button> {/*implement functionality!*/}
        <Button size="small">Episode 21</Button> {/*implement functionality!*/}
      </CardActions>
    </Card>
    
  );
}
