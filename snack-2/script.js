// FUNZIONE

// MAIN

// 1 - l'utente inserisce pari o dispari
// 2 - l'utente inserisce pari o dispari
// 3 - generiamo un numero random per la cpu
// 4 - sommiamo i due numeri
// 5 - verifichiamo se la somma e' pari o dispari
// 6 - Dichiariamo chi ha vinto

const sceltaUtente = prompt("Scegli tra pari e dispari")
const sceltaNumero = prompt("Scegli un numero da 1 a 5")

function randomGenerator(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}