import React, { Component } from "react";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";

class NavItem extends Component {
  render() {
    let { url, title, img } = this.props.data;
    return (
      <>
        {title && (
          <li className="nav-item">
            <a className="nav-title js-scroll-trigger" href={url}>
              {title}
            </a>
          </li>
        )}
        {img && <li className="nav-item">
            <a className="nav-title js-scroll-trigger" href={url}>
              <img src={img} alt="" />
            </a>
          </li>
        }
      </>
    );
  }
}

export default NavItem;
