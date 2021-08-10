const Tarea = require("./tarea");

class Tareas {

  _listado = {}

  get listadoarr() {
    const listado = []
    Object.keys(this._listado).forEach( key => {
      const tarea = this._listado[key]
      listado.push(tarea)
    })
    return listado
  }

  constructor() {
    this._listado = {}
  }

  crearTareas(arg) {
    const tarea = new Tarea(arg)
    this._listado[tarea.id] = tarea
  }

  cargartareafromarray(info) {
    this._listado = info;
  }
  
}

module.exports = Tareas