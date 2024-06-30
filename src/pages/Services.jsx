import React from "react";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="text-banner">
        <h2 className="first-heading">14</h2>
        <p className="paragraph second-heading">Restaurants</p>
        <h2 className="first-heading">20</h2>
        <p className="paragraph second-heading">Chef in Kitchen</p>
      </div>
      <div className="image-banner">
        <img src="whoweare.png" alt="services" className="services-image" />
      </div>
      <div className="text-banner">
        <h2 className="first-heading align">08</h2>
        <p className="paragraph second-heading">Years Of Experience</p>
        <h2 className="first-heading">200</h2>
        <p className="paragraph second-heading align">Food Dishes</p>
      </div>
    </div>
  );
};

export default Services;
