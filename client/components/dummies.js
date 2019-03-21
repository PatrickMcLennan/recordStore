export const dummyRecords = [
  {
    artist: 'blink 182',
    title: 'take off your pants and jacket',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Blink-182_-_Take_Off_Your_Pants_and_Jacket_cover.jpg/220px-Blink-182_-_Take_Off_Your_Pants_and_Jacket_cover.jpg',
    id: 'blink id'
  },
  {
    artist: 'johnny cash',
    title: 'out among the stars',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Johnny_Cash_-_Out_Among_the_Stars.jpg/220px-Johnny_Cash_-_Out_Among_the_Stars.jpg',
    id: 'cash id'
  },
  {
    artist: 'dance gavin dance',
    title: 'mothership',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/DGD_Mothership.jpeg/220px-DGD_Mothership.jpeg',
    id: 'dance id'
  }
];

export const dummyNewUser = {
  name: {
    first: '',
    last: ''
  },
  email: 'new@new.com',
  bio: '',
  records: [],
  picture: ''
};

export const dummyPeople = [
  {
    name: {
      first: 'john',
      last: 'doe'
    },
    email: 'john@john.com',
    bio: "I'm John - I press records for a living!",
    records: [dummyRecords[0], dummyRecords[1]],
    picture: 'Johns picture'
  },
  {
    name: {
      first: 'stacy',
      last: 'smith'
    },
    email: 'stacy@stacy.com',
    bio: "Hi I'm Stacy and Pat guilt tripped me into using this site",
    records: [dummyRecords[2], dummyRecords[1]],
    picture: 'Stacys Picture'
  },
  {
    name: {
      first: 'edward',
      last: 'scissorhands'
    },
    email: 'shreddyeddy@hotmail.com',
    bio: 'fhdjfdsfjdfdf',
    records: [dummyRecords[2]],
    picture: 'Edwards Picture'
  }
];
