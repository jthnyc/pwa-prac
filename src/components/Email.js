import React, {useState} from "react";
import {addGuestEmail} from "../firebase/db";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {device} from "../device";
import {Form, Button, Col, FormControl, InputGroup} from "react-bootstrap";
import {storage} from "../firebase/firebase";
import {v4 as uuidv4} from "uuid";

const Email = () => {
  const {t} = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [guestEmail, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [vaccineRecords, setVaccineRecords] = useState([]);
  const [recordUrls, setRecordUrls] = useState([]);
  const [uploaded, setUploaded] = useState(false);
  const [fileCount, setFileCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setMessage("");
    setEmail("");
    setVaccineRecords([]);
    setRecordUrls([]);
    setFileCount(0);
    setUploaded(false);
    setSubmitted(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const guest = {
      firstName: firstName,
      lastName: lastName,
      uid: new Date().getTime(),
      message: message,
      email: guestEmail,
      vaccineRecordUrl: recordUrls,
    };

    addGuestEmail(guest);
    setSubmitted(true);
    setTimeout(() => clearFields(), 5000);
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
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = t("email.first"))}
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLastName">
              <Form.Control
                type="text"
                name="lastname"
                placeholder={t("email.last")}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = t("email.last"))}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
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
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = t("email.form"))}
                onChange={(e) => setEmail(e.target.value)}
                value={guestEmail}
                required
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
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = t("email.placeholder"))}
                aria-label="With textarea"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </InputGroup>
          </Col>
        </Form.Row>

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
                        <InputField type="file" multiple onChange={handleChange} />
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
                            File{vaccineRecords.length > 1 ? "s" : ""} to Upload:
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

        <SubmitButton>
          <Button variant="outline-secondary" type="submit">
            {t("email.submit")}
          </Button>
          {submitted ? (
            <span>
              {t("email.received")} {firstName}!
            </span>
          ) : (
            ""
          )}
        </SubmitButton>
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

const MarginTop = styled.div`
  margin-top: 2em;
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

const FileUploadStatusSection = styled.div`
  // border: 1px solid red;
  margin-top: 1.5rem;

  @media ${device.mobileL} {
    margin-top: 0;
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

const TestDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SubmitButton = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 320px;
  // border: 1px solid red;
`;
