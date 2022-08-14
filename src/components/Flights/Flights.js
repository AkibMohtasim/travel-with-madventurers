import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import Flight from '../Flight/Flight';

const Flights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.REACT_APP_ACCESS_KEY_FLIGHT_API}`)
      .then(res => res.json())
      .then(data => setFlights(data.data))
  }, [])

  let flightContent;

  if (flights.length < 1) {
    flightContent = <div>
      <Skeleton width={410} height={118} />
      <Skeleton animation="wave" width={410} height={118} />
      <Skeleton animation={false} width={410} height={118} />
    </div>
  }
  else {
    flightContent = flights?.map(flight =>
      <Flight
        key={flight?.flight?.iata}
        flight={flight}></Flight>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {
        // flights?.map(flight =>
        //   <Flight
        //     key={flight?.flight?.iata}
        //     flight={flight}></Flight>
        // )
        flightContent
      }
    </div>
  );
};

export default Flights;