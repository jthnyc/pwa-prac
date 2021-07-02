import React from "react";
import styled from "styled-components";
import {jg_rings} from "../../img/index";
import {device} from "../../device";

const Images6 = () => {
  return <ImageContainer></ImageContainer>;
};

export default Images6;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${jg_rings}) no-repeat center;
  background-size: cover;
  height: 900px;
  background-attachment: initial;
  background-position-y: 50%;
  background-position-x: 55%;

  @media ${device.tablet} {
    background-attachment: fixed;
  }
`;
