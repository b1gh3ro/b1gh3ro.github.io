
const msg = document.querySelector('.msg')
const myForm = document.querySelector('#my-form')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const button = document.querySelector('.button')
myForm.addEventListener('submit', onsubmit);
    function onsubmit(e){
        e.preventDefault();
        if(inputName.value==='' || inputEmail.value=== '' ){
            msg.innerHTML = 'no we don\'t do that here';
            setTimeout(() => msg.remove(), 5000);
        }
        
    }
    button.addEventListener('mouseover',(e) => {
        e.preventDefault();
        document.querySelector('.full').style.background = 'cyan'
    });
    
    button.addEventListener('mouseout',(e) => {
        e.preventDefault();
        document.querySelector('.full').style.background = 'white'
    });
     