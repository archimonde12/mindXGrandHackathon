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

data.setQuizzScore(0)
let step = 1;
let score=0
let question = document.getElementById("question");
let answers = document.getElementById("answers");

let PrintAnswers = function () {
  if (step < questions.length + 1) {
    question.innerHTML = `Câu hỏi ${questions[step - 1].id}: ${
      questions[step - 1].question
    }`;
    answers.innerHTML = CreateAnswer(questions[step - 1]);
    let answerDOM = document.getElementsByClassName("answer");
    for (let answer of answerDOM) {
      answer.onclick = function () {
        score+=Number(this.getAttribute('data-value'));
        data.setQuizzScore(score)
        step++;
        PrintAnswers();
      };
    }
  }
  else{
    console.log('your total score:',score)
    question.innerHTML=`Số điểm của bạn ${score}<br>${score>2?'Bạn phù hợp với lập trình':'Bạn cần bổ sung thêm kiến thức!Bạn chưa thật sự sẵn sàng đâu!'}`
    answers.innerHTML=` <div class="answer"  data-value="${1}">Xem lộ trình phù hợp với tôi</div>`
    let answerDOMs = document.getElementsByClassName("answer");
    answerDOMs[0].onclick=()=>view.showScreen(screens.roadmap)
    console.log(answerDOMs[0].onclick)
  }
};

PrintAnswers();
