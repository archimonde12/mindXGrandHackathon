let model = {};

model.setCurrentUser = function ({
  displayName,
  email,
  emailVerified,
  photoURL,
  uid,
}) {
  model.currentUser = { displayName, email, emailVerified, photoURL, uid };
};
console.log('model') 