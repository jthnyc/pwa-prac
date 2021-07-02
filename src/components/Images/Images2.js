import React from "react";
import styled from "styled-components";
import {j_color} from "../../img/index";
import {device} from "../../device";

const Images2 = () => {
  return <ImageContainer></ImageContainer>;
};

export default Images2;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${j_color}) no-repeat center;
  background-size: cover;
  height: 900px;
  background-attachment: initial;
  background-position-y: 33%;
  background-position-x: 35%;

  @media ${device.tablet} {
    background-attachment: fixed;
  }
`;
