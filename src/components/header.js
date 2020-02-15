import React, { Component } from "react";
import Pre from "./styledcomponents";
import ascii from "./ascii.txt";
class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.main.name;
    }

    return <pre></pre>;
  }
}

export default Header;
