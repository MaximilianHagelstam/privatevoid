import React, { Component } from 'react';
import Article from './components/Article';
import Form from './components/Form';

class App extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    fetch('http://localhost:8080/api/show')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ articles: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <Article articles={this.state.articles} />
        <Form />
      </div>
    );
  }
}

export default App;
