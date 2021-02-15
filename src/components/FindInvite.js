// import {findUser} from "../firebase/db";
import {Form, Button, Col, InputGroup, FormControl, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import {findUserInvite} from "../firebase/db";
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";

const FindInvite = () => {
  const [fullName, setFullName] = useState("");
  const [existingGuest, setExistingGuest] = useState({});
  const [rsvp, setRsvp] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [plusOneStatus, setPlusOneStatus] = useState(false);
  const [allergies, setAllergies] = useState("");
  const [guestEmail, setEmail] = useState("");

  const clearFields = () => {
    setFullName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let foundGuest = await findUserInvite(fullName);
    console.log("found guest: ", foundGuest);
    if (foundGuest) {
      setExistingGuest(foundGuest);
    } else if (foundGuest === null) {
      console.log("guest not found");
    } else {
      console.log("not sure what this is");
    }
    clearFields();
  };

  // need to work on updating the existing user's information
  // const updateUser = async () => {
  //   try {
  //     const guestInQuestion = db.collection("guests").doc(`${fullName}`);

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <FormContainer>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Row>
          <Col>
            <Form.Text className="text-muted">
              Please enter your full name as shown on invitation.
            </Form.Text>
            <Form.Group controlId="formFirstName">
              <Form.Control
                type="text"
                name="firstname"
                placeholder="Enter full name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Button variant="primary" type="submit">
          Find Invitation
        </Button>
      </Form>

      {Object.keys(existingGuest).length !== 0 ? (
        <div>
          <h2>Hi, {existingGuest.firstName}!</h2>
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

            <Form.Check
              label={`Plus One`}
              onClick={(e) => setPlusOne(e.target.checked)}
            />

            {plusOne ? (
              <Form.Row>
                <ListGroup>
                  {Object.keys(existingGuest.plusOne).map((person) => {
                    return (
                      <ListGroup.Item key={uuidv4()}>
                        {person}
                        <Form.Check
                          label={""}
                          onClick={() => {
                            console.log("clicked!");
                            console.log("STATUS OF PLUS 1: ", plusOneStatus);
                            plusOneStatus
                              ? setPlusOneStatus(!plusOneStatus)
                              : setPlusOneStatus(plusOneStatus);
                            existingGuest.plusOne[person] = plusOneStatus;
                          }}
                        />
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Form.Row>
            ) : (
              <div></div>
            )}

            {console.log("PLUS ONE LIST: ", existingGuest.plusOne)}

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

            {existingGuest.email ? (
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  If the following email is not the best email to reach you, please update
                  your email address:
                </Form.Label>
                <h4>{existingGuest.email}</h4>

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
            ) : (
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
            )}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      ) : (
        <div></div>
      )}
    </FormContainer>
  );
};

export default FindInvite;

const FormContainer = styled.div`
  padding: 2rem;
`;
