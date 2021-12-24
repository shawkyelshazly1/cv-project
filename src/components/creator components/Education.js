import React, { Component } from "react";
import Input from "../utils/Input";

export default class Education extends Component {
  render() {
    const { schoolName, subject, from, to, degree, id } = this.props.education;
    return (
      <div>
        <div className="flex flex-col items-start gap-3 ">
          <Input
            name="schoolName"
            type="text"
            id="schoolName"
            placeHolder="School Name"
            value={schoolName}
            onChange={(e) => {
              this.props.onChangeEdu(e, id);
            }}
          />
          <Input
            name="degree"
            type="text"
            id="degree"
            placeHolder="Degree"
            value={degree}
            onChange={(e) => {
              this.props.onChangeEdu(e, id);
            }}
          />
          <Input
            name="subject"
            type="text"
            id="subject"
            placeHolder="Subject"
            value={subject}
            onChange={(e) => {
              this.props.onChangeEdu(e, id);
            }}
          />
          <Input
            name="from"
            type="number"
            id="from"
            placeHolder="From 'Year'"
            value={from}
            onChange={(e) => {
              this.props.onChangeEdu(e, id);
            }}
          />
          <Input
            name="to"
            type="text"
            id="to"
            placeHolder="To 'Year'"
            value={to}
            onChange={(e) => {
              this.props.onChangeEdu(e, id);
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
