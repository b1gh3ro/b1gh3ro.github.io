const eat = document.querySelector('.eat')
const drink = document.querySelector('.drink')
const order = document.querySelector('.order')
const box = document.querySelector('.box')

eat.addEventListener('mouseover', (changebg)=>
{
    
   
    box.style.backgroundImage = `var(--bg2)`
});
eat.addEventListener('mouseout', (changebg)=>
{
    
    box.style.backgroundImage = `var(--bg1)` 
    
});
drink.addEventListener('mouseover', (changebg)=>
{
    
   
    box.style.backgroundImage = `var(--bg3)`
});
drink.addEventListener('mouseout', (changebg)=>
{
    
    box.style.backgroundImage = `var(--bg1)` 
    
});
order.addEventListener('mouseover', (changebg)=>
{
    
   
    box.style.backgroundImage = `var(--bg4)`
   
});
order.addEventListener('mouseout', (changebg)=>
{
    
    box.style.backgroundImage = `var(--bg1)` 
  
});

