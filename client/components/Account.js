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
        {picture ? (
          <Badge src={picture} alt={name.first} margin="left" />
        ) : null}
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">
            <input
              id="first"
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
              value={name.last}
              onChange={this.handleNameChange}
            />
            <p>Last Name</p>
          </label>

          <label htmlFor="email">
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
            <p>Email</p>
          </label>

          <label htmlFor="email">
            <input
              type="text"
              id="picture"
              value={picture}
              onChange={this.handleChange}
            />
            <p>Display Picture URL</p>
          </label>

          <textarea
            value={bio}
            id="bio"
            onChange={this.handleChange}
            placeholder={
              name.first ? `About ${name.first}...` : `About ${email}...`
            }
          />

          <input type="submit" value="Save Changes" />
        </Form>
      </div>
    );
  }
}

Account.propTypes = {
  page: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired
};

export default Account;
