// const onDocCreated = require("./myFunctions/onDocCreated");
// const onDocUpdated = require("./myFunctions/onDocUpdated");
// const onDocDeleted = require("./myFunctions/onDocDeleted");

// import { onDocCreated } from "./myFunctions/onDocCreated";
// import { onDocUpdated } from "./myFunctions/onDocUpdated";
// import { onDocDeleted } from "./myFunctions/onDocDeleted";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const FieldValue = admin.firestore.FieldValue;
admin.initializeApp();
const db = admin.firestore();

const odc = require("./myFunctions/onDocCreated");
const odu = require("./myFunctions/onDocUpdated");
const odd = require("./myFunctions/onDocDeleted");
//const ae = require("./myFunctions/addEventToCalendar");

// let theKeys = Object.keys(odc);
// console.log("exported fields are:", JSON.stringify(theKeys));

exports.onStudentCreate = functions.firestore
  .document("/students/{id}")
  .onCreate(odc.onDocCreated);
exports.onBatchCreate = functions.firestore
  .document("/batches/{id}")
  .onCreate(odc.onDocCreated);
exports.onTeacherCreate = functions.firestore
  .document("/teachers/{id}")
  .onCreate(odc.onDocCreated);

exports.onStudentUpdated = functions.firestore
  .document("/students/{id}")
  .onUpdate(odu.onDocUpdated);
exports.onBatchUpdated = functions.firestore
  .document("/batches/{id}")
  .onUpdate(odu.onDocUpdated);
exports.onTeacherUpdated = functions.firestore
  .document("/teachers/{id}")
  .onUpdate(odu.onDocUpdated);

exports.onStudentDeleted = functions.firestore
  .document("/students/{id}")
  .onDelete(odd.onDocDeleted);
exports.onBatchDeleted = functions.firestore
  .document("/batches/{id}")
  .onDelete(odd.onDocDeleted);
exports.onTeacherDeleted = functions.firestore
  .document("/teachers/{id}")
  .onDelete(odd.onDocDeleted);

const { google } = require("googleapis");
const calendar = google.calendar("v3");
//const functions = require('firebase-functions');
const googleCredentials = require("./credentials.json");
const OAuth2 = google.auth.OAuth2;

const ERROR_RESPONSE = {
  status: "500",
  message: "There was an error adding an event to your Google calendar",
};
const TIME_ZONE = "EST";

const addEvent = (event, auth) => {
  return new Promise(function (resolve, reject) {
    calendar.events.insert(
      {
        auth: auth,
        calendarId: "primary",
        resource: {
          summary: event.eventName,
          description: event.description,
          start: {
            dateTime: event.startTime,
            timeZone: TIME_ZONE,
          },
          end: {
            dateTime: event.endTime,
            timeZone: TIME_ZONE,
          },
        },
      },
      (err, res) => {
        if (err) {
          console.log("Rejecting because of error");
          reject(err);
        }
        console.log("Request successful");
        resolve(res.data);
      }
    );
  });
};

exports.addEventToCalendar = functions.https.onRequest((request, response) => {
  const eventData = {
    eventName: request.body.eventName,
    description: request.body.description,
    startTime: request.body.startTime,
    endTime: request.body.endTime,
  };
  console.log("Event Data: ", eventData);
  const oAuth2Client = new OAuth2(
    googleCredentials.web.client_id,
    googleCredentials.web.client_secret,
    googleCredentials.web.redirect_uris[0]
  );

  oAuth2Client.setCredentials({
    refresh_token: googleCredentials.refresh_token,
  });

  addEvent(eventData, oAuth2Client)
    .then((data) => {
      response.status(200).send(data);
      return;
    })
    .catch((err) => {
      console.error("Error adding event: " + err.message);
      response.status(500).send(ERROR_RESPONSE);
      return;
    });
});
