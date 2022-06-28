//const onDocCreated = require("./myFunctions/onDocCreated");
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
let theKeys = Object.keys(odc);
console.log("exported fields are:", JSON.stringify(theKeys));
exports.onStudentCreate = functions.firestore
  .document("/students/{id}")
  .onCreate(odc.onDocCreated);
exports.onBatchCreate = functions.firestore
  .document("/batches/{id}")
  .onCreate(odc.onDocCreated);
exports.onTeacherCreate = functions.firestore
  .document("/teachers/{id}")
  .onCreate(odc.onDocCreated);

// exports.onStudentUpdated = functions.firestore
//   .document("/students/{id}")
//   .onUpdate(onDocUpdated);
// exports.onBatchUpdated = functions.firestore
//   .document("/batches/{id}")
//   .onUpdate(onDocUpdated);
// exports.onTeacherUpdated = functions.firestore
//   .document("/teachers/{id}")
//   .onUpdate(onDocUpdated);

// exports.onStudentDeleted = functions.firestore
//   .document("/students/{id}")
//   .onDelete(onDocDeleted);
// exports.onBatchDeleted = functions.firestore
//   .document("/batches/{id}")
//   .onDelete(onDocDeleted);
// exports.onTeacherDeleted = functions.firestore
//   .document("/teachers/{id}")
//   .onDelete(onDocDeleted);
