/* next steps

- make wrong booleans subtract time from timer
-.create small popup that says correct or incorrect with boolean 
5. write out ending screen in html
    a. create logic for timer=0 to jump to ending screen
6. style 
    a. title page
    b. questions
    c.high scores page
    d.add sound effects
    e. add favicon 
7. stretch goal: randomize questions, sounds, animations 
    -add lists to questions. Then, find real fase. then, fix logic to questions


/* assignment section */ 
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

let qIndex = 0 // question innerHTML is based on this. 
questionsLength = questions.length-1 //used to end quiz if all questions answered
const startButton = document.querySelector('.button')
let answerButton1 = document.querySelector('.answerButton1')
let answerButton2 = document.querySelector('.answerButton2')
let answerButton3 = document.querySelector('.answerButton3')
let answerButton4 = document.querySelector('.answerButton4')
const titleScreenJumbo = document.querySelector('.titleScreenJumbo')
const questionsJumbo = document.querySelector('.questionsJumbo')
const questionText = document.querySelector('.questionText')
let timer = document.querySelector('.timer')
let secondsLeft = 75; //number of seconds to take quiz 



//try to include this in the original asignment later 
answerButton1.innerHTML = questions[0].answers[0];
answerButton2.innerHTML = questions[0].answers[1];
answerButton3.innerHTML = questions[0].answers[2];
answerButton4.innerHTML = questions[0].answers[3];
questionText.innerHTML = questions[0].header;
timer.innerHTML = 'Time: ' + secondsLeft; //let's user see starting time before quiz start


//altered from activity 18 in activities
function setTime() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timer.innerHTML = "Time: " + secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

//hides current content and brings up next question
function startQuiz(event) {
    event.stopPropagation();
    setTime();
    titleScreenJumbo.classList.add('hidden')
    questionsJumbo.classList.remove('hidden')
}


//redirects quiz after last question answered or pulls in next question
function answerButton(event){
    // deducts 15 seconds if the wrong answer is chosen 
     if (event.target.innerHTML !==questions[qIndex].correctAnswer){
         secondsLeft -= 15;
     }
    
    if(questions[0].answers[0]){
    }
    if(qIndex === questionsLength){
        window.location.href = "/highScores.html"; 
    }
    else{
    qIndex++ ;
    //sets text to current question text while excluding the boolean value in list
    answerButton1.innerHTML = questions[qIndex].answers[0];
    answerButton2.innerHTML = questions[qIndex].answers[1];
    answerButton3.innerHTML = questions[qIndex].answers[2];
    answerButton4.innerHTML = questions[qIndex].answers[3];
    questionText.innerHTML = questions[qIndex].header;
    
    }
    }


   

startButton.addEventListener('click',startQuiz)
answerButton1.addEventListener('click',answerButton)
answerButton2.addEventListener('click',answerButton)
answerButton3.addEventListener('click',answerButton)
answerButton4.addEventListener('click',answerButton)

