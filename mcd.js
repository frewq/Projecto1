// Máximo comun divisor, utilizando el algoritmo de euclides

let valorUno, valorDos

function mcd(a, b) {
    let dividendo
    let divisor
    let resto

    // El dividendo debe ser siempre mayor al divisor
    if (a>b) {
        dividendo = a
        divisor = b
    } else if (b > a) {
        dividendo = b
        divisor = a
    } else {
        dividendo = a
        divisor = b
    }
    
    // ALGORITMO DE EUCLIDES
    while (dividendo / divisor){
        resto = dividendo % divisor

        // Si el resto es 0 encontro el MCD, entonces sale del while. El MCD es el divisor
        if (resto == 0) {break}

        dividendo = divisor
        divisor = resto

    }
    
    console.log(divisor)
}

mcd(36, 24)