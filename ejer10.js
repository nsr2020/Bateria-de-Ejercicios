/* Dado el siguiente javascript usa forof y forin para hacer la media del 
volumen de todos los sonidos favoritos que tienen los usuarios. */

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let totalVolumen = 0;
let cantidadSounds = 0;

for (const usuario of users) {
  for (const sonido in usuario.favoritesSounds) {
    totalVolumen += usuario.favoritesSounds[sonido].volume;
    cantidadSounds++;
  }
}

const mediaVolumen = totalVolumen / cantidadSounds;

console.log(`La media del volumen de los sonidos favoritos es: ${mediaVolumen}`);