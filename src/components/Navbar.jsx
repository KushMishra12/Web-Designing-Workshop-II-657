import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, Menu, ChevronDown } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="sticky top-0 z-50">
      {/* Top Nav */}
      <div className="bg-amazon_blue flex items-center p-1 flex-grow py-2 px-4 gap-2">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 nav-item">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={100}
            height={40}
            className="cursor-pointer object-contain"
            alt="Amazon Logo"
          />
        </div>

        {/* Deliver to */}
        <div className="hidden lg:flex items-center text-white nav-item whitespace-nowrap">
          <MapPin className="h-5 w-5 mt-3" />
          <div className="flex flex-col ml-1">
            <span className="text-xs text-gray-300">Deliver to</span>
            <span className="text-sm font-bold">Nigeria</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-amazon_yellow hover:bg-[#F3A847]">
          <div className="bg-gray-100 p-2 h-full rounded-l-md flex items-center gap-1 text-gray-600 text-xs border-r border-gray-300">
            All <ChevronDown className="h-4 w-4" />
          </div>
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4"
            placeholder="Search Amazon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="h-12 p-4" />
        </div>

        {/* Right Section */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-1 nav-item">
            <span className="text-sm font-bold pt-1">EN</span>
            <ChevronDown className="h-4 w-4 mt-2" />
          </div>

          <div className="nav-item">
            <p>Hello, sign in</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="nav-item">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative flex items-center nav-item">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-amazon_yellow text-center rounded-full text-black font-bold">
              {cartCount}
            </span>
            <ShoppingCart className="h-10 w-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-3 ml-1">Cart</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
