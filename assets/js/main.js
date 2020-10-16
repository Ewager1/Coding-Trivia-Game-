/* next  steps 
1. create event listener for submit button that console.logs the input. 
- it that works, move on to storage
- if not, look into creating a change event for input
6. style 
    a. title page
    b. questions
    c.high scores page
    d.add sound effects
    e. add favicon 
    f. add underlign for correct/inncorect
    g. center quizEnd section 
7. stretch goal: randomize questions, sounds, animations 
    -add lists to questions. Then, find real fase. then, fix logic to questions


/* assignment section */ 

//The jumbotron all data is held in
const jumbotron = document.querySelector('.jumbotron')
//class used for title screen elements that will become hidden
let titleSection = document.querySelectorAll('.titleSection')
//all questions
const questions = [
    { 
        header: 'What does === express true or false for in JavaScript?', 
        answers: [
            //question text, boolean that relates to correct/incorrect question
            'only the type',
            'only the placement',
            'the value and type',
            'only the value'],
        correctAnswer:'the value and type',

        },
        {
        header: "Which of the following will grab an element by it's id?", 
        answers:[   
            "getElementbyClass('')",
            "queryselector('#varName')",
            "queryselectorAll('id')",
            "getElementbyId('#varName')"],
        correctAnswer:"queryselector('#varName')"
        },
        {
        header: "What does the 'this' keyword refer to?",
        answers: [
            "the word this",
            "the next defined object",
            "the object in which it was defined",
            "a keyword defined as 'that' or 'the other'"],
        correctAnswer:"the object in which it was defined"
       
    }, {
        header: "Which of the following is NOT a JavaScript data type?", 
        answers:[ 
            "not-defined",
            "null",
            "boolean",
            "number"],
        correctAnswer: "not-defined",
    
    }, {
        header: "Which symbol is used to comment a single line in Javascript",
        answers:[
            "//",
            "/*",
            "!<>",
            "/* */"],
        correctAnswer: "//",
    }
]
//used in for loops to change text as we go through questions 
let questionIndex = 0 
//used to end quiz if all questions answered
questionsLength = questions.length-1 
//first button to start quiz
const startButton = document.querySelector('.button')
//the four optional buttons when choosing answers 
let answerButton1 = document.querySelector('.answerButton1')
let answerButton2 = document.querySelector('.answerButton2')
let answerButton3 = document.querySelector('.answerButton3')
let answerButton4 = document.querySelector('.answerButton4')
//the text that states each question 
let questionText = document.querySelector('.questionText')
//the countdown timer text on the top/right of screen
let timer = document.querySelector('.timer')
//the text that states whether a question was answered correctly or not
let rightOrWrongText = document.querySelector('.rightOrWrongText')
//the number of seconds left in the quiz
let secondsLeft = 75; 
//a class used to unhide all question section elements
let questionSection = document.querySelectorAll('.questionSection')
let quizFinished = document.querySelectorAll('.quizFinished')
//p tag that tells user their final score 
let yourFinalScore = document.querySelector('.yourFinalScore')
//sets first question text to header
questionText.innerHTML = questions[0].header;
//sets first question text to buttons
answerButton1.innerHTML = questions[0].answers[0];
answerButton2.innerHTML = questions[0].answers[1];
answerButton3.innerHTML = questions[0].answers[2];
answerButton4.innerHTML = questions[0].answers[3];
//let's user see starting time before quiz start
timer.innerHTML = 'Time: ' + secondsLeft; 
//when set to true at end of quiz, causes timer freeze. 
let stopTimer = false
//grabs the user input for their innitials
let nameInput = document.querySelector('.nameInput')
//submit button on quizEnd that captures user input
let submitButton = document.querySelector('.submit')
let highScoresDisplay = document.querySelector('.highScoresDisplay')
// sound effects. from https://freesound.org/people/Bertrof/sounds/351566/
const rightAnswer = new Audio("/assets/sounds/correct1.wav");
const wrongAnswer = new Audio("/assets/sounds/incorrect1.wav");
const themeMusic = new Audio("/assets/sounds/Jeopardy-theme-song.mp3")


