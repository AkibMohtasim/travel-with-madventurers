import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Adventure from '../Adventure/Adventure';

const Advenntures = () => {
  const [adventures, setAdventures] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/adventures`)
      .then(res => res.json())
      .then(data => setAdventures(data))
  }, [])
  // console.log(adventures)
  return (
    <Container>
      <h2 style={{color: 'orangered', borderBottom: '1px dashed orangered', padding: '10px 0px', maxWidth: '250px', margin: '15px auto'}}>ADVENTURES</h2>
      <Grid container direction="row"
        justifyContent="center"
        alignItems="center" spacing={3}>

        {
          adventures.map(adv => <Grid item > <Adventure
            key={adv._id}
            adventure={adv}></Adventure> </Grid>)
        }

      </Grid>
    </Container>
  );
};

export default Advenntures;