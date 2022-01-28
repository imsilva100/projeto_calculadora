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
    var ultimoDigito = display.textContent.substring(display.length, 1);
    display.textContent = display.textContent + valor;
    console.log(display);
    console.log(ultimoDigito);

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

    expressao.map(function(digito, indice){
        if(digito === "*"){
            
            var posicaoValor1 = indice - 1; 
            var posicaoValor2 = indice +1;

            var valor1 = expressao[posicaoValor1];
            var valor2 = expressao[posicaoValor2];
            
            var calculo = (valor1 * valor2)

            console.log(valor1);
            console.log(valor2);
            console.log(calculo);

            display.textContent = calculo;

        }else if(digito === "/"){
            
            var posicaoValor1 = indice - 1; 
            var posicaoValor2 = indice +1;

            var valor1 = expressao[posicaoValor1];
            var valor2 = expressao[posicaoValor2];
            
            var calculo = (valor1 / valor2)

            console.log(valor1);
            console.log(valor2);
            console.log(calculo);

            display.textContent = calculo;

        }else if(digito === "+"){
            
            var posicaoValor1 = indice - 1; 
            var posicaoValor2 = indice +1;

            var valor1 = expressao[posicaoValor1];
            var valor2 = expressao[posicaoValor2];
            
            var calculo = (parseFloat(valor1) + parseFloat(valor2));

            console.log(valor1);
            console.log(valor2);
            console.log(calculo);

            display.textContent = calculo;

        }else if(digito === "-"){
            
            var posicaoValor1 = indice - 1; 
            var posicaoValor2 = indice +1;

            var valor1 = expressao[posicaoValor1];
            var valor2 = expressao[posicaoValor2];
            
            var calculo = (valor1 - valor2)

            console.log(valor1);
            console.log(valor2);
            console.log(calculo);

            display.textContent = calculo;

        }
        
    })




    console.log(expressao);
}