// Tipos de datos

// undefined: Es un tipo de dato que desde el momento creamos una variable y no le asignamos un valor, ese valor será undefined (Sin definir)

let cliente

console.log(cliente) // undefined
console.log(typeof cliente) // 'undefined'

// boolean: Es un tipo de dato que puede ser true o false

const descuento = true

console.log(descuento) // true
console.log(typeof descuento) // 'boolean'

// true
// boolean

// number: Son los tipo de datos para números

const num1 = 10 // Número entero
const num2 = 10.1 // Número float
const num3 = -10.3 // Número float negativo

console.log(typeof num1) // 'number'
console.log(typeof num2) // 'number'
console.log(typeof num3) // 'number'

// Nos damos cuenta que sin importar el número sea un float, int, double, negativo. Siempre serán números sin importar el tipo de número que sea.

// string o cadenas de texto

const programador = 'midudev' // Podemos usar comillas simples
const producto = "Samsung 42 pulgadas" // Podemos usar comillas dobles

// No podemos usar ambas en una misma variable

// let aux = "' // Unterminated string liretal

const num = '3' // 'string'
const num_2 = 3 // 'number'

console.log(typeof num) // number
console.log(typeof num_2) // number

// bigint

const numeroGrande = BigInt(32327387237627381287368173687236)

console.log(typeof numeroGrande) // bigint

// Los números tipo bigint, no se puede hacer operaciones con números más pequeños.

// console.log(10 + numeroGrande) //

// Para que se pueda realizar la operación, necesitamos hacerle una converción a numeroGrande colocandole Number, para que de esta manera tome el valor como un número

console.log(10 + Number(numeroGrande)) // 3.232738723762738e+31

// A esto se le conoce como coerción, la coerción trata de manera inplicita o explicita para cambiar un tipo de dato. Tomemos como ejemplo lo siguiente.

const coercion = '30'
const coercion2 = 30

console.log(coercion + coercion2) // '3030'

// Lo que hace es juntar los 2 tipos de datos en un solo dato

// Podemos cambiar el tipo de valor como lo hicimos en la línea 59

// symbol

const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol) // false

// El operador === se encarga de comparar si el dato es exactamente el mismo, pero como el dato no es exactamente el mismo es false

// Sí se compara primerSymbol === primerSymbol, el resultado sería true, porque el dato es el exacto

console.log(primerSymbol.valueOf) // valueOf() { [native code] } 
console.log(primerSymbol) // Symbol(30)

// null

const descuento2 = null // El tipo de dato null, es un valor que siempre está vacío

console.log(descuento2) // null