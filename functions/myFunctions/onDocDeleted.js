const functions = require("firebase-functions");
const admin = require("firebase-admin");
const FieldValue = admin.firestore.FieldValue;
const db = admin.firestore();




module.exports.onDocDeleted = async (snap, context) => {
  const values = snap.data();
  console.log(values);

  const collectionName = snap.ref.parent.id;
  console.log("Added ", values, "to Collection Name:", collectionName);

  return db.collection(`${collectionName}_history`).add({
    ...values,
    deleted_at: admin.firestore.FieldValue.serverTimestamp(),
  });
}

