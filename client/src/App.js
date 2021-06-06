import React, { Component } from 'react';
import Contacts from './components/Contacts';

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
    return <Contacts articles={this.state.articles} />;
  }
}

export default App;
