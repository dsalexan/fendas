export default {
  $id: 'dice.json',
  title: 'Dice',
  description: 'Dice utility definitions to be used in other schemas.',
  definitions: {
    die: {
      type: 'object',
      properties: {
        value: {
          type: 'integer',
        },
        number: {
          type: 'integer',
        },
        faces: {
          type: 'integer',
        },
        bonus: {
          type: 'integer',
        },
      },
      required: ['number', 'faces'],
    },
  },
  oneOf: [
    {
      type: ['integer', 'string'],
    },
    {
      $ref: '#/definitions/die',
    },
    {
      type: 'array',
      items: {
        $ref: '#/definitions/die',
      },
    },
  ],
}
