import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ title, image, price, rating, isMulti, items, addToCart }) => {
  if (isMulti) {
    return (
      <div className="bg-white p-5 flex flex-col z-30 shadow-sm">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <div className="grid grid-cols-2 gap-4 flex-grow">
          {items.map((item, idx) => (
            <div key={idx} className="cursor-pointer group">
              <img src={item.image} alt={item.name} className="h-28 w-full object-cover mb-1" />
              <p className="text-xs group-hover:underline">{item.name}</p>
            </div>
          ))}
        </div>
        <p className="amazon-link mt-5">Shop now</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 flex flex-col z-30 shadow-sm">
      <h2 className="text-xl font-bold mb-3 line-clamp-1">{title}</h2>
      
      <div className="flex items-center mb-2">
        {Array(Math.floor(rating)).fill().map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amazon_amber text-amazon_amber" />
        ))}
        <span className="text-xs text-gray-500 ml-1">({Math.floor(Math.random() * 5000)})</span>
      </div>

      <img src={image} alt={title} className="h-48 w-full object-contain mb-4" />

      <div className="mb-4">
        <span className="text-xs align-top font-semibold">$</span>
        <span className="text-2xl font-bold">{Math.floor(price)}</span>
        <span className="text-xs align-top font-semibold">{(price % 1).toFixed(2).substring(2)}</span>
      </div>

      <button onClick={addToCart} className="amazon-btn w-full mt-auto">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
