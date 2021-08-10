const fs = require('fs')
const archivo = './db/data.json'

const basededatos = (data) => {

  fs.appendFileSync(archivo, JSON.stringify(data))

} 

const leerbasededatos = () => {

  if (!fs.existsSync(archivo)) {
    return null
  }

  const database = fs.readFileSync(archivo, { encoding: 'utf-8' })
  const info = JSON.parse(database)

  console.log(info)

  return info

}

module.exports = {
  basededatos,
  leerbasededatos
}