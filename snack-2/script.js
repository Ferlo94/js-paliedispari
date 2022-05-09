// FUNZIONE

function randomGenerator(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pariDispari(numero){
    if(numero % 2 === 0) {
        return "pari";
    } 
    return "dispari";
}

// MAIN

let sceltaUtente;

// pari o dispari
do {
    
    sceltaUtente = prompt("Scegli tra pari e dispari");
} while (sceltaUtente !== "pari" && sceltaUtente !== "dispari");

// numero da 1 a 5

let sceltaNumero

do {
    sceltaNumero = Number(prompt("Scegli un numero da 1 a 5"));
    
} while(isNaN(sceltaNumero) || sceltaNumero < 1 || sceltaNumero > 5);


// Numero random
const cpuNumber = randomGenerator(1,5);
// somma dei due numeri
const somma = cpuNumber + sceltaNumero;
console.log(somma);

// verifica somma pari o dispari
const risultato = pariDispari(somma);

if (risultato === sceltaUtente) {
    alert("Hai vinto!")
} else {
    alert("Hai perso..")
}




