export default [
  {
    name: "Azrael's Black Hole Sun",
    source: 'Fendas',
    page: 10,
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
        amount: 150,
      },
    },
    components: {
      v: true,
      s: true,
      m: {
        text: 'limps of a corpse, bones or 2 pints of fresh blood',
        consume: true,
      },
    },
    duration: [
      {
        type: 'instant',
      },
    ],
    classes: {
      fromSubclass: [
        {
          class: {
            name: 'Warlock',
            source: 'PHB',
          },
          subclass: {
            name: 'Angel of Death',
            source: 'Fendas',
          },
        },
      ],
    },
    entries: [
      'You touch the material components, igniting a black flame with the blessing of Azrael, the Angel of Death. This flame grows into a dark fire, shaping itself as a sphere of fire with 1 foot of diameter.',
      'At any moment you can call upon some magnetic aspects of this black blaze, drawing flames from any sources in 60 feet to feed the "black sun".',
      'You can throw this orb of fire up to 150 feet, and each creature in a 20-foot-radius sphere centered on the impact point must make a Dexterity saving throw. A target takes 6d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren’t being worn or carried, and burns until this object completely turns into ash.',
      'For each source it absorved, the sphere grows 1 foot in diameter (the impact radius then growing 5-foot in radius) and the damage increases by 1d4 necrotic damage.',
    ],
    entriesHigherLevel: [
      {
        type: 'entries',
        name: 'At Higher Levels',
        entries: [
          'When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd and the flame absorption damage increases 1d4 for each slot level above 3rd and for each source.',
        ],
      },
    ],
    damageInflict: ['fire', 'necrotic'],
    savingThrow: ['dexterity'],
    areaTags: ['S'],
  },
]
