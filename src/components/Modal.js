import React from "react";
import styled from "styled-components";
import {device} from "../device";

const Modal = ({selectedImg, setSelectedImg}) => {
  const handleClick = (e) => {
    // need a check to not close when clicking on image
    setSelectedImg(null);
  };

  return (
    <Backdrop onClick={handleClick}>
      <BackdropImg src={selectedImg} alt="enlarged pic" />
    </Backdrop>
  );
};

export default Modal;

const Backdrop = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;

  @media ${device.tablet} {
    top: 25vh;
    left: 0;
  }
`;

const BackdropImg = styled.img`
  display: block;
  max-width: 90%;
  margin: 0.3125rem 0.3125rem;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  border: 3px solid white;

  @media ${device.tablet} {
    max-width: 35%;
    margin: 10px auto;
  }
`;
