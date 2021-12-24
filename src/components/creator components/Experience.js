import Input from "../utils/Input";
import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    const { location, companyName, position, from, to, id } =
      this.props.experience;
    return (
      <div>
        <div className="flex flex-col items-start gap-3 ">
          <Input
            name="companyName"
            type="text"
            id="companyName"
            placeHolder="Company Name"
            value={companyName}
            onChange={(e) => {
              this.props.onChangeExp(e, id);
            }}
          />
          <Input
            name="position"
            type="text"
            id="position"
            placeHolder="Position"
            value={position}
            onChange={(e) => {
              this.props.onChangeExp(e, id);
            }}
          />
          <Input
            name="location"
            type="text"
            id="location"
            placeHolder="Location"
            value={location}
            onChange={(e) => {
              this.props.onChangeExp(e, id);
            }}
          />

          <Input
            name="from"
            type="number"
            id="from"
            placeHolder="From 'Year'"
            value={from}
            onChange={(e) => {
              this.props.onChangeExp(e, id);
            }}
          />
          <Input
            name="to"
            type="text"
            id="to"
            placeHolder="To 'Year'"
            value={to}
            onChange={(e) => {
              this.props.onChangeExp(e, id);
            }}
          />

          <input
            type="button"
            value="Delete"
            className="bg-red-500 pt-2 pb-2 pr-2 pl-2 rounded-xl w-4/6 cursor-pointer text-white font-medium text-l"
            onClick={() => {
              this.props.onDelete(id);
            }}
          />
        </div>
      </div>
    );
  }
}
