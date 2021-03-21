import React from "react";
import styled from "styled-components";
import {Accordion, Card} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const FAQ = () => {
  const {t} = useTranslation();
  return (
    <FAQContainer id="faq">
      <h2>{t("qa.t")}</h2>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            {t("qa.q1")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>{t("qa.a1")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            {t("qa.q2")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>{t("qa.a2")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
            {t("qa.q3")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>{t("qa.a3")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
            {t("qa.q4")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>{t("qa.a4")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
            {t("qa.q5")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>{t("qa.a5")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
            {t("qa.q6")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <p>{t("qa.a6")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </FAQContainer>
  );
};

export default FAQ;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
