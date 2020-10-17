let answers = document.getElementsByClassName("answer");
for (let answer of answers) {
  answer.onclick = function () {
    data.setWhyAnswerValue(this.getAttribute("data-value"));
    let newValue=data.getWhyAnswerValue()
    window.location='../answer/answer.html'
  };
}
