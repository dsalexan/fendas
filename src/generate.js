import _ from 'lodash'

import race from './race'
import deity from './deity'
import classe from './class'
import subclass from './subclass'
import background from './background'
import optional_feature from './optional_feature'
import spell from './spell'

export default function generate(base = {}) {
  const obj = _.extend({}, base)

  obj._meta = {
    sources: [
      {
        json: 'Fendas',
        abbreviation: 'FCS',
        full: 'Fendas Campaign Setting',
        color: 'e3b04b',
        authors: ['dsalexan'],
        version: '1.0',
        targetSchema: '1.0.0',
      },
    ],
    optionalFeatureTypes: {
      EXPT: 'Exploits',
    },
  }

  obj.race = Object.values(race)
  // obj.deity = Object.values(deity)
  obj.class = Object.values(classe)
  obj.subclass = Object.values(subclass)
  obj.background = Object.values(background)
  obj.optionalfeature = optional_feature
  obj.spell = spell

  return obj
}

function section(object, type) {
  const sct = {
    type: 'section',
    name: object.name,
  }

  if (type === 'subclass') {
    sct.entries = object.subclassFeatures.reduce((arr, feature) => {
      let features = feature
      if (!_.isArray(features)) features = [features]
      const concat_arr = [...arr, ...features]
      return concat_arr
    }, [])
  }

  return sct
}

export { section, generate }

// "_meta": {
//   "sources": [
//     {
//       "json": "TalDorei",
//       "abbreviation": "TDCS",
//       "full": "Tal'Dorei Campaign Setting",
//       "color": "a1b500",
//       "authors": [
//         "Matthew Mercer"
//       ],
//       "convertedBy": [
//         "LelouchVee",
//         "Maal"
//       ],
//       "version": "1.0",
//       "url": "https://greenroninstore.com/products/critical-role-tal-dorei-campaign-setting",
//       "targetSchema": "1.0.0"
//     }
//   ],
//   "dateAdded": 1561679857
// },
