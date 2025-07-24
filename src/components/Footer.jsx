import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="w-32 mb-5" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-5 uppercase">Company</h3>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-5">Get In Touch</h3>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-465-90909 </li>
            <li>tib-coder@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-xs text-center">
          <i>
            Copyright 2025@ <span className="text-red-900 font-medium">T</span>
            <span className="text-green-900 font-medium">T</span>
            <span className="text-green-900 font-medium">T</span>
            <span className="text-red-900 font-medium">L</span>-
            <span className="font-medium text-orange-400">Coder</span> | All
            Right Reserved.
          </i>
        </p>
      </div>
    </div>
  );
};

export default Footer;
