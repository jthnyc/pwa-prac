import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {g_bw, j_color} from "../img/index";

// can check for if scrollup or down to change photo?
const Images1 = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const logging = () => {
    if (window.pageYOffset > scrollY) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
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

  return <ImageContainer scrollUp={scrollUp}></ImageContainer>;
};

export default Images1;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${(prop) => (prop.scrollUp ? g_bw : j_color)}) no-repeat
    center;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  background-position-y: 18%;
  background-position-x: 40%;
`;
