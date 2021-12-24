import React, { Component } from "react";

export default class Education extends Component {
  render() {
    const { schoolName, from, to, subject, degree } = this.props.education;
    return (
      <div>
        <div className="flex flex-row gap-7">
          <div className=" font-medium">
            {from} - {to}
          </div>
          <div className=" flex flex-col">
            <h1 className="font-medium collegeName">{schoolName}</h1>
            <p className="font-light">
              <span className="font-medium">Degree: </span> {degree}
            </p>
            <p className="font-light">
              <span className="font-medium">Subject: </span>
              {subject}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
