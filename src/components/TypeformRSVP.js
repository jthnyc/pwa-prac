import React from "react";
import i18n from "i18next";
import styled from "styled-components";
import {device} from "../device";
import {Widget} from "@typeform/embed-react";

const TypeformRSVP = () => {
  return (
    <TypeformContainer>
      {i18n.language === "en" ? (
        <Widget id="RBAPAwmO" style={{width: "100%", height: "100%"}} />
      ) : (
        <Widget id="jsVnrVmd" style={{width: "100%", height: "100%"}} />
      )}
    </TypeformContainer>
  );
};

export default TypeformRSVP;

const TypeformContainer = styled.div`
  height: 70vh;

  @media ${device.laptop} {
    height: 100vh;
  }
`;
