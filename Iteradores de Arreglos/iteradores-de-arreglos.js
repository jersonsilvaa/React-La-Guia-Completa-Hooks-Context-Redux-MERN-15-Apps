// Iteradores de arreglos

const tecnologias = ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NextJS', 'NodeJS']

// forEach se ejecuta una vez por elemento del array, el array que tenemos tiene 6 elementos, es decir que el forEach se ejecutará 6 veces
const arrayForEach = tecnologias.forEach(e => { // Asignando un valor a la función del forEach, puedes acceder a los elementos del array
  return e
})

// El map es muy usado en React, lo que hace es crear un nuevo arreglo para visualizar los resultados
const arrayMap = tecnologias.map(e => {
  return e
})

console.log(arrayForEach) // 'undefined'
console.log(arrayMap) // ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NextJS', 'NodeJS']