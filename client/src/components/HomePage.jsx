import { Header } from './Header';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class HomePage extends Component {
  static propTypes = {
    user: PropTypes.shape({
      displayName: PropTypes.string,
      githubId: PropTypes.string,
    }),
  };

  state = {
    user: {},
    error: null,
    authenticated: false,
  };

  componentDidMount() {
    // Fetch does not send cookies. So you should add credentials: 'include'
    fetch('http://localhost:8080/auth/user', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('failed to authenticate user');
        }
      })
      .then((responseJson) => {
        this.setState({
          authenticated: true,
          user: responseJson,
        });
      })
      .catch((err) => {
        this.setState({
          authenticated: false,
          error: err,
        });
      });
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div>
        <Header
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
        />
        <div>
          {!authenticated ? (
            <h1>Welcome!</h1>
          ) : (
            <div>
              <h1>You have login succcessfully!</h1>
              <h2>Welcome {this.state.user.displayName}!</h2>
            </div>
          )}
        </div>
      </div>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}
