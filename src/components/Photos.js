import React from "react";
import {g_bw, j_color, jg_bw, jg_bw2, jg_color, jg_rings} from "../img/index";

const Photos = () => {
  return (
    <div>
      <img src={jg_bw} alt="Joanna & Gabe glancing back near Bushwick Inlet Park" />
      <img src={jg_rings} alt="Close up shot of wedding bands" />
      <img src={g_bw} alt="Gabe looking afar on the balcony at William Vale" />
      <img src={j_color} alt="Joanna on the balcony at William Vale" />
      <img src={jg_bw2} alt="Joanna & Gabe on a side walk in Williamsburg" />
      <img src={jg_color} alt="Joanna & Gabe on top of William Vale" />
    </div>
  );
};

export default Photos;
