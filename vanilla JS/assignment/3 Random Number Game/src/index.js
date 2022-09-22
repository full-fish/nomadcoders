function enventHandleFormSubmit(e) {
  e.preventDefault();
  let randomNum = Math.floor(Math.random() * (Number(rangeNum.value) + 1));
  if (Number(guessNum.value) === randomNum) {
    gameResult.textContent = "You win!";
    winCount++;
  } else gameResult.textContent = "You lost!";
  gameResult.classList.remove("hidden");

  allCount++;
  forecastProbability = 1 / (Number(rangeNum.value) + 1);
  realProbability = winCount / allCount;
  3;
  youCoice.textContent = `You chose : ${guessNum.value}, the machine chose : ${randomNum}, All count : ${allCount}, Win count : ${winCount}, 
  forecastProbability : ${forecastProbability}, realProbability : ${realProbability}`;
  youCoice.classList.remove("hidden");
}

let rangeNum = document.querySelector(".rangeNum");
let guessNum = document.querySelector(".guessNum");
let playBtn = document.querySelector(".playBtn");
let form = document.querySelector(".form");
let youCoice = document.querySelector(".youCoice");
let gameResult = document.querySelector(".gameResult");
let err = document.querySelector(".err");
let allCount = 0,
  winCount = 0;
let forecastProbability = 0,
  realProbability = 0;

form.addEventListener("submit", enventHandleFormSubmit);
