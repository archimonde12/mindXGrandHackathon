const WHY_ANSWER = "whyYouChoiceIT";
const QUIZZ_SCORE="QuizzScore"
const data = {};

data.setWhyAnswerValue = (value) => {
  let saveValue = JSON.stringify(value);
  localStorage.setItem(WHY_ANSWER, saveValue);
};

data.getWhyAnswerValue = () => {
  let getValue = JSON.parse(localStorage.getItem(WHY_ANSWER));
  return getValue;
};

data.setQuizzScore = (value) => {
  let saveValue = JSON.stringify(value);
  localStorage.setItem(QUIZZ_SCORE, saveValue);
};

data.getWhyAnswerValue = () => {
  let getValue = JSON.parse(localStorage.getItem(QUIZZ_SCORE));
  return getValue;
};
