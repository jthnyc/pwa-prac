import React, {useState} from "react";
import {Form, Button, Col, InputGroup, FormControl, ListGroup} from "react-bootstrap";
import {
  findGuestById,
  findGuestByName,
  findInviteByGuestId,
  submitRSVPResponse,
} from "../firebase/db";
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";
import {storage} from "../firebase/firebase";
// import UpdateRSVP from "./RSVP/UpdateRSVP";

const FindInvite = () => {
  const {t} = useTranslation();
  const [fullName, setFullName] = useState("");
  const [existingGuest, setExistingGuest] = useState({});
  const [inviteID, setInviteID] = useState(null);
  const [rsvp, setRsvp] = useState("");
  const [rsvpState, setRSVPState] = useState("");
  const [rsvpResponded, setRSVPResponded] = useState(false);
  const [plusOne, setPlusOne] = useState(false);
  const [plusOneList, setPlusOneList] = useState([]);
  const [plusOneRsvp, setPlusOneRsvp] = useState([]);
  const [plusOneName, setPlusOneName] = useState("");
  const [confirmedGuests, setConfirmedGuests] = useState([]);
  const [allergies, setAllergies] = useState("");
  const [message, setMessage] = useState("");
  const [guestEmail, setEmail] = useState("");
  const [error, setError] = useState("");
  const [vaccineRecords, setVaccineRecords] = useState([]);
  const [recordUrls, setRecordUrls] = useState([]);
  const [uploaded, setUploaded] = useState(false);
  const [fileCount, setFileCount] = useState(0);
  const [highRisk, setHighRisk] = useState(false);
  const [address, setAddress] = useState(false);
  // const [checked, setChecked] = useState([]);

  const clearFields = () => {
    setFullName("");
  };

  const clearForm = () => {
    setInviteID(null);
    setExistingGuest({});
    setRsvp("");
    setRSVPResponded(false);
    setPlusOneRsvp([]);
    setPlusOneName("");
    setAllergies("");
    setEmail("");
    setMessage("");
    setVaccineRecords([]);
    setRecordUrls([]);
    setUploaded(false);
    setFileCount(0);
    setHighRisk(false);
    setAddress(false);
  };

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newRecord = e.target.files[i];
      newRecord["id"] = uuidv4();
      setVaccineRecords((prevState) => [...prevState, newRecord]);
    }
  };

  const handleUpload = () => {
    const promises = [];
    vaccineRecords.forEach((record) => {
      const uploadTask = storage.ref(`vaccineRecords/${record.name}`).put(record);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("vaccineRecords")
            .child(record.name)
            .getDownloadURL()
            .then((urls) => {
              setRecordUrls((prevState) => [...prevState, urls]);
            });
        }
      );
    });
    Promise.all(promises).catch((err) => console.log(err));

    setFileCount(fileCount + vaccineRecords.length);
    setVaccineRecords([]);
    setUploaded(true);
  };

  const handleInviteSubmit = async (e) => {
    e.preventDefault();
    let foundGuest = await findGuestByName(fullName);
    if (!foundGuest) {
      setError(
        "Sorry, this name did not match any invite! Please double-check the name listed on your Save the Date envelope."
      );
      clearFields();
      return;
    }
    setExistingGuest(foundGuest);
    let inviteDetails = await findInviteByGuestId(foundGuest.id);
    console.log("invite details: ", inviteDetails);
    setInviteID(inviteDetails.id);
    setRSVPResponded(true);

    let rsvpState = await inviteDetails.rsvpState;
    console.log("rsvp state: ", rsvpState);
    if (rsvpState) {
      setRSVPState(rsvpState);
    }

    let confirmedGuests = await inviteDetails.confirmedGuests;
    if (confirmedGuests) {
      setConfirmedGuests([...inviteDetails.confirmedGuests]);
    }

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
    console.log("clicked on: ", e);
    // add plusone to separate list - this list then becomes confirmed plusones

    // let findMatch = plusOneRsvp.find((name) => name === e.target.value);
    // if (findMatch) {
    //   alert("Already added to rsvp list");
    // } else {
    setPlusOneRsvp([...plusOneRsvp, e.target.value]);
    console.log("plus one RSVP: ", plusOneRsvp);
    // }
  };

  // WIP - this submit needs to update existing invite in database
  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    const rsvpSubmit = {
      inviteID: inviteID,
      guestWhoResponded: existingGuest,
      rsvpState: rsvp,
      plusOnes: plusOneName === "" ? plusOneRsvp : [plusOneName],
      allergies: allergies,
      email: guestEmail === "" ? existingGuest.email : guestEmail,
      message: message,
      vaccineRecords: recordUrls,
      highRisk: highRisk,
      address: address,
      rsvpResponded: rsvpResponded,
    };
    console.log("rsvp submit ====> ", rsvpSubmit);
    submitRSVPResponse(rsvpSubmit);
    setTimeout(() => clearForm(), 5000);
  };

  return (
    <FormContainer>
      {inviteID ? (
        rsvpResponded && rsvpState === "Joyfully Accept" ? (
          <div>
            {/* ========= Existing Invite ========== */}
            {/* <UpdateRSVP
              guest={existingGuest}
              list={confirmedGuests}
              checked={checked}
              setChecked={setChecked}
              plusOneList={plusOneList}
            /> */}
            <h2>Welcome back, {existingGuest.name.split(" ")[0]}!</h2>
            <p>Here are your confirmed guests:</p>
            {confirmedGuests.map((guest) => {
              return <div key={guest.id}>{guest.name}</div>;
            })}
            <br />
            <p>
              If you would like to make an update to your RSVP, please contact us directly
              via email at{" "}
              <a href="mailto:hello@joannaandgabriel.love">Hello@JoannaAndGabriel.love</a>
            </p>
            <br />
          </div>
        ) : (
          <div>
            {/* ========= Found Invite ========== */}
            <h2>Hi, {existingGuest.name.split(" ")[0]}!</h2>
            <br />
            <p>Will you be able to join us?</p>
            <Form onSubmit={(e) => handleRSVPSubmit(e)}>
              <div>
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
              </div>

              {rsvp === "" ? (
                <div></div>
              ) : rsvp === "Regretfully Decline" ? (
                <div>sorry you can't join us</div>
              ) : (
                <div>
                  {/* ========= Joyfully Accept ========== */}
                  <Form.Check
                    label={`Plus One`}
                    onClick={(e) => setPlusOne(e.target.checked)}
                  />

                  {/* ========= PLUS ONES ========== */}
                  {plusOne ? (
                    <PlusOneContainer>
                      <Form.Row>
                        {/* ========= PLUS ONE LIST ========== */}
                        {plusOneList.length !== 0 ? (
                          <ListGroup>
                            {plusOneList.map((person) => {
                              return (
                                <ListGroup.Item key={person.id}>
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
                  <br />
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>Dietary Restrictions</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      as="textarea"
                      aria-label="With textarea"
                      onChange={(e) => setAllergies(e.target.value)}
                      value={allergies}
                    />
                  </InputGroup>
                  <br />
                  {existingGuest.email ? (
                    <Form.Group controlId="formBasicEmail">
                      <p>
                        If the following email is not the best email to reach you, please
                        update your email address:
                      </p>
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
                  <br />
                  <p>
                    Do you consider yourself, your partner, or accompanying guests to be
                    in any of the following groups? (pregnant, over 55+, existing
                    underlying medical conditions, in contact with children)?
                  </p>
                  <Form.Row>
                    <Form.Group>
                      <Button
                        variant="light"
                        type="button"
                        onClick={(e) => setHighRisk(e.target.outerText)}
                      >
                        Yes
                      </Button>
                    </Form.Group>

                    <Form.Group>
                      <Button
                        variant="light"
                        type="button"
                        onClick={(e) => setHighRisk(e.target.outerText)}
                      >
                        No
                      </Button>
                    </Form.Group>
                  </Form.Row>
                  {highRisk === "Yes" ? (
                    <div>
                      <p>
                        Please be sure to include details in the message section below.
                        Thank you!
                      </p>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <br />
                  <p>Has your address changed recently?</p>
                  <Form.Row>
                    <Form.Group>
                      <Button
                        variant="light"
                        type="button"
                        onClick={(e) => setAddress(e.target.outerText)}
                      >
                        Yes
                      </Button>
                    </Form.Group>

                    <Form.Group>
                      <Button
                        variant="light"
                        type="button"
                        onClick={(e) => setAddress(e.target.outerText)}
                      >
                        No
                      </Button>
                    </Form.Group>
                  </Form.Row>
                  {address === "Yes" ? (
                    <div>
                      <p>
                        Please be sure to include your latest address in the message
                        section below. Thank you!
                      </p>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  <br />
                  <MarginTop>
                    <Form.Row>
                      <Col>
                        <Form.Group controlId="vaccineForm">
                          <Form.Label>{t("email.upload")}</Form.Label>
                          <br />
                          <TestDiv>
                            <FileUploadSection>
                              <FileUploadSummary>
                                <InputLabel>
                                  <InputField
                                    type="file"
                                    multiple
                                    onChange={handleChange}
                                  />
                                  <span>{t("email.choose")}</span>
                                </InputLabel>

                                {uploaded ? (
                                  <UploadCount>
                                    {fileCount} file{fileCount > 1 ? "s" : ""} uploaded
                                  </UploadCount>
                                ) : (
                                  ""
                                )}
                              </FileUploadSummary>

                              <div>
                                {vaccineRecords.length ? (
                                  <FileUploadStatusSection>
                                    <FileToUpload>
                                      File{vaccineRecords.length > 1 ? "s" : ""} to
                                      Upload:
                                    </FileToUpload>
                                    {vaccineRecords.map((record, i) => {
                                      return (
                                        <div key={i}>
                                          <span>{record.name}</span>
                                        </div>
                                      );
                                    })}
                                  </FileUploadStatusSection>
                                ) : (
                                  ""
                                )}
                              </div>
                            </FileUploadSection>

                            <UploadButton
                              variant="outline-secondary"
                              onClick={handleUpload}
                              disabled={vaccineRecords.length === 0 ? "disabled" : ""}
                            >
                              {t("email.uploadBtn")}
                            </UploadButton>
                          </TestDiv>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </MarginTop>
                </div>
              )}

              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>{t("email.message")}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  as="textarea"
                  placeholder={t("email.placeholder")}
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = t("email.placeholder"))}
                  aria-label="With textarea"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </InputGroup>
              <br />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        )
      ) : (
        <Form onSubmit={(e) => handleInviteSubmit(e)}>
          {/* ===== Search for Invite ====== */}
          <Form.Row>
            <Col>
              {/* <Form.Text className="text-muted">
                Please enter your full name as shown on invitation.
              </Form.Text> */}
              <Form.Group controlId="formFirstName">
                <Form.Control
                  type="text"
                  name="firstname"
                  placeholder="Enter full name as shown on Save the Date envelope"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) =>
                    (e.target.placeholder =
                      "Enter full name as shown on Save the Date envelope")
                  }
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          {error ? <p>{error}</p> : ""}

          <Button variant="outline-secondary" type="submit">
            Find Invitation
          </Button>
        </Form>
      )}
    </FormContainer>
  );
};

export default FindInvite;

const FormContainer = styled.div`
  padding-top: 2rem;
  // border: 1px solid red;

  @media ${device.laptop} {
    padding: 2rem;
  }
`;

const PlusOneContainer = styled.div`
  display: flex;
`;

const MarginTop = styled.div`
  margin-top: 2em;
`;

const TestDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const FileUploadSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // border: 5px solid red;
`;

const FileUploadSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  jusitfy-content: flex-start;
  // border: 1px solid blue;

  @media ${device.mobileL} {
    min-width: 250px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const InputLabel = styled.label`
  display: block;
  width: 7.5rem;
  height: 2.5rem;
  border: 1px solid rgb(108, 117, 125);
  border-radius: 4px;
  margin: 10px 0;
  line-height: 16px;
  color: rgb(108, 117, 125);
  font-weight: 400;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Playfair Display", serif;
  padding: 6px 12px;

  &:hover {
    background: #6c757d;
    color: white;
  }
`;

const InputField = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

const FileUploadStatusSection = styled.div`
  // border: 1px solid red;
  margin-top: 1.5rem;

  @media ${device.mobileL} {
    margin-top: 0;
  }
`;

const UploadCount = styled.span`
  font-weight: bold;
`;

const FileToUpload = styled.span`
  font-style: italic;
`;

const UploadButton = styled(Button)`
  height: 2.5rem;
  margin: 10px 0;
  background: green;
  color: white;
  &:active {
    transition-property: transform, box-shadow;
    transform: scale(1.2);
    box-shadow: 0 3px 15px -2px;
    transition-duration: 1s;
  }
`;
