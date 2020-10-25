//WELCOME
console.log("getAdvice.js is running");
console.log("========================");

//====MODAL CONFIG=====
//Set up modal
let myModal = document.getElementById("myModal");
let closeModalButton = document.getElementsByClassName("modalClose")[0];
closeModalButton.onclick = function () {
  this.parentElement.style.display = "none";
};
const ProfileCardHTML = ({ name, role, imageURL, bio, years }) => {
  let bioText = ``;
  bio.forEach((value) => (bioText += `<li>${value}</li>`));
  return `<div class="card-container">
  <img class="round" src=${imageURL} />
  <h3>${name}</h3>
  <h6> ${years}+ years experience</h6>
  <p>${role}</p>
  <div class="skills">
    <h6>Bio</h6>
    <ul>
      ${bioText}
    </ul>
  </div>
</div>`;
};
//Function open Modal with nothing
const openModalWithNothing = function (data) {
  myModal.innerHTML = ProfileCardHTML(data);
  myModal.parentElement.style.display = "flex";
};
//Function open Modal by imageURL
const openModalWithImage = function (imageURL) {
  myModal.innerHTML = "";
  myModal.parentElement.style.display = "flex";
  let image = document.createElement("img");
  image.src = imageURL;
  myModal.appendChild(image);
};
//====END MODAL CONFIG=====

const famousPeople = [
  {
    name: "Hoàn",
    role: "Web Developer",
    isOnline: false,
  },
  {
    name: "Thịnh",
    role: "Web Developer",
    isOnline: true,
  },
  {
    name: "Kiên",
    role: "Designer",
    isOnline: true,
  },
  {
    name: "Phong",
    role: "Desinger",
    isOnline: false,
  },
  {
    name: "Trung",
    role: "Designer",
    isOnline: true,
  },
  {
    name: "Quân",
    role: "Web Developer",
    isOnline: false,
  },
  {
    name: "Tùng",
    role: "Web Developer",
    isOnline: true,
  },
  {
    name: "Sơn",
    role: "Web Developer",
    isOnline: false,
  },
];
//==== RENDER ALL  =====
const sections = {
  allPeopleReadyForYou: "allPeopleReadyForYou",
  allOnlinePeople: "allOnlinePeople",
  allPeopleMaySuitWithYou: "allPeopleMaySuitWithYou",
  allOfflinePeople: "allOfflinePeople",
};

const yourDesireRole = "Web Developer";

const RenderProfileCard = function ({ name, role, isOnline, imageURL }) {
  return ` 
          <div class="our-team ${isOnline ? "online" : null}">
              <div class="picture">
              <img
                  class="img-fluid"
                  src=${
                    imageURL === undefined
                      ? "https://picsum.photos/130/130?image=1027"
                      : imageURL
                  }
              />
              </div>
              <div class="team-content">
                  <h3 class="name">${name}</h3>
                  <h4 class="title">${role}</h4>
              </div>
              <ul class="social">
                  <li class="openChatModal">
                      <i class="fas fa-comment-dots"></i>
                      Nhắn tin
                  </li>
                  <li class="openProfileCard" data-email="${name}">
                      <i class="fas fa-user"></i>
                      Thông tin 
                  </li>
              </ul>
          </div>`;
};

const showProfileCardInSection = function (sectionID, data) {
  let filterData;
  switch (sectionID) {
    case "allPeopleReadyForYou":
      filterData = data.filter(
        (value) => value.role === yourDesireRole && value.isOnline === true
      );
      break;
    case "allOnlinePeople":
      filterData = data.filter(
        (value) => value.isOnline === true && value.role !== yourDesireRole
      );
      break;
    case "allPeopleMaySuitWithYou":
      filterData = data.filter(
        (value) => value.role === yourDesireRole && value.isOnline === false
      );
      break;
    case "allOfflinePeople":
      filterData = data.filter(
        (value) => value.role !== yourDesireRole && value.isOnline === false
      );
      break;
    default:
      break;
  }
  let sectionDOM = document.getElementById(sectionID);
  sectionDOM.innerHTML = ``;
  filterData.map((value) => {
    sectionDOM.innerHTML += RenderProfileCard(value);
  });
};

const ShowOnlineUserData = async function () {
  await controller.getStatusData("online");
  console.log(model.onlineData.data);
};

// Selection Role Your Like and Online
showProfileCardInSection(sections.allPeopleReadyForYou, famousPeople);

// Selection Online
showProfileCardInSection(sections.allOnlinePeople, famousPeople);

// Selection Role Your Like but Ofline
showProfileCardInSection(sections.allPeopleMaySuitWithYou, famousPeople);

//Other People
showProfileCardInSection(sections.allOfflinePeople, famousPeople);

//LOGOUT HANDLE
let logOut = document.getElementById("logOut");
logOut.onclick = () => {
  controller.logOut();
};
let FakeData = [];
async function ShowAllUserData() {
  //Get user data
  try {
    await controller.getDataByOptions(collections.USER_COLLECTION, "all");

    //Fake online offline
    model.dataGetByOptions.map((value) => {
      let randomFactor = Math.random() * 10;
      FakeData.push({ ...value, isOnline: randomFactor > 5 ? true : false });
    });
    ShowAllUserStatus();
  } catch (err) {
    console.log(err);
  }
}

ShowAllUserData();
//Fake online offline
setInterval(() => {
  let randomNumber = Math.round(Math.random() * (FakeData.length - 1));
  console.log(FakeData);
  console.log(randomNumber);
  FakeData[randomNumber].isOnline = !FakeData[randomNumber].isOnline;
  ShowAllUserStatus();
}, 10000);
function ShowAllUserStatus() {
  showProfileCardInSection(sections.allOnlinePeople, FakeData);
  showProfileCardInSection(sections.allOfflinePeople, FakeData);
  showProfileCardInSection(sections.allPeopleMaySuitWithYou, FakeData);
  showProfileCardInSection(sections.allPeopleReadyForYou, FakeData);

  //OPEN MODAL WHEN CLICK BUTTON
  let openProfileCards = document.getElementsByClassName("openProfileCard");
  let openChatModals = document.getElementsByClassName("openChatModal");

  for (let openProfileCard of openProfileCards) {
    openProfileCard.onclick = () => {
      console.log(openProfileCard.getAttribute("data-email"));
      let newFakeData = FakeData.filter(
        (item) => item.name === openProfileCard.getAttribute("data-email")
      );
      console.log(newFakeData);
      openModalWithNothing(newFakeData[0]);
    };
  }

  for (let openChatModal of openChatModals) {
    openChatModal.onclick = () =>
      openModalWithImage(`../../images/chatModal.png`);
  }
}
