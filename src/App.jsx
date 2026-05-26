import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import HeroCarousel from './components/HeroCarousel';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cartCount} />
      <SubNavbar />
      
      <main className="flex-grow">
        <HeroCarousel />
        
        <div className="max-w-[1500px] mx-auto -mt-40 md:-mt-64 relative z-20 px-4 pb-10">
          <ProductGrid addToCart={addToCart} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
