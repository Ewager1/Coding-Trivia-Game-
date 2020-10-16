//for appending to jumbotron
const highScoresJumbo = document.querySelector(".highScoresJumbo");
const list = document.createElement("ul");
//the user name entered as an array
const names = Object.keys(localStorage);
//the user's score as an array
const scores = Object.values(localStorage);
//goBack button
const goBack = document.querySelector(".goBack");
const resetScores = document.querySelector(".resetScores");
//creates a list item dynamicaly and appends list item to list



for (i=0; i<names.length; i++){
    let li = document.createElement('li')
    li.style.listStyle = "none"
    li.style.fontSize = 'x-large'
    li.setAttribute('class', 'grabToReset')
    li.innerHTML = names[i] + "'s score:     " + scores[i];
    list.appendChild(li);
}

//appends list to page
highScoresJumbo.appendChild(list)

//brings user to title screen
goBack.addEventListener('click', function(){
    window.location.href = "/index.html"
})
// resets scores 
resetScores.addEventListener('click', function(){
    localStorage.clear();
    resetText = document.querySelectorAll('.grabToReset')
    for(i=0; i<3; i++)
    resetText[i].innerHTML = ''

})
