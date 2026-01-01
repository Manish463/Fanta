import { useEffect, useState } from "react";
import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";
import { FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";
import {
  motion,
  AnimatePresence,
  easeInOut,
  animate,
  delay,
} from "motion/react";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Fanta1,
    title: "Orange Fanta",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$40",
    dis_price: "$50",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: Fanta2,
    title: "Cola Zero",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$80",
    dis_price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Fanta3,
    title: "Coca Cola",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$90",
    dis_price: "$100",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
];

const Hero = ({ props }) => {
  const { activeData, setActiveData } = props;

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  useEffect(() => {
    setActiveData(headphoneData[0]);
  }, []);

  return (
    <section id="home">
      <motion.div
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
          {/* navbar components */}
          <Navbar />

          <div className="app-container grid grid-cols-1 md:grid-cols-2 min-h-151.25">
            {/* Data Info */}
            <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-125 order-2 md:order-1 text-white">
              <div className="space-y-5 text-center md:text-left">
                <AnimatePresence mode="wait">
                  <motion.h1
                    data-invert-follower
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                  >
                    {activeData.title}
                  </motion.h1>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeData.id}
                    variants={SlideRight(0.4)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-sm leading-loose text-white/80"
                  >
                    {activeData.subtitle}
                  </motion.p>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.button
                    key={activeData.id}
                    variants={SlideRight(0.6)}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: activeData.bgColor,
                      color: "white",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ color: activeData.bgColor }}
                    className={`px-4 py-2 bg-white inline-block font-normal rounded-sm hover:outline-2`}
                  >
                    Order Now
                  </motion.button>
                </AnimatePresence>

                {/* list seperater */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                  className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 mb-10!"
                >
                  <div className="w-20 h-0.5 bg-white"></div>
                  <p>TOP RECOMMENDATION</p>
                  <div className="w-20 h-0.5 bg-white"></div>
                </motion.div>

                {/* image switcher */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                  className="grid grid-cols-3 gap-10"
                >
                  {headphoneData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200"
                      >
                        <div className="flex justify-center">
                          <img
                            data-switcher
                            src={data.image}
                            alt="image"
                            className={`w-20 img-shadow ${
                              activeData.image == data.image
                                ? "opacity-100 scale-110"
                                : "opacity-50"
                            }`}
                            onClick={() => handleActiveData(data)}
                          />
                        </div>
                        <div className="text-center mt-6! space-y-1">
                          <p className="text-base line-through opacity-50">
                            {data.price}
                          </p>
                          <p className="text-xl font-bold">{data.dis_price}</p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>

            {/* Hero image */}
            <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeData.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                  exit={{
                    opacity: 0,
                    x: -100,
                    transition: {
                      duration: 0.4,
                    },
                  }}
                  src={activeData.image}
                  alt="Main image"
                  className="w-37.5 md:w-50 xl:w-87.5 img-shadow relative z-100"
                />
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.4,
                    },
                  }}
                  className="text-white/5 text-9xl md:text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {activeData.modal}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* whatsapp icons */}
            <div className="text-4xl fixed bottom-10 right-10 hover:scale-110 duration-500 z-99999">
              <a data-hide href="https://github.com/Manish463">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
