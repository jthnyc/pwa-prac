import React from "react";
import styled from "styled-components";
import {jg_bw2} from "../img/index";

const Images4 = () => {
  return <ImageContainer></ImageContainer>;
};

export default Images4;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${jg_bw2}) no-repeat center;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  background-position-y: 25%;
`;
