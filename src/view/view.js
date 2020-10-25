console.log("view.js is running");
console.log("===================")
const view = {};
const screens = {
  WhyChoiceScreen: "whyChoice",
  Answer: "answer",
  IsSuitWithYou: "isSuitWithYou",
  quiz: "quiz",
  roadmap:"roadmap",
  authentication: "authentication",
  getAdvice: "getAdvice",
  main: "main",
};

view.showScreen = function (screen) {
  data.setLastScreenName(screen)
  switch (screen) {
    case "whyChoice":
      window.location = "../../html/whyChoice/whyChoice.html";
      break;
    case "answer":
      window.location = "../../html/answer/answer.html";
      break;
    case "isSuitWithYou":
      window.location = "../../html/isSuitWithYou/isSuitWithYou.html";
      break;
    case "quiz":
      window.location = "../../html/quiz/quiz.html";
      break;
    case "authentication":
      window.location = "../../html/authentication/authentication.html";
      break;
    case "getAdvice":
      window.location = "../../html/getAdvice/getAdvice.html";
      break;
    case "roadmap":
      window.location = "../../html/roadmap/roadmap.html";
      break;
    case "main":
      window.location = "../../html/main/index.html";
      break;
    default:
      break;
  }
};

view.renderScreen = async function (screen) {
  switch (screen) {
    case "getAdvice":
      //Welcome Text
      let welcomeText = `welcome, ${model.currentUser.displayName===null?model.currentUser.email:model.currentUser.displayName}`;
      view.setText("welcome-user", welcomeText);
      await controller.setOnlineStatus(model.currentUser.email);
      break;
    default:
      break;
  }
};

view.setText = function (id, text) {
  let element = document.getElementById(id);
  if (element === null) {
    console.log(`#${id} is not exist`);
  } else {
    element.innerHTML = text;
  }
};
