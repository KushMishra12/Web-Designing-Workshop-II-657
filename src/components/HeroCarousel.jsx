import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1500&q=80"
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-0 bottom-0 z-30 px-4 hover:border-2 border-transparent hover:border-amazon_blue/20 focus:outline-none group"
      >
        <ChevronLeft className="h-12 w-12 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-0 bottom-0 z-30 px-4 hover:border-2 border-transparent hover:border-amazon_blue/20 focus:outline-none group"
      >
        <ChevronRight className="h-12 w-12 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>

      <div className="flex overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`min-w-full transition-transform duration-500 ease-in-out ${
              index === currentIndex ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img 
              src={banner} 
              alt={`Banner ${index}`}
              className="w-full object-cover h-[300px] md:h-[600px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
