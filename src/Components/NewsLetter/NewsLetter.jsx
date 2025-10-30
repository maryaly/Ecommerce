import React, { useState } from 'react'
import './NewsLetter.css'
import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js';

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError(true);
      Toastify({
        text: "Please enter your email address ❗",
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        duration: 3000,
        gravity: "top",
        position: "center"
      }).showToast();

      // remove red border after 3 seconds
      setTimeout(() => setError(false), 3000);
      return;
    }

    setError(false);
    Toastify({
      text: "Subscribed successfully 🎉",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      duration: 3000,
      gravity: "top",
      position: "center",
    }).showToast();

    setEmail('');
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className={`newsletter-input ${error ? 'error-border' : ''}`}>
        <input
          type="email"
          placeholder='Your Email id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
