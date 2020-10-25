console.log("data.js is running");
console.log("===================");

const WHY_ANSWER = "whyYouChoiceIT";
const QUIZZ_SCORE = "QuizzScore";
const WANNA_SIGNUP = "wannaSignup";
const LAST_LOGIN_DATA = "lastLoginData";
const LAST_SCREEN_NAME = "lastScreenName";
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

data.getQuizzScore = () => {
  let getValue = JSON.parse(localStorage.getItem(QUIZZ_SCORE));
  return getValue;
};

data.setWannaSignup = (value) => {
  let saveValue = JSON.stringify(value);
  localStorage.setItem(WANNA_SIGNUP, saveValue);
};

data.getWannaSignup = () => {
  let getValue = JSON.parse(localStorage.getItem(WANNA_SIGNUP));
  return getValue;
};
data.setLastLoginData = (value) => {
  let saveValue = JSON.stringify(value);
  localStorage.setItem(LAST_LOGIN_DATA, saveValue);
};

data.getLastLoginDatasetLastLoginData = () => {
  let getValue = JSON.parse(localStorage.getItem(LAST_LOGIN_DATA));
  return getValue;
};

data.setLastScreenName = (value) => {
  let saveValue = JSON.stringify(value);
  localStorage.setItem(LAST_SCREEN_NAME, saveValue);
};

data.getLastScreenName = () => {
  let getValue = JSON.parse(localStorage.getItem(LAST_SCREEN_NAME));
  return getValue;
};

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + " roars.");
  }
}
