const cards = [
  {
    topic: 'Hlavní města',
    backgroundColor: '#f8eded',
    cards: [
      {
        id: 01,
        question: {
          type: 'text',
          content: 'Hlavní město Francie?',
        },
        answer: {
          type: 'text',
          content: 'Paříž',
        },
      },

      {
        id: 02,
        question: {
          type: 'text',
          content: 'Hlavní město Jihoafrické republiky',
        },
        answer: {
          type: 'text',
          content: 'Johannesburg',
        },
      },
    ],
  },

  {
    topic: 'Obrazy',
    backgroundColor: '#deeeea',
    cards: [
      {
        id: 03,
        question: {
          type: 'image',
          content: 'img/VanGogh-HvezdnaNoc',
        },
        answer: {
          type: 'text',
          content: 'Van Gogh - Hvězdná noc',
        },
      },

      {
        id: 04,
        question: {
          type: 'image',
          content: 'img/xxxxxxx',
        },
        answer: {
          type: 'text',
          content: 'xxxxxxx',
        },
      },
    ],
  },

  {
    topic: 'Hudební díla',
    backgroundColor: '#e6e1ef',
    cards: [
      {
        id: 05,
        question: {
          type: 'audio',
          content: './Humoreska.ogg',
        },
        answer: {
          type: 'text',
          content: 'Antonín Dvořák - Humoreska',
        },
      },

      {
        id: 06,
        question: {
          type: 'audio',
          content: './xxxxxxxxx',
        },
        answer: {
          type: 'text',
          content: 'xxxxxxx',
        },
      },
    ],
  },
];
