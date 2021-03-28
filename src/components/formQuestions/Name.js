import React from "react";
import {Form, Col} from "react-bootstrap";

const Name = ({firstName, setFirstName, lastName, setLastName}) => {
  return (
    <Form.Row>
      <Col>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </Form.Group>
      </Col>
    </Form.Row>
  );
};

export default Name;
