// index.js

//Importar las funciones del archivo operaciones.js
const { registrar, leer } = require('./operaciones.js');

//Desestructuración de los argumentos ingresados desde consola.
const [operacion, nombreAnimal, edad, tipoAnimal, color, enfermedad] = process.argv.slice(2);

//Condicional que determina si se utiliza la función Registrar o Leer Citas. 
if (operacion === 'registrar') {
    if (nombreAnimal && edad && tipoAnimal && color && enfermedad) {
        registrar(nombreAnimal, edad, tipoAnimal, color, enfermedad);
    } else {
        console.error('Faltan argumentos. Debes proporcionar: nombreAnimal, edad, tipoAnimal, color, enfermedad');
    }
} else if (operacion === 'leer') {
    leer();
} else {
    console.error('Tarea no reconocida. Debes proporcionar: registrar o leer');
}