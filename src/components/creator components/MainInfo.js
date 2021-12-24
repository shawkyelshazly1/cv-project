import React, { Component } from "react";
import Input from "../utils/Input";

export default class MainInfo extends Component {
  render() {
    return (
      <div>
        <h1 className="font-bold text-2xl">Personal Info</h1>
        <hr className="w-1/5" />
        <div className="flex flex-col items-start gap-3 pt-3">
          <Input
            onChange={this.props.onChange}
            name="firstName"
            type="text"
            id="firstName"
            placeHolder="First Name"
            value={this.props.personalInfo.firstName}
          />
          <Input
            onChange={this.props.onChange}
            name="middleName"
            type="text"
            id="middleName"
            placeHolder="Middle Name"
            value={this.props.personalInfo.middleName}
          />

          <Input
            onChange={this.props.onChange}
            name="lastName"
            type="text"
            id="lastName"
            placeHolder="Last Name"
            value={this.props.personalInfo.lastName}
          />
          <Input
            onChange={this.props.onChange}
            name="title"
            type="text"
            id="title"
            placeHolder="Title"
            value={this.props.personalInfo.title}
          />
          <Input
            onChange={this.props.onChange}
            name="location"
            type="text"
            id="location"
            placeHolder="Location"
            value={this.props.personalInfo.location}
          />
          <label className="bg-white pt-1 pb-1 pr-2 pl-2 rounded-l w-1/2 cursor-pointer">
            <input
              type="file"
              name="photo"
              id="photo"
              placeholder="Personal Photo"
              className="pt-1 pb-1 pr-2 pl-2 rounded-l w-1/2 hidden"
            />
            Personal Photo
          </label>
          <Input
            onChange={this.props.onChange}
            name="phoneNumber"
            type="number"
            id="phoneNumber"
            placeHolder="Phone Number"
            value={this.props.personalInfo.phoneNumber}
          />
          <Input
            onChange={this.props.onChange}
            name="email"
            type="email"
            id="email"
            placeHolder="Email Address"
            value={this.props.personalInfo.email}
          />
        </div>
      </div>
    );
  }
}
