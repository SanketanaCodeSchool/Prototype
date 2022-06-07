const functions = require("firebase-functions");
const admin = require("firebase-admin");
const FieldValue = admin.firestore.FieldValue;

admin.initializeApp();
const db = admin.firestore();

//exports.onStudentCreate = functions.firestore.document('/students/{id}').onCreate(onDocCreated);
//exports.onBatchCreate = functions.firestore.document('/batches/{id}').onCreate(onDocCreated);
//exports.onTeacherCreate = functions.firestore.document('/teachers/{id}').onCreate(onDocCreated);

async function onDocCreated(snap, context) {
  const values = snap.data();
  console.log(values);

  const collectionName = snap.ref.parent.id; 
  console.log("Added ", values, "to Collection Name:", collectionName)

  return db.collection(`${collectionName}_history`).add({...values,
    created_at: admin.firestore.FieldValue.serverTimestamp(),
  });
}

//exports.onStudentUpdated = functions.firestore.document('/students/{id}').onUpdate(onDocUpdated);
//exports.onBatchUpdated = functions.firestore.document('/batches/{id}').onUpdate(onDocUpdated);
//exports.onTeacherUpdated = functions.firestore.document('/teachers/{id}').onUpdate(onDocUpdated);

async function onDocUpdated(snap, context) {
  const values = snap.after.data();
  console.log(values);

  const collectionName = snap.after.ref.parent.id; 
  console.log("Added ", values, "to Collection Name:", collectionName)

  return db.collection(`${collectionName}_history`).add({
    ...values,
    updated_at: admin.firestore.FieldValue.serverTimestamp(),
  });
}

//exports.onStudentDeleted = functions.firestore.document('/students/{id}').onDelete(onDocDeleted);
//exports.onBatchDeleted = functions.firestore.document('/batches/{id}').onDelete(onDocDeleted);
//exports.onTeacherDeleted = functions.firestore.document('/teachers/{id}').onDelete(onDocDeleted);

async function onDocDeleted(snap, context) {
  const values = snap.data();
  console.log(values);

  const collectionName = snap.ref.parent.id; 
  console.log("Added ", values, "to Collection Name:", collectionName)

  return db.collection(`${collectionName}_history`).add({
    ...values,
    deleted_at: admin.firestore.FieldValue.serverTimestamp(),
  });
}

