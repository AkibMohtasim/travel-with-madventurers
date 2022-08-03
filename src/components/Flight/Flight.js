import React from 'react';

const Flight = (props) => {
  const { flight_date, departure, airline, flight } = props.flight;
  return (
    <div style={{border: '1px solid black', width: '25vw', margin: '5px'}}>
      <h3> Airline Name: {airline.name} </h3>
      <h4> Departure Airport: {departure.airport} </h4>
      <p>Flight Date: {flight_date}</p>
      <p>Flight Number: {flight.number}</p>
    </div>
  );
};

export default Flight;