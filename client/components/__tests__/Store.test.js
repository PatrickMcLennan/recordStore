import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup, fireEvent, wait } from 'react-testing-library';
import { theme, Content } from '../styles/index.styles';
import { ThemeProvider } from 'styled-components';
import Store from '../Store';
import { dummyPeople } from '../dummies';

afterEach(cleanup);

const page = 'store';
const user = dummyPeople[0];
const loaded = jest.fn();
const deleteRecord = jest.fn();

const renderStore = ({ page, loaded, user, deleteRecord }) =>
  render(
    <ThemeProvider theme={theme}>
      <Content>
        <Store
          page={page}
          loaded={loaded}
          deleteRecord={deleteRecord}
          user={user}
        />
      </Content>
    </ThemeProvider>
  );

test('<Store />', async () => {
  const { getByTestId, queryAllByTestId } = renderStore({
    page,
    loaded,
    deleteRecord,
    user
  });
  expect(loaded).toBeCalledTimes(1);

  const storeRecords = queryAllByTestId('record');
  expect(storeRecords.length).toBe(user.records.length);
  const garbageSVG = storeRecords[0].querySelector('svg');

  fireEvent.click(garbageSVG);
  await wait(() => {
    expect(deleteRecord).toBeCalledWith(user.records[0].id);
  });
});
