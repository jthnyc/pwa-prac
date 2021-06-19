import React from "react";
import styled from "styled-components";
import {jg_bw2} from "../../img/index";
import {device} from "../../device";

const Images5 = () => {
  return <ImageContainer></ImageContainer>;
};

export default Images5;

const ImageContainer = styled.div`
  position: relative;
  background: transparent url(${jg_bw2}) no-repeat center;
  background-size: cover;
  height: 930px;
  background-attachment: initial;
  background-position-y: 25%;
  background-position-x: 80%;

  @media ${device.tablet} {
    background-attachment: fixed;
  }
`;
