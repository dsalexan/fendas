export default {
  name: 'Ashari Firetamer',
  group: 'Ashari',
  source: 'TalDorei',
  page: 128,
  tokenUrl: 'https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/TalDorei/Ashari_Firetamer.png',
  size: 'M',
  type: {
    type: 'humanoid',
    tags: ['any race'],
  },
  alignment: ['N', 'G'],
  ac: [
    {
      ac: 17,
      from: ['{@item red dragon scale mail}'],
    },
  ],
  hp: {
    formula: '16d8 + 20',
    average: 92,
  },
  speed: {
    walk: 30,
  },
  str: 8,
  dex: 15,
  con: 14,
  int: 12,
  wis: 18,
  cha: 11,
  skill: {
    arcana: '+5',
    nature: '+9',
  },
  passive: 14,
  resist: ['fire'],
  languages: ['Common', 'Druidic', 'Primordial (Ignan)'],
  cr: '7',
  spellcasting: [
    {
      name: 'Spellcasting',
      headerEntries: [
        'The firetamer is a 9th-level spellcaster. Its spellcasting ability is Wisdom (spell save {@dc 16}, +8 to hit with spell attacks). It has the following druid spells prepared:',
      ],
      spells: {
        '0': {
          spells: ['{@spell druidcraft}', '{@spell mending}', '{@spell produce flame}'],
        },
        '1': {
          spells: ['{@spell cure wounds}', '{@spell faerie fire}', '{@spell jump}', '{@spell longstrider}'],
          slots: 4,
        },
        '2': {
          spells: ['{@spell flame blade}', '{@spell heat metal}', '{@spell lesser restoration}'],
          slots: 3,
        },
        '3': {
          spells: ['{@spell daylight}', '{@spell dispel magic}', '{@spell protection from energy}'],
          slots: 3,
        },
        '4': {
          spells: ['{@spell blight}', '{@spell freedom of movement}', '{@spell wall of fire}'],
          slots: 3,
        },
        '5': {
          spells: ['{@spell conjure elemental}'],
          slots: 1,
        },
      },
      ability: 'wis',
      type: 'spellcasting',
    },
  ],
  trait: [
    {
      name: 'Flameform.',
      entries: [
        'As a bonus action, the firetamer can transform into a {@creature fire elemental}. While in this form, the firetamer cannot cast spells, but can expend a spell slot as a bonus action to regain {@dice 1d8} hit points per level of the spell slot expended. When the firetamer is reduced to 0 hit points, falls {@condition unconscious}, or dies in this form, it reverts to its humanoid form. It can remain in flameform for up to 5 hours, and can enter flameform twice, regaining expended uses after completing a short or long rest.',
      ],
    },
  ],
  action: [
    {
      name: 'Scimitar',
      entries: [
        '{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) slashing damage plus {@h}14 ({@damage 4d6}) fire damage.',
      ],
    },
    {
      name: 'Flamecharm (Recharges after a Short or Long Rest)',
      entries: [
        'The firetamer can cast {@spell dominate monster} ({@dc 16}) on a fire elemental or other fire elemental creature. If the elemental has 150 or more hit points, it has advantage on the saving throw.',
      ],
    },
  ],
  fluff: {
    entries: [
      'Though the tribes of the Ashari wardens are neutral and spurn the "petty political nonsense" that they consider outsiders to be focused on, it is still all too easy to run afoul of the Ashari. They consider the strange elemental rifts over which they are guardians to be of foremost importance, and it is very easy for strangers to take actions that unknowingly disrupt the delicate balance over which the Ashari carefully watch. Though they are generally friendly to travelers\u2014particularly to travelers in need\u2014they are guarded, and do not hesitate to act to eliminate threats to the elemental powers and their own way of life.',
      "Of all the ashari tribes, the fire ashari of Pyrah have suffered the greatest. Their people were all but destroyed when Thordak burst through the Rift of Flame in his cataclysmic return to Exandria. Yet despite their immense hardships, the fire ashari have given selflessly to the people of Tal'Dorei. Led by a half-orc ashari named Lorkathar, a group of firetamers keep watch over the volatile Scar of the Cinder King on the outskirts of Emon.",
      "Firetamers are the elite elementalists of the Pyrah, using their attunement to the primordial forces of the world to not just create fire, not just command it, but tame it to their will. A firetamer of Pyrah is nothing like the manic pyromancers of Tal'Dorei; while the latter recklessly wields fire as a weapon, firetamers use their talent to protect others from fire's destructive power\u2014or to use that same power to destroy those who threaten their people. Firetamers are almost always accompanied by a salamander, a fire elemental, or a small herd of magma or smoke mephits. While home in Pyrah, ashari firetamers use their power to control the Rift of Flame or to control the flames of the Cindergrove.",
    ],
  },
  languageTags: ['C', 'DU', 'P', 'IG'],
  damageTags: ['S', 'F'],
  spellcastingTags: ['CD'],
  miscTags: ['MW'],
}
