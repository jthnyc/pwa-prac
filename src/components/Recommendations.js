import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const Recommendations = () => {
  const {t} = useTranslation();

  return (
    <RecommendationsContainer id="recommendations">
      <h2>{t("recommendations.t")}</h2>

      <RecMapContainer>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1lKBvDOjExl5vQrCG1wTXpp-40WDWQLNv"
          width="100%"
          height="100%"
          title="Recommendations"
        ></iframe>
      </RecMapContainer>
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

const RecMapContainer = styled.div`
  width: 640;
  height: 480;
  @media ${device.mobileL} {
    width: 940px;
    height: 780px;
  }
`;
