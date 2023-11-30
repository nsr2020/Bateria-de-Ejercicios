/* Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
function swap(arr, index1, index2) {
  
  if (
    !Number.isInteger(index1) ||
    !Number.isInteger(index2) ||
    index1 < 0 ||
    index2 < 0 ||
    index1 >= arr.length ||
    index2 >= arr.length
  ) {
    return "Índices no válidos";
  }

 
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

 
  return arr;
}


const swappedArray = swap(fantasticFour, 2, 1);
console.log(swappedArray);
