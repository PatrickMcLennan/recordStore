import uuid from 'uuid';

export const dummyRecords = [
  {
    artist: 'Blink 182',
    album: 'Take Off your Pants and Jacket',
    release: '1999',
    artwork:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Blink-182_-_Take_Off_Your_Pants_and_Jacket_cover.jpg/220px-Blink-182_-_Take_Off_Your_Pants_and_Jacket_cover.jpg'
  },
  {
    artist: 'Johnny Cash',
    album: 'Out Among the Stars',
    release: '2017',
    artwork:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Johnny_Cash_-_Out_Among_the_Stars.jpg/220px-Johnny_Cash_-_Out_Among_the_Stars.jpg'
  },
  {
    artist: 'Dance Gavin Dance',
    album: 'Mothership',
    release: '2016',
    artwork:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/DGD_Mothership.jpeg/220px-DGD_Mothership.jpeg'
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
      first: 'John',
      last: 'Doe'
    },
    email: 'john@john.com',
    bio: "I'm John - I press records for a living!",
    records: [dummyRecords[0], dummyRecords[1]],
    picture: 'Johns picture'
  },
  {
    name: {
      first: 'Stacy',
      last: 'Smith'
    },
    email: 'stacy@stacy.com',
    bio: "Hi I'm Stacy and Pat guilt tripped me into using this site",
    records: [dummyRecords[2], dummyRecords[1]],
    picture: 'Stacys Picture'
  },
  {
    name: {
      first: 'Edward',
      last: 'Scissorhands'
    },
    email: 'shreddyEddy@hotmail.com',
    bio: 'fhdjfdsfjdfdf',
    records: [dummyRecords[2]],
    picture: 'Edwards Picture'
  }
];
