import React from "react";
import { Navlinks } from "../helper/helper.jsx";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1 className="logo-heading">Ammar</h1>
      </div>
      <div>
        {Navlinks.map((data, index) => {
          return (
            <Link
              key={index}
              to={data.to}
              smooth={true}
              duration={500}
              className="links"
            >
              {data.element}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
