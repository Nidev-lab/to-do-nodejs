require('colors');

const { basededatos, leerbasededatos } = require('./helpers/basededatos');
const { inquiereMenu, pausa, leerInput } = require('./helpers/inquirer')
const Tareas = require('./models/tareas');

const main = async() => {
  let opt = ''

  const tareas = new Tareas();

  const leerDB = leerbasededatos();

  if (leerDB) {
    tareas.cargartareafromarray(leerDB)
  }

  await pausa()

  do {
    opt = await inquiereMenu()

    switch (opt) {
      case '1':
        const resp = await leerInput('Descripcion:');
        tareas.crearTareas(resp)
      case '2':
        console.log(tareas.listadoarr)
      case '3':
        //aqui
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

  basededatos(tareas.listadoarr)
  
  pausa()
};

main();