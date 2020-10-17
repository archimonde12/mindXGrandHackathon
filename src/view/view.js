const view = {};
const screens = {
  WhyChoiceScreen: "whyChoice",
  Answer: "answer",
  IsSuitWithYou: "isSuitWithYou",
  quiz: "quiz",
  authentication: "authentication",
  getAdvice: "getAdvice",
};

view.showScreen = function (screen) {
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
    default:
      break;
  }
};
