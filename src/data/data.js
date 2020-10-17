const WHY_ANSWER = "whyYouChoiceIT";
const data = {};

data.setWhyAnswerValue = (value) => {
  let saveValue = JSON.stringify(value);
  localStorage.setItem(WHY_ANSWER, saveValue);
};

data.getWhyAnswerValue = () => {
  let getValue = JSON.parse(localStorage.getItem(WHY_ANSWER));
  return getValue;
};
