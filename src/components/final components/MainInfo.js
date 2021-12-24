import React, { Component } from "react";
import s from "underscore.string";

export default class MainInfo extends Component {
  render() {
    let { firstName, lastName, middleName, title, location } =
      this.props.personalInfo;
    return (
      <div className="h-1/7 bg-gray-400 p-5">
        <h1 className="text-4xl text-white font-bold fullName">
          {s(firstName).trim().capitalize().value()}{" "}
          {s(s.chars(s.trim(middleName))[0])
            .capitalize()
            .value()}
          {". "}
          {s(lastName).trim().capitalize().value()}
        </h1>
        <h3 className="title text-2xl text-white pt-1">
          {s(title).trim().capitalize().value()}
        </h3>
        <h5 className="city pt-1 text-white pl-1">
          {s(location).trim().capitalize().value()}
        </h5>
      </div>
    );
  }
}
