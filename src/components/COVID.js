import React from "react";
import styled from "styled-components";
import {Accordion, Card} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {device} from "../device";

const COVID = () => {
  const {t} = useTranslation();
  return (
    <COVIDContainer id="covid">
      <h2>{t("covid.t")}</h2>
      <p>{t("covid.subt")}</p>
      <SumList>
        <li>
          <strong>{t("covid.s-1")}</strong>
        </li>
        <li>{t("covid.s-2")}</li>
        <li>{t("covid.s-3")}</li>
        <li>{t("covid.s-4")}</li>
        <li>{t("covid.s-5")}</li>
      </SumList>
      <p>{t("covid.note")}</p>
      <Accordion defaultActiveKey="13">
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="13">
            {t("covid.q-14")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="13">
            <Card.Body>
              <p>{t("covid.a-14")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="14">
            {t("covid.q-15")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="14">
            <Card.Body>
              <p>{t("covid.a-15")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="8">
            {t("covid.q-9")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              <p>{t("covid.a-9")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            {t("covid.q-1")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>{t("covid.a-1")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="15">
            {t("covid.q-16")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="15">
            <Card.Body>
              <p>{t("covid.a-16")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            {t("covid.q-2")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>{t("covid.a-2")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
            {t("covid.q-3")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>{t("covid.a-3")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
            {t("covid.q-4")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>{t("covid.a-4")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
            {t("covid.q-5")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>{t("covid.a-5")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
            {t("covid.q-6")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <p>{t("covid.a-6")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="6">
            {t("covid.q-7")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <p>{t("covid.a-7")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="7">
            {t("covid.q-8")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              <p>{t("covid.a-8")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        {/* <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="9">
            {t("covid.q-10")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              <p>{t("covid.a-10")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card> */}
        {/* <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="10">
            {t("covid.q-11")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="10">
            <Card.Body>
              <p>{t("covid.a-11")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card> */}
        {/* <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="11">
            {t("covid.q-12")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="11">
            <Card.Body>
              <p>{t("covid.a-12")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card> */}
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="12">
            {t("covid.q-13")}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="12">
            <Card.Body>
              <p>{t("covid.a-13")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </COVIDContainer>
  );
};

export default COVID;

const COVIDContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 0;
  margin-left: 8%;
  margin-right: 8%;
  min-width: 80vw;

  @media ${device.laptop} {
    padding: 5rem 0;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const SumList = styled.ul`
  margin-left: 0;

  @media ${device.laptop} {
    margin-left: 20px;
  }
`;
