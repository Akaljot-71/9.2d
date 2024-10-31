// Payment.jsx
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './Payment.css';

const stripePromise = loadStripe('your-publishable-key-here');

const Payment = () => {
  return (
    <div className="payment-page">
      <h1>Complete Your Purchase</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
