// Funciones - Function Expression

// A diferencia de crear una función normal, puedes llamarla arriba o abajo, pero en function expression esto no es posible y dará error

const sumar = function (num1, num2) {
    return num1 + num2
}

// Maneras de llamar a una función

// sumar(12, 2) esta es una manera
// const resultado = sumar(12, 2) esta es otra manera

sumar(12, 2) // 14

const resultado = sumar(12, 2)

console.log(resultado) // 14