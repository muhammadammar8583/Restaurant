import React from "react";

const Qualities = () => {
  return (
    <div className="qualities" id="qualities">
      <div className="first ">
        <img
          src="quality_food.svg"
          alt="quality food"
          className="qualities-image"
        />
        <h4 className="quality-heading">Quality Food</h4>
        <p className="quality-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          repellendus officia qui repellat.
        </p>
      </div>
      <div className="second quality-width">
        <img
          src="super_taste.svg"
          alt="super taste"
          className="qualities-image"
        />
        <h4 className="quality-heading">Super Taste</h4>
        <p className="quality-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          repellendus officia qui repellat.
        </p>
      </div>
      <div className="third quality-width">
        <img
          src="fast_delivery.svg"
          alt="fast delivery"
          className="qualities-image"
        />
        <h4 className="quality-heading">Fast Delivery</h4>
        <p className="quality-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          repellendus officia qui repellat.
        </p>
      </div>
    </div>
  );
};

export default Qualities;
