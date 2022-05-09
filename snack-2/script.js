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

// 1 - l'utente inserisce pari o dispari
// 2 - l'utente inserisce pari o dispari
// 3 - generiamo un numero random per la cpu
// 4 - sommiamo i due numeri
// 5 - verifichiamo se la somma e' pari o dispari
// 6 - Dichiariamo chi ha vinto


// pari o dispari
const sceltaUtente = prompt("Scegli tra pari e dispari");
// numero da 1 a 5
const sceltaNumero = Number(prompt("Scegli un numero da 1 a 5"));
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




