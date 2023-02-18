const saldo = 600
const pagar = 700
const tarjeta = true

// Puedes usar una segunda condición usando else if para que se cumpla otra condición

if (saldo > pagar) {
    'Puedes pagar'
} else if (tarjeta) {
    'Puedes usar tu tarjeta'
} else {
    'No puedes pagar'
}

// Puedes usar un segundo operador dentro del condicional

// Compara las 2 opciones y por lo menos una se debe cumplir y cuando eso pase se ejecuta el código del condicional

// || - Para comparar cualquiera de las opciones dentro del condocional, por lo menos una se debe cumplir

if (saldo > pagar || tarjeta) {
    'Puedes pagar'
} else {
    'No puedes pagar'
}

// Puedes usar el tercer operador dentro del condicional

// Compara las 2 opciones y todas se deben cumplir para ejecutar el código del condicional

// && - Para comparar todo lo que esté en el condicional y todo se debe cumplir

if (saldo > pagar && tarjeta) {
    'Puedes pagar'
} else {
    'No puedes pagar'
}