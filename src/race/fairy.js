export default {
  name: 'Fairy',
  source: 'Fendas',
  page: 1,
  size: 'V',
  speed: {
    alternate: {
      walk: [
        {
          number: 10,
          condition: '(tiny form)',
        },
        {
          number: 25,
          condition: '(humanoid form)',
        },
      ],
      fly: [
        {
          number: 50,
          condition: '(tiny form)',
        },
        {
          number: 30,
          condition: '(humanoid form, difficult terrain above 5 ft.)',
        },
      ],
    },
  },
  ability: [
    {
      str: -1,
      dex: 1,
      cha: 2,
    },
  ],
  entries: [
    {
      name: 'Age',
      type: 'entries',
      entries: [
        'Fairies mature at a rate similar to humans, but stop aging shortly thereafter, to live a life of permanent youth.',
      ],
    },
    {
      name: 'Alignment',
      type: 'entries',
      entries: [
        'The vast majority of fairies are chaotic, and are almost never evil. They value fun and fair play highly, though their definition of these values often sound alien for other races.',
      ],
    },
    {
      type: 'entries',
      name: 'Size',
      entries: [
        'In tiny form adult fairies stand between 6 in and 1 ft tall in average (or 15 cm and 30 cm). In humanoid form fairies average between 4 ft and 6 ft tall (or 1,50 m and 1,80 m).',
      ],
    },
    {
      type: 'entries',
      name: 'Speed',
      entries: [
        'In tiny form your base walking speed is 10 ft (or 3 m). In humanoid form your base walking speed is 25 ft (or 7,5 m).',
      ],
    },
    {
      name: 'Flight',
      entries: [
        "In tiny form you have a flying speed of 50 ft (or 15 m). To use this speed, you can’t be armor. In humanoid form you have a flying speed of 30 ft (or 9 m). The air is considered difficult terrain when you are further than 5 ft from solid ground, and if you remain in flight for more than a minute without touching down, you must succeed on a DC 10 Constitution saving throw or take a level of exhaustion (repeating the save for every minute of flight). To use this speed, you can't be wearing medium or heavy armor.",
      ],
      type: 'entries',
    },
    {
      name: 'Faeform',
      entries: [
        "Fae (or fairies) are able to adjust their size in accordance with mood, whim, or environment – a choice between their tiny form or humanoid form. In the tiny form it's facial traits become much more symmetrical and sharp, butterfly wings burst from the back and the skin color shifts to a aberrant tone (often to a excessively pale white or a dark as night onyx). In the humanoid form a fairy could almost be mistaken for a high elf - if not for their irregular eyes (often entirely black, or with unnaturally large irises in an iridescent rainbow of varying colors) and the wings (not as big proportionally when compared to it's tiny form) that unfold from their shoulder blades. Fairies can change between Fae form and Humanoid form for a maximum of once between short or long rests. For a extra change before a rest, you gain one point of exhaustion.",
        'Fairies can change between Fae form and Humanoid form for a maximum of once between short or long rests. This maximum increases to two at 5th level, three at 10th level, four at 15th level and five at 20th level. For a extra change before a rest, you gain one point of exhaustion.',
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
      name: 'Gift of the Tricky',
      entries: ['You have proficiency with deception, perception and arcana checks.'],
      type: 'entries',
    },
    {
      name: 'True Name',
      entries: [
        "A fae have advantage in all charisma checks against a creature whose name were freely (not under effect of spells such suggestion) given to the fairy. If a fairy give it's true name freely to a creature, such creature will have advantage in all charisma checks against the fairy.",
      ],
      type: 'entries',
    },
    {
      name: 'Feeble',
      entries: [
        "Your small body makes you unfit for feats of strength. You make Strength rolls at disadvantage and can't wield weapons without the Undersized property while in tiny form.",
      ],
      type: 'entries',
    },

    // asdasdasd

    {
      name: 'Languages',
      entries: ['You can speak, read, and write Common and Sylvan'],
      type: 'entries',
    },
  ],
  fluff: {
    entries: [
      {
        type: 'quote',
        entries: ['Lord, what fools these mortals be!'],
        by: 'Puck',
        from: "Midsummer Night's Dream",
      },
      {
        type: 'entries',
        name: 'Fey Folk Nature',
        entries: [
          'While typically small by nature, most fey folk can alter their appearance at will using magic or glamor, and can thus adjust their size in accordance with mood, whim, or environment. When at full height, a fairy could almost be mistaken for a high elf if not for their irregular eyes (often entirely black, or with unnaturally large irises in an iridescent rainbow of varying colors) and the wings that unfold from their shoulder blades. Your wings can look however you want them to, and they can be disguised if necessary. Fairies are often supernaturally beautiful, which they use to their advantage to charm and trick the weak-minded.',
        ],
      },
      {
        type: 'entries',
        name: 'True Name',
        entries: [
          'Fae’s true names however are sacred and finding out their true name can either be a great honor or detriment to said fae. The Fae are very distrustful of the outside world, they keep their name a secret because of the legend all young fae are told.',
          'The Legend as told by the Fae today, starts with a peaceful realm where all were happy and healthy till one day a witch discovered a way into the feywilds. The witch saw this beautiful realm and viewed it as a safe haven from her realm were she was pursued for her evil deeds. She decided to make her home deep in the woods of the feywilds unknowing that an entire race of Fae people lived not far away.',
          'One day while a group of Fae were hunting they came across the home the witch had made and witnessed as the witch used magic in a way they had never seen before. Curious the Fae party approached the witch but as the party got closer the witch heard them and whipped around to face them. The witch saw the weapons the hunting party had on their backs and hips instantly thinking they were sent to kill her.',
          'The witch attacked in full force killing the party leaving no trace behind. The witch seeing how easily she had killed them thought that if there were more she could rule them as a goddess. So the witch set out to find more Fae and to see how primitive they really were. After a half day of travel the witch discovered the colony of Fae and was surprised to see how many there really were, she knew she could not take on everyone so she devised a spell that could enslave them if she only had their name.',
          'The witch took her spell and headed to the colony to see if she could trick them into giving there names to her. When she arrived she was greeted with surprised but non hostile faces, the witch asked as sweetly as she could in the common tongue what their names were. The Fae looked confused as they only spoke a kind of Sylvan, they asked the witch what language she spoke and was shocked to she her grin and reply in Sylvan back asking her question again. She soon learned all their names and used her spell to take over.',
        ],
      },
      {
        type: 'entries',
        name: 'Fairy Names',
        entries: [
          'Fairies share their heritage with other fey and elves. As such, most naming customs are also shared between them. For instance, a fairy that comes of age is often named similarily to elves, but they prefer to go by nicknames derived from situations they have experienced during their adolecense. For instance, a fairy that tames a bobcat as a mount might be dubbed Lynxlove.',
          {
            type: 'list',
            style: 'list-hang-notitle',
            items: [
              {
                type: 'item',
                name: 'Male Names:',
                entry: '???',
              },
              {
                type: 'item',
                name: 'Female Names:',
                entry: '???',
              },
              {
                type: 'item',
                name: 'Nicknames',
                entry: 'Antfighter, Beesting, Dancing Leave, Glitterdust, Mouserider, Raindrop, Snowblanket.',
              },
            ],
          },
        ],
      },
    ],
  },
  traitTags: ['Uncommon Race'],
  skillProficiencies: ['deception', 'arcana'],
  languageProficiencies: [
    {
      common: true,
      sylvan: true,
    },
  ],
}
