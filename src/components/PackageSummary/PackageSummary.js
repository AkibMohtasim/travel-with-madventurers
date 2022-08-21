import React from 'react';

const PackageSummary = (props) => {
  const { _id, name, duration, price, locations } = props.adventures;
  return (
    <div style={{ border: '1px solid grey' }}>
      <h3>{name}</h3>
      <h4>Duration: {duration}</h4>
      <h5>Locations: {locations}</h5>
      <h2>Price: {price}</h2>
      <button onClick={() => props.handleAddToCart({_id, name, price})}>Add to Cart</button>
    </div>
  );
};

export default PackageSummary;