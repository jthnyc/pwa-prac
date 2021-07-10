import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const Lodging = () => {
  const {t} = useTranslation();
  return (
    <LodgingContainer id="lodging">
      <h2>{t("lodging.t")}</h2>
      <p>{t("lodging.subt")}</p>
    </LodgingContainer>
  );
};

export default Lodging;

const LodgingContainer = styled.div`
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
