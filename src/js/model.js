console.log("model.js is running");
console.log("===================")
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
model.getCurrentUserInfo = () => model.currentUser;

model.onlineData = {
  data: [],
  set: function ({ emails }) {
    model.onlineData.data = emails;
  },
  get: () => model.onlineData.data,
  show: () => {
    const onlineData=model.onlineData.data
    if (onlineData.length === 0) {
      console.error(
        "Lỗi: chưa thực hiện tải dữ liệu về=> sử dụng hàm  controller.getStatusData('online')"
      );
      return;
    } else {
      console.log('Danh sách email online:')
      onlineData.map((onlineEmail, index) =>
        console.log(`${index + 1} - ${onlineEmail}`)
      );
      console.log(`Tổng cộng có: ${onlineData.length} email đang online`)
    }
  },
};
model.offlineData = {
  data: [],
  set: function ({ emails }) {
    model.offlineData.data = emails;
  },
  get: () => model.offlineData.data,
  show: () => {
    const offlineData=model.offlineData.data
    if (offlineData.length === 0) {
      console.error(
        "Lỗi: chưa thực hiện tải dữ liệu về=> sử dụng hàm controller.getStatusData('offline')"
      );
      return;
    } else {
      console.log('Danh sách email online:')
      offlineData.map((onlineEmail, index) =>
        console.log(`${index + 1} - ${onlineEmail}`)
      );
      console.log(`Tổng cộng có: ${offlineData.length} email đang offline`)
    }
  },
};


