import React from "react";
import styled, {keyframes} from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const Nav = () => {
  const {t, i18n} = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <Header>
      <InnerHeader>
        <Navigation>
          <Navlist>
            <ListContainer>
              <ListItem>
                <Link href="#story">{t("story.t")}</Link>
              </ListItem>
              <ListItem>
                <Link href="#faq">{t("faq.t")}</Link>
              </ListItem>
              <ListItem>
                <Link href="#email">{t("email.t")}</Link>
              </ListItem>
              <ListItem>
                <Link href="#covid">{t("covid.nav")}</Link>
              </ListItem>
            </ListContainer>
          </Navlist>
        </Navigation>
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
      </InnerHeader>
    </Header>
  );
};

export default Nav;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOut = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const Header = styled.header`
  border: 1px solid yellow;
  width: 100vw;
  position: fixed;
  top: 0px;
  z-index: 10;
  background: transparent;
`;

const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  margin: 10px 45px;
`;

const Navigation = styled.div``;

const Navlist = styled.nav`
  border: 1px solid green;
  display: flex;
  align-items: center;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;
`;

const ListContainer = styled.ul`
  // display: flex;
`;

const ListItem = styled.li`
  // padding: 15px 10px;
  // margin: 10px 5px;

  // &:hover {
  //   border-bottom: 2px #fff solid;
  // }
`;

const Link = styled.a`
  border: 1px solid red;
  // padding: 5px;
  margin: 0 20px;
  color: #fff;
  font-size: 1.2em;
  text-shadow: 1px 1px #888888;
  letter-spacing: 0.1rem;

  &:last-child {
    margin-right: 0;
  }
`;

const LangContainer = styled.div`
  border: 1px solid red;
  width: 3.125rem;
  display: flex;
  align-items: center;
`;

const LangButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  text-shadow: 0.125rem 0.125rem #888888;
  width: 2.0625rem;
  height: 2.0625rem;
  font-size: 1.25rem;
  display: flex;
`;
