import {db} from "../firebase/firebase";

export const addUser = async (guest) => {
  try {
    db.collection("guests").doc(`${guest.firstName} ${guest.lastName}`).set(guest);
    console.log("guest added!");
  } catch (error) {
    console.log(error);
  }
};

export const findGuestByName = async (fullName) => {
  try {
    const findGuest = db.collection("guests").doc(`${fullName}`);
    const doc = await findGuest.get();

    if (doc) {
      const foundGuest = doc.data();
      // console.log("FOUND GUEST: ", foundGuest);
      return foundGuest;
    }
    return undefined;
  } catch (error) {
    console.log(error);
  }
};

const findInviteByGuestId = async (id) => {
  console.log("ID IS === ", id);
  const getInvites = await db.collection("invites").get();
  let inviteDetails = {
    guests: [],
    rsvp: null,
  };
  // iterate through each invite
  getInvites.forEach(function (invite) {
    // grab all guests
    let guests = invite.data().guests;
    let rsvp = invite.data().rsvp;
    // find guest that matches id
    let foundGuestMatch = guests.find((guest) => guest.id === id);
    // if there is a match, send back the entire invite detail
    if (foundGuestMatch && rsvp === false) {
      inviteDetails.guests = [...invite.data().guests];
      inviteDetails.rsvp = invite.data().rsvp;
    }
  });

  let plusOnes = inviteDetails.guests.filter((guest) => guest.id !== id);
  let plusOneNames = [];
  plusOnes.forEach(async function (person) {
    let plusOneName = await findGuestByID(person.id);
    // console.log("plus one name ===", plusOneName);
    plusOneNames.push(plusOneName);
  });
  // console.log("plus one names: ", plusOneNames);
  // console.log("invite details", inviteDetails);

  return [inviteDetails, plusOneNames];
};

const findGuestByID = async (id) => {
  const guests = await db.collection("guests").get();
  let foundGuestName;
  guests.forEach(function (guest) {
    let data = guest.data();
    if (data.id === id) {
      foundGuestName = data.name;
    }
  });
  return foundGuestName;
};

export const findInviteByGuestName = async (fullName) => {
  const guest = await findGuestByName(fullName);
  if (guest) {
    const guestId = guest.id;
    const foundInvite = await findInviteByGuestId(guestId);
    return foundInvite;
  }
  return undefined;
};

// export const findUserInvite = async (fullName) => {
//   try {
//     const foundGuest = db.collection("guests").doc(`${fullName}`);
//     const doc = await foundGuest.get();
//     if (doc) {
//       const inviteID = doc.data().inviteID;
//       // console.log("INVITE #: ", inviteID);
//       const foundInvite = db.collection("invites").doc(`${inviteID}`);
//       const doc2 = await foundInvite.get();
//       const inviteDetails = doc2.data();
//       // console.log("Invite Details ====== ", inviteDetails);
//       return inviteDetails;
//     }
//     return null;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateInvite = () => {
//   try {
//   } catch (error) {}
// };
