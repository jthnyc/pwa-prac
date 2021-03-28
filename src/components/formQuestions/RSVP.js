import React, {useContext} from "react";
import {Form, Button} from "react-bootstrap";
import {RSVPContext} from "../../context/RSVPContext";

const RSVP = () => {
  const {rsvp, setRsvp} = useContext(RSVPContext);

  return (
    <Form.Row>
      <Form.Group>
        <Button variant="light" type="button" onClick={setRsvp(true)}>
          Joyfully Accept
        </Button>
      </Form.Group>

      <Form.Group>
        <Button variant="light" type="button">
          Regretfully Decline
        </Button>
      </Form.Group>
    </Form.Row>
  );
};

export default RSVP;
