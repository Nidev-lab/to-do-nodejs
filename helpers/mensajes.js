require('colors')

const mostrarMenu = () => {
  console.log('\n================================='.green)
  console.log('       Seleccione una opcion     '.green)
  console.log('=================================\n'.green)

  console.log(`${'1.'.green} Crear tarea`)
  console.log(`${'2.'.green} Listar tareas`)
  console.log(`${'3.'.green} Listar tareas completadas`)
  console.log(`${'4.'.green} Listar tareas pendientes`)
  console.log(`${'5.'.green} Completar tarea(s)`)
  console.log(`${'6.'.green} Borrar tarea`)
  console.log(`${'7.'.green} Salir`)

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question('\nSeleccione una opcion: ', (opt) => {
    readline.close();
  })
};

const pausa = () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`\n Presione ${'ENTER'.green} para continuar: `, (opt) => {
    readline.close();
  })
}

module.exports = {
  mostrarMenu,
  pausa
}