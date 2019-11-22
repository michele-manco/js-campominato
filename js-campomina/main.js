// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina (l'utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
var stocknumb = [];
var counter = 0;
while (stocknumb.length < 15) {
  var numb=generaRandom(1, 100);
  console.log(numb);

  if (!stocknumb.includes(numb)) {
    stocknumb.push(numb);
    console.log(stocknumb);

  }
  counter++;
  console.log('counter '+ counter);

}
var insert = parseInt(prompt('digita un numero intero'));
console.log(insert);
stocknumb.push(insert);


var match = 0;
for (var i = 0; i < stocknumb.length; i++) {
    if (insert == stocknumb[i]) {

      match = 1;

    }
}
if (match == 1) {
  console.log('hai perso');

} else {
  insert = parseInt(prompt('digita un numero intero'));
  console.log(insert);
  stocknumb.push(insert);
}

function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
  }
  console.log(stocknumb);
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
// Math.floor(Math.random() * 201);
