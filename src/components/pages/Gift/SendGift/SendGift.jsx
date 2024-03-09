import React, { Component } from 'react';

export default class SendGift extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.closeModal}>Close</button> 
        <h2>Let’s send your gift card!</h2> 
        <button onClick={this.props.defaultContent}>Email</button> 
        <button onClick={this.props.updateContent1}>IM</button>
        <button onClick={this.props.updateContent2}>Content 2</button> 
        <p>{this.props.content}</p>
      </div>
    );
  }
} 