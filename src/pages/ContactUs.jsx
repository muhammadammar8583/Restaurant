import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us" id="contact">
      <div className="contactus-container">
        <img
          src="reservation.png"
          alt="contactus-image"
          className="contactus-image"
        />
      </div>
      <div className="contact-form">
        <h3>Contact US</h3>
        <input type="text" name="firstName" placeholder="First Name:" />
        <input type="text" name="lastName" placeholder="Last Name:" />
        <input type="email" name="email" placeholder="Email:" />
        <input type="number" name="number" placeholder="Number:" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
