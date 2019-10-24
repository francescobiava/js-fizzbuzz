// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// creazione variabili
var fizz, buzz, fizzbuzz, output, i;

// assegnazione variabili
fizz = 'Fizz';
buzz = 'Buzz';
fizzbuzz = 'FizzBuzz';

// ciclo per stampa
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    output = fizzbuzz;
  } else if (i % 3 == 0) {
    output = fizz;
  } else if (i % 5 == 0) {
    output = buzz;
  } else {
    output = i;
  }
  // console.log(output);
  document.getElementById('js-fizzbuzz').innerHTML += ('<li>' + output + '</li>')
}