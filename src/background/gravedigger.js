export default {
  name: 'Gravedigger',
  source: 'Fendas',
  page: 4,
  skillProficiencies: [
    {
      athletics: true,
      performance: true,
    },
  ],
  toolProficiencies: [
    {
      'musical instrument': true,
    },
  ],
  entries: [
    {
      type: 'list',
      style: 'list-hang-notitle',
      items: [
        {
          type: 'item',
          name: 'Skill Proficiencies',
          entry: '{@skill Athletics} and {@skill Performance}',
        },
        {
          type: 'item',
          name: 'Tool Proficiencies',
          entry: 'A type of {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}',
        },
        {
          type: 'item',
          name: 'Equipment',
          entry:
            'A rock-hammer, a set of {@item common clothes|phb}, 5 torches and a concealable pouch containing 5 gp.',
        },
      ],
    },
    {
      name: 'Feature: Overtaker',
      type: 'entries',
      entries: [
        'The carving of the ore is a strenuous process, and doing so for many years gave you a certain physical completion. As a gravedigger you are able to easily carve many forms into a very specific type of stone, a very "rebellious" one. That ability to carve in a floating ore which shifts its axis at the minimal impact can be translated to battles (or even dancing) as a set of fluid movements and maneuvers executed with strange precision.',
      ],
      data: {
        isFeature: true,
      },
    },
    {
      type: 'section',
      name: 'Suggested Characteristics',
      entries: ['???'],
    },
  ],
  fluff: {
    entries: [
      'Yours was the dark cart that creaked down the predawn lanes with hooves, wheels, and driver shrouded in black cloth. Criminal or courtesan, rich man or rat-catcher; they all veered aside, seeking doorways and side streets at your approach. You served as the gallows-man, the night-wagon, and, at times, the plague-wagon.',
      {
        type: 'entries',
        name: 'Funeral Rites',
        entries: [
          'You studied for years what is, for your people, a millennial tradition of honouring the ones that passed away. The funeral rites in which you were introduced are very distinct from the ones of the usual embalmers or cremators. Your culture emphasizes liberty, and there is no more freedom than the sky. You learned how to construct coffins out of a special ore found only in a specific region, a ore that can defy the laws of gravity. After a artistic process of carving the stone practically barehanded, the coffin is displayed in a public celebration for the deceased, where the casket starts hovering above the ground until it floats out of the atmosphere - to the freedom of the sky beyond.',
        ],
      },
    ],
  },
}
