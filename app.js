require('colors');

const { inquiereMenu, pausa, leerInput } = require('./helpers/inquirer')
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async() => {
  let opt = ''

  const tareas = new Tareas();

  do {
    opt = await inquiereMenu()

    switch (opt) {
      case '1':
        const resp = await leerInput('Descripcion:');
        tareas.crearTareas(resp)
      case '2':
        console.log(tareas._listado)
      case '3':
      // crear tarea
      case '4':
      // crear tarea
      case '5':
      // crear tarea
      case '6':
      // crear tarea
      case '0':
        // crear tarea
      break;
    }

    await pausa()
    
  } while (opt !== '0');

  
  pausa()
};

main();