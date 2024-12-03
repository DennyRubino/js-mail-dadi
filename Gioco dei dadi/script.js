//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?

//-1 Genero un numero casuale da 1 a 6 per la CPU

let CPU = Math.floor((Math.random() * 6) + 1);
console.log(CPU)

//-2 Chiedo un numero tra 1 e 6 al player
let player = Math.floor((Math.random() * 6) + 1);
console.log(player)

//-3 valuto tra i numeri quale è il piu alto e deduco il vincitore
if (CPU>player) alert("Ha vinto la CPU");
else if (CPU<player) alert("Ha vinto il player");
  else if (CPU === player) alert("Pareggio")
