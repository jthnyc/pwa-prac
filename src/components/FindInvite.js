// import {findUser} from "../firebase/db";
import {Form, Button, Col, InputGroup, FormControl, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import {findInviteByGuestName, findGuestByName} from "../firebase/db";
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";

const FindInvite = () => {
  const [fullName, setFullName] = useState("");
  const [existingGuest, setExistingGuest] = useState({});
  const [rsvp, setRsvp] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [plusOneList, setPlusOneList] = useState([]);
  // const [plusOneStatus, setPlusOneStatus] = useState(false);
  const [allergies, setAllergies] = useState("");
  const [guestEmail, setEmail] = useState("");

  const clearFields = () => {
    setFullName("");
  };

  const handleInviteSubmit = async (e) => {
    e.preventDefault();
    let foundGuest = await findGuestByName(fullName);
    let inviteDetails = await findInviteByGuestName(fullName);
    console.log("found invite: ", inviteDetails);
    let plusOnes = inviteDetails[1];
    console.log("plus ones: ", plusOnes);
    // const plusOnes = foundInvite.guests.filter((guest) => guest.name !== fullName);
    // console.log("plusONES =====: ", plusOnes);
    if (foundGuest && inviteDetails) {
      setExistingGuest(foundGuest);
      setPlusOneList(plusOnes);
    } else if (foundGuest === null) {
      console.log("guest not found");
    } else {
      console.log("not sure what this is");
    }
    clearFields();
  };

  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED");
    console.log("what is E here: ", e);

    // this submit needs to update existing invite in database
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
              <Form.Row>
                <ListGroup>
                  {console.log("WHAT DOES THIS PRINT?: ", plusOneList)}
                  {plusOneList.guests.map((person) => {
                    return (
                      <ListGroup.Item key={uuidv4()}>
                        {person.name}
                        <Form.Check
                          label={""}
                          onClick={(e) => {
                            console.log("clicked!");
                            console.log("target == ", e.target.checked);
                            person.attending = e.target.checked;
                            // console.log(person.rsvp);
                            // plusOneStatus
                            //   ? setPlusOneStatus(!plusOneStatus)
                            //   : setPlusOneStatus(plusOneStatus);
                            // plusOneList.guests[person].rsvp = plusOneStatus;
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

            {/* {console.log("PLUS ONE LIST: ", existingGuest.plusOne)} */}

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
