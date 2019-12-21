export default {
  name: 'Half-Fairy',
  source: 'Fendas',
  page: 13,
  size: 'M',
  speed: 30,
  ability: [
    {
      cha: 2,
      choose: {
        from: ['str', 'dex', 'con', 'int', 'wis'],
        count: 2,
        amount: 2,
      },
    },
  ],
  entries: [
    {
      name: 'Age',
      type: 'entries',
      entries: [
        'Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.',
      ],
    },
    {
      name: 'Alignment',
      type: 'entries',
      entries: [
        "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
      ],
    },
    {
      type: 'entries',
      name: 'Size',
      entries: ['Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.'],
    },
    {
      name: 'True Name',
      entries: [
        "A fae have advantage in all charisma checks against a creature whose name were freely (not under effect of spells such suggestion) given to the fairy. If a fairy give it's true name freely to a creature, such creature will have advantage in all charisma checks against the fairy.",
      ],
      type: 'entries',
    },
    {
      name: 'Fey Ancestry',
      entries: [
        "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep.",
      ],
      type: 'entries',
    },
    {
      name: 'Skill Versatility',
      entries: ['You gain proficiency in two skills of your choice.'],
      type: 'entries',
    },
    {
      name: 'Languages',
      entries: ['You can speak, read, and write Common, Sylvan, and one extra language of your choice.'],
      type: 'entries',
    },
  ],
  subraces: [
    {
      srd: true,
    },
    {
      name: 'Wood Elf Descent',
      source: 'SCAG',
      page: 116,
      entries: [
        {
          type: 'inset',
          name: 'Variant Feature (Choose 1)',
          entries: [
            {
              name: 'Skill Versatility',
              entries: ['You gain proficiency in two skills of your choice.'],
              type: 'entries',
            },
            {
              name: 'Keen Senses',
              entries: ['You have proficiency in the {@skill Perception} skill.'],
              type: 'entries',
            },
            {
              name: 'Elf Weapon Training',
              entries: ['You have proficiency with the longsword, shortsword, shortbow, and longbow.'],
              type: 'entries',
            },
            {
              name: 'Fleet of Foot',
              entries: ['Your base walking speed increases to 35 feet.'],
              type: 'entries',
            },
            {
              name: 'Mask of the Wild',
              entries: [
                'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.',
              ],
              type: 'entries',
            },
          ],
          data: {
            overwrite: 'Skill Versatility',
          },
        },
      ],
      traitTags: ['Skill Proficiency', 'Weapon Proficiency'],
      skillProficiencies: [
        {
          choose: {
            from: [
              'athletics',
              'acrobatics',
              'sleight of hand',
              'stealth',
              'arcana',
              'history',
              'investigation',
              'nature',
              'religion',
              'animal handling',
              'insight',
              'medicine',
              'perception',
              'survival',
              'deception',
              'intimidation',
              'performance',
              'persuasion',
            ],
            count: 2,
          },
        },
      ],
      overwrite: {
        skillProficiencies: true,
      },
    },
    {
      name: 'Moon Elf or Sun Elf Descent',
      source: 'SCAG',
      page: 116,
      entries: [
        {
          type: 'inset',
          name: 'Variant Feature (Choose 1)',
          entries: [
            {
              name: 'Skill Versatility',
              entries: ['You gain proficiency in two skills of your choice.'],
              type: 'entries',
            },
            {
              name: 'Keen Senses',
              entries: ['You have proficiency in the {@skill Perception} skill.'],
              type: 'entries',
            },
            {
              name: 'Elf Weapon Training',
              entries: ['You have proficiency with the longsword, shortsword, shortbow, and longbow.'],
              type: 'entries',
            },
            {
              name: 'Cantrip',
              entries: [
                'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.',
              ],
              type: 'entries',
            },
          ],
          data: {
            overwrite: 'Skill Versatility',
          },
        },
      ],
      traitTags: ['Skill Proficiency', 'Weapon Proficiency', 'Spellcasting'],
      skillProficiencies: [
        {
          choose: {
            from: [
              'athletics',
              'acrobatics',
              'sleight of hand',
              'stealth',
              'arcana',
              'history',
              'investigation',
              'nature',
              'religion',
              'animal handling',
              'insight',
              'medicine',
              'perception',
              'survival',
              'deception',
              'intimidation',
              'performance',
              'persuasion',
            ],
            count: 2,
          },
        },
      ],
      overwrite: {
        skillProficiencies: true,
      },
    },
    {
      name: 'Drow Descent',
      source: 'SCAG',
      page: 116,
      entries: [
        {
          type: 'inset',
          name: 'Variant Feature (Choose 1)',
          entries: [
            {
              name: 'Skill Versatility',
              entries: ['You gain proficiency in two skills of your choice.'],
              type: 'entries',
            },
            {
              name: 'Keen Senses',
              entries: ['You have proficiency in the {@skill Perception} skill.'],
              type: 'entries',
            },
            {
              name: 'Drow Magic',
              entries: [
                'You know the {@spell dancing lights} cantrip. When you reach 3rd level, you can cast the {@spell faerie fire} spell once per day; you must finish a long rest in order to cast the spell again using this trait. When you reach 5th level, you can also cast the {@spell darkness} spell once per day; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells.',
              ],
              type: 'entries',
            },
          ],
          data: {
            overwrite: 'Skill Versatility',
          },
        },
      ],
      traitTags: ['Skill Proficiency', 'Spellcasting'],
      skillProficiencies: [
        {
          choose: {
            from: [
              'athletics',
              'acrobatics',
              'sleight of hand',
              'stealth',
              'arcana',
              'history',
              'investigation',
              'nature',
              'religion',
              'animal handling',
              'insight',
              'medicine',
              'perception',
              'survival',
              'deception',
              'intimidation',
              'performance',
              'persuasion',
            ],
            count: 2,
          },
        },
      ],
      overwrite: {
        skillProficiencies: true,
      },
    },
    {
      name: 'Aquatic Elf Descent',
      speed: {
        walk: 30,
        swim: 30,
      },
      source: 'SCAG',
      page: 116,
      entries: [
        {
          type: 'inset',
          name: 'Variant Feature (Choose 1)',
          entries: [
            {
              name: 'Skill Versatility',
              entries: ['You gain proficiency in two skills of your choice.'],
              type: 'entries',
            },
            {
              name: 'Keen Senses',
              entries: ['You have proficiency in the {@skill Perception} skill.'],
              type: 'entries',
            },
            {
              name: 'Swim',
              entries: ['You gain a swimming speed of 30 ft.'],
              type: 'entries',
            },
          ],
          data: {
            overwrite: 'Skill Versatility',
          },
        },
      ],
      traitTags: ['Skill Proficiency'],
      skillProficiencies: [
        {
          choose: {
            from: [
              'athletics',
              'acrobatics',
              'sleight of hand',
              'stealth',
              'arcana',
              'history',
              'investigation',
              'nature',
              'religion',
              'animal handling',
              'insight',
              'medicine',
              'perception',
              'survival',
              'deception',
              'intimidation',
              'performance',
              'persuasion',
            ],
            count: 2,
          },
        },
      ],
      overwrite: {
        skillProficiencies: true,
      },
    },
    {
      name: 'Mark of Detection',
      source: 'ERLW',
      page: 40,
      otherSources: [
        {
          source: 'UAWGE',
          page: 96,
        },
      ],
      ability: [
        {
          wis: 2,
          choose: {
            from: ['str', 'dex', 'con', 'int', 'cha'],
            count: 1,
          },
        },
      ],
      entries: [
        {
          type: 'entries',
          name: 'Deductive Intuition',
          entries: [
            'When you make an Intelligence ({@skill Investigation}) or a Wisdom ({@skill Insight}) check, you can roll a {@dice d4} and add the number rolled to the ability check.',
          ],
          data: {
            overwrite: 'Skill Versatility',
          },
        },
        {
          type: 'entries',
          name: 'Magical Detection',
          entries: [
            "You can cast the {@spell detect magic} and {@spell detect poison and disease} spells with this trait. Starting at 3rd level, you can also cast the {@spell see invisibility} spell with it. Once you cast any of these spells with this trait, you can't cast that spell with it again until you finish a long rest. Intelligence is your spellcasting ability for these spells, and you don't require material components for them.",
          ],
        },
        {
          type: 'entries',
          name: 'Spells of the Mark',
          entries: [
            'If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Detection Spells table are added to the spell list of your spellcasting class.',
            {
              type: 'table',
              caption: 'Mark of Detection Spells',
              colLabels: ['Spell Level', 'Spells'],
              colStyles: ['col-2 text-center', 'col-10'],
              rows: [
                ['1st', '{@spell detect evil and good}, {@spell detect poison and disease}'],
                ['2nd', '{@spell detect thoughts}, {@spell find traps}'],
                ['3rd', '{@spell clairvoyance}, {@spell nondetection}'],
                ['4th', '{@spell arcane eye}, {@spell divination}'],
                ['5th', '{@spell legend lore}'],
              ],
            },
          ],
        },
      ],
      traitTags: ['Spellcasting', 'Dragonmark'],
      overwrite: {
        ability: true,
      },
    },
    {
      name: 'Mark of Storm',
      source: 'ERLW',
      page: 50,
      otherSources: [
        {
          source: 'UAWGE',
          page: 106,
        },
      ],
      ability: [
        {
          cha: 2,
          dex: 1,
        },
      ],
      entries: [
        {
          type: 'entries',
          name: "Windwright's Intuition",
          entries: [
            "When you make a Dexterity ({@skill Acrobatics}) check or any ability check involving {@item navigator's tools|PHB}, you can roll a {@dice d4} and add the number rolled to the ability check.",
          ],
          data: {
            overwrite: 'Skill Versatility',
          },
        },
        {
          type: 'entries',
          name: "Storm's Boon",
          entries: ['You have resistance to lightning damage.'],
        },
        {
          type: 'entries',
          name: 'Headwinds',
          entries: [
            'You know the {@spell gust|XGE} cantrip. Starting at 3rd level, you can cast the {@spell gust of wind} spell once with this trait, and you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells.',
          ],
        },
        {
          type: 'entries',
          name: 'Spells of the Mark',
          entries: [
            'If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Storm Spells table are added to the spell list of your spellcasting class.',
            {
              type: 'table',
              caption: 'Mark of Storm Spells',
              colLabels: ['Spell Level', 'Spells'],
              colStyles: ['col-2 text-center', 'col-10'],
              rows: [
                ['1st', '{@spell feather fall}, {@spell fog cloud}'],
                ['2nd', '{@spell gust of wind}, {@spell levitate}'],
                ['3rd', '{@spell sleet storm}, {@spell wind wall}'],
                ['4th', '{@spell conjure minor elementals}, {@spell control water}'],
                ['5th', '{@spell conjure elemental}'],
              ],
            },
          ],
        },
      ],
      traitTags: ['Damage Resistance', 'Spellcasting', 'Dragonmark'],
      overwrite: {
        ability: true,
      },
    },
  ],
  soundClip: 'https://media-waterdeep.cursecdn.com/file-attachments/0/259/half-elf.mp3',
  traitTags: ['Skill Proficiency', 'Uncommon Race'],
  skillProficiencies: [
    {
      choose: {
        from: [
          'athletics',
          'acrobatics',
          'sleight of hand',
          'stealth',
          'arcana',
          'history',
          'investigation',
          'nature',
          'religion',
          'animal handling',
          'insight',
          'medicine',
          'perception',
          'survival',
          'deception',
          'intimidation',
          'performance',
          'persuasion',
        ],
        count: 2,
      },
    },
  ],
  languageProficiencies: [
    {
      common: true,
      elvish: true,
      anyStandard: 1,
    },
  ],
}
