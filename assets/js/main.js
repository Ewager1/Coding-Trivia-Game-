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
    


/* assignment section */ 
const button = document.querySelector('.button')
const titleScreenJumbo = document.querySelector('.titleScreenJumbo')
const questionsJumbo = document.querySelector('.questionsJumbo')



const questions = [
    { 
        header: 'What does === return true or false for in JavaScript?', 
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
            "<!>",
            "/* */",]  
    }
]


//hides current content and brings up next question
function startQuiz(event) {
    event.stopPropagation();
    titleScreenJumbo.classList.add('hidden')
    questionsJumbo.classList.remove('hidden')
    //timer will have to go here
    
}

button.addEventListener('click',startQuiz);

