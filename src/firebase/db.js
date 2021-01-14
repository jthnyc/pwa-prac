import {db} from "../firebase/firebase";

export const addUser = async (guest) => {
  try {
    db.collection("guests").doc(`${guest.firstName} ${guest.lastName}`).set(guest);
    console.log("guest added!");
  } catch (error) {
    console.log(error);
  }
};

export const findUser = async (guest) => {
  try {
    const guests = db.collection("guests").doc(`${guest.firstName} ${guest.lastName}`);
    const doc = await guests.get();
    if (doc) {
      console.log(doc.data());
      return doc.data();
    } else {
      console.log("no data");
    }
  } catch (error) {
    console.log(error);
  }
};
