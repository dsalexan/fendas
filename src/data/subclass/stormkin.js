export default {
  class: 'Paladin',
  name: 'Oath of the Stormkin',
  source: 'Fendas',
  shortName: 'Stormkin (FCS)',
  page: 19,
  subclassFeatures: [
    [
      {
        name: 'Oath of the Stormkin',
        entries: [
          '(...)',
          {
            type: 'entries',
            name: 'Tenets of the Stormkin',
            entries: [
              'Though never quite the same wording or structure, Stormkin paladins follow a common core of values that can be summarised by the following.',
              {
                type: 'entries',
                entries: [
                  {
                    type: 'entries',
                    name: 'Right by Conquest',
                    entries: [
                      "That which is taken by force, is by rights property of the one who took it. Paladins of the Storm deny a person's right to life or property unless they are capable of defending it.",
                    ],
                  },
                ],
              },
              {
                type: 'entries',
                entries: [
                  {
                    type: 'entries',
                    name: 'Strength Deserves Respect',
                    entries: [
                      'Those who have proven themselves capable deserve to be treated as an equal. Paladins of this oath believe strength to be a pillar of leadership, whether is be physical limits or mental, weakness is not tolerated nor allowed to lead. However, respect does not mean exempt of reproach or criticism.',
                    ],
                  },
                ],
              },
              {
                type: 'entries',
                entries: [
                  {
                    type: 'entries',
                    name: 'Even Storms Relent',
                    entries: [
                      'When you have beaten a foe, though they are deserved of your contempt, you should never needlessly brutalise his people or land. Paladins of the Storm do not disprove of raiding or pillaging, far from it, but they emphasise the mercy and justice needed of any person of power or otherwise, be it harsh justice and rare mercy.',
                    ],
                  },
                ],
              },
              {
                type: 'entries',
                entries: [
                  {
                    type: 'entries',
                    name: '?????',
                    entries: ['?????.'],
                  },
                ],
              },
            ],
          },
          {
            type: 'entries',
            name: 'Oath Spells',
            entries: [
              'You gain oath spells at the paladin levels listed.',
              {
                type: 'table',
                caption: 'Oath of the Stormkin Spells',
                colLabels: ['Paladin Level', 'Spells'],
                colStyles: ['col-3 text-center', 'col-9'],
                rows: [
                  ['3rd', '{@spell thunderwave}, {@spell witch bolt}'],
                  ['5th', '{@spell pass without a trace}, {@spell shatter}'],
                  ['9th', '{@spell fear}, {@spell lightning bolt}'],
                  ['13th', '{@spell elemental weapon}, {@spell thunder step}*'],
                  ['17th', '{@spell stormsphere}, {@spell legend lore}'],
                ],
              },
            ],
          },
          {
            type: 'entries',
            name: 'Channel Divinity: Thunderstruck',
            entries: [
              'As a bonus action, you can use your Channel Divinity to cover your body with a layer of electricity. You emit a dim light in a 5 ft. (1.5 m) radius and Thunderstruck lasts for a number of rounds equal to 1 + your Charisma modifier. Any unarmored strikes you make deals a additional 1d4 lightning damage and any creature that hits a melee attack against you takes 1d6 lightning damage.',
              'The dice for the damage towards creatures that successfully hit you increase to 2d6 at 6th level, 3d6 ath 10th level, 4d6 14th and 5d6 at 18th.',
            ],
          },
          {
            type: 'entries',
            name: 'Channel Divinity: Shoot to Thrill',
            entries: [
              'As a bonus action, you can use your Channel Divinity to gather divine energy to empower your strikes and defenses. A sphere of electrical magic appears somewhere in the space around your body, emitting dim light in a 5 ft. (1,5 m) radius. While your concentration is not broken the sphere slowly grows in size and light emitted. For every turn in concentration the dim light area increases by 5 ft. When concentration is broken or as a bonus action you can release the energy in the sphere, adding 1d6 of lightning damage (for each turn in concentration) to a successful attack roll or dissipate the electricity in the air. The lightning damage dice can only be added to damage rolls that already have lightening or thunder type.',
              'The damage die increases to 1d8 at 7th level, 1d10 at 15th level and 1d12 at 20th level. Concentration is broken automatically after 1 minute.',
            ],
          },
        ],
      },
    ],
    [
      {
        entries: [
          {
            type: 'entries',
            name: 'Aura of the Stormbreaker',
            entries: [
              'Starting at 7th level, the air around you becomes heavy, and the scent of rain and salt lingers. This aura extends 10 feet from you in every direction, but not through total cover.',
              'If a creature if hostile to you, the area becomes difficult terrain while in the aura. If a creature is friendly (and you) it cannot be surprised while in the aura.',
              'This aura increases to 30 feet at 18th level.',
            ],
          },
        ],
      },
    ],
    [
      {
        entries: [
          {
            type: 'entries',
            name: 'Thunder of the Gods',
            entries: ['At 15th level,'],
          },
        ],
      },
    ],
    [
      {
        entries: [
          {
            type: 'entries',
            name: 'Immigrant Song',
            entries: [
              'At 20th level, you can directly assume the personified form of your deity. For 1 minute, you gain the following benefits:',
              {
                type: 'list',
                items: [
                  'Your movement speed is doubled, and you provoke no attacks of opportunity.',
                  'Your AC increases by your Strength modifier.',
                  'You can use your Thunderstruck Channel Divinity option without consuming your Channel Divinity usage for the duration.',
                ],
              },
            ],
          },
        ],
      },
    ],
  ],
}
