import {createContext, useState} from "react";

export const RSVPContext = createContext();

const RSVPContextProvider = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rsvp, setRsvp] = useState(false);
  const [plusOne, setPlusOne] = useState(false);
  const [plusFName, setPlusFName] = useState("");
  const [plusLName, setPlusLName] = useState("");
  const [allergies, setAllergies] = useState("");
  const [guestEmail, setEmail] = useState("");

  return (
    <RSVPContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        rsvp,
        setRsvp,
        plusOne,
        setPlusOne,
        plusFName,
        setPlusFName,
        plusLName,
        setPlusLName,
        allergies,
        setAllergies,
        guestEmail,
        setEmail,
      }}
    >
      {props.children}
    </RSVPContext.Provider>
  );
};

export default RSVPContextProvider;
