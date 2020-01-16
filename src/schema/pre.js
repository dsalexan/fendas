/* eslint-disable no-param-reassign */
import fs from 'fs'

function MiscUtils_get(object, ...path) {
  if (object == null) return null
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < path.length; ++i) {
    object = object[path[i]]
    if (object == null) return object
  }
  return object
}

function loadJSON(file) {
  const data = fs.readFileSync(`./${file}`, 'utf8').replace(/^\uFEFF/, '') // strip BOM
  return JSON.parse(data)
}

export default function preprocess(schema) {
  function deepMerge(a, b) {
    if (typeof a !== 'object' || typeof b !== 'object') return
    if ((a instanceof Array && !(b instanceof Array)) || (!(a instanceof Array) && b instanceof Array))
      // eslint-disable-next-line consistent-return
      return console.warn(`Could not merge:\n${JSON.stringify(a)}\n${JSON.stringify(b)}`)

    const bKeys = new Set(Object.keys(b))
    Object.keys(a).forEach((ak) => {
      if (bKeys.has(ak)) {
        const av = a[ak]
        const bv = b[ak]

        const bType = typeof bv

        switch (bType) {
          case 'boolean':
          case 'number':
          case 'string':
            a[ak] = bv
            break // if we have a primitive, overwrite
          case 'object': {
            if (bv instanceof Array) a[ak] = bv
            // if we have an array, overwrite
            else deepMerge(av, bv) // otherwise, go deeper
            break
          }
          default:
            throw new Error(`Impossible!`)
        }

        bKeys.delete(ak) // mark key as merged
      }
    })
    // any properties in B that aren't in A simply get added to A
    // eslint-disable-next-line no-return-assign
    bKeys.forEach((bk) => (a[bk] = b[bk]))
  }

  function findReplace$$Merge(obj) {
    if (typeof obj === 'object') {
      if (obj instanceof Array) return obj.map((d) => findReplace$$Merge(d))

      Object.entries(obj).forEach(([k, v]) => {
        if (k === '$$merge') {
          const merged = {}
          v.forEach((toMerge) => {
            // handle any mergeable children
            toMerge = findReplace$$Merge(toMerge)
            // resolve references
            toMerge = (() => {
              if (!toMerge.$ref) return toMerge

              const [file, path] = toMerge.$ref.split('#')
              const pathParts = path.split('/').filter(Boolean)

              let refData
              if (file) {
                const externalSchema = loadJSON(file)
                refData = MiscUtils_get(externalSchema, ...pathParts)
              } else {
                refData = MiscUtils_get(schema, ...pathParts)
              }

              if (!refData) throw new Error(`Could not find referenced data!`)
              return refData
            })()
            // merge
            deepMerge(merged, toMerge)
          })
          delete obj[k]
          deepMerge(obj, merged)
        } else obj[k] = findReplace$$Merge(v)
      })
      return obj
    }
    return obj
  }
  findReplace$$Merge(schema)
  return schema
}
