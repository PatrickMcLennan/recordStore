import React from 'react';
import { render, fireEvent, cleanup, wait } from 'react-testing-library';
import { dummyPeople } from '../dummies';
import Nav from '../Nav';

const changePage = jest.fn();
const logout = jest.fn();
const edward = dummyPeople[2];

afterEach(cleanup);

test('<Nav />', async () => {
  const { getByTestId } = render(
    <Nav changePage={changePage} user={edward} logout={logout} />
  );
  const signOut = getByTestId('nav_signOut');
  const account = getByTestId('nav_account');
  const search = getByTestId('nav_account');
  const store = getByTestId('nav_myStore');
  const addRecord = getByTestId('nav_addRecord');

  fireEvent.click(account);
  fireEvent.click(search);
  fireEvent.click(store);
  fireEvent.click(addRecord);
  fireEvent.click(signOut);

  await wait(() => {
    expect(changePage).toBeCalledTimes(4);
    expect(logout).toBeCalledTimes(1);
  });
});
