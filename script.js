//Controllare carrello della spesa e se trovo "Nutella", "Broccoli", "Zucchine", "Salmone"
//Lo segnalo sulla console di rimuoverli dal carrello 

// const carrello = [
//     "Pasta",
//     "Carne",
//     "Salmone",
//     "Acqua",
//     "Vino",
//     "Broccoli",
//     "Panna",
//     "Latte",
//     "Nutella",
//     "Cereali",
//     "Uova",
//     "Semi di lino",
//     "Zucchine",
//     "Cibo per cani"
// ];

// const dieta = [
//     "Nutella", 
//     "Broccoli", 
//     "Zucchine", 
//     "Salmone"
// ];


// for(let i = 0; i < carrello.length; i++) {
//     console.log('elemento corrente', carrello[i])
    
//     for(let j = 0; j < dieta.length; j++) {
//         console.log('dentro il for di dieta => ', carrello[i], dieta[j])
//         if(carrello[i] === dieta[j]) {
//             console.log(carrello[i], 'trovato, togliere dal carrello');
//         }
//     }
// }

const parola = prompt("Inserisci un nome");

    
let parolaInvertita= "";

for (let i = parola.length - 1; i >= 0 ; i--) {
    console.log(i, parola[i]);
    parolaInvertita += parola[i];   
}

console.log(parolaInvertita);

if (parola === parolaInvertita) {
    console.log("PALINDROMA");
}