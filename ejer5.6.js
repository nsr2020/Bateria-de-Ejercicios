/* Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */
const STREAMERS = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];



function CreateWord() {

  const filtro = document.querySelector('[data-function="toFilterStreamers"]').value.toLowerCase();

  const streamersFiltrados = STREAMERS.filter(streamer =>streamer.name.toLowerCase().includes(filtro));

	console.clear()
  console.log(streamersFiltrados);

}

// Asociar la función a un evento de cambio en el input
document.querySelector('[data-function="toFilterStreamers"]').addEventListener('input', CreateWord);




