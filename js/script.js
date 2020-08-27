// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function palindrome(str) {
  return str == str.split('').reverse().join('');
}
var parola = prompt("Inserisci una parola per verificare se è palindroma")
console.log(palindrome(parola));


if (palindrome(parola) == true) {
  alert("Si " + parola +  " è una parola palindroma");
} else {
  alert("No,  " + parola + " non è una parola palindroma");
}
