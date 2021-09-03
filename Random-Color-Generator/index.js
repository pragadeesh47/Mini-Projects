const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

const btn = document.getElementById('btn-click');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    hexCode = "#"
    for(i=0;i<6;i++)
        hexCode += hex[getRandomNumber()]
        console.log(hexCode)
        console.log(getRandomNumber)

    document.body.style.backgroundColor = hexCode;
    color.textContent = hexCode
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length)
}