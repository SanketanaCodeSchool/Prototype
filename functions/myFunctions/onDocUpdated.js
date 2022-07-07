const admin = require("firebase-admin");
const db = admin.firestore();

//const addEventToCalendar = require("./addEventToCalendar");
const scheduleBatch = async (values) => {
  const writeResult = await admin
    .firestore()
    .collection("events")
    .add({
      event_id: values.batch_id + "_4",
      //duration: values.duration,
      object: {
        title: values.teacher_name + "'s batch",
        start: values.start_date,
        end: values.planned_end_date,
      },
    });
  console.log("Hi From Test Function!");
  console.log("values:", values);
  //console.log("writ", values);
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
