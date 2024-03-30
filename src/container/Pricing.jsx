import React from "react";

const Pricing = ({ title, price, features, buttonText, buttonLink }) => {
  return (
    <div class="grid grid-col-12">
      <div class="sm:col-span-4 lg:col-span-4 xl:col-span-3 bg-white rounded-lg shadow-md overflow-hidden px-8 py-6">
        <h2 class="text-2xl font-bold text-center mb-4">{title}</h2>
        <p class="text-xl text-gray-700 text-center mb-8">{price}</p>
        <ul class="list-disc space-y-2 text-gray-700">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="py-2">
        <a
          href={buttonLink}
          class="block bg-blue-500 text-white font-bold py-2 px-4 rounded-md text-center hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          {buttonText}
        </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
