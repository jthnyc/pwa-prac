import {db} from "../firebase/firebase";
import {v4 as uuidv4} from "uuid";

export const fetchAllImages = async () => {
  const collection = await db.collection("images").get();
  const res = [];
  collection.forEach((imageRef) => {
    res.push(imageRef.data());
  });
  return res;
};

/**
 * @return {Promise<Array>} which contains all guests.
 */
export const fetchAllGuests = async () => {
  const collection = await db.collection("guests").get();

  const res = [];
  collection.forEach((guestRef) => {
    res.push(guestRef.data());
  });

  return res;
};

/**
 * @return {Promise<Array>} which contains all invites.
 */
const fetchAllInvites = async () => {
  const collection = await db.collection("invites").get();
  const res = [];
  collection.forEach((inviteRef) => {
    res.push(inviteRef.data());
  });
  return res;
};

/**
 * RSVP - Save a guest with a generated Id to the DB
 * @param {Object} guest - object with new information on a guest
 */
export const addUser = async (guest) => {
  try {
    const id = uuidv4();
    guest.id = id;
    db.collection("guests").doc(id).set(guest);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Email - Save a guest with a generated Id to the DB
 * @param {Object} guest - object with new information on a guest
 */
export const addGuestEmail = async (guest) => {
  try {
    const id = uuidv4();
    guest.id = id;
    await db.collection("emails").doc(id).set(guest);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Find a guest by name from the guest list - for initial name entry
 * @param {string} fullName - The name of the guest to find
 * @return {Promise<object>} if the guest is found or undefined
 */
export const findGuestByName = async (fullName) => {
  try {
    const allGuests = await fetchAllGuests();
    return allGuests.find((guest) => guest.name === fullName);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Find a guest by id from the guest list - for plus ones
 * @param {number} id - The id of the guest to find
 * @return {Promise<object>} if the guest is found or undefined
 */
export const findGuestById = async (id) => {
  try {
    const allGuests = await fetchAllGuests();
    return allGuests.find((guest) => guest.id === id);
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param {number} id - id of the guest to find
 * @return {Promise<object>} if invite is found or undefined.
 */
export const findInviteByGuestId = async (id) => {
  const allInvites = await fetchAllInvites();
  console.log("allInvites", allInvites);
  for (const invite of allInvites) {
    let match = invite.guests.find((guest) => guest.id === id);
    if (match) {
      return invite;
    }
  }
};

/**
 * WORK IN PROGRESS: this needs to downsize - Working on it.
 * ALSO: probably need to use update instead of set.
 * @param {object} rsvp - rsvp object returned from guest input
 */
export const submitRSVPResponse = async ({
  allergies,
  guestWhoResponded,
  email,
  inviteID,
  plusOnes,
  rsvpState,
  message,
  vaccineRecords,
  highRisk,
  address,
}) => {
  const confirmedGuests = [];
  for (let guest of plusOnes) {
    let guestRef = await findGuestByName(guest);
    let guestObj = {};
    guestObj.id = guestRef.id;
    guestObj.name = guestRef.name;
    guestObj.attending = true;
    confirmedGuests.push(guestObj);
  }
  // adding the person who filled it out
  let guestObj = {};
  guestObj.id = guestWhoResponded.id;
  guestObj.name = guestWhoResponded.name;
  guestObj.attending = true;
  confirmedGuests.unshift({...guestObj});

  const response = {
    guestWhoResponded: guestWhoResponded,
    confirmedGuests: confirmedGuests,
    email: email,
    rsvpState: rsvpState,
    rsvp: true,
    allergies: allergies,
    message: message,
    vaccineRecords: vaccineRecords,
    highRisk: highRisk,
    address: address,
  };

  db.collection("invites")
    .doc(`${inviteID}`)
    .set(response, {merge: true})
    .then(() => console.log("success"))
    .catch((err) => console.error("error >>>>", err));
};
