/* Crea una función llamada rollDice() que reciba como parametro el numero de caras 
que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado 
y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
preocupes! Busca información sobre la función de javascript Math.random() */

function rollDice(numFaces) {
  
  if (numFaces <= 0 || !Number.isInteger(numFaces)) {  //para ver que no es menor de 0 y que sea un numero
    return "Número de caras no válido";
  }

  
  const result = Math.floor(Math.random() * numFaces) + 1;
  return result;
}


const resultDice = rollDice(6);
console.log(`Resultado del dado: ${resultDice}`);

const resultDice1 = rollDice(1)
console.log(resultDice1);

console.log(rollDice(0))

