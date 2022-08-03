import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react';

const Adventure = (props) => {
  const {name, img, _id} = props.adventure;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={`/adventures/${_id}`}> See Details </Link></Button>
      </CardActions>
      <CardActions>
        <Button size="small"><Link to='/order'> Add to your bucket </Link></Button>
      </CardActions>
    </Card>
  );
};

export default Adventure;