import React from "react";
import styled from "styled-components";
import {jg_color} from "../../img/index";
import {device} from "../../device";

const Images4 = () => {
  return <ImageContainer></ImageContainer>;
};

export default Images4;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${jg_color}) no-repeat center;
  background-size: cover;
  height: 900px;
  background-attachment: initial;
  background-position-y: 40%;

  @media ${device.tablet} {
    background-attachment: fixed;
  }
`;
