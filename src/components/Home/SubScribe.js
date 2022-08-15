import React, { useRef, useState } from 'react';
import './Subscribe.css';

const SubScribe = () => {

  const emailRef = useRef();
  const [number, setNumber] = useState(0);



  const submitHandler = (e) => {
    e.preventDefault();
    e.target.reset();
    setNumber(1)
  }




  return (
    <div className='subscribe-container'>
      <h2>Subscribe to our Newsletters</h2>
      <form onSubmit={submitHandler}>
        <p>Do you want us to inform you about the festivals and adventures around the world as well as our discounts on specific tours?</p>
        <p>We'll send you a weekly email. You can unsubscribe at any time.</p>

        <input ref={emailRef} className='input' type="email" placeholder='Your Email' />
        <input className='btn' type="submit" value="Submit" />

        {
          number ? <p style={{ backgroundColor: 'transparent' }}> Welcome abroad! You have subscribed to our weekly Newsletter service.</p> : null
        }

      </form>
    </div>
  );
};

export default SubScribe;