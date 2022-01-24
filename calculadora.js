var botaoDigitado = 0;
botaoDigitado = document.querySelector("#botao_9");
botaoDigitado.addEventListener("click", function (){
    var digito = 9;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_8");
botaoDigitado.addEventListener("click", function (){
    var digito = 8;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_7");
botaoDigitado.addEventListener("click", function (){
    var digito = 7;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_6");
botaoDigitado.addEventListener("click", function (){
    var digito = 6;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_5");
botaoDigitado.addEventListener("click", function (){
    var digito = 5;
    atualizaDisplay(digito);
    console.log(digito);

});

botaoDigitado = document.querySelector("#botao_4");
botaoDigitado.addEventListener("click", function (){
    var digito = 4;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_3");
botaoDigitado.addEventListener("click", function (){
    var digito = 3;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_2");
botaoDigitado.addEventListener("click", function (){
    var digito = 2;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_1");
botaoDigitado.addEventListener("click", function (){
    var digito = 1;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#zero");
botaoDigitado.addEventListener("click", function (){
    var digito = 0;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#ponto");
botaoDigitado.addEventListener("click", function (){
    var digito = ".";
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#divisao");
botaoDigitado.addEventListener("click", function (){
    var digito = "/";
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#multiplicacao");
botaoDigitado.addEventListener("click", function (){
    var digito = "*";
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#subtracao");
botaoDigitado.addEventListener("click", function (){
    var digito = "-";
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#soma");
botaoDigitado.addEventListener("click", function (){
    var digito = "+";
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#igual");
botaoDigitado.addEventListener("click", calcula);

botaoDigitado = document.querySelector("#limpa");
botaoDigitado.addEventListener("click", limpaDisplay);

botaoDigitado = document.querySelector("#ac");
botaoDigitado.addEventListener("click", apagaUltimoDigito);


function atualizaDisplay(valor){

    var display = document.getElementById("display");
    display.textContent = display.textContent + valor;
    console.log(display);

}

function limpaDisplay(){
    var display = document.getElementById("display");
    display.textContent = "";
    console.log(display);
}

function apagaUltimoDigito(){
    var display = "";
    var displayAtualizado = "";
    display = document.getElementById("display");
    displayAtualizado = display.textContent;
    displayAtualizado = displayAtualizado.substring(0, displayAtualizado.length -1);
    console.log(displayAtualizado);
    display.textContent = displayAtualizado;
}

function calcula(){
    var calculo = document.getElementById("display");
    calculo = calculo.textContent;
    expressao = calculo.split("");
    console.log(expressao);
}