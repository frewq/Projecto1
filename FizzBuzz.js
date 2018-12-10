// FizzBuzz

// let numero = []

// for (let i = 1; i <= 100; i++) {
//     numero[i] = i
// }

// for (let i = 1; i <= 100 ; i++) {
//     if (numero[i] % 3 == 0) {
//         if (numero[i] % 5 == 0) {
//             numero[i] = 'FizzBuzz'
//         } else {
//             numero[i] = 'Fizz'
//         }
//     }
//     if ((numero[i] % 3 !== 0) && (numero[i] % 5 == 0)) {
//         numero[i] = 'Buzz'
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     console.log(numero[i])
// }

let esDivisiblePorTres, esDivisiblePorCinco, esDivisiblePorSiete, arreglo = []

for (let i = 1; i <= 200; i++) {
    esDivisiblePorTres = i % 3 == 0
    esDivisiblePorCinco = i % 5 == 0
    esDivisiblePorSiete = i % 7 == 0

    arreglo[i] = i

    if (esDivisiblePorTres) arreglo[i] = 'Fizz'
    if (esDivisiblePorCinco) arreglo[i] = 'Buzz'
    if (esDivisiblePorSiete) arreglo[i] = 'Woof'
    if (esDivisiblePorTres && esDivisiblePorCinco) arreglo[i] = 'FizzBuzz'
    if (esDivisiblePorTres && esDivisiblePorCinco && esDivisiblePorSiete) arreglo[i] = 'FizzBuzzWoof'

    console.log(arreglo[i]);
}

// for (var i = 1; i <= 100; i++) {
//     var isDividibleByThree = i % 3 === 0;
// 	var isDivisibleByFive = i % 5 === 0;

// 	if (isDividibleByThree && isDivisibleByFive) {
// 		console.log('FizzBuzz');
// 	}
// 	else if (isDividibleByThree) {
// 		console.log('Fizz');
// 	}
// 	else if (isDivisibleByFive) {
// 		console.log('Buzz');
// 	}
// 	else {
// 		console.log(i);
// 	}
// }