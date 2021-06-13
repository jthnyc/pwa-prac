import React from "react";
import styled from "styled-components";
import {j_color} from "../../img/index";

const Images2 = () => {
  return <ImageContainer></ImageContainer>;
};

export default Images2;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${j_color}) no-repeat center;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  background-position-y: 35%;
  background-position-x: 90%;
`;
