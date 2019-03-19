import React from 'react';
import { render, fireEvent, cleanup, wait } from 'react-testing-library';
import { theme, Content } from '../styles/index.styles';
import { ThemeProvider } from 'styled-components';
import { dummyRecords } from '../dummies';
import Record from '../Record';

const dance = dummyRecords[2];
const updateStore = jest.fn();

afterEach(cleanup);

const renderRecord = ({ cover, title, artist, updateStore, showGarbage, id }) =>
  render(
    <ThemeProvider theme={theme}>
      <Content>
        <Record
          cover={cover}
          artist={artist}
          title={title}
          updateStore={updateStore}
          showGarbage={true}
          id={id}
        />
      </Content>
    </ThemeProvider>
  );

test('<Record />', () => {
  const { getByTestId, queryByTestId } = renderRecord({
    cover: dance.cover,
    artist: dance.artist,
    title: dance.title,
    updateStore,
    id: `fake id`
  });

  const img = getByTestId('record_img');
  const title = getByTestId('record_title');
  const artist = getByTestId('record_artist');
  const garbage = queryByTestId('svg_garbage');

  expect(img.getAttribute('src')).toBe(dance.cover);
  expect(img.getAttribute('alt')).toBe(dance.title);
  expect(title.textContent).toBe(dance.title);
  expect(artist.textContent).toBe(dance.artist);

  fireEvent.click(garbage);
  expect(updateStore).toBeCalledTimes(1);
  expect(updateStore).toBeCalledWith('fake id');
});
