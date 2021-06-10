import React from "react";
import styled from "styled-components";
import {jg_color, jg_rings} from "../img/index";

// can check for if scrollup or down to change photo?
const Images3 = () => {
  return <ImageContainer></ImageContainer>;
};

export default Images3;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${jg_color}) no-repeat center;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  background-position-y: 40%;
`;
