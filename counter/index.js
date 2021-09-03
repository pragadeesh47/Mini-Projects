const count = document.getElementById('count-el');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let num = 0;

btn3.addEventListener('click', function(){

  
  num++;
  count.innerText = num;

})

btn1.addEventListener('click', function(){

  num--;
  count.innerText = num;
})

btn2.addEventListener('click', function(){
  num = 0
  count.textContent=num;
})