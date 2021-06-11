import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;

    axios
      .post('http://localhost:8080/api/add', { title, description })
      .then((result) => {
        console.log(result);
      });
  };

  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
