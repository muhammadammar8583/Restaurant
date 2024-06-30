import React from "react";

const Menu = () => {
  return (
    <div className="dishes" id="menu">
      <h3 className="heading center-text">Popular Dishes</h3>
      <p className="dishes-paragraph center-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        repellendus illum reiciendis consectetur? Iure nostrum repellendus saepe
        dolores odit expedita!
      </p>
      <div className="dishes-container">
        <img
          src="dinner1.jpeg"
          alt="Roasted Lamb Rump"
          className="dishes-image"
        />
        <span className="image-text dish1-title">Roasted Lamb Rump</span>
        <span className="dish1">Dinner</span>
        <img
          src="dinner2.png"
          alt="Citrus Cured Salmon"
          className="dishes-image"
        />
        <span className="image-text dish2-title">Citrus Cured Salmon</span>
        <span className="dish2">Dinner</span>
        <img
          src="breakfast1.png"
          alt="Pan Seared Sea Bass"
          className="dishes-image"
        />
        <span className="image-text dish3-title">Pan Seared Sea Bass</span>
        <span className="dish3">Breakfast</span>
        <img
          src="dinner3.png"
          alt="Stuffed Stawberry"
          className="dishes-image"
        />
        <span className="image-text dish4-title">Stuffed Stawberry</span>
        <span className="dish4">Dinner</span>
        <img src="lunch1.png" alt="Beef Burger Meal" className="dishes-image" />
        <span className="image-text dish5-title">Beef Burger Meal</span>
        <span className="dish5">Lunch</span>
        <img src="dinner4.png" alt="Mussels Soup" className="dishes-image" />
        <span className="image-text dish6-title">Mussels Soup</span>
        <span className="dish6">Dinner</span>
        <img
          src="dinner5.png"
          alt="Italian Spaghetti"
          className="dishes-image"
        />
        <span className="image-text dish7-title">Italian Spaghetti</span>
        <span className="dish7">Dinner</span>
        <img src="dinner6.png" alt="Grilled Fish" className="dishes-image" />
        <span className="image-text dish8-title">Grilled Fish</span>
        <span className="dish8">Dinner</span>
      </div>
    </div>
  );
};

export default Menu;
