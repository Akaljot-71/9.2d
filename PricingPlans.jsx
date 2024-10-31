// PricingPlans.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PricingPlans.css';

const PricingPlans = () => {
  return (
    <div className="pricing-plans">
      <h1>Pricing Plans</h1>
      <div className="plans">
        <div className="plan">
          <h2>Free Plan</h2>
          <p>Basic features for free.</p>
        </div>
        <div className="plan">
          <h2>Premium Plan</h2>
          <p>Additional features and support.</p>
          <Link to="/payment">Go Premium</Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
