import React from "react";
import styled, {keyframes} from "styled-components";
import heroImg from "../img/heroImg.jpg";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const Welcome = () => {
  const {t} = useTranslation();
  return (
    <Header>
      <HeroContainer>
        <HeroInner>
          <DateText>{t("names.t")}</DateText>
          <DateText>{t("date.t")}</DateText>
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
  height: 100vh;
  background-position-x: 16.667%;
  display: grid;
  grid-template-columns: auto [col-start] 12rem auto;
  grid-template-rows: auto [top-start] 15%;

  @media ${device.tablet} {
    grid-template-columns: auto [col-start] 36.625rem;
    grid-template-rows: auto [top-start] 20%;
  }
`;

const HeroInner = styled.div`
  grid-column-start: col-start;
  grid-row-start: top-start;
  display: flex;
  flex-direction: column;
`;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOut = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const DateText = styled.span`
  font-size: 1.5em;
  color: white;
  text-align: center;
  text-shadow: 2px 2px #888888;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;

  @media ${device.tablet} {
    width: 90%;
    font-size: 3em;
    text-align: right;
  }
`;
