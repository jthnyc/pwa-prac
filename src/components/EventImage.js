import React from "react";
import styled from "styled-components";
import jg_rings from "../img/jg_rings.JPG";

export default function Event() {
  return (
    <EventContainer>
      <EventImage></EventImage>
    </EventContainer>
  );
}

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
