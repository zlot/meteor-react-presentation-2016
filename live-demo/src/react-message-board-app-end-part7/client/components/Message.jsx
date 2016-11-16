import React from 'react';

export default class Message extends React.Component {
  render() {
    return (
      <li className='message-text'>{this.props.time}: {this.props.text}</li>
    )
  }
}
