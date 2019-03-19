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
  const { getByTestId, queryByTestId, debug } = renderSearch({ searchRecords });
  const form = getByTestId('search_form');
  const headerFirst = getByTestId('sectionHeader_first');
  const headerLast = getByTestId('sectionHeader_last');
  const input = getByTestId('search_input');
  const addHeader = getByTestId('search_addHeader');
  const records = queryByTestId('record');

  expect(headerFirst.textContent).toBe('Find');
  expect(headerLast.textContent).toBe('Stores');
  expect(addHeader).toBeInTheDocument();
  expect(records).toBeNull();

  fireEvent.change(input, { target: { value: 'shreddyEddy@hotmail.com' } });
  fireEvent.submit(form);

  await wait(() => {
    expect(searchRecords).toBeCalledTimes(1);
    expect(searchRecords).toBeCalledWith(eddie.email);
  });
});
