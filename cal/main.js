//button
const buttons = document.querySelectorAll('button')
//text area
const textarea = document.querySelector('.input-num')

// get value?
/*buttons = document.querySelectorAll("button");

button.forEach(function(btn) {
  btn.addEventListener('click', function(e){
    console.log(e.target.value)
});
});*/


buttons.forEach(function(btn){
 btn.addEventListener('click', function(e){
  const inputvalue = e.target.value
 
  if (inputvalue === '=') {
      textarea.value = eval(textarea.value)
    }
  
  else if (inputvalue === 'ac'){
      textarea.value = ''
  }
  else textarea.value += inputvalue;
 }

 )

})

