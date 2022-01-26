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

    let display = document.getElementById("display");
    display.textContent = display.textContent + valor;
    console.log(display);

}

function limpaDisplay(){
    let display = document.getElementById("display");
    display.textContent = "";
    console.log(display);
}

function apagaUltimoDigito(){
    let display = "";
    let displayAtualizado = "";
    display = document.getElementById("display");
    displayAtualizado = display.textContent;
    displayAtualizado = displayAtualizado.substring(0, displayAtualizado.length -1);
    console.log(displayAtualizado);
    display.textContent = displayAtualizado;
}

function calcula(){
    let calculo = document.getElementById("display");
    calculo = calculo.textContent;
    expressao = calculo.split("");
    expressao.forEach(operacao => {
        if(operacao === "*" ){
            let operador = "multiplicacao"
            console.log(operador);
        }else if(operacao === "/"){
            let operador = "divisao"
            console.log(operador);
        }else if (operacao === "+"){
            let operador ="soma";
            console.log(operador);
        }else if (operacao ==="-"){
            let operador = "subtração"
            console.log(operador);
        }
    });
    console.log(expressao);
}