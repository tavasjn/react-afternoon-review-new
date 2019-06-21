import React, { Component } from "react";
import data from "../data";
import ButtonBar from "./ButtonBar";

class MainContent extends Component {
  constructor() {
    super();

    this.state = {
      i: 0,
      list: data,
      edit: false
    };
  }

  handleNext = () => {
    console.log("hit function", this.state.i);
    let iCopy = this.state.i;
    if (this.state.i === this.state.list.length - 1) {
      this.setState({
        i: 0
      });
    } else {
      this.setState({
        i: iCopy + 1
      });
    }
  };

  handlePrevious = () => {
    let iCopy = this.state.i;
    if (this.state.i === 0) {
      this.setState({
        i: 24
      });
    } else {
      this.setState({
        i: iCopy - 1
      });
    }
  };

  // handleChange = () => {
  //   this.setState({
  //     list:
  //   })
  // }

  handleEdit = () => {
    this.setState({ edit: !this.state.edit });
    console.log("hit function");
  };
  handleNew = () => {
    console.log("hit function");
  };
  handleDelete = () => {
    console.log("hit function");
  };

  render() {
    return (
      <div id="main-content-container">
        <div id="page-number">{this.state.i + 1}/25</div>
        <div id="content-container">
          <h2 id="name">
            {this.state.list[this.state.i].name.first}{" "}
            {this.state.list[this.state.i].name.last}
          </h2>
          <div id="demographics-container">
            <div className="demographics-information">
              <h4>From:</h4>
              <p>
                {this.state.list[this.state.i].city},{" "}
                {this.state.list[this.state.i].country}
              </p>
            </div>
            <div className="demographics-information">
              <h4>Job Title:</h4>
              <p>{this.state.list[this.state.i].title}</p>
            </div>
            <div className="demographics-information">
              <h4>Employer:</h4>
              <p>{this.state.list[this.state.i].employer}</p>
            </div>
          </div>
          <div id="favorites-container">
            <h4>Favorite Movies:</h4>
            <ol>
              <li>{this.state.list[this.state.i].favoriteMovies[0]}</li>
              <li>{this.state.list[this.state.i].favoriteMovies[1]}</li>
              <li>{this.state.list[this.state.i].favoriteMovies[2]}</li>
            </ol>
          </div>
        </div>
        <ButtonBar
          handleNext={this.handleNext}
          handlePrevious={this.handlePrevious}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleNew={this.handleNew}
        />
      </div>
    );
  }
}

export default MainContent;
