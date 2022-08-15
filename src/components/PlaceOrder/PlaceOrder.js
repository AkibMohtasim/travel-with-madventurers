import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Cart from '../Cart/Cart';
import PackageSummary from '../PackageSummary/PackageSummary';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { user } = useAuth();
  const [adventures, setAdventures] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/adventures`)
      .then(res => res.json())
      .then(data => setAdventures(data))
  }, [])

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className='order-container'>
      <div>
        {
          adventures.map(adv =>
            <PackageSummary
              key={adv._id}
              adventures={adv}
              handleAddToCart = {handleAddToCart}
            ></PackageSummary>
          )
        }
      </div>
      <div className='cart'>
        <Cart cart={cart} user={user}></Cart>
      </div>

    </div>
  );
};

export default PlaceOrder;