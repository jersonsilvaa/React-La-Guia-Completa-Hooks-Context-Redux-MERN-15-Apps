// Funciones - Arrow Functions Array Methods

const tecnologias = ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS', 'Node.js']

// Nota: Usar === indica que lo que se está comparando debe ser igual al mismo tipo de dato del que se está comparando

// Hace un map de los elementos del array y sí encuentra 'HTML5' lo reescribe
const newArray = tecnologias.map(tech => {
    if (tech === 'HTML5') {
        return 'daviardev'
    } else {
        return tech
    }
})

// Busca el elemento que se encuentre en el array
const newArray2 = tecnologias.filter(tech => tech === 'ReactJS')

console.table(newArray)
console.log(newArray2)