// CheckoutForm.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
    } else {
      alert('Payment successful');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="card-element-wrapper">
        <CardElement options={{style: {base: {lineHeight: '1.5'}}}} />
      </div>
      {error && <div className="error">{error}</div>}
      <button className="button" type="submit">Pay</button>
    </form>
  );
};

export default CheckoutForm;
