export default [
  {
    name: 'Titania',
    source: 'FCS',
    page: 223,
    baseItem: 'greatsword|phb',
    type: 'M',
    rarity: 'rare',
    reqAttune: 'by a fey',
    weight: 12,
    weaponCategory: 'martial',
    property: ['H', '2H', 'S', 'V', 'F'],
    dmg1: '2d8',
    dmgType: 'S',
    dmg2: '1d12',
    entries: [
      {
        type: 'entries',
        name: 'Special',
        entries: ['Minimum Strength score to wield Titania is 19, otherwise it is considered a improvised weapon.'],
      },
      {
        type: 'entries',
        name: 'Fey Weapon',
        entries: [
          'When wielded by a fairy this weapon becomes lighter, changing its properties to Versatile (1d12) and Finesse.',
          'Feeding fairy blood to the weapon (around 1 pint, half a liter) achives the same effect for non-fey wielders for 1 minute.',
          "As long as the sword is attuned to you and has the stats of a fey weapon, you can cast {@spell dorian's daydream|fcs} once a week.",
        ],
      },
    ],
    attachedSpells: ["dorian's daydream"],
  },
]
