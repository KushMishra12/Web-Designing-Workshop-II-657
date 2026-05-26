import React from 'react';
import { Menu } from 'lucide-react';

const SubNavbar = () => {
  return (
    <div className="bg-amazon_blue-light flex items-center space-x-3 p-2 pl-6 text-white text-sm">
      <div className="flex items-center nav-item px-1">
        <Menu className="h-6 mr-1" />
        <span className="font-bold">All</span>
      </div>
      <p className="nav-item">Today's Deals</p>
      <p className="nav-item">Customer Service</p>
      <p className="nav-item">Registry</p>
      <p className="nav-item">Gift Cards</p>
      <p className="nav-item">Sell</p>
      <p className="hidden lg:inline-flex nav-item">Electronics</p>
      <p className="hidden lg:inline-flex nav-item">Food & Grocery</p>
      <p className="hidden lg:inline-flex nav-item">Prime</p>
      <p className="hidden lg:inline-flex nav-item">Buy Again</p>
      <p className="hidden lg:inline-flex nav-item">Shopper Toolkit</p>
      <p className="hidden xl:inline-flex nav-item">Health & Household</p>
    </div>
  );
};

export default SubNavbar;
