import * as React from 'react';
import { styled, Box, Rating, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomizedRating() {
  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">How much do you love Cypher Workshops?</Typography>
      <StyledRating
        name="hearticon"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">How cute is the Cypher Alien?</Typography>
      <Rating
        name="cypheralienicon"
        defaultValue={10}
        max={10}
        icon={<img src={"src/assets/myimage.png"} alt="Custom Icon" style={{ width: 24, height: 24 }} />}
        emptyIcon={<img src={"src/assets/myimage.png"} alt="Custom Icon Empty" style={{ width: 24, height: 24, opacity: 0.3 }} />}
      />
    </Box>
  );
}
