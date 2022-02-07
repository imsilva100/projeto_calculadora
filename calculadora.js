var expressao = [];
var expressaoParcial = [];
var sequenciaOperacao = [];
var botaoDigitado = "";
var numero = "";
var display = "";
var digito = "";
var display = "";
var ultimoNumero = "";
var calculo = 0;


//DIGITOS


botaoDigitado = document.querySelector("#botao_9");
botaoDigitado.addEventListener("click", function () {
    digito = 9;
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);
});

botaoDigitado = document.querySelector("#botao_8");
botaoDigitado.addEventListener("click", function () {
    digito = 8;
    guardaUltimoNumero();
    atualizaDisplay(digito), ultimoNumero;
});

botaoDigitado = document.querySelector("#botao_7");
botaoDigitado.addEventListener("click", function () {
    digito = 7;
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);
});

botaoDigitado = document.querySelector("#botao_6");
botaoDigitado.addEventListener("click", function () {
    digito = 6;
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);

});

botaoDigitado = document.querySelector("#botao_5");
botaoDigitado.addEventListener("click", function () {
    digito = 5;
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);
});

botaoDigitado = document.querySelector("#botao_4");
botaoDigitado.addEventListener("click", function () {
    digito = 4;
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);
});

botaoDigitado = document.querySelector("#botao_3");
botaoDigitado.addEventListener("click", function () {
    digito = 3;
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);
});

botaoDigitado = document.querySelector("#botao_2");
botaoDigitado.addEventListener("click", function () {
    digito = 2;
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);
});

botaoDigitado = document.querySelector("#botao_1");
botaoDigitado.addEventListener("click", function () {
    digito = 1;
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);
});

botaoDigitado = document.querySelector("#zero");
botaoDigitado.addEventListener("click", function () {
    digito = 0;
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);
});

botaoDigitado = document.querySelector("#ponto");
botaoDigitado.addEventListener("click", function () {
    digito = ".";
    atualizaDisplay(digito, ultimoNumero);
});


//OPERAÇÕES


botaoDigitado = document.querySelector("#divisao");
botaoDigitado.addEventListener("click", function () {
        digito = "/";
        guardaUltimoNumero();
        atualizaDisplay(digito, ultimoNumero);
        console.log(digito);
});

botaoDigitado = document.querySelector("#multiplicacao");
botaoDigitado.addEventListener("click", function () {
    digito = "*";
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);
    console.log(digito);
});

botaoDigitado = document.querySelector("#subtracao");
botaoDigitado.addEventListener("click", function () {
    digito = "-";
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);
    console.log(digito);
});

botaoDigitado = document.querySelector("#soma");
botaoDigitado.addEventListener("click", function () {
    digito = "+";
    guardaUltimoNumero();
    atualizaDisplay(digito, ultimoNumero);
    console.log(digito);
});

botaoDigitado = document.querySelector("#igual");
botaoDigitado.addEventListener("click", calcula);

botaoDigitado = document.querySelector("#limpa");
botaoDigitado.addEventListener("click", limpaDisplay);

botaoDigitado = document.querySelector("#ac");
botaoDigitado.addEventListener("click", apagaUltimoDigito);


//FUNÇÕES


function atualizaExpressao(numero, operador) {

    expressao.push(numero);
    if (operador != "") {
        expressao.push(operador);
    }
    sequenciaOperacao.push(operador);
}

/*function atualizaExpressaoParcial(arrayexpressao, posicaoInicial, valorCalculoParcial){
    arrayexpressao.splice(posicaoInicial,3,valorCalculoParcial);
}*/

function guardaUltimoNumero() {
    display = document.getElementById("display");
    ultimoNumero = display.textContent;
    ultimoNumero = ultimoNumero.substring(ultimoNumero.length, ultimoNumero.length - 1);

}

function atualizaDisplay(valor, ultimoNumero) {


    display = document.getElementById("display");
    if (valor === "." && display.textContent.includes(".")) {

    } else if (valor === "/" && ultimoNumero === "/") {

    } else if (valor === "*" && ultimoNumero === "*") {

    } else if (valor === "+" && ultimoNumero === "+") {

    } else if (valor === "-" && ultimoNumero === "-") {

    } else {
        console.log(numero);
        console.log(valor);
        if (valor === "/" || valor === "*" || valor === "+" || valor === "-") {
            atualizaExpressao(numero, valor);
            numero = "";
        } else {
            numero = numero + valor;
        }

        //display = document.getElementById("display");
        display.textContent = display.textContent + valor;

    }
}

function limpaDisplay() {
    display = document.getElementById("display");
    display.textContent = "";
    expressao = [];
    sequenciaOperacao = [];
    botaoDigitado = "";
    numero = "";
    display = "";
    digito = "";
    display = "";
    ultimoNumero = "";

}

function apagaUltimoDigito() {
    display = "";
    displayAtualizado = "";
    display = document.getElementById("display");
    displayAtualizado = display.textContent;
    displayAtualizado = displayAtualizado.substring(0, displayAtualizado.length - 1);
    console.log(displayAtualizado);
    display.textContent = displayAtualizado;
    expressao.pop(digito);
}



function calcula() {
    expressao.push(numero);
    console.log(expressao);
    
    var indice = 0;

    

    for(indice = 0; expressao.length > indice; indice ++){
        
        if (expressao[indice] === "*") {
            console.log(expressao[indice]);
            var posicaoValor1 = indice - 1;
            var posicaoValor2 = indice + 1;

            var valor1 = expressao[posicaoValor1];
            var valor2 = expressao[posicaoValor2];

            var calculo = (parseFloat(valor1) * parseFloat(valor2));
            console.log(calculo);

            expressao.splice(posicaoValor1,3,calculo);
            console.log(expressao);
            indice = 0
        }           
    }

    for(indice = 0; expressao.length > indice; indice ++){
        
        if (expressao[indice] === "/") {
            console.log(expressao[indice]);
            var posicaoValor1 = indice - 1;
            var posicaoValor2 = indice + 1;

            var valor1 = expressao[posicaoValor1];
            var valor2 = expressao[posicaoValor2];

            var calculo = (parseFloat(valor1) / parseFloat(valor2));
            console.log(calculo);

            expressao.splice(posicaoValor1,3,calculo);
            console.log(expressao);
            indice = 0
        }           
    }

    for(indice = 0; expressao.length > indice; indice ++){
        
        if (expressao[indice] === "+") {
            console.log(expressao[indice]);
            var posicaoValor1 = indice - 1;
            var posicaoValor2 = indice + 1;

            var valor1 = expressao[posicaoValor1];
            var valor2 = expressao[posicaoValor2];

            var calculo = (parseFloat(valor1) + parseFloat(valor2));
            console.log(calculo);

            expressao.splice(posicaoValor1,3,calculo);
            console.log(expressao);
            indice = 0
        }           
    }

    for(indice = 0; expressao.length > indice; indice ++){
        
        if (expressao[indice] === "-") {
            console.log(expressao[indice]);
            var posicaoValor1 = indice - 1;
            var posicaoValor2 = indice + 1;

            var valor1 = expressao[posicaoValor1];
            var valor2 = expressao[posicaoValor2];

            var calculo = (parseFloat(valor1) - parseFloat(valor2));
            console.log(calculo);

            expressao.splice(posicaoValor1,3,calculo);
            console.log(expressao);
            indice = 0
        }           
    }

    exibeResultado(calculo);

}

function exibeResultado(resultado) {
    console.log(resultado);
    display.textContent = resultado;
    expressao = [];
    expressao = resultado;
    console.log(expressao);
}