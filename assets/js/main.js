const button = document.querySelector('.button')
const jumboHeader = document.querySelector('.jumboHeader')
const jumboText = document.querySelector('.jumboText')


//hides current content and brings up next question
function clearContent(event) {
    event.stopPropagation();
    jumboHeader.innerHTML ='hello'
}

button.addEventListener('click',clearContent);