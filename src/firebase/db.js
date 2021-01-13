import {db} from "../firebase/firebase";

export const addUser = async (guest) => {
  try {
    db.collection("guests").doc(`${guest.firstName} ${guest.lastName}`).set(guest);
    console.log("guest added!");
  } catch (error) {
    console.log(error);
  }
};
