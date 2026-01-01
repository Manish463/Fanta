import Logo from "../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

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
  const [show, setShow] = useState(window.innerWidth > 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShow(window.innerWidth > 768);
    });

    return () =>
      window.removeEventListener("resize", () =>
        setShow(window.innerWidth > 768)
      );
  });

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
        {show && (
          <ul
            className="
            flex flex-col absolute top-15 right-10 items-center bg-white/10 backdrop-blur-md border-2 rounded-2xl px-12 pt-8 pb-4 z-101
            md:flex-row md:relative md:top-auto md:right-auto md:bg-white/0 md:backdrop-blur-none md:border-0 md:py-4 md:gap-4 md:z-40 
            "
          >
            <button
              onClick={() => {
                setShow(false);
              }}
              className="absolute right-5 top-5 flex md:hidden"
            >
              <RxCross1 className="font-bold" />
            </button>
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
        )}

        {/* hamburger section */}
        { !show && <button
          onClick={() => {
            setShow(true);
          }}
          className="md:hidden z-99"
        >
          <MdMenu className="text-4xl" />
        </button>}
      </motion.div>
    </div>
  );
};

export default Navbar;
