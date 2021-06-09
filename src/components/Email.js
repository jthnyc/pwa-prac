import React, {useState} from "react";
import {addGuestEmail} from "../firebase/db";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";
import {Form, Button, Col, FormControl, InputGroup} from "react-bootstrap";

const Email = () => {
  const {t} = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [guestEmail, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setMessage("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    const guest = {
      firstName: firstName,
      lastName: lastName,
      uid: new Date().getTime(),
      message: message,
      email: guestEmail,
    };

    console.log("GUEST TO ADD - ", guest);

    e.preventDefault();
    addGuestEmail(guest);
    console.log("after adding guest");
    clearFields();
  };

  return (
    <EmailContainer id="email">
      <h2>{t("email.t")}</h2>
      <EmailText>
        <p>{t("email.l1")}</p>
      </EmailText>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Row>
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.Control
                type="text"
                name="firstname"
                placeholder={t("email.first")}
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLastName">
              <Form.Control
                type="text"
                name="lastname"
                placeholder={t("email.last")}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder={t("email.form")}
                onChange={(e) => setEmail(e.target.value)}
                value={guestEmail}
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>{t("email.message")}</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                placeholder={t("email.placeholder")}
                aria-label="With textarea"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </InputGroup>
          </Col>
        </Form.Row>

        <Test>
          <Button variant="outline-secondary" type="submit">
            {t("email.submit")}
          </Button>
        </Test>
      </Form>
    </EmailContainer>
  );
};

export default Email;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 8rem 0;
  margin-left: 8%;
  margin-right: 8%;

  @media ${device.laptop} {
    padding: 5rem 0;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const EmailText = styled.div`
  // margin-top: 2em;
  // line-height: 2em;
`;

const Test = styled.div`
  margin-top: 2em;
`;
