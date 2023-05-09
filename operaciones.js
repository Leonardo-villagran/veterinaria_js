// operaciones.js

const fs = require('fs');

const citasFilePath = 'citas.json';

// Verificar si el archivo citas.js existe, si no existe, generarlo

if (!fs.existsSync(citasFilePath)) {
    const defaultCitasContent = '[]';
    fs.writeFileSync(citasFilePath, defaultCitasContent);
    console.log('Se generó el archivo citas.json');
}
else {
    console.log('El archivo citas.json existe. No es necesario crear.');
}

// Función para agregar una nueva cita de atención veterinaria
function registrar(nombreAnimal, edad, tipoAnimal, color, enfermedad) {
    // Crear un objeto de cita con los datos proporcionados
    const nuevaCita = {
        nombreAnimal,
        edad,
        tipoAnimal,
        color,
        enfermedad
    };

    let citas = [];

    try {
        // Leer el contenido del archivo citas.json si existe
        if (fs.existsSync(citasFilePath)) {
            const citasData = fs.readFileSync(citasFilePath, 'utf8');
            //Traspasar el contenido del objeto a Json.
            citas = JSON.parse(citasData);
        }
    } catch (error) {
        console.error('Error al leer el archivo de citas:', error);
    }

    // Agregar la nueva cita al array de citas
    citas.push(nuevaCita);

    try {
        // Convertir el array de citas a formato string
        const citasJSON = JSON.stringify(citas, null, 2);

        // Escribir el contenido en el archivo citas.json
        fs.writeFileSync(citasFilePath, citasJSON);

        console.log('Nueva cita agregada:');
        console.log(nuevaCita);
    } catch (error) {
        console.error('Error al escribir en el archivo de citas:', error);
    }
}
// Función para leer el archivo citas.json
function leer() {
    try {
        // Leer el contenido del archivo citas.json si existe
        if (fs.existsSync(citasFilePath)) {
            const citasData = fs.readFileSync(citasFilePath, 'utf8');
            const citas = JSON.parse(citasData);

            if (citas.length === 0) {
                console.log('No hay citas registradas.');
            }
            else {
                console.log('Citas registradas:');
                citas.forEach((tarea) => {
                    console.log(tarea);
                })
            }
        } else {
            console.log('El archivo de citas no existe.');
        }
    } catch (error) {
        console.error('Error al leer el archivo de citas:', error);
    }
}

module.exports = {
    registrar,
    leer
};





