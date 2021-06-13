import React from "react";
import styled from "styled-components";
import {jg_rings} from "../../img/index";

const Images6 = () => {
  return <ImageContainer></ImageContainer>;
};

export default Images6;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${jg_rings}) no-repeat center;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  background-position-y: 50%;
`;
