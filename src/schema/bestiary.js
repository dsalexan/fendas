// {
// 	"$schema": "http://json-schema.org/draft-07/schema#",
// 	"version": "1.13.3",
// 	"title": "Character Schema",
// 	"$id": "character.json",
// 	"type": "object",
// 	"definitions": {},
// 	"properties": {}
// }
import v from './base'
import preprocess from './pre'

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

const xii_bestiary = {
  title: 'XII Bestiary Schema',
  id: 'xii-bestiary.json',
  type: 'object',
  definitions: {
    level: {
      type: 'object',
      properties: {
        level: {
          type: ['integer', 'string'],
          required: true,
        },
        takenAt: {
          type: 'array',
          uniqueItems: true,
          items: {
            type: ['integer', 'string'],
          },
        },
        class: {
          anyOf: [
            { type: 'string' },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  required: true,
                },
                source: {
                  type: 'string',
                },
              },
            },
          ],
        },
        subclass: {
          anyOf: [
            { type: 'string' },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  required: true,
                },
                source: {
                  type: 'string',
                },
              },
            },
          ],
        },
      },
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

    characterData: {
      type: 'object',
      $$merge: [
        {
          $ref: 'bestiary.json#/definitions/creatureData',
        },
        {
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
              '[Creature] Used in sidekicks, which can have levels (and generally do not have alignment). [Character] Used to describe the characters levels and classes.',
            anyOf: [
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
                  type: {
                    $ref: '#/definitions/level',
                  },
                },
              },
            ],
          },
          size: {
            oneOf: [
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
                    },
                    {
                      type: 'string',
                      enum: ['F', 'D', 'T', 'S', 'M', 'L', 'H', 'G', 'C', 'V'],
                    },
                  ],
                },
              },
              {
                type: 'string',
                enum: ['F', 'D', 'T', 'S', 'M', 'L', 'H', 'G', 'C', 'V'],
              },
            ],
          },
          type: {
            oneOf: [
              {
                type: 'object',
                properties: {
                  type: {
                    oneOf: [
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
                    anyOf: [
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
                  anyOf: [
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
          _rolls: {
            type: 'object',
            properties: {
              initiative: {
                $ref: 'dice.json#/definitions/dice',
              },
            },
          },
          _hp: {
            anyOf: [
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
      ],
    },
    character: {
      anyOf: [
        {
          type: 'object',
          $comment:
            "This is a custom pre-processor tag, which merges together the array of objects into one. This allows proper inheritance, which JSON schema don't really do.",
          $$merge: [
            {
              $ref: '#/definitions/characterData',
            },
            {
              required: [
                'name',
                'size',
                'type',
                'source',
                'ac',
                'hp',
                'speed',
                'str',
                'dex',
                'con',
                'int',
                'wis',
                'cha',
                // 'passive',
              ],
            },
          ],
        },
        {
          type: 'object',
          $comment:
            "This is a custom pre-processor tag, which merges together the array of objects into one. This allows proper inheritance, which JSON schema don't really do.",
          $$merge: [
            {
              $ref: '#/definitions/characterData',
            },
            {
              $ref: 'util.json#/definitions/copyBlock',
            },
          ],
        },
      ],
    },
  },
  properties: {
    monster: {
      type: 'array',
      uniqueItems: true,
      items: {
        $ref: '#/definitions/character',
      },
    },
    _meta: {
      $ref: 'util.json#/definitions/metaBlock',
    },
  },
  additionalProperties: false,
}

const cacheDir = process.cwd()
process.chdir(`${cacheDir}/schema/tools`)

const validate = (instance) => v.validate(instance, preprocess(xii_bestiary))

process.chdir(cacheDir) // restore working directory

debugger
export default validate
