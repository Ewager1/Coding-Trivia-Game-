// taken from https://www.geeksforgeeks.org/javascript-quiz-set-1/
const question1 = {
    header: 'What is the HTML tag under which one can write the JavaScript code?',
    button1: '<javascript>',
    button2: '<scripted>',
    button3: '<script>',
    button4: '<js>',
}

const question2 = {
    header: "Which of the following will grab an element by it's id?",
    button1: "getElementbyClass('')",
    button2: "queryselector('#varName')",
    button3: "queryselectorAll('id')",
    button4: "getElementbyId('#varName')",
}

const question3 = {
    header: "Which of the following is NOT a JavaScript data type?",
    button1: "not-defined",
    button2: "null",
    button3: "boolean",
    button4: "number",
}

const question4 = {
    header: "What does the 'this' keyword refer to?",
    button1: "the word this",
    button2: "the next defined object",
    button3: "the object in which it was defined",
    button4: "a keyword defined as 'that' or 'the other'",
}

const question5 = {
    header: "Which symbol is used to comment a single line in Javascript",
    button1: "//",
    button2: "/*",
    button3: "<!>",
    button4: "/* */",
}

const questions = [
question1, question2, question3, question4, question5
]

console.log(questions)