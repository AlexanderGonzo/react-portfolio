import React, { Component } from "react";
import { Pre } from "./styled.components";

const text = String.raw`
  ___  _            ______           
 / _ \| |           |  _  \          
/ /_\ \ | _____  __ | | | |_____   __
|  _  | |/ _ \ \/ / | | | / _ \ \ / /
| | | | |  __/>  < _| |/ /  __/\ V / 
\_| |_/_|\___/_/\_(_)___/ \___| \_/                                                             
`;

const divStyles = {
  marginTop: "1%",
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: "hidden",
    };
  }
  render() {
    return (
      <div style={divStyles}>
        {text.split("\n").map((item, key) => {
          return <Pre key={key}>{item}</Pre>;
        })}
      </div>
    );
  }
}

export default Header;
