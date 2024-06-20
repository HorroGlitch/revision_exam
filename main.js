import './style.css'

// 1.

function sommeTableau(tableau) {
  let somme = tableau[0];
  for (let i = 1; i < tableau.length; i++) {
    somme += tableau[i]
  }
  return somme
}

const tableau = [1, 2, 3, 4, 5];
console.log(sommeTableau(tableau));



// 2.

// function plusGrandElement(tableau) {
//   let plusGrand = tableau[0]
//   for (let i = 1; i < tableau.length; i++) {
//     if (plusGrand < tableau[i]) {
//       plusGrand = tableau[i]
//     }
    
//   }
//   return plusGrand;
// }

// const tableau = [3, 7, 15, 9, 1];
// console.log(plusGrandElement(tableau)); 



// 3.

// function inverserTableau(tableau) {
//   let reversedArray = [];
//   for (let i = tableau.length-1; i > -1; i--) {
//     reversedArray.push(tableau[i])
    
//   }
//   return reversedArray
// }

// const tableau = [1, 2, 3, 4, 5];
// console.log(inverserTableau(tableau));



// 4.

// function fusionnerTableaux(tableau1, tableau2) {
//   let concatArray = []
//   for (let i = 0; i < tableau1.length; i++) {
//     concatArray.push(tableau1[i]) 
//   }

//   for (let i = 0; i < tableau2.length; i++) {
//     concatArray.push(tableau2[i]) 
//   }
//   return concatArray;
// }

// const tableau1 = [1, 2, 3];
// const tableau2 = [4, 5, 6];
// console.log(fusionnerTableaux(tableau1, tableau2));



// 5.

// function filtrerPairs(tableau) {
//   let evenArray = []
//   for (let i = 0; i < tableau.length; i++) {
//     if (i%2 === 1) {
//       evenArray.push(tableau[i])
//     }
    
//   }
//   return evenArray;
// }

// const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filtrerPairs(tableau));



// 6.

// function filtrerLongueurSuperieureCinq(tableau) {
//   let onlySuperiorThanFive = []
//   for (let i = 0; i < tableau.length; i++) {
//     if (tableau[i].length > 5) {
//       onlySuperiorThanFive.push(tableau[i])
//     }
    
//   }
//   return onlySuperiorThanFive
// }

// const tableau = ["chat", "chien", "éléphant", "souris", "girafe"];
// console.log(filtrerLongueurSuperieureCinq(tableau));



// 7.

// function filtrerUniques(tableau) {
//   let onlyOne = [];
//   for (let i = 0; i < tableau.length; i++) {

//   }
//   return onlyOne
// }

// const tableau = [1, 2, 3, 4, 1, 2, 5];
// console.log(filtrerUniques(tableau));



// 8.

// function filtrerPremiers(tableau) {

// }

// const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filtrerPremiers(tableau));



// 9.

// function filtrerParType(tableau, type) {
//   let specifiedType = []
//   for (let i = 0; i < tableau.length; i++) {
//     if (typeof(tableau[i]) === type) {
//       specifiedType.push(tableau[i])
//     }
    
//   }
//   return specifiedType
// }

// const tableau = [1, "chat", { nom: "Felix" }, 3.14, "chien", { nom: "Rex" }];
// console.log(filtrerParType(tableau, "string"));



// 10.

// function multiplierPar(tableau, multiplicateur) {
//   let multiplyArr = []
//   for (let i = 0; i < tableau.length; i++) {
//     multiplyArr.push(tableau[i] *= multiplicateur)
    
//   }
//   return multiplyArr
// }

// const tableau = [1, 2, 3, 4, 5];
// const multiplicateur = 2;
// console.log(multiplierPar(tableau, multiplicateur));



// 11.

// function convertirEnChaine(tableau) {
//   let chain = []
//   for (let i = 0; i < tableau.length; i++) {
//     chain.push(tableau[i]+="")
//   }
//   return chain
// }

// const tableau = [1, 2, 3, 4, 5];
// console.log(convertirEnChaine(tableau));



// 12.

// function extrairePrenoms(personnes) {
//   let names = []
//   for (let i = 0; i < personnes.length; i++) {
//     names.push(personnes[i].nom)
//   }
//   return names
// }

// const personnes = [
//     { nom: "Doe", prenom: "John" },
//     { nom: "Smith", prenom: "Alice" },
//     { nom: "Johnson", prenom: "Bob" }
// ];
// console.log(extrairePrenoms(personnes));



// 13.

// function carre(tableau) {
//   let carreArr = []
//   for (let i = 0; i < tableau.length; i++) {
//     carreArr.push(tableau[i] *= tableau[i])
//   }
//   return carreArr
// }

// const tableau = [1, 2, 3, 4, 5];
// console.log(carre(tableau));



// 14.

// function formaterNoms(tableau, assign) {
//   let mArrey = []
//   for (let i = 0; i < tableau.length; i++) {
//     mArrey.push(assign += noms[i])
//   }
//   return mArrey
// }

// const noms = ["Doe", "Smith", "Johnson"];
// const assign = "M. ";
// console.log(formaterNoms(noms, assign));



// 15.

// function plusGrandNombre(tableau) {
//   let plusGrand = tableau[0];
//   for (let i = 1; i < tableau.length; i++) {
//     if (plusGrand < tableau[i]) {
//       plusGrand = tableau[i]
//     }  
//   }
//   return plusGrand
// }
// const tableau = [10, 20, 5, 30];
// console.log(plusGrandNombre(tableau));



// 16.

// function moyenneTableau(tableau) {
//   let moyenne = 0;
//   for (let i = 0; i < tableau.length; i++) {
//     moyenne += tableau[i]
//     console.log(moyenne)
//   }
//   moyenne /= tableau.length
//   return moyenne
// }
// const tableau = [10, 20, 30, 40, 50];
// console.log(moyenneTableau(tableau));



// 17.

// function nombrePresent(tableau, nombre) {
//   for (let i = 0; i < tableau.length; i++) {
//     if (tableau[i] === nombre) {
//       return true;
//     }
//   }
//   return false;
// }
// const tableau = [10, 20, 30, 40, 50];
// console.log(nombrePresent(tableau, 31));



// 18.




// 19.

// function triCroissant(tableau) {
//   for (let i = 0; i < tableau.length; i++) {
//     for (let j = 0; j < tableau.length; j++) {
//       if (tableau[j] > tableau[j+1]) {
//         tableau[j+1] = tableau[j]
//         tableau[j] = tableau[j+1]
//       }
//     }
    
//   }
//   return tableau
// }
// const tableau = [5, 2, 8, 1, 3];
// console.log(triCroissant(tableau));



// 20.

// function differenceMaxMin(tableau) {
//   let min = tableau[0];
//   let max = tableau[0];
//   let diff = 0;
//   for (let i = 1; i < tableau.length; i++) {
//     if (tableau[i] < min) {
//       min = tableau[i]
//     }
//   }

//   for (let j = 1; j < tableau.length; j++) {
//     if (tableau[j] > max) {
//       max = tableau[j]
//     }
//   }

//   diff = max - min
//   return diff;
// }
// const tableau = [10, 5, 20, 8, 15];
// console.log(differenceMaxMin(tableau));



// 21.

// function sequenceCroissante(tableau) {
//   let counter = 0;
//   for (let i = 0; i < tableau.length; i++) {
//     if (tableau[i] < tableau[i+1]) {
//       counter += 1;
//     }
//   }
//   if (counter === tableau.length-1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const tableau1 = [1, 2, 7, 4, 5];
// console.log(sequenceCroissante(tableau1));