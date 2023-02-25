// Accedemos a alguna clase o etiqueta
const head2 = document.querySelector('.test')
const navList = document.querySelectorAll('.nav a')

// Al usar un querySelectorAll no podremos hacer el cambio, sin embargo tenemos que iterar con el forEach para que el cambio se efectue

// Con el forEach iteramos los elementos y podemos hacer el cambio
navList.forEach(e => e.textContent = 'nuevo enlace papulince')

// navList.textContent = 'nuevo enlace papulince' Esto no sirve

// Modificamos el selector y le agregamos el nuevo contenido
head2.textContent = 'Nuevo título PAPU :V'