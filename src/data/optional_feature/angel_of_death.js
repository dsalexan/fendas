export default [
  {
    name: 'Affinity for the Dead',
    prerequisite: [
      {
        level: {
          level: 5,
          class: {
            name: 'Warlock',
          },
        },
        patron: 'The Angel of Death',
      },
    ],
    entries: [
      'Your control of the dead is unmatched. When you cast {@spell speak with dead|phb}, you understand the target, even if they do not share a language with you. The target is compelled to give you truthful answers.',
      "Additionally, you can cast {@spell animate dead|phb} once using a warlock spell slot. You can't do so again until you finish a long rest.",
    ],
    source: 'Fendas',
    featureType: 'EI',
  },
  {
    name: 'Dominate Dead',
    prerequisite: [
      {
        level: {
          level: 5,
          class: {
            name: 'Warlock',
          },
        },
        patron: 'The Angel of Death',
      },
    ],
    entries: [
      "As an action, you target one undead you can see within 30 ft and invoke your patron’s authority over it. It must make a Charisma saving throw (with advantage if you or your allies are hostile to it). On a failed save, it must obey your commands for the next 24 hours, or until you use this Invocation again. Undead who's CR are equal to or greater than half your Warlock level are immune to this Invocation.",
      'Once you use this invocation, you cannot do so again until you finish a long rest.',
    ],
    source: 'Fendas',
    featureType: 'EI',
  },
  {
    name: 'Eldritch Solar Flare',
    prerequisite: [
      {
        spell: ['eldritch blast#c'],
        patron: 'The Angel of Death',
      },
    ],
    entries: [
      'When you cast {@spell eldritch blast|phb}, you can absorve flames from any nonmagical source in 30 feet to add 1d6 fire damage a hit.',
    ],
    source: 'Fendas',
    featureType: 'EI',
  },
  {
    name: 'Sanguine Blade',
    prerequisite: [
      {
        pact: 'Blade',
      },
    ],
    entries: [
      'When you hit a creature with your pact weapon, you can choose to channel blood into your attack, allowing you to damage up to two secondary targets that are within 5 feet of the primary target.',
      'If you do so, roll a d4 and lose a number of hit points equal to the number rolled. Each secondary target takes necrotic damage equal to that roll.',
    ],
    source: 'Fendas',
    featureType: 'EI',
  },
]
