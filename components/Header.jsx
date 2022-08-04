import React, { useState, useEffect } from 'react';
import Logo from '../assets/svgs/logo';
import useMedia from '../Hooks/useMedia';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileScreen = useMedia('(max-width: 480px)');

  useEffect(() => {
    if (!mobileScreen) {
      setMobileMenu(false);
    }
  }, [mobileScreen]);

  return (
    <header>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <Logo />
          </div>

          <div className="hidden md:flex space-x-6">
            <a
              className="hover:text-darkGrayishBlue transition duration-300"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="hover:text-darkGrayishBlue transition duration-300"
              href="#product"
            >
              Product
            </a>
            <a
              className="hover:text-darkGrayishBlue transition duration-300"
              href="#about"
            >
              About Us
            </a>
            <a
              className="hover:text-darkGrayishBlue transition duration-300"
              href="#careers"
            >
              Careers
            </a>
            <a
              className="hover:text-darkGrayishBlue transition duration-300"
              href="#community"
            >
              Community
            </a>
          </div>

          <button className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full align-baseline hover:bg-brightRedLight transition duration-500">
            Get Started
          </button>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`${
              mobileMenu ? 'open' : ''
            } block hamburger md:hidden focus:outline-none`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div className="md:hidden">
          <div
            className={`absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md transition duration-500 ${
              mobileMenu ? 'block' : 'hidden'
            }`}
          >
            <a href="">Pricing</a>
            <a href="">Product</a>
            <a href="">About Us</a>
            <a href="">Careers</a>
            <a href="">Community</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
