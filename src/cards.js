export const cards = [
  {
    topic: 'Hlavní města',
    backgroundColor: '#f8eded',
    cards: [
      {
        id: 1,
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
        id: 2,
        question: {
          type: 'text',
          content: 'Hlavní město Jihoafrické republiky',
        },
        answer: {
          type: 'text',
          content: 'Pretoria',
        },
      },
    ],
  },

  {
    topic: 'Obrazy',
    backgroundColor: '#deeeea',
    cards: [
      {
        id: 3,
        question: {
          type: 'image',
          content: 'assets/VanGogh-HvezdnaNoc.jpg',
        },
        answer: {
          type: 'text',
          content: 'Van Gogh - Hvězdná noc',
        },
      },

      {
        id: 4,
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
        id: 5,
        question: {
          type: 'audio',
          content: 'assets/Humoreska.ogg',
        },
        answer: {
          type: 'text',
          content: 'Antonín Dvořák - Humoreska',
        },
      },

      {
        id: 6,
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
