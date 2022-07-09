const admin = require("firebase-admin");
const db = admin.firestore();

//const addEventToCalendar = require("./addEventToCalendar");

module.exports.onDocUpdated = async (snap, context) => {
  const values = snap.after.data();
  console.log(values);

  const collectionName = snap.after.ref.parent.id;
  console.log("Added ", values, "to Collection Name:", collectionName);

  if (collectionName == "batches") {
    if (values.isScheduled == true) {
      console.log("Batch Scheduled");

      const { google } = require("googleapis");
      const calendar = google.calendar("v3");
      //const functions = require('firebase-functions');
      const googleCredentials = require("./credentials.json");
      const OAuth2 = google.auth.OAuth2;

      const ERROR_RESPONSE = {
        status: "500",
        message: "There was an error adding an event to your Google calendar",
      };
      const TIME_ZONE = "IST";

      // const event = {
      //   eventName: values.batch_id,//"Firebase Event",
      //   description: values.teacher_name +  values.course_name + values.category,
      //   startTime: values.start_date+"T"+values.schedule[0].time+":00",//"2022-06-30T10:00:00",
      //   endTime: "2022-06-30T13:00:00",//values.start_date+"T"+values.schedule[0].time,
      // };
      
      const event = {
        eventName: "Firebase Event",
        description: "TESssssT",
        location: '800 Howard St., San Francisco, CA 94103',
        startTime: "2022-07-20T10:00:00",
        endTime: "2022-07-20T13:00:00",//values.start_date+"T"+values.schedule[0].time,
        
        
      };

      console.log("Event Data: ", event);
      const oAuth2Client = new OAuth2(
        googleCredentials.web.client_id,
        googleCredentials.web.client_secret,
        googleCredentials.web.redirect_uris[0]
      );

      oAuth2Client.setCredentials({
        refresh_token: googleCredentials.refresh_token,
      });
      calendar.events.insert(
        {
          auth: oAuth2Client,
          calendarId: "primary",
          resource: {
            summary: event.eventName,
            attendees: [
              {email: 'lpage@example.com'},
              {email: 'sbrin@example.com'},
            ],
            description: event.description,
            start: {
              dateTime: event.startTime,
              timeZone: TIME_ZONE,
            },
            end: {
              dateTime: event.endTime,
              timeZone: TIME_ZONE,
            },
            extendedProperties: {
              private: { key1: "value1" },
              shared: { key2: "value2" }
            },
          },

        },
        (err, res) => {
          if (err) {
            console.log("Rejecting because of error");
            //reject(err);
            console.log(err);
          }
          console.log("Request successful");
          //resolve(res.data);
        }
      );
    } else {
      console.log("Batch Unscheduled");
    }
  }

  return db.collection(`${collectionName}_history`).add({
    ...values,
    updated_at: admin.firestore.FieldValue.serverTimestamp(),
  });
};