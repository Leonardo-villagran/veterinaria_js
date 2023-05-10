# veterinaria_js

>"Tarea 1: Veterinaria Js de DesafioLatam para el módulo: Backend con Node y Express (G27):"
## Características:

* El sistema corresponde a un programa que se ejecuta sobre Node js.

* El programa contiene un index.js, el cual llama a las funciones registrar y leer que son importadas desde el archivo operaciones.js.

* El archivo operaciones.js consiste en un módulo que exporta las funciones registrar y leer citas.

* Si el archivo citas.json no existe, se genera a través del módulo File System. Si el archivo ya existe se obtiene su contenido (también a través de File System) y se almacena en un objeto de tipo Json (se debe transformar el texto del archivo de tipo string a Json).

* Se realiza un push al objeto Json para agregar nuevas citas y se copia el Json (transformado a string) al archivo citas.json.  

* Para realizar el proceso de registro de una cita, en la terminal, se debe escribir "node index.js" y a continuación ingresar los argumentos necesarios.

* El primer argumento corresponde al tipo de operación que puede ser registrar o leer. 

* En caso de que el primer argumento sea "registrar", se deben incluir los argumentos "nombre del animal", "edad", "tipo de animal", "color", "enfermedad". Cada argumento se parado por un espacio en blanco o entre comillas. 

* En caso de que el argumento sea "leer", no se deben ingresar nuevos argumentos, solo se debe presionar enter y se imprimirán en pantalla las citas registradas dentro de citas.json. 

* Si el argumento es "leer" y no hay datos dentro de citas.json se imprime un mensahe que dice que no hay citas registradas. 
## Ejemplos de ejecución:

node index.js registrar Rambo "3 años" gato negro fiebre

![Alt text](https://github.com/Leonardo-villagran/veterinaria_js/blob/main/images/img_01.png?raw=true)

node index.js leer

![Alt text](https://github.com/Leonardo-villagran/veterinaria_js/blob/main/images/img_02.png?raw=true)

node index.js leer (con el archivo citas.js vacío)

![Alt text](https://github.com/Leonardo-villagran/veterinaria_js/blob/main/images/img_03.png?raw=true)

node index.js leer (sin el archivo citas.js)

![Alt text](https://github.com/Leonardo-villagran/veterinaria_js/blob/main/images/img_04.png?raw=true)
