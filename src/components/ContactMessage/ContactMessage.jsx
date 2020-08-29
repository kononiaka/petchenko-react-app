import React from "react";
import "./ContactMessage.css";

const ContactMessage = (props) => {
  return (
    <div className="messageContainer">
      <div className="contact-container">
        <div className="contact-text-container">
          <div className="contact-text">Send a message</div>
          <i
            onClick={props.click}
            className="fa fa-times"
            aria-hidden="true"
          ></i>
        </div>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <div className="form-group-text">
            <input type="text" id="Name" className="contactInput" />
            <small>First name</small>
          </div>
          <div className="form-group-text">
            <input type="text" className="contactInput" />
            <small>Last name</small>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" className="contactInput" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" className="contactInput" />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit"></input>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
