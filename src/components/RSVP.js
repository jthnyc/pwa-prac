import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {FindInvite} from "./index";
import {device} from "../device";

const RSVP = () => {
  const {t} = useTranslation();
  return (
    <RSVPContainer id="rsvp">
      <h2>{t("rsvp.t")}</h2>
      <FindInvite />
    </RSVPContainer>
  );
};

export default RSVP;

const RSVPContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 8rem 0;
  margin-left: 8%;
  margin-right: 8%;

  @media ${device.laptop} {
    padding: 5rem 0;
    margin-left: 10%;
    margin-right: 10%;
  }
`;
