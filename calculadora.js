var expressao = [];
var botaoDigitado = "";
var numero = "";
var display = "";
var digito = "";
var display = "";


//DIGITOS


botaoDigitado = document.querySelector("#botao_9");
botaoDigitado.addEventListener("click", function (){
    digito = 9;
    atualizaDisplay(digito);
    

});

botaoDigitado = document.querySelector("#botao_8");
botaoDigitado.addEventListener("click", function (){
    digito = 8;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_7");
botaoDigitado.addEventListener("click", function (){
    digito = 7;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_6");
botaoDigitado.addEventListener("click", function (){
    digito = 6;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_5");
botaoDigitado.addEventListener("click", function (){
    digito = 5;
    atualizaDisplay(digito);
    console.log(digito);

});

botaoDigitado = document.querySelector("#botao_4");
botaoDigitado.addEventListener("click", function (){
    digito = 4;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_3");
botaoDigitado.addEventListener("click", function (){
    digito = 3;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_2");
botaoDigitado.addEventListener("click", function (){
    digito = 2;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#botao_1");
botaoDigitado.addEventListener("click", function (){
    digito = 1;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#zero");
botaoDigitado.addEventListener("click", function (){
    digito = 0;
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#ponto");
botaoDigitado.addEventListener("click", function (){
    digito = ".";
    atualizaDisplay(digito);
    console.log(digito);
});


//OPERAÇÕES


botaoDigitado = document.querySelector("#divisao");
botaoDigitado.addEventListener("click", function (){
    digito = "/";
    
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#multiplicacao");
botaoDigitado.addEventListener("click", function (){
    digito = "*";
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#subtracao");
botaoDigitado.addEventListener("click", function (){
    digito = "-";
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#soma");
botaoDigitado.addEventListener("click", function (){
    digito = "+";
    atualizaDisplay(digito);
    console.log(digito);
});

botaoDigitado = document.querySelector("#igual");
botaoDigitado.addEventListener("click", calcula);

botaoDigitado = document.querySelector("#limpa");
botaoDigitado.addEventListener("click", limpaDisplay);

botaoDigitado = document.querySelector("#ac");
botaoDigitado.addEventListener("click", apagaUltimoDigito);


//FUNÇÕES


function atualizaExpressao(numero, operador){
    expressao.push(numero, operador);
    console.log(expressao);
}

function guardaUltimoNumero(){
    var ultimoNumero = display.textContent;
    ultimoNumero = ultimoNumero.substring(ultimoNumero.length,ultimoNumero.length -1);
    console.log(ultimoNumero);

}

function atualizaDisplay(valor){

    if(valor === "/" || valor === "*" || valor === "+" || valor === "-"){
        
        atualizaExpressao(numero, valor);
        numero = "";
    }else{
        numero = numero + valor;
    }

    display = document.getElementById("display");
    display.textContent = display.textContent + valor;
    console.log(display);
    console.log(numero);

}

function limpaDisplay(){
    display = document.getElementById("display");
    display.textContent = "";
    console.log(display);
}

function apagaUltimoDigito(){
    display = "";
    displayAtualizado = "";
    display = document.getElementById("display");
    displayAtualizado = display.textContent;
    displayAtualizado = displayAtualizado.substring(0, displayAtualizado.length -1);
    console.log(displayAtualizado);
    display.textContent = displayAtualizado;
}



function calcula(){
    let calculo = document.getElementById("display");
    calculo = calculo.textContent;
    numerosDigitados = calculo.split("");

    numerosDigitados.map(function(digito, indice){
        if(digito === "*"){
            
            var posicaoValor1 = indice - 1; 
            var posicaoValor2 = indice +1;

            var valor1 = numerosDigitados[posicaoValor1];
            var valor2 = numerosDigitados[posicaoValor2];
            
            var calculo = (valor1 * valor2)

            console.log(valor1);
            console.log(valor2);
            console.log(calculo);

            display.textContent = calculo;

        }else if(digito === "/"){
            
            var posicaoValor1 = indice - 1; 
            var posicaoValor2 = indice + 1;

            var valor1 = numerosDigitados[posicaoValor1];
            var valor2 = numerosDigitados[posicaoValor2];
            
            var calculo = (valor1 / valor2)

            console.log(valor1);
            console.log(valor2);
            console.log(calculo);

            display.textContent = calculo;

        }else if(digito === "+"){
            
            var posicaoValor1 = indice - 1; 
            var posicaoValor2 = indice +1;

            var valor1 = numerosDigitados[posicaoValor1];
            var valor2 = numerosDigitados[posicaoValor2];
            
            var calculo = (parseFloat(valor1) + parseFloat(valor2));

            console.log(valor1);
            console.log(valor2);
            console.log(calculo);

            display.textContent = calculo;

        }else if(digito === "-"){
            
            var posicaoValor1 = indice - 1; 
            var posicaoValor2 = indice +1;



            var valor1 = numerosDigitados[posicaoValor1];
            var valor2 = numerosDigitados[posicaoValor2];
            
            var calculo = (valor1 - valor2)

            console.log(valor1);
            console.log(valor2);
            console.log(calculo);

            display.textContent = calculo;

        }
        
    })




    console.log(numerosDigitados);
}