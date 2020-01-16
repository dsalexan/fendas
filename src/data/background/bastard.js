export default {
  name: 'Bastard',
  source: 'Fendas',
  page: 6,
  skillProficiencies: [
    {
      choose: {
        from: ['deception', 'intimidation', 'insight', 'stealth'],
        count: 2,
      },
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
          entry:
            "Choose 2 from {@skill Deception}, {@skill Intimidation}, {@skill Insight} or {@skill Stealth}. As a bastard, you have had to learn to either lie or force your will upon others in order to avoid frequent beatings and harassment. You are adept at bending the truth to your purposes, or frightening those who might stand against you. You have also become adept at either reading people–in order to understand who might wish you ill–or hiding, and avoiding insult or injury. Keeping to yourself has made you an observer of people, whether that be to garner people's real motivations or to simply avoid them altogether.",
        },
        {
          type: 'item',
          name: 'Tool Proficiencies',
          entry: '{@item Forgery Kit|phb}, or {@item Disguise Kit|phb}.',
        },
        {
          type: 'item',
          name: 'Languages',
          entry: 'One of your choice.',
        },
        {
          type: 'item',
          name: 'Equipment',
          entry:
            'A worn leather satchel stuffed with notes and musings (possibly artistic) from your hours of solitude, a memento from your natural parent, a set of common clothes, a forgery kit, and 9 gp.',
        },
      ],
    },
    {
      name: 'Feature: Unknown Heritage',
      type: 'entries',
      entries: [
        'You carry in your body and heart the blood of an unknown parent, with abilities, beliefs, and passions with which you are unfamiliar. At least one aspect of this unknown parent will likely affect your life in an unexpected way, either in an important moment or through constant small interactions with the world around you. You might have an ability, a latent talent, a predisposition to a certain skill, or even a power that is atypical for your profession or class. This remnant of your unknown parent may manifest when you least expect it, in surprising ways.',
        'Work with your DM to determine the details of your heritage, how that heritage might manifest itself in known as well as unexpected ways, and its impact on the campaign.',
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
      "You have spent your life as a half-child, receiving the love of one parent but the resentment of another. You seek belonging, but that sense of loneliness has created a drive and discipline that is rare among others your age. Although less likely to form friendships, those few bonds that you do have are strong and uneasily broken. You have also learned to blend in (as much as is possible), to stay out of the eye of those who might mock you. You're also adept at entertaining yourself and spending long periods in solitude.",
    ],
  },
}
