export default {
  name: 'Human (Zendikar)',
  source: 'Fendas',
  page: 14,
  ability: [
    {
      str: 1,
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      cha: 1,
    },
  ],
  _copy: {
    name: 'Human',
    source: 'PHB',
    _mod: {
      entries: {
        mode: 'replaceArr',
        replace: 'Languages',
        items: {
          name: 'Languages',
          entries: [
            'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: vampire curses, Elvish musical expressions, merfolk scholarly jargon, and so on.',
          ],
          type: 'entries',
        },
      },
    },
  },
  // skillProficiencies: ['survival'],
  // traitTags: ['Unarmed Strike'],
  // _copy: {
  //   name: 'Human',
  //   source: 'PHB',
  //   _mod: {
  //     entries: [
  //       {
  //         mode: 'apprendArr',
  //         items: [
  //           {
  //             type: 'entries',
  //             name: 'Keen Smell',
  //             entries: ['You gain advantage on Wisdom (Perception) checks that rely on smell.'],
  //           },
  //           {
  //             type: 'entries',
  //             name: 'Animal Instincts',
  //             entries: ['You have proficiency in the Survival skill.'],
  //           },
  //           {
  //             type: 'entries',
  //             name: 'Bearkin',
  //             entries: ['You are proficient with unarmed strikes and your unarmed strike uses a d4 for damage.'],
  //           },
  //         ],
  //       },
  //       {
  //         mode: 'replaceArr',
  //         replace: 'Languages',
  //         items: {
  //           name: 'Languages',
  //           entries: [
  //             'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
  //             'You also know Baeric in addition to your other languages. Baeric is a primitive language of growls and barks most often used to quickly convey details while hunting and to intimidate. It has no written form.',
  //           ],
  //           type: 'entries',
  //         },
  //       },
  //     ],
  //     languageProficiencies: {
  //       mode: 'appendArr',
  //       items: {
  //         baeric: true,
  //       },
  //     },
  //   },
  // },
}
