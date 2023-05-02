import { Article } from '@shared/lib'
import type { NextApiHandler } from 'next'

const newsHandler: NextApiHandler = async (request, response) => {
  const news: Article[] = mockArticles

  response.json({ data: news })
}

export default newsHandler

export const mockArticles: Article[] = [
  {
    "name": "Russia’s Gas Exports Are Expected to Drop by 50% in 2023",
    "links": [
      "https://www.nytimes.com/live/2023/04/27/world/russia-ukraine-news"
    ],
    "description": "Estimates suggest gas exports by pipeline could be halved this year compared with 2022, which was an especially bad year. Here is what else we’re covering:",
    "datePublished": "2023-04-27T20:55:59.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "The New York Times"
      }
    ]
  },
  {
    "name": "What Soledar’s Salt, Lost in the Fight for Bakhmut, Means to Ukraine",
    "links": [
      "https://www.nytimes.com/2023/04/27/world/europe/ukraine-soledar-salt.html"
    ],
    "description": "Soledar, crushed in Russia’s long assault on Bakhmut, was only a little town. But its salt is a national staple, and a matter of pride.",
    "datePublished": "2023-04-27T17:19:55.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Marc Santora"
      }
    ]
  },
  {
    "name": "Khartoum’s Residents Cope With Paramilitary Fighters in Sudan",
    "links": [
      "https://www.nytimes.com/2023/04/27/world/africa/sudan-khartoum-paramilitary-fighters.html"
    ],
    "description": "In parts of Khartoum that have been taken over by a feared paramilitary force, the civilians who have not fled endure an uneasy coexistence with fighters who are battling the regular army.",
    "datePublished": "2023-04-27T20:28:33.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Lynsey Chutel and Abdi Latif Dahir"
      }
    ]
  },
  {
    "name": "Eduard Habsburg, Hungary’s Ambassador to Pope, Has Offbeat Résumé",
    "links": [
      "https://www.nytimes.com/2023/04/27/world/europe/hungary-habsburg-ambassador-vatican.html"
    ],
    "description": "Eduard Habsburg, Viktor Orban’s man at the Vatican, took the post after a career as a zombie movie screenwriter, novelist and cartoon producer. “I can get along with anybody,” says the descendant of emperors.",
    "datePublished": "2023-04-27T19:19:29.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],
    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Jason Horowitz"
      }
    ]
  },
  {
    "name": "Ukrainian Troops Repel Russian Attacks, and Hope Western Arms Turn the Tide",
    "links": [
      "https://www.nytimes.com/2023/04/27/world/europe/ukraine-russia-battlefield-vuhledar.html"
    ],
    "description": "Fierce fighting has yielded heavy casualties but little movement. Ukrainian forces need heavy weapons to change that, but they say it is no guarantee.",
    "datePublished": "2023-04-27T18:44:28.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Michael Schwirtz and Stanislav Kozliuk"
      }
    ]
  },
  {
    "name": "Macron Honors Toussaint Louverture, Haitian Revolutionary",
    "links": [
      "https://www.nytimes.com/2023/04/27/world/europe/macron-toussaint-louverture-speech.html"
    ],
    "description": "The French president paid tribute to Toussaint Louverture, the leader of the Haitian Revolution, but said nothing about the lingering effects of France’s slaving past.",
    "datePublished": "2023-04-27T19:48:45.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Constant Méheut and Catherine Porter"
      }
    ]
  },
  {
    "name": "‘Best Friends’ Australia and New Zealand Patch Up a Major Difference",
    "links": [
      "https://www.nytimes.com/2023/04/27/world/asia/australia-new-zealand-migrants-citizenship.html"
    ],
    "description": "A reversal in Australian immigration policy toward New Zealand is part of a reset in relations, but some tensions remain.",
    "datePublished": "2023-04-27T20:11:31.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Natasha Frost"
      }
    ]
  },
  {
    "name": "In Israel, Ron DeSantis Promotes His Foreign Policy Credentials",
    "links": [
      "https://www.nytimes.com/2023/04/27/world/middleeast/israel-ron-desantis.html"
    ],
    "description": "The Florida governor, a likely contender for the Republican presidential nomination, stressed his strong interest in the country’s affairs, an issue that Donald J. Trump once made his own.",
    "datePublished": "2023-04-27T14:26:28.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Patrick Kingsley"
      }
    ]
  },
  {
    "name": "In an Indian Village, Cultivating Girls’ Big-League Dreams",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/asia/india-women-cricket.html"
    ],
    "description": "A new $500 million women’s cricket league is offering the kind of opportunities that never existed before in India. The girls of one Punjab village are ready.",
    "datePublished": "2023-04-26T15:58:54.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Mujib Mashal and Atul Loke"
      }
    ]
  },
  {
    "name": "Brazilian Judge Bans Telegram App Amid School Attacks Inquiry",
    "links": [
      "https://www.nytimes.com/2023/04/26/briefing/brazil-telegram-ban.html"
    ],
    "description": "The Federal Police requested the app’s suspension because it failed to provide complete user data from two group chats that the authorities said had inspired an attack.",
    "datePublished": "2023-04-26T23:42:19.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "André Spigariol"
      }
    ]
  },
  {
    "name": "Ukraine War ‘Turned Everything Upside Down’ in This Polish Town",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/poland-russia-borne-sulinowo.html"
    ],
    "description": "A Polish town that was once occupied by the Soviets used to embrace its history with military re-enactments and Lenin banners. But “nobody wants to be reminded of Russia these days.”",
    "datePublished": "2023-04-27T03:00:25.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Andrew Higgins"
      }
    ]
  },
  {
    "name": "Pope Gives Women a Vote in Influential Meeting of Bishops",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/pope-women-vote-bishops-meeting.html"
    ],
    "description": "The move is an important step by Francis as he strives for greater inclusiveness.",
    "datePublished": "2023-04-26T21:12:16.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Jason Horowitz and Elisabetta Povoledo"
      }
    ]
  },
  {
    "name": "Part of Swedish Research Rocket Lands in Norway, Causing Friction",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/sweden-norway-rocket.html"
    ],
    "description": "The research rocket landed in a mountain range across the border, creating some rare friction between the two neighbors, with Norway saying protocols hadn’t been followed.",
    "datePublished": "2023-04-26T15:34:46.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Isabella Kwai"
      }
    ]
  },
  {
    "name": "Boat Sinks in Mediterranean, and at Least 55 People Drown",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/africa/boat-sinks-in-mediterranean-and-at-least-55-people-drown.html"
    ],
    "description": "The accident is the latest in a series of recent deadly accidents involving migrants trying to reach Europe.",
    "datePublished": "2023-04-26T17:47:49.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Emma Bubola"
      }
    ]
  },
  {
    "name": "Your Friday Briefing: Russia’s Crumbling Gas Exports",
    "links": [
      "https://www.nytimes.com/2023/04/27/briefing/russia-ukraine-yoon-suk-yeol-australia.html"
    ],
    "description": "Also, President Yoon’s address to Congress and Australia’s shift on New Zealand.",
    "datePublished": "2023-04-27T20:45:16.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Mariah Kreutter"
      }
    ]
  },
  {
    "name": "It’s OK to Be Single, the Church of England Says: So Was Jesus.",
    "links": [
      "https://www.nytimes.com/2023/04/27/world/europe/church-england-jesus-single.html"
    ],
    "description": "In a new report, a church commission looking at families and households called on society to “honor and celebrate singleness.”",
    "datePublished": "2023-04-27T20:47:21.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Lauren McCarthy"
      }
    ]
  },
  {
    "name": "How Special Are Humans? The Answer Is in Other Mammals’ Genomes.",
    "links": [
      "https://www.nytimes.com/2023/04/27/science/genetics-dna-mammals.html"
    ],
    "description": "DNA from monkeys, bats, whales and many other mammals is helping scientists tackle big questions about physiology, evolution and one very famous sled dog.",
    "datePublished": "2023-04-27T20:17:32.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Emily Anthes"
      }
    ]
  },
  {
    "name": "Brittney Griner on Gershkovich Arrest: ‘No One Should Be in Those Conditions’",
    "links": [
      "https://www.nytimes.com/2023/04/27/sports/wnba-brittney-griner.html"
    ],
    "description": "Griner, speaking to reporters as she prepares for her next basketball season in the W.N.B.A., said she would continue to fight for those considered wrongfully detained by Russia, like the journalist Evan Gershkovich.",
    "datePublished": "2023-04-27T20:55:46.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Kris Rhim"
      }
    ]
  },
  {
    "name": "Meet the Climate Hackers of Malawi",
    "links": [
      "https://www.nytimes.com/2023/04/27/climate/malawi-farmers-agriculture.html"
    ],
    "description": "On tiny farms they’re testing creative ideas to stay ahead of the cascading threats — heat and drought, cyclones and floods — transforming their world.",
    "datePublished": "2023-04-27T17:40:32.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Somini Sengupta"
      }
    ]
  },
  {
    "name": "The Fight Over the Debt Limit",
    "links": [
      "https://www.nytimes.com/2023/04/27/briefing/debt-limit.html"
    ],
    "description": "House Republicans are putting the economy at risk to push spending cuts.",
    "datePublished": "2023-04-27T11:12:01.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "German Lopez"
      }
    ]
  },
  {
    "name": "As Interest in Wellness Stirs Up the Cocktail World, This Executive Gets Her Shot",
    "links": [
      "https://www.nytimes.com/2023/04/27/business/no-alcohol-drinks-distill-ventures.html"
    ],
    "description": "Heidi Dillon is on the vanguard of the fast-growing nonalcoholic-drinks sector and is reshaping how the male-dominated spirits industry perceives the shifting landscape.",
    "datePublished": "2023-04-27T09:00:46.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Liza Weisstuch"
      }
    ]
  },
  {
    "name": "Climate Change Made East African Drought 100 Times as Likely, Study Finds",
    "links": [
      "https://www.nytimes.com/2023/04/27/climate/horn-of-africa-somalia-drought.html"
    ],
    "description": "The findings starkly show the misery that the burning of fossil fuels, mostly by rich countries, inflicts on societies that emit almost nothing by comparison.",
    "datePublished": "2023-04-27T13:25:57.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Raymond Zhong"
      }
    ]
  },
  {
    "name": "Your Thursday Briefing",
    "links": [
      "https://www.nytimes.com/2023/04/27/briefing/xi-jinping-libya-pope-women.html"
    ],
    "description": "Here’s what you need to know.",
    "datePublished": "2023-04-27T04:44:34.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Natasha Frost"
      }
    ]
  },
  {
    "name": "High-Ranking Iranian Cleric Gunned Down by Bank Guard",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/middleeast/iran-cleric-killing.html"
    ],
    "description": "The killing comes as attacks on clerics are on the rise, following months of angry protests against the theocratic government.",
    "datePublished": "2023-04-26T21:51:52.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Farnaz Fassihi"
      }
    ]
  },
  {
    "name": "Your Thursday Briefing: A U.S.-South Korea Nuclear Agreement",
    "links": [
      "https://www.nytimes.com/2023/04/26/briefing/your-thursday-briefing-a-us-south-korea-nuclear-agreement.html"
    ],
    "description": "Also, Xi Jinping called Volodymyr Zelensky.",
    "datePublished": "2023-04-26T20:56:28.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Amelia Nierenberg"
      }
    ]
  },
  {
    "name": "China’s Xi and Ukraine’s Zelensky Hold Talks",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/ukraine-xi-zelensly-talks.html"
    ],
    "description": "Volodymyr Zelensky has urged discussions with Xi Jinping since the Russian invasion, but in its official account of the phone call, China left out two words: “Russia” and “war.”",
    "datePublished": "2023-04-26T20:50:35.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "David Pierson, Marc Santora and Vivian Wang"
      }
    ]
  },
  {
    "name": "New Rules for Power Plants Could Give Carbon Capture a Boost. Here’s How.",
    "links": [
      "https://www.nytimes.com/2023/04/26/climate/carbon-capture-power-plants.html"
    ],
    "description": "The technology has struggled to gain traction, but strict new emissions limits for gas and coal stations could encourage broader adoption.",
    "datePublished": "2023-04-26T20:36:36.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Brad Plumer"
      }
    ]
  },
  {
    "name": "Leaked Documents Reflect Persistent Speculation on Putin’s Health",
    "links": [
      "https://www.nytimes.com/2023/04/26/us/politics/leaked-documents-putin-health.html"
    ],
    "description": "Leaked materials include unsubstantiated intelligence about a Ukrainian politician’s claim that the Russian leader is undergoing chemotherapy.",
    "datePublished": "2023-04-26T20:30:27.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Michael Crowley"
      }
    ]
  },
  {
    "name": "A Fresh View of an Increasingly Familiar Black Hole",
    "links": [
      "https://www.nytimes.com/2023/04/26/science/astronomy-black-hole-m87.html"
    ],
    "description": "Radio astronomers have captured a wide-angle image of one of the most violent locales in the cosmos.",
    "datePublished": "2023-04-26T20:08:10.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Dennis Overbye"
      }
    ]
  },
  {
    "name": "A reporting team for an Italian newspaper comes under fire in southern Ukraine, and one journalist is killed.",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/journalist-killed-ukraine-italian-newspaper.html"
    ],
    "description": "Another reporter was hospitalized in the city of Kherson and described the attack to the paper, La Repubblica.",
    "datePublished": "2023-04-27T07:27:01.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Marc Santora"
      }
    ]
  },
  {
    "name": "Heat Pump Maker’s $13.3 Billion Sale Raises Questions in Germany",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/germany-review-viessmann-carrier-heat-pumps.html"
    ],
    "description": "Carrier Global Corp., plans to acquire a unit of Viessmann Group that produces heat pumps, seen in Berlin as the heating solution for Germany’s green future.",
    "datePublished": "2023-04-27T09:07:44.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Melissa Eddy"
      }
    ]
  },
  {
    "name": "Where Were the Gatekeepers?",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/interpreter-tucker-carlson-populism.html"
    ],
    "description": "Finding lessons in the firing of Tucker Carlson.",
    "datePublished": "2023-04-26T18:51:13.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Amanda Taub"
      }
    ]
  },
  {
    "name": "What Is the Synod of Bishops?",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/bishops-synod-meeting.html"
    ],
    "description": "The assembly includes bishops from all over the world and takes years to prepare for. For the first time, an upcoming synod will allow women and laypeople to vote.",
    "datePublished": "2023-04-26T21:12:24.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Gaia Pianigiani"
      }
    ]
  },
  {
    "name": "Ukraine Has Nearly All Combat Vehicles Allies Promised, NATO Says",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/ukraine-counteroffensive-combat-vehicles.html"
    ],
    "description": "Gen. Christopher Cavoli, also the top commander of U.S. forces in Europe, made the comments to the House Armed Services Committee.",
    "datePublished": "2023-04-27T07:23:31.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Eric Schmitt"
      }
    ]
  },
  {
    "name": "Germany Deems Youth Wing of Far-Right Party an Extremist Group",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/germany-afd-youth-wing-extremist.html"
    ],
    "description": "The party, Alternative for Germany, has been accused of radicalizing in recent years. Its youth wing is a threat to German democracy, the country’s domestic spy agency now says.",
    "datePublished": "2023-04-26T18:10:56.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Erika Solomon"
      }
    ]
  },
  {
    "name": "Biden Vows ‘End’ of North Korean Regime if It Launches Nuclear Attack",
    "links": [
      "https://www.nytimes.com/2023/04/26/us/politics/biden-south-korea-state-visit.html"
    ],
    "description": "During a state visit at the White House, Mr. Biden and President Yoon Suk Yeol of South Korea sought to bolster America’s nuclear umbrella guarding against threats from the North.",
    "datePublished": "2023-04-26T22:39:31.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Peter Baker and David E. Sanger"
      }
    ]
  },
  {
    "name": "Aleksei Navalny, Top Kremlin Critic, Says New Charge Carries Life Term",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/aleksei-navalny-new-charge.html"
    ],
    "description": "The jailed Russian opposition leader said he faced a terrorism case that he described as “absurd.”",
    "datePublished": "2023-04-26T14:36:02.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Ivan Nechepurenko"
      }
    ]
  },
  {
    "name": "Facing China, the Philippines and U.S. Join in Biggest Military Drill Yet",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/asia/philippines-us-military.html"
    ],
    "description": "After years of saying it would not choose sides, the Philippines is now asserting a need to stand up to China’s territorial moves in the South China Sea.",
    "datePublished": "2023-04-27T03:02:52.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Sui-Lee Wee"
      }
    ]
  },
  {
    "name": "Relations between China and Ukraine have been uncertain since Russia’s full-scale invasion.",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/relations-between-china-and-ukraine-have-been-uncertain-since-russias-full-scale-invasion.html"
    ],
    "description": "President Xi Jinping of China and President Volodymyr Zelensky of Ukraine last communicated in January 2022, less than two months before Russia invaded.",
    "datePublished": "2023-04-26T15:30:21.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Vivian Wang"
      }
    ]
  },
  {
    "name": "Where Is Omar al-Bashir? Ex-Dictator Mystery Adds to Crisis in Sudan.",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/africa/sudan-dictator-bashir.html"
    ],
    "description": "After speculation that Omar Hassan al-Bashir, who had been serving a prison sentence, had been freed, the army said that he was being held in a military hospital but provided no evidence.",
    "datePublished": "2023-04-26T18:56:52.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Abdi Latif Dahir"
      }
    ]
  },
  {
    "name": "Biden’s Quiet Re-election Strategy",
    "links": [
      "https://www.nytimes.com/2023/04/26/briefing/biden-reelection-campaign.html"
    ],
    "description": "As Biden starts his campaign, we ask why he doesn’t spend more time in the public eye.",
    "datePublished": "2023-04-26T10:38:35.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "David Leonhardt"
      }
    ]
  },
  {
    "name": "South Africa’s Shifting Stance on Whether It Will Quit the I.C.C.",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/africa/south-africa-icc-ramaphosa.html"
    ],
    "description": "As the International Criminal Court seeks to arrest Vladimir Putin, South Africa objects to its “unfair treatment” of some countries, but sends mixed signals about withdrawing.",
    "datePublished": "2023-04-26T18:56:53.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "John Eligon"
      }
    ]
  },
  {
    "name": "China Detains Taiwan-Based Publisher in National Security Investigation",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/asia/china-taiwan-publisher-detained.html"
    ],
    "description": "Li Yanhe’s publishing company put out books that often cast a critical eye on China’s ruling Communist Party. He disappeared while on a trip to China.",
    "datePublished": "2023-04-27T02:15:58.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Amy Chang Chien"
      }
    ]
  },
  {
    "name": "Soviet Pop Art Duo Reunites for First U.S. Retrospective Since Their Breakup",
    "links": [
      "https://www.nytimes.com/2023/04/26/arts/komar-melamid-zimmerli.html"
    ],
    "description": "The rebellious artists Vitaly Komar and Alexander Melamid founded their own artistic movement. They agreed to their first interview together in 20 years.",
    "datePublished": "2023-04-26T09:00:40.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Sophia Kishkovsky"
      }
    ]
  },
  {
    "name": "Bears, Binoculars and Bucket-List Birds: A 15-Day Tour in Ecuador",
    "links": [
      "https://www.nytimes.com/2023/04/26/travel/birding-in-ecuador.html"
    ],
    "description": "A customized itinerary allowed a group of birders to observe hundreds of species across a range of elevations, all while staying at comfortable eco-lodges.",
    "datePublished": "2023-04-26T09:00:24.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Dorothy Spears and Alexis Rockman"
      }
    ]
  },
  {
    "name": "Singapore Hangs Man for Conspiring to Traffic 2 Pounds of Cannabis",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/asia/singapore-execution-cannabis.html"
    ],
    "description": "Human rights groups called the punishment far too severe and raised questions about due process.",
    "datePublished": "2023-04-26T08:42:33.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Yan Zhuang"
      }
    ]
  },
  {
    "name": "Inside Biden’s Renewed Promise to Protect South Korea From Nuclear Weapons",
    "links": [
      "https://www.nytimes.com/2023/04/26/us/politics/biden-korea-nuclear-weapons.html"
    ],
    "description": "President Biden’s emphasis on America’s willingness to defend South Korea is a striking admission that North Korea’s arsenal is here to stay.",
    "datePublished": "2023-04-26T13:36:07.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "David E. Sanger and Choe Sang-Hun"
      }
    ]
  },
  {
    "name": "Your Wednesday Briefing",
    "links": [
      "https://www.nytimes.com/2023/04/26/world/europe/biden-election-taliban-heat.html"
    ],
    "description": "Joe Biden’s bid for re-election.",
    "datePublished": "2023-04-26T04:50:31.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Natasha Frost"
      }
    ]
  },
  {
    "name": "Russian Lawyers Ask Court to Ease Crackdown on Dissent",
    "links": [
      "https://www.nytimes.com/2023/04/25/world/europe/russia-dissent-crackdown.html"
    ],
    "description": "With thousands arrested for criticizing the invasion of Ukraine, the Kremlin has “criminalized dissent,” said a lawyer who asked the court to step in.",
    "datePublished": "2023-04-26T01:27:13.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Ivan Nechepurenko"
      }
    ]
  },
  {
    "name": "Russia’s Lavrov Hints at Possible Prisoner Swap for Evan Gershkovich and Paul Whelan",
    "links": [
      "https://www.nytimes.com/2023/04/25/world/europe/prisoner-swap-gershkovich-whelan.html"
    ],
    "description": "The channel to discuss detained American and Russian citizens, created in 2021, remains open, Sergey V. Lavrov said. But, he added, publicity “will only complicate the process.”",
    "datePublished": "2023-04-26T07:19:02.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Farnaz Fassihi"
      }
    ]
  },
  {
    "name": "Your Wednesday Briefing: Biden’s Re-Election Bid",
    "links": [
      "https://www.nytimes.com/2023/04/25/briefing/biden-2024-ukraine-counteroffensive-asia.html"
    ],
    "description": "Also, Ukraine prepares for a counteroffensive and South Korea’s president visits Washington.",
    "datePublished": "2023-04-25T21:14:21.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Amelia Nierenberg"
      }
    ]
  },
  {
    "name": "Taliban Kill Head of ISIS Cell That Bombed Kabul Airport",
    "links": [
      "https://www.nytimes.com/2023/04/25/us/politics/isis-leader-killed-kabul-airport-bombing.html"
    ],
    "description": "Thirteen U.S. service members and scores of Afghan civilians died in the bombing as the United States was evacuating in August 2021.",
    "datePublished": "2023-04-25T23:35:48.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Karoun Demirjian and Eric Schmitt"
      }
    ]
  },
  {
    "name": "Murdoch’s News Group Paid Settlement to Prince William, Court Filing Shows",
    "links": [
      "https://www.nytimes.com/2023/04/25/world/europe/prince-william-harry-hacking-murdoch.html"
    ],
    "description": "A legal filing by Prince Harry in his own case against News Group claims his brother received “a huge sum of money’’ to settle phone-hacking allegations.",
    "datePublished": "2023-04-26T07:53:15.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Mark Landler"
      }
    ]
  },
  {
    "name": "Is a UNESCO World Heritage Designation a Blessing or a Curse?",
    "links": [
      "https://www.nytimes.com/2023/04/25/arts/unesco-world-heritage-site.html"
    ],
    "description": "A spot on the UNESCO list — amid the world’s top natural and cultural locations — means a chance for economic benefits, but also for overtourism.",
    "datePublished": "2023-04-26T18:31:07.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Ginanne Brownell"
      }
    ]
  },
  {
    "name": "Untangling Rosalind Franklin’s Role in DNA Discovery, 70 Years On",
    "links": [
      "https://www.nytimes.com/2023/04/25/science/rosalind-franklin-dna.html"
    ],
    "description": "Historians have long debated the role that Dr. Franklin played in identifying the double helix. A new opinion essay argues that she was an “equal contributor.”",
    "datePublished": "2023-04-26T13:35:01.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Emily Anthes"
      }
    ]
  },
  {
    "name": "Here Are the Places Most at Risk From Record-Shattering Heat",
    "links": [
      "https://www.nytimes.com/2023/04/25/climate/extreme-heat-waves.html"
    ],
    "description": "It’s the regions of the world that haven’t yet experienced an off-the-charts heat wave that we should worry about, a new scientific study argues.",
    "datePublished": "2023-04-26T15:51:40.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Raymond Zhong"
      }
    ]
  },
  {
    "name": "In Israel, a Memorial Day Marked by Political Divisions",
    "links": [
      "https://www.nytimes.com/2023/04/25/world/middleeast/israel-memorial-day.html"
    ],
    "description": "While some politicians did not speak as planned at cemeteries, an appearance by the ultranationalist minister Itamar Ben-Gvir resulted in loud shouting matches between his supporters and opponents.",
    "datePublished": "2023-04-25T18:46:37.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Isabel Kershner"
      }
    ]
  },
  {
    "name": "Tucker Carlson’s Downfall",
    "links": [
      "https://www.nytimes.com/2023/04/25/briefing/tucker-carlson.html"
    ],
    "description": "He rose at Fox News by tapping into fears of a changing society",
    "datePublished": "2023-04-25T10:46:04.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "German Lopez"
      }
    ]
  },
  {
    "name": "Violence in Sudan Cuts Through Shaky U.S.-Brokered Cease-Fire",
    "links": [
      "https://www.nytimes.com/2023/04/25/world/africa/sudan-fighting-cease-fire.html"
    ],
    "description": "Gunfire and shelling still trapped many residents in their homes in the capital, but others took advantage of the truce announcement to flee on the 11th day of fighting.",
    "datePublished": "2023-04-25T22:52:29.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Abdi Latif Dahir"
      }
    ]
  },
  {
    "name": "The Group That Searches for Missing Ukrainian Children",
    "links": [
      "https://www.nytimes.com/2023/04/25/us/politics/ukraine-missing-children.html"
    ],
    "description": "Save Ukraine’s mission includes reuniting families victimized by Russia’s deportations in occupied areas.",
    "datePublished": "2023-04-25T17:05:08.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Julian E. Barnes"
      }
    ]
  },
  {
    "name": "Why the Japan and South Korea Détente Is Crucial to Biden’s Asia Ambitions",
    "links": [
      "https://www.nytimes.com/2023/04/25/world/asia/japan-korea-us-biden.html"
    ],
    "description": "The animosity between South Korea and Japan has long been a weak link in Washington’s Indo-Pacific strategy. President Biden is likely to urge more steps toward a thaw during meetings this week.",
    "datePublished": "2023-04-25T09:00:34.000Z",
    "address": {
      "coords": [
        0,
        0
      ],
      "country": "USA",
      "city": "New York"
    },
    "publisher": {
      "name": "New York Times",
      "address": {
        "coords": [
          0,
          0
        ],
        "country": "USA",
        "city": "New York"
      }
    },
    "categories": [
      "Politics"
    ],
    "tags": [
      "Politics"
    ],

    "image": "",
    "people": [
      {
        "type": "Journalist",
        "address": {
          "coords": [
            0,
            0
          ],
          "country": "USA",
          "city": "New York"
        },
        "fullName": "Choe Sang-Hun"
      }
    ]
  }
]
