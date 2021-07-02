import React from "react";
import styled from "styled-components";
import {jg_bw} from "../../img/index";
import {device} from "../../device";

const Images3 = () => {
  return <ImageContainer></ImageContainer>;
};

export default Images3;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${jg_bw}) no-repeat center;
  background-size: cover;
  height: 900px;
  background-attachment: initial;
  background-position-y: 35%;
  background-position-x: 90%;

  @media ${device.tablet} {
    background-attachment: fixed;
  }
`;
