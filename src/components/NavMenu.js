import React from "react";
import styled, {keyframes} from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const NavMenu = () => {
  const {t, i18n} = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <Navbar>
      <MenuToggle>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <Navlist>
          <ListItem>
            <ListLink href="#story">{t("story.t")}</ListLink>
          </ListItem>
          <ListItem>
            <ListLink href="#faq">{t("faq.t")}</ListLink>
          </ListItem>
          <ListItem>
            <ListLink href="#covid">{t("covid.nav")}</ListLink>
          </ListItem>
        </Navlist>
      </MenuToggle>
      <LangToggle>
        {i18n.language !== "en" ? (
          <LangButton type="button" onClick={() => handleClick("en")}>
            <Lang>En</Lang>
          </LangButton>
        ) : (
          <LangButton type="button" onClick={() => handleClick("zh")}>
            <Lang>繁</Lang>
          </LangButton>
        )}
      </LangToggle>
    </Navbar>
  );
};

export default NavMenu;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOut = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const Navbar = styled.nav`
  background: transparent;
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0px;
  display: grid;
  grid-template-columns: [first-col] 3rem [second-col] 2.0625rem auto [third-col] 2.0625rem [fourth-col] 3rem;
  grid-template-rows: [first] 3rem [second-row] 1.625rem auto;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;
`;

const MenuToggle = styled.div`
  display: block;
  position: relative;
  top: 3.125rem;
  left: 3.125rem;

  z-index: 1;
  user-select: none;

  & input {
    display: block;
    width: 2.5rem;
    height: 2rem;
    position: absolute;
    top: -0.4375rem;
    left: -0.3125rem;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  & span {
    display: block;
    width: 2.0625rem;
    height: 0.25rem;
    margin-bottom: 0.3125rem;
    position: relative;

    background: #ffffff;
    border-radius: 0.1875rem;

    z-index: 1;

    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  & span:first-child {
    transform-origin: 0% 0%;
  }

  & span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  & input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  & input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  & input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  & input:checked ~ ul {
    transform: none;
  }
`;

const Navlist = styled.ul`
  position: absolute;
  width: 13rem;
  margin: -6.25rem 0 0 -3.125rem;
  padding: 3.125rem;
  padding-top: 7.8125rem;
  border-radius: 0 0 1.25rem 0;

  background: #ffffff;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  @media ${device.tablet} {
    width: 18.75rem;
  }
`;

const ListItem = styled.li`
  padding-bottom: 0.125rem;
`;

const ListLink = styled.a`
  color: #002366;
  font-size: 1em;
  text-shadow: 1px 1px #888888;

  @media ${device.tablet} {
    font-size: 1.5em;
  }
`;

const LangToggle = styled.div`
  grid-column-start: third-col;
  grid-row-start: second-row;
`;

const LangButton = styled.button`
  background: transparent;
  // background: radial-gradient(
  //   ellipse at center,
  //   rgba(0, 0, 0, 0.1) 0,
  //   rgba(0, 0, 0, 0.1) 4%,
  //   transparent 78%
  // );
  border: none;
  color: white;
  text-shadow: 0.125rem 0.125rem #888888;
  width: 2.0625rem;
  height: 2.0625rem;
  font-size: 1.25rem;
`;

const Lang = styled.span`
  vertical-align: top;
`;
