const questiontag = document.querySelector('.question')
const nextButton = document.querySelector('.next')
let mixed, index

window.onload = function(){
  changequestiontag()
  setquestion()
  index = 0
}
nextButton.addEventListener('click', function(){
  index++
  setquestion()
  
})



function changequestiontag(content){
  if(!content) content = mixed[0]
  questiontag.innerHTML = content.question
   
}
  

const thequestions = [{
  question: 'is my name saad'
},
{
  question: 'why are you here'
}
,
{
question: 'good choice'
}]
function setquestion(){
    changequestiontag(mixed[index])
}
mixed = thequestions.sort();

