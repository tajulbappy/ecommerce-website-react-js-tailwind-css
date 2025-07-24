import React from 'react'
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 py-20 text-center text-gray-700 text-xs sm:text-sm md:text-base">
        <div>
          <img
            src={assets.exchange_icon}
            className="w-12 m-auto mb-5"
            alt="exchange-icon"
          />
          <h3 className="semibold">Easy Exchange Policy</h3>
          <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div>
          <img
            src={assets.quality_icon}
            className="w-12 m-auto mb-5"
            alt="exchange-icon"
          />
          <h3 className="semibold">7 Days Return Policy</h3>
          <p className="text-gray-400">We provide 7 days free return policyy</p>
        </div>
        <div>
          <img
            src={assets.support_img}
            className="w-12 m-auto mb-5"
            alt="exchange-icon"
          />
          <h3 className="semibold">Best customer support</h3>
          <p className="text-gray-400">we provide 24/7 customer support</p>
        </div>
      </div>
  
  );
}

export default OurPolicy
