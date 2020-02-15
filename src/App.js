import React, { Suspense, lazy } from "react";
import Particles from "./components/particles";
import data from "./data/resumeData";
import { Div } from "./components/styledcomponents";
import Header from "./components/header";
// const Header = lazy(() => import('./components/header'));
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: data
    };
  }

  render() {
    return (
      <div className="App">
        {/* <Particles /> */}
        <Div>
          <Header />
        </Div>
      </div>
    );
  }
}

export default App;
