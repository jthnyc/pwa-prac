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

  @media ${device.mobileS} {
    max-width: 321px;
  }
  @media ${device.mobileM} {
    max-width: 376px;
  }
  @media ${device.mobileL} {
    max-width: 426px;
  }
  @media ${device.tablet} {
    max-width: 769px;
  }
  @media ${device.laptop} {
    max-width: 1024px;
  }
  @media ${device.laptopL} {
    max-width: 1441px;
  }
  @media ${device.laptop} {
    max-width: 2560px;
  }
`;

const HeroContainer = styled.div`
  position: relative;
  background: transparent url(${heroImg}) no-repeat center;
  background-size: cover;
  height: 95vh;
  display: grid;
  grid-template-columns: auto [col-start] 36.625rem;
  grid-template-rows: auto [top-start] 30%;

  @media ${device.mobileS} {
    grid-template-columns: auto [col-start] 18rem;
    grid-template-rows: auto [top-start] 20%;
  }
  @media ${device.mobileM} {
    grid-template-columns: auto [col-start] 21rem;
    grid-template-rows: auto [top-start] 23%;
  }
  @media ${device.mobileL} {
    grid-template-columns: auto [col-start] 23rem;
    grid-template-rows: auto [top-start] 25%;
  }
  @media ${device.tablet} {
    grid-template-columns: auto [col-start] 25rem;
    grid-template-rows: auto [top-start] 28%;
  }
  @media ${device.laptop} {
    grid-template-columns: auto [col-start] 28rem;
    grid-template-rows: auto [top-start] 28%;
  }
  @media ${device.laptopL} {
    grid-template-columns: auto [col-start] 32rem;
    grid-template-rows: auto [top-start] 29%;
  }
  @media ${device.desktop} {
    grid-template-columns: auto [col-start] 35rem;
    grid-template-rows: auto [top-start] 30%;
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
  font-size: 3em;
  color: white;
  text-shadow: 2px 2px #888888;
  text-align: right;
  width: 80%;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;

  @media ${device.mobileS} {
    font-size: 1.5em;
    width: 70%;
  }
  @media ${device.mobileM} {
    font-size: 2em;
    width: 75%;
  }
  @media ${device.mobileL} {
    font-size: 2.3em;
    width: 78%;
  }
  @media ${device.tablet} {
    font-size: 2.5em;
    width: 80%;
  }
  @media ${device.laptop} {
    font-size: 3em;
    width: 80%;
  }
  @media ${device.laptopL} {
    font-size: 3em;
    width: 80%;
  }
  @media ${device.desktop} {
    font-size: 3em;
    width: 80%;
  }
`;
