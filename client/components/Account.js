import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import Form from './styles/form.styles';
import Badge from './styles/UserBadge.styles';
import PropTypes from 'prop-types';

class Account extends Component {
  state = {
    ...this.props.user
  };

  handleNameChange = e => {
    const { id, value } = e.target;
    const newState = this.state;
    newState.name[id] = value;
    this.setState({ ...newState });
  };

  handleChange = e => {
    const { id, value } = e.target;
    const newState = this.state;
    newState[id] = value;
    this.setState({ ...newState });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editUser(this.state);
  };

  render() {
    const { name, email, picture, bio } = this.state;
    return (
      <div>
        <SectionHeader first="Edit" last="Account" />
        <Badge
          src={picture ? picture : '../static/img/placeholder.png'}
          alt={name.first ? name.first : 'User Picture'}
          margin="left"
          data-testid="account_badge"
        />
        <Form onSubmit={this.handleSubmit} data-testid="account_form">
          <label htmlFor="firstName">
            <input
              id="first"
              data-testid="account_first"
              type="text"
              value={name.first}
              onChange={this.handleNameChange}
            />
            <p>First Name</p>
          </label>

          <label htmlFor="lastName">
            <input
              type="text"
              id="last"
              data-testid="account_last"
              value={name.last}
              onChange={this.handleNameChange}
            />
            <p>Last Name</p>
          </label>

          <label htmlFor="email">
            <input
              type="email"
              id="email"
              data-testid="account_email"
              value={email}
              onChange={this.handleChange}
            />
            <p>Email</p>
          </label>

          <label htmlFor="email">
            <input
              type="text"
              id="picture"
              data-testid="account_picture"
              value={picture}
              onChange={this.handleChange}
            />
            <p>Display Picture URL</p>
          </label>

          <textarea
            value={bio}
            id="bio"
            data-testid="account_bio"
            maxLength="50"
            onChange={this.handleChange}
            placeholder={
              name.first ? `About ${name.first}...` : `About ${email}...`
            }
          />

          <input
            type="submit"
            data-testid="account_submit"
            value="Save Changes"
          />
        </Form>
      </div>
    );
  }
}

Account.propTypes = {
  user: PropTypes.object.isRequired,
  editUser: PropTypes.func.isRequired
};

export default Account;
