console.log('JS OK')

// ESERCIZIO 1 

/* 
 1 - Recupero elementi dal DOM
 2 - Creo una variabile per il primo giocatore che generi un numero random da 1 a 6
 3 - Creo una variabile per il secondo giocatore che generi un numero random da 1 a 6
 4 - Stabilisco chi é il vincitore 
 5 - Stampo in pagina il vincitore e i risulati 
*/

const resultDice = document.getElementById('result');
const resultWinner = document.getElementById('winner');

const diceFirstPlayer = Math.floor(Math.random() * 6) + 1;
console.log(diceFirstPlayer)
const diceSecondPlayer = Math.floor(Math.random() * 6) + 1;
console.log(diceSecondPlayer)

let winner = '';

    if (diceFirstPlayer > diceSecondPlayer) {
      winner = 'First Player';
    } else if (diceFirstPlayer < diceSecondPlayer) {
      winner = 'Second Player';
    } else {
      winner = 'Tie'
    }

console.log(winner);


resultDice.innerHTML = `Primo Giocatore: ${diceFirstPlayer}<br>Secondo Giocatore: ${diceSecondPlayer}`;
resultWinner.innerHTML = `Vincitore: ${winner}`;