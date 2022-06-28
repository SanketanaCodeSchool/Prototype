const functions = require("firebase-functions");
const admin = require("firebase-admin");
const FieldValue = admin.firestore.FieldValue;
const db = admin.firestore();



const addEventToCalendar = require("./addEventToCalendar");


module.exports.onDocUpdated = async (snap, context) => {
  const values = snap.after.data();
  console.log(values);

  const collectionName = snap.after.ref.parent.id;
  console.log("Added ", values, "to Collection Name:", collectionName);

  if (collectionName == "batches") {
    if (values.isScheduled == true) {
      console.log("Batch Scheduled");
      // ({
      //   "eventName": "Firebase Event",
      //   "description": "This is a sample description",
      //   "startTime": "2018-12-01T10:00:00",
      //   "endTime": "2018-12-01T13:00:00"
      // })
      
    } else {
      console.log("Batch Unscheduled");
    }
  }

  return db.collection(`${collectionName}_history`).add({
    ...values,
    updated_at: admin.firestore.FieldValue.serverTimestamp(),
  });
}

