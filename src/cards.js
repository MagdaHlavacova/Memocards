export let cards = [
  {
    topic: 'Hlavní města',
    id: 'hlavnimesta',
    backgroundColor: '#f8eded',
    cards: [
      {
        id: 1,
        question: {
          type: 'text',
          content: 'Madagaskar',
        },
        answer: {
          type: 'text',
          content: 'Antananarivo',
        },
      },

      {
        id: 2,
        question: {
          type: 'text',
          content: 'Tchaj-wan',
        },
        answer: {
          type: 'text',
          content: 'Tchaj-pej',
        },
      },

      {
        id: 3,
        question: {
          type: 'text',
          content: 'Lichtenštejnsko',
        },
        answer: {
          type: 'text',
          content: 'Vaduz',
        },
      },

      {
        id: 4,
        question: {
          type: 'text',
          content: 'Albánie',
        },
        answer: {
          type: 'text',
          content: 'Tirana',
        },
      },

      {
        id: 5,
        question: {
          type: 'text',
          content: 'Jihoafrická republika',
        },
        answer: {
          type: 'text',
          content: 'Pretoria',
        },
      },

      {
        id: 6,
        question: {
          type: 'text',
          content: 'Austrálie',
        },
        answer: {
          type: 'text',
          content: 'Canberra',
        },
      },
    ],
  },

  {
    topic: 'Svaly zad - musculi dorsi',
    id: 'zadovesvaly',
    backgroundColor: '#e6e1ef',
    cards: [
      {
        id: 7,
        question: {
          type: 'image',
          content: '/assets/m-trapezius.jpg',
        },
        answer: {
          type: 'text',
          content: 'Sval trapézový(musculus trapezius)',
        },
      },

      {
        id: 8,
        question: {
          type: 'image',
          content: '/assets/m-latissimus-dorsi.jpg',
        },
        answer: {
          type: 'text',
          content: 'široký sval zádový (musculus latissimus dorsi)',
        },
      },

      {
        id: 9,
        question: {
          type: 'image',
          content: '/assets/Rhomboideus_minor.png',
        },
        answer: {
          type: 'text',
          content: 'malý sval rhombický (musculus rhomboideus minor)',
        },
      },

      {
        id: 10,
        question: {
          type: 'image',
          content: '/assets/Rhomboideus_major.png',
        },
        answer: {
          type: 'text',
          content: 'velký sval rhombický (musculus rhomboideus major)',
        },
      },

      {
        id: 11,
        question: {
          type: 'image',
          content: '/assets/Levator_scapulae.png',
        },
        answer: {
          type: 'text',
          content: 'zdvihač lopatky (musculus levator scapulae)',
        },
      },

      {
        id: 12,
        question: {
          type: 'image',
          content: '/assets/Serratus_posterior.png',
        },
        answer: {
          type: 'text',
          content:
            'sval pilovitý zadní dolní (musculus serratus posterior inferior)',
        },
      },
    ],
  },

  {
    topic: 'Slavné obrazy',
    id: 'slavneobrazy',
    backgroundColor: '#deeeea',
    cards: [
      {
        id: 13,
        question: {
          type: 'image',
          content: '/assets/VanGogh-HvezdnaNoc.jpg',
        },
        answer: {
          type: 'text',
          content: 'Van Gogh - Hvězdná noc',
        },
      },

      {
        id: 14,
        question: {
          type: 'image',
          content: '/assets/GustavKlimt-polibek.webp',
        },
        answer: {
          type: 'text',
          content: 'Gustav Klimt - Polibek',
        },
      },

      {
        id: 15,
        question: {
          type: 'image',
          content: '/assets/ClaudeMonet-Leknin.webp',
        },
        answer: {
          type: 'text',
          content: 'Claude Monet - Lekníny',
        },
      },

      {
        id: 16,
        question: {
          type: 'image',
          content: '/assets/Vermeer-DivkaSPerlou.webp',
        },
        answer: {
          type: 'text',
          content: 'Johannes Vermeer - Dívka s\u00A0perlou',
        },
      },

      {
        id: 17,
        question: {
          type: 'image',
          content: '/assets/Dali.webp',
        },
        answer: {
          type: 'text',
          content: 'Salvador Dalí - Persistence paměti',
        },
      },

      {
        id: 18,
        question: {
          type: 'image',
          content: '/assets/daVinci.webp',
        },
        answer: {
          type: 'text',
          content: 'Leonardo da\u00A0Vinci - Mona Lisa',
        },
      },
    ],
  },

  {
    topic: 'Česká hudební díla',
    id: 'ceskahudebnidila',
    backgroundColor: '#e6e1ef',
    cards: [
      {
        id: 19,
        question: {
          type: 'audio',
          content: '/assets/Smetana-ma-vlast.mp3',
        },
        answer: {
          type: 'text',
          content: 'Bedřich Smetana - Má vlast: Vltava',
        },
      },

      {
        id: 20,
        question: {
          type: 'audio',
          content: '/assets/Humoreska.ogg',
        },
        answer: {
          type: 'text',
          content: 'Antonín Dvořák - Humoreska',
        },
      },

      {
        id: 21,
        question: {
          type: 'audio',
          content: '/assets/Antonin_Dvorak-Novosvetska.mp3',
        },
        answer: {
          type: 'text',
          content:
            'Antonín Dvořák - Symfonie č. 9\u00A0e\u00A0moll, op.\u00A095 - Novosvětská',
        },
      },
    ],
  },

  {
    topic: 'Anglické věty',
    id: 'anglickevety',
    backgroundColor: '#fff5c0',
    cards: [
      {
        id: 22,
        question: {
          type: 'text',
          content: 'Můj bratranec je v\u00A0krabici.',
        },
        answer: {
          type: 'text',
          content: 'My cousin is in the box.',
        },
      },

      {
        id: 23,
        question: {
          type: 'text',
          content: 'Koťátko leží na koberci a\u00A0mňouká.',
        },
        answer: {
          type: 'text',
          content: 'A\u00A0kitten is lying on the carpet and meowing.',
        },
      },

      {
        id: 24,
        question: {
          type: 'text',
          content: 'Prodává mušle na pobreží.',
        },
        answer: {
          type: 'text',
          content: 'She sells sea shells on the sea shore.',
        },
      },
    ],
  },

  {
    topic: 'Nepravidelné mn.č. v AJ',
    id: 'nepravidelnemnoznecislo',
    backgroundColor: '#fff5eb',
    cards: [
      {
        id: 25,
        question: {
          type: 'text',
          content: 'cactus',
        },
        answer: {
          type: 'text',
          content: 'cacti',
        },
      },

      {
        id: 26,
        question: {
          type: 'text',
          content: 'crisis',
        },
        answer: {
          type: 'text',
          content: 'crises',
        },
      },

      {
        id: 27,
        question: {
          type: 'text',
          content: 'tooth',
        },
        answer: {
          type: 'text',
          content: 'teeth',
        },
      },

      {
        id: 28,
        question: {
          type: 'text',
          content: 'man',
        },
        answer: {
          type: 'text',
          content: 'men',
        },
      },
    ],
  },

  {
    topic: 'Chemické značky',
    id: 'chemickeznacky',
    backgroundColor: '#f8eded',
    cards: [
      {
        id: 29,
        question: {
          type: 'text',
          content: 'kyslík',
        },
        answer: {
          type: 'text',
          content: 'O - oxygenium',
        },
      },

      {
        id: 30,
        question: {
          type: 'text',
          content: 'radium',
        },
        answer: {
          type: 'text',
          content: 'Ra - Radium',
        },
      },

      {
        id: 31,
        question: {
          type: 'text',
          content: 'zlato',
        },
        answer: {
          type: 'text',
          content: 'Au - Aurum',
        },
      },
    ],
  },

  {
    topic: 'Stopařův průvodce',
    id: 'stoparuvpruvodce',
    backgroundColor: '#e1e5ea',
    cards: [
      {
        id: 32,
        question: {
          type: 'text',
          content:
            'Jaká je odpověď na základní otázku života, vesmíru a\u00A0vůbec?',
        },
        answer: {
          type: 'text',
          content: '42',
        },
      },

      {
        id: 33,
        question: {
          type: 'text',
          content:
            'Který den v\u00A0roce slavíme v\u00A0kalendáři Ručníkový den?',
        },
        answer: {
          type: 'text',
          content:
            '25. Května. Ručníkový den, neboli Towel day je svátkem, kdy si všichni fanoušci Douglase Adamse a\u00A0jeho díla nosí viditelně umístěný ručník. Jedná se o\u00A0recesi, která má dnes již celosvětou působnost a\u00A0odkazuje se na Adamsovo nejznámější dílo Stopařův průvodce po Galaxii. Právě v\u00A0tomto díle je ručník ta nejpotřebnější věc pro cestování v\u00A0galaxii a\u00A0kterou u\u00A0sebe může mít mezihvězdný stopař. Od autorovi smrti (2001) se z\u00A0ručníkového dne stala pravidelná akce.',
        },
      },

      {
        id: 34,
        question: {
          type: 'text',
          content: 'Jaký je nejlepší alkoholický drink ve vesmíru? ',
        },
        answer: {
          type: 'text',
          content:
            'Pangalaktický megacloumák . Vypít ho je podle Stopařova průvodce asi jako nechat si vyrazit mozek z\u00A0hlavy plátkem citronu obaleným kolem masivní zlaté cihly.',
        },
      },
    ],
  },
];

export const handleSmaz = (idMazanyTopic) => {
  cards = cards.filter((card) => card.id !== idMazanyTopic);
  console.log(idMazanyTopic);
};
