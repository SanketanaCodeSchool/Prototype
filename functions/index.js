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

