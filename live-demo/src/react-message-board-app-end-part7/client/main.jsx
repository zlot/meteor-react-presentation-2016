import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

Meteor.startup(() => {
  ReactDOM.render(<App />, $('#render-target')[0]);
});
