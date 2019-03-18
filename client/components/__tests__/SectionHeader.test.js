import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { theme, Content } from '../styles/index.styles';
import { ThemeProvider } from 'styled-components';
import SectionHeader from '../SectionHeader';

afterEach(cleanup);

const renderSectionHeader = ({ first, last }) =>
  render(
    <ThemeProvider theme={theme}>
      <Content>
        <SectionHeader first={first} last={last} />
      </Content>
    </ThemeProvider>
  );

test('<SectionHeader />', () => {
  const { getByTestId } = renderSectionHeader({
    first: 'testFirst',
    last: 'testLast'
  });

  const first = getByTestId('sectionHeader_first');
  const last = getByTestId('sectionHeader_last');

  expect(first.textContent).toBe('testFirst');
  expect(last.textContent).toBe('testLast');
});
