import React from 'react';
import { render, fireEvent, cleanup, wait } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';
import Account from '../Account';
import { dummyPeople, dummyNewUser } from '../dummies';
import { theme, Content } from '../styles/index.styles';

afterEach(cleanup);

const john = dummyPeople[0];
const stacy = dummyPeople[1];
const editUser = jest.fn(user => user);

const renderAccount = ({ theme, user, editUser }) =>
  render(
    <ThemeProvider theme={theme}>
      <Content>
        <Account user={user} editUser={editUser} />
      </Content>
    </ThemeProvider>
  );

test('<Account user="Full User" />', async () => {
  const { getByTestId } = renderAccount({
    theme,
    user: john,
    editUser
  });
  const form = getByTestId('account_form');
  const first = getByTestId('account_first');
  const last = getByTestId('account_last');
  const email = getByTestId('account_email');
  const picture = getByTestId('account_picture');
  const bio = getByTestId('account_bio');

  expect(first.value).toBe('John');
  expect(last.value).toBe('Doe');
  expect(email.value).toBe('john@john.com');
  expect(picture.value).toBe('Johns picture');
  expect(bio.value).toBe("I'm John - I press records for a living!");

  fireEvent.change(first, { target: { value: stacy.name.first } });
  fireEvent.change(last, { target: { value: stacy.name.last } });
  fireEvent.change(picture, { target: { value: stacy.picture } });
  fireEvent.change(email, { target: { value: stacy.email } });
  fireEvent.change(bio, { target: { value: stacy.bio } });

  fireEvent.submit(form);

  await wait(() => {
    expect(editUser).toHaveBeenCalledTimes(1);
    expect(first.value).toBe('Stacy');
    expect(last.value).toBe('Smith');
    expect(email.value).toBe('stacy@stacy.com');
    expect(picture.value).toBe('Stacys Picture');
    expect(bio.value).toBe(
      "Hi I'm Stacy and Pat guilt tripped me into using this site"
    );
  });
});

test('<Account user="New User" />', async () => {
  const { getByTestId } = renderAccount({
    theme,
    user: dummyNewUser,
    editUser
  });
  const form = getByTestId('account_form');
  const first = getByTestId('account_first');
  const last = getByTestId('account_last');
  const email = getByTestId('account_email');
  const picture = getByTestId('account_picture');
  const bio = getByTestId('account_bio');

  expect(first.value).toBe('');
  expect(last.value).toBe('');
  expect(email.value).toBe('new@new.com');
  expect(picture.value).toBe('');
  expect(bio.value).toBe('');

  fireEvent.change(first, { target: { value: stacy.name.first } });
  fireEvent.change(last, { target: { value: stacy.name.last } });
  fireEvent.change(picture, { target: { value: stacy.picture } });
  fireEvent.change(email, { target: { value: stacy.email } });
  fireEvent.change(bio, { target: { value: stacy.bio } });

  fireEvent.submit(form);

  await wait(() => {
    expect(editUser).toHaveBeenCalledTimes(2);
    expect(first.value).toBe('Stacy');
    expect(last.value).toBe('Smith');
    expect(email.value).toBe('stacy@stacy.com');
    expect(picture.value).toBe('Stacys Picture');
    expect(bio.value).toBe(
      "Hi I'm Stacy and Pat guilt tripped me into using this site"
    );
  });
});
