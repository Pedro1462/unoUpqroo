
//regresa el valor de una variable
const rl = require("readline-sync");

// juego uno
var deck = [];

var colors = ["yellow", "Blue", "Green", "Red"];
var type = ["Comun", "Especial", "Comodin"];
//definir cartas
//carta comun, cartas comodin, numeros
// atributo o caracteristicas es lo que define un objeto

var card ={
    color: null, // amarillo, azul, verde y rojo
    number: null, //0 al 9
    type:null, // comun, especial y comodin
};

for (var cColor = 0; cColor < colors.length; cColor++){
    for(var cNumber = 0; cNumber < 10; cNumber++){   
        deck.push({color: colors[cColor], number: cNumber, type: "Comun"});
    }   
    for(var cNumber1 = 1; cNumber1 < 10; cNumber1++){
        deck.push({color: colors[cColor], number: cNumber1, type: "Comun"});        
    }

    deck.push({color: colors[cColor], number: "+2", type: "Especial"});
    deck.push({color: colors[cColor], number: "+2", type: "Especial"});
    deck.push({color: colors[cColor], number: "B", type: "Especial"});
    deck.push({color: colors[cColor], number: "B", type: "Especial"});
    deck.push({color: colors[cColor], number: "R", type: "Especial"});
    deck.push({color: colors[cColor], number: "R", type: "Especial"});

    deck.push({color: null, number: "+4", type: "Comodin"});
    deck.push({color: null, number: "+4", type: "Comodin"});
    deck.push({color: null, number: "+4", type: "Comodin"});
    deck.push({color: null, number: "+4", type: "Comodin"});
    deck.push({color: null, number: "CC", type: "Comodin"});
    deck.push({color: null, number: "CC", type: "Comodin"});
    deck.push({color: null, number: "CC", type: "Comodin"});
    deck.push({color: null, number: "CC", type: "Comodin"});
}

//console.log(JSON.stringify(deck));

const players = rl.question("Cuantos jugadores seran?", {})

console.log(players);

//init sirve para inicializar un proyecto de node
//npm i o npm install <modulo> sirve para instalar el modulo en el proyecto