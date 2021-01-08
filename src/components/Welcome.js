import React from "react";
import styled, {keyframes} from "styled-components";

const Welcome = () => {
  return (
    <Container>
      <HeroImage>
        <img
          src="https://lh3.google.com/u/0/d/1cS567nNYM_L6xV4xcfa2hi9L3xJq9oUh=w2858-h1936-iv1"
          width="1600"
          alt="placeholder"
        />
      </HeroImage>
      <TextContainer>
        <h1>Joanna & Gabriel</h1>
      </TextContainer>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  border: 1px solid pink;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 1rem;
  background: white;
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
  // width: 1080px;
  // height: 800px;
`;

const TextContainer = styled.div`
  // border: 1px solid red;
  padding-right: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;
`;
