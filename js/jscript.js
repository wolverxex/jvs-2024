//codigo para presentar
/*
function calcularTiempo() {
            let velocidad = parseFloat(prompt("Ingrese la velocidad en kilómetros por hora:"));
                if (velocidad <=0) {
                alert("Por favor, ingrese una velocidad válida y positiva.");
                return;
                }
            let distancia = parseFloat(prompt("Ingrese la distancia a recorrer en kilómetros:"));
                if (distancia <=0) {
                alert("Por favor, ingrese una distancia válida y positiva.");
                }
            let tiempoHoras = distancia / velocidad;
            alert("Para recorrer " + distancia + " km a " + velocidad + "km/h, se necesitan" + tiempoHoras + "horas");
        }
        calcularTiempo();
*/

/*
function calcularTiempo() {
            let velocidad = parseFloat(prompt("Ingrese la velocidad en kilómetros por hora:"));
                if (isNaN(velocidad) || velocidad <= 0) {
                alert("Por favor, ingrese una velocidad válida y positiva.");
                return;
                }
            let distancia = parseFloat(prompt("Ingrese la distancia a recorrer en kilómetros:"));
                if (isNaN(distancia) || distancia <= 0) {
                alert("Por favor, ingrese una distancia válida y positiva.");
                }
            let tiempoHoras = distancia / velocidad;
            alert("Para recorrer " + distancia + " km a " + velocidad + "km/h, se necesitan" + tiempoHoras + "horas");
        }
        calcularTiempo();*/



// declarar un array
/*
const frutas = ["manzana", "pera", "banana", "sandia"]
//indice            0          1    2           3

frutas[3] = "melon"
//le cambio el nombre, le asigno otro nombre - funciona de arri ba hacia abajo, porque no exisste aun la lista

frutas[4] = "tomate"
//funciona porque el array es infinito, no le dijimos cuando termina

let frutaPreferida = frutas [3]

alert(frutaPreferida)

//si funciona
//así seleccionamos un elemento del array a traves del indice

//    alert(frutas[3])

*/
/*
const numeros = [1,2,3,4,5]

console.log(numeros[2] + numeros[4])
*/
/*
const numeros = [1,2,3,4,5]

for(let i=0; i<5;i++){
    console.log(i)
}

// si i arranca en 1 , no habrá numero cero
*/

/*
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,18,19,21,22,23,24,25,26]

for(let i=1; i<numeros.length;i++){
    console.log(i)
}
*/
//length sirve para saber cuantos indices tengo, elementos dentro del array
/*
const frutas = ["manzana", "pera", "banana", "sandia"]

console.log(frutas)

frutas.push("kiwi")

el push agrega un elemento
*/
/*
const frutas = ["manzana", "pera", "banana", "sandia"]

frutas.pop()
console.log(frutas)

*/
//el pop elimina el ultimo elemento

/*
const frutas = ["manzana", "pera", "banana", "sandia"]
frutas.shift()
console.log(frutas)
//elimina al primer elemento
*/
/*
const frutas = ["manzana", "pera", "banana", "sandia"]

frutas.unshift("kiwi")
//agrega un elemento a la primera posicion
console.log(frutas)

*/

//SLICE
//retorna una copia de partes del array lleva 2 parametros (dsede,hasta)

/*
const frutas = ["manzana", "pera", "banana", "sandia"]

//donde se alamcena esa copia? en una variable

let copia = frutas.slice(0,2)
//la copia llega hasta el indice 2 pero no lo incluye

console.log(copia)
*/

//SPLICE
//cambia el contenido del array eliminando elementos y reemplazandolos

/*

const frutas = ["manzana", "pera", "banana", "sandia"]

//donde se alamcena esa copia? en una variable

let copia = frutas.splice(0,2)
//elimino llega hasta el indice 2 incluyendo el ultimo del indice

console.log(copia)

[]
*/


// objeto literal
/*

let personas = [

    {nombre: "mateo", edad: 25, ciudad: " Buenos Aires"},
    {nombre: "nicolas ", edad: 28, ciudad: " Bahia Blanca"},
    {nombre: "malena", edad: 18, ciudad: " Cordoba"}

//estos objetos tienen propiedades nombre edad y ciudad
*/

/*
console.log(personas[1])
//le digo que me muestre las propiedades
console.log(personas[1].edad)
//le digo que me muestre la propiedad edad
*/

//para que me muestre todas las edades

/*

for(let i=0; i<=personas.length; i++){
    console.log(personas[i].nombre + "vive en  " + personas[i].ciudad)
}
[]
*/

//iterar es poder reccorer algo (por ejemplo con la i)

//FOR OF

// sintaxis : for(variable OF iterable){}



/*

const remeras = []

    {id:1, color: "negra"},
    {id:2, color: "blanca"},
    {id:3, color: "rojas"},

]

for(producto of remeras){ //creo una constaste de productos de remeras

console.log(producto.id)
console.log(producto.color)

}
*/
/*
do{
    function comprar(){
        let carrito = []
        let producto = prompt("que quers comprar")
        carrito.push(producto)
        console.log(carrito)
        seguirComprando = confirm("vas a seguir comprando?")
    }


comprar()
}while(seguirComprando)
*/

/*
do{

function Pares(){
    const númerosPares = []
    let numero = prompt("Agrega numeros pares")
    if (numero % 2 === 0){
    numero.push(númerosPares);
}   else{
            alert("el numero ingresado no es un numero par");
    }

    agregaMasnumeros = confirm("conoces otro numero par?");
   
 } 
}
Pares() 

while(agregaMasnumeros)

*/

let agregaMasnumeros = true;

do {
    function Pares() {
        const numerosPares = [];
        let numero = prompt("Agrega numeros pares");
        console.log(numerosPares)
        
        // Parsea el input a número
        numero = parseInt(numero);

        if (!isNaN(numero) && numero % 2 === 0) {
            numerosPares.push(numero);
        } else {
            alert("El número ingresado no es un número par o no es un número válido.");
        }

        return numerosPares;
    }

    Pares();

    agregaMasnumeros = confirm("conoces otro numero par?");
} while (agregaMasnumeros);


