import React, { Component } from "react";
import "./Contacts.css";
import Header from "./../header/Header";
import Links from "./../links/Links";
import ContactMessage from "../ContactMessage/ContactMessage";
import Backdrop from "../Backdrop/Backdrop";

class Contacts extends Component {
  state = {
    messageOpen: false,
    menuOpen: false,
  };

  handleMessage = () => {
    this.setState((prevState) => {
      return { messageOpen: !prevState.messageOpen };
    });
  };

  handleBackdrop = () => {
    this.setState({ messageOpen: false });
  };

  toggleMenu = () => {
    this.setState((prevState) => {
      console.log("click");
      return { menuOpen: !prevState.menuOpen };
    });
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
          <div className="container-overflow">
            <Header></Header>
            <div className="row">
              <Links click={this.toggleMenu} show={this.state.menuOpen} />
              <div className="col text-container">
                <h6 className="general-inquriries">GENERAL INQUIRIES</h6>
                <h6 className="general-inquriries-mail">
                  <a href="mailto:anatoliypetchenko@gmail.com">
                    anatoliypetchenko@gmail.com
                  </a>
                </h6>
                <h6 className="general-inquriries-cell">
                  <a href="tel:+380955365335">+380 95 536 53 35</a>
                </h6>
                {messageOpen}
                {backdrop}
                <button onClick={this.handleMessage} className="message-send">
                  Send a message
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contacts;
