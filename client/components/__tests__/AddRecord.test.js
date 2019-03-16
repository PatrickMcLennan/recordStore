import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import { ThemeProvider } from 'styled-components';
import AddRecord from '../AddRecord';
import { dummyRecords, dummyEmptyRecord } from '../dummies';
import { theme, Content } from '../styles/index.styles';

const placeholder = '../static/img/placeholder.png';
const createRecord = jest.fn();
const blink = dummyRecords[0];

const renderAddRecord = ({ theme, createRecord }) =>
  render(
    <ThemeProvider theme={theme}>
      <Content>
        <AddRecord createRecord={createRecord} />
      </Content>
    </ThemeProvider>
  );

test('<AddRecord />', async () => {
  const { getByTestId, debug } = renderAddRecord({
    theme,
    createRecord
  });
  const title = getByTestId('addRecord_title');
  const artist = getByTestId('addRecord_artist');
  const cover = getByTestId('addRecord_cover');
  const badge = getByTestId('addRecord_badge');
  const submit = getByTestId('addRecord_submit');

  expect(title.value).toBe('');
  expect(artist.value).toBe('');
  expect(cover.value).toBe('');
  expect(badge.getAttribute('src')).toBe(placeholder);

  fireEvent.change(title, { target: { value: blink.title } });
  fireEvent.change(artist, { target: { value: blink.artist } });
  fireEvent.change(cover, { target: { value: blink.cover } });
  expect(badge.getAttribute('src')).toBe(blink.cover);

  fireEvent.click(submit, await createRecord());
  debug();
});
