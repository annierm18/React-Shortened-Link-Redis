import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class NavigationContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-container">
        <div className="link">
            <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
        </div>
        <div className="link">
            <NavLink to="/link-page" activeClassName="nav-link-active">Links</NavLink>
        </div>

      </div>
    );
  }
}