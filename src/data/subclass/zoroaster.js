export default {
  class: 'Monk',
  name: 'Way of the Zoroaster',
  source: 'Fendas',
  shortName: 'Zoroaster (FCS)',
  page: 3,
  subclassFeatures: [
    [
      {
        name: 'Way of the Zoroaster',
        entries: [
          "It's said that the first one to learn the Way of the Zoroaster did it during his years in self-imposed exile, observing and mimicking with his body the movement of constellations and asterims visible in the nightly sky.",
          'The monks that choose to follow this way should endure the same process of observation of the starts, seeking amongst the countless celestial bodies the ideal pattern of movement and rythm for their ki. As soon as a guiding start is identified, a monk should train to exhaustion until its patterns and movements are recorded in his flesh. Only then a monk can rise as a {@b master} of the Way of the Zoroaster, no longer a {@b disciple}.',
          {
            type: 'entries',
            name: 'Breathing Techniques',
            entries: [
              'Starting when you take this tradition at 3rd level, you will be ready to receive a vision with your star. Due to exhaustive training mimicking the movement and patterns of the starts you learn new ways to manipulate the ki around you to improve your offensive and defensive skills. The effects varies depending on your knowledge of the monastic tradition:',
              '{@b Disciple.} You can spend 1 ki point and a action to meditate over your breathing and gather the ki around you to enter your body, hardening your skin and boosting your muscles. During the next 1 minute:',
              {
                type: 'list',
                items: [
                  'You have a bonus of +1 to your AC.',
                  'Your Strength score increases by your Martial Arts die size.',
                  'You count as one size larger for calculating carrying capacity.',
                ],
              },
              {
                type: 'inset',
                name: 'The Star',
                entries: [
                  'Talk with your GM about setting up a encounter or a challange to develop your character and allow the vision of your star to manifest.',
                ],
              },
              '{@b Master.} You can spend at least 1 ki point and a bonus action to meditate over your breathing and gather the ki around you to enter your body, hardening your skin and boosting your muscles. During the next 1 minute you:',
              {
                type: 'list',
                items: [
                  'You have a bonus yo tour AC equals to +1 for each 2 ki points spent (minimum +1).',
                  'Your Strength score increases by your Martial Arts die size + 1 for each 2 ki points spent (to a maximum of 30).',
                  'You count as two sizes larger for calculating carrying capacity.',
                ],
              },
              'The effects only wear off at the beginning of your next turn, but you can keep spending ki points to maintain Breathing Techniques.',
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
            name: 'Legacy of the Starts',
            entries: [
              'The monk who bears the tradition of the Way of the Zoroaster learns how apply his ki to bend the space and the laws of physics around itself, willing himself to fly.',
              'Beginning at the 6th level, you can spend 3 ki points to cast fly without material components, targeting yourself and only while not wearing armor or wielding a shield (and except that its not a spell or have magical proprieties). As well as the Breathing Techniques, the effects varies depending on your knowledge of the monastic tradition: ',
              '{@b Disciple.} A additional modification to the regular fly spell is that your flight speed should equal your movement speed (and behaves the same way, being affected by encumbrance or dash actions).',
              '{@b Master.} A additional modification to the regular fly spell is that you can hover and your flying speed is the one specified in the fly spell description plus your additional Unarmored Movement.',
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
            name: 'Uranometria',
            entries: [
              'At 11th level, your communion with the starts is such that allows your ki to flow harmlessly around you, sharpening your intuition. Whenever you make a {@skill Perception} (Wisdom) check you can spend 1 ki point to roll with advantage.',
              '{@b Master}. By spending 2 ki points and concentrating you can expand your consciousness beyond the limits of your body. You can perceive your surroundings as if you were standing in front of what you intend to see, hear, smell, etc... The starting maximum distance is 20 ft. (7 m.). Every turn of concentration you can spent an additional ki point, doubling the distance of augmented perception.',
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
            name: 'Peacemaker',
            entries: [
              'Starting at the 17th level, you reach the pinnacle of your communion with the stars. The space around you is heavily affected by your presence, and the laws of nature are bent under the weight of your ki. By meditating over your breath to utilize your {@b Breathing Techniques} (or during the minute when its effects are active) you can spend a additional 3 ki point to spread your energy in the nature around you. As long as {@b Breathing Techniques} is active, at the beginning of your turn, you regain hit points equal to 1d10 + your Wisdom modifier.',
            ],
          },
        ],
      },
    ],
  ],
}
