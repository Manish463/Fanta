import Logo from "../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { motion } from "motion/react";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#home",
  },
  {
    id: 2,
    title: "Products",
    link: "#products",
  },
  {
    id: 3,
    title: "About",
    link: "#about",
  },
  {
    id: 4,
    title: "Blog",
    link: "#blogs",
  },
  {
    id: 5,
    title: "FAQ",
    link: "#faq",
  },
  {
    id: 6,
    title: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  return (
    <div className="text-white py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-between items-center "
      >
        {/* logo section */}
        <div>
          <img src={Logo} alt="logo" className="max-w-25 invert" />
        </div>

        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  data-navigation
                  href={item.link}
                  className="inline-block text-base font-semibold py-2 px-3 uppercase"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* hamburger section */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
