/* Sicer Andres Brito Gutierrez */


/* Ejercicio #1 */
/* A. Declarar variables llamadas 'continente', 'país',
'Departamento', 'ciudad', 'barrio' y 'dirección', y asigne sus
valores de cantidad de habitantes, de acuerdo con su contexto
real en su propio país. */

let continente = 433000000; 
let pais =  50400000; 
let departamento = 2300000;
let ciudad = 580000;
let barrio = 2000;
let direccion = "Peatonal 5a Casa 1 piso 2 Cristal Alto"


/* B. Registre sus valores en la consola */

console.log({
    continente,
    pais,
    departamento,
    ciudad,
    barrio,
    direccion
})





/* Ejercicio #2 */
/* A. Declare una variable llamada 'esTercerMundista' y
establezca su valor de acuerdo con su país. La variable debe
contener un valor booleano. También declarar una variable
'idioma', pero no le asigne ningún valor todavía. */

let esTercerMundista = true;
let idioma;


/* B. Registrar los valores de 'esTercerMundista',
'continente', 'país' e 'idioma' */
console.log(`a. Colombia es un país tercermundista: ${esTercerMundista}. `);
console.log(`b. Es tercermundista: ${esTercerMundista}. Continente (América): ${continente} habitantes. País (Colombia): ${pais} habitantes. Idioma oficial: ${idioma}.`)





/* Ejercicio #3 */ 
idioma = 'español';
/* Pienso que la única variable que podría no cambiar sería 'idioma', sin embargo, no puedo declarar una variable const sin inicializarla. Las demás variables hacen referencia a datos que están en cambiando con el tiempo. */





/* Ejercicio #4 */
/* a.  */
console.log(`a. En la mitad de Colombia podrían vivir ${pais/2} personas`);

/* b. */
console.log(`b. Aumentando la población de Colombia en 1M daría un total de ${pais + 1000000}`);

/* c. */
/* función para hacer la comparación con finlandia */
let Finlandia = 6000000;
if (pais > Finlandia) {
    console.log("Colombia tiene mas poblacion que Finlandia");    
}else{
    console.log("Finlandia tiene mayor poblacion que Colombia"); 
}    

/* d. */
let paisRandom = 33000000;
function comparacionPaisRandom (paisxcomparar) {
    if (paisxcomparar > paisRandom) {
        return 'Sí, mi país tiene más habitantes que el otro país';
    } else if (paisxcomparar == paisRandom) {
        return 'Ambos países tienen la misma cantidad de habitantes'
    }
    return 'No, mi país tiene menos habitantes que el otro país'
}
console.log(`d. ${comparacionPaisRandom(pais)}`);

/* e. */
let elPrado = 3000;
const idiomaPrado = 'inglés'
const descripcion = `Colombia está en América Latina, y Bucaramanga que está en el departamento de Santander tiene un barrio llamado el prado y sus ${elPrado} habitantes hablan ${idiomaPrado}` 

console.log(descripcion)






/* Ejercicio #5 */
let Ejercicio1 = "¿Qué le dice un jardinero a otro? Nos vemos cuando podamos.";
let Ejercicio2 = "¿Y cómo se llama un boomerang que no vuelve? Palo.";
let Ejercicio3 = 'Intenté organizar un torneo profesional de escondite, pero fue un completo fracaso. Los buenos jugadores son difíciles de encontrar.';
let Ejercicio4 = 'El otro día vendí mi aspiradora. Lo único que hacía era acumular polvo.';
let Ejercicio5 = 'Tengo un amigo otaku que estaba triste, así que lo animé.';
let Ejercicio6 = 'Van dos fantasmas y se cae el del médium.';
let Ejercicio7 = "— Hola, ¿tienen libros para el cansancio? — Sí, pero están agotados.";
let Ejercicio8 = '¿Qué es rojo y malo para tus dientes? Un ladrillo.';
let Ejercicio9 = "¿Has oído hablar del astronauta claustrofóbico? Solo necesitaba un poco de espacio.";
let Ejercicio10 = '¿Cómo se despiden los químicos? Ácido un placer.';

console.log(Ejercicio1.length); /*Devuelve el número de caracteres de la cadena.*/
console.log(Ejercicio2.includes('Palo')); /* Encuentra una palabra dentro del str */
console.log(`${Ejercicio3} No se que estoy haciendo 😂😂😂`);
console.log(Ejercicio4.trimStart()); /* Elimina espacios vacíos al inicio del str */
console.log(Ejercicio5.trimEnd()); /* Elimina espacios vacíos al final del str */
console.log(Ejercicio6.replace('fantasmas', 'espectros',)); /* Reemplaza 'fantasmas' por 'espectro' */
console.log(Ejercicio7.slice(1,30)); /* Extrae una parte del elemento --> Funciona también en arrays */
console.log(Ejercicio8.split()); /* Devuelve un array de elementos separados por el divisor dado */
console.log(Ejercicio9.toUpperCase());
console.log(Ejercicio10.toLocaleLowerCase());