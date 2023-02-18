// Condición Ternarios

const auth = true

// Tipos de condiciones en ternarias

// ? ------------- Para una condición if
// : ------------- Para una condición else
// && ------------ Para una sola condición
// : condicion ? - Para una condición else if

auth
    ? 'Está autenticado'
    : 'No autenticado'

auth && 'Autenticado'

!auth && 'No autenticado'

// Doble ternario - else if

const saldo = 600
const pagar = 600
const tarjeta = true

saldo > pagar ?
    'Puedes pagar con saldo'
    : tarjeta ? 'Puedes usar la tarjeta'
        : 'No puedes pagar'