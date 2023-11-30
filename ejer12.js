/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función: */
function findArrayIndex(array, text) {
  
  const index = array.indexOf(text);
  
  return index;
}


/* Ej array: */
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
const position = findArrayIndex(mainCharacters, "Chewbacca");
console.log(position);  


const position2 = findArrayIndex(mainCharacters, "Narciso");
console.log(position2);  

const position3= findArrayIndex(mainCharacters, "Luke")
console.log(position3);

const position4 = findArrayIndex(mainCharacters, "Rey")
console.log(position4);