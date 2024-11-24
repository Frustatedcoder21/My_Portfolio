import React from 'react';

const Footer = () => {
  return (
    <div className="w-screen h-[30vh] mt-7 bg-black absolute bottom-0">
      <div className="w-full bg-black grid grid-cols-1 sm:grid-cols-3">
        {/* Get in Touch */}
        <div>
          <h1 className="text-red-600 text-center mt-5">Get in Touch</h1>
          <div className="flex justify-center mt-5">
            <p className="text-red-600 text-xs">mayankp2k1@gmail.com</p>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h1 className="text-red-600 text-center mt-5">Connect</h1>
          <div className="flex justify-center gap-2 mt-5">
            <a href="https://www.linkedin.com/in/mayank-pandey-1a1826217" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" width="30px" alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/Frustatedcoder21" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" width="30px" alt="GitHub Icon" />
            </a>
            <a href="https://twitter.com/mayankpandey" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.svg" width="30px" alt="Twitter Icon" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h1 className="text-red-600 text-center mt-5">Services</h1>
          <div className="flex flex-col items-center gap-2 mt-5">
            <p className="text-red-600 font-thin text-xs">Frontend Development</p>
            <p className="text-red-600 font-thin text-xs">Backend Development</p>
            <p className="text-red-600 font-thin text-xs">Database Modelling</p>
            <p className="text-red-600 font-thin text-xs">Database Management</p>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <p className="absolute text-gray-600 bottom-1 left-1">
        <span className="mr-1">©</span>All rights reserved
      </p>
    </div>
  );
};

export default Footer;
