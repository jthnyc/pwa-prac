import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";
import {weddingBackground, branchBottom, branchTop} from "../img/index";
import {AddToCalBtn} from "../components/index";

const Wedding = () => {
  const {t} = useTranslation();
  const mapStyles = {
    border: 0,
  };

  return (
    <WeddingContainer>
      <h2>{t("wedding.t")}</h2>
      <p>{t("wedding.subt")}</p>
      <InfoContainer>
        <WeddingTextContainer>
          <WeddingDate>November 20, 2021</WeddingDate>
          <WeddingDate>5:30 PM EST</WeddingDate>
          <EventTime>175 Broadway, Brooklyn, NY 11211</EventTime>
          <br />
          <AddToCalBtn />
          {/* <ul>
            <li>
              <EventTime>Ceremony -> 5:30 PM EST</EventTime>
            </li>
            <li>
              <EventTime>Cocktail Hour -> 6:00 PM EST</EventTime>
            </li>
            <li>
              <EventTime>Reception -> 7:00 PM EST</EventTime>
            </li>
          </ul> */}
        </WeddingTextContainer>
        <br />
        <div>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.436102077581!2d-73.9623258!3d40.7101123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf7e3bbe5f895f55!2sWeylin!5e0!3m2!1sen!2sus!4v1623620077841!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={mapStyles}
              allowFullScreen=""
              loading="lazy"
              title="The Weylin"
            ></iframe>
          </MapContainer>
          <EventTextContainer>
            <WeddingDate>Schedule</WeddingDate>
            <ul>
              <li>
                <EventTime>Ceremony -> 5:30 PM EST</EventTime>
              </li>
              <li>
                <EventTime>Cocktail Hour -> 6:00 PM EST</EventTime>
              </li>
              <li>
                <EventTime>Reception -> 7:00 PM EST</EventTime>
              </li>
            </ul>
          </EventTextContainer>
        </div>
      </InfoContainer>
    </WeddingContainer>
  );
};

export default Wedding;

const WeddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 0;
  margin-left: 8%;
  margin-right: 8%;

  @media ${device.laptop} {
    padding: 5rem 0;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 80vw;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const WeddingTextContainer = styled.div`
  // border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 2em;
  // padding: 3.125rem 3.125rem 0 3.125rem;
  background-image: url(${branchTop}), url(${branchBottom}), url(${weddingBackground});
  background-size: 30vh, 30vh, 98% 98%;
  background-position: right top -15px, left bottom -30px, center;
  background-repeat: no-repeat;
  min-height: 50rem;
  max-width: 21.875rem;
  text-align: center;

  @media ${device.mobileL} {
    background-size: 30vh, 30vh, 90% 90%;
    background-position: right top, left bottom, center;
    max-width: 37.5rem;
  }

  @media ${device.laptop} {
    flex-direction: column;
    min-width: 37.5rem;
    margin-top: 0;
    background-size: 30vh, 30vh, 95% 95%;
  }
`;

const WeddingDate = styled.h3`
  font-size: 1.5rem;

  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

const EventTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const EventTime = styled.h4`
  font-size: 1rem;

  @media ${device.tablet} {
    font-size: 1.3rem;
  }

  @media ${device.laptop} {
    font-size: 1.5rem;
  }

  @media ${device.laptopL} {
    font-size: 2rem;
  }
`;

const MapContainer = styled.div`
  width: 18.75rem;
  height: 15.625rem;

  @media ${device.mobileL} {
    width: 30rem;
    height: 24rem;
  }

  @media ${device.tablet} {
    width: 37.5rem;
    height: 28.125rem;
  }
`;
