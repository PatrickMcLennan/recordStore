import React from 'react';
import { render, fireEvent, cleanUp } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import { ThemeProvider } from 'styled-components';
import Account from '../Account';
import { dummyPeople, dummyNewUser } from '../dummies';
import { theme, Content } from '../styles/index.styles';

const john = dummyPeople[0];
const stacy = dummyPeople[1];
const editUser = jest.fn(user => user);

const renderComponent = ({ theme, user, editUser }) =>
  render(
    <ThemeProvider theme={theme}>
      <Content>
        <Account user={user} editUser={editUser} />
      </Content>
    </ThemeProvider>
  );

test('<Account user="Full User" />', () => {
  const { getByTestId } = renderComponent({ theme, user: john, editUser });
  const first = getByTestId('first');
  const last = getByTestId('last');
  const email = getByTestId('email');
  const picture = getByTestId('picture');
  const bio = getByTestId('bio');
  const submit = getByTestId('account_submit');

  expect(first.value).toBe('John');
  expect(last.value).toBe('Doe');
  expect(email.value).toBe('john@john.com');
  expect(picture.value).toBe('Johns picture');
  expect(bio.value).toBe("I'm John - I press records for a living!");

  first.value = stacy.name.first;
  last.value = stacy.name.last;
  picture.value = stacy.picture;
  email.value = stacy.email;
  bio.value = stacy.bio;

  fireEvent.click(submit);

  expect(first.value).toBe('Stacy');
  expect(last.value).toBe('Smith');
  expect(email.value).toBe('stacy@stacy.com');
  expect(picture.value).toBe('Stacys Picture');
  expect(bio.value).toBe(
    "Hi I'm Stacy and Pat guilt tripped me into using this site"
  );
});

test('<Account user="New User" />', () => {
  const { getByTestId } = renderComponent({
    theme,
    user: dummyNewUser,
    editUser
  });
  const first = getByTestId('first');
  const last = getByTestId('last');
  const email = getByTestId('email');
  const picture = getByTestId('picture');
  const bio = getByTestId('bio');
  const submit = getByTestId('account_submit');

  expect(first.value).toBe('');
  expect(last.value).toBe('');
  expect(email.value).toBe('new@new.com');
  expect(picture.value).toBe('');
  expect(bio.value).toBe('');

  first.value = stacy.name.first;
  last.value = stacy.name.last;
  picture.value = stacy.picture;
  email.value = stacy.email;
  bio.value = stacy.bio;

  fireEvent.click(submit);

  expect(first.value).toBe('Stacy');
  expect(last.value).toBe('Smith');
  expect(email.value).toBe('stacy@stacy.com');
  expect(picture.value).toBe('Stacys Picture');
  expect(bio.value).toBe(
    "Hi I'm Stacy and Pat guilt tripped me into using this site"
  );
});
