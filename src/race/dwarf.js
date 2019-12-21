export default {
  name: 'Dwarf',
  source: 'PHB',
  subraces: [
    {
      name: 'Frost',
      ability: [
        {
          cha: 1,
        },
      ],
      entries: [
        {
          name: 'Frigid Resistance',
          entries: ['You have resistance to cold damage.'],
          type: 'entries',
        },
        {
          name: 'Shipbuilder',
          entries: [
            'Whenever you attempt to conceptualize a repair or an upgrade to a water vehicle that requires special materials, you know of said materials and where to find them, but dependent on the materials or what they will be used for, the DM may rule their rarity/difficulty when it comes to obtaining them. Additionally whenever you attempt to fix a water vehicle, make an upgrade or an addition, you have advantage on the ablilty check being made.',
          ],
          type: 'entries',
        },
      ],
      traitTags: ['Damage Resistance'],
    },
  ],
}
