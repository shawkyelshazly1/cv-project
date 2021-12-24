import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <input
        type={this.props.type}
        onChange={this.props.onChange}
        name={this.props.name}
        id={this.props.id}
        placeholder={this.props.placeHolder}
        className="pt-1 pb-1 pr-2 pl-2 rounded-l w-4/6"
        value={this.props.value}
      />
    );
  }
}
