import React from 'react';

import Header from './Header'
import { Container } from '@material-ui/core';

import config from './config'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: config.pageTitle,
      },
    }
  }

  render() {
    return (
      <div>
        <Header info={this.state.header} />
        <Container maxWidth='md'>
          <div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
