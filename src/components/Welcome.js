import React from "react";
import styled, {keyframes} from "styled-components";
import heroImg from "../img/heroImg.jpg";

const Welcome = () => {
  return (
    <Header>
      <HeroContainer>
        <HeroInner>
          <DateText>November 20, 2021</DateText>
        </HeroInner>
      </HeroContainer>
    </Header>
  );
};

export default Welcome;

const Header = styled.header`
  position: relative;
  top: 0px;
  width: 100%;
  height: auto;
  left: 0;
`;

const HeroContainer = styled.div`
  position: relative;
  background: transparent url(${heroImg}) no-repeat center;
  background-size: cover;
  height: 95vh;
  display: grid;
  border: 5px solid green;
  // grid-template-columns: [left-start] auto [right-start] 50%;
  // grid-template-rows: [top-start] auto [bottom-start] 20%;
  grid-template-columns: repeat(12, 9%);
  grid-template-rows: [top-start] auto [bottom-start] 20%;
`;

const HeroInner = styled.div`
  // border: 1px solid red;
  grid-column: 9 / span 3;
  grid-row-start: bottom-start;
`;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOut = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const DateText = styled.h1`
  color: white;
  text-shadow: 2px 2px #888888;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;
`;
