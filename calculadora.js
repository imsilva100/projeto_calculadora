var BotaoDigitado = document.querySelector(".teclas");

BotaoDigitado.addEventListener("click", ObtemDigito);

function ObtemDigito(botao){
    var digito = document.getElementById(".botao");
    console.log(digito); 
}
