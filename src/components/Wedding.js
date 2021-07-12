import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";
import {weddingBackground, branchBottom, branchTop} from "../img/index";

const Wedding = () => {
  const {t} = useTranslation();
  const mapStyles = {
    border: 0,
  };

  return (
    <WeddingContainer id="wedding">
      <h2>{t("wedding.t")}</h2>
      <InfoContainer>
        <WeddingTextContainer>
          <WeddingDate>Weylin</WeddingDate>
          <WeddingDate>{t("wedding.date")}</WeddingDate>
          <WeddingDate>{t("wedding.time")}</WeddingDate>
          <EventTime>{t("wedding.address")}</EventTime>
        </WeddingTextContainer>
        <br />
        <WeddingDetailContainer>
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
            <WeddingDate>{t("wedding.schedule")}</WeddingDate>
            <p>{t("wedding.subt")}</p>
            <EventList>
              <EventItem>
                <Event>{t("wedding.ceremony")}</Event>
                <Time>{t("wedding.ceremonyTime")}</Time>
              </EventItem>
              <EventItem>
                <Event>{t("wedding.cocktail")}</Event>
                <Time>{t("wedding.cocktailTime")}</Time>
              </EventItem>
              <EventItem>
                <Event>{t("wedding.reception")}</Event>
                <Time>{t("wedding.receptionTime")}</Time>
              </EventItem>
            </EventList>
          </EventTextContainer>
        </WeddingDetailContainer>
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
  flex-direction: column;
  width: 80vw;

  @media ${device.laptopL} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const WeddingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 2em;
  background-image: url(${branchTop}), url(${branchBottom}), url(${weddingBackground});
  background-size: 30vh, 30vh, 98% 98%;
  background-position: right -5px top -25px, left bottom -30px, center;
  background-repeat: no-repeat;
  min-height: 30rem;
  min-width: 10rem;
  text-align: center;

  @media ${device.mobileM} {
    min-height: 40rem;
    margin-left: 0;
    margin-right: 0;
    background-position: right -20px top -30px, left -10px bottom -50px, center;
  }

  @media ${device.mobileL} {
    background-position: right -20px top -10px, left bottom -30px, center;
  }

  @media ${device.tablet} {
    margin-left: 5.125rem;
    margin-right: 5.125rem;
    background-position: right -10px top -10px, left bottom -30px, center;
    min-height: 50rem;
  }

  @media ${device.laptop} {
    background-size: 30vh, 30vh, 90% 90%;
    background-position: right 10px top 40px, left 50px bottom 20px, center;
    min-height: 60rem;
    margin-left: 10.25rem;
    margin-right: 10.25rem;
  }

  @media ${device.laptopL} {
    flex-direction: column;
    min-width: 37.5rem;
    margin-top: 0;
    background-size: 30vh, 30vh, 95% 95%;
    background-position: right top 30px, left bottom 15px, center;

    margin-left: 0;
    margin-right: 0;
  }
`;

const WeddingDetailContainer = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    margin-left: 3.125rem;
    margin-right: 3.125rem;
  }

  @media ${device.laptopL} {
    margin-left: 0;
    margin-right: 0;
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
  min-width: 18.75rem;

  @media ${device.mobileM} {
    min-width: 20rem;
  }

  @media ${device.mobileL} {
    min-width: 25.75rem;
  }

  @media ${device.tablet} {
    min-width: 35.25rem;
  }

  @media ${device.laptop} {
    min-width: 50rem;
  }

  @media ${device.laptopL} {
    min-width: 35.75rem;
  }

  @media ${device.desktop} {
    min-width: 50.25rem;
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

const EventList = styled.ul`
  width: 100%;
  margin-top: 1.25rem;
`;

const EventItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media ${device.tablet} {
    border-bottom: 3px solid black;
    // border-width: 5px;
    // border-image-slice: 1;
    // border-image-source: linear-gradient(45deg #ebf8e1, #7d745e);
  }
`;

const Event = styled.h4`
  font-size: 1.3rem;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.laptop} {
    font-size: 1.675rem;
  }

  @media ${device.laptopL} {
    font-size: 1.8rem;
  }
`;

const Time = styled.span`
  font-size: 1.3rem;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.laptop} {
    font-size: 1.675rem;
  }

  @media ${device.laptopL} {
    font-size: 1.8rem;
  }
`;

const MapContainer = styled.div`
  width: 18.75rem;
  height: 15.625rem;

  @media ${device.mobileL} {
    width: 30.75rem;
    height: 22.25rem;
  }

  @media ${device.tablet} {
    width: 35rem;
    height: 20rem;
  }

  @media ${device.laptop} {
    width: 48rem;
  }

  @media ${device.laptopL} {
    width: 34.25rem;
    height: 28rem;
  }

  @media ${device.desktop} {
    width: 45rem;
  }
`;
