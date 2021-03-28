import {db} from "../firebase/firebase";
import {v4 as uuidv4} from "uuid";

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
 * Save a guest with a generated Id to the DB
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
  email,
  guest,
  plusOnes,
  rsvpState,
}) => {
  const inviteToUpdate = await findInviteByGuestId(guest.id);
  const plusOneIds = [];
  for (let guest of plusOnes) {
    let guestRef = await findGuestByName(guest);
    let guestObj = {};
    guestObj.id = guestRef.id;
    guestObj.attending = true;
    plusOneIds.push(guestObj);
  }
  let guestObj = {};
  guestObj.id = guest.id;
  guestObj.attending = true;
  plusOneIds.push({...guestObj});

  const response = {
    id: inviteToUpdate.id,
    guests: plusOneIds,
    email: email,
    rsvpState: rsvpState,
    rsvp: true,
    allergies: allergies,
  };

  db.collection("invites").doc(`${inviteToUpdate.id}`).set(response);
};
