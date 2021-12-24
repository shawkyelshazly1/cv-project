import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import MainInfo from "./MainInfo";

export default class RightBar extends Component {
  render() {
    const experienceItems = this.props.cv.experience.map((experienceItem) => (
      <Experience
        id={experienceItem.id}
        key={experienceItem.id}
        experience={experienceItem}
      />
    ));
    const educationItems = this.props.cv.education.map((educationItem) => (
      <Education
        id={educationItem.id}
        key={educationItem.id}
        education={educationItem}
      />
    ));

    return (
      <div className="flex-1 rightBar flex bg-gray-300 flex-col">
        <MainInfo personalInfo={this.props.cv.personalInfo} />
        <div className="p-5">
          <div className="experience pt-2 flex flex-col">
            <h1 className=" text-xl font-bold">Experience</h1>
            <hr className="w-1/5" />
            <div className="flex flex-col gap-5 pt-4">{experienceItems}</div>
          </div>
          <div className="education pt-5 flex flex-col">
            <h1 className=" text-xl font-bold">Education</h1>
            <hr className="w-1/5" />
            <div className="flex flex-col gap-5 pt-4">{educationItems}</div>
          </div>
        </div>
      </div>
    );
  }
}
