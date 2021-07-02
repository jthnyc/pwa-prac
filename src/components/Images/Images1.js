import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {g_bw} from "../../img/index";
import {device} from "../../device";

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
  background: transparent url(${g_bw}) no-repeat center;
  background-size: cover;
  height: 900px;
  background-attachment: initial;
  background-position-y: 18%;
  background-position-x: 45%;

  @media ${device.tablet} {
    background-attachment: fixed;
  }
`;
