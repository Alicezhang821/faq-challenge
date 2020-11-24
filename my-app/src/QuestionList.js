import "./App.css";
import arrow from "./icon-arrow-down.svg";
import React, { Component } from "react";
import props from "prop-types";
class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = { hide: false };
    console.log(this.state.hide);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({ hide: !prevState.hide }));
    console.log(this.state.hide);
  }
  render() {
    return (
      <div className={this.state.hide ? "questionBold" : "question"}>
        {this.props.text}
        <button className="Btn" onClick={this.handleClick}>
          <img src={arrow} className={this.state.hide ? "down" : "none"} />
        </button>
        <div
          className="Ans"
          style={{ display: this.state.hide ? "block" : "none" }}
        >
          {this.props.answer}
        </div>
        <hr />
      </div>
    );
  }
}
export default QuestionList;
