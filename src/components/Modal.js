import React from "react";
import styled from "styled-components";

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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackdropImg = styled.img`
  display: block;
  max-width: 60%;
  max-height: 80%;
  margin: 60px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  border: 3px solid white;
`;
