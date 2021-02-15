import React from "react";
import styled, {keyframes} from "styled-components";
// import heroImg from "../img/heroImg.jpg";

const Welcome = () => {
  return (
    <header>
      <HeroContainer>
        <HeroInner>
          <TextContainer>Joanna & Gabriel</TextContainer>
        </HeroInner>
      </HeroContainer>
    </header>
  );
};

export default Welcome;

const HeroContainer = styled.div`
  height: 90vh;
  width: 100vw;
  background: transparent
    url("https://lh3.google.com/u/0/d/1cS567nNYM_L6xV4xcfa2hi9L3xJq9oUh=w2858-h1936-iv1")
    no-repeat center;
  background-size: cover;
  position: relative;
`;

const HeroInner = styled.div`
  text-align: right;
  position: absolute;
  width: 100%;
  height: auto;
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
  // border: 1px solid red;
  // padding-right: 2rem;
  position: absolute;
  top: 25rem;
  left: 55rem;
  // position: absolute;
  // top: 50%;
  // left: 70%;
  color: white;
  text-shadow: 2px 2px #888888;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;
`;
