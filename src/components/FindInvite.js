import {Form, Button, Col, InputGroup, FormControl, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import {
  findGuestById,
  findGuestByName,
  findInviteByGuestId,
  submitRSVPResponse,
} from "../firebase/db";
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";

const FindInvite = () => {
  const [fullName, setFullName] = useState("");
  const [existingGuest, setExistingGuest] = useState({});
  const [rsvp, setRsvp] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [plusOneList, setPlusOneList] = useState([]);
  const [plusOneRsvp, setPlusOneRsvp] = useState([]);
  const [plusOneName, setPlusOneName] = useState("");
  const [allergies, setAllergies] = useState("");
  const [guestEmail, setEmail] = useState("");

  const clearFields = () => {
    setFullName("");
  };

  const handleInviteSubmit = async (e) => {
    e.preventDefault();
    let foundGuest = await findGuestByName(fullName);
    if (!foundGuest) {
      alert("Sorry, this name did not match any invite!");
      return;
    }
    setExistingGuest(foundGuest);
    let inviteDetails = await findInviteByGuestId(foundGuest.id);
    console.log("invite details: ", inviteDetails);
    let plusOnes = await Promise.all(
      inviteDetails.guests
        .filter((guest) => guest.id !== foundGuest.id)
        .map((guest) => findGuestById(guest.id))
    );
    console.log("PLUS ONES: ", plusOnes);
    setPlusOneList([...plusOnes]);
    clearFields();
  };

  // WIP - this toggle logic needs to update existing plueOneRsvp array and not block checkbox
  const updatePlueOneRSVPStatus = (e) => {
    let findMatch = plusOneRsvp.find((name) => name === e.target.value);
    if (findMatch) {
      alert("Already added to rsvp list");
    } else {
      setPlusOneRsvp([...plusOneRsvp, e.target.value]);
    }
  };

  // WIP - this submit needs to update existing invite in database
  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    const rsvpSubmit = {
      guest: existingGuest,
      rsvpState: rsvp,
      plusOnes: plusOneName === "" ? plusOneRsvp : [plusOneName],
      allergies: allergies,
      email: guestEmail === "" ? existingGuest.email : guestEmail,
    };
    submitRSVPResponse(rsvpSubmit);
  };

  return (
    <FormContainer>
      {Object.keys(existingGuest).length !== 0 ? (
        <div>
          <h2>Hi, {existingGuest.name.split(" ")[0]}!</h2>
          <Form onSubmit={(e) => handleRSVPSubmit(e)}>
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
              <PlusOneContainer>
                <Form.Row>
                  {plusOneList.length !== 0 ? (
                    <ListGroup>
                      {plusOneList.map((person) => {
                        return (
                          <ListGroup.Item key={uuidv4()}>
                            {person.name}
                            <Form.Check
                              label={""}
                              value={person.name}
                              onClick={(e) => {
                                updatePlueOneRSVPStatus(e);
                              }}
                            />
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  ) : (
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Plus One Name"
                        onChange={(e) => setPlusOneName(e.target.value)}
                        value={plusOneName}
                      />
                      <Form.Text className="text-muted">
                        We're excited to celebrate with you and your guest!
                      </Form.Text>
                    </Form.Group>
                  )}
                </Form.Row>
              </PlusOneContainer>
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
        <Form onSubmit={(e) => handleInviteSubmit(e)}>
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
      )}
    </FormContainer>
  );
};

export default FindInvite;

const FormContainer = styled.div`
  padding: 2rem;
`;

const PlusOneContainer = styled.div`
  display: flex;
`;
