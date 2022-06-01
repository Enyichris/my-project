const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const ScoreEl = document.getElementById("score");


let score = JSON.parse(localStorage.getItem("score"));

if(!score) {
  score = 0;
}

ScoreEl.innerText = `score: ${score}`;


questionEl.innerText = `what is ${num1} multiply by ${num2}?`

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAns = +input.value

  if (userAns === correctAnswer){
      score++;
      updateLocalStorage()
  }else{
      score--;
      updateLocalStorage()
  }
});


function updateLocalStorage(){
localStorage.setItem('score', JSON.stringify(score));
}



