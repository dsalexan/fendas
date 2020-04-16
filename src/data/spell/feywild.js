export default [
  {
    name: "Dorian's Daydream",
    source: 'Fendas',
    page: 10,
    level: 5,
    school: 'D',
    time: [
      {
        number: 10,
        unit: 'minute',
      },
    ],
    range: {
      type: 'point',
      distance: {
        type: 'unlimited',
      },
    },
    components: {
      v: true,
      s: true,
      m: 'a seashell originated from the feywild',
    },
    duration: [
      {
        type: 'timed',
        duration: {
          type: 'minute',
          amount: 5,
        },
      },
    ],
    meta: {
      ritual: true,
    },
    classes: {},
    entries: [
      'You can communicate with a known sleeping creature, creating a "dream place" with characteristics relatable to both where your minds are transported for 5 minutes.',
      'You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that you cannot estabilish a line of communication.',
    ],
  },
]
