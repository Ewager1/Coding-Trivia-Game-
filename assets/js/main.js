/* next steps
1. Change questions html to have 4 buttons that sit on top of eachother
2. write onclick logic that replaces header, question, and button text with  next index. 
3. On start click, make a timer start
4. Create correct and incorrect boolean
    a. assign boolean classes to buttons
    b. make wrong booleans subtract time from timer
    c.create small popup that says correct or incorrect with boolean 
5. write out ending screen in html
    a. create logic for timer=0 to jump to ending screen
6. style 
    a. title page
    b. questions
    c.high scores page
    d.add sound effects
    e. add favicon 
7. stretch goal: randomize questions, sounds, animations 
    


/* assignment section */ 
const questions = [
    { 
        header: 'What does === express true or false for in JavaScript?', 
        answers: [
            'only the type',
            'only the placement',
            'the value and type', 
            'only the value',]
        },
        {
        header: "Which of the following will grab an element by it's id?", 
        answers:[   
            "getElementbyClass('')",
            "queryselector('#varName')",
            "queryselectorAll('id')",
            "getElementbyId('#varName')",]
        },
        {
        header: "What does the 'this' keyword refer to?",
        answers: [
            "the word this",
            "the next defined object",
            "the object in which it was defined",
            "a keyword defined as 'that' or 'the other'",]
       
    }, {
        header: "Which of the following is NOT a JavaScript data type?", 
        answers:[ 
            "not-defined",
            "null",
            "boolean",
            "number",]
    
    }, {
        header: "Which symbol is used to comment a single line in Javascript",
        answers:[
            "//",
            "/*",
            "!<>",
            "/* */",]  
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

answerButton1.innerHTML = questions[0].answers[0];
answerButton2.innerHTML = questions[0].answers[1];
answerButton3.innerHTML = questions[0].answers[2];
answerButton4.innerHTML = questions[0].answers[3];
questionText.innerHTML = questions[0].header;







//hides current content and brings up next question
function startQuiz(event) {
    event.stopPropagation();
    titleScreenJumbo.classList.add('hidden')
    questionsJumbo.classList.remove('hidden')
    //timer will have to go here
    
}

//redirects quiz after last question answered or pulls in next question
function answerButton(){
    if(qIndex === questionsLength){
        window.location.href = "/highScores.html"; 
    }
    else{
    qIndex++ 
    answerButton1.innerHTML = questions[qIndex].answers[0];
    answerButton2.innerHTML = questions[qIndex].answers[1];
    answerButton3.innerHTML = questions[qIndex].answers[2];
    answerButton4.innerHTML = questions[qIndex].answers[3];
    questionText.innerHTML = questions[qIndex].header;
    }
    }









questionText.innerHTML = questions[0].header
startButton.addEventListener('click',startQuiz);
answerButton1.addEventListener('click',answerButton)
answerButton2.addEventListener('click',answerButton)
answerButton3.addEventListener('click',answerButton)
answerButton4.addEventListener('click',answerButton)

