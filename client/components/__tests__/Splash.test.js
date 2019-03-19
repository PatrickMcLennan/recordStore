import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { theme, Content } from '../styles/index.styles';
import { ThemeProvider } from 'styled-components';
import Splash from '../Splash';

afterEach(cleanup);

const getUser = jest.fn();
const loaded = jest.fn();

const renderSplash = ({ getUser, loaded }) =>
  render(
    <ThemeProvider theme={theme}>
      <Content>
        <Splash getUser={getUser} loaded={loaded} />
      </Content>
    </ThemeProvider>
  );

test('<Splash />', () => {
  const { getByTestId } = renderSplash({ getUser, loaded });

  const heading = getByTestId('splash_heading');
  const vinylSVG = getByTestId('svg_vinylPrimary');
  const svgBox = getByTestId('splash_socialSVGs');

  expect(heading.textContent).toBe('Welcome to recordStore');
  expect(vinylSVG).toHaveStyle('animation: iVXCSc 15s linear infinite');
  expect(svgBox).toContainElement(
    getByTestId('svg_github'),
    getByTestId('svg_linkedIn')
  );

  const form = getByTestId('splash_form');
  const email = getByTestId('splash_email');
  const password = getByTestId('splash_password');
  const rememberLabel = getByTestId('splash_rememberLabel');

  expect(email.value).toBe('');
  expect(password.value).toBe('');

  fireEvent.change(email, { target: { value: 'test@test.com' } });
  fireEvent.change(password, { target: { value: 'password' } });
  fireEvent.click(rememberLabel);

  fireEvent.submit(form);
  expect(getUser).toBeCalledTimes(1);
  expect(getUser).toBeCalledWith({
    email: 'test@test.com',
    password: 'password',
    register: false,
    remember: true
  });
});
