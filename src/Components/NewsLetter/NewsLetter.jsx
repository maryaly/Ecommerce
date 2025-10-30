import React, { useState } from 'react'
import './NewsLetter.css'
import { isValidEmail } from '../../utils/validators';
import { showToast } from '../../utils/toast';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError(true);
      showToast("Please enter your email address ❗", "error")
      setTimeout(() => setError(false), 3000);
      return;
    }

    if (!isValidEmail(email)) {
      setError(true);
      showToast("Please enter a valid email address ⚠️", "error");
      setTimeout(() => setError(false), 3000);
      return;
    }

    setError(false);
    showToast("Subscribed successfully 🎉", "success");
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
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) {
              setError(false)
            }
          }}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;