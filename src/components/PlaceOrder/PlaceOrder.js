import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import PackageSummary from '../PackageSummary/PackageSummary';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { user } = useAuth();
  const [adventures, setAdventures] = useState([]);
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useCart();

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

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log(product._id)
    addToDb(product._id)
  }

  return (
    <div className='order-container'>
      <div>
        {
          adventures.map(adv =>
            <PackageSummary
              key={adv._id}
              adventures={adv}
              handleAddToCart={handleAddToCart}
            ></PackageSummary>
          )
        }
      </div>
      <div className='cart'>
        <Cart cart={cart} user={user}>
          <Link to='/review'>Proceed</Link>
        </Cart>
      </div>

    </div>
  );
};

export default PlaceOrder;