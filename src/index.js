/* eslint-disable no-unused-vars */
import { read, write } from '../utils/json'
import { section, generate } from './generate'
import subclass from './subclass'

import v from '../schema/base'

const FILE = './dist/fendas.json'

// read(FILE).then((obj) => {
//   console.log('fendas.json\n')
//   console.dir(obj)

//   console.log('\nRegenerate file...\n')
//   const OBJECT = generate({})

//   write(OBJECT, FILE).then(() => {})
// })

console.log('\nGenerate file...\n')
const OBJECT = generate({})

write(OBJECT, FILE)

// console.log('\nExport section file...\n')
// const OBJECT = section(subclass.zoroaster, 'subclass')

// write(OBJECT, FILE).then(() => {})
