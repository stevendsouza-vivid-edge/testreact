import { v4 as uuid } from 'uuid';

export const sampleFromStackOverflowQuestion = [
  {
    id: uuid(),
    name: "English",
    children: [
      {
        id: uuid(),
        name: "Spring",
        children: []
      }
    ]
  },
  {
    id: uuid(),
    name: "Italian",
    children: [
      {
        id: uuid(),
        name: "Level A",
        children: []
      }
    ]
  }
];

export const seasons = [
  {
    id: uuid(),
    name: "Seasons",
    children: [
      {
        id: uuid(),
        name: "Summer",
        children: [
          {
            id: uuid(),
            name: "June"
          },
          {
            id: uuid(),
            name: "July"
          },
          {
            id: uuid(),
            name: "August"
          }
        ]
      },
      {
        id: uuid(),
        name: "Fall",
        children: [
          {
            id: uuid(),
            name: "September"
          },
          {
            id: uuid(),
            name: "October"
          },
          {
            id: uuid(),
            name: "November"
          }
        ]
      },
      {
        id: uuid(),
        name: "Winter",
        children: [
          {
            id: uuid(),
            name: "December"
          },
          {
            id: uuid(),
            name: "January"
          },
          {
            id: uuid(),
            name: "February"
          }
        ]
      },
      {
        id: uuid(),
        name: "Spring",
        children: [
          {
            id: uuid(),
            name: "March"
          },
          {
            id: uuid(),
            name: "April"
          },
          {
            id: uuid(),
            name: "May"
          }
        ]
      }
    ]
  }
];
