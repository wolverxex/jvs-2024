
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


