let controller = {};
const collections = {
  USER_COLLECTION: "users",
  STATUS_COLLECTION: "status",
};
const testUserData = {
  email: "hoan@gmail.com",
  isOnline: true,
  role: "Web Developer",
  years: 3,
  displayName: "Luu Hoan",
  likes: 0,
  bio: "",
};

const dataEmail = [
  {email:"hoan2@gmail.com",password:'123456'},
  {email:"hoan3@gmail.com",password:'123456'},
  {email:"hoan4@gmail.com",password:'123456'},
  {email:"hoan5@gmail.com",password:'123456'},
  {email:"hoan6@gmail.com",password:'123456'},
  {email:"hoan7@gmail.com",password:'123456'},
  {email:"hoan8@gmail.com",password:'123456'},
  {email:"hoan9@gmail.com",password:'123456'},
  {email:"hoan10@gmail.com",password:'123456'},
  {email:"hoan11@gmail.com",password:'123456'},
  {email:"hoan12@gmail.com",password:'123456'},
  {email:"hoan13@gmail.com",password:'123456'},
  {email:"hoan14@gmail.com",password:'123456'},
  {email:"hoan15@gmail.com",password:'123456'},
  {email:"hoan16@gmail.com",password:'123456'},
  {email:"hoan17@gmail.com",password:'123456'},
  {email:"hoan18@gmail.com",password:'123456'},
  {email:"hoan19@gmail.com",password:'123456'},
  {email:"hoan20@gmail.com",password:'123456'},
  {email:"hoan21@gmail.com",password:'123456'},
  {email:"hoan22@gmail.com",password:'123456'},
  {email:"hoan23@gmail.com",password:'123456'},
  {email:"hoan24@gmail.com",password:'123456'},
  {email:"hoan25@gmail.com",password:'123456'},
  {email:"hoan26@gmail.com",password:'123456'},
  {email:"hoan27@gmail.com",password:'123456'},
  {email:"hoan28@gmail.com",password:'123456'},
  {email:"hoan29@gmail.com",password:'123456'},
  {email:"hoan30@gmail.com",password:'123456'},
  {email:"hoan31@gmail.com",password:'123456'},
  {email:"hoan32@gmail.com",password:'123456'},
  {email:"hoan33@gmail.com",password:'123456'},
  {email:"hoan34@gmail.com",password:'123456'},
  {email:"hoan35@gmail.com",password:'123456'},
];
controller.logIn = async function (email, password, err_id) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    await controller.setOnlineStatus(email);
    view.showScreen(screens.getAdvice);
  } catch (e) {
    view.setText(err_id, e.message);
  }
};

controller.register = async function (email, password,displayName, err_id) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.displayName = displayName;
    await controller.setOnlineStatus(email);
    view.showScreen(screens.getAdvice);
  } catch (e) {
    view.setText(err_id, e.message);
  }
};

controller.logOut = async function () {
  try {
    let email = firebase.auth().currentUser.email;
    await controller.setOnlineStatus(email);
    await firebase.auth().signOut();
    view.showScreen(screens.main);
  } catch (e) {
    console.log(e);
  }
};

controller.addData = async function (collections, addData) {
  var db = firebase.firestore();
  db.collection(collections)
    .add(addData)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

controller.getData = async function (collections, email) {
  var db = firebase.firestore();
  db.collection(collections)
    .where("email", "==", email)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
};

controller.updateData = async function (collections, doc, updateData) {
  var db = firebase.firestore();
  db.collection(collections)
    .doc(doc)
    .update(updateData)
    .then(function () {
      console.log("Document successfully updated!");
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};

firebase
  .firestore()
  .collection(collections.STATUS_COLLECTION)
  .doc("online")
  .onSnapshot(function (snapshot) {
    console.dir(snapshot);
  });

controller.setOnlineStatus = async function (email) {
  let offlineDocData = [];
  let onlineDocData = [];
  let onlineDocID = "online";
  let offlineDocID = "offline";

  var onlineDoc = firebase
    .firestore()
    .collection(collections.STATUS_COLLECTION)
    .doc(onlineDocID);
  var offlineDoc = firebase
    .firestore()
    .collection(collections.STATUS_COLLECTION)
    .doc(offlineDocID);
  //Get offline data
  offlineDocData = await offlineDoc.get();
  offlineDocData = offlineDocData.data().emails;
  //Check email is exist on Offline Doc Data
  if (offlineDocData.indexOf(email) < 0) {
    console.log("Không tồn tại email trong danh sách offline->GOOD");
  } else {
    offlineDocData.splice(offlineDocData.indexOf(email), 1);
    offlineDoc
      .set({ emails: offlineDocData })
      .then(() => console.log("Đẩy thành công"))
      .catch((error) => console.log(error));
  }
  //Get online data
  onlineDocData = await onlineDoc.get();
  onlineDocData = onlineDocData.data().emails;
  //Check email is exist on Online Doc Data
  if (onlineDocData.indexOf(email) < 0) {
    onlineDocData.push(email);
    onlineDoc
      .set({ emails: onlineDocData })
      .then(() => console.log("Xóa email khỏi Online thành công"))
      .catch((error) => console.log(error));
  } else {
    console.log("Đẩy dữ liệu Online thất bại");
  }
};

controller.setOfflineStatus = async function (email) {
  let offlineDocData = [];
  let onlineDocData = [];
  let onlineDocID = "online";
  let offlineDocID = "offline";

  var onlineDoc = firebase
    .firestore()
    .collection(collections.STATUS_COLLECTION)
    .doc(onlineDocID);
  var offlineDoc = firebase
    .firestore()
    .collection(collections.STATUS_COLLECTION)
    .doc(offlineDocID);
  //Get offline data
  onlineDocData = await onlineDoc.get();
  onlineDocData = onlineDocData.data().emails;
  //Check email is exist on Offline Doc Data
  if (onlineDocData.indexOf(email) < 0) {
    console.log("Không tồn tại email trong danh sách online->GOOD");
  } else {
    onlineDocData.splice(onlineDocData.indexOf(email), 1);
    onlineDoc
      .set({ emails: onlineDocData })
      .then(() => console.log("Xóa email khỏi Online thành công"))
      .catch((error) => console.log(error));
  }
  //Get online data
  offlineDocData = await offlineDoc.get();
  offlineDocData = offlineDocData.data().emails;
  //Check email is exist on Online Doc Data
  if (offlineDocData.indexOf(email) < 0) {
    offlineDocData.push(email);
    offlineDoc
      .set({ emails: offlineDocData })
      .then(() => console.log("Đẩy thành công"))
      .catch((error) => console.log(error));
  } else {
    console.log("Đẩy dữ liệu lên Offline thất bại");
  }
};

const randomData=function(data){
  data.map(async(value)=>{
    console.log(1)
    let random=Math.random()*10
    if(random>5){
      await controller.setOnlineStatus(value.email)
    }
    else await controller.setOfflineStatus(value.email)
  })
}