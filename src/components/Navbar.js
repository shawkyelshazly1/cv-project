import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="flex px-6 py-4  items-center justify-center flex-wrap bg-cyan-800">
        <h1 className="text-white font-bold text-4xl">
          <i className="fas fa-briefcase"></i> CV Generator
        </h1>
      </nav>
    );
  }
}
