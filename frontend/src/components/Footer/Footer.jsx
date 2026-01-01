import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CardsImg from "../../assets/credit-cards.webp";
import Logo from "../../assets/logo.png";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-12 pb-8">
      <div className="app-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.2,
                duration: 0.6,
            }}
            className="space-y-6"
          >
            <img src={Logo} alt="Logo" className="max-w-25 invert" />
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation /> Asansol, West Bengal
              </p>
            </div>
          </motion.div>

          {/* Footer Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.4,
                duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col mb-2">
                  <a href="#home">Home</a>
                  <a href="#products">Products</a>
                  <a href="#about">About</a>
                  <a href="#blogs">Blogs</a>
                  <a href="#faq">FAQ</a>
                  <a href="#contact">Contact</a>
              </div>
              <div className="flex flex-col mb-2">
                  <a href="#home">Home</a>
                  <a href="#products">Products</a>
                  <a href="#about">About</a>
                  <a href="#blogs">Blogs</a>
                  <a href="#faq">FAQ</a>
                  <a href="#contact">Contact</a>
              </div>
            </div>
          </motion.div>

          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.6,
                duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl hover:scale-110 duration-300" />
                <FaGoogle className="text-3xl hover:scale-110 duration-300" />
                <FaInstagram className="text-3xl hover:scale-110 duration-300" />
                <FaTelegram className="text-3xl hover:scale-110 duration-300" />
            </div>
            <div className="space-y-2">
                <p>Payment Methods</p>
                <img src={CardsImg} alt="" />
            </div>
          </motion.div>
        </div>

        {/* copyright section */}
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
            Copyright &copy; 2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
