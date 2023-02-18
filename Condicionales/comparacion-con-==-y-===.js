// Comparación y Operador Estricto

const num = 200
const num2 = '200'

// == Comparación no estricto - Revisa el valor
// === Comparación estricta - Revisa el tipo de valor

// Cuando se usa == se compara que el primer valor sea igual al segundo, pero cuando se usa === se le llama operador estricto, que en este caso, compara sí el primer y segundo valor son iguales, compara un número con un string, en este caso no serían iguales
if (num === num2) {
    'son iguales'
} else {
    'no son iguales'
}

// En caso de los boolean no es necesario usar comparadores

// Podemos usar ! esto indica que es false
// Sí tenemos el boolean inicializado en true o no está inicializado, solo basta con colocar el nombre del boolean sin usar !, y de esa manera será true

const auth = true

if (!auth) {
    'El usuario está autenticado'
} else {
    'el usuario no está autenticado'
}