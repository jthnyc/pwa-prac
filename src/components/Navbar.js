import React from "react";
import styled, {keyframes} from "styled-components";
import {Navbar, Nav} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const Nav2 = () => {
  const {t, i18n} = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <StyledNavbar inverse="true" collapseOnSelect fixed="top" bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <StyledNav className="mr-auto">
          <StyledNavLink href="#story">{t("story.t")}</StyledNavLink>
          <StyledNavLink href="#wedding">{t("wedding.t")}</StyledNavLink>
          <StyledNavLink href="#registry">{t("registry.t")}</StyledNavLink>
          <StyledNavLink href="#lodging">{t("lodging.t")}</StyledNavLink>
          <StyledNavLink href="#faq">{t("faq.t")}</StyledNavLink>
          <StyledNavLink href="#covid">{t("covid.nav")}</StyledNavLink>
          <StyledNavLink href="#album">{t("album.t")}</StyledNavLink>
        </StyledNav>
        <LangContainer>
          {i18n.language !== "en" ? (
            <LangButton type="button" onClick={() => handleClick("en")}>
              <span>En</span>
            </LangButton>
          ) : (
            <LangButton type="button" onClick={() => handleClick("zh")}>
              <span>繁</span>
            </LangButton>
          )}
        </LangContainer>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Nav2;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOut = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

// may incorporate below styles to update navbar look
// trying to use mix-blend-mode to account for color difference in scroll
const StyledNavbar = styled(Navbar)`
  // border: 2px solid red;
  // padding-top: 0.625rem;
  // background: transparent;
  // mix-blend-mode: difference;
`;

const StyledNav = styled(Nav)`
  width: 50%;
  margin: 0 20px;
  // border: 1px solid red;

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.laptop} {
    margin: 0;
    width: 80%;
  }
`;

const StyledNavLink = styled(Nav.Link)`
  font-weight: bold;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  margin: 0.5rem 0;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  @media ${device.laptop} {
    font-size: 0.9rem;
  }

  @media ${device.laptopL} {
    font-size: 1.2rem;
  }
`;

// need to update visibility here per device
const LangContainer = styled.div`
  width: 3.125rem;
  display: flex;
  align-items: center;
`;

const LangButton = styled.button`
  background: transparent;
  border: none;
  color: #black;
  text-shadow: 0.05rem 0.05rem #888888;
  width: 2.0625rem;
  height: 2.0625rem;
  font-size: 1.25rem;
  display: flex;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;
  margin: 0.5rem 1.25rem;
`;
