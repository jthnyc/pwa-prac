import React from "react";
import {g_bw, j_color, jg_bw, jg_bw2, jg_color, jg_rings} from "../img/index";
import {motion} from "framer-motion";

const Photos = () => {
  const [shouldShowActions, setShouldShowActions] = React.useState(false);
  const [lastYPos, setLastYPos] = React.useState(0);

  React.useEffect(() => {
    function handleScroll() {
      console.log("scrolled");
      const yPos = window.scrollY;
      const isScrollingup = yPos > lastYPos;
      setShouldShowActions(isScrollingup);
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <div>
      <motion.div
        animate={{opacity: shouldShowActions ? 1 : 0}}
        initial={{pacity: 0}}
        transition={{opacity: {duration: 0.8}}}
      >
        <img src={jg_bw} alt="Joanna & Gabe glancing back near Bushwick Inlet Park" />
      </motion.div>
      <motion.div animate={{opacity: shouldShowActions ? 1 : 0}} initial={{pacity: 0}}>
        <img src={jg_rings} alt="Close up shot of wedding bands" />
      </motion.div>
      <motion.div animate={{opacity: shouldShowActions ? 1 : 0}} initial={{pacity: 0}}>
        <img src={g_bw} alt="Gabe looking afar on the balcony at William Vale" />
      </motion.div>
      <motion.div animate={{opacity: shouldShowActions ? 1 : 0}} initial={{pacity: 0}}>
        <img src={j_color} alt="Joanna on the balcony at William Vale" />
      </motion.div>
      <motion.div animate={{opacity: shouldShowActions ? 1 : 0}} initial={{pacity: 0}}>
        <img src={jg_bw2} alt="Joanna & Gabe on a side walk in Williamsburg" />
      </motion.div>
      <motion.div animate={{opacity: shouldShowActions ? 1 : 0}} initial={{pacity: 0}}>
        <img src={jg_color} alt="Joanna & Gabe on top of William Vale" />
      </motion.div>
    </div>
  );
};

export default Photos;
