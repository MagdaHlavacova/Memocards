export const cards = [
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
          content: ' Lichtenštejnsko',
        },
        answer: {
          type: 'text',
          content: 'Vaduz',
        },
      },
    ],
  },

  {
    topic: 'Obrazy',
    id: 'obrazy',
    backgroundColor: '#deeeea',
    cards: [
      {
        id: 4,
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
        id: 5,
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
        id: 6,
        question: {
          type: 'image',
          content: '/assets/ClaudeMonet-Leknin.webp',
        },
        answer: {
          type: 'text',
          content: 'Claude Monet - Leknin',
        },
      },
    ],
  },

  {
    topic: 'Hudební díla',
    id: 'hudebnidila',
    backgroundColor: '#e6e1ef',
    cards: [
      {
        id: 6,
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
        id: 7,
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
        id: 8,
        question: {
          type: 'audio',
          content: '/assets/Antonin_Dvorak-Novosvetska.mp3',
        },
        answer: {
          type: 'text',
          content:
            'Antonín Dvořák - Symfonie č. 9 e moll, op. 95 - Novosvětská',
        },
      },
    ],
  },
];
