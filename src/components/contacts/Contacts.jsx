import React, { Component } from "react";
import "./Contacts.css";
import Header from "./../header/Header";
import Links from "./../links/Links";
import ContactMessage from "../ContactMessage/ContactMessage";
import Backdrop from "../Backdrop/Backdrop";

class Contacts extends Component {
  state = {
    messageOpen: false,
  };

  handleMessage = () => {
    this.setState((prevState) => {
      return { messageOpen: !prevState.messageOpen };
    });
  };

  handleBackdrop = () => {
    console.log("clicked");
    this.setState({ messageOpen: false });
  };

  render() {
    let messageOpen;
    let backdrop;

    if (this.state.messageOpen) {
      messageOpen = <ContactMessage click={this.handleBackdrop} />;
      backdrop = <Backdrop click={this.handleBackdrop} />;
    }

    return (
      <>
        <div className="container-custom">
          <Header></Header>
          <div className="row">
            <Links></Links>
            <div className="col text-container">
              <h6 className="general-inquriries">GENERAL INQUIRIES</h6>
              <h6 className="general-inquriries-mail">
                <a href="mailto:anatoliypetchenko@gmail.com">
                  anatoliypetchenko@gmail.com
                </a>
              </h6>
              {messageOpen}
              {backdrop}
              <button onClick={this.handleMessage} className="message-send">
                Send a message
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contacts;
