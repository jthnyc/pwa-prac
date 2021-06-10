import React from "react";
import styled from "styled-components";
import {jg_bw, jg_bw2} from "../img/index";

// can check for if scrollup or down to change photo?
const Images2 = () => {
  return <ImageContainer></ImageContainer>;
};

export default Images2;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${jg_bw}) no-repeat center;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  background-position-y: 35%;
  background-position-x: 90%;
`;
