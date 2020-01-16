export default {
  name: 'Blacksmith',
  source: 'Fendas',
  page: 7,
  skillProficiencies: [
    {
      athletics: true,
      intimidation: true,
    },
  ],
  toolProficiencies: [
    {
      choose: {
        from: ['forgery kit', 'disguise kit'],
      },
    },
  ],
  languageProficiencies: [
    {
      any: 1,
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
          entry: '{@skill Athletics}, {@skill Intimidation}.',
        },
        {
          type: 'item',
          name: 'Tool Proficiencies',
          entry: "{@item Smith's Tools|phb}, {@item Leartherworker's Tools|phb}.",
        },
        {
          type: 'item',
          name: 'Equipment',
          entry:
            "A set of Smith's Tools, A set of Leatherworker's tools, a Light hammer, a set of common clothes, and a pouch containing 10 gp.",
        },
      ],
    },
    {
      name: 'Feature: Double Time',
      type: 'entries',
      entries: [
        "Whenever you or your party has requested items to be forged, you can offer your assistance in order to reduce both the time and the cost by half. This takes up your character's time however.",
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
      'Blacksmiths are some of the most important members of any community, from forging swords and repairing armor to making nails and hinges, their skills are integral to society. Some Blacksmiths work with others in their trade, while some like to work alone; despite some differences, all blacksmiths have the same are of expertise: metal.',
    ],
  },
}
