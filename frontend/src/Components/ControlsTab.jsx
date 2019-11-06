import React from "react";
import spacebar from "../img/spacebar.svg";
import arrows from "../img/arrows.svg";
import Music from "./Music";
import "./ControlsTab.css";

class ControlsTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ControlsTab">
        <div className="ControlsBg">
          <img src={spacebar} alt="" />
          <p className="ControlsTabTitle">MENU</p>
          <img src={arrows} alt="" />
          <p className="ControlsTabTitle">MOOVES</p>
          <Music />
        </div>
      </div>
    );
  }
}

export default ControlsTab;
