

  let spentTime1 = Date.now();
  console.log(
    "The spent time after the reference time in the milliseconds is : " +
      spentTime1
  );
  //   console.log('Time difference'+ (satisfies-spentTime));

  // lets make a clock
  function Timeupdate() {
    time.innerHTML = new Date();
  }
  setInterval(Timeupdate, 1000);

const data = [
  {
    id: 1,
    question: "1. Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "Jellyfish", isCorrect: false },
      { answer: "Starfish", isCorrect: false },
      { answer: "catfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "2. A flutter is a group of :?",
    answers: [
      { answer: "Bees", isCorrect: false },
      { answer: "Penguins", isCorrect: false },
      { answer: "Buffalo", isCorrect: false },
      { answer: "Butterflies", isCorrect: true },
    ],
  },
  {
    id: 3,
    question: "3. A goup of which animals referred as the wake?",
    answers: [
      { answer: "Bat", isCorrect: true },
      { answer: "Vulture", isCorrect: true },
      { answer: "Ants", isCorrect: false },
      { answer: "Peacock", isCorrect: false },
    ],
  },
];
const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");
// const gameScreen = document.querySelector(".game");

let qIndex = 0;
let CorrectCount = 0;
let WrongCount = 0;
let total = 0;
let selectedAnswer;
const playAgain = () => {
  qIndex = 0;
  CorrectCount = 0;
  WrongCount = 0;
  total = 0;
  selectedAnswer;
  showQuestion(qIndex);
};
play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${CorrectCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${WrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (CorrectCount - WrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        ` 
        
        <div class="answer">
                        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
                        <label for=${index}>${item.answer}</label>
         </div>
        
        
         `
    )
    .join("");
  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};
const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? CorrectCount++ : WrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};
showQuestion(qIndex);
submitAnswer();
