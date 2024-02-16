let secretNumber = randomNumber();

function mudarTextoTag(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
mudarTextoTag('h1','Secret Number Game');
mudarTextoTag('p','Chose a number between 1-10');

function verificarChute() {
    let chute =document.querySelector('input').value;
    console.log(chute == secretNumber);
}


function randomNumber(){
    return parseInt(Math.random()*10 + 1);
}