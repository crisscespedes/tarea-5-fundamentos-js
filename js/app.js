//Comentarios en una sola linea 

/*
Comenatrios en bloques
 */

let numero = 45; //Esto es un numero
console.log(numero);

let personaje = {
    nombre: "Pepito",
    edad: 151,
    estatura: 168
};
console.log(personaje);

//Podemos acceder a un propiedades del objeto mediante la siguiete sintaxis
console.log(personaje.edad);
//Tambien podemos hacerlo asi
console.log(personaje["nombre"]);

//Es posible modificar los valores 
personaje.edad = 16;
console.log(personaje.edad);

personaje.estatura = 152;
console.log(personaje.estatura);

//Añadir propiedades sobre la marcha a nuestro objeto 
let llave = "equipo";
personaje[llave] = "Oriente Petrolero";

console.log(personaje["equipo"]);

console.log(personaje);
//Eliminar propiedades 
delete personaje.estatura;
console.log(personaje);

//Arrays 
let animales = ["Caballo", "Perro", "Gallo", "Tigre"];
//Como imprimir datos segun sus posiciones
console.log(animales);
console.log(animales[0]);
animales.push("Gato");
console.log(animales);

//Insercion de elementos en un array
animales[10] = "Jichi";
console.log(animales);

console.log(animales[7]);

console.log(typeof animales);

