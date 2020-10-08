var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var tittledInfo = document.querySelector('h2');
var body = document.getElementById('gradient');
var generate = document.querySelector('.generate');

function generateBack (){
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	tittledInfo.textContent = body.style.background.replace('rgba(0, 0, 0, 0)','') + ';';

}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
color1.addEventListener('input',generateBack);
color2.addEventListener('input',generateBack);
generate.addEventListener('click',() => {
	body.style.background = `linear-gradient(to right, #${randomInteger(000000,999999)}, #${randomInteger(000000,999999)})`;
	tittledInfo.textContent = body.style.background.replace('rgba(0, 0, 0, 0)','') + ';';

})