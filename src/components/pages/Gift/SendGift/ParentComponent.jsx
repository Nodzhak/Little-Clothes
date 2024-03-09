import React, { Component } from 'react';
import Modal from 'react-modal';
import SendGift from './SendGift';

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      modalContent: "Default content" 
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  defaultContent = () => {
    this.setState({ modalContent: "We'll directly email the recipient a link to open your greeting card and redeem your gift." });
  };

  updateContent1 = () => {
    this.setState({ modalContent: "You'll get a gift link to send to your recipient using Facebook Messenger, WhatsApp or any other messaging app. With the link, the recipient can open your greeting card and redeem the gift." });
  };

  updateContent2 = () => {
    this.setState({ modalContent: "Print your greeting card from your own computer. The card will include instructions for the recipient on how to open and redeem your gift online." });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal}>
          <SendGift 
            closeModal={this.closeModal}
            defaultContent={this.defaultContent}
            updateContent1={this.updateContent1}
            updateContent2={this.updateContent2}
            content={this.state.modalContent}
          />
        </Modal>
      </div>
    );
  }
}