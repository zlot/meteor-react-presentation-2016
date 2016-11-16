import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import moment from 'moment';

import Messages from '../../api/Messages.js';
import Message from './Message.jsx';

import TextField from 'material-ui/TextField';

export class MessageList extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    if(this.textFieldMaterialEl.input.value === '') {
      return;
    }
    // take value, save to database
    Messages.insert({
      date: new Date(),
      text: this.textFieldMaterialEl.input.value
    });
    // clear text input
    this.textFieldMaterialEl.input.value = '';
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField
            ref={
               el => {
                 this.textFieldMaterialEl = el;
               }
             }
            floatingLabelText="Type a message"
            hintText="This will be saved to a database!"
          />

        </form>
        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    );
  }

  renderMessages() {
    return this.props.messages.map(msg => {
      return <Message time={moment(msg.time).calendar()} text={msg.text} key={Math.random()} />
    })
  }
}

/* Wrap component in a container via react-meteor-data.
 * Required to pass Meteor data as props to react.
 */
export default createContainer(() => {
  return {
    messages: Messages.find({}).fetch()
  }
}, MessageList);
