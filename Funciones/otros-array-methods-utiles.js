// Otros Array Methods útiles

const tecnologias = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js']
const numbers = [10, 20, 30]

let newArray, newArrayNumbers

// Filter crea un nuevo array en base a una condición
newArray = tecnologias.filter(tech => tech !== 'Node.js')

// Con números
newArrayNumbers = numbers.filter(num => num > 10)

// includes se encarga de buscar elementos dentro del array, true sí el elemento existe y false sí el elemento no existe
const result = tecnologias.includes('HTML5')

// Cuando el resultado de busqueda del array es el correcto es true, si no, es false
result ? 'El elemento existe' : 'El elemento no existe' // 'El elemento existe'

// Encuentra los elementos dentro del array, es similar a includes
const result2 = numbers.some(num => num > 2)

console.log(result2) // true

// Find devuelve el primer elemento que cumpla la condición
const resultado2 = numbers.find(numero => numero > 2)

console.log(`Resultado es: ${resultado2}`) // 3

// Every retorna true o false sí todos los elementos cumplen la condición
const resultado3 = numbers.every(num => num > 1)

console.log(resultado3)

// Reduce Hace operación con todos los números que se encuentren en la lista, esto se usa mucho en Eccomerce para el carrito de compras

const resultado4 = numbers.reduce((total, num) => num + total, 0)

console.log(resultado4)