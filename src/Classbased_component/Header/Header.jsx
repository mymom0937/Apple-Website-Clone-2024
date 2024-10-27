import React, { Component } from "react";
import headerData from "./headerData";
import NavItem from "./Navitem";
import logo from "../../commonResource/images/icons/logo-sm.png";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <a className="navbar-brand mx-auto" href="/">
                <img src={logo} />
              </a>
              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  {headerData.map((obj, index) => {
                    return <NavItem data={obj} key={index} />;
                  })}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
