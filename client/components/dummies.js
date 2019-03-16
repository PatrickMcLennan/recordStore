export const dummyEmptyRecord = {
  title: '',
  artist: '',
  cover: ''
};

export const dummyRecords = [
  {
    artist: 'Blink 182',
    title: 'Take Off your Pants and Jacket',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Blink-182_-_Take_Off_Your_Pants_and_Jacket_cover.jpg/220px-Blink-182_-_Take_Off_Your_Pants_and_Jacket_cover.jpg'
  },
  {
    artist: 'Johnny Cash',
    title: 'Out Among the Stars',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Johnny_Cash_-_Out_Among_the_Stars.jpg/220px-Johnny_Cash_-_Out_Among_the_Stars.jpg'
  },
  {
    artist: 'Dance Gavin Dance',
    title: 'Mothership',
    cover:
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