//altered from activity 18 in activities.
//sets a coundown timer 
function setTime() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    // timer on top right of screen 
    timer.innerHTML = "Time: " + secondsLeft;
       //sets yourFinalScore to text and time 
       yourFinalScore.innerHTML ='Your final score is ' + secondsLeft
    //pauses the timer if the user finishes all questions
    if(stopTimer === true ){
        //resets timer to 0 if wrong answer causes to drop into negative numbers 
        if(secondsLeft < 0){
            secondsLeft = 0;
            yourFinalScore.innerHTML = 'Your final score is ' + secondsLeft
        }
        clearInterval(timerInterval);    
    }
    // stops timer at 0, and resets timer to 0 if wrong answer causes drop to negative numbers 
    if(secondsLeft === 0 || secondsLeft < 0) {
      secondsLeft = 0;
      timer.innerHTML = "Time: " + secondsLeft;
      clearInterval(timerInterval);
    }
  }, 1000);
}

//hides title screen content and makes visisble question screen content
function startQuiz(event) {
    event.stopPropagation();
    jumbotron.classList.remove('text-center')
    setTime();
    for(i=0; i<titleSection.length; i++){
        titleSection[i].classList.add('hidden')
    }
    for(i=0; i<questionSection.length; i++){
        questionSection[i].classList.remove('hidden')
    }
    //starts theme music when quiz begins
    themeMusic.play();
}

//redirects quiz after last question answered or pulls in next question
function answerButton(event){
    // deducts 15 seconds if the wrong answer is chosen 
    rightOrWrong();
    
    if(questionIndex === questionsLength){
        quizInSession = false;
       quizEndScreen()
    }
    else{
    questionIndex++ ;
    //sets text to current question text while excluding the boolean value in list
    answerButton1.innerHTML = questions[questionIndex].answers[0];
    answerButton2.innerHTML = questions[questionIndex].answers[1];
    answerButton3.innerHTML = questions[questionIndex].answers[2];
    answerButton4.innerHTML = questions[questionIndex].answers[3];
    questionText.innerHTML = questions[questionIndex].header;
    }}
// helper function that states right or wrong, and subtracts from timer if wrong.
function rightOrWrong(){
    if (event.target.innerHTML !==questions[questionIndex].correctAnswer){
        secondsLeft -= 15;
        rightOrWrongText.innerHTML = 'Wrong'
        wrongAnswer.play();
    }
    else{
        rightOrWrongText.innerHTML = 'Correct'
        rightAnswer.play();
    }}
//clears questionSection content and brings up quiz Finished content 
function quizEndScreen(){
    stopTimer = true
    for(i=0; i<questionSection.length; i++){
        questionSection[i].classList.add('hidden')
    }
    for(i=0; i<quizFinished.length; i++){
        quizFinished[i].classList.remove('hidden')
    }   
 
}

//Event listeners   
startButton.addEventListener('click',startQuiz)
answerButton1.addEventListener('click',answerButton)
answerButton2.addEventListener('click',answerButton)
answerButton3.addEventListener('click',answerButton)
answerButton4.addEventListener('click',answerButton)
submitButton.addEventListener('click', function(){
    //User error handling. next line altered from https://stackoverflow.com/questions/35948669/how-to-check-if-a-value-exists-in-an-object-using-javascript
    if(Object.keys(localStorage).indexOf(nameInput.value) > -1){
    alert('This name has been taken. Please choose another name')
    }
    //checks for empty string
    else if(nameInput.value === ''){
        alert('Oh are you the horse with no name? Please enter valid name. ')
    }
    else{
    localStorage.setItem(nameInput.value, secondsLeft );
    window.location.href = "/highScores.html";
}})