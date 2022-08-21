import React from 'react';
import './Cart.css';

const Cart = (props) => {

  const { cart, user } = props;


  let totalQuantity = 0;

  let total = 0;
  for (const product of cart) {
    product.quantity = !product.quantity ? 1 : product.quantity;
    total = total + parseInt(product.price) * product?.quantity;
    totalQuantity = totalQuantity + product?.quantity;
  }

  // console.log(cart)
  // console.log(total, totalQuantity)


  return (
    <div>
      <div>
        {user?.displayName}
        {user?.address}
      </div>
      <div>
        <h2>This is the cart</h2>
        <h5>item ordered: {totalQuantity} </h5>
        <p>total: {total}</p>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;