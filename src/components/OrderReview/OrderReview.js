import React, { useEffect, useState } from 'react';

import useAdventures from '../../hooks/useAdventures';

import useCart from '../../hooks/useCart';
import { useNavigate } from 'react-router';
import { getStoredCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
  // const [adventures] = useAdventures();
  const [adventures, setAdventures] = useState([]);
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/adventures`)
      .then(res => res.json())
      .then(data => setAdventures(data))
  }, [])

  useEffect(() => {
    if (adventures.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const selectedAdventure = adventures.find(adv => adv._id === key);
        if (selectedAdventure) {
          const quantity = savedCart[key];
          selectedAdventure.quantity = quantity;
          storedCart.push(selectedAdventure);
        }

      }
      setCart(storedCart)
    }
  }, [adventures])


  const handleRemove = key => {
    const newCart = cart.filter(product => product._id !== key);
    setCart(newCart);
    removeFromDb(key);
  }

  const handleProceedToShipping = () => {
    // setCart([]);
    // clearTheCart();
    navigate('/enterDetails', { replace: true });
    // history.push('/shipping');
  }

  return (
    <div>
      <div>
        {
          cart.map(product => <ReviewItem
            key={product._id}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handleProceedToShipping}>Enter Details</button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;