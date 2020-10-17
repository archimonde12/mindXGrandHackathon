let whyChoice = data.getWhyAnswerValue();

let title = document.getElementById("title");
let fact = document.getElementById("fact");
let backButton = document.getElementById("backButton");
let nextButton = document.getElementById("nextButton");

let dataRender = {
  title: "",
  fact: "",
  back: "",
  next: "",
};

switch (whyChoice) {
  case "1":
    dataRender = {
      title: "Thực tế: SỰ ĐAM MÊ TRONG NGÀNH CNTT",
      fact: `Nhiều bạn thích ngồi máy tính chơi game, lướt web, thích dùng đồ công nghệ, thích ngành công nghệ thông tin nên lầm tưởng là mình cũng đam mê lập trình nên cắm đầu vào ngành công nghệ thông tin.
      <br><br>Thật ra, lập trình chỉ là một trong vô vàn công việc trong ngành IT (Bên cạnh đó là những việc khác như tester, BA, cài win bấm cáp dạo). Lập trình viên là người viết code để giải quyết vấn đề của công ty, của khách hàng.<br>Muốn biết mình có thật sự đam mê lập trình hay không, cách tốt nhất chính là … cắm đầu vào học lập trình xem mình có cảm thấy thích thú hay không?

      <br><br>Nếu bạn có thể nhồi vào đầu vô số những thuật ngữ nhàm chán (hàm, biến, con trỏ, đệ qui ….), có thể ngồi 2, 3 tiếng đồng hồ để giải những bài lập trình khó, tức là bạn đủ kiên nhẫn để theo lập trình.<br>Câu hỏi “Liệu mình có đam mê lập trình hay không”, chỉ có bản thân bạn mới có thể trả lời được!`,
      back: "Điều đó là sự thật sao, tôi nghĩ lý do của tôi là điều khác",
      next: "Tôi biết điều đó! Tôi tin là mình đam mê thật sự!",
    };
    break;
  case "2":
    dataRender = {
      title: "thực tế:Lương bổng trong ngành CNTT",
      fact: "fact2",
      back: "",
      next: "",
    };
    break;
  case "3":
    dataRender = {
      title: "thực tế:TƯ DUY LOGIC TRONG NGÀNH LẬP TRÌNH",
      fact: "fact2",
      back: "",
      next: "",
    };
    break;
  case "4":
    dataRender = {
      title: "thực tế   :TRIỂN VỌNG TRONG NGÀNH LẬP TRÌNH",
      fact: "fact3",
      back: "",
      next: "",
    };
    break;
  default:
    break;
}

title.textContent = `${dataRender.title}`;
fact.innerHTML = dataRender.fact;
backButton.textContent = dataRender.back;
nextButton.textContent = dataRender.next;

backButton.onclick = () => {
  view.showScreen(screens.WhyChoiceScreen);
};
nextButton.onclick = () => {
  view.showScreen(screens.IsSuitWithYou);
};
