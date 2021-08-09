const Tarea = require("./tarea");

class Tareas {
  _listado = {}

  constructor() {
    this._listado = {}
  }

  crearTareas(arg) {
    const tarea = new Tarea(arg)
    this._listado[tarea.id] = tarea
  }
}

module.exports = Tareas