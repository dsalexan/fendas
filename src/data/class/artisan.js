export default {
  name: 'Artisan',
  source: 'Fendas',
  page: 5,
  hd: {
    number: 1,
    faces: 8,
  },
  proficiency: ['con', 'cha'],
  classTableGroups: [
    {
      colLabels: ['Artistry Points'],
      rows: [
        [1],
        [2],
        [3],
        [4],
        [5],
        [6],
        [7],
        [8],
        [9],
        [10],
        [11],
        [12],
        [13],
        [14],
        [15],
        [16],
        [17],
        [18],
        [19],
        [20],
      ],
    },
  ],
  multiclassing: {
    requirements: {
      int: 13,
    },
    proficienciesGained: {
      armor: ['light', 'medium'],
      tools: [
        "Choose one from Alchemist's Supplies, Brewer's Supplies, Calligrapher's Supplies, Disguise kit, Forgery Kit, Jeweler's Tools, Painter's Supplies, Smith's Tools, Tinker's Tools",
      ],
    },
  },
  startingProficiencies: {
    armor: ['light', 'medium'],
    weapons: ['simple'],
    tools: [
      "Choose two from Alchemist's Supplies, Brewer's Supplies, Calligrapher's Supplies, Disguise kit, Forgery Kit, Jeweler's Tools, Painter's Supplies, Smith's Tools, Tinker's Tools",
    ],
    skills: [
      {
        choose: {
          from: [
            'Athletics',
            'Arcana',
            'History',
            'Insight',
            'Perception',
            'Investigation',
            'Persuasion',
            'Performance',
          ],
          count: 2,
        },
      },
    ],
  },
  startingEquipment: {
    additionalFromBackground: true,
    default: [
      '(a) {@item leather armor|phb} or (b) {@item chain shirt|phb}',
      '(a) two {@item handaxe|phb} or (b) any {@filter simple weapons|items|source=phb|category=basic|type=simple weapon}',
      "(a) a {@item dungeoneer's pack|phb} or (b) a {@item entertainer's pack|phb}",
      "(a) {@item calligrapher's supplies|phb} or (b) {@item painter's supplies|phb} or (c) {@item woodcarver's tools|phb}",
    ],
    goldAlternative: '{@dice 4d4×10|4d4 × 10|Starting Gold}',
  },
  classFeatures: [
    [
      {
        name: 'Artistry',
        entries: [
          'At 1st level, your passion for the arts fuels your artistic pursuits. You have a reservoir of mental energies represented by a pool of artistry points equal to your artisan level. You may spend these points to perform various artistry features. You start knowing three such features: Artful Craft, Artful Camouflage, and Artful Deceit. You learn more artistry features as you gain levels in this class',
          "When you spend a artistry point, it is unavailable until you finish a long rest, at the end of which you replenish all of your expended artistry. Some of your artistry features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:",
          {
            type: 'abilityDc',
            name: 'Artistry',
            attributes: ['int'],
          },
          {
            type: 'entries',
            name: 'Artful Craft',
            entries: [
              'During a short rest, you may spend 1 Artistry point to transform a mundane object in your inventory into a piece of artwork worth half your artisan level gold pieces (minimum 1).',
            ],
          },
          {
            type: 'entries',
            name: 'Artful Camouflage',
            entries: [
              'You learn to create convincing camouflage to help blend into your surroundings. To do so, select a camouflage from the list below, and spend 1 Artistry point and ten minutes to create the desired camouflage. You gain advantage on hide and stealth checks while in the terrain corresponding to your camouflage.',
              {
                type: 'table',
                caption: 'Camouflage',
                colLabels: ['Terrain'],
                colStyles: ['col-12 text-center'],
                rows: [['Desert'], ['Forest'], ['Mountain'], ['Snow'], ['Urban']],
              },
            ],
          },
          {
            type: 'entries',
            name: 'Artful Deceit',
            entries: [
              'You may spend 1 Artistry point and ten minutes to create a convincing disguise or forgery. You roll with advantage on your next ability check using the disguise kit or forgery kit.',
            ],
          },
        ],
      },
      {
        name: 'Flash of Inspiration',
        entries: [
          'Starting at 1st level, you learn to tap into your limitless pool ofcreativity and apply it to a given task. You may add yourproficiency bonus to one ability check you make. You can usethis feature a number of times equal to your Intelligencemodifier (a minimum of once). You regain any expended useswhen you finish a long rest.',
        ],
      },
    ],
    [
      {
        name: 'Profession',
        entries: [
          'When you reach 2nd level, you commit yourself to a profession: Alchemist, Blacksmith, Golemancer, or Tinkerer, all detailed at the end of the class description. Your profession grants you features at 2nd level and again at 6th, 10th, 14th and 18th level.',
        ],
        gainSubclassFeature: true,
      },
    ],
    [
      {
        name: 'Detail Oriented',
        entries: [
          'Beginning at 3rd level, your powers of observation becomerazor sharp, and your attention to detail means that nothingslips past you. Add half your proficiency modifier (minimum 1)to your passive perception. Also, you may spend 1 Artistrypoint to gain advantage on a single Wisdom (perception,insight) or Intelligence (investigation) check.',
        ],
      },
    ],
    [
      {
        name: 'Flash of Ingenuity',
        entries: [
          'Starting at 4th level, you can now use your Flash of Inspiration class feature to add your proficiency bonus to one saving throw you make.',
        ],
      },
      {
        name: 'Ability Score Improvement',
        entries: [
          "When you reach 4th, 8th, 12th, 16th, and 18th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        ],
      },
    ],
    [
      {
        name: 'Art of War',
        entries: [
          'At 5th level, your experience as an adventurer has taught you many harsh, but valuable lessons. You realize that in order to create something new, you must destroy something old, and you carry this ethos into your martial training. You can attack a target within range as a reaction immediately after hitting a target, or taking damage.',
        ],
      },
    ],
    [
      {
        name: 'Profession feature',
        entries: ['At 6th level, you gain one feature granted by your Profession.'],
        gainSubclassFeature: true,
      },
    ],
    [
      {
        name: 'Mastercraft Weapon',
        entries: [
          'When you reach 7th level, you complete your mastercraft weapon. Gain proficiency with a martial melee weapon of your choice, add one of that weapon to your inventory, and give it a name. The named weapon becomes your mastercraft weapon. You are assumed to have been working on you mastercraft weapon for quite some time, finally finishing it during a short or long rest after you reach 6th level.',
          'If you lose your mastercraft weapon or wish to create a new one, you can craft another mastercraft weapon. The process takes 24 hours over the course of three days and costs 200 gp. The cost represents the material components you expend to craft the weapon. You do not gain a new weapon proficiency from this feature after crafting a new mastercraft weapon.',
          'The bond you have with your mastercraft weapon fades once it’s discarded or lost. A discarded or lost mastercraft weapon mysteriously rusts and decays, becoming useless, and does not retain the bonuses gained from your other class features. Other creatures attempting to use your mastercraft weapon do so with disadvantage, and none of the bonuses gained from your class features.',
        ],
      },
    ],
    [
      {
        name: 'Ability Score Improvement',
        entries: ['At 8th level, you gain another Ability Score Improvement.'],
      },
      {
        name: 'Flash of Genius',
        entries: [
          'Beginning at 8th level, you can now use your Flash of Inspiration class feature to add your proficiency bonus to one Attack you make.',
        ],
      },
    ],
    [],
    [
      {
        name: 'Profession feature',
        entries: ['At 10h level, you gain one feature granted by your Profession.'],
        gainSubclassFeature: true,
      },
    ],
    [
      {
        name: 'Artful Mimicry',
        entries: [
          'Starting at 11th level, you have mastered the art of mimicry. Good artists copy, and you are no exception. Through careful observation, you are able to copy and learn from another creature’s actions.',
          'Whenever another creature you can see performs an ability check or the Attack action, you may use your reaction to spend 3 Artistry points, and copy the result for later use. The next time you would make the same ability check or Attack action, you may use the copied result instead of rolling your own. The copied result includes modifiers.',
          'You may only copy one ability check or Attack roll at a time. You may forget a copied result as a bonus action. You cannot copy the actions of a creature whose anatomy is dramatically different from your own.',
        ],
      },
    ],
    [
      {
        name: 'Ability Score Improvement',
        entries: ['At 12th level, you gain another Ability Score Improvement.'],
      },
    ],
    [],
    [
      {
        name: 'Profession feature',
        entries: ['At 14h level, you gain one feature granted by your Profession.'],
        gainSubclassFeature: true,
      },
    ],
    [
      {
        name: 'Intelligent Design',
        entries: [
          'When you reach 15th level, you modify your mastercraft weapon, improving upon its design, making it more intuitive to use, and tailoring it to your unique fighting style. When making an Attack with your mastercraft weapon, you use your choice of your Strength, Dexterity, or Intelligence modifier for the Attack and Damage Rolls. You must use the same modifier for both rolls.',
        ],
      },
      {
        name: 'Wondrous Invention',
        entries: ['At 15th level, you craft another item from your Wondrous Invention feature.'],
      },
    ],
    [
      {
        name: 'Ability Score Improvement',
        entries: ['At 16th level, you gain another Ability Score Improvement.'],
      },
    ],
    [
      {
        name: 'Grand Architect',
        entries: [
          'Starting at 17th level, you tap into the mystical energies provided by Gond to bring an object from your imagination into reality. To do so, use an action and spend 4 Artistry points to create an object--it must be no larger than a 5-foot cube.',
          'The object magically materializes in an unoccupied space of your choice within 30 feet of you. The object is made from your choice of one material: wood, stone, or iron. The maximum weight of the object cannot exceed 300lbs, and cannot be mechanically complicated, or magical.',
          {
            type: 'table',
            caption: 'Material Weight',
            colLabels: ['Material', 'Weight'],
            colStyles: ['col-8 text-center', 'col-4'],
            rows: [
              ['Cubic food of wood', '50 lbs'],
              ['Cubic food of stone', '150 lbs'],
              ['Cubic food of iron', '500 lbs'],
            ],
          },
        ],
      },
    ],
    [
      {
        name: 'Ability Score Improvement',
        entries: ['At 18th level, you gain another Ability Score Improvement.'],
        gainSubclassFeature: true,
      },
    ],
    [],
    [
      {
        name: 'Fate Shaper',
        entries: [
          'At 20th level, you have learned to intuitively shape the fate of those around you. Great artists steal, and you are no exception.',
          'Whenever another creature you can see performs an ability check or the Attack action, you may use your reaction to spend 5 Artistry points, and steal the result for later use. The target creature must make another ability check or Attack roll. The next time you would make the same ability check or Attack action, you may use the stolen result instead of rolling your own. The stolen result includes modifiers.',
          'You may only steal one ability check or Attack roll at a time. You may forget a stolen result as a bonus action. You cannot steal the actions of a creature whose anatomy is dramatically different from your own.',
        ],
      },
    ],
  ],
  subclassTitle: 'Profession',
  subclasses: [
    {
      name: 'Blacksmith',
      shortName: 'Blacksmith',
      subclassFeatures: [
        [
          {
            name: 'Blacksmith',
            entries: [
              'Blacksmiths dot the vast landscape of D&D, appearing as skilled craftspeople, shrewd negotiators, and mighty allies. Hardy and stoic, blacksmiths resemble the character of the weapons they forge. A blacksmith will always prefer to swing a hammer at a piece of hot steel than another living being. However, if a foe needs to be felled, you can count on a blacksmith’s blade to never dull.',
              {
                type: 'entries',
                name: 'Blacksmithing',
                entries: [
                  'Starting when you choose this profession at 2nd level, you learn the noble trade of blacksmithing. You may use this class feature to create one mundane weapon or armor from memory at the end of a long rest where you have access to a forge and an anvil. The process takes 2 hours, and requires blacksmithing tools. You may create any piece of equipment listed on the equipment table, spending an appropriate amount of gold pieces. The cost represents the material components you expend to craft the desired equipment.',
                ],
              },
              {
                type: 'entries',
                name: 'Cantrips',
                entries: ['At 2nd level, you know the mending and blade ward cantrips.'],
              },
              {
                type: 'entries',
                name: 'Martial Training',
                entries: [
                  'Beginning at 2nd level, you learn to use the implements of war you have learned to create. You gain proficiency with Heavy Armor and Martial Weapons',
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
                name: "Moradin's Fire",
                entries: [
                  'At 6th level, you have learned to summon Gond’s fire. You may use this class feature to produce an intense jet of flame from your mouth. You target a creature or object that you can see within 5 ft. If you target a creature, it must make a Dexterity saving throw against your Artistry save DC. A target takes 2d6 fire damage on a failed save, or half as much damage on a successful one. Once you use this feature, you can’t use it again until you finish a short or long rest. This feature also fulfills the blacksmithing forge requirement.',
                  'Additionally, your continued exposure to heat and extreme temperatures has granted you resistance to fire damage.',
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
                name: 'Arcane Forge',
                entries: [
                  'Beginning at 10th level, you learn to imbue your creations with magical power. Whenever you create a weapon or armor using Gond’s Fire, you may double the cost, and make a DC14 Intelligence (Arcana) check with your blacksmith’s tools. You create a weapon+1 or armor+1 on a successful check, or a mundane weapon or armor on a failed one.',
                  'Additionally, you modify your mastercraft weapon to become a weapon +1.',
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
                name: "Moradin's Anvil",
                entries: [
                  'Starting at 14th level, you have learned to summon an arcane anvil to shape your metals upon. To do so, your concentration is required to materialize Gond’s Anvil in an empty space on the floor you can see within 10ft of you. The anvil occupies two cubic feet of space, and weighs 300 lbs. After 1 minute, or until you lose your concentration, the anvil disappears. This feature also fulfills the blacksmithing anvil requirement.',
                ],
              },
              {
                type: 'entries',
                name: 'Imbue Mastercraft',
                entries: [
                  'At 14th level, you etch runes into your mastercraft weapon to imbue it with arcane power. Choose a damage type from the list below. You deal an additional 1d8 damage of the chosen type with your mastercraft weapon. You may change the type of damage this feature adds to your mastercraft weapon after a short or long rest.',
                  {
                    type: 'table',
                    caption: 'Imbued Mastercraft Damage',
                    colLabels: ['Type'],
                    colStyles: ['col-12 text-center'],
                    rows: [
                      ['Acid'],
                      ['Cold'],
                      ['Fire'],
                      ['Force'],
                      ['Lightning'],
                      ['Necrotic'],
                      ['Poison'],
                      ['Psychic'],
                      ['Radiant'],
                      ['Thunder'],
                    ],
                  },
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
                name: "Moradin's Forge",
                entries: [
                  'Starting at 18th level, you learn to imbue your creations with magical power. Whenever you create a weapon or armor using either Gond’s Fire and Gond’s anvil, you may triple the cost, and make a DC16 Intelligence (Arcana) check with your blacksmith’s tools. You create a weapon+3 or armor+3 on a successful check, or a mundane weapon or armor on a failed one. Additionally, you modify your mastercraft weapon to become a weapon+3.',
                ],
              },
            ],
          },
        ],
      ],
    },
  ],
}
