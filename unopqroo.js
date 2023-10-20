
//regresa el valor de una variable
const { log } = require("console");
const rl = require("readline-sync");

// juego uno
var deck = [];

var colors = ["yellow", "Blue", "Green", "Red"];
var type = ["Comun", "Especial", "Comodin"];
//definir cartas
//carta comun, cartas comodin, numeros
// atributo o caracteristicas es lo que define un objeto

var card = {
    color: null, // amarillo, azul, verde y rojo
    number: null, //0 al 9
    type: null, // comun, especial y comodin
};

for (var cColor = 0; cColor < colors.length; cColor++) {
    for (var cNumber = 0; cNumber < 10; cNumber++) {
        deck.push({ color: colors[cColor], number: cNumber, type: "Comun" });
    }
    for (var cNumber1 = 1; cNumber1 < 10; cNumber1++) {
        deck.push({ color: colors[cColor], number: cNumber1, type: "Comun" });
    }

    deck.push({ color: colors[cColor], number: "+2", type: "Especial" });
    deck.push({ color: colors[cColor], number: "+2", type: "Especial" });
    deck.push({ color: colors[cColor], number: "B", type: "Especial" });
    deck.push({ color: colors[cColor], number: "B", type: "Especial" });
    deck.push({ color: colors[cColor], number: "R", type: "Especial" });
    deck.push({ color: colors[cColor], number: "R", type: "Especial" });

    deck.push({ color: null, number: "+4", type: "Comodin" });
    deck.push({ color: null, number: "+4", type: "Comodin" });
    deck.push({ color: null, number: "+4", type: "Comodin" });
    deck.push({ color: null, number: "+4", type: "Comodin" });
    deck.push({ color: null, number: "CC", type: "Comodin" });
    deck.push({ color: null, number: "CC", type: "Comodin" });
    deck.push({ color: null, number: "CC", type: "Comodin" });
    deck.push({ color: null, number: "CC", type: "Comodin" });
}

//console.log(JSON.stringify(deck));

const players = rl.question("Cuantos jugadores seran?", {})

//console.log(players);

//init sirve para inicializar un proyecto de node
//npm i o npm install <modulo> sirve para instalar el modulo en el proyecto


//Dependencia: un codigo que depende de otro codigo
//Paquete aquello que guarda informacions

//Repartir 7 cartas por jugador
//Recorro el total de tarjetas (total de tarjetas = tarjetas/7 * jugador)
//Un arreglo por jugador
const totalCards = players * 7;

var cardsPlayers = {};

for (var cTCards = 0; cTCards < 7; cTCards++) {
    for (var cPlayers = 0; cPlayers < players; cPlayers++) {
        //console.log("player: ", cPlayers);
        //con ! si no existe
        if (!cardsPlayers["player_"+cPlayers]) {
            cardsPlayers["player_"+cPlayers] = [];    
        }
        
        cardsPlayers["player_"+cPlayers].push(deck.shift());
        
    }
}

var trash =[];

trash.push(deck.shift(deck));

//console.log(trash);

function cardValidation(card){
    console.log(card.number)
    // se le resta -1 porque el valor actual que arrojaría no existe en el arreglo
    if ( card.number == trash[trash.length-1].number && card.color == trash[trash.length-1].color){
        console.log("es igual");
    } else {console.log("no es igual")}
}

//cardValidation({color: "Yellow", number: 5, type: "comun" });

// para separar y se cumpla uno u otro es || o con &&; ambos deben ser verdaderos para poderje ejecutar
// Or y AND revisar**

//determinar la primera carta que tiene el primer jugador
// in iguala  
//for (const player in cardsPlayers){
//console.log(cardsPlayers[player]);
//primer player ponga una carta
//Paso 1: Ver cartas
//Paso 2: Elegir carta
//Paso 3: Validar carta
//Paso 4: Poner carta (de mano jugador a trash)
//}




//const turn = rl.question("Tuno del jugador?", {})
//console.log(cardsPlayers["player_"+turn]);
//const play = cardsPlayers["player_"+turn]


//console.log(trash);

//const selec = rl.question("Que carta eliges?", {})
//election = play[selec-1]
//console.log(election);
//cardValidation(election);
//trash.push(election);
//console.log(trash);






//Función para manejar la carta especial "+2"
function plusTwo(card) {
   const nextPlayerIndex = (cPlayers + 1) % players;
    if(card.number == "+2"){
    cardsPlayers["player_"+nextPlayerIndex].push(deck.shift());
    cardsPlayers["player_"+nextPlayerIndex].push(deck.shift());
    }
}
plusTwo({color: "Yellow",number : "+2", type: "especial"});
console.log(cardsPlayers);

//function plusTwo(card) {
  //  const nextPlayerIndex = (cPlayers + 1) % players;
    //if(cardValidation(plusTwo)){
      //  for(var moreTwo = 0; moreTwo < 2; moreTwo++){
        //    cardsPlayers["player_" + nextPlayerIndex].push(deck.shift());
       // }
    //}
//}
//plusTwo({color: "Yellow",number : 7 , type: "especial"});
//console.log(cardsPlayers);
//console.log(trash);