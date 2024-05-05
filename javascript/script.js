"use strict";

//variáveis
let hora = 0;
let minuto = 0;
let segundo = 0;
let milissegundo = 0;

let cron;

//função iniciar
function start() {
    pause();
    cron = setInterval(() => {timer();}, 10);
}

//função parar
function pause(){
    clearInterval(cron);
}

