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
console.log(biciclette);

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





