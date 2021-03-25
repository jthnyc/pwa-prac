import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const Wedding = () => {
  const {t} = useTranslation();
  return (
    <LeftContainer>
      <WeddingContainer>
        <h2>Wedding</h2>
        <WeddingText>
          <EventDate>
            <EventLocation>
              <h5>
                <a href="https://weylin.com/" target="_blank" rel="noopener noreferrer">
                  Weylin
                </a>
              </h5>
              <h5>Saturday, November 20, 2021</h5>
              <h6>175 Broadway, Brooklyn, NY 11211</h6>
              {/* <CountDown /> */}
            </EventLocation>

            {/* <Button>{"R.S.V.P."}</Button> */}
          </EventDate>
          <EventMap>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1lKBvDOjExl5vQrCG1wTXpp-40WDWQLNv&hl=en"
              width="640"
              height="480"
              title="travel"
            ></iframe>
          </EventMap>
          <span></span>
        </WeddingText>
      </WeddingContainer>
    </LeftContainer>
  );
};

export default Wedding;

const LeftContainer = styled.div`
  // visibility: hidden;
  // height: 100vh;

  @media ${device.laptop} {
    width: 60%;
  }
  @media ${device.laptopL} {
    width: 60%;
  }
  @media ${device.desktop} {
    width: 60%;
  }
`;

const WeddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  // border: 1px solid gold;
`;

const WeddingText = styled.div`
  // border: 1px solid green;
  margin-top: 2em;
  line-height: 2em;
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
  justify-content: center;
  // border: 1px solid blue;
`;

// const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: 20%;
//   align-items: center;
//   font-size: 2em;
//   border-radius: 20px;
// `;
