import React from 'react';

import MessageList from './MessageList.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends React.Component {

  render() {
    return(
      <div className='container'>
        <h1>React + Meteor Message Board</h1>
        <MuiThemeProvider>
          <MessageList />
        </MuiThemeProvider>
      </div>
    )
  }
}
