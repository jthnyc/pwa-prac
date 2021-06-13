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
          <h3>The Weylin</h3>
          <h5>175 Broadway, Brooklyn, NY 11211</h5>
          <br />
          <h3>November 21, 2021</h3>
          <h5>
            Ceremony begins at 5 PM EST; <br />
            Cocktail hour and reception follows at the same location
          </h5>
        </WeddingTextContainer>
        <br />
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.436102077581!2d-73.9623258!3d40.7101123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf7e3bbe5f895f55!2sWeylin!5e0!3m2!1sen!2sus!4v1623620077841!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={mapStyles}
            allowfullscreen=""
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
  // border: 1px solid green;

  @media ${device.laptop} {
    padding: 5rem 0;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const WeddingTextContainer = styled.div`
  margin-top: 2em;
  line-height: 2em;
  @media ${device.laptop} {
    margin-top: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const MapContainer = styled.div`
  width: 300px;
  height: 250px;
  @media ${device.mobileL} {
    width: 600px;
    height: 450px;
  }
`;
