import React from "react";
import { NavLink } from "react-router-dom";
const Portfolio = props => {
  return (
    <div>
      <h1>My work</h1>
      <div>Checkout the {props.match.params.id} I've done</div>
      <NavLink to="/portfolio/1" activeClassName="is-active" exact={true}>
        item1
      </NavLink>
      <NavLink to="/portfolio/2" activeClassName="is-active" exact={true}>
        item2
      </NavLink>
      <NavLink to="/portfolio/3" activeClassName="is-active" exact={true}>
        item3
      </NavLink>
    </div>
  );
};

export default Portfolio;
