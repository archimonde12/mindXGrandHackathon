const questions = [
  {
    id: 1,
    question:
      "Trong hầu hết các ngôn ngữ lập trình, hành động ++ tương đương với việc +=1",
    correct_answer: "Đúng",
    incorrect_answers: ["Sai"],
  },

  {
    id: 2,
    question: "RAM là viết tắt của Random Access Memory",
    correct_answer: "Đúng",
    incorrect_answers: ["Sai"],
  },
  {
    id: 3,
    question: "Linus Torvalds tạo ra Linux và Git.",
    correct_answer: "Đúng",
    incorrect_answers: ["Sai"],
  },
  {
    id: 4,
    question:
      "Trong Công Nghệ Thông Tin học giỏi là được kĩ năng giao tiếp cũng không quan trọng lắm",
    correct_answer: "Đúng",
    incorrect_answers: ["Sai"],
  },
  {
    id: 5,
    question:
      "Giỏi Tiếng Anh là điều không cần thiết khi học Công Nghệ Thông Tin",
    correct_answer: "Đúng",
    incorrect_answers: ["Sai"],
  },
];

const CreateAnswer = function ({ correct_answer, incorrect_answers }) {
  return `
      <div class="answer"  data-value="${1}">
        ${correct_answer}
      </div>
      <div class="answer"  data-value="${0}">
        ${incorrect_answers[0]}
      </div>
  `;
};

let step = 1;
let question = document.getElementById("question");
let answers = document.getElementById("answers");

let PrintAnswers = function () {
  console.log(step);
  if (step < questions.length + 1) {
    question.innerHTML = `Câu hỏi ${questions[step - 1].id}: ${
      questions[step - 1].question
    }`;
    answers.innerHTML = CreateAnswer(questions[step - 1]);
    let answerDOM = document.getElementsByClassName("answer");
    for (let answer of answerDOM) {
      answer.onclick = function () {
        console.log(this.getAttribute('data-value'));
        step++;
        PrintAnswers();
      };
    }
  }
};

PrintAnswers();
