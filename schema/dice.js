export default {
  $id: 'dice.json',
  title: 'Dice',
  description: 'Dice utility definitions to be used in other schemas.',

  definitions: {
    die: {
      type: 'object',
      properties: {
        value: 'integer',
        number: 'integer',
        faces: 'integer',
        bonus: 'integer',
      },
      required: ['number', 'faces'],
    },
    dice: {
      anyOf: [
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
    },
  },
}
