// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//SNACK 1

//creiamo un array con dentro degli oggetti bicicletta che hanno 
//come proprietà "nome" e "peso"
const biciclette = [
  { nome: "Bianchi Sprint", peso: 7.8 },
  { nome: "Trek Domane", peso: 8.2 },
  { nome: "Specialized Allez", peso: 7.5 },
  { nome: "Cannondale Synapse", peso: 8.0 },
  { nome: "Giant TCR", peso: 7.2 },
  { nome: "Scott Addict", peso: 7.4 }
];

//facciamo uscire in console l array di oggetti
// console.log(biciclette);

//creiamo una variabile che conterrà la bicicletta piu leggera
let softBike = biciclette[0];


//ciclo for per il controllo della nuova variabile softBike con l'array di oggetti biciclette
for (let i = 0; i < biciclette.length; i++) {
    const bici = biciclette[i];
    if(bici.peso < softBike.peso){
        softBike = bici;
    }
}

//stampiamo il risultato in console (bicicletta piu leggera)
console.log(`La bici più leggera è la ${softBike.nome} e pesa ${softBike.peso} kg`);


//SNACK 2

//creiamo un array di squadre con proprietà nome, punti fatti, falli subiti.
const squadre = [
  { nome: "Juventus", punti: 0, falliSubiti: 0 },
  { nome: "Inter", punti: 0, falliSubiti: 0 },
  { nome: "Milan", punti: 0, falliSubiti: 0 },
  { nome: "Napoli", punti: 0, falliSubiti: 0 },
  { nome: "Roma", punti: 0, falliSubiti: 0 },
  { nome: "Lazio", punti: 0, falliSubiti: 0 }
];

//creiamo un nuovo array dove aggiungeremo fallisubiti e nome della squadra
let arrayTeams = [];

//ciclo per aggiungere un numero random alle proprietà "punti" e "falli subiti"
for(let i = 0; i < squadre.length; i++){
  squadre[i].punti = Random(0,100);
  squadre[i].falliSubiti = Random(0,450);
  arrayTeams.push(squadre[i].nome, squadre[i].falliSubiti);
}
//stampiamo in console l'array con solo i nomi e i falli subiti delle squadre
console.log(arrayTeams);
console.log(squadre);

//creiamo una funzione per generare numeri random min max
function Random(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




