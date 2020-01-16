/* eslint-disable no-unused-vars */
import fs from 'fs'
import Ajv from 'ajv'
import preprocess from './pre'

import dice from './dice'

function loadJSON(full_path, coding = 'utf-8') {
  return JSON.parse(fs.readFileSync(full_path, coding))
}

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
      content: loadJSON(full_path),
    }
  })
}

function makeValidator() {
  const cacheDir = process.cwd()
  process.chdir(`${cacheDir}/src/schema/tools`)

  // const files = readFiles('./')
  // function getContent(entry) {
  //   if (entry.file) {
  //     return {
  //       schema: entry.content,
  //       uri: entry.name,
  //     }
  //   }
  //   return entry.content.map(getContent)
  // }
  // const flat_list = files.map(getContent).flat(Infinity)

  const ajv = new Ajv()

  ajv.addSchema(preprocess(loadJSON('spells/spells.json', 'utf8')), 'spells.json')
  ajv.addSchema(preprocess(loadJSON('bestiary/bestiary.json', 'utf8')), 'bestiary.json')
  ajv.addSchema(preprocess(loadJSON('entry.json', 'utf8')), 'entry.json')
  ajv.addSchema(preprocess(loadJSON('util.json', 'utf8')), 'util.json')

  const SCHEMA_BLACKLIST = new Set(['entry.json', 'util.json'])

  // Get schema files, ignoring directories
  const schemaFiles = fs
    .readdirSync(`${cacheDir}/test/schema`)
    .filter((file) => file.endsWith('.json') && !SCHEMA_BLACKLIST.has(file))

  schemaFiles.map((file) => ajv.addSchema(preprocess(loadJSON(file)), file))

  const xii_custom = [{ schema: dice, uri: 'dice.json' }]

  xii_custom.map((entry) => ajv.addSchema(preprocess(entry.schema), entry.uri))

  process.chdir(cacheDir) // restore working directory

  return ajv
}

export default makeValidator()
