import React from "react";
import styled from "styled-components";
import {jg_rings} from "../img/index";
import {device} from "../device";

const EventImg = () => {
  return (
    <RightContainer>
      <EventContainer>
        <EventImage></EventImage>
      </EventContainer>
    </RightContainer>
  );
};

export default EventImg;

const RightContainer = styled.div`
  width: 100%;
  // height: 100vh;

  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.laptop} {
    width: 40%;
  }
  @media ${device.laptopL} {
    width: 40%;
  }
  @media ${device.desktop} {
    width: 40%;
  }
`;

const EventContainer = styled.div`
  // border: 2px solid green;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EventImage = styled.div`
  background: transparent url(${jg_rings}) no-repeat center;
  background-size: contain;
  height: 750px;
  width: auto;
`;
