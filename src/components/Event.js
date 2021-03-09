import React from "react";
import styled from "styled-components";

export default function Event() {
  return (
    <EventContainer>
      <h2>Wedding Details</h2>
      <EventDetails>
        <EventDate>
          <EventLocation>
            <h5>Saturday, November 20, 2021</h5>
            <h5>The Weylin</h5>
            <h6>175 Broadway, Brooklyn, NY 11211</h6>
            {/* <CountDown /> */}
          </EventLocation>

          <Button>{"R.S.V.P."}</Button>
        </EventDate>
        <EventMap>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1lKBvDOjExl5vQrCG1wTXpp-40WDWQLNv&hl=en"
            width="640"
            height="480"
            title="travel"
          ></iframe>
        </EventMap>
      </EventDetails>
    </EventContainer>
  );
}

const EventContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EventDetails = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  // grid-gap: 1rem;
`;

const EventDate = styled.div`
  color: charcoal;
  margin-bottom: 2em;
`;

const EventLocation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 1.5rem;
  margin-bottom: 2em;
`;

const EventMap = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  border-radius: 20px;
`;
