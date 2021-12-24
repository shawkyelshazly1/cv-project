import React, { Component } from "react";
import "./LeftBar.css";
export default class LeftBar extends Component {
  render() {
    const { phoneNumber, photo, email } = this.props.personalInfo;

    return (
      <div className="leftBar bg-gray-600 flex  w-3/12 flex-col items-start p-3 text-white">
        <img src={photo} alt="" className="rounded-full" />
        <div className="contactSection pt-5 flex flex-col items-start gap">
          <p className="text-2xl font-bold">Contact</p>
          <p className="phone Number pt-2 ">{phoneNumber}</p>
          <p className="email ">{email}</p>
        </div>
      </div>
    );
  }
}
