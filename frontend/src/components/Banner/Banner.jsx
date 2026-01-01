import BannerImg from "../../assets/Banner/juice.png";
import Splash from "../../assets/Banner/splash.png";
import { motion } from "motion/react";
import { fadeUp } from "../Products/Products.jsx";

const Banner = () => {
  return (
    <section id="about">
      <div className="app-container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
        {/* Banner Image Section */}
        <div className="relative">
          <motion.img
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeInOut",
            }}
            src={BannerImg}
            alt="Banner Image"
            className="w-75 md:w-100 mx-auto relative z-10"
          />
          <motion.img
            initial={{
              opacity: 0,
              y: -100,
              rotate: -180,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeInOut",
            }}
            src={Splash}
            alt="Splash"
            className="absolute bottom-0 z-0"
          />
        </div>

        {/* Banner Text info Section */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-112.5">
            <motion.h1
              variants={fadeUp(0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-semibold"
            >
              Refresh Your World with Fanta
            </motion.h1>
            <motion.p
              variants={fadeUp(0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-gray-500"
            >
              Fanta brings a burst of vibrant flavors and effervescent fun to
              your day! Whether you're looking to quench your thirst with a
              zesty orange, tangy lemon, or one of our many other fruit-inspired
              flavors, Fanta is your go-to drink for a refreshing and exciting
              experience. Dive into the world of Fanta and let every sip spark
              your senses with its bold, bubbly, and refreshing taste!
            </motion.p>
            <motion.button
              variants={fadeUp(0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200"
            >
              Shp Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
