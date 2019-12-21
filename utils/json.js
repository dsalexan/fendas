import jsonfile from 'jsonfile'

export function read(file) {
  return jsonfile.readFile(file)
}

export function write(obj, file) {
  return jsonfile.writeFile(file, obj)
}

export default {
  read,
  write,
}
