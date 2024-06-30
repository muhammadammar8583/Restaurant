import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <h3>Address</h3>
        <p>Karachi, Pakistan</p>
      </div>
      <div className="middle">
        <h3>Opening Hours</h3>
        <p className="hours">
          Monday <span className="timing">11:00-20:00</span>
        </p>
        <p className="hours">
          Tuesday <span className="timing">11:00-20:00</span>
        </p>
        <p className="hours">
          Wednesday <span className="timing">11:00-20:00</span>
        </p>
        <p className="hours">
          Thursday <span className="timing">11:00-20:00</span>
        </p>
        <p className="hours">
          Friday <span className="timing">11:00-20:00</span>
        </p>
        <p className="hours">
          Saturday <span className="timing">11:00-20:00</span>
        </p>
        <p className="hours">
          Sunday <span className="timing">11:00-20:00</span>
        </p>
      </div>
      <div className="right">
        <h3>Contact Details</h3>
        <p>
          <MdOutlineLocalPhone />
          <span className="icon-span">+92315-0169020</span>
        </p>
        <p>
          <MdOutlineMail />
          <span className="icon-span">ammarmalik8583@gmail.com</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
