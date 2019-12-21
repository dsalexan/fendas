// prerequisite: [
//   {
//     level: {
//       level: 5,
//       class: {
//         name: 'Warlock',
//       },
//     },
//     patron: 'The Angel of Death',
//   },
// ],

export default [
  {
    name: 'Aimed Shot',
    entries: [
      "As an action, you can spend 1 grit point to carefully line up a perfect shot. Make a ranged weapon attack against the target of your Hunter's Mark. If the attack hits, it inflicts an extra 1d8 damage of the weapon's type. This extra damage increases to 3d8 at 6th level and 5d8 at 9th level. When you use this exploit, your speed becomes 0 until the start of your next turn.",
    ],
    source: 'Fendas',
    featureType: 'EXPT',
  },
  {
    name: 'Coup de Grace',
    entries: [
      "If a creature targeted by your Hunter's Mark is prone or incapacitated, once per turn you can spend 1 grit point to inflict 1d8 extra damage of the weapon's type when you hit the creature with a weapon attack. This extra damage increases to 2d8 at 9th level.",
    ],
    source: 'Fendas',
    featureType: 'EXPT',
  },
  {
    name: 'Crippling Blow',
    prerequisite: [
      {
        level: {
          level: 6,
          class: {
            name: 'Ranger, Reimaginated',
          },
        },
      },
    ],
    entries: [
      "If a creature targeted by your Hunter's Mark is prone or incapacitated, once per turn you can spend 1 grit point to inflict 1d8 extra damage of the weapon's type when you hit the creature with a weapon attack. This extra damage increases to 2d8 at 9th level.",
    ],
    source: 'Fendas',
    featureType: 'EXPT',
  },
  {
    name: 'Disarming Strike',
    entries: [
      "When you hit the target of your Hunter's Mark with a weapon attack, you can spend 1 grit point to attempt to disarm the target, forcing it to drop one item of your choice that it's holding. The target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet.",
    ],
    source: 'Fendas',
    featureType: 'EXPT',
  },
  {
    name: 'Escape the Horde',
    entries: [
      "When a hostile creature moves within 5 feet of you, as a reaction you can spend 1 grit point to move up to half your speed. This movement doesn't provoke opportunity attacks.",
    ],
    source: 'Fendas',
    featureType: 'EXPT',
  },
  {
    name: 'Ignore Pain',
    entries: [
      'When you take damage, as a reaction you can spend 1 grit point to reduce the damage taken by 1d6 + your Wisdom modifier.',
    ],
    source: 'Fendas',
    featureType: 'EXPT',
  },
  {
    name: 'Multiattack Defense',
    entries: [
      'When a creature hits you with an attack, you can spend 1 grit point to gain a +4 bonus to AC against all subsequent attacks made by that creature until the start of its next turn.',
    ],
    source: 'Fendas',
    featureType: 'EXPT',
  },
  {
    name: 'Stand Against the Tide',
    prerequisite: [
      {
        level: {
          level: 6,
          class: {
            name: 'Ranger, Reimaginated',
          },
        },
      },
    ],
    entries: [
      'When a hostile creature misses you with a melee attack, as a reaction you can spend 1 grit point to force that creature to repeat the same attack against another creature (other that itself) of your choice.',
    ],
    source: 'Fendas',
    featureType: 'EXPT',
  },
]
