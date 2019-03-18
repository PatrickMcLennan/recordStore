import React from 'react';
import { render, fireEvent, cleanup, wait } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';
import Account from '../Account';
import { dummyPeople } from '../dummies';
import { theme, Content } from '../styles/index.styles';

const john = dummyPeople[0];
const stacy = dummyPeople[1];
const editUser = jest.fn(user => user);

afterEach(cleanup);

const renderAccount = ({ theme, user, editUser }) =>
  render(
    <ThemeProvider theme={theme}>
      <Content>
        <Account user={user} editUser={editUser} />
      </Content>
    </ThemeProvider>
  );

test('<Account />', async () => {
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
  const badge = getByTestId('account_badge');

  expect(first.value).toBe(john.name.first);
  expect(last.value).toBe(john.name.last);
  expect(email.value).toBe(john.email);
  expect(picture.value).toBe(john.picture);
  expect(bio.value).toBe(john.bio);
  expect(badge.getAttribute('src')).toBe(john.picture);

  fireEvent.change(first, { target: { value: stacy.name.first } });
  fireEvent.change(last, { target: { value: stacy.name.last } });
  fireEvent.change(picture, { target: { value: stacy.picture } });
  fireEvent.change(email, { target: { value: stacy.email } });
  fireEvent.change(bio, { target: { value: stacy.bio } });

  fireEvent.submit(form);

  await wait(() => {
    expect(editUser).toHaveBeenCalledTimes(1);
    expect(first.value).toBe(stacy.name.first);
    expect(last.value).toBe(stacy.name.last);
    expect(email.value).toBe(stacy.email);
    expect(picture.value).toBe(stacy.picture);
    expect(bio.value).toBe(stacy.bio);
    expect(badge.getAttribute('src')).toBe(stacy.picture);
  });
});
