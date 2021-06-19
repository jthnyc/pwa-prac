import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";

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
          <br />
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
        </WeddingTextContainer>
        <br />
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

// ask Nish about media query here
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
  line-height: 2em;
  padding-top: 0;
  border: 1px solid green;

  @media ${device.laptop} {
    width: 800px;
    margin-top: 0;
    padding: 3.125rem 3.125rem 0 3.125rem;
  }
`;

const WeddingDate = styled.h3`
  font-size: 1.5rem;

  @media ${device.laptop} {
    font-size: 2rem;
  }
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
    width: 37.5rem;
    height: 28.125rem;
  }
`;
