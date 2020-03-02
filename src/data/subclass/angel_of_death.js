export default {
  class: 'Warlock',
  name: 'The Angel of Death',
  shortName: 'Angel of Death (FCS)',
  source: 'Fendas',
  page: 9,
  subclassFeatures: [
    [
      {
        name: 'The Angel of Death',
        entries: [
          'Azrael, as it was known in the most ancient of tomes. Be a old god spawn into existence as a making of the Void God or a otherwordly creature arriving at Ertra from its cosmic travels, this "angel" ascended beyond its pairs by gathering power from the fallen gods of the underworld.',
          'It is not a force of chaos nor a force of evil. The Angel of Death chooses those who acknowledge no limitations or obstracles in their search for power.',
          {
            type: 'entries',
            name: 'Expanded Spell List',
            entries: [
              'The Angel of Death lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.',
              {
                type: 'table',
                caption: 'Angel of Death Expanded Spells',
                colLabels: ['Spell Level', 'Spells'],
                colStyles: ['col-3 text-center', 'col-9'],
                rows: [
                  ['1st', '{@spell inflict wounds}, {@spell ray of sickness}'],
                  ['2nd', '{@spell blindness/deafness}, {@spell phantasmal force}'],
                  ['3rd', "{@spell azrael's black hole sun|Fendas}, {@spell feign death}"],
                  ['4th', "{@spell phantasmal killer}, {@spell evard's black tentacles}"],
                  ['5th', '{@spell reincarnate}, {@spell planar binding}'],
                ],
              },
            ],
          },
          {
            name: "Archangel's Blessing",
            entries: [
              'Starting at 1st level, when you reduce a hostile creature to 0 hit points or when you score a critical hit, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1). Every time you gain temporary hit points this way your body acquire some physical celestial traits such as beast-like pupils, scales, extremelly whitened/darkned skin, etc. These traits disappear after a long rest.',
              'Additionally, you can cast speak with dead as a ritual once per short or long rest.',
            ],
          },
        ],
      },
    ],
    [
      {
        entries: [
          {
            name: 'Near-Death Experience',
            entries: [
              'The will of your patron flows through you, and you have become versed in channeling it into blurring the limitations of the living.',
              "Once you reach 6th level, you may, as a reaction, empower a entity to resist death itself. A creature of your choosing in 60 ft does not fall uncounscious or dead by hitting 0 or less hit points (however it continues to make death saving throws each of its rounds, even if it normally wouldn't). If it succeeds its death saving throws, the creature gains 1 point of exhaustion.",
              'You can only use this feature once per long rest, and a creature can only be targeted by this feature once a week.',
            ],
          },
        ],
      },
    ],
    [
      {
        entries: [
          {
            name: 'Unknown 10th Feature',
            entries: ['Lorem Ipsum Dolor'],
          },
        ],
      },
    ],
    [
      {
        entries: [
          {
            name: 'Unknown 14th Feature',
            entries: ['Lorem Ipsum Dolor'],
          },
        ],
      },
    ],
  ],
}
