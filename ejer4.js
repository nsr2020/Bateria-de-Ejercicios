/* 4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map( user => user.name);
/* console.log(names); */

/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


	const newList = users1.map(user => ({
		id: user.id,
		name: user.name.startsWith('A') ? 'Anacleto' : user.name  //con el metodo startsWith cojo los que empiezan por la A
	}));
	
/* 	console.log(newList); */





/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitedcities = cities.map(city => ({
	isVisited : city.isVisited,
	name : city.isVisited ? `${city.name} (Visitado)` : city.name
}))

console.log(visitedcities);
