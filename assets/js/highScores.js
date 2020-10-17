//for appending to jumbotron
const highScoresJumbo = document.querySelector(".highScoresJumbo");
const list = document.createElement("ul");
list.setAttribute("class", "mb-3");
//the user name entered as an array
const names = Object.keys(localStorage);
//the user's score as an array
const scores = Object.values(localStorage);
//goBack button
const goBack = document.querySelector(".goBack");
let resetScores = document.querySelector(".resetScores");
//cheering sound on page--https://www.freesoundeffects.com/free-sounds/applause-10033/
const applauseSound = new Audio("./assets/sounds/applause2.wav");
applauseSound.play();

for (i = 0; i < names.length; i++) {
  let li = document.createElement("li");
  li.style.listStyle = "none";
  li.style.fontSize = "x-large";
  li.setAttribute("class", "grabToReset mr-5");
  li.innerHTML = names[i] + "'s score:     " + scores[i];
  list.appendChild(li);
}

//appends list to page
highScoresJumbo.appendChild(list);

//brings user to title screen
goBack.addEventListener("click", function () {
  window.location.href = "./index.html";
});
// resets scores
resetScores.addEventListener("click", function () {
  localStorage.clear();
  for (i = 0; i < names.length; i++) {
    resetText = document.querySelectorAll(".grabToReset");
    resetText[i].innerHTML = "";
  }
});
