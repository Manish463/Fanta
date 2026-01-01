import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState, useRef } from "react";

export default () => {
  const ref = useRef(null);

  const [el, setEl] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);

      setEl(document.elementFromPoint(e.clientX, e.clientY));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    if (el?.hasAttribute("data-switcher")) {
      ref.current.innerText = "View Details";
    } else if (el?.hasAttribute("data-read")) {
      ref.current.innerText = "Read";
    } else {
      ref.current.innerText = "";
    }
  }, [el]);

  return (
    <motion.div
      ref={ref}
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
      animate={{
        scale: el?.hasAttribute("data-invert-follower")
          ? 7
          : el?.hasAttribute("data-navigation") ||
            el?.hasAttribute("data-switcher") ||
            el?.hasAttribute("data-read")
          ? 4
          : 1,
        transition: {
          duration: 0.4,
        },
      }}
      className={`fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-50 text-[4px] md:flex items-center justify-center text-center overflow-hidden text-white hidden
      ${
        el?.hasAttribute("data-invert-follower") ||
        el?.hasAttribute("data-navigation")
          ? "z-10 mix-blend-difference"
          : ""
      }
      ${
        el?.hasAttribute("data-switcher") || el?.hasAttribute("data-read")
          ? "z-10 bg-black!"
          : ""
      }
      `}
    />
  );
};
