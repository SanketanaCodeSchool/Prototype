const admin = require("firebase-admin");
const db = admin.firestore();

module.exports.onDocCreated = async (snap, context) => {
  const values = snap.data();
  console.log(values);

  const collectionName = snap.ref.parent.id;
  console.log("Added ", values, "to Collection Name:", collectionName);

  return db.collection(`${collectionName}_history`).add({
    ...values,
    created_at: admin.firestore.FieldValue.serverTimestamp(),
  });
}




