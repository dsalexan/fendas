function dice(number = 1, faces = 4) {
  return {
    type: 'dice',
    toRoll: [
      {
        number,
        faces,
      },
    ],
  }
}

export default {
  name: 'Ranger, Reimaginated',
  source: 'Fendas',
  page: 8,
  hd: {
    number: 1,
    faces: 10,
  },
  proficiency: ['str', 'dex'],
  classTableGroups: [
    {
      colLabels: ["Hunter's Mark"],
      rows: [
        [dice(1, 4)],
        [dice(1, 4)],
        [dice(1, 4)],
        [dice(1, 4)],
        [dice(1, 6)],
        [dice(1, 6)],
        [dice(1, 6)],
        [dice(1, 6)],
        [dice(1, 6)],
        [dice(1, 6)],
        [dice(1, 8)],
        [dice(1, 8)],
        [dice(1, 8)],
        [dice(1, 8)],
        [dice(1, 8)],
        [dice(1, 8)],
        [dice(1, 10)],
        [dice(1, 10)],
        [dice(1, 10)],
        [dice(1, 10)],
      ],
    },
  ],
  multiclassing: {
    requirements: {
      dex: 13,
      wis: 13,
    },
    proficienciesGained: {
      armor: ['light', 'medium', 'shields'],
      weapons: ['simple', 'martial'],
      skills: [
        {
          choose: {
            from: [
              'animal handling',
              'athletics',
              'insight',
              'investigation',
              'nature',
              'perception',
              'stealth',
              'survival',
            ],
            count: 1,
          },
        },
      ],
    },
  },
  startingProficiencies: {
    armor: ['light', 'medium', 'shields'],
    weapons: ['simple', 'martial'],
    skills: [
      {
        choose: {
          from: [
            'acrobatics',
            'athletics',
            'insight',
            'investigation',
            'investigation',
            'nature',
            'perception',
            'stealth',
            'survival',
          ],
          count: 4,
        },
      },
    ],
  },
  startingEquipment: {
    additionalFromBackground: true,
    default: [
      '(a) two {@item shortsword|phb|shortswords} or (b) two {@filter simple melee weapons|items|source=phb|category=basic|type=simple weapon;melee weapon=sand}',
      "(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
      '(a) a {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows} or (b) a {@item light crossbow|phb} and a {@item quiver|phb} of {@item bolts (20)|phb|20 bolts}',
      '{@item studded leather armor|phb}',
    ],
    goldAlternative: '{@dice 5d4×10|5d4 × 10|Starting Gold}',
  },
  classFeatures: [
    [
      {
        name: "Hunter's Mark",
        entries: [
          'You have learned to read your prey, analyzing it with a careful eye and allowing your attacks to strike deeper and truer.',
          'As a bonus action on your turn, you can choose a creature you can see within 60 feet of you and mark it as your quarry. Enemies are unaware they are marked, although they may notice you studying them and draw their own conclusions. You can maintain this mark for a number of hours equal to your ranger level.',
          "Whenever you hit the marked target with a weapon attack you deal extra damage of the weapon's type, as shown on the Ranger table. While your prey is marked, you have advantage on Wisdom (Perception) or Wisdom (Survival) checks you make to find or track it.",
          'This effect ends if you fall unconscious, use it on another creature, or dismiss it as a bonus action.',
          'You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a short or long rest.',
        ],
      },
      {
        name: 'Deft Explorer',
        entries: [
          '{@i 1st-level ranger feature (replaces Natural Explorer)}',
          'You are an unsurpassed explorer and survivor. Choose one of the following benefits, and then choose another one at 6th and 10th level.',
          {
            type: 'options',
            entries: [
              {
                name: 'Canny',
                entries: [
                  "Choose one skill: {@skill Animal Handling}, {@skill Athletics}, {@skill History}, {@skill Insight}, {@skill Investigation}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, or {@skill Survival}. You gain proficiency in the chosen skill if you don't already have it, and you can add double your proficiency bonus to ability checks using that skill.",
                  'In addition, thanks to your extensive wandering, you are able to speak, read, and write two languages of your choice.',
                ],
                type: 'entries',
              },
              {
                name: 'Roving',
                entries: [
                  'Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed.',
                ],
                type: 'entries',
              },
              {
                name: 'Tireless',
                entries: [
                  'As an action, you can give yourself a number of temporary hit points equal to {@dice 1d10} + your Wisdom modifier. You can use this special action a number of times equal to your Wisdom modifier (a minimum of once), and you regain all expended uses when you finish a long rest.',
                  'In addition, whenever you finish a short rest, your exhaustion level, if any, is decreased by 1.',
                ],
                type: 'entries',
              },
            ],
          },
        ],
        source: 'UAClassFeatureVariants',
        page: 7,
      },
    ],
    [
      {
        name: 'Fighting Style',
        entries: [
          "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
          {
            type: 'options',
            entries: [
              {
                type: 'entries',
                name: 'Archery',
                entries: ['You gain a +2 bonus to attack rolls you make with ranged weapons.'],
              },
              {
                type: 'entries',
                name: 'Close Quarters Shooter',
                entries: [
                  'When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.',
                ],
                source: 'UALightDarkUnderdark',
              },
              {
                type: 'entries',
                name: 'Defense',
                entries: ['While you are wearing armor, you gain a +1 bonus to AC.'],
              },
              {
                type: 'entries',
                name: 'Dueling',
                entries: [
                  'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.',
                ],
              },
              {
                type: 'entries',
                name: 'Mariner',
                entries: [
                  'As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to AC.',
                ],
                source: 'UAWaterborneAdventures',
              },
              {
                type: 'entries',
                name: 'Tunnel Fighter',
                entries: [
                  'As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach.',
                ],
                source: 'UALightDarkUnderdark',
              },
              {
                type: 'entries',
                name: 'Two-Weapon Fighting',
                entries: [
                  'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.',
                ],
              },
              {
                type: 'entries',
                name: 'Blind Fighting',
                entries: [
                  "Being unable to see a creature doesn't impose disadvantage on your attack rolls against it, provided the creature isn't hidden from you.",
                ],
                source: 'UAClassFeatureVariants',
                page: 12,
              },
              {
                type: 'entries',
                name: 'Interception',
                entries: [
                  'When a creature you can see hits a target that is within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by {@dice 1d10} + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.',
                ],
                source: 'UAClassFeatureVariants',
                page: 12,
              },
              {
                type: 'entries',
                name: 'Thrown Weapon Fighting',
                entries: [
                  'You can draw a weapon that has the thrown property as part of the attack you make with the weapon.',
                  'In addition, when you hit with a ranged attack using a thrown weapon, you gain a +1 bonus to the damage roll.',
                ],
                source: 'UAClassFeatureVariants',
                page: 12,
              },
              {
                type: 'entries',
                name: 'Unarmed Fighting',
                entries: [
                  'Your unarmed strikes can deal bludgeoning damage equal to {@dice 1d6} + your Strength modifier. If you strike with two free hands, the {@dice d6} becomes a {@dice d8}.',
                  'When you successfully start a grapple, you can deal {@dice 1d4} bludgeoning damage to the grappled creature. Until the grapple ends, you can also deal this damage to the creature whenever you hit it with a melee attack.',
                ],
                source: 'UAClassFeatureVariants',
                page: 12,
              },
              {
                type: 'entries',
                name: 'Druidic Warrior',
                entries: [
                  'You learn two cantrips of your choice from the {@filter druid spell list|spells|level=0|class=druid}. They count as druid spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the druid spell list.',
                ],
                source: 'UAClassFeatureVariants',
                page: 7,
              },
            ],
          },
        ],
      },
      {
        name: 'Martial Versatility',
        entries: [
          '{@i 2nd-level feature (enhances Fighting Style)}',
          'Whenever you gain a level in this class, you can replace a fighting style you know with another style available to your class. This change represents a shift of focus in your martial training and practice, causing you to lose the benefits of one style and gain the benefits of another style.',
        ],
        source: 'UAClassFeatureVariants',
        page: 12,
      },
      {
        name: 'Grit',
        entries: [
          'At 2nd level, your harsh experiences have given you immense skill and determination. You gain a number of grit points equal to your Wisdom modifier (minimum of 1). You regain all expended grit points whenever you finish a short or long rest. You also regain 1 grit point whenever you are critically hit by an attack or make a successful saving throw. You can never have more grit points than your Wisdom modifier.',
          {
            type: 'entries',
            name: 'Exploits',
            entries: [
              'You can spend your grit points to perform various {@filter exploits|optionalfeatures|Feature Type=EXPT}. You learn one exploit when you reach 3rd level, and one more each at 6th and 9th level. Additionally, when you learn a new exploit, you can choose one of the exploits you know and replace it with another exploit that you could learn at that level.',
              "If an exploit has prerequisites, you must meet them to learn it. You can learn the exploit at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class.Some of your exploits and ranger class features force your target to make a saving throw to resist the feature's effects.",
              {
                type: 'abilityDc',
                name: 'Spell',
                attributes: ['wis'],
              },
            ],
          },
        ],
      },
    ],
    [
      {
        name: 'Ranger Archetype',
        entries: [
          'At 3rd level, you choose an archetype that you strive to emulate from the list of available archetypes. Your choice grants features at 3rd level, and again at 7th, 11th, and 15th level.',
        ],
        gainSubclassFeature: true,
      },
    ],
    [
      {
        name: 'Ability Score Improvement',
        entries: [
          "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
          'If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}.',
        ],
      },
    ],
    [
      {
        name: 'Extra Attack',
        entries: [
          'Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn.',
        ],
      },
    ],
    [
      {
        name: 'Swift Response',
        entries: [
          'Starting at 6th level, you react with swift and lethal action when attacked. This grants you the following benefits: When you roll initiative, you can treat a d20 roll of 9 or lower as a 10.',
          'On your first turn in combat, you have advantage on attack rolls you make against creatures that have not yet acted.',
        ],
      },
    ],
    [
      {
        name: 'Ranger Archetype feature',
        entries: ['At 7th level, you gain a feature granted to you by your Ranger Archetype.'],
        gainSubclassFeature: true,
      },
    ],
    [
      {
        name: 'Ability Score Improvement',
        entries: [
          "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
          'If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}.',
        ],
      },
    ],
    [
      {
        name: 'Keen Eye',
        entries: [
          "Starting at 9th level, you are adept at picking up on the weaknesses of your prey. As a bonus action, you can study a creature targeted by your Hunter's Mark and learn whether the creature has any damage immunities, resistances, or vulnerabilities and what they are. If the creature is hidden from divination magic, you sense that it has no damage immunities, resistances, or vulnerabilities.",
        ],
      },
    ],
    [
      {
        name: 'Relentless Endurance',
        entries: [
          'Starting at 10th level, you gain temporary hit points equal to your ranger level whenever you finish a short or long rest.',
        ],
      },
    ],
    [
      {
        name: 'Ranger Archetype feature',
        entries: ['At 11th level, you gain a feature granted to you by your Ranger Archetype.'],
        gainSubclassFeature: true,
      },
    ],
    [
      {
        name: 'Ability Score Improvement',
        entries: [
          "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
          'If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}.',
        ],
      },
    ],
    [
      {
        name: "Ranger's Guard",
        entries: [
          "At 13th level, whenever the target of your Hunter's Mark forces you to make a saving throw and whenever you make an ability check to escape that target's grapple, add 1d6 to your roll.",
        ],
      },
    ],
    [
      {
        name: 'Blindfighting',
        entries: [
          'At 14th level, you gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it.',
        ],
      },
    ],
    [
      {
        name: 'Ranger Archetype feature',
        entries: ['At 15th level, you gain a feature granted to you by your Ranger Archetype.'],
        gainSubclassFeature: true,
      },
    ],
    [
      {
        name: 'Ability Score Improvement',
        entries: [
          "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
          'If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}.',
        ],
      },
    ],
    [
      {
        name: 'Counterattack',
        entries: [
          "At 17th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Hunter's Mark forces you to make a saving throw, you can use your reaction to make one weapon attack against the quarry. You make this attack immediately before making the saving throw. If your attack hits, your save automatically succeeds, in addition to the attack's normal effects.",
          'You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened.',
        ],
      },
    ],
    [
      {
        name: 'Expert Skirmisher',
        entries: [
          'By 18th level, you are a master of maneuvering in combat. Your movement no longer provokes opportunity attacks.',
        ],
      },
    ],
    [
      {
        name: 'Ability Score Improvement',
        entries: [
          "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
          'If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}.',
        ],
      },
    ],
    [
      {
        name: 'Unyielding',
        entries: [
          'At 20th level, you can draw on the steel will and determination within you to continue the fight. When a hostile creature inflicts damage that reduces you to below half your hit point maximum, you can choose to instantly gain 40 temporary hit points and to regain all expended grit points. Once you use this feature, you must finish a long rest before you can do so again.',
        ],
      },
    ],
  ],
  subclassTitle: 'Ranger Archetype',
  subclasses: [
    {
      name: 'Beastmaster',
      subclassFeatures: [
        [
          {
            name: 'Beastmaster',
            entries: [
              'The life of a ranger can be lonely and dangerous. Some adapt by learning to create a magical bond between themselves and a creature. United in focus, beast and ranger fight the monsters that threaten civilization and the wilderness alike.',
              {
                type: 'entries',
                name: 'Bonus Proficiency',
                entries: [
                  'When you choose this archetype at 3rd level, you gain proficiency in the Animal Handling skill.',
                ],
              },
              {
                type: 'entries',
                name: 'Companion',
                entries: [
                  'In your travels and adventures, you have learned to magically bond a creature to yourself to aid you. Your companion accompanies you on your adventures and is trained to fight alongside you. Choose a beast, dragon, or monstrosity to be your companion, abiding by the restrictions below:',
                  {
                    type: 'list',
                    items: [
                      'cannot be larger than Medium, or Small if it has a flying speed',
                      'cannot be a swarm',
                      'must have an Intelligence score of 4 or lower',
                      'must have a Challenge Rating of 1/2 or lower',
                    ],
                  },
                  "Add your proficiency bonus to your companion's AC and attack rolls, as well as to any saving throws and skills with which it is proficient. Its hit point maximum equals the hit point number in its stat block or 18, whichever is higher. It can spend Hit Dice during a short rest to regain hit points like any other creature.",
                  'Your companion acts as you wish. It rolls initiative like any other creature. If it has a multiattack option, it cannot use it.',
                  'Your companion understands your speech, and you can intuit basic concepts and statements as long as you can see or hear it.',
                  'If you are incapacitated or absent, your companion acts as you wish.',
                  "If your companion is ever slain, the magical bond you share allows you to return it to life. With 8 hours of work and the expenditure of 25 gp/level worth of rare herbs and fine food, you can call forth your companion's spirit and use your magic to create a new body for it. You can return a companion to life in this manner even if you do not possess any part of its body. Each time you level up, your companion gains one Hit Die, and its hit point maximum increases by 5 + its Constitution modifier. Whenever you gain the Ability Score Improvement class feature, your companion's abilities also improve. Your companion can increase one ability score of your choice by 2, or it can increase two ability scores of your choice by 1. As normal, your companion can't increase an ability score above 20 using this feature.",
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
                name: 'Coordinated Attacks',
                entries: [
                  "Starting at 7th level, when your companion attacks the target of your Hunter's Mark, it inflicts extra damage to the marked target as shown in the Ranger table.",
                  "Additionally, your companion's attacks count as magic weapons for purposes of overcoming resistances or immunities.",
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
                name: 'Strengthened Bond',
                entries: [
                  'At 11th level, the magical bond with your companion becomes even stronger. While your companion can see you it has advantage on all saving throws, and it adds your proficiency bonus to its damage rolls.',
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
                name: 'Bestial Endurance',
                entries: [
                  'At 15th level, whenever an attacker that your companion can see hits it with an attack, it can use its reaction to halve the attack’s damage against it.',
                ],
              },
            ],
          },
        ],
      ],
      source: 'PHB',
      shortName: 'Beastmaster',
    },
  ],
}
