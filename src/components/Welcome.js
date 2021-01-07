import React from "react";
import styled, {keyframes} from "styled-components";
import Countdown from "react-countdown";

const Welcome = () => {
  const renderer = ({hours, minutes, seconds, completed}) => {
    if (completed) {
      return (
        <div>
          <span>Time to go!</span>
        </div>
      );
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <Container>
      <HeroImage>
        <img src="http://placekitten.com/600/700" alt="placeholder" />
      </HeroImage>
      <DateInfo>
        <Details>
          <h3>New York, NY</h3>
          <h5>Saturday, November 20, 2021</h5>
          <Countdown date={Date.now() + 10000} renderer={renderer} />
        </Details>
      </DateInfo>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 1rem;
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
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;
  width: 200px;
`;

const DateInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //   border: 1px solid yellow;
`;

const Details = styled.div`
  color: white;
  //   border: 1px dotted white;
`;
