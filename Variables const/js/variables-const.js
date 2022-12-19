// Las variables tipo const siempre deben ser inicializadas y nunca cambian ej: const aux = 'prueba', nunca se les puede modificar el valor durante la ejecución.

// Siempre debemos iniciar la variable cuando trabajemos con const
const cliente = 'Carlos'

// No se puede re asignar
// cliente = 'Juan Herrera'

// variables-let.js:7 Uncaught TypeError: Assignment to constant variable.
//     at variables-let.js:7:9

// No se puede iniciar sin tener un valor
// const cliente

// Uncaught SyntaxError: Identifier 'cliente' has already been declared (at variables-let.js:13:7)

console.log(cliente)