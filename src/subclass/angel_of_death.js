export default {
  class: 'Warlock',
  name: 'The Angel of Death',
  shortName: 'Angel of Death (Fendas)',
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
                  ['5th', '{@spell cloudkill}, {@spell hallow}'],
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
            name: 'Master of Death',
            entries: [
              'The will of your patron flows through you, and you have become versed in channeling it into the bones of the dead to raise powerful, combat-ready servants.',
              'Once you reach 6th level, you may, as an action, use a warlock spell slot to raise one undead minion (either a skeleton elite, flame skeleton, warhore skeleton or similar) from a corresponding pile of bones or corpse within 10 feet. Exceptionally, a warhorse raised this way cannot attack.',
              'Undead creatures raised by this feature gain the following benefits:',
              {
                type: 'list',
                items: [
                  "The creature's hit point maximum is increased by an amount equal to your warlock level.",
                  'The creature adds your proficiency bonus to its damage rolls from attacks.',
                ],
              },
              'You may raise up to two creatures instead of one at 7th level, and up to three creatures at 9th level.',
              'On each of your turns, you can use a bonus action to mentally command any creature you made with this ability if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of the at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.',
              'These creatures last until they are killed or until the end of the next short or long rest, upon which they crumble into dust. If these creatures would expire due to a rest, you can instead gain one less warlock spell slot from the rest per each spell slot spent on this to feature to keep them active.',
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
