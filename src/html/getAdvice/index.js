//====MODAL CONFIG=====
//Set up modal
let myModal=document.getElementById('myModal')
let closeModalButton=document.getElementsByClassName('modalClose')[0]
closeModalButton.onclick=function(){
  this.parentElement.style.display='none'
}
const ProfileCardHTML=`<div class="card-container">
<span class="pro">PRO</span>
<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
<h3>Ricky Park</h3>
<h6>New York</h6>
<p>User interface designer and <br/> front-end developer</p>
<div class="buttons">
  <button class="primary">
    Message
  </button>
  <button class="primary ghost">
    Following
  </button>
</div>
<div class="skills">
  <h6>Skills</h6>
  <ul>
    <li>UI / UX</li>
    <li>Front End Development</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Node</li>
  </ul>
</div>
</div>`
//Function open Modal with nothing
const openModalWithNothing=function(){
  myModal.innerHTML=ProfileCardHTML
  myModal.parentElement.style.display='flex'
}
//Function open Modal by imageURL
const openModalWithImage=function(imageURL){
  myModal.innerHTML=''
  myModal.parentElement.style.display='flex'
  let image=document.createElement('img')
  image.src=imageURL
  myModal.appendChild(image)
}
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
                  <li class="openChatModal">
                      <i class="fas fa-comment-dots"></i>
                      Nhắn tin
                  </li>
                  <li class="openProfileCard">
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
  
//LOGOUT HANDLE

let logOut=document.getElementById('logOut')
logOut.onclick=()=>{controller.logOut()}

//RENDER


let openProfileCards =document.getElementsByClassName('openProfileCard')
let openChatModals =document.getElementsByClassName('openChatModal')

for(let openProfileCard of openProfileCards){
  openProfileCard.onclick=()=>openModalWithNothing()
}

for(let openChatModal of openChatModals){
  openChatModal.onclick=()=>openModalWithImage(`../../images/chatModal.png`)
}