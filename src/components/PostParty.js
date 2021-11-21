import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const PostParty = () => {
  const {t} = useTranslation();
  return (
    <StoryContainer id="story">
      <h2>{t("postparty.t")}</h2>
      <StoryText>
        <FirstLine>
          {t("postparty.l1")}{" "}
          <a
            href="https://drive.google.com/drive/folders/138xE9nfCZWyuJrng39js8pMNC2uL5Inm?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Drive folder
          </a>
          {t("postparty.l2")}
          <b>{t("postparty.l3")}</b>
          {t("postparty.l4")}
          {t("postparty.l5")}
        </FirstLine>
      </StoryText>
    </StoryContainer>
  );
};

export default PostParty;

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
