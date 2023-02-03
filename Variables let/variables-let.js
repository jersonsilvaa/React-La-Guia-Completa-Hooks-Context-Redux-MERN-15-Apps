// Variables var, let y const

// Las variables tipo var son obsoletas y ya casi no se usan.

// Las variable tipo let se pueden crear sin ser inicializadas y estas pueden cambiar durante la ejecución. Ej: let aux | aux = 'prueba'

// Las variables tipo const siempre deben ser inicializadas y nunca cambian ej: const aux = 'prueba', nunca se les puede modificar el valor durante la ejecución.

let precio = 500 // 500
let cliente = 'Carlos' // true

// Re asignar un valor
precio = 500
precio = true

cliente = 'dsa' // 'dsa'
cliente = 'tu no mete cabra saramanbiche' // 'tu no mete cabra sarambiche'

console.log(precio, cliente) // true 'tu no mete cabra saramanbiche'

// Pueden iniciarse sin un valor

let precioDescuento // undefined
console.log(precioDescuento)