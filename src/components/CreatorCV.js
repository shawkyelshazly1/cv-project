import React, { Component } from "react";
import MainInfo from "./creator components/MainInfo";
import Education from "./creator components/Education";
import Experience from "./creator components/Experience";

export default class CreatorCV extends Component {
  render() {
    const { education, experience } = this.props.cv;

    const educationItems = education.map((educationItem) => (
      <Education
        onChangeEdu={this.props.onChangeEducation}
        id={educationItem.id}
        key={educationItem.id}
        education={educationItem}
        onDelete={this.props.onDeleteEducation}
      />
    ));

    const experienceItems = experience.map((experienceItem) => (
      <Experience
        onChangeExp={this.props.onChangeExperience}
        id={experienceItem.id}
        key={experienceItem.id}
        experience={experienceItem}
        onDelete={this.props.onDeleteExperience}
      />
    ));
    return (
      <div className=" bg-gray-400 flex-1 flex flex-col p-5 gap-5">
        <MainInfo
          onChange={this.props.onChangePeronalInfo}
          personalInfo={this.props.cv.personalInfo}
        />
        <h1 className="font-bold text-2xl">Experience Info</h1>
        <hr className="w-1/5" />
        {experienceItems}
        <input
          type="button"
          value="Add New Experience"
          className="bg-slate-800 pt-2 pb-2 pr-2 pl-2 rounded-xl w-4/6 cursor-pointer text-white font-medium text-l"
          onClick={this.props.onAddingNewExperience}
        />
        <h1 className="font-bold text-2xl">Education Info</h1>
        <hr className="w-1/5" />
        {educationItems}
        <input
          type="button"
          value="Add New Education"
          className="bg-slate-800 pt-2 pb-2 pr-2 pl-2 rounded-xl w-4/6 cursor-pointer text-white font-medium text-l"
          onClick={this.props.onAddingNewEducation}
        />
      </div>
    );
  }
}
