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
var usernumb = [];

var insert = parseInt(prompt('digita un numero intero'));
console.log(insert);
usernumb.push(insert);


var match = 0;
for (var i = 0; i < stocknumb.length; i++) {
    if (usernumb.length == stocknumb.length[i]) {

      match = 1;

    }
}
if (match == 1) {
  console.log('hai perso');

} else {
  insert = parseInt(prompt('digita un numero intero'));
  console.log(insert);
  usernumb.push(insert);
}

function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
  }
  console.log(stocknumb);
