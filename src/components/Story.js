import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const Story = () => {
  const {t} = useTranslation();
  return (
    <RightContainer>
      <StoryContainer id="story">
        <h2>{t("story.t")}</h2>
        <StoryText>
          <p>{t("story.l1")}</p>
          <p>{t("story.l2")}</p>
          <p>{t("story.l3")}</p>
          <p>{t("story.l4")}</p>
          <p>{t("story.l5")}</p>
        </StoryText>
      </StoryContainer>
    </RightContainer>
  );
};

export default Story;

const RightContainer = styled.div`
  width: 100%;
  height: 100vh;

  @media ${device.laptop} {
    width: 40%;
    height: 75vh;
  }
`;

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media ${device.laptopL} {
    padding: 3rem;
  }
`;

const StoryText = styled.div`
  // border: 1px solid green;
  margin-top: 2em;
  line-height: 2em;
`;
