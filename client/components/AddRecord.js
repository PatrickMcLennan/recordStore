import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import Form from './styles/form.styles';
import Badge from './styles/UserBadge.styles';
import PropTypes from 'prop-types';

class AddRecord extends Component {
  state = {
    title: '',
    artist: '',
    cover: ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.createRecord(this.state);
    this.setState({ title: '', artist: '', cover: '' });
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  render() {
    const { title, artist, cover } = this.state;
    return (
      <div>
        <SectionHeader first="Add" last="Record" />
        {cover ? <Badge src={cover} alt={title} /> : null}
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            <input
              type="text"
              id="title"
              value={title}
              required
              onChange={this.handleChange}
            />
            <p>Album Title</p>
          </label>

          <label htmlFor="artist">
            <input
              type="text"
              id="artist"
              value={artist}
              required
              onChange={this.handleChange}
            />
            <p>Artist</p>
          </label>

          <label htmlFor="cover">
            <input
              type="text"
              id="cover"
              value={cover}
              required
              onChange={this.handleChange}
            />
            <p>Album Cover URL</p>
          </label>

          <input type="submit" value="Add Record" />
        </Form>
      </div>
    );
  }
}

AddRecord.propTypes = {
  page: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired,
  createRecord: PropTypes.func.isRequired
};

export default AddRecord;
