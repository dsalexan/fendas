/* eslint-disable no-unused-vars */
import { Validator } from 'jsonschema'
import fs from 'fs'
import preprocess from './pre'

import dice from './dice'

function readFiles(dirname) {
  const entries = fs.readdirSync(dirname)

  return entries.map((path) => {
    const full_path = `${dirname}/${path}`
    if (fs.lstatSync(full_path).isDirectory()) {
      return {
        path: full_path,
        name: path,
        directory: true,
        content: readFiles(full_path),
      }
    }
    return {
      path: full_path,
      name: path,
      file: true,
      content: JSON.parse(fs.readFileSync(full_path, 'utf-8')),
    }
  })
}

const cacheDir = process.cwd()
process.chdir(`${cacheDir}/schema/tools`)

const files = readFiles('./')
function getContent(entry) {
  if (entry.file) {
    return {
      schema: entry.content,
      uri: entry.name,
    }
  }
  return entry.content.map(getContent)
}
const flat_list = files.map(getContent).flat(Infinity)

const v = new Validator()

flat_list.forEach((entry) => v.addSchema(preprocess(entry.schema), entry.uri))

const xii_custom = [{ schema: dice, uri: 'dice.json' }]

xii_custom.forEach((entry) => v.addSchema(preprocess(entry.schema), entry.uri))

debugger

process.chdir(cacheDir) // restore working directory

export default v
