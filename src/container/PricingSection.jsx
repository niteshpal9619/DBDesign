import React from 'react';
import Pricing from './Pricing'; // Import the component

const pricingData = [
    {
        title: 'Free',
        price: '$0.00',
        features: ['10 GB Storage', '20 Email Addresses', 'Limited Support'],
        buttonText: 'Start Free',
        buttonLink: '#',
    },
    {
    title: 'Individual Plan',
    price: '$9/month',
    features: ['10 GB Storage', '20 Email Addresses', 'Limited Support'],
    buttonText: 'Buy Now',
    buttonLink: '#',
  },
  {
    title: 'Pro Plan',
    price: '$29/month',
    features: ['50 GB Storage', 'Unlimited Email Addresses', 'Priority Support'],
    buttonText: 'Buy Now',
    buttonLink: '#',
  },
];

const PricingSection = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pricingData.map((plan) => (
          <Pricing key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
