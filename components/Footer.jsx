import React from 'react';
import Image from 'next/future/image';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <footer className="bg-veryDarkBlue" data-aos="fade-right">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, MateusCodes®
          </div>
          <div className="mb-3">
            <Image
              src="https://i.imgur.com/JVivP1S.png"
              blurDataURL="https://i.imgur.com/JVivP1S.png"
              placeholder="blur"
              width={146}
              height={24}
              alt="Manage White Logo"
            />
          </div>

          <div className="flex justify-center space-x-4 text-white pb-3">
            <a
              className="hover:text-indigo-400 transition-colors"
              target="_blank"
              href="https://www.facebook.com/matheus.sobreira.3"
              rel="noreferrer"
            >
              <FaFacebook size={25} />
            </a>
            <a
              className="hover:text-indigo-400 transition-colors"
              target="_blank"
              href="https://www.youtube.com/channel/UCOtPBCRmsNB2TAuM_aKO1PA"
              rel="noreferrer"
            >
              <FaYoutube size={25} />
            </a>
            <a
              className="hover:text-indigo-400 transition-colors"
              target="_blank"
              href=""
            >
              <FaTwitter size={25} />
            </a>
            <a
              className="hover:text-indigo-400 transition-colors"
              target="_blank"
              href="https://www.instagram.com/theu.sobreira/"
              rel="noreferrer"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, MateusCodes®
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
