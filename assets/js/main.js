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

