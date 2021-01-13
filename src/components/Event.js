import React from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import {Button} from "react-bootstrap";

export default function Event() {
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
    <EventContainer>
      <EventDetails>
        <EventDate>
          <h1>The Weylin</h1>
          <h5>Saturday, November 20, 2021</h5>
          <Countdown date={"2021-11-20T17:00:00"} renderer={renderer} />
        </EventDate>
        <Button variant="outline-secondary" size="lg">
          {"R.S.V.P."}
        </Button>
        <EventMap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.436102077581!2d-73.9623258!3d40.7101123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf7e3bbe5f895f55!2sWeylin!5e0!3m2!1sen!2sus!4v1610132730949!5m2!1sen!2sus"
            width="600"
            height="450"
            frameborder="0"
            style={{border: 0}}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title="weylin"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1lKBvDOjExl5vQrCG1wTXpp-40WDWQLNv&hl=en"
            width="640"
            height="480"
            title="travel"
          ></iframe>
        </EventMap>
      </EventDetails>
      <EventImage>
        <img
          src="https://images.unsplash.com/photo-1535185384036-28bbc8035f28?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80"
          alt="wedding"
        />
      </EventImage>
    </EventContainer>
  );
}

const EventContainer = styled.div`
  border: 2px solid green;
  display: flex;
  justify-content: space-between;
`;

const EventImage = styled.div`
  display: flex;
`;

const EventDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 1rem;
  padding-top: 5rem;
  padding-left: 5rem;
  padding-bottom: 5rem;
`;

const EventDate = styled.div`
  color: charcoal;
  //   border: 1px dotted white;
`;

const EventMap = styled.div`
  display: flex;
`;
