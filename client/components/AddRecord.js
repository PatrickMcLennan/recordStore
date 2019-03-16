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
        <Badge
          data-testid="addRecord_badge"
          src={cover ? cover : '../static/img/placeholder.png'}
          alt={title ? title : 'Album Artwork'}
          margin="left"
        />
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            <input
              data-testid="addRecord_title"
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
              data-testid="addRecord_artist"
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
              data-testid="addRecord_cover"
              type="text"
              id="cover"
              value={cover}
              required
              onChange={this.handleChange}
            />
            <p>Album Cover URL</p>
          </label>

          <input
            type="submit"
            value="Add Record"
            data-testid="addRecord_submit"
          />
        </Form>
      </div>
    );
  }
}

AddRecord.propTypes = {
  createRecord: PropTypes.func.isRequired
};

export default AddRecord;
