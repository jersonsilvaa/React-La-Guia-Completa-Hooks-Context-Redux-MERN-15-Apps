// Operación en los arrays

const tecnologias = ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS', 'Node.js']

// Eliminar el último elemento del array creado
// tecnologias.pop()

// Elimina los elementos a partir de donde se indique
// tecnologias.splice(2) // Podemos agregar otro valor y eliminará la cantidad a partir de indice del array

// Añadir elementos a un array
// tecnologias.push('GraphQL')

// Otra forma de agregar elementos a un array
const newArray = [...tecnologias, 'Prisma']

const newArray2 = tecnologias.map(tech => {
  tech === 'HTML5' ? 'GraphQL' : tech
})

tecnologias[0] = 23 // Remplazar valor en una posición

console.table(tecnologias)
console.table(newArray)