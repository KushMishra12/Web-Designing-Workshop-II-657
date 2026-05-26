import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "Gaming accessories",
    isMulti: true,
    items: [
      { name: "Headsets", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" },
      { name: "Keyboards", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=400&q=80" },
      { name: "Computer mice", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80" },
      { name: "Chairs", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    id: 2,
    title: "Premium Wireless Noise Cancelling Headphones",
    price: 348.00,
    rating: 5,
    image: "https://images.unsplash.com/photo-1546435770-a3e426da473b?auto=format&fit=crop&w=400&q=80",
    isMulti: false
  },
  {
    id: 3,
    title: "High Performance Professional Laptop",
    price: 2499.00,
    rating: 5,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80",
    isMulti: false
  },
  {
    id: 4,
    title: "Shop deals in Fashion",
    isMulti: true,
    items: [
      { name: "T-Shirts", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80" },
      { name: "Shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80" },
      { name: "Dresses", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80" },
      { name: "Jackets", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    id: 5,
    title: "Next-Gen Gaming Console",
    price: 349.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=400&q=80",
    isMulti: false
  },
  {
    id: 6,
    title: "Latest Flagship Smartphone",
    price: 1199.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    isMulti: false
  },
  {
    id: 7,
    title: "Ergonomic Wired Gaming Mouse",
    price: 39.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80",
    isMulti: false
  },
  {
    id: 8,
    title: "Modern E-Reader with Paper-White Display",
    price: 139.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80",
    isMulti: false
  }
];

const ProductGrid = ({ addToCart }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          addToCart={addToCart}
        />
      ))}
      
      {/* Example of a full-width image between products */}
      <img 
        className="md:col-span-full w-full py-4 cursor-pointer" 
        src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1500&q=80" 
        alt="Banner" 
      />

      {/* More products could be added here */}
    </div>
  );
};

export default ProductGrid;
