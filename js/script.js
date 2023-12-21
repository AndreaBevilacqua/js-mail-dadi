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



// ----------------------------------------------------------------------------------------


// ESERCIZIO 2

/* 
 1 - Recupero elementi dal DOM
 2 - Creo un array di email valide
 3 - Aggiungo un addEventListener sul btn con la funzione ''on click''
 4 - Ottengo l'email inserita dall'utente
 5 - Verifico se la email é nella lista di email autorizzate
 6 - Stampo il risultato in pagina
*/

const resultButton = document.getElementById('verify-button');
const resultEmail = document.getElementById('email-result');


const emailAuthorized = ['pincopallo@gamil.com', 'pallopinco@gmail.com', 'gialloposso@gmail.com', 'possogiallo@gmail.com'];

const emailUser = document.getElementById('email').value;

let authorized = '';
for(let i = 0; i < emailAuthorized.length; i++); {
    if(emailAuthorized[i] === emailUser) {
        authorized = 'Access Granted'
    } else {
        authorized = 'Access Denied'
    }
}


authorized.innerHTML = 'Email authorized';
