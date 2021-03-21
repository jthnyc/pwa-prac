import React from "react";
import styled from "styled-components";
import {Accordion, Button, Card} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const QnA = () => {
  const {t} = useTranslation();
  return (
    <QuestionnaireContainer>
      <h2>{t("qa.t")}</h2>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              {t("qa.q1")}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>{t("qa.a1")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              {t("qa.q2")}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>{t("qa.a2")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              {t("qa.q3")}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>{t("qa.a3")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              {t("qa.q4")}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>{t("qa.a4")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              {t("qa.q5")}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>{t("qa.a5")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              {t("qa.q6")}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <p>{t("qa.a6")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </QuestionnaireContainer>
  );
};

export default QnA;

const QuestionnaireContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
