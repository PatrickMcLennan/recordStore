import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { theme, Content } from '../styles/index.styles';
import { ThemeProvider } from 'styled-components';
import Sort from '../Sort';

afterEach(cleanup);

const changeSort = jest.fn();

const renderSort = ({ changeSort }) =>
  render(
    <ThemeProvider theme={theme}>
      <Content>
        <Sort changeSort={changeSort} />
      </Content>
    </ThemeProvider>
  );

test('<Sort />', () => {
  const { getByTestId, queryByTestId } = renderSort({ changeSort });

  const button = getByTestId('sort_button');
  const component = getByTestId('sort');

  expect(button.textContent).toBe('Sort');
  expect(queryByTestId('sort_album')).toBeNull();
  expect(queryByTestId('sort_arist')).toBeNull();

  fireEvent.click(button);
  const album = getByTestId('sort_album');
  const artist = getByTestId('sort_artist');
  expect(component).toContainElement(album);
  expect(component).toContainElement(artist);

  fireEvent.click(album);
  expect(changeSort).toBeCalledWith('title');
  fireEvent.click(artist);
  expect(changeSort).toBeCalledWith('artist');
  expect(changeSort).toBeCalledTimes(2);

  fireEvent.click(button);
  expect(queryByTestId('sort_album')).toBeNull();
  expect(queryByTestId('sort_arist')).toBeNull();
});
