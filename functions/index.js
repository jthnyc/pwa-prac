// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const {google} = require("googleapis");
const sheets = google.sheets("v4");
const _ = require("lodash");

const spreadsheetId = "1yBGGbtuBVu709CT0ykAzd6bH8ri8B4xesU3GZBFjAtY";

// const serviceAccount = require("./serviceAccount.json");
const serviceAccount = require("./pwa-prac-300623-1cafea4fc52d.json");

const jwtClient = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const jwtAuthPromise = jwtClient.authorize();

exports.SyncToSheets = functions.database.ref("/products").onUpdate(async (change) => {
  const jsonData = change.after.val();

  await jwtAuthPromise;

  const flatten = (data) => {
    var result = {};
    const recurse = function (cur, prop) {
      if (Object(cur) !== cur) {
        result[prop] = cur;
      } else if (Array.isArray(cur)) {
        for (var i = 0, l = cur.length; i < l; i++) recurse(cur[i], prop + "[" + i + "]");
        if (l === 0) result[prop] = [];
      } else {
        var isEmpty = true;
        for (var p in cur) {
          isEmpty = false;
          recurse(cur[p], prop ? prop + "." + p : p);
        }
        if (isEmpty && prop) result[prop] = {};
      }
    };
    recurse(data, "");
    return result;
  };

  let allKeys = Object.keys(jsonData);

  let firstElement = allKeys[0] || 0;

  let headerData = flatten(jsonData[firstElement]);
  let keys = Object.keys(headerData);

  let rows = [];

  for (const item in jsonData) {
    let val = jsonData[item];
    let row = [item];
    keys.forEach((key) => {
      row.push(_.get(val, key) || "");
    });
    rows.push(row);
  }

  let sheetData = [["id", ...keys], ...rows];

  let range = `Products!A1:${String.fromCharCode(65 + keys.length)}${allKeys.length + 1}`;

  await sheets.spreadsheets.values.update(
    {
      auth: jwtClient,
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: "RAW",
      requestBody: {values: sheetData},
    },
    {}
  );
});
