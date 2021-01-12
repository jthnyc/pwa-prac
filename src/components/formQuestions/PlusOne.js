import React, {useContext} from "react";
import {Form, Col} from "react-bootstrap";
import {RSVPContext} from "../../context/RSVPContext";

const PlusOne = () => {
  const {
    plusOne,
    setPlusOne,
    plusFName,
    setPlusFName,
    plusLName,
    setPlusLName,
  } = useContext(RSVPContext);

  return (
    <Form.Row>
      <Col>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`Plus One`}
              onClick={setPlusOne(true)}
            />
          </div>
        ))}
      </Col>

      <Col>
        <Form.Row>
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                onChange={(e) => setPlusFName(e.target.value)}
                value={plusFName}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                onChange={(e) => setPlusLName(e.target.value)}
                value={plusLName}
              />
            </Form.Group>
          </Col>
        </Form.Row>
      </Col>
    </Form.Row>
  );
};

export default PlusOne;
