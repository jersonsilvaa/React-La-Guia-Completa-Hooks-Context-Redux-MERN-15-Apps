// Funciones - Funciones que retornan valores

function sumar(numero1, numero2) {
    return {
        resultado: numero1 + numero2,
        mensaje: 'daviardev'
    }
}

const { resultado, mensaje } = sumar(12, 23) // Destructuring function

console.log(resultado, mensaje)