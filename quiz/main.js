const questionelement = document.querySelector('#question')
const opt1 = document.querySelector('#opt-1')
const opt2 = document.querySelector('#opt-2')
const opt3 = document.querySelector('#opt-3')
const opt4 = document.querySelector('#opt-4')
const next = document.querySelector('#next')
const nextbtn = document.querySelector('#nextbtn')
let selectques, index
window.onload = function load(){
  setq()
  selectq()
  index = 0
}
next.addEventListener('click', function(){
  selectq()
  index++
})

function setq(cont){
questionelement.style.display = 'none'
opt1.style.display = 'none'
opt2.style.display = 'none'
opt3.style.display = 'none'
opt4.style.display = 'none'

nextbtn.innerHTML = 'start'
next.style.width = '50%'
nextbtn.style.background = 'white'
  if(!cont) cont = selectques[0]
  if(index<= questions.length -1){
    questionelement.style.display = 'block'
    opt1.style.display = 'block'
    opt2.style.display = 'block'
    opt3.style.display = 'block'
    opt4.style.display = 'block'
    nextbtn.innerHTML = 'next'

  questionelement.innerHTML = cont.question
  opt1.innerHTML = cont.opt1
  opt2.innerHTML = cont.opt2
  opt3.innerHTML = cont.opt3
  opt4.innerHTML = cont.opt4
}


   }
const questions = [{
  question: 'what is 2+2',
  opt1: '3',
  opt2:'4',
  opt3: '5',
  opt4:'6',
},
{
  question: 'nihga',
  opt1: 'no',
  opt2:'4',
  opt3: '5',
  opt4:'6',
},
{
  question: 'cet',
  opt1: 'yes',
  opt2:'4',
  opt3: '5',
  opt4:'6',
}]

//selet q
function selectq(){
 setq(selectques[index])
}

selectques = questions.sort();

