const roadmapImageURL={
  data_sientist:'../../images/TopSkillForDataSientists.png',
  moblie_app_developer:'../../images/TopSkillForMoblieAppDevelopers.png',
  sofware_enginner:'../../images/TopSkillForSoftwareEnginner.png',
  ui_designer:'../../images/TopSkillForUIDesigner.png',
}

let data_sientist=document.getElementById('data-sientist') 
let moblie_app_developer=document.getElementById('mobile-app-developer')
let sofware_enginner=document.getElementById('software-enginner')
let ui_designer=document.getElementById('ui-designer')

//Set up modal
let myModal=document.getElementById('myModal')
let closeModalButton=document.getElementsByClassName('modalClose')[0]
closeModalButton.onclick=function(){
  this.parentElement.style.display='none'
}
//Function open Modal by imageURL
const openModalWithImage=function(imageURL){
  myModal.innerHTML=''
  myModal.parentElement.style.display='flex'
  let image=document.createElement('img')
  image.src=imageURL
  myModal.appendChild(image)
}

//Set Open Modal by Clicking On Answers
data_sientist.onclick=()=>openModalWithImage(roadmapImageURL.data_sientist)
moblie_app_developer.onclick=()=>openModalWithImage(roadmapImageURL.moblie_app_developer)
sofware_enginner.onclick=()=>openModalWithImage(roadmapImageURL.sofware_enginner)
ui_designer.onclick=()=>openModalWithImage(roadmapImageURL.ui_designer)

// Navigation
let navigationButton=document.getElementsByClassName('navigationButton')[0]
navigationButton.onclick=()=>{data.setWannaSignup(1);view.showScreen(screens.authentication)}