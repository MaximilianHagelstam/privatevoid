import React, { Component } from 'react';
import Article from './components/Article';

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
    return <Article articles={this.state.articles} />;
  }
}

export default App;
