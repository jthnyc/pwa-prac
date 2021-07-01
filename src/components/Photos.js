import React, {useEffect, useState} from "react";
import {g_bw, j_color, jg_bw, jg_bw2, jg_color, jg_rings} from "../img/index";

const Photos = () => {
  const [scrollY, setScrollY] = useState(0);

  const logging = () => {
    setScrollY(window.pageYOffset);
    console.log(scrollY);
  };

  useEffect(() => {
    const onScroll = (e) => {
      window.addEventListener("scroll", logging);
    };
    onScroll();
    return () => window.removeEventListener("scroll", logging);
  });

  return (
    <div>
      {scrollY < 1200 ? (
        <img src={jg_bw} alt="Joanna & Gabe glancing back near Bushwick Inlet Park" />
      ) : (
        <img src={jg_rings} alt="Close up shot of wedding bands" />
      )}
      {scrollY < 2500 ? (
        <img src={g_bw} alt="Gabe looking afar on the balcony at William Vale" />
      ) : (
        <img src={j_color} alt="Joanna on the balcony at William Vale" />
      )}
      {scrollY < 3500 ? (
        <img src={jg_bw2} alt="Joanna & Gabe on a side walk in Williamsburg" />
      ) : (
        <img src={jg_color} alt="Joanna & Gabe on top of William Vale" />
      )}
    </div>
  );
};

export default Photos;
