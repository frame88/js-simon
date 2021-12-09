/*
Visualizzare in pagina 5 numeri casuali poi fateli sparire.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri 
che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali 
dei numeri da indovinare sono stati individuati.
*/

//creo un ciclo for che si ferma a 5, e crea 5 numeri random, pushandoli in un array
//parte il timer di 30 secondi con la time-function di stamattina
//al termine della time-function un altro for che si ferma a 5, e chiede 5 volte di inserire il numero, lo pusha in un nuovo array
//faccio un terzo for che si ferma sempre a 5, e con un if confronta le stringhe dei due array, quelli uguali in un terzo array
//restituisco un messaggio con terzoarray.length e elementi del terzo array

//creo i 3 array che mi serviranno nello script.
let numericas = [];
let numeriutente = [];
let numeriindovinati = [];
let quantitaindovinata = 0;

//creo il contenuto dell'array da memorizzare, con numeri compresi tra 1 e 10, e li stampo in html.
while (numericas.length < 5) {
    let num = (Math.floor(Math.random() * 20) + 1);
    if (!numericas.includes(num)) {
        numericas.push(num);
    }
}

console.log(numericas);

arraydemo = document.querySelector('.container');
arraydemo.innerHTML = `<h2>${numericas[0]} &nbsp ${numericas[1]} &nbsp ${numericas[2]} &nbsp ${numericas[3]} &nbsp ${numericas[4]} </h2>`;

setTimeout( function (){
    //creo la funzione che li fa sparire, con countdown di 30s
    let seconds = 30;
    let timer = setInterval(() => {
        if (seconds > 0) {
            console.log('second',seconds);
            seconds -= 1;
        }
        else {
            arraydemo.innerHTML = '';
            clearInterval(timer);
        }
}, 1000);

setTimeout(function (){
    for (let i = 0; i < 5; i++) {
        let numbz = parseInt(prompt('inserisci un numero alla volta: '));
        console.log(numbz);
        numeriutente.push(numbz);
    }

    for (let i = 0; i < 5; i++) {
        if (numeriutente[i] == numericas[i]) {
            numeriindovinati.push(numeriutente[i]);
        }
    }
    console.log('hai indovinato ',numeriindovinati.length,' numeri. Sono i seguenti: ', numeriindovinati);
    if (numeriindovinati.length > 0){
        arraydemo.innerHTML = `<h2>Hai indovinato ${numeriindovinati.length} numeri. Sono i seguenti: ${numeriindovinati}</h2>`;
    }
    else {
        arraydemo.innerHTML = `<h2>Non hai indovinato nessun numero, i numeri erano ${numericas}</h2>`;        
    }
}, 32500);

}, 1000);
    
  /*
  nella consegna non era noto se ci potessero essere dei doppioni nei numeri generati casualmente,
  non era noto se i numeri inseriti dall'utente dovessero essere inseriti nell'ordine in cui sono stati mostrati in pagina.
  
  Io ho fatto in modo che i numeri generati randomicamente dovessero essere unici, e che l'utente dovesse indovinare anche l'ordine."

*/













