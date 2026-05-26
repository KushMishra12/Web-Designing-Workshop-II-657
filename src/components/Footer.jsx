import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-amazon_blue-light text-white">
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="w-full bg-[#37475a] hover:bg-[#485769] py-4 text-xs font-semibold focus:outline-none transition-colors"
      >
        Back to top
      </button>

      {/* Directory Links */}
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-6">
        <div>
          <h3 className="font-bold mb-4">Get to Know Us</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">About Amazon</li>
            <li className="hover:underline cursor-pointer">Investor Relations</li>
            <li className="hover:underline cursor-pointer">Amazon Devices</li>
            <li className="hover:underline cursor-pointer">Amazon Science</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Make Money with Us</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Sell products on Amazon</li>
            <li className="hover:underline cursor-pointer">Sell on Amazon Business</li>
            <li className="hover:underline cursor-pointer">Sell apps on Amazon</li>
            <li className="hover:underline cursor-pointer">Become an Affiliate</li>
            <li className="hover:underline cursor-pointer">Advertise Your Products</li>
            <li className="hover:underline cursor-pointer">Self-Publish with Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Amazon Payment Products</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Amazon Business Card</li>
            <li className="hover:underline cursor-pointer">Shop with Points</li>
            <li className="hover:underline cursor-pointer">Reload Your Balance</li>
            <li className="hover:underline cursor-pointer">Amazon Currency Converter</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Let Us Help You</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Amazon and COVID-19</li>
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Your Orders</li>
            <li className="hover:underline cursor-pointer">Shipping Rates & Policies</li>
            <li className="hover:underline cursor-pointer">Returns & Replacements</li>
            <li className="hover:underline cursor-pointer">Manage Your Content and Devices</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-10 flex flex-col items-center justify-center space-y-4">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          width={80}
          height={30}
          className="cursor-pointer object-contain"
          alt="Amazon Logo"
        />
        <div className="flex space-x-6 text-xs text-gray-300">
          <p className="border border-gray-500 px-2 py-1 rounded cursor-pointer hover:border-white">English</p>
          <p className="border border-gray-500 px-2 py-1 rounded cursor-pointer hover:border-white">$ USD - U.S. Dollar</p>
          <p className="border border-gray-500 px-2 py-1 rounded cursor-pointer hover:border-white">United States</p>
        </div>
      </div>

      <div className="bg-amazon_blue py-8 flex flex-col items-center text-[10px] text-gray-400">
        <div className="flex space-x-4 mb-1">
          <p className="hover:underline cursor-pointer">Conditions of Use</p>
          <p className="hover:underline cursor-pointer">Privacy Notice</p>
          <p className="hover:underline cursor-pointer">Your Ads Privacy Choices</p>
        </div>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
