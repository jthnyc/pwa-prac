import React from "react";
import styled from "styled-components";
// import CountDown from "./CountDown";

export default function Event() {
  // const renderer = ({hours, minutes, seconds, completed}) => {
  //   if (completed) {
  //     return (
  //       <div>
  //         <span>Time to Party!</span>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <span>
  //         {hours}:{minutes}:{seconds}
  //       </span>
  //     );
  //   }
  // };

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
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.436102077581!2d-73.9623258!3d40.7101123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf7e3bbe5f895f55!2sWeylin!5e0!3m2!1sen!2sus!4v1610132730949!5m2!1sen!2sus"
            width="600"
            height="450"
            frameborder="0"
            style={{border: 0}}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title="weylin"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1lKBvDOjExl5vQrCG1wTXpp-40WDWQLNv&hl=en"
            width="640"
            height="480"
            title="travel"
          ></iframe>
        </EventMap>
      </EventDetails>
      {/* <EventImage>
        <img
          src="https://images.unsplash.com/photo-1535185384036-28bbc8035f28?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80"
          alt="wedding"
        />
      </EventImage> */}
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

// const EventImage = styled.div`
//   display: flex;
// `;

const EventDetails = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  // grid-gap: 1rem;
`;

const EventDate = styled.div`
  color: charcoal;
  margin-bottom: 2em;
  //   border: 1px dotted white;
`;

const EventLocation = styled.div`
  // border: 2px solid black;
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
  // background-color: gold;
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  border-radius: 20px;
`;
