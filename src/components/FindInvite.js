// import {findUser} from "../firebase/db";
import {Form, Button, Col, InputGroup, FormControl} from "react-bootstrap";
import React, {useState} from "react";
import {db} from "../firebase/firebase";

const FindInvite = () => {
  const [guest, setGuest] = useState({firstName: "", lastName: ""});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [existingGuest, setExistingGuest] = useState({});
  const [rsvp, setRsvp] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [plusFName, setPlusFName] = useState("");
  const [plusLName, setPlusLName] = useState("");
  const [allergies, setAllergies] = useState("");
  const [guestEmail, setEmail] = useState("");

  const clearFields = () => {
    setFirstName("");
    setLastName("");
  };

  const handleSubmit = (e) => {
    const guestData = {
      firstName: firstName,
      lastName: lastName,
    };

    e.preventDefault();
    setGuest(guestData);
    findUser(guest);
    clearFields();
  };

  const findUser = async (guest) => {
    try {
      const guests = db.collection("guests").doc(`${guest.firstName} ${guest.lastName}`);
      const doc = await guests.get();
      if (doc) {
        console.log(doc.data());
        setExistingGuest(doc.data());
      } else {
        console.log("no data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlusOne = (e) => {
    const status = e.target.checked;
    console.log(e);
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

      <Button variant="primary" type="submit">
        Submit
      </Button>

      {existingGuest ? (
        <div>
          <h2>{existingGuest.firstName}</h2>
          <Form onSubmit={(e) => handleSubmit(e)}>
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

            <Form.Check label={`Plus One`} onClick={(e) => handlePlusOne(e)} />

            {plusOne ? (
              <Form.Row>
                {existingGuest.plusGuests.map((person) => {
                  return (
                    <Button variant="primary" type="text">
                      {person}
                    </Button>
                  );
                })}
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
        </div>
      ) : (
        <div></div>
      )}
    </Form>
  );
};

export default FindInvite;
