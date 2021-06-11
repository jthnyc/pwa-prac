import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";
// import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

// const {REACT_APP_GOOGLE_MAP_API} = process.env;

const Recommendations = () => {
  const {t} = useTranslation();
  //   const containerStyle = {
  //     width: "800px",
  //     height: "600px",
  //   };

  //   const center = {
  //     lat: 40.7101,
  //     lng: -73.9623,
  //   };

  return (
    <RecommendationsContainer id="recommendations">
      <h2>{t("recommendations.t")}</h2>
      {/* <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_MAP_API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={{lat: 40.7101, lng: -73.9623}} />
        </GoogleMap>
      </LoadScript> */}
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1lKBvDOjExl5vQrCG1wTXpp-40WDWQLNv"
        width="640"
        height="480"
      ></iframe>
    </RecommendationsContainer>
  );
};

export default Recommendations;

const RecommendationsContainer = styled.div`
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
