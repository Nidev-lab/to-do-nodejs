const inquirer = require('inquirer');

const preguntas = [
  {
    type: 'list',
    name: 'opciones',
    message: 'Que deseas hacer?',
    choices: [
      {
        value: '1',
        name: '1. Crear Tarea'
      },
      {
        value: '2',
        name: '2. Mostrar Tareas'
      },
      {
        value: '3',
        name: '1. Listar Tareas'
      },
      {
        value: '4',
        name: '1. Listar Tareas'
      },
      {
        value: '5',
        name: '1. Listar Tareas'
      },
      {
        value: '6',
        name: '1. Listar Tareas'
      },
      {
        value: '0',
        name: '1. Listar Tareas'
      },
    ]
  }
]

const inquiereMenu = async() => {
  console.clear()

  console.log('\n================================='.green)
  console.log('       Seleccione una opcion     '.green)
  console.log('=================================\n'.green)

  const { opciones } = await inquirer.prompt(preguntas)
  return opciones
}

const pausa = async() => {
  
  const inputPausa = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar`
    }
  ]

  const pausar = await inquirer.prompt(inputPausa)
  return pausar
}

const leerInput = async( message ) => {

  const pregunta = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate( value ){
        if (value.length === 0){
          return 'Por favor ingrese un valor.'
        }
        return true
      }
    }
  ]

  const { desc } = await inquirer.prompt(pregunta)
  return desc;
}

module.exports = {
  inquiereMenu,
  pausa,
  leerInput
}