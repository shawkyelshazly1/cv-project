import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    const { from, to, position, companyName, location } = this.props.experience;
    return (
      <div className="flex flex-row gap-7">
        <div className="dates font-medium">
          {from} - {to}
        </div>
        <div className="title flex flex-col">
          <h1 className="font-medium">{position}</h1>
          <p className="font-light">
            {companyName}. {location}
          </p>
        </div>
      </div>
    );
  }
}
