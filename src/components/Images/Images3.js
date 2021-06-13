import React from "react";
import styled from "styled-components";
import {jg_bw} from "../../img/index";

const Images3 = () => {
  return <ImageContainer></ImageContainer>;
};

export default Images3;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${jg_bw}) no-repeat center;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  background-position-y: 35%;
  background-position-x: 90%;
`;
