import React from 'react';

/* import material UI components */
import { Container } from '@material-ui/core';
import Typography    from '@material-ui/core/Typography';

/* import third party libraries */
import axios from 'axios';

/* import components */
import Header from './components/Header';
import KeywordSuggest from './components/KeywordSuggest';

import config from './config'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: config.pageTitle,
      },
      params: {
        query: '',
      },
      ajaxResults: {
        list: [],
      },
    }
  }

  updateQuery(val) {
    this.updateParam({query: val})
  }

  updateParam(params) {
    this.setState({params: params});
    const newParams = {...this.state.params, ...params};
    axios.get('/api/sample', {
      params: newParams
    })
      .then(
        (result) => {
          const resultData = result.data;
          this.setState({
            ajaxResults: {
              list: resultData,
            },
          });
        }
      )
      .catch(
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div>
        <Header info={this.state.header} />
        <Container maxWidth='md'>
          <div>
            <KeywordSuggest
              keyword={this.state.params.query}
              suggests={this.state.ajaxResults.list}
              onChange={(query) => this.updateQuery(query)}
            />
            <Typography>{this.state.params.query}</Typography>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
