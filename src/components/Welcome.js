import React from "react";
import styled, {keyframes} from "styled-components";
import heroImg from "../img/heroImg.jpg";

const Welcome = () => {
  return (
    <header>
      <HeroContainer>
        <HeroInner>
          <TextContainer>November 20, 2021</TextContainer>
        </HeroInner>
      </HeroContainer>
    </header>
  );
};

export default Welcome;

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: transparent url(${heroImg}) no-repeat center;
  background-size: cover;

  @media (min-width: 767px) {
    height: 98vh;
  }

  @media (min-width: 1023px) {
    height: 95vh;
  }
`;

const HeroInner = styled.div`
  // border: 1px solid red;
  text-align: center;
  position: absolute;
  width: 25%;
  height: 3rem;
  top: 35rem;
  left: 70rem;
`;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOut = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const TextContainer = styled.h1`
  color: white;
  text-shadow: 2px 2px #888888;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;
`;
