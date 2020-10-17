const famousPeople = [
  {
    name: "Hoàn",
    role: "Web Developer",
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
const yourDesireRole = "Web Developer";
const RenderProfileCard = function ({ name, role, isOnline }) {
  return ` 
          <div class="our-team ${isOnline ? "online" : null}">
              <div class="picture">
              <img
                  class="img-fluid"
                  src="https://picsum.photos/130/130?image=1027"
              />
              </div>
              <div class="team-content">
                  <h3 class="name">${name}</h3>
                  <h4 class="title">${role}</h4>
              </div>
              <ul class="social">
                  <li>
                      <i class="fas fa-comment-dots"></i>
                      Nhắn tin
                  </li>
                  <li>
                      <i class="fas fa-user"></i>
                      Thông tin 
                  </li>
              </ul>
          </div>`;
};

// Filter Role Your Like and Online
let PeopleReadyForYou = famousPeople.filter(
  (value) => value.role === yourDesireRole && value.isOnline === true
);
let allPeopleReadyForYou = document.getElementById("allPeopleReadyForYou");
PeopleReadyForYou.map((value) => {
  allPeopleReadyForYou.innerHTML += RenderProfileCard(value);
});

// Filter Online
let OnlinePeople = famousPeople.filter(
  (value) => value.isOnline === true && value.role !== yourDesireRole
);
let allOnlinePeople = document.getElementById("allOnlinePeople");
OnlinePeople.map((value) => {
  allOnlinePeople.innerHTML += RenderProfileCard(value);
});

// Filter Role Your Like but Ofline
let PeopleMaySuitWithYou = famousPeople.filter(
  (value) => value.role === yourDesireRole && value.isOnline === false
);
let allPeopleMaySuitWithYou = document.getElementById(
  "allPeopleMaySuitWithYou"
);
PeopleMaySuitWithYou.map((value) => {
  allPeopleMaySuitWithYou.innerHTML += RenderProfileCard(value);
});

//Other People
let OfflinePeople = famousPeople.filter(
  (value) => value.role !== yourDesireRole && value.isOnline === false
);

let allOfflinePeople = document.getElementById(
    "allOfflinePeople"
  );
  OfflinePeople.map((value) => {
    allOfflinePeople.innerHTML += RenderProfileCard(value);
  });
  
