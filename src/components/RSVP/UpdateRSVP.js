// import React, {useState} from "react";
// import {useTranslation} from "react-i18next";
// import {device} from "../../device";
// import {v4 as uuidv4} from "uuid";
// import {storage} from "../../firebase/firebase";
// import styled from "styled-components";
// import {
//   makeStyles,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Checkbox,
// } from "@material-ui/core";
// import {Form, Button, ListGroup, Col, InputGroup, FormControl} from "react-bootstrap";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// const fieldsToUpdate = [
//   "RSVP Status",
//   "Guest List",
//   "Vaccine Records",
//   "Allergies",
//   "Address",
//   "High Risk List",
// ];

// const UpdateRSVP = ({guest, list, plusOneList, checked, setChecked}) => {
//   const {t} = useTranslation();
//   const classes = useStyles();
//   const [rsvp, setRsvp] = useState("");
//   const [plusOneRsvp, setPlusOneRsvp] = useState([]);
//   const [vaccineRecords, setVaccineRecords] = useState([]);
//   const [uploaded, setUploaded] = useState(false);
//   const [fileCount, setFileCount] = useState(0);
//   const [recordUrls, setRecordUrls] = useState([]);
//   const [allergies, setAllergies] = useState("");
//   const [message, setMessage] = useState("");

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   const handleChange = (e) => {
//     for (let i = 0; i < e.target.files.length; i++) {
//       const newRecord = e.target.files[i];
//       newRecord["id"] = uuidv4();
//       setVaccineRecords((prevState) => [...prevState, newRecord]);
//     }
//   };

//   const handleUpload = () => {
//     const promises = [];
//     vaccineRecords.forEach((record) => {
//       const uploadTask = storage.ref(`vaccineRecords/${record.name}`).put(record);
//       promises.push(uploadTask);
//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {},
//         (error) => {
//           console.log(error);
//         },
//         async () => {
//           await storage
//             .ref("vaccineRecords")
//             .child(record.name)
//             .getDownloadURL()
//             .then((urls) => {
//               setRecordUrls((prevState) => [...prevState, urls]);
//             });
//         }
//       );
//     });
//     Promise.all(promises).catch((err) => console.log(err));

//     setFileCount(fileCount + vaccineRecords.length);
//     setVaccineRecords([]);
//     setUploaded(true);
//   };

//   const updatePlueOneRSVPStatus = (e) => {
//     console.log("clicked on: ", e);

//     setPlusOneRsvp([...plusOneRsvp, e.target.value]);
//     console.log("plus one RSVP: ", plusOneRsvp);
//   };

//   console.log("CHECKED ===> ", checked);
//   return (
//     <div>
//       <h2>Welcome back, {guest.name.split(" ")[0]}!</h2>
//       <p>Here are your confirmed guests:</p>
//       {list.map((guest) => {
//         return <div key={guest.id}>{guest.name}</div>;
//       })}
//       <br />
//       <p>
//         Would you like to update? (Please note the final date to update RSVP will be
//         September 20, 2021)
//       </p>
//       <List className={classes.root}>
//         {fieldsToUpdate.map((value) => {
//           const labelId = `checkbox-list-label-${value}`;

//           return (
//             <ListItem
//               key={value}
//               role={undefined}
//               dense
//               button
//               onClick={handleToggle(value)}
//             >
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   checked={checked.indexOf(value) !== -1}
//                   tabIndex={-1}
//                   disableRipple
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={value} />
//             </ListItem>
//           );
//         })}
//       </List>
//       {checked.includes("RSVP Status") ? (
//         <div>
//           <Form.Row>
//             <Form.Group>
//               <Button
//                 variant="light"
//                 type="button"
//                 onClick={(e) => setRsvp(e.target.outerText)}
//               >
//                 Joyfully Accept
//               </Button>
//             </Form.Group>

//             <Form.Group>
//               <Button
//                 variant="light"
//                 type="button"
//                 onClick={(e) => setRsvp(e.target.outerText)}
//               >
//                 Regretfully Decline
//               </Button>
//             </Form.Group>
//           </Form.Row>
//         </div>
//       ) : (
//         ""
//       )}
//       {checked.includes("Guest List") ? (
//         <div>
//           <ListGroup>
//             {plusOneList.map((person) => {
//               return (
//                 <ListGroup.Item key={person.id}>
//                   {person.name}
//                   <Form.Check
//                     label={""}
//                     value={person.name}
//                     onClick={(e) => {
//                       updatePlueOneRSVPStatus(e);
//                     }}
//                   />
//                 </ListGroup.Item>
//               );
//             })}
//           </ListGroup>
//         </div>
//       ) : (
//         ""
//       )}
//       {checked.includes("Vaccine Records") ? (
//         <div>
//           <Form.Row>
//             <Col>
//               <Form.Group controlId="vaccineForm">
//                 <Form.Label>{t("email.upload")}</Form.Label>
//                 <br />
//                 <TestDiv>
//                   <FileUploadSection>
//                     <FileUploadSummary>
//                       <InputLabel>
//                         <InputField type="file" multiple onChange={handleChange} />
//                         <span>{t("email.choose")}</span>
//                       </InputLabel>

//                       {uploaded ? (
//                         <UploadCount>
//                           {fileCount} file{fileCount > 1 ? "s" : ""} uploaded
//                         </UploadCount>
//                       ) : (
//                         ""
//                       )}
//                     </FileUploadSummary>

//                     <div>
//                       {vaccineRecords.length ? (
//                         <FileUploadStatusSection>
//                           <FileToUpload>
//                             File{vaccineRecords.length > 1 ? "s" : ""} to Upload:
//                           </FileToUpload>
//                           {vaccineRecords.map((record, i) => {
//                             return (
//                               <div key={i}>
//                                 <span>{record.name}</span>
//                               </div>
//                             );
//                           })}
//                         </FileUploadStatusSection>
//                       ) : (
//                         ""
//                       )}
//                     </div>
//                   </FileUploadSection>

//                   <UploadButton
//                     variant="outline-secondary"
//                     onClick={handleUpload}
//                     disabled={vaccineRecords.length === 0 ? "disabled" : ""}
//                   >
//                     {t("email.uploadBtn")}
//                   </UploadButton>
//                 </TestDiv>
//               </Form.Group>
//             </Col>
//           </Form.Row>
//         </div>
//       ) : (
//         ""
//       )}
//       {checked.includes("Allergies") ? (
//         <InputGroup>
//           <InputGroup.Prepend>
//             <InputGroup.Text>Dietary Restrictions</InputGroup.Text>
//           </InputGroup.Prepend>
//           <FormControl
//             as="textarea"
//             aria-label="With textarea"
//             onChange={(e) => setAllergies(e.target.value)}
//             value={allergies}
//           />
//         </InputGroup>
//       ) : (
//         ""
//       )}
//       {checked.includes("Address") || checked.includes("High Risk List") ? (
//         <InputGroup>
//           <InputGroup.Prepend>
//             <InputGroup.Text>{t("email.message")}</InputGroup.Text>
//           </InputGroup.Prepend>
//           <FormControl
//             as="textarea"
//             placeholder={t("email.placeholder")}
//             onFocus={(e) => (e.target.placeholder = "")}
//             onBlur={(e) => (e.target.placeholder = t("email.placeholder"))}
//             aria-label="With textarea"
//             onChange={(e) => setMessage(e.target.value)}
//             value={message}
//           />
//         </InputGroup>
//       ) : (
//         ""
//       )}
//       {checked.length !== 0 ? (
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// export default UpdateRSVP;

// const InputField = styled.input`
//   height: 0;
//   width: 0;
//   opacity: 0;
// `;

// const InputLabel = styled.label`
//   display: block;
//   width: 7.5rem;
//   height: 2.5rem;
//   border: 1px solid rgb(108, 117, 125);
//   border-radius: 4px;
//   margin: 10px 0;
//   line-height: 16px;
//   color: rgb(108, 117, 125);
//   font-weight: 400;
//   font-size: 16px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: "Playfair Display", serif;
//   padding: 6px 12px;

//   &:hover {
//     background: #6c757d;
//     color: white;
//   }
// `;

// const FileUploadSummary = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   jusitfy-content: flex-start;
//   // border: 1px solid blue;

//   @media ${device.mobileL} {
//     min-width: 250px;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//   }
// `;

// const FileUploadSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   // border: 5px solid red;
// `;

// const TestDiv = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
// `;

// const UploadCount = styled.span`
//   font-weight: bold;
// `;

// const FileUploadStatusSection = styled.div`
//   // border: 1px solid red;
//   margin-top: 1.5rem;

//   @media ${device.mobileL} {
//     margin-top: 0;
//   }
// `;

// const FileToUpload = styled.span`
//   font-style: italic;
// `;

// const UploadButton = styled(Button)`
//   height: 2.5rem;
//   margin: 10px 0;
//   background: green;
//   color: white;
//   &:active {
//     transition-property: transform, box-shadow;
//     transform: scale(1.2);
//     box-shadow: 0 3px 15px -2px;
//     transition-duration: 1s;
//   }
// `;
