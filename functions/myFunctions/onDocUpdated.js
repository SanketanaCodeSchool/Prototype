const { computeSegEndResizable } = require("@fullcalendar/react");
const { default: startOfDay } = require("date-fns/startOfDay");
const admin = require("firebase-admin");
const db = admin.firestore();

// batch

// call it 16 times

// insert 1 event

const insertEvent = (event) => {
  const { google } = require("googleapis");
  const calendar = google.calendar("v3");
  const googleCredentials = require("./credentials.json");
  const OAuth2 = google.auth.OAuth2;
  const ERROR_RESPONSE = {
    status: "500",
    message: "There was an error adding an event to your Google calendar",
  };
  const TIME_ZONE = "IST";

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
          { email: "test@example.com" },
          { email: "test@example.com" },
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
        console.log(err);
      } else {
        console.log("Request successful");
      }
    }
  );
};

const getDateTime = (date, time) => {
  const [year, month, day] = date.split("-"); 
  const [hours, minutes] = time.split(":");
  const seconds = "00";
  let new_date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);
  const dateTime = new_date.toISOString();
  return dateTime;
};

const scheduleBatch = (batch) => {
  batch = {
    teacher_name: null,
    planned_end_date: null,
    updatedby: "nWuleMgKPERrsPf10aJOq2CXgSQ2",
    course_name: null,
    level: "1",
    isScheduled: true,
    actual_end_date: null,
    schedule: [
      { duration: 60, time: "01:43", day: "Thursday" },
      { duration: 60, time: "11:49", day: "Tuesday" },
    ],
    batch_students: null,
    sessionCount: "4",
    createdby: "nWuleMgKPERrsPf10aJOq2CXgSQ2",
    category: null,
    status: null,
    start_date: "2022-07-12",
    batch_id: "S100",
  };
  let event;
  let ctr = batch.sessionCount;
  while (ctr != 0) {
    start_date = batch.start_date;

    const event = {
      eventName: batch.batch_id,
      description: batch.teacher_name + "'s batch.",
      startTime: getStartTime(),
      endTime: getEndTime(),
    };
    insertEvent(event);
    //return event;

    ctr--;
  }

  console.log("Event Data: ", event);
};

module.exports.onDocUpdated = async (snap, context) => {
  const values = snap.after.data();
  console.log(values);

  const collectionName = snap.after.ref.parent.id;
  console.log("Added ", values, "to Collection Name:", collectionName);

  if (collectionName == "batches") {
    if (values.isScheduled == true) {
      console.log("Batch Scheduled");
      scheduleBatch(values);
    } else {
      console.log("Batch Unscheduled");
    }
  }

  return db.collection(`${collectionName}_history`).add({
    ...values,
    updated_at: admin.firestore.FieldValue.serverTimestamp(),
  });
};



dayArray = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday" ,"Friday", "Saturday"]
obj = [{"day" : "Monday" , "time" : "22:00"} ,
  {"day" : "Thursday" , "time" : "12:00"},
  {"day" : "Thursday" , "time" : "13:00"},
{"day" : "Saturday" , "time" : "17:00"}];
start_date = new Date("2022-07-11");

sessionsCount = 16;

while(sessionsCount !== 0){



flag = true;
index = 0;
while(flag)
{
  dayIndex = start_date.getDay();
console.log(start_date.getDay());
day = dayArray[dayIndex];
console.log(day);

    if(obj[0]["day"] == day)
    {
          sessionsCount--;
          console.log(date)
    }
      
}

  
  
}














      