export default [
  {
    name: 'Spatial Collapse',
    level: 3,
    school: 'V',
    time: [
      {
        number: 1,
        unit: 'action',
      },
    ],
    range: {
      type: 'point',
      distance: {
        type: 'feet',
        amount: 120,
      },
    },
    components: {
      s: true,
    },
    duration: [
      {
        type: 'timed',
        duration: {
          type: 'minute',
          amount: 1,
        },
        concentration: true,
      },
    ],
    classes: {
      fromClassList: [
        {
          name: 'Sorcerer',
          source: 'PHB',
        },
        {
          name: 'Wizard',
          source: 'PHB',
        },
      ],
    },
    source: 'Fendas',
    entries: [
      'You warp space around and within a creature to condense, turning it into a dense ball of mass. A creature you can see within range must make a Constituition saving throw or take 7d6 bludgeoning damage and begin to condense. It can repeat the saving throw at the end of each of its turns. For each saving throw it fails, it is condensed one level higher, as shown on the table below, and it takes an additional 4d6 bludgeoning damage.',
      "If the taret succeeds, it takes half as much damage and it lower one condensed level. The spell ends if it lowers from level 1. If a target's size is reduced below Tiny, its dimensions are reduced to a fourth of its previous.",
      {
        type: 'table',
        caption: 'Condensed Level',
        colLabels: ['Level', 'Effect'],
        colStyles: ['col-2 text-center', 'col-10'],
        rows: [
          [1, "Target's speed is halved"],
          [2, "Target's size is reduced by 1"],
          [3, "Target's speed is 0 and it is incapacitaded"],
          [4, "Target's size is reduced by 1 and it is paralyzed"],
          [5, 'Target it petrified and sphere shaped'],
          [6, 'Target is reduced to 0 hitpoints'],
        ],
      },
    ],
    page: 11,
    damageInflict: ['bludgeoning'],
    savingThrow: ['constitution'],
    areaTags: ['S'],
  },
]
