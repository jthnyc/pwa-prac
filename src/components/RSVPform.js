import React, {useState} from "react";
import {Form, Button, Col, FormControl, InputGroup} from "react-bootstrap";
import {db} from "../firebase";

const RSVPform = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rsvp, setRsvp] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [plusFName, setPlusFName] = useState("");
  const [plusLName, setPlusLName] = useState("");
  const [allergies, setAllergies] = useState("");
  const [guestEmail, setEmail] = useState("");

  const addUser = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      uid: new Date().getTime(),
      rsvp: rsvp,
      plusOne: plusOne,
      plusFName: plusFName,
      plusLName: plusLName,
      allergies: allergies,
      email: guestEmail,
    };
    db.collection("guests")
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        console.log("guest added!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
    setFirstName("");
    setLastName("");
    setAllergies("");
    setEmail("");
  };

  const handlePlusOne = (e) => {
    const status = e.target.checked;
    setPlusOne(status);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
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

      <Form.Row>
        <Form.Group>
          <Button
            variant="light"
            type="button"
            onClick={(e) => setRsvp(e.target.outerText)}
          >
            Joyfully Accept
          </Button>
        </Form.Group>

        <Form.Group>
          <Button
            variant="light"
            type="button"
            onClick={(e) => setRsvp(e.target.outerText)}
          >
            Regretfully Decline
          </Button>
        </Form.Group>
      </Form.Row>

      {["checkbox"].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`Plus One`}
            onClick={(e) => handlePlusOne(e)}
          />
        </div>
      ))}

      {plusOne ? (
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
      ) : (
        <div></div>
      )}

      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Food Allergies</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          as="textarea"
          aria-label="With textarea"
          onChange={(e) => setAllergies(e.target.value)}
          value={allergies}
        />
      </InputGroup>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={guestEmail}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RSVPform;
