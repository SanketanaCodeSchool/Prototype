const { computeSegEndResizable } = require("@fullcalendar/react");
const admin = require("firebase-admin");
const db = admin.firestore();

const addEvent = (batch) => {
  console.log("BATCH DATA" , batch);
  const rosterArray = batch.schedule[0];
  console.log(rosterArray);
  

  const { google } = require("googleapis");
  const calendar = google.calendar("v3");
  const googleCredentials = require("./credentials.json");
  const OAuth2 = google.auth.OAuth2;

  const ERROR_RESPONSE = {
    status: "500",
    message: "There was an error adding an event to your Google calendar",
  };
  const TIME_ZONE = "IST";

  //  const event1 = {
  //     eventName: values.batch_id,//"Firebase Event",
  //     description: values.teacher_name +  values.course_name + values.category,
  //     startTime: values.start_date+"T"+values.schedule[0].time+":00",//"2022-06-30T10:00:00",
  //     endTime: "2022-06-30T13:00:00",//values.start_date+"T"+values.schedule[0].time,
  //   };


  
  const [year, month, day] = batch.start_date.split('-');
  const [hours, minutes] = rosterArray.time.split(':');
  const seconds = "00";
  let date = new Date(+year, + month - 1, +day, +hours, +minutes, +seconds);
  const startTime= date.toISOString();
  date = new Date(+year, + month - 1, +day, +hours, +minutes + rosterArray.duration, +seconds);
  const endTime = date.toISOString();

  
  const event = {
    eventName: "Firebase Event",
    description: "TESssssT",
    location: "800 Howard St., San Francisco, CA 94103",
    startTime: startTime , //rosterArray.start_date + "T" + rosterArray.time  + ":00",
    endTime: endTime, //"2022-07-20T13:00:00", //values.start_date+"T"+values.schedule[0].time,
    //endTime: rosterArray.start_date + "T" + rosterArray.time  + ":00",
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
        location: "800 Howard St., San Francisco, CA 94103",
        attendees: [
          { email: "lpage@example.com" },
          { email: "sbrin@example.com" },
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
};

module.exports.onDocUpdated = async (snap, context) => {
  const values = snap.after.data();
  console.log(values);

  const collectionName = snap.after.ref.parent.id;
  console.log("Added ", values, "to Collection Name:", collectionName);

  if (collectionName == "batches") {
    if (values.isScheduled == true) {
      console.log("Batch Scheduled");
      addEvent(values);
    } else {
      console.log("Batch Unscheduled");
    }
  }

  return db.collection(`${collectionName}_history`).add({
    ...values,
    updated_at: admin.firestore.FieldValue.serverTimestamp(),
  });
};
