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
        <FirstLine>{t("story.l1")}</FirstLine>
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
  padding: 8rem 0;
  margin-left: 8%;
  margin-right: 8%;

  @media ${device.laptop} {
    padding: 5rem 0;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const StoryText = styled.div`
  margin-top: 2em;
  line-height: 2em;
`;

const FirstLine = styled.p`
  &::first-letter {
    font-size: 2em;
  }
`;
