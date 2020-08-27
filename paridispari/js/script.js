//CHIEDO ALL'UTENTE DI INSERIRE PARI O DISPARI E POI UN NUMERO DA 1 A 5 ù
var pariDispari = prompt('Inserire "Pari" o "Dispari"');
var numero = parseInt(prompt("Inserire un numero da 1 a 5"));

//GENERO UN NUMERO CASUALE PER IL PC DA 1 A 5 USANDO UNA FUNZIONE

function NumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
    // console.log(NumeroCasuale(1,6));


//SOMMO IL NUMERO INSERITO DALL'UTENTE CON IL NUMERO GENERATO DAL PC
function SommaNumeri(num1, num2) {
  var risultato = num1 + num2;
  return risultato;
}
var somma = SommaNumeri(NumeroCasuale(1, 6), numero);
console.log(somma);

//SE L'UTENTE HA DIGITATO PARI E LA SOMMA DEI DUE NUMERI E' PARI, ALLORA L'UTENTE HA VINTO, ALTRIMENTI HA PERSO
if ((somma % 2 == 0 && pariDispari == "Pari") || (somma % 2 == 1 && pariDispari == "Dispari")) {
  alert("Complimenti hai vinto!");
} else if ((somma % 2 == 1 && pariDispari == "Pari") || (somma % 2 == 0 && pariDispari == "Dispari")) {
  alert("Ritenta sarai più fortunato");
}

// while (pariDispari == null && numero == null) {
//   var pariDispari = prompt('Inserire "Pari" o "Dispari"');
//   var numero = parseInt(prompt("Inserire un numero da 1 a 5"));
// }
