import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const Registry = () => {
  const {t} = useTranslation();
  return (
    <RegistryContainer id="registry">
      <h2>{t("registry.t")}</h2>
      <RegistryText>
        <FirstLine>{t("registry.l1")}</FirstLine>
        <p>
          <a
            href="https://www.honeyfund.com/wedding/GabrielandJoanna2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joanna & Gabe HoneyFund
          </a>
        </p>
      </RegistryText>
    </RegistryContainer>
  );
};

export default Registry;

const RegistryContainer = styled.div`
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

const RegistryText = styled.div`
  margin-top: 2em;
  line-height: 2em;
`;

const FirstLine = styled.p`
  &::first-letter {
    font-size: 2em;
  }
`;
