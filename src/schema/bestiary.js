import _ from 'lodash'

// {
// 	"$schema": "http://json-schema.org/draft-07/schema#",
// 	"version": "1.13.3",
// 	"title": "Character Schema",
// 	"$id": "character.json",
// 	"type": "object",
// 	"definitions": {},
// 	"properties": {}
// }
import makeBaseValidator from './base'
import preprocess from './pre'
import json from '../utils/json'

const LIST_SKILLS = [
  'athletics',
  'acrobatics',
  'sleight of hand',
  'stealth',
  'arcana',
  'history',
  'investigation',
  'nature',
  'religion',
  'animal handling',
  'insight',
  'medicine',
  'perception',
  'survival',
  'deception',
  'intimidation',
  'performance',
  'persuasion',
]

const LIST_ABILITY_ABBREVIATIONS = ['str', 'dex', 'con', 'int', 'wis', 'cha']

// eslint-disable-next-line no-unused-vars
const REGEX_ABILITIES_ABBREVIATIONS = `(${LIST_ABILITY_ABBREVIATIONS.join('|')})`
const REGEX_SKILLS = `(${LIST_SKILLS.join('|')})`

const bestiary = json.readSync(`${__dirname}/tools/bestiary/bestiary.json`)
const xii_bestiary = _.mergeWith(
  bestiary,
  {
    title: '(XII) Bestiary Schema',
    type: 'object',
    definitions: {
      level: {
        type: 'object',
        properties: {
          level: {
            type: ['integer', 'string'],
          },
          takenAt: {
            type: 'array',
            uniqueItems: true,
            items: {
              type: ['integer', 'string'],
            },
          },
          class: {
            oneOf: [
              { type: 'string' },
              {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                  },
                  source: {
                    type: 'string',
                  },
                },
                required: ['name'],
              },
            ],
          },
          subclass: {
            oneOf: [
              { type: 'string' },
              {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                  },
                  source: {
                    type: 'string',
                  },
                },
                required: ['name'],
              },
            ],
          },
        },
        required: ['level'],
      },
      proficiency: {
        type: 'object',
        properties: {
          ratio: {
            type: 'number',
          },
          bonus: {
            type: 'integer',
          },
        },
        required: ['ratio'],
      },
      valueObject: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          value: {
            type: ['string', 'integer'],
          },
          condition: {
            type: 'string',
          },
        },
        required: ['name'],
      },

      creatureData: {
        type: 'object',
        properties: {
          background: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              source: {
                type: 'string',
              },
            },
            required: ['name'],
          },
          level: {
            description:
              '[Creature] Used in sidekicks, which can have levels (and generally do not have alignment).\
             [Character] Used to describe the characters levels and classes.',
            oneOf: [
              {
                type: 'integer',
              },
              // XII
              {
                $ref: '#/definitions/level',
              },
              {
                type: 'array',
                items: {
                  $ref: '#/definitions/level',
                },
              },
            ],
          },
          size: {
            oneOf: [
              {
                type: 'string',
                enum: ['F', 'D', 'T', 'S', 'M', 'L', 'H', 'G', 'C', 'V'],
              },
              {
                type: 'array',
                items: {
                  oneOf: [
                    {
                      type: 'object',
                      properties: {
                        size: {
                          type: 'string',
                          enum: ['F', 'D', 'T', 'S', 'M', 'L', 'H', 'G', 'C', 'V'],
                        },
                        condition: {
                          type: 'string',
                        },
                      },
                      required: ['size'],
                    },
                    {
                      type: 'string',
                      enum: ['F', 'D', 'T', 'S', 'M', 'L', 'H', 'G', 'C', 'V'],
                    },
                  ],
                },
              },
            ],
          },
          type: {
            oneOf: [
              {
                type: 'string',
                enum: [
                  'aberration',
                  'beast',
                  'celestial',
                  'construct',
                  'dragon',
                  'elemental',
                  'fey',
                  'fiend',
                  'giant',
                  'humanoid',
                  'monstrosity',
                  'ooze',
                  'plant',
                  'undead',
                ],
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                  enum: [
                    'aberration',
                    'beast',
                    'celestial',
                    'construct',
                    'dragon',
                    'elemental',
                    'fey',
                    'fiend',
                    'giant',
                    'humanoid',
                    'monstrosity',
                    'ooze',
                    'plant',
                    'undead',
                  ],
                },
              },
              {
                type: 'object',
                properties: {
                  type: {
                    oneOf: [
                      {
                        type: 'string',
                        enum: [
                          'aberration',
                          'beast',
                          'celestial',
                          'construct',
                          'dragon',
                          'elemental',
                          'fey',
                          'fiend',
                          'giant',
                          'humanoid',
                          'monstrosity',
                          'ooze',
                          'plant',
                          'undead',
                        ],
                      },
                      {
                        type: 'array',
                        items: {
                          type: 'string',
                          enum: [
                            'aberration',
                            'beast',
                            'celestial',
                            'construct',
                            'dragon',
                            'elemental',
                            'fey',
                            'fiend',
                            'giant',
                            'humanoid',
                            'monstrosity',
                            'ooze',
                            'plant',
                            'undead',
                          ],
                        },
                      },
                    ],
                  },
                  swarmSize: {
                    type: 'string',
                    enum: ['F', 'D', 'T', 'S', 'M', 'L', 'H', 'G', 'C', 'V'],
                  },
                  tags: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                      oneOf: [
                        {
                          type: 'string',
                        },
                        {
                          type: 'object',
                          properties: {
                            tag: {
                              type: 'string',
                            },
                            prefix: {
                              type: 'string',
                            },
                          },
                          required: ['tag', 'prefix'],
                          additionalProperties: false,
                        },
                      ],
                    },
                  },
                },
                required: ['type'],
                additionalProperties: false,
              },
            ],
          },
          hp: {
            oneOf: [
              {
                type: 'object',
                properties: {
                  average: {
                    type: 'integer',
                  },
                  formula: {
                    type: 'string',
                  },
                },
                additionalProperties: false,
              },
              {
                type: 'object',
                properties: {
                  special: {
                    type: 'string',
                  },
                },
                additionalProperties: false,
              },
              // XII
              {
                type: 'object',
                properties: {
                  rolls: {
                    type: 'array',
                    items: {
                      type: 'integer',
                    },
                  },
                  bonus: {
                    description:
                      'This is here for the cases when some feature interferes with the regular sum of rolls + CON',
                    oneOf: [
                      {
                        type: 'integer',
                      },
                      {
                        type: 'array',
                        items: {
                          type: 'integer',
                        },
                      },
                    ],
                  },
                },
                additionalProperties: false,
              },
            ],
          },
          save: {
            type: 'object',
            properties: {
              ...LIST_ABILITY_ABBREVIATIONS.reduce(
                (obj, cur) => ({
                  ...obj,
                  [cur]: {
                    oneOf: [
                      {
                        type: ['string', 'integer'],
                      },
                      {
                        type: 'boolean',
                      },
                      {
                        $ref: '#/definitions/proficiency',
                      },
                    ],
                  },
                }),
                {},
              ),
              // str: { type: 'string' },
              // dex: { type: 'string' },
              special: {
                description: 'For use in homebrew.',
                $ref: 'entry.json',
              },
            },
            additionalProperties: false,
          },
          skill: {
            type: 'object',
            patternProperties: {
              [REGEX_SKILLS]: {
                oneOf: [
                  {
                    type: ['string', 'integer'],
                  },
                  {
                    type: 'boolean',
                  },
                  {
                    $ref: '#/definitions/proficiency',
                  },
                ],
              },
            },
            properties: {
              other: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    oneOf: {
                      type: 'object',
                      ...LIST_SKILLS.map((skill) => ({
                        [skill]: {
                          type: 'string',
                        },
                      })).reduce((obj, cur) => ({ ...obj, ...cur }), {}),
                      // acrobatics: {
                      //   type: 'string',
                      // },
                      // 'animal handling': {
                      //   type: 'string',
                      // },
                    },
                  },
                },
              },
              special: {
                description: 'For use in homebrew.',
                $ref: 'entry.json',
              },
            },
            additionalProperties: false,
          },
          senses: {
            oneOf: [
              {
                type: 'array',
                items: {
                  oneOf: [
                    {
                      type: 'string',
                    },
                    {
                      $ref: '#/definitions/valueObject',
                    },
                  ],
                },
              },
              {
                type: 'null',
              },
            ],
          },
          proficiencies: {
            oneOf: [
              {
                type: 'object',
                properties: {
                  armor: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                  weapons: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                  tools: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
              },
              {
                type: 'null',
              },
            ],
          },
          feat: {
            oneOf: [
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              {
                type: 'null',
              },
            ],
          },
          feature: {
            oneOf: [
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              {
                type: 'null',
              },
            ],
          },
          // XII (PERSISTENT LIVE STATS)
          _id: {
            type: 'string',
          },
          _rolls: {
            type: 'object',
            properties: {
              initiative: {
                $ref: 'dice.json',
              },
            },
          },
          _hp: {
            oneOf: [
              {
                type: 'integer',
              },
              {
                type: 'object',
                properties: {
                  current: {
                    type: 'integer',
                  },
                  temporary: {
                    type: 'integer',
                  },
                  total: {
                    type: 'integer',
                  },
                },
              },
            ],
          },
          _conditions: {
            type: 'array',
            items: {
              oneOf: [
                {
                  type: 'string',
                },
                {
                  type: 'object',
                  properties: {
                    special: {
                      type: 'string',
                    },
                  },
                  additionalProperties: false,
                  required: ['special'],
                },
                {
                  $ref: '#/definitions/valueObject',
                },
              ],
            },
          },
          // (TRACKER UTILITY)
          _color: {
            type: 'string',
          },
        },
      },
    },
    additionalProperties: false,
  },
  // eslint-disable-next-line no-unused-vars
  (obj, src, key, object, source) => {
    if (_.isObjectLike(obj) || _.isObjectLike(src)) {
      const KEYS = ['oneOf', 'anyOf', 'patternProperties']

      const objHas = _.isObjectLike(obj) && KEYS.reduce((bool, k) => bool || Object.keys(obj).includes(k), false)
      const srcHas = _.isObjectLike(src) && KEYS.reduce((bool, k) => bool || Object.keys(src).includes(k), false)

      if (objHas || srcHas) {
        return src
      }
    }
  },
)

const v1 = makeBaseValidator()
const v2 = makeBaseValidator()

const cacheDir = process.cwd()
process.chdir(`${cacheDir}/src/schema/tools`)

v1.addSchema(preprocess(xii_bestiary), 'bestiary.json')
v2.addSchema(preprocess(bestiary), 'bestiary.json')

process.chdir(cacheDir) // restore working directory

export default {
  xii: v1,
  tools: v2,
}
