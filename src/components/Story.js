import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const Story = () => {
  const {t} = useTranslation();
  return (
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
  );
};

export default Story;

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media ${device.laptop} {
    // align-items: center;
    padding: 3rem;
    // margin-left: 5%;
    // margin-right: 5%;
    margin: 5%;
  }
`;

const StoryText = styled.div`
  margin-top: 2em;
  line-height: 2em;
`;
