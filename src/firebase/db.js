import {db} from "../firebase/firebase";

export const addUser = async (guest) => {
  try {
    db.collection("guests").doc(`${guest.firstName} ${guest.lastName}`).set(guest);
    console.log("guest added!");
  } catch (error) {
    console.log(error);
  }
};

export const findGuest = async (fullName) => {
  try {
    const findGuest = db.collection("guests").doc(`${fullName}`);
    const doc = await findGuest.get();
    if (doc) {
      const foundGuest = doc.data();
      return foundGuest;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const findUserInvite = async (fullName) => {
  try {
    const foundGuest = db.collection("guests").doc(`${fullName}`);
    const doc = await foundGuest.get();
    if (doc) {
      const inviteID = doc.data().inviteID;
      // console.log("INVITE #: ", inviteID);
      const foundInvite = db.collection("invites").doc(`${inviteID}`);
      const doc2 = await foundInvite.get();
      const inviteDetails = doc2.data();
      // console.log("Invite Details ====== ", inviteDetails);
      return inviteDetails;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const updateInvite = (req, res) => {
  try {
  } catch (error) {}
};
