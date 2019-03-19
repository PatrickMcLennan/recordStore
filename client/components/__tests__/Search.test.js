import React from 'react';
import Search from '../Search';
import { render, cleanup, fireEvent, wait } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { theme, Content } from '../styles/index.styles';
import { ThemeProvider } from 'styled-components';
import { dummyPeople } from '../dummies';

afterEach(cleanup);

const eddie = dummyPeople[2];
const searchRecords = jest.fn(() => eddie);

const renderSearch = ({ searchRecords }) =>
  render(
    <ThemeProvider theme={theme}>
      <Content>
        <Search searchRecords={searchRecords} />
      </Content>
    </ThemeProvider>
  );

test('<Search />', async () => {
  const { getByTestId, queryByTestId, getAllByTestId } = renderSearch({
    searchRecords
  });
  const form = getByTestId('search_form');
  const headerFirst = getByTestId('sectionHeader_first');
  const input = getByTestId('search_input');
  const addHeader = getByTestId('search_addHeader');
  const grid = getByTestId('search_recordGrid');
  const profile = queryByTestId('search_userProfile');
  const records = queryByTestId('record');

  expect(input.value).toBe('');
  expect(grid).toContainElement(addHeader);
  expect(records).toBeNull();
  expect(profile).toBeNull();
  expect(headerFirst.textContent).toBe('Find');

  fireEvent.change(input, { target: { value: 'shreddyEddy@hotmail.com' } });
  fireEvent.submit(form);

  await wait(() => {
    const profile = getByTestId('search_userProfile');
    const name = getByTestId('search_name');
    const bio = getByTestId('search_bio');
    const records = getAllByTestId('record');
    const badge = getByTestId('search_badge');

    expect(headerFirst.textContent).toBe(`${eddie.name.first}'s`);

    expect(profile).toBeTruthy();
    expect(badge.getAttribute('src')).toBe(eddie.picture);
    expect(name.textContent).toBe(`${eddie.name.first} ${eddie.name.last}`);
    expect(bio.textContent).toBe(`${eddie.bio}`);

    expect(searchRecords).toBeCalledTimes(1);
    expect(searchRecords).toBeCalledWith(eddie.email);
    expect(searchRecords).toReturnWith(eddie);
    expect(records).toBeTruthy();
    expect(records.length).toEqual(eddie.records.length);
  });
});
