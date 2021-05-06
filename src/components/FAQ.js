import React from "react";
import styled from "styled-components";
import {Accordion, Card} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const Faq = () => {
  const {t} = useTranslation();
  return (
    <FAQContainer id="faq">
      <h2>{t("faq.t")}</h2>
      <p>
        {t("faq.subt")}
        <a href="mailto:hello@joannaandgabriel.love">Hello@JoannaAndGabriel.love</a>
      </p>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            {t("faq.q1")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>{t("faq.a1")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            {t("faq.q2")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>{t("faq.a2")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
            {t("faq.q3")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>{t("faq.a3")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
            {t("faq.q4")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>{t("faq.a4")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
            {t("faq.q5")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>{t("faq.a5")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
            {t("faq.q6")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <p>{t("faq.a6")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </FAQContainer>
  );
};

export default Faq;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media ${device.laptopL} {
    padding: 3rem;
    margin-left: 20%;
    margin-right: 20%;
  }
`;
