import React, { Component } from "react";
import LeftBar from "./final components/LeftBar";
import RightBar from "./final components/RightBar";

export default class FinalCV extends Component {
  render() {
    return (
      <div className=" flex-1 flex flex-row min-h-full">
        <LeftBar personalInfo={this.props.cv.personalInfo} />
        <RightBar cv={this.props.cv} />
      </div>
    );
  }
}
