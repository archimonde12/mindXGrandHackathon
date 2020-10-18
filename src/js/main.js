firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    model.setCurrentUser(user);
    let nowScreen = data.getLastScreenName();
    console.log(nowScreen);
    if (nowScreen === screens.getAdvice) {
      view.renderScreen(screens.getAdvice);
    } else {
      view.showScreen(screens.getAdvice);
    }
  } else {
    // User is signed out.
    // ...
  }
});

console.log("main");
