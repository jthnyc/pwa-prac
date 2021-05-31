import React from "react";
import styled, {keyframes} from "styled-components";
import {Navbar, Nav} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Nav2 = () => {
  const {t, i18n} = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#story">{t("story.t")}</Nav.Link>
          <Nav.Link href="#faq">{t("faq.t")}</Nav.Link>
          <Nav.Link href="#email">{t("email.t")}</Nav.Link>
          <Nav.Link href="#covid">{t("covid.nav")}</Nav.Link>
        </Nav>
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
    </Navbar>
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
`;
