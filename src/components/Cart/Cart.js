import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const { cart, user } = props;
  let total = 0;
  for (const product of cart) {
    total = total + parseInt(product.price);
  }
  return (
    <div>
      <div>
        {user.displayName}
        {user.address}
      </div>
      <div>
        <h2>This is the cart</h2>
        <h5>item ordered: {props.cart?.length} </h5>
        <p>total: {total}</p>
        <button>proceed</button>
      </div>
    </div>
  );
};

export default Cart;