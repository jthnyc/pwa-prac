import React from "react";
import styled, {keyframes} from "styled-components";

const Welcome = () => {
  return (
    <Container>
      <HeroImage>
        <img src="http://placekitten.com/600/700" alt="placeholder" />
      </HeroImage>
      <DateInfo>Nov 20, 2021</DateInfo>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: maroon;
`;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOut = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const HeroImage = styled.div`
  display: inline-block;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 5s linear;
  transition: visibility 5s linear;
  width: 200px;
`;

const DateInfo = styled.div`
  display: flex;

  border: 1px solid yellow;
`;
