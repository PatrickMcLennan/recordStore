// https://recordstore-ea36f.firebaseapp.com/__/auth/handler
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import uuid from 'uuid';

const config = {
  apiKey: 'AIzaSyC9YAyaVt0s2hijgBLgr7wjm_m71khO9_A',
  authDomain: 'recordstore-ea36f.firebaseapp.com',
  databaseURL: 'https://recordstore-ea36f.firebaseio.com',
  projectId: 'recordstore-ea36f',
  storageBucket: 'recordstore-ea36f.appspot.com',
  messagingSenderId: '894584361248'
};

const app = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
const db = firebase.firestore();
const users = db.collection('users');
const records = db.collection('records');

const dbQuery = async (collection, query) => {
  const item = await collection
    .doc(query)
    .get()
    .then(jackpot => jackpot.data());
  return item;
};

export const dbLogin = async ({ email, password }) => {
  await app.auth().signInWithEmailAndPassword(email, password);
  return await dbQuery(users, email);
};

export const dbRegister = async ({ email, password }) => {
  await app
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      users.doc(email).set({
        id: uuid.v4(),
        name: {
          first: '',
          last: ''
        },
        email,
        picture: '',
        bio: '',
        records: []
      });
    });
  return await dbQuery(users, email);
};

export const dbLogout = async () => {
  app.auth().signOut();
};

export const dbAccountEditor = async user => {
  const { email } = user;
  await users.doc(email).set({ ...user });
  return await dbQuery(users, email);
};

export const dbCreateRecord = async record => {
  await records.doc(record.title).set({ ...record, id: uuid.v4() });
  return await dbQuery(records, record.title);
};

export const dbDeleteRecord = async (id, email) => {
  const user = await dbQuery(users, email);
  user.records = user.records.filter(record => record.id !== id);
  return user;
};
