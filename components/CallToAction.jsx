import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CallToAction = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="Call-to-Action" className="bg-brightRed" data-aos="fade-left">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        <div>
          <button className="p-3 px-6 pt-2 text-brightRed bg-gray-300 rounded-full shadow-2xl align-baseline hover:bg-gray-800 transition duration-500">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
