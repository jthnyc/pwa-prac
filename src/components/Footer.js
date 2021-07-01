import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

const NavMenu = () => {
  const {t} = useTranslation();

  return (
    <Footer>
      <h5>
        <a href="mailto:hello@joannaandgabriel.love">{t("footer.c")}</a>
      </h5>
      <h5>©2021 {t("names.t")}</h5>
    </Footer>
  );
};

export default NavMenu;

const Footer = styled.div`
  background: transparent;
  width: 100%;
  height: 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
