import React from "react";
import styled, {keyframes} from "styled-components";
import heroImg from "../img/heroImg.jpg";
import {useTranslation} from "react-i18next";

const Welcome = () => {
  const {t} = useTranslation();
  return (
    <Header>
      <HeroContainer>
        <HeroInner>
          <DateText>{t("names.t")}</DateText>
          <DateText>{t("date.t")}</DateText>
          {/* <DateText>Joanna & Gabriel</DateText>
          <DateText>November 20, 2021</DateText> */}
        </HeroInner>
      </HeroContainer>
    </Header>
  );
};

export default Welcome;

const Header = styled.header`
  position: relative;
  top: 0px;
  width: 100%;
  height: auto;
  left: 0;
`;

const HeroContainer = styled.div`
  position: relative;
  background: transparent url(${heroImg}) no-repeat center;
  background-size: cover;
  height: 95vh;
  display: grid;
  grid-template-columns: repeat(12, 9%);
  grid-template-rows: [top-start] auto [bottom-start] 20%;
`;

const HeroInner = styled.div`
  grid-column: 9 / span 3;
  grid-row-start: bottom-start;
`;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOut = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const DateText = styled.h1`
  font-size: 3em;
  color: white;
  text-shadow: 2px 2px #888888;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;
`;
