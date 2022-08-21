import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';

const EnterDetails = () => {
  const { register, handleSubmit, reset } = useForm();
  const {user} = useAuth();
  const onSubmit = data => {
    const savedCart = getStoredCart();
    data.order = savedCart;
    fetch(`http://localhost:5000/orders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if(result.insertedId){
        alert('order processed successfully');
        clearTheCart();
        reset();
      }
    })
  };
  return (
    <div>
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input value={user?.displayName} {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        
        <input type="submit" />
      </form>
    </div>
  );
};

export default EnterDetails;