import React from 'react';

const PackageSummary = (props) => {
  const { name, duration, price, locations } = props.adventures;
  // const { handleAddToCart } = props.handleAddToCart;
  // const {handleAddToCart} = handleAddToCart;
  return (
    <div style={{ border: '1px solid grey' }}>
      <h3>{name}</h3>
      <h4>Duration: {duration}</h4>
      <h5>Locations to be covered: {locations}</h5>
      <h2>Price: {price}</h2>
      <button onClick={() => props.handleAddToCart({name, price})}>Add to Cart</button>
    </div>
  );
};

export default PackageSummary;