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

//creo il contenuto dell'array da memorizzare, con numeri compresi tra 1 e 10, e li stampo in html.
for (let i = 0; i < 5; i++) {
    numericas.push(Math.floor(Math.random() * 10) + 1);
}
console.log(numericas);

arraydemo = document.querySelector('.container');
arraydemo.innerHTML = `<h2>${numericas}</h2>`;

//creo la funzione che li fa sparire, con countdown di 30s
let seconds = 3;
let timer = setInterval(() =>{
    if (seconds > 0) {
        console.log('second',seconds);
        seconds -= 1;
    }
    else {
        arraydemo.innerHTML = '';
        clearInterval(timer);
        for (let i = 0; i < 5; i++) {
            let numbz = parseInt(prompt('inserisci un numero alla volta: '));
            console.log(numbz);
            numeriutente.push(numbz);
        }
    }
}, 1000);

/*
creo un ciclo che confronta i numeri in numericas e numeriutente, se combaciano e non sono
presenti in numeriindovinati ce li pusho
dopodichè
stampo in html i numeri indovinati e quanti sono 
La variabile quantitaind. sarebbe omettibile, basterebbe fare un numeriindovinati.length
*/

function checknumber(array1, array2) {
    numeriindovinati = [];
    for (let i = 0; i < 5; i++) {
        if (array1[i] == array2[i]) {
            numeriindovinati.push(array1[i]);
        }
        console.log('hai indovinato ', numeriindovinati.length, ' numeri. Sono i seguenti: ', numeriindovinati);
    }
    console.log(numeriindovinati);
    return numeriindovinati;
}

console.log(checknumber(numericas, numeriutente));










