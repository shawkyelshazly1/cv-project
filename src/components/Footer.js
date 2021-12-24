import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="absolute  inset-x-0 bottom-0 left-0 bg-gray-700 py-2  flex w-full  items-center justify-center">
        <h6 className="text-white text-xl">
          Copyright &copy; 2021 Shawky Elshazly
          <i className="fab fa-github text-2xl ml-2"></i>
        </h6>
      </footer>
    );
  }
}
