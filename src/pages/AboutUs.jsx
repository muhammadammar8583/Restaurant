import React from "react";
import { Button } from "react-scroll";

const AboutUs = () => {
  return (
    <div className="about-us" id="about">
      <div className="left-about-us">
        <p className="heading">About Us</p>
        <p className="secondary-heading">
          The only thing we're serious about is food
        </p>
        <div className="paragraph-div">
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            natus, laborum voluptatem architecto quo tenetur facere accusamus
            labore amet modi accusantium praesentium quia sunt eveniet a
            perspiciatis! Distinctio, accusamus magnam.
          </p>
        </div>
        <button className="about-button">Explore More</button>
      </div>
      <div className="about-us-image">
        <img
          src="/about.png"
          alt="about"
          height={"500px"}
          className="aboutus-image"
        />
      </div>
    </div>
  );
};

export default AboutUs;
