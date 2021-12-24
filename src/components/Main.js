import React, { Component } from "react";
import CreatorCV from "./CreatorCV";
import FinalCV from "./FinalCV";
import emptyCV from "./utils/emptyCV";
import { v4 as uuidv4 } from "uuid";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      cv: {
        personalInfo: emptyCV.personalInfo,
        experience: emptyCV.experience,
        education: emptyCV.education,
      },
    };
  }

  onchangePersonlInfo = (e) => {
    const { name, value } = e.target;
    const personalInfo = { ...this.state.cv.personalInfo, [name]: value };
    const editcv = { ...this.state.cv, personalInfo: personalInfo };
    this.setState({ cv: editcv });
  };

  onChangeEducation = (e, id) => {
    const { name, value } = e.target;

    let changedEducation = this.state.cv.education.find(
      (educationItem) => educationItem.id === id
    );
    changedEducation = { ...changedEducation, [name]: value };

    const education = this.state.cv.education.map((educationItem) => {
      return educationItem.id === id ? changedEducation : educationItem;
    });

    const editcv = { ...this.state.cv, education: education };
    this.setState({ cv: editcv });
  };

  onChangeExperience = (e, id) => {
    const { name, value } = e.target;
    let changedExperience = this.state.cv.experience.find(
      (experienceItem) => experienceItem.id === id
    );
    changedExperience = { ...changedExperience, [name]: value };
    const experience = this.state.cv.experience.map((experienceItem) => {
      return experienceItem.id === id ? changedExperience : experienceItem;
    });

    const editcv = { ...this.state.cv, experience: experience };
    this.setState({ cv: editcv });
  };

  handleAddingNewExperience = () => {
    let newExperience = {
      id: uuidv4(),
      from: "",
      to: "",
      position: "",
      companyName: "",
      location: "",
    };

    const editcv = {
      ...this.state.cv,
      experience: [...this.state.cv.experience, newExperience],
    };
    this.setState({ cv: editcv });
  };

  handleAddingNewEducation = () => {
    let newEducation = {
      id: uuidv4(),
      from: "",
      to: "",
      schoolName: "",
      degree: "",
      subject: "",
    };

    let editedCV = {
      ...this.state.cv,
      education: [...this.state.cv.education, newEducation],
    };
    this.setState({ cv: editedCV });
  };

  handleDeletingEducation = (id) => {
    let newEducation = this.state.cv.education.filter(
      (education) => education.id !== id
    );

    let editedCV = { ...this.state.cv, education: newEducation };
    this.setState({ cv: editedCV });
  };

  handleDeletingExperience = (id) => {
    let newExperience = this.state.cv.experience.filter(
      (experience) => experience.id !== id
    );

    let editedCV = { ...this.state.cv, experience: newExperience };
    this.setState({ cv: editedCV });
  };

  render() {
    return (
      <div className="flex flex-1 justify-between gap-4 p-3 flex-col lg:flex-row xl:flex-row xl:items-start lg:items-start h-100">
        <CreatorCV
          cv={this.state.cv}
          onChangePeronalInfo={(e) => {
            this.onchangePersonlInfo(e);
          }}
          onChangeEducation={(e, id) => {
            this.onChangeEducation(e, id);
          }}
          onChangeExperience={(e, id) => {
            this.onChangeExperience(e, id);
          }}
          onAddingNewExperience={this.handleAddingNewExperience}
          onAddingNewEducation={this.handleAddingNewEducation}
          onDeleteEducation={this.handleDeletingEducation}
          onDeleteExperience={this.handleDeletingExperience}
        />
        <FinalCV cv={this.state.cv} ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}
