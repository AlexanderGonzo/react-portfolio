import React, { Component } from "react";
import Particles from "react-particles-js";

class Canvas extends Component {
  state = { width: "0px", height: "0px" };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
    });
  };

  render() {
    const { width, height } = this.state;
    const divStyles = {
      position: "fixed !important",
      left: "0",
      right: "0",
    };
    return (
      <div style={divStyles}>
        <Particles
          {...this.state}
          params={{
            particles: {
              number: {
                value: 400,
                density: {
                  enable: true,
                },
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  speed: 2,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                out_mode: "out",
              },
              color: {
                value: [
                  "#0000CC",
                  "#225e50",
                  "#06c40c",
                  "#50E3C2",
                  "#FFD300",
                  "#f8f800",
                  "#e19147",
                  "#ec0603",
                  "#b80fb7",
                  "#90023f",
                  "#FFFFFF",
                  "#FFFFFF",
                ],
              },
            },
          }}
        />
      </div>
    );
  }
}
export default Canvas;
