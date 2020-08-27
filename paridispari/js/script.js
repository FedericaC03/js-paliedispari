//CHIEDO ALL'UTENTE DI INSERIRE PARI O DISPARI E POI UN NUMERO DA 1 A 5 ù
// var pariDispari = prompt('Inserire "Pari" o "Dispari"');
// var numero = prompt("Inserire un numero da 1 a 5");

//GENERO UN NUMERO CASUALE PER IL PC DA 1 A 5 USANDO UNA FUNZIONE

function NumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
    console.log(NumeroCasuale(1,6));
