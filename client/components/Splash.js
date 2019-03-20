import React, { Component } from 'react';
import Section from './styles/Splash.styles';
import Form from './styles/form.styles';
import SectionHeader from './SectionHeader';
import { VinylPrimarySVG, GithubSVG, LinkedInSVG } from './SVGs';
import PropTypes from 'prop-types';

class Splash extends Component {
  state = {
    email: '',
    password: '',
    register: false,
    remember: false
  };

  async componentDidMount() {
    this.props.loaded();
    const user = await JSON.parse(localStorage.getItem('recordStore'));
    return user
      ? this.setState({
          email: user.email,
          password: user.password,
          remember: true
        })
      : null;
  }

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { remember } = this.state;
    const { getUser } = this.props;
    if (remember) {
      localStorage.setItem('recordStore', JSON.stringify(this.state));
    } else if (!remember && localStorage.getItem('recordStore')) {
      localStorage.removeItem('recordStore');
    }
    getUser(this.state);
  };

  render() {
    const { email, password, register, remember } = this.state;
    const { errorMsg } = this.props;
    return (
      <Section>
        <div>
          <VinylPrimarySVG />
          <h3 data-testid="splash_heading">Welcome to recordStore</h3>
          <p>
            recordStore is a digital library for you to upload and share your
            record collection. Enter your email &amp; a password to get started.
          </p>
          <p>Made by Patrick McLennan</p>
          <div data-testid="splash_socialSVGs">
            <GithubSVG />
            <LinkedInSVG />
          </div>
        </div>

        <Form data-testid="splash_form" onSubmit={this.handleSubmit}>
          <SectionHeader first="Log In" last="Register" />
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <label htmlFor="email">
            <input
              data-testid="splash_email"
              value={email}
              type="email"
              required
              id="email"
              onChange={this.handleChange}
            />
            <p>Email...</p>
          </label>

          <label htmlFor="password">
            <input
              data-testid="splash_password"
              value={password}
              type="password"
              required
              id="password"
              onChange={this.handleChange}
            />
            <p>Password...</p>
          </label>

          <input
            type="checkbox"
            name="register"
            onChange={() => this.setState({ register: !register })}
            id="register"
          />
          <label data-testid="splash_registerLabel" htmlFor="register">
            <p>Register This Email</p>
          </label>

          <input
            type="checkbox"
            name="remember"
            checked={remember}
            onChange={() => this.setState({ remember: !remember })}
            id="remember"
          />
          <label data-testid="splash_rememberLabel" htmlFor="remember">
            <p>Remember Me</p>
          </label>

          <input type="submit" value="Log In" />
        </Form>
      </Section>
    );
  }
}

Splash.propTypes = {
  getUser: PropTypes.func.isRequired,
  loaded: PropTypes.func.isRequired,
  errorMsg: PropTypes.string
};

export default Splash;
