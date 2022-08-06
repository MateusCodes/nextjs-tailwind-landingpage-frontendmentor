import React from 'react';
import Image from 'next/future/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1024, min: 976 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

const Testimonials = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="testimonials" data-aos="fade-right">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What is Different About Manage?
        </h2>
        <div className="mt-24">
          <Carousel infinite={true} responsive={responsive} itemClass="px-4">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
              <Image
                src="https://i.imgur.com/8IqmKik.png"
                blurDataURL="https://i.imgur.com/8IqmKik.png"
                placeholder="blur"
                alt="Avatar Anisha"
                width={50}
                height={50}
              />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our teams workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
              <Image
                src="https://i.imgur.com/bKmSXGY.png"
                blurDataURL="https://i.imgur.com/bKmSXGY.png"
                placeholder="blur"
                alt="Avatar Anisha"
                width={50}
                height={50}
              />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
              <Image
                src="https://i.imgur.com/3l0QjRe.png"
                blurDataURL="https://i.imgur.com/3l0QjRe.png"
                placeholder="blur"
                alt="Avatar Anisha"
                width={50}
                height={50}
              />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our teams workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
              <Image
                src="https://i.imgur.com/8IqmKik.png"
                blurDataURL="https://i.imgur.com/8IqmKik.png"
                placeholder="blur"
                alt="Avatar Anisha"
                width={50}
                height={50}
              />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our teams workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
              <Image
                src="https://i.imgur.com/bKmSXGY.png"
                blurDataURL="https://i.imgur.com/bKmSXGY.png"
                placeholder="blur"
                alt="Avatar Anisha"
                width={50}
                height={50}
              />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
              <Image
                src="https://i.imgur.com/3l0QjRe.png"
                blurDataURL="https://i.imgur.com/3l0QjRe.png"
                placeholder="blur"
                alt="Avatar Anisha"
                width={50}
                height={50}
              />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our teams workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </Carousel>
        </div>

        <div className="my-16">
          <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full align-baseline hover:bg-brightRedLight transition duration-500">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
