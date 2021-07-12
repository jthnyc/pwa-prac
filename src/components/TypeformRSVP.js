import React from "react";
import i18n from "i18next";
import styled from "styled-components";
import {device} from "../device";
import {Widget} from "@typeform/embed-react";

const TypeformRSVP = () => {
  return (
    <TypeformContainer>
      {i18n.language === "en" ? (
        <WidgetStyle id="RBAPAwmO" />
      ) : (
        <WidgetStyle id="nZjXys7A" />
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

const WidgetStyle = styled(Widget)`
  width: 100%;
  height: 130%;

  @media ${device.laptop} {
    height: 100%;
  }
`;
