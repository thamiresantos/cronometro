"use strict";

//variáveis
let hora = 0;
let minuto = 0;
let segundo = 0;
let milissegundo = 0;

let cron;

//associando as funções aos seus botões.
document.form_main.iniciar.onclick = () => start();
document.form_main.parar.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

//função iniciar
function start() {
    pause();
    cron = setInterval(() => {timer();}, 10);
}

//função parar
function pause(){
    clearInterval(cron);
}

//função reset
function reset() {
    let hora = 0;
    let minuto = 0;
    let segundo = 0;
    let milissegundo = 0;

    document.getElementById('horas').innerText = '00';
    document.getElementById('minutos').innerText = '00';
    document.getElementById('segundos').innerText ='00';
    document.getElementById('milissegundos').innerText = '000';

}

//função contando o tempo 
function timer() {
    if((milissegundo += 10) == 1000) {
        milissegundo = 0;
        segundo++;
    }
    if(segundo == 60) {
        segundo = 0;
        minuto++;
    }
    if(minuto == 60) {
        minuto = 0;
        hora++;
    }

    document.getElementById('horas').innerText = returnData(hora);
    document.getElementById('minutos').innerText = returnData(minuto);
    document.getElementById('segundos').innerText = returnData(segundo);
    document.getElementById('milissegundos').innerText = returnData(milissegundo)
}

//A função de returnData é usada apenas para deixar o texto mais dinâmico na tela, fazendo a seguinte logica, se o digito for menor que 10 então concatena com um 0(zero) na frente.
function returnData(input) {
    return input > 10 ? input : `0${input}`
}

